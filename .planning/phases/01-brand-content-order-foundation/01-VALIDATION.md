---
phase: 1
slug: brand-content-order-foundation
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-08-11
---

# Phase 1 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | None installed; Phase 5 owns Playwright smoke coverage |
| **Config file** | none |
| **Quick run command** | `npm run lint` |
| **Full suite command** | `npm run lint && npm run build` |
| **Estimated runtime** | ~30 seconds |

---

## Sampling Rate

- **After every task commit:** Run `npm run lint`
- **After every plan wave:** Run `npm run lint && npm run build`
- **Before `/gsd-verify-work`:** Full suite must be green
- **Max feedback latency:** 60 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Threat Ref | Secure Behavior | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|------------|-----------------|-----------|-------------------|-------------|--------|
| 01-01-01 | 01 | 1 | DATA-01, DATA-02, DATA-03 | T-01-01 | One typed local catalog is the only product-fact source; unknown facts remain absent or use the locked placeholders. | compile-time + manual source review | `npm run lint && npm run build` | ❌ W0 | ⬜ pending |
| 01-01-02 | 01 | 1 | BRAND-01, BRAND-02 | — | Shared tokens and primitives preserve visible focus and responsive public-shell semantics. | build + manual visual review | `npm run lint && npm run build` | ❌ W0 | ⬜ pending |
| 01-01-03 | 01 | 1 | ORDER-01 | T-01-02 | All primary CTAs use the one verified Facebook Page URL, exact label/warning, and safe new-tab behavior. | build + manual source/browser review | `npm run lint && npm run build` | ❌ W0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

Existing infrastructure covers static type/lint/build validation. No new test framework is required in Phase 1; Playwright is explicitly scoped to Phase 5.

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Desktop and mobile visual system | BRAND-01, BRAND-02 | No visual regression or browser framework is installed. | Run the app at desktop and narrow mobile widths; inspect palette, typography, focus states, touch targets, header, footer, cards, and placeholders. |
| Mobile menu keyboard behavior | BRAND-02 | Requires interactive focus/navigation review. | Use keyboard to open and close the menu, follow the Home link, and confirm focus remains visible. |
| Facebook Page handoff | ORDER-01 | External Facebook authentication is outside the app. | Inspect every CTA for the exact Page URL, `target="_blank"`, safe `rel`, the exact "Message us on Facebook" label, and the sign-in warning. |
| Placeholder truthfulness | DATA-02, DATA-03 | Requires judgment against supplied owner-approved facts. | Confirm no stock food photo, product price, description, or unsupported business claim is embedded outside the canonical content modules. |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 60s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
