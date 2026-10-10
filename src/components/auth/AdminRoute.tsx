import React from 'react';
import { Navigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ShieldAlert, ArrowLeft, Loader2, BookOpen } from 'lucide-react';
import { Button } from '../ui/Button';

export const AdminRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, userProfile, isAdmin, authLoading } = useAuth();
  const location = useLocation();

  if (authLoading) {
    return (
      <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-pilot-pale text-pilot-dark">
        <div className="w-12 h-12 rounded-xl bg-pilot-deep flex items-center justify-center text-white shadow-md mb-4 animate-pulse">
          <BookOpen className="w-6 h-6" />
        </div>
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
          <Loader2 className="w-4 h-4 animate-spin text-pilot-deep" />
          <span>Verifying administrator privileges...</span>
        </div>
      </div>
    );
  }

  // If user is completely unauthenticated, redirect to login
  const isAuthenticated = Boolean(user || userProfile);
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If user is logged in but lacks administrative authorization
  if (!isAdmin) {
    return (
      <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-pilot-pale p-4 text-center">
        <div className="max-w-md w-full bg-white rounded-2xl p-8 border border-pilot-soft shadow-elevated space-y-4">
          <div className="w-14 h-14 mx-auto rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600">
            <ShieldAlert className="w-7 h-7" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Restricted Administrator Area</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Your current account does not have administrator privileges. Only provisioned system administrators can access this portal.
          </p>
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-left text-xs space-y-1 text-slate-600">
            <p className="font-semibold text-slate-800">Admin Setup Requirement:</p>
            <p>To provision the first admin account, run:</p>
            <code className="block bg-slate-100 p-1.5 rounded font-mono text-[11px] text-slate-800 overflow-x-auto">
              ADMIN_BOOTSTRAP_SECRET=&lt;secret&gt; npx tsx scripts/bootstrapAdmin.ts
            </code>
          </div>
          <div className="pt-2">
            <Link to="/dashboard">
              <Button variant="primary" size="md" className="w-full" leftIcon={<ArrowLeft className="w-4 h-4" />}>
                Return to Student Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
