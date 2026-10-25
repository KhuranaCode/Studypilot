import React, { useEffect, useRef, useState } from 'react';
import {
  Timer,
  Award,
  Eye,
  Volume2,
  VolumeX,
  Coffee,
  RotateCcw,
  Pause,
  Play,
  FastForward,
  Headphones,
  CloudRain,
  Waves,
  Brain,
  CircleCheck,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Badge } from '../components/ui/Badge';
import { Select } from '../components/ui/Select';
import { Button } from '../components/ui/Button';
import { Modal } from '../components/ui/Modal';
import { ConfirmationModal } from '../components/ui/ConfirmationModal';
import { Tilt3DCard } from '../components/3d/Tilt3DCard';
import { ThreeDButton } from '../components/3d/ThreeDButton';
import { FocusTimer3DVisual } from '../components/3d/FocusTimer3DVisual';
import { getTodayDateString } from '../lib/studyMetrics';
import { ambientAudio, type AmbientSoundType } from '../services/ambientAudioService';

const TIMER_STORAGE_KEY = 'studypilot_active_timer_state';

type TimerMode = 'focus' | 'shortBreak' | 'longBreak';

const playCompletionChime = () => {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(587.33, ctx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.3);
    gain.gain.setValueAtTime(0.25, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);
    oscillator.connect(gain);
    gain.connect(ctx.destination);
    oscillator.start();
    oscillator.stop(ctx.currentTime + 1.2);
  } catch {
    // Audio unavailable; chime is best-effort.
  }
};

const formatClock = (totalSeconds: number) => {
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

export const FocusTimerPage: React.FC = () => {
  const {
    subjects,
    tasks,
    sessions,
    preferences,
    showToast,
    activeFocusSession,
    recordCompletedTimerSession,
  } = useApp();

  const [mode, setMode] = useState<TimerMode>('focus');
  const [targetMinutes, setTargetMinutes] = useState(preferences.preferredFocusMinutes || 45);
  const [isRunning, setIsRunning] = useState(false);
  const [accumulatedSeconds, setAccumulatedSeconds] = useState(0);
  const [elapsedSinceStart, setElapsedSinceStart] = useState(0);
  const [selectedSubjectId, setSelectedSubjectId] = useState(
    activeFocusSession?.subjectId || subjects[0]?.id || ''
  );
  const [selectedTaskId, setSelectedTaskId] = useState(activeFocusSession?.taskId || '');
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [showEarlyConfirm, setShowEarlyConfirm] = useState(false);
  const [chimeEnabled, setChimeEnabled] = useState(preferences.soundEnabled !== false);
  const [lastLoggedMinutes, setLastLoggedMinutes] = useState(targetMinutes);
  const [show3D, setShow3D] = useState(true);

  const startTimestampRef = useRef<number | null>(null);
  const sessionStartedAtRef = useRef<string | null>(null);
  const rafRef = useRef<number | null>(null);
  const isFinalizingRef = useRef(false);

  const todayStr = getTodayDateString();
  const todayCompleted = sessions.filter((s) => s.completed && s.date === todayStr);

  useEffect(() => {
    if (activeFocusSession?.subjectId) setSelectedSubjectId(activeFocusSession.subjectId);
    if (activeFocusSession?.taskId) setSelectedTaskId(activeFocusSession.taskId);
  }, [activeFocusSession]);

  // Restore a persisted timer so a reload does not lose an active focus block.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(TIMER_STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw);
        setMode(saved.mode || 'focus');
        setTargetMinutes(saved.targetMinutes || 45);
        setAccumulatedSeconds(saved.accumulatedSeconds || 0);
        if (saved.selectedSubjectId) setSelectedSubjectId(saved.selectedSubjectId);
        if (saved.selectedTaskId) setSelectedTaskId(saved.selectedTaskId);
        if (saved.sessionStartedAtIso) sessionStartedAtRef.current = saved.sessionStartedAtIso;
        if (saved.isRunning && saved.startTimestamp) {
          const now = Date.now();
          const elapsed = Math.floor((now - saved.startTimestamp) / 1000);
          const total = (saved.accumulatedSeconds || 0) + elapsed;
          const targetSecs = (saved.targetMinutes || 45) * 60;
          if (total >= targetSecs) {
            setAccumulatedSeconds(targetSecs);
            setIsRunning(false);
            localStorage.removeItem(TIMER_STORAGE_KEY);
          } else {
            startTimestampRef.current = saved.startTimestamp;
            setIsRunning(true);
            setElapsedSinceStart(elapsed);
          }
        }
      }
    } catch {
      // Corrupt or unavailable storage: start fresh.
    }
  }, []);

  const persistState = (
    running: boolean,
    accumulated: number,
    startTimestamp: number | null
  ) => {
    try {
      localStorage.setItem(
        TIMER_STORAGE_KEY,
        JSON.stringify({
          mode,
          targetMinutes,
          accumulatedSeconds: accumulated,
          startTimestamp,
          isRunning: running,
          selectedSubjectId,
          selectedTaskId,
          sessionStartedAtIso: sessionStartedAtRef.current,
        })
      );
    } catch {
      // Storage full/blocked: timer still works in-memory.
    }
  };

  useEffect(() => {
    if (!isRunning) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      return;
    }
    const targetSecs = targetMinutes * 60;
    const tick = () => {
      if (startTimestampRef.current) {
        const now = Date.now();
        const elapsed = Math.floor((now - startTimestampRef.current) / 1000);
        setElapsedSinceStart(elapsed);
        if (accumulatedSeconds + elapsed >= targetSecs) {
          handleTimerComplete();
          return;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isRunning, accumulatedSeconds, targetMinutes]);

  const totalElapsed = accumulatedSeconds + elapsedSinceStart;
  const totalTargetSeconds = targetMinutes * 60;
  const remainingSeconds = Math.max(0, totalTargetSeconds - totalElapsed);

  const handleTimerComplete = async () => {
    if (isFinalizingRef.current) return;
    isFinalizingRef.current = true;
    setIsRunning(false);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (chimeEnabled) playCompletionChime();

    const minutes = Math.max(1, Math.round(totalTargetSeconds / 60));
    setLastLoggedMinutes(minutes);
    if (mode === 'focus') {
      try {
        const endedAt = new Date().toISOString();
        await recordCompletedTimerSession({
          subjectId: selectedSubjectId,
          taskId: selectedTaskId || undefined,
          durationMinutes: minutes,
          startedAt: sessionStartedAtRef.current || new Date().toISOString(),
          endedAt,
        });
        showToast('Focus session logged!', `Great job completing ${minutes} mins.`, 'success');
        setShowCompletionModal(true);
      } catch {
        showToast('Save failed', 'Failed to save completed session. Check network or reload.', 'error');
      }
    } else {
      showToast('Break finished!', 'Ready to return to deep work.', 'info');
    }
    localStorage.removeItem(TIMER_STORAGE_KEY);
    startTimestampRef.current = null;
    sessionStartedAtRef.current = null;
    setAccumulatedSeconds(0);
    setElapsedSinceStart(0);
    isFinalizingRef.current = false;
  };

  const toggleTimer = () => {
    if (isRunning) {
      const now = Date.now();
      const elapsed = startTimestampRef.current
        ? Math.floor((now - startTimestampRef.current) / 1000)
        : 0;
      const newAccumulated = accumulatedSeconds + elapsed;
      setIsRunning(false);
      setAccumulatedSeconds(newAccumulated);
      setElapsedSinceStart(0);
      startTimestampRef.current = null;
      persistState(false, newAccumulated, null);
    } else {
      const now = Date.now();
      startTimestampRef.current = now;
      if (!sessionStartedAtRef.current) sessionStartedAtRef.current = new Date(now).toISOString();
      setIsRunning(true);
      persistState(true, accumulatedSeconds, now);
    }
  };

  const resetTimer = () => {
    setIsRunning(false);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    startTimestampRef.current = null;
    sessionStartedAtRef.current = null;
    setAccumulatedSeconds(0);
    setElapsedSinceStart(0);
    localStorage.removeItem(TIMER_STORAGE_KEY);
  };

  const switchMode = (minutes: number, newMode: TimerMode) => {
    resetTimer();
    setMode(newMode);
    setTargetMinutes(minutes);
  };

  const completeEarly = async () => {
    setShowEarlyConfirm(false);
    if (isFinalizingRef.current) return;
    isFinalizingRef.current = true;
    setIsRunning(false);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    const minutes = Math.max(1, Math.round(totalElapsed / 60));
    setLastLoggedMinutes(minutes);
    if (mode === 'focus') {
      try {
        const endedAt = new Date().toISOString();
        await recordCompletedTimerSession({
          subjectId: selectedSubjectId,
          taskId: selectedTaskId || undefined,
          durationMinutes: minutes,
          startedAt: sessionStartedAtRef.current || new Date().toISOString(),
          endedAt,
        });
        showToast('Early session logged!', `Recorded ${minutes} minutes.`, 'success');
        setShowCompletionModal(true);
      } catch {
        showToast('Save failed', 'Error saving session.', 'error');
      }
    }
    resetTimer();
    isFinalizingRef.current = false;
  };

  const progressRatio = totalTargetSeconds > 0 ? remainingSeconds / totalTargetSeconds : 0;
  const circumference = 2 * Math.PI * 115;
  const dashOffset = circumference - progressRatio * circumference;

  const selectedSubject = subjects.find((s) => s.id === selectedSubjectId);
  const selectedTask = tasks.find((t) => t.id === selectedTaskId);
  const completedMinutesSoFar = Math.floor(totalElapsed / 60);

  const [currentSound, setCurrentSound] = useState<AmbientSoundType>('rain');
  const [isSoundPlaying, setIsSoundPlaying] = useState(false);
  const toggleSound = (sound: AmbientSoundType) => {
    if (isSoundPlaying && currentSound === sound) {
      ambientAudio.stop();
      setIsSoundPlaying(false);
    } else {
      ambientAudio.play(sound, 0.4);
      setCurrentSound(sound);
      setIsSoundPlaying(true);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <Tilt3DCard
        maxTilt={3}
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-[#1A1D24] p-5 rounded-2xl border border-pilot-soft/70 dark:border-slate-800 shadow-[0_3px_0_0_#ADBBDA,0_8px_20px_rgba(61,82,160,0.06)] dark:shadow-none"
      >
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-linear-to-br from-[#4A62B6] to-[#27356B] text-white shadow-3d-btn border-t border-white/30">
            <Timer className="w-5 h-5 text-[#F2F3F5]" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-pilot-dark dark:text-white">
              Deep Work &amp; 3D Focus Cockpit
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Eliminate multitasking. Run distraction-free study blocks.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="primary" size="md">
            <Award className="w-3.5 h-3.5" />
            <span>{todayCompleted.length} sessions completed today</span>
          </Badge>
          <button
            onClick={() => setShow3D((v) => !v)}
            className={`p-2 rounded-xl transition-all border ${
              show3D
                ? 'bg-pilot-pale dark:bg-pilot-deep/30 text-pilot-deep dark:text-pilot-electric border-pilot-soft dark:border-slate-700'
                : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 border-transparent hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
            title="Toggle 3D Gyro Visualizer"
          >
            <Eye className="w-4 h-4" />
          </button>
          <button
            onClick={() => setChimeEnabled(!chimeEnabled)}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title={chimeEnabled ? 'Chime alerts on' : 'Chime alerts muted'}
            aria-label={chimeEnabled ? 'Chime alerts on' : 'Chime alerts muted'}
          >
            {chimeEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
        </div>
      </Tilt3DCard>

      <Tilt3DCard
        maxTilt={4}
        className="p-6 sm:p-10 text-center flex flex-col items-center justify-center relative overflow-hidden bg-white dark:bg-[#1A1D24] shadow-elevated dark:shadow-none border border-pilot-soft/80 dark:border-slate-800 rounded-3xl"
      >
        <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-[#15171C] mb-8 max-w-md w-full justify-center">
          <button
            onClick={() => switchMode(targetMinutes > 15 ? targetMinutes : 45, 'focus')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
              mode === 'focus'
                ? 'bg-white dark:bg-[#202226] text-pilot-deep dark:text-[#F2F3F5] shadow-2xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-pilot-deep dark:hover:text-white'
            }`}
          >
            Deep Focus
          </button>
          <button
            onClick={() => switchMode(5, 'shortBreak')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
              mode === 'shortBreak'
                ? 'bg-white dark:bg-[#202226] text-pilot-periwinkle dark:text-pilot-periwinkle shadow-2xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-pilot-periwinkle dark:hover:text-pilot-periwinkle'
            }`}
          >
            <Coffee className="w-3.5 h-3.5" /> Short Break (5m)
          </button>
          <button
            onClick={() => switchMode(15, 'longBreak')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
              mode === 'longBreak'
                ? 'bg-white dark:bg-[#202226] text-pilot-muted dark:text-slate-300 shadow-2xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-pilot-muted dark:hover:text-slate-300'
            }`}
          >
            <Coffee className="w-3.5 h-3.5" /> Long Break (15m)
          </button>
        </div>

        <div className="relative my-4 flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-2xl">
          {show3D && (
            <div className="w-64 h-64 rounded-2xl bg-linear-to-b from-[#18191D] to-[#101114] border border-[#545B66]/40 shadow-inner flex items-center justify-center relative overflow-hidden shrink-0">
              <FocusTimer3DVisual
                isRunning={isRunning}
                mode={mode}
                remainingSeconds={remainingSeconds}
                totalTargetSeconds={totalTargetSeconds}
              />
              <div className="absolute bottom-2 left-3 text-[10px] font-mono text-[#858B95] uppercase tracking-wider">
                {isRunning ? 'Flow Pulse: Active' : 'Gyroscope: Primed'}
              </div>
            </div>
          )}

          <div className="relative flex items-center justify-center">
            <svg width={280} height={280} className="transform -rotate-90">
              <circle
                cx={140}
                cy={140}
                r={115}
                strokeWidth={12}
                fill="transparent"
                className="stroke-pilot-pale dark:stroke-[#2A2E37]"
              />
              <circle
                cx={140}
                cy={140}
                r={115}
                stroke={mode === 'focus' ? (selectedSubject ? selectedSubject.color : '#3D52A0') : '#7091E6'}
                strokeWidth={12}
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
                strokeLinecap="round"
                fill="transparent"
                className="transition-all duration-300 ease-linear"
              />
            </svg>
            <div className="absolute flex flex-col items-center justify-center">
              <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white font-mono">
                {formatClock(remainingSeconds)}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mt-2">
                {mode === 'focus'
                  ? isRunning
                    ? 'In The Flow'
                    : totalElapsed > 0
                      ? 'Session Paused'
                      : 'Ready'
                  : 'Recharge Time'}
              </span>
              {selectedSubject && mode === 'focus' && (
                <div className="flex flex-col items-center gap-1 mt-2">
                  <span
                    className="text-xs font-medium px-2.5 py-0.5 rounded-full border"
                    style={{
                      backgroundColor: selectedSubject.color + '15',
                      color: selectedSubject.color,
                      borderColor: selectedSubject.color + '40',
                    }}
                  >
                    {selectedSubject.code}
                  </span>
                  {selectedTask && (
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 max-w-[180px] truncate">
                      {selectedTask.title}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {mode === 'focus' && (
          <div className="flex items-center gap-2 mb-8 flex-wrap justify-center">
            {[25, 45, 60].map((mins) => (
              <button
                key={mins}
                onClick={() => switchMode(mins, 'focus')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                  targetMinutes === mins
                    ? 'border-pilot-deep dark:border-pilot-periwinkle bg-pilot-pale dark:bg-pilot-deep/30 text-pilot-deep dark:text-pilot-electric font-bold shadow-3d-secondary'
                    : 'border-pilot-soft/70 dark:border-slate-800 bg-white dark:bg-[#15171C] text-slate-600 dark:text-slate-300 hover:border-pilot-muted dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-[#202226]'
                }`}
              >
                {mins} Minutes{' '}
                {mins === 25 ? '(Pomodoro)' : mins === 45 ? '(Deep Work)' : '(Intensive)'}
              </button>
            ))}
          </div>
        )}

        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8 flex-wrap">
          <ThreeDButton
            variant="metallic-chrome"
            size="lg"
            onClick={resetTimer}
            leftIcon={<RotateCcw className="w-4 h-4" />}
            disabled={totalElapsed === 0}
          >
            Reset
          </ThreeDButton>
          <ThreeDButton
            variant={isRunning ? 'obsidian' : mode === 'focus' ? 'metallic-deep' : 'electric'}
            size="lg"
            onClick={toggleTimer}
            leftIcon={
              isRunning ? (
                <Pause className="w-5 h-5 text-amber-300" />
              ) : (
                <Play className="w-5 h-5 fill-current" />
              )
            }
          >
            {isRunning ? 'Pause Timer' : totalElapsed > 0 ? 'Resume Timer' : 'Start Focus Session'}
          </ThreeDButton>
          {mode === 'focus' && totalElapsed >= 60 && (
            <ThreeDButton
              variant="metallic-chrome"
              size="lg"
              onClick={() => setShowEarlyConfirm(true)}
              leftIcon={<FastForward className="w-4 h-4 text-pilot-deep" />}
              title="Finish and log time early"
            >
              Complete Early ({completedMinutesSoFar}m)
            </ThreeDButton>
          )}
        </div>

        <div className="w-full max-w-lg border-t border-pilot-soft/50 dark:border-slate-800 pt-5 mt-3">
          <div className="flex items-center justify-between mb-2.5 text-left">
            <div className="flex items-center gap-1.5 text-xs font-bold text-pilot-deep dark:text-pilot-electric uppercase tracking-wider">
              <Headphones className="w-3.5 h-3.5 text-pilot-periwinkle" />
              <span>Lo-Fi Ambient Focus Sounds</span>
            </div>
            {isSoundPlaying && (
              <span className="text-[11px] font-semibold text-pilot-periwinkle flex items-center gap-1 animate-pulse">
                <Volume2 className="w-3 h-3" /> Playing live
              </span>
            )}
          </div>
          <div className="grid grid-cols-4 gap-2">
            {(
              [
                { id: 'rain' as AmbientSoundType, label: 'Rain', icon: CloudRain },
                { id: 'waves' as AmbientSoundType, label: 'Waves', icon: Waves },
                { id: 'lofi-noise' as AmbientSoundType, label: 'Cafe', icon: Coffee },
                { id: 'alpha-wave' as AmbientSoundType, label: 'Alpha', icon: Brain },
              ]
            ).map((sound) => {
              const SoundIcon = sound.icon;
              const isActive = currentSound === sound.id && isSoundPlaying;
              return (
                <button
                  key={sound.id}
                  type="button"
                  onClick={() => toggleSound(sound.id)}
                  className={`py-2 px-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 border transition-all ${
                    isActive
                      ? 'bg-pilot-deep text-white border-pilot-deep shadow-3d-btn active:translate-y-px'
                      : 'bg-pilot-pale/80 hover:bg-pilot-pale dark:bg-[#202226] dark:hover:bg-[#282C34] text-slate-700 dark:text-slate-300 border-pilot-soft/70 dark:border-slate-800 shadow-3d-secondary active:translate-y-px'
                  }`}
                >
                  <SoundIcon className="w-3.5 h-3.5 shrink-0" />
                  <span>{sound.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="w-full max-w-lg border-t border-pilot-soft/50 dark:border-slate-800 pt-5 mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          <Select
            label="Tag Course Subject"
            value={selectedSubjectId}
            onChange={(e) => setSelectedSubjectId(e.target.value)}
          >
            {subjects.map((s) => (
              <option key={s.id} value={s.id}>
                {s.code} · {s.name}
              </option>
            ))}
          </Select>
          <Select
            label="Link Optional Assignment"
            value={selectedTaskId}
            onChange={(e) => setSelectedTaskId(e.target.value)}
          >
            <option value="">None (General Topic)</option>
            {tasks
              .filter((t) => !t.completed && (!selectedSubjectId || t.subjectId === selectedSubjectId))
              .map((t) => (
                <option key={t.id} value={t.id}>
                  {t.title}
                </option>
              ))}
          </Select>
        </div>
      </Tilt3DCard>

      <Modal
        isOpen={showCompletionModal}
        onClose={() => setShowCompletionModal(false)}
        title="Session Completed"
        description="Exceptional focus. You are one step closer to your academic goals."
        maxWidth="sm"
      >
        <div className="text-center space-y-4 py-2">
          <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center shadow-3d-secondary">
            <CircleCheck className="w-8 h-8" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-slate-900">+{lastLoggedMinutes} Minutes Logged</h4>
            <p className="text-xs text-slate-500 mt-1">
              Tagged to {selectedSubject?.name || 'Study Block'}
            </p>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-600 border border-slate-200">
            Take a 5-minute breather to drink water, stretch, and let your brain consolidate learned
            patterns.
          </div>
          <div className="flex gap-2 justify-center pt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setShowCompletionModal(false);
                switchMode(5, 'shortBreak');
              }}
            >
              Take 5m Break
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                setShowCompletionModal(false);
                resetTimer();
              }}
            >
              Done
            </Button>
          </div>
        </div>
      </Modal>

      <ConfirmationModal
        isOpen={showEarlyConfirm}
        onClose={() => setShowEarlyConfirm(false)}
        onConfirm={completeEarly}
        title="Complete Focus Session Early"
        message={`You have completed ${completedMinutesSoFar} minute(s) of focused study. Would you like to log this study block to your profile now?`}
        confirmLabel={`Log ${completedMinutesSoFar} min session`}
        variant="primary"
      />
    </div>
  );
};
