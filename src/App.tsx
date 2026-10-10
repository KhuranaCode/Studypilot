import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { AppProvider } from './context/AppContext';
import { ThemeProvider } from './context/ThemeContext';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { PublicRoute } from './components/auth/PublicRoute';
import { AdminRoute } from './components/auth/AdminRoute';
import { AppLayout } from './components/layout/AppLayout';
import { BookOpen, Loader2 } from 'lucide-react';

// Code-split pages for performance optimization
const LandingPage = lazy(() => import('./pages/LandingPage').then((m) => ({ default: m.LandingPage })));
const LoginPage = lazy(() => import('./pages/LoginPage').then((m) => ({ default: m.LoginPage })));
const SignupPage = lazy(() => import('./pages/SignupPage').then((m) => ({ default: m.SignupPage })));
const DashboardPage = lazy(() => import('./pages/DashboardPage').then((m) => ({ default: m.DashboardPage })));
const StudyPlanPage = lazy(() => import('./pages/StudyPlanPage').then((m) => ({ default: m.StudyPlanPage })));
const TasksPage = lazy(() => import('./pages/TasksPage').then((m) => ({ default: m.TasksPage })));
const FocusTimerPage = lazy(() => import('./pages/FocusTimerPage').then((m) => ({ default: m.FocusTimerPage })));
const ProgressPage = lazy(() => import('./pages/ProgressPage').then((m) => ({ default: m.ProgressPage })));
const SettingsPage = lazy(() => import('./pages/SettingsPage').then((m) => ({ default: m.SettingsPage })));
const AdminPage = lazy(() => import('./pages/AdminPage').then((m) => ({ default: m.AdminPage })));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage').then((m) => ({ default: m.PrivacyPage })));
const TermsPage = lazy(() => import('./pages/TermsPage').then((m) => ({ default: m.TermsPage })));

const PageLoadingFallback = () => (
  <div className="min-h-screen w-full flex flex-col items-center justify-center bg-pilot-pale text-pilot-dark">
    <div className="w-12 h-12 rounded-xl bg-pilot-deep flex items-center justify-center text-white shadow-md shadow-pilot-deep/20 mb-3 animate-pulse">
      <BookOpen className="w-6 h-6" />
    </div>
    <div className="flex items-center gap-2 text-xs font-semibold text-pilot-deep">
      <Loader2 className="w-4 h-4 animate-spin text-pilot-deep" />
      <span>Loading StudyPilot workspace...</span>
    </div>
  </div>
);

export function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppProvider>
          <BrowserRouter>
            <Suspense fallback={<PageLoadingFallback />}>
              <Routes>
                {/* Public Marketing Route */}
                <Route path="/" element={<LandingPage />} />

                {/* Public Legal Compliance Routes */}
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />

                {/* Public Auth Routes (Redirects to dashboard if already authenticated) */}
                <Route
                  path="/login"
                  element={
                    <PublicRoute>
                      <LoginPage />
                    </PublicRoute>
                  }
                />
                <Route
                  path="/signup"
                  element={
                    <PublicRoute>
                      <SignupPage />
                    </PublicRoute>
                  }
                />

                {/* Dedicated Admin Route */}
                <Route
                  path="/admin"
                  element={
                    <AdminRoute>
                      <AdminPage />
                    </AdminRoute>
                  }
                />

                {/* Protected Application Workspace Routes */}
                <Route
                  element={
                    <ProtectedRoute>
                      <AppLayout />
                    </ProtectedRoute>
                  }
                >
                  <Route path="/dashboard" element={<DashboardPage />} />
                  <Route path="/study-plan" element={<StudyPlanPage />} />
                  <Route path="/tasks" element={<TasksPage />} />
                  <Route path="/focus" element={<FocusTimerPage />} />
                  <Route path="/focus-timer" element={<Navigate to="/focus" replace />} />
                  <Route path="/progress" element={<ProgressPage />} />
                  <Route path="/settings" element={<SettingsPage />} />
                </Route>

                {/* Fallback */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </AppProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
