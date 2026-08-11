---
phase: 01-brand-content-order-foundation
plan: 02
subsystem: ui
tags: [nextjs, typescript, tailwind, local-content, catalog]
requires:
  - phase: 01-01
    provides: "Truthful placeholder copy, semantic design tokens, and server-rendered public foundation."
provides:
  - "Immutable typed category and product catalog contracts with no fabricated records."
  - "Pure exact-category selectors that preserve canonical source order."
  - "Server-compatible Card, Section, and approved-local-image placeholder primitives."
affects: [phase-01-plan-03, home, menu, product-discovery]
actuals:
  tokens: 1021.25
  tasks: 2
  commits: 2
tech-stack:
  added: []
  patterns: ["Canonical immutable local catalog", "Exact-match pure selectors", "Approved-local-image display boundary"]
key-files:
  created: [src/content/menu.ts, src/content/selectors.ts, src/components/ui/card.tsx, src/components/ui/section.tsx, src/components/ui/image-placeholder.tsx]
  modified: []
key-decisions:
  - "Keep the canonical catalog empty until owner-approved product records are available rather than inventing entries."
  - "Model expected display metadata as nullable optional fields while leaving no-slot metadata absent."
  - "Permit image rendering only for local paths paired with meaningful owner-supplied alt text."
patterns-established:
  - "Catalog consumers import records/selectors from src/content instead of embedding product facts in JSX."
  - "Product image consumers use ImagePlaceholder to resolve approved local media or the locked branded fallback."
requirements-completed: [DATA-01, DATA-02, DATA-03, BRAND-02]
coverage:
  - id: D1
    description: "Canonical typed catalog and exact-match selectors preserve owner-approved records and declaration order."
    requirement: DATA-02
    verification:
      - kind: other
        ref: "npm run lint && npm run build"
        status: pass
    human_judgment: false
  - id: D2
    description: "Reusable card, section, and image boundary provide semantic styling and truthful approved-image fallbacks."
    requirement: BRAND-02
    verification:
      - kind: other
        ref: "npm run lint && npm run build"
        status: pass
      - kind: manual_procedural
        ref: "320px consuming-Home wrapping review deferred until a route composes the new primitives"
        status: unknown
    human_judgment: true
    rationale: "Responsive wrapping and visual artisan treatment require a consuming route and human viewport inspection."
duration: 4min
completed: 2026-08-11
status: complete
---

# Phase 01 Plan 02: Canonical Catalog and Display Primitives Summary

**Typed empty-by-default product catalog, deterministic selectors, and server-rendered primitives that show only approved local images or branded factual placeholders.**

## Performance

- **Duration:** 4 min
- **Started:** 2026-08-11T06:35:37Z
- **Completed:** 2026-08-11T06:39:15Z
- **Tasks:** 2
- **Files modified:** 5

## Accomplishments

- Defined immutable category, product, image, and optional owner-approved metadata contracts in the sole local catalog module.
- Added exact-match selectors that preserve declaration order and accept empty or partial catalog inputs without generating records.
- Added reusable Card, Section, and ImagePlaceholder boundaries with semantic tokens, responsive gutters, reduced-motion-compatible feedback, and locked image/factual fallback copy.

## Task Commits

Each task was committed atomically:

1. **Task 1: Establish canonical typed catalog contracts and deterministic selectors** - `ed06474` (feat)
2. **Task 2: Provide reusable truthful product and section presentation boundaries** - `988ee74` (feat)

## Files Created/Modified

- `src/content/menu.ts` - Immutable canonical category/product and local image contracts.
- `src/content/selectors.ts` - Pure exact-category and all-product selectors.
- `src/components/ui/card.tsx` - Semantic token-backed structural card primitive.
- `src/components/ui/section.tsx` - Semantic section with the approved responsive gutters and spacing.
- `src/components/ui/image-placeholder.tsx` - Approved local image renderer with branded missing-image fallback.

## Decisions Made

- Kept `products` intentionally empty until owner-approved product details are supplied; no product facts, prices, or imagery were fabricated.
- Used exact category identity and opaque price strings to prevent normalization, ordering, or precision changes to approved data.
- Required a local source and meaningful supplied alt before an image may render; every other state uses the centralized locked placeholders.

## Deviations from Plan

None - plan executed exactly as written.

## Known Stubs

| File | Line | Stub | Reason |
|---|---:|---|---|
| `src/content/menu.ts` | 37 | Empty `products` canonical collection | Intentional until owner-approved product records are supplied; no fabricated records are permitted. |

The stub is recorded as open in `.planning/WINDOWS.md`.

## Issues Encountered

- The plan's 320px visual backstop cannot run yet because the existing Home tracer does not compose these newly created primitives. It is recorded as an open `unrun-verify` entry in `.planning/WINDOWS.md` for the consuming-route plan.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- The public shell and downstream Home/Menu routes can now consume one typed catalog and shared display primitives.
- Owner-approved catalog records and the consuming-route 320px review remain required before public product content can ship.

---
*Phase: 01-brand-content-order-foundation*
*Completed: 2026-08-11*

## Self-Check: PASSED

- Confirmed all five plan artifacts exist.
- Confirmed task commits `ed06474` and `988ee74` exist in git history.
