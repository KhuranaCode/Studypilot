import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  LayoutDashboard,
  Sparkles,
  Timer,
  CheckSquare,
  BarChart3,
  Settings,
  ShieldCheck,
  Plus,
  CloudRain,
  Coffee,
  ArrowRight,
  BookOpen,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { useAuth } from '../../context/AuthContext';
import { ambientAudio } from '../../services/ambientAudioService';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTaskModal?: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenTaskModal,
}) => {
  const navigate = useNavigate();
  const { tasks, subjects, showToast } = useApp();
  const { isAdmin } = useAuth();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Static navigation and action items
  const navigationItems = [
    { id: 'nav-dash', label: 'Go to Dashboard', icon: LayoutDashboard, category: 'Navigation', action: () => navigate('/dashboard') },
    { id: 'nav-ai', label: 'AI Study Planner', icon: Sparkles, category: 'Navigation', action: () => navigate('/study-plan') },
    { id: 'nav-timer', label: 'Focus Pomodoro Timer', icon: Timer, category: 'Navigation', action: () => navigate('/focus-timer') },
    { id: 'nav-tasks', label: 'Tasks & Deadlines', icon: CheckSquare, category: 'Navigation', action: () => navigate('/tasks') },
    { id: 'nav-progress', label: 'Progress & Analytics', icon: BarChart3, category: 'Navigation', action: () => navigate('/progress') },
    { id: 'nav-settings', label: 'Preferences & Settings', icon: Settings, category: 'Navigation', action: () => navigate('/settings') },
  ];

  if (isAdmin) {
    navigationItems.push({
      id: 'nav-admin',
      label: 'Admin Console & Telemetry',
      icon: ShieldCheck,
      category: 'Navigation',
      action: () => navigate('/admin'),
    });
  }

  const actionItems = [
    {
      id: 'act-new-task',
      label: 'Create New Task',
      icon: Plus,
      category: 'Quick Actions',
      action: () => {
        if (onOpenTaskModal) onOpenTaskModal();
        else navigate('/tasks');
      },
    },
    {
      id: 'act-rain',
      label: 'Play Gentle Rain Focus Sound',
      icon: CloudRain,
      category: 'Quick Actions',
      action: () => {
        ambientAudio.play('rain', 0.4);
        showToast('Ambient Rain Playing', 'Audio will play until stopped in the header pill.', 'info');
      },
    },
    {
      id: 'act-lofi',
      label: 'Play Warm Lo-Fi Focus Static',
      icon: Coffee,
      category: 'Quick Actions',
      action: () => {
        ambientAudio.play('lofi-noise', 0.4);
        showToast('Lo-Fi Ambient Playing', 'Relaxed concentration active.', 'info');
      },
    },
  ];

  // Dynamic search through user tasks and subjects
  const matchedTasks = tasks
    .filter((t) => t.title.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 4)
    .map((t) => ({
      id: `task-${t.id}`,
      label: `Task: ${t.title}`,
      icon: CheckSquare,
      category: 'Your Tasks',
      action: () => navigate('/tasks'),
    }));

  const matchedSubjects = subjects
    .filter((s) => s.name.toLowerCase().includes(query.toLowerCase()) || s.code.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 3)
    .map((s) => ({
      id: `sub-${s.id}`,
      label: `Subject: ${s.name} (${s.code})`,
      icon: BookOpen,
      category: 'Your Subjects',
      action: () => navigate('/tasks'),
    }));

  const allFilteredItems = [
    ...actionItems.filter((i) => i.label.toLowerCase().includes(query.toLowerCase())),
    ...matchedTasks,
    ...matchedSubjects,
    ...navigationItems.filter((i) => i.label.toLowerCase().includes(query.toLowerCase())),
  ];

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, allFilteredItems.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + allFilteredItems.length) % Math.max(1, allFilteredItems.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const selected = allFilteredItems[selectedIndex];
      if (selected) {
        selected.action();
        onClose();
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="fixed inset-0"
        onClick={onClose}
      />
      <div className="relative w-full max-w-xl bg-white rounded-2xl border border-pilot-soft/80 shadow-[0_6px_0_0_#ADBBDA,0_20px_40px_-8px_rgba(61,82,160,0.22)] overflow-hidden z-10 animate-in zoom-in-95 duration-150 text-left">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-pilot-soft/50 bg-pilot-pale/40">
          <Search className="w-5 h-5 text-pilot-deep shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Type a command, search tasks, or jump to a page..."
            className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden"
          />
          <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 text-[10px] font-semibold text-slate-500 bg-white border border-pilot-soft/70 rounded-md shadow-2xs">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-pilot-soft/20">
          {allFilteredItems.length === 0 ? (
            <div className="py-8 text-center text-xs text-slate-500">
              No matching commands or tasks found for "{query}".
            </div>
          ) : (
            allFilteredItems.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    item.action();
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs transition-all ${
                    isSelected
                      ? 'bg-pilot-pale border border-pilot-periwinkle/50 text-pilot-deep font-semibold shadow-3d-secondary'
                      : 'text-slate-700 hover:bg-pilot-pale/50 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                        isSelected
                          ? 'bg-pilot-deep text-white shadow-3d-btn'
                          : 'bg-pilot-soft/30 text-pilot-deep'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="truncate">{item.label}</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[10px] text-slate-400 font-normal">
                      {item.category}
                    </span>
                    {isSelected && (
                      <ArrowRight className="w-3 h-3 text-pilot-periwinkle" />
                    )}
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Keyboard Hints Footer */}
        <div className="flex items-center justify-between px-4 py-2 border-t border-pilot-soft/40 bg-pilot-pale/20 text-[11px] text-slate-500">
          <div className="flex items-center gap-3">
            <span>↑↓ to navigate</span>
            <span>↵ to select</span>
          </div>
          <span>StudyPilot Spotlight</span>
        </div>
      </div>
    </div>
  );
};
