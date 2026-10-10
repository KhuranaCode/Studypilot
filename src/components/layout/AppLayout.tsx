import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { MobileNav } from './MobileNav';
import { TaskModal } from '../tasks/TaskModal';
import { GeneratePlanModal } from '../study-plan/GeneratePlanModal';
import { CommandPalette } from './CommandPalette';
import { ToastContainer } from '../ui/Toast';
import { FirebaseConfigBanner } from '../auth/FirebaseConfigBanner';
import { OnboardingModal } from '../auth/OnboardingModal';
import { ThreeDSceneCanvas } from '../3d/ThreeDSceneCanvas';

export const AppLayout: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  // Global Ctrl+K / Cmd+K Command Palette shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-pilot-pale dark:bg-[#101114] text-slate-900 dark:text-[#F2F3F5] font-sans relative transition-colors">
      {/* Real-Time Ambient 3D Spatial Canvas for Entire App Workspace */}
      <ThreeDSceneCanvas
        className="fixed inset-0 pointer-events-none z-0 opacity-25"
        intensity="subtle"
        particleCount={110}
      />

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex h-full relative z-10">
        <Sidebar />
      </div>

      {/* Mobile Drawer */}
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 h-full min-w-0 overflow-hidden relative z-10">
        <FirebaseConfigBanner />
        <Header
          onOpenMobileNav={() => setMobileNavOpen(true)}
          onOpenTaskModal={() => setIsTaskModalOpen(true)}
          onOpenPlanModal={() => setIsPlanModalOpen(true)}
          onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        />

        <main className="flex-1 overflow-y-auto px-4 py-6 sm:px-8 sm:py-8 relative">
          <Outlet />
        </main>
      </div>

      {/* Modals & Toasts */}
      <OnboardingModal />
      <TaskModal isOpen={isTaskModalOpen} onClose={() => setIsTaskModalOpen(false)} />
      <GeneratePlanModal isOpen={isPlanModalOpen} onClose={() => setIsPlanModalOpen(false)} />
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenTaskModal={() => setIsTaskModalOpen(true)}
      />
      <ToastContainer />
    </div>
  );
};
