# Technology Stack

**Project:** Antigua's Bake & Cuisine Website  
**Researched:** 2026-08-11  
**Overall confidence:** MEDIUM — recommendations are based on current official documentation retrieved through Context7 and npm registry version checks; exact package resolution remains the lockfile's responsibility.

## Recommended Stack

### Core Framework

| Technology | Version | Purpose | Why |
|---|---:|---|---|
| Next.js | `16.3.0` (existing) | App Router, routing, build, static rendering, metadata, image optimization | Keep the established foundation. Make every route/layout a Server Component by default; static local content needs no fetch layer or API. Put `'use client'` only on leaf interactions (mobile navigation, menu filter, dialog, form). |
| React / React DOM | `19.2.8` (existing) | UI runtime | Keep the starter versions aligned with Next 16.3. Do not introduce a second UI runtime or legacy Pages Router conventions. |
| TypeScript | `^5` (existing) | Content and UI contracts | Use `strict` mode and derive menu-data types from Zod schemas (`z.infer`). This makes invalid categories, unavailable prices, and missing image alt text visible at build time. |
| Tailwind CSS | `^4` (existing) | Responsive styling and design tokens | Use the v4 CSS-first pipeline already present (`@import "tailwindcss"`). Define Antigua's semantic brand tokens in `globals.css` with `@theme`/CSS variables; build components against `background`, `foreground`, `primary`, etc., rather than scattering hex values. |
| shadcn/ui | current CLI, generated source | Accessible primitives owned by the project | Initialize the current CLI for Next + Tailwind v4 and add only needed components (`button`, `sheet`, `dialog`, `accordion`, `input`, `textarea`, `label`, `separator`). Its components are copied into the repo, so customize their warm bakery presentation directly rather than treating it as a black-box dependency. Keep CSS variables enabled. |
| Lucide React | `^1.31.0` | Small, consistent UI icons | Import named icons only (`Menu`, `X`, `ArrowRight`, `MapPin`, `MessageCircle` or the approved equivalent); its ESM imports are tree-shakeable. Icons inside labeled controls remain decorative; icon-only controls need an accessible label on the button. |

### Database

| Technology | Version | Purpose | Why |
|---|---:|---|---|
| None | — | MVP content storage | Keep menu and business data as versioned TypeScript modules under `src/features/menu/data/` (or equivalent), validated by Zod at module load/build time. The product explicitly has no backend, database, accounts, checkout, or mutable order state. |

### Infrastructure

| Technology | Version | Purpose | Why |
|---|---:|---|---|
| Static-first Next deployment | platform-selected | Delivery | Build deployable static/mostly-static pages. Use local, statically imported product images with `next/image`: Next can derive dimensions and blur data, reducing layout shift. Do not add remote image hosts until real remote assets require an explicit allowlist. |
| Next Metadata API | bundled with Next | SEO and sharing | Give every public route a title, description, canonical URL when known, and route-appropriate Open Graph metadata. Build `not-found.tsx` for the requested 404 page. This is simpler and more reliable than a third-party SEO package. |
| Messenger deep link | business-configured URL | Order handoff | Centralize the supplied Messenger URL in typed site configuration and use normal accessible `<a>`/Link CTAs. No webhooks, API route, mutation, analytics event, checkout, or cart belongs in the MVP. |

### Supporting Libraries

| Library | Version | Purpose | When to Use |
|---|---:|---|---|
| `zod` | `^4.4.3` | Runtime validation plus inferred TypeScript contracts | Install now. Define `menuItemSchema`, category enum, and site/contact configuration schemas. Parse trusted local data once during module initialization; use `safeParse` only when accepting values that may be malformed. |
| `react-hook-form` | `^7.85.0` | Client form field state and error display | Install when the contact/order-request form is actually built. The form component is a small `'use client'` island; its page remains server-rendered. Do not submit to a nonexistent API. Its successful action should be the specified Messenger handoff or a clearly declared unavailable state. |
| `@hookform/resolvers` | `^5.7.1` | Zod bridge for React Hook Form | Install together with RHF. Use `zodResolver(contactSchema)` and schema-inferred values; this prevents duplicate validation rules. |
| `zustand` | `^5.0.14` | Shared ephemeral client UI state | **Defer by default.** Use local `useState` for a single mobile menu, modal, or page-local filter. Add Zustand only when multiple separate client islands must share state (for example, persistent menu filters across controls). Then use a typed vanilla store factory plus client Context provider, initialized once per provider. Do not persist MVP state to `localStorage`; persisted values can create hydration mismatches. |
| `@tanstack/react-query` | `^5.101.4` | Async remote/server state cache | **Do not install for this MVP.** It solves async query functions, caching, refetching, and loading/error states; local bundled menu data has none of those concerns. Add it only with a genuine remote API/CMS/inventory endpoint, behind a narrowly scoped client provider. Never wrap static local data in `useQuery`. |
| `@playwright/test` | `^1.62.1` | End-to-end responsive and handoff verification | Install as a dev dependency now. Configure a `webServer` around `next start` (after a production build) and a `baseURL`. Test desktop Chromium plus at least one mobile device profile; add WebKit when release workflow runs it. Prefer role/name locators and assert the Messenger CTA's URL, not Messenger's external UI. |
| `clsx`, `tailwind-merge`, `class-variance-authority` | `^2.1.1`, `^3.6.0`, `^0.7.1` | shadcn-compatible class composition and visual variants | Let the shadcn CLI add these helpers as required. Use its `cn()` utility and component variants for buttons/badges; avoid bespoke conditional class-string concatenation. |

## Implementation Patterns

### Static, typed content boundary

1. Put approved menu/business facts in a feature-local TypeScript data module; do not embed facts across page JSX.
2. Represent unavailable information as an explicit placeholder type/value, never fabricated price, delivery promise, social link, or business claim.
3. Validate the local export against a Zod schema and derive the `MenuItem` type from it. Pages consume the typed export directly in Server Components.
4. Pass only the minimal serializable props required by interactive children, such as category IDs and prefiltered items.

### Server-first component boundary

- Server: routes, sections, cards, menu grids, metadata, static configuration, and images.
- Client leaf: navigation disclosure, menu filtering/sorting, sheet/dialog behavior, RHF contact form, and any future temporary cart UI.
- Keep providers out of `app/layout.tsx` unless a feature demonstrably needs them. In particular, do not install a root React Query provider for a site with no server state, and do not make the entire layout client-rendered to support one button.

### Responsive and accessible verification

Write Playwright smoke tests for every public route, the responsive navigation, visible product cards/categories, the 404 route, and each Messenger CTA. Use `getByRole()` with accessible names; avoid brittle CSS/XPath selectors. Run the critical suite at desktop Chromium and a mobile viewport from Playwright's device descriptors. Test external handoff by inspecting the link `href`/target rather than navigating into an unowned Messenger domain.

## Alternatives Considered

| Category | Recommended | Alternative | Why Not |
|---|---|---|---|
| Content | Local typed modules + Zod | CMS/database/Prisma | Adds credentials, authoring workflow, operations, and failure modes before the business has stable approved content; explicitly out of scope. |
| Data fetching | Direct server imports | TanStack Query for menu data | No API, latency, refetching, or server state exists. It adds a client provider and JavaScript without a benefit. |
| UI state | Local React state, optional narrow Zustand store | Global Zustand from day one | The planned interactions are isolated. A global store becomes accidental architecture and complicates App Router SSR if persisted. |
| Forms | RHF + Zod only at an actual client form | Server Action/API-route submission | There is no backend recipient/workflow; inventing one contradicts Messenger-first ordering. |
| Icons | Named Lucide imports | Full icon font, arbitrary inline SVG set | Icon fonts add render/accessibility issues; arbitrary SVGs undermine consistency. |
| UI kit | Selective shadcn source components | Large opaque component suite | The brand needs custom boutique styling, low JS, and ownership of markup. Use shadcn primitives as implementation material, not default visual design. |
| Testing | Playwright role-based E2E smoke tests | Screenshot-only/manual verification | The requested responsive and functional verification needs repeatable navigation, link, route, and accessibility checks. |

## Installation

```bash
# UI, local content validation, and form validation
npm install lucide-react zod react-hook-form @hookform/resolvers

# Add only if a shared client UI state requirement emerges
npm install zustand

# Add only when a real remote API/CMS/inventory endpoint emerges
npm install @tanstack/react-query

# End-to-end test runner
npm install -D @playwright/test
npx playwright install --with-deps

# Initialize and selectively add project-owned shadcn components
npx shadcn@latest init
npx shadcn@latest add button sheet dialog accordion input textarea label separator
```

Do not pin a hand-copied shadcn package version: its CLI writes components and their exact supporting dependencies into this application. Commit the generated source and lockfile. Before running the CLI, inspect its proposed changes and preserve Tailwind v4's CSS-first configuration.

## Sources

All evidence below was retrieved from official documentation through Context7; provider confidence is **MEDIUM** after verification. Package versions marked above were checked from the npm registry on 2026-08-11 and should be recorded in the lockfile rather than treated as a perpetual guarantee.

- Next.js App Router: Server/Client composition, route pages, static local images, and metadata pattern — https://nextjs.org/docs/app
- Tailwind CSS v4 Next.js installation and CSS-first theme tokens — https://tailwindcss.com/docs/installation/framework-guides/nextjs and https://tailwindcss.com/docs/theme
- shadcn/ui Tailwind v4 / Next initialization and CSS-variable theming — https://ui.shadcn.com/docs/installation/next and https://ui.shadcn.com/docs/tailwind-v4
- Lucide React named imports and accessibility guidance — https://lucide.dev/guide/packages/lucide-react and https://lucide.dev/guide/advanced/accessibility
- TanStack Query React overview and Next rendering guidance — https://tanstack.com/query/latest/docs/framework/react/overview
- Zustand Next.js guide and persistence/hydration guidance — https://zustand.docs.pmnd.rs/guides/nextjs and https://zustand.docs.pmnd.rs/integrations/persisting-store-data
- React Hook Form resolver integration — https://github.com/react-hook-form/resolvers
- Zod schemas and inferred TypeScript types — https://zod.dev/
- Playwright projects, web server, and role-based locators — https://playwright.dev/docs/test-projects, https://playwright.dev/docs/test-webserver, and https://playwright.dev/docs/locators
