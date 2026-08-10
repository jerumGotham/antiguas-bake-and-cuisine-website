# Domain Pitfalls

**Domain:** Boutique bakery and home-based food business marketing website
**Researched:** 2026-08-11

## Critical Pitfalls

### Pitfall 1: Publishing invented, stale, or internally inconsistent business facts
**What goes wrong:** The site presents placeholder menu items, prices, availability, delivery areas, address, hours, lead times, or contact details as if they were real. A price on a card can also diverge from the price in a Messenger conversation.
**Why it happens:** A polished visual launch is prioritized over a content approval workflow, and copy/data is duplicated across pages rather than being derived from a single approved source.
**Consequences:** Lost orders, customer disappointment, reputational harm, and an especially damaging trust gap for a home-based business whose customer cannot walk in to verify details.
**Prevention:** Keep all products, prices, categories, and availability labels in one typed local data module; require an owner approval pass before publishing; render missing fields as clearly labeled placeholders during development only. Do not publish an exact location, operating hours, delivery promise, dietary claim, or customer review until supplied and approved. Treat social proof, founding story, “best seller,” and freshness claims as factual claims, not decorative copy.
**Detection:** Content includes lorem ipsum, generic stock copy, unapproved testimonials, different prices across pages, a broken/unknown Messenger target, or uncited claims such as “same-day delivery,” “organic,” “gluten-free,” or “made fresh daily.”

### Pitfall 2: Making Messenger handoff a dead end
**What goes wrong:** “Order now” opens an ambiguous profile, a login wall, an invalid URL, or a generic chat with no indication of what to send. On mobile, the action can be hard to reach or confused with a native checkout that does not exist.
**Why it happens:** The CTA is designed as a visual button instead of a tested cross-device order journey; no order scope, fulfillment information, or fallback contact path is established.
**Consequences:** The only revenue path fails after the customer has browsed the menu; customers abandon rather than compose a message from scratch.
**Prevention:** Use one approved Messenger deep link consistently, give its destination an accessible name, and test it on iOS/Android and desktop while logged in and logged out. Put a persistent but non-obscuring order CTA on small screens; near each menu CTA, state the next step and the information to include (item, quantity, requested date, delivery/pickup area). Provide an honest fallback only when a verified alternate contact exists. State that Messenger begins an inquiry/order request—not that an order is confirmed or paid.
**Detection:** CTA has not been manually opened on real mobile and desktop devices; it opens an error or wrong account; it lacks visible next-step copy; or any screen says “checkout,” “cart,” “confirmed,” or “payment” although the MVP has none.

### Pitfall 3: Overpromising food safety, allergens, availability, and delivery
**What goes wrong:** Menu badges imply allergen-free, vegan, halal, safe-for-allergy, or always-available products without validated ingredients, cross-contact controls, or production capacity. Delivery language implies coverage, fees, dates, or fulfillment guarantees that have not been set.
**Why it happens:** Common marketplace filters/badges are copied into the design, while a home kitchen’s ingredient changes and shared equipment are not modeled in content governance.
**Consequences:** Potential customer safety risk, cancellations, disputes, and severe loss of credibility. This is not a UI-only concern.
**Prevention:** Omit dietary and allergen claims unless the owner supplies verified information and accepts a maintenance process. If the business cannot confirm cross-contact conditions, invite customers to message before ordering rather than using a “free-from” badge. Use only approved delivery coverage, timing, fees, pickup, and pre-order wording; otherwise say that availability and delivery details are confirmed in Messenger. Validate Philippine-specific food-business, labeling, and home-based operation requirements with the owner/local authority before launch; US FDA material below is general risk context, not Philippine legal advice.
**Detection:** Unverified dietary badges, “may contain” boilerplate used instead of actual ingredient knowledge, claims such as “safe for allergies,” delivery promises without owner confirmation, or seasonal products shown as permanently orderable.

### Pitfall 4: Treating authentic photography as optional
**What goes wrong:** The premium presentation relies on unrelated stock imagery, heavily edited images that misrepresent portion/finish, or mismatched imagery across product cards. Image alt text then repeats marketing copy or omits meaningful product information.
**Why it happens:** Design needs imagery before the business can supply it, so visual placeholders leak into launch.
**Consequences:** The site looks generic or deceptive; customers cannot confidently match the pictured item to the actual product; large images also become the primary performance cost.
**Prevention:** Prefer real, current product photos. Where no real photo exists, use a clearly intentional neutral placeholder or a text-led card—not a lookalike stock food image. Maintain an asset checklist linking each image to its item and owner approval. Give meaningful images concise descriptive alt text; use empty alt text only for purely decorative flourishes. Publish images at the rendered aspect ratio, with known intrinsic dimensions and compressed modern formats.
**Detection:** Reverse-image/asset provenance is unknown; a photo depicts a different item or serving size; product cards crop key content; layout shifts while images load; alt text says “image,” duplicates adjacent text, or invents ingredients.

### Pitfall 5: Letting the warm visual system fail accessibility and mobile usability
**What goes wrong:** Cream, caramel, and brown combinations are used for small text or focus states with insufficient contrast; mobile menu/filter/close icons have tiny or overlapping hit areas; the keyboard focus indicator is hidden; modal/navigation focus gets lost.
**Why it happens:** Palette fidelity is evaluated only visually at a desktop viewport, and custom components replace native semantics without interaction testing.
**Consequences:** Customers using glare-prone phones, keyboards, screen readers, or motor accommodations cannot browse or start an order; legal and quality risk rises.
**Prevention:** Test every foreground/background token—not only primary text—for WCAG AA contrast, including hover, active, disabled, error, and focus states. Retain visible `:focus-visible`; use semantic landmarks, one logical H1, ordered headings, real buttons for actions, and native links for navigation. Meet WCAG 2.2’s 24×24 CSS-pixel target minimum (or its spacing exception); target roughly 44–48 px for primary mobile controls such as the Messenger CTA and menu toggle. Test keyboard traversal, screen-reader names, zoom/reflow, and reduced motion.
**Detection:** Color alone communicates category/validation; tab focus is invisible or enters hidden mobile navigation; controls are `<div>`/`<span>` click handlers; icon-only controls lack names; or adjacent touch targets are under 24 px/too close.

### Pitfall 6: Turning a static marketing site into a client-heavy application
**What goes wrong:** The home/menu pages ship unnecessary client components, global stores, query libraries, animations, carousels, modal image galleries, or a future cart. The first render waits for JavaScript before menu content and CTA work.
**Why it happens:** Future commerce architecture is prematurely implemented or generic dashboard patterns are copied into a small static site.
**Consequences:** Slower mobile loads, poorer Core Web Vitals, more hydration bugs, and needless maintenance without MVP value.
**Prevention:** Default to Server Components and typed local data. Confine `'use client'` to genuinely interactive units such as mobile navigation and menu filtering; keep static page, menu card, metadata, and content rendering server-side. Do not introduce TanStack Query, Zustand, cart state, APIs, authentication, or payment abstractions until a real backend/order requirement exists. Use `next/image` with accurate `width`/`height` or `fill` plus a stable aspect-ratio container; prioritize only the true above-the-fold hero/LCP image and lazy-load the remainder. Test a throttled mid-range mobile profile, not only local development.
**Detection:** Most route/layout files start with `'use client'`; a static page requires a loading skeleton; bundles contain unused commerce/data libraries; a hero image causes CLS or all images are marked `priority`; mobile Lighthouse/Web Vitals regress after decorative features.

### Pitfall 7: Shipping SEO and structured data that are incomplete or fabricated
**What goes wrong:** Pages share a generic title/description, menu content is hidden behind client-only interactions, canonical/base URL is wrong, social previews are missing, or LocalBusiness JSON-LD contains placeholders, reviews, address, hours, telephone, or geo data not present and verified on the site.
**Why it happens:** SEO is left for the end, and schema is treated as a way to obtain rich results rather than a representation of visible, factual business data.
**Consequences:** Weak local discovery, misleading snippets, technical warnings/manual-action risk, and a credibility gap when Search/Maps details conflict with the site. Google explicitly does not guarantee rich-result display.
**Prevention:** Establish production domain/base URL before metadata work. Give every public route a unique, accurate title, description, canonical URL, Open Graph/Twitter image, and indexability decision; provide `sitemap.xml`, `robots.txt`, and a custom 404. Render core menu text and ordering information in HTML. Add `LocalBusiness`/most-specific applicable schema only after verified name and address are available; include only facts on the page, point `menu` to the real menu URL, and validate with Google Rich Results Test plus URL Inspection after deployment. Never add self-authored aggregate ratings/reviews unless the site actually collects them under Google’s guidelines.
**Detection:** Placeholders appear in metadata/schema; production pages return development URLs; menu items require JavaScript to exist in page source; all pages share titles; sitemap/robots/404 are absent; Rich Results Test errors or Search Console reports issues.

## Moderate Pitfalls

### Pitfall 1: Hiding essential order information behind visual polish
**What goes wrong:** Long hero sections, carousels, and decorative motion push menu category, price, pre-order lead time, delivery/pickup scope, and order CTA below the fold.
**Prevention:** Design each route around the customer’s decision sequence: what is offered → price/qualification → availability/fulfillment → Messenger action. Keep the primary CTA visible early and repeat it after meaningful menu sections; use readable menu cards rather than a “view more” maze.

### Pitfall 2: Ambiguous menu model and category filters
**What goes wrong:** Categories are inconsistent (for example drinks vs desserts), products cannot have clear seasonal availability, prices lack units/size, and filters hide results without a reset or announcement.
**Prevention:** Define a strict product schema with stable ID, approved category, name, price display/unit, availability, optional verified description, image, and ordering status. Make filters progressively enhance server-rendered results; expose a visible active state, reset control, and empty state. Do not create product-detail routes merely to compensate for incomplete menu cards.

### Pitfall 3: Misleading forms and no-op contact controls
**What goes wrong:** A contact/order form appears to submit to the business but has no backend, email service, or defined success/failure behavior.
**Prevention:** For this MVP, favor a direct Messenger handoff. If a non-submitting contact form is retained for future UI work, do not expose it publicly. When a real form is approved, use native labels, meaningful validation/error associations, a real delivery endpoint, rate limiting, privacy notice, and tested success/error states; client validation alone is not delivery.

### Pitfall 4: Missing resilience for external links and content updates
**What goes wrong:** Social/Messenger URLs, maps, phone links, and local images break after an account or asset change; direct navigation to a route returns an unbranded error.
**Prevention:** Centralize external URLs and business facts in a reviewed config module, add link checks and Playwright coverage for every CTA and 404, and maintain an owner handover checklist for menu/content updates. Use descriptive fallback UI for missing optional image/content instead of throwing at render time.

## Minor Pitfalls

### Pitfall 1: Excessive motion, autoplay media, and decorative effects
**What goes wrong:** Parallax, autoplay video, cursor effects, and animated carousels make the experience feel less premium, distract from ordering, and cost bandwidth.
**Prevention:** Use restrained CSS transitions, respect `prefers-reduced-motion`, avoid autoplay video for MVP, and require a conversion or content reason for each animation.

### Pitfall 2: Building a broad cookie/privacy interface without a data footprint
**What goes wrong:** The site presents a generic consent banner/privacy claims while it has no analytics or accounts, or embeds third-party content without reflecting that data transfer.
**Prevention:** Keep the MVP free of analytics/tracking and third-party embeds where possible. Before adding any third-party script, review its privacy/cookie impact and update policy/consent behavior to match the actual deployment.

### Pitfall 3: Omitting launch-quality testing because the site is “only static”
**What goes wrong:** Route, responsive, keyboard, invalid URL, image, and CTA failures reach production because no automated or manual release checklist exists.
**Prevention:** Use Playwright for route/404/menu-filter/CTA behavior at mobile and desktop viewports; add a manual device checklist for Messenger handoff, keyboard use, contrast, zoom, image loading, and factual-content approval.

## Phase-Specific Warnings

| Phase Topic | Likely Pitfall | Mitigation |
|-------------|---------------|------------|
| Content inventory and typed menu data | Placeholder or invented facts; duplicate prices and delivery claims | Owner-approved source-of-truth data module; required-field audit; development placeholders never ship as facts. |
| Design system and responsive shell | Brand colors reduce contrast; menu and CTA targets are too small | Token-level contrast tests; visible focus; semantic navigation; test coarse-pointer layout and 24 px minimum targets. |
| Home, menu, and information routes | Decor takes priority over the Messenger order path | Test the decision sequence and put honest order/availability context beside CTAs. |
| Messenger handoff | Broken/unverified deep link or implied checkout | Device-test approved URL; visible “start an order inquiry” expectation; verified fallback only. |
| Image/content integration | Stock or misleading product imagery; CLS and heavy LCP | Owner-approved asset ledger; stable aspect ratios and image dimensions; one prioritized hero image only. |
| SEO and launch | Schema/metadata fabricate data or URLs; menu not crawlable | Set production base URL first; unique metadata, sitemap, robots, 404; validate only factual JSON-LD. |
| Quality verification | Static site skips functional testing | Playwright CTA/route/responsive checks plus manual phone, keyboard, screen-reader, zoom, and content approval checks. |
| Future commerce discovery | Premature cart/payment/account architecture | Keep local typed content and narrow UI state; defer backend, checkout, accounts, inventory, and analytics until validated. |

## Sources

- [Next.js App Router composition and static data fetching](https://nextjs.org/docs/app) — Context7 official-doc digest, **MEDIUM** confidence (provider classification).
- [Next.js `generateStaticParams` and Image documentation](https://nextjs.org/docs/app/api-reference/functions/generate-static-params) — Context7 official-doc digest, **MEDIUM** confidence (provider classification).
- [Google: LocalBusiness structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business) — official source retrieved through WebFetch, **LOW** confidence (provider classification; direct source is authoritative). Accessed 2026-08-11.
- [W3C: WCAG 2.2 Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) — official source retrieved through WebFetch, **LOW** confidence (provider classification; page updated 2026-05-11).
- [web.dev: Accessible tap targets](https://web.dev/articles/accessible-tap-targets) — official guidance retrieved through WebFetch, **LOW** confidence (provider classification; published 2020-03-31).
- [FDA: Food allergies](https://www.fda.gov/food/food-labeling-nutrition/food-allergies) — official US risk context retrieved through WebFetch, **LOW** confidence (provider classification; content current 2026-03-11; not Philippine legal advice).
