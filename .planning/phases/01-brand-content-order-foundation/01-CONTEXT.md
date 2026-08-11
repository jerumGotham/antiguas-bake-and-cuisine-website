# Phase 1: Brand, Content & Order Foundation - Context

**Gathered:** 2026-08-11
**Status:** Ready for planning

<domain>
## Phase Boundary

Establish the truthful local content contracts, shared boutique visual system, responsive shared public shell, and one centrally configured Facebook-based order path that downstream public pages will reuse. Do not add the later home discovery, complete menu browsing, service-information routes, checkout, or other commerce capabilities.

</domain>

<decisions>
## Implementation Decisions

### Content truth rules
- **D-01:** Handle missing owner-approved facts case by case, but show a visible placeholder for every expected business or product fact rather than inventing or silently fabricating it.
- **D-02:** Use the exact public placeholder wording: "Details coming soon."
- **D-03:** Use a consistent branded image placeholder, labeled "Image coming soon," whenever a product photo has not been supplied or approved. Never substitute a stock food photograph.

### Boutique art direction
- **D-04:** Lead with a warm artisan character within the approved warm cream, soft beige, chocolate brown, caramel, and dark brown palette.
- **D-05:** Pair serif display headings with a readable sans-serif body face.
- **D-06:** Use subtle texture, fine borders, and restrained organic accents rather than flat or heavily ornate surfaces.
- **D-07:** Give buttons and cards gentle, tactile hover, focus, and pressed feedback; avoid flashy motion.

### Shared navigation
- **D-08:** In Phase 1, expose only a working Home destination and the order action. Add future-route navigation only when those routes ship.
- **D-09:** Make the order action a dedicated primary header button, not a regular navigation link.
- **D-10:** On mobile, use a compact accessible menu panel while keeping the brand and order action prominent.
- **D-11:** Keep the Phase 1 footer concise: brand note, current-year treatment, and one order action. Do not publish a future sitemap or unapproved contact details.

### Messenger conversion
- **D-12:** Centralize the verified destination as `https://www.facebook.com/antiguasbakeandcuisine`. This is a Facebook Page URL, not a direct Messenger deep link.
- **D-13:** Label primary calls to action "Message us on Facebook." Open the Page in a new browser tab and use safe external-link behavior.
- **D-14:** Place concise supporting text near each primary CTA: "Facebook login may be required to message us." Do not imply that a visitor can message without signing in.

### the agent's Discretion
- Choose the exact component/module boundaries, accessible menu mechanics, token names, and placeholder composition while preserving the locked content and visual decisions.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Scope and truthfulness
- `.planning/ROADMAP.md` — Phase 1 boundary, task-ready scope, dependencies, and success criteria.
- `.planning/REQUIREMENTS.md` — BRAND-01 through ORDER-01 acceptance intent and project-wide out-of-scope rules.
- `.planning/PROJECT.md` — product categories, approved palette, technology constraints, and prohibition on invented content.
- `.planning/STATE.md` — active Phase 1 blockers: owner-approved facts, image provenance, and verified conversion destination.

### Existing implementation patterns
- `.planning/codebase/CONVENTIONS.md` — strict TypeScript, App Router naming, Tailwind token placement, and linting conventions.
- `.planning/codebase/STRUCTURE.md` — current `src/app/` structure and guidance for new shared components and utilities.
- `.planning/codebase/STACK.md` — Next.js 16.3, React 19, and Tailwind CSS 4 constraints.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `src/app/layout.tsx` — root document shell, metadata, and current font setup to evolve into the shared public shell.
- `src/app/globals.css` — existing global Tailwind/theme layer; the proper home for app-wide visual tokens and base styles.
- `src/app/page.tsx` — current root route to replace with the initial public foundation composition.

### Established Patterns
- App Router special files live under `src/app/`; route and layout components are server-rendered by default.
- Strict TypeScript and the `@/*` alias are required for reusable modules under `src/`.
- Reusable components and `src/lib/` do not exist yet; establish them only for cross-route needs.

### Integration Points
- `src/app/layout.tsx` should compose the shared navigation and footer around current and future public routes.
- `src/app/globals.css` should expose the approved palette and global typography/surface rules.
- The centralized Facebook Page configuration should be the only source used by header, footer, and future CTA components.

</code_context>

<specifics>
## Specific Ideas

- Warm artisan boutique bakery expression: serif display headings, sans-serif body copy, subtle texture, and restrained tactile interaction feedback.
- Use the supplied Facebook Page as the truthful initial order destination; label it accurately rather than calling it a direct Messenger link.

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.

</deferred>

---

*Phase: 1-brand-content-order-foundation*
*Context gathered: 2026-08-11*
