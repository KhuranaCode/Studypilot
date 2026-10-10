import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  StudyGoalType,
  PlanningStrategy,
  PlanGenerationConfig,
  StudyPlan,
  DayTimeWindow,
} from '../../types';
import { requestAiStudyPlan } from '../../services/aiPlannerService';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Badge } from '../ui/Badge';
import { SubjectBadge } from '../ui/SubjectBadge';
import {
  Sparkles,
  CheckCircle2,
  Brain,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  Save,
} from 'lucide-react';

interface GeneratePlanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DEFAULT_DAYS: Record<string, DayTimeWindow> = {
  Mon: { enabled: true, start: '09:00', end: '21:00' },
  Tue: { enabled: true, start: '09:00', end: '21:00' },
  Wed: { enabled: true, start: '09:00', end: '21:00' },
  Thu: { enabled: true, start: '09:00', end: '21:00' },
  Fri: { enabled: true, start: '09:00', end: '19:00' },
  Sat: { enabled: true, start: '10:00', end: '18:00' },
  Sun: { enabled: false, start: '10:00', end: '18:00' }, // Sunday rest by default
};

export const GeneratePlanModal: React.FC<GeneratePlanModalProps> = ({ isOpen, onClose }) => {
  const { subjects, tasks, sessions, saveGeneratedPlan, showToast } = useApp();

  // Planning Configuration State
  const [goal, setGoal] = useState<StudyGoalType>('balanced');
  const [strategy, setStrategy] = useState<PlanningStrategy>('balanced');
  const [selectedSubjectIds, setSelectedSubjectIds] = useState<string[]>(subjects.map((s) => s.id));
  const [selectedTaskIds, setSelectedTaskIds] = useState<string[]>(
    tasks.filter((t) => !t.completed).map((t) => t.id)
  );
  const [availableDays, setAvailableDays] = useState<Record<string, DayTimeWindow>>(DEFAULT_DAYS);
  const [dailyLimitMinutes, setDailyLimitMinutes] = useState<number>(240); // 4 hours
  const [preferredSessionMinutes, setPreferredSessionMinutes] = useState<number>(45);
  const [breakDurationMinutes, setBreakDurationMinutes] = useState<number>(5);
  const [focusNotes, setFocusNotes] = useState<string>('');
  const [showAdvanced, setShowAdvanced] = useState<boolean>(false);

  // Generation & Review State
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [progressStep, setProgressStep] = useState<string>('');
  const [generatedDraftPlan, setGeneratedDraftPlan] = useState<StudyPlan | null>(null);
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const handleToggleSubject = (id: string) => {
    setSelectedSubjectIds((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleToggleTask = (id: string) => {
    setSelectedTaskIds((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  const handleToggleDay = (day: string) => {
    setAvailableDays((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        enabled: !prev[day].enabled,
      },
    }));
  };

  const handleGenerate = async () => {
    if (selectedSubjectIds.length === 0) {
      showToast('Validation Error', 'Please select at least one course subject.', 'warning');
      return;
    }

    setIsGenerating(true);
    setProgressStep('Analyzing syllabus deadlines, exam dates, and priority weighting...');

    const config: PlanGenerationConfig = {
      goal,
      planningStrategy: strategy,
      subjectIds: selectedSubjectIds,
      taskIds: selectedTaskIds,
      availableDays,
      dailyLimitMinutes,
      preferredSessionMinutes,
      breakDurationMinutes,
      preserveCompletedWork: true,
      bufferHoursBeforeExam: 24,
      notesOrFocusTopics: focusNotes.trim() || undefined,
    };

    try {
      setTimeout(() => {
        setProgressStep('Allocating cognitive intervals across available study windows...');
      }, 700);

      setTimeout(() => {
        setProgressStep('Enforcing non-overlap constraints and daily capacity limits...');
      }, 1400);

      const plan = await requestAiStudyPlan(config, subjects, tasks, sessions);
      setTimeout(() => {
        setGeneratedDraftPlan(plan);
        setIsGenerating(false);
      }, 1900);
    } catch (err) {
      console.error('Plan generation failed:', err);
      setIsGenerating(false);
      showToast('Generation Failed', 'An error occurred while compiling your study plan.', 'error');
    }
  };

  const handleSavePlan = async () => {
    if (!generatedDraftPlan) return;
    setIsSaving(true);
    try {
      await saveGeneratedPlan(generatedDraftPlan);
      onClose();
      setGeneratedDraftPlan(null);
    } catch (err) {
      console.error('Failed to save plan:', err);
      showToast('Error', 'Could not save study plan to database.', 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const handleResetDraft = () => {
    setGeneratedDraftPlan(null);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        if (!isGenerating && !isSaving) onClose();
      }}
      title={generatedDraftPlan ? 'Review Generated Study Plan' : 'AI Study Planner & Optimizer'}
      description={
        generatedDraftPlan
          ? 'Inspect the validated schedule, daily load distribution, and recommendations before activating.'
          : 'Define your priorities, weekly availability, and study rhythm to synthesize an optimal schedule.'
      }
      maxWidth="2xl"
    >
      {/* 1. GENERATION IN PROGRESS */}
      {isGenerating && (
        <div className="py-12 px-4 text-center space-y-6">
          <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-4 border-indigo-100 border-t-indigo-600 animate-spin" />
            <Brain className="w-8 h-8 text-indigo-600 animate-pulse" />
          </div>

          <div className="space-y-2">
            <h4 className="text-base font-bold text-slate-900">
              Synthesizing Your Academic Schedule
            </h4>
            <p className="text-xs text-indigo-600 font-medium animate-pulse">{progressStep}</p>
          </div>

          <p className="text-[11px] text-slate-400 max-w-sm mx-auto">
            Applying spaced retrieval pacing, interleaving subjects, and verifying no conflicting time blocks.
          </p>
        </div>
      )}

      {/* 2. DRAFT PLAN REVIEW VIEW */}
      {!isGenerating && generatedDraftPlan && (
        <div className="space-y-5 max-h-[70vh] overflow-y-auto pr-1">
          {/* Plan Summary Card */}
          <div className="p-4 rounded-xl bg-pilot-pale border border-pilot-soft/80 space-y-2">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-pilot-deep">
                {generatedDraftPlan.title}
              </span>
              <div className="flex items-center gap-2">
                <Badge
                  variant="primary"
                  size="sm"
                  className={
                    generatedDraftPlan.source === 'ai'
                      ? 'bg-pilot-deep text-white border-transparent'
                      : 'bg-pilot-soft/40 text-pilot-deep border-pilot-soft'
                  }
                >
                  {generatedDraftPlan.source === 'ai'
                    ? 'Google Gemini 1.5 Flash'
                    : 'Deterministic Planning Engine'}
                </Badge>
                <span className="text-[11px] font-semibold text-slate-500">
                  {generatedDraftPlan.sessions.length} sessions
                </span>
              </div>
            </div>
            <p className="text-xs text-pilot-dark leading-relaxed">{generatedDraftPlan.summary}</p>
          </div>

          {/* Warnings and Unscheduled Tasks if any */}
          {generatedDraftPlan.unscheduledTasks.length > 0 && (
            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 space-y-2">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                <h5 className="text-xs font-bold">Unscheduled Work Notice</h5>
              </div>
              <ul className="text-xs space-y-1 list-disc list-inside text-amber-800">
                {generatedDraftPlan.unscheduledTasks.map((u) => (
                  <li key={u.taskId}>
                    <strong>{u.taskTitle}:</strong> {u.reason}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Generated Sessions List */}
          <div className="space-y-2">
            <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
              Scheduled Study Blocks
            </h5>
            <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden bg-white max-h-64 overflow-y-auto">
              {generatedDraftPlan.sessions.map((sess) => (
                <div key={sess.id} className="p-3 flex items-center justify-between text-xs gap-3">
                  <div className="space-y-0.5 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 truncate">{sess.title}</span>
                      <SubjectBadge subjectId={sess.subjectId} showCodeOnly />
                    </div>
                    <div className="text-[11px] text-slate-500 flex items-center gap-2">
                      <span>{sess.date}</span>
                      <span>·</span>
                      <span>
                        {sess.startTime} - {sess.endTime} ({sess.durationMinutes}m)
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] text-indigo-600 font-semibold bg-indigo-50 px-2 py-0.5 rounded shrink-0">
                    Validated
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Daily Totals Preview */}
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
            <h6 className="text-[11px] font-bold text-slate-700 uppercase tracking-wide mb-2">
              Daily Study Load
            </h6>
            <div className="flex flex-wrap gap-2 text-xs">
              {Object.entries(generatedDraftPlan.dailyTotals).map(([date, mins]) => (
                <div key={date} className="bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                  <span className="text-slate-500 font-medium">{date}:</span>{' '}
                  <strong className="text-slate-900">{(mins / 60).toFixed(1)}h</strong>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <Button variant="ghost" size="sm" onClick={handleResetDraft} leftIcon={<RotateCcw className="w-4 h-4" />}>
              Adjust Inputs
            </Button>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={onClose}>
                Cancel
              </Button>
              <Button
                variant="primary"
                size="md"
                onClick={handleSavePlan}
                isLoading={isSaving}
                leftIcon={<Save className="w-4 h-4" />}
              >
                Save & Activate Plan
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* 3. CONFIGURATION INPUT VIEW */}
      {!isGenerating && !generatedDraftPlan && (
        <div className="space-y-5 max-h-[72vh] overflow-y-auto pr-1">
          {/* Goal Selector */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide">
              Primary Planning Objective
            </label>
            <Select
              value={goal}
              onChange={(e) => setGoal(e.target.value as StudyGoalType)}
            >
              <option value="balanced">Balanced Weekly Routine (Recommended)</option>
              <option value="exams">Exam Preparation & High-Stakes Tests</option>
              <option value="assignments">Clear Assignment Backlog & Deadlines</option>
              <option value="weak_subjects">Reinforce Difficult / Low-Confidence Subjects</option>
              <option value="routine">Build Consistent Daily Study Habits</option>
            </Select>
          </div>

          {/* Subject Inclusions */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">
                Include Courses ({selectedSubjectIds.length} / {subjects.length})
              </label>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {subjects.map((sub) => {
                const isSelected = selectedSubjectIds.includes(sub.id);
                return (
                  <button
                    type="button"
                    key={sub.id}
                    onClick={() => handleToggleSubject(sub.id)}
                    className={`flex items-center justify-between p-2.5 rounded-xl border text-left text-xs transition-all ${
                      isSelected
                        ? 'border-indigo-400 bg-indigo-50/50 text-slate-900 font-medium'
                        : 'border-slate-200 bg-white text-slate-500 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: sub.color }} />
                      <span className="truncate">{sub.code} · {sub.name}</span>
                    </div>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Pending Tasks & Deadlines Selection */}
          {tasks.filter((t) => !t.completed).length > 0 && (
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">
                Prioritize Deadlines & Assignments ({selectedTaskIds.length} selected)
              </label>
              <div className="max-h-36 overflow-y-auto space-y-1.5 border border-slate-200 rounded-xl p-2 bg-slate-50/50">
                {tasks
                  .filter((t) => !t.completed)
                  .map((task) => {
                    const isSelected = selectedTaskIds.includes(task.id);
                    return (
                      <div
                        key={task.id}
                        onClick={() => handleToggleTask(task.id)}
                        className={`p-2 rounded-lg border text-xs flex items-center justify-between cursor-pointer transition-colors ${
                          isSelected ? 'bg-white border-indigo-300' : 'bg-transparent border-slate-200'
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => {}}
                            className="rounded text-indigo-600 h-3.5 w-3.5"
                          />
                          <span className="font-medium text-slate-800 truncate">{task.title}</span>
                          <SubjectBadge subjectId={task.subjectId} showCodeOnly />
                        </div>
                        <span className="text-[11px] text-slate-500 shrink-0">Due {task.dueDate}</span>
                      </div>
                    );
                  })}
              </div>
            </div>
          )}

          {/* Availability Weekdays Pills */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">
              Weekly Study Availability
            </label>
            <div className="grid grid-cols-7 gap-1.5">
              {Object.entries(availableDays).map(([day, win]) => (
                <button
                  type="button"
                  key={day}
                  onClick={() => handleToggleDay(day)}
                  className={`p-2 rounded-xl text-center text-xs font-bold border transition-all ${
                    win.enabled
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                      : 'bg-white text-slate-400 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div>{day}</div>
                  <div className="text-[10px] font-normal">{win.enabled ? 'Active' : 'Off'}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Collapsible Advanced Settings */}
          <div className="pt-2 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="flex items-center justify-between w-full text-xs font-semibold text-slate-600 hover:text-slate-900 py-1"
            >
              <span>Capacity, Strategy & Break Settings</span>
              {showAdvanced ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {showAdvanced && (
              <div className="pt-3 space-y-4 animate-in fade-in duration-150">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  <Select
                    label="Pacing Strategy"
                    value={strategy}
                    onChange={(e) => setStrategy(e.target.value as PlanningStrategy)}
                  >
                    <option value="balanced">Balanced Interleaving</option>
                    <option value="deadline_focused">Deadline Driven</option>
                    <option value="revision_heavy">Revision & Retention</option>
                  </Select>

                  <Input
                    type="number"
                    label="Daily Limit (Mins)"
                    min="60"
                    max="600"
                    step="30"
                    value={dailyLimitMinutes}
                    onChange={(e) => setDailyLimitMinutes(Number(e.target.value))}
                  />

                  <Select
                    label="Block Length"
                    value={preferredSessionMinutes}
                    onChange={(e) => setPreferredSessionMinutes(Number(e.target.value))}
                  >
                    <option value="25">25 mins (Pomodoro)</option>
                    <option value="45">45 mins (Deep Work)</option>
                    <option value="60">60 mins (Intensive)</option>
                  </Select>

                  <Select
                    label="Break Length"
                    value={breakDurationMinutes}
                    onChange={(e) => setBreakDurationMinutes(Number(e.target.value))}
                  >
                    <option value="5">5 mins</option>
                    <option value="10">10 mins</option>
                    <option value="15">15 mins</option>
                  </Select>
                </div>

                <div className="space-y-1 text-left">
                  <label className="block text-xs font-semibold text-slate-700 tracking-wide uppercase">
                    Specific Focus Topics or Instructions (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={focusNotes}
                    onChange={(e) => setFocusNotes(e.target.value)}
                    placeholder="e.g. Prioritize midterm review for History on Wednesday and Friday..."
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button
              type="button"
              variant="primary"
              onClick={handleGenerate}
              leftIcon={<Sparkles className="w-4 h-4" />}
            >
              Generate AI Schedule
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
};
