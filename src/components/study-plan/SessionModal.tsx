import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { StudySession } from '../../types';
import { Modal } from '../ui/Modal';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Button } from '../ui/Button';

interface SessionModalProps {
  isOpen: boolean;
  onClose: () => void;
  sessionToEdit?: StudySession | null;
  defaultDate?: string;
}

export const SessionModal: React.FC<SessionModalProps> = ({
  isOpen,
  onClose,
  sessionToEdit,
  defaultDate,
}) => {
  const { subjects, tasks, addSession, updateSession } = useApp();

  const [title, setTitle] = useState('');
  const [subjectId, setSubjectId] = useState('');
  const [taskId, setTaskId] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('10:00');
  const [endTime, setEndTime] = useState('11:30');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (sessionToEdit) {
      setTitle(sessionToEdit.title);
      setSubjectId(sessionToEdit.subjectId);
      setTaskId(sessionToEdit.taskId || '');
      setDate(sessionToEdit.date);
      setStartTime(sessionToEdit.startTime);
      setEndTime(sessionToEdit.endTime);
      setNotes(sessionToEdit.notes || '');
    } else {
      setTitle('');
      setSubjectId(subjects[0]?.id || '');
      setTaskId('');
      setDate(defaultDate || new Date().toISOString().split('T')[0]);
      setStartTime('10:00');
      setEndTime('11:30');
      setNotes('');
    }
    setErrors({});
  }, [sessionToEdit, isOpen, defaultDate, subjects]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!title.trim()) newErrors.title = 'Title is required';
    if (!subjectId) newErrors.subjectId = 'Subject is required';
    if (!date) newErrors.date = 'Date is required';

    // Calculate approximate duration in minutes
    const [startH, startM] = startTime.split(':').map(Number);
    const [endH, endM] = endTime.split(':').map(Number);
    const duration = (endH * 60 + endM) - (startH * 60 + startM);

    if (duration <= 0) {
      newErrors.endTime = 'End time must be later than start time';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (sessionToEdit) {
      updateSession({
        ...sessionToEdit,
        title: title.trim(),
        subjectId,
        taskId: taskId || undefined,
        date,
        startTime,
        endTime,
        durationMinutes: duration,
        notes: notes.trim() || undefined,
      });
    } else {
      addSession({
        title: title.trim(),
        subjectId,
        taskId: taskId || undefined,
        date,
        startTime,
        endTime,
        durationMinutes: duration,
        completed: false,
        notes: notes.trim() || undefined,
        isAiGenerated: false,
      });
    }

    onClose();
  };

  const relevantTasks = tasks.filter((t) => !subjectId || t.subjectId === subjectId);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={sessionToEdit ? 'Edit Study Session' : 'Schedule Study Session'}
      description="Plan your focused study blocks and link them with your subjects and tasks."
      maxWidth="md"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Session Title"
          placeholder="e.g. Chapter 4 Practice Problems, Code Lab Prep"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          error={errors.title}
          autoFocus
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Select
            label="Subject"
            value={subjectId}
            onChange={(e) => {
              setSubjectId(e.target.value);
              setTaskId('');
            }}
            error={errors.subjectId}
          >
            {subjects.map((s) => (
              <option key={s.id} value={s.id}>
                {s.code} · {s.name}
              </option>
            ))}
          </Select>

          <Select
            label="Link Optional Task"
            value={taskId}
            onChange={(e) => setTaskId(e.target.value)}
          >
            <option value="">None (General Topic)</option>
            {relevantTasks
              .filter((t) => !t.completed)
              .map((t) => (
                <option key={t.id} value={t.id}>
                  {t.title}
                </option>
              ))}
          </Select>
        </div>

        <Input
          type="date"
          label="Session Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          error={errors.date}
        />

        <div className="grid grid-cols-2 gap-4">
          <Input
            type="time"
            label="Start Time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
          <Input
            type="time"
            label="End Time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            error={errors.endTime}
          />
        </div>

        <div className="space-y-1.5 text-left">
          <label className="block text-xs font-semibold text-slate-700 tracking-wide uppercase">
            Study Notes & Focus Goals (Optional)
          </label>
          <textarea
            rows={2}
            placeholder="Specific topics or problems to solve during this block..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 hover:border-slate-400 transition-colors"
          />
        </div>

        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            {sessionToEdit ? 'Save Session' : 'Add to Schedule'}
          </Button>
        </div>
      </form>
    </Modal>
  );
};
