# MindWP page workflow

MindWP uses one normal page sequence:

> **Plan meaning → build the complete desktop visual draft → user visual decision → finish production → final audit.**

The phases are decision boundaries, not presentation ceremony. Skip work that is already approved and recoverable. A short build prompt for a page with approved meaning goes directly to visual drafting; it must not return another plan.

## 1. Route by the next useful outcome

| Request or current state                                                                                                          | Focused skill        | Outcome                                                                                      |
| --------------------------------------------------------------------------------------------------------------------------------- | -------------------- | -------------------------------------------------------------------------------------------- |
| Meaning, audience, offer, claims, CTA, narrative, headings, section jobs, or content architecture is absent or reopened           | `mindwp-plan-page`   | Approval-ready meaning and content architecture                                              |
| Meaning is approved and the user asks to build, design, reconstruct, redesign, or create a route variant                          | `mindwp-design-page` | The first complete coded desktop draft that clears the internal visual threshold at `1640px` |
| The user approves the visual draft or asks to finish, make responsive, refine interactions or motion, harden, test, audit, or fix | `mindwp-finish-page` | Finished responsive production code and evidence-backed audit                                |
| A broad request crosses these boundaries or the right phase is unclear                                                            | `mindwp-site`        | Concise routing to the smallest focused skill set                                            |

The user visual decision is the only routine pause between the first qualifying coded visual draft and production finishing. User-visible drafts are approved or rejected. Targeted refinement occurs only when the user explicitly requests changes; approval moves to `mindwp-finish-page`, while rejection excludes the draft from future creative evidence.

Audit-only and fix-and-review work enter `mindwp-finish-page` directly. They do not replay planning or visual drafting unless the user explicitly reopens those decisions.

### Short-prompt routing

| Prompt                                                                                   | Behaviour                                                                                                                                                                                                                                         |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Plan a new service page.`                                                               | Use `mindwp-plan-page`; plan meaning and content architecture only.                                                                                                                                                                               |
| `Build the approved Lead Response page.`                                                 | Use `mindwp-design-page`; begin from approved meaning, privately resolve and block the page-level spatial constructions, run the reference-blind composition critique before late brand calibration, and return only the first qualifying render. |
| `Build a different Lead Response variant at /services/lead-response-handling-variant-2.` | Use `mindwp-design-page`; preserve approved meaning and run the same procedure at that ordinary route before returning its first qualifying render.                                                                                               |
| `Finish and audit the Lead Response page.`                                               | Use `mindwp-finish-page`; complete responsive production, states, motion, accessibility, cleanup and testing, then perform the final rendered audit.                                                                                              |

## 2. Load only the authority that owns the decision

- **Planning:** [STRATEGY.md](./STRATEGY.md), the relevant [PAGE-LEDGER.md](./PAGE-LEDGER.md) row, and `docs/pages/<page>/page.md` when it holds active or approved meaning.
- **Visual drafting:** the approved meaning, [DESIGN.md](./DESIGN.md), the technical boundaries in [ENGINEERING.md](./ENGINEERING.md), the current ledger row, stable shared foundations, repository assets, and the intended source/route context. The `mindwp-design-page` skill controls when focused or complete permitted reference evidence enters. [STRATEGY.md](./STRATEGY.md) is read only when no approved page record exists or a voice or claims question arises.
- **Finishing or audit:** current source and current renders first, then [DESIGN.md](./DESIGN.md), [ENGINEERING.md](./ENGINEERING.md), the ledger row, and only the strategy or page-record material needed to verify truth and approved meaning.

Existing files are evidence, not automatic authority. Keep `_dev-reference/current-site/` isolated unless the user explicitly requests old-site reference work. Rejected or excluded work must not steer a new design. An inaccessible approval can be recorded as history, but it cannot supply usable fidelity.

## 3. Plan meaning

Use this phase only when page meaning is absent, reopened, contradictory, or explicitly requested.

Establish, at the depth the page needs:

- audience, offer, recognised problem, honest promise, service boundary, proof boundary, and CTA;
- the central commercial argument and narrative progression;
- semantic landmarks: headings, communication jobs, first-glance takeaways, essential public meaning, supporting payload depth, and important neighbour distinctions;
- copy status: fixed, adaptable, or still open.

Planning stops at meaning and content architecture. Do not propose visual territories, carriers, page silhouettes, layouts, component ideas, motion, or implementation. When the user approves the meaning, record it compactly and set the next action to the first complete desktop visual draft.

## 4. Build the complete desktop visual draft

This is direct design in code, not a second planning stage. It supports:

- a new page from approved meaning;
- PNG or concrete-reference reconstruction;
- a full-page redesign that preserves approved meaning;
- a section redesign in the context of its existing page;
- a user-requested route variant.

The `mindwp-design-page` skill owns the drafting procedure: meaning-first spatial construction, composition-first blocking, the internal build, `1640px` reference-blind critique, late brand calibration, and the discard-and-recompose quality threshold. [DESIGN.md](./DESIGN.md) owns the composition principles and the first-draft standard that the result must clear. All of that composition work is private and internal: it creates no experiment route, planning artifact, repository record or user approval stage, and the user sees only the first qualifying complete desktop render. Stop only when approved meaning is genuinely missing or contradictory, a required concrete reconstruction target is unavailable, or the user has retained a material decision that cannot be inferred safely.

The visual draft should consider how its idea can survive mobile and where motion may help, but detailed responsive CSS, interaction refinement, motion implementation, accessibility, performance, source cleanup, full testing, and release work belong to finishing.

### Route handling during drafting

Use the intended route by default. If the user names another ordinary route, build the variant there without requiring an experiment directory, registry, lineage system, special prototype record, or separate infrastructure. Do not add draft routes to navigation or the sitemap, deploy them, or spend the pre-approval phase deciding indexing, canonical, publication, or release policy.

## 5. User visual decision

The rendered desktop page is evidence for a human decision; implementation alone is not approval. User-visible drafts have two default decisions:

- **Approve:** record the visual decision and move to `mindwp-finish-page`.
- **Reject:** record the draft as rejected and excluded from creative evidence. Do not carry its presentation into a replacement.

Targeted refinement happens only when the user explicitly asks to change the visible draft. Preserve only what the user retained, revise the requested scope in full-page context, and return new coupled evidence for another approve-or-reject decision.

No production-hardening requirement should delay this decision. Conversely, desktop visual approval does not imply responsive acceptance, technical completion, publication, or release.

## 6. Finish production and run the final audit

`mindwp-finish-page` owns the post-approval work:

1. Reconcile the approved desktop render with current source and preserve its hierarchy, rhythm, anchors, section meanings, and accepted visual character.
2. Complete tablet and mobile recomposition from the same semantic structure; fix source order and layout ownership before adding breakpoint patches.
3. Implement and refine real hover, focus-visible, active, open, selected, keyboard, touch, and error states.
4. Add only earned motion, keep the static result complete, and resolve reduced motion to the same meaning and final state.
5. Complete accessibility, privacy, performance, metadata, routing, source cleanup, and supportable component boundaries at the depth the page needs.
6. Run the relevant source checks, build, tests, accessibility and interaction checks in [ENGINEERING.md](./ENGINEERING.md).
7. Capture the default `1640px` and `400px` pair plus all direct sections. Add intermediate widths, state evidence, and reduced-motion captures when the page or a finding makes them relevant.
8. Audit full-page hierarchy, section quality, commercial truth, responsive composition, interaction, accessibility, overflow, performance risks, and comparison with the approved desktop decision. Fix material issues and recapture before reporting completion.

In **audit-only** mode, inspect and report without editing. In **fix-and-review** mode, correct the smallest coherent root cause, rerun the relevant checks, and recapture every coupled viewport or state. Final audit is part of this skill, not a fifth skill.

Publication remains separate. Add navigation, sitemap, canonical, indexing, deployment, or release changes only when the task or an explicit approval includes them.

## 7. Records and state

`docs/pages/<page>/page.md` is an optional compact page record. While meaning is active, it may hold approved jobs, headings, order, payloads, truth boundaries, CTA, current phase, references, and the next action. After implementation, current source and renders own implemented reality; reduce the record to durable boundaries rather than maintaining a parallel design specification.

[PAGE-LEDGER.md](./PAGE-LEDGER.md) owns the independent states for meaning, desktop draft, visual decision, production finish, final audit, publication, and reference role. Update only what new evidence proves. A rendered draft may be recorded while visual decision is still pending; visual approval may be recorded while finishing is not started; a rejected draft must be marked rejected and excluded from creative evidence.

Do not create prototype records, experiment records, tool-neutral brief files, or another handbook layer for the normal workflow. Older files may remain only as explicit historical evidence when they still carry a unique recoverable fact; they are not loaded or extended by default.

## 8. Optional external tools

Figma, image generation, Claude Design, or another design/coding tool may be used when the user requests it or it materially improves the current phase. General design-quality skills available in the agent session (such as `frontend-design`, `impeccable`, or similar craft aids) may assist the visual-draft phase, and a GSAP or motion skill may assist finishing, always subordinate to this repository's authorities and the approved meaning. Tool and skill use does not create a repository workflow stage, special handoff skill, experiment lane, or approval layer. Preserve the same meaning, reference permissions, route boundary, and return outcome that the active MindWP skill owns.

## 9. Context handoff

Use `pnpm context:page -- <page-id> --profile <planning|design|finish|audit>` when a compact restart packet is useful. `planning` loads meaning authority; `design` loads the visual-draft authority set; `finish` and `audit` load the production and verification set. An existing page record is included when present. Generated packets stay outside the repository and never become a new authority.

Every report ends with `What is done` and `What is next`.
