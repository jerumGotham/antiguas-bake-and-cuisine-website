# Walking Skeleton — Antigua's Bake & Cuisine Website

**Phase:** 1
**Generated:** 2026-08-11

## Capability Proven End-to-End

> A visitor can load the public Home route and open Antigua's centrally configured Facebook Page order destination in a safe new tab.

## Architectural Decisions

| Decision | Choice | Rationale |
|---|---|---|
| Framework | Next.js 16.3 App Router | Existing strict-TypeScript starter supports server-rendered public routes and shared layouts. |
| Data layer | Typed immutable local TypeScript content modules | A database/CMS is explicitly prohibited for this static-first MVP; local content is the truthful read boundary. |
| Auth | None | No application authentication is in scope; Facebook owns any login required by the external order handoff. |
| Deployment target | Documented local run (`npm run dev`) | No hosting provider or deployment configuration has been approved. |
| Directory layout | App routes in `src/app`, reusable public/UI components in `src/components`, factual contracts in `src/content` | Keeps routing, reusable presentation, and owner-approved facts separate. |

## Stack Touched in Phase 1

- [x] Project scaffold (existing Next.js build and lint scripts)
- [x] Routing — the real `/` route
- [ ] Database — deliberately excluded; typed local content is the data boundary
- [x] UI — the external Facebook order control is an interactive browser navigation
- [x] Deployment — `npm run dev` runs the complete local public stack

## Out of Scope (Deferred to Later Slices)

- Database, CMS, API routes, authentication, accounts, cart, checkout, payments, order tracking, and admin tooling
- Product-specific Messenger prefills and any direct Messenger deep link
- Home discovery content, complete menu browsing, service-information routes, forms, analytics, and email
- Unapproved product facts, stock food images, unapproved contact details, and fabricated public claims

## Subsequent Slice Plan

Each later phase adds a user-visible public route without changing the static typed-content boundary or the centralized Facebook Page handoff.

- Phase 2: Home discovery drawn from canonical content and shared primitives
- Phase 3: Menu browsing and verified product-context inquiry
- Phase 4: Brand, contact, and delivery information
- Phase 5: Accessibility, discoverability, and browser smoke coverage
