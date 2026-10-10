import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { useAuth } from './AuthContext';
import {
  Subject,
  Task,
  StudySession,
  StudyPlan,
  UserPreferences,
  ActivityData,
  NotificationItem,
} from '../types';
import {
  INITIAL_SUBJECTS,
  INITIAL_TASKS,
  INITIAL_SESSIONS,
  INITIAL_PREFERENCES,
  INITIAL_ACTIVITY,
  INITIAL_NOTIFICATIONS,
} from '../data/mockData';
import {
  subscribeSubjects,
  createSubjectDoc,
  updateSubjectDoc,
  deleteSubjectDoc,
  subscribeTasks,
  createTaskDoc,
  updateTaskDoc,
  deleteTaskDoc,
  subscribeStudySessions,
  createStudySessionDoc,
  updateStudySessionDoc,
  deleteStudySessionDoc,
  subscribeStudyPlans,
  saveStudyPlanDoc,
} from '../services/firestoreService';

export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  type: 'success' | 'info' | 'warning' | 'error';
}

interface AppContextType {
  subjects: Subject[];
  tasks: Task[];
  sessions: StudySession[];
  savedPlans: StudyPlan[];
  preferences: UserPreferences;
  activityData: ActivityData[];
  notifications: NotificationItem[];
  toasts: ToastMessage[];
  dataLoading: boolean;
  showToast: (title: string, description?: string, type?: ToastMessage['type']) => void;
  dismissToast: (id: string) => void;
  // Subjects CRUD
  addSubject: (subject: Omit<Subject, 'id' | 'totalHoursStudied'>) => Promise<void>;
  updateSubject: (subject: Subject) => Promise<void>;
  deleteSubject: (id: string) => Promise<void>;
  // Tasks CRUD
  addTask: (task: Omit<Task, 'id'>) => Promise<void>;
  updateTask: (task: Task) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
  toggleTask: (id: string) => Promise<void>;
  // Sessions CRUD
  addSession: (session: Omit<StudySession, 'id'>) => Promise<void>;
  updateSession: (session: StudySession) => Promise<void>;
  deleteSession: (id: string) => Promise<void>;
  toggleSession: (id: string) => Promise<void>;
  recordCompletedTimerSession: (session: {
    subjectId: string;
    taskId?: string;
    durationMinutes: number;
    startedAt: string;
    endedAt: string;
    notes?: string;
  }) => Promise<void>;
  // Study Plans
  saveGeneratedPlan: (plan: StudyPlan) => Promise<string>;
  // Preferences
  updatePreferences: (newPrefs: Partial<UserPreferences>) => Promise<void>;
  // Notifications
  markNotificationRead: (id: string) => void;
  markAllNotificationsRead: () => void;
  // Timer active presets
  activeFocusSession: { subjectId: string; taskId?: string; sessionId?: string } | null;
  setActiveFocusSession: (val: { subjectId: string; taskId?: string; sessionId?: string } | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, userProfile, isFirebaseReady, updateProfileDetails } = useAuth();

  const [subjects, setSubjects] = useState<Subject[]>(INITIAL_SUBJECTS);
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  const [sessions, setSessions] = useState<StudySession[]>(INITIAL_SESSIONS);
  const [savedPlans, setSavedPlans] = useState<StudyPlan[]>([]);
  const [dataLoading, setDataLoading] = useState<boolean>(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [activeFocusSession, setActiveFocusSession] = useState<{ subjectId: string; taskId?: string; sessionId?: string } | null>(null);

  // In-flight guard to eliminate duplicate timer session creations
  const isSavingSessionRef = useRef<boolean>(false);

  // Map userProfile into preferences
  const preferences: UserPreferences = {
    name: userProfile?.displayName || user?.displayName || INITIAL_PREFERENCES.name,
    email: userProfile?.email || user?.email || INITIAL_PREFERENCES.email,
    targetExamOrGoal: userProfile?.studyGoal || INITIAL_PREFERENCES.targetExamOrGoal,
    dailyGoalHours: (userProfile?.dailyStudyLimitMinutes ? userProfile.dailyStudyLimitMinutes / 60 : INITIAL_PREFERENCES.dailyGoalHours),
    weeklyGoalHours: INITIAL_PREFERENCES.weeklyGoalHours,
    preferredFocusMinutes: userProfile?.preferredSessionMinutes || INITIAL_PREFERENCES.preferredFocusMinutes,
    breakDurationMinutes: userProfile?.breakDurationMinutes || INITIAL_PREFERENCES.breakDurationMinutes,
    longBreakMinutes: userProfile?.longBreakMinutes || INITIAL_PREFERENCES.longBreakMinutes,
    timezone: userProfile?.timezone || INITIAL_PREFERENCES.timezone,
    theme: userProfile?.theme || INITIAL_PREFERENCES.theme,
    soundEnabled: userProfile?.soundEnabled !== false,
    emailNotifications: userProfile?.emailNotifications !== false,
  };

  const [notifications, setNotifications] = useState<NotificationItem[]>(INITIAL_NOTIFICATIONS);
  const [activityData] = useState<ActivityData[]>(INITIAL_ACTIVITY);

  // Dynamically derive notifications from real upcoming deadlines and active course milestones
  useEffect(() => {
    const todayStr = new Date().toISOString().split('T')[0];
    const generatedNotifs: NotificationItem[] = [];

    // Overdue tasks
    const overdue = tasks.filter((t) => !t.completed && t.dueDate < todayStr);
    overdue.slice(0, 3).forEach((t) => {
      generatedNotifs.push({
        id: `notif-overdue-${t.id}`,
        title: `Overdue: ${t.title}`,
        message: `Deadline was ${t.dueDate}. Prioritize this milestone today.`,
        type: 'deadline',
        time: 'Urgent',
        read: false,
      });
    });

    // Due today
    const dueToday = tasks.filter((t) => !t.completed && t.dueDate === todayStr);
    dueToday.slice(0, 2).forEach((t) => {
      generatedNotifs.push({
        id: `notif-today-${t.id}`,
        title: `Due Today: ${t.title}`,
        message: `Estimated focus: ${t.estimatedMinutes} mins needed.`,
        type: 'deadline',
        time: 'Today',
        read: false,
      });
    });

    // Upcoming exams
    const exams = tasks.filter((t) => !t.completed && t.isExam);
    exams.slice(0, 2).forEach((t) => {
      generatedNotifs.push({
        id: `notif-exam-${t.id}`,
        title: `Exam Milestone: ${t.title}`,
        message: `Scheduled on ${t.dueDate}. Keep spaced revision active.`,
        type: 'achievement',
        time: t.dueDate,
        read: false,
      });
    });

    if (generatedNotifs.length > 0) {
      setNotifications(generatedNotifs);
    }
  }, [tasks, sessions]);

  // Real-time Firestore Subscriptions when user is authenticated
  useEffect(() => {
    if (!isFirebaseReady || !user) {
      // Offline / Demo fallback: use local initial data
      return;
    }

    setDataLoading(true);

    const unsubSubjects = subscribeSubjects(
      user.uid,
      async (userSubjects) => {
        if (userSubjects.length === 0) {
          // If a new user has no subjects yet, seed initial subjects into their Firestore account
          for (const initSub of INITIAL_SUBJECTS) {
            await createSubjectDoc(user.uid, {
              name: initSub.name,
              code: initSub.code,
              color: initSub.color,
              bgLight: initSub.bgLight,
              textLight: initSub.textLight,
              borderColor: initSub.borderColor,
              difficulty: 'medium',
              targetHours: initSub.targetHours,
              totalHoursStudied: 0,
            });
          }
        } else {
          setSubjects(userSubjects);
        }
      },
      (err) => console.error('Subjects listener error:', err)
    );

    const unsubTasks = subscribeTasks(
      user.uid,
      (userTasks) => {
        setTasks(userTasks);
      },
      (err) => console.error('Tasks listener error:', err)
    );

    const unsubSessions = subscribeStudySessions(
      user.uid,
      (userSessions) => {
        setSessions(userSessions);
        setDataLoading(false);
      },
      (err) => {
        console.error('Sessions listener error:', err);
        setDataLoading(false);
      }
    );

    const unsubPlans = subscribeStudyPlans(
      user.uid,
      (userPlans) => {
        setSavedPlans(userPlans);
      },
      (err) => console.error('Plans listener error:', err)
    );

    return () => {
      unsubSubjects();
      unsubTasks();
      unsubSessions();
      unsubPlans();
    };
  }, [user, isFirebaseReady]);

  // Toast Helpers
  const showToast = (title: string, description?: string, type: ToastMessage['type'] = 'info') => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    setToasts((prev) => [...prev, { id, title, description, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // SUBJECT ACTIONS
  const addSubject = async (newSubject: Omit<Subject, 'id' | 'totalHoursStudied'>) => {
    if (isFirebaseReady && user) {
      await createSubjectDoc(user.uid, {
        ...newSubject,
        totalHoursStudied: 0,
      });
    } else {
      const subject: Subject = {
        ...newSubject,
        id: `sub-${Date.now()}`,
        totalHoursStudied: 0,
      };
      setSubjects((prev) => [...prev, subject]);
    }
    showToast('Course Added', `${newSubject.code} · ${newSubject.name} was added.`, 'success');
  };

  const updateSubject = async (updatedSubject: Subject) => {
    if (isFirebaseReady && user) {
      await updateSubjectDoc(user.uid, updatedSubject);
    } else {
      setSubjects((prev) => prev.map((s) => (s.id === updatedSubject.id ? updatedSubject : s)));
    }
    showToast('Course Updated', `${updatedSubject.code} updated.`, 'info');
  };

  const deleteSubject = async (id: string) => {
    if (isFirebaseReady && user) {
      await deleteSubjectDoc(user.uid, id);
    } else {
      setSubjects((prev) => prev.filter((s) => s.id !== id));
    }
    showToast('Course Removed', 'The course subject was removed.', 'info');
  };

  // TASK ACTIONS
  const addTask = async (newTask: Omit<Task, 'id'>) => {
    if (isFirebaseReady && user) {
      await createTaskDoc(user.uid, newTask);
    } else {
      const task: Task = {
        ...newTask,
        id: `task-${Date.now()}`,
      };
      setTasks((prev) => [task, ...prev]);
    }
    showToast('Task added successfully', `"${newTask.title}" was scheduled.`, 'success');
  };

  const updateTask = async (updatedTask: Task) => {
    if (isFirebaseReady && user) {
      await updateTaskDoc(user.uid, updatedTask);
    } else {
      setTasks((prev) => prev.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
    }
    showToast('Task updated', `"${updatedTask.title}" has been saved.`, 'info');
  };

  const deleteTask = async (id: string) => {
    const target = tasks.find((t) => t.id === id);
    if (isFirebaseReady && user) {
      await deleteTaskDoc(user.uid, id);
    } else {
      setTasks((prev) => prev.filter((t) => t.id !== id));
    }
    showToast('Task deleted', target ? `"${target.title}" was removed.` : undefined, 'info');
  };

  const toggleTask = async (id: string) => {
    const target = tasks.find((t) => t.id === id);
    if (!target) return;
    const nextCompleted = !target.completed;
    const updated: Task = {
      ...target,
      completed: nextCompleted,
      completedAt: nextCompleted ? new Date().toISOString() : undefined,
    };

    if (isFirebaseReady && user) {
      await updateTaskDoc(user.uid, updated);
    } else {
      setTasks((prev) => prev.map((t) => (t.id === id ? updated : t)));
    }
  };

  // STUDY SESSION ACTIONS
  const addSession = async (newSess: Omit<StudySession, 'id'>) => {
    if (isFirebaseReady && user) {
      await createStudySessionDoc(user.uid, newSess);
    } else {
      const session: StudySession = {
        ...newSess,
        id: `sess-${Date.now()}`,
      };
      setSessions((prev) => [...prev, session]);
    }
    showToast('Study session scheduled', `${newSess.title} on ${newSess.date}`, 'success');
  };

  const updateSession = async (updatedSession: StudySession) => {
    if (isFirebaseReady && user) {
      await updateStudySessionDoc(user.uid, updatedSession);
    } else {
      setSessions((prev) => prev.map((s) => (s.id === updatedSession.id ? updatedSession : s)));
    }
    showToast('Session updated', `${updatedSession.title} saved.`, 'info');
  };

  const deleteSession = async (id: string) => {
    if (isFirebaseReady && user) {
      await deleteStudySessionDoc(user.uid, id);
    } else {
      setSessions((prev) => prev.filter((s) => s.id !== id));
    }
    showToast('Session removed', 'The session has been deleted from your plan.', 'info');
  };

  const toggleSession = async (id: string) => {
    const target = sessions.find((s) => s.id === id);
    if (!target) return;
    const updated: StudySession = {
      ...target,
      completed: !target.completed,
    };

    if (isFirebaseReady && user) {
      await updateStudySessionDoc(user.uid, updated);
    } else {
      setSessions((prev) => prev.map((s) => (s.id === id ? updated : s)));
    }
  };

  // Record completed timer session with idempotency guard
  const recordCompletedTimerSession = async (sessionData: {
    subjectId: string;
    taskId?: string;
    sessionId?: string;
    durationMinutes: number;
    startedAt: string;
    endedAt: string;
    notes?: string;
  }) => {
    if (isSavingSessionRef.current) return;
    isSavingSessionRef.current = true;

    try {
      const todayStr = new Date().toISOString().split('T')[0];
      const subject = subjects.find((s) => s.id === sessionData.subjectId);
      const title = subject ? `${subject.code} Focus Session` : 'Deep Work Session';

      // If tied to an existing planned session, mark it complete directly
      if (sessionData.sessionId) {
        const existingSession = sessions.find((s) => s.id === sessionData.sessionId);
        if (existingSession) {
          const updated: StudySession = {
            ...existingSession,
            completed: true,
            durationMinutes: sessionData.durationMinutes,
            notes: sessionData.notes || existingSession.notes,
          };
          if (isFirebaseReady && user) {
            await updateStudySessionDoc(user.uid, updated);
          } else {
            setSessions((prev) => prev.map((s) => (s.id === sessionData.sessionId ? updated : s)));
          }
          showToast(
            'Scheduled Block Completed!',
            `Marked "${existingSession.title}" complete (+${sessionData.durationMinutes}m).`,
            'success'
          );
          return;
        }
      }

      const newSession: Omit<StudySession, 'id'> = {
        title,
        subjectId: sessionData.subjectId,
        taskId: sessionData.taskId,
        date: todayStr,
        startTime: sessionData.startedAt.substring(11, 16) || '14:00',
        endTime: sessionData.endedAt.substring(11, 16) || '14:45',
        durationMinutes: sessionData.durationMinutes,
        completed: true,
        startedAt: sessionData.startedAt,
        endedAt: sessionData.endedAt,
        notes: sessionData.notes || 'Timer focus session completed successfully.',
        isAiGenerated: false,
      };

      if (isFirebaseReady && user) {
        await createStudySessionDoc(user.uid, newSession);
      } else {
        const session: StudySession = {
          ...newSession,
          id: `sess-focus-${Date.now()}`,
        };
        setSessions((prev) => [...prev, session]);
      }

      showToast(
        'Focus Session Recorded!',
        `Logged ${sessionData.durationMinutes} mins towards ${subject?.code || 'course'}.`,
        'success'
      );
    } catch (err) {
      console.error('Failed to save focus session:', err);
      showToast('Error saving session', 'Please try again.', 'error');
    } finally {
      setTimeout(() => {
        isSavingSessionRef.current = false;
      }, 1000);
    }
  };

  // Save generated study plan
  const saveGeneratedPlan = async (plan: StudyPlan): Promise<string> => {
    if (isFirebaseReady && user) {
      const planId = await saveStudyPlanDoc(user.uid, {
        ...plan,
        status: 'active',
      });
      showToast('Study Plan Saved', 'Your weekly plan is active in Firestore.', 'success');
      return planId;
    } else {
      const planId = `plan-${Date.now()}`;
      setSavedPlans((prev) => [{ ...plan, id: planId, status: 'active' }, ...prev]);
      // Also merge sessions into current sessions list
      setSessions((prev) => {
        const completed = prev.filter((s) => s.completed);
        return [...completed, ...plan.sessions];
      });
      showToast('Plan Activated', 'The generated plan is active in your study calendar.', 'success');
      return planId;
    }
  };

  // Update user preferences
  const updatePreferences = async (newPrefs: Partial<UserPreferences>) => {
    if (isFirebaseReady && user) {
      await updateProfileDetails({
        displayName: newPrefs.name,
        studyGoal: newPrefs.targetExamOrGoal,
        dailyStudyLimitMinutes: newPrefs.dailyGoalHours ? newPrefs.dailyGoalHours * 60 : undefined,
        preferredSessionMinutes: newPrefs.preferredFocusMinutes,
        timezone: newPrefs.timezone,
        theme: newPrefs.theme,
        soundEnabled: newPrefs.soundEnabled,
        emailNotifications: newPrefs.emailNotifications,
      });
    }
    showToast('Preferences updated', 'Your settings have been saved.', 'success');
  };

  const markNotificationRead = (id: string) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)));
  };

  const markAllNotificationsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    showToast('Notifications cleared', 'All notifications marked as read.', 'info');
  };

  return (
    <AppContext.Provider
      value={{
        subjects,
        tasks,
        sessions,
        savedPlans,
        preferences,
        activityData,
        notifications,
        toasts,
        dataLoading,
        showToast,
        dismissToast,
        addSubject,
        updateSubject,
        deleteSubject,
        addTask,
        updateTask,
        deleteTask,
        toggleTask,
        addSession,
        updateSession,
        deleteSession,
        toggleSession,
        recordCompletedTimerSession,
        saveGeneratedPlan,
        updatePreferences,
        markNotificationRead,
        markAllNotificationsRead,
        activeFocusSession,
        setActiveFocusSession,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
