# Phase 1: Brand, Content & Order Foundation - Research

**Researched:** 2026-08-11  
**Domain:** Static-first Next.js 16 public-site foundation: truthful local content, shared boutique UI, and Facebook Page handoff  
**Confidence:** MEDIUM

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- **D-01:** Handle missing owner-approved facts case by case, but show a visible placeholder for every expected business or product fact rather than inventing or silently fabricating it.
- **D-02:** Use the exact public placeholder wording: "Details coming soon."
- **D-03:** Use a consistent branded image placeholder, labeled "Image coming soon," whenever a product photo has not been supplied or approved. Never substitute a stock food photograph.
- **D-04:** Lead with a warm artisan character within the approved warm cream, soft beige, chocolate brown, caramel, and dark brown palette.
- **D-05:** Pair serif display headings with a readable sans-serif body face.
- **D-06:** Use subtle texture, fine borders, and restrained organic accents rather than flat or heavily ornate surfaces.
- **D-07:** Give buttons and cards gentle, tactile hover, focus, and pressed feedback; avoid flashy motion.
- **D-08:** In Phase 1, expose only a working Home destination and the order action. Add future-route navigation only when those routes ship.
- **D-09:** Make the order action a dedicated primary header button, not a regular navigation link.
- **D-10:** On mobile, use a compact accessible menu panel while keeping the brand and order action prominent.
- **D-11:** Keep the Phase 1 footer concise: brand note, current-year treatment, and one order action. Do not publish a future sitemap or unapproved contact details.
- **D-12:** Centralize the verified destination as `https://www.facebook.com/antiguasbakeandcuisine`. This is a Facebook Page URL, not a direct Messenger deep link.
- **D-13:** Label primary calls to action "Message us on Facebook." Open the Page in a new browser tab and use safe external-link behavior.
- **D-14:** Place concise supporting text near each primary CTA: "Facebook login may be required to message us." Do not imply that a visitor can message without signing in.

### the agent's Discretion
- Choose the exact component/module boundaries, accessible menu mechanics, token names, and placeholder composition while preserving the locked content and visual decisions.

### Deferred Ideas (OUT OF SCOPE)
None — discussion stayed within phase scope.
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| BRAND-01 | Responsive boutique bakery visual system with the approved palette. | CSS-first semantic token layer, paired display/body fonts, reusable tactile primitives. |
| BRAND-02 | Consistent public navigation, footer, typography, spacing, cards, buttons, and sections. | Root shared shell plus stateless UI primitives; one small client island for the mobile menu. |
| DATA-01 | Strongly typed local modules for business facts, categories, products, and optional product metadata. | Local data contracts with a single canonical catalog export and pure selectors. |
| DATA-02 | Displayed product fields come only from approved canonical local data. | Make presentation components accept typed product objects; never embed product copy or prices in JSX. |
| DATA-03 | Unknown business/product information is omitted or visibly marked as a placeholder. | Represent approval and missingness explicitly; use the locked text/image placeholder components. |
| ORDER-01 | Centralized verified Messenger destination from primary CTAs. | One typed Facebook Page configuration and one reusable external CTA used by header/footer. |
</phase_requirements>

## Project Constraints (from AGENTS.md)

- Read relevant local Next.js guides under `node_modules/next/dist/docs/` before writing framework-specific code; heed their deprecations. [VERIFIED: AGENTS.md:3-5]
- Do not remove the Next.js-generated `AGENTS.md` rule block; `next dev` re-adds it, so commit the resulting change when it occurs. [VERIFIED: AGENTS.md:7-7]

## Summary

Phase 1 should be a static foundation with no new runtime service or package. Keep the App Router root layout server-rendered and compose a shared header, main content, and footer there. The only browser-state boundary should be a compact mobile navigation component; layouts and pages are Server Components by default, and a `"use client"` boundary pulls its import graph into the client bundle. [CITED: node_modules/next/dist/docs/01-app/01-getting-started/05-server-and-client-components.md:11-31] [CITED: node_modules/next/dist/docs/01-app/01-getting-started/05-server-and-client-components.md:174-184]

Treat local content as the product contract, not temporary page copy: define strongly typed business, category, product, image, size, price, and approval/placeholder shapes once; export canonical records and selectors; pass those records into shared presentation components. Until facts and images are owner-approved, render the locked placeholder copy or omit the optional field. The supplied Page URL is the only order handoff; it is intentionally not a product-prefill Messenger design, checkout, contact transport, or new social destination. [VERIFIED: .planning/REQUIREMENTS.md:62-72] [VERIFIED: .planning/phases/01-brand-content-order-foundation/01-CONTEXT.md:34-36]

Use Tailwind v4's CSS-first design tokens in `globals.css` for semantic bakery colors, typography, radii, borders, and interaction timing. `@theme inline` can map Tailwind utilities to runtime CSS variables; reserve global CSS for true global defaults/tokens and apply component styling with utilities. [CITED: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/theme.mdx] [CITED: node_modules/next/dist/docs/01-app/01-getting-started/11-css.md:248-295]

**Primary recommendation:** Build the canonical content/config layer first, then the server-rendered shared shell and visual primitives around it; expose only the locked Facebook Page CTA from the header and concise footer.

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| Approved business/catalog source and selectors | API / Backend (build-time module) | — | Typed local modules own factual content and filtering; no database/API belongs in this MVP. [VERIFIED: .planning/REQUIREMENTS.md:62-69] |
| Boutique tokens and shared visual primitives | Browser / Client | Frontend Server (markup composition) | CSS is delivered to the browser while the App Router composes the reusable markup. [CITED: node_modules/next/dist/docs/01-app/01-getting-started/11-css.md:248-295] |
| Shared header, footer, and internal Home navigation | Frontend Server (SSR) | Browser / Client | The root layout owns cross-route UI; internal links use `next/link`; only the menu state needs a client boundary. [CITED: node_modules/next/dist/docs/01-app/01-getting-started/03-layouts-and-pages.md:41-89] [CITED: node_modules/next/dist/docs/01-app/01-getting-started/03-layouts-and-pages.md:284-328] |
| Compact mobile menu open/close state | Browser / Client | — | Button state and event handlers require a Client Component. [CITED: node_modules/next/dist/docs/01-app/01-getting-started/05-server-and-client-components.md:19-24] |
| Facebook Page order handoff | Browser / Client | External Facebook service | The browser follows the one verified external Page URL in a new tab; Facebook authentication is outside the application boundary. [VERIFIED: .planning/phases/01-brand-content-order-foundation/01-CONTEXT.md:34-36] |

## Standard Stack

### Core

The existing manifest declares the exact foundation: `"next": "16.3.0", "react": "19.2.8", "react-dom": "19.2.8" and `"tailwindcss": "^4"`. [VERIFIED: package.json:11-24]

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Next.js | 16.3.0 | App Router routes, root layout, font loading, production build | Already installed; App Router layouts provide the shared UI boundary. [VERIFIED: package.json:11-15] [CITED: node_modules/next/dist/docs/01-app/01-getting-started/03-layouts-and-pages.md:41-89] |
| React / React DOM | 19.2.8 | Component rendering | Existing peer framework pair; no client state framework is needed in this phase. [VERIFIED: package.json:13-15] |
| Tailwind CSS / `@tailwindcss/postcss` | ^4 | Tokenized utility styling and CSS processing | Already configured through `@import "tailwindcss"` and PostCSS. [VERIFIED: package.json:16-24] [VERIFIED: src/app/globals.css:1-13] |

### Supporting

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| `next/font/google` | bundled with installed Next.js | Self-hosted display/body web fonts | Use in the root layout for the locked serif-display/sans-body pairing; Next.js documents self-hosting and no browser request to Google. [CITED: node_modules/next/dist/docs/01-app/01-getting-started/13-fonts.md:94-119] |
| TypeScript | ^5 | Compile-time local-content and UI contracts | Use `satisfies`/precise exported types; the project is strict TypeScript. [VERIFIED: package.json:21-24] [VERIFIED: .planning/codebase/CONVENTIONS.md:21-24] |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Local typed content | Database/CMS | Explicitly out of scope for the static-first MVP; adds an unneeded service boundary. [VERIFIED: .planning/REQUIREMENTS.md:62-69] |
| Native mobile menu button/panel | Component-library menu | The menu's small state surface does not justify adding a package in Phase 1. [ASSUMED] |
| One configured Page URL | Messenger deep link/product prefill | Locked decision identifies the supplied URL as a Facebook Page, not a direct Messenger link. [VERIFIED: .planning/phases/01-brand-content-order-foundation/01-CONTEXT.md:34-36] |

**Installation:** None. Do not install shadcn/ui, Lucide, Zustand, TanStack Query, forms, or validation packages in this phase; no requirement needs them yet. [VERIFIED: .planning/REQUIREMENTS.md:8-15] [ASSUMED]

**Version verification:** `npm view next@16.3.0 version time` confirmed version 16.3.0, published 2026-08-03. [VERIFIED: npm registry]

## Architecture Patterns

### System Architecture Diagram

```text
Owner-approved facts/images ──┐
Missing/unknown facts ────────┼──> typed local content + approval policy
                              │              │
                              │              ├──> canonical catalog/selectors ──> current/future route markup
                              │              └──> business/order config ────────> reusable Facebook CTA
                              │                                                        │
Browser request ─────────────────────────────> root public layout (server) ──> Header / <main> / Footer
                                                                   │                   │
                                                                   └──> mobile menu client leaf
                                                                                       │
Primary CTA click ───────────────────────────────────────────────────────────────────> Facebook Page (new tab)
```

### Recommended Project Structure

```text
src/
├── app/
│   ├── globals.css             # Tailwind import, semantic tokens, global base rules
│   ├── layout.tsx              # fonts, metadata, shared Header/main/Footer shell
│   └── page.tsx                # intentionally minimal Phase-1 Home destination
├── components/
│   ├── public/                 # Header, Footer, OrderCta, mobile-menu leaf
│   └── ui/                     # Button, Card, Section, image-placeholder primitives
└── content/
    ├── business.ts             # approved business facts + one Facebook Page configuration
    ├── menu.ts                 # canonical typed categories/products
    └── selectors.ts             # pure product/category selectors for later routes
```

This is a recommended structure, not a framework-required path; Next.js allows shared project code outside `app`, and `src` is supported. [CITED: node_modules/next/dist/docs/01-app/01-getting-started/02-project-structure.md:305-321] [ASSUMED]

### Pattern 1: Canonical data plus approval-aware display boundary

**What:** Export immutable, typed source records from `src/content/`; UI receives records/field-display helpers rather than raw literals. Model optional owner-approved facts as absent and render the locked text placeholder only where the business expects a fact to appear. [VERIFIED: .planning/REQUIREMENTS.md:13-15] [VERIFIED: .planning/phases/01-brand-content-order-foundation/01-CONTEXT.md:16-20]

**When to use:** Every business fact, product field, image reference, price, and best-seller claim. Keep product presentation components data-driven now so Phase 2/3 cannot bypass the catalog. [ASSUMED]

**Planner detail:** establish a `Product` contract with optional metadata such as image, sizes, price, and `isBestSeller`; do not add placeholder products, prices, or descriptions to make a grid look complete. [VERIFIED: .planning/REQUIREMENTS.md:13-15] [ASSUMED]

### Pattern 2: Server public shell with a leaf client menu

**What:** Compose Header, `main`, and Footer in the root layout. Keep logo, Home link, external CTA, and footer server-rendered; isolate only the trigger/panel state in a mobile-menu component marked `"use client"`. [CITED: node_modules/next/dist/docs/01-app/01-getting-started/03-layouts-and-pages.md:41-89] [CITED: node_modules/next/dist/docs/01-app/01-getting-started/05-server-and-client-components.md:174-184]

**When to use:** The Phase 1 public shell and all later public routes. Use `next/link` for the internal Home destination, but a normal external anchor for the Facebook Page. [CITED: node_modules/next/dist/docs/01-app/01-getting-started/03-layouts-and-pages.md:284-328] [ASSUMED]

### Pattern 3: Semantic token layer before component styling

**What:** Define palette, font, radius, and animation-easing tokens in `globals.css`; map them using `@theme inline` so utilities express role (surface, text, accent) instead of repeating raw hexadecimal values. The verbatim approved palette is: `Warm Cream #F7F0D8`, `Soft Beige #E8DCC1`, `Chocolate Brown #6B4328`, `Caramel #C99A62`, and `Dark Brown #211814`. [VERIFIED: .planning/PROJECT.md:47-56] [CITED: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/theme.mdx]

**When to use:** All shared UI and Phase 2+ route composition. Keep texture/organic accents decorative and restrained; focus states must remain conspicuous rather than relying on color shift alone. [VERIFIED: .planning/phases/01-brand-content-order-foundation/01-CONTEXT.md:21-29] [ASSUMED]

### Anti-Patterns to Avoid

- **Facts embedded in JSX:** creates an unauditable second catalog and violates canonical sourcing. Use only typed content exports. [VERIFIED: .planning/REQUIREMENTS.md:13-15]
- **Stock-food substitutions:** prohibited by the locked image rule. Render the branded `"Image coming soon,"` treatment instead. [VERIFIED: .planning/phases/01-brand-content-order-foundation/01-CONTEXT.md:16-20]
- **Future navigation links:** do not expose Menu/About/Contact before those routes exist. [VERIFIED: .planning/phases/01-brand-content-order-foundation/01-CONTEXT.md:27-32]
- **Making the root layout a Client Component:** needlessly moves the shell's module graph to the client. Keep the interactive boundary small. [CITED: node_modules/next/dist/docs/01-app/01-getting-started/05-server-and-client-components.md:174-184]
- **Calling the Page link “Messenger” or assuming anonymous messaging:** the visible CTA and warning must use the locked wording. [VERIFIED: .planning/phases/01-brand-content-order-foundation/01-CONTEXT.md:34-36]

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Route transitions | Custom click/router logic | `next/link` for the Home destination | Built-in internal client navigation/prefetching. [CITED: node_modules/next/dist/docs/01-app/01-getting-started/03-layouts-and-pages.md:284-328] |
| Font delivery | Raw remote stylesheet/font requests | `next/font/google` | Next.js self-hosts selected Google fonts and avoids browser requests to Google. [CITED: node_modules/next/dist/docs/01-app/01-getting-started/13-fonts.md:94-119] |
| Design token generation | Parallel Tailwind config and arbitrary CSS values | Tailwind v4 `@theme`/`@theme inline` in global CSS | One semantic token source feeds utilities and CSS variables. [CITED: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/theme.mdx] |
| Future content administration | An ad-hoc editor, CMS, or database | Typed local modules | Database/CMS is explicitly deferred. [VERIFIED: .planning/REQUIREMENTS.md:62-69] |

**Key insight:** This phase benefits from fewer abstractions, not more: content integrity comes from a single typed module boundary and reusable rendering primitives, while conversion integrity comes from a single URL configuration. [ASSUMED]

## Common Pitfalls

### Pitfall 1: Placeholder policy becomes inconsistent
**What goes wrong:** Some unknown values disappear, others become invented marketing copy, and photo gaps are filled with stock images.  
**Why it happens:** Missingness is handled ad hoc in each component instead of through the data/display contract.  
**How to avoid:** Audit every supported product/business field; omit optional facts when no visual slot is expected, otherwise use exactly `"Details coming soon."` and the labeled image placeholder. [VERIFIED: .planning/phases/01-brand-content-order-foundation/01-CONTEXT.md:16-20]  
**Warning signs:** A product price, description, or image appears in JSX rather than from `src/content/`. [ASSUMED]

### Pitfall 2: Facebook CTA overpromises or drifts
**What goes wrong:** Header/footer use different URLs, CTA copy says Messenger despite linking to a Page, or product-specific prefills are added without verification.  
**Why it happens:** URL/copy are duplicated and later commerce assumptions leak into Phase 1.  
**How to avoid:** Export the Page URL, label, and warning from one config module and render them through one CTA primitive. Only link to `https://www.facebook.com/antiguasbakeandcuisine`; label it `"Message us on Facebook."`; show `"Facebook login may be required to message us."` [VERIFIED: .planning/phases/01-brand-content-order-foundation/01-CONTEXT.md:34-36]  
**Warning signs:** More than one Facebook URL literal or any `m.me`/prefill formatting is introduced. [ASSUMED]

### Pitfall 3: Mobile navigation becomes a large client boundary
**What goes wrong:** The whole layout becomes client-rendered just to toggle a panel.  
**Why it happens:** State is placed at the root rather than the smallest component that needs it.  
**How to avoid:** Keep `layout.tsx` server-rendered; place only the stateful trigger/panel leaf behind `"use client"`. [CITED: node_modules/next/dist/docs/01-app/01-getting-started/05-server-and-client-components.md:174-184]  
**Warning signs:** `"use client"` appears in `src/app/layout.tsx`. [ASSUMED]

### Pitfall 4: Aesthetic feedback harms accessibility
**What goes wrong:** Subtle hover-only affordances, low-contrast caramel text, or motion-only state changes make controls unclear.  
**Why it happens:** Boutique styling is treated as an exception to semantic interaction design.  
**How to avoid:** Use native buttons/links, visible keyboard focus, explicit open/closed state for the mobile panel, adequate target size, and restrained motion. Next's guidance notes that its linter catches several ARIA/role issues but does not replace manual contrast and interaction review. [CITED: node_modules/next/dist/docs/03-architecture/accessibility.md:16-33]  
**Warning signs:** Menu is mouse-only, focus disappears, or contrast is evaluated by visual impression alone. [ASSUMED]

## Code Examples

No literal implementation snippet is prescribed: token names, data type member names, component file names, and mobile-menu mechanics are explicitly at the agent's discretion. The planner should require the following testable invariants instead: one catalog export; one Facebook Page URL export; no product literals in routes; CTA renders the exact locked label/warning; and only Home plus the order action appear in Phase 1 navigation. [VERIFIED: .planning/phases/01-brand-content-order-foundation/01-CONTEXT.md:27-39] [ASSUMED]

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| JavaScript config-first Tailwind customization | Tailwind v4 CSS-first `@theme` token configuration | Tailwind CSS v4 | Put semantic design tokens beside the global Tailwind import rather than introducing a parallel config solely for this phase. [CITED: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/blog/tailwindcss-v4/index.mdx] |
| Broad client-rendered page shells | Server Components by default with small client boundaries | Next.js App Router | Keep static content and shared layout off the client bundle; isolate interaction. [CITED: node_modules/next/dist/docs/01-app/01-getting-started/05-server-and-client-components.md:11-31] |

**Deprecated/outdated:** Do not plan Pages Router conventions or `pages/_app`; this repository's route tree is App Router under `src/app/`. [VERIFIED: .planning/codebase/STRUCTURE.md:34-38]

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | A small native button/panel is sufficient for the mobile menu without a component library. | Standard Stack | Menu behavior may need a more formal primitive if future requirements add focus trapping or nested menus. |
| A2 | Suggested content/component directory and all token/type names are implementation discretion. | Architecture Patterns | Planner must not treat those exact paths/names as locked. |
| A3 | The product type should use optional metadata fields and a best-seller flag rather than fabricated placeholder records. | Architecture Patterns | Data shape may need adjustment when owner-approved catalog facts arrive. |
| A4 | Manual inspection is required beyond linting for focus, touch targets, and contrast. | Common Pitfalls | Accessibility defects could remain if the planner relies only on lint. |

## Open Questions

1. **Which business/product facts and images are owner-approved at implementation time?**
   - What we know: unknown public facts must be omitted or visibly marked; stock food images are prohibited. [VERIFIED: .planning/phases/01-brand-content-order-foundation/01-CONTEXT.md:16-20]
   - What's unclear: the initial catalog records, prices, descriptions, image files, and any business facts to publish.
   - Recommendation: make Phase 1 render zero unapproved records/facts and leave the content module ready for approved additions.
2. **Which exact display serif and body sans fonts are desired?**
   - What we know: the pairing is locked and `next/font/google` can self-host selected Google fonts. [VERIFIED: .planning/phases/01-brand-content-order-foundation/01-CONTEXT.md:21-25] [CITED: node_modules/next/dist/docs/01-app/01-getting-started/13-fonts.md:94-119]
   - What's unclear: the selected families and any brand licensing constraint.
   - Recommendation: select a variable serif and variable sans from the supported font API during planning, or use the existing sans until design approval.

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|-------------|-----------|---------|----------|
| Node.js | Next build/dev | ✓ | v24.14.1 | — |
| npm | Existing project scripts/dependency lockfile | ✓ | 11.11.0 | — |
| Facebook Page | CTA destination | ✓ (user-verified URL) | — | No application fallback; retain warning that Facebook login may be required. [VERIFIED: .planning/phases/01-brand-content-order-foundation/01-CONTEXT.md:34-36] |

**Missing dependencies with no fallback:** None for the planned code/config work. [ASSUMED]

**Missing dependencies with fallback:** None. [ASSUMED]

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | None installed/detected. [VERIFIED: .planning/codebase/STRUCTURE.md:71-72] |
| Config file | none — see Wave 0 |
| Quick run command | `npm run lint` |
| Full suite command | `npm run lint && npm run build` |

### Phase Requirements → Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| BRAND-01 | Approved palette and responsive shared surfaces appear. | manual visual + build | `npm run build` | ❌ Wave 0 |
| BRAND-02 | Shared header/footer/primitives render consistently. | smoke/manual | `npm run lint && npm run build` | ❌ Wave 0 |
| DATA-01 | Local content contracts typecheck. | compile-time | `npm run build` | ❌ Wave 0 |
| DATA-02 | Product rendering consumes canonical data only. | unit/manual code review | `npm run lint && npm run build` | ❌ Wave 0 |
| DATA-03 | Unknown fields display/omit truthfully. | unit/manual | `npm run lint && npm run build` | ❌ Wave 0 |
| ORDER-01 | Every CTA points to one Page URL with exact label/warning. | smoke/manual | `npm run build` | ❌ Wave 0 |

### Sampling Rate
- **Per task commit:** `npm run lint`
- **Per wave merge:** `npm run lint && npm run build`
- **Phase gate:** Build green and manually inspect desktop/mobile header, footer, placeholders, and external CTA before `/gsd-verify-work`.

### Wave 0 Gaps
- [ ] No automated test framework is required in Phase 1; Playwright smoke coverage is explicitly assigned to Phase 5. [VERIFIED: .planning/REQUIREMENTS.md:39-45]
- [ ] Add a focused manual verification checklist to the plan for exact placeholder strings, source-of-truth CTA href, `target`/safe external-link behavior, keyboard menu behavior, and mobile/desktop visual states. [ASSUMED]

## Security Domain

### Applicable ASVS Categories

| ASVS Category | Applies | Standard Control |
|---------------|---------|-----------------|
| V2 Authentication | No | No application authentication is in scope. [VERIFIED: .planning/REQUIREMENTS.md:62-69] |
| V3 Session Management | No | No application session is in scope. [VERIFIED: .planning/REQUIREMENTS.md:62-69] |
| V4 Access Control | No | No protected route/data service is in scope. [VERIFIED: .planning/REQUIREMENTS.md:62-69] |
| V5 Input Validation | No public input in Phase 1 | Do not add form/API input paths; later contact form work owns validation. [VERIFIED: .planning/ROADMAP.md:73-86] |
| V6 Cryptography | No | No secrets, payment, or cryptographic operation is required. [VERIFIED: .planning/REQUIREMENTS.md:62-72] |

### Known Threat Patterns for this stack

| Pattern | STRIDE | Standard Mitigation |
|---------|--------|---------------------|
| Unapproved/fabricated public business content | Spoofing | Canonical owner-approved content module plus required visible placeholders. [VERIFIED: .planning/REQUIREMENTS.md:13-15] |
| CTA destination substitution or drift | Tampering | Single typed Page URL export; inspect every rendered CTA href; do not accept URL from user input. [ASSUMED] |
| External-tab opener access | Elevation of privilege | Use safe external-link behavior as locked; include it in manual verification. [VERIFIED: .planning/phases/01-brand-content-order-foundation/01-CONTEXT.md:34-36] [ASSUMED] |
| Over-broad client boundary exposing later secrets | Information disclosure | Keep public shell server-rendered and do not introduce secrets or environment-based integrations in this phase. [CITED: node_modules/next/dist/docs/01-app/01-getting-started/05-server-and-client-components.md:26-31] [ASSUMED] |

## Sources

### Primary (HIGH confidence)
- Local phase decisions and requirements — source-of-truth scope, approval/placeholder policy, approved palette, and Facebook Page destination. [VERIFIED: .planning/phases/01-brand-content-order-foundation/01-CONTEXT.md:16-39] [VERIFIED: .planning/REQUIREMENTS.md:8-15]
- Local Next.js 16.3 documentation — App Router layout, server/client component, CSS, font, and accessibility guidance. [CITED: node_modules/next/dist/docs/01-app/01-getting-started/03-layouts-and-pages.md] [CITED: node_modules/next/dist/docs/01-app/01-getting-started/05-server-and-client-components.md]

### Secondary (MEDIUM confidence)
- Context7 `/vercel/next.js` — root layouts, navigation, and Server Component boundaries.
- Context7 `/tailwindlabs/tailwindcss.com` — v4 `@theme` and `@theme inline` token patterns.

### Tertiary (LOW confidence)
- None beyond the explicitly logged architecture/test implementation assumptions.

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — verified against the installed manifest and local Next/Tailwind documentation.
- Architecture: MEDIUM — framework patterns are documented; exact module names and menu mechanics remain intentional discretion.
- Pitfalls: MEDIUM — direct consequences of locked content/CTA rules and documented client-boundary/accessibility behavior.

**Research date:** 2026-08-11  
**Valid until:** 2026-09-10 (stable local-content architecture; re-check if Next/Tailwind are upgraded).
