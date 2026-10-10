/**
 * StudyPilot Environment Validation & Configuration Hardening
 */

export interface EnvValidationResult {
  isValid: boolean;
  isProduction: boolean;
  missingClientKeys: string[];
  warnings: string[];
}

export function validateEnvironment(): EnvValidationResult {
  const isProduction = typeof process !== 'undefined'
    ? process.env.NODE_ENV === 'production'
    : Boolean(import.meta.env?.PROD);

  let missingClientKeys: string[] = [];
  const warnings: string[] = [];

  // Check client-side Firebase environment keys
  const apiKey = typeof import.meta !== 'undefined' ? import.meta.env?.VITE_FIREBASE_API_KEY : undefined;
  const projectId = typeof import.meta !== 'undefined' ? import.meta.env?.VITE_FIREBASE_PROJECT_ID : undefined;
  const authDomain = typeof import.meta !== 'undefined' ? import.meta.env?.VITE_FIREBASE_AUTH_DOMAIN : undefined;
  const appId = typeof import.meta !== 'undefined' ? import.meta.env?.VITE_FIREBASE_APP_ID : undefined;

  const requiredClient = [
    { key: 'VITE_FIREBASE_API_KEY', val: apiKey },
    { key: 'VITE_FIREBASE_PROJECT_ID', val: projectId },
    { key: 'VITE_FIREBASE_AUTH_DOMAIN', val: authDomain },
    { key: 'VITE_FIREBASE_APP_ID', val: appId },
  ];

  missingClientKeys = requiredClient
    .filter((item) => !item.val || item.val.includes('your_') || item.val.includes('here'))
    .map((item) => item.key);

  // Security checks: ensure server keys are NEVER exposed to client bundle
  if (typeof import.meta !== 'undefined' && import.meta.env) {
    if ((import.meta.env as any).GEMINI_API_KEY || (import.meta.env as any).VITE_GEMINI_API_KEY) {
      warnings.push('CRITICAL: Gemini AI secret key detected in client environment. Move to server-side only.');
    }
    if ((import.meta.env as any).ADMIN_BOOTSTRAP_SECRET || (import.meta.env as any).VITE_ADMIN_BOOTSTRAP_SECRET) {
      warnings.push('CRITICAL: Admin bootstrap secret detected in client environment. Move to server-side only.');
    }
  }

  // Server-side check if running under Node.js
  if (typeof process !== 'undefined' && process.env) {
    const adminSecret = process.env.ADMIN_BOOTSTRAP_SECRET;
    if (isProduction && adminSecret === 'studypilot_admin_secure_secret_2026') {
      warnings.push('SECURITY WARNING: Production is using the default ADMIN_BOOTSTRAP_SECRET. Change to a strong random token.');
    }
  }

  return {
    isValid: missingClientKeys.length === 0,
    isProduction,
    missingClientKeys,
    warnings,
  };
}
