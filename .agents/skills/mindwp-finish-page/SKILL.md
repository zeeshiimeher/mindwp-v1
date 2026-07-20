---
name: mindwp-finish-page
description: Use when finishing, auditing, or fixing an implemented MindWP page through responsive CSS, interaction states, motion, accessibility, cleanup, performance, testing, rendered review, or final acceptance evidence.
---

# MindWP page finishing

Turn an approved desktop visual draft into a complete responsive production page, or audit and repair an existing implementation from rendered evidence.

## Choose the finishing mode

- **Finish production:** complete responsive behavior, states, motion, accessibility, performance, cleanup, testing and final audit after the user's visual decision.
- **Audit-only:** inspect and report without source changes.
- **Fix-and-review:** verify approved findings, correct the smallest coherent root cause, recapture and close them.

Read the finishing phase in `docs/PAGE-WORKFLOW.md`, current source and current renders first, then the relevant ledger row, `docs/DESIGN.md`, `docs/ENGINEERING.md`, and only the strategy or page-record material needed to verify approved meaning and truth. Do not replay planning or return another design brief.

## Preserve the accepted desktop result

Identify the approved render and the hierarchy, rhythm, anchors, section character and commercial meaning it establishes. Inspect JSX, global styles, page styles, component styles, assets, tests, computed values and route behavior before editing.

Audit styling ownership against the repository's current global tokens, semantic typography roles, containers, shared shell and reusable page families. Remove page-local copies of shared behavior when the live foundation can own them, and simplify wrappers or overrides that no longer have a visible job. Preserve intentional local properties, type roles, measures, surfaces and composition rules when they are necessary to reproduce the approved design; finishing must not flatten a distinctive page into the shared baseline.

Trace defects to their actual owner:

- parent layout normally owns sibling spacing through `gap`;
- a section owns pacing between its direct content groups;
- a container owns width and inline inset;
- global semantic roles own ordinary typography;
- page CSS owns earned art direction and local composition;
- component CSS owns isolated repeated behavior;
- overflow belongs on the smallest decorative or intentionally scrollable layer that needs it.

Fix structure and source order before adding breakpoint patches. Keep exceptions that have a clear visible purpose; remove those that merely preserve an accidental screenshot wrap.

## Finish production

1. Recompose tablet and mobile deliberately from the same semantic markup. Change flow, order, grid, spacing, cropping, artwork complexity and local type roles as the smaller experience needs; do not merely shrink desktop.
2. Implement the states that exist: hover, focus-visible, active, open, selected, keyboard, touch, loading and error where relevant. Keep meaning available without hover and do not make static material appear clickable.
3. Add only concentrated, earned motion. Keep the static composition complete, clean up observers and timelines, and make reduced motion resolve to the same information and stable final state.
4. Complete semantic landmarks, heading order, labels, contrast, focus, touch targets, disclosure behavior, media dimensions, privacy, metadata, performance and route correctness.
5. Simplify wrappers, modifiers, duplicated declarations and breakpoint patches after the render stabilises. Promote shared code only when repetition is real.
6. Run the relevant checks from `docs/ENGINEERING.md`. Source, dependency, route, component or CSS changes normally require `pnpm check`, `pnpm build` and `pnpm test`.

Publication remains independent. Navigation, sitemap, canonical, indexing, deployment and release changes require explicit task scope or approval.

## Capture and audit

Store captures outside the repository. Use the default full-page pair and all direct sections for a completed page:

```bash
pnpm capture:route -- --sections <route> /tmp/<review-name>
```

Use `--full` when intermediate widths and reduced motion are relevant. Use repeatable `--section <id>` for a bounded change. Inspect a live browser when static capture cannot prove interaction.

Review in this order:

1. route response, console/runtime issues, document geometry and unintended horizontal overflow;
2. full-page first glance, hierarchy, silhouette, pacing, density, transitions and repeated composition;
3. every section's meaning, typography, alignment, crop, spacing, proof readability and neighbour relationship;
4. mobile and risk-driven intermediate widths for genuine recomposition, source order, touch targets, artwork and local scrolling;
5. keyboard, pointer, open/selected/error states and meaning without hover;
6. motion targets, cleanup and reduced-motion resolution;
7. accessibility, performance risks, commercial truth and fidelity to the approved desktop decision.

Classify findings as blocker, material or polish. In audit-only mode, report severity, viewport/state, observed evidence, artifact path and likely source without editing. In fix-and-review or finish mode, repair the root owner, rerun coupled checks and recapture until no material defect remains.

Update **Production finish** and **Final audit** only to the state proven by fresh checks and rendered evidence. Explicit visual or publication acceptance still belongs to the user.

End with verified evidence, remaining risks, `What is done`, and `What is next`.
