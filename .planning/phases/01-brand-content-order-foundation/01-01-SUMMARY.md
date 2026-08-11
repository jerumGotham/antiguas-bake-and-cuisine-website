---
phase: 01-brand-content-order-foundation
plan: 01
subsystem: ui
tags: [nextjs, app-router, typescript, tailwind, shadcn, facebook]
requires: []
provides:
  - "Typed immutable business/order content with the sole Facebook Page destination."
  - "A reusable safe external order CTA and server-rendered Home tracer."
  - "A documented static walking-skeleton boundary for Phase 1."
affects: [phase-01-plan-02, phase-01-plan-03, home, menu, contact, delivery]
actuals:
  tokens: 3296
  tasks: 2
  commits: 2
tech-stack:
  added: []
  patterns: ["Typed immutable local content", "server-rendered public routes", "safe external anchors styled with shadcn variants"]
key-files:
  created: [src/content/business.ts, src/components/public/order-cta.tsx]
  modified: [src/app/globals.css, src/app/layout.tsx, src/app/page.tsx, .planning/phases/01-brand-content-order-foundation/01-SKELETON.md]
key-decisions:
  - "Keep the verified Facebook Page URL, CTA label, and login warning in one immutable local content module."
  - "Use explicit null expected facts with the approved placeholder treatment until owner content is supplied."
  - "Defer databases, CMS, application auth, and direct Messenger integrations from the static foundation."
patterns-established:
  - "Order CTA: external navigation is a native anchor that imports its non-user-controlled destination and uses noopener noreferrer."
  - "Truthful public content: routes render owner data from src/content and resolve expected missing facts to locked placeholder copy."
requirements-completed: [BRAND-01, BRAND-02, DATA-01, DATA-03, ORDER-01]
coverage:
  - id: D1
    description: "Home renders the configured Facebook Page handoff through the reusable OrderCta."
    requirement: ORDER-01
    verification:
      - kind: other
        ref: "npm run lint && npm run build"
        status: pass
      - kind: manual_procedural
        ref: "Approved desktop/mobile CTA, new-tab, warning, and keyboard-focus review"
        status: pass
    human_judgment: true
    rationale: "Visual hierarchy and browser new-tab behavior require user review."
  - id: D2
    description: "Home uses the approved palette, font pairing, and missing-content treatment from typed local content."
    requirement: BRAND-01
    verification:
      - kind: other
        ref: "npm run lint && npm run build"
        status: pass
    human_judgment: true
    rationale: "Approved visual hierarchy and responsive presentation require human judgment."
  - id: D3
    description: "Walking skeleton documents the static local-content and Facebook Page architecture boundary."
    requirement: DATA-01
    verification:
      - kind: other
        ref: "test -f .planning/phases/01-brand-content-order-foundation/01-SKELETON.md && npm run lint && npm run build"
        status: pass
    human_judgment: false
duration: 39min
completed: 2026-08-11
status: complete
---

# Phase 01 Plan 01: Facebook Order Home Tracer Summary

**A server-rendered, branded Home route that hands order inquiries to one typed Facebook Page destination through a safe reusable CTA.**

## Performance

- **Duration:** 39 min
- **Started:** 2026-08-11T05:51:56Z
- **Completed:** 2026-08-11T06:30:00Z
- **Tasks:** 2
- **Files modified:** 6

## Accomplishments

- Centralized the only Facebook Page URL, CTA copy, support warning, and missing-content contracts in immutable typed local content.
- Replaced the starter route with a server-rendered Home tracer using the approved palette, Playfair Display/Inter pairing, accessible focus feedback, reduced-motion handling, and truthful placeholders.
- Recorded a walking-skeleton contract that preserves the no-database/no-CMS/no-auth boundary and defers unverified commerce integrations.

## Task Commits

Each task was committed atomically:

1. **Task 1: Deliver the typed-content-to-Facebook Home tracer** - `3c9cc46` (feat)
2. **Task 2: Record the deliberate static walking-skeleton contract** - `791fa9c` (docs)

## Files Created/Modified

- `src/content/business.ts` - Immutable public business, order, placeholder, and absent-fact configuration.
- `src/components/public/order-cta.tsx` - Reusable safe external Facebook Page anchor styled with `buttonVariants`.
- `src/app/globals.css` - Antigua semantic palette, typography tokens, focus ring, and reduced-motion rules.
- `src/app/layout.tsx` - Server-rendered font and growing main-landmark foundation.
- `src/app/page.tsx` - Data-driven initial Home tracer and branded missing-image treatment.
- `.planning/phases/01-brand-content-order-foundation/01-SKELETON.md` - Static architecture and deferred-scope record.

## Decisions Made

- Kept the public Facebook destination and exact CTA copy in `src/content/business.ts` so future CTAs cannot introduce alternate links.
- Represented expected unapproved facts as explicit `null` values and rendered the locked placeholders rather than inventing content.
- Kept the root layout and public tracer server-rendered; client menu behavior remains deferred to the dedicated shell plan.

## Deviations from Plan

None - plan executed exactly as written.

## Known Stubs

| File | Line | Stub | Reason |
|---|---:|---|---|
| `src/content/business.ts` | 13 | `businessOverview: null` | Intentional absent owner-approved business overview; Home renders `Details coming soon.`. |
| `src/content/business.ts` | 14 | `featuredImage: null` | Intentional absent owner-approved image; Home renders the branded image placeholder. |

Both entries are recorded as open Phase 1 stubs in `.planning/WINDOWS.md` for later owner-content resolution.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- The centralized order CTA and semantic visual foundation are ready for catalog primitives and the shared public shell.
- Owner-approved product facts, business details, and image assets remain required before replacing the documented placeholders.

---
*Phase: 01-brand-content-order-foundation*
*Completed: 2026-08-11*

## Self-Check: PASSED

- Confirmed all six plan artifacts exist.
- Confirmed task commits `3c9cc46` and `791fa9c` exist in git history.
