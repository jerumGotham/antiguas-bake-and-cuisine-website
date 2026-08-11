---
phase: 01-brand-content-order-foundation
reviewed: 2026-08-11T07:03:00Z
depth: standard
files_reviewed: 15
files_reviewed_list:
  - src/app/globals.css
  - src/app/layout.tsx
  - src/app/page.tsx
  - src/components/public/order-cta.tsx
  - src/components/public/header.tsx
  - src/components/public/footer.tsx
  - src/components/public/mobile-menu.tsx
  - src/components/ui/button.tsx
  - src/components/ui/card.tsx
  - src/components/ui/section.tsx
  - src/components/ui/image-placeholder.tsx
  - src/content/business.ts
  - src/content/menu.ts
  - src/content/selectors.ts
  - src/lib/utils.ts
findings:
  critical: 2
  warning: 3
  info: 0
  total: 5
status: issues_found
---

# Phase 1: Code Review Report

**Reviewed:** 2026-08-11T07:03:00Z
**Depth:** standard
**Files Reviewed:** 15
**Status:** issues_found

## Summary

The shell, content contracts, CTA path, and primitives were reviewed against the Phase 1 contracts. The external CTA is safely configured, but the mobile menu obscures required disclosure text, broken local image paths do not receive the mandatory placeholder, and several rendered text colors fail the approved accessibility/contrast rules.

## Narrative Findings (AI reviewer)

## Critical Issues

### CR-01: Mobile menu covers the header CTA's required login disclosure

**Classification:** BLOCKER

**File:** `/Users/jerumgalang/Documents/ABC/antiguas-bake-and-cuisine-website/src/components/public/mobile-menu.tsx:39`

**Issue:** The absolutely positioned panel is anchored to the 44px trigger and begins directly below it. At a 320px viewport, it starts at the same vertical position as the visible header CTA's `Facebook login may be required...` paragraph and, due to `z-10`, covers that paragraph. While open, the still-visible header CTA no longer has its required adjacent warning (D-14/UI-SPEC copywriting contract).

**Fix:** Position the panel below the complete header action block, or move the trigger/panel to a sibling container that does not overlap the CTA disclosure. Verify the open state at 320px with the header CTA warning still visible.

### CR-02: A failed approved-image request renders a broken image instead of the mandatory placeholder

**Classification:** BLOCKER

**File:** `/Users/jerumgalang/Documents/ABC/antiguas-bake-and-cuisine-website/src/components/ui/image-placeholder.tsx:23-32`

**Issue:** `hasApprovedImage` only checks that a source string and alt text are nonempty. A catalog entry such as `{ src: "/missing.jpg", alt: "Approved image" }` takes the `next/image` path, but a 404/decode failure has no fallback and leaves a broken image. The UI contract explicitly requires an unusable approved-image value to render `Image coming soon` and `Details coming soon.` instead.

**Fix:** Make image sources a closed manifest/static import type so nonexistent local files cannot enter the catalog, or introduce an error-aware image boundary that switches to the branded placeholder on load failure. Retain the fallback for missing/invalid metadata.

## Warnings

### WR-01: Caramel display heading fails required large-text contrast

**Classification:** WARNING

**File:** `/Users/jerumgalang/Documents/ABC/antiguas-bake-and-cuisine-website/src/app/page.tsx:12`

**Issue:** `text-primary` renders Caramel `#C99A62` on Warm Cream `#F7F0D8`, a contrast ratio of approximately 2.22:1. The 28px heading is large text but still requires 3:1 contrast; the UI spec also reserves caramel for the CTA, active indicator, rules, and focus ring rather than general heading text.

**Fix:** Use the approved Chocolate Brown or Dark Brown heading color, keeping caramel only for the decorative rule.

### WR-02: Placeholder label uses prohibited low-contrast caramel text

**Classification:** WARNING

**File:** `/Users/jerumgalang/Documents/ABC/antiguas-bake-and-cuisine-website/src/components/ui/image-placeholder.tsx:44`

**Issue:** The 14px `Image coming soon` label uses Caramel on Soft Beige, approximately 1.86:1 contrast. This fails normal-text contrast and directly contradicts the UI spec's instruction never to use caramel as small text on cream or beige.

**Fix:** Render the label in `text-foreground` or add a compliant darker semantic heading/interactive token for it.

### WR-03: Footer publishes an unsupported quality claim outside canonical content

**Classification:** WARNING

**File:** `/Users/jerumgalang/Documents/ABC/antiguas-bake-and-cuisine-website/src/components/public/footer.tsx:8-9`

**Issue:** `Made with care` is an unapproved public business/quality claim embedded in JSX. Phase 1 requires claims to be owner-approved canonical content or visibly marked as unavailable; this statement is neither represented in `businessContent` nor supported by the approved fact set.

**Fix:** Remove the claim (for example, retain only the current-year copyright and brand name) until the owner supplies approved footer copy, then source that copy from `businessContent`.

---

_Reviewed: 2026-08-11T07:03:00Z_
_Reviewer: the agent (gsd-code-reviewer)_
_Depth: standard_
