---
name: mindwp-site
description: Use when a MindWP repository task spans more than one page phase or authority, or when the correct focused page skill is unclear.
---

# MindWP site router

Route broad work to the smallest useful focused skill. Do not make this a compulsory parent and do not load the full skill suite.

## Route the request

1. Read `docs/PAGE-WORKFLOW.md` and the relevant `docs/PAGE-LEDGER.md` row.
2. Identify the next evidence-producing outcome:
   - meaning, claims, CTA, narrative, headings, section jobs, payloads or content architecture → `mindwp-plan-page`;
   - a complete desktop visual draft, approved-page build, PNG/reference reconstruction, full-page redesign, section redesign or requested route variant → `mindwp-design-page`;
   - responsive CSS, interaction states, motion, accessibility, cleanup, testing, final audit, audit-only or fix-and-review → `mindwp-finish-page`.
3. Load only the authority that owns that decision. For an implemented page, current source and renders take precedence over an old page record.

The normal sequence is meaning → desktop draft → user visual decision → production finish → final audit. Skip phases already approved and recoverable. A prompt to build a page with approved meaning goes directly to `mindwp-design-page`; it must not return another planning document.

External tools remain optional techniques inside the active phase. They do not create another repository stage, skill or handoff record.

Protect truthful proof, private data, reference permissions and publication boundaries. End every report with `What is done` and `What is next`.
