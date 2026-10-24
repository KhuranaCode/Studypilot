import { z } from 'zod';
import { auth, configStatus } from '../lib/firebase';
import {
  Subject,
  Task,
  StudySession,
  StudyPlan,
  PlanGenerationConfig,
} from '../types';
import { validateAndRepairSchedule, minutesToTime, timeToMinutes } from './scheduleValidator';

// Zod Schema for Structured AI Schedule Output
export const AiSessionSchema = z.object({
  title: z.string().min(1).max(200),
  subjectId: z.string().min(1),
  taskId: z.string().optional(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  startTime: z.string().regex(/^\d{2}:\d{2}$/),
  endTime: z.string().regex(/^\d{2}:\d{2}$/),
  durationMinutes: z.number().int().min(15).max(360),
  notes: z.string().optional(),
});

export const AiPlanResponseSchema = z.object({
  title: z.string().min(1),
  summary: z.string().min(1),
  assumptions: z.array(z.string()).default([]),
  warnings: z.array(z.string()).default([]),
  suggestions: z.array(z.string()).default([]),
  sessions: z.array(AiSessionSchema),
});

export type ValidatedAiPlanResponse = z.infer<typeof AiPlanResponseSchema>;

/**
 * Intelligent deterministic schedule generator
 * Used directly or as the scheduling constraint enforcement pipeline
 */
export const generateDeterministicPlan = (
  config: PlanGenerationConfig,
  subjects: Subject[],
  tasks: Task[],
  existingSessions: StudySession[]
): StudyPlan => {
  const selectedSubjects = subjects.filter((s) => config.subjectIds.includes(s.id));
  const selectedTasks = tasks.filter((t) => config.taskIds.includes(t.id) && !t.completed);

  // Compute 7-day date window starting from today
  const today = new Date();
  const weekStart = today.toISOString().split('T')[0];
  const endDate = new Date(today);
  endDate.setDate(endDate.getDate() + 6);
  const weekEnd = endDate.toISOString().split('T')[0];

  const rawSessions: StudySession[] = [];

  // Sort tasks by priority and due date urgency
  const sortedTasks = [...selectedTasks].sort((a, b) => {
    const priorityWeight = { high: 3, medium: 2, low: 1 };
    const pDiff = priorityWeight[b.priority] - priorityWeight[a.priority];
    if (pDiff !== 0) return pDiff;
    return a.dueDate.localeCompare(b.dueDate);
  });

  // Distribute tasks and subject review blocks across the week
  let taskIndex = 0;
  let subjectIndex = 0;

  for (let d = 0; d < 7; d++) {
    const curDateObj = new Date(today);
    curDateObj.setDate(curDateObj.getDate() + d);
    const dateStr = curDateObj.toISOString().split('T')[0];

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayAbbrev = days[curDateObj.getDay()];
    const dayWindow = config.availableDays[dayAbbrev];

    if (!dayWindow || !dayWindow.enabled) continue; // Rest day

    let currentMinutes = timeToMinutes(dayWindow.start);
    const windowEndMinutes = timeToMinutes(dayWindow.end);
    let dayTotalLogged = 0;

    // Session 1: High priority task or urgent assignment
    if (taskIndex < sortedTasks.length && currentMinutes + config.preferredSessionMinutes <= windowEndMinutes) {
      const task = sortedTasks[taskIndex];
      const duration = Math.min(task.estimatedMinutes, config.preferredSessionMinutes, config.dailyLimitMinutes - dayTotalLogged);

      if (duration >= 20) {
        rawSessions.push({
          id: `sess-det-${d}-1`,
          title: `${task.title} (Deep Focus)`,
          subjectId: task.subjectId,
          taskId: task.id,
          date: dateStr,
          startTime: minutesToTime(currentMinutes),
          endTime: minutesToTime(currentMinutes + duration),
          durationMinutes: duration,
          completed: false,
          notes: `Targeted milestone for due date: ${task.dueDate}. Priority: ${task.priority.toUpperCase()}.`,
          isAiGenerated: true,
        });

        currentMinutes += duration + config.breakDurationMinutes;
        dayTotalLogged += duration;
        taskIndex++;
      }
    }

    // Session 2: Spaced retrieval review or problem set block
    if (
      selectedSubjects.length > 0 &&
      dayTotalLogged + config.preferredSessionMinutes <= config.dailyLimitMinutes &&
      currentMinutes + config.preferredSessionMinutes <= windowEndMinutes
    ) {
      const sub = selectedSubjects[subjectIndex % selectedSubjects.length];
      const duration = Math.min(config.preferredSessionMinutes, config.dailyLimitMinutes - dayTotalLogged);

      if (duration >= 25) {
        rawSessions.push({
          id: `sess-det-${d}-2`,
          title: `${sub.code} Active Retrieval & Practice Problems`,
          subjectId: sub.id,
          date: dateStr,
          startTime: minutesToTime(currentMinutes),
          endTime: minutesToTime(currentMinutes + duration),
          durationMinutes: duration,
          completed: false,
          notes: `Cognitive interleaving review block for ${sub.name}.`,
          isAiGenerated: true,
        });

        subjectIndex++;
      }
    }
  }

  // Deterministically validate and repair against constraints
  const validation = validateAndRepairSchedule(
    rawSessions,
    config,
    existingSessions.filter((s) => s.completed),
    tasks,
    subjects
  );

  return {
    id: `plan-${Date.now()}`,
    title: `StudyPlan: ${weekStart} to ${weekEnd}`,
    weekStart,
    weekEnd,
    status: 'draft',
    summary: `Optimized 7-day schedule with ${validation.validatedSessions.length} focus sessions balancing cognitive load and upcoming deadlines.`,
    assumptions: [
      `Daily study target configured to ${config.dailyLimitMinutes / 60}h max.`,
      `Session duration set to ${config.preferredSessionMinutes}m with ${config.breakDurationMinutes}m cognitive recovery intervals.`,
      `Exam deadlines within 7 days given priority allocation.`,
    ],
    warnings: validation.warnings,
    dailyTotals: validation.dailyTotals,
    sessions: validation.validatedSessions,
    unscheduledTasks: validation.unscheduledTasks,
    suggestions: [
      'Maintain steady sleep routines to reinforce memory consolidation.',
      'If an assignment takes longer than estimated, reschedule remaining blocks rather than working past midnight.',
    ],
    source: 'algorithm',
    generatedAt: new Date().toISOString(),
  };
};

/**
 * Client service to request AI study plan generation
 * Authenticates with Firebase ID token, calls server endpoint, and falls back gracefully
 */
export const requestAiStudyPlan = async (
  config: PlanGenerationConfig,
  subjects: Subject[],
  tasks: Task[],
  existingSessions: StudySession[]
): Promise<StudyPlan> => {
  // Local-only mode: with no backend configured, never transmit study data;
  // generate the plan entirely in the browser.
  if (!configStatus.isConfigured) {
    const localPlan = generateDeterministicPlan(config, subjects, tasks, existingSessions);
    localPlan.warnings.unshift(
      'Notice: Generated entirely in your browser. No backend is configured, so no study data left your device.'
    );
    return localPlan;
  }

  const token = auth?.currentUser ? await auth.currentUser.getIdToken() : null;

  try {
    const res = await fetch('/api/ai/generate-plan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify({
        config,
        subjects: subjects.filter((s) => config.subjectIds.includes(s.id)),
        tasks: tasks.filter((t) => config.taskIds.includes(t.id)),
      }),
    });

    if (res.ok) {
      const data = await res.json();
      const parsed = AiPlanResponseSchema.safeParse(data.plan);
      if (parsed.success) {
        // Run deterministic validation & repair on raw AI sessions
        const validation = validateAndRepairSchedule(
          parsed.data.sessions.map((s, idx) => ({
            ...s,
            id: `ai-sess-${Date.now()}-${idx}`,
            completed: false,
            isAiGenerated: true,
          })),
          config,
          existingSessions.filter((s) => s.completed),
          tasks,
          subjects
        );

        return {
          id: `plan-${Date.now()}`,
          title: parsed.data.title,
          weekStart: new Date().toISOString().split('T')[0],
          weekEnd: new Date(Date.now() + 6 * 86400000).toISOString().split('T')[0],
          status: 'draft',
          summary: parsed.data.summary,
          assumptions: parsed.data.assumptions,
          warnings: [...parsed.data.warnings, ...validation.warnings],
          dailyTotals: validation.dailyTotals,
          sessions: validation.validatedSessions,
          unscheduledTasks: validation.unscheduledTasks,
          suggestions: parsed.data.suggestions,
          source: 'ai',
          generatedAt: new Date().toISOString(),
        };
      }
    } else {
      const errorJson = await res.json().catch(() => ({}));
      console.warn('AI plan generation endpoint response status:', res.status, errorJson);
    }
  } catch (err) {
    console.warn('AI endpoint unavailable or offline. Using deterministic algorithm:', err);
  }

  // Heuristic / deterministic generator fallback
  const fallbackPlan = generateDeterministicPlan(config, subjects, tasks, existingSessions);
  fallbackPlan.warnings.unshift(
    'Notice: Synthesized via StudyPilot Smart Constraint Scheduler (GEMINI_API_KEY server key unconfigured or endpoint unreachable).'
  );
  return fallbackPlan;
};
