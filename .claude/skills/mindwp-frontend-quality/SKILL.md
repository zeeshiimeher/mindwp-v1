---
name: mindwp-frontend-quality
description: Use when specialist frontend support is requested during MindWP implementation, when finalizing an approved and merged draft's CSS, spacing, responsive behaviour, and motion, or when auditing, diagnosing, repairing, or hardening MindWP frontend implementation, including markup, CSS architecture, responsive behaviour, semantics, accessibility, interaction states, motion lifecycle, reduced motion, performance, cleanup, or risk-driven technical QA.
---

# MindWP frontend quality

Apply `docs/ENGINEERING.md` to implemented evidence only when the user explicitly selects it. This is optional specialist support, not a mandatory finishing stage and not a second art-direction loop.

`docs/ENGINEERING.md` owns implementation rules and technical mechanism. The approved design and `docs/DESIGN.md` own visual intent. Do not reopen business strategy, page meaning or the approved design.

## Match the requested mode

- **Audit only:** inspect and report without changing source.
- **Fix and verify:** diagnose an observed defect, repair its coherent root owner, and rerun the relevant evidence.
- **Technical hardening:** improve semantics, accessibility, states, responsive mechanics, motion lifecycle, performance, or maintainability within accepted design intent.
- **Implementation support:** resolve a specialist frontend concern while design-and-build work is still active.
- **Finalize:** bring an approved, merged page or section fully up to the project's technical standard — spacing, typography inheritance, responsive behaviour, hover and reveal motion — without reopening layout or composition decisions.

Do not force a repair when the user asks for an audit. Do not require this skill after every design task. Only use Finalize once the user has approved and merged the relevant draft or variant — not mid-draft, and not as a substitute for Audit-only or Fix-and-verify when the actual ask is a single narrow issue, even on an already-finished page.

## Start from implemented evidence

Begin with relevant current source and available or task-required rendered evidence. Use the approved design and `docs/DESIGN.md` for visual intent, the supplied page plan for required meaning, relevant foundational CSS, and only the canonical authorities explicitly selected by the user. Do not inherit a broad design route or infer wider commercial, strategic or writing context.

If a missing decision would materially change the technical result, identify it instead of widening context without permission. A focused exporter or isolated technical audit must not infer broader page context.

Do not inspect another page by default. Inspect one only for direct work on it, a named implementation question, a specific regression, or when the user names it.

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

If the problem is an absent hierarchy, weak concept, page narrative, section relationship, or final body-copy decision, report it as a design-owned issue and return it to the approved design and `docs/DESIGN.md` rather than resolving it here.

## Preserve accepted design intent

Distinguish a defect from an intentional local exception. Do not normalise page-specific typography, measures, overlap, density, surfaces, or responsive behaviour into global defaults merely because a shared primitive exists.

When both skills are active, preserve the accepted meaning-bearing relationship and responsive intent. If a real technical constraint would materially change the concept, make that consequence explicit and return the decision to design rather than flattening it silently.

## What finalize looks for

These are judgment prompts, not hard rules — apply what's actually true of the page, skip what isn't. `docs/ENGINEERING.md` owns the underlying rules for CSS ownership, layout and responsive mechanics, and interaction and motion; apply those rather than restating them here.

- **Typography:** headings and paragraphs should inherit the global type scale unless a section has a genuine, deliberate display moment; remove page-local font-size duplication that just restates the global default.
- **Measure and width:** let a container or a shared measure-governing primitive control width rather than stacking ad hoc `max-width` on individual headlines and paragraphs. Watch for the same width value duplicated across several sections in slightly different forms — that's usually one mechanism trying to happen in many places.
- **Spacing:** when a divider or border sits inside a gapped layout, center it in the gap rather than letting it sit flush against one side's content.
- **Sizing:** prefer content-driven height (padding plus line-height) over an enforced `min-height`. Keep `min-height` only where an element positions children absolutely inside itself and needs the reserved space, or where a `next/image fill` needs an explicitly sized parent — prefer `aspect-ratio` there instead of a fixed height that needs manual retuning per breakpoint.
- **Grid tracks:** a `minmax()` floor wider than a track actually needs can silently steal space from its sibling track at specific viewport widths and distort an intended ratio — check whether every floor is load-bearing.
- **Responsive:** confirm padding, gaps and column order are correct, and that font sizes actually shrink at the existing breakpoints rather than just being copied from desktop.
- **Code quality:** improve the page's markup and CSS while the rendered frontend stays materially the same. A visible change beyond what the existing implementation already expressed is a design decision — surface it rather than making it here.

Converging a duplicated technical mechanism into one already-authorized shared owner is a repair. Changing the resulting width, proportion, or alignment beyond what the duplicated instances already expressed is a design decision — surface it, don't decide it.

## Repair coherently

Trace a defect to its root owner and repair there, in that order: semantic structure and source order first, then CSS ownership, then local overrides. Do not compensate at a later layer for a fault at an earlier one.

`docs/ENGINEERING.md` owns the rules themselves — semantics and source order, CSS ownership and promotion, layout and responsive mechanics, interaction states, motion lifecycle and reduced motion, forms and privacy, routing, and performance. Apply them rather than restating them here.

## Verify according to risk

Use the smallest evidence that can establish the result, followed by wider checks when the changed owner affects them. `docs/ENGINEERING.md` owns which checks, viewports, states and captures a given change requires.

Do not repeat a whole-page compositional review already owned by design. Verify that the technical result preserves it.

For an audit, report severity, observed evidence, the relevant viewport or state when applicable, and the likely source owner. For a repair, report the root owner changed, checks and renders run, and remaining risk. Do not claim visual acceptance, publication, deployment, or a business decision the evidence does not prove.
