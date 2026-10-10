import {
  StudySession,
  Task,
  Subject,
  PlanGenerationConfig,
  UnscheduledTaskNotice,
} from '../types';

export interface ValidationResult {
  isValid: boolean;
  validatedSessions: StudySession[];
  unscheduledTasks: UnscheduledTaskNotice[];
  dailyTotals: Record<string, number>;
  warnings: string[];
  conflicts: string[];
}

// Convert "HH:MM" to total minutes from midnight
export const timeToMinutes = (timeStr: string): number => {
  const [h, m] = timeStr.split(':').map(Number);
  return (h || 0) * 60 + (m || 0);
};

// Convert minutes from midnight to "HH:MM"
export const minutesToTime = (totalMins: number): string => {
  const h = Math.floor(totalMins / 60) % 24;
  const m = totalMins % 60;
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
};

// Check if two time windows on the same date overlap
export const checkTimesOverlap = (
  start1: string,
  end1: string,
  start2: string,
  end2: string
): boolean => {
  const s1 = timeToMinutes(start1);
  const e1 = timeToMinutes(end1);
  const s2 = timeToMinutes(start2);
  const e2 = timeToMinutes(end2);
  return s1 < e2 && s2 < e1;
};

// Get weekday 3-letter abbreviation from YYYY-MM-DD
export const getDayAbbrev = (dateStr: string): string => {
  const d = new Date(dateStr + 'T00:00:00');
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return days[d.getDay()];
};

/**
 * Deterministic schedule validator and conflict repair engine
 */
export const validateAndRepairSchedule = (
  rawSessions: StudySession[],
  config: PlanGenerationConfig,
  existingCompletedSessions: StudySession[],
  tasks: Task[],
  subjects: Subject[]
): ValidationResult => {
  const warnings: string[] = [];
  const conflicts: string[] = [];
  const unscheduledTasks: UnscheduledTaskNotice[] = [];
  const dailyTotals: Record<string, number> = {};

  const subjectMap = new Map<string, Subject>(subjects.map((s) => [s.id, s]));
  const taskMap = new Map<string, Task>(tasks.map((t) => [t.id, t]));

  // 1. Group sessions by date
  const sessionsByDate: Record<string, StudySession[]> = {};

  // If preserveCompletedWork is true, include existing completed sessions first
  if (config.preserveCompletedWork) {
    for (const sess of existingCompletedSessions) {
      if (!sessionsByDate[sess.date]) sessionsByDate[sess.date] = [];
      sessionsByDate[sess.date].push({ ...sess, completed: true });
    }
  }

  // 2. Filter & clean incoming raw sessions
  for (const raw of rawSessions) {
    // Validate subject existence
    if (!subjectMap.has(raw.subjectId)) {
      warnings.push(`Session "${raw.title}" dropped: unknown subject.`);
      continue;
    }

    // Validate task status if linked
    if (raw.taskId) {
      const task = taskMap.get(raw.taskId);
      if (task && task.completed && !config.preserveCompletedWork) {
        // Skip completed tasks unless explicitly allowed
        continue;
      }
    }

    // Check date availability
    const dayAbbrev = getDayAbbrev(raw.date);
    const dayWindow = config.availableDays[dayAbbrev];
    if (dayWindow && !dayWindow.enabled) {
      warnings.push(`Shifted session on ${raw.date} (${dayAbbrev}) due to user-declared rest day.`);
      continue;
    }

    if (!sessionsByDate[raw.date]) sessionsByDate[raw.date] = [];
    sessionsByDate[raw.date].push(raw);
  }

  // 3. For each date, sort sessions, enforce non-overlap, bounds, and daily study limits
  const finalSessions: StudySession[] = [];

  for (const [date, daySessions] of Object.entries(sessionsByDate)) {
    const dayAbbrev = getDayAbbrev(date);
    const dayWindow = config.availableDays[dayAbbrev] || {
      enabled: true,
      start: '08:00',
      end: '22:00',
    };

    const windowStartMins = timeToMinutes(dayWindow.start);
    const windowEndMins = timeToMinutes(dayWindow.end);
    let currentDayMinutes = 0;

    // Sort by startTime
    daySessions.sort((a, b) => timeToMinutes(a.startTime) - timeToMinutes(b.startTime));

    let lastEndMins = windowStartMins;

    for (let i = 0; i < daySessions.length; i++) {
      const sess = daySessions[i];
      let startMins = Math.max(timeToMinutes(sess.startTime), lastEndMins);
      let durationMins = Number(sess.durationMinutes) || config.preferredSessionMinutes || 45;

      // Cap to configured preferred session if unreasonable
      if (durationMins > 180) durationMins = 180;
      if (durationMins < 15) durationMins = 15;

      let endMins = startMins + durationMins;

      // Check daily study limit
      if (currentDayMinutes + durationMins > config.dailyLimitMinutes) {
        const allowedMins = config.dailyLimitMinutes - currentDayMinutes;
        if (allowedMins >= 25) {
          durationMins = allowedMins;
          endMins = startMins + durationMins;
          warnings.push(`Trimmed session on ${date} to respect your ${config.dailyLimitMinutes} min daily limit.`);
        } else {
          warnings.push(`Exceeded daily capacity limit on ${date} (${currentDayMinutes} mins logged).`);
          if (sess.taskId) {
            const task = taskMap.get(sess.taskId);
            unscheduledTasks.push({
              taskId: sess.taskId,
              taskTitle: task?.title || sess.title,
              estimatedMinutes: durationMins,
              reason: `Exceeded daily study limit of ${config.dailyLimitMinutes / 60}h on ${date}.`,
            });
          }
          continue;
        }
      }

      // Check window end bound
      if (endMins > windowEndMins) {
        warnings.push(`Session on ${date} ended outside declared time window (${dayWindow.end}).`);
        if (sess.taskId) {
          const task = taskMap.get(sess.taskId);
          unscheduledTasks.push({
            taskId: sess.taskId,
            taskTitle: task?.title || sess.title,
            estimatedMinutes: durationMins,
            reason: `Exceeded available study hours before window close on ${date}.`,
          });
        }
        continue;
      }

      // Enforce break between sessions
      lastEndMins = endMins + (config.breakDurationMinutes || 5);
      currentDayMinutes += durationMins;

      finalSessions.push({
        ...sess,
        id: sess.id || `sess-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
        date,
        startTime: minutesToTime(startMins),
        endTime: minutesToTime(endMins),
        durationMinutes: durationMins,
      });
    }

    dailyTotals[date] = currentDayMinutes;
  }

  // 4. Verify unscheduled high-priority tasks
  for (const taskId of config.taskIds) {
    const task = taskMap.get(taskId);
    if (!task || task.completed) continue;

    const scheduled = finalSessions.some((s) => s.taskId === taskId);
    if (!scheduled) {
      const alreadyNoted = unscheduledTasks.some((u) => u.taskId === taskId);
      if (!alreadyNoted) {
        unscheduledTasks.push({
          taskId,
          taskTitle: task.title,
          estimatedMinutes: task.estimatedMinutes,
          reason: 'Time capacity was exhausted by earlier deadlines or daily limits.',
        });
      }
    }
  }

  return {
    isValid: finalSessions.length > 0,
    validatedSessions: finalSessions,
    unscheduledTasks,
    dailyTotals,
    warnings,
    conflicts,
  };
};
