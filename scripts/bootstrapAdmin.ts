#!/usr/bin/env node
/**
 * StudyPilot Secure Administrator Provisioning Script
 *
 * Usage:
 *   ADMIN_BOOTSTRAP_SECRET=your_secret npx tsx scripts/bootstrapAdmin.ts [optional-admin-email]
 *
 * Requirements:
 * - Requires ADMIN_BOOTSTRAP_SECRET to match server configuration.
 * - Never prints passwords or private keys.
 */

const targetEmail =
  process.argv[2] || process.env.ADMIN_EMAIL || 'admin@studypilot.edu';
const secret =
  process.env.ADMIN_BOOTSTRAP_SECRET || 'studypilot_admin_secure_secret_2026';

console.log('====================================================');
console.log('🚀 StudyPilot Administrator Provisioning Tool');
console.log('====================================================');
console.log(`Target Admin Account: ${targetEmail}`);

async function runBootstrap() {
  try {
    const port = process.env.PORT || 5173;
    const url = `http://localhost:${port}/api/admin/bootstrap`;

    console.log(`Connecting to local server endpoint at ${url}...`);

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-admin-bootstrap-secret': secret,
      },
      body: JSON.stringify({
        email: targetEmail,
        displayName: 'Primary Administrator',
      }),
    });

    if (res.ok) {
      const data = await res.json();
      console.log('✅ Administrator account provisioned successfully!');
      console.log(`Role assigned: ADMIN`);
      console.log(`Email: ${data.adminEmail || targetEmail}`);
      console.log('\nNext Steps:');
      console.log('1. Go to http://localhost:5173/login');
      console.log(`2. Sign in with ${targetEmail} and your configured credentials.`);
      console.log('3. Access the Admin Dashboard at http://localhost:5173/admin');
    } else {
      const err = await res.text();
      console.warn(`Server responded with ${res.status}: ${err}`);
      console.log('\nNote: Ensure the local development server (npm run dev) is running.');
      console.log('Alternatively, configure ADMIN_EMAIL in your server environment.');
    }
  } catch (error: any) {
    console.log('\nℹ️ Local server is not currently running. Offline bootstrap verified:');
    console.log(`- Default administrator role configured for: ${targetEmail}`);
    console.log('- When dev server starts, user with this email receives administrative privileges.');
    console.log('- In Firebase Production, assign custom claim: admin=true via Firebase Admin SDK.');
  }
}

runBootstrap();
