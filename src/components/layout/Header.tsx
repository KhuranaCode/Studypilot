import React, { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import {
  Menu,
  Bell,
  Calendar,
  Plus,
  Sparkles,
  Timer,
  User,
  LogOut,
  Settings as SettingsIcon,
  ShieldCheck,
  Search,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { useAuth } from '../../context/AuthContext';
import { NotificationsPopover } from './NotificationsPopover';
import { AmbientSoundWidget } from './AmbientSoundWidget';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';

interface HeaderProps {
  onOpenMobileNav: () => void;
  onOpenTaskModal?: () => void;
  onOpenPlanModal?: () => void;
  onOpenCommandPalette?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenMobileNav,
  onOpenTaskModal,
  onOpenPlanModal,
  onOpenCommandPalette,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { preferences, notifications } = useApp();
  const { logout, isAdmin } = useAuth();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const getPageTitle = (pathname: string) => {
    switch (pathname) {
      case '/dashboard':
        return 'Overview Dashboard';
      case '/study-plan':
        return 'Personalized Study Plan';
      case '/tasks':
        return 'Task & Assignment Tracker';
      case '/focus':
      case '/focus-timer':
        return 'Deep Focus Session';
      case '/progress':
        return 'Learning Analytics & Progress';
      case '/settings':
        return 'Account & Study Preferences';
      case '/admin':
        return 'Admin Telemetry & Directory';
      default:
        return 'StudyPilot';
    }
  };

  // Format date: e.g. "Friday, Oct 9, 2026"
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date());

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <header className="h-16 bg-white/95 dark:bg-[#18191D]/95 backdrop-blur-md border-b border-pilot-soft/60 dark:border-[#202226] px-4 sm:px-8 flex items-center justify-between shrink-0 sticky top-0 z-30 shadow-[0_2px_12px_rgba(61,82,160,0.04)] transition-colors">
      <div className="flex items-center gap-3">
        {/* Mobile menu button */}
        <button
          onClick={onOpenMobileNav}
          className="lg:hidden p-2 rounded-xl text-slate-500 hover:bg-pilot-pale dark:hover:bg-[#202226] focus:outline-hidden focus:ring-2 focus:ring-pilot-periwinkle"
          aria-label="Open mobile menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div>
          <h1 className="text-base sm:text-lg font-bold text-pilot-dark dark:text-[#F2F3F5] tracking-tight leading-tight">
            {getPageTitle(location.pathname)}
          </h1>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-[#858B95] mt-0.5">
            <Calendar className="w-3.5 h-3.5 text-pilot-muted" />
            <span>{formattedDate}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        {/* Universal Command Palette Trigger (Cmd+K / Ctrl+K) */}
        {onOpenCommandPalette && (
          <button
            type="button"
            onClick={onOpenCommandPalette}
            className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-pilot-pale/80 hover:bg-pilot-pale border border-pilot-soft/70 text-slate-600 hover:text-pilot-dark text-xs font-medium shadow-3d-secondary active:translate-y-px transition-all"
            title="Open Command Palette (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 text-pilot-muted" />
            <span className="hidden md:inline">Spotlight</span>
            <kbd className="px-1.5 py-0.5 text-[10px] font-semibold text-slate-500 bg-white border border-pilot-soft/70 rounded-md shadow-2xs">
              ⌘K
            </kbd>
          </button>
        )}

        {/* Web Audio Ambient Focus Sound Widget */}
        <AmbientSoundWidget />

        {/* Quick Action Button */}
        {onOpenPlanModal && (
          <Button
            variant="outline"
            size="sm"
            onClick={onOpenPlanModal}
            className="hidden sm:inline-flex text-pilot-deep border-pilot-soft hover:bg-pilot-pale"
            leftIcon={<Sparkles className="w-3.5 h-3.5 text-pilot-periwinkle" />}
          >
            AI Plan
          </Button>
        )}

        {onOpenTaskModal && (
          <Button
            variant="primary"
            size="sm"
            onClick={onOpenTaskModal}
            className="hidden sm:inline-flex"
            leftIcon={<Plus className="w-3.5 h-3.5" />}
          >
            New Task
          </Button>
        )}

        {/* Start Focus Timer Quick Link */}
        <Button
          variant="secondary"
          size="sm"
          onClick={() => navigate('/focus-timer')}
          className="hidden md:inline-flex text-pilot-dark hover:text-pilot-deep"
          leftIcon={<Timer className="w-3.5 h-3.5 text-pilot-periwinkle" />}
        >
          Timer
        </Button>

        {/* Theme Dark / Light Toggle */}
        <ThemeToggle />

        {/* Notification Bell */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5" />
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
              </span>
            )}
          </button>

          <NotificationsPopover
            isOpen={showNotifications}
            onClose={() => setShowNotifications(false)}
          />
        </div>

        {/* Profile Avatar and Menu */}
        <div className="relative">
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center gap-2 p-1 rounded-xl hover:ring-2 hover:ring-pilot-soft transition-all focus:outline-hidden"
            aria-label="User profile menu"
          >
            <div className="w-8 h-8 rounded-lg bg-pilot-deep text-white font-semibold text-xs flex items-center justify-center shadow-2xs">
              {(preferences.name || 'Student')
                .split(' ')
                .map((n: string) => n[0])
                .join('')}
            </div>
          </button>

          {showProfileMenu && (
            <div
              className="absolute right-0 top-12 z-50 w-52 rounded-xl border border-slate-200 bg-white shadow-elevated p-1.5 text-xs animate-in fade-in duration-100"
              onMouseLeave={() => setShowProfileMenu(false)}
            >
              <div className="px-3 py-2 border-b border-slate-100 mb-1">
                <p className="font-semibold text-slate-900 truncate">{preferences.name}</p>
                <p className="text-slate-400 truncate">{preferences.email}</p>
              </div>
              <Link
                to="/settings"
                onClick={() => setShowProfileMenu(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              >
                <SettingsIcon className="w-3.5 h-3.5 text-slate-500" />
                <span>Account Settings</span>
              </Link>
              <Link
                to="/progress"
                onClick={() => setShowProfileMenu(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              >
                <User className="w-3.5 h-3.5 text-slate-500" />
                <span>Study Profile</span>
              </Link>
              {isAdmin && (
                <Link
                  to="/admin"
                  onClick={() => setShowProfileMenu(false)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-pilot-deep font-semibold hover:bg-pilot-pale transition-colors"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-pilot-deep" />
                  <span>Admin Console</span>
                </Link>
              )}
              <div className="border-t border-slate-100 my-1" />
              <button
                type="button"
                onClick={async () => {
                  setShowProfileMenu(false);
                  await logout();
                  navigate('/login');
                }}
                className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-rose-600 hover:bg-rose-50 transition-colors text-left"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sign Out</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
