import React, { useState } from 'react';
import { ActivityData } from '../../types';

interface WeeklyActivityChartProps {
  data: ActivityData[];
  targetHours?: number;
}

export const WeeklyActivityChart: React.FC<WeeklyActivityChartProps> = ({
  data,
  targetHours = 4.0,
}) => {
  const [hoveredDay, setHoveredDay] = useState<ActivityData | null>(null);

  const maxHours = Math.max(...data.map((d) => d.hours), targetHours + 1.5, 6);
  const chartHeight = 160;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-xs bg-pilot-deep dark:bg-pilot-electric inline-block" />
            <span className="text-slate-700 dark:text-slate-300 font-medium">Study Hours</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-0.5 bg-dashed border-t border-pilot-muted inline-block" />
            <span className="text-pilot-muted font-medium">Daily Target ({targetHours}h)</span>
          </div>
        </div>

        {hoveredDay && (
          <div className="text-xs bg-pilot-dark text-white px-2.5 py-1 rounded-md shadow-2xs animate-in fade-in duration-100">
            <span className="font-semibold">{hoveredDay.day} ({hoveredDay.fullDate}):</span>{' '}
            <span className="text-pilot-periwinkle font-bold">{hoveredDay.hours} hrs</span> ·{' '}
            <span>{hoveredDay.tasksCompleted} tasks</span>
          </div>
        )}
      </div>

      <div className="relative pt-4">
        {/* Target line */}
        <div
          className="absolute left-0 right-0 border-t border-dashed border-pilot-muted/70 z-0 pointer-events-none"
          style={{
            top: `${chartHeight - (targetHours / maxHours) * chartHeight + 16}px`,
          }}
        >
          <span className="absolute -top-3 right-0 text-[10px] text-pilot-muted font-semibold bg-white dark:bg-[#1A1D24] px-1">
            Target {targetHours}h
          </span>
        </div>

        {/* Bars Container */}
        <div className="flex items-end justify-between gap-2 sm:gap-4 h-40 border-b border-pilot-soft/60 dark:border-slate-800 pb-2 relative z-10">
          {data.map((item) => {
            const heightPercent = (item.hours / maxHours) * 100;
            const isTargetMet = item.hours >= targetHours;

            return (
              <div
                key={item.day}
                className="flex-1 flex flex-col items-center group cursor-pointer"
                onMouseEnter={() => setHoveredDay(item)}
                onMouseLeave={() => setHoveredDay(null)}
              >
                <div className="w-full flex items-end justify-center h-32 relative">
                  <div
                    className={`w-full max-w-[36px] rounded-t-lg transition-all duration-300 group-hover:brightness-110 ${
                      isTargetMet
                        ? 'bg-linear-to-t from-pilot-deep to-pilot-periwinkle shadow-2xs'
                        : 'bg-pilot-soft dark:bg-slate-800 group-hover:bg-pilot-muted dark:group-hover:bg-slate-700'
                    }`}
                    style={{ height: `${Math.max(heightPercent, 4)}%` }}
                  />
                </div>
                <div className="text-center mt-2">
                  <span className="block text-xs font-semibold text-slate-700 dark:text-slate-300 group-hover:text-pilot-deep dark:group-hover:text-pilot-electric transition-colors">
                    {item.day}
                  </span>
                  <span className="block text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    {item.hours}h
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
