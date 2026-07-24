---
name: mindwp-design-build
description: Use when giving MindWP art direction, developing section concepts, critiquing or redesigning a page, or directly implementing and visually refining a full page or bounded section. Apply it to design-only and coded requests without forcing implementation when the user asks only for direction, planning, or critique.
---

# MindWP design and build

Always read and apply `docs/DESIGN.md` when using this skill in the MindWP repository. It is the canonical MindWP design authority.

Own the page experience and meaning-bearing composition without reproducing the complete design authority inside this skill.

## Match the requested outcome

Support these modes without turning them into a mandatory sequence:

- **Design direction:** describe a specific art direction, page progression, and important section relationships without writing code.
- **Section concept planning:** develop meaning-specific composition for important or uncertain sections in page context.
- **Critique:** diagnose hierarchy, functional repetition, proof treatment, continuity, responsive intent, and likely visitor understanding without editing unless asked.
- **Redesign:** preserve approved meaning while changing the presentation at section or page scale.
- **Implementation:** design and build the requested full page or bounded scope, including responsive integration and rendered refinement.

Return only the requested outcome. Do not create code, routes, files, workflow documents, or approval machinery for a direction-only or critique request.

For direction or concept work, make consequential proposals concrete enough to sketch or build. Identify the actual material, dominant and receding hierarchy, eye path, neighbour handoff, and narrow-width transformation. Do not substitute abstract design adjectives for those decisions.

## Load bounded context

The default design context is:

- `docs/README.md` for document roles and routing;
- `docs/DESIGN.md` as the permanent visual authority;
- the explicitly supplied page plan;
- truthful media, work, and proof supplied for the task.

Load other authorities only when the task requires them:

- Read `docs/FOUNDATION.md` when the page plan leaves a business truth, offer boundary, audience fact, or capability unresolved.
- Read `docs/STRATEGY.md` when a commercial, positioning, page-role, or prioritisation decision remains unresolved.
- Read `docs/WRITING.md` when substantial copy creation or rewriting requires authority beyond the supplied page plan.
- Read `docs/ENGINEERING.md` when implementation, source changes, responsive integration, testing, or rendered verification is requested.
- Inspect relevant foundational CSS when implementation requires exact tokens, typography, layout, button, form, or global behaviour.
- Inspect current route source and fresh renders when critique, redesign, or implementation depends on implemented reality.

Do not load Foundation, Strategy, Writing, Engineering, accepted pages, rejected attempts, or unrelated page records merely for general orientation.

Do not inspect Homepage or Local SEO by default. Inspect either only for:

- direct work on that page;
- a named design or implementation question;
- diagnosis of a specific regression;
- an explicit user request.

For a concrete external reconstruction target, inspect the target at the start because fidelity is the task.

Stop for clarification only when:

- the page or scope cannot be identified;
- fixed material materially contradicts an authority;
- required proof or a reconstruction target is unavailable;
- the user has retained a decision whose alternatives would produce materially different work.

## Protect meaning and truth

Identify what the supplied plan marks fixed, adaptable, open, and unavailable.

Preserve:

- facts;
- search intent;
- approved claims;
- real proof;
- service ownership;
- professional, privacy, consent, legal, and clinical boundaries;
- wording explicitly marked fixed.

Never invent proof, metrics, interfaces, client results, operational detail, account ownership, pricing, or professional capability to complete a design.

Treat plan rows as meaning material, not component or object counts. Supporting reservoirs do not require the same number of public paragraphs, cards, diagrams, or interface elements.

Do not infer a new business decision from a gap. Read the authority that owns the decision or report the unresolved point.

## Develop page and focal sections recursively

Establish a provisional visual progression and rhythm around the supplied narrative, then develop important or uncertain compositions early.

Let their need for scale, proof, grouping, density, transition, or quietness revise the full page. Revisit page scale and focal-section scale until neither merely accommodates decisions frozen at the other.

For important material, make the real relationship visible. Decide:

- what the visitor should understand, trust, compare, choose, or do;
- what should dominate and what should recede;
- how the eye should move;
- how the material inherits from and hands off to its neighbours;
- what meaningful structure remains when decoration is removed;
- how the relationship transforms at narrow widths.

Shared palette, typography, sections, containers, surfaces, and introduction grammar provide coherence. Distinguish material through its inner hierarchy and reading behaviour when meaning calls for it, not through arbitrary novelty.

Cards, lists, grids, bands, timelines, panels, tabs, diagrams, and interfaces are valid when the information or interaction has that structure. Their presence is not evidence of generic design.

Group sections only when they form one continuous meaning or experience. Keep every important unit inside the group legible in hierarchy and transition. Preserve separate sections when the argument, atmosphere, or reading behaviour genuinely changes.

## Co-develop content and composition

Work with credible content before the composition is fixed.

Where authorised, adapt:

- headings;
- explanatory copy;
- grouping;
- sequence;
- depth;
- supporting points;
- presentation format.

Do not freeze the complete body before important compositions exist. Do not create empty visual containers and force unrelated copy into them.

Allow content to expose decorative or shallow design. Allow design to expose copy that should be shortened, deepened, regrouped, or rewritten.

When implementation is in scope, leave final adaptable copy deliberate and truthful. Do not retain filler for a mandatory later finishing stage.

## Carry responsive and motion intent with the concept

Give major compositions a credible narrow-width reading order before deep desktop polish.

Preserve:

- meaning;
- priority;
- proof;
- important relationships;
- the intended action;
- essential interaction.

Natural stacking is valid for linear material. Recompose when stacking would destroy comparison, sequence, causality, proof association, ownership, or hierarchy.

Use interaction or motion only for orientation, state, causality, connection, meaningful emphasis, or spatial continuity. Keep the static equivalent complete.

Do not add blanket reveals, hover motion to non-interactive material, or motion that attempts to rescue weak hierarchy.

## Implement directly when requested

Distinguish two implementation situations before starting.

**Draft or variant exploration** — a first pass, or several variants of the same section built to compare. Favor creative range over full engineering rigor: a genuinely beautiful, well-composed draft beats a technically tidy but timid one. Still required even here: semantic colour, spacing, radius, shadow, and motion tokens over raw values; inherited global typography roles rather than invented ones; real semantic structure (heading order, landmarks, alt text, keyboard reachability); and page- or section-local CSS only — do not edit shared global foundation files (tokens, typography, layout, buttons, shared components) while exploring, so a rejected variant stays trivially discardable. Everything else can wait: exact CSS-ownership specificity, `minmax()`/grid-track precision, full hover coverage, exhaustive responsive tightening, replacing absolute-positioning shortcuts with flex/grid, complete interaction-state coverage, and the `pnpm check`/`build`/`test` gate. Once the user approves and merges a draft, run `mindwp-frontend-quality`'s Finalize mode to bring it up to full standard — don't treat draft-quality implementation as finished on its own.

**Merge-ready build** — implementing the page or section the user has already decided on. Follow `docs/ENGINEERING.md` in full:

Before adding page-specific styling, inspect the relevant existing foundations, including the actual token, typography, layout, button, form, and global styles needed for the task.

Use the existing shared system as the default:

- semantic HTML sections;
- `.section` for shared vertical rhythm and surface treatment;
- `.container` and its appropriate width variants;
- existing section-introduction structures;
- Flex and Grid for normal layout relationships;
- global `h1`–`h4`, paragraph, and body styles;
- semantic colour, typography, spacing, border, radius, shadow, and motion tokens;
- existing buttons, controls, and utilities where their role matches the design.

Start with those foundations. Extend or depart from them only when the composition has a specific requirement they do not serve.

Inherit global typography before adding page-local typography. Do not add font sizes to page-specific BEM selectors by default.

Override a global typographic role only when the composition requires a deliberate difference in scale, measure, emphasis, wrapping, or responsive behaviour. Prefer existing typography tokens or utilities before raw values.

Use concise page-specific BEM classes for the meaning-specific composition. Page classes should own relationships, geometry, hierarchy, state, and responsive transformation rather than duplicating the global token or typography system.

Use existing semantic tokens before introducing raw values. Local values remain acceptable for genuine component geometry, one-off proportions, controlled transparent tints, media treatment, or responsive calculations that do not have a durable shared role.

Do not create a new global token, utility, or shared component from one page-specific need without evidence that it has a stable cross-page role.

Use one meaningful source structure across widths. Keep client code inside earned interaction islands and preserve accessibility, performance, and publication boundaries.

Do not add draft work to navigation, sitemap, indexing, canonical configuration, deployment, or public release unless the user explicitly includes it.

## Refine from rendered evidence

Render while content and composition can still change.

For a complete page, inspect:

- a broad desktop full-page view;
- a narrow or mobile full-page view;
- important focal sections;
- an intermediate width when geometry or breakpoint behaviour creates material risk.

For bounded work, inspect the changed scope and its page-level consequence.

Judge the visible result rather than the explanation:

- hierarchy;
- meaning-bearing relationships;
- proof treatment and legibility;
- functional repetition;
- neighbour transitions;
- accumulated fatigue;
- responsive transformation;
- readiness for the intended action.

On long pages, check whether repeated caveats or qualifications have become equally focal and defensive, especially when stacked on mobile.

Recompose a weak important section or page relationship instead of relying only on spacing, borders, colour, typography, shadow, or decorative artefacts.

When critiquing, identify:

1. the observed problem;
2. why it matters;
3. the design decision that owns the problem.

When implementing, report changed source, rendered evidence, checks, unresolved material, and remaining risk. Do not claim publication or a business decision the work did not establish.