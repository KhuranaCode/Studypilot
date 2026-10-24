import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Sparkles,
  Calendar,
  CalendarDays,
  LayoutList,
  ChevronLeft,
  ChevronRight,
  Plus,
  Clock,
  Pen,
  Trash2,
  Timer,
  CircleCheck,
  TriangleAlert,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { SubjectBadge } from '../components/ui/SubjectBadge';
import { ConfirmationModal } from '../components/ui/ConfirmationModal';
import { EmptyState } from '../components/ui/EmptyState';
import { SessionModal } from '../components/study-plan/SessionModal';
import { GeneratePlanModal } from '../components/study-plan/GeneratePlanModal';
import { Tilt3DCard } from '../components/3d/Tilt3DCard';
import { ThreeDButton } from '../components/3d/ThreeDButton';
import { getTodayDateString } from '../lib/studyMetrics';
import type { StudySession } from '../types';

const getWeekDates = (anchor: Date): Date[] => {
  const dates: Date[] = [];
  const ref = new Date(anchor);
  const day = ref.getDay();
  const mondayOffset = ref.getDate() - day + (day === 0 ? -6 : 1);
  const monday = new Date(ref.setDate(mondayOffset));
  for (let i = 0; i < 7; i++) {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    dates.push(d);
  }
  return dates;
};

const findConflictingSessionIds = (daySessions: StudySession[]): Set<string> => {
  const conflicts = new Set<string>();
  for (let i = 0; i < daySessions.length; i++) {
    for (let j = i + 1; j < daySessions.length; j++) {
      const a = daySessions[i];
      const b = daySessions[j];
      if (a.startTime < b.endTime && b.startTime < a.endTime) {
        conflicts.add(a.id);
        conflicts.add(b.id);
      }
    }
  }
  return conflicts;
};

export const StudyPlanPage: React.FC = () => {
  const navigate = useNavigate();
  const { sessions, savedPlans, toggleSession, deleteSession, setActiveFocusSession } = useApp();

  const [viewMode, setViewMode] = useState<'week' | 'day'>('week');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sessionToEdit, setSessionToEdit] = useState<StudySession | null>(null);
  const [sessionToDelete, setSessionToDelete] = useState<StudySession | null>(null);
  const [defaultDate, setDefaultDate] = useState(getTodayDateString());
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);

  const weekDates = getWeekDates(currentDate);
  const todayStr = getTodayDateString();

  const goToPreviousWeek = () => {
    const d = new Date(currentDate);
    d.setDate(d.getDate() - 7);
    setCurrentDate(d);
  };
  const goToNextWeek = () => {
    const d = new Date(currentDate);
    d.setDate(d.getDate() + 7);
    setCurrentDate(d);
  };
  const goToToday = () => setCurrentDate(new Date());

  const toDateStr = (d: Date) => d.toISOString().split('T')[0];

  const openAddModal = (dateStr?: string) => {
    setSessionToEdit(null);
    setDefaultDate(dateStr || toDateStr(new Date()));
    setIsModalOpen(true);
  };
  const openEditModal = (session: StudySession) => {
    setSessionToEdit(session);
    setIsModalOpen(true);
  };
  const startFocus = (session: StudySession) => {
    setActiveFocusSession({ subjectId: session.subjectId, taskId: session.taskId });
    navigate('/focus');
  };
  const confirmDelete = () => {
    if (sessionToDelete) {
      deleteSession(sessionToDelete.id);
      setSessionToDelete(null);
    }
  };

  const activePlan = savedPlans.find((p) => p.status === 'active') || savedPlans[0];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {activePlan && (
        <Tilt3DCard
          maxTilt={3}
          className="bg-gradient-to-r from-[#202226] via-[#2A2E38] to-[#101114] border border-[#545B66]/60 rounded-3xl p-5 sm:p-6 text-[#F2F3F5] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-[0_12px_32px_rgba(0,0,0,0.35),0_2px_0_0_#545B66]"
        >
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#7AA7FF]" />
              <span className="text-xs font-bold text-[#7AA7FF] uppercase tracking-wider">
                Active Study Plan: {activePlan.title}
              </span>
              <Badge
                variant="primary"
                size="sm"
                className="bg-[#3D52A0] text-white border-transparent"
              >
                {activePlan.sessions.length} Scheduled Blocks
              </Badge>
            </div>
            <p className="text-xs text-[#BFC3C9] leading-relaxed max-w-2xl">{activePlan.summary}</p>
          </div>
          <ThreeDButton
            variant="metallic-chrome"
            size="sm"
            onClick={() => setIsPlanModalOpen(true)}
            leftIcon={<Sparkles className="w-3.5 h-3.5 text-pilot-deep" />}
            className="self-start sm:self-auto shrink-0"
          >
            Regenerate Plan
          </ThreeDButton>
        </Tilt3DCard>
      )}

      <Tilt3DCard
        maxTilt={3}
        className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-pilot-soft/80 shadow-[0_3px_0_0_#ADBBDA,0_6px_16px_rgba(61,82,160,0.06)]"
      >
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#4A62B6] to-[#27356B] text-white shadow-3d-btn border-t border-white/30">
            <Calendar className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">Weekly Study Plan</h2>
            <p className="text-xs text-slate-500">
              {weekDates[0].toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} to{' '}
              {weekDates[6].toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="bg-slate-100 p-1 rounded-xl flex items-center text-xs font-semibold text-slate-600">
            <button
              onClick={() => setViewMode('week')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                viewMode === 'week' ? 'bg-white text-pilot-deep shadow-xs' : 'hover:text-slate-900'
              }`}
            >
              <span className="flex items-center gap-1.5">
                <CalendarDays className="w-3.5 h-3.5" /> Week View
              </span>
            </button>
            <button
              onClick={() => setViewMode('day')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                viewMode === 'day' ? 'bg-white text-pilot-deep shadow-xs' : 'hover:text-slate-900'
              }`}
            >
              <span className="flex items-center gap-1.5">
                <LayoutList className="w-3.5 h-3.5" /> Day View
              </span>
            </button>
          </div>

          <div className="flex items-center gap-1 border border-slate-200 rounded-xl p-1 bg-white shadow-3d-secondary">
            <button
              onClick={goToPreviousWeek}
              className="p-1.5 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Previous week"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <Button variant="ghost" size="sm" onClick={goToToday} className="text-xs px-2.5 h-8">
              Today
            </Button>
            <button
              onClick={goToNextWeek}
              className="p-1.5 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Next week"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <ThreeDButton
            variant="metallic-chrome"
            size="sm"
            onClick={() => setIsPlanModalOpen(true)}
            leftIcon={<Sparkles className="w-3.5 h-3.5 text-pilot-deep" />}
          >
            AI Plan
          </ThreeDButton>
          <ThreeDButton
            variant="metallic-deep"
            size="sm"
            onClick={() => openAddModal()}
            leftIcon={<Plus className="w-3.5 h-3.5" />}
          >
            New Session
          </ThreeDButton>
        </div>
      </Tilt3DCard>

      {viewMode === 'week' ? (
        <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
          {weekDates.map((date) => {
            const dateStr = toDateStr(date);
            const isToday = todayStr === dateStr;
            const daySessions = sessions
              .filter((s) => s.date === dateStr)
              .sort((a, b) => a.startTime.localeCompare(b.startTime));
            const conflicts = findConflictingSessionIds(daySessions);
            const weekday = date.toLocaleDateString('en-US', { weekday: 'short' });
            const dayNum = date.getDate();
            return (
              <div
                key={dateStr}
                className={`rounded-2xl border flex flex-col min-h-[500px] transition-all ${
                  isToday
                    ? 'border-pilot-deep/60 bg-pilot-pale/50 shadow-[0_4px_12px_rgba(61,82,160,0.12),0_2px_0_0_#3D52A0]'
                    : 'border-pilot-soft/80 bg-white shadow-card'
                }`}
              >
                <div
                  className={`p-3 border-b flex items-center justify-between rounded-t-2xl ${
                    isToday ? 'border-pilot-soft bg-pilot-pale/80' : 'border-slate-100'
                  }`}
                >
                  <div>
                    <span
                      className={`text-xs font-bold block uppercase tracking-wider ${
                        isToday ? 'text-pilot-deep' : 'text-slate-600'
                      }`}
                    >
                      {weekday}
                    </span>
                    <span
                      className={`text-sm font-extrabold ${
                        isToday ? 'text-pilot-deep' : 'text-slate-900'
                      }`}
                    >
                      {dayNum}
                    </span>
                  </div>
                  <button
                    onClick={() => openAddModal(dateStr)}
                    className="p-1 rounded-md text-slate-400 hover:text-pilot-deep hover:bg-pilot-pale transition-colors"
                    title={`Add session on ${dateStr}`}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <div className="p-2 space-y-2 flex-1 overflow-y-auto">
                  {daySessions.length === 0 ? (
                    <div className="h-full flex items-center justify-center p-4 text-center">
                      <span className="text-[11px] text-slate-400 font-medium">No sessions</span>
                    </div>
                  ) : (
                    daySessions.map((session) => {
                      const hasConflict = conflicts.has(session.id);
                      return (
                        <div
                          key={session.id}
                          className={`p-2.5 rounded-xl border text-xs text-left relative group transition-all duration-150 ${
                            session.completed
                              ? 'bg-slate-50/80 border-slate-200 text-slate-400'
                              : hasConflict
                                ? 'bg-amber-50/70 border-amber-300'
                                : 'bg-white border-pilot-soft hover:border-pilot-periwinkle hover:shadow-[0_4px_12px_rgba(61,82,160,0.1)]'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {session.startTime} - {session.endTime}
                            </span>
                            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button
                                onClick={() => openEditModal(session)}
                                className="text-slate-400 hover:text-pilot-deep"
                                title="Edit session"
                              >
                                <Pen className="w-3 h-3" />
                              </button>
                              <button
                                onClick={() => setSessionToDelete(session)}
                                className="text-slate-400 hover:text-rose-600"
                                title="Delete session"
                              >
                                <Trash2 className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                          <h4
                            className={`font-semibold line-clamp-2 leading-tight mb-1.5 ${
                              session.completed ? 'line-through text-slate-400' : 'text-slate-900'
                            }`}
                          >
                            {session.title}
                          </h4>
                          <div className="flex items-center justify-between gap-1 flex-wrap">
                            <SubjectBadge subjectId={session.subjectId} showCodeOnly />
                            <div className="flex items-center gap-1">
                              {!session.completed && (
                                <button
                                  onClick={() => startFocus(session)}
                                  className="p-1 rounded text-pilot-deep hover:bg-pilot-pale transition-colors"
                                  title="Start timer for this block"
                                >
                                  <Timer className="w-3.5 h-3.5" />
                                </button>
                              )}
                              <button
                                onClick={() => toggleSession(session.id)}
                                className={`p-0.5 rounded transition-colors ${
                                  session.completed
                                    ? 'text-emerald-600'
                                    : 'text-slate-300 hover:text-emerald-500'
                                }`}
                                title={session.completed ? 'Completed' : 'Mark complete'}
                              >
                                <CircleCheck className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                          {hasConflict && (
                            <div className="mt-1.5 flex items-center gap-1 text-[10px] text-amber-700 font-semibold bg-amber-100/70 px-1.5 py-0.5 rounded">
                              <TriangleAlert className="w-3 h-3 shrink-0" />
                              <span>Time Conflict</span>
                            </div>
                          )}
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <Tilt3DCard
          maxTilt={3}
          className="p-6 bg-white rounded-2xl border border-pilot-soft/80 shadow-card"
        >
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Detailed Timeline:{' '}
                {currentDate.toLocaleDateString('en-US', {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric',
                })}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Full chronological overview of today's study commitments.
              </p>
            </div>
            <ThreeDButton
              variant="metallic-deep"
              size="sm"
              onClick={() => openAddModal(toDateStr(currentDate))}
              leftIcon={<Plus className="w-3.5 h-3.5" />}
            >
              Schedule Block
            </ThreeDButton>
          </div>

          {sessions.filter((s) => s.date === toDateStr(currentDate)).length === 0 ? (
            <EmptyState
              icon={<Calendar className="w-6 h-6 text-pilot-deep" />}
              title="No Study Sessions Planned For This Day"
              description="Keep your momentum going by generating an AI-optimized schedule or manually adding a study block."
              actionLabel="Add Study Session"
              onAction={() => openAddModal(toDateStr(currentDate))}
            />
          ) : (
            <div className="space-y-4">
              {sessions
                .filter((s) => s.date === toDateStr(currentDate))
                .sort((a, b) => a.startTime.localeCompare(b.startTime))
                .map((session) => (
                  <div
                    key={session.id}
                    className="p-4 rounded-xl border border-pilot-soft hover:border-pilot-periwinkle bg-white shadow-card flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <button
                        onClick={() => toggleSession(session.id)}
                        className={`mt-1 transition-colors ${
                          session.completed
                            ? 'text-emerald-600'
                            : 'text-slate-300 hover:text-emerald-500'
                        }`}
                        title={session.completed ? 'Completed' : 'Mark complete'}
                      >
                        <CircleCheck className="w-5 h-5" />
                      </button>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span
                            className={`text-sm font-semibold ${
                              session.completed ? 'line-through text-slate-400' : 'text-slate-900'
                            }`}
                          >
                            {session.title}
                          </span>
                          <SubjectBadge subjectId={session.subjectId} showCodeOnly />
                          {session.isAiGenerated && (
                            <Badge variant="primary" size="sm">
                              <Sparkles className="w-3 h-3 text-pilot-deep" /> AI Block
                            </Badge>
                          )}
                        </div>
                        {session.notes && <p className="text-xs text-slate-500">{session.notes}</p>}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 self-end sm:self-center">
                      <div className="text-right">
                        <span className="text-xs font-semibold text-slate-700 block">
                          {session.startTime} - {session.endTime}
                        </span>
                        <span className="text-[11px] text-slate-400 block">
                          {session.durationMinutes} min
                        </span>
                      </div>
                      {!session.completed && (
                        <ThreeDButton
                          variant="metallic-chrome"
                          size="sm"
                          onClick={() => startFocus(session)}
                          leftIcon={<Timer className="w-3.5 h-3.5 text-pilot-deep" />}
                          className="h-8 text-xs"
                        >
                          Focus
                        </ThreeDButton>
                      )}
                      <div className="flex items-center gap-1 border-l pl-2 border-slate-200">
                        <button
                          onClick={() => openEditModal(session)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                          title="Edit session"
                        >
                          <Pen className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => setSessionToDelete(session)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50"
                          title="Delete session"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </Tilt3DCard>
      )}

      <SessionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        sessionToEdit={sessionToEdit}
        defaultDate={defaultDate}
      />
      <GeneratePlanModal isOpen={isPlanModalOpen} onClose={() => setIsPlanModalOpen(false)} />
      <ConfirmationModal
        isOpen={!!sessionToDelete}
        onClose={() => setSessionToDelete(null)}
        onConfirm={confirmDelete}
        title="Delete Study Block"
        message={`Are you sure you want to delete "${sessionToDelete?.title}"?`}
        confirmLabel="Delete Session"
        variant="danger"
      />
    </div>
  );
};
