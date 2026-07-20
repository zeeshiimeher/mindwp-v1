# MindWP agent guidance

MindWP is rebuilding from a clean surface. Existing files are evidence, not automatic authority; preserve, replace, or remove them according to current strategy, approved meaning, current renders and task scope.

## Start from the next page outcome

Use [PAGE-WORKFLOW.md](./docs/PAGE-WORKFLOW.md). The normal sequence is:

> **Plan meaning → build the complete desktop visual draft → user visual decision → finish production → final audit.**

A build prompt for a page with approved meaning goes directly to a complete coded desktop draft. Do not insert prose visual territories, prototype gates or production hardening before the user sees the render.

Read only the authorities that own the decision:

- [STRATEGY.md](./docs/STRATEGY.md) — business meaning, audience, claims, voice, CTA and information architecture.
- [DESIGN.md](./docs/DESIGN.md) — visual drafting, art direction, composition, CSS, responsive behavior, motion and rendered acceptance.
- [ENGINEERING.md](./docs/ENGINEERING.md) — stack, source ownership, routing, privacy, performance and validation.
- `docs/pages/<page>/page.md` — optional approved-meaning or compact page boundary; current source and renders own implemented reality.
- [PAGE-LEDGER.md](./docs/PAGE-LEDGER.md) — independent meaning, desktop-draft, visual-decision, production-finish, final-audit, publication and reference-role states.

The four focused skills under `.agents/skills/` are the concise router, meaning planner, desktop visual designer and production finisher. Load only the skill that matches the next outcome. Optional external tools may assist a phase but do not create a repository workflow stage.

## Repository posture

- Keep `_dev-reference/current-site/` intact and isolated unless the user explicitly requests old-site reference work.
- Keep draft and variant routes out of live navigation, sitemap and deployment until release is explicitly in scope; defer indexing and publication decisions during visual drafting.
- Use truthful proof. Keep personal founder information and submitted enquiry data private.
- Use one semantic markup structure across widths unless the content itself genuinely differs.
- Do not create workspace memory files for this project.

## Reporting

Every report must end with:

- `What is done`
- `What is next`
