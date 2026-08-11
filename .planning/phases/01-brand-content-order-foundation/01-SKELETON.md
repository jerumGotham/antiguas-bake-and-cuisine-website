# Walking Skeleton — Antigua's Bake & Cuisine Website

**Phase:** 1
**Generated:** 2026-08-11

## Capability Proven End-to-End

> A visitor can load the Home route and begin a truthful order inquiry by opening Antigua's configured Facebook Page in a safe new tab.

## Architectural Decisions

| Decision | Choice | Rationale |
|---|---|---|
| Framework | Next.js 16 App Router with TypeScript | Supports server-rendered public routes with the existing project scaffold. |
| Data layer | Immutable typed local content in `src/content` | Owner-approved facts can be rendered from one static source without fabricating missing information. Database, CMS, and database reads/writes are deliberately prohibited in Phase 1. |
| Auth | No application authentication | The browser hands visitors to Facebook, which owns any login needed to message the Page. |
| Deployment target | Local development via `npm run dev` | This phase proves the runnable public route locally; production hosting is deferred. |
| Directory layout | App routes in `src/app`, reusable public controls in `src/components`, content contracts in `src/content` | Keeps server-rendered route composition separate from centralized public facts and reusable presentation. |
| Order handoff | Configured Facebook Page opened in a new tab with `noopener noreferrer` | Accurately represents the verified Page URL without claiming direct Messenger, anonymous messaging, prefilled inquiry, or completed order delivery. |

## Stack Touched in Phase 1

- [x] Project scaffold (Next.js framework, build, and lint commands)
- [x] Routing — the real Home route at `/`
- [ ] Database — deliberately prohibited; no reads or writes are in this phase
- [x] UI — an accessible external order action wired to the configured Facebook Page
- [x] Deployment — documented local run command: `npm run dev`

## Out of Scope (Deferred to Later Slices)

- Database, CMS, database reads/writes, and remote content fetching.
- Application authentication, customer accounts, or an admin experience.
- Native ordering, checkout, payments, cart, order tracking, inventory, and account flows.
- Direct Messenger deep links, product-prefilled messages, and any claim that Facebook messaging works without login.
- Product facts, prices, descriptions, image URLs, and stock-food imagery until owner-approved content is supplied.
- Production deployment, analytics, email notifications, and external integrations.
- Shared header/footer navigation and the narrow client-side mobile-menu leaf, which are delivered by later Phase 1 plans.

## Subsequent Slice Plan

Each later phase adds one vertical slice on top of this skeleton without changing the truthful local-content boundary or Page-based order handoff:

- Phase 1 remaining plans: add canonical catalog/display primitives and the responsive shared public shell.
- Phase 2: add a Home discovery experience using approved local content and the shared order action.
- Phase 3: add menu browsing and product inquiry only after its message format is verified.
- Phase 4: add truthful brand, contact, and delivery information.
- Phase 5: add public accessibility, discoverability, and smoke-test coverage for the completed experience.
