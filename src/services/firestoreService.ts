import {
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  Timestamp,
  type Unsubscribe,
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import { sanitizeText } from '../lib/security';
import {
  UserProfile,
  Subject,
  Task,
  StudySession,
  StudyPlan,
} from '../types';

// Helper to sanitize timestamps/dates
export const formatFirestoreDate = (timestampOrString: unknown): string => {
  if (!timestampOrString) return new Date().toISOString();
  if (timestampOrString instanceof Timestamp) {
    return timestampOrString.toDate().toISOString();
  }
  if (typeof timestampOrString === 'object' && 'toDate' in (timestampOrString as any)) {
    return (timestampOrString as any).toDate().toISOString();
  }
  return String(timestampOrString);
};

// -----------------------------------------------------------------
// USER PROFILE SERVICE
// -----------------------------------------------------------------
export const getUserProfileDoc = async (userId: string): Promise<UserProfile | null> => {
  if (!db) return null;
  const userRef = doc(db, 'users', userId);
  const snap = await getDoc(userRef);
  if (!snap.exists()) return null;
  const data = snap.data();
  return {
    id: snap.id,
    displayName: sanitizeText(data.displayName || 'Student', 60),
    email: data.email || '',
    role: (data.role as 'student' | 'admin') || 'student',
    timezone: data.timezone || 'America/New_York (EST, UTC-5)',
    studyGoal: sanitizeText(data.studyGoal || "Dean's List (3.8+ GPA)", 120),
    dailyStudyLimitMinutes: data.dailyStudyLimitMinutes || 240,
    preferredSessionMinutes: data.preferredSessionMinutes || 45,
    breakDurationMinutes: data.breakDurationMinutes || 5,
    longBreakMinutes: data.longBreakMinutes || 15,
    theme: data.theme || 'light',
    soundEnabled: data.soundEnabled !== false,
    emailNotifications: data.emailNotifications !== false,
    onboardingCompleted: data.onboardingCompleted ?? true,
    createdAt: formatFirestoreDate(data.createdAt),
    updatedAt: formatFirestoreDate(data.updatedAt),
  };
};

export const initializeUserProfile = async (
  userId: string,
  initialData: Partial<UserProfile>
): Promise<UserProfile> => {
  if (!db) throw new Error('Firestore is not initialized');
  const userRef = doc(db, 'users', userId);

  const profile: Record<string, any> = {
    displayName: sanitizeText(initialData.displayName || 'Student', 60),
    email: initialData.email || '',
    role: initialData.role || 'student', // Public signup defaults to student
    timezone: initialData.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone || 'America/New_York (EST, UTC-5)',
    studyGoal: sanitizeText(initialData.studyGoal || "Dean's List / Academic Excellence", 120),
    dailyStudyLimitMinutes: initialData.dailyStudyLimitMinutes || 240,
    preferredSessionMinutes: initialData.preferredSessionMinutes || 45,
    breakDurationMinutes: initialData.breakDurationMinutes || 5,
    longBreakMinutes: initialData.longBreakMinutes || 15,
    theme: initialData.theme || 'light',
    soundEnabled: initialData.soundEnabled !== false,
    emailNotifications: initialData.emailNotifications !== false,
    onboardingCompleted: initialData.onboardingCompleted ?? false,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };

  await setDoc(userRef, profile, { merge: true });

  return {
    id: userId,
    ...(profile as any),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
};

export const updateUserProfileDoc = async (
  userId: string,
  updates: Partial<UserProfile>
): Promise<void> => {
  if (!db) return;
  const userRef = doc(db, 'users', userId);
  
  const sanitizedUpdates: Record<string, any> = { ...updates };
  if (updates.displayName !== undefined) {
    sanitizedUpdates.displayName = sanitizeText(updates.displayName, 60);
  }
  if (updates.studyGoal !== undefined) {
    sanitizedUpdates.studyGoal = sanitizeText(updates.studyGoal, 120);
  }

  await updateDoc(userRef, {
    ...sanitizedUpdates,
    updatedAt: serverTimestamp(),
  });
};

// -----------------------------------------------------------------
// SUBJECTS SERVICE: users/{userId}/subjects
// -----------------------------------------------------------------
export const subscribeSubjects = (
  userId: string,
  onData: (subjects: Subject[]) => void,
  onError?: (err: Error) => void
): Unsubscribe => {
  if (!db) {
    onData([]);
    return () => {};
  }

  const subjectsCol = collection(db, 'users', userId, 'subjects');
  const q = query(subjectsCol, orderBy('createdAt', 'desc'));

  return onSnapshot(
    q,
    (snapshot) => {
      const items: Subject[] = snapshot.docs.map((d) => {
        const val = d.data();
        return {
          id: d.id,
          name: sanitizeText(val.name || '', 100),
          code: sanitizeText(val.code || 'CRS', 20),
          color: val.color || '#3D52A0',
          bgLight: val.bgLight || 'bg-slate-50',
          textLight: val.textLight || 'text-slate-700',
          borderColor: val.borderColor || 'border-slate-200',
          difficulty: val.difficulty || 'medium',
          targetHours: Number(val.targetHours) || 15,
          totalHoursStudied: Number(val.totalHoursStudied) || 0,
          createdAt: formatFirestoreDate(val.createdAt),
          updatedAt: formatFirestoreDate(val.updatedAt),
        };
      });
      onData(items);
    },
    (error) => {
      console.error('Error fetching subjects:', error);
      if (onError) onError(error);
    }
  );
};

export const createSubjectDoc = async (
  userId: string,
  subject: Omit<Subject, 'id'>
): Promise<string> => {
  if (!db) throw new Error('Firestore not initialized');
  const col = collection(db, 'users', userId, 'subjects');
  const docRef = doc(col);
  
  const sanitizedSubject = {
    ...subject,
    name: sanitizeText(subject.name, 100),
    code: sanitizeText(subject.code, 20),
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };

  await setDoc(docRef, sanitizedSubject);
  return docRef.id;
};

export const updateSubjectDoc = async (
  userId: string,
  subject: Subject
): Promise<void> => {
  if (!db) return;
  const docRef = doc(db, 'users', userId, 'subjects', subject.id);
  
  const sanitizedSubject = {
    ...subject,
    name: sanitizeText(subject.name, 100),
    code: sanitizeText(subject.code, 20),
    updatedAt: serverTimestamp(),
  };

  await updateDoc(docRef, sanitizedSubject);
};

export const deleteSubjectDoc = async (
  userId: string,
  subjectId: string
): Promise<void> => {
  if (!db) return;
  const docRef = doc(db, 'users', userId, 'subjects', subjectId);
  await deleteDoc(docRef);
};

// -----------------------------------------------------------------
// TASKS SERVICE: users/{userId}/tasks
// -----------------------------------------------------------------
export const subscribeTasks = (
  userId: string,
  onData: (tasks: Task[]) => void,
  onError?: (err: Error) => void
): Unsubscribe => {
  if (!db) {
    onData([]);
    return () => {};
  }

  const tasksCol = collection(db, 'users', userId, 'tasks');
  const q = query(tasksCol, orderBy('dueDate', 'asc'));

  return onSnapshot(
    q,
    (snapshot) => {
      const items: Task[] = snapshot.docs.map((d) => {
        const val = d.data();
        return {
          id: d.id,
          title: sanitizeText(val.title || '', 150),
          description: sanitizeText(val.description || '', 500),
          subjectId: val.subjectId || '',
          dueDate: val.dueDate || '',
          priority: val.priority || 'medium',
          estimatedMinutes: Number(val.estimatedMinutes) || 45,
          completed: Boolean(val.completed),
          completedAt: val.completedAt ? formatFirestoreDate(val.completedAt) : undefined,
          isExam: Boolean(val.isExam),
          createdAt: formatFirestoreDate(val.createdAt),
          updatedAt: formatFirestoreDate(val.updatedAt),
        };
      });
      onData(items);
    },
    (error) => {
      console.error('Error fetching tasks:', error);
      if (onError) onError(error);
    }
  );
};

export const createTaskDoc = async (
  userId: string,
  task: Omit<Task, 'id'>
): Promise<string> => {
  if (!db) throw new Error('Firestore not initialized');
  const col = collection(db, 'users', userId, 'tasks');
  const docRef = doc(col);

  const sanitizedTask = {
    ...task,
    title: sanitizeText(task.title, 150),
    description: task.description ? sanitizeText(task.description, 500) : '',
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };

  await setDoc(docRef, sanitizedTask);
  return docRef.id;
};

export const updateTaskDoc = async (
  userId: string,
  task: Task
): Promise<void> => {
  if (!db) return;
  const docRef = doc(db, 'users', userId, 'tasks', task.id);

  const sanitizedTask = {
    ...task,
    title: sanitizeText(task.title, 150),
    description: task.description ? sanitizeText(task.description, 500) : '',
    updatedAt: serverTimestamp(),
  };

  await updateDoc(docRef, sanitizedTask);
};

export const deleteTaskDoc = async (
  userId: string,
  taskId: string
): Promise<void> => {
  if (!db) return;
  const docRef = doc(db, 'users', userId, 'tasks', taskId);
  await deleteDoc(docRef);
};

// -----------------------------------------------------------------
// STUDY SESSIONS SERVICE: users/{userId}/studySessions
// -----------------------------------------------------------------
export const subscribeStudySessions = (
  userId: string,
  onData: (sessions: StudySession[]) => void,
  onError?: (err: Error) => void
): Unsubscribe => {
  if (!db) {
    onData([]);
    return () => {};
  }

  const sessionsCol = collection(db, 'users', userId, 'studySessions');
  const q = query(sessionsCol, orderBy('date', 'asc'));

  return onSnapshot(
    q,
    (snapshot) => {
      const items: StudySession[] = snapshot.docs.map((d) => {
        const val = d.data();
        return {
          id: d.id,
          title: sanitizeText(val.title || '', 150),
          subjectId: val.subjectId || '',
          taskId: val.taskId || undefined,
          date: val.date || '',
          startTime: val.startTime || '10:00',
          endTime: val.endTime || '11:30',
          durationMinutes: Number(val.durationMinutes) || 60,
          completed: Boolean(val.completed),
          notes: val.notes ? sanitizeText(val.notes, 500) : undefined,
          isAiGenerated: Boolean(val.isAiGenerated),
          planId: val.planId || undefined,
          startedAt: val.startedAt ? formatFirestoreDate(val.startedAt) : undefined,
          endedAt: val.endedAt ? formatFirestoreDate(val.endedAt) : undefined,
          createdAt: formatFirestoreDate(val.createdAt),
          updatedAt: formatFirestoreDate(val.updatedAt),
        };
      });
      onData(items);
    },
    (error) => {
      console.error('Error fetching sessions:', error);
      if (onError) onError(error);
    }
  );
};

export const createStudySessionDoc = async (
  userId: string,
  session: Omit<StudySession, 'id'>,
  idempotencyId?: string
): Promise<string> => {
  if (!db) throw new Error('Firestore not initialized');
  const col = collection(db, 'users', userId, 'studySessions');
  const docRef = idempotencyId ? doc(col, idempotencyId) : doc(col);

  const sanitizedSession = {
    ...session,
    title: sanitizeText(session.title, 150),
    notes: session.notes ? sanitizeText(session.notes, 500) : undefined,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };

  await setDoc(docRef, sanitizedSession);
  return docRef.id;
};

export const updateStudySessionDoc = async (
  userId: string,
  session: StudySession
): Promise<void> => {
  if (!db) return;
  const docRef = doc(db, 'users', userId, 'studySessions', session.id);

  const sanitizedSession = {
    ...session,
    title: sanitizeText(session.title, 150),
    notes: session.notes ? sanitizeText(session.notes, 500) : undefined,
    updatedAt: serverTimestamp(),
  };

  await updateDoc(docRef, sanitizedSession);
};

export const deleteStudySessionDoc = async (
  userId: string,
  sessionId: string
): Promise<void> => {
  if (!db) return;
  const docRef = doc(db, 'users', userId, 'studySessions', sessionId);
  await deleteDoc(docRef);
};

// -----------------------------------------------------------------
// STUDY PLANS SERVICE: users/{userId}/studyPlans
// -----------------------------------------------------------------
export const subscribeStudyPlans = (
  userId: string,
  onData: (plans: StudyPlan[]) => void,
  onError?: (err: Error) => void
): Unsubscribe => {
  if (!db) {
    onData([]);
    return () => {};
  }

  const plansCol = collection(db, 'users', userId, 'studyPlans');
  const q = query(plansCol, orderBy('weekStart', 'desc'));

  return onSnapshot(
    q,
    (snapshot) => {
      const items: StudyPlan[] = snapshot.docs.map((d) => {
        const val = d.data();
        return {
          id: d.id,
          title: sanitizeText(val.title || 'Weekly Study Plan', 100),
          weekStart: val.weekStart || '',
          weekEnd: val.weekEnd || '',
          status: val.status || 'active',
          summary: sanitizeText(val.summary || '', 300),
          assumptions: Array.isArray(val.assumptions) ? val.assumptions.map((a: string) => sanitizeText(a, 150)) : [],
          warnings: Array.isArray(val.warnings) ? val.warnings.map((w: string) => sanitizeText(w, 150)) : [],
          dailyTotals: val.dailyTotals || {},
          sessions: val.sessions || [],
          unscheduledTasks: val.unscheduledTasks || [],
          suggestions: Array.isArray(val.suggestions) ? val.suggestions.map((s: string) => sanitizeText(s, 150)) : [],
          source: val.source || 'ai',
          generatedAt: formatFirestoreDate(val.generatedAt),
          createdAt: formatFirestoreDate(val.createdAt),
          updatedAt: formatFirestoreDate(val.updatedAt),
        };
      });
      onData(items);
    },
    (error) => {
      console.error('Error fetching plans:', error);
      if (onError) onError(error);
    }
  );
};

export const saveStudyPlanDoc = async (
  userId: string,
  plan: Omit<StudyPlan, 'id'>,
  customPlanId?: string
): Promise<string> => {
  if (!db) throw new Error('Firestore not initialized');
  const col = collection(db, 'users', userId, 'studyPlans');
  const planRef = customPlanId ? doc(col, customPlanId) : doc(col);

  const sanitizedPlan = {
    ...plan,
    title: sanitizeText(plan.title, 100),
    summary: sanitizeText(plan.summary, 300),
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };

  await setDoc(planRef, sanitizedPlan);

  // Sync the plan's sessions to studySessions subcollection
  if (plan.sessions && plan.sessions.length > 0) {
    const sessionsCol = collection(db, 'users', userId, 'studySessions');
    for (const session of plan.sessions) {
      const sessRef = doc(sessionsCol, session.id);
      await setDoc(
        sessRef,
        {
          ...session,
          title: sanitizeText(session.title, 150),
          notes: session.notes ? sanitizeText(session.notes, 500) : undefined,
          planId: planRef.id,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        },
        { merge: true }
      );
    }
  }

  return planRef.id;
};
