import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';
import { requestAiStudyPlan } from './aiPlannerService';
import { configStatus } from '../lib/firebase';
import type { PlanGenerationConfig, Subject, Task } from '../types';

const config: PlanGenerationConfig = {
  goal: 'exams',
  subjectIds: ['sub1'],
  taskIds: ['t1'],
  availableDays: {
    monday: { enabled: true, start: '09:00', end: '17:00' },
  },
  dailyLimitMinutes: 240,
  preferredSessionMinutes: 45,
  breakDurationMinutes: 10,
  planningStrategy: 'balanced',
  preserveCompletedWork: false,
  bufferHoursBeforeExam: 24,
};

const subjects: Subject[] = [
  { id: 'sub1', name: 'Algorithms', code: 'CS 301', color: '#000000', examDate: '2026-11-01' } as Subject,
];
const tasks: Task[] = [
  {
    id: 't1', title: 'Problem set', description: '', subjectId: 'sub1', dueDate: '2026-10-30',
    estimatedMinutes: 120, priority: 'high', status: 'pending',
  } as unknown as Task,
];

describe('requestAiStudyPlan local-only demo mode', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('network must not be touched')));
  });
  afterEach(() => vi.unstubAllGlobals());

  it('never calls fetch when no backend is configured and generates in-browser', async () => {
    expect(configStatus.isConfigured).toBe(false);
    const plan = await requestAiStudyPlan(config, subjects, tasks, []);
    expect(fetch).not.toHaveBeenCalled();
    expect(plan.source).toBe('algorithm');
    expect(plan.warnings.join(' ')).toMatch(/entirely in your browser/i);
  });
});
