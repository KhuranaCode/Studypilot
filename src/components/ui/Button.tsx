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
      'inline-flex items-center justify-center font-semibold transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none rounded-xl active:scale-[0.98]';

    const variants = {
      // Primary: Deep blue #3D52A0 with tactile 3D bottom ledge
      primary:
        'bg-[#3D52A0] hover:bg-[#34468B] text-white shadow-3d-btn active:shadow-3d-btn-active active:translate-y-[2px] focus-visible:ring-[#7091E6]',
      // Electric: Periwinkle #7091E6 with vibrant tactile depth
      electric:
        'bg-[#7091E6] hover:bg-[#5D80DE] text-white shadow-3d-electric active:translate-y-[2px] focus-visible:ring-[#3D52A0]',
      // Secondary: Pale lavender #EDE8F5 with soft 3D ledge
      secondary:
        'bg-[#EDE8F5] hover:bg-[#E3DCF2] text-[#3D52A0] border border-[#ADBBDA]/70 shadow-3d-secondary active:translate-y-[1.5px] focus-visible:ring-[#7091E6] dark:bg-[#202226] dark:text-[#ADBBDA] dark:border-slate-700 dark:hover:bg-[#2C3038]',
      // Outline: Soft lavender border #ADBBDA with white card surface and subtle 3D lift
      outline:
        'border border-[#ADBBDA] bg-white hover:bg-[#EDE8F5]/60 text-[#3D52A0] shadow-3d-secondary active:translate-y-[1.5px] focus-visible:ring-[#7091E6] dark:bg-[#1A1D24] dark:border-slate-700 dark:text-[#ADBBDA] dark:hover:bg-[#252830]',
      // Ghost: Minimal clear with gentle tactile feedback
      ghost:
        'bg-transparent hover:bg-[#EDE8F5]/80 active:bg-[#ADBBDA]/30 text-[#3D52A0] focus-visible:ring-[#7091E6] dark:text-slate-300 dark:hover:bg-slate-800/60',
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
