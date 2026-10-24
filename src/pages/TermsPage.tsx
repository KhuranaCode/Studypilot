import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileCheck, UserCheck, Award, ShieldAlert, TriangleAlert } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ThemeToggle } from '../components/ui/ThemeToggle';
import { useTheme } from '../context/ThemeContext';

export const TermsPage: React.FC = () => {
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
            <Link to="/privacy">
              <Button variant="outline" size="sm">
                Privacy Policy
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
              <FileCheck className="w-6 h-6 text-pilot-deep dark:text-[#7AA7FF]" />
            </div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider">
              TERMS AND CONDITIONS OF USE
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Terms of Service</h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 font-mono">
            Effective Date: October 10, 2026 | Version 2.4
          </p>
        </div>

        {/* Terms Content Sections */}
        <div
          className={`p-8 sm:p-10 rounded-2xl border space-y-8 leading-relaxed text-sm ${
            isDark
              ? 'bg-[#18191D] border-[#545B66]/40 text-[#BFC3C9]'
              : 'bg-white border-pilot-soft/80 text-slate-700 shadow-card'
          }`}
        >
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-[#F2F3F5] flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-pilot-deep dark:text-[#7AA7FF]" />
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or creating an account on StudyPilot, you agree to comply with and be
              bound by these Terms of Service and all applicable educational and data privacy laws.
              If you do not agree with any portion of these terms, please discontinue use of the
              platform.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-[#F2F3F5] flex items-center gap-2">
              <Award className="w-5 h-5 text-pilot-deep dark:text-[#7AA7FF]" />
              2. Academic Integrity &amp; Responsible Use
            </h2>
            <p>
              StudyPilot is an organizational time-management and productivity tool designed to help
              students plan study blocks, track deadlines, and maintain focus. Users agree that:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                You will adhere to your educational institution's academic honor code and student
                conduct guidelines.
              </li>
              <li>
                You will not use the service to circumvent institutional deadlines, misrepresent
                focus records, or upload unauthorized exam materials.
              </li>
              <li>
                You are solely responsible for maintaining the confidentiality of your account
                credentials and password.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-[#F2F3F5] flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-pilot-deep dark:text-[#7AA7FF]" />
              3. Prohibited Activities
            </h2>
            <p>Users may not:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Attempt to bypass rate limits, access control lists, or administrative endpoints.</li>
              <li>
                Inject malicious payloads, scripts, or automated scraping scripts into course forms
                or task fields.
              </li>
              <li>
                Reverse engineer, disassemble, or interfere with the infrastructure or database of
                StudyPilot.
              </li>
              <li>Impersonate administrators, instructors, or fellow students.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-[#F2F3F5] flex items-center gap-2">
              <TriangleAlert className="w-5 h-5 text-pilot-deep dark:text-[#7AA7FF]" />
              4. Disclaimer of Warranties &amp; Availability
            </h2>
            <p>
              StudyPilot provides schedule generation and time tracking tools on an "as is" and "as
              available" basis. While we strive for maximum uptime and precision scheduling,
              students remain responsible for verifying their official university syllabus
              deadlines, exam dates, and course submission requirements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-[#F2F3F5]">
              5. Account Termination
            </h2>
            <p>
              We reserve the right to suspend or terminate accounts that violate these terms, engage
              in unauthorized administrative access attempts, or abuse API rate limits.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h2 className="text-base font-bold text-slate-900 dark:text-[#F2F3F5]">
              Questions &amp; Inquiries
            </h2>
            <p>
              For legal inquiries regarding these Terms of Service, contact the StudyPilot legal
              team at{' '}
              <span className="font-mono text-pilot-deep dark:text-[#7AA7FF]">
                legal@studypilot.edu
              </span>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
