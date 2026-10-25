import React, { useRef, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Bell, Clock, Sparkles, BookOpen, Trophy } from 'lucide-react';
import { Button } from '../ui/Button';

interface NotificationsPopoverProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NotificationsPopover: React.FC<NotificationsPopoverProps> = ({ isOpen, onClose }) => {
  const { notifications, markNotificationRead, markAllNotificationsRead } = useApp();
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const unreadCount = notifications.filter((n) => !n.read).length;

  const getIcon = (type: string) => {
    switch (type) {
      case 'deadline':
        return <Clock className="w-4 h-4 text-rose-500" />;
      case 'ai':
        return <Sparkles className="w-4 h-4 text-indigo-500" />;
      case 'achievement':
        return <Trophy className="w-4 h-4 text-amber-500" />;
      default:
        return <BookOpen className="w-4 h-4 text-blue-500" />;
    }
  };

  return (
    <div
      ref={popoverRef}
      className="absolute right-0 top-12 z-50 w-80 sm:w-96 rounded-2xl border border-slate-200 bg-white shadow-elevated overflow-hidden animate-in fade-in duration-150"
    >
      <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 bg-slate-50/70">
        <div className="flex items-center gap-2">
          <Bell className="w-4 h-4 text-slate-700" />
          <span className="text-sm font-semibold text-slate-800">Notifications</span>
          {unreadCount > 0 && (
            <span className="rounded-full bg-indigo-100 px-2 py-0.5 text-[11px] font-semibold text-indigo-700">
              {unreadCount} new
            </span>
          )}
        </div>
        {unreadCount > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={markAllNotificationsRead}
            className="text-xs text-indigo-600 hover:text-indigo-800 px-2 py-1 h-auto"
          >
            Mark all read
          </Button>
        )}
      </div>

      <div className="max-h-80 overflow-y-auto divide-y divide-slate-100">
        {notifications.length === 0 ? (
          <div className="p-6 text-center text-xs text-slate-400">No notifications yet</div>
        ) : (
          notifications.map((n) => (
            <div
              key={n.id}
              onClick={() => markNotificationRead(n.id)}
              className={`p-3.5 hover:bg-slate-50 cursor-pointer transition-colors flex items-start gap-3 ${
                !n.read ? 'bg-indigo-50/30' : ''
              }`}
            >
              <div className="mt-0.5 p-1.5 rounded-lg bg-white border border-slate-100 shadow-xs shrink-0">
                {getIcon(n.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <h4 className={`text-xs font-semibold ${!n.read ? 'text-slate-900' : 'text-slate-700'}`}>
                    {n.title}
                  </h4>
                  <span className="text-[10px] text-slate-400 shrink-0">{n.time}</span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5 line-clamp-2 leading-relaxed">
                  {n.message}
                </p>
              </div>
              {!n.read && (
                <span className="w-2 h-2 rounded-full bg-indigo-600 mt-1 shrink-0" />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
