import React, { useState, useEffect } from 'react';
import { Subject, SubjectDifficulty } from '../../types';
import { Modal } from '../ui/Modal';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Button } from '../ui/Button';

interface SubjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (subject: Omit<Subject, 'id' | 'totalHoursStudied'> | Subject) => Promise<void>;
  subjectToEdit?: Subject | null;
}

const COLOR_PALETTE = [
  { hex: '#3b82f6', bgLight: 'bg-blue-50', textLight: 'text-blue-700', borderColor: 'border-blue-200', label: 'Blue' },
  { hex: '#6366f1', bgLight: 'bg-indigo-50', textLight: 'text-indigo-700', borderColor: 'border-indigo-200', label: 'Indigo' },
  { hex: '#0d9488', bgLight: 'bg-teal-50', textLight: 'text-teal-700', borderColor: 'border-teal-200', label: 'Teal' },
  { hex: '#475569', bgLight: 'bg-slate-100', textLight: 'text-slate-700', borderColor: 'border-slate-300', label: 'Steel' },
  { hex: '#f59e0b', bgLight: 'bg-amber-50', textLight: 'text-amber-700', borderColor: 'border-amber-200', label: 'Amber' },
  { hex: '#ec4899', bgLight: 'bg-pink-50', textLight: 'text-pink-700', borderColor: 'border-pink-200', label: 'Rose' },
  { hex: '#10b981', bgLight: 'bg-emerald-50', textLight: 'text-emerald-700', borderColor: 'border-emerald-200', label: 'Emerald' },
];

export const SubjectModal: React.FC<SubjectModalProps> = ({
  isOpen,
  onClose,
  onSave,
  subjectToEdit,
}) => {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [colorHex, setColorHex] = useState(COLOR_PALETTE[0].hex);
  const [difficulty, setDifficulty] = useState<SubjectDifficulty>('medium');
  const [targetHours, setTargetHours] = useState(15);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (subjectToEdit) {
      setName(subjectToEdit.name);
      setCode(subjectToEdit.code);
      setColorHex(subjectToEdit.color);
      setDifficulty(subjectToEdit.difficulty || 'medium');
      setTargetHours(subjectToEdit.targetHours);
    } else {
      setName('');
      setCode('');
      setColorHex(COLOR_PALETTE[0].hex);
      setDifficulty('medium');
      setTargetHours(15);
    }
    setErrors({});
  }, [subjectToEdit, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Course name is required';
    if (!code.trim()) errs.code = 'Course code is required (e.g. CS 101)';

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    const selectedPalette = COLOR_PALETTE.find((c) => c.hex === colorHex) || COLOR_PALETTE[0];

    setIsSubmitting(true);
    try {
      if (subjectToEdit) {
        await onSave({
          ...subjectToEdit,
          name: name.trim(),
          code: code.trim().toUpperCase(),
          color: selectedPalette.hex,
          bgLight: selectedPalette.bgLight,
          textLight: selectedPalette.textLight,
          borderColor: selectedPalette.borderColor,
          difficulty,
          targetHours: Number(targetHours),
        });
      } else {
        await onSave({
          name: name.trim(),
          code: code.trim().toUpperCase(),
          color: selectedPalette.hex,
          bgLight: selectedPalette.bgLight,
          textLight: selectedPalette.textLight,
          borderColor: selectedPalette.borderColor,
          difficulty,
          targetHours: Number(targetHours),
        });
      }
      onClose();
    } catch (err) {
      console.error('Failed to save subject:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={subjectToEdit ? 'Edit Course Subject' : 'Add New Course Subject'}
      description="Define course details, color tagging, and target study volume."
      maxWidth="md"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Course Code"
          placeholder="e.g. MATH 201, CS 250, CHEM 102"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          error={errors.code}
          autoFocus
        />

        <Input
          label="Course Name"
          placeholder="e.g. Multivariable Calculus, Data Structures"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={errors.name}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Select
            label="Relative Difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value as SubjectDifficulty)}
          >
            <option value="easy">Easy (Low cognitive load)</option>
            <option value="medium">Medium (Moderate workload)</option>
            <option value="hard">Hard (High cognitive effort)</option>
          </Select>

          <Input
            type="number"
            label="Semester Target Hours"
            min="5"
            max="120"
            value={targetHours}
            onChange={(e) => setTargetHours(Number(e.target.value))}
          />
        </div>

        {/* Color Palette Selection */}
        <div className="space-y-1.5 text-left">
          <label className="block text-xs font-semibold text-slate-700 tracking-wide uppercase">
            Subject Color Tag
          </label>
          <div className="flex items-center gap-2.5 pt-1">
            {COLOR_PALETTE.map((pal) => (
              <button
                type="button"
                key={pal.hex}
                onClick={() => setColorHex(pal.hex)}
                className={`w-7 h-7 rounded-lg transition-transform flex items-center justify-center ${
                  colorHex === pal.hex ? 'ring-2 ring-offset-2 ring-indigo-500 scale-110' : 'hover:scale-105'
                }`}
                style={{ backgroundColor: pal.hex }}
                title={pal.label}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
          <Button type="button" variant="outline" onClick={onClose} disabled={isSubmitting}>
            Cancel
          </Button>
          <Button type="submit" variant="primary" isLoading={isSubmitting}>
            {subjectToEdit ? 'Save Changes' : 'Add Course'}
          </Button>
        </div>
      </form>
    </Modal>
  );
};
