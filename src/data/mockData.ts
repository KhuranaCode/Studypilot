import { Subject, Task, StudySession, UserPreferences, ActivityData, NotificationItem } from '../types';

export const INITIAL_SUBJECTS: Subject[] = [
  {
    id: 'sub-cs',
    name: 'Data Structures & Algorithms',
    code: 'CS 250',
    color: '#3b82f6', // electric blue
    bgLight: 'bg-blue-50',
    textLight: 'text-blue-700',
    borderColor: 'border-blue-200',
    totalHoursStudied: 14.5,
    targetHours: 20,
  },
  {
    id: 'sub-math',
    name: 'Multivariable Calculus',
    code: 'MATH 201',
    color: '#6366f1', // indigo
    bgLight: 'bg-indigo-50',
    textLight: 'text-indigo-700',
    borderColor: 'border-indigo-200',
    totalHoursStudied: 12.0,
    targetHours: 18,
  },
  {
    id: 'sub-chem',
    name: 'Organic Chemistry II',
    code: 'CHEM 102',
    color: '#0d9488', // teal
    bgLight: 'bg-teal-50',
    textLight: 'text-teal-700',
    borderColor: 'border-teal-200',
    totalHoursStudied: 9.5,
    targetHours: 15,
  },
  {
    id: 'sub-hist',
    name: 'Modern European History',
    code: 'HIST 110',
    color: '#475569', // steel slate
    bgLight: 'bg-slate-100',
    textLight: 'text-slate-700',
    borderColor: 'border-slate-300',
    totalHoursStudied: 6.0,
    targetHours: 10,
  },
  {
    id: 'sub-psyc',
    name: 'Cognitive Psychology',
    code: 'PSYC 101',
    color: '#f59e0b', // amber
    bgLight: 'bg-amber-50',
    textLight: 'text-amber-700',
    borderColor: 'border-amber-200',
    totalHoursStudied: 4.5,
    targetHours: 8,
  },
];

// Helper to get formatted dates relative to today
const getRelativeDateStr = (offsetDays: number): string => {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return d.toISOString().split('T')[0];
};

export const INITIAL_TASKS: Task[] = [
  {
    id: 'task-1',
    title: 'Implement Dijkstra & Bellman-Ford Shortest Path',
    description: 'Complete programming assignment #3 in Python, including edge case unit tests and runtime analysis write-up.',
    subjectId: 'sub-cs',
    dueDate: getRelativeDateStr(1), // Tomorrow
    priority: 'high',
    estimatedMinutes: 90,
    completed: false,
  },
  {
    id: 'task-2',
    title: 'Green\'s & Stokes\' Theorem Problem Set',
    description: 'Work through textbook problems 14.7 #1-18 odd, focusing on surface integrals over oriented manifolds.',
    subjectId: 'sub-math',
    dueDate: getRelativeDateStr(0), // Today
    priority: 'high',
    estimatedMinutes: 60,
    completed: false,
  },
  {
    id: 'task-3',
    title: 'Organic Synthesis Reaction Mechanisms Flashcards',
    description: 'Review Aldol condensations, Claisen reactions, and Grignard reagents for upcoming lab practical.',
    subjectId: 'sub-chem',
    dueDate: getRelativeDateStr(0), // Today
    priority: 'medium',
    estimatedMinutes: 45,
    completed: true,
    completedAt: new Date().toISOString(),
  },
  {
    id: 'task-4',
    title: 'Midterm Exam: Industrial Revolution & Statecraft',
    description: 'Cumulative closed-book exam covering Chapters 6-11 and primary source essays on 19th-century geopolitics.',
    subjectId: 'sub-hist',
    dueDate: getRelativeDateStr(3),
    priority: 'high',
    estimatedMinutes: 120,
    completed: false,
    isExam: true,
  },
  {
    id: 'task-5',
    title: 'Memory Consolidation Literature Review Draft',
    description: 'Submit 4-page research abstract comparing synaptic vs systems consolidation in long-term potentiation.',
    subjectId: 'sub-psyc',
    dueDate: getRelativeDateStr(4),
    priority: 'medium',
    estimatedMinutes: 75,
    completed: false,
  },
  {
    id: 'task-6',
    title: 'Red-Black Tree Insertion & Rotation Quiz Prep',
    description: 'Self-test on tree rebalancing cases after node insertion.',
    subjectId: 'sub-cs',
    dueDate: getRelativeDateStr(2),
    priority: 'medium',
    estimatedMinutes: 50,
    completed: false,
  },
  {
    id: 'task-7',
    title: 'Spectroscopy Lab Pre-Lab Questions',
    description: 'Complete NMR spectrum interpretation worksheets before Tuesday 8 AM lab.',
    subjectId: 'sub-chem',
    dueDate: getRelativeDateStr(-1), // Yesterday (overdue)
    priority: 'high',
    estimatedMinutes: 30,
    completed: false,
  },
  {
    id: 'task-8',
    title: 'Calculus Quiz 4: Vector Fields & Divergence',
    description: 'Reviewed practice test solutions and formulas.',
    subjectId: 'sub-math',
    dueDate: getRelativeDateStr(-2),
    priority: 'medium',
    estimatedMinutes: 60,
    completed: true,
    completedAt: new Date(Date.now() - 86400000).toISOString(),
  },
];

export const INITIAL_SESSIONS: StudySession[] = [
  {
    id: 'sess-1',
    title: 'Green\'s Theorem Drills & Vectors',
    subjectId: 'sub-math',
    date: getRelativeDateStr(0), // Today
    startTime: '09:00',
    endTime: '10:30',
    durationMinutes: 90,
    completed: true,
    notes: 'Covered parameterizations and double integrals cleanly.',
    isAiGenerated: true,
  },
  {
    id: 'sess-2',
    title: 'Graph Algorithms & Shortest Path Coding',
    subjectId: 'sub-cs',
    date: getRelativeDateStr(0), // Today
    startTime: '13:00',
    endTime: '14:30',
    durationMinutes: 90,
    completed: false,
    notes: 'Focus on min-heap priority queue implementation.',
    isAiGenerated: true,
  },
  {
    id: 'sess-3',
    title: 'Organic Reaction Mechanism Drills',
    subjectId: 'sub-chem',
    date: getRelativeDateStr(0), // Today
    startTime: '16:00',
    endTime: '17:00',
    durationMinutes: 60,
    completed: false,
    notes: 'Enolate chemistry and alpha-substitution.',
    isAiGenerated: false,
  },
  {
    id: 'sess-4',
    title: 'Calculus Surface Integrals Review',
    subjectId: 'sub-math',
    date: getRelativeDateStr(1),
    startTime: '10:00',
    endTime: '11:30',
    durationMinutes: 90,
    completed: false,
    isAiGenerated: true,
  },
  {
    id: 'sess-5',
    title: 'Industrial Revolution Primary Sources',
    subjectId: 'sub-hist',
    date: getRelativeDateStr(1),
    startTime: '14:00',
    endTime: '15:30',
    durationMinutes: 90,
    completed: false,
    notes: 'Annotate British parliamentary committee testimonies.',
    isAiGenerated: true,
  },
  {
    id: 'sess-6',
    title: 'Dynamic Programming & Memoization',
    subjectId: 'sub-cs',
    date: getRelativeDateStr(2),
    startTime: '09:30',
    endTime: '11:00',
    durationMinutes: 90,
    completed: false,
    isAiGenerated: true,
  },
  {
    id: 'sess-7',
    title: 'Cognitive Biases & Heuristics Study',
    subjectId: 'sub-psyc',
    date: getRelativeDateStr(2),
    startTime: '15:00',
    endTime: '16:15',
    durationMinutes: 75,
    completed: false,
    isAiGenerated: false,
  },
  {
    id: 'sess-8',
    title: 'History Midterm Practice Essay',
    subjectId: 'sub-hist',
    date: getRelativeDateStr(3),
    startTime: '10:00',
    endTime: '12:00',
    durationMinutes: 120,
    completed: false,
    isAiGenerated: true,
  },
];

export const INITIAL_PREFERENCES: UserPreferences = {
  name: 'Alex Chen',
  email: 'alex.chen@university.edu',
  targetExamOrGoal: 'Fall Semester Dean\'s List (3.9+ GPA)',
  dailyGoalHours: 4.0,
  weeklyGoalHours: 25.0,
  preferredFocusMinutes: 45,
  breakDurationMinutes: 5,
  longBreakMinutes: 15,
  timezone: 'America/New_York (EST, UTC-5)',
  theme: 'light',
  soundEnabled: true,
  emailNotifications: true,
};

export const INITIAL_ACTIVITY: ActivityData[] = [
  { day: 'Mon', fullDate: 'Oct 05', hours: 4.5, tasksCompleted: 5, focusSessions: 4 },
  { day: 'Tue', fullDate: 'Oct 06', hours: 3.8, tasksCompleted: 4, focusSessions: 3 },
  { day: 'Wed', fullDate: 'Oct 07', hours: 5.2, tasksCompleted: 6, focusSessions: 5 },
  { day: 'Thu', fullDate: 'Oct 08', hours: 4.0, tasksCompleted: 4, focusSessions: 4 },
  { day: 'Fri', fullDate: 'Oct 09', hours: 3.5, tasksCompleted: 3, focusSessions: 3 },
  { day: 'Sat', fullDate: 'Oct 10', hours: 2.5, tasksCompleted: 2, focusSessions: 2 },
  { day: 'Sun', fullDate: 'Oct 11', hours: 4.0, tasksCompleted: 4, focusSessions: 4 },
];

export const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'notif-1',
    title: 'Upcoming Deadline Today',
    message: 'Green\'s & Stokes\' Theorem Problem Set is due tonight at 11:59 PM.',
    time: '20 min ago',
    read: false,
    type: 'deadline',
  },
  {
    id: 'notif-2',
    title: 'AI Study Plan Synced',
    message: 'Your weekly schedule was optimized based on your upcoming History midterm.',
    time: '2 hours ago',
    read: false,
    type: 'ai',
  },
  {
    id: 'notif-3',
    title: 'Study Streak Milestone',
    message: 'Congratulations! You achieved a 7-day consistent study streak.',
    time: 'Yesterday',
    read: true,
    type: 'achievement',
  },
  {
    id: 'notif-4',
    title: 'Next Focus Session',
    message: 'Data Structures & Algorithms coding block starts at 1:00 PM.',
    time: 'Yesterday',
    read: true,
    type: 'session',
  },
];
