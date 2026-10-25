import React from 'react';
import { useApp } from '../../context/AppContext';
import { cn } from '../../lib/utils';

export interface SubjectBadgeProps {
  subjectId: string;
  className?: string;
  showCodeOnly?: boolean;
}

export const SubjectBadge: React.FC<SubjectBadgeProps> = ({
  subjectId,
  className,
  showCodeOnly = false,
}) => {
  const { subjects } = useApp();
  const subject = subjects.find((s) => s.id === subjectId);

  if (!subject) {
    return (
      <span className={cn('inline-flex items-center text-xs px-2 py-0.5 rounded-sm font-medium bg-slate-100 text-slate-600', className)}>
        General
      </span>
    );
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 text-xs font-medium px-2 py-0.5 rounded-md border',
        subject.bgLight,
        subject.textLight,
        subject.borderColor,
        className
      )}
    >
      <span
        className="w-1.5 h-1.5 rounded-full shrink-0"
        style={{ backgroundColor: subject.color }}
      />
      <span>{showCodeOnly ? subject.code : `${subject.code} · ${subject.name}`}</span>
    </span>
  );
};
