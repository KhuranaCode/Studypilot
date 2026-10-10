import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { BookOpen, Loader2 } from 'lucide-react';

export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, userProfile, authLoading } = useAuth();
  const location = useLocation();

  if (authLoading) {
    return (
      <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-pilot-pale text-slate-800">
        <div className="w-12 h-12 rounded-xl bg-[#3D52A0] flex items-center justify-center text-white shadow-md mb-4 animate-pulse">
          <BookOpen className="w-6 h-6" />
        </div>
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
          <Loader2 className="w-4 h-4 animate-spin text-[#3D52A0]" />
          <span>Verifying StudyPilot session...</span>
        </div>
      </div>
    );
  }

  // Ensure user is authenticated in both live Firebase and sandbox mode
  const isAuthenticated = Boolean(user || userProfile);
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};
