export type Priority = 'low' | 'medium' | 'high';

export type TaskStatus = 'all' | 'today' | 'upcoming' | 'completed' | 'overdue';

export type SubjectDifficulty = 'easy' | 'medium' | 'hard';

export interface Subject {
  id: string;
  name: string;
  code: string;
  color: string;
  bgLight: string;
  textLight: string;
  borderColor: string;
  difficulty?: SubjectDifficulty;
  totalHoursStudied: number;
  targetHours: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  subjectId: string;
  dueDate: string; // ISO date 'YYYY-MM-DD'
  priority: Priority;
  estimatedMinutes: number;
  completed: boolean;
  completedAt?: string;
  isExam?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface StudySession {
  id: string;
  title: string;
  subjectId: string;
  taskId?: string;
  date: string; // 'YYYY-MM-DD'
  startTime: string; // 'HH:MM'
  endTime: string; // 'HH:MM'
  durationMinutes: number;
  completed: boolean;
  notes?: string;
  isAiGenerated?: boolean;
  planId?: string;
  hasConflict?: boolean;
  startedAt?: string;
  endedAt?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface UserPreferences {
  name: string;
  email: string;
  targetExamOrGoal: string;
  dailyGoalHours: number;
  weeklyGoalHours: number;
  preferredFocusMinutes: number;
  breakDurationMinutes: number;
  longBreakMinutes: number;
  timezone: string;
  theme: 'light' | 'dark' | 'system';
  soundEnabled: boolean;
  emailNotifications: boolean;
}

export interface UserProfile {
  id: string;
  displayName: string;
  email: string;
  role?: 'student' | 'admin';
  timezone: string;
  studyGoal: string;
  dailyStudyLimitMinutes: number;
  preferredSessionMinutes: number;
  breakDurationMinutes: number;
  longBreakMinutes: number;
  theme: 'light' | 'dark' | 'system';
  soundEnabled: boolean;
  emailNotifications: boolean;
  onboardingCompleted: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface AdminUserSummary {
  id: string;
  displayName: string;
  email: string;
  maskedEmail: string;
  role: 'student' | 'admin';
  status: 'active' | 'suspended';
  createdAt: string;
  totalStudyHours: number;
}

export interface SystemHealthMetrics {
  aiStatus: 'online' | 'unconfigured' | 'rate_limited' | 'degraded';
  aiModel: string;
  firestoreStatus: 'healthy' | 'unconnected' | 'mock_mode';
  uptimeHours: number;
  totalRegisteredUsers: number;
  activeStudentsWeek: number;
  totalStudyHoursLogged: number;
  totalFocusSessions: number;
  totalPlansGenerated: number;
  rateLimitHits: number;
}

export interface AuditLogEntry {
  id: string;
  timestamp: string;
  action: string;
  actor: string;
  details: string;
  status: 'success' | 'warning' | 'error';
}

export type StudyGoalType =
  | 'exams'
  | 'assignments'
  | 'weak_subjects'
  | 'routine'
  | 'balanced';

export type PlanningStrategy = 'revision_heavy' | 'balanced' | 'deadline_focused';

export interface DayTimeWindow {
  enabled: boolean;
  start: string; // 'HH:MM'
  end: string; // 'HH:MM'
}

export interface PlanGenerationConfig {
  goal: StudyGoalType;
  subjectIds: string[];
  taskIds: string[];
  availableDays: Record<string, DayTimeWindow>;
  dailyLimitMinutes: number;
  preferredSessionMinutes: number;
  breakDurationMinutes: number;
  planningStrategy: PlanningStrategy;
  preserveCompletedWork: boolean;
  bufferHoursBeforeExam: number;
  notesOrFocusTopics?: string;
}

export interface UnscheduledTaskNotice {
  taskId: string;
  taskTitle: string;
  estimatedMinutes: number;
  reason: string;
}

export interface StudyPlan {
  id: string;
  title: string;
  weekStart: string; // 'YYYY-MM-DD'
  weekEnd: string; // 'YYYY-MM-DD'
  status: 'draft' | 'active' | 'archived';
  summary: string;
  assumptions: string[];
  warnings: string[];
  dailyTotals: Record<string, number>; // date -> minutes
  sessions: StudySession[];
  unscheduledTasks: UnscheduledTaskNotice[];
  suggestions: string[];
  source: 'ai' | 'algorithm' | 'manual';
  generatedAt: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ActivityData {
  day: string; // 'Mon', 'Tue', etc.
  fullDate: string;
  hours: number;
  tasksCompleted: number;
  focusSessions: number;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: 'deadline' | 'session' | 'ai' | 'achievement';
}
