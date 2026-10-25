import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  Play,
  Pause,
  Flame,
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const SimpleHeroPreview: React.FC = () => {
  const { isDark } = useTheme();
  const [isPlaying, setIsPlaying] = useState(true);
  const [secondsLeft, setSecondsLeft] = useState(1458); // 24m 18s
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>({
    'task-1': true,
  });

  // Subtle live countdown tick when playing
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 1500));
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const toggleTask = (id: string) => {
    setCompletedTasks((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Outer Card with clean, modern shadow and subtle border */}
      <div
        className={`rounded-3xl border p-6 sm:p-7 transition-all duration-300 ${
          isDark
            ? 'bg-[#181A20] border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)]'
            : 'bg-white border-pilot-soft/90 shadow-[0_20px_50px_rgba(61,82,160,0.08)]'
        }`}
      >
        {/* Top Header Row */}
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

        {/* Active Focus Session Widget */}
        <div
          className={`mt-5 p-4 rounded-2xl border transition-all ${
            isDark
              ? 'bg-[#1F222A] border-slate-800 text-white'
              : 'bg-linear-to-r from-pilot-pale/50 via-white to-pilot-pale/30 border-pilot-soft'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-500 dark:text-blue-400 border border-blue-500/20">
                CS 301
              </span>
              <span className="text-xs font-semibold truncate max-w-[180px] sm:max-w-[220px]">
                Algorithm Analysis & Graphs
              </span>
            </div>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`p-2 rounded-xl transition-transform active:scale-95 flex items-center justify-center ${
                isDark
                  ? 'bg-pilot-deep hover:bg-[#4A62B6] text-white shadow-xs'
                  : 'bg-pilot-deep hover:bg-[#34468B] text-white shadow-xs'
              }`}
              title={isPlaying ? 'Pause Focus' : 'Resume Focus'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
            </button>
          </div>

          {/* Time & Progress */}
          <div className="mt-3 flex items-baseline justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight">
                {formatTime(secondsLeft)}
              </span>
              <span
                className={`text-xs font-medium uppercase tracking-wider ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                {isPlaying ? 'Deep Focus' : 'Paused'}
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

          {/* Progress Bar */}
          <div className="mt-2.5 w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
            <div
              className="h-full bg-linear-to-r from-[#3D52A0] to-[#7091E6] rounded-full transition-all duration-1000"
              style={{ width: `${Math.min(100, Math.max(5, ((1500 - secondsLeft) / 1500) * 100))}%` }}
            />
          </div>
        </div>

        {/* Schedule List */}
        <div className="mt-5 space-y-2.5">
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider px-1">
            <span>Scheduled Blocks</span>
            <span>Target: 4.0 hrs</span>
          </div>

          {/* Block 1: Completed */}
          <div
            onClick={() => toggleTask('task-1')}
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
                  completedTasks['task-1']
                    ? 'text-emerald-500'
                    : isDark
                    ? 'text-slate-600'
                    : 'text-slate-300'
                }`}
              >
                <CheckCircle2
                  className={`w-4 h-4 ${completedTasks['task-1'] ? 'fill-emerald-500/20' : ''}`}
                />
              </button>
              <div>
                <p
                  className={`text-xs font-semibold transition-colors ${
                    completedTasks['task-1']
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
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-sm bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
              Done
            </span>
          </div>

          {/* Block 2: In Progress */}
          <div
            className={`p-3 rounded-xl border flex items-center justify-between gap-3 transition-all ${
              isDark
                ? 'bg-blue-950/20 border-blue-500/30'
                : 'bg-blue-50/60 border-blue-200/80'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
              <div>
                <p className="text-xs font-bold text-blue-600 dark:text-blue-400">
                  CS 301 · Graph Traversal & Dijkstra
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  11:00 - 12:15 · Active Focus Block
                </p>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-sm bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
              Now
            </span>
          </div>

          {/* Block 3: Upcoming */}
          <div
            onClick={() => toggleTask('task-3')}
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
                  completedTasks['task-3']
                    ? 'text-emerald-500'
                    : isDark
                    ? 'text-slate-600'
                    : 'text-slate-300'
                }`}
              >
                <CheckCircle2
                  className={`w-4 h-4 ${completedTasks['task-3'] ? 'fill-emerald-500/20' : ''}`}
                />
              </button>
              <div>
                <p
                  className={`text-xs font-semibold transition-colors ${
                    completedTasks['task-3']
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
            <span className="text-[10px] font-medium px-2 py-0.5 rounded-sm bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
              2:30 PM
            </span>
          </div>
        </div>

        {/* Footer Summary Stats */}
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
            <div className="text-sm font-extrabold font-mono text-emerald-500">
              88%
            </div>
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
