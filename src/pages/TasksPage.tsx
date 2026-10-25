import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CheckSquare,
  Search,
  Plus,
  Calendar,
  CheckCircle2,
  Trash2,
  Edit3,
  Clock3,
  Timer,
  Eye,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Task } from '../types';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';
import { Badge } from '../components/ui/Badge';
import { SubjectBadge } from '../components/ui/SubjectBadge';
import { TaskModal } from '../components/tasks/TaskModal';
import { TaskDetailModal } from '../components/tasks/TaskDetailModal';
import { ConfirmationModal } from '../components/ui/ConfirmationModal';
import { EmptyState } from '../components/ui/EmptyState';
import { Tilt3DCard } from '../components/3d/Tilt3DCard';
import { ThreeDButton } from '../components/3d/ThreeDButton';
import { getTodayDateString } from '../lib/studyMetrics';

type TaskTab = 'all' | 'today' | 'upcoming' | 'overdue' | 'completed';
type SortOption = 'deadline' | 'priority' | 'duration' | 'title';

export const TasksPage: React.FC = () => {
  const navigate = useNavigate();
  const { tasks, subjects, toggleTask, deleteTask, setActiveFocusSession } = useApp();

  const [activeTab, setActiveTab] = useState<TaskTab>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedPriority, setSelectedPriority] = useState('all');
  const [sortBy, setSortBy] = useState<SortOption>('deadline');

  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);
  const [taskToView, setTaskToView] = useState<Task | null>(null);
  const [taskToDelete, setTaskToDelete] = useState<Task | null>(null);

  const todayStr = getTodayDateString();

  // Filter and sort tasks
  const filteredAndSortedTasks = useMemo(() => {
    const filtered = tasks.filter((task) => {
      // Tab filter
      if (activeTab === 'completed' && !task.completed) return false;
      if (activeTab === 'today') {
        if (task.completed || task.dueDate !== todayStr) return false;
      }
      if (activeTab === 'upcoming') {
        if (task.completed || task.dueDate <= todayStr) return false;
      }
      if (activeTab === 'overdue') {
        if (task.completed || task.dueDate >= todayStr) return false;
      }
      if (activeTab === 'all' && false) return false;

      // Subject filter
      if (selectedSubject !== 'all' && task.subjectId !== selectedSubject) return false;

      // Priority filter
      if (selectedPriority !== 'all' && task.priority !== selectedPriority) return false;

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = task.title.toLowerCase().includes(query);
        const matchesDesc = (task.description || '').toLowerCase().includes(query);
        const subject = subjects.find((s) => s.id === task.subjectId);
        const matchesSubject = subject
          ? subject.name.toLowerCase().includes(query) || subject.code.toLowerCase().includes(query)
          : false;
        if (!matchesTitle && !matchesDesc && !matchesSubject) return false;
      }

      return true;
    });

    // Sorting
    return filtered.sort((a, b) => {
      if (sortBy === 'deadline') {
        return a.dueDate.localeCompare(b.dueDate);
      }
      if (sortBy === 'priority') {
        const priorityWeight = { high: 3, medium: 2, low: 1 };
        return priorityWeight[b.priority] - priorityWeight[a.priority];
      }
      if (sortBy === 'duration') {
        return (b.estimatedMinutes || 0) - (a.estimatedMinutes || 0);
      }
      if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
  }, [tasks, activeTab, selectedSubject, selectedPriority, searchQuery, sortBy, todayStr, subjects]);

  const handleOpenAddModal = () => {
    setTaskToEdit(null);
    setIsTaskModalOpen(true);
  };

  const handleOpenEditModal = (task: Task) => {
    setTaskToEdit(task);
    setIsTaskModalOpen(true);
  };

  const handleStartFocus = (subjectId: string, taskId: string) => {
    setActiveFocusSession({ subjectId, taskId });
    navigate('/focus');
  };

  const handleDeleteConfirm = () => {
    if (taskToDelete) {
      deleteTask(taskToDelete.id);
      setTaskToDelete(null);
    }
  };

  const getDueStatus = (task: Task) => {
    if (task.completed) return { label: 'Completed', variant: 'success' as const };
    if (task.dueDate < todayStr) return { label: 'Overdue', variant: 'danger' as const };
    if (task.dueDate === todayStr) return { label: 'Due Today', variant: 'warning' as const };
    return { label: `Due ${task.dueDate}`, variant: 'neutral' as const };
  };

  const tabCounts = {
    all: tasks.length,
    today: tasks.filter((t) => !t.completed && t.dueDate === todayStr).length,
    upcoming: tasks.filter((t) => !t.completed && t.dueDate > todayStr).length,
    overdue: tasks.filter((t) => !t.completed && t.dueDate < todayStr).length,
    completed: tasks.filter((t) => t.completed).length,
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Top Controls & Search Bar */}
      <Tilt3DCard
        maxTilt={3}
        className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-[#1A1D24] p-5 rounded-2xl border border-pilot-soft/80 dark:border-slate-800 shadow-[0_3px_0_0_#ADBBDA,0_6px_16px_rgba(61,82,160,0.06)] dark:shadow-none"
      >
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-linear-to-br from-[#4A62B6] to-[#27356B] text-white shadow-3d-btn border-t border-white/30">
            <CheckSquare className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Task & Assignment Tracker</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Organize coursework, prioritize exam prep, and estimate focus hours.
            </p>
          </div>
        </div>

        <ThreeDButton
          variant="metallic-deep"
          size="md"
          onClick={handleOpenAddModal}
          leftIcon={<Plus className="w-4 h-4" />}
        >
          Add Task
        </ThreeDButton>
      </Tilt3DCard>

      {/* Tabs and Filters Bar */}
      <Tilt3DCard maxTilt={2} className="p-4 space-y-4 bg-white dark:bg-[#1A1D24] rounded-2xl border border-pilot-soft/80 dark:border-slate-800 shadow-card">
        {/* Navigation Tabs */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 flex-wrap gap-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            {(
              [
                { id: 'all', label: 'All Tasks' },
                { id: 'today', label: 'Due Today' },
                { id: 'upcoming', label: 'Upcoming' },
                { id: 'overdue', label: 'Overdue' },
                { id: 'completed', label: 'Completed' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  activeTab === tab.id
                    ? 'bg-pilot-pale dark:bg-pilot-deep/30 text-pilot-deep dark:text-pilot-electric shadow-[0_2px_0_0_#ADBBDA] dark:shadow-none border border-pilot-soft dark:border-slate-700'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-md ${
                    activeTab === tab.id
                      ? 'bg-pilot-soft/60 dark:bg-pilot-deep/50 text-pilot-deep dark:text-white font-bold'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                  }`}
                >
                  {tabCounts[tab.id]}
                </span>
              </button>
            ))}
          </div>

          <span className="text-xs text-slate-400 dark:text-slate-500 font-medium font-mono">
            Showing {filteredAndSortedTasks.length} of {tasks.length} tasks
          </span>
        </div>

        {/* Filter & Sort Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <Input
            placeholder="Search tasks, descriptions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            leftIcon={<Search className="w-4 h-4" />}
          />

          <Select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
          >
            <option value="all">All Subjects & Courses</option>
            {subjects.map((s) => (
              <option key={s.id} value={s.id}>
                {s.code} · {s.name}
              </option>
            ))}
          </Select>

          <Select
            value={selectedPriority}
            onChange={(e) => setSelectedPriority(e.target.value)}
          >
            <option value="all">All Priority Levels</option>
            <option value="high">High Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="low">Low Priority</option>
          </Select>

          <Select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
          >
            <option value="deadline">Sort by Deadline</option>
            <option value="priority">Sort by Priority (High to Low)</option>
            <option value="duration">Sort by Estimated Time</option>
            <option value="title">Sort by Title</option>
          </Select>
        </div>
      </Tilt3DCard>

      {/* Task List Grid */}
      {filteredAndSortedTasks.length === 0 ? (
        <EmptyState
          icon={<CheckSquare className="w-6 h-6 text-pilot-deep" />}
          title="No tasks found matching your filter"
          description="Clear search queries or click 'Add Task' to schedule assignments and upcoming milestones."
          actionLabel="Create New Task"
          onAction={handleOpenAddModal}
        />
      ) : (
        <div className="space-y-3">
          {filteredAndSortedTasks.map((task) => {
            const status = getDueStatus(task);
            return (
              <Tilt3DCard
                key={task.id}
                maxTilt={3}
                className={`p-4 transition-all rounded-2xl border border-pilot-soft/80 dark:border-slate-800 shadow-card ${
                  task.completed ? 'bg-slate-50/70 dark:bg-[#15171C]/60 border-slate-200 dark:border-slate-800 opacity-80' : 'bg-white dark:bg-[#1A1D24]'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-start gap-3.5">
                    {/* Completion Checkbox */}
                    <button
                      onClick={() => toggleTask(task.id)}
                      className={`mt-1 p-1 rounded-md transition-colors ${
                        task.completed
                          ? 'text-emerald-600 hover:text-emerald-700'
                          : 'text-slate-300 dark:text-slate-600 hover:text-pilot-deep'
                      }`}
                      aria-label={task.completed ? 'Reopen task' : 'Complete task'}
                      title={task.completed ? 'Reopen task' : 'Complete task'}
                    >
                      <CheckCircle2
                        className={`w-5 h-5 ${task.completed ? 'fill-emerald-100 dark:fill-emerald-900/40' : ''}`}
                      />
                    </button>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <button
                          onClick={() => setTaskToView(task)}
                          className={`text-sm font-semibold transition-colors text-left ${
                            task.completed
                              ? 'line-through text-slate-400'
                              : 'text-slate-900 dark:text-white hover:text-pilot-deep dark:hover:text-pilot-electric'
                          }`}
                        >
                          {task.title}
                        </button>
                        <SubjectBadge subjectId={task.subjectId} showCodeOnly />
                        {task.isExam && (
                          <Badge variant="danger" size="sm">
                            Exam / Midterm
                          </Badge>
                        )}
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
                      </div>

                      {task.description && (
                        <p className="text-xs text-slate-500 leading-relaxed max-w-2xl line-clamp-2">
                          {task.description}
                        </p>
                      )}

                      <div className="flex items-center gap-4 text-xs text-slate-400 pt-1">
                        <span className="flex items-center gap-1">
                          <Clock3 className="w-3.5 h-3.5" />
                          Est. {task.estimatedMinutes} mins
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {task.dueDate}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions & Status Badge */}
                  <div className="flex items-center justify-between sm:justify-end gap-3 self-end sm:self-center border-t sm:border-t-0 pt-2 sm:pt-0 w-full sm:w-auto">
                    <Badge variant={status.variant} size="md">
                      {status.label}
                    </Badge>

                    <div className="flex items-center gap-1">
                      {!task.completed && (
                        <ThreeDButton
                          variant="metallic-chrome"
                          size="sm"
                          onClick={() => handleStartFocus(task.subjectId, task.id)}
                          className="h-8 text-xs px-2.5"
                          leftIcon={<Timer className="w-3.5 h-3.5 text-pilot-deep" />}
                          title="Start focus timer on this assignment"
                        >
                          Focus
                        </ThreeDButton>
                      )}

                      <button
                        onClick={() => setTaskToView(task)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-pilot-deep hover:bg-slate-100 transition-colors"
                        title="View details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => handleOpenEditModal(task)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-pilot-deep hover:bg-slate-100 transition-colors"
                        title="Edit task"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => setTaskToDelete(task)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                        title="Delete task"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </Tilt3DCard>
            );
          })}
        </div>
      )}

      {/* Task Edit/Create Modal */}
      <TaskModal
        isOpen={isTaskModalOpen}
        onClose={() => setIsTaskModalOpen(false)}
        taskToEdit={taskToEdit}
      />

      {/* Task Details Modal */}
      <TaskDetailModal
        isOpen={!!taskToView}
        onClose={() => setTaskToView(null)}
        task={taskToView}
        onEdit={(task) => handleOpenEditModal(task)}
        onDelete={(id) => {
          const t = tasks.find((item) => item.id === id);
          if (t) setTaskToDelete(t);
        }}
        onToggleComplete={(id) => toggleTask(id)}
        onStartFocus={(subId, tId) => handleStartFocus(subId, tId)}
      />

      {/* Task Delete Confirmation Modal */}
      <ConfirmationModal
        isOpen={!!taskToDelete}
        onClose={() => setTaskToDelete(null)}
        onConfirm={handleDeleteConfirm}
        title="Delete Task"
        message={
          taskToDelete
            ? `Are you sure you want to delete "${taskToDelete.title}"? Any scheduled study calendar blocks linked to this assignment will remain scheduled as general study sessions.`
            : 'Are you sure you want to delete this task?'
        }
        confirmLabel="Delete Task"
        variant="danger"
      />
    </div>
  );
};
