# MindWP design direction

This is the authority for visual quality, art direction, CSS authorship, interaction, responsive composition, and rendered acceptance criteria. Business meaning comes from [STRATEGY.md](./STRATEGY.md); technical boundaries come from [ENGINEERING.md](./ENGINEERING.md).

## The standard

MindWP's website is part of its portfolio. It must feel designed, not assembled.

The visual experience should demonstrate:

- a clear and ownable art direction;
- memorable typography and composition;
- large, inspectable work and interface details;
- depth through crop, layering, light, texture, space, and motion;
- varied pacing across a long page;
- interactions that improve meaning or feeling;
- a mobile composition designed in its own right.

Choose inner compositions from the relationship the content must communicate. Equal cards suit genuinely peer items; interface furniture suits genuinely interactive or system-like behaviour. Typography, media, illustration, spatial composition, or a direct diagram may communicate other relationships more honestly.

This authority defines quality and decision order, not a compulsory page shell. Once meaning is approved, the designer remains free to establish the page-level visual composition and inner treatments through a complete coded desktop draft while preserving the approved semantic architecture; shared CSS defaults provide the first implementation baseline rather than a finished style limit.

## The durable principle

Meaning determines what must be communicated. It must not determine the visual component used to communicate it. The design process determines how those meanings share space, hierarchy, rhythm and visual form.

Approved content architecture — headings, jobs, order, essential public meaning, supporting reservoirs and truth boundaries — is semantic material. Supporting payloads are a meaning reservoir, never a public-content count or a required number of visual objects; their details may be synthesised into selective copy, hierarchy and shared visual environments, and may remain private when every essential job, claim, boundary, distinction and CTA stays understandable. Treat copy metaphors as meaning cues rather than literal layout instructions. The design work is translating semantic relationships into visual relationships.

## Composing the page

Keep three units distinct:

- A **semantic landmark** is an ordered heading, communication job and truth boundary that must remain understandable.
- A **spatial construction or visual act** is a substantial composed experience that may contain several semantic landmarks.
- A **DOM or evidence unit** supports semantic implementation, testing or capture; it does not automatically define visible composition.

Spatial constructions are the primary composition lens. Develop the page-level relationships, silhouette and visual acts first, then place semantic landmarks within them. Several landmarks may share one continuous construction, while a major landmark may dominate one; neither outcome changes heading order, jobs, truth, accessibility or commercial progression. A material change to that semantic architecture requires separate approval.

Hierarchy is proportional and decided from the commercial meaning, not from a formula. Determine which moments dominate the page, which support, and which stay quiet. Important service moments earn substantial visual mass and explanatory visual material; quieter arguments may remain compact without their own artefact, card collection or demonstration. Density, scale, alignment and surface should change deliberately across the page and produce a recognisable full-page silhouette. A page may centre one dominant transformation, several medium peaks, a distributed experience, a continuous progression, or another hierarchy supported by its meaning — these are positive review signals, not required layout types or blanket bans.

Whole-page composition precedes and outranks landmark development. Establish the page-level structure before payload rendering or final body copy, and judge the full-page render before crops; the best local treatment depends partly on the constructions around it.

Two extremes both fail this standard: a branded template of equal horizontal bands, cards and grids mapped one-to-one from the content list; and an over-conceptual page where a single metaphor, object, material or interface grammar controls every landmark until the service becomes harder to understand. A central concept may organise the page, but the page serves the service, not the concept.

## Using the references

The pages the ledger marks as brand/quality references — currently the Homepage and Local SEO Authority — set the brand character and quality bar; they are not layouts to reproduce. Before fresh composition exists, use current shared source and only focused evidence that isolates a stable foundation such as typography character, palette roles, shell behaviour, buttons, material quality or shared closing behaviour. Do not expose an unrelated new page to complete accepted-page silhouettes or section sequences at that generative point.

After the new composition passes a reference-blind full-page review, inspect complete accepted-page renders for overall craft, MindWP character and accidental structural copying. Section or act crops may then help verify craft or shared families, but must not become a catalogue of layouts to imitate.

Reference evidence may be stored in `docs/reference/` as `1640px` renders stamped with the reference page's production commit. A stored render whose stamp matches the current ledger commit is proven current and replaces recapture; a mismatched or missing stamp requires fresh capture. Stored renders are late comparison evidence, not standing or initial generative authority. The content-only digest in `docs/existing-pages-audit.md` may answer a voice or truth question but is not default inner-composition evidence. Current source and fresh renders always own implemented reality.

A consistent eyebrow, heading and paragraph grammar is shared brand language, not a mandatory layout entry. Headings may integrate into a larger construction without each landmark receiving an autonomous visual scene. Judge originality from the complete inner reading experience, not from a payload treatment appended after a repeated heading block.

Privately separate transferable MindWP brand grammar from already-used inner compositions. Typography, palette roles, clarity, restraint, spatial discipline, shell behaviour and material quality may transfer. A page-specific hero mechanism, signature diagram, artefact family, repeated card treatment, scene rhythm or full-page silhouette is occupied creative territory unless a new content relationship genuinely earns a transformed use.

Reference labels describe permission, not automatic quality or timing. Develop the new page from its approved meaning and shared brand foundations, pass the first reference-blind composition review, then compare the actual draft with permitted full-page references for accidental duplication and overall quality. Use rejected or excluded work only in the role the ledger explicitly permits, and leave unclassified work out of creative evidence until [PAGE-LEDGER.md](./PAGE-LEDGER.md) assigns a role.

## The first-draft standard

Before its body copy is read, a qualifying desktop draft has:

- a distinctive, recognisable full-page silhouette;
- obvious important moments carrying meaningful visual mass;
- intentional changes of density, scale and surface;
- a service understandable through visual structure alone;
- an unmistakably MindWP character that is not a rearranged Homepage or Local SEO page;
- inner experiences that do not merely repeat `entry → copy → payload renderer` beneath different surface treatments;
- no reliance on equally weighted stripes or repeated equal-card or small-interface payload renderers;
- no decorative metaphor overwhelming the service;
- the feel of deliberate art direction rather than requirements mapping.

Technical competence is not enough. If a draft is merely competent, generic, repetitive, visually thin, overly template-like or below the reference pages, its direction — not its polish — is wrong: recompose at page or act level rather than rescuing it with spacing, border, colour or type adjustments.

The actionable drafting procedure — meaning intake, private spatial construction, composition-first blocking, build, reference-blind critique, late brand calibration and the quality-threshold loop — belongs to the `mindwp-design-page` skill. The phase boundary, drafting modes and decision rules belong to [PAGE-WORKFLOW.md](./PAGE-WORKFLOW.md). In every mode, the user-facing deliverable is the rendered page or requested scope, not the private synthesis.

## Long-page composition

Use only the contrasts the page draft needs. Possible shifts include:

- full-viewport and compact;
- dark and light;
- editorial and spatial;
- static and interactive;
- full-bleed and contained;
- proof-led and copy-led;
- dense and quiet.

Short principle strips should behave as transitions, not full template bands. Closely related landmarks may share one visual environment without erasing their semantic distinctions.

Let container use, spacing, heading placement, media scale, material treatment, and entry behaviour follow each construction's role; repetition should be intentional.

When a page uses recurring heading grammar, it may provide connective tissue without becoming a repeated entry block. Judge repetition by the inner relationship and visitor experience, not merely by heading alignment or surface variation. When adjacent landmarks repeat the same copy-to-payload reading sequence without a content reason, recompose their inner experience or let them share a more coherent construction.

Review the whole rendered silhouette before presenting the desktop draft. Look for alignment and scale changes, surface and density rhythm, construction height, focal hierarchy, repeated composition families, reading effort, interaction concentration, and quiet versus dominant moments. The best local layout depends partly on the constructions around it.

For an important or uncertain construction, judge what should be understood at first glance, the relationship or hierarchy being communicated, and the role it plays around neighbouring constructions. Add mass, density, motion, responsive reinterpretation or interaction only when material. Do not prescribe objects, counts or micro-layouts unless the content relationship or a concrete reconstruction target requires them.

## CSS decision

MindWP uses **custom CSS**, not Tailwind, as its visual authoring system.

- Global CSS owns reset behavior, shared accessibility states, true brand tokens, and stable shell/form foundations.
- Page CSS owns art direction, composition, local variables, responsive behavior, and signature visuals.
- Component CSS owns an isolated interaction or genuinely reused behavior.
- BEM classes name page-specific composition without replacing the shared foundation.

Use local custom properties and one-off values when they express a deliberate page concept. Promote a value to a global token only after it becomes a stable repeated role.

Keep selectors readable, shallow, and close to the markup they style. CSS should support semantic JSX rather than require wrapper-heavy component factories.

### CSS authoring guide

These are working defaults, not blanket bans. Apply judgment when the active page concept, readable content, accessibility, or a rendered comparison demonstrates that an exception has a clear purpose.

**When siblings form one layout flow:** put their ordinary spacing on the parent with `gap`. This keeps rows, stacks, and grids consistent as they wrap or recompose. A child margin is still appropriate for an intentional offset, optical adjustment, or a boundary outside that shared flow; state the visual reason when making that exception.

**When a semantic `<section>` or other DOM unit has more than one direct container or content group:** let that DOM unit own its responsive block padding and the flow between those direct children. Let containers own width, centering, and inline margins; use shared container flow or split-layout roles before recreating a generic stack in page CSS. Page classes should focus on the composition that is specific to that construction.

**When implementing an established composition:** render semantic HTML with `.container`, global type roles, tokens, and existing shared classes wherever they serve the blocked geometry. Use that baseline as implementation support, not as the method that discovers the composition. Add a container modifier, wrapper, BEM type override, or local value when it owns a visible job; this keeps the shared defaults useful without turning them into a page silhouette.

Inspect those foundations in current shared source and phase-appropriate focused evidence rather than copying token values or component recipes into skills and page records. Page CSS should extend the live baseline for original inner compositions. During finishing, remove accidental duplication and obsolete overrides while retaining intentional exceptions needed by the approved page character.

**When styling ordinary copy:** let the global heading, paragraph, list, label, and small-text roles inherit first. Section CSS may set alignment, color, emphasis, or composition without restating a complete type system. Add or use a shared display role only when an editorial moment—such as a hero or closing statement—has visibly earned a distinct scale or treatment. Prefer changing the one property the role needs over replacing its family, size, weight, and leading through a complete `font` shorthand.

**When constraining a line or asset:** add a `max-width` only for a visible purpose: a readable measure, deliberate heading composition, or an actual media constraint. Do not use a narrow width merely to force a reference line wrap or reproduce fixed screenshot geometry; verify the constraint at the required rendered widths.

**When changing for smaller screens:** keep one semantic markup structure and recompose it with CSS. Change the parent flow, grid, alignment, order, or decorative treatment as the composition needs; do not duplicate desktop and mobile content just to obtain a different layout. Prefer reducing decorative complexity before reducing readable type, proof, or touch targets.

**When artwork needs clipping:** scope `overflow: hidden` to the decorative layer that needs it. Do not clip an entire DOM/evidence unit as a repair for responsive layout; content, focus outlines, cards, illustrations, and proof must remain visible. Fix unintended document overflow at its source.

## Tokens

Create page-local tokens as the visual draft establishes real roles, not before the page reveals what it needs.

Global tokens should represent repeated roles:

- page and text colors;
- focus and status colors;
- shared spacing and containers;
- stable type roles;
- repeated radii and elevation;
- motion durations and easings;
- shell layers.

Page-specific gradients, masks, perspective, project accents, textures, and choreography values should remain local until repetition proves otherwise.

## Typography

Typography carries much of the brand personality.

- Let the global semantic roles size ordinary `h1`, `h2`, `h3`, paragraph, list, and small text by default.
- When a real editorial or interface role differs, use an existing shared type role or type token before writing a complete font shorthand in a BEM selector.
- Preview the inherited role before adding a page-local size, line-height, weight, or family. Keep a custom family only when it is part of an intentional page role, not an accidental side effect of tuning size.
- Do not tune local heading sizes merely to preserve one screenshot wrap; verify the natural hierarchy across the required widths.
- Choose the display and body families for the page art direction, not because they already exist in the repository.
- Use display scale, weight, width, italic, contrast, and line breaks intentionally.
- Allow different landmark headings to have different roles and compositions.
- Keep body text readable and restrained.
- Use utility or mono styling only when the content is genuinely procedural, locational, timed, or system-like.
- Keep important text crawlable; do not place meaning only in images, canvas, or pseudo-elements.

Avoid using viewport scaling as a substitute for a coherent type system. Audit custom roles at the default desktop/mobile pair and add an intermediate check when the wrap, scale, or breakpoint behavior makes it useful.

## Color and material

Choose a compact palette with named roles and verified contrast. Brand color should guide attention rather than cover every component.

Follow the global CSS and global tokens.

Depth may come from:

- tonal variation;
- controlled gradients and light;
- soft transparency or blur;
- grain or texture;
- shadow and overlap;
- project-derived accent color;
- high-contrast scene changes.

Do not use effects simply to imitate a trend. Status colors retain actual state meaning.

## Layout

Use containers as alignment anchors, not cages. Full-bleed media, controlled overflow, sticky scenes, offset text, nested grids, and layered compositions are allowed.

Use grid for deliberate two-dimensional composition and flex for rows, clusters, and alignment. Prefer intrinsic sizing. Reserve absolute positioning for controlled layers, annotations, and decoration rather than normal content flow.

Construction spacing should express relationship and pacing. Adjacent parts of one act may sit close; a major change of argument or atmosphere may need more space.

An eyebrow, heading and paragraph can provide consistent brand grammar without obliging every semantic landmark to begin as the same stacked entry. Integrate headings into the construction where its relationship calls for it; add another container only when that content needs its own width or alignment context.

## Components

Build the first page locally. Share only after repetition is real.

Shared components are valuable when they preserve stable behavior, semantics, accessibility, or repeated visual roles. They must not force unique spatial constructions into one shell.

Do not create prop-heavy marketing factories, universal section components, or a large primitive library before the homepage establishes the actual design language.

Actions, navigation, and forms must retain semantic elements, visible focus, adequate touch targets, clear labels, and complete interaction states. Their visual treatments may differ by real role.

## Media and proof

Show work large enough to judge. Use purposeful crops and separate mobile treatments when a desktop screenshot would become unreadable.

Reserve media space and provide explicit dimensions or aspect ratios. Preserve the important part of each asset rather than defaulting to centre-crop.

Choose the visual language from the service meaning, available truthful evidence, desired reading behaviour and implementation context. It may be typographic, interface-based, code-native, spatial, illustrative, image-led, motion-led, document-like or mixed.

Do not create fake analytics, fabricated client interfaces, invented maps, fake testimonials, or decorative dashboards.

## Motion

Use motion at:

1. **Feedback:** CSS transitions for hover, focus, active, selected, and control states.
2. **Choreography:** coordinated CSS or GSAP sequences for handoff, contrast, connection, or proof.
3. **Atmosphere:** restrained ambient movement, parallax, or pointer response that adds depth without carrying essential meaning.
4. **Entry:** selective in-view reveals or page-load sequences where they improve pacing.

Concentrate choreography into a few authored moments instead of revealing every block the same way.

Choose motion targets from the content structure. An intro may stagger its eyebrow, heading, lead, and action while the cards or list below use a separate sequence. A tab change may transition its message, label, and repeated children rather than moving one coarse panel wrapper. These are useful patterns when motion is earned, not a requirement to animate every landmark or construction.

Author the component states that exist: hover, focus-visible, active, open, and selected. Keep hover supplemental, restrict movement-heavy hover to fine pointers, and use restrained material feedback on non-interactive cards so they do not appear clickable.

The static composition must be complete. Do not hide the hero headline, primary action, LCP asset, or core proof behind animation. Reduced motion must remove non-essential movement without removing information.

Avoid scroll hijacking, long waits, hover-only meaning, constant expensive animation, and pinned scenes that lose orientation.

## Responsive composition

Responsive design is recomposition, not shrinking.

- Preserve the dominant idea of each spatial construction and the order and understanding of its semantic landmarks.
- Replace or reframe dense desktop media where needed.
- Keep source order logical.
- Reduce decorative layers before reducing readable type or touch targets.
- Reinterpret sticky, overlapping, and interactive constructions deliberately for smaller screens.
- Ensure proof remains inspectable.

During the desktop visual-draft phase, carry a credible mobile reinterpretation intent and avoid desktop structure that makes responsive completion implausible. Detailed tablet/mobile CSS and verification begin after the user approves the desktop visual direction.

During production finishing, implement and review CSS behavior across desktop, tablet, and mobile even when the evidence stays compact. Making `1024px` capture conditional does not make tablet layout, breakpoint logic or code inspection optional.

Review widths:

- `1640px` is the visual-draft decision width. Full-page evidence is primary at this phase; crops are subordinate local evidence and do not define the visible composition. The `mindwp-design-page` skill owns the capture order, critique packets, calibration and recompose loop.
- `1640px` desktop and `400px` mobile are the default finishing and final-audit pair and the generic route-capture default.
- Add `1280px`, `1024px`, or `766px` when a breakpoint, dense navigation, overlap, artwork, type wrap, or diagnosed defect needs intermediate evidence. The generic route capture's `--full` pass provides the extended matrix when that is more efficient than selecting checks manually.
- Add desktop/mobile reduced-motion captures when the work introduces or changes motion.
- Include `1920px` when the supplied comparison was captured at that width or wide-screen behavior is specifically in question. Treat its wraps and total page height as visual evidence, not a fixed geometry contract.
- Reuse an existing local dev server when it serves current source; do not restart it merely to capture the route.

Check below `400px` when a specific composition risks overflow.

## Visual decision and final acceptance

Build output is not visual approval, and technical competence is not enough for the first presentation.

For the first visual decision, the `1640px` full page must make the first-draft standard inspectable; only the smallest useful act or evidence crops should supplement it. A direct DOM section is a capture boundary, not proof that its semantic landmark needs an autonomous composition. Detailed mobile, motion, accessibility, performance, test and release hardening do not belong to this desktop visual decision. The `mindwp-design-page` skill owns the qualifying-draft procedure; [PAGE-WORKFLOW.md](./PAGE-WORKFLOW.md) owns the human decision boundary.

After visual approval, finishing and final audit require the default full-page pair. A single-section change needs that section's crop; several named changes need those crops; a full-page finish needs every direct section available for audit. Multiple or all crops are summarised into one labelled contact sheet per default viewport so the reviewer can triage the page before opening only the full-resolution crops that need close inspection. Add state, intermediate-width and reduced-motion evidence according to actual risks.

The active page skill owns the exact capture commands and review sequence for its phase. Crops remain evidence for close inspection, not a demand that each semantic landmark become visually autonomous. An approved desktop render still requires semantic, responsive, accessible production finishing and a final rendered audit.

Review:

- first-glance impact;
- commercial clarity without reading every paragraph;
- typography and composition;
- full-page silhouette, visual mass and memorable anchors;
- visual repetition and fatigue;
- whether each visual explains more than its heading alone;
- proof scale and cropping;
- interaction quality;
- mobile hierarchy;
- accessibility on the actual composed backgrounds;
- whether the result feels specific to MindWP.
