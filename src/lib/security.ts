/**
 * StudyPilot Security & Defense Utilities
 * Provides input sanitization, XSS mitigation, secure password hashing,
 * and request validation.
 */

/**
 * Strips dangerous HTML tags, script elements, iframe/object tags,
 * event handlers, and javascript: protocols from user input.
 */
export function sanitizeText(input: unknown, maxLength = 1000): string {
  if (typeof input !== 'string') {
    return '';
  }

  let sanitized = input
    // Remove null bytes
    .replace(/\0/g, '')
    // Remove script tags and contents
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    // Remove iframe/object/embed/style tags and contents
    .replace(/<(?:iframe|object|embed|style|svg)\b[^<]*(?:(?!<\/(?:iframe|object|embed|style|svg)>)<[^<]*)*<\/(?:iframe|object|embed|style|svg)>/gi, '')
    // Remove inline event handlers (e.g. onerror=, onload=, onclick=)
    .replace(/on\w+\s*=\s*(?:["'][^"']*["']|[^\s>]+)/gi, '')
    // Remove javascript: and data: URLs
    .replace(/(?:javascript|data|vbscript):[^\s"'>]+/gi, '')
    // Strip all remaining HTML tags
    .replace(/<[^>]*>/g, '')
    .trim();

  if (sanitized.length > maxLength) {
    sanitized = sanitized.substring(0, maxLength);
  }

  return sanitized;
}

/**
 * Escapes characters for safe rendering in HTML contexts
 */
export function escapeHtml(input: string): string {
  if (!input) return '';
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Validates and normalizes email addresses
 */
export function sanitizeEmail(email: unknown): string {
  if (typeof email !== 'string') return '';
  const trimmed = email.trim().toLowerCase();
  // Standard RFC 5322 simplified email check
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  if (!emailRegex.test(trimmed) || trimmed.length > 254) {
    return '';
  }
  return trimmed;
}

/**
 * Masks an email for privacy (e.g. j***e@domain.edu)
 */
export function maskEmail(email: string): string {
  const parts = email.split('@');
  if (parts.length !== 2) return '***@***';
  const name = parts[0];
  const domain = parts[1];
  if (name.length <= 2) return `${name[0]}*@${domain}`;
  return `${name[0]}***${name[name.length - 1]}@${domain}`;
}

/**
 * Cryptographic Password Hashing for Sandbox & Verification
 * Uses SHA-256 with a salt via Web Crypto API (supported in all modern browsers & Node 18+)
 */
export async function hashPassword(password: string, salt = 'studypilot_secure_salt_v1'): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(`${salt}:${password}`);
  
  const subtle = globalThis.crypto?.subtle;
  if (subtle) {
    const hashBuffer = await subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
  }
  
  // Deterministic fallback
  let hash = 0;
  const combined = `${salt}:${password}`;
  for (let i = 0; i < combined.length; i++) {
    hash = ((hash << 5) - hash) + combined.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash).toString(16).padStart(64, '0');
}

/**
 * In-Memory Sliding-Window Rate Limiter
 */
export class RateLimiter {
  private windowMs: number;
  private maxRequests: number;
  private requests: Map<string, number[]>;

  constructor(maxRequests: number, windowMs: number) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
    this.requests = new Map();
  }

  public check(key: string): { allowed: boolean; remaining: number; resetTime: number } {
    const now = Date.now();
    const timestamps = this.requests.get(key) || [];
    const validTimestamps = timestamps.filter((t) => now - t < this.windowMs);

    if (validTimestamps.length >= this.maxRequests) {
      const oldest = validTimestamps[0] || now;
      const resetTime = oldest + this.windowMs;
      return { allowed: false, remaining: 0, resetTime };
    }

    validTimestamps.push(now);
    this.requests.set(key, validTimestamps);
    const remaining = this.maxRequests - validTimestamps.length;
    const resetTime = now + this.windowMs;

    return { allowed: true, remaining, resetTime };
  }

  public clear(): void {
    this.requests.clear();
  }
}
