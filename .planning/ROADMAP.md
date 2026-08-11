# Roadmap: Antigua's Bake & Cuisine Website

## Overview

This vertical MVP roadmap builds a truthful, conversion-ready bakery website in customer-facing slices: establish approved content and the shared Messenger order path, deliver home and menu discovery, complete the trust-building service information, then verify the full public experience across devices before launch. Each phase requires user approval before implementation code begins.

## Phases

**Phase Numbering:**

- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

- [ ] **Phase 1: Brand, Content & Order Foundation** - Establish truthful local content, the boutique visual system, and one verified Messenger conversion path.
- [ ] **Phase 2: Home Discovery Experience** - Give first-time visitors a responsive, credible introduction and clear path to order.
- [ ] **Phase 3: Menu Browsing & Product Inquiry** - Let visitors explore the complete approved catalog and inquire about a product through Messenger.
- [ ] **Phase 4: Brand, Contact & Delivery Information** - Let visitors understand Antigua's story and get truthful ordering, contact, pickup, and delivery guidance.
- [ ] **Phase 5: Accessible, Discoverable Launch Experience** - Confirm every public journey is accessible, searchable, fast, and smoke-tested on desktop and mobile.

## Phase Details

### Phase 1: Brand, Content & Order Foundation

**Goal**: Visitors encounter a cohesive boutique bakery identity and can confidently begin an inquiry through one truthful, verified Messenger destination.
**Mode:** mvp
**Epic**: Trusted brand and conversion foundation
**Included features**: Typed local business/menu content, approval/placeholder rules, brand tokens and shared public UI, centralized Messenger CTA.
**Depends on**: Nothing (first phase)
**Dependency notes**: Owner-approved facts, image provenance, and the production Messenger destination must be confirmed or visibly represented as placeholders before downstream pages expose them.
**Requirements**: BRAND-01, BRAND-02, DATA-01, DATA-02, DATA-03, ORDER-01
**Task-ready scope**: Define validated local content contracts and selectors; build reusable responsive shared layout/UI primitives and approved visual tokens; centralize the verified Messenger intent; keep unknown content omitted or visibly labeled. User approval is required before implementation code begins.
**Success Criteria** (what must be TRUE):

  1. Visitor sees the approved warm cream, soft beige, chocolate, caramel, and dark-brown boutique visual identity across shared public elements.
  2. Visitor finds consistent navigation, footer, typography, buttons, cards, and section layouts wherever shared elements appear.
  3. Every displayed product fact is drawn from one approved local catalog, while missing business or product facts are omitted or visibly labeled as placeholders.
  4. Visitor can use primary order calls to action to open the centrally configured, verified Messenger destination.

**Plans**: 1/3 plans executed
Plans:
**Wave 1**

- [x] 01-01-PLAN.md — Prove Home-to-Facebook order handoff and record the walking skeleton.

**Wave 2** *(blocked on Wave 1 completion)*

- [ ] 01-02-PLAN.md — Define canonical catalog contracts and truthful display primitives.
- [ ] 01-03-PLAN.md — Deliver the responsive shared public shell and accessible mobile menu.

**UI hint**: yes

### Phase 2: Home Discovery Experience

**Goal**: First-time visitors can understand Antigua's offerings and value, discover approved highlights, and start an order from a polished home page.
**Mode:** mvp
**Epic**: First-visit discovery and conversion
**Included features**: Responsive hero, featured products and categories, best sellers, truthful brand/value copy, review and FAQ placeholders, home Messenger CTA.
**Depends on**: Phase 1
**Dependency notes**: Uses the canonical content, shared visual system, product selectors, and verified Messenger CTA established in Phase 1.
**Requirements**: HOME-01, HOME-02, HOME-03, HOME-04, HOME-05
**Task-ready scope**: Compose a server-rendered home route from approved data and shared primitives; include responsive hero, product/category discovery, concise substantiated copy, clearly labeled unapproved review/FAQ areas, and the centralized order action. User approval is required before implementation code begins.
**Success Criteria** (what must be TRUE):

  1. Visitor can understand the Antigua's brand and primary Messenger order action from the responsive home hero.
  2. Visitor can discover approved featured products, categories, and best sellers drawn from canonical menu data.
  3. Visitor can read concise, supportable brand, quality, and value content without fabricated claims.
  4. Visitor sees unapproved reviews and FAQ content clearly marked as placeholders rather than presented as real customer information.
  5. Visitor can start an order through Messenger directly from the home page.

**Plans**: TBD
**UI hint**: yes

### Phase 3: Menu Browsing & Product Inquiry

**Goal**: Visitors can browse Antigua's complete approved menu, narrow it to a category, and begin a verified product-specific Messenger inquiry.
**Mode:** mvp
**Epic**: Catalog discovery and product-context conversion
**Included features**: Menu route, reusable product cards, category filters, All/reset and empty states, conditional product-context Messenger handoff.
**Depends on**: Phase 1
**Dependency notes**: Relies on Phase 1's catalog contracts, approved product facts, image treatment, and centralized Messenger configuration; the product-prefill format must be verified before contextual inquiry is exposed.
**Requirements**: MENU-01, MENU-02, MENU-03, MENU-04
**Task-ready scope**: Build the menu route and reusable data-driven cards for all required categories; add an accessible client-side category filter leaf with All/reset and empty states; show product-context inquiry only when its destination and copy are verified. User approval is required before implementation code begins.
**Success Criteria** (what must be TRUE):

  1. Visitor can browse approved items in Pasta, Cookies, Desserts, Drinks, and Seasonal / Special Products.
  2. Visitor can filter the visible menu by category, return to All, and understand an empty result state using accessible controls.
  3. Visitor can inspect a consistent product card containing only approved image, name, description, sizes, price, and best-seller information.
  4. Visitor can begin a product-context Messenger inquiry only when the configured link format and product copy have been verified.

**Plans**: TBD
**UI hint**: yes

### Phase 4: Brand, Contact & Delivery Information

**Goal**: Visitors can learn who Antigua's is and confidently find truthful contact, ordering, pickup, and delivery guidance.
**Mode:** mvp
**Epic**: Trust and service-information journey
**Included features**: About route, contact/order route, delivery route, approved contacts and service facts, safe local contact-form interface.
**Depends on**: Phase 1
**Dependency notes**: All public claims and contact details must come from Phase 1's approved content source; unknown delivery, map, hours, or email details remain placeholders or route visitors to Messenger.
**Requirements**: ABOUT-01, CONTACT-01, CONTACT-02, DELIV-01
**Task-ready scope**: Deliver server-rendered about, contact/order, and delivery pages with owner-approved facts and honest placeholders; add locally validated form interaction that never claims message delivery without an approved transport. User approval is required before implementation code begins.
**Success Criteria** (what must be TRUE):

  1. Visitor can read an owner-approved Antigua's story, mission, values, homemade-quality message, and fresh-ingredients content, with missing copy clearly marked as placeholder content.
  2. Visitor can access approved social/contact details, business hours, delivery information, and a map or clearly labeled placeholder from the contact/order page.
  3. Visitor can complete local contact-form validation and is never told that a message was sent when no approved recipient service exists.
  4. Visitor can read approved delivery and pickup information or is clearly prompted to ask through Messenger when those details are unavailable.

**Plans**: TBD
**UI hint**: yes

### Phase 5: Accessible, Discoverable Launch Experience

**Goal**: Visitors can reliably use and find every completed public route across devices, while maintainers can verify the core browse-to-Messenger journey before launch.
**Mode:** mvp
**Epic**: Public quality and launch confidence
**Included features**: Responsive and keyboard accessibility refinements, optimized image treatment, route metadata, robots, sitemap, custom 404, Playwright smoke coverage.
**Depends on**: Phase 2, Phase 3, Phase 4
**Dependency notes**: Exercises the complete routes and CTA destinations delivered by the preceding customer journeys; production base URL and image/deployment strategy must be confirmed before final SEO validation.
**Requirements**: QUAL-01, QUAL-02, SEO-01, TEST-01
**Task-ready scope**: Audit and refine completed routes for mobile/desktop semantics, focus, contrast, touch targets, and image loading; add truthful route metadata, robots, sitemap, and 404; implement Playwright desktop/mobile smoke coverage for routes, filtering, 404, and Messenger hrefs. User approval is required before implementation code begins.
**Success Criteria** (what must be TRUE):

  1. Visitor can use every public route on mobile and desktop with keyboard navigation, visible focus, semantic landmarks, adequate touch targets, and readable color contrast.
  2. Visitor receives optimized local images with meaningful or decorative-appropriate alt treatment, with only the hero image prioritized for loading.
  3. Search engines receive route-specific metadata, robots guidance, sitemap output, and a custom not-found page without unverified structured business data.
  4. Maintainer can run Playwright smoke tests covering desktop and mobile public routes, menu filtering, the 404 page, and Messenger call-to-action destinations.

**Plans**: TBD
**UI hint**: yes

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4 → 5

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Brand, Content & Order Foundation | 1/3 | In Progress|  |
| 2. Home Discovery Experience | 0/TBD | Not started | - |
| 3. Menu Browsing & Product Inquiry | 0/TBD | Not started | - |
| 4. Brand, Contact & Delivery Information | 0/TBD | Not started | - |
| 5. Accessible, Discoverable Launch Experience | 0/TBD | Not started | - |
