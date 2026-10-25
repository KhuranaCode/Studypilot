import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Flame,
  Sparkles,
  Timer,
  Plus,
  Brain,
  RefreshCw,
  Play,
  Clock,
  CircleCheck,
  Calendar,
  Award,
  ArrowRight,
  Zap,
  SquareCheckBig,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { SubjectBadge } from '../components/ui/SubjectBadge';
import { StatCard } from '../components/ui/StatCard';
import { TaskModal } from '../components/tasks/TaskModal';
import { GeneratePlanModal } from '../components/study-plan/GeneratePlanModal';
import { WeeklyActivityChart } from '../components/dashboard/WeeklyActivityChart';
import { SubjectProgressList } from '../components/dashboard/SubjectProgressList';
import { Tilt3DCard } from '../components/3d/Tilt3DCard';
import { ThreeDButton } from '../components/3d/ThreeDButton';
import {
  getTodayDateString,
  calculateTodayCompletedHours,
  calculateThisWeekCompletedHours,
  calculateStudyStreak,
  findNextScheduledSession,
  calculateWeeklyActivityData,
  calculateSubjectStudyHours,
  calculateTaskMetrics,
} from '../lib/studyMetrics';

const STUDY_TIPS = [
  {
    title: 'Active Recall & Spaced Retrieval',
    text: 'Instead of passively reading notes, quiz yourself on key principles for 5 minutes. Active retrieval boosts long-term exam retention by up to 200%.',
  },
  {
    title: 'The Feynman Explanation Method',
    text: 'Explain today’s hardest concept out loud in simple, plain language as if teaching a beginner. Any hesitation or confusion points directly to your knowledge gaps.',
  },
  {
    title: 'Ultradian Rhythm Deep Work Blocks',
    text: 'Human mental stamina naturally peaks across 90-minute ultradian cycles. Cluster two 45-minute focused Pomodoro blocks followed by a 15-minute screen-free walk.',
  },
  {
    title: 'Interleaving Problem Types',
    text: 'Mix different problem categories in the same study session rather than practicing just one. Interleaving builds stronger analytical discrimination under exam conditions.',
  },
  {
    title: 'Diffuse Thinking Consolidation',
    text: 'After tackling a challenging problem, rest quietly for 10 minutes. The brain’s default mode network continues organizing and solidifying solutions subconsciously.',
  },
];

export const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    preferences,
    tasks,
    sessions,
    subjects,
    toggleTask,
    toggleSession,
    setActiveFocusSession,
  } = useApp();

  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const [tipIndex, setTipIndex] = useState(0);

  const todayStr = getTodayDateString();
  const todayHours = calculateTodayCompletedHours(sessions, todayStr);
  const weekHours = calculateThisWeekCompletedHours(sessions);
  const streak = calculateStudyStreak(sessions, todayStr);
  const nextSession = findNextScheduledSession(sessions);
  const activityData = calculateWeeklyActivityData(sessions, tasks);
  const subjectHours = calculateSubjectStudyHours(subjects, sessions);
  const taskMetrics = calculateTaskMetrics(tasks, todayStr);

  const weeklyGoalPercent = Math.min(
    100,
    Math.round((weekHours / (preferences.weeklyGoalHours || 20)) * 100)
  );
  const todaySessions = sessions.filter((s) => s.date === todayStr);
  const upcomingTasks = tasks
    .filter((t) => !t.completed)
    .sort((a, b) => a.dueDate.localeCompare(b.dueDate))
    .slice(0, 4);

  const startFocusFor = (subjectId: string, taskId?: string) => {
    setActiveFocusSession({ subjectId, taskId });
    navigate('/focus');
  };
  const startNextSessionFocus = () => {
    setActiveFocusSession(
      nextSession ? { subjectId: nextSession.subjectId, taskId: nextSession.taskId } : null
    );
    navigate('/focus');
  };

  const currentTip = STUDY_TIPS[tipIndex % STUDY_TIPS.length];
  const coachBriefing =
    taskMetrics.overdueCount > 0
      ? `Priority Attention: You have ${taskMetrics.overdueCount} overdue assignment(s). Begin today with a single 25-minute Pomodoro block to clear the highest-friction item first.`
      : taskMetrics.highPriorityCount > 0
        ? `High-Stakes Focus: You have ${taskMetrics.highPriorityCount} high-priority tasks upcoming. Tackle them during your morning peak energy window before fatigue sets in.`
        : currentTip.text;

  return (
    <div className="space-y-6 sm:space-y-8 max-w-7xl mx-auto">
      <Tilt3DCard
        maxTilt={4}
        glareEffect
        className="bg-linear-to-r from-[#202226] via-[#2A2E38] to-[#101114] border border-[#545B66]/60 rounded-3xl p-6 sm:p-8 text-[#F2F3F5] shadow-[0_16px_36px_rgba(0,0,0,0.4),0_3px_0_0_#545B66] relative overflow-hidden"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/10 border border-white/20 text-[#7AA7FF] text-xs font-semibold mb-1 backdrop-blur-xs">
              <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>
                {streak > 0 ? `${streak}-Day Consistent Streak` : 'Start Your Study Streak Today'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Welcome back, {preferences.name.split(' ')[0]}!
            </h2>
            <p className="text-sm text-[#BFC3C9] max-w-xl font-normal leading-relaxed">
              {todayHours > 0 ? (
                <>
                  You've logged <strong className="text-[#F2F3F5]">{todayHours.toFixed(1)} hrs</strong>{' '}
                  of focused study today.
                </>
              ) : (
                <>Ready to learn? Plan your week or start a focused Pomodoro block.</>
              )}{' '}
              {nextSession ? (
                <span>
                  Next up: <strong className="text-[#7AA7FF]">{nextSession.title}</strong> at{' '}
                  {nextSession.startTime}.
                </span>
              ) : (
                <span>No upcoming session scheduled for today.</span>
              )}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <ThreeDButton
              variant="electric"
              size="md"
              onClick={() => setIsPlanModalOpen(true)}
              leftIcon={<Sparkles className="w-4 h-4" />}
            >
              Generate AI Plan
            </ThreeDButton>
            <ThreeDButton
              variant="metallic-chrome"
              size="md"
              onClick={startNextSessionFocus}
              leftIcon={<Timer className="w-4 h-4 text-pilot-deep" />}
            >
              Start Focus
            </ThreeDButton>
            <ThreeDButton
              variant="obsidian"
              size="md"
              onClick={() => setIsTaskModalOpen(true)}
              leftIcon={<Plus className="w-4 h-4" />}
            >
              Add Task
            </ThreeDButton>
          </div>
        </div>
      </Tilt3DCard>

      <Tilt3DCard
        maxTilt={3}
        className="bg-white dark:bg-[#1A1D24] rounded-2xl border border-pilot-soft/80 dark:border-slate-800 p-5 shadow-[0_3px_0_0_#ADBBDA,0_8px_24px_rgba(61,82,160,0.08)] dark:shadow-none flex flex-col sm:flex-row sm:items-center justify-between gap-4"
      >
        <div className="flex items-start sm:items-center gap-3.5">
          <div className="p-2.5 rounded-xl bg-linear-to-br from-[#4A62B6] to-[#27356B] text-white shadow-3d-btn shrink-0 border-t border-white/30">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-pilot-deep dark:text-pilot-electric uppercase tracking-wider">
                AI Study Coach Briefing
              </span>
              <Badge variant="info" size="sm">
                {taskMetrics.overdueCount > 0 ? 'Urgent Triage' : currentTip.title}
              </Badge>
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-300 mt-1 font-medium leading-relaxed max-w-3xl">
              {coachBriefing}
            </p>
          </div>
        </div>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setTipIndex((i) => (i + 1) % STUDY_TIPS.length)}
          leftIcon={<RefreshCw className="w-3.5 h-3.5" />}
          className="self-end sm:self-center shrink-0 shadow-3d-secondary active:translate-y-px"
        >
          Fresh Tip
        </Button>
      </Tilt3DCard>

      {nextSession && (
        <Tilt3DCard
          maxTilt={4}
          className="bg-linear-to-r from-pilot-pale via-white to-pilot-pale dark:from-[#202226] dark:via-[#1A1D24] dark:to-[#202226] border border-pilot-soft/90 dark:border-slate-800 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-[0_3px_0_0_#ADBBDA,0_8px_20px_rgba(61,82,160,0.06)] dark:shadow-none"
        >
          <div className="flex items-center gap-3.5">
            <div className="p-3 bg-pilot-deep text-white rounded-xl shadow-3d-btn shrink-0">
              <Play className="w-5 h-5 fill-current" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-pilot-deep dark:text-pilot-electric uppercase tracking-wider">
                  Next Scheduled Study Block
                </span>
                <SubjectBadge subjectId={nextSession.subjectId} showCodeOnly />
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                {nextSession.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {nextSession.date === todayStr ? 'Today' : nextSession.date} · {nextSession.startTime}{' '}
                - {nextSession.endTime} ({nextSession.durationMinutes} mins)
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 self-end sm:self-center">
            <ThreeDButton
              variant="metallic-deep"
              size="sm"
              onClick={() => startFocusFor(nextSession.subjectId, nextSession.taskId)}
              leftIcon={<Timer className="w-4 h-4" />}
            >
              Start Focus Session
            </ThreeDButton>
            <Link to="/study-plan">
              <Button variant="ghost" size="sm">
                View Calendar
              </Button>
            </Link>
          </div>
        </Tilt3DCard>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Tilt3DCard maxTilt={6}>
          <StatCard
            title="Today's Study Time"
            value={`${todayHours.toFixed(1)} hrs`}
            subtitle={`Target: ${preferences.dailyGoalHours}h daily`}
            change={
              todayHours >= preferences.dailyGoalHours
                ? 'Target met!'
                : `${Math.max(0, preferences.dailyGoalHours - todayHours).toFixed(1)}h left`
            }
            trend={todayHours >= preferences.dailyGoalHours ? 'up' : 'neutral'}
            icon={<Clock className="w-5 h-5" />}
            iconBg="bg-pilot-pale text-pilot-deep"
          />
        </Tilt3DCard>
        <Tilt3DCard maxTilt={6}>
          <StatCard
            title="Tasks Completed"
            value={`${taskMetrics.completedCount} / ${tasks.length}`}
            subtitle={`${taskMetrics.dueTodayCount} due today`}
            change={
              tasks.length > 0
                ? `${Math.round((taskMetrics.completedCount / tasks.length) * 100)}% done`
                : 'No tasks'
            }
            trend="up"
            icon={<CircleCheck className="w-5 h-5" />}
            iconBg="bg-emerald-50 text-emerald-600"
          />
        </Tilt3DCard>
        <Tilt3DCard maxTilt={6}>
          <StatCard
            title="Upcoming Deadlines"
            value={taskMetrics.pendingCount}
            subtitle={`${taskMetrics.dueWithin48hCount} due within 48 hours`}
            change={
              taskMetrics.overdueCount > 0
                ? `${taskMetrics.overdueCount} overdue`
                : `${taskMetrics.highPriorityCount} high priority`
            }
            trend={taskMetrics.overdueCount > 0 ? 'down' : 'neutral'}
            icon={<Calendar className="w-5 h-5" />}
            iconBg={
              taskMetrics.overdueCount > 0 ? 'bg-rose-50 text-rose-600' : 'bg-amber-50 text-amber-600'
            }
          />
        </Tilt3DCard>
        <Tilt3DCard maxTilt={6}>
          <StatCard
            title="Weekly Study Goal"
            value={`${weekHours.toFixed(1)} hrs`}
            subtitle={`Goal: ${preferences.weeklyGoalHours} hrs/week`}
            change={`${weeklyGoalPercent}% progress`}
            trend={weeklyGoalPercent >= 50 ? 'up' : 'neutral'}
            icon={<Award className="w-5 h-5" />}
            iconBg="bg-blue-50 text-blue-600"
          />
        </Tilt3DCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Tilt3DCard
            maxTilt={4}
            className="bg-white dark:bg-[#1A1D24] rounded-2xl border border-pilot-soft/80 dark:border-slate-800 p-6 shadow-card"
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Today's Study Schedule
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  AI-sequenced focus blocks calibrated for optimal cognitive stamina.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Link to="/study-plan">
                  <Button
                    variant="ghost"
                    size="sm"
                    rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                  >
                    Full Calendar
                  </Button>
                </Link>
              </div>
            </div>
            <div className="divide-y divide-slate-100 dark:divide-slate-800 mt-2">
              {todaySessions.length === 0 ? (
                <div className="py-10 text-center space-y-3">
                  <p className="text-xs text-slate-400">
                    No sessions scheduled for today. Ready to build your routine?
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <ThreeDButton
                      variant="metallic-deep"
                      size="sm"
                      onClick={() => setIsPlanModalOpen(true)}
                      leftIcon={<Sparkles className="w-3.5 h-3.5" />}
                    >
                      Generate Plan
                    </ThreeDButton>
                    <Link to="/study-plan">
                      <Button variant="ghost" size="sm" leftIcon={<Plus className="w-3.5 h-3.5" />}>
                        Add Session
                      </Button>
                    </Link>
                  </div>
                </div>
              ) : (
                todaySessions.map((session) => (
                  <div
                    key={session.id}
                    className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
                  >
                    <div className="flex items-start gap-3">
                      <button
                        onClick={() => toggleSession(session.id)}
                        className={`mt-0.5 p-1 rounded-md transition-colors ${
                          session.completed
                            ? 'text-emerald-600 hover:text-emerald-700'
                            : 'text-slate-300 dark:text-slate-600 hover:text-slate-500'
                        }`}
                        title={session.completed ? 'Mark incomplete' : 'Mark completed'}
                      >
                        <CircleCheck
                          className={`w-5 h-5 ${
                            session.completed ? 'fill-emerald-100 dark:fill-emerald-900/40' : ''
                          }`}
                        />
                      </button>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span
                            className={`text-sm font-semibold transition-colors ${
                              session.completed
                                ? 'line-through text-slate-400'
                                : 'text-slate-900 dark:text-white group-hover:text-pilot-electric'
                            }`}
                          >
                            {session.title}
                          </span>
                          <SubjectBadge subjectId={session.subjectId} showCodeOnly />
                          {session.isAiGenerated && (
                            <Badge variant="primary" size="sm">
                              <Sparkles className="w-3 h-3 text-indigo-500" /> AI Block
                            </Badge>
                          )}
                        </div>
                        {session.notes && (
                          <p className="text-xs text-slate-500 dark:text-slate-400">{session.notes}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 self-end sm:self-center">
                      <div className="text-right">
                        <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 block">
                          {session.startTime} - {session.endTime}
                        </span>
                        <span className="text-[11px] text-slate-400 dark:text-slate-500 block">
                          {session.durationMinutes} min
                        </span>
                      </div>
                      {!session.completed && (
                        <ThreeDButton
                          variant="metallic-chrome"
                          size="sm"
                          onClick={() => startFocusFor(session.subjectId, session.taskId)}
                          leftIcon={<Timer className="w-3.5 h-3.5 text-pilot-deep" />}
                          className="h-8 text-xs"
                        >
                          Focus
                        </ThreeDButton>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </Tilt3DCard>

          <Tilt3DCard
            maxTilt={3}
            className="bg-white dark:bg-[#1A1D24] rounded-2xl border border-pilot-soft/80 dark:border-slate-800 p-6 shadow-card"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Weekly Study Activity
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Hours logged per day vs your {preferences.dailyGoalHours}h daily target.
                </p>
              </div>
              <Link to="/progress">
                <Button variant="ghost" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                  Detailed Analytics
                </Button>
              </Link>
            </div>
            <WeeklyActivityChart data={activityData} targetHours={preferences.dailyGoalHours} />
          </Tilt3DCard>
        </div>

        <div className="space-y-6">
          <Tilt3DCard
            maxTilt={4}
            className="p-5 bg-white dark:bg-[#1A1D24] border border-pilot-soft/80 dark:border-slate-800 rounded-2xl shadow-card"
          >
            <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide mb-3 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-pilot-deep dark:text-pilot-electric" /> Quick Shortcuts
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsTaskModalOpen(true)}
                leftIcon={<Plus className="w-3.5 h-3.5" />}
                className="justify-start shadow-3d-secondary active:translate-y-px"
              >
                Add Task
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={startNextSessionFocus}
                leftIcon={<Timer className="w-3.5 h-3.5 text-indigo-600 dark:text-pilot-electric" />}
                className="justify-start shadow-3d-secondary active:translate-y-px"
              >
                Start Timer
              </Button>
              <Link to="/study-plan" className="block">
                <Button
                  variant="outline"
                  size="sm"
                  leftIcon={<Calendar className="w-3.5 h-3.5" />}
                  className="w-full justify-start shadow-3d-secondary active:translate-y-px"
                >
                  Schedule
                </Button>
              </Link>
              <Link to="/tasks" className="block">
                <Button
                  variant="outline"
                  size="sm"
                  leftIcon={<SquareCheckBig className="w-3.5 h-3.5" />}
                  className="w-full justify-start shadow-3d-secondary active:translate-y-px"
                >
                  All Tasks
                </Button>
              </Link>
            </div>
          </Tilt3DCard>

          <Tilt3DCard
            maxTilt={4}
            className="bg-white dark:bg-[#1A1D24] rounded-2xl border border-pilot-soft/80 dark:border-slate-800 p-6 shadow-card"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Upcoming Deadlines
              </h3>
              <Link to="/tasks">
                <Button variant="ghost" size="sm" className="text-xs">
                  View All ({tasks.length})
                </Button>
              </Link>
            </div>
            <div className="divide-y divide-slate-100 dark:divide-slate-800 mt-2">
              {upcomingTasks.length === 0 ? (
                <p className="py-6 text-center text-xs text-slate-400">All tasks completed.</p>
              ) : (
                upcomingTasks.map((task) => {
                  const isOverdue = task.dueDate < todayStr;
                  const isDueToday = task.dueDate === todayStr;
                  return (
                    <div key={task.id} className="py-3 space-y-1.5">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => toggleTask(task.id)}
                            className="text-slate-300 dark:text-slate-600 hover:text-emerald-600 transition-colors"
                            title="Mark complete"
                          >
                            <CircleCheck className="w-4 h-4" />
                          </button>
                          <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 line-clamp-1">
                            {task.title}
                          </span>
                        </div>
                        <Badge
                          variant={
                            isOverdue || task.priority === 'high'
                              ? 'danger'
                              : task.priority === 'medium'
                                ? 'warning'
                                : 'neutral'
                          }
                          size="sm"
                        >
                          {isOverdue ? 'Overdue' : task.priority}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-[11px] pl-6 text-slate-500 dark:text-slate-400">
                        <SubjectBadge subjectId={task.subjectId} showCodeOnly />
                        <span
                          className={
                            isOverdue
                              ? 'text-rose-600 dark:text-rose-400 font-bold'
                              : isDueToday
                                ? 'text-amber-600 dark:text-amber-400 font-bold'
                                : ''
                          }
                        >
                          Due {task.dueDate}
                        </span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
            <ThreeDButton
              variant="metallic-chrome"
              size="sm"
              onClick={() => setIsTaskModalOpen(true)}
              className="w-full mt-4 text-xs"
              leftIcon={<Plus className="w-3.5 h-3.5" />}
            >
              Add New Assignment
            </ThreeDButton>
          </Tilt3DCard>

          <Tilt3DCard
            maxTilt={4}
            className="bg-white dark:bg-[#1A1D24] rounded-2xl border border-pilot-soft/80 dark:border-slate-800 p-6 shadow-card"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 mb-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Subject Progress</h3>
              <span className="text-xs text-slate-400">Hours Target</span>
            </div>
            <SubjectProgressList subjects={subjectHours} />
          </Tilt3DCard>
        </div>
      </div>

      <TaskModal isOpen={isTaskModalOpen} onClose={() => setIsTaskModalOpen(false)} />
      <GeneratePlanModal isOpen={isPlanModalOpen} onClose={() => setIsPlanModalOpen(false)} />
    </div>
  );
};
