import React, { useState } from 'react';
import {
  Settings as SettingsIcon,
  RotateCcw,
  Save,
  User,
  Target,
  Palette,
  BookOpen,
  Plus,
  PenLine,
  Trash2,
  Database,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useTheme } from '../context/ThemeContext';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { ConfirmationModal } from '../components/ui/ConfirmationModal';
import { SubjectModal } from '../components/subjects/SubjectModal';
import { Tilt3DCard } from '../components/3d/Tilt3DCard';
import { ThreeDButton } from '../components/3d/ThreeDButton';
import type { Subject } from '../types';

export const SettingsPage: React.FC = () => {
  const {
    preferences,
    updatePreferences,
    showToast,
    subjects,
    tasks,
    sessions,
    addSubject,
    updateSubject,
    deleteSubject,
  } = useApp();
  const { theme, setTheme } = useTheme();

  const [isSubjectModalOpen, setIsSubjectModalOpen] = useState(false);
  const [subjectToEdit, setSubjectToEdit] = useState<Subject | null>(null);
  const [subjectToDelete, setSubjectToDelete] = useState<Subject | null>(null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const [name, setName] = useState(preferences.name);
  const [email, setEmail] = useState(preferences.email);
  const [targetGoal, setTargetGoal] = useState(preferences.targetExamOrGoal);
  const [dailyGoal, setDailyGoal] = useState(preferences.dailyGoalHours);
  const [weeklyGoal, setWeeklyGoal] = useState(preferences.weeklyGoalHours);
  const [focusMinutes, setFocusMinutes] = useState(preferences.preferredFocusMinutes);
  const [breakMinutes, setBreakMinutes] = useState(preferences.breakDurationMinutes || 5);
  const [timezone, setTimezone] = useState(preferences.timezone);
  const [uiTheme, setUiTheme] = useState<'light' | 'dark' | 'system'>(preferences.theme || theme);
  const [soundEnabled, setSoundEnabled] = useState(preferences.soundEnabled);
  const [emailNotifications, setEmailNotifications] = useState(preferences.emailNotifications);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (uiTheme === 'system') {
      const prefersDark =
        typeof window !== 'undefined' &&
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    } else {
      setTheme(uiTheme);
    }
    await updatePreferences({
      name,
      email,
      targetExamOrGoal: targetGoal,
      dailyGoalHours: Number(dailyGoal),
      weeklyGoalHours: Number(weeklyGoal),
      preferredFocusMinutes: Number(focusMinutes),
      breakDurationMinutes: Number(breakMinutes),
      timezone,
      theme: uiTheme,
      soundEnabled,
      emailNotifications,
    });
  };

  const restoreDefaults = () => {
    setShowResetConfirm(false);
    setName(preferences.name || 'Student');
    setTargetGoal("Fall Semester Dean's List (3.9+ GPA)");
    setDailyGoal(4);
    setWeeklyGoal(25);
    setFocusMinutes(45);
    setBreakMinutes(5);
    setTimezone('America/New_York (EST, UTC-5)');
    setUiTheme('light');
    setTheme('light');
    showToast('Defaults restored', 'Form fields reset to default values.', 'info');
  };

  const confirmDeleteSubject = async () => {
    if (subjectToDelete) {
      await deleteSubject(subjectToDelete.id);
      setSubjectToDelete(null);
    }
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-12">
      <Tilt3DCard
        maxTilt={3}
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-[#1A1D24] p-5 rounded-2xl border border-pilot-soft/80 dark:border-slate-800 shadow-[0_3px_0_0_#ADBBDA,0_6px_16px_rgba(61,82,160,0.06)] dark:shadow-none"
      >
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#4A62B6] to-[#27356B] text-white shadow-3d-btn border-t border-white/30">
            <SettingsIcon className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Account &amp; Study Preferences
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Personalize your study routine, daily targets, and application behavior.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setShowResetConfirm(true)}
            leftIcon={<RotateCcw className="w-3.5 h-3.5" />}
          >
            Reset Defaults
          </Button>
          <ThreeDButton
            type="button"
            variant="metallic-deep"
            size="sm"
            onClick={handleSubmit}
            leftIcon={<Save className="w-3.5 h-3.5" />}
          >
            Save Changes
          </ThreeDButton>
        </div>
      </Tilt3DCard>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Tilt3DCard
          maxTilt={3}
          className="p-6 space-y-4 bg-white dark:bg-[#1A1D24] rounded-2xl border border-pilot-soft/80 dark:border-slate-800 shadow-card"
        >
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <User className="w-4 h-4 text-pilot-deep dark:text-pilot-electric" />
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide">
              Student Profile Information
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Alex Chen"
              required
            />
            <Input
              label="Student Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="alex.chen@university.edu"
              required
              disabled
              helperText="Managed by Firebase Authentication."
            />
          </div>
          <Input
            label="Target Academic Milestone or Exam"
            value={targetGoal}
            onChange={(e) => setTargetGoal(e.target.value)}
            placeholder="e.g. Dean's List, MCAT Prep, Final Exams"
            helperText="The AI planner prioritizes spaced repetition pacing towards this objective."
          />
        </Tilt3DCard>

        <Tilt3DCard
          maxTilt={3}
          className="p-6 space-y-4 bg-white dark:bg-[#1A1D24] rounded-2xl border border-pilot-soft/80 dark:border-slate-800 shadow-card"
        >
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <Target className="w-4 h-4 text-pilot-deep dark:text-pilot-electric" />
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide">
              Study Targets &amp; Time Capacity
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Input
              label="Daily Target (Hours)"
              type="number"
              step="0.5"
              min="1"
              max="12"
              value={dailyGoal}
              onChange={(e) => setDailyGoal(parseFloat(e.target.value) || 1)}
            />
            <Input
              label="Weekly Target (Hours)"
              type="number"
              step="1"
              min="5"
              max="70"
              value={weeklyGoal}
              onChange={(e) => setWeeklyGoal(parseFloat(e.target.value) || 5)}
            />
            <Select
              label="Default Focus Session"
              value={String(focusMinutes)}
              onChange={(e) => setFocusMinutes(Number(e.target.value))}
            >
              <option value="25">25 mins (Pomodoro)</option>
              <option value="45">45 mins (Deep Work)</option>
              <option value="60">60 mins (Intensive)</option>
              <option value="90">90 mins (Extended)</option>
            </Select>
            <Select
              label="Default Break Length"
              value={String(breakMinutes)}
              onChange={(e) => setBreakMinutes(Number(e.target.value))}
            >
              <option value="5">5 minutes</option>
              <option value="10">10 minutes</option>
              <option value="15">15 minutes</option>
            </Select>
          </div>
        </Tilt3DCard>

        <Tilt3DCard
          maxTilt={3}
          className="p-6 space-y-4 bg-white dark:bg-[#1A1D24] rounded-2xl border border-pilot-soft/80 dark:border-slate-800 shadow-card"
        >
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <Palette className="w-4 h-4 text-pilot-deep dark:text-pilot-electric" />
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide">
              Localization &amp; UI Theme
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Select label="Timezone" value={timezone} onChange={(e) => setTimezone(e.target.value)}>
              <option value="America/New_York (EST, UTC-5)">Eastern Time (US &amp; Canada, UTC-5)</option>
              <option value="America/Chicago (CST, UTC-6)">Central Time (US &amp; Canada, UTC-6)</option>
              <option value="America/Denver (MST, UTC-7)">Mountain Time (US &amp; Canada, UTC-7)</option>
              <option value="America/Los_Angeles (PST, UTC-8)">Pacific Time (US &amp; Canada, UTC-8)</option>
              <option value="Europe/London (GMT, UTC+0)">Greenwich Mean Time (London, UTC+0)</option>
              <option value="Europe/Paris (CET, UTC+1)">Central European Time (Paris, UTC+1)</option>
              <option value="Asia/Tokyo (JST, UTC+9)">Japan Standard Time (Tokyo, UTC+9)</option>
              <option value="Asia/Kolkata (IST, UTC+5:30)">India Standard Time (IST, UTC+5:30)</option>
            </Select>
            <Select
              label="Interface Theme"
              value={uiTheme}
              onChange={(e) => {
                const val = e.target.value as 'light' | 'dark' | 'system';
                setUiTheme(val);
                if (val === 'system') {
                  const prefersDark =
                    typeof window !== 'undefined' &&
                    window.matchMedia &&
                    window.matchMedia('(prefers-color-scheme: dark)').matches;
                  setTheme(prefersDark ? 'dark' : 'light');
                } else {
                  setTheme(val);
                }
              }}
            >
              <option value="light">Light Mode (Crisp Minimalist)</option>
              <option value="dark">Dark Mode (Obsidian / Metallic)</option>
              <option value="system">System Default</option>
            </Select>
          </div>
          <div className="space-y-3 pt-2">
            <label className="flex items-center gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={soundEnabled}
                onChange={(e) => setSoundEnabled(e.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-pilot-deep focus:ring-pilot-periwinkle"
              />
              <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                Play gentle harmonic chime when focus timer completes
              </span>
            </label>
            <label className="flex items-center gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={emailNotifications}
                onChange={(e) => setEmailNotifications(e.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-pilot-deep focus:ring-pilot-periwinkle"
              />
              <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                Receive morning study schedule digest and assignment alerts
              </span>
            </label>
          </div>
        </Tilt3DCard>

        <Tilt3DCard
          maxTilt={2}
          className="p-6 space-y-4 bg-white dark:bg-[#1A1D24] rounded-2xl border border-pilot-soft/80 dark:border-slate-800 shadow-card"
        >
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-pilot-deep dark:text-pilot-electric" />
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide">
                Enrolled Courses &amp; Subjects ({subjects.length})
              </h3>
            </div>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => {
                setSubjectToEdit(null);
                setIsSubjectModalOpen(true);
              }}
              leftIcon={<Plus className="w-3.5 h-3.5" />}
              className="text-xs shadow-3d-secondary"
            >
              Add Course
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {subjects.map((subject) => {
              const activeTasks = tasks.filter((t) => t.subjectId === subject.id).length;
              const completedLogs = sessions.filter(
                (s) => s.subjectId === subject.id && s.completed
              ).length;
              return (
                <div
                  key={subject.id}
                  className="p-3.5 rounded-xl border border-pilot-soft dark:border-slate-800 bg-white dark:bg-[#15171C] flex items-center justify-between gap-3 hover:border-pilot-periwinkle dark:hover:border-pilot-periwinkle/60 hover:shadow-[0_4px_12px_rgba(61,82,160,0.06)] transition-all"
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <span
                      className="w-3.5 h-3.5 rounded-full shrink-0 shadow-xs"
                      style={{ backgroundColor: subject.color }}
                    />
                    <div className="truncate">
                      <p className="text-xs font-bold text-slate-900 dark:text-white truncate">
                        {subject.code} · {subject.name}
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        {activeTasks} active tasks · {completedLogs} completed logs ·{' '}
                        {subject.difficulty || 'medium'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      type="button"
                      onClick={() => {
                        setSubjectToEdit(subject);
                        setIsSubjectModalOpen(true);
                      }}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-pilot-deep dark:hover:text-pilot-electric hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      title="Edit course"
                    >
                      <PenLine className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setSubjectToDelete(subject)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
                      title="Delete course"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </Tilt3DCard>

        <Tilt3DCard
          maxTilt={2}
          className="p-6 bg-slate-50/70 dark:bg-[#15171C]/70 border border-slate-200 dark:border-slate-800 rounded-2xl space-y-3"
        >
          <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-pilot-deep dark:text-pilot-electric" />
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide">
                Cloud Firestore &amp; Backend Security
              </h3>
            </div>
            <Badge variant="success" size="sm">
              Authenticated &amp; Isolated
            </Badge>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            All user profiles, enrolled courses, tasks, focus records, and AI study plans are stored
            under your unique user ID (
            <code className="text-pilot-deep dark:text-pilot-electric font-mono text-[11px]">
              users/{'{userId}'}
            </code>
            ). Requests are protected with verified Firebase Authentication tokens and deterministic
            schema constraints.
          </p>
        </Tilt3DCard>

        <div className="flex items-center justify-end gap-3 pt-2">
          <Button type="button" variant="outline" onClick={() => setShowResetConfirm(true)}>
            Cancel
          </Button>
          <ThreeDButton
            type="submit"
            variant="metallic-deep"
            leftIcon={<Save className="w-4 h-4" />}
          >
            Save Preferences
          </ThreeDButton>
        </div>
      </form>

      <SubjectModal
        isOpen={isSubjectModalOpen}
        onClose={() => setIsSubjectModalOpen(false)}
        subjectToEdit={subjectToEdit}
        onSave={async (subject) => {
          if ('id' in subject && subject.id) {
            await updateSubject(subject as Subject);
          } else {
            await addSubject(subject);
          }
        }}
      />
      <ConfirmationModal
        isOpen={!!subjectToDelete}
        onClose={() => setSubjectToDelete(null)}
        onConfirm={confirmDeleteSubject}
        title="Remove Course Subject"
        message={
          subjectToDelete
            ? `Are you sure you want to remove "${subjectToDelete.code} · ${subjectToDelete.name}"? Historical study logs and tasks will remain safely preserved in your records.`
            : 'Are you sure you want to remove this course?'
        }
        confirmLabel="Remove Course"
        variant="danger"
      />
      <ConfirmationModal
        isOpen={showResetConfirm}
        onClose={() => setShowResetConfirm(false)}
        onConfirm={restoreDefaults}
        title="Restore Default Settings"
        message="Are you sure you want to restore default target hours and focus duration values in this form?"
        confirmLabel="Restore Defaults"
        variant="warning"
      />
    </div>
  );
};
