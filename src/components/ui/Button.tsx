import React from 'react';
import { cn } from '../../lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'electric';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-semibold transition-all duration-150 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none rounded-xl active:scale-[0.98]';

    const variants = {
      // Primary: Deep blue #3D52A0 with tactile 3D bottom ledge
      primary:
        'bg-pilot-deep hover:bg-[#34468B] text-white shadow-3d-btn active:shadow-3d-btn-active active:translate-y-[2px] focus-visible:ring-[#7091E6]',
      // Electric: Periwinkle #7091E6 with vibrant tactile depth
      electric:
        'bg-pilot-periwinkle hover:bg-[#5D80DE] text-white shadow-3d-electric active:translate-y-[2px] focus-visible:ring-[#3D52A0]',
      // Secondary: Pale lavender #EDE8F5 with soft 3D ledge
      secondary:
        'bg-pilot-pale hover:bg-[#E3DCF2] text-pilot-deep border border-pilot-soft/70 shadow-3d-secondary active:translate-y-[1.5px] focus-visible:ring-[#7091E6] dark:bg-[#202226] dark:text-pilot-soft dark:border-slate-700 dark:hover:bg-[#2C3038]',
      // Outline: Soft lavender border #ADBBDA with white card surface and subtle 3D lift
      outline:
        'border border-pilot-soft bg-white hover:bg-pilot-pale/60 text-pilot-deep shadow-3d-secondary active:translate-y-[1.5px] focus-visible:ring-[#7091E6] dark:bg-[#1A1D24] dark:border-slate-700 dark:text-pilot-soft dark:hover:bg-[#252830]',
      // Ghost: Minimal clear with gentle tactile feedback
      ghost:
        'bg-transparent hover:bg-pilot-pale/80 active:bg-pilot-soft/30 text-pilot-deep focus-visible:ring-[#7091E6] dark:text-slate-300 dark:hover:bg-slate-800/60',
      // Danger: Rose red with 3D press
      danger:
        'bg-rose-600 hover:bg-rose-700 text-white shadow-[0_3px_0_0_#9F1239] active:translate-y-[2px] active:shadow-[0_1px_0_0_#9F1239] focus-visible:ring-rose-500',
    };

    const sizes = {
      sm: 'text-xs px-3 py-1.5 gap-1.5',
      md: 'text-sm px-4 py-2 gap-2',
      lg: 'text-base px-6 py-2.5 gap-2.5',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
        {!isLoading && leftIcon}
        <span>{children}</span>
        {!isLoading && rightIcon}
      </button>
    );
  }
);

Button.displayName = 'Button';
