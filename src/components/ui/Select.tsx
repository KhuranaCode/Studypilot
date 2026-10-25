import React from 'react';
import { cn } from '../../lib/utils';
import { ChevronDown } from 'lucide-react';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options?: SelectOption[];
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, options, children, id, ...props }, ref) => {
    const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="w-full space-y-1.5 text-left">
        {label && (
          <label htmlFor={selectId} className="block text-xs font-semibold text-slate-700 dark:text-slate-300 tracking-wide uppercase">
            {label}
          </label>
        )}
        <div className="relative rounded-xl shadow-2xs">
          <select
            ref={ref}
            id={selectId}
            className={cn(
              'block w-full appearance-none rounded-xl border bg-white dark:bg-[#15171C] px-3.5 py-2.5 pr-10 text-sm text-slate-900 dark:text-[#F2F3F5] transition-colors',
              'focus:outline-hidden focus:ring-2 focus:ring-pilot-periwinkle focus:border-pilot-deep dark:focus:ring-pilot-periwinkle/50',
              error
                ? 'border-rose-300 dark:border-rose-700 text-rose-900 dark:text-rose-300 focus:border-rose-500 focus:ring-rose-500'
                : 'border-pilot-soft/70 dark:border-slate-800 hover:border-pilot-muted dark:hover:border-slate-700',
              className
            )}
            {...props}
          >
            {options
              ? options.map((opt) => (
                  <option key={opt.value} value={opt.value} className="bg-white dark:bg-[#1A1D24] text-slate-900 dark:text-[#F2F3F5]">
                    {opt.label}
                  </option>
                ))
              : children}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-pilot-muted dark:text-slate-400">
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
        {error && <p className="text-xs text-rose-600 dark:text-rose-400 font-medium">{error}</p>}
      </div>
    );
  }
);

Select.displayName = 'Select';
