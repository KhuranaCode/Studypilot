import { describe, expect, it } from 'vitest';
import type { StudySession, Task } from '../types';
import {
  calculateStudyStreak,
  calculateSubjectStudyHours,
  calculateTaskMetrics,
  calculateThisWeekCompletedHours,
  calculateTodayCompletedHours,
  findNextScheduledSession,
  formatDateToYYYYMMDD,
} from './studyMetrics';

const session = (overrides: Partial<StudySession>): StudySession => ({
  id: 's1',
  title: 'Block',
  subjectId: 'sub1',
  date: '2026-10-20',
  startTime: '09:00',
  endTime: '10:30',
  durationMinutes: 90,
  completed: false,
  ...overrides,
});

const task = (overrides: Partial<Task>): Task => ({
  id: 't1',
  title: 'Task',
  description: '',
  subjectId: 'sub1',
  dueDate: '2026-10-24',
  priority: 'medium',
  estimatedMinutes: 60,
  completed: false,
  ...overrides,
});

describe('formatDateToYYYYMMDD', () => {
  it('zero-pads month and day', () => {
    expect(formatDateToYYYYMMDD(new Date(2026, 0, 5))).toBe('2026-01-05');
  });
});

describe('calculateTodayCompletedHours', () => {
  it('sums only completed sessions for the given day', () => {
    const sessions = [
      session({ date: '2026-10-24', durationMinutes: 60, completed: true }),
      session({ id: 's2', date: '2026-10-24', durationMinutes: 30, completed: false }),
      session({ id: 's3', date: '2026-10-23', durationMinutes: 120, completed: true }),
    ];
    expect(calculateTodayCompletedHours(sessions, '2026-10-24')).toBe(1);
  });
});

describe('calculateThisWeekCompletedHours', () => {
  it('counts Monday-to-Sunday around the reference date', () => {
    // Reference: Friday 2026-10-23; week is Mon 10-19 to Sun 10-25.
    const now = new Date(2026, 9, 23, 12, 0, 0);
    const sessions = [
      session({ date: '2026-10-19', durationMinutes: 60, completed: true }),
      session({ id: 's2', date: '2026-10-25', durationMinutes: 60, completed: true }),
      session({ id: 's3', date: '2026-10-18', durationMinutes: 60, completed: true }),
    ];
    expect(calculateThisWeekCompletedHours(sessions, now)).toBe(2);
  });
});

describe('calculateStudyStreak', () => {
  it('returns 0 with no completed sessions', () => {
    expect(calculateStudyStreak([], '2026-10-24')).toBe(0);
  });

  it('keeps the streak alive when today is unstudied but yesterday was', () => {
    const sessions = [
      session({ date: '2026-10-22', completed: true }),
      session({ id: 's2', date: '2026-10-23', completed: true }),
    ];
    expect(calculateStudyStreak(sessions, '2026-10-24')).toBe(2);
  });

  it('counts zero when neither today nor yesterday was studied', () => {
    const sessions = [
      session({ date: '2026-10-20', completed: true }),
      session({ id: 's2', date: '2026-10-22', completed: true }),
    ];
    expect(calculateStudyStreak(sessions, '2026-10-24')).toBe(0);
  });

  it('stops counting at a gap inside the streak', () => {
    const sessions = [
      session({ date: '2026-10-20', completed: true }),
      session({ id: 's2', date: '2026-10-23', completed: true }),
      session({ id: 's3', date: '2026-10-24', completed: true }),
    ];
    expect(calculateStudyStreak(sessions, '2026-10-24')).toBe(2);
  });
});

describe('findNextScheduledSession', () => {
  it('picks the earliest upcoming uncompleted session', () => {
    const now = new Date(2026, 9, 24, 8, 0, 0); // 08:00 local
    const sessions = [
      session({ id: 'later', date: '2026-10-24', startTime: '14:00', endTime: '15:00' }),
      session({ id: 'sooner', date: '2026-10-24', startTime: '09:00', endTime: '10:00' }),
      session({ id: 'past', date: '2026-10-24', startTime: '06:00', endTime: '07:00' }),
      session({ id: 'done', date: '2026-10-25', startTime: '09:00', endTime: '10:00', completed: true }),
    ];
    expect(findNextScheduledSession(sessions, now)?.id).toBe('sooner');
  });

  it('returns null when nothing is upcoming', () => {
    const now = new Date(2026, 9, 24, 20, 0, 0);
    expect(findNextScheduledSession([], now)).toBeNull();
  });
});

describe('calculateTaskMetrics', () => {
  it('classifies due-today, overdue, and due-within-48h tasks', () => {
    const tasks = [
      task({ id: 'today', dueDate: '2026-10-24' }),
      task({ id: 'late', dueDate: '2026-10-20' }),
      task({ id: 'soon', dueDate: '2026-10-26' }),
      task({ id: 'far', dueDate: '2026-10-30' }),
      task({ id: 'done', dueDate: '2026-10-20', completed: true }),
    ];
    const metrics = calculateTaskMetrics(tasks, '2026-10-24');
    expect(metrics.pendingCount).toBe(4);
    expect(metrics.dueTodayCount).toBe(1);
    expect(metrics.overdueCount).toBe(1);
    expect(metrics.dueWithin48hCount).toBe(2);
  });
});

describe('calculateSubjectStudyHours', () => {
  it('aggregates completed session hours per subject with progress percent', () => {
    const subjects = [
      {
        id: 'sub1',
        name: 'Maths',
        code: 'MATH 201',
        color: '#000',
        targetHours: 15,
        totalHoursStudied: 0,
      },
    ] as never;
    const sessions = [
      session({ subjectId: 'sub1', durationMinutes: 300, completed: true }),
      session({ id: 's2', subjectId: 'sub1', durationMinutes: 120, completed: false }),
    ];
    const [result] = calculateSubjectStudyHours(subjects, sessions);
    expect(result.actualHoursStudied).toBe(5);
    expect(result.progressPercent).toBe(33);
  });
});
