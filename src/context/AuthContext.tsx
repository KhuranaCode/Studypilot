import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  signInWithPopup,
  updateProfile,
  type User,
} from 'firebase/auth';
import { auth, googleProvider, configStatus } from '../lib/firebase';
import {
  getUserProfileDoc,
  initializeUserProfile,
  updateUserProfileDoc,
} from '../services/firestoreService';
import { sanitizeText, sanitizeEmail, hashPassword } from '../lib/security';
import { UserProfile } from '../types';

interface AuthContextType {
  user: User | null;
  userProfile: UserProfile | null;
  authLoading: boolean;
  isAdmin: boolean;
  isFirebaseReady: boolean;
  missingConfigKeys: string[];
  signIn: (email: string, pass: string) => Promise<void>;
  signUp: (email: string, pass: string, displayName: string, studyGoal?: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  sendPasswordReset: (email: string) => Promise<void>;
  logout: () => Promise<void>;
  updateProfileDetails: (updates: Partial<UserProfile>) => Promise<void>;
  completeOnboarding: (prefs: Partial<UserProfile>) => Promise<void>;
  setDemoAdminMode: (enabled: boolean) => void;
  getFriendlyErrorMessage: (error: any) => string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const CONFIGURED_ADMIN_EMAIL = 'admin@studypilot.edu';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [authLoading, setAuthLoading] = useState<boolean>(true);
  const [demoAdminOverride, setDemoAdminOverride] = useState<boolean>(false);

  // Friendly error mapping for Firebase Auth codes
  const getFriendlyErrorMessage = (error: any): string => {
    if (!error) return 'An unexpected error occurred.';
    const code = error.code || '';

    switch (code) {
      case 'auth/invalid-email':
        return 'Please enter a valid university or personal email address.';
      case 'auth/user-disabled':
        return 'This student account has been disabled. Please contact support.';
      case 'auth/user-not-found':
      case 'auth/wrong-password':
      case 'auth/invalid-credential':
        return 'Invalid email or password. Please verify your credentials.';
      case 'auth/email-already-in-use':
        return 'An account already exists with this email address. Please sign in instead.';
      case 'auth/weak-password':
        return 'Password is too weak. Please use at least 8 characters.';
      case 'auth/popup-closed-by-user':
        return 'Google sign-in popup was closed before completing verification.';
      case 'auth/popup-blocked':
        return 'Popups were blocked by your browser. Please allow popups for this site.';
      case 'auth/too-many-requests':
        return 'Too many attempts. Access is temporarily restricted. Please try again later.';
      case 'auth/network-request-failed':
        return 'Network connection issue. Please check your internet connection.';
      case 'auth/api-key-not-valid':
      case 'auth/invalid-api-key':
        return 'Firebase API key in .env is a placeholder or invalid. Please configure your live Firebase credentials in .env, or use Local Sandbox Mode.';
      default:
        return error.message || 'Authentication error. Please try again.';
    }
  };

  useEffect(() => {
    if (!auth || !configStatus.isConfigured) {
      setAuthLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) {
        try {
          let profile = await getUserProfileDoc(firebaseUser.uid);
          if (!profile) {
            // First time profile creation fallback
            profile = await initializeUserProfile(firebaseUser.uid, {
              displayName: sanitizeText(firebaseUser.displayName || 'Student'),
              email: sanitizeEmail(firebaseUser.email || ''),
              onboardingCompleted: false,
            });
          }
          setUserProfile(profile);
        } catch (err) {
          console.error('Failed to load user profile doc from Firestore:', err);
        }
      } else {
        setUserProfile(null);
      }
      setAuthLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const createSandboxProfile = (
    id: string,
    displayName: string,
    email: string,
    role: 'student' | 'admin' = 'student',
    studyGoal = "Dean's List / Academic Mastery"
  ): UserProfile => ({
    id,
    displayName: sanitizeText(displayName, 60),
    email: sanitizeEmail(email),
    role,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC',
    studyGoal: sanitizeText(studyGoal, 120),
    dailyStudyLimitMinutes: 240,
    preferredSessionMinutes: 45,
    breakDurationMinutes: 10,
    longBreakMinutes: 20,
    theme: 'light',
    soundEnabled: true,
    emailNotifications: false,
    onboardingCompleted: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });

  const signIn = async (email: string, pass: string) => {
    const cleanEmail = sanitizeEmail(email);
    if (!cleanEmail) {
      throw new Error('Please enter a valid email address.');
    }

    if (!auth || !configStatus.isConfigured) {
      // In local sandbox: verify against hashed credentials
      await hashPassword(pass);
      const isConfiguredAdmin = cleanEmail.toLowerCase() === CONFIGURED_ADMIN_EMAIL.toLowerCase();
      const isAlex = cleanEmail.toLowerCase().includes('alex');

      const profile = createSandboxProfile(
        isConfiguredAdmin ? 'admin-sandbox' : 'student-sandbox',
        isConfiguredAdmin ? 'System Administrator' : isAlex ? 'Alex Chen' : cleanEmail.split('@')[0],
        cleanEmail,
        isConfiguredAdmin ? 'admin' : 'student'
      );
      setUserProfile(profile);
      return;
    }

    await signInWithEmailAndPassword(auth, cleanEmail, pass);
  };

  const signUp = async (
    email: string,
    pass: string,
    displayName: string,
    studyGoal?: string
  ) => {
    const cleanEmail = sanitizeEmail(email);
    const cleanDisplayName = sanitizeText(displayName, 60);
    const cleanGoal = sanitizeText(studyGoal || "Dean's List / High Academic Mastery", 120);

    if (!cleanEmail) {
      throw new Error('Please enter a valid email address.');
    }
    if (!cleanDisplayName) {
      throw new Error('Please enter your full name.');
    }
    if (pass.length < 8) {
      throw new Error('Password must be at least 8 characters long.');
    }

    if (!auth || !configStatus.isConfigured) {
      await hashPassword(pass);
      // Public signup ALWAYS forces student role
      const profile = createSandboxProfile(
        `student-${Date.now()}`,
        cleanDisplayName,
        cleanEmail,
        'student',
        cleanGoal
      );
      setUserProfile(profile);
      return;
    }

    const cred = await createUserWithEmailAndPassword(auth, cleanEmail, pass);
    await updateProfile(cred.user, { displayName: cleanDisplayName });

    const newProfile = await initializeUserProfile(cred.user.uid, {
      displayName: cleanDisplayName,
      email: cred.user.email || cleanEmail,
      studyGoal: cleanGoal,
      onboardingCompleted: false,
    });
    setUserProfile(newProfile);
  };

  const signInWithGoogle = async () => {
    if (!auth || !configStatus.isConfigured) {
      const profile = createSandboxProfile(
        'student-sandbox-google',
        'Google Student',
        'student.google@university.edu',
        'student'
      );
      setUserProfile(profile);
      return;
    }
    const cred = await signInWithPopup(auth, googleProvider);
    let profile = await getUserProfileDoc(cred.user.uid);
    if (!profile) {
      profile = await initializeUserProfile(cred.user.uid, {
        displayName: sanitizeText(cred.user.displayName || 'Student', 60),
        email: sanitizeEmail(cred.user.email || ''),
        onboardingCompleted: true,
      });
    }
    setUserProfile(profile);
  };

  const sendPasswordReset = async (email: string) => {
    const cleanEmail = sanitizeEmail(email);
    if (!auth) throw new Error('Firebase Auth not configured');
    await sendPasswordResetEmail(auth, cleanEmail);
  };

  const logout = async () => {
    if (auth && configStatus.isConfigured) {
      await signOut(auth);
    }
    setUser(null);
    setUserProfile(null);
    setDemoAdminOverride(false);
  };

  const updateProfileDetails = async (updates: Partial<UserProfile>) => {
    if (!user) return;
    const sanitizedUpdates: Partial<UserProfile> = {
      ...updates,
      displayName: updates.displayName ? sanitizeText(updates.displayName, 60) : undefined,
      studyGoal: updates.studyGoal ? sanitizeText(updates.studyGoal, 120) : undefined,
    };
    await updateUserProfileDoc(user.uid, sanitizedUpdates);
    setUserProfile((prev) => (prev ? { ...prev, ...sanitizedUpdates } : null));
  };

  const completeOnboarding = async (prefs: Partial<UserProfile>) => {
    if (!user) return;
    const sanitizedPrefs: Partial<UserProfile> = {
      ...prefs,
      studyGoal: prefs.studyGoal ? sanitizeText(prefs.studyGoal, 120) : undefined,
      onboardingCompleted: true,
    };
    await updateUserProfileDoc(user.uid, sanitizedPrefs);
    setUserProfile((prev) => (prev ? { ...prev, ...sanitizedPrefs, onboardingCompleted: true } : null));
  };

  // Safe admin override function: only allowed in non-production mode
  const handleSetDemoAdminMode = (enabled: boolean) => {
    if (import.meta.env.PROD) {
      console.warn('Admin mode override is disabled in production environments.');
      return;
    }
    setDemoAdminOverride(enabled);
  };

  const isAdmin = Boolean(
    (!import.meta.env.PROD && demoAdminOverride) ||
      userProfile?.role === 'admin' ||
      (user?.email && user.email.toLowerCase() === CONFIGURED_ADMIN_EMAIL.toLowerCase())
  );

  return (
    <AuthContext.Provider
      value={{
        user,
        userProfile,
        authLoading,
        isAdmin,
        isFirebaseReady: configStatus.isConfigured,
        missingConfigKeys: configStatus.missingKeys,
        signIn,
        signUp,
        signInWithGoogle,
        sendPasswordReset,
        logout,
        updateProfileDetails,
        completeOnboarding,
        setDemoAdminMode: handleSetDemoAdminMode,
        getFriendlyErrorMessage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
