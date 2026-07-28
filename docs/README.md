# MindWP documentation

This directory is MindWP's reusable project memory. Open only the authorities the work in hand needs — the reading routes below say which those are. Do not turn the map into a workflow or infer authority from file age.

## Active authorities

| Document                               | Owns                                                                                                                                        |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| [FOUNDATION.md](./FOUNDATION.md)       | Durable identity, buyer principles, website-led rationale, truth, proof, privacy and professional boundaries                                |
| [STRATEGY.md](./STRATEGY.md)           | Current commercial direction, offers, service responsibilities, qualification, conversion direction, page roles and open decisions          |
| [WRITING.md](./WRITING.md)             | Voice, audience register, claims discipline and responsible public-language practice                                                        |
| [PAGE-PLANNING.md](./PAGE-PLANNING.md) | Page research, jobs, intent, narrative, meaning, proof, boundaries and the compact page-brief contract                                      |
| [DESIGN.md](./DESIGN.md)               | Shared visual grammar, meaning-bearing composition, page experience, responsive intent, motion intent and the criteria for judging a render |
| [ENGINEERING.md](./ENGINEERING.md)     | Repository source, CSS, responsive, accessibility, interaction, motion mechanism, performance, capture commands and validation              |

The documents have separate domains. When two statements appear to conflict, use the authority that owns the decision rather than combining both. Strategy settles the audience lane, market emphasis, pricing posture, public voice, offer hierarchy and conversion direction; their absence from this map is not an open question.

## Source roles and precedence

1. An explicit current user decision is authoritative for its stated scope and may revise an older decision.
2. The active documents above are canonical within their respective domains.
3. An explicitly supplied page plan owns that page's job, audience, intent, action, meaning, proof and fixed boundaries. It does not silently redefine the wider business.
4. `CLAUDE.md` owns repository operating safety. Execution skills apply specialised methods; they do not create business or design authority.
5. Current source and fresh renders own implemented reality. Report drift from the documents instead of silently treating implementation as a new strategic decision.
6. Archived or historical material, including anything recovered from git history, is a non-authoritative preservation source. Extract from it only when reconciled with current authority.

Public routes, navigation and publication state come from active source and explicit release decisions. A document entry does not make a route live.

## The reference-page rule

This rule lives here. Design and Engineering carry a pointer to it and nothing more.

**A page becomes a quality or implementation reference only when the user names it for that task, and no document records which page that is.** Some pages are stronger than others and that changes over time; a name recorded in an authority would go stale and would quietly grant authority to work the user may already want rebuilt.

So: use a reference page when the user names one, and do not go looking for one otherwise. Never infer that a page is exemplary because it exists, because it is live, or because it is the largest. An existing page is evidence of a standard, never a template, and its presence in the repository grants it no authority over new work.

When a reference has been named:

- Open a fresh capture first, and its source only when implementation understanding is necessary. Opening source first makes an executor imitate implementation detail instead of studying visual weight and page rhythm.
- Treat it as a standard of quality, not an anatomy library. It is not a template, pattern library, creative brief, page-length or section-count target, required surface sequence, breakpoint rule, animation rule or compositional ceiling.
- Its particular constructions, hero mechanisms, breakout geometries and motion choreography are page-specific. Reuse one only when the new material independently creates the same need.

A new page may differ substantially while remaining recognisably MindWP. Do not promote a recurring value or device to a global rule unless a genuine shared foundation owns it or an explicit project decision adopts it.

## Stability convention

**Durable foundation** survives individual offers and pages, but is still revisable by a later explicit decision. **Current approved direction** is authoritative now and revisited when the commercial direction changes. **Page-specific decision** applies only to the supplied page plan and task. **Open decision** is deliberately unsettled — do not invent an answer or block unrelated work.

These labels describe confidence and scope, not a lifecycle or approval system.

## Reading routes

A canonical authority is selected when the user supplies or explicitly names it, or when a route below assigns it to the work in hand. Do not open the full set for orientation.

**Page design or redesign** — the supplied page plan and `DESIGN.md`.

**Page build** — the approved design specification and `ENGINEERING.md`, plus the existing foundational CSS the task needs. The design is already decided at this point, so a reference page adds nothing and invites drift.

**Visual audit** — fresh captures of the page under review, and `DESIGN.md`.

**Repair, copy edit, tooling, or isolated technical work** — the changed scope and the authority that owns it. Nothing wider. A focused exporter or tool task must not inherit page, commercial or strategic context.

**Full orientation** — the complete authority set, only when explicitly requested. `pnpm context:export orientation` assembles it for use outside the repository.

In every route, open Foundation, Strategy or Writing when a business, positioning or claims question is genuinely open — not for background. If a missing decision would materially change the result, identify the gap rather than inventing an answer.

## Execution skills

Optional specialists, not a mandatory chain. Each declares its own trigger and context.

| Skill | Use for | May use a named reference page |
| ----- | ------- | ------------------------------ |
| `mindwp-page-design`     | Deciding a page or section design; direction, concept and critique. Produces a specification, no code | On request — capture first |
| `mindwp-page-build`      | Implementing an approved design in source                                                             | No                  |
| `mindwp-design-eye`      | Judging whether a built page is visually good                                                         | Yes — capture only  |
| `mindwp-frontend-quality`| Technical repair, finalisation and frontend quality review                                            | No                  |

Design is decided and reviewed before implementation begins. One skill does not automatically load another or a broader authority bundle. No skill selects a reference page for itself.
