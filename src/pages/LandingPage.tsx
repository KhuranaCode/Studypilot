import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Flame,
  Pause,
  Play,
  CircleCheck,
  BookOpen,
  ArrowRight,
  Sparkles,
  Layers,
  Cpu,
  Timer,
  Clock,
  SquareCheckBig,
  ChartColumn,
  Compass,
  ShieldCheck,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { ThreeDSceneCanvas } from '../components/3d/ThreeDSceneCanvas';
import { Tilt3DCard } from '../components/3d/Tilt3DCard';
import { ThreeDButton } from '../components/3d/ThreeDButton';
import { ThemeToggle } from '../components/ui/ThemeToggle';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';

const formatCountdown = (totalSeconds: number) => {
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

const StudyFlightPlanCard: React.FC = () => {
  const { isDark } = useTheme();
  const [isRunning, setIsRunning] = useState(true);
  const [remainingSeconds, setRemainingSeconds] = useState(1458);
  const [completedBlocks, setCompletedBlocks] = useState<Record<string, boolean>>({ 'task-1': true });

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setRemainingSeconds((s) => (s > 0 ? s - 1 : 1500));
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning]);

  const toggleBlock = (id: string) => {
    setCompletedBlocks((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <div
        className={`rounded-3xl border p-6 sm:p-7 transition-all duration-300 ${
          isDark
            ? 'bg-[#181A20] border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)]'
            : 'bg-white border-pilot-soft/90 shadow-[0_20px_50px_rgba(61,82,160,0.08)]'
        }`}
      >
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800/80">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span
              className={`text-xs font-bold uppercase tracking-wider ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              Today's Study Flight Plan
            </span>
          </div>
          <div
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
              isDark
                ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                : 'bg-amber-50 text-amber-700 border border-amber-200'
            }`}
          >
            <Flame className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
            <span>7-Day Streak</span>
          </div>
        </div>

        <div
          className={`mt-5 p-4 rounded-2xl border transition-all ${
            isDark
              ? 'bg-[#1F222A] border-slate-800 text-white'
              : 'bg-gradient-to-r from-pilot-pale/50 via-white to-pilot-pale/30 border-pilot-soft'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-500 dark:text-blue-400 border border-blue-500/20">
                CS 301
              </span>
              <span className="text-xs font-semibold truncate max-w-[180px] sm:max-w-[220px]">
                Algorithm Analysis &amp; Graphs
              </span>
            </div>
            <button
              onClick={() => setIsRunning(!isRunning)}
              className="p-2 rounded-xl transition-transform active:scale-95 flex items-center justify-center bg-[#3D52A0] hover:bg-[#34468B] text-white shadow-sm"
              title={isRunning ? 'Pause Focus' : 'Resume Focus'}
            >
              {isRunning ? (
                <Pause className="w-3.5 h-3.5" />
              ) : (
                <Play className="w-3.5 h-3.5 fill-current" />
              )}
            </button>
          </div>
          <div className="mt-3 flex items-baseline justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight">
                {formatCountdown(remainingSeconds)}
              </span>
              <span
                className={`text-xs font-medium uppercase tracking-wider ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                {isRunning ? 'Deep Focus' : 'Paused'}
              </span>
            </div>
            <div
              className={`text-xs font-semibold font-mono ${
                isDark ? 'text-blue-400' : 'text-pilot-deep'
              }`}
            >
              25m Block
            </div>
          </div>
          <div className="mt-2.5 w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#3D52A0] to-[#7091E6] rounded-full transition-all duration-1000"
              style={{
                width: `${Math.min(100, Math.max(5, ((1500 - remainingSeconds) / 1500) * 100))}%`,
              }}
            />
          </div>
        </div>

        <div className="mt-5 space-y-2.5">
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider px-1">
            <span>Scheduled Blocks</span>
            <span>Target: 4.0 hrs</span>
          </div>

          <div
            onClick={() => toggleBlock('task-1')}
            className={`p-3 rounded-xl border flex items-center justify-between gap-3 cursor-pointer transition-all ${
              isDark
                ? 'bg-[#15171C] border-slate-800 hover:border-slate-700'
                : 'bg-slate-50/70 border-slate-200/80 hover:border-pilot-soft'
            }`}
          >
            <div className="flex items-center gap-3">
              <button
                type="button"
                className={`transition-colors ${
                  completedBlocks['task-1']
                    ? 'text-emerald-500'
                    : isDark
                      ? 'text-slate-600'
                      : 'text-slate-300'
                }`}
              >
                <CircleCheck
                  className={`w-4 h-4 ${completedBlocks['task-1'] ? 'fill-emerald-500/20' : ''}`}
                />
              </button>
              <div>
                <p
                  className={`text-xs font-semibold transition-colors ${
                    completedBlocks['task-1']
                      ? 'line-through text-slate-400 dark:text-slate-500'
                      : isDark
                        ? 'text-slate-200'
                        : 'text-slate-900'
                  }`}
                >
                  MATH 201 · Multivariable Calculus
                </p>
                <p className="text-[11px] text-slate-400 dark:text-slate-500">
                  09:00 - 10:30 · 1.5 hrs completed
                </p>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
              Done
            </span>
          </div>

          <div
            className={`p-3 rounded-xl border flex items-center justify-between gap-3 transition-all ${
              isDark ? 'bg-blue-950/20 border-blue-500/30' : 'bg-blue-50/60 border-blue-200/80'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
              <div>
                <p className="text-xs font-bold text-blue-600 dark:text-blue-400">
                  CS 301 · Graph Traversal &amp; Dijkstra
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  11:00 - 12:15 · Active Focus Block
                </p>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
              Now
            </span>
          </div>

          <div
            onClick={() => toggleBlock('task-3')}
            className={`p-3 rounded-xl border flex items-center justify-between gap-3 cursor-pointer transition-all ${
              isDark
                ? 'bg-[#15171C] border-slate-800 hover:border-slate-700'
                : 'bg-slate-50/70 border-slate-200/80 hover:border-pilot-soft'
            }`}
          >
            <div className="flex items-center gap-3">
              <button
                type="button"
                className={`transition-colors ${
                  completedBlocks['task-3']
                    ? 'text-emerald-500'
                    : isDark
                      ? 'text-slate-600'
                      : 'text-slate-300'
                }`}
              >
                <CircleCheck
                  className={`w-4 h-4 ${completedBlocks['task-3'] ? 'fill-emerald-500/20' : ''}`}
                />
              </button>
              <div>
                <p
                  className={`text-xs font-semibold transition-colors ${
                    completedBlocks['task-3']
                      ? 'line-through text-slate-400 dark:text-slate-500'
                      : isDark
                        ? 'text-slate-200'
                        : 'text-slate-900'
                  }`}
                >
                  PHYS 101 · Electromagnetic Fields
                </p>
                <p className="text-[11px] text-slate-400 dark:text-slate-500">
                  14:30 - 15:45 · Spaced Review
                </p>
              </div>
            </div>
            <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
              2:30 PM
            </span>
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-3 gap-2 text-center">
          <div>
            <div className="text-sm font-extrabold font-mono text-slate-900 dark:text-white">
              3.5 / 4.0h
            </div>
            <div className="text-[10px] text-slate-400 dark:text-slate-500 font-medium uppercase tracking-wider">
              Today's Goal
            </div>
          </div>
          <div>
            <div className="text-sm font-extrabold font-mono text-emerald-500">88%</div>
            <div className="text-[10px] text-slate-400 dark:text-slate-500 font-medium uppercase tracking-wider">
              Weekly Pacing
            </div>
          </div>
          <div>
            <div className="text-sm font-extrabold font-mono text-blue-500 dark:text-blue-400">
              0 Overdue
            </div>
            <div className="text-[10px] text-slate-400 dark:text-slate-500 font-medium uppercase tracking-wider">
              On Schedule
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 overflow-x-hidden relative font-sans ${
        isDark
          ? 'bg-[#101114] text-[#F2F3F5] selection:bg-[#7AA7FF] selection:text-[#101114]'
          : 'bg-[#EDE8F5] text-[#1B2447] selection:bg-[#7091E6] selection:text-white'
      }`}
    >
      <ThreeDSceneCanvas
        className="fixed inset-0 pointer-events-none z-0 opacity-35"
        intensity="subtle"
        particleCount={160}
      />

      <header className="fixed top-4 inset-x-0 z-50 max-w-6xl mx-auto px-4 sm:px-6">
        <div
          className={`rounded-2xl transition-all duration-300 backdrop-blur-xl border flex items-center justify-between px-5 h-16 ${
            isDark
              ? scrollY > 40
                ? 'bg-[#101114]/90 border-[#545B66]/40 shadow-[0_12px_30px_rgba(0,0,0,0.6),0_1px_0_0_rgba(242,243,245,0.1)]'
                : 'bg-[#202226]/70 border-[#545B66]/30 shadow-[0_8px_20px_rgba(0,0,0,0.4)]'
              : scrollY > 40
                ? 'bg-white/90 border-pilot-soft/70 shadow-[0_12px_30px_rgba(61,82,160,0.12),0_1px_0_0_#ADBBDA]'
                : 'bg-white/70 border-pilot-soft/50 shadow-[0_8px_20px_rgba(61,82,160,0.08)]'
          }`}
        >
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4A62B6] to-[#27356B] flex items-center justify-center text-white shadow-3d-btn group-hover:scale-105 transition-transform duration-200 border-t border-white/30">
              <BookOpen className="w-5 h-5 text-[#F2F3F5]" />
            </div>
            <div>
              <span
                className={`text-base font-extrabold tracking-tight block leading-tight transition-colors ${
                  isDark
                    ? 'text-[#F2F3F5] group-hover:text-[#7AA7FF]'
                    : 'text-slate-900 group-hover:text-pilot-deep'
                }`}
              >
                StudyPilot
              </span>
              <span
                className={`text-[10px] font-bold tracking-widest uppercase block leading-none ${
                  isDark ? 'text-[#858B95]' : 'text-pilot-muted'
                }`}
              >
                3D ACADEMIC ENGINE
              </span>
            </div>
          </Link>

          <nav
            className={`hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider ${
              isDark ? 'text-[#BFC3C9]' : 'text-slate-600'
            }`}
          >
            <a
              href="#features"
              className={`hover:translate-y-[-1px] transition-all inline-block ${
                isDark ? 'hover:text-[#F2F3F5]' : 'hover:text-pilot-deep'
              }`}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className={`hover:translate-y-[-1px] transition-all inline-block ${
                isDark ? 'hover:text-[#F2F3F5]' : 'hover:text-pilot-deep'
              }`}
            >
              Workflow
            </a>
            <a
              href="#preview"
              className={`hover:translate-y-[-1px] transition-all inline-block ${
                isDark ? 'hover:text-[#F2F3F5]' : 'hover:text-pilot-deep'
              }`}
            >
              Workspace
            </a>
          </nav>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <ThemeToggle showLabel={false} />
            <Link to="/login">
              <Button
                variant="ghost"
                size="sm"
                className={`text-xs font-medium ${
                  isDark
                    ? 'text-[#BFC3C9] hover:text-[#F2F3F5] hover:bg-[#202226]/80'
                    : 'text-slate-700 hover:text-pilot-deep hover:bg-pilot-pale'
                }`}
              >
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <ThreeDButton
                variant="metallic-deep"
                size="sm"
                rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Launch App
              </ThreeDButton>
            </Link>
          </div>
        </div>
      </header>

      <section className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 text-center lg:text-left space-y-6">
              <div
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold backdrop-blur-md ${
                  isDark
                    ? 'bg-[#202226]/80 border border-[#545B66]/40 text-[#7AA7FF] shadow-[0_2px_8px_rgba(0,0,0,0.3)]'
                    : 'bg-white border border-pilot-soft text-pilot-deep shadow-3d-secondary'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-[#7AA7FF]" />
                <span className="tracking-wide">Automated Course Scheduling &amp; Focus Engine</span>
              </div>
              <h1
                className={`text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] ${
                  isDark ? 'text-[#F2F3F5]' : 'text-slate-900'
                }`}
              >
                Organize Your Courses.{' '}
                <span className="text-pilot-deep dark:text-[#7AA7FF] block sm:inline">
                  Prepare for Every Exam.
                </span>
              </h1>
              <p
                className={`text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed ${
                  isDark ? 'text-[#858B95]' : 'text-slate-600'
                }`}
              >
                StudyPilot transforms your course syllabi, assignments, and exam deadlines into a
                balanced, conflict-free weekly schedule. Track focus intervals with an integrated
                timer and sync your progress securely.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <ThreeDButton
                  variant="metallic-deep"
                  size="lg"
                  onClick={() => navigate('/signup')}
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Start Planning Free
                </ThreeDButton>
                <a href="#preview" className="w-full sm:w-auto">
                  <ThreeDButton
                    variant={isDark ? 'obsidian' : 'metallic-chrome'}
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    Explore Dashboard
                  </ThreeDButton>
                </a>
              </div>
              <div
                className={`pt-6 grid grid-cols-3 gap-4 text-center lg:text-left border-t ${
                  isDark ? 'border-[#202226]' : 'border-pilot-soft/50'
                }`}
              >
                <div>
                  <div
                    className={`text-xl font-extrabold font-mono ${
                      isDark ? 'text-[#F2F3F5]' : 'text-slate-900'
                    }`}
                  >
                    100%
                  </div>
                  <div
                    className={`text-[11px] font-medium uppercase tracking-wider ${
                      isDark ? 'text-[#858B95]' : 'text-slate-500'
                    }`}
                  >
                    Client &amp; Cloud Sync
                  </div>
                </div>
                <div>
                  <div className="text-xl font-extrabold text-[#7AA7FF] font-mono">0 Trackers</div>
                  <div
                    className={`text-[11px] font-medium uppercase tracking-wider ${
                      isDark ? 'text-[#858B95]' : 'text-slate-500'
                    }`}
                  >
                    100% Private
                  </div>
                </div>
                <div>
                  <div
                    className={`text-xl font-extrabold font-mono ${
                      isDark ? 'text-[#BFC3C9]' : 'text-pilot-deep'
                    }`}
                  >
                    45 Min
                  </div>
                  <div
                    className={`text-[11px] font-medium uppercase tracking-wider ${
                      isDark ? 'text-[#858B95]' : 'text-slate-500'
                    }`}
                  >
                    Flow Cycles
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <StudyFlightPlanCard />
            </div>
          </div>
        </div>
      </section>

      <section
        id="preview"
        className={`relative py-24 z-10 transition-colors ${
          isDark
            ? 'bg-gradient-to-b from-[#101114] via-[#202226]/40 to-[#101114]'
            : 'bg-gradient-to-b from-[#EDE8F5] via-white/40 to-[#EDE8F5]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-semibold mb-3 ${
                isDark
                  ? 'bg-[#202226] border border-[#545B66]/40 text-[#BFC3C9]'
                  : 'bg-white border border-pilot-soft text-pilot-deep'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-pilot-deep" />
              <span>SPATIAL WORKSPACE PREVIEW</span>
            </div>
            <h2
              className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${
                isDark ? 'text-[#F2F3F5]' : 'text-slate-900'
              }`}
            >
              The High-Performance Academic Cockpit
            </h2>
            <p className={`text-base mt-3 ${isDark ? 'text-[#858B95]' : 'text-slate-600'}`}>
              Explore your live courses, adaptive schedule blocks, and focus velocity in real-time.
            </p>
          </div>

          <Tilt3DCard
            maxTilt={4}
            scaleOnHover={1.01}
            className={`max-w-5xl mx-auto rounded-3xl overflow-hidden border shadow-elevated ${
              isDark
                ? 'bg-[#101114] border-[#545B66]/60 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_2px_0_0_#545B66]'
                : 'bg-white border-pilot-soft/80 shadow-[0_25px_60px_-15px_rgba(61,82,160,0.15),0_2px_0_0_#ADBBDA]'
            }`}
          >
            <div
              className={`px-5 py-3.5 flex items-center justify-between border-b ${
                isDark
                  ? 'bg-gradient-to-r from-[#202226] to-[#101114] border-[#545B66]/40'
                  : 'bg-gradient-to-r from-pilot-dark to-[#27346A] border-pilot-dark text-white'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#E05252] shadow-xs" />
                  <span className="w-3 h-3 rounded-full bg-[#E5B53C] shadow-xs" />
                  <span className="w-3 h-3 rounded-full bg-[#3EB87A] shadow-xs" />
                </div>
                <span
                  className={`text-xs font-mono font-semibold ml-3 hidden sm:inline ${
                    isDark ? 'text-[#858B95]' : 'text-pilot-soft'
                  }`}
                >
                  studypilot.engine / workspace-live
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold font-mono ${
                    isDark
                      ? 'bg-[#7AA7FF]/15 border border-[#7AA7FF]/30 text-[#7AA7FF]'
                      : 'bg-white/10 border border-white/20 text-white'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" /> AI Engine v2.4
                </span>
                <Link to="/dashboard">
                  <ThreeDButton variant="metallic-chrome" size="sm">
                    Enter Live Demo
                  </ThreeDButton>
                </Link>
              </div>
            </div>

            <div
              className={`p-6 sm:p-8 space-y-6 ${
                isDark
                  ? 'bg-gradient-to-b from-[#18191D] to-[#101114]'
                  : 'bg-gradient-to-b from-pilot-pale/50 to-white'
              }`}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Daily Focus', value: '3h 45m', delta: '+45m vs target', deltaClass: 'text-emerald-500' },
                  { label: 'Tasks Cleared', value: '5 / 7', delta: '71% Velocity', deltaClass: 'text-pilot-deep' },
                  { label: 'Study Streak', value: '7 Days', delta: 'High Momentum', deltaClass: 'text-amber-500' },
                  {
                    label: 'Exam Readiness',
                    value: '94%',
                    delta: 'Mastery Tier 1',
                    deltaClass: isDark ? 'text-[#BFC3C9]' : 'text-pilot-periwinkle',
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className={`p-4 rounded-xl border shadow-inner ${
                      isDark
                        ? 'bg-[#202226]/80 border-[#545B66]/30'
                        : 'bg-white border-pilot-soft/70 shadow-xs'
                    }`}
                  >
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider block ${
                        isDark ? 'text-[#858B95]' : 'text-slate-500'
                      }`}
                    >
                      {stat.label}
                    </span>
                    <div
                      className={`text-2xl font-bold font-mono mt-1 ${
                        isDark ? 'text-[#F2F3F5]' : 'text-slate-900'
                      }`}
                    >
                      {stat.value}
                    </div>
                    <span className={`text-[11px] font-semibold font-mono ${stat.deltaClass}`}>
                      {stat.delta}
                    </span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div
                  className={`p-5 rounded-2xl border space-y-3 ${
                    isDark
                      ? 'bg-[#202226]/70 border-[#545B66]/40'
                      : 'bg-white border-pilot-soft/70 shadow-card'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider flex items-center gap-2 ${
                        isDark ? 'text-[#F2F3F5]' : 'text-slate-800'
                      }`}
                    >
                      <Timer className="w-4 h-4 text-pilot-deep" />
                      Today's Neural Study Blocks
                    </span>
                    <Badge variant="primary" size="sm" className="bg-pilot-deep text-white border-none">
                      Active
                    </Badge>
                  </div>
                  <div className="space-y-2.5">
                    <div
                      className={`p-3 rounded-xl border flex items-center justify-between text-xs ${
                        isDark
                          ? 'bg-[#101114]/90 border-emerald-500/30'
                          : 'bg-emerald-50/50 border-emerald-200'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <CircleCheck className="w-4 h-4 text-emerald-500" />
                        <span className={`font-medium ${isDark ? 'text-[#F2F3F5]' : 'text-slate-900'}`}>
                          09:00 - 10:30 · Calculus Problem Set
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-emerald-500 font-semibold">
                        Completed
                      </span>
                    </div>
                    <div
                      className={`p-3 rounded-xl border flex items-center justify-between text-xs ${
                        isDark
                          ? 'bg-[#101114]/90 border-[#7AA7FF]/40'
                          : 'bg-pilot-pale/60 border-pilot-soft'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Timer className="w-4 h-4 text-pilot-deep animate-pulse" />
                        <span
                          className={`font-semibold ${isDark ? 'text-[#F2F3F5]' : 'text-pilot-deep'}`}
                        >
                          13:00 - 14:30 · Dijkstra Graph Algos
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-pilot-deep font-semibold">
                        Current
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className={`p-5 rounded-2xl border space-y-3 ${
                    isDark
                      ? 'bg-[#202226]/70 border-[#545B66]/40'
                      : 'bg-white border-pilot-soft/70 shadow-card'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider flex items-center gap-2 ${
                        isDark ? 'text-[#F2F3F5]' : 'text-slate-800'
                      }`}
                    >
                      <Clock className="w-4 h-4 text-rose-500" />
                      Priority Milestones
                    </span>
                    <span className="text-[10px] font-mono font-bold text-rose-500 uppercase bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                      Exam in 3 Days
                    </span>
                  </div>
                  <div className="space-y-2.5">
                    <div
                      className={`p-3 rounded-xl border flex items-center justify-between text-xs ${
                        isDark
                          ? 'bg-[#101114]/90 border-[#545B66]/30'
                          : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      <div>
                        <p className={`font-medium ${isDark ? 'text-[#F2F3F5]' : 'text-slate-900'}`}>
                          HIST 110 · Industrial Revolution Exam
                        </p>
                        <span className={`text-[11px] ${isDark ? 'text-[#858B95]' : 'text-slate-500'}`}>
                          Closed-book essay exam
                        </span>
                      </div>
                      <span className="text-[11px] font-bold text-rose-500 font-mono">CRITICAL</span>
                    </div>
                    <div
                      className={`p-3 rounded-xl border flex items-center justify-between text-xs ${
                        isDark
                          ? 'bg-[#101114]/90 border-[#545B66]/30'
                          : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      <div>
                        <p className={`font-medium ${isDark ? 'text-[#F2F3F5]' : 'text-slate-900'}`}>
                          CS 250 · Graph Search Benchmarks
                        </p>
                        <span className={`text-[11px] ${isDark ? 'text-[#858B95]' : 'text-slate-500'}`}>
                          Due tomorrow at 23:59
                        </span>
                      </div>
                      <span className="text-[11px] font-bold text-amber-500 font-mono">HIGH</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tilt3DCard>
        </div>
      </section>

      <section id="features" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-pilot-deep mb-2 font-mono">
              ENGINEERED FOR RIGOROUS ACADEMICS
            </h2>
            <h3
              className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${
                isDark ? 'text-[#F2F3F5]' : 'text-slate-900'
              }`}
            >
              Everything you need to master your degree.
            </h3>
            <p className={`mt-4 text-base ${isDark ? 'text-[#858B95]' : 'text-slate-600'}`}>
              Eliminate exam anxiety and erratic study habits. StudyPilot translates your workload
              into a systematic, low-friction study rhythm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Sparkles,
                gradient: 'from-[#3D52A0] to-[#27356B]',
                title: 'AI Study Planning',
                text: 'Autonomous algorithm balances subject difficulty, exam dates, and daily fatigue limits into an adaptive schedule.',
                bullets: ['Exam load balancing', 'Automated conflict detection'],
                bulletClass: 'text-pilot-deep',
              },
              {
                icon: SquareCheckBig,
                gradient: 'from-[#7091E6] to-[#3D52A0]',
                title: 'Tasks & Milestones',
                text: 'Track assignments, problem sets, and lab write-ups with urgency classifications and one-click completion status.',
                bullets: ['Urgency prioritization', 'Overdue & due-soon notices'],
                bulletClass: 'text-pilot-periwinkle',
              },
              {
                icon: Timer,
                gradient: 'from-[#545B66] to-[#202226]',
                title: '3D Focus Cockpit',
                text: 'Immersive Pomodoro timer linked to subject tags with real-time 3D gyroscopic visualizer and lo-fi study sounds.',
                bullets: ['25, 45, 60m flow cycles', 'Interactive 3D gyro feedback'],
                bulletClass: 'text-pilot-deep',
              },
              {
                icon: ChartColumn,
                gradient: 'from-[#3D52A0] to-[#545B66]',
                title: 'Progress Analytics',
                text: 'Visualize daily hours, streaks, and subject completion rings with evidence-based cognitive study coaching.',
                bullets: ['Daily velocity charts', 'Subject mastery rings'],
                bulletClass: 'text-pilot-deep',
              },
            ].map((feature) => (
              <Tilt3DCard
                key={feature.title}
                maxTilt={8}
                className={`p-6 rounded-2xl space-y-4 border transition-all ${
                  isDark
                    ? 'bg-[#202226]/80 border-[#545B66]/40 hover:border-[#7AA7FF]/60'
                    : 'bg-white border-pilot-soft/80 shadow-card hover:border-pilot-deep'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} border border-white/20 flex items-center justify-center text-white shadow-3d-btn`}
                >
                  <feature.icon className="w-6 h-6 text-[#F2F3F5]" />
                </div>
                <h4 className={`text-lg font-bold ${isDark ? 'text-[#F2F3F5]' : 'text-slate-900'}`}>
                  {feature.title}
                </h4>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-[#858B95]' : 'text-slate-600'}`}>
                  {feature.text}
                </p>
                <ul
                  className={`text-xs space-y-2 pt-3 border-t ${
                    isDark ? 'text-[#BFC3C9] border-[#545B66]/30' : 'text-slate-600 border-slate-100'
                  }`}
                >
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2">
                      <CircleCheck className={`w-3.5 h-3.5 ${feature.bulletClass}`} /> {bullet}
                    </li>
                  ))}
                </ul>
              </Tilt3DCard>
            ))}
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className={`py-24 border-y relative z-10 transition-colors ${
          isDark ? 'bg-[#18191D]/80 border-[#545B66]/30' : 'bg-white/80 border-pilot-soft/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-pilot-deep mb-2 font-mono">
              SIMPLE 3-STEP SEQUENCE
            </h2>
            <h3
              className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
                isDark ? 'text-[#F2F3F5]' : 'text-slate-900'
              }`}
            >
              How StudyPilot Orchestrates Your Semester
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                gradient: 'from-[#4A62B6] to-[#27356B]',
                title: 'Add Subjects & Deadlines',
                text: 'Input your courses, syllabus dates, assignments, and exams. Assign target hours and priorities in seconds.',
              },
              {
                step: '02',
                gradient: 'from-[#7091E6] to-[#3D52A0]',
                title: 'Generate AI Schedule',
                text: 'Click Generate Plan. The engine evaluates task urgency and outputs daily focused blocks that prevent last-minute cramming.',
              },
              {
                step: '03',
                gradient: 'from-[#545B66] to-[#202226]',
                title: 'Execute in Flow State',
                text: 'Trigger the focus cockpit for each study block, log completed tasks, and watch your weekly streaks and mastery climb.',
              },
            ].map((item) => (
              <Tilt3DCard
                key={item.step}
                maxTilt={6}
                className={`p-8 rounded-3xl space-y-4 border ${
                  isDark
                    ? 'bg-[#202226]/90 border-[#545B66]/40'
                    : 'bg-white border-pilot-soft/70 shadow-card'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} text-white font-mono font-bold flex items-center justify-center text-base shadow-3d-btn border-t border-white/30`}
                >
                  {item.step}
                </div>
                <h4 className={`text-xl font-bold ${isDark ? 'text-[#F2F3F5]' : 'text-slate-900'}`}>
                  {item.title}
                </h4>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-[#858B95]' : 'text-slate-600'}`}>
                  {item.text}
                </p>
              </Tilt3DCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 relative z-10 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <Tilt3DCard
            maxTilt={4}
            className={`p-12 sm:p-16 rounded-3xl border shadow-elevated ${
              isDark
                ? 'bg-gradient-to-b from-[#202226] to-[#101114] border-[#545B66]/50 shadow-[0_30px_70px_rgba(0,0,0,0.8),0_2px_0_0_#545B66]'
                : 'bg-gradient-to-b from-white to-pilot-pale/80 border-pilot-soft/80 shadow-[0_30px_70px_rgba(61,82,160,0.15),0_2px_0_0_#ADBBDA]'
            }`}
          >
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-semibold mb-6 ${
                isDark
                  ? 'bg-[#101114] border border-[#545B66]/50 text-[#7AA7FF]'
                  : 'bg-white border border-pilot-soft text-pilot-deep shadow-3d-secondary'
              }`}
            >
              <Compass className="w-3.5 h-3.5 text-pilot-deep" />
              <span>COMMENCE ACADEMIC FLIGHT PATH</span>
            </div>
            <h2
              className={`text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 ${
                isDark ? 'text-[#F2F3F5]' : 'text-slate-900'
              }`}
            >
              Transform How You Study This Semester
            </h2>
            <p
              className={`text-base sm:text-lg max-w-2xl mx-auto mb-10 ${
                isDark ? 'text-[#858B95]' : 'text-slate-600'
              }`}
            >
              Built for students who demand structured clarity, proactive pacing, and verified
              mastery.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <ThreeDButton
                variant="metallic-deep"
                size="lg"
                onClick={() => navigate('/signup')}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Create Account Free
              </ThreeDButton>
              <ThreeDButton
                variant={isDark ? 'obsidian' : 'metallic-chrome'}
                size="lg"
                onClick={() => navigate('/dashboard')}
              >
                Launch Live App
              </ThreeDButton>
            </div>
          </Tilt3DCard>
        </div>
      </section>

      <footer
        className={`border-t py-14 relative z-10 transition-colors ${
          isDark
            ? 'bg-[#101114] border-[#545B66]/40 text-[#858B95]'
            : 'bg-white border-pilot-soft/60 text-slate-600'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#4A62B6] to-[#27356B] flex items-center justify-center text-white shadow-3d-btn border-t border-white/20">
              <BookOpen className="w-4 h-4 text-[#F2F3F5]" />
            </div>
            <div>
              <span
                className={`font-extrabold text-base block ${
                  isDark ? 'text-[#F2F3F5]' : 'text-slate-900'
                }`}
              >
                StudyPilot
              </span>
              <span className="text-xs">Plan Smarter. Study in Depth. Achieve More.</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold">
            <Link
              to="/login"
              className={`transition-colors ${isDark ? 'hover:text-[#F2F3F5]' : 'hover:text-pilot-deep'}`}
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className={`transition-colors ${isDark ? 'hover:text-[#F2F3F5]' : 'hover:text-pilot-deep'}`}
            >
              Sign Up
            </Link>
            <Link
              to="/dashboard"
              className={`transition-colors ${isDark ? 'hover:text-[#F2F3F5]' : 'hover:text-pilot-deep'}`}
            >
              App Workspace
            </Link>
            <Link
              to="/privacy"
              className={`transition-colors ${isDark ? 'hover:text-[#F2F3F5]' : 'hover:text-pilot-deep'}`}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className={`transition-colors ${isDark ? 'hover:text-[#F2F3F5]' : 'hover:text-pilot-deep'}`}
            >
              Terms of Service
            </Link>
            <Link
              to="/admin"
              className="hover:text-[#7AA7FF] transition-colors flex items-center gap-1"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#7AA7FF]" /> Admin Portal
            </Link>
            <span className="opacity-60">© 2026 StudyPilot Inc. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
