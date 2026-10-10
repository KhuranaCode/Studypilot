import { StudySession, Task, Subject, ActivityData } from '../types';

/**
 * Get current date string in YYYY-MM-DD
 */
export const formatDateToYYYYMMDD = (d: Date): string => {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

/**
 * Get current date string in YYYY-MM-DD
 */
export const getTodayDateString = (now = new Date()): string => {
  return formatDateToYYYYMMDD(now);
};

/**
 * Get start of current week (Monday) in YYYY-MM-DD
 */
export const getMondayOfCurrentWeek = (now = new Date()): Date => {
  const d = new Date(now);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  d.setDate(diff);
  d.setHours(0, 0, 0, 0);
  return d;
};

/**
 * Calculate study time completed today in hours
 */
export const calculateTodayCompletedHours = (sessions: StudySession[], todayStr = getTodayDateString()): number => {
  return sessions
    .filter((s) => s.completed && s.date === todayStr)
    .reduce((sum, s) => sum + (Number(s.durationMinutes) || 0) / 60, 0);
};

/**
 * Calculate study time completed in current week (Monday to Sunday) in hours
 */
export const calculateThisWeekCompletedHours = (sessions: StudySession[], now = new Date()): number => {
  const monday = getMondayOfCurrentWeek(now);
  const mondayStr = formatDateToYYYYMMDD(monday);

  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  const sundayStr = formatDateToYYYYMMDD(sunday);

  return sessions
    .filter((s) => s.completed && s.date >= mondayStr && s.date <= sundayStr)
    .reduce((sum, s) => sum + (Number(s.durationMinutes) || 0) / 60, 0);
};

/**
 * Calculate consecutive study streak in days from session history
 */
export const calculateStudyStreak = (sessions: StudySession[], todayStr = getTodayDateString()): number => {
  const completedDates = new Set<string>(
    sessions.filter((s) => s.completed).map((s) => s.date)
  );

  if (completedDates.size === 0) return 0;

  let streak = 0;
  const [y, m, dNum] = todayStr.split('-').map(Number);
  const cursor = new Date(y, m - 1, dNum, 12, 0, 0); // midday prevents timezone drift

  // If didn't study today, check if studied yesterday to keep streak alive
  if (!completedDates.has(todayStr)) {
    cursor.setDate(cursor.getDate() - 1);
  }

  while (true) {
    const dateStr = formatDateToYYYYMMDD(cursor);
    if (completedDates.has(dateStr)) {
      streak += 1;
      cursor.setDate(cursor.getDate() - 1);
    } else {
      break;
    }
  }

  return streak;
};

/**
 * Find the next upcoming uncompleted study session
 */
export const findNextScheduledSession = (sessions: StudySession[], now = new Date()): StudySession | null => {
  const todayStr = now.toISOString().split('T')[0];
  const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

  const upcoming = sessions
    .filter((s) => !s.completed)
    .filter((s) => s.date > todayStr || (s.date === todayStr && s.endTime >= currentTime))
    .sort((a, b) => {
      if (a.date !== b.date) return a.date.localeCompare(b.date);
      return a.startTime.localeCompare(b.startTime);
    });

  return upcoming[0] || null;
};

/**
 * Compute dynamic 7-day activity data for the WeeklyActivityChart
 */
export const calculateWeeklyActivityData = (
  sessions: StudySession[],
  tasks: Task[] = [],
  now = new Date()
): ActivityData[] => {
  const monday = getMondayOfCurrentWeek(now);
  const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const result: ActivityData[] = [];

  for (let i = 0; i < 7; i++) {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    const dateStr = formatDateToYYYYMMDD(d);

    const dayCompletedHours = sessions
      .filter((s) => s.completed && s.date === dateStr)
      .reduce((sum, s) => sum + (Number(s.durationMinutes) || 0) / 60, 0);

    const daySessionsCount = sessions.filter((s) => s.completed && s.date === dateStr).length;

    const dayTasksCount = tasks.filter((t) => {
      if (!t.completed) return false;
      const completedDate = t.completedAt ? t.completedAt.split('T')[0] : t.dueDate;
      return completedDate === dateStr;
    }).length;

    result.push({
      day: dayNames[i],
      fullDate: dateStr,
      hours: Number(dayCompletedHours.toFixed(1)),
      tasksCompleted: dayTasksCount,
      focusSessions: daySessionsCount,
    });
  }

  return result;
};

/**
 * Aggregate study hours per subject from completed sessions
 */
export const calculateSubjectStudyHours = (
  subjects: Subject[],
  sessions: StudySession[]
): Array<Subject & { actualHoursStudied: number; progressPercent: number }> => {
  const subjectHoursMap: Record<string, number> = {};

  for (const s of sessions) {
    if (s.completed && s.subjectId) {
      subjectHoursMap[s.subjectId] = (subjectHoursMap[s.subjectId] || 0) + (Number(s.durationMinutes) || 0) / 60;
    }
  }

  return subjects.map((sub) => {
    const actualHours = Number((subjectHoursMap[sub.id] || sub.totalHoursStudied || 0).toFixed(1));
    const target = sub.targetHours || 15;
    const progressPercent = Math.min(100, Math.round((actualHours / target) * 100));

    return {
      ...sub,
      actualHoursStudied: actualHours,
      progressPercent,
    };
  });
};

/**
 * Calculate task urgency metrics
 */
export const calculateTaskMetrics = (tasks: Task[], todayStr = getTodayDateString()) => {
  const pending = tasks.filter((t) => !t.completed);
  const completed = tasks.filter((t) => t.completed);

  const dueToday = pending.filter((t) => t.dueDate === todayStr);
  const overdue = pending.filter((t) => t.dueDate < todayStr);

  const [y, m, dNum] = todayStr.split('-').map(Number);
  const twoDaysLater = new Date(y, m - 1, dNum + 2, 12, 0, 0);
  const twoDaysLaterStr = formatDateToYYYYMMDD(twoDaysLater);

  const dueWithin48h = pending.filter((t) => t.dueDate >= todayStr && t.dueDate <= twoDaysLaterStr);
  const highPriority = pending.filter((t) => t.priority === 'high');

  return {
    total: tasks.length,
    pendingCount: pending.length,
    completedCount: completed.length,
    dueTodayCount: dueToday.length,
    overdueCount: overdue.length,
    dueWithin48hCount: dueWithin48h.length,
    highPriorityCount: highPriority.length,
  };
};
