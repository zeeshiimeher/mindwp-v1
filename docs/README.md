# MindWP documentation

This directory is MindWP's reusable project memory. Open only the authorities the work in hand needs — the reading routes below say which those are. Do not turn the map into a workflow or infer authority from file age.

## Active authorities

| Document                                                     | Owns                                                                                                                                                                          |
| ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [FOUNDATION.md](./FOUNDATION.md)                             | Durable identity, audience principles, responsibility, truth, proof, privacy, professional boundaries and non-claims                                                          |
| [STRATEGY.md](./STRATEGY.md)                                 | Current commercial decisions: public category, market, offer hierarchy, services, acquisition doors, delivery policy, per-client matters                                      |
| [WRITING.md](./WRITING.md)                                   | Public voice, and where each fact belongs — main copy, FAQ, proposal or meeting                                                                                               |
| [RATIONALE.md](./RATIONALE.md)                               | Why the direction was chosen, what was rejected, and what would justify changing it. Reasoning only — it never overrides the three above                                      |
| [INFORMATION-ARCHITECTURE.md](./INFORMATION-ARCHITECTURE.md) | The current website structure: which pages exist or are planned, what each page is responsible for, which pages own the main commercial offers, and how navigation is grouped |
| [DESIGN.md](./DESIGN.md)                                     | Durable visual quality: composition, hierarchy, scale, use of space, responsive experience, and interaction and motion intent                                                 |
| [ENGINEERING.md](./ENGINEERING.md)                           | Repository source, CSS, responsive, accessibility, interaction, motion mechanism, performance, capture commands and validation                                                |

The documents have separate domains. When two statements appear to conflict, use the authority that owns the decision rather than combining both.

Foundation wins on identity, permission and boundaries. Strategy wins on what is sold and how. Writing wins on whether a fact is public and how it is worded. Rationale never wins — if it disagrees with an authority, the authority is right and Rationale is stale. A genuine contradiction between authorities is a documentation bug: report it rather than reconciling it quietly.

Strategy owns the audience, market, pricing posture, offer hierarchy, acquisition doors and conversion direction. These decisions stay settled even when they are not repeated elsewhere.

For page work: the approved page plan owns required meaning, `DESIGN.md` owns visual quality, and `ENGINEERING.md` owns implementation and technical mechanism. The task prompt may add more specific direction.

**Do not read every document for background.** Open the ones the work in hand needs.

| If you are…                                       | Read                                                                                                                                                                          |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| New to MindWP and need to understand the business | `STRATEGY.md`, then `FOUNDATION.md`. Add `RATIONALE.md` only if the reasoning matters                                                                                         |
| Planning a page                                   | `INFORMATION-ARCHITECTURE.md` for the page's role in the site, `STRATEGY.md` for offers, plus `FOUNDATION.md` or `WRITING.md` where a truth, proof or claims question is open |
| Designing or redesigning a page                   | The approved page plan and `DESIGN.md`. Not the business documents by default                                                                                                 |
| Writing anything public                           | `WRITING.md`, plus `STRATEGY.md` for the current names and offers                                                                                                             |
| Questioning or revising the strategy              | `RATIONALE.md` first, then `STRATEGY.md`                                                                                                                                      |
| Building or repairing                             | `ENGINEERING.md` and the approved design. Not the business documents                                                                                                          |

## Source roles and precedence

1. An explicit current user decision is authoritative for its stated scope and may revise an older decision.
2. The active documents above are canonical within their respective domains.
3. An explicitly supplied page plan owns that page's job, audience, intent, action, meaning, proof and fixed boundaries. It does not silently redefine the wider business.
4. `CLAUDE.md` owns repository operating safety. Execution skills apply specialised methods; they do not create business or design authority.
5. Current source and fresh renders own implemented reality. Report drift from the documents instead of silently treating implementation as a new strategic decision.
6. Superseded material, including anything recovered from git history, is never authoritative. Do not treat it as a current instruction, and do not copy its wording or structure into new work.

Public routes, navigation and publication state come from active source and explicit release decisions. A document entry does not make a route live.

## How work enters

Page work does not begin at a fixed point. It begins wherever the supplied material leaves off, and two principles govern that:

> **Enter at the latest stage the supplied material reaches.** Identify a material earlier-stage gap, but do not automatically rerun completed work.

> **Any stage may return a decision upward with evidence. No stage may silently replace a decision owned elsewhere.**

Recognise the stage from what arrives, not from the words used to ask. Say in one line which stage you are entering at, then continue — do not ask the user to classify their own request or to adopt particular terminology.

| What arrives                                              | Already settled            | Enter at                        |
| --------------------------------------------------------- | -------------------------- | ------------------------------- |
| A route name, a business goal or a rough idea             | nothing                    | Planning                        |
| Argument, matters, proof, boundaries, reader demands      | the plan                   | Design                          |
| Composition, surface rhythm, what each section is made of | plan and composition       | Section development, then build |
| Final copy and an approved design                         | plan, composition and copy | Build                           |
| A built page and "is this good"                           | all                        | Visual judgement                |
| A built page and a named defect                           | all                        | Technical repair                |
| One section, one direction, one comparison                | varies                     | The requested scope only        |

A supplied plan that skips a stage does not mean that stage is done — it means there is a gap to name. Enter at the latest stage the material actually reaches, and report what an earlier stage left open rather than quietly filling it.

Supplied decisions are authoritative for their stated scope. Check them only for a conflict with an active authority, proof that does not exist, an unsupported claim, an open commercial decision being silently settled, or a serious design, accessibility or technical problem. Do not replan, rewrite or reformat supplied work to fit an internal template.

The escalation rule is what keeps this soft without making it vague. Build returns an impractical payload to design rather than substituting an easier one. Design returns a payload that needs unavailable proof to planning rather than inventing it. Planning returns an open commercial term to the owner rather than settling it. Each escalation is explicit and carries its evidence.

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

**Page planning** — `INFORMATION-ARCHITECTURE.md` for the page's role in the site, `STRATEGY.md` for offer ownership, and `FOUNDATION.md` or `WRITING.md` where a truth, proof or claims question is genuinely open. Not `ENGINEERING.md`. There is no dedicated planning authority; treat an open planning question as a gap to name rather than inventing an answer.

**Page design or redesign** — the approved page plan, `DESIGN.md`, and any task-specific reference or global design foundation the work needs. Not `FOUNDATION.md`, `STRATEGY.md`, `RATIONALE.md` or `ENGINEERING.md` by default.

**Page build** — the approved design, the working or final copy, `ENGINEERING.md` and the relevant source files. The design is already decided at this point, so a reference page adds nothing and invites drift. Do not reopen business strategy or redesign the page unless Zeeshan asks.

**Visual audit** — fresh captures of the page under review, judged against `mindwp-design-eye`'s stated criteria.

**Repair, copy edit, tooling, or isolated technical work** — the changed scope and the authority that owns it. Nothing wider. A focused exporter or tool task must not inherit page, commercial or strategic context.

**Full orientation** — the complete authority set, only when explicitly requested. `pnpm context:export orientation` assembles it for use outside the repository.

In every route, open Foundation, Strategy or Writing when a business, positioning or claims question is genuinely open — not for background. If a missing decision would materially change the result, identify the gap rather than inventing an answer.

Strategy separates settled global decisions, matters decided per client, experimental capabilities and genuinely open decisions. Check which of those a question falls into before treating it as unresolved: a matter decided per engagement is settled, not open.

## Execution skills

Optional specialists, not a mandatory chain. Each declares its own trigger and context.

| Skill                     | Use for                                                    | May use a named reference page |
| ------------------------- | ---------------------------------------------------------- | ------------------------------ |
| `mindwp-design-eye`       | Judging whether a built page is visually good              | Yes — capture only             |
| `mindwp-frontend-quality` | Technical repair, finalisation and frontend quality review | No                             |

Page planning currently has no dedicated skill or authority document of its own; apply the reading route above directly.

**These are not a sequence.** No skill automatically follows another, none loads a broader authority bundle, and none selects a reference page for itself. A skill may recommend a next step and must not require it. Design is reviewed before implementation begins, but a request to build only is a request to build only — and a partial request is answered at the scope asked for, not expanded into the full process.
