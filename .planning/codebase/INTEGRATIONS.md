# External Integrations

**Analysis Date:** 2026-08-11

## APIs & External Services

**Application APIs:**
- Not detected — there are no route handlers under `src/app/**/route.*`, no `fetch`/HTTP client usage in application source, and no third-party service SDKs declared in `package.json`.

**Font delivery:**
- Google Fonts via Next.js `next/font/google` - `Geist` and `Geist_Mono` are configured in `src/app/layout.tsx` and exposed as CSS variables to `src/app/globals.css`.
  - SDK/Client: built-in `next/font/google` from `next` 16.3.0.
  - Auth: Not applicable.

**Documentation and template links:**
- Vercel and Next.js websites - `src/app/page.tsx` contains static, outbound template/deployment/documentation anchors only; they do not transmit application data or call an API.
  - SDK/Client: None.
  - Auth: Not applicable.

## Data Storage

**Databases:**
- Not detected — no database client, ORM, connection string reference, or database configuration exists in `package.json`, `src/`, or root configuration files.
  - Connection: Not applicable.
  - Client: Not applicable.

**File Storage:**
- Local static assets only — `public/` contains bundled SVG assets referenced by `src/app/page.tsx`; no remote object-storage client is configured.

**Caching:**
- None configured — no cache provider/client or cache environment variable is present.

## Authentication & Identity

**Auth Provider:**
- Not detected — there is no auth dependency, middleware/proxy file under `src/`, server route handler, or session/token environment configuration.
  - Implementation: Not applicable.

## Monitoring & Observability

**Error Tracking:**
- None configured — no error tracking SDK or provider configuration is present in `package.json`, `src/`, or root files.

**Logs:**
- No application logging integration is implemented in `src/`. Runtime/build logging is provided by the Next.js CLI commands in `package.json`.

## CI/CD & Deployment

**Hosting:**
- Not configured — no `.vercel/`, `vercel.json`, `.netlify/`, `netlify.toml`, Dockerfile, or other deployment manifest is present. `README.md` links to Vercel as a suggested deployment platform only.

**CI Pipeline:**
- None configured — no files are present under `.github/` and no other CI configuration is detected.

## Environment Configuration

**Required env vars:**
- None currently required — no `process.env` access is present in application or configuration source, and no `.env*` file exists.

**Secrets location:**
- No secrets store is configured. `.gitignore` excludes `.env*`; place future local integration secrets in ignored `.env*` files and configure production secrets in the selected hosting provider.

## Webhooks & Callbacks

**Incoming:**
- None — no route handlers or webhook verification code exists under `src/app/`.

**Outgoing:**
- None — no HTTP client calls, webhook client, or notification SDK is used in `src/`.

---

*Integration audit: 2026-08-11*
