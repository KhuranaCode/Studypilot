import React from 'react';
import { Task } from '../../types';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { SubjectBadge } from '../ui/SubjectBadge';
import {
  Calendar,
  Clock3,
  Edit3,
  Trash2,
  CheckCircle2,
  Timer,
  BookOpen,
} from 'lucide-react';

interface TaskDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  task: Task | null;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  onToggleComplete: (id: string) => void;
  onStartFocus: (subjectId: string, taskId: string) => void;
}

export const TaskDetailModal: React.FC<TaskDetailModalProps> = ({
  isOpen,
  onClose,
  task,
  onEdit,
  onDelete,
  onToggleComplete,
  onStartFocus,
}) => {
  if (!task) return null;

  const todayStr = new Date().toISOString().split('T')[0];
  const isOverdue = !task.completed && task.dueDate < todayStr;
  const isDueToday = !task.completed && task.dueDate === todayStr;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={task.title}
      description="Task and assignment details"
      maxWidth="md"
    >
      <div className="space-y-5 pt-1">
        {/* Badges & Meta info */}
        <div className="flex flex-wrap items-center gap-2">
          <SubjectBadge subjectId={task.subjectId} />

          <Badge
            variant={
              task.priority === 'high'
                ? 'danger'
                : task.priority === 'medium'
                ? 'warning'
                : 'neutral'
            }
            size="sm"
          >
            {task.priority} priority
          </Badge>

          {task.isExam && (
            <Badge variant="danger" size="sm">
              Exam / Midterm
            </Badge>
          )}

          {task.completed ? (
            <Badge variant="success" size="sm">
              Completed
            </Badge>
          ) : isOverdue ? (
            <Badge variant="danger" size="sm">
              Overdue ({task.dueDate})
            </Badge>
          ) : isDueToday ? (
            <Badge variant="warning" size="sm">
              Due Today
            </Badge>
          ) : (
            <Badge variant="neutral" size="sm">
              Due {task.dueDate}
            </Badge>
          )}
        </div>

        {/* Description / Instructions */}
        <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 text-xs text-slate-700 space-y-1">
          <div className="flex items-center gap-1.5 font-bold text-slate-800 uppercase tracking-wide text-[10px]">
            <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
            <span>Description & Notes</span>
          </div>
          <p className="leading-relaxed whitespace-pre-wrap">
            {task.description || 'No detailed instructions added for this task.'}
          </p>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-2.5">
            <Calendar className="w-4 h-4 text-slate-400" />
            <div>
              <span className="text-[10px] text-slate-400 block uppercase font-semibold">
                Due Date
              </span>
              <span className="font-bold text-slate-800">{task.dueDate}</span>
            </div>
          </div>

          <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-2.5">
            <Clock3 className="w-4 h-4 text-slate-400" />
            <div>
              <span className="text-[10px] text-slate-400 block uppercase font-semibold">
                Estimated Duration
              </span>
              <span className="font-bold text-slate-800">
                {task.estimatedMinutes} Minutes
              </span>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                onClose();
                onEdit(task);
              }}
              leftIcon={<Edit3 className="w-3.5 h-3.5 text-slate-500" />}
            >
              Edit
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                onClose();
                onDelete(task.id);
              }}
              leftIcon={<Trash2 className="w-3.5 h-3.5 text-rose-500" />}
              className="text-rose-600 hover:bg-rose-50"
            >
              Delete
            </Button>
          </div>

          <div className="flex items-center gap-2">
            {!task.completed && (
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  onClose();
                  onStartFocus(task.subjectId, task.id);
                }}
                leftIcon={<Timer className="w-3.5 h-3.5 text-indigo-600" />}
              >
                Focus Now
              </Button>
            )}

            <Button
              variant={task.completed ? 'outline' : 'primary'}
              size="sm"
              onClick={() => {
                onToggleComplete(task.id);
                onClose();
              }}
              leftIcon={<CheckCircle2 className="w-3.5 h-3.5" />}
            >
              {task.completed ? 'Reopen Task' : 'Mark Completed'}
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
