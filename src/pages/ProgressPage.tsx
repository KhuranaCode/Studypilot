import React, { useMemo, useState } from 'react';
import {
  ChartColumn,
  Clock,
  CircleCheck,
  Flame,
  Award,
  Sparkles,
  Calendar,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Badge } from '../components/ui/Badge';
import { SubjectBadge } from '../components/ui/SubjectBadge';
import { StatCard } from '../components/ui/StatCard';
import { ProgressRing } from '../components/progress/ProgressRing';
import { WeeklyActivityChart } from '../components/dashboard/WeeklyActivityChart';
import { Tilt3DCard } from '../components/3d/Tilt3DCard';
import {
  getTodayDateString,
  calculateThisWeekCompletedHours,
  calculateStudyStreak,
  calculateWeeklyActivityData,
  calculateSubjectStudyHours,
} from '../lib/studyMetrics';

export const ProgressPage: React.FC = () => {
  const { subjects, tasks, sessions, preferences } = useApp();
  const [period, setPeriod] = useState<'week' | 'month'>('week');
  const todayStr = getTodayDateString();

  const completedSessions = useMemo(() => sessions.filter((s) => s.completed), [sessions]);

  const { filteredSessions, periodHours, periodLabel } = useMemo(() => {
    const now = new Date();
    const days = period === 'week' ? 7 : 30;
    const start = new Date(now);
    start.setDate(now.getDate() - (days - 1));
    const startStr = start.toISOString().split('T')[0];
    const filtered = completedSessions.filter((s) => s.date >= startStr && s.date <= todayStr);
    const hours = filtered.reduce((sum, s) => sum + (Number(s.durationMinutes) || 0) / 60, 0);
    return {
      filteredSessions: filtered,
      periodHours: hours,
      periodLabel: period === 'week' ? 'Past 7 days' : 'Past 30 days',
    };
  }, [completedSessions, period, todayStr]);

  const weekHours = calculateThisWeekCompletedHours(sessions);
  const completedTaskCount = tasks.filter((t) => t.completed).length;
  const streak = calculateStudyStreak(sessions, todayStr);
  const goalPercent = Math.min(
    100,
    Math.round((weekHours / (preferences.weeklyGoalHours || 20)) * 100)
  );
  const activityData = useMemo(() => calculateWeeklyActivityData(sessions, tasks), [sessions, tasks]);
  const subjectHours = useMemo(
    () => calculateSubjectStudyHours(subjects, sessions),
    [subjects, sessions]
  );
  const recentSessions = useMemo(
    () =>
      [...completedSessions]
        .sort((a, b) => (b.date + b.startTime).localeCompare(a.date + a.startTime))
        .slice(0, 5),
    [completedSessions]
  );

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <Tilt3DCard
        maxTilt={3}
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-pilot-soft/80 shadow-[0_3px_0_0_#ADBBDA,0_6px_16px_rgba(61,82,160,0.06)]"
      >
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-linear-to-br from-[#4A62B6] to-[#27356B] text-white shadow-3d-btn border-t border-white/30">
            <ChartColumn className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">Learning Analytics &amp; 3D Progress</h2>
            <p className="text-xs text-slate-500">
              Measure cumulative study hours, task velocity, and course dedication.
            </p>
          </div>
        </div>
        <div className="bg-slate-100 p-1 rounded-xl flex items-center text-xs font-semibold text-slate-600 self-start sm:self-auto shadow-3d-secondary">
          <button
            onClick={() => setPeriod('week')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              period === 'week' ? 'bg-white text-pilot-deep shadow-2xs' : 'hover:text-slate-900'
            }`}
          >
            Past 7 Days
          </button>
          <button
            onClick={() => setPeriod('month')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              period === 'month' ? 'bg-white text-pilot-deep shadow-2xs' : 'hover:text-slate-900'
            }`}
          >
            Past 30 Days
          </button>
        </div>
      </Tilt3DCard>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Tilt3DCard maxTilt={5}>
          <StatCard
            title="Total Focus Logged"
            value={`${periodHours.toFixed(1)} hrs`}
            subtitle={periodLabel}
            change={`${filteredSessions.length} sessions completed`}
            trend="up"
            icon={<Clock className="w-5 h-5" />}
            iconBg="bg-pilot-pale text-pilot-deep"
          />
        </Tilt3DCard>
        <Tilt3DCard maxTilt={5}>
          <StatCard
            title="Completed Tasks"
            value={completedTaskCount}
            subtitle={`Out of ${tasks.length} total tasks`}
            change={
              tasks.length > 0
                ? `${Math.round((completedTaskCount / tasks.length) * 100)}% overall completion`
                : 'No tasks'
            }
            trend="up"
            icon={<CircleCheck className="w-5 h-5" />}
            iconBg="bg-emerald-50 text-emerald-600"
          />
        </Tilt3DCard>
        <Tilt3DCard maxTilt={5}>
          <StatCard
            title="Current Streak"
            value={streak > 0 ? `${streak} Days` : '0 Days'}
            subtitle={streak > 0 ? 'Consecutive study days' : 'Study today to ignite a streak'}
            change={streak >= 3 ? 'Momentum building!' : 'Keep going!'}
            trend={streak > 0 ? 'up' : 'neutral'}
            icon={<Flame className="w-5 h-5" />}
            iconBg="bg-amber-50 text-amber-600"
          />
        </Tilt3DCard>
        <Tilt3DCard maxTilt={5}>
          <StatCard
            title="Weekly Goal Progress"
            value={`${goalPercent}%`}
            subtitle={`Goal: ${preferences.weeklyGoalHours} hrs/week`}
            change={`${weekHours.toFixed(1)}h logged this week`}
            trend={goalPercent >= 50 ? 'up' : 'neutral'}
            icon={<Award className="w-5 h-5" />}
            iconBg="bg-blue-50 text-blue-600"
          />
        </Tilt3DCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Tilt3DCard
          maxTilt={3}
          className="lg:col-span-2 p-6 bg-white rounded-2xl border border-pilot-soft/80 shadow-card"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-bold text-slate-900">Study Activity Trends</h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Daily distribution of focus blocks compared to your {preferences.dailyGoalHours}h
                benchmark.
              </p>
            </div>
            <Badge variant="primary" size="sm">
              Daily Target: {preferences.dailyGoalHours}h
            </Badge>
          </div>
          <WeeklyActivityChart data={activityData} targetHours={preferences.dailyGoalHours} />
        </Tilt3DCard>

        <Tilt3DCard
          maxTilt={3}
          className="p-6 flex flex-col justify-between bg-white rounded-2xl border border-pilot-soft/80 shadow-card"
        >
          <div>
            <h3 className="text-base font-bold text-slate-900 mb-1">Weekly Target Completion</h3>
            <p className="text-xs text-slate-500 mb-6">
              Calculated from verified completed focus sessions.
            </p>
            <div className="flex flex-col items-center justify-center my-4">
              <ProgressRing
                progress={goalPercent}
                size={170}
                strokeWidth={14}
                color="#3D52A0"
                backgroundColor="#EDE8F5"
                label={`${goalPercent}%`}
                sublabel={`${weekHours.toFixed(1)} / ${preferences.weeklyGoalHours}h`}
              />
            </div>
          </div>
          <div className="p-3.5 bg-pilot-pale/50 rounded-xl border border-pilot-soft/60 mt-4 space-y-1.5 shadow-3d-inset">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-700">Cadence Assessment</span>
              <span
                className={`font-bold ${goalPercent >= 60 ? 'text-emerald-600' : 'text-pilot-deep'}`}
              >
                {goalPercent >= 100
                  ? 'Target Achieved'
                  : goalPercent >= 50
                    ? 'On Track'
                    : 'Time to Study'}
              </span>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              {goalPercent >= 100
                ? "You've fulfilled your weekly study target! Great dedication to your academic milestones."
                : `You need ${Math.max(0, preferences.weeklyGoalHours - weekHours).toFixed(1)} more hours this week to reach your goal.`}
            </p>
          </div>
        </Tilt3DCard>
      </div>

      <Tilt3DCard
        maxTilt={2}
        className="p-6 bg-white rounded-2xl border border-pilot-soft/80 shadow-card"
      >
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              Subject Breakdown &amp; Effort Allocation
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Review where your cognitive hours are directed to prevent neglecting lower-credit
              courses.
            </p>
          </div>
          <span className="text-xs text-slate-400 font-medium font-mono">
            {subjects.length} Enrolled Courses
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjectHours.map((s) => (
            <div
              key={s.id}
              className="p-4 rounded-xl border border-pilot-soft bg-white hover:border-pilot-periwinkle hover:shadow-[0_4px_12px_rgba(61,82,160,0.08)] transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-full shrink-0"
                    style={{ backgroundColor: s.color }}
                  />
                  <span className="text-xs font-bold text-slate-900">{s.code}</span>
                </div>
                <Badge variant="neutral" size="sm">
                  {s.actualHoursStudied}h logged
                </Badge>
              </div>
              <p className="text-xs font-medium text-slate-700 truncate">{s.name}</p>
              <div className="space-y-1">
                <div className="flex items-center justify-between text-[11px] text-slate-500">
                  <span>Target: {s.targetHours}h</span>
                  <span className="font-semibold text-slate-700">{s.progressPercent}%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${s.progressPercent}%`, backgroundColor: s.color }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Tilt3DCard>

      <Tilt3DCard
        maxTilt={2}
        className="p-6 bg-white rounded-2xl border border-pilot-soft/80 shadow-card"
      >
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
          <div>
            <h3 className="text-base font-bold text-slate-900">Recent Completed Focus Blocks</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Verified sessions logged with timer countdown or completed study blocks.
            </p>
          </div>
          <span className="text-xs text-slate-400 font-medium font-mono">
            {completedSessions.length} Total Logs
          </span>
        </div>
        {recentSessions.length === 0 ? (
          <div className="py-8 text-center text-xs text-slate-400">
            No completed study sessions recorded yet. Launch the focus timer or mark scheduled
            blocks complete!
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {recentSessions.map((s) => (
              <div key={s.id} className="py-3 flex items-center justify-between text-xs gap-3">
                <div className="space-y-0.5 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-slate-900 truncate">{s.title}</span>
                    <SubjectBadge subjectId={s.subjectId} showCodeOnly />
                    {s.isAiGenerated && (
                      <Badge variant="primary" size="sm">
                        <Sparkles className="w-3 h-3 text-pilot-deep" /> AI
                      </Badge>
                    )}
                  </div>
                  <div className="text-[11px] text-slate-400 flex items-center gap-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {s.date}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {s.startTime} - {s.endTime}
                    </span>
                  </div>
                </div>
                <Badge variant="success" size="md" className="shrink-0">
                  +{s.durationMinutes} mins
                </Badge>
              </div>
            ))}
          </div>
        )}
      </Tilt3DCard>
    </div>
  );
};
