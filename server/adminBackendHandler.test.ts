import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import type { IncomingMessage } from 'http';
import { verifyAdminAuth } from './adminBackendHandler';

const SECRET = 'test-secret-123';

function mockReq(opts: { ip?: string; auth?: string; bootstrap?: string }): IncomingMessage {
  const headers: Record<string, string> = {};
  if (opts.auth) headers['authorization'] = opts.auth;
  if (opts.bootstrap) headers['x-admin-bootstrap-secret'] = opts.bootstrap;
  return { headers, socket: { remoteAddress: opts.ip } } as unknown as IncomingMessage;
}

describe('verifyAdminAuth', () => {
  beforeEach(() => { process.env.ADMIN_BOOTSTRAP_SECRET = SECRET; });
  afterEach(() => { delete process.env.ADMIN_BOOTSTRAP_SECRET; });

  it('accepts the configured secret via the bootstrap header from any address', () => {
    expect(verifyAdminAuth(mockReq({ ip: '203.0.113.9', bootstrap: SECRET }))).toBe(true);
  });

  it('accepts the configured secret as a Bearer token from any address', () => {
    expect(verifyAdminAuth(mockReq({ ip: '203.0.113.9', auth: `Bearer ${SECRET}` }))).toBe(true);
  });

  it('rejects a wrong secret', () => {
    expect(verifyAdminAuth(mockReq({ ip: '127.0.0.1', bootstrap: 'wrong' }))).toBe(false);
    expect(verifyAdminAuth(mockReq({ ip: '203.0.113.9', auth: 'Bearer wrong' }))).toBe(false);
  });

  it('honours the public demo token only from loopback', () => {
    const demo = 'Bearer admin-token-authenticated';
    expect(verifyAdminAuth(mockReq({ ip: '127.0.0.1', auth: demo }))).toBe(true);
    expect(verifyAdminAuth(mockReq({ ip: '::1', auth: demo }))).toBe(true);
    expect(verifyAdminAuth(mockReq({ ip: '::ffff:127.0.0.1', auth: demo }))).toBe(true);
  });

  it('refuses the public demo token from any remote address', () => {
    const demo = 'Bearer admin-token-authenticated';
    expect(verifyAdminAuth(mockReq({ ip: '203.0.113.9', auth: demo }))).toBe(false);
    expect(verifyAdminAuth(mockReq({ ip: '10.0.0.5', auth: demo }))).toBe(false);
    expect(verifyAdminAuth(mockReq({ ip: undefined, auth: demo }))).toBe(false);
  });

  it('fails closed with no configured secret - the old committed default no longer works', () => {
    delete process.env.ADMIN_BOOTSTRAP_SECRET;
    expect(
      verifyAdminAuth(mockReq({ ip: '203.0.113.9', bootstrap: 'studypilot_admin_secure_secret_2026' }))
    ).toBe(false);
    expect(
      verifyAdminAuth(mockReq({ ip: '203.0.113.9', auth: 'Bearer studypilot_admin_secure_secret_2026' }))
    ).toBe(false);
  });
});
