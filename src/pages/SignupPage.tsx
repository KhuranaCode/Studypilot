import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  BookOpen,
  CircleAlert,
  User,
  Mail,
  Lock,
  EyeOff,
  Eye,
  Target,
  ArrowRight,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';
import { ThreeDSceneCanvas } from '../components/3d/ThreeDSceneCanvas';
import { Tilt3DCard } from '../components/3d/Tilt3DCard';
import { ThreeDButton } from '../components/3d/ThreeDButton';
import { Input } from '../components/ui/Input';

export const SignupPage: React.FC = () => {
  const navigate = useNavigate();
  const { showToast, updatePreferences } = useApp();
  const { signUp, signInWithGoogle, isFirebaseReady, getFriendlyErrorMessage } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [goal, setGoal] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(true);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Please enter your full name');
      return;
    }
    if (!email.trim()) {
      setError('Please enter your student email');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    if (!acceptedTerms) {
      setError('Please accept the Terms of Service to continue');
      return;
    }

    setIsLoading(true);
    try {
      if (isFirebaseReady) {
        try {
          await signUp(email, password, name, goal);
          showToast('Account Created!', `Welcome to StudyPilot, ${name.trim()}!`, 'success');
        } catch (err: any) {
          if (
            err?.code === 'auth/api-key-not-valid' ||
            err?.message?.includes('api-key-not-valid')
          ) {
            await signUp(email, password, name, goal);
            updatePreferences({
              name: name.trim(),
              email: email.trim(),
              targetExamOrGoal: goal.trim() || "Dean's List / Academic Mastery",
            });
            showToast('Sandbox Account Ready', `Welcome to StudyPilot, ${name.trim()}!`, 'success');
          } else {
            throw err;
          }
        }
      } else {
        await signUp(email, password, name, goal);
        updatePreferences({
          name: name.trim(),
          email: email.trim(),
          targetExamOrGoal: goal.trim() || "Dean's List / Academic Mastery",
        });
        showToast('Sandbox Account Ready', `Welcome to StudyPilot, ${name.trim()}!`, 'success');
      }
      navigate('/dashboard');
    } catch (err) {
      setError(getFriendlyErrorMessage(err));
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    if (!isFirebaseReady) {
      showToast('Firebase Sandbox', 'Google Auth connects with valid Firebase credentials in .env.', 'info');
      navigate('/dashboard');
      return;
    }
    setIsLoading(true);
    try {
      await signInWithGoogle();
      showToast('Signed Up with Google', 'Welcome to StudyPilot!', 'success');
      navigate('/dashboard');
    } catch (err) {
      setError(getFriendlyErrorMessage(err));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-pilot-pale flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      <ThreeDSceneCanvas
        className="fixed inset-0 pointer-events-none z-0 opacity-25"
        intensity="subtle"
        particleCount={80}
      />

      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center relative z-10">
        <Link to="/" className="inline-flex items-center gap-2.5 mb-4 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4A62B6] to-[#27356B] flex items-center justify-center text-white shadow-3d-btn border-t border-white/30 group-hover:scale-105 transition-transform">
            <BookOpen className="w-5 h-5 text-[#F2F3F5]" />
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-slate-900">StudyPilot</span>
        </Link>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">Start Planning Smarter</h2>
        <p className="mt-1.5 text-xs text-slate-600">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-pilot-deep hover:text-pilot-periwinkle">
            Sign in here
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4 sm:px-0 relative z-10">
        <Tilt3DCard
          maxTilt={4}
          className="p-8 shadow-elevated bg-white border border-pilot-soft/80 rounded-3xl"
        >
          {error && (
            <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-center gap-2">
              <CircleAlert className="w-4 h-4 shrink-0 text-rose-500" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Full Name"
              type="text"
              placeholder="Alex Chen"
              value={name}
              onChange={(e) => setName(e.target.value)}
              leftIcon={<User className="w-4 h-4" />}
              required
            />
            <Input
              label="Student Email"
              type="email"
              autoComplete="email"
              placeholder="alex.chen@university.edu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              leftIcon={<Mail className="w-4 h-4" />}
              required
            />
            <Input
              label="Password (min 6 characters)"
              type={showPassword ? 'text' : 'password'}
              autoComplete="new-password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              leftIcon={<Lock className="w-4 h-4" />}
              rightIcon={
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-slate-400 hover:text-slate-600"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              }
              required
            />
            <Input
              label="Primary Academic Goal or Target Exam"
              type="text"
              placeholder="e.g. Fall Semester Finals, MCAT, SAT, GRE, 3.8+ GPA"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              leftIcon={<Target className="w-4 h-4" />}
              helperText="StudyPilot AI customizes study recommendations to this milestone."
            />

            <div className="flex items-start gap-2 pt-1">
              <input
                type="checkbox"
                id="termsCheck"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
                className="h-4 w-4 mt-0.5 rounded border-pilot-soft text-pilot-deep focus:ring-pilot-periwinkle cursor-pointer"
              />
              <label htmlFor="termsCheck" className="text-xs text-slate-600 cursor-pointer leading-tight">
                I agree to the StudyPilot Academic Honor Code, Terms of Service, and Privacy Policy.
              </label>
            </div>

            <ThreeDButton
              type="submit"
              variant="metallic-deep"
              className="w-full mt-2"
              size="lg"
              isLoading={isLoading}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Create Free Account
            </ThreeDButton>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-3 text-slate-400 font-semibold tracking-wider font-mono">
                  Or sign up with
                </span>
              </div>
            </div>
            <div className="mt-4">
              <button
                type="button"
                onClick={handleGoogleSignUp}
                className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-pilot-soft/80 rounded-xl shadow-3d-secondary text-xs font-semibold text-slate-700 bg-white hover:bg-pilot-pale/50 transition-colors focus:outline-none focus:ring-2 focus:ring-pilot-periwinkle"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span>Continue with Google</span>
              </button>
            </div>
          </div>
        </Tilt3DCard>
      </div>
    </div>
  );
};
