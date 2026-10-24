import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowLeft, Lock, FileText, EyeOff, Server, Database } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ThemeToggle } from '../components/ui/ThemeToggle';
import { useTheme } from '../context/ThemeContext';

export const PrivacyPage: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-200 py-12 px-4 sm:px-6 lg:px-8 ${
        isDark ? 'bg-[#101114] text-[#F2F3F5]' : 'bg-[#EDE8F5] text-[#1B2447]'
      }`}
    >
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-pilot-soft/60 dark:border-slate-800">
          <Link to="/">
            <Button variant="ghost" size="sm" leftIcon={<ArrowLeft className="w-4 h-4" />}>
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <ThemeToggle showLabel={false} />
            <Link to="/terms">
              <Button variant="outline" size="sm">
                Terms of Service
              </Button>
            </Link>
          </div>
        </div>

        {/* Title Section */}
        <div
          className={`p-8 sm:p-10 rounded-2xl border ${
            isDark
              ? 'bg-[#18191D] border-[#545B66]/40 shadow-[0_8px_24px_rgba(0,0,0,0.5)]'
              : 'bg-white border-pilot-soft/80 shadow-card'
          }`}
        >
          <div className="flex items-center gap-3 text-pilot-deep dark:text-[#7AA7FF] mb-3">
            <div className="w-10 h-10 rounded-xl bg-pilot-deep/10 dark:bg-[#7AA7FF]/10 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-pilot-deep dark:text-[#7AA7FF]" />
            </div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider">
              STUDYPILOT LEGAL COMPLIANCE
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Privacy Policy</h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 font-mono">
            Effective Date: October 10, 2026 | Version 2.4
          </p>
        </div>

        {/* Policy Content Sections */}
        <div
          className={`p-8 sm:p-10 rounded-2xl border space-y-8 leading-relaxed text-sm ${
            isDark
              ? 'bg-[#18191D] border-[#545B66]/40 text-[#BFC3C9]'
              : 'bg-white border-pilot-soft/80 text-slate-700 shadow-card'
          }`}
        >
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-[#F2F3F5] flex items-center gap-2">
              <Lock className="w-5 h-5 text-pilot-deep dark:text-[#7AA7FF]" />
              1. Our Core Commitment to Student Privacy
            </h2>
            <p>
              StudyPilot is built to help students manage academic coursework with confidence. We do not sell, rent, monetize, or broker personal student information to advertisers, third-party marketing brokers, or external entities. Your academic workload, study habits, notes, and exam schedules stay on your device in this demo.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-[#F2F3F5] flex items-center gap-2">
              <Database className="w-5 h-5 text-pilot-deep dark:text-[#7AA7FF]" />
              2. Information We Collect
            </h2>
            <p>
              We collect only the minimum data required to deliver study planning, focus timing, and progress analytics:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong>Account Credentials:</strong> in this demo, sign-in creates a local sandbox profile stored in your browser; no Firebase Authentication is configured.
              </li>
              <li>
                <strong>Academic Data:</strong> Enrolled courses (subject names, codes, color labels), assignment titles, due dates, estimated completion times, and user-defined study goals.
              </li>
              <li>
                <strong>Focus Sessions:</strong> Timestamps of study intervals, session duration, associated course tags, and reflection notes recorded during timer operation.
              </li>
              <li>
                <strong>Technical Diagnostics:</strong> none are collected in this demo.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-[#F2F3F5] flex items-center gap-2">
              <Server className="w-5 h-5 text-pilot-deep dark:text-[#7AA7FF]" />
              3. Processing of Schedule Information
            </h2>
            <p>
              When you generate an automated study schedule in this demo, your course titles and upcoming deadlines are processed entirely in your browser by a deterministic scheduling algorithm. No schedule data is transmitted to StudyPilot servers or third parties, and no server-side processing or machine-learning training takes place.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-[#F2F3F5] flex items-center gap-2">
              <EyeOff className="w-5 h-5 text-pilot-deep dark:text-[#7AA7FF]" />
              4. Data Protection & Security Controls
            </h2>
            <p>
              In this demo, all data you enter is stored locally in your browser and is not
              transmitted to any server:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>No analytics or tracking integrations are configured in this demo.</li>
              <li>None of the data you enter leaves your device; clearing your browser storage removes your local data.</li>
              <li>The page loads font files from Google Fonts; those requests carry no user data.</li>
            </ul>
            <p>
              The repository also defines Firestore security rules, which would apply only if a
              Firebase backend is connected and those rules are deployed, plus server-side controls
              (rate limiting, hardened response headers) that would additionally require a separate
              server deployment. None of these are active in this static demo.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-[#F2F3F5] flex items-center gap-2">
              <FileText className="w-5 h-5 text-pilot-deep dark:text-[#7AA7FF]" />
              5. Your Rights: Export and Deletion
            </h2>
            <p>
              You maintain complete ownership of your academic records. You may update your profile preferences, remove course records, or request complete deletion of your account and all associated data at any time from your account settings.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h2 className="text-base font-bold text-slate-900 dark:text-[#F2F3F5]">Contact Information</h2>
            <p>
              StudyPilot is a personal prototype project. Privacy inquiries or deletion requests
              can be raised through the project's public repository.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
