---
phase: 1
slug: brand-content-order-foundation
status: ready
nyquist_compliant: true
wave_0_complete: true
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
| 01-01-01 | 01-01 | 1 | BRAND-01, BRAND-02, DATA-01, DATA-03, ORDER-01 | T-01-01, T-01-02, T-01-03 | The Home tracer obtains facts and CTA copy/destination from typed local content, renders the locked placeholder policy, and opens the configured Page safely. | lint/build + manual browser review | `npm run lint && npm run build` | N/A — no test framework | ⬜ pending |
| 01-01-02 | 01-01 | 1 | BRAND-01, DATA-01, ORDER-01 | T-01-SC | The walking-skeleton record preserves the local-content, server-rendered, Page-handoff architecture and prohibited boundaries. | file existence + lint/build | `test -f .planning/phases/01-brand-content-order-foundation/01-SKELETON.md && npm run lint && npm run build` | N/A — no test framework | ⬜ pending |
| 01-02-01 | 01-02 | 2 | DATA-01, DATA-02, DATA-03 | T-01-04, T-01-05 | Typed records and exact-match selectors derive only from the canonical catalog and retain absent unapproved metadata. | lint/build + manual source review | `npm run lint && npm run build` | N/A — no test framework | ⬜ pending |
| 01-02-02 | 01-02 | 2 | BRAND-02, DATA-02, DATA-03 | T-01-06 | Presentation primitives bind their image props to canonical metadata and use the locked absent-image/fact treatment without remote or fabricated media. | lint/build + manual 320px review | `npm run lint && npm run build` | N/A — no test framework | ⬜ pending |
| 01-03-01 | 01-03 | 2 | BRAND-01, BRAND-02, ORDER-01 | T-01-07, T-01-08 | The shared server shell exposes only Home and the configured reusable order CTA, with responsive visual and focus behavior. | lint/build + desktop/mobile manual review | `npm run lint && npm run build` | N/A — no test framework | ⬜ pending |
| 01-03-02 | 01-03 | 2 | BRAND-02 | T-01-09 | The sole client interaction leaf exposes semantic open state and supports trigger, Escape-close, and Home-activation-close transitions. | lint/build + manual keyboard interaction review | `npm run lint && npm run build` | N/A — no test framework | ⬜ pending |

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

- [x] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [x] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 60s
- [x] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
