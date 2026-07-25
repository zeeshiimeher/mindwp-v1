# MindWP documentation

This directory is MindWP's reusable project memory. Open only the authorities the work in hand needs — the reading routes below say which those are. Do not turn the map into a workflow or infer authority from file age.

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

## Current commercial commitments

Read [STRATEGY.md](./STRATEGY.md) when a task depends on the audience lane, market emphasis, pricing posture, public voice, offer hierarchy or conversion direction. Those decisions are settled there and are not restated here, so do not treat their absence from this map as an open question. A supplied page plan should carry the specific decisions that page needs.

## Source roles and precedence

1. An explicit current user decision is authoritative for its stated scope and may revise an older decision.
2. The active documents above are canonical within their respective domains.
3. An explicitly supplied page plan owns that page's job, audience, intent, action, meaning, proof and fixed boundaries. It does not silently redefine the wider business.
4. `CLAUDE.md` owns repository operating safety. Execution skills apply specialised methods; they do not create business or design authority.
5. Current source and fresh renders own implemented reality. Report drift from the documents instead of silently treating implementation as a new strategic decision.
6. The Homepage is the accepted quality and implementation reference — evidence of the standard to reach, not a template or an automatic global rule. A page awaiting rebuild carries no authority over new work, whatever it currently demonstrates.
7. Archived or historical material, including anything recovered from git history, is a non-authoritative preservation source. Extract from it only when reconciled with current authority.

Public routes, navigation and publication state come from active source and explicit release decisions. A document entry does not make a route live.

## Stability convention

- **Durable foundation:** expected to survive individual offers and pages, but still revisable by a later explicit decision.
- **Current approved direction:** authoritative now while MindWP evolves; revisit it when the user changes the commercial direction.
- **Page-specific decision:** applies only to the supplied page plan and task.
- **Open decision:** deliberately unsettled. Do not invent an answer or block unrelated work.

These labels describe confidence and scope, not a lifecycle or approval system.

## Reading routes

**Selection rule:** A canonical authority is selected when the user supplies or explicitly names it, or when the route below assigns it to the work in hand. Do not infer selection from an exporter option that names something else, and do not open the full set for orientation.

**Page design or redesign** — the supplied page plan, `DESIGN.md`, and a fresh capture of the accepted Homepage. Open Homepage source only when implementation understanding is necessary; the visual reference leads.

**Page build** — the approved design specification and `ENGINEERING.md`, plus the existing foundational CSS the task needs. Not the Homepage: the design is already decided at this point.

**Visual audit** — fresh captures of the page under review, `DESIGN.md`, and the Homepage capture as the quality benchmark.

**Repair, copy edit, tooling, or isolated technical work** — the changed scope and the authority that owns it. Nothing wider. A focused exporter or tool task must not inherit page, commercial or strategic context.

**Full orientation** — the complete authority set, only when explicitly requested. `pnpm context:export orientation` assembles it for use outside the repository.

In every route, open Foundation, Strategy or Writing when a business, positioning or claims question is genuinely open — not for background. If a missing decision would materially change the result, identify the gap rather than inventing an answer.

## Execution skills

Optional specialists, not a mandatory chain. Each declares its own trigger and context.

| Skill | Use for | Opens the Homepage |
| ----- | ------- | ------------------ |
| `mindwp-page-design`     | Deciding a page or section design; direction, concept and critique. Produces a specification, no code | Yes — capture first |
| `mindwp-page-build`      | Implementing an approved design in source                                                             | No                  |
| `mindwp-design-eye`      | Judging whether a built page is visually good                                                         | Yes — capture only  |
| `mindwp-frontend-quality`| Technical repair, finalisation and frontend quality review                                            | No                  |

Design is decided and reviewed before implementation begins. One skill does not automatically load another or a broader authority bundle.
