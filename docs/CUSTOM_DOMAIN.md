# StudyPilot Custom Domain Connection & DNS Production Guide

This guide details the procedure for connecting and verifying custom domains for StudyPilot on production infrastructure.

## 1. Domain Architecture

| Hostname | Purpose | Target / Route |
| :--- | :--- | :--- |
| `studypilot.app` | Apex domain (marketing & landing page) | `A` records to Hosting Load Balancers |
| `www.studypilot.app` | Web canonical redirect | `CNAME` pointing to `studypilot.app` |
| `app.studypilot.app` | Dedicated student workspace app | `CNAME` pointing to production hosting target |
| `api.studypilot.app` | Hardened backend API endpoints | Cloud Run / Containerized API target |

---

## 2. DNS Record Configuration

Configure the following records in your domain registrar (Cloudflare, Namecheap, Google Domains / Squarespace, AWS Route 53):

### A. Apex Domain (`studypilot.app`)
```text
Type:  A
Name:  @
Value: 199.36.158.100
TTL:   300 (or Auto)

Type:  A
Name:  @
Value: 199.36.158.100
TTL:   300 (or Auto)
```

### B. Subdomains (`www` & `app`)
```text
Type:  CNAME
Name:  www
Value: studypilot.app
TTL:   300

Type:  CNAME
Name:  app
Value: studypilot.web.app
TTL:   300
```

---

## 3. Firebase Hosting Domain Binding

Run the following commands using the Firebase CLI to initiate automatic SSL certificate provisioning:

```bash
# Add custom domain
firebase hosting:channel:deploy production
firebase target:apply hosting app studypilot-prod

# Verify custom domain ownership
firebase hosting:sites:create studypilot
```

Firebase automatically provisions a managed, auto-renewing **Let's Encrypt TLS/SSL certificate** within 1 to 24 hours of DNS propagation.

---

## 4. Environment Configuration

In your production `.env.production` file, configure your verified canonical URL:

```bash
VITE_APP_URL="https://studypilot.app"
VITE_CUSTOM_DOMAIN="studypilot.app"
```

## 5. Security & CORS Whitelist

When your custom domain is active, add `https://studypilot.app` and `https://app.studypilot.app` to:
1. **Firebase Console -> Authentication -> Settings -> Authorized Domains**
2. **Server CORS Origins in `server/adminBackendHandler.ts` and `server/aiBackendHandler.ts`**
3. **Google Cloud OAuth 2.0 Client -> Authorized JavaScript Origins**
