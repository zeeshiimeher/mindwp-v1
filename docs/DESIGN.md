# MindWP design authority

This document owns MindWP's durable visual judgement: shared brand grammar, art direction, meaning-bearing composition, page continuity, responsive intent, purposeful interaction and motion, visual-material choices, and rendered visual review.

It does not decide business truth, offer strategy, page meaning, claims, repository structure, CSS architecture, implementation commands, publication, or page state. Those decisions belong to [FOUNDATION.md](./FOUNDATION.md), [STRATEGY.md](./STRATEGY.md), the supplied page plan, [WRITING.md](./WRITING.md), and [ENGINEERING.md](./ENGINEERING.md).

This authority should improve when future execution exposes a repeatable design problem or a better durable principle. Do not turn one successful page, one technique, or one preference into a rule without evidence that it has a stable MindWP role. Only durable, cross-page principles belong here; lessons from individual rejected attempts are not preserved as design rules.

## The quality standard

MindWP's website is part of its portfolio. It should feel considered rather than assembled, while remaining clear, truthful, useful, and appropriate to a professional service business.

The intended qualities should be observable in the work:

- **Calm confidence:** priority is unmistakable without urgency theatre, visual noise, or exaggerated claims.
- **Commercial seriousness:** the page connects customer reality, the offer, proof, boundaries, and a useful next action.
- **Distinctive craft:** typography, spacing, hierarchy, media, edges, depth, and responsive behaviour feel deliberate.
- **Trustworthiness:** visual material never simulates proof, software capability, certainty, or operational detail that does not exist.
- **Clarity:** the main argument and important relationships can be understood before every paragraph is read.

Technical competence alone is not the standard. If an important composition is generic, visually thin, or structurally interchangeable with unrelated material, refine its underlying relationship and hierarchy rather than trying to rescue it with surface polish.

### Sector-flexible expression

MindWP's specialist depth is the precision of its thinking, not any one industry's aesthetic. The global visual and verbal language — including artefacts, illustration, iconography and recurring examples — stays sector-neutral, so the same brand can credibly serve a clinic, a law boutique, a workshop or a venue. Sector imagery, terminology and visual material belong to industry pages and other page-specific work; they do not join the shared language by recurrence alone.

## Shared MindWP grammar

MindWP deliberately uses a recognisable visual family:

- navy, white, paper, and mist surface roles;
- serif and sans-serif typographic character;
- eyebrow, heading, and supporting-copy structures;
- centred, left-aligned, and split section introductions;
- consistent typography and spacing roles;
- stable container and readable-measure discipline;
- semantic sections and familiar web-layout foundations;
- a calm, familiar rhythm of surfaces across a page;
- deliberate family resemblance between pages.

These are foundations, not repetition failures. Do not count surface occurrences, eyebrow use, centred or left-aligned introductions, repeated typography roles, recurring section-header grammar, containers, cards, grids, or other familiar structures. Do not change colour, alignment, or heading placement merely to manufacture novelty.

Shared foundations create consistency. Meaning-specific composition creates distinctiveness.

### Structural foundations

Standard web foundations are valid, useful, and normally preferred.

Begin with:

- semantic `<section>` elements;
- the shared `.section` class for vertical rhythm and surface treatment;
- `.container` and its established width variants for alignment, gutters, and readable width;
- the shared section-introduction structures where they serve the material;
- Flex and Grid for normal layout relationships;
- familiar structures such as cards, lists, panels, tabs, timelines, and grouped content when the information genuinely has that structure.

Section introductions may be left-aligned, centred, split, embedded, or otherwise positioned according to the communication job. No alignment is inherently more original or more professional than another.

Do not seek originality by avoiding sections, containers, headings, introductions, Flex, Grid, cards, lists, or panels. Judge the hierarchy, proportion, relationships, reading path, responsive behaviour, and visual expression created within those foundations.

The introduction is not automatically the complete section design. The material after and around it should communicate the section's particular relationship, proof, choice, process, comparison, or conclusion.

Start with the existing shared foundations. Extend or depart from them only when the composition has a specific requirement they do not serve. A page-specific visual layer may break out of a container, introduce controlled layering, or establish a different spatial environment while the semantic structure and readable content remain sound.

### Typography character and inheritance

MindWP's typography combines editorial character with operational clarity.

- **Fraunces** carries major ideas, emotional emphasis, important turns, and editorial character.
- **Inter** carries explanation, evidence, navigation, labels, controls, and operational detail.
- **Italics** should signal meaningful contrast, qualification, or a change in thought. They should not be added routinely as decoration.
- **Readable measure** matters as much as font size. Explanatory copy should remain easy to follow rather than expanding merely because space is available.

When implementing, begin with the global semantic typography for `h1`–`h4`, paragraphs, body copy, and established supporting roles.

Do not redefine font sizes in page-specific BEM selectors merely because a new section is being styled. Introduce a different scale, style, measure, or behaviour only when the composition requires a deliberate typographic role.

When an override is justified:

1. Prefer the existing typography scale and tokens.
2. Prefer an established reusable typography role when the same need already exists.
3. Use a page-specific treatment only for a genuinely composition-specific role.

Page CSS may still control colour, width, alignment, emphasis, wrapping, and responsive behaviour where required. The aim is inheritance before specialisation, not a prohibition against purposeful typography.

### Surface and colour roles

MindWP's recurring surfaces have recognisable communication roles:

- **Navy** carries conviction, control, connected-system logic, decisive moments, and strong closure.
- **Paper** supports editorial explanation, argument, and calm long-form clarity.
- **Mist** supports quieter evidence, reflection, qualification, and transitions.
- **White** provides clarity, contrast, and contained material within lighter environments.

These roles guide judgement rather than enforcing a fixed page sequence. A surface may support another job when the complete composition justifies it.

Recurring brand surfaces are not generic-design failures. A long page may reuse navy, paper, mist, or white several times. Do not alternate surfaces mechanically, and do not introduce extra colours merely to make neighbouring sections look different.

A background change can support progression, but it is not a substitute for hierarchy, scale, density, relationship, or focal emphasis.

Use existing semantic colour tokens before introducing raw values. Read `tokens.css` when exact values or the complete token inventory are needed; do not duplicate the complete token system here or inside page-specific styles.

### Emerald as controlled attention

Emerald is a controlled attention colour.

Use it for:

- eyebrows, marks, rules, and small emphasis;
- connection paths and meaningful system relationships;
- active, selected, success, or status states;
- focus treatment and accessibility feedback;
- selected high-priority actions;
- small operational fills inside truthful visual material.

Emerald may fill a primary CTA on a dark surface when that action deserves clear priority. It may also fill a small component whose state or role requires it.

Do not use emerald as a large decorative section surface or repeatedly fill ordinary cards, panels, and containers with it. Its strength comes from controlled use and clear priority.

### Edge, depth, and material character

MindWP's material character should feel refined without becoming ornamental.

Prefer:

- hairline borders;
- restrained radii;
- subtle surface contrast;
- rare and controlled shadows;
- intentional layering;
- clear spacing and proportion;
- depth that communicates belonging, priority, state, or interaction.

Do not add shadows, glass effects, gradients, floating panels, or increased curvature merely to make a composition appear premium.

Premium character should come primarily from typography, scale, proportion, spacing, hierarchy, material contrast, and careful responsive behaviour. Restraint should not become visual thinness: important material still needs sufficient scale, contrast, depth, evidence, or spatial presence to carry its job.

### Page-scale character

A coherent MindWP page may repeat its typography, introductions, surfaces, containers, and familiar structural grammar. That repetition produces brand recognition.

The complete page should not give every section the same scale, density, visual importance, or reading path.

Use page-level judgement to establish:

- changes in emphasis and atmosphere;
- shifts between dense and quiet material;
- differences in reading effort;
- meaningful continuity between connected ideas;
- stronger focal treatment for commercially important, proof-bearing, or meaning-critical material;
- calm supporting treatment where spectacle would add no value.

Not every section needs a bespoke visual concept. Quiet sections are valid and necessary. Distinctiveness should be concentrated where the meaning benefits from a stronger composition rather than distributed as decoration across every section.

A page becomes compositionally flat when different meanings repeatedly receive the same introduction-to-payload relationship, the same internal hierarchy, and the same visual weight. It does not become flat merely because it uses familiar foundations or recurring brand surfaces.

The exact measure, scale, position, and relationship between an introduction and the material around it remain contextual. Shared grammar creates coherence; the meaning-bearing experience after and around it creates distinction.

## Three design layers

Keep three layers distinct:

1. **Shared grammar** provides recognisable MindWP foundations.
2. **Meaning-bearing composition** expresses the hierarchy, relationship, proof, media, reading behaviour, and experience specific to the material.
3. **Implementation technique** supplies tools such as grid, flex, cards, lists, panels, horizontal sections, tabs, diagrams, layering, or motion.

A technique is neither a design concept nor a defect by itself. Equal cards may suit genuine peers. A timeline may suit a sequence. A simple horizontal section may suit a quiet transition. Reusing an inner pattern is valid when the underlying relationship is genuinely the same.

The failure is unjustified functional sameness: meaningfully different material receives the same inner hierarchy, payload structure, scale, and reading path while palette or decoration creates only the appearance of variety.

## From meaning to composition

Meaning determines what must be communicated. It does not predetermine the component used to communicate it.

For important or uncertain material, reason through this bridge:

> section job → intended visitor change → essential meaning or proof → relationship that should become visible → focal hierarchy → eye path → spatial behaviour → content adaptation → relationship with neighbouring material → narrow-width transformation → purposeful motion or interaction

The visitor change should be concrete. After this material, should the visitor understand a distinction, trust a claim, compare alternatives, see causality, recognise ownership, follow a sequence, inspect proof, choose a path, or feel ready to act?

The relationship might be:

- comparison, peerhood, or contrast;
- sequence, accumulation, or causality;
- a whole and its parts;
- evidence and conclusion;
- context and focal point;
- choice, threshold, or consequence;
- responsibility, handoff, or connection;
- expectation and resolution;
- continuity or a deliberate interruption.

Choose a relationship because it clarifies the material, not because it suggests an attractive artefact. Treat metaphors in copy as meaning cues rather than compulsory visual instructions.

### Compositional variables

Use these as dimensions for judgement, not a checklist or library of layouts:

- **Priority:** scale, span, contrast, negative space, and visual anchoring.
- **Direction:** alignment, orientation, and sequence.
- **Belonging:** containment, breakout, and adjacency.
- **Dependency:** overlap, layering, and depth.
- **Pace and effort:** density, repetition, and negative space.
- **Page relationship:** continuity, interruption, and transition.

Changing one or two variables purposefully can establish hierarchy without adding cards, panels, interfaces, or decoration. More ingredients do not make a stronger composition.

## A real section concept

A component name, background change, card grid, differently shaped panel, small interface, or decorative artefact is not by itself a design concept.

For an important section or genuinely connected group, the executor should be able to reason about:

- what the visitor should understand, trust, compare, choose, or do afterwards;
- which relationship the visual treatment makes clear;
- what deserves dominant scale and what should recede;
- how the eye moves through the material;
- why the composition fits this particular meaning and evidence;
- what adaptable content should be shortened, deepened, regrouped, or rewritten;
- how the material inherits from and hands off to its neighbours;
- what meaningful structure remains when decoration is removed;
- how the core relationship survives at narrow widths;
- whether interaction or motion has a genuine communication job.

This is a reasoning bridge, not a form, packet, ledger, or required written explanation. Quiet transitional material does not need bespoke spectacle or this depth of concept development.

## Four doctrine examples

These examples clarify judgement. They are not layouts to reproduce.

- **Quiet section that passes:** a mist surface uses a familiar centred eyebrow, heading, and short supporting paragraph to clarify a professional boundary. The message is singular, the reading effort is intentionally low, and no artefact is added merely to make it look designed.
- **Dominant section that fails:** a commercially important explanation of why enquiries break down becomes four equal icon cards. The cards hide causality, give every point the same weight, and could accept unrelated agency copy unchanged. Larger shadows or a navy background would not solve it.
- **Coherent long page that passes:** familiar surfaces and introduction grammar recur, while a few consequential moments receive meaning-specific scale, proof, or spatial relationships. Supporting passages stay calm, related ideas connect, and the page builds toward its action without demanding novelty from every section.
- **Superficially varied page that fails:** colours, alignments, panel shapes, and decorative styles alternate, but every section still opens into an interchangeable cluster of short items with the same weight and reading path. The page is cosmetically varied and experientially repetitive.

## Work at page scale and focal-section scale

Work recursively between page scale and focal-section scale.

1. Understand the page job, audience, commercial progression, and broad job of each section or group.
2. Establish a provisional full-page visual progression and rhythm around the supplied narrative.
3. Develop important or uncertain section compositions early.
4. Let those sections alter grouping, pacing, scale, proof placement, and neighbouring transitions.
5. Draft and reshape adaptable content as the compositions develop.
6. Reassess the complete page from those focal decisions.
7. Continue moving between both scales until neither is merely accommodating decisions frozen at the other scale.
8. Establish credible narrow-width behaviour while concepts remain adaptable.
9. Refine content, composition, and responsive behaviour from rendered evidence.

Do not design a collection of isolated substantial sections and then assemble them. Do not create a polished full-page silhouette containing weak individual sections. Neither scale precedes or outranks the other.

A planned section is meaning material, not a mandatory horizontal band. Several sections may share one visual environment when they form a continuous meaning or experience. Shared colour or a common container is not sufficient: every important meaning unit within the group still needs a clear hierarchy, role, and transition.

Separate horizontal sections remain valid when the argument, hierarchy, atmosphere, or reading behaviour genuinely changes.

## Develop content and composition together

Preserve:

- facts;
- approved claims;
- search intent;
- genuine proof;
- professional, clinical, legal, privacy, and consent boundaries;
- wording explicitly marked fixed.

Where the page plan allows, adapt:

- headings;
- explanatory copy;
- grouping;
- sequence;
- depth;
- supporting points;
- presentation format.

Use credible real content early. Do not write and freeze the complete body copy before major compositions exist. Do not build empty visual containers and force unrelated copy into them.

Let composition expose a better communication structure: shorten repetition, deepen a necessary distinction, regroup related evidence, or rewrite adaptable copy for a clearer eye path. Let content expose where the composition is too shallow, misleading, or decorative. The final implemented copy belongs to the design-and-build scope and should not remain filler for a mandatory later finishing stage.

Supporting planning detail is not a required public-copy count or a required number of visual objects. It may be synthesised or omitted when the essential meaning, claim, proof, boundary, distinction, and action remain understandable.

Never invent unavailable proof, metrics, testimonials, systems, client results, or operational detail to complete a visual idea.

## Choose visual material by its communication job

Visual material should make meaning easier to perceive, evidence easier to inspect, or an action easier to understand.

Operational interface fragments are one legitimate mode — not the default. Visual material may equally be a conceptual model, human or editorial illustration, an object-led composition, photography, or real evidence, selected by the meaning to be carried and the emotional register the moment needs. Human and editorial illustration suits ownership, situations and relationships that interface fragments cannot express; drawn with MindWP's restraint and palette around specific situations, it should never lapse into generic stock character art. A precise MindWP illustration style is deliberately not defined here — establish it through real page work before treating any of it as a rule.

- **Typography-led composition** suits language whose contrast, cadence, sequence, or emphasis carries the idea. It fails when display treatment substitutes for an argument.
- **Photography and real media** provide context, human specificity, place, process, or atmosphere. Crop for the important content rather than defaulting to a convenient centre.
- **Actual work and proof** should be large and legible enough to judge. Keep evidence connected to the claim it supports.
- **Document-like evidence** can make a real deliverable, decision, or process inspectable. Do not invent paperwork to imply rigour.
- **Diagrams** help when a relationship is clearer spatially than verbally. Reject a diagram that requires more interpretation than the written point.
- **Illustration and abstract systems** may express concepts, tone, or invisible relationships. Do not present them as evidence or force one metaphor across unrelated material.
- **Code-native spatial artwork** can create depth, connection, sequence, or atmosphere when those qualities support the argument. Decoration alone is not proof of design.
- **Interface-like material** is appropriate for a real interface, state, choice, or system behaviour. Do not default to a browser frame merely because the work is web-based, or fabricate dashboards, browser scenes, controls, or tiny UI merely to make a service look tangible.
- **Motion-led explanation and interaction** may clarify state, causality, connection, or spatial continuity. The static equivalent must retain the essential meaning.
- **Mixed visual languages** are valid when each form has a distinct job and the page still feels coherent.

Cards, lists, grids, panels, timelines, browser frames, and interfaces remain available primitives. Use them because the information or interaction has that structure, not because they create the appearance of a designed payload.

## Compose continuity across the full page

A complete page should make its commercial progression, changes of argument, proof, and intended action perceptible without assigning equal visual weight to every section.

Judge:

- narrative progression and changes in visitor understanding;
- visual anticipation and payoff;
- continuity between genuinely related ideas;
- deliberate interruption when the argument changes;
- shifts in scale, density, surface, and reading effort;
- focal, supporting, and quiet roles without quotas;
- placement and legibility of proof;
- preparation for the primary action;
- accumulated visual and cognitive fatigue.

A long page, many sections, recurring surfaces, or several horizontal bands are not defects. Adjacent sections do not need to look different merely because they are adjacent. Ask whether recurrence provides useful continuity or gives genuinely different meanings the same treatment and weight.

Necessary cautions can still flatten progression when several versions of the same boundary each claim focal headline scale or a long pause. Consolidate them, let some recede into supporting copy, or place them beside the claim they qualify when that keeps the argument moving. Check this again at narrow widths, where stacked sections amplify equal weight and duration.

The strongest transferability and originality questions belong primarily to major, proof-bearing, or meaning-critical compositions. A quiet section may appropriately resemble another MindWP section.

### Separate narrative acts from surface rhythm

Narrative acts organise what the visitor learns and how the commercial argument progresses. Surface environments — navy, paper, mist, imagery, gradients, and overlays — control atmosphere, emphasis, contrast, and visual pacing.

These systems should inform each other, but they must not map one-to-one. One narrative act may move through several surfaces, while one surface environment may carry meanings from more than one act.

Do not assign one background to each act or treat every surface change as a narrative boundary. Compose the surface rhythm across the complete page, using recurrence, shared environments, and selective dark returns according to the communication need.

## Design responsive transformation early

Major compositions need a credible narrow-width reading order while their concepts remain adaptable. Responsive design is recomposition, not automatic shrinking or stacking.

Mobile should preserve:

- meaning and truthful boundaries;
- priority and focal hierarchy;
- comparison, sequence, causality, or other essential relationships;
- proof and its connection to the relevant claim;
- the intended action;
- essential interaction.

Natural linear stacking is valid when the meaning is linear. Reject stacking or uniform card conversion when it destroys comparison, causality, sequence, proof association, ownership, or hierarchy.

Reorder presentation, simplify supporting decoration, change crop, reduce layering, or replace a dense visual explanation when necessary, while keeping the underlying reading order and meaning coherent. Use intermediate breakpoints because content or geometry needs them, not because a fixed device list requires them.

## Give interaction and motion a real job

Interaction and motion may serve:

- orientation;
- state;
- causality;
- connection;
- meaningful emphasis;
- spatial continuity.

The static composition must remain complete. Essential meaning cannot depend on hover, animation, or a transient state without an equivalent accessible form.

Reject:

- blanket reveal animation;
- hover movement on non-interactive material;
- motion used to rescue a weak static composition;
- constant or distracting ambient movement;
- long waits or scroll behaviour that removes orientation;
- interaction that simulates functionality the service does not provide.

Concentrate authored motion where it clarifies a relationship or state. The technical lifecycle, input states, accessibility, reduced-motion implementation, and performance constraints belong to Engineering.

## Use accepted-page evidence carefully

The Homepage and Local SEO page are accepted examples of implementation quality, current brand character, and family resemblance. Their audited durable foundations and practices are already distilled into this document and Engineering. They are not default executor reading.

Inspect either page only when:

- directly editing or auditing that page;
- answering a named design, craft, or implementation question;
- diagnosing a specific regression;
- the user explicitly requests it.

They are not templates, pattern libraries, creative briefs, page-length or section-count targets, required surface sequences, breakpoint rules, animation rules, or compositional ceilings.

Their exact fans, staircases, radial systems, tabs, browser scenes, mock interfaces, grids, breakout geometries, hero mechanisms, and motion choreography are page-specific evidence. Do not browse those constructions as a menu of future solutions or copy their anatomy merely because it is available.

Page-specific does not mean permanently forbidden. A technique may be reused when the new material independently creates the same need. A future page may also differ substantially while remaining recognisably MindWP.

Do not promote a recurring value or device to a global design rule unless it is owned by a genuine shared foundation or explicitly adopted as a project decision.

## Judge rendered evidence

Rendering should begin while content and composition remain adaptable, not only after implementation appears complete.

A complete-page visual review normally needs:

- a broad desktop full-page view;
- a narrow or mobile full-page view;
- close inspection of important focal sections;
- an intermediate width when the composition or breakpoint behaviour creates material risk.

This is an evidence standard, not a screenshot packet or fixed capture count. A bounded section task needs only the coupled evidence necessary to judge its page-level consequence. Source code alone cannot prove visual quality.

Review first-glance hierarchy, commercial progression, focal weight, proof legibility, reading effort, neighbour transitions, responsive transformation, interaction intent, and accumulated fatigue. Current source and fresh renders own implemented reality when a particular page is being inspected.

### Qualitative anti-generic questions

Use these as judgement prompts, not scores, validators, or quotas:

- **Shared shell:** after ignoring the palette, typography, surface, alignment, and introduction grammar, does the important inner composition express this material's relationship?
- **Meaning:** does the visual structure make a real comparison, sequence, dependency, proof relationship, or decision easier to understand, or merely decorate the copy?
- **Hierarchy:** is the most important idea or evidence visibly unmistakable?
- **Recurrence:** where a reading pattern repeats, does the material genuinely have the same role and structure? Where meanings differ, do their payload hierarchy, scale, and eye path differ for a reason?
- **Grouping:** does a shared environment create one continuous experience, or merely conceal ordinary independent bands inside a wrapper?
- **Truth:** does every apparent proof object contain real evidence or clearly identify itself as illustration?
- **Mobile:** is the central relationship preserved or thoughtfully simplified, rather than fragmented into an automatic stack?
- **Reference contamination:** was a recognisable accepted-page construction reused because this material independently needed it, or only because it was available?

No design rule should require surface counts, alternating alignments, card limits, fixed focal moments, a repetition budget, bespoke artwork for every section, or a prescribed number of concepts. Distinction is earned by meaning; coherence is not a failure of originality.