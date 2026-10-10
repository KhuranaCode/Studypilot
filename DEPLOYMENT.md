# StudyPilot: Production Deployment & DevOps Runbook

This guide contains end-to-end instructions for deploying **StudyPilot** to production using **Firebase Hosting**, **Cloud Firestore**, and serverless endpoints with security rules, environment variables, administrator provisioning, and cost projections.

---

## 1. Architecture Overview

* **Frontend SPA**: React 18 + Vite + TypeScript built to `dist/`, hosted on **Firebase Hosting** with global CDN caching and Single Page Application rewrite rules (`** -> /index.html`).
* **Database**: **Cloud Firestore** in Native Mode with user-isolated security rules ([firestore.rules](file:///home/aaaditya/my_projects/StudyPilot/firestore.rules)) and compound query indexes ([firestore.indexes.json](file:///home/aaaditya/my_projects/StudyPilot/firestore.indexes.json)).
* **Authentication**: **Firebase Authentication** with Email/Password and Google Sign-In, scoped to production authorized domains.
* **Server-Side API**: Handlers in `server/` (`aiBackendHandler.ts` and `adminBackendHandler.ts`) protecting secret credentials:
  - `GEMINI_API_KEY`: Google Gemini AI studio secret (never exposed to client bundle).
  - `ADMIN_BOOTSTRAP_SECRET`: Secret token for provisioning the administrator.
* **Administrator Portal**: Dedicated admin route (`/admin`) guarded by `AdminRoute.tsx`, with email masking and strict privacy isolation prohibiting admin read access to private student notes and tasks.

---

## 2. Environment Variables Configuration

### A. Client-Side (Vite) `.env` (Included in Client Bundle)
These variables configure the Firebase Web SDK. They do not contain secret keys.

```bash
# Firebase Web Client Credentials (from Firebase Console -> Project Settings -> General)
VITE_FIREBASE_API_KEY="AIzaSyYourFirebaseWebApiKeyHere"
VITE_FIREBASE_AUTH_DOMAIN="studypilot-production.firebaseapp.com"
VITE_FIREBASE_PROJECT_ID="studypilot-production"
VITE_FIREBASE_STORAGE_BUCKET="studypilot-production.appspot.com"
VITE_FIREBASE_MESSAGING_SENDER_ID="123456789012"
VITE_FIREBASE_APP_ID="1:123456789012:web:abcdef1234567890"
VITE_FIREBASE_MEASUREMENT_ID="G-XXXXXXXXXX"

# Set to "false" in production
VITE_USE_FIREBASE_EMULATORS="false"
```

### B. Server-Side Environment Variables (Confidential: Cloud Secrets)
Must be configured in your serverless provider (Google Cloud Functions, Cloud Run, Vercel, or AWS Lambda) and NEVER committed to Git.

```bash
# Google Gemini AI Secret
GEMINI_API_KEY="AIzaSyYourGoogleAiStudioSecretKeyHere"

# Administrator Provisioning & Verification
ADMIN_EMAIL="admin@studypilot.edu"
ADMIN_BOOTSTRAP_SECRET="choose_a_strong_random_secret_string_32_chars"
```

---

## 3. Step-by-Step Deployment Instructions

### Step 1: Install Firebase CLI & Authenticate
```bash
# Install Firebase CLI globally
npm install -g firebase-tools

# Login to Google / Firebase account
firebase login

# Verify active project or switch to production project
firebase projects:list
firebase use --add
```

### Step 2: Deploy Firestore Security Rules & Indexes
```bash
# Deploy firestore rules (owner isolation & admin claim access)
firebase deploy --only firestore:rules

# Deploy compound indexes
firebase deploy --only firestore:indexes
```

### Step 3: Configure Authentication Authorized Domains
1. Open the [Firebase Console](https://console.firebase.google.com/).
2. Navigate to **Authentication** > **Settings** > **Authorized domains**.
3. Verify that your custom production domain (e.g., `studypilot.app` and `studypilot-production.firebaseapp.com`) is listed.
4. If using Google Sign-In, ensure the OAuth consent screen in Google Cloud Console is published.

### Step 4: Build and Deploy Frontend SPA
```bash
# Verify typecheck and tests pass
npm run lint
npm test

# Build production bundle (outputs to dist/)
npm run build

# Deploy hosting assets to Firebase CDN
firebase deploy --only hosting
```

### Step 5: Deploy Server Endpoints (Cloud Functions or Container)
If deploying the backend handlers to Cloud Functions for Firebase:
```bash
# Export the handlers from server/ in functions/index.ts:
# exports.ai = functions.https.onRequest(handleAiPlanGenerationRequest);
# exports.admin = functions.https.onRequest(handleAdminRequest);

firebase deploy --only functions
```

---

## 4. Administrator Account Provisioning

### Creating or Elevating the First Administrator

1. **Option A: Automated CLI Script**
   Run the secure bootstrap script specifying your target email and server secret:
   ```bash
   ADMIN_BOOTSTRAP_SECRET="your_configured_secret" npm run admin:bootstrap admin@studypilot.edu
   ```

2. **Option B: Firebase Admin SDK Custom Claim (Standard Firebase Pattern)**
   Run via Node.js with service account credentials:
   ```javascript
   import admin from 'firebase-admin';
   admin.initializeApp();

   const user = await admin.auth().getUserByEmail('admin@studypilot.edu');
   await admin.auth().setCustomUserClaims(user.uid, { admin: true });
   // Update Firestore user document
   await admin.firestore().collection('users').doc(user.uid).update({ role: 'admin' });
   ```

3. **Option C: Direct API Endpoint with Secret Header**
   ```bash
   curl -X POST https://your-domain.com/api/admin/bootstrap \
     -H "Content-Type: application/json" \
     -H "x-admin-bootstrap-secret: your_configured_secret" \
     -d '{"email":"admin@studypilot.edu","displayName":"System Admin"}'
   ```

### Admin Access Verification & Testing
1. **Admin Login**:
   - Navigate to `/login`.
   - Sign in with `admin@studypilot.edu`.
   - Navigate to `/admin`. You will see system health, active user counts, and privacy-sanitized user directory.
2. **Authorization Enforcement**:
   - Sign in with a standard student account (e.g., `student@university.edu`).
   - Attempt to navigate to `/admin`.
   - The route guard `AdminRoute.tsx` blocks access and redirects to `/dashboard` with an authorization notice.
   - Any direct HTTP request to `/api/admin/overview` or `/api/admin/users` without the required bearer token or secret responds with `403 Forbidden`.

---

## 5. Production Smoke-Test Checklist

After deploying to staging or production, execute this verification checklist:

- [ ] **SSL & Headers**: Verify HTTPS certificate is active and CORS headers restrict non-whitelisted origins.
- [ ] **SPA Routing**: Directly reload a deep link (e.g., `https://your-domain.com/tasks`) to confirm `firebase.json` rewrites redirect to `/index.html` without a 404.
- [ ] **Authentication**:
  - Sign up with a new email address.
  - Verify email confirmation flow if enabled.
  - Sign out and log back in.
  - Test Google OAuth popup sign-in.
- [ ] **Task & Subject CRUD**:
  - Create a subject with custom color.
  - Create a task with priority, due date, and estimated duration.
  - Mark task complete, verify strike-through and progress updates.
  - Refresh the page and confirm task persistence from Firestore.
- [ ] **Focus Timer**:
  - Start a 25-minute Pomodoro timer.
  - Switch tabs or refresh page: confirm remaining time is calculated accurately from timestamps without resetting.
  - Complete the session and confirm it logs to Firestore without duplicates.
- [ ] **AI Study Plan Generation**:
  - Generate a weekly study schedule.
  - Verify badge indicates provider (`Google Gemini 1.5 Flash` or `Smart Deterministic Engine`).
  - Verify generated sessions respect daily capacity and rest days.
- [ ] **Data Isolation (Security Test)**:
  - Create tasks in Student Account A.
  - Log in to Student Account B in an incognito window.
  - Confirm Student Account B cannot view or edit Account A's tasks or sessions.
- [ ] **Admin Portal**:
  - Verify admin dashboard loads system health and user directory.
  - Confirm student emails are masked (`a***n@domain.com`) and zero private notes/study content are displayed.

---

## 6. Rollback Procedures

If an issue is detected post-deployment:

### Immediate Frontend Rollback (Firebase Hosting)
Firebase Hosting stores versioned history of every deployment.
1. Open [Firebase Console Hosting](https://console.firebase.google.com/project/_/hosting/sites).
2. Click **Release History**.
3. Locate the previous stable release and click **Rollback**.
4. Or via CLI:
   ```bash
   firebase hosting:releases:list
   # Redeploy previous stable dist build
   git checkout <previous-tag>
   npm run build
   firebase deploy --only hosting
   ```

### Firestore Security Rules Rollback
```bash
git checkout <previous-tag> firestore.rules
firebase deploy --only firestore:rules
```

---

## 7. Cost & Resource Consumption Estimates

| Service | Free Tier / Inclusion | Estimated Usage (1,000 active students) | Projected Cost |
| :--- | :--- | :--- | :--- |
| **Firebase Hosting** | 10 GB storage, 360 MB/day egress | ~500 MB storage, ~50 GB/month egress | **$0.00 to $1.00 / month** |
| **Firebase Authentication** | 50,000 MAU free | 1,000 MAU | **$0.00 / month** |
| **Cloud Firestore** | 50,000 reads/day, 20,000 writes/day | ~30,000 reads/day, ~8,000 writes/day | **$0.00 / month** (within free tier) |
| **Google Gemini 1.5 Flash** | 15 Requests Per Minute free | ~5,000 schedule generations/month (~25M tokens) | **~$2.50 to $4.00 / month** |
| **Total Estimated Operating Cost** | N/A | N/A | **< $5.00 / month** |
