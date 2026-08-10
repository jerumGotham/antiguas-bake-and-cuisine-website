# Project Research Summary

**Project:** Antigua's Bake & Cuisine Website  
**Domain:** Static-first boutique bakery and home-based food-business marketing site with Messenger-first ordering  
**Researched:** 2026-08-11  
**Confidence:** MEDIUM

## Executive Summary

Antigua's should launch as a fast, accessible, content-led marketing site—not a lightweight ecommerce app. The customer journey is intentionally simple: discover real products, understand the available delivery/order context, then begin an inquiry through one verified Messenger deep link. Build it with Next.js App Router Server Components, locally maintained typed content, optimized approved images, and only small client-side interaction islands.

The central recommendation is to establish approved business facts and the canonical menu before visual page work. All prices, availability, images, delivery wording, and Messenger configuration must flow from owned modules so every route remains consistent. This supports a warm premium presentation without an unnecessary CMS, database, cart, payment stack, accounts, or client data cache.

The launch risks are factual trust and conversion failure: invented or stale food/delivery claims, a broken Messenger destination, misleading photography, inaccessible warm-color styling, and client-heavy implementation. Mitigate them through an owner content-approval pass, device-tested CTAs, explicit unknown-state messaging, server-rendered core content, token-level accessibility checks, and automated route/CTA smoke tests.

## Key Findings

### Recommended Stack

Use the existing Next.js 16.3 / React 19.2 / TypeScript / Tailwind v4 foundation. This is a static-first site with local content, so direct server imports are more appropriate than API clients, a database, or global state. See [STACK.md](./STACK.md) for versions and installation details.

**Core technologies:**
- **Next.js `16.3.0` + React `19.2.8`:** App Router, static rendering, metadata, and `next/image` — keep routes and content Server Components by default.
- **TypeScript strict + Zod `^4.4.3`:** validated, inferred contracts for approved menu and site data — prevents invalid categories, prices, and missing image metadata.
- **Tailwind CSS `^4` + selective shadcn/ui:** semantic brand tokens and project-owned accessible primitives — supports a bespoke bakery aesthetic without a heavy UI suite.
- **Lucide React `^1.31.0`:** tree-shakeable, accessible iconography for navigation and CTAs.
- **Playwright `^1.62.1` (dev):** role-based desktop/mobile checks for public routes, 404, filters, and Messenger hrefs.
- **RHF + `@hookform/resolvers`:** only if a real contact form and transport contract are approved; otherwise use the Messenger handoff.

Do **not** install TanStack Query for bundled menu data. Defer Zustand unless independent client islands genuinely need shared transient state; defer CMS/database, authentication, payment, cart, checkout, and analytics entirely.

### Expected Features

The MVP must make the catalog truthful and the inquiry path obvious. Menu facts and business policies are dependencies, not copy to fill in during UI work. See [FEATURES.md](./FEATURES.md).

**Must have (table stakes):**
- Responsive home page, persistent navigation/footer, and a clear verified **Order via Messenger** CTA.
- Browsable typed menu with Pasta, Cookies, Desserts, Drinks, and Seasonal / Special Products; truthful product cards and usable category navigation.
- Dedicated delivery information and contact/order paths that state only verified facts and route unresolved questions to Messenger.
- Authentic about content, approved local imagery, per-route metadata, custom 404, and keyboard/mobile accessibility.

**Should have (competitive):**
- Warm editorial visual system built from reusable tokens and components.
- Curated menu highlights sourced from canonical data, seasonal treatment, and a concise real “how to order” flow.
- Product-context Messenger handoff only after its deep-link/prefill format is verified and wording is approved.

**Defer (v2+):**
- Cart, checkout, payment, confirmation, accounts, order history, inventory, CMS/admin tooling, delivery calculators/tracking, chatbots, reviews/scarcity claims, blog/newsletter/loyalty, and analytics.

### Architecture Approach

Use a server-first App Router shell: `src/app` owns routes, layouts, metadata, sitemap, robots, and error conventions; `src/features` owns domain components and typed content; `src/components` owns shared UI/layout; `src/lib` owns stable configuration and helpers. Core catalog HTML remains server-rendered, while mobile navigation, menu filtering, dialogs, and any future validated form are narrow client leaves. See [ARCHITECTURE.md](./ARCHITECTURE.md).

**Major components:**
1. **`features/site/content` + `MessengerCta`:** one reviewed source for business facts and externally opening order intent.
2. **`features/menu/data`, model, and selectors:** canonical approved catalog, monetary/availability rules, and pure reads such as featured/category selections.
3. **Marketing layouts and route pages:** semantic responsive composition, route metadata, and static content rendering.
4. **Client interaction leaves:** isolated mobile nav and category filter state; no network calls or ownership of catalog truth.
5. **Shared UI/layout primitives:** consistent accessible controls, containers, sections, and brand presentation without business-data lookups.

### Critical Pitfalls

See [PITFALLS.md](./PITFALLS.md) for detection criteria and phase warnings.

1. **Invented, stale, or inconsistent business facts** — maintain one owner-approved typed source; omit or visibly qualify unknowns, never fabricate prices, hours, claims, reviews, or delivery policies.
2. **Messenger as a dead end** — centralize and device-test the approved link; explain that it starts an inquiry, include product/quantity/date/area guidance, and offer only verified fallback contact.
3. **Unverified allergen, dietary, availability, or delivery promises** — publish only owner-confirmed facts; direct uncertain cases to Messenger and validate Philippine-specific compliance separately.
4. **Misleading imagery or poor image performance** — use owner-approved current product photos or intentional neutral placeholders, descriptive alt text, dimensions/aspect ratios, and only one prioritized hero image.
5. **Accessibility/mobile failure or client bloat** — contrast-test all tokens, retain focus visibility and adequate touch targets, use semantic controls, and keep pages/cards/content server-rendered.

## Implications for Roadmap

Based on research, suggested phase structure:

### Phase 1: Content, Brand Foundation, and Conversion Contract
**Rationale:** Every menu card, information page, metadata value, and CTA depends on approved facts; establishing visual/accessibility conventions now prevents duplicate or contradictory content later.
**Delivers:** typed Zod-validated site/menu models and selectors; centralized verified Messenger URL; approved asset/content inventory; Tailwind brand tokens, typography, shared layout/UI primitives, and root metadata configuration.
**Addresses:** truthful catalog foundation, persistent CTA prerequisite, warm premium visual system.
**Avoids:** fabricated facts, unverified safety/delivery claims, stock-image leakage, poor contrast, and scattered external URLs.

### Phase 2: Server-Rendered Marketing Experience
**Rationale:** With the source of truth and shared shell in place, build the complete information and discovery journey without promoting it to client-side application state.
**Delivers:** responsive home, full menu, about, contact/order, and delivery routes; header/footer; product cards and curated highlights from selectors; `not-found`, route metadata, sitemap, robots, optimized local images, and visible inquiry guidance.
**Uses:** Next Server Components, `next/image`, typed local content, Tailwind/shadcn primitives, and the `MessengerCta` intent boundary.
**Implements:** marketing layout, menu selectors/components, site CTA, and metadata-at-route-boundaries patterns.
**Avoids:** hiding core facts behind polish, duplicate raw-catalog imports, fake checkout/contact success, and fabricated SEO/schema.

### Phase 3: Progressive Interactions and Accessibility Hardening
**Rationale:** Add JavaScript only after useful no-JS/server-rendered content works, keeping interaction scope testable and small.
**Delivers:** accessible mobile navigation, category filter with All/reset/empty/active states, optional approved product-context Messenger prompt, focus/reduced-motion/touch-target refinements, and a contact form only if a real recipient transport is decided.
**Addresses:** mobile navigation, menu filtering, how-to-order clarity, and optional contextual handoff.
**Avoids:** client root layouts, global stores/query cache, inaccessible dialogs/nav, misleading no-op forms, and implied order confirmation.

### Phase 4: Launch Verification and Deployment Decision
**Rationale:** The sole revenue path and public trust claims require release validation; hosting constraints should inform—not prematurely dictate—strict static export.
**Delivers:** Playwright desktop/mobile route, 404, filter, image, and CTA-href smoke coverage; manual Messenger device tests; factual-content approval checklist; metadata/SEO validation; contrast/keyboard/zoom checks; confirmed production base URL and deployment/image strategy.
**Addresses:** functional public-site quality, reliable ordering handoff, fast stable imagery, and discoverability.
**Avoids:** dead-end external links, skipped “static site” QA, wrong canonical URLs, CLS, and premature `output: 'export'` constraints.

### Phase Ordering Rationale

- Approved content and the Messenger target are non-negotiable upstream dependencies for cards, pages, delivery guidance, structured metadata, and conversion CTAs.
- Foundation → server-rendered routes → leaf interactions preserves the recommended component boundaries and prevents global client architecture.
- Launch validation follows completed flows so tests exercise real approved content and external-link configuration; defer commerce to a separate future milestone behind the existing catalog/order seams.

### Research Flags

Phases likely needing deeper research during planning:
- **Phase 1:** Validate owner-supplied Messenger link format, business/contact/delivery facts, image rights/provenance, and any Philippine food-business or allergen/legal obligations. These are business decisions, not solvable by framework research.
- **Phase 3:** Research only if an actual form transport, a supported Messenger product-prefill scheme, or a dialog/lightbox implementation is approved; define exact accessibility and failure contracts first.
- **Phase 4:** Confirm chosen host, production domain, image strategy, and whether strict static export is required before configuring it; validate factual JSON-LD only if verified address/name data exists.

Phases with standard patterns (skip research-phase):
- **Phase 2:** Next.js App Router Server Components, local typed data selectors, route metadata, `next/image`, and semantic marketing layouts are well documented and directly applicable.

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | MEDIUM | Official Next/Tailwind/library documentation and current package checks support the recommendation; lockfile resolution and host choice remain project-specific. |
| Features | MEDIUM | Strongly grounded in explicit project scope and official trust guidance, but no verified competitor or customer research was available. |
| Architecture | MEDIUM | Official Next 16.3 composition/static-export guidance supports the server-first approach; source layout and future seams are applied design judgment. |
| Pitfalls | MEDIUM | Repeated domain risks are well supported by official accessibility/SEO guidance, but local regulatory and business facts require direct validation. |

**Overall confidence:** MEDIUM

### Gaps to Address

- **Approved business source material:** obtain owner-approved product names/prices/sizes/statuses, delivery/pickup policy, contact details, business story, and image asset ledger before public launch.
- **Messenger behavior:** verify the exact production destination and whether an editable prefilled product message is technically supported and approved; test logged-in/logged-out mobile and desktop paths.
- **Hosting and public URL:** decide hosting, production base URL, image handling, and strict-static-export requirement before final deployment/SEO setup.
- **Regulatory/safety claims:** validate Philippine-specific requirements and only publish allergen, dietary, labeling, address, hours, or food-safety statements supplied and maintained by the owner.
- **Demand evidence:** revisit CMS, analytics, native commerce, and delivery automation only after real customer/order volume proves the Messenger journey inadequate.

## Sources

### Primary (HIGH confidence)
- [Next.js App Router documentation](https://nextjs.org/docs/app) — Server/Client boundaries, metadata, images, routing, and static-first composition.
- [Tailwind CSS Next.js and theme documentation](https://tailwindcss.com/docs/installation/framework-guides/nextjs) — v4 CSS-first setup and semantic theming.
- [Google Search Central: helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) — factual, trustworthy public content guidance.
- [Google LocalBusiness structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business) — factual structured-data constraints.
- [W3C WCAG 2.2 Target Size](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) — mobile target-size accessibility guidance.

### Secondary (MEDIUM confidence)
- [shadcn/ui Next.js installation](https://ui.shadcn.com/docs/installation/next), [Lucide React](https://lucide.dev/guide/packages/lucide-react), [Zod](https://zod.dev/), [React Hook Form resolvers](https://github.com/react-hook-form/resolvers), and [Playwright](https://playwright.dev/docs/locators) — implementation patterns and dependencies.
- [STACK.md](./STACK.md), [FEATURES.md](./FEATURES.md), [ARCHITECTURE.md](./ARCHITECTURE.md), and [PITFALLS.md](./PITFALLS.md) — synthesized project research, 2026-08-11.

### Tertiary (LOW confidence)
- [FDA food-allergy guidance](https://www.fda.gov/food/food-labeling-nutrition/food-allergies) — general risk context only; not Philippine legal advice.
- No competitor audit, customer interviews, or verified local operational/regulatory assessment was supplied; treat related prioritization as a scoped MVP recommendation pending owner validation.

---
*Research completed: 2026-08-11*  
*Ready for roadmap: yes*
