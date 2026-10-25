import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { cn } from '../../lib/utils';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className, showLabel = false }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      className={cn(
        'relative inline-flex items-center gap-2 px-2.5 py-1.5 rounded-xl text-xs font-semibold select-none transition-all duration-200 cursor-pointer active:translate-y-px',
        isDark
          ? 'bg-[#202226] text-[#F2F3F5] border border-[#545B66]/60 shadow-[0_2px_0_0_#101114,0_4px_10px_rgba(0,0,0,0.3)] hover:border-[#7AA7FF]/60 hover:text-[#7AA7FF]'
          : 'bg-white text-slate-800 border border-pilot-soft/70 shadow-[0_2px_0_0_#ADBBDA,0_4px_10px_rgba(61,82,160,0.08)] hover:border-pilot-deep hover:text-pilot-deep',
        className
      )}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-300 animate-in spin-in-180 duration-300" />
        ) : (
          <Moon className="w-4 h-4 text-pilot-deep animate-in spin-in-180 duration-300" />
        )}
      </div>

      {showLabel && (
        <span className="font-mono text-[11px] uppercase tracking-wider">
          {isDark ? 'Light' : 'Dark'}
        </span>
      )}
    </button>
  );
};
