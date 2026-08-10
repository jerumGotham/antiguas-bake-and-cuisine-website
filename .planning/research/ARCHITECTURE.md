# Architecture Patterns

**Domain:** Static-first boutique bakery marketing website with Messenger-first ordering
**Researched:** 2026-08-11
**Confidence:** MEDIUM — current Next.js 16.3 official documentation was cross-checked; folder and domain-boundary recommendations are applied design judgment.

## Recommended Architecture

Use a **server-first App Router shell with feature-owned UI and typed local domain data**. Render all public routes and product content as Server Components. Place the small pieces that need browser state behind explicit Client Component boundaries: mobile-nav disclosure, menu category filtering, image/modal state, and eventually a cart. Do not make a global client provider, query cache, database, API layer, or commerce state machine part of the MVP.

Keep `src/app` responsible for URL composition, metadata, and route-level loading/error/not-found conventions. Keep reusable domain implementation in `src/features`, shared visual primitives in `src/components`, and stable cross-feature types/configuration in `src/lib`. A product record must never be inferred from a card: menu selectors read the canonical typed data and views receive typed props.

```text
Browser
  └─ Next route (Server Component: page/layout/metadata)
       ├─ local content/selectors (server-safe TypeScript modules)
       ├─ feature Server Components (sections, menu grids, product cards)
       └─ narrow Client Components (interactive controls only)
             └─ local component state / future UI Zustand slice

Future only, behind existing feature seams:
  catalog repository → API/CMS/database
  order-intent adapter → Messenger → order API/payment provider
  cart/account feature → authenticated server data + TanStack Query
```

### Suggested Source Layout

```text
src/
  app/
    (marketing)/
      layout.tsx                 # marketing shell: Header, main, Footer
      page.tsx                   # home
      menu/page.tsx
      about/page.tsx
      contact/page.tsx
      delivery/page.tsx
      not-found.tsx
    layout.tsx                   # fonts, root metadata, global CSS
    sitemap.ts
    robots.ts
  features/
    site/
      components/                # header, footer, nav links, Messenger CTA
      content.ts                 # verified business identity/contact values
    menu/
      data/products.ts           # only approved catalog records
      model.ts                   # Product, Category, Money, Availability types
      queries.ts                 # getProducts/getFeatured/getBySlug selectors
      components/                # MenuGrid, ProductCard, CategoryFilter
    home/components/             # Hero, featured menu, story, delivery teaser
    about/components/
    contact/
      components/                # contact details, optional ContactForm client island
      schema.ts                  # Zod contact schema; no delivery transport yet
    delivery/components/
  components/
    ui/                          # shadcn/ui-derived primitives; owned wrappers
    layout/                      # Container, Section, PageHeading
  lib/
    metadata.ts                  # site-wide metadata helpers
    routes.ts                    # typed internal paths
    utils.ts
  styles/                        # Tailwind tokens/global design primitives as needed
public/
  images/                        # approved local images; no unverified visual claims
```

Use the `(marketing)` group only for organization; it must not alter public URLs. Add a future `(commerce)` group later, not now, when cart/checkout/account routes need a distinct layout and authorization boundary.

### Component Boundaries

| Component | Responsibility | Communicates With |
|---|---|---|
| `app/layout.tsx` | Root document, font loading, global metadata defaults, global styles | `(marketing)` layout, metadata helpers |
| `(marketing)/layout.tsx` | Shared landmark structure and static site chrome | `site` feature Server Components; mobile nav island |
| Route `page.tsx` | Compose a page, set route metadata, obtain typed local content through feature selectors | Corresponding feature components |
| `menu/data` + `model` | Canonical approved catalog, category definitions, stable IDs/slugs and monetary representation | `menu/queries`; future catalog repository adapter |
| `menu/queries.ts` | Pure read/select API so views do not know storage shape | Server pages and feature components |
| Menu Server Components | Render semantic category/product content and links from selected data | Product card; optional filter island |
| `CategoryFilter` (client) | URL/local selected-category UI only; receives serializable products/categories | Server-rendered menu grid or client-filtered list; no network calls |
| `MessengerCta` | One owned construction point for verified Messenger order URL, label, and accessible external-link behavior | Site content configuration; every feature CTA |
| Contact form island (client, optional) | Field focus, validation and error announcements using RHF + Zod | Contact schema; a future submission adapter |
| Shared `ui` / layout primitives | Presentational accessibility and visual consistency, no business data lookup | Feature components |

### Data Flow

1. Staff-approved product, contact, and delivery facts are entered as typed local data. Unknown facts remain a clearly labeled placeholder or are omitted; they do not receive invented defaults.
2. A Server Component route calls a feature selector such as `getFeaturedProducts()` or `getProductsByCategory()`. The selector returns a readonly, serializable view model derived from canonical records.
3. Server Components render HTML, metadata, and `next/image` product imagery. Static content is prerendered at build time where hosting/configuration permits.
4. If a page needs interaction, it passes the minimal serializable data to a leaf Client Component. For example, the menu page passes category IDs and card view models to `CategoryFilter`; it must not promote the entire page or layout to the client graph.
5. CTA activation opens the configured Messenger link. There is no local order persistence, payment mutation, or simulated order confirmation in the MVP.
6. Later, preserve selector call sites: exchange the local product module behind a `CatalogRepository`-shaped adapter, introduce a true order endpoint, then hydrate only mutation/server data with TanStack Query. A future cart's ephemeral UI state belongs in a scoped Zustand slice; persisted order state stays server-owned.

## Patterns to Follow

### Pattern 1: Server Page + Client Leaf
**What:** Page composition and data selection remain server-side; only an interaction boundary is client-side.

**When:** Use for mobile navigation, menu filtering, dialogs/lightboxes, and future add-to-cart controls.

**Example:**
```typescript
// src/app/(marketing)/menu/page.tsx — Server Component
import { getMenuView } from '@/features/menu/queries'
import { MenuBrowser } from '@/features/menu/components/menu-browser'

export const metadata = { title: 'Menu' }

export default function MenuPage() {
  const menu = getMenuView()
  return <MenuBrowser categories={menu.categories} products={menu.products} />
}

// src/features/menu/components/menu-browser.tsx — Client Component
'use client'

export function MenuBrowser({ categories, products }: MenuBrowserProps) {
  // selectedCategory is strictly presentational UI state.
  // It must not fetch, own catalog truth, or hold checkout state.
}
```

### Pattern 2: Typed Local Catalog Behind Selectors
**What:** Define product facts once in `features/menu/data`, validate them with TypeScript (and optionally a build-time Zod assertion), then expose named read selectors.

**When:** Use throughout MVP while products/prices are curated locally and real information is still being gathered.

**Example:**
```typescript
export type Product = Readonly<{
  id: string
  slug: string
  category: 'pasta' | 'cookies' | 'desserts' | 'drinks' | 'seasonal'
  name: string
  price: { amount: number; currency: 'PHP' }
  image: { src: string; alt: string }
  status: 'available' | 'seasonal' | 'unavailable'
}>

export const getFeaturedProducts = () =>
  products.filter((product) => product.status !== 'unavailable').slice(0, 4)
```

Do not expose unsafely mutable arrays or distribute raw price strings. Keep a numeric minor/unit amount plus PHP currency, and format it at the view edge with `Intl.NumberFormat`.

### Pattern 3: Intent Adapters, Not Premature Commerce
**What:** Model a customer action as an intent boundary even though the only current implementation is a Messenger deep link.

**When:** Use for all order CTAs and the optional contact form submission handoff.

**Example:**
```typescript
export type OrderIntent = Readonly<{
  productIds?: readonly string[]
  source: 'hero' | 'menu' | 'contact'
}>

export interface OrderStartAdapter {
  getHref(intent: OrderIntent): string
}

export const messengerOrderStart: OrderStartAdapter = {
  getHref: () => siteContent.messengerOrderUrl,
}
```

The MVP adapter can intentionally ignore product IDs until a verified Messenger prefill format is available. Later implementations can map the same intent to an order draft API without rewriting every CTA.

### Pattern 4: Metadata at Route Boundaries
**What:** Keep static global metadata in the root layout and route-specific `Metadata` exports beside pages. Add `sitemap.ts` and `robots.ts` as first-class routes.

**When:** Build alongside public page routes, before launch.

**Example:**
```typescript
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Delivery Information',
  description: 'Delivery details for Antigua\'s Bake & Cuisine.',
}
```

Never put metadata exports in a Client Component; Next.js supports them in Server Components only.

## Anti-Patterns to Avoid

### Anti-Pattern 1: A Client Root Layout
**What:** Adding `'use client'` to a root/marketing layout so navigation or a provider can use hooks.

**Why bad:** It pulls directly rendered imports into the client module graph, turns static chrome into shipped JavaScript, and makes metadata/server composition harder.

**Instead:** Keep layouts server-rendered and mount a leaf `MobileNav` or narrow provider only where interaction is needed.

### Anti-Pattern 2: UI Components Importing the Raw Catalog
**What:** Product cards, home sections, and route pages each import and filter `products.ts` independently.

**Why bad:** Featured status, availability, category interpretation, and later storage migration drift across screens.

**Instead:** Use menu query/selectors as the only read boundary and pass typed view data down.

### Anti-Pattern 3: Fake Contact/Checkout Completion
**What:** Displaying a success confirmation without a delivery mechanism, or building API routes/payments solely for anticipated future use.

**Why bad:** It misrepresents the business flow and conflicts with the Messenger-first scope. Strict static export also cannot support Server Actions, request-dependent route handlers, cookies, or payment callbacks.

**Instead:** Provide verified Messenger CTA/contact details. Add a submission adapter only with a real transport and success/error contract.

### Anti-Pattern 4: Enabling `output: 'export'` by Default Without a Hosting Decision
**What:** Treating “static-first” as a mandatory strict static export on day one.

**Why bad:** It imposes unsupported dynamic-server constraints and requires a custom image loader for `next/image` optimization. It can be appropriate for a pure static host, but it is not needed to prerender static routes.

**Instead:** Start with static local content and Server Components on the normal Next.js deployment model. Choose `output: 'export'` only after the host and image delivery strategy are confirmed; keep all data/CTA seams compatible with that choice.

## Scalability Considerations

| Concern | At 100 users | At 10K users | At 1M users |
|---|---|---|---|
| Catalog reads | Local typed module; build-time rendering | CMS/database repository with cached server reads and explicit revalidation | CDN-cached catalog, robust repository, inventory-aware availability service |
| Images | Local approved images with dimensions/alt text | CDN/remote image pattern and image governance | Dedicated image pipeline, transformations, responsive quality monitoring |
| Menu interaction | Local filter state; no global store | URL-driven filter state for shareability; keep static result rendering | Search/index service only when catalog size and query demand justify it |
| Ordering | Messenger deep link | Order API, validation, server-owned drafts; payment provider adapter | Queue/idempotency, payment webhooks, fulfillment/inventory integration |
| Accounts | Not built | Auth boundary in `(commerce)` and account repository | Session security, privacy controls, auditability, rate limiting |

## Build-Order Implications

1. **Foundation and design contracts:** establish `src` aliases, feature folder conventions, Tailwind brand tokens, typography, shared layout/UI primitives, asset policy, and root metadata. This prevents each page inventing its own visual and accessibility conventions.
2. **Canonical content model:** create `site` content plus strongly typed menu types/data/selectors; collect/label business facts and images. Build this before pages because every route and CTA depends on trusted content.
3. **Server-rendered marketing shell and routes:** implement root/marketing layouts, header/footer, home, menu, about, contact/order, delivery, and custom not-found as semantic responsive Server Components. Add per-route metadata, sitemap, robots, and image alt text in this phase.
4. **Narrow interactions:** add the mobile nav, menu filter, optional image dialog, and contact validation as independent client islands. Test keyboard flow, focus management, reduced-motion behavior, and small viewport layout without expanding client boundaries.
5. **Launch verification:** validate all real/placeholder labels, Messenger paths, metadata, responsive behavior, Lighthouse-relevant image sizing, and Playwright critical journeys. Decide deployment/static-export configuration only after confirming host and image-loader requirements.
6. **Future commerce milestone (explicitly separate):** replace data adapters, then introduce orders/payment/accounts one seam at a time. Do not mix this with the static marketing launch.

## Sources

- Next.js, [Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components) — MEDIUM confidence (official documentation, version 16.3.0, updated 2026-07-29).
- Next.js, [Project structure and organization](https://nextjs.org/docs/app/getting-started/project-structure) — MEDIUM confidence (official documentation, version 16.3.0, updated 2026-07-21).
- Next.js, [How to create a static export](https://nextjs.org/docs/app/guides/static-exports) — MEDIUM confidence (official documentation, version 16.3.0, updated 2026-08-09).
- Next.js, [Metadata and OG images](https://nextjs.org/docs/app/getting-started/metadata-and-og-images) — MEDIUM confidence (official documentation, version 16.3.0, updated 2026-06-01).
- React Hook Form Resolvers, [Zod resolver reference](https://github.com/react-hook-form/resolvers/blob/master/_autodocs/api-reference/zod-resolver.md) — MEDIUM confidence (Context7 indexed documentation).
