# Feature Landscape

**Domain:** Boutique bakery and home-based food-business marketing website with Messenger-first ordering
**Researched:** 2026-08-11
**Confidence:** MEDIUM — grounded in the approved project scope and current official Next.js/Google guidance; no competitor audit was supplied or relied upon.

## Table Stakes

Features customers need to discover real offerings, establish trust, and start an order without a native checkout.

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Responsive public home page with clear brand proposition and primary “Order via Messenger” CTA | Visitors decide quickly whether the business offers what they need and how to proceed, often on mobile. | Med | Use one real Messenger destination supplied by the business; do not invent a link or contact detail. Repeat the CTA in the header, hero, and relevant content endings. |
| Browsable menu using approved, typed local data | The core job is to see actual food and baked-goods offerings before beginning a conversation. | Med | Show only approved names, descriptions, sizes, availability labels, images, and prices. Missing fields must be absent or visibly labeled as placeholders, never guessed. |
| Category navigation/filtering for Pasta, Cookies, Desserts, Drinks, and Seasonal / Special Products | A mixed menu must be scannable; customers should reach their intended type without reading every card. | Low | Local client state is sufficient if filters are interactive. Preserve an “All” view and make the unfiltered menu useful without JavaScript where practical. |
| Product cards with truthful availability context | A product image/name alone is not enough to decide whether to ask about an item. | Med | Include fields only when approved: image, name, short description, price, size/serving, category, and seasonal/special status. Do not represent unavailable facts as facts. |
| Dedicated delivery information page/section | Delivery feasibility affects whether a customer can order at all. | Low | Publish only verified coverage, fees, schedules, lead time, pickup terms, and courier process. Until supplied, state that delivery details are confirmed in Messenger rather than fabricating policies. |
| About page with authentic business story and identity | For a home-based food business, provenance and a human point of view are central trust signals. | Low | Use approved business copy and imagery; retain a labeled placeholder where the business has not supplied narrative or claims. |
| Contact/order page with Messenger handoff and verified contact details | Customers need an obvious recovery path after browsing. | Low | Messenger is the action, not a simulated checkout. A contact form is only useful if there is an approved recipient/submission route; validation alone is not delivery. |
| Persistent navigation, footer, page-specific titles/descriptions, 404 page, and accessible interaction | These are baseline usability and credibility requirements for a public multi-page site. | Med | Meet keyboard, focus, contrast, alt-text, semantic-heading, and touch-target needs. Next.js metadata supports per-page discoverability; Google advises helpful, people-first, trustworthy content. |
| Fast, optimized local imagery with loading-safe layout | Food photography carries much of the conversion burden and must not make mobile browsing slow or unstable. | Med | Use supplied or licensed images only, `next/image`, meaningful alt text, reserved dimensions, and a graceful placeholder strategy. |

## Differentiators

Features that make this MVP feel like a considered boutique-bakery experience rather than a generic catalog. They are valuable only when backed by approved content.

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Warm premium editorial visual system | A consistent cream, chocolate, and caramel presentation makes the business memorable and supports perceived craft. | Med | Apply the approved brand tokens through reusable layout, buttons, menu cards, and typography; avoid decorative motion that impairs browsing. |
| Curated home-page menu highlights that link to the full menu | Gives first-time visitors a focused taste of the range while preserving a complete source of truth. | Low | Highlights are selections from local menu data, not invented “best sellers” or promotional claims. |
| Seasonal / Special Products as a first-class menu category | Lets the business spotlight time-limited offerings without hard-coding temporary content into page layouts. | Low | Model it as data with an explicit status/label only when approved; no countdowns or stock claims without a real update process. |
| Messenger handoff that carries product context | Reduces customer effort by opening the verified Messenger path from a specific product or menu context. | Med | Use a non-binding, editable prefilled message only if the Messenger URL format and the proposed wording are approved. Never imply that a click reserves, submits, or confirms an order. |
| Purposeful “how to order” micro-flow | Converts uncertainty into a short, transparent sequence: browse, message, then confirm details with the business. | Low | Describe the actual process only; make confirmation happen in Messenger. This is especially valuable where delivery data or custom availability is still confirmed manually. |
| Genuine maker/process imagery or story | First-hand, approved details can distinguish a home-based maker from a marketplace listing. | Med | Defer if assets or claims are unavailable. Do not generate origin stories, testimonials, quality claims, or kitchen/process assertions. |

## Anti-Features

Features to explicitly not build in this MVP.

| Anti-Feature | Why Avoid | What to Do Instead |
|--------------|-----------|-------------------|
| Native cart, checkout, payment collection, and order confirmation | Contradicts the Messenger-first order model and creates payment, inventory, fulfilment, and support obligations. | Give every order intent a clear Messenger handoff; discuss payment and final order details there. |
| Customer accounts, login, saved addresses, or order history | Adds personal-data management and backend complexity without helping the MVP’s discovery-to-message goal. | Keep the public site account-free. |
| Database, admin CMS, inventory system, or real-time stock | Local typed data is the agreed source of truth; a backend adds operating cost and synchronization risk before the content process is proven. | Maintain approved menu data locally and make update ownership explicit. |
| Real-time delivery quotes, courier tracking, service-area calculator, or delivery-date scheduler | These require verified operational rules or integrations and can mislead customers when stale. | Publish confirmed delivery information; otherwise invite customers to confirm delivery in Messenger. |
| Unverified reviews, ratings, “best seller” badges, countdown timers, order counts, or scarcity claims | Fabricated or stale social proof damages trust and violates the no-invented-business-details constraint. | Use only supplied, attributable, approved content; omit the feature when it is unavailable. |
| Automated chat bot or AI ordering assistant | Can collect incorrect custom-order details and obscures the promised human Messenger conversation. | Link to the approved Messenger destination with a concise optional context prompt. |
| Blog, recipes, newsletter, loyalty program, analytics, or email automation | They do not unblock the initial customer journey and need continuing content, consent, and operating processes. | Launch the focused marketing foundation first; assess these after real traffic and order questions are known. |
| Map/address, opening-hours, allergens, dietary guarantees, or food-safety claims without verified source content | These details can affect customer decisions and safety, so guesses are harmful. | Collect approved details and publish them exactly; otherwise use a clearly labeled placeholder or invite confirmation in Messenger. |

## Feature Dependencies

```text
Approved business content and verified Messenger destination → global Order via Messenger CTA
Approved typed menu data → menu page → category filters → product-context Messenger handoff
Approved image assets and product metadata → truthful product cards → home-page curated highlights
Verified delivery policy/details → delivery page/section → delivery guidance in order micro-flow
Approved business story/contact details → about and contact/order pages
Shared layout and design tokens → responsive navigation, footer, accessible multi-page experience
Page routes and final public URLs → page metadata, social previews, sitemap/SEO verification
```

## MVP Recommendation

Prioritize:
1. **Approved typed menu and complete menu browsing** — it is the factual catalog from which all product presentation flows.
2. **Verified Messenger-first conversion path** — place a consistent, accessible CTA wherever a customer decides to order.
3. **Delivery and contact/order information with explicit uncertainty handling** — publish approved facts and route all unresolved questions to Messenger.
4. **Responsive boutique visual system, home/about pages, and public-site quality basics** — make the catalog trustworthy, usable, fast, and discoverable.
5. **A restrained differentiator: seasonal/special data treatment and a short genuine how-to-order flow** — only after the core information and handoff are correct.

Defer: native commerce, payments, accounts, tracking, inventory/admin tooling, analytics, automated messaging, and content-marketing programs. They require backend operations, policy decisions, integrations, or evidence that the focused Messenger journey is insufficient.

## Sources

- Project scope and constraints: `.planning/PROJECT.md` (primary project source, 2026-08-11).
- Next.js documentation, App Router static-first composition and metadata patterns (Context7 digest from Next.js v16.2.9; MEDIUM): https://nextjs.org/docs/app
- Google Search Central, “Creating helpful, reliable, people-first content,” last updated 2025-12-10 (official; used for factual-content and trust guidance): https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Research limitation: no current, verified competitor analysis or customer research was available. The table-stakes/differentiator classification is therefore a scoped MVP recommendation, not a claim that every local competitor offers these features.
