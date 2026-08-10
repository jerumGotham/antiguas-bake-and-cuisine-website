# Antigua's Bake & Cuisine Website

## What This Is

The official customer-facing website for Antigua's Bake & Cuisine, a home-based food and baked goods business in Quezon City, Philippines. It presents the brand, real menu items, and delivery details in a warm, premium boutique-bakery experience, and directs customers to Messenger to begin an order.

## Core Value

Customers can confidently discover Antigua's real offerings and start an order through Messenger from any device.

## Business Context

- **Customer**: Quezon City customers seeking homemade food and baked goods
- **Revenue model**: Direct food and baked-goods orders initiated through Messenger
- **Success metric**: Customers can browse real products and reach the Messenger order path without friction

## Requirements

### Validated

- [x] Next.js 16 App Router and TypeScript foundation - existing starter
- [x] Tailwind CSS 4 styling pipeline - existing starter
- [x] Optimized local image support through `next/image` - existing starter

### Active

- [ ] A responsive premium bakery website with the agreed warm cream, chocolate, and caramel visual identity
- [ ] Public home, menu, about, contact/order, delivery information, and 404 pages
- [ ] Strongly typed local menu data using only approved product information and prices
- [ ] Messenger-first order call to action and contact details
- [ ] Accessible, SEO-friendly, fast, component-based implementation with isolated client state only where necessary

### Out of Scope

- Database, PostgreSQL, and Prisma - menu data remains local for the MVP
- Authentication, customer accounts, and admin tools - not needed to launch a marketing site
- Online checkout, payments, and order tracking - customers begin ordering in Messenger
- Invented products, prices, contact details, or business claims - real business information must be supplied or clearly marked as a placeholder
- Analytics and email notifications - deferred until the marketing foundation is live

## Context

The repository is a minimal Next.js 16.3 App Router starter with TypeScript, Tailwind CSS 4, ESLint, strict TypeScript settings, and no backend, API, persistence, tests, or integrations. The planned architecture is feature-oriented beneath `src/`, while Server Components remain the default and client boundaries are limited to interactive UI such as navigation, filters, modal state, and a future cart.

Required product categories are Pasta, Cookies, Desserts, Drinks (Coffee Jelly / Mango Tapioca Jelly), and Seasonal / Special Products. Product photos, detailed descriptions, sizes, prices, contact links, address/map details, and other business content may mix real supplied assets with clearly labeled placeholders. The user requested an SRS-style scope, epics, features, tasks, and approval of each milestone before implementation begins.

## Constraints

- **Framework**: Next.js 16, TypeScript, and App Router - established project foundation
- **Styling**: Tailwind CSS, shadcn/ui, and Lucide icons - requested reusable visual system
- **State**: TanStack Query for server/API data and Zustand for client UI state only - prevents duplicating server state
- **Forms**: React Hook Form and Zod - required for the contact form and future validation
- **Testing**: Playwright - required for responsive and functional verification
- **Brand**: Warm Cream `#F7F0D8`, Soft Beige `#E8DCC1`, Chocolate Brown `#6B4328`, Caramel `#C99A62`, and Dark Brown `#211814` - must preserve the boutique bakery identity
- **Content**: Do not invent product or pricing data - missing information requires clarification or a labeled placeholder
- **Delivery**: MVP ordering opens Messenger - no native ordering or checkout workflow

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Messenger is the primary order action | It supports the MVP without building checkout infrastructure | Pending |
| Menu data is strongly typed and local | Real product information is still being gathered; no database is needed for v1 | Pending |
| Mix real content with explicit placeholders | The site can be built incrementally without fabricating business information | Pending |
| Keep future commerce architecture extensible | Ordering, accounts, inventory, and payments are future scope | Pending |
| Review and approve milestones before code | Requested incremental delivery and governance | Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? Move to Out of Scope with reason
2. Requirements validated? Move to Validated with phase reference
3. New requirements emerged? Add to Active
4. Decisions to log? Add to Key Decisions
5. "What This Is" still accurate? Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check - still the right priority?
3. Audit Out of Scope - reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-08-11 after initialization*
