# MindWP documentation

This directory is MindWP's reusable project memory. Read the smallest route that owns the task; do not turn the map into a workflow or infer authority from file age.

## Active authorities

| Document                               | Owns                                                                                                                                        |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| [FOUNDATION.md](./FOUNDATION.md)       | Durable identity, buyer principles, website-led rationale, truth, proof, privacy and professional boundaries                                |
| [STRATEGY.md](./STRATEGY.md)           | Current approved commercial direction, offers, service responsibilities, qualification, conversion direction, page roles and open decisions |
| [WRITING.md](./WRITING.md)             | Voice, claims discipline and responsible public-language practice                                                                           |
| [PAGE-PLANNING.md](./PAGE-PLANNING.md) | Page research, jobs, intent, narrative, meaning, proof, boundaries and the compact page-brief contract                                      |
| [DESIGN.md](./DESIGN.md)               | Shared visual grammar, meaning-bearing composition, page experience, responsive intent, motion intent and rendered visual judgement         |
| [ENGINEERING.md](./ENGINEERING.md)     | Repository-specific source, CSS, responsive, accessibility, interaction, performance and validation rules                                   |

The documents have separate domains. When two statements appear to conflict, use the authority that owns the decision rather than combining both.

## Source roles and precedence

1. An explicit current user decision is authoritative for its stated scope and may revise an older decision.
2. The active documents above are canonical within their respective domains.
3. An explicitly supplied page plan owns that page's job, audience, intent, action, meaning, proof and fixed boundaries. It does not silently redefine the wider business.
4. `AGENTS.md` owns repository operating safety. Execution skills apply specialised methods; they do not create business or design authority.
5. Current source and fresh renders own implemented reality. Report drift from the documents instead of silently treating implementation as a new strategic decision.
6. Accepted pages are quality and implementation evidence, not templates or automatic global rules.
7. `_audit-input/old-docs/` and other archived material are non-authoritative preservation sources. Extract from them only when reconciled with current authority.

Public routes, navigation and publication state come from active source and explicit release decisions. A document entry does not make a route live.

## Stability convention

- **Durable foundation:** expected to survive individual offers and pages, but still revisable by a later explicit decision.
- **Current approved direction:** authoritative now while MindWP evolves; revisit it when the user changes the commercial direction.
- **Page-specific decision:** applies only to the supplied page plan and task.
- **Open decision:** deliberately unsettled. Do not invent an answer or block unrelated work.

These labels describe confidence and scope, not a lifecycle or approval system.

## Reading routes

### Full orientation

For a fresh strategy, planning or review conversation, read this file, Foundation, Strategy, Writing, Page Planning and Design. Add Engineering only for repository or technical work.

### Design or concept work

Read this file, Foundation, the supplied page plan, Writing and Design. Read Strategy only when the plan leaves a commercial question unresolved.

### Build or technical review

Use the design route, then add `AGENTS.md`, Engineering, current route source and fresh renders. Load `mindwp-design-build`, `mindwp-frontend-quality`, both or neither according to the requested work. Inspect other implemented pages only for a named question or explicit request.

## Temporarily preserved legacy material

The following remain for preservation and coexistence but are no longer active authorities or required reading:

- `docs/PAGE-WORKFLOW.md`
- `docs/PAGE-LEDGER.md`
- `docs/existing-pages-audit.md`
- `docs/pages/_templates/page.md`
- `.agents/skills/mindwp-site/`
- `.agents/skills/mindwp-plan-page/`
- `.agents/skills/mindwp-design-page/`
- `.agents/skills/mindwp-finish-page/`
- `scripts/export-page-context.mjs`

Do not extend their router, phase, ledger, packet or desktop-approval machinery. They remain available only until a separately approved cleanup verifies that all useful material has survived.
