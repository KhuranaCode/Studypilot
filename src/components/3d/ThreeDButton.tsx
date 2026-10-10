import React from 'react';
import { cn } from '../../lib/utils';
import { Loader2 } from 'lucide-react';

export interface ThreeDButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'metallic-deep' | 'metallic-chrome' | 'electric' | 'obsidian';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const ThreeDButton = React.forwardRef<HTMLButtonElement, ThreeDButtonProps>(
  (
    {
      className,
      variant = 'metallic-deep',
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
      'relative inline-flex items-center justify-center font-bold tracking-tight rounded-xl select-none transition-all duration-150 focus:outline-none focus-visible:ring-2 disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden active:translate-y-[2px]';

    const variants = {
      'metallic-deep':
        'bg-gradient-to-b from-[#4A62B6] to-[#3D52A0] text-white shadow-[0_4px_0_0_#27356B,0_8px_16px_rgba(61,82,160,0.3)] active:shadow-[0_1px_0_0_#27356B,0_2px_4px_rgba(61,82,160,0.2)] border-t border-white/30',
      'metallic-chrome':
        'bg-gradient-to-b from-[#FFFFFF] to-[#E2E6EE] text-[#1B2447] shadow-[0_3px_0_0_#BFC3C9,0_6px_14px_rgba(84,91,102,0.18)] active:shadow-[0_1px_0_0_#BFC3C9] border-t border-white',
      'electric':
        'bg-gradient-to-b from-[#8EB3FF] to-[#7091E6] text-white shadow-[0_4px_0_0_#4D70CE,0_8px_18px_rgba(112,145,230,0.35)] active:shadow-[0_1px_0_0_#4D70CE] border-t border-white/40',
      'obsidian':
        'bg-gradient-to-b from-[#252830] to-[#101114] text-[#F2F3F5] shadow-[0_3px_0_0_#050608,0_6px_14px_rgba(0,0,0,0.4)] active:shadow-[0_1px_0_0_#050608] border-t border-white/10',
    };

    const sizes = {
      sm: 'text-xs px-3.5 py-1.5 gap-1.5',
      md: 'text-sm px-5 py-2.5 gap-2',
      lg: 'text-base px-7 py-3 gap-2.5',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {/* Subtle Specular Sheen Stripe */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />

        {isLoading && <Loader2 className="w-4 h-4 animate-spin shrink-0" />}
        {!isLoading && leftIcon && <span className="shrink-0">{leftIcon}</span>}
        <span className="relative z-10">{children}</span>
        {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

ThreeDButton.displayName = 'ThreeDButton';
