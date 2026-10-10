import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { X, ShieldAlert } from 'lucide-react';

export const FirebaseConfigBanner: React.FC = () => {
  const { isFirebaseReady, missingConfigKeys } = useAuth();
  const [dismissed, setDismissed] = useState(false);

  if (isFirebaseReady || dismissed) return null;

  return (
    <div className="bg-amber-50 border-b border-amber-200 text-amber-900 px-4 py-2.5 text-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            <strong>Firebase Setup Mode:</strong> Cloud database requires credentials in <code className="bg-amber-100 px-1 py-0.5 rounded font-mono">.env</code> (missing: {missingConfigKeys.join(', ')}). The application is currently running in local storage preview mode with full interactive capability.
          </span>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="text-amber-500 hover:text-amber-700 p-0.5 rounded"
          aria-label="Dismiss banner"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
