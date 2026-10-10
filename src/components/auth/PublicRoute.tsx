import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, userProfile, authLoading } = useAuth();

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="w-8 h-8 rounded-lg border-2 border-pilot-deep border-t-transparent animate-spin" />
      </div>
    );
  }

  // If user is already authenticated, redirect to dashboard
  if (user || userProfile) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};
