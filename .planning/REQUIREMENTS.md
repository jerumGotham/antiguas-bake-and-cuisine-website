# Requirements: Antigua's Bake & Cuisine Website

**Defined:** 2026-08-11
**Core Value:** Customers can confidently discover Antigua's real offerings and start an order through Messenger from any device.

## v1 Requirements

### Brand and Content Foundation

- [x] **BRAND-01**: Visitor sees a responsive boutique bakery visual system using the approved warm cream, soft beige, chocolate brown, caramel, and dark brown palette.
- [x] **BRAND-02**: Visitor experiences consistent shared navigation, footer, typography, spacing, cards, buttons, and section layouts across public pages.
- [x] **DATA-01**: Site content is defined in strongly typed local TypeScript modules for business facts, categories, products, and optional product metadata.
- [x] **DATA-02**: Every displayed product is sourced from canonical local data and can include only owner-approved name, description, image, sizes, price, category, and best-seller status.
- [x] **DATA-03**: Missing business or product information is omitted or visibly marked as a placeholder instead of being invented.
- [x] **ORDER-01**: Visitor can start an order through a centrally configured, verified Messenger destination from primary calls to action.

### Home Experience

- [ ] **HOME-01**: Visitor can understand the brand and primary order action from a responsive hero banner.
- [ ] **HOME-02**: Visitor can discover approved featured products, product categories, and best sellers sourced from canonical menu data.
- [ ] **HOME-03**: Visitor can read concise Antigua's brand, quality, and value content without unsupported claims.
- [ ] **HOME-04**: Visitor can view clearly labeled placeholders for customer reviews and any unapproved FAQ content without fabricated testimonials or answers.
- [ ] **HOME-05**: Visitor can reach an Order via Messenger call to action from the home page.

### Menu and Product Discovery

- [ ] **MENU-01**: Visitor can browse menu items in Pasta, Cookies, Desserts, Drinks, and Seasonal / Special Products categories.
- [ ] **MENU-02**: Visitor can filter visible menu items by category with an accessible All/reset state and a clear empty state.
- [ ] **MENU-03**: Visitor can inspect a reusable product card showing only approved image, name, description, available sizes, price, and best-seller badge data.
- [ ] **MENU-04**: Visitor can begin a Messenger inquiry from a product context only when the configured link format and product copy are verified.

### Brand and Service Information

- [ ] **ABOUT-01**: Visitor can read Antigua's owner-approved brand story, mission, values, homemade-quality message, and fresh-ingredients content, with placeholders for missing copy.
- [ ] **CONTACT-01**: Visitor can access owner-approved Facebook, Messenger, mobile number, email placeholder, business hours, delivery information, and Google Maps placeholder on the contact/order page.
- [ ] **CONTACT-02**: Visitor can complete a locally validated contact-form interface that does not claim to submit or send a message until a real recipient service is approved.
- [ ] **DELIV-01**: Visitor can read owner-approved delivery and pickup information or a clear Messenger prompt when those details are unavailable.

### Quality and Discoverability

- [ ] **QUAL-01**: Visitor can use every public route on mobile and desktop with keyboard-accessible navigation, visible focus states, adequate touch targets, semantic landmarks, and accessible color contrast.
- [ ] **QUAL-02**: Visitor receives optimized local images with meaningful alt text or appropriate decorative treatment, with only the hero image prioritized for loading.
- [ ] **SEO-01**: Search engines receive route-specific metadata, robots guidance, sitemap output, and a custom not-found page without unverified structured business data.
- [ ] **TEST-01**: Maintainers can run Playwright smoke tests for desktop and mobile public routes, menu filtering, the 404 page, and Messenger call-to-action destinations.

## v2 Requirements

### Commerce and Operations

- **COMM-01**: Customer can add products to a cart and complete online checkout.
- **COMM-02**: Customer can pay online and receive an order confirmation.
- **COMM-03**: Customer can track an order and receive delivery notifications.
- **ACCT-01**: Customer can create an account and view order history.
- **ADMIN-01**: Staff can manage menu inventory, prices, availability, and orders through an admin dashboard.

### Content and Growth

- **DATA-04**: Staff can manage menu and site content in a database or CMS.
- **GROW-01**: Staff can review consent-aware analytics and conversion metrics.
- **GROW-02**: Customer can opt into email notifications or a newsletter.

## Out of Scope

| Feature | Reason |
|---------|--------|
| Database, PostgreSQL, and Prisma | Typed local data is sufficient for the static-first MVP. |
| Authentication and customer accounts | Customers order through Messenger in v1. |
| Cart, checkout, payments, and order tracking | Native commerce is explicitly deferred. |
| Admin dashboard and inventory management | Operational tooling is not required for the launch site. |
| Fabricated products, prices, hours, reviews, policies, images, or claims | Public business content must remain truthful and owner-approved. |
| A simulated contact-form success state | A form cannot claim delivery until a real receiving service exists. |
| Analytics and email notifications | Defer until the public customer journey is proven. |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| BRAND-01 | Phase 1 | Complete |
| BRAND-02 | Phase 1 | Complete |
| DATA-01 | Phase 1 | Complete |
| DATA-02 | Phase 1 | Complete |
| DATA-03 | Phase 1 | Complete |
| ORDER-01 | Phase 1 | Complete |
| HOME-01 | Phase 2 | Pending |
| HOME-02 | Phase 2 | Pending |
| HOME-03 | Phase 2 | Pending |
| HOME-04 | Phase 2 | Pending |
| HOME-05 | Phase 2 | Pending |
| MENU-01 | Phase 3 | Pending |
| MENU-02 | Phase 3 | Pending |
| MENU-03 | Phase 3 | Pending |
| MENU-04 | Phase 3 | Pending |
| ABOUT-01 | Phase 4 | Pending |
| CONTACT-01 | Phase 4 | Pending |
| CONTACT-02 | Phase 4 | Pending |
| DELIV-01 | Phase 4 | Pending |
| QUAL-01 | Phase 5 | Pending |
| QUAL-02 | Phase 5 | Pending |
| SEO-01 | Phase 5 | Pending |
| TEST-01 | Phase 5 | Pending |

**Coverage:**

- v1 requirements: 23 total
- Mapped to phases: 23
- Unmapped: 0

---
*Requirements defined: 2026-08-11*
*Last updated: 2026-08-11 after initial roadmap creation*
