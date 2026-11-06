import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, CalendarCheck, CheckSquare, Timer, BarChart3 } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { cn } from '../../lib/utils';

/**
 * Mobile bottom tab bar: primary destinations one tap away without opening the drawer.
 * Rendered only below lg; the drawer (MobileNav) still covers Settings/Admin.
 */
export const MobileTabBar: React.FC = () => {
  const { tasks } = useApp();
  const pendingTasksCount = tasks.filter((t) => !t.completed).length;

  const tabs = [
    { label: 'Home', path: '/dashboard', icon: LayoutDashboard },
    { label: 'Plan', path: '/study-plan', icon: CalendarCheck },
    { label: 'Tasks', path: '/tasks', icon: CheckSquare, badge: pendingTasksCount },
    { label: 'Focus', path: '/focus', icon: Timer },
    { label: 'Progress', path: '/progress', icon: BarChart3 },
  ];

  return (
    <nav
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/90 dark:bg-[#16181C]/90 backdrop-blur-md border-t border-pilot-soft/60 dark:border-[#26292F]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      aria-label="Primary navigation"
    >
      <div className="grid grid-cols-5">
        {tabs.map((tab) => (
          <NavLink
            key={tab.path}
            to={tab.path}
            className={({ isActive }) =>
              cn(
                'relative flex flex-col items-center justify-center gap-0.5 py-2 text-[10px] font-semibold transition-colors',
                isActive
                  ? 'text-pilot-deep dark:text-[#7AA7FF]'
                  : 'text-slate-400 dark:text-[#6B7280] hover:text-slate-600 dark:hover:text-[#9AA0A8]'
              )
            }
          >
            {({ isActive }) => (
              <>
                <span className="relative">
                  <tab.icon className={cn('w-5 h-5', isActive && 'stroke-[2.4]')} />
                  {typeof tab.badge === 'number' && tab.badge > 0 && (
                    <span className="absolute -top-1.5 -right-2 min-w-4 h-4 px-1 rounded-full bg-pilot-deep text-white text-[9px] font-bold flex items-center justify-center">
                      {tab.badge > 99 ? '99+' : tab.badge}
                    </span>
                  )}
                </span>
                <span>{tab.label}</span>
                {isActive && (
                  <span className="absolute top-0 w-8 h-0.5 rounded-full bg-pilot-deep dark:bg-[#7AA7FF]" />
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
