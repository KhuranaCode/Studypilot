import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Modal } from '../ui/Modal';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Button } from '../ui/Button';
import { Sparkles, Target } from 'lucide-react';

export const OnboardingModal: React.FC = () => {
  const { userProfile, completeOnboarding } = useAuth();
  const [isOpen, setIsOpen] = useState(true);
  const [studyGoal, setStudyGoal] = useState("Dean's List (3.8+ GPA)");
  const [dailyLimitMinutes, setDailyLimitMinutes] = useState(240); // 4 hours
  const [preferredSessionMinutes, setPreferredSessionMinutes] = useState(45);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // If user profile already marked onboarding completed, do not render
  if (!userProfile || userProfile.onboardingCompleted || !isOpen) {
    return null;
  }

  const handleComplete = async (skip: boolean = false) => {
    setIsSubmitting(true);
    try {
      if (skip) {
        await completeOnboarding({});
      } else {
        await completeOnboarding({
          studyGoal: studyGoal.trim(),
          dailyStudyLimitMinutes: Number(dailyLimitMinutes),
          preferredSessionMinutes: Number(preferredSessionMinutes),
        });
      }
      setIsOpen(false);
    } catch (err) {
      console.error('Failed to complete onboarding:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => handleComplete(true)}
      title="Welcome to StudyPilot"
      description="Let's configure your study rhythm so the AI planner can tailor your schedule."
      maxWidth="md"
    >
      <div className="space-y-5">
        <div className="p-3.5 rounded-xl bg-indigo-50 border border-indigo-100 flex items-start gap-3">
          <div className="p-2 rounded-lg bg-indigo-600 text-white shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-semibold text-indigo-950">Personalized Cognitive Baseline</h4>
            <p className="text-xs text-indigo-800/80 mt-0.5 leading-relaxed">
              These initial targets help prevent cognitive overload and balance study distribution. You can adjust them anytime in Settings.
            </p>
          </div>
        </div>

        <Input
          label="Primary Academic Goal"
          value={studyGoal}
          onChange={(e) => setStudyGoal(e.target.value)}
          placeholder="e.g. Ace Fall Semester Finals, MCAT Prep, 3.9 GPA"
          leftIcon={<Target className="w-4 h-4" />}
          helperText="We prioritize study sessions towards this milestone."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Select
            label="Daily Study Target"
            value={dailyLimitMinutes}
            onChange={(e) => setDailyLimitMinutes(Number(e.target.value))}
          >
            <option value="120">2.0 Hours / day (Light)</option>
            <option value="180">3.0 Hours / day (Moderate)</option>
            <option value="240">4.0 Hours / day (Balanced)</option>
            <option value="300">5.0 Hours / day (Intensive)</option>
            <option value="360">6.0 Hours / day (Rigorous)</option>
          </Select>

          <Select
            label="Default Focus Session"
            value={preferredSessionMinutes}
            onChange={(e) => setPreferredSessionMinutes(Number(e.target.value))}
          >
            <option value="25">25 mins (Pomodoro)</option>
            <option value="45">45 mins (Deep Work)</option>
            <option value="60">60 mins (Intensive)</option>
          </Select>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => handleComplete(true)}
            disabled={isSubmitting}
            className="text-xs text-slate-500"
          >
            Skip for now
          </Button>

          <Button
            type="button"
            variant="primary"
            size="md"
            onClick={() => handleComplete(false)}
            isLoading={isSubmitting}
          >
            Save & Continue to Dashboard
          </Button>
        </div>
      </div>
    </Modal>
  );
};
