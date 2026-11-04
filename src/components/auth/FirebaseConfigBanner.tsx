import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { X, ShieldAlert } from 'lucide-react';

export const FirebaseConfigBanner: React.FC = () => {
  const { isFirebaseReady } = useAuth();
  const [dismissed, setDismissed] = useState(false);

  if (isFirebaseReady || dismissed) return null;

  return (
    <div className="bg-amber-50 border-b border-amber-200 text-amber-900 px-4 py-2.5 text-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            <strong>Preview Mode:</strong> Cloud sync is not connected in this demo build, so your data stays in this browser.
          </span>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="text-amber-500 hover:text-amber-700 p-0.5 rounded-sm"
          aria-label="Dismiss banner"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
