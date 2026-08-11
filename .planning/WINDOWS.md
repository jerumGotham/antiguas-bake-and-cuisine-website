---
schema_version: 1
open_count: 2
waived_count: 0
fixed_count: 0
total_count: 2
last_updated: 2026-08-11T06:29:29.920Z
---

# Broken Windows Ledger

> Cross-phase defect register. With `workflow.windows_enforce` enabled, `/gsd-ship` blocks while `open_count > 0`.
> Waive with `gsd-tools windows waive <id> "<reason>"` (reason required).
> Mark fixed with `gsd-tools windows fixed <id>`.

| id | phase | kind | file | line | description | status | reason | recorded_at | resolved_at |
|----|-------|------|------|------|-------------|--------|--------|-------------|-------------|
| 1 | 01 | stub | src/content/business.ts | 13 | Intentional absent business overview renders the approved factual placeholder until owner-approved content is supplied. | open |  | 2026-08-11T06:29:29.824Z |  |
| 2 | 01 | stub | src/content/business.ts | 14 | Intentional absent featured image renders the approved branded image placeholder until an owner-approved image is supplied. | open |  | 2026-08-11T06:29:29.920Z |  |

````json
[
  {
    "id": 1,
    "kind": "stub",
    "phase": "01",
    "file": "src/content/business.ts",
    "line": 13,
    "description": "Intentional absent business overview renders the approved factual placeholder until owner-approved content is supplied.",
    "status": "open",
    "reason": "",
    "recorded_at": "2026-08-11T06:29:29.824Z",
    "resolved_at": null
  },
  {
    "id": 2,
    "kind": "stub",
    "phase": "01",
    "file": "src/content/business.ts",
    "line": 14,
    "description": "Intentional absent featured image renders the approved branded image placeholder until an owner-approved image is supplied.",
    "status": "open",
    "reason": "",
    "recorded_at": "2026-08-11T06:29:29.920Z",
    "resolved_at": null
  }
]
````
