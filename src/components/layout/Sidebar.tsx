import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  LayoutDashboard,
  CalendarCheck,
  CheckSquare,
  Timer,
  BarChart3,
  Settings,
  Sparkles,
  BookOpen,
  ShieldCheck,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { useAuth } from '../../context/AuthContext';
import { cn } from '../../lib/utils';

interface SidebarProps {
  onNavigate?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onNavigate }) => {
  const { preferences, tasks } = useApp();
  const { isAdmin } = useAuth();
  const pendingTasksCount = tasks.filter((t) => !t.completed).length;

  const navItems = [
    { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { label: 'Study Plan', path: '/study-plan', icon: CalendarCheck },
    {
      label: 'Tasks',
      path: '/tasks',
      icon: CheckSquare,
      badge: pendingTasksCount > 0 ? pendingTasksCount : undefined,
    },
    { label: 'Focus Timer', path: '/focus', icon: Timer },
    { label: 'Progress', path: '/progress', icon: BarChart3 },
    { label: 'Settings', path: '/settings', icon: Settings },
    ...(isAdmin ? [{ label: 'Admin Console', path: '/admin', icon: ShieldCheck }] : []),
  ];

  return (
    <aside className="w-64 h-full bg-white dark:bg-[#18191D] border-r border-pilot-soft/50 dark:border-[#202226] flex flex-col justify-between shrink-0 select-none transition-colors">
      <div className="flex flex-col">
        {/* Logo and Tagline Header */}
        <div className="p-6 border-b border-pilot-pale dark:border-[#202226] flex items-center justify-between">
          <Link
            to="/dashboard"
            onClick={onNavigate}
            className="flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-pilot-periwinkle rounded-lg"
          >
            <div className="w-9 h-9 rounded-xl bg-pilot-deep flex items-center justify-center text-white shadow-3d-btn border-t border-white/20">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="text-base font-bold tracking-tight text-slate-900 dark:text-[#F2F3F5] block leading-tight">
                StudyPilot
              </span>
              <span className="text-[10px] font-semibold text-pilot-periwinkle block leading-none">
                AI Study Companion
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation links */}
        <nav className="p-4 space-y-1.5" aria-label="Main navigation">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onNavigate}
                className={({ isActive }) =>
                  cn(
                    'flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all group',
                    isActive
                      ? 'bg-pilot-pale dark:bg-[#202226] text-pilot-deep dark:text-[#7AA7FF] shadow-[0_2px_0_0_#ADBBDA] dark:shadow-[0_2px_0_0_#101114] border border-pilot-soft/70 dark:border-[#545B66]/60 font-semibold'
                      : 'text-slate-600 dark:text-[#BFC3C9] hover:text-pilot-deep dark:hover:text-[#F2F3F5] hover:bg-pilot-pale/60 dark:hover:bg-[#202226]/60 hover:-translate-y-0.5'
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <div className="flex items-center gap-3">
                      <Icon
                        className={cn(
                          'w-4 h-4 transition-colors',
                          isActive
                            ? 'text-pilot-deep dark:text-[#7AA7FF]'
                            : 'text-pilot-muted dark:text-[#858B95] group-hover:text-pilot-deep dark:group-hover:text-[#F2F3F5]'
                        )}
                      />
                      <span>{item.label}</span>
                    </div>
                    {item.badge !== undefined && (
                      <span
                        className={cn(
                          'text-xs font-semibold px-2 py-0.5 rounded-full',
                          isActive
                            ? 'bg-pilot-soft/50 text-pilot-deep'
                            : 'bg-slate-100 text-slate-600 group-hover:bg-pilot-soft/30'
                        )}
                      >
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Footer Info & User Profile */}
      <div className="p-4 border-t border-pilot-pale dark:border-[#202226] space-y-3">
        {/* Weekly Goal Progress Bar mini */}
        <div className="p-3 bg-pilot-pale/50 dark:bg-[#202226] rounded-xl border border-pilot-soft/40 dark:border-[#545B66]/40">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="font-semibold text-slate-700 dark:text-[#BFC3C9] flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-pilot-periwinkle" />
              Weekly Goal
            </span>
            <span className="font-bold text-pilot-deep dark:text-[#7AA7FF]">68%</span>
          </div>
          <div className="w-full bg-slate-200 dark:bg-[#101114] h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-pilot-deep to-pilot-periwinkle h-full rounded-full transition-all duration-500"
              style={{ width: '68%' }}
            />
          </div>
          <p className="text-[11px] text-slate-500 dark:text-[#858B95] mt-1.5">
            17.0 / {preferences.weeklyGoalHours} hrs completed
          </p>
        </div>

        {/* Profile Card */}
        <Link
          to="/settings"
          onClick={onNavigate}
          className="flex items-center gap-3 p-2 rounded-xl hover:bg-pilot-pale/60 dark:hover:bg-[#202226]/60 transition-colors group"
        >
          <div className="w-8 h-8 rounded-lg bg-pilot-deep text-white flex items-center justify-center font-bold text-xs flex-shrink-0 shadow-xs">
            {(preferences.name || 'Student')
              .split(' ')
              .map((n: string) => n[0])
              .join('')}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1">
              <p className="text-xs font-semibold text-slate-800 dark:text-[#F2F3F5] truncate group-hover:text-pilot-deep dark:group-hover:text-[#7AA7FF] transition-colors">
                {preferences.name}
              </p>
              {isAdmin && (
                <span className="text-[9px] font-bold uppercase bg-pilot-deep text-white px-1 py-0.2 rounded shrink-0">
                  Admin
                </span>
              )}
            </div>
            <p className="text-[11px] text-slate-500 dark:text-[#858B95] truncate">{preferences.email}</p>
          </div>
        </Link>
      </div>
    </aside>
  );
};
