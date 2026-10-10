import React from 'react';
import { Subject } from '../../types';

interface SubjectProgressListProps {
  subjects: Array<Subject & { actualHoursStudied?: number; progressPercent?: number }>;
}

export const SubjectProgressList: React.FC<SubjectProgressListProps> = ({ subjects }) => {
  return (
    <div className="space-y-4">
      {subjects.map((subject) => {
        const hours = subject.actualHoursStudied !== undefined ? subject.actualHoursStudied : subject.totalHoursStudied;
        const percent = subject.progressPercent !== undefined
          ? subject.progressPercent
          : Math.min(Math.round((hours / (subject.targetHours || 15)) * 100), 100);

        return (
          <div key={subject.id} className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: subject.color }}
                />
                <span className="font-semibold text-slate-800 dark:text-slate-200">{subject.code}</span>
                <span className="text-slate-500 dark:text-slate-400 hidden sm:inline">· {subject.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-700 dark:text-slate-300">{percent}%</span>
                <span className="text-slate-400 dark:text-slate-500">
                  ({hours} / {subject.targetHours}h)
                </span>
              </div>
            </div>

            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${percent}%`,
                  backgroundColor: subject.color,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
