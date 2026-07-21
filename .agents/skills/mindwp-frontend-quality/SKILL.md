---
name: mindwp-frontend-quality
description: Use when specialist frontend support is requested during MindWP implementation, or when auditing, diagnosing, repairing, or hardening MindWP frontend implementation, including markup, CSS architecture, responsive behaviour, semantics, accessibility, interaction states, motion lifecycle, reduced motion, performance, cleanup, or risk-driven technical QA.
---

# MindWP frontend quality

Apply `docs/ENGINEERING.md` to implemented evidence only when the user explicitly selects it. This is optional specialist support, not a mandatory finishing stage and not a second art-direction loop.

## Match the requested mode

- **Audit only:** inspect and report without changing source.
- **Fix and verify:** diagnose an observed defect, repair its coherent root owner, and rerun the relevant evidence.
- **Technical hardening:** improve semantics, accessibility, states, responsive mechanics, motion lifecycle, performance, or maintainability within accepted design intent.
- **Implementation support:** resolve a specialist frontend concern while design-and-build work is still active.

Do not force a repair when the user asks for an audit. Do not require this skill after every design task.

## Start from implemented evidence

Begin with relevant current source and available or task-required rendered evidence. Use the supplied page plan or design intent, relevant foundational CSS and only the canonical authorities explicitly selected by the user. Do not inherit a broad design route or infer wider commercial, strategic or writing context.

If a missing decision would materially change the technical result, identify it instead of widening context without permission. A focused exporter or isolated technical audit must not infer broader page context.

Do not inspect Homepage or Local SEO by default. Use either only for direct work on that page, a named implementation question, a specific regression, or an explicit user request.

## Identify the technical owner

Trace the issue to the smallest coherent owner:

- route markup, semantics, or source order;
- component boundary or client state;
- global token, typography, layout, or shell CSS;
- page or component CSS;
- parent flow, section pacing, container width, or the smallest overflow layer;
- interaction state or accessibility behaviour;
- motion target, lifecycle, or reduced-motion branch;
- form validation, privacy, routing, publication, performance, test, or tool.

If the problem is an absent hierarchy, weak concept, page narrative, section relationship, or final body-copy decision, report it as a design-owned issue. Use `mindwp-design-build` only when the user requested that design work.

## Preserve accepted design intent

Distinguish a defect from an intentional local exception. Do not normalise page-specific typography, measures, overlap, density, surfaces, or responsive behaviour into global defaults merely because a shared primitive exists.

When both skills are active, preserve the accepted meaning-bearing relationship and responsive intent. If a real technical constraint would materially change the concept, make that consequence explicit and return the decision to design rather than flattening it silently.

## Repair coherently

- Correct semantic structure and source order before compensating with CSS order or breakpoint patches.
- Correct CSS ownership before adding specificity or overrides.
- Let responsive mechanics preserve the intended comparison, sequence, causality, proof association, ownership, and hierarchy.
- Implement the states that actually exist and remove false affordances from static material.
- Preserve keyboard use, focus, contrast, touch behaviour, labels, disclosure semantics, and non-hover meaning.
- Clean up observers, listeners, timelines, media-query branches, and delayed work; make reduced motion reach the same information and stable state.
- Address measured or credible performance risk without reducing meaningful proof or design by reflex.
- Remove wrappers, selectors, duplication, and local workarounds only when they have no remaining visual or behavioural job.

Do not promote a local technique to a token, global rule, or shared component until repetition or an explicit project decision establishes a stable role. Recurrence across two accepted pages alone is not enough.

## Verify according to risk

Use the smallest evidence that can establish the result, followed by wider checks when the changed owner affects them:

- focused source or automated checks for deterministic behaviour;
- affected widths and states for responsive, CSS, interaction, and motion changes;
- keyboard or live-browser inspection where static captures cannot prove behaviour;
- reduced-motion and intermediate-width checks when the implementation creates material risk;
- build or full test gates when application source, dependencies, routes, or shared foundations are affected.

Do not repeat a whole-page compositional review already owned by design. Verify that the technical result preserves it.

For an audit, report severity, observed evidence, the relevant viewport or state when applicable, and the likely source owner. For a repair, report the root owner changed, checks and renders run, and remaining risk. Do not claim visual acceptance, publication, deployment, or a business decision the evidence does not prove.
