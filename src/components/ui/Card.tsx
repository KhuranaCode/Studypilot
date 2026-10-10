import React from 'react';
import { cn } from '../../lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverEffect = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-2xl border border-pilot-soft/70 bg-white p-5 shadow-card transition-all duration-200 dark:border-slate-800 dark:bg-[#1A1D24] dark:text-[#F2F3F5]',
          hoverEffect && 'hover:shadow-card-hover hover:-translate-y-1 hover:border-pilot-periwinkle/50 dark:hover:border-pilot-periwinkle/60 cursor-pointer',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
