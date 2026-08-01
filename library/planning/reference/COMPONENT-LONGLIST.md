# Component longlist

216 permanent identifiers covering 208 unmerged concepts, across the 18 categories
defined in [TAXONOMY.md](../TAXONOMY.md) and built from the research in [RESEARCH.md](./RESEARCH.md).

A longlist, not a specification. Entries describe design and behaviour, never implementation — no
class names, component APIs or timeline syntax. Selection of the initial build set follows
[SHORTLIST-METHOD.md](./SHORTLIST-METHOD.md); the selection itself lives in
[BUILD-SELECTION.md](../BUILD-SELECTION.md).

Library-local planning, not a website authority.

## How to read an entry

**IDs are permanent.** They are never reused, never renumbered, and never recycled from a rejected
concept.

- The original set was numbered `SEC-001`–`SEC-210` in category order.
- Concepts added later **append numerically** from `SEC-211` onward.
- An appended concept is filed under **its own category**, not at the end of the file.
- So category order and numeric order are no longer the same thing, and a category's IDs are not a
  contiguous range. That is correct and expected — renumbering to restore contiguity would break the
  permanence rule.

**Counts.** _Permanent IDs_ counts identifiers. _Unmerged concepts_ counts everything that is still
its own concept — selected, reserve and rejected entries — and excludes only entries marked
`MERGE →`.

**Variants are not concepts.** A variant changes surface, radius, typeface, imagery, alignment, item
count or indicator styling. Where two ideas differed only cosmetically they were folded into one
entry with named variants rather than counted twice.

**Every entry has a narrow-width direction.** Where a composition has no honest small-screen form, the
entry says so plainly. That is a finding to design around, not a defect.

**Risky concepts are flagged, never removed.** Accessibility and performance concerns are named
specifically so the selection can price them.

## Category counts

| Code | Category                                 | Permanent IDs | Unmerged concepts |
| ---- | ---------------------------------------- | ------------- | ----------------- |
| A    | Editorial and typography-led             | 19            | 19                |
| B    | Feature and capability explainers        | 12            | 11                |
| C    | Card systems and grids                   | 14            | 13                |
| D    | Bento, asymmetric and masonry            | 10            | 10                |
| E    | Split and side-by-side                   | 12            | 12                |
| F    | Comparison and decision support          | 13            | 12                |
| G    | Tabs, accordions and disclosure          | 11            | 11                |
| H    | Sliders, carousels and rails             | 9             | 9                 |
| I    | Stacked, overlapping and sticky cards    | 9             | 9                 |
| J    | Pinned, horizontal and multi-part scroll | 13            | 13                |
| K    | Process, sequence and timeline           | 14            | 14                |
| L    | State change and before/after            | 11            | 10                |
| M    | Proof, artefact and case study           | 18            | 17                |
| N    | Dense information and indexes            | 12            | 11                |
| O    | Media, image and video                   | 10            | 8                 |
| P    | Breakout, full-bleed and layered         | 10            | 10                |
| Q    | Motion-led composition                   | 11            | 11                |
| R    | Interactive relationship                 | 8             | 8                 |
|      | **Total**                                | **216**       | **208**           |

## A — Editorial and typography-led

### SEC-001 · Standfirst Opener Plate

`A` · static · static · difficulty low · **SELECTED** · wave 1

A section head composed as a magazine opener: category kicker, balanced headline, a standfirst set larger and looser than body, a hairline rule, an attribution line, then a sunken initial cap starting the body. The entry point is made entirely of scale, rule and space, with no image anywhere.

- **Distinct** — Hierarchy is the concept — five distinct type registers stacked in one column with no media at all, where the library's other openers lead with an artefact.
- **Use** — Opens a service or method section with the authority of a written article rather than a marketing header.
- **Desktop** — One column hung on the left grid columns, headline at display scale with balanced wrapping, standfirst indented to the measure, a hairline crossing the full container beneath it, and a cap sunk three lines into the first paragraph.
- **Narrow** — The rule runs edge to edge, the cap drops two lines instead of three, and the kicker sits above the headline rather than beside it.
- **Risk** — initial-letter is Limited Availability and float-based caps can read as a separate token to assistive tech and break selection across the first line, so the cap must be presentational rather than markup the reader parses.
- **Variants** — Sunken three-line cap · Colour-block cap · Kicker in the outer margin · Rule above the headline · Navy inverted opener
- **Overlap** — A-02 also opens material, but a chapter divider is a pause with no body text beneath it inside the same section.
- **References** — Rest of World section openers, Butterick's Practical Typography entry points, Tufte CSS, MDN initial-letter
- **Tags** — `no-motion` `static` `contained` `density-low` `build-low` `budget-none` `rm-free` `text-integrity`

### SEC-002 · Numbered Chapter Divider

`A` · static · static · difficulty low · **RESERVE**

A full-width pause between long sections: an oversized ordinal, a rule, and one line of thesis that sets up what follows. Designed so that reading only the dividers gives the whole argument.

- **Distinct** — It carries no body content at all — its job is rhythm and semantic zoom, a different hierarchy from an opener that introduces prose immediately beneath it.
- **Use** — Breaks a long method or engagement page into named acts a buyer can navigate by skimming alone.
- **Desktop** — A numeral at three or four times display scale hanging in the outer margin or bleeding off the left edge, a hairline crossing the full container, and a single sentence set small against the numeral's weight.
- **Narrow** — The numeral shrinks and sits above the rule with the thesis line wrapping beneath it; the divider still occupies a screen of its own.
- **Risk** — The oversized numeral must not be the heading element itself, or the document outline reads as a list of digits.
- **Variants** — Bleeding edge numeral · Roman ordinals · Inverted navy plate · Rule above and below · Counter with total (03/07)
- **Overlap** — A-06 also occupies a near-empty screen, but a manifesto states a belief where a divider states position in a sequence.
- **References** — Gwern's semantic zoom, Locomotive numbered capabilities, BASIC/DEPT 01/04 counters, Tailwind Plus chapter plate
- **Tags** — `no-motion` `static` `wide` `density-low` `build-low` `budget-none` `rm-free` `semantics-fragile`

### SEC-003 · Hanging Pull-Quote Breakout

`A` · static · static · difficulty medium · **RESERVE**

A quotation set larger than the body hangs out of the measure into the margin and the surrounding paragraphs narrow to accommodate it, attributed by a rule-and-name pair rather than a centred credit. The measure bending around the quote is the event.

- **Distinct** — The composition changes the shape of the surrounding text — a change in the relationship between the content, not a styled box dropped into a column.
- **Use** — Lifts one line of a client's own words into the argument at exactly the point the claim is being made.
- **Desktop** — Body at roughly 65 characters; the quote starts at the measure's left edge and extends into the right margin at about twice body size, with two or three paragraphs reflowing to a narrower measure alongside it.
- **Narrow** — The quote stops hanging and becomes a full-measure block marked by a rule above and attribution below; nothing reflows around it.
- **Risk** — Reflowing text around an escaping element can strand one-word lines; the narrowed measure must never fall below about 45 characters.
- **Variants** — Hanging quote marks · Rule-and-name attribution · Emerald quote on paper · Escape to full-bleed and return · Quote in a contrasting cut
- **Overlap** — P owns the declared breakout ladder with fixed escape widths; this bends the measure locally around one element.
- **References** — Butterick on pull-quotes as entry points, Tufte CSS margin structures, Codrops subgrid pull-quote breakout
- **Tags** — `no-motion` `static` `contained` `density-medium` `build-medium` `budget-none` `rm-free`

### SEC-004 · Sidenote Margin Rail

`A` · static · static · difficulty medium · **SELECTED**

A body column at a controlled measure with a persistent outer rail carrying numbered sidenotes, small margin figures and caption asides, all open by default. Footnote friction becomes saccade distance — the reader never leaves the line.

- **Distinct** — A second spatial column exists for the whole section and is read in parallel with the main measure; that is a structural change, not a styling one.
- **Use** — Lets a service explanation carry caveats, definitions and small proof figures without interrupting the sentence making the claim.
- **Desktop** — A 60–70 character measure occupying two thirds, a hairline separating a narrower right rail, each note aligning its first baseline to the sentence that raised it, and rail figures captioned at the same small size.
- **Narrow** — Notes become expanded inline asides beneath their paragraph, indented and rule-marked — never collapsed behind a control, which would defeat the device.
- **Risk** — Static CSS cannot stop adjacent notes overlapping and struggles with lists or multiple paragraphs inside a note, so note length becomes an authoring constraint rather than a code problem.
- **Variants** — Numbered sidenotes · Unnumbered margin glosses · Rail with small figures · Tinted rail · Left-hand rail
- **Overlap** — A-05 uses the same geometry, but its margin carries a second opinion the reader can mute rather than supporting detail.
- **References** — Tufte CSS, Gwern's sidenote survey, Rest of World margin figures
- **Tags** — `no-motion` `static` `wide` `density-high` `build-medium` `budget-none` `rm-free` `semantics-fragile`

### SEC-005 · Dual-Voice Commentary Rail

`A` · static · React-interactive · difficulty medium · **RESERVE**

The client-facing argument runs in the measure while a second, named annotator voice runs in the margin in a different cut and colour — a delivery lead marking up the sales copy. One control mutes the second voice.

- **Distinct** — Reader activity is the changed dimension: the reader decides how many voices are on the page, and the margin carries opinion rather than supporting detail.
- **Use** — Lets a firm state a claim and immediately qualify it in a practitioner's voice, which reads as candour rather than marketing.
- **Desktop** — Measure plus rail; annotator lines are shorter, set in the accent, tied to their paragraph by a hairline tick, with a small 'one voice / two voices' control sitting in the section's head rule.
- **Motion** — Muting fades the second voice and retracts its ticks; the measure itself never changes position.
- **Narrow** — Annotator lines fold in beneath their paragraph as indented accented asides; the mute control stays at the section head.
- **Risk** — Colour alone cannot carry the voice distinction — each track needs a name label and its own semantic wrapper so the two voices are separable without colour vision.
- **Variants** — Practitioner commentary · Editor's marks · Two named annotators · Muted by default · Second voice in mono
- **Overlap** — A-04 is the same geometry with a single voice; A-18 pairs two type systems but carries metadata, not opinion.
- **References** — Gwern's annotation layers and popup toggle, Bisous sans/mono two-voice grid, Tufte CSS
- **Tags** — `css-motion` `static` `wide` `density-high` `build-medium` `budget-none` `rm-free` `kbd-path`

### SEC-006 · Manifesto In Empty Field

`A` · static · static · difficulty low · **SELECTED**

One sentence at display scale in an otherwise empty viewport — no image, no supporting paragraph, no button. The emptiness is the composition, and the sentence is given more room than anything else on the page.

- **Distinct** — Scale and void are the entire hierarchy and the section deliberately holds a single content unit, which is a different compositional job from any opener that introduces material.
- **Use** — States a belief or positioning line and resets tempo between two dense sections.
- **Desktop** — The sentence hung on the left grid columns rather than centred, occupying about two thirds of viewport height, with one small attribution or year set at hairline size in a far corner.
- **Narrow** — Same sentence stepped down to the top of the display scale, filling the screen with the same generous emptiness above and below.
- **Risk** — Repeating a full-bleed display statement more than once per page exhausts it — by the third the reader stops reading them at all.
- **Variants** — Paper field · Navy inverted field · One accent word in a contrasting cut · Swapping key noun · Year-and-attribution corner
- **Overlap** — Q owns the line-masked reveal of the same sentence; this concept is deliberately still and works with no script at all.
- **References** — Locomotive positioning statement, Awwwards Typography Honors, Tailwind Plus chapter plate
- **Tags** — `no-motion` `static` `full-bleed` `density-low` `build-low` `budget-none` `rm-free` `surface-critical`

### SEC-007 · Broadsheet Column Shift

`A` · static · static · difficulty low · **SELECTED**

One long block of prose that runs as a single column at small widths, two at tablet and three at desktop, with hairline gutter rules and a balanced final rag. The same text is a materially different object at each width.

- **Distinct** — Responsive transformation is the concept: the reader's activity shifts from vertical reading to newspaper scanning as the viewport widens, from one source and one order.
- **Use** — Gives a genuinely long piece of positioning or point-of-view copy a broadsheet register without chopping it into cards.
- **Desktop** — Three columns of roughly 45 characters each with hairline rules in the gutters, a short standfirst spanning all three above them, and the last column ending on a composed rag rather than a filled block.
- **Narrow** — A single column at a comfortable measure; the gutter rules disappear rather than becoming horizontal dividers.
- **Risk** — Multi-column text that exceeds a fixed container height spills into horizontal scrolling and fails reflow at 320px, so column height must be content-driven.
- **Variants** — Ruled gutters · Wide unruled gutters · Two-column cap · Drop cap in column one · Standfirst spanning all columns
- **Overlap** — A-08 also controls measure, but its subject is rhythm down the section rather than column count across widths.
- **References** — Butterick measure rules, Rest of World editorial, Obys dense/calm alternation
- **Tags** — `no-motion` `static` `contained` `density-high` `build-low` `budget-none` `rm-free`

### SEC-008 · Narrowing Measure Long Read

`A` · static · static · difficulty medium · **RESERVE**

A long read whose measure tightens step by step down the section — wide and dense at the top, calm and narrow by the close — interrupted once in the middle by a dense fact band. The argument physically closes in on its conclusion.

- **Distinct** — Vertical rhythm is the composition: measure width is a variable that changes down the section rather than a constant declared once.
- **Use** — Carries a long method or philosophy argument to a single closing line without a card, a grid or an image.
- **Desktop** — Opens at a 75-character measure with a dense two-column fact band, then steps to 62 and 48 characters, each step marked only by a hairline and increased leading, with the final paragraph alone at near-display size.
- **Narrow** — The steps become leading and size changes only, since measure is already at its minimum; the closing paragraph still steps up in scale.
- **Variants** — Three-step narrowing · Widening instead of narrowing · Interrupting fact band · Rule-marked steps · Inverted closing panel
- **Overlap** — P owns the breakout ladder where figures escape the measure; here nothing escapes and only the measure itself moves.
- **References** — Obys dense/calm alternation, Butterick 45–90ch, Codrops editorial rhythm blocks
- **Tags** — `no-motion` `static` `contained` `density-medium` `budget-none` `rm-free` `build-medium`

### SEC-009 · Epigraph And Answer

`A` · sticky · CSS-interactive · difficulty medium · **RESERVE**

A client quotation in a distinct face opens the section and the body answers it directly, the quote staying on screen while the answer scrolls beneath. The section is structured as a reply rather than as a statement.

- **Distinct** — The relationship between two content blocks is the concept — one is a prompt, the other is its answer, and the prompt persists for the whole section.
- **Use** — Turns objection handling into a conversation where the buyer's own concern is quoted before it is answered.
- **Desktop** — The quote spans the top third at large scale in a contrasting cut with the speaker's role beneath a short rule; the answer runs in a narrow measure below-left while the quote sticks at the viewport top.
- **Narrow** — The quote is read once at full size, then compresses to a two-line band with a rule beneath as the answer passes under it.
- **Risk** — A sticky quote that keeps its display size consumes most of a short viewport; it must compress or release below a height threshold.
- **Variants** — Compressing sticky quote · Non-sticky epigraph · Serif quote against sans body · Quote on a navy plate · Two epigraphs, two answers
- **Overlap** — A-10 runs many alternating question/answer pairs; this is one prompt governing the whole section.
- **References** — Rest of World standfirst structures, Gwern epigraphs, darkroom.engineering quality-tagged quotes
- **Tags** — `no-motion` `sticky` `contained` `density-low` `build-medium` `budget-none` `rm-free`

### SEC-010 · Sticky Question Dialogue

`A` · sticky · CSS-interactive · difficulty low · **RESERVE**

Oversized questions set in the margin, answers set in the measure, each question sticky until its answer ends. A dialogue laid out spatially, with nothing hidden and nothing to open.

- **Distinct** — Reader activity: unlike an accordion, every answer is permanently present and skimmable, and the question stays legible for the whole length of a long answer.
- **Use** — Answers a buyer's real objections at full length without asking them to click, and lets a skimmer read only the questions.
- **Desktop** — A left margin column at roughly a third width carries each question at near-display scale; the answer runs at 60 characters to its right; each question releases as the next arrives at the top.
- **Narrow** — Questions become full-width headings above their answers with a rule beneath; stickiness is dropped rather than compressed.
- **Risk** — Several sticky elements at different offsets collide on short viewports, so only one question may be stuck at a time.
- **Variants** — Numbered questions · Question in the accent colour · Answers with a mono metadata line · Alternating sides · Compressed stuck state
- **Overlap** — G owns the version where answers are hidden until opened; the whole point here is that nothing is hidden.
- **References** — Tufte-adjacent marginal Q&A blocks, NN/g on disclosure versus visible content, Rest of World interview layouts
- **Tags** — `no-motion` `sticky` `wide` `density-medium` `build-low` `budget-none` `rm-free`

### SEC-011 · Offer Specimen Rig

`A` · user-driven · React-interactive · difficulty medium · **SELECTED**

A service name or claim presented as a type specimen at four sizes with live controls for size, tracking, leading and column count, plus a toggle that reveals the underlying grid. The section exposes the craft instead of asserting it.

- **Distinct** — The reader operates the type system itself; the subject is the typography rather than the copy it happens to set.
- **Use** — Demonstrates design capability on a page where the buyer has to believe this studio can actually set type.
- **Desktop** — A large specimen block on the right two thirds shows one phrase at display, sub-display, body and caption sizes; a hairline control strip on the left carries labelled inputs and a grid-overlay switch, with current values read out in mono.
- **Narrow** — Controls collapse to a single row of stepped presets above the specimen; the grid overlay toggle is retained.
- **Risk** — Controls must be native range and select inputs with visible labels and readouts; a custom drag handle strands keyboard, speech and switch users.
- **Variants** — Slider controls · Stepped presets only · Grid overlay on/off · Randomised specimen · Glyph inspector panel
- **Overlap** — R owns relationships between separate things; here the relationship is between one control set and one text object.
- **References** — Klim Type Foundry specimens and glyph inspector, Storybook and Ladle width addons, GOV.UK typography pages
- **Tags** — `no-motion` `user-driven` `contained` `density-medium` `build-medium` `budget-none` `rm-free` `kbd-path`

### SEC-012 · Annotation Reading Layer

`A` · layered · React-interactive · difficulty high · **RESERVE**

Cited terms, figures and names carry a distinct underline encoding what lies behind them; focusing one opens a small in-page source card without leaving the sentence, and a section-level control turns the whole layer off.

- **Distinct** — A second reading layer sits over the same text rather than beside it — no margin column, no disclosure row — and the reader decides whether the layer exists at all.
- **Use** — Lets a proof-heavy claim carry its sources inline, so a sceptical buyer can verify without a separate references block.
- **Desktop** — Body at measure with three underline weights encoding link type; the card opens adjacent to the term at a fixed narrow width carrying source, date and one line of context; the off-switch sits in the section head rule.
- **Narrow** — Cards open as a bottom-anchored panel that never displaces the text; the underline encoding is preserved unchanged.
- **Risk** — Hover-only popovers are unreachable on touch and by keyboard, so the card must open on focus, close on Escape, and its source text must exist in the DOM regardless.
- **Variants** — Three underline weights · Focus-only cards · Dotted-rule citations · Layer off by default · Inline glossary terms
- **Overlap** — A-04 puts the same material permanently in the margin; this holds it until the reader asks.
- **References** — Gwern's three underline types and popup toggle, Tufte CSS margin notes, W3C complex-image long descriptions
- **Tags** — `css-motion` `layered` `contained` `density-medium` `build-high` `budget-none` `rm-free` `kbd-path`

### SEC-013 · Task-Stem Grouped Index

`A` · static · static · difficulty low · **SELECTED**

Services grouped under sentence fragments — 'Help you to…', 'Ask us about…' — with the stem set enormous and the items hairline-small beneath it, so the list reads as prose the reader completes. The contrast ratio between stem and item is the whole design.

- **Distinct** — Grouping by the reader's intent, expressed as grammatical completion, changes both hierarchy and reading order compared with a list of named categories.
- **Use** — Organises a capability set by what the buyer is trying to do rather than by internal discipline vocabulary.
- **Desktop** — Three stems stacked down the section, each at display scale spanning the container, with eight to twelve items set at caption size in two tight columns hanging beneath the stem's last word.
- **Narrow** — The stem wraps to two or three lines and items become one hairline-ruled column; the size contrast is preserved rather than flattened.
- **Risk** — The stem and its items must be a real heading and list, or the grammatical completion is announced as two unrelated fragments.
- **Variants** — Two stems · Enormous stem, hairline items · Stem as a quiet eyebrow · Ruled item columns · Count appended per stem · Inverted scale with a full-width rule · Stems as questions · Stems in display serif, items in mono
- **Overlap** — N owns the alphabetical filterable index; here the grouping grammar rather than the density is the composition.
- **References** — GOV.UK Design System's three pattern stems, darkroom.engineering three-column reference matrix, Klim scale contrast
- **Tags** — `no-motion` `static` `wide` `density-high` `build-low` `budget-none` `rm-free` `semantics-fragile`

### SEC-014 · Marginal Case Study

`A` · static · static · difficulty medium · **RESERVE**

A narrative runs in the measure while results run as large numerals down the margin, aligned to the sentence that earned each one. The margin reads correctly on its own, without a word of the prose.

- **Distinct** — Two parallel reading paths through the same content at two densities — the margin is a proof track, not annotation attached to a line.
- **Use** — Serves the skimmer who wants only outcomes and the reader who wants the story, in one section and one source order.
- **Desktop** — A 60-character narrative on the left; the right margin carries three or four figures at display scale, each with a hairline caption naming period and denominator, sitting at the baseline of its claim.
- **Narrow** — Figures move inline above the paragraph they belong to at the same large scale, so the skim path survives as a vertical run of numerals.
- **Risk** — Baseline alignment between a margin figure and a specific sentence breaks on rewrap, so each figure needs an anchor paragraph rather than a fixed offset.
- **Variants** — Numerals only · Numerals with denominators · Struck 'before' figure above · Left margin · Two-client parallel margins
- **Overlap** — M owns the case-study excerpt built from real artefacts; here the composition is measure-and-margin typography.
- **References** — Tufte margin figures, darkroom.engineering evidence-footed stats, TRIONN quantified proof strip
- **Tags** — `no-motion` `static` `wide` `density-medium` `build-medium` `budget-none` `rm-free`

### SEC-015 · Data In Prose

`A` · static · scroll-driven · difficulty medium · **SELECTED**

The numbers live inside the sentences: sparklines set at x-height, proportion bars behind a figure, numerals that count to value as their own sentence enters. Claim and evidence occupy the same line, so the chart-versus-prose split disappears.

- **Distinct** — The graphic is a typographic unit sized to the text, changing the relationship between evidence and claim rather than restyling a stat band.
- **Use** — Proves a handful of specific numbers inside the argument that uses them, without spending a whole section on figures.
- **Desktop** — A short measured column of four or five sentences, each carrying one word-scale graphic, with a single hairline rule beneath the block carrying source, period and denominator for all of them.
- **Motion** — Each numeral counts once as its own sentence crosses the reading band and never animates again.
- **Narrow** — Identical — the graphics are sized to the type, so the block simply reflows with no separate small-screen treatment.
- **Risk** — Final values must exist in the DOM, and a low-opacity resting state before the count fails contrast for anyone who lands mid-animation.
- **Variants** — Sparkline only · Proportion bar behind figure · Counting numerals · Still numerals with a source rule · Tabular mono figures
- **Overlap** — N owns the stat band as a composition; here the figures never leave the sentence.
- **References** — Tufte sparklines, The Pudding data-in-prose, GSAP progress-driven counters
- **Tags** — `scroll-css` `static` `contained` `density-medium` `build-medium` `budget-none` `rm-designed`

### SEC-016 · Typographic Redline

`A` · static · static · difficulty medium · **SELECTED**

One piece of real client copy set twice in the same block: the original marked with deletions, insertions and margin queries in a proofreader's vocabulary, the clean result beneath it. The markup is treated as a designed type system, not a diff view.

- **Distinct** — Both states are permanently present as one composition read together, so the section's subject is the typography of editorial judgement rather than a toggled comparison.
- **Use** — Proves copy, naming or positioning work by showing the actual judgement instead of claiming it.
- **Desktop** — The marked paragraph occupies the measure with struck text in muted grey, insertions above the line in the accent, and short queries in the outer margin in mono; the clean result sits beneath a hairline at the same measure.
- **Narrow** — Insertions move from above the line to inline after the struck text; margin queries fold beneath the paragraph as indented mono notes.
- **Risk** — Strikethrough and colour must be backed by real deletion and insertion semantics, or the marked paragraph is announced as one incoherent sentence.
- **Variants** — Markup plus clean result · Markup only · Margin queries in mono · Two rounds of edits · Inverted navy result panel
- **Overlap** — L owns the version where one control swaps before and after in place; here both states are read simultaneously.
- **References** — Print proofreading mark conventions, Chromatic diff review panes, Gwern's editorial annotation
- **Tags** — `no-motion` `static` `contained` `density-high` `build-medium` `budget-none` `rm-free` `semantics-fragile`

### SEC-017 · Reading Meter And Map

`A` · sticky · React-interactive · difficulty medium · **RESERVE**

A long explanation carries its own thin progress rule along the container edge naming the sub-heading currently in view; expanding it reveals a jumpable map of the section's parts with a reading estimate for each.

- **Distinct** — The section carries an instrument for its own length — reader orientation is the concept and the map is content belonging to this section, not page chrome.
- **Use** — Makes a genuinely long method explanation feel finite and lets a buyer jump straight to the part that concerns them.
- **Desktop** — A hairline rule down the left edge of the container with a filled portion showing progress and the current sub-heading set small beside it; expanded, it lists four to six named parts with per-part minutes.
- **Motion** — The fill tracks scroll position continuously and the expansion is a short height change with no travel.
- **Narrow** — The rule becomes a thin band beneath the section head carrying the current part name and a tap-to-open list; it never floats over the text.
- **Risk** — The map must be a real list of in-page links reachable by keyboard, and it must never be the only route to any part of the section.
- **Variants** — Edge rule · Head band · With per-part minutes · With read marks · Expanding on focus only
- **Overlap** — Not site navigation — it addresses only this section's own parts and dies with the section.
- **References** — The Pudding long-read furniture, Gwern semantic zoom, @container scroll-state(stuck) sticky styling
- **Tags** — `scroll-css` `sticky` `contained` `density-low` `build-medium` `budget-none` `rm-designed` `kbd-path`

### SEC-018 · Sans Claim, Mono Receipt

`A` · static · static · difficulty low · **SELECTED**

A restrained four-column grid where a sans column carries the claim and headline type and a monospace column footnotes it line by line with dates, roles, formats and process notes. The page gets two voices without two personalities: the claim and the receipt.

- **Distinct** — The composition is a four-column grid running two type systems as parallel registers, not a body column with notes hung off it.
- **Use** — Makes a capability statement look documented rather than decorated, which is what a buyer checks before believing it.
- **Desktop** — Columns one and two carry the headline and a short argument in the display and body faces, column three is deliberately empty, and column four carries mono annotations aligned to the first baseline of each claim line across a hairline.
- **Narrow** — The mono column drops beneath each claim as a small ruled metadata block, preserving the pairing; the empty column simply disappears.
- **Risk** — Baseline alignment between a mono annotation and a specific claim line breaks on rewrap, so each annotation needs an anchor to its claim rather than a fixed offset; the deliberately empty third column must be genuinely empty in source, not a spacer announced as content.
- **Variants** — Empty third column · Mono in the outer margin · Mono in the accent colour · Numbered claim lines · Dark inverted grid
- **Overlap** — A-05 pairs two voices as well, but its second voice carries opinion and can be muted; this one is metadata and permanently still.
- **References** — Bisous four-column sans/mono grid, darkroom.engineering reference matrix, Locomotive capability ledgers
- **Tags** — `no-motion` `static` `wide` `density-high` `build-low` `budget-none` `rm-free`

### SEC-213 · Letterform Aperture

`A` · layered · CSS-interactive · difficulty experimental · **SELECTED**

A single letterform at display scale is the window: its counter is the only opening through which a field of client names, work titles or artefacts is read. The type is the container, not the message.

- **Distinct** — Composition and the relationship between type and content both change — type stops carrying words and becomes the aperture that governs what is visible, which no other entry does.
- **Use** — Turns a plain list of clients or engagements into a section that states the practice's initial without writing a word of marketing copy.
- **Desktop** — One glyph occupying most of the section height, cut from the surface so the ground shows through its counter. The content field sits behind and moves or is simply longer than the aperture, so the reader always sees a fragment and infers the rest.
- **Motion** — The field behind may drift slowly or hold entirely still; movement is optional and the section reads correctly with none.
- **Narrow** — Below the tablet width the aperture cannot hold a legible fragment, so the glyph becomes a plain oversized mark above the list and the content is read directly — a different section, stated as such.
- **Risk** — The names must exist as real text in source order and read correctly with the letterform treated as presentational, or the section's whole content is invisible to assistive technology, reader modes and crawlers. If the field moves, travel must be removed entirely under reduced motion rather than slowed.
- **Variants** — Field still, glyph the only event · Field drifting at constant slow rate · Aperture as the studio's own counter shape · Photographic field rather than type · Two glyphs, two apertures
- **Overlap** — SEC-194 is a band of travelling content in an ordinary rectangle; here the shape of the opening is the concept and the travel is optional.
- **References** — Promoted from a variant buried in the marquee entry; Codrops glowing-marquee clipping technique; the text-integrity requirement modelled by SEC-185
- **Tags** — `css-motion` `layered` `full-bleed` `density-low` `experimental` `budget-none` `rm-designed` `text-integrity`

## B — Feature and capability explainers

### SEC-019 · Ruled Equal-Column Register

`B` · static · static · difficulty low · **SELECTED**

Three or four peer capabilities as typographic columns held by a shared top rule and a shared closing rule, so unequal copy lengths are absorbed by the grid instead of being trimmed to fit the column. No cards, no elevation: rules and baselines do the composing.

- **Distinct** — Composition and hierarchy change — equal rank is asserted by a rule grid and shared baselines rather than by repeating containers, so the section reads as a register rather than a row of cards.
- **Use** — States a small set of genuinely equally-weighted capabilities without implying one matters more than the others.
- **Desktop** — A short left-hung section head, then a full-width top rule; beneath it three columns divided by full-height hairlines, each with a small head mark, a two-word title and a paragraph that ends wherever it ends. One closing rule catches every column.
- **Narrow** — Columns become one ruled stack; the closing rule becomes a rule between items and copy no longer needs equalising.
- **Risk** — Built as a row of divs it loses list semantics and item enumeration, so a screen-reader user cannot tell how many capabilities exist or move between them.
- **Variants** — Small-glyph column heads · Numeral heads, no icons · Purpose-drawn micro-schematics · Lead word at display scale · Four columns inverted on navy
- **Overlap** — Resembles a C card grid, but there are no repeating containers and no filtering — the units are typographic columns on one rule grid.
- **References** — Tailwind Plus 'Simple three column with small icons', Preline Icon Blocks, HyperUI Feature Grids, Developers Digest 'AI Design Slop'
- **Tags** — `no-motion` `static` `contained` `density-medium` `build-low` `budget-none` `rm-free` `semantics-fragile`

### SEC-020 · Alternating Artefact Rows

`B` · static · scroll-driven · difficulty low · **SELECTED** · wave 1

Five to seven full-width rows, each a single claim paired with one real artefact, alternating side. One continuous hairline runs the section's full height at the seam so every row registers against the same spine instead of floating as a template.

- **Distinct** — The repeating unit is a full-width row rather than a column, and alternation against a shared seam rule is the composition — a different spatial rhythm from any column set.
- **Use** — Gives six or seven capabilities genuinely equal treatment where a grid would flatten them into cells.
- **Desktop** — Rows at roughly 55/45 with handedness flipping each row; the claim is one display-scale line with a short paragraph beneath, and the artefact is a real deliverable at true proportion rather than a stock photograph. Captions hang in the outer margin.
- **Motion** — Each row resolves once on entry with the artefact settling a beat after its claim line, adjacent rows batched so they read as one group rather than firing as unrelated animations.
- **Narrow** — Alternation has no honest narrow form — every row becomes artefact above claim in one column, and the seam rule moves to the leading edge.
- **Risk** — Flipping sides by reordering source desynchronises reading order from DOM order; the flip must be a layout decision over one authored source order.
- **Variants** — Single-edge bleed alternation · Inset plates on paper · Text-only rows, no artefacts · Measure narrowing down the run · One navy row mid-section
- **Overlap** — Close to E's split diptych; separate because it is a repeating run of rows, not one two-region composition.
- **References** — One Page Love Z-Pattern Layout, Radian's seven-item feature run, Preline Service Listing Section, Bisous four-column editorial grid
- **Tags** — `scroll-css` `static` `wide` `density-medium` `build-low` `budget-none` `rm-designed`

### SEC-021 · Oversized Deliverable Plate

`B` · static · static · difficulty low · **RESERVE**

One capability takes the whole section: a narrow copy column against a plate two and a half times its width carrying a real deliverable, cropped by the page edge rather than scaled down, so the reader infers there is more document than is shown.

- **Distinct** — Scale and boundary carry the argument — a single subject at an extreme ratio with the artefact escaping the container, rather than a set of peers given equal room.
- **Use** — Makes one flagship capability persuasive by showing its actual output instead of describing it.
- **Desktop** — Left column: eyebrow, one heading, three named attributes on hairlines. Right: the plate, top-aligned to the heading's cap line and running off the right edge of the viewport.
- **Narrow** — The plate stops bleeding, sits above the copy at container width, and is cropped to a shorter aspect so a document edge is still visible.
- **Risk** — A plate passing the viewport edge must not create horizontal overflow at 320px, and as the likely LCP candidate it needs explicit dimensions and fetch priority.
- **Variants** — Plate bleeds right · Plate bleeds left · Two overlapping documents · Bare document edge, no chrome · Plate on a tinted ground
- **Overlap** — Sits next to E; it exists to explain one capability through its deliverable, not to relate two regions to each other.
- **References** — Tailwind Plus 'With product screenshot' and 'With product screenshot on left', Magic UI device-mock sections, Aceternity container-scroll artefact reveal
- **Tags** — `no-motion` `static` `breakout` `density-low` `build-low` `budget-none` `rm-free`

### SEC-022 · Numbered Capability Ledger

`B` · static · GSAP-enhanced · difficulty medium · **SELECTED**

Capabilities as a numbered, countable set where each entry carries its own evidence directly beneath it — a claim line, a one-line definition and two real artefact cards — so a claim and its proof can never be separated by a fold.

- **Distinct** — A content contract is the structure: no entry may render without its evidence, which changes what the section is able to say rather than how it looks.
- **Use** — Lets a buyer verify each capability at the moment they read it, without leaving the section.
- **Desktop** — Display-scale numerals hung in the outer margin; each entry occupies a full-width band on a hairline, claim left, definition beneath, and two small artefact cards sharing one baseline on the right.
- **Motion** — Each entry reveals as one unit — numeral, claim and both proof cards together — so the binding between claim and evidence is visible in the motion as well as the layout.
- **Narrow** — The numeral moves from the margin to a line above the claim and the proof cards become a two-up pair at half width, so claim and evidence still share one screen.
- **Risk** — Reveals must be one trigger per entry group rather than per element; per-element triggers at this granularity multiply refresh cost badly once several sections share a page.
- **Variants** — 01/05 counters · Display numerals in the margin · One artefact plus one metric · Hairline entries, no cards · Ledger inverted on navy
- **Overlap** — Close to K's numbered process; separate because the numerals index a countable set, not an ordered sequence with dependencies.
- **References** — BASIC/DEPT 01/04–04/04, Akaru 01–05, Locomotive 01 Design / 02 Development / 03 Operations
- **Tags** — `gsap-core` `static` `contained` `density-medium` `build-medium` `budget-none` `rm-designed`

### SEC-023 · Lead Capability And Ledger

`B` · static · scroll-driven · difficulty low · **RESERVE**

One capability is given a full split treatment at the top of the section and the remaining four are compressed into a hairline ledger beneath it. Two ranks, two densities, one section — which is the truth about most service businesses.

- **Distinct** — Hierarchy changes: the section carries two explicit ranks at two densities, where an equal-column set asserts that everything matters the same.
- **Use** — Says what the practice is actually known for without pretending the rest of the offer does not exist.
- **Desktop** — The lead occupies roughly two thirds of the section height with a heading, a paragraph and one artefact; below a full-width rule, four ledger rows carry a name, a one-line definition and nothing else.
- **Motion** — Only the lead artefact moves — one short resolve on entry — so the motion budget is spent in proportion to rank.
- **Narrow** — The lead keeps its artefact and the ledger stays a ledger; rank survives because the lead is taller, not because it is wider.
- **Risk** — Rank expressed by scale alone collapses at intermediate widths where lead and ledger compress toward the same weight — the too-early-breakpoint failure.
- **Variants** — Lead with full-bleed artefact · Lead on navy, ledger on paper · Ledger in two columns · Lead set as a split · Ledger rows numbered
- **Overlap** — Could read as D because size encodes rank, but there is no grid — it is a lead block followed by a list.
- **References** — Obys dense-then-calm alternation, Locomotive capability numbering, Antinomy featured-work trio, Ahmad Shadeed on early breakpoints
- **Tags** — `scroll-css` `static` `contained` `density-medium` `build-low` `budget-none` `rm-designed`

### SEC-024 · Benefit-Footed Cards

`B` · static · static · difficulty low · **RESERVE**

A capability card system where every unit ends in a fixed 'what this changes for you' strip set in a different type register, so no card can terminate on a feature and the scan path always closes in the buyer's language.

- **Distinct** — The internal hierarchy of the unit changes: each card has two registers and a mandatory closing element, so the last thing read in every card is a consequence rather than a capability.
- **Use** — Stops a capability set from reading as a specification the buyer has to translate into value themselves.
- **Desktop** — Three or four equal units; each carries a title, two or three lines of body, then a hairline and a short benefit line set smaller and tighter on a stepped surface — visibly a different voice from the body above it.
- **Narrow** — Cards stack; the benefit strip is the one element that never truncates, and the body above it is what shortens.
- **Risk** — A stretched full-card link masks the text so the benefit line cannot be selected, and makes the accessible name the entire card — the link belongs on the title.
- **Variants** — Tinted benefit strip · Hairline-ruled benefit line · Benefit stated as a figure · 2x2 rather than three-up · Emerald foot on navy card
- **Overlap** — Overlaps C's card grid; the concept here is the two-register contract inside the unit, not the grid the units sit on.
- **References** — Tailwind Plus feature families, shadcnblocks' 311 Feature blocks, Developers Digest 'AI Design Slop' on identical icon-topped cards
- **Tags** — `no-motion` `static` `contained` `density-medium` `build-low` `budget-none` `rm-free` `kbd-path`

### SEC-025 · Proof-Interleaved Capability Column

`B` · static · static · difficulty low · **RESERVE**

One measured column alternates two registers down the page: a capability claim, then a receipt for it — a named client line, a stat pair, or a redacted artefact — set in the same measure at the exact point the claim is made.

- **Distinct** — The relationship between the content changes: proof is interleaved into the reading flow rather than quarantined into a testimonial band, so the section is one continuous argument with evidence in line.
- **Use** — Answers 'can you actually do this' at the moment the doubt occurs rather than three sections later.
- **Desktop** — A single 60–70 character measure hung in the container; claims in the body scale, receipts on a rule with attribution as a name-and-role pair. Nothing centred, nothing boxed.
- **Narrow** — The measure is already the composition; the marginal-receipt variant moves inline between the claims it supports.
- **Risk** — A pull-quote duplicated for visual effect is announced twice; the receipt must be one real quotation with its attribution associated, not a decorative copy of body text.
- **Variants** — Receipt hung in the margin · Stat pair inline · Redacted document as receipt · One full-width tinted quote · Receipts as artefact thumbnails
- **Overlap** — Overlaps M; here evidence is subordinate to the capability explanation rather than being the section's subject.
- **References** — Tailwind Plus 'With testimonial' and 'With testimonial and stats', darkroom.engineering's quality-tagged quote trio, 2026 commentary on over-produced testimonials
- **Tags** — `no-motion` `static` `contained` `density-medium` `build-low` `budget-none` `rm-free`

### SEC-026 · Weighted Service Register

`B` · static · static · difficulty low · **RESERVE**

Every service as an identically structured full-width row on hairlines — name, one-line definition, deliverables cluster — but with two of seven rows given double height and a real artefact strip, so hierarchy exists inside the repetition rather than being flattened by it.

- **Distinct** — Unequal weight within an otherwise identical repeating structure is the concept; an ordinary listing asserts that all rows are the same size and therefore the same importance.
- **Use** — Presents a complete service list honestly while still telling the reader which two things the practice leads with.
- **Desktop** — Seven rows separated by full-bleed hairlines; name at display scale left, definition in the centre measure, deliverables set small and right-aligned. The two heavy rows extend with a strip of three artefacts along their foot.
- **Narrow** — Heavy rows keep their artefact strip and light rows compress to two lines, so the weight difference is preserved rather than levelled out.
- **Risk** — Height alone carries the significance signal, which is invisible non-visually — the heavy rows need their prominence stated in words, not only in scale.
- **Variants** — Two heavy rows of seven · Row numbering added · Deliverable counts per row · Navy rules on paper · Heavy rows inverted
- **Overlap** — Neighbours N's index; separate because the job is explanation with internal rank, not density as the statement.
- **References** — Preline Service Listing Section, Linear and Attio changelog media-weight discipline, Obys' numbered dense work index
- **Tags** — `no-motion` `static` `wide` `density-high` `build-low` `budget-none` `rm-free` `semantics-fragile`

### SEC-027 · Contained Panel Section

`B` · static · static · difficulty low · **RESERVE**

The whole explainer sits inside one large inset panel with its own surface, reading as a slab set down on the page — and a single element, the artefact, deliberately crosses the panel's edge so the panel reads as a window rather than a box.

- **Distinct** — The section's boundary is the composition: the reader meets a bounded object rather than a page region, and one controlled violation of that boundary sets the hierarchy.
- **Use** — Marks one part of a long service page as materially different without changing the page palette or breaking to full bleed.
- **Desktop** — A panel inset a full spacing step from the container on all four sides, generously radiused, carrying its own heading, a three-item capability list and an artefact plate whose top edge sits above the panel's.
- **Narrow** — The inset drops to one step and the radius reduces; the overflowing artefact returns inside the panel, because there is no longer enough room for the overflow to read as intentional.
- **Risk** — An inset dark panel changes the contrast context for everything inside it — body text, hairlines and muted labels all need re-checking rather than inheriting page values.
- **Variants** — Navy panel on paper · Paper panel on navy · Artefact crossing the top edge · Square panel with a hairline · Three-column panel interior
- **Overlap** — The inverse of P — P uses width to escape the container, this uses inset containment as the device.
- **References** — Tailwind Plus 'Contained in panel' and 'With product screenshot panel', Preline Content Showcases
- **Tags** — `no-motion` `static` `contained` `density-medium` `build-low` `budget-none` `rm-free` `surface-critical`

### SEC-028 · At-A-Glance Companion Panel

`B` · sticky · CSS-interactive · difficulty medium · **RESERVE**

Long-form explanation of one service in the main column, with a companion panel holding the commercial facts — scope, typical duration, deliverables, price band — that stays with the reader for the whole section.

- **Distinct** — Two content registers with different lifespans coexist: a persistent summary and a scrolling explanation. Reader activity changes — the facts can be checked at any point without leaving the argument.
- **Use** — Keeps a buyer's decision facts on screen while they read the detail that justifies them.
- **Desktop** — Roughly 62/38; the prose column carries headings and paragraphs, the panel is a hairline-ruled definition list with tabular numerals, sticky below the section head and released at the section's foot.
- **Motion** — The panel gains a hairline and one elevation step only while it is actually stuck, so the change is a state rather than an animation.
- **Narrow** — The panel is not sticky — it moves to the top of the section as a summary block read before the prose, which is the more useful order at that width.
- **Risk** — Sticky must release the moment the columns stack or the panel pins over the prose; a tall sticky panel also holds a large composited surface alive for the section's whole scroll.
- **Variants** — Bordered spec card · Bare hairline list · Panel carrying a CTA · Docks to a one-line summary bar · Price band omitted
- **Overlap** — Neighbours E's sticky split; here the persistent side is a fixed commercial summary, not a claim that swaps per rail item.
- **References** — Tailwind Plus 'With sticky product screenshot', zeroheight's spec-beside-component layout, @container scroll-state(stuck) sticky styling
- **Tags** — `scroll-css` `sticky` `contained` `density-medium` `build-medium` `budget-none` `rm-free`

### SEC-029 · Scope And Exclusion Pairs

`B` · static · static · difficulty low · **SELECTED**

Each capability is stated as a pair — what is included, and what explicitly is not — with the exclusion set in a deliberately quieter register on the same rule. Naming the boundary is the strongest credibility move a premium service has.

- **Distinct** — The reading unit becomes a pair and the comparison happens inside each capability rather than across the set, which changes what the reader does at every row.
- **Use** — Removes the vagueness that makes buyers distrust service pages, and pre-empts the scoping conversation.
- **Desktop** — Five full-width rows on hairlines; the included column at roughly two thirds width in the body scale, the excluded column beside it set smaller under its own standing label, each exclusion closing on a short 'instead' line.
- **Narrow** — Pairs stack: the exclusion sits directly beneath its inclusion, indented and ruled, so the pairing survives the loss of facing columns.
- **Risk** — De-emphasised exclusion text is still content and must hold 4.5:1; strikethrough is not announced by most screen readers, so the exclusion needs a written label rather than a styling cue.
- **Variants** — Facing two-column pairs · Exclusion set small beneath · Exclusion hung in the margin · 'Instead' line replacing the exclusion · Struck register for exclusions
- **Overlap** — Reads as F at a glance; F helps a reader choose between options, this scopes a single capability.
- **References** — USWDS Deprecated and Retired lifecycle states, the design-system deprecation strip, NN/g on incomplete attribute data in comparison sections
- **Tags** — `no-motion` `static` `contained` `density-high` `build-low` `budget-none` `rm-free` `text-integrity`

### SEC-030 · Task-Stem Capability Index — MERGE → SEC-013

> **Merged into SEC-013.** Same task-stem index; differs only in item count and column arrangement. Its distinguishing material now lives in SEC-013's variants. The permanent id is retained so numbering never shifts.

`B` · static · static · difficulty low

Capabilities grouped under sentence fragments the reader completes — 'Help you to…', 'Take over…', 'Ask us about…' — with the stem enormous and the items hairline-small beneath it, so the section is organised by what the buyer is trying to do rather than by our discipline names.

- **Distinct** — The type hierarchy is inverted relative to every other capability set: the grouping sentence is the largest element and the capabilities are the small print, which changes the order the section is read in.
- **Use** — Lets a business owner find their own problem before they have to learn what the practice calls its services.
- **Desktop** — Three stems stacked down the section, each at display scale with a full-width rule beneath it and its six to nine items set small in two columns, so each group reads as one long completed sentence.
- **Narrow** — The stem drops one size step but stays dominant; items become a single column beneath it.
- **Risk** — The inverted scale must not push item text below comfortable body size at 200% zoom, and the stem has to be the real heading in source order rather than a decorative line above one.
- **Variants** — Three stems, hairline items · Stem inverted on navy · Counts beside each stem · Two stems in two columns · Items as a running comma list
- **Overlap** — Neighbours A and N; the inverted hierarchy serves capability grouping, not typographic display for its own sake.
- **References** — GOV.UK's 'Ask users for…' / 'Help users to…' pattern stems, The Component Gallery's alias listings, USWDS filtered component index
- **Tags** — `no-motion` `static` `contained` `density-medium` `build-low` `budget-none` `rm-free` `text-integrity`

## C — Card systems and grids

### SEC-031 · Consequence-footed claim cards

`C` · static · static · difficulty low · **SELECTED**

Three equal cards on a regular grid, each with a fixed internal ladder: small label, one-line claim at heading scale, two lines of plain explanation, then a rule-separated consequence strip at the foot. The repetition is the point; the foot strip stops any card ending on a feature.

- **Distinct** — The card's internal hierarchy is fixed and two-register — claim above the rule, business consequence below it — which changes what each unit says, not only how it looks.
- **Use** — States three capabilities so each lands as an outcome a buyer can act on rather than a service name.
- **Desktop** — Three equal columns at container width, generous internal space; the reader meets three short claims at the same scale, then the ruled feet align across all three as a second readable row.
- **Narrow** — Single column in source order, foot strip retained; padding tightens rather than the type shrinking.
- **Risk** — Must be marked up as a real list so screen readers can enumerate the set; a stretched-link overlay kills text selection and a card-wrapping anchor produces an unusably long accessible name.
- **Variants** — Paper cards · Navy inverted set · Frameless hairline columns · Four-up, same anatomy · Numeral instead of icon
- **Overlap** — C-14 also uses columns, but there the column owns stacked evidence cells; here each card is one self-contained unit.
- **References** — Tailwind Plus three-column feature grids, Preline Icon Blocks, benefit-footed card seed, Developers Digest critique of identical icon cards
- **Tags** — `no-motion` `static` `contained` `density-medium` `build-low` `budget-none` `rm-free` `semantics-fragile`

### SEC-032 · Ninth-cell call to action

`C` · static · static · difficulty low · **RESERVE**

A 3x3 grid of nine equal cells where the ninth is deliberately not a card: it carries the section's one instruction, in the same cell geometry but on the accent surface. The exit lives inside the argument rather than appended after it.

- **Distinct** — Composition — the grid is completed by the CTA, so the reader's next step is a cell of the set rather than a band beneath it.
- **Use** — Lets a capability overview end on a decision without spending another section on a CTA band.
- **Desktop** — Eight quiet cells of one line each read row by row; the bottom-right cell breaks tone exactly once, carrying one sentence and one control.
- **Narrow** — Cells stack; the CTA cell stays last in source order so it remains the closing move at every width.
- **Risk** — The accent cell must clear contrast for its text and its focus ring, and the eight sibling cells must not each be a link or the reader passes eight tab stops before the one that matters.
- **Variants** — Corner CTA · Centre-cell CTA · Ninth cell left genuinely empty · Counts in each cell
- **Overlap** — D also distinguishes one cell, but every cell here is the same size — the difference is surface, not weight.
- **References** — Nine-cell grid with one empty cell holding the CTA (Tailwind block seed), SaaSFrame gutter discipline, Tailwind Plus feature grids
- **Tags** — `no-motion` `static` `contained` `density-medium` `build-low` `budget-none` `rm-free` `surface-critical`

### SEC-033 · Centre-radiating batch reveal

`C` · scroll-driven · GSAP-enhanced · difficulty medium · **SELECTED**

A regular grid whose only motion is its arrival: items crossing the line together are collected into one grid-aware stagger radiating from the centre cell outward, so the set reads as a single object landing rather than nine unrelated fades.

- **Distinct** — Motion logic — the stagger is computed from grid coordinates and batched per crossing group, so the reveal expresses the grid's shape instead of DOM order.
- **Use** — Gives a plain capability or client grid one moment of composure on a page that is otherwise still.
- **Desktop** — Nine or twelve equal cells; whichever rows cross first resolve as a group, with the centre-outward order visible as a soft bloom.
- **Motion** — One short, once-only opacity and small-scale settle per batch, ordered by distance from the grid centre.
- **Narrow** — One column, so the radial order collapses honestly to a top-down stagger of two or three items at a time.
- **Risk** — One trigger per cell multiplies refresh cost — a documented forum case had Firefox warning at roughly 125 triggers — so this must batch; under reduced motion the resting state is the full grid, visible, with no fade.
- **Variants** — Centre-out · Row wave · Corner diagonal · Blur-to-sharp CSS view-timeline version
- **Overlap** — Q owns motion-led composition; here the grid is the concept and this is its only motion.
- **References** — ScrollTrigger.batch grid stagger docs, GSAP tips-and-mistakes on one tween for many elements, Rauno Freiberg on scale ranges
- **Tags** — `gsap-core` `scroll-driven` `contained` `density-medium` `build-medium` `budget-none` `rm-designed` `motion-sensitive`

### SEC-034 · Cross-ruled quadrant

`C` · static · static · difficulty low · **RESERVE**

Four items placed as regions of one continuous ruled field — a single vertical and horizontal hairline crossing the section — rather than as four card objects. Shared baselines make the quadrant read as one composition.

- **Distinct** — Composition and hierarchy: the grid is drawn by rules and the cells carry no surface, so the section reads as a field with four regions rather than a row of objects. Item count is not the difference.
- **Use** — Gives four peer principles or four engagement facts equal standing without the templated look of four cards.
- **Desktop** — A full-width cross divides the container; each quadrant carries a numeral, a short claim and two lines, aligned to shared baselines across the rule.
- **Narrow** — The cross reduces to a single vertical spine with four entries hung off it, so the rule system survives rather than disappearing.
- **Risk** — Low-contrast hairlines can vanish on poor displays and in forced-colours mode; the rules must be decorative only, with reading order carried by real list markup.
- **Variants** — Centred 2x2 · Offset 2x2 with a rule tracing the offset · Six-cell 3x2 field · Numerals hung in the gutter
- **Overlap** — A is typography-led composition; here the repeating four-region unit and its ruled grid are the subject.
- **References** — darkroom.engineering three-column reference matrix, Tailwind Plus Centered and Offset 2x2 grids, editorial spec-sheet seeds
- **Tags** — `no-motion` `static` `wide` `density-medium` `build-low` `budget-none` `rm-free`

### SEC-035 · Chip-filtered work index

`C` · user-driven · GSAP-dependent · difficulty medium · **SELECTED**

A regular grid of engagement cards above a short chip row tagged by the reader's own industry rather than by our disciplines. Choosing a chip re-lays the same cards into new cells: survivors travel, departures leave the flow cleanly.

- **Distinct** — Reader activity and implementation model — the set is filtered by re-flowing existing items rather than re-rendering a list, so the reader sees the same work rearranged.
- **Use** — Lets a self-identifying buyer see only work from their sector in one action, and the tag vocabulary itself states positioning.
- **Desktop** — Chips sit under the heading with the live result count written into the heading; the grid below keeps its column count and re-packs.
- **Motion** — Items animate from old cell to new one, with leaving items taken out of flow so nothing jumps.
- **Narrow** — Chips become a labelled, focusable horizontally scrollable strip; the grid drops to one column.
- **Risk** — The new count needs announcing in a live region, focus must stay on the pressed chip, and Flip measurement needs border-box plus a committed DOM or the transition silently no-ops.
- **Variants** — Industry chips · Deliverable chips · Multi-select · All plus per-chip counts
- **Overlap** — C-06 also filters, but nothing moves there and the reader types a free query.
- **References** — Instrument and Unseen filter chips, 14islands industry tagging, GSAP Flip absoluteOnLeave, Codrops Flip filter walkthrough
- **Tags** — `gsap-core` `user-driven` `contained` `density-medium` `build-medium` `budget-none` `rm-designed` `kbd-path`

### SEC-036 · Typed query, dimmed field — MERGE → SEC-163

> **Merged into SEC-163.** Same dim-in-place zero-reflow filter; differs only in density. Its distinguishing material now lives in SEC-163's variants. The permanent id is retained so numbering never shifts.

`C` · static · React-interactive · difficulty low

A large plain input above an already-populated grid. Typing rearranges nothing: non-matches recede to a quiet register in place while matches hold full contrast, and the heading rewrites itself to state the query and the count.

- **Distinct** — Motion logic and reader activity: zero reflow and free-text entry rather than a closed chip vocabulary, so the answer arrives as emphasis on a stable geometry.
- **Use** — Answers "do you do X" instantly across a long capability set without making the reader read the whole grid.
- **Desktop** — The grid is fully populated before any input; the field sits at heading scale so it reads as an invitation rather than a utility control.
- **Motion** — Non-matches cross-fade to the recessive register in one short step; nothing changes position.
- **Narrow** — Same behaviour at one or two columns, with the input kept at the section head.
- **Risk** — Dimmed non-matches must still meet contrast or be genuinely removed from the accessibility tree, and the count must be announced without stealing focus on every keystroke.
- **Variants** — Dim in place · Hide non-matches · Highlight matched substring · Grouped by family with per-group counts
- **Overlap** — C-05 filters by chips and re-flows; the two should never appear on the same page.
- **References** — Alphabetical capability index seed, search-first grid seed, design-system catalogue instant filters
- **Tags** — `css-motion` `static` `contained` `density-high` `build-low` `budget-none` `rm-free` `kbd-path`

### SEC-037 · Grid-to-detail in-place expansion

`C` · swap-in-place · GSAP-dependent · difficulty high · **SELECTED**

A regular card grid where activating a card expands it into a full-width reading panel in the same place; the surrounding grid dims and reflows around it, and closing returns the card to its own cell.

- **Distinct** — Spatial behaviour — the section holds far more content than its height, and the reader never leaves their position or loses the item they chose.
- **Use** — Lets three to nine case excerpts carry real depth without a route change, a modal, or a second page.
- **Desktop** — A calm three-up grid; on activation one row opens into a wide panel carrying quote, figure, artefact and one link, the rest of the grid still legible around it.
- **Motion** — The chosen card grows into the panel while neighbours travel to their new positions, so the relationship is shown rather than implied.
- **Narrow** — The panel opens as a full-width block directly beneath the tapped card; the single-column grid means nothing has to reflow around it.
- **Risk** — The trigger must be a real button carrying expanded state with focus moved into the panel; a same-document view-transition path breaks visibly under rapid toggling because a second transition skips the first to completion.
- **Variants** — In-row expansion · Full-section takeover · Two-column detail · Keyboard-stepped detail
- **Overlap** — C-08 also expands in place, but into a nested index of children rather than a reading panel.
- **References** — GSAP Flip grid-to-detail, Aceternity Layout Grid, Cult UI expandable-card, Chrome same-document view-transition caveats
- **Tags** — `gsap-core` `swap-in-place` `contained` `density-medium` `build-high` `budget-none` `rm-designed` `kbd-path`

### SEC-038 · Family index with live counts

`C` · swap-in-place · React-interactive · difficulty medium · **RESERVE**

A regular grid of family cards — Retainers 12, Audits 6, Programmes 4 — where the number is the card's primary typography. Activating a family expands it downward into its own list of named variants while the rest of the grid stays put.

- **Distinct** — Hierarchy and content relationship: two tiers in one grid, with a truthful count as the largest type, so breadth is proved before anything is opened.
- **Use** — Shows the shape and size of a service range without a navigation menu or a separate services page.
- **Desktop** — Six equal cells; the eye meets six numerals first and the family names second. Opening one pushes the rows beneath it down rather than covering them.
- **Motion** — The opened card grows to its content height and the rows below settle down; no other card animates.
- **Narrow** — One column with the same push-down expansion, which is the honest small-screen form of this pattern rather than a compromise.
- **Risk** — Animating to intrinsic height still needs a measured path underneath since calc-size and interpolate-size are not Baseline; the disclosure must expose expanded state and keep heading order intact. As authored each card is an independent disclosure and a details-and-summary pair is acceptable. The exclusive one-open-at-a-time variant is a different concept rather than a styling variant: coordinated exclusivity makes it an accordion needing heading-contained buttons, managed state, aria-expanded and aria-controls, and it must not be built on the details name attribute.
- **Variants** — Counts only · Count plus one named example · Two-tier with sub-counts · Exclusive one-open-at-a-time
- **Overlap** — N owns dense indexes as sections; here the card grid and the two-tier count are the composition.
- **References** — Family index with counts (design-system catalogue seed), header-only stack seed, Locomotive team census counts
- **Tags** — `css-motion` `swap-in-place` `contained` `density-medium` `build-medium` `budget-none` `rm-free` `kbd-path`

### SEC-039 · Nine-way specimen matrix

`C` · static · CSS-interactive · difficulty medium · **RESERVE**

One offer rendered nine ways in a labelled 3x3 — three delivery depths across, three client contexts down — so the axes carry the meaning and each cell is a small true specimen rather than a description.

- **Distinct** — The relationship between the content: both axes are labelled, so the grid argues about coverage rather than listing nine peers.
- **Use** — Shows a buyer that one engagement adapts to their situation, using nine concrete instances instead of an adjective.
- **Desktop** — Axis labels sit in the margins in a quiet register; the nine cells are identically framed so only their content differs, and focusing one dims the other eight.
- **Motion** — A single short contrast change on the focused cell and its two axis labels.
- **Narrow** — Axes are preserved by grouping: three labelled row groups of three cells each, from the same source order.
- **Risk** — Dimming has no non-visual equivalent, so every cell must name its row and column in text rather than relying on position, and hover styling needs gating so touch readers are not left with a permanently dimmed field.
- **Variants** — Depth x context · Sector x deliverable · Before/after pair per cell · Five-cell cross instead of nine
- **Overlap** — L owns one subject shown in two states; here nine states coexist and are compared spatially.
- **References** — Nine-state grid catalogue seed, Codrops subgrid comparison hover, W3C complex-image guidance
- **Tags** — `css-motion` `static` `contained` `density-high` `build-medium` `budget-none` `rm-free` `semantics-fragile`

### SEC-040 · Metered capability cards

`C` · static · scroll-driven · difficulty low · **RESERVE**

Every card in the grid ends on a thin proportion meter carrying one truthful figure — share of a typical engagement, coverage, elapsed weeks — and the meters align across the row, so the set doubles as a small chart.

- **Distinct** — The content relationship: the cards become comparable on one measured axis, so the grid reads both as a set of peers and as a single comparison.
- **Use** — Turns a capability list into evidence of proportion — where the work actually goes — which is what a buyer is trying to price.
- **Desktop** — Three or four equal-height cards, each closing on a labelled meter with its number in tabular figures; the aligned meter row reads across the section as a bar chart.
- **Motion** — Each meter fills once from zero to its value as the row enters, then holds and never animates again.
- **Narrow** — One column; meters keep full width so the comparison stays legible, with the figures always present as text.
- **Risk** — The number must exist as text independent of the fill, and the meter needs a real accessible value rather than being a decorative bar; under reduced motion it renders already filled.
- **Variants** — Fill on entry · Static filled · Duration meters in weeks · Coverage percentage on a shared axis rule
- **Overlap** — M owns proof figures as the section's subject; here the meter is one component of a repeating card unit.
- **References** — Per-card progress meter seed, evidence-footed figures seed, count-once metric-band discipline
- **Tags** — `scroll-css` `static` `contained` `density-medium` `build-low` `budget-none` `rm-designed` `text-integrity`

### SEC-041 · Tile index with one shared caption

`C` · static · React-interactive · difficulty medium · **RESERVE**

Twenty-four to forty small square artefact tiles on a strict grid, each carrying only an index numeral. One shared caption line beneath names whichever tile is hovered or focused, and holds its last state when the pointer leaves.

- **Distinct** — Density and hierarchy — the unit is reduced to a thumbnail and a number, and descriptive text is pooled into one line instead of repeating per card.
- **Use** — Proves volume of real work in one screen without the section becoming forty captions.
- **Desktop** — A dense, quiet field of tiles reads as a body of work first; the caption line below is the only text, so it becomes the section's live index.
- **Motion** — The caption swaps by a short masked line replacement; the tiles themselves never move.
- **Narrow** — Tile size holds while the grid narrows to four or five columns, and the caption is replaced by an always-visible index list beneath in the same source order.
- **Risk** — Hover-only captioning strands touch and keyboard readers, so every tile must be focusable with its own accessible name and the caption must be a live region rather than the sole carrier of meaning.
- **Variants** — Numbered tiles · Monochrome with colour on focus · Source-marked federated tiles · Caption above the grid
- **Overlap** — O owns media as the subject; here a tile is an index entry, not an image to be looked at.
- **References** — Obys numbered work index, Awwwards index-with-media-swap sub-genre, integration wall seeds, Roselli on hover-only content
- **Tags** — `js-motion` `static` `wide` `density-high` `build-medium` `budget-none` `rm-free` `kbd-path`

### SEC-042 · Claim-to-evidence flip cards

`C` · swap-in-place · React-interactive · difficulty medium · **RESERVE**

Every card in the grid has two faces: a short claim, and on the reverse its evidence — a figure with period and denominator, or one line from a named client. The reader turns cards individually, so the grid ends in a state they composed.

- **Distinct** — Reader activity and per-unit state: the set is heterogeneous while being read, which no single-state grid can produce.
- **Use** — Lets a section make firm claims without asserting them, because the proof is one action away and visibly attached to its claim.
- **Desktop** — A three-up or four-up grid of identical cards with a small honest turn affordance; turned cards stay turned, so three claims and one proof can sit on screen together.
- **Motion** — A short turn in place with the card's own height animating so surrounding rows settle instead of jumping.
- **Narrow** — One column, where the reverse face opens as a disclosure beneath the claim rather than turning, from the same markup.
- **Risk** — A 3D turn must not leave the hidden face focusable or announced, the control needs pressed or expanded state, and animating to intrinsic height needs a measured fallback because calc-size is not Baseline.
- **Variants** — Turn on click · Disclosure beneath · Figure back · Named-quote back · Turn-all control
- **Overlap** — L owns before/after of one subject; here two-facedness is a property of every unit in a regular grid.
- **References** — Service card that flips from claim to evidence (Codrops calc-size seed), evidence-footed figures, Roselli on card semantics, MDN interpolate-size
- **Tags** — `css-motion` `swap-in-place` `contained` `density-medium` `build-medium` `budget-none` `rm-designed` `kbd-path` `motion-sensitive`

### SEC-043 · Density switch: grid or ledger

`C` · user-driven · GSAP-dependent · difficulty high · **RESERVE**

One dataset in two arrangements the reader chooses: a spacious three-up card grid, or a compact ruled index of the same items in the same source order. Items travel between the two rather than being re-rendered.

- **Distinct** — Reader activity and implementation model — the reader controls density, and because the items persist the change reads as the same things arranged differently.
- **Use** — Serves both the buyer skimming for range and the one auditing every engagement, without two sections or two pages.
- **Desktop** — A small two-state control sits at the section head with the item count beside it; the grid occupies the container while the ledger uses full width with tabular columns.
- **Motion** — Items animate from card cells to ledger rows so the reader can follow one item across the change.
- **Narrow** — The control persists but both states resolve to one column, differing in row height and how much metadata each row carries.
- **Risk** — The choice should persist and be a genuine toggle with pressed state; under reduced motion cross-fade the two layouts rather than morphing, and Flip must capture after the DOM has committed.
- **Variants** — Grid or ledger · Comfortable or compact grid · Three-up to six-up · Sortable ledger state · Compact state as a contained, named, focusable scrolling table
- **Overlap** — N owns the ledger as a section in its own right; here it is one of two states of a card system.
- **References** — Awwwards Layout collection (Studio Pic list/grid view, Kin layout switch), Codrops Flip responsive-grid recipe, density-switch catalogue seed
- **Tags** — `gsap-core` `user-driven` `wide` `density-high` `build-high` `budget-none` `rm-designed` `kbd-path`

### SEC-044 · Claim columns with attached proof

`C` · static · static · difficulty low · **SELECTED**

Three numbered claim columns where each claim owns two evidence cells stacked directly beneath it, and the evidence rows align across all three columns. The grid reads down as claim-plus-proof and across as a comparison of evidence types.

- **Distinct** — Hierarchy and reading direction — the semantic unit is the column, not the cell, so claim and proof never separate across a fold while cross-column rows stay comparable.
- **Use** — Lets three capability claims each arrive already verified, which is the check a buyer is actually running.
- **Desktop** — Three large numerals head the section, each with a one-line claim; beneath each sit a small artefact plate and a one-line outcome with a named source, on shared baselines.
- **Narrow** — Column by column: claim, then its two proofs, then the next claim — the vertical order the desktop composition already implies.
- **Risk** — The two-axis alignment depends on trimmed content lengths, so a long claim breaks the shared baselines; the structure needs a declared maximum per field rather than a hope.
- **Variants** — Two proofs per claim · One proof plus one quote · Four columns · Numerals hung in the gutter
- **Overlap** — M owns evidence as the section's subject; here the regular column grid and its cross-alignment are the composition.
- **References** — BASIC/DEPT numbered capability ledger with case cards, Akaru and Locomotive numbered capability sets, proof artefact card row
- **Tags** — `no-motion` `static` `contained` `density-medium` `build-low` `budget-none` `rm-free`

## D — Bento, asymmetric and masonry

### SEC-045 · Protagonist Cell Bento

`D` · static · GSAP-enhanced · difficulty low · **SELECTED**

One cell is four times the area of every other and carries the section's only display-scale claim, with identical gutters throughout so the size difference reads as a decision rather than an accident. Size, never position, encodes rank.

- **Distinct** — Hierarchy is carried by a single dominant cell against uniform supporting cells, which fixes a reading order a grid of mixed-but-comparable tiles never has.
- **Use** — States one headline capability loudly and five or six supporting capabilities quietly inside a single viewport.
- **Desktop** — A four-column field with a 2x2 protagonist top-left holding the claim and one real artefact fragment; six 1x1 cells fill the remainder, each carrying one sentence and one small mark, on a constant gutter.
- **Motion** — One batched entrance for the whole field with the protagonist landing a beat ahead of the supporting cells, and never again.
- **Narrow** — Narrow is a different section, not a degraded one: the protagonist becomes a full-width opening block and the six supporting cells become a ruled list in authored order, because a one-column bento has no area left to encode rank with.
- **Risk** — Spans are hand-tuned to specific copy lengths so one longer heading silently rewrites the silhouette, and the cells must be a real list or a screen reader cannot enumerate them.
- **Variants** — Navy field, paper cells · Hairline-only, no surfaces · Protagonist as full-bleed artefact plate · Vacant cell carrying the CTA · Typography-only, no imagery
- **Overlap** — C's three-column feature grid does the same content job, but there every cell claims equal rank; here one cell outranks the rest by area alone.
- **References** — Tailwind Plus Bento Grids, SaaSFrame 2026 bento analysis (identical gutters, size-not-position), Magic UI BentoCard, One Page Love bento categories
- **Tags** — `gsap-core` `static` `contained` `density-medium` `build-low` `budget-none` `rm-designed` `surface-critical`

### SEC-046 · Mixed-Medium Proof Bento

`D` · static · static · difficulty low · **SELECTED**

Six cells, six different kinds of evidence — a figure, a named quote, a document plate, a client mark, a small chart, an excerpt — sharing one surface at deliberately unequal sizes, so the strongest form of proof is also the largest.

- **Distinct** — The irregularity ranks kinds of evidence rather than amplifying one claim; cells differ by medium, so there is no single loud message the other cells support.
- **Use** — Puts several unrelated forms of proof in one section without a testimonial wall's monotony or a stat band's thinness.
- **Desktop** — A tall left cell holds a real deliverable at true proportion; a wide cell across the top right carries one named quote at editorial size; four small cells beneath carry a figure with its source, a mark, a chart fragment and one excerpt line.
- **Narrow** — The tall artefact leads, the quote follows and the four small cells become a hairline ledger; each cell gains a written label because area is no longer stating which proof is strongest.
- **Risk** — Six media types means six aspect ratios, so every plate needs a declared intrinsic size or the composition shifts as images decode.
- **Variants** — All-paper, hairline separated · One cell bleeding off the right edge · Redacted document plate as the tall cell · Navy quote cell, paper remainder
- **Overlap** — M owns evidence sections generally; this one belongs in D because the unequal grid is what ranks the evidence.
- **References** — Tailwind Plus Bento Grids, darkroom.engineering's quality-tied quotes, Godly and One Page Love bento portfolio categories
- **Tags** — `no-motion` `static` `contained` `density-medium` `build-low` `budget-none` `rm-free` `surface-critical`

### SEC-047 · Single-Live-Cell Bento

`D` · static · React-interactive · difficulty medium · **RESERVE**

Every cell in an asymmetric field is still except one, which holds a small working artefact. Interactivity is scarce enough to become the hierarchy, so nothing needs to be enlarged to be the focus.

- **Distinct** — Rank is carried by reader activity rather than area, and there is exactly one thing in the section to operate.
- **Use** — Demonstrates one capability instead of describing it, while the surrounding cells keep the claim set complete.
- **Desktop** — A five- or seven-cell asymmetric field where one wide cell is a genuine working fragment with its own controls; the rest are static one-line claims with no hover behaviour at all, so the operable cell is unambiguous.
- **Motion** — Motion exists only inside the live cell and only in response to the reader; the grid itself never animates.
- **Narrow** — Cells stack with the live cell first and given real height; where it genuinely cannot work at 320px it is replaced by a captioned still of its own output rather than shrunk into uselessness.
- **Risk** — The live cell must be real controls rather than divs with click handlers — Magic UI shipped exactly that defect — and needs a focus treatment visibly distinct from the inert cells.
- **Variants** — Live cell as filterable list · Live cell as working schedule · Live cell as a two-state toggle · Live cell expands to full section on activation
- **Overlap** — B explains a small set of capabilities evenly; here one capability is operable and the rest are asserted, which changes what the reader does.
- **References** — Tailwind Plus live-artefact bento, Magic UI BentoCard live background nodes, Magic UI Hero Video Dialog accessibility issue
- **Tags** — `js-motion` `static` `contained` `density-medium` `build-medium` `budget-none` `rm-designed` `kbd-path` `surface-critical`

### SEC-048 · Offset Quad On A Hairline

`D` · static · static · difficulty low · **RESERVE**

Four cells in two columns, the right column dropped half a row, with one continuous hairline running down the left column, stepping across the gutter at the offset and continuing down the right. The step reads as drawn rather than as a misalignment.

- **Distinct** — Four peers whose entire compositional device is a vertical offset plus the rule that binds it; no dominant cell, no interaction, no motion.
- **Use** — Presents four principles or four service pillars without the mechanical feel of a 2x2 table.
- **Desktop** — Two columns of two on a wide measure; the right column begins half a cell lower, the hairline traces the step, and the four cells carry equal type with no surfaces.
- **Narrow** — The offset is the concept and cannot survive one column, so two half-width columns and a reduced offset hold to roughly 480px, below which it becomes a single ruled column and the hairline reverts to a plain left rule.
- **Risk** — The hairline is decorative and conveys nothing non-visually, so the grouping it implies must also exist in heading structure.
- **Variants** — Centred, no offset · Hairline drawn on entry · Numerals set in the gutter · Deeper three-quarter-row offset
- **Overlap** — Reads close to a C four-up feature grid, but there the grid is regular and here the offset is the whole argument.
- **References** — Tailwind Plus "Offset 2x2 grid" against "Centered 2x2 grid", Ahmad Shadeed on the too-early breakpoint
- **Tags** — `no-motion` `static` `contained` `density-low` `build-low` `budget-none` `rm-free`

### SEC-049 · Unequal Column Rates

`D` · scroll-driven · scroll-driven · difficulty medium · **RESERVE**

Three columns at deliberately unequal widths, where the narrow middle column advances a few per cent ahead of its neighbours as the section passes. The eye is pulled to it without any image parallax and without any column being labelled primary.

- **Distinct** — The grid's irregularity is reinforced by a differential rate indexed by column, so the reading offset itself is part of the hierarchy rather than decoration over an even grid.
- **Use** — Lets a capability set carry a lead column honestly, when calling one item "primary" would overclaim.
- **Desktop** — Columns at roughly five, three and four twelfths, each a stack of short titled blocks; the narrow centre column holds the sharpest claims and drifts ahead of the outer two by a bounded offset that resolves at the section's end.
- **Motion** — A small offset per column, derived from column index rather than per item, settling to true alignment before the section leaves.
- **Narrow** — Below the tablet width neither the unequal widths nor the differential rate survives, so the section becomes a plain authored sequence — the concept has no narrow form.
- **Risk** — Several elements moving at different speeds is named by WCAG 2.3.3 as a vestibular trigger, so the offset must be removed under reduced motion and kept small enough that no caption ever detaches from its block.
- **Variants** — Pure CSS scroll() timelines · Outer columns lag, centre true · Elastic settle when scrolling stops · Rate difference only above 1200px · Applied to a full-bleed image field rather than a bento
- **Overlap** — Q owns motion inside normal scroll, but here the unequal column widths are the concept and the rate only reinforces what the widths already say.
- **References** — Codrops Elastic Grid Scroll, Codrops opposing-direction columns via CSS scroll() timelines, Josh Comeau on gating scroll-driven motion, WCAG 2.3.3
- **Tags** — `scroll-css` `scroll-driven` `wide` `density-medium` `build-medium` `budget-none` `rm-designed` `motion-sensitive`

### SEC-050 · Declared-Order Masonry Wall

`D` · static · static · difficulty medium · **RESERVE**

Real artefacts at their true proportions in a masonry wall, with a source order authored so the wall reads correctly both as masonry and as the plain multi-column fallback. Two designed compositions, not one composition plus a shim.

- **Distinct** — The reading order is declared content rather than an output of the packing algorithm, which is what separates it from a gallery that happens to be uneven.
- **Use** — Shows a body of genuinely mixed deliverables — screenshots, documents, photographs — without cropping everything to one ratio.
- **Desktop** — Three or four columns of uneven-height plates, each captioned with the decision it was made for; the first three items in source order are the three the buyer should meet first, whichever column they land in.
- **Narrow** — One column in the authored source order, which is already the wall's intended first reading path — the one width at which masonry costs nothing.
- **Risk** — display:grid-lanes is not Baseline, so the non-supporting fallback is a materially different composition that must be designed and reviewed separately rather than inherited.
- **Variants** — Ruled columns, no card surfaces · Captions set in the gutter · Batched entrance by row band · Two-column tablet packing
- **Overlap** — C would do this on one ratio; masonry earns its place only because the artefacts genuinely differ in proportion.
- **References** — MDN CSS masonry / grid-lanes Baseline status, the Masonry library's images-loaded and DOM-reorder behaviour, Tailwind Plus and Godly proof walls
- **Tags** — `no-motion` `static` `wide` `density-high` `build-medium` `budget-none` `rm-free` `semantics-fragile`

### SEC-051 · Ragged Baseline Proof Wall

`D` · static · static · difficulty medium · **SELECTED**

A masonry-like wall whose uneven bottom edge is composed rather than accidental: a full-width hairline sits at the shortest column's foot, one column deliberately overhangs it, and the closing line of the section occupies the space the rag opens.

- **Distinct** — The silhouette is the design decision — column heights are authored to a target shape rather than falling out of content length — which is a different act from authoring a reading order.
- **Use** — Makes a wall of evidence end deliberately instead of trailing off, which is what usually makes proof walls look unfinished.
- **Desktop** — Four columns of proof plates at differing heights above a hairline drawn at the shortest column; the tallest column overhangs by one plate and the section's closing sentence sits in the resulting void.
- **Narrow** — One column, no rag, and the closing line simply becomes the last block; the composed edge is a wide-width device and should not pretend to survive the collapse.
- **Risk** — Column heights are tuned to a specific item count and specific copy lengths, so adding one artefact destroys the silhouette silently — the item set has to be treated as fixed content, not a feed.
- **Variants** — Rag at the top edge instead · Overhanging column carries the CTA · Rag ruled on both edges · Three columns, deeper rag
- **Overlap** — D-06 shares the masonry mechanism but exists for its reading order; here the edge itself is the subject.
- **References** — Codrops proof-wall compositions, MDN masonry Baseline caveat, SaaSFrame's identical-gutter rule
- **Tags** — `no-motion` `static` `wide` `density-high` `build-medium` `budget-none` `rm-free`

### SEC-052 · Flip-Reflowed Tag Wall

`D` · user-driven · GSAP-dependent · difficulty high · **RESERVE**

An irregular wall of tagged artefacts where selecting a chip does not re-render anything: surviving items travel to new cells and new spans, so the reader watches the same set re-weight rather than a different set arrive.

- **Distinct** — Reader-driven re-weighting where items change span as well as position, which is a different mechanism and a different message from a filter that only removes cells.
- **Use** — Lets a buyer filter proof to their own sector and see the remaining evidence promoted rather than merely thinned.
- **Desktop** — A chip row above a four-column wall of unequal plates; choosing a sector reflows the wall, promotes that sector's strongest artefact to a double span, and the section heading restates the live count.
- **Motion** — Surviving items travel from old cell to new while departing items fade out of flow, so the wall never jumps; the transition is short and never scroll-linked.
- **Narrow** — Chips become a labelled, focusable scroll row and the wall becomes one column where filtering changes only which items are present — with a single column there is nothing for span promotion to promote against.
- **Risk** — Flip called before React has committed the DOM does nothing at all, and the new result count must be announced in a live region or a keyboard user gets no confirmation the section responded.
- **Variants** — Chips by sector, not discipline · Span promotion disabled · Cross-fade path under reduced motion · Selection persisted across visits
- **Overlap** — C's filterable card grid uses the same control, but every cell there keeps its size, so nothing is re-weighted.
- **References** — GSAP Flip with absolute/absoluteOnLeave, Codrops GSAP Flip responsive-grid recipe (Jan 2026), GSAP Flip documented framework-commit caveats
- **Tags** — `gsap-core` `user-driven` `wide` `density-high` `build-high` `budget-none` `rm-designed` `kbd-path`

### SEC-053 · Three-Stage Re-Weighting Grid

`D` · scroll-driven · GSAP-dependent · difficulty high · **RESERVE**

The same eight items are laid out three ways down one normally-scrolling section — ranked list, equal grid, then weighted bento — so the reader sees one set argued three ways rather than three different sets.

- **Distinct** — The weighting changes across the section while the items persist and travel; the reader's understanding of rank is built over time rather than presented once.
- **Use** — Answers "which of these matters most" by showing the same service set as a sequence, as peers, and as a set with a clear lead.
- **Desktop** — A full-width field of eight named items; at two scroll thresholds the field reflows in place, the final arrangement giving the lead item a double span and demoting the rest to quarter cells.
- **Motion** — Each threshold fires one short discrete reflow rather than a scrub, so the section never holds scroll and every arrangement is legible at rest.
- **Narrow** — One column throughout, where the honest answer is a single authored arrangement — three weightings of one column read as nothing, so the concept is dropped rather than mimicked.
- **Risk** — Reflowing content under a reader can move what they were reading, so thresholds must fire clear of the reading band and the whole re-weighting must be disabled under reduced motion.
- **Variants** — Two stages instead of three · List to bento only · Final arrangement only under reduced motion · Reverses on scroll back
- **Overlap** — J owns sections that hold scroll and this one never pins; L owns state change but here the content is unchanged and only its weighting moves.
- **References** — codrops/ScrollBasedLayoutAnimations, GSAP scrubbed bento demos with ExpoScaleEase, GSAP mistakes page on trigger creation order
- **Tags** — `gsap-core` `scroll-driven` `wide` `density-medium` `build-high` `budget-none` `rm-designed` `motion-sensitive`

### SEC-054 · Proportional Span Census

`D` · static · static · difficulty medium · **SELECTED**

A grid whose cell areas are computed from a real figure — engagements per sector, weeks per workstream — so the irregularity is measured rather than editorial and the largest cell is largest because the number says so.

- **Distinct** — Spans are derived from data rather than hand-tuned, which changes the implementation model and what the composition is allowed to claim.
- **Use** — Proves the shape of a practice at a glance — where the work actually is — before a single label is read.
- **Desktop** — A contained field of cells at four or five discrete span sizes, each carrying a sector name, its figure and its share, with a small legend naming the unit and the period so the areas are readable as a quantity.
- **Narrow** — Areas stop being comparable in one column, so narrow becomes a ranked ledger of the same rows with a proportional bar per row — the same quantity in a form that survives the width.
- **Risk** — Area is a weak perceptual encoding, so every cell must carry its figure as text; without that the section asserts a ranking the reader cannot verify.
- **Variants** — Discrete span buckets · Ledger fallback always visible beneath · Two periods shown side by side · Unallocated remainder shown as an empty cell
- **Overlap** — N owns dense information, but here the figures are few and the area encoding is the composition's entire reason for existing.
- **References** — SaaSFrame's size-must-encode-hierarchy rule, the coverage-grid and deliverables-ledger seeds, NN/g on comparison data completeness
- **Tags** — `no-motion` `static` `contained` `density-medium` `build-medium` `budget-none` `rm-free`

## E — Split and side-by-side

### SEC-055 · Held Claim, Passing Proof

`E` · sticky · scroll-driven · difficulty medium · **RESERVE**

A narrow column holds the claim, its counter and one link while a wide rail scrolls evidence past it; the heading is replaced as each rail group takes the centre, so one argument accumulates several proofs. Sticky, never pinned.

- **Distinct** — The fixed region runs a state machine that swaps at each rail boundary — the changing fixed side is the concept.
- **Use** — Keeps a capability or method claim legible while the buyer works through the artefacts backing it.
- **Desktop** — Left third: eyebrow, swapping display heading, an 02/05 counter, one hairline tick per rail item. Right two-thirds: full-width evidence panels met one at a time.
- **Motion** — Each rail item's own enter and leave swaps the heading by masked line replacement, so adding an item needs no retiming.
- **Narrow** — Unstacks into claim-then-its-own-evidence pairs in source order, with stickiness dropped entirely rather than shrunk.
- **Risk** — Sticky reads the real scroll position while a lerped smooth-scroll layer offsets the page visually, so this section carries a page-level dependency on how scroll is implemented.
- **Variants** — Claim column right-handed · Oversized numeral instead of heading · Artefact pane on the fixed side · Progress rule instead of ticks · Navy fixed column against paper rail
- **Overlap** — Neighbour to E-02; there the fixed side never changes state at all.
- **References** — Appello industry module, Nandez sticky-scroll services, Pixlspace service grid, BASIC/DEPT capability ledger, Aceternity Sticky Scroll Reveal, GSAP forum sticky-column threads
- **Tags** — `gsap-core` `sticky` `contained` `density-medium` `build-medium` `budget-none` `rm-designed`

### SEC-056 · Standfirst That Stays

`E` · sticky · static · difficulty low · **SELECTED**

A narrow column carrying kicker, headline, standfirst and metadata simply stays put while a long body column scrolls past. Nothing swaps, nothing counts, nothing reveals — the premise is permanently available while the evidence passes.

- **Distinct** — The fixed region has no state; removing the swap changes the reader's job from tracking position to holding a premise.
- **Use** — Carries a long service explanation where the reader must never lose the framing sentence.
- **Desktop** — A 38/62 split. Left: kicker, display headline, standfirst at larger size and looser leading, hairline rule, metadata set small. Right: a measured body column with occasional inset figures.
- **Narrow** — The fixed column becomes a normal opening block above the body; nothing else changes.
- **Risk** — A tall sticky column holding a large plate keeps a big composited surface alive for the whole scroll, so keep the fixed side type-led and drop sticky below the stacking width.
- **Variants** — Rule between the columns · Tinted fixed column · Fixed column right-handed · Metadata as a hairline spec list · Fixed block baseline-aligned to the column foot
- **Overlap** — E-01 shares the skeleton but swaps its heading per rail item.
- **References** — Tufte CSS margin framing, Rest of World article openers, Tailwind Plus sticky product screenshot, Butterick on measure and entry points
- **Tags** — `no-motion` `sticky` `contained` `density-medium` `build-low` `budget-none` `rm-free`

### SEC-057 · Unequal Diptych

`E` · static · static · difficulty low · **SELECTED** · wave 1

Two regions at a deliberately unequal ratio sharing one baseline grid: the narrow side carries only a caption stack or spec list, the wide side carries the artefact. The asymmetry and the shared baselines do the composing, so no decoration is required.

- **Distinct** — There is no scroll relationship — both regions are read in one view, so hierarchy comes from ratio and alignment rather than sequence.
- **Use** — Gives one deliverable or positioning statement a whole section without inventing filler to balance a symmetrical grid.
- **Desktop** — Roughly 38/62. The artefact runs the wide side's full height; the narrow side hangs three short blocks from the artefact's own baselines, locked top and bottom.
- **Narrow** — Narrow is a different section, not a degraded one — asymmetry and shared baselines both need two regions, so the small-screen form is an artefact with a caption stack beneath it and the ratio argument is not made.
- **Risk** — Rank and relationship are carried entirely by ratio and baseline alignment, both invisible non-visually and both absent in one column, so the caption stack must read correctly as ordinary prose on its own.
- **Variants** — 62/38 flipped · Artefact bleeding off the outer edge · Full-height surface seam between halves · Narrow side as a hairline spec list · Narrow side as one oversized numeral
- **Overlap** — Bento (D) also uses unequal weight, but that is a cell map; this is two regions.
- **References** — Tailwind Plus split feature with product screenshot, BASIC/DEPT, Bisous four-column editorial grid, Locomotive
- **Tags** — `no-motion` `static` `contained` `density-low` `build-low` `budget-none` `rm-free`

### SEC-058 · Two-Speed Pair

`E` · scroll-driven · scroll-driven · difficulty medium · **RESERVE**

Both columns scroll, but one advances slightly slower, so a caption and its subject drift apart and come into exact alignment at one designed anchor line. The section rewards reading pace rather than announcing itself.

- **Distinct** — The two regions are deliberately unlocked from each other and meet once — motion logic, not styling, is the whole idea.
- **Use** — Pairs a set of claims with a set of artefacts where the intended reading is that these two things meet here.
- **Desktop** — A 55/45 pair; the media side lags by a small fraction of the section's travel, and a single rule crossing both columns marks the meeting point.
- **Motion** — A small differential translation over the section's own view range, easing to zero offset at the anchor and never exceeding a few percent of viewport height.
- **Narrow** — Both columns return to one flow at page speed; the anchor becomes an ordinary rule between the pair.
- **Risk** — Multi-speed movement is named by WCAG 2.3.3 as a vestibular trigger, so the reduced-motion path must remove the offset and rest on the aligned composition rather than slow it.
- **Variants** — Counter-direction pair · Three bands with the centre at page speed · Lag on the caption rather than the media · Velocity-settled overshoot on stop
- **Overlap** — Q owns motion-led composition generally; this stays in E because the relationship between two regions is the subject.
- **References** — GSAP data-speed depth planes, Codrops column-lag elastic grid, Codrops opposing-direction columns, Josh Comeau on scroll-driven animation
- **Tags** — `scroll-css` `scroll-driven` `contained` `density-low` `build-medium` `budget-none` `rm-designed` `motion-sensitive`

### SEC-059 · Reader-Set Seam

`E` · user-driven · React-interactive · difficulty high · **RESERVE**

A full-height splitter between a narrative region and an evidence region that the reader drags, so the section's balance is a decision rather than an authored ratio. Both regions reflow live and neither ever closes fully.

- **Distinct** — The reader changes the composition itself; proportion becomes the interaction, which no authored split offers.
- **Use** — Lets a sceptical buyer widen the proof and a scanning buyer widen the argument, from one section.
- **Desktop** — Two panes fill the container, divided by a full-height seam with a small grip and a live ratio readout; text re-wraps as the seam moves, against declared minimum widths.
- **Motion** — The seam follows the pointer with no easing and settles to the nearest declared stop on release, so the layout never rests at an unreadable measure.
- **Narrow** — The splitter is withdrawn and the regions stack in source order; a drag affordance that cannot be honoured is worse than none.
- **Risk** — A div handle with a pointermove listener is a keyboard dead end: the seam needs a separator role, an accessible name, arrow-key stepping and a visible focus ring, and must not fight page scroll on touch.
- **Variants** — Horizontal seam between stacked regions · Notched stops at 25/50/75 · Ratio readout set as a caption · Seam carrying the section rule · Reset-to-authored-ratio control
- **Overlap** — Before/after sliders (L) look similar but show one artefact in two states; here the halves carry different content.
- **References** — daisyUI diff-resizer, WAI-ARIA window splitter practice, design-system draggable width rigs, Adrian Roselli on keyboard-only scrolling areas
- **Tags** — `js-motion` `user-driven` `contained` `density-medium` `build-high` `budget-none` `rm-free` `kbd-path`

### SEC-060 · Handover Split

`E` · sticky · scroll-driven · difficulty medium · **SELECTED**

The media region holds still while copy scrolls past it, then at the midpoint the roles invert: copy becomes the fixed side and the media stack scrolls beneath it. One section makes two arguments with the same two columns.

- **Distinct** — Which region is fixed changes inside the section, so spatial behaviour is itself the content — no single-role split can express that.
- **Use** — Carries a two-part proposition, what we make and then how we work, without a second section or a repeated heading.
- **Desktop** — A 50/50 pair; a hairline crosses the full width at the handover, and the incoming fixed side steps up one surface level so the swap reads without a label.
- **Motion** — Each half's stickiness is bounded to its own subsection, so the handover happens as a release rather than as an animation.
- **Narrow** — The halves become two labelled subsections in source order; the inversion is expressed by which block leads each pair.
- **Risk** — Two sticky ranges meeting at one line drift when content or late-loading fonts change either half's height, so both ranges must derive from measured content rather than viewport units.
- **Variants** — Media-first then copy-first · Three-part handover · Surface inversion at the seam · Fixed side leaving a persistent one-line summary
- **Overlap** — J owns sections that hold scroll; this uses bounded sticky ranges and adds no scroll distance.
- **References** — React collection role-inverting sticky sections, GSAP forum two-column pinning threads, Aceternity sticky-scroll family
- **Tags** — `css-motion` `sticky` `contained` `density-medium` `build-medium` `budget-none` `rm-free`

### SEC-061 · Objection in the Margin

`E` · sticky · static · difficulty low · **SELECTED**

The buyer's own objections, set large in the outer column, each stay in place only until their answer in the measure has finished, then release and hand over to the next. A dialogue laid out spatially, with nothing hidden.

- **Distinct** — Stickiness is scoped per pair rather than to the section, so the outer column is never global and never empty — a structural change, not a content one.
- **Use** — Handles the real questions a business owner asks about price, risk and handover without an accordion's click tax.
- **Desktop** — A 40/60 pair. Each objection is a display-scale question hung in the left column; its answer runs at reading measure on the right and ends on a rule that releases the question.
- **Narrow** — Each question becomes a full-width heading directly above its own answer; the marginal relationship becomes ordinary vertical order.
- **Risk** — The questions must be in the buyer's actual words — marketing questions read worse here than in an FAQ because nothing is hidden to soften them.
- **Variants** — Numbered objections · Each answer carrying one small artefact · Question column right-handed · Alternating sides per pair · Quiet expand-all-context control
- **Overlap** — G owns disclosure; here nothing is ever hidden, which is the point of the form.
- **References** — Q&A-as-dialogue editorial pattern, Gwern and Tufte margin practice, agency objection sections, NN/g on disclosure versus visible answers
- **Tags** — `no-motion` `sticky` `contained` `density-medium` `build-low` `budget-none` `rm-free`

### SEC-062 · Fixed Reading, Scrolling Evidence

`E` · user-driven · CSS-interactive · difficulty medium · **RESERVE**

One region is a fixed, complete piece of reading; the other is its own bounded scroll surface holding an artefact column with its own beginning and end. The reader chooses which of the two to advance.

- **Distinct** — Two scroll surfaces in one section — an implementation and reader-activity change no sticky split makes.
- **Use** — Lets a section carry far more evidence than its height suggests without pushing the argument off screen.
- **Desktop** — A 45/55 pair at fixed height; the artefact region shows a partial next item at its lower edge and carries a thin internal progress rule so it reads as a container, not the page.
- **Narrow** — The inner region is dissolved and the artefacts run into page flow; a nested scroller inside a page scroller is the worst possible small-screen behaviour.
- **Risk** — Safari has no native keyboard access to scrolling areas and Chrome only reached it in 132, so the artefact region needs tabindex, a region role and an accessible label or its later items are unreachable.
- **Variants** — Artefact region left-handed · Closing end-state card · Visible internal scrollbar · Region height matched to the reading side
- **Overlap** — H owns reader-driven lateral rails; this scrolls on the page's own axis inside a bounded region.
- **References** — Adrian Roselli on keyboard-only scrolling areas, agency splits with an inner artefact rail, WCAG 1.4.10 reflow guidance
- **Tags** — `no-motion` `user-driven` `contained` `density-high` `build-medium` `budget-none` `rm-free` `kbd-path`

### SEC-063 · Three Parallel Streams

`E` · static · static · difficulty low · **RESERVE**

Three unlike content streams — writing, engagements, artefacts — presented side by side as one section rather than three, each with its own count, its own short list and its own link out. The parallelism is the argument: these run at once.

- **Distinct** — The three regions are deliberately non-comparable, so hierarchy is flat across columns and vertical inside them — the opposite of repeating units on a grid.
- **Use** — Shows a practice has depth beyond client delivery without spending three sections proving it.
- **Desktop** — Three equal columns on hairlines, each headed by a stream name and a hard count, each holding four to six dated rows and one link at the foot.
- **Narrow** — The streams become three labelled lists in the same order, each keeping its count and link so the relationship survives.
- **Risk** — Independently scrolling columns are the tempting upgrade here and would put three nested scroll surfaces on one screen; keep the columns in page flow.
- **Variants** — Ragged column feet at natural lengths · One stream given a media row · Counts set at display scale · A fourth stream at wide widths only
- **Overlap** — C owns repeating units on a regular grid; these are three different content types, not one repeated one.
- **References** — Locomotive Articles/Culture/Store, darkroom.engineering three-column reference matrix, dated activity-log sections
- **Tags** — `no-motion` `static` `contained` `density-high` `build-low` `budget-none` `rm-free`

### SEC-064 · Migrating Seam

`E` · static · static · difficulty low · **RESERVE**

A run of three or four paired regions where the seam moves across the section: an even split at the top, and by the last pair the artefact is almost full width with the text reduced to a hung caption. The composition itself concludes.

- **Distinct** — The split ratio changes between pairs, giving the section a direction that a fixed-ratio alternating row-run cannot have.
- **Use** — Takes a reader from an explained claim to a final artefact that no longer needs explaining.
- **Desktop** — Pair one 50/50 with full body copy, pair two 38/62, pair three 25/75 with two lines; the final artefact reaches the outer edge with its caption hung in the residual margin.
- **Narrow** — The ratio ladder becomes a copy ladder: each pair carries less text than the last while the artefacts stay full width.
- **Risk** — Ratios must land on declared grid lines rather than arbitrary percentages, or the section reads as three unrelated splits with drifting alignment.
- **Variants** — Reverse ladder widening the text · Alternating handedness as the seam migrates · Final pair going full-bleed · Hairline tracking the seam's path
- **Overlap** — P owns width as the subject; here width is the relationship between two regions rather than the section's edge behaviour.
- **References** — Obys dense/calm alternation, Josh Comeau's named-line breakout ladder, editorial measure-narrowing practice
- **Tags** — `no-motion` `static` `wide` `density-medium` `build-low` `budget-none` `rm-free`

### SEC-065 · Index and Its Frame

`E` · swap-in-place · React-interactive · difficulty medium · **RESERVE**

A typographic index of engagements occupies one region and owns a single large frame in the other; focusing or hovering a row swaps what the frame holds, and the frame keeps its last state when the pointer leaves. No thumbnails, no reset flicker.

- **Distinct** — The swap is driven by the reader's pointer or focus rather than by scroll position, which makes it a different section from every sticky-scroll split.
- **Use** — Gives a dense list of real work the visual payoff of a gallery in the vertical space of a list.
- **Desktop** — Numbered rows with sector and year on hairlines fill 55% of the width; a tall frame alongside holds one artefact at a time, captioned with that row's outcome line.
- **Motion** — The incoming artefact cuts in rather than cross-fading, so the frame never shows a blank or a blend.
- **Narrow** — The frame is withdrawn and each row carries its own small artefact inline; a hover-dependent section with no touch path shows a third of readers one frame forever.
- **Risk** — Hover has no touch or keyboard equivalent, so focus must be the primary path and the frame's caption must update in a live region.
- **Variants** — Frame left-handed · Frame as a full-bleed plate behind the list · Caption-only frame with no image · Frame holding a metric rather than an artefact
- **Overlap** — N owns dense indexes as a density statement; here the index exists to drive the frame.
- **References** — Awwwards project-index portfolios, Obys numbered index, Furrow Studio list-hover work, daisyUI Hover Gallery as the failure case
- **Tags** — `js-motion` `swap-in-place` `contained` `density-high` `build-medium` `budget-none` `rm-free` `kbd-path`

### SEC-066 · One Artefact, Many Readings

`E` · sticky · GSAP-enhanced · difficulty medium · **SELECTED**

A single real deliverable is held in view for the whole section and never replaced; as each prose block passes on the other side, a different region of it is called out or dimmed. The reader builds one mental model instead of five.

- **Distinct** — Continuity of the fixed object is the concept — only the annotation layer changes, which is a different content relationship from a rail of separate proofs.
- **Use** — Explains a complex deliverable — a plan, a report, a schedule — one claim at a time without the reader losing the object.
- **Desktop** — The artefact holds 55% of the width at a readable size; four short prose blocks scroll past on the other side, each with a numbered marker matching the callout currently drawn.
- **Motion** — Callout rules draw in as their block enters and dim rather than disappear on leave, so the accumulated annotation is visible at the end.
- **Narrow** — The artefact becomes a sticky top band at reduced height with prose beneath, each block stating in words what its callout points at.
- **Risk** — The annotations carry real information, so a visible written description that reads correctly without the image is required; highlights alone leave the payload unavailable non-visually.
- **Variants** — Annotation by dimming rather than drawing · Crop tightening per step · Redacted client document as the artefact · Photographed printed plate instead of a screenshot
- **Overlap** — M owns artefact-led proof with reader-driven hotspots; here the prose column drives the reading and the artefact never moves.
- **References** — Closeread highlight and zoom-to vocabulary, Scrollama sticky-figure narratives, W3C WAI complex-image guidance, GSAP DrawSVG callout practice
- **Tags** — `gsap-core` `sticky` `contained` `density-medium` `build-medium` `budget-none` `rm-designed`

## F — Comparison and decision support

### SEC-067 · Contained Matrix, Both Axes

`F` · sticky · static · difficulty medium · **SELECTED** · wave 1

One real table carries the whole comparison inside a named, focusable scroll region, so only the matrix moves sideways while the heading, legend, footnotes and CTA reflow normally around it. Hairline rules, tabular numerals, words rather than tick glyphs.

- **Distinct** — The implementation model is the concept: one DOM, one table, containment instead of conversion — the matrix never becomes cards at any width.
- **Use** — Lets a buyer verify an engagement claim by claim without losing which row or column they are standing in.
- **Desktop** — Full container width. A sticky header row of three to five options and a sticky first column of criteria; the top-left cell stays blank and the legend sits above the region.
- **Narrow** — At 320px the region scrolls horizontally inside itself while everything else reflows; the first column stays pinned so every cell keeps its row label.
- **Risk** — Two intersecting sticky axes inside an overflow container is the most compositing-expensive dense form and is historically fragile in iOS Safari; without tabindex, a role and an accessible name on the region, later columns are unreachable by keyboard in Safari.
- **Variants** — Hairline spec register · Zebra ledger · Collapsible row groups · Words instead of tick glyphs · Navy-inverted matrix
- **Overlap** — N dense-information tables — but this exists to help someone choose, not to make density the statement.
- **References** — Adrian Roselli, Under-Engineered Responsive Tables; NN/g Comparison Tables; WCAG 1.4.10 reflow data-table exception; Tailwind Plus responsive feature comparison; shadcnblocks Compare
- **Tags** — `no-motion` `sticky` `contained` `density-high` `build-medium` `budget-none` `rm-free` `kbd-path` `semantics-fragile`

### SEC-068 · Seven Differences, Eighteen Shared

`F` · user-driven · React-interactive · difficulty medium · **RESERVE**

The same matrix with one prominent control that collapses every row on which all options agree, leaving only the rows that separate them, and rewrites the section heading to state the result.

- **Distinct** — The reader's primary act is removing agreement rather than reading cells — the reduction, not the table, is why the section exists.
- **Use** — Cuts a long capability comparison down to the handful of lines that actually decide it.
- **Desktop** — Matrix at container width with the control set as a line of type above the heading rule; collapsed rows leave a single summary line naming what all options share.
- **Motion** — Agreeing rows fold to a hairline in a short staggered height transition from the top, so the reader sees which rows left rather than finding a shorter table.
- **Narrow** — The control sits above the contained region; with agreement collapsed the remaining table often fits without any sideways scroll.
- **Risk** — Intrinsic-height disclosure needs a measured fallback because calc-size is not Baseline, and the rewritten heading must sit in a live region or the result is announced to nobody.
- **Variants** — Dim rather than remove · Rule-only collapse · Shared-rows summary line · Differences-only by default
- **Overlap** — F-01 uses the same table, but there the matrix is complete and still; here reduction is the section's purpose.
- **References** — NN/g Comparison Tables (difference highlighting as the biggest load reduction); Roselli responsive tables; MDN interpolate-size
- **Tags** — `js-motion` `user-driven` `contained` `density-medium` `build-medium` `budget-none` `rm-designed` `semantics-fragile`

### SEC-069 · Any Two of Six

`F` · swap-in-place · React-interactive · difficulty medium · **SELECTED**

Chips name six engagements; the reader picks two and the section renders only that pair, differing rows ruled and agreeing rows dimmed. The full set is never displayed at once.

- **Distinct** — The structure enforces pairwise comparison at every width, so the column count is a fixed property of the section rather than a responsive concession.
- **Use** — Makes a six-option service range decidable instead of overwhelming.
- **Desktop** — A chip row across the container, then two large named columns either side of a centred criteria spine, so each criterion is read once with a value to its left and right.
- **Motion** — Values step to their replacements in place while the criteria spine holds absolutely still.
- **Narrow** — The pair stays side by side, so cell values must be authored to a declared two-or-three-word budget and the criteria label moves above each pair rather than holding a third track. Any criterion whose honest answer is a sentence belongs in a different section.
- **Risk** — Chips must be real toggle buttons carrying pressed state, with a stated rule for a third pick, or keyboard and screen-reader readers cannot tell what is currently being compared.
- **Variants** — Chip selector · Two large named plates · Centred criteria spine · Difference rules only · Locked left option
- **Overlap** — F-02 reduces rows; this reduces columns, and the reader's choice is about which options exist rather than which rows matter.
- **References** — NN/g cap of three to four items for dynamic comparison; Tailark comparator block family; shadcnblocks Compare Products
- **Tags** — `js-motion` `swap-in-place` `contained` `density-medium` `build-medium` `budget-none` `rm-free` `kbd-path`

### SEC-070 · Recommended By Structure

`F` · static · static · difficulty low · **SELECTED** · wave 1

Three approaches where the recommended one is wider, taller and one surface step darker than its neighbours, carrying no badge, ribbon or most-popular label. The recommendation is a fact of the layout.

- **Distinct** — Emphasis is carried by geometry and surface rather than by an applied marker, which changes what the composition asserts and how it survives a screenshot.
- **Use** — States a considered position on which engagement most buyers should take, without the marketing tell that makes buyers discount it.
- **Desktop** — Three columns at roughly 1 : 1.4 : 1. The centre column starts higher, ends lower, sits on the darker surface and carries one extra line of type per row; the outer two stay flat paper.
- **Narrow** — The recommended column comes first and keeps its darker surface and larger type; the other two follow at equal weight beneath it.
- **Risk** — Visual reordering alone leaves source order disagreeing with the argument — the recommended column has to be authored first and only moved to the centre on wide screens.
- **Variants** — Wider centre column · Darker surface only · Vertical offset · Right-hand recommendation · Paper against navy inversion
- **Overlap** — D asymmetric grids also encode importance by size, but here the irregularity exists to recommend one option to a buyer.
- **References** — Tailwind Plus emphasised-tier variants; SaaSFrame on size encoding hierarchy; Developers Digest AI Design Slop on badge emphasis
- **Tags** — `no-motion` `static` `contained` `density-medium` `build-low` `budget-none` `rm-free` `surface-critical`

### SEC-071 · Do Nothing Ledger

`F` · scroll-driven · scroll-driven · difficulty medium · **SELECTED**

Two columns of identical rows — do nothing, engage — where the do-nothing column fills in row by row while the adjacent column empties to hairlines, both driven by the same normal-scroll range and resolving on one balance line.

- **Distinct** — The comparison is between two futures of a decision rather than two products, and the fill-and-empty inversion is the argument itself.
- **Use** — Prices the status quo, which is the real competitor in most premium service decisions.
- **Desktop** — Two equal columns under one rule. The left accumulates dark cells top to bottom as the right drains; a single display-scale balance line closes the section beneath both.
- **Motion** — Each row owns its own short view-timeline range so the change reads as accumulation rather than one sweeping wipe.
- **Narrow** — Columns stay side by side with the row label above each pair; fills resolve on entry instead of over a long range.
- **Risk** — Content that only exists after a timeline has run is invisible to crawlers, reader modes and reduced-motion readers — the resting state must be both columns fully legible, with backwards fill so nothing paints unstyled.
- **Variants** — Fill and empty · Numbers only · Struck-through do-nothing column · Static ledger with no scroll link · Navy do-nothing panel
- **Overlap** — L owns before/after states of one artefact; this compares two futures the buyer can still choose between.
- **References** — Josh Comeau, Scroll-Driven Animations; MDN view() and animation-fill-mode; peel-away state-pair seed; NN/g comparison guidance
- **Tags** — `scroll-css` `scroll-driven` `contained` `density-medium` `build-medium` `budget-none` `rm-designed`

### SEC-072 · Two Type Systems Arguing

`F` · static · static · difficulty low · **SELECTED**

The incumbent approach is set in a dull condensed system at tight leading and small size; ours is set in the display face at a generous measure. Cells carry only verifiable facts, so the typography does the arguing rather than the copy.

- **Distinct** — Persuasion lives in the type system, not in cell content, emphasis colour or an applied recommendation device.
- **Use** — Contrasts how the category usually works with how we work, without making a claim that cannot be evidenced.
- **Desktop** — A wide two-column ledger sharing one baseline grid: the left column grey, condensed, dense and hairline-ruled; the right column on paper with display-scale row headings and roughly twice the leading.
- **Narrow** — Narrow is a different section, not a degraded one — two facing columns of prose cannot hold at 320 CSS pixels, and the condensed grey column is the first thing to fail contrast and 200% zoom. The two type systems stack as labelled blocks read in sequence, and the contrast is carried by the labels rather than by adjacency.
- **Risk** — The de-emphasised column still has to meet contrast minimums and stay readable at 200% zoom; condensed grey type at small sizes is the first thing to fail.
- **Variants** — Grey condensed against display · Monospace incumbent · All-caps incumbent · Ours on a navy panel · Rule-weight inversion
- **Overlap** — A is typography-led as a whole composition; here the type treatment exists to compare two approaches.
- **References** — Seed: two-column comparison where type does the arguing; OpenTailwind on default dressing; NN/g on honest attribute data
- **Tags** — `no-motion` `static` `wide` `density-medium` `build-low` `budget-none` `rm-free` `text-integrity`

### SEC-073 · Sentences, Not Ticks

`F` · static · static · difficulty medium · **SELECTED**

The buyer's own objections as rows, three delivery models as columns, and every cell a full sentence rather than a glyph. The matrix is deliberately unscannable so the reader has to read it.

- **Distinct** — Changing the cell content type changes the reader's activity from scanning to reading — the opposite of what a matrix normally optimises for.
- **Use** — Answers the specific reasons a buyer hesitates, model by model, including the cells where the honest answer is that it depends.
- **Desktop** — Full-width table with generous cell padding and roughly forty words per cell; objections are set as questions in the first column at a larger size than the cells they govern.
- **Narrow** — Contained horizontal region with the question column sticky; sentences are never truncated, so the section is accepted as tall.
- **Risk** — NN/g is blunt that sparse or inconsistent cells make a comparison useless — every combination needs a complete written answer, and a text-heavy table is very tall at 320px.
- **Variants** — Three delivery models · Two models plus do-nothing · Oversized question column · Answers attributed to a named person · Mono answer column
- **Overlap** — G would hide the same content behind disclosure and become a different concept; here nothing is hidden and nothing is scannable.
- **References** — NN/g Comparison Tables (the 'it depends' problem); seed objection matrix; darkroom.engineering specificity of proof
- **Tags** — `no-motion` `static` `wide` `density-high` `budget-none` `rm-free` `build-medium`

### SEC-074 · Re-weighting Columns

`F` · user-driven · CSS-interactive · difficulty medium · **RESERVE**

Three approach columns share a criteria spine on a subgrid; attending to one column dims the other two and steps their type down a size, or in the widening variant expands it while the neighbours compress with row baselines still aligned.

- **Distinct** — Emphasis is transient and reader-controlled, so the section refuses to pre-decide anything — the opposite premise to the structural recommendation.
- **Use** — Lets a buyer weight the options themselves before being told which one we would pick.
- **Desktop** — Three equal columns with the criteria spine set in the left margin; every criterion line stays aligned across all three columns whatever is attended.
- **Motion** — Dim, type-step or width change settles inside two hundred milliseconds, with no vertical movement anywhere.
- **Narrow** — Re-weighting is dropped entirely; the columns become three full-width blocks with the criteria spine repeated in each.
- **Risk** — Hover-driven re-weighting has no touch equivalent and must be gated behind a hover media query, with focus producing the identical state so keyboard readers are not left with the flat version.
- **Variants** — Dim and step down · Widen and compress · Rule-weight only · Click to hold the state · Persistent selection with per-row detail revealed in the widened column
- **Overlap** — F-04 fixes the emphasis permanently in the layout; here emphasis is temporary and belongs to the reader.
- **References** — Seed: subgrid comparison grid with hover re-weighting; seed: three-column comparison with no scroll involvement; Rauno Freiberg on gating hover
- **Tags** — `css-motion` `user-driven` `contained` `density-medium` `build-medium` `budget-none` `rm-designed` `kbd-path`

### SEC-075 · Margin Table, Read Along

`F` · scroll-driven · scroll-driven · difficulty medium · **SELECTED**

Two paragraphs describe two options in prose while their figures are lifted into a small hairline table in the margin; the matching row highlights as the sentence describing it crosses the reading band.

- **Distinct** — The comparison is carried by prose with the table acting as an index to it, rather than by a table the prose merely introduces.
- **Use** — Handles the common services case where the honest answer is a paragraph but the buyer still wants the numbers beside each other.
- **Desktop** — A 65ch measure on the left, a narrow table parked in the right margin and sticky within the section, so it stays beside whichever paragraph is being read.
- **Motion** — The active row gains a rule and a slightly darker surface as its sentence enters the reading band; nothing changes position.
- **Narrow** — The margin table relocates inline beneath the paragraph it belongs to and the highlight is dropped.
- **Risk** — Scroll-position highlighting carries nothing for a screen-reader reader, so each sentence must name its row in words and the table must read correctly with no highlighting at all.
- **Variants** — Sticky margin table · Inline figures only · Two-option prose · Highlight by rule weight · Three-row summary table
- **Overlap** — A owns margin-column long reads; here the margin holds a comparison and the section exists to compare two options.
- **References** — Seed: sentence-linked comparison table; Gwern and Tufte sidenote practice; MDN view-timeline support caveats
- **Tags** — `scroll-css` `wide` `density-medium` `build-medium` `budget-none` `rm-designed` `scroll-driven`

### SEC-076 · What Moves This Number

`F` · user-driven · CSS-interactive · difficulty medium · **RESERVE**

Each price column carries a disclosure that opens into the assumptions behind the figure — scope, team shape, review cycle, what pushes it up — so the number is explained rather than asserted.

- **Distinct** — The reader is comparing the assumptions under the prices rather than the prices, which changes what the decision is made on.
- **Use** — Pre-empts the 'it depends' objection by publishing exactly what it depends on, before a call.
- **Desktop** — Three columns with the figure at display scale and one line of its governing assumption always visible; opening a disclosure pushes the whole row of columns down together so the three stay baseline-aligned.
- **Motion** — A short height transition on the opening panel and nothing else — the figures never animate.
- **Narrow** — Columns stack and each keeps its own disclosure, with the open panel sitting inside its own column.
- **Risk** — These are three independent disclosures rather than a coordinated accordion, so each needs only a real button with aria-expanded. Animating to intrinsic height needs a measured path because calc-size is not Baseline, and the headline assumption must stay visible when closed so disclosure never hides something needed for the comparison.
- **Variants** — Per-tier disclosure · One shared assumptions panel · Price band instead of a figure · First tier open by default · Assumptions as a footnoted register
- **Overlap** — G owns disclosure as a reading mechanic; here disclosure exists to make a price comparable and honest.
- **References** — Seed: assumption-revealing pricing; Tailwind Plus pricing families; MDN interpolate-size; ARIA APG disclosure pattern
- **Tags** — `css-motion` `user-driven` `contained` `density-medium` `build-medium` `budget-none` `rm-designed`

### SEC-077 · Not For You, Honestly

`F` · static · static · difficulty low · **SELECTED**

Two columns of plain statements — when this engagement fits and when it does not — given identical typographic weight, with the misfit column naming who should go elsewhere and where.

- **Distinct** — The comparison is between the reader and the offer rather than between two offers, so the reader self-selects instead of choosing.
- **Use** — Disqualifies badly-fitting enquiries before they cost either party a call, which reads as confidence rather than deflection.
- **Desktop** — Two equal columns beneath a single rule, around ten short statements each, at reading size with no icons, ticks or colour coding. The misfit column is not dimmed and not apologised for.
- **Narrow** — Columns stack with their headings as the only differentiator; statements keep their full length.
- **Risk** — Fit and misfit must be distinguished in words by their headings, never by colour alone, since colour is the only thing carrying the distinction if the headings are decorative.
- **Variants** — Two equal columns · Alternating-rule ledger · Misfit column on navy · Named alternative per misfit line · Single-column struck list · Unequal weight — fit column lifted, misfit flat · Each misfit line naming a real alternative · Refusal column set larger than the invitation · Written as questions the reader answers
- **Overlap** — F-07 compares three delivery models against objections; this compares one offer against the reader.
- **References** — NN/g on honest attribute data; darkroom.engineering's specific, unpadded proof; seed objection-led writing
- **Tags** — `no-motion` `static` `contained` `density-medium` `build-low` `budget-none` `rm-free`

### SEC-078 · Two Questions, Three Options

`F` · swap-in-place · React-interactive · difficulty high · **RESERVE**

All three engagements are shown in full from the start; answering two short questions about the reader's situation annotates each with a verdict line and re-orders them. Nothing is ever hidden or removed.

- **Distinct** — The reader describes their own situation rather than selecting options, and the section answers with reasoning rather than a result.
- **Use** — Gives a buyer a defensible starting point when three plausible engagements all look reasonable from outside.
- **Desktop** — Two rows of three or four chips across the top; below them the three option panels sit side by side and each gains a short verdict sentence and a change in rule weight as answers land.
- **Motion** — Panels travel to their new order as measured layout moves rather than re-rendering, so the reader can follow which option moved and why.
- **Narrow** — Chips wrap; panels stack in the current order with each verdict line directly under its heading, and reordering is announced rather than animated.
- **Risk** — A purely visual reorder tells a screen-reader reader nothing — the verdict must go through a live region, ruled-out options must stay fully readable, and Flip-style moves need the framework to have committed the DOM first.
- **Variants** — Two questions · Chips against radio rows · Verdict lines with no reorder · Reset-to-neutral control · Verdict includes 'it depends' as a real answer
- **Overlap** — F-03 has the reader pick which options to compare; here the reader supplies facts about themselves and the options respond.
- **References** — Seed: engagement-model selector re-laid with Flip; GSAP Flip caveats; NN/g on tabs preventing compensatory comparison
- **Tags** — `js-motion` `swap-in-place` `contained` `density-medium` `build-high` `budget-none` `rm-designed` `kbd-path`

### SEC-211 · Fit Test — MERGE → SEC-077

> **Merged into SEC-077.** Duplicate of the existing fit/misfit pair — same reader task (self-diagnosis against stated criteria), same two-column form. Caught during selection; the Bricksmaven candidate that produced it was already covered. Its distinguishing material now lives in SEC-077's variants. The permanent id is retained so numbering never shifts.

`F` · static · static · difficulty low

Two facing lists the reader measures themselves against rather than each other: one names who this work suits, the other names who it does not. The refusal column is the credible one, and it is set with the same care as the invitation.

- **Distinct** — Reader activity changes: this is self-diagnosis against stated criteria, not evaluation of two options. Nothing is being compared — the reader is deciding whether to disqualify themselves.
- **Use** — Lets a business owner rule themselves in or out before enquiring, which raises enquiry quality and reads as confidence rather than salesmanship.
- **Desktop** — Two columns under one rule at unequal weight — the fit column on a lifted surface with a full-height rule, the not-a-fit column flat on paper at the same type size. Criteria are short sentences, not ticks, and the not-a-fit column names a real alternative for each line rather than leaving the reader nowhere.
- **Narrow** — Columns stack with the fit column first; the not-a-fit column keeps its full weight and is never collapsed behind a control, since hiding the refusal would defeat the concept.
- **Risk** — Polarity must not rest on colour or icon glyphs alone — each column needs a written heading that states its meaning, or the distinction is invisible non-visually and to anyone who reads the icons as decorative.
- **Variants** — Refusal column set larger than the invitation · Each not-a-fit line naming a real alternative · Navy fit panel on paper ground · Three columns — fit, sometimes, never · Written as questions the reader answers
- **Overlap** — SEC-070 recommends one option among several; this one recommends nothing and asks the reader to exclude themselves, which is the opposite reader task.
- **References** — Bricksmaven Alpha Library comparison family (audience self-qualification split, observed 2026-08-01); NN/g on comparison tables having no cell for 'it depends'
- **Tags** — `no-motion` `static` `contained` `density-medium` `build-low` `budget-none` `rm-free` `surface-critical`

## G — Tabs, accordions and disclosure

### SEC-079 · Tab-Grown Panel

`G` · swap-in-place · GSAP-enhanced · difficulty medium · **SELECTED**

The active indicator and the incoming panel behave as one object: the marker under the chosen label expands into the panel beneath it, so the panel reads as having grown out of its tab rather than cross-fading into view.

- **Distinct** — The interaction is ordinary tabs; the motion logic is what changes — one shared layout transition binds indicator and panel instead of two unrelated fades.
- **Use** — Lets three or four genuinely parallel propositions — sectors, engagement models, delivery approaches — occupy one screen while keeping only one on show at a time.
- **Desktop** — A hairline strip of four one-word labels across a contained width; beneath it one large panel carrying a claim line, a three-row spec list and a single artefact plate. Every panel shares that layout and differs only in data.
- **Motion** — The indicator's rectangle is captured and re-fitted to the panel frame in a single short transition, replaced by an instant swap under reduced motion.
- **Narrow** — The strip becomes a snapped scrollable row with the active label brought to the start, and the panel settles to its new height rather than animating to it.
- **Risk** — Hand-rolled tabs routinely omit the aria-controls/aria-labelledby pairing and roving-tabindex arrow keys, and a growth transition tempts non-button controls.
- **Variants** — Hairline underline strip · Left-hand vertical rail · Numbered chapter tabs · Panel overlapping the strip
- **Overlap** — G-02 is also a tab set, but its subject is the media plate behind the panel, not the indicator-to-panel move.
- **References** — NN/g 'Tabs, Used Right', GSAP Flip layout transitions, Preline Content Navigation, Cult UI direction-aware-tabs
- **Tags** — `gsap-core` `swap-in-place` `contained` `density-medium` `build-medium` `budget-none` `rm-designed` `kbd-path` `semantics-fragile`

### SEC-080 · Plated Tab Panel

`G` · swap-in-place · React-interactive · difficulty medium · **RESERVE**

Tabs swap a compact copy panel while a persistent full-bleed media plate behind it changes with the same control, so switching tabs changes the whole field rather than one text block.

- **Distinct** — Hierarchy: the section's largest surface sits behind the disclosure and is driven by it, so the tab governs scale as well as content.
- **Use** — Compares the same engagement anatomy across three client sectors while giving each sector a real artefact of its own.
- **Desktop** — A full-bleed plate runs edge to edge; a contained panel sits over its lower third with the tab strip directly above. The plate is a genuine artefact — a document, a screen, a site — and the panel holds identical rows per tab.
- **Motion** — The plate cross-fades on a short fixed duration while the panel's text swaps with no movement at all, so nothing blocks reading.
- **Narrow** — The plate becomes a fixed-ratio band above the panel and the tab strip becomes a snapped rail under the section heading.
- **Risk** — A full-bleed plate is a large composited surface and a likely LCP candidate; type over it needs a guaranteed contrast treatment in both palettes.
- **Variants** — Photographic artefact plate · Flat colour field per tab · Poster-still video plate · Full-bleed spec drawing
- **Overlap** — E splits also pair copy with media, but here the pairing is chosen by the reader, not fixed by layout.
- **References** — Preline 'Vertical Feature Tabs with Overlapping Panel', Tailwind Plus tabbed feature panel, Awwwards Appello industry module
- **Tags** — `js-motion` `swap-in-place` `full-bleed` `density-medium` `build-medium` `budget-none` `rm-designed` `surface-critical` `kbd-path`

### SEC-081 · Two-Up Exclusive Accordion

`G` · user-driven · CSS-interactive · difficulty medium · **RESERVE**

A group of panels kept to one open at a time, laid out two-up rather than as a stack of bars: the open row spans both columns and the closed rows stay legible around it.

- **Distinct** — Composition and reader activity: exclusivity is coordinated across the whole group, and the set is arranged as a grid instead of a list.
- **Use** — Presents six capabilities compactly while guaranteeing the reader is never facing two open answers at once.
- **Desktop** — Two columns of three hairline-ruled summary rows. Activating any row closes whichever was open and expands the new one across the full width, its answer set at a reading measure with its own quiet rule and one artefact line.
- **Motion** — The open row's content eases from zero height where intrinsic-size interpolation is supported, and simply appears where it is not.
- **Narrow** — One column in the same source order, rows full width, behaviour unchanged.
- **Risk** — Coordinated exclusivity makes this an accordion, not a plain disclosure — it needs heading-contained buttons, managed open state, aria-expanded and aria-controls, and defined keyboard behaviour. The HTML details element is not a safe substitute: its exposed role varies across assistive technology and it cannot provide the grouping semantics an accordion needs. Animated auto height is also not Baseline, so the honest fallback is an instant open rather than a JS measuring loop.
- **Variants** — Two-up capability board · Single-column ruled ledger · Oversized numbered plates · Question-led register
- **Overlap** — G-04 uses the same platform mechanism but exists for its relocating companion pane.
- **References** — MDN interpolate-size / calc-size, ARIA APG accordion pattern, Adrian Roselli on disclosure widgets, The Component Gallery Accordion aliases
- **Tags** — `css-motion` `user-driven` `contained` `density-medium` `build-medium` `budget-none` `rm-free` `semantics-fragile`

### SEC-082 · Relocating Pane Accordion

`G` · swap-in-place · CSS-interactive · difficulty medium · **SELECTED** · wave 1

A list of rows beside one persistent media pane; opening a row changes the pane, and below the breakpoint that same pane moves inside the open row, so the small-screen version is a different composition from identical markup.

- **Distinct** — Responsive transformation is the concept — the pane changes parent rather than being hidden, duplicated or dropped.
- **Use** — Explains a service line where every claim needs a real artefact, without four screenshots stacked down the page.
- **Desktop** — A narrow left column of numbered summary rows with one open by default, and a large right pane holding the artefact for that row. The pane is never empty and never shows more than one artefact.
- **Motion** — Only the media changes state; the answer text simply appears, so reading is never gated on an animation finishing.
- **Narrow** — The pane sits inside the open row directly beneath its answer, with the list order untouched.
- **Risk** — This is a coordinated accordion, so it needs heading-contained buttons, managed state, aria-expanded and aria-controls rather than native details elements. Separately, a tall sticky media pane keeps a large composited surface alive for the whole section and must stop being sticky the moment the columns stack, or it pins over the text.
- **Variants** — Image pane · Short muted clip · Chart or figure pane · Document plate at true proportions
- **Overlap** — E and J sticky splits look similar, but here the reader changes the pane, not scroll position.
- **References** — Awwwards Expo Entrepreneurs accordion, UI Layouts image accordions, ARIA APG accordion pattern, container queries
- **Tags** — `css-motion` `swap-in-place` `contained` `density-medium` `build-medium` `budget-none` `rm-free` `kbd-path`

### SEC-083 · Diagnostic Accordion

`G` · user-driven · React-interactive · difficulty medium · **RESERVE**

Each row names a symptom the owner already recognises; opening it resolves into a two-column panel with the measured figure on the left and the intervention on the right, so every disclosure ends in a diagnosis and a response.

- **Distinct** — The content relationship: the panel is a fixed two-part argument rather than a paragraph, which makes the accordion an instrument rather than an FAQ.
- **Use** — Turns a problem the buyer feels but cannot name into a named, evidenced, priced piece of work.
- **Desktop** — Five wide rows on hairline rules, each a short symptom sentence with a quiet ordinal. The open panel splits roughly one-third to two-thirds: a display-scale figure with its period and source on the left, three lines of intervention plus one artefact link on the right.
- **Motion** — Both columns of the panel settle in one short transition, and the figure never re-counts when a row is reopened.
- **Narrow** — The figure block sits above the intervention, both full width, with the source line staying attached to the figure.
- **Risk** — Figures without period, denominator and source read as fabricated; and the open transition must not depend on a JS height measurement that font loading invalidates. This is a coordinated accordion, so it needs heading-contained buttons, managed open state, aria-expanded and aria-controls rather than native details elements, whose exposed role varies across assistive technology.
- **Variants** — Figure-led left column · Before/after pair on the left · Sparkline instead of a numeral · Priced intervention column
- **Overlap** — F comparison sections also support a decision, but this one diagnoses a single situation rather than ranking options.
- **References** — Tailwind Plus two-column FAQ, evidence-footed figure discipline, NN/g comparison guidance
- **Tags** — `js-motion` `user-driven` `contained` `density-high` `build-medium` `budget-none` `rm-free` `kbd-path`

### SEC-084 · Ledger and Shared Answer

`G` · swap-in-place · React-interactive · difficulty medium · **SELECTED**

Questions run as a numbered ledger down the left and every answer opens into one shared pane on the right, so the full question set stays visible while any single answer is read and the list never reflows.

- **Distinct** — This is not a disclosure set — a single pane is replaced, so the correct model is a tab list with one shared panel, not an accordion and never a details element.
- **Use** — Lets a buyer see every objection at once and read only the ones that apply to them without losing sight of the rest.
- **Desktop** — A left column of eight to twelve questions on hairline rules with small ordinals, the active one ruled heavier; a right pane at roughly 55% width holding the answer, the question repeated as its heading, and one related-artefact line at the foot.
- **Motion** — The answer replaces in place with no height animation; the pane reserves height from the longest answer so the section is dimensionally stable.
- **Narrow** — The pane collapses into a conventional disclosure beneath the active question, same order, same content.
- **Risk** — Activating a question changes a region elsewhere on screen, so the pane needs an accessible name and a live announcement or focus move, otherwise a screen-reader user activates a control and nothing happens.
- **Variants** — Numbered ledger · Category-grouped questions · Pane with a persistent contact line · Rule-weight active state
- **Overlap** — G-07 shares the FAQ subject but its concept is the record of what has been read.
- **References** — FAQ as a two-column ledger, NN/g 'Tabs, Used Right', Tailwind Plus two-column FAQ
- **Tags** — `no-motion` `swap-in-place` `contained` `density-medium` `build-medium` `budget-none` `rm-free` `kbd-path` `semantics-fragile`

### SEC-085 · Read-Tracked Objection Set

`G` · sticky · React-interactive · difficulty medium · **RESERVE**

A push-down accordion of the buyer's own objections, written in their words, with a persistent aside that records which have been opened — so a long list gains a sense of completion instead of unknowable depth.

- **Distinct** — Reader activity and state: the section remembers and reports coverage, which changes the reading job from sampling to finishing.
- **Use** — Makes a fifteen-item objection section feel finishable and shows a cautious buyer they have covered the ground.
- **Desktop** — A two-thirds column of question rows that push the section taller as they open, beside a sticky one-third aside carrying a count such as '6 of 15 read', a compact list of titles with the read ones marked, and a working expand-all control.
- **Narrow** — The aside becomes one line above the list carrying the count and the expand-all control, and stops being sticky.
- **Risk** — The count must update a polite live region rather than only re-render, and expand-all has to change real disclosure state rather than restyle rows. Because the aside reports coverage and the expand-all control writes to every row, open state must be managed in one place; native details elements would let the tracker and the rows disagree, and details cannot supply the grouping semantics an accordion needs.
- **Variants** — Count-only aside · Ruled checklist aside · Thin coverage meter · Per-category coverage
- **Overlap** — G-06 also lists questions, but nothing there is tracked and the answers share one pane.
- **References** — FAQ with a read-tracker (design-system catalogues), objection sections written in the buyer's words, Tailwind Plus FAQ variants
- **Tags** — `no-motion` `sticky` `contained` `density-medium` `build-medium` `budget-none` `rm-free` `kbd-path`

### SEC-086 · Diagram-State Accordion

`G` · swap-in-place · GSAP-enhanced · difficulty high · **RESERVE**

Opening a row does more than reveal text: it advances a small schematic beside the list to the labelled state that row describes, so the reader assembles one model of the system instead of collecting five separate answers.

- **Distinct** — Motion logic and content relationship — the disclosure drives a diagram's state, so the rows are cumulative rather than independent.
- **Use** — Explains a delivery or engagement model whose steps only make sense in relation to each other.
- **Desktop** — A left column of four to six rows against a contained SVG diagram at fixed aspect on the right: nodes, hairline connectors and a legend. The active node and its connector are emphasised and labelled; the rest stay legible but quiet.
- **Motion** — The diagram tweens between authored states — a rule drawing, a node filling — rather than being redrawn, and jumps straight to the state under reduced motion.
- **Narrow** — The diagram relocates above the open row at reduced complexity, keeping the same node labels and the same active state.
- **Risk** — Opening a row changes the diagram, a region elsewhere on screen, so this is a coordinated accordion driving a remote target — heading-contained buttons with aria-expanded and aria-controls, managed open state and defined keyboard behaviour are all required, and the HTML details element cannot express any of it because its target is only its own subtree. The diagram region needs an accessible name and its active-state change announced, or a screen-reader user activates a control and nothing happens. The diagram also needs a written description with the same relationships stated as text, or the section's meaning exists only inside an image.
- **Variants** — Pipeline schematic · Responsibility map · Coverage grid · Document-flow diagram
- **Overlap** — K process spines carry the same subject but advance on scroll; here the reader sets the state.
- **References** — GSAP DrawSVG accordion demos, W3C complex-image alternatives, node map with a live caption region
- **Tags** — `gsap-core` `swap-in-place` `contained` `density-medium` `build-high` `budget-none` `rm-designed` `semantics-fragile`

### SEC-087 · Open The Working

`G` · user-driven · CSS-interactive · difficulty medium · **SELECTED**

A short, confident summary paragraph carrying inline disclosure controls — open the working — that expand method, figures and caveats in place, so a sceptic can reach the detail without a scanner ever having to see it.

- **Distinct** — Granularity: disclosure happens inside a sentence rather than at a row, so the reader chooses depth without leaving the line they are reading.
- **Use** — Lets one paragraph serve both the owner who wants the claim and the one who wants the method behind the number.
- **Desktop** — A single measured column set a step above body scale, with three or four bracketed chevron controls sitting inline in the prose. Opening one inserts a quietly tinted block at the same measure holding a method note, a small figure table and a caveat line.
- **Motion** — The inserted block resolves over its own height only, with nothing above the reader's current line moving.
- **Narrow** — Identical behaviour at a narrower measure; the inline controls become full-width rows directly beneath the sentence they belong to.
- **Risk** — Any expansion that opens above the reader's position shifts the line being read, so the inserted block must always land below its anchor and the control must remain a real button. This is a plain disclosure rather than an accordion, but it cannot be a details element: details is not permitted inside a paragraph, so an inline control must be a real button carrying aria-expanded with aria-controls pointing at a block that sits after the paragraph.
- **Variants** — Inline method notes · Figures-and-source drawer · Caveats only · Section-level show-the-working control
- **Overlap** — A editorial sidenotes show the same material permanently; here it is the reader's choice to summon it.
- **References** — Gwern collapsible depth sections and semantic zoom, MDN interpolate-size, Tufte-style margin notes
- **Tags** — `css-motion` `user-driven` `contained` `density-high` `build-medium` `budget-none` `rm-free` `semantics-fragile`

### SEC-088 · Inline Glossary

`G` · user-driven · CSS-interactive · difficulty low · **RESERVE**

A section that names the vocabulary a buyer will meet in a proposal; activating a term opens a definition panel in the flow of the index, including the other names clients use for the same thing.

- **Distinct** — The disclosure's job is shared vocabulary rather than persuasion, and each panel carries aliases as well as a definition — a content relationship no other entry here has.
- **Use** — Removes the vocabulary gap that quietly stalls decisions when an owner is not certain what they would be buying.
- **Desktop** — Two or three columns of terms as a dense alphabetical index on hairline rules. Activating a term opens a panel across the full width at that row holding a one-sentence definition, the aliases, and one line on where the term appears in our work; every other term stays exactly where it was.
- **Narrow** — A single column in the same order, with the panel opening directly under its term.
- **Risk** — A multi-column index that reflows on open moves terms the reader was scanning, so the panel must occupy a full grid row rather than push a column downward. The panel must be a sibling occupying its own full grid row, so the control is a real button with aria-expanded and aria-controls rather than a details element, whose panel can only be its own child. The index must be CSS grid rather than multi-column: in a column layout nothing keeps the remaining terms in place.
- **Variants** — Alphabetical index · Grouped by phase of work · Alias-led entries · Definition plus what-it-costs line
- **Overlap** — N indexes carry similar density, but there the list is the statement; here the reveal is the point.
- **References** — The Component Gallery alias listings, alphabetical dense capability index, inline glossary section seed
- **Tags** — `no-motion` `user-driven` `contained` `density-high` `build-low` `budget-none` `rm-free` `kbd-path`

### SEC-212 · Two-Stage Question Board

`G` · user-driven · React-interactive · difficulty medium · **SELECTED**

A short row of topic controls above a disclosure list, so the reader narrows before they open. Choosing a topic changes which questions exist; opening one still works as it always did.

- **Distinct** — Adds a second reader action and a second content tier above disclosure — the reader filters, then reveals. A flat accordion asks one question of the reader; this asks two.
- **Use** — Keeps a long objection or FAQ set usable when the questions divide cleanly by audience or engagement type, without a page of collapsed rows.
- **Desktop** — Topic controls as a single hairline row under the heading with a live count beside each, then the filtered list beneath at full measure. Switching topic replaces the list in place; the row of controls never moves.
- **Motion** — The outgoing list fades and the incoming one arrives at rest — no height animation on the container, so nothing below the section jumps as the count changes.
- **Narrow** — Controls become a horizontally scrollable row within a focusable, named region; the list below is unchanged.
- **Risk** — Two coordinated controls in one section: the topic row is a tab list needing roving tabindex and arrow keys, and the disclosure set beneath is an accordion needing heading-contained buttons with aria-expanded and aria-controls. Changing topic must announce the new count, or a screen-reader user hears nothing change. Native details elements cannot supply either contract.
- **Variants** — Topic controls as a left rail rather than a row · One topic open by default versus none · Counts shown per topic · Topics as buyer roles rather than subjects
- **Overlap** — SEC-084 replaces one shared pane and is tab-shaped throughout; here the second tier is a genuine disclosure set whose rows open independently.
- **References** — Bricksmaven Alpha Library accordion family (two-stage tabbed accordion, observed 2026-08-01); ARIA APG tabs and accordion patterns; NN/g on tab overflow becoming undiscoverable
- **Tags** — `js-motion` `user-driven` `contained` `density-medium` `build-medium` `budget-none` `rm-free` `kbd-path`

## H — Sliders, carousels and rails

### SEC-089 · Peek Shelf With Controls

`H` · user-driven · CSS-interactive · difficulty low · **SELECTED**

A single row of engagement cards on a snap track with a visible progress rule, persistent prev/next and the next card deliberately cropped in half, so the reader can see there is more and reach it identically on touch and desktop.

- **Distinct** — Reader activity: traversal is native scroll inside a focusable region, so the affordances rather than a transition are the whole design.
- **Use** — Lets a buyer browse eight or ten engagements without the section costing eight screens of page height.
- **Desktop** — The track breaks the container on the right edge only; uniform cards at a fixed ratio with the last one cropped at the page edge. Heading, hairline progress rule and a small prev/next pair sit together at the upper left.
- **Motion** — The only authored motion is the progress rule tracking real scroll offset; snap easing belongs to the browser.
- **Narrow** — Same track with one and a fraction cards in view, controls retained, and the container break becoming a genuine edge-to-edge run with the heading padded in.
- **Risk** — Safari gives no native keyboard access to scroll containers and Chrome only got it in 132, so without a focusable, named region role every card past the first is unreachable by keyboard and switch users.
- **Variants** — Paper cards on hairline rule · Navy full-bleed track · Artefact thumbnails only · Two-up peek at wide widths · Segmented ticks instead of a bar
- **Overlap** — C card grids — a grid shows the whole set at once; here the row deliberately exceeds the viewport and traversal is the point.
- **References** — Tailwind Plus horizontal shelf, NN/g carousel guidance, Adrian Roselli keyboard-only scrolling areas, Smashing accessible carousels
- **Tags** — `scroll-css` `user-driven` `wide` `density-medium` `build-low` `budget-none` `rm-free` `kbd-path`

### SEC-090 · Platform Carousel Section

`H` · user-driven · CSS-interactive · difficulty medium · **SELECTED**

A carousel assembled from the browser's own carousel primitives — a snap track, generated prev/next buttons and a marker group of real tabbable markers — so roles, keyboard behaviour and current-item state come from the platform rather than from us.

- **Distinct** — Implementation model: the controls are browser-generated DOM with correct semantics, not a hand-rolled state machine, which changes what the component can be trusted to do.
- **Use** — Gives a buyer a jump-to-any-item control that genuinely works with keyboard, speech input and screen readers.
- **Desktop** — One large item held centre with its neighbours visible and dimmed at the sides; a row of named markers beneath, prev/next sitting at the outer edges of the track.
- **Motion** — Non-current items lose contrast as their snapped state changes; nothing else moves.
- **Narrow** — One item per view with the marker row wrapping to two lines, or becoming labelled dots directly under the track.
- **Risk** — Marker and scroll-button generation is Chromium-only today, so the Firefox and Safari path must reproduce marker roles and arrow-key behaviour rather than degrading to an unlabelled scroll strip.
- **Variants** — Numbered markers · Client-name markers · Thumbnail markers · Dimmed neighbours vs hard crop
- **Overlap** — H-01 — the shelf has no per-item jump; here reaching item five directly is a first-class path.
- **References** — Codrops native CSS carousel, CSS ::scroll-marker-group, WAI-ARIA APG carousel pattern, Chrome 135
- **Tags** — `scroll-css` `user-driven` `contained` `density-medium` `build-medium` `budget-none` `rm-free` `kbd-path` `semantics-fragile`

### SEC-091 · Weighted Drag Rail

`H` · user-driven · GSAP-dependent · difficulty medium · **RESERVE**

A rail the reader throws rather than scrolls: momentum carries it, deceleration lands on a card index, and the weight of the physics is the section's character.

- **Distinct** — Input model — the section is driven entirely by pointer drag and inertia and has no relationship to page scroll at all.
- **Use** — Turns browsing a body of work into an activity a buyer chooses to do, at no cost in vertical page height.
- **Desktop** — Wide plate-like artefact cards on one line at mid-height, a grab affordance across the whole band, and an index counter with prev/next at the lower left carrying the full keyboard route.
- **Motion** — A flick decelerates with inertia and settles on the nearest card index rather than stopping wherever friction ran out.
- **Narrow** — Native touch drag already does this, so the inertia layer is handed back to the browser while the same snap indices are kept.
- **Risk** — Drag-only rails have no keyboard path whatsoever unless prev/next carry complete parity and the current index is exposed as text, not only as position. A pointer-drag band competes with page scroll on touch, so the drag must be axis-locked and must never swallow a vertical gesture; a grab affordance across the whole band also suppresses text selection, so card copy must remain selectable.
- **Variants** — Single-line plate rail · Two rows dragged together · Snap to centre · Snap to leading edge · Elastic resistance at the ends
- **Overlap** — H-01 — the shelf rides native scroll; this deliberately does not, which is what makes it usable for mouse readers who cannot scroll sideways.
- **References** — GSAP Draggable and Inertia card rail, Locomotive Play grid, Made With GSAP drag-to-explore, Codrops draggable product grid
- **Tags** — `gsap-core` `user-driven` `wide` `density-medium` `build-medium` `budget-none` `rm-designed` `kbd-path`

### SEC-092 · Counted Rail, Scrub Handle

`H` · user-driven · React-interactive · difficulty medium · **RESERVE**

A rail whose position is stated as a fact: a persistent oh-seven-of-twenty-four set at display scale beside a heavy scrub bar the reader can also drag, so the size of the set and the place within it are always legible.

- **Distinct** — Hierarchy — position and extent become the section's largest typography rather than a small indicator, and the indicator doubles as the control.
- **Use** — Proves volume of delivered work while still letting a buyer move straight to whichever part of it they want.
- **Desktop** — A rail of small uniform tiles across the full width, with a full-width bar and a wide handle beneath it, and the oversized counter hung to the bar's left updating as the rail moves.
- **Motion** — The counter changes on snap rather than continuously, so the number is never mid-blur while being read.
- **Narrow** — Counter and bar stack above the rail and the handle grows to a comfortable touch target; tile size is unchanged.
- **Risk** — A custom drag handle with no native range input and no arrow-key stepping strands keyboard and switch users on the first tile.
- **Variants** — Hairline bar · Solid bar with inset handle · Counter in the outer margin · Percentage read instead of count
- **Overlap** — H-01 — there the scrollbar is an affordance; here the count is the argument the section is making.
- **References** — Design-system catalogue counted horizontal rail, Obys numbered work index, NN/g carousel guidance
- **Tags** — `js-motion` `user-driven` `wide` `density-high` `build-medium` `budget-none` `rm-free` `kbd-path`

### SEC-093 · Rail That Opens In Place

`H` · swap-in-place · GSAP-enhanced · difficulty high · **SELECTED**

A rail of tall case cards where activating one expands it, inside the same section, into a full-width reading panel; the rail holds its position beneath, and closing returns the card to its own slot.

- **Distinct** — Reader activity gains a second level — traversal plus depth — with no route change, no modal and no loss of place in the rail.
- **Use** — Carries genuine case-study depth in a section that would otherwise only tease it.
- **Desktop** — Five tall cards on a snap track; on activation the chosen card grows from its own rectangle to the container width, its summary line becoming the panel heading and the rest of the rail dimming.
- **Motion** — The card's own rectangle travels and resizes into the panel so the reader never loses which card they chose.
- **Narrow** — Expansion becomes a full-width panel that pushes the rail down rather than covering it, with the close control fixed to the panel head.
- **Risk** — Focus must move into the opened panel and return to the originating card on close; without that the expansion is an unlabelled region a keyboard reader can fall into and not escape.
- **Variants** — Expand to container width · Expand to full bleed · Summary becomes heading · Blurred rail vs dimmed rail
- **Overlap** — C grid-to-detail expansion — same morph, but the source here is a lateral rail the reader is already driving.
- **References** — Aceternity Apple Cards Carousel, GSAP Flip grid-to-detail, Codrops shared-element card-to-detail morph
- **Tags** — `gsap-core` `swap-in-place` `wide` `density-medium` `build-high` `budget-none` `rm-designed` `kbd-path`

### SEC-094 · Quote Track With Named Index

`H` · user-driven · React-interactive · difficulty medium · **RESERVE**

A horizontal track of client statements paired with a visible list of every speaker's name, role and sector; choosing a name moves the track, and the list is legible content in its own right rather than a set of dots.

- **Distinct** — The pointer-free path is not bolted on — the index is the section's second column and carries most of the credibility.
- **Use** — Lets a buyer look for someone from their own sector instead of reading praise in the order we chose.
- **Desktop** — A two-thirds track carrying one large-set quote, and a one-third column listing every name, role and sector with the current row marked by a rule rather than a fill.
- **Motion** — The track moves by snap while the index rule slides between rows on the same short easing.
- **Narrow** — The index becomes a horizontal chip row above the track, keeping names and sectors visible rather than reducing to dots.
- **Risk** — Off-view quotes must stay correctly ordered and reachable; hiding them from the accessibility tree without the index as an equivalent would remove most of the section's content.
- **Variants** — Names only · Name plus sector · One quote per view · Three quotes per view · Numbered index
- **Overlap** — H-02 — markers there indicate position; here the index is readable proof before anything is activated.
- **References** — darkroom.engineering quality-tagged testimonials, WAI-ARIA APG carousel, React collections testimonial track
- **Tags** — `js-motion` `user-driven` `contained` `density-medium` `build-medium` `budget-none` `rm-free` `kbd-path`

### SEC-095 · Stream That Rests

`H` · horizontal · GSAP-enhanced · difficulty medium · **RESERVE**

A continuous horizontal stream of real artefacts that decelerates to a complete stop when the pointer rests on it and resumes when the pointer leaves — motion as a response rather than a default — with the same items written out as a plain list beneath.

- **Distinct** — Motion logic: the reader's attention stops the band, and the section carries a static equivalent in the same DOM order rather than relying on the moving track.
- **Use** — Signals a body of work too large to enumerate while still letting anyone read the whole set.
- **Desktop** — A full-bleed band of unequal-width artefact plates at mid-height, with a short caption line and a quiet numbered list of the same twenty-four items sitting beneath it.
- **Motion** — Velocity eases to zero on pointer rest and back up on leave, never snapping or jumping.
- **Narrow** — The band stops entirely and the list becomes the primary content, with the plates reduced to a snap shelf above it.
- **Risk** — Motion running longer than five seconds needs a pause path, must be stopped rather than slowed under reduced motion, and the duplicated track must be hidden from assistive technology to avoid double announcement.
- **Variants** — Artefact plates · Client names · Mixed plates and names · Stop on hover · Stop on focus-within
- **Overlap** — Q velocity-reactive tickers — those are driven by scroll speed; this one is governed by whether the reader has stopped to look.
- **References** — Ryan Mulligan marquee requirements, Codrops marquee write-ups, GSAP seamlessLoop helper, Obys horizontal streams
- **Tags** — `gsap-core` `horizontal` `full-bleed` `density-medium` `build-medium` `budget-none` `rm-designed` `motion-sensitive`

### SEC-096 · Unequal-Width Reel

`H` · user-driven · CSS-interactive · difficulty low · **RESERVE**

A rail in which item width encodes significance — one panel three times the width of its neighbours — so the reader meets the flagship engagement first and the rest read honestly as supporting evidence.

- **Distinct** — Hierarchy: the rail stops being a set of peers, and the time it takes to traverse an item becomes proportional to its importance.
- **Use** — Lets one flagship engagement dominate a browse without demoting everything else to a footnote.
- **Desktop** — The track opens with a wide full-height panel carrying an outcome sentence and one artefact, followed by narrow tiles carrying only client name and sector; widths drawn from a small declared ladder rather than set per item.
- **Narrow** — The width ladder collapses to two steps — one featured card at full width and the remainder as a compact named list beneath it.
- **Risk** — A very wide panel can strand the reader mid-item at a snap point, and must still fit within 320 CSS pixels at 400 per cent zoom or become a stacked block instead. Safari gives no native keyboard access to scroll containers and Chrome only gained it in 132, so without a focusable, named region role every card past the first is unreachable by keyboard. No prev/next affordance is specified, and a very wide lead panel can strand the reader mid-item at a snap point.
- **Variants** — Three-to-one lead panel · Wide panel as a closing conclusion · Alternating wide and narrow · Type-only narrow tiles
- **Overlap** — H-01 — equal cards there; here the width ladder is the entire concept and the affordances are secondary.
- **References** — Awwwards horizontal collections with mixed panel widths, GSAP content-derived track widths, One Page Love gallery sliders
- **Tags** — `scroll-css` `user-driven` `breakout` `density-medium` `build-low` `budget-none` `rm-free` `kbd-path`

### SEC-097 · Filmstrip And Stage

`H` · user-driven · React-interactive · difficulty medium · **RESERVE**

A large fixed stage showing one deliverable at full size above a draggable strip of every item in the set, so the reader selects from a visible whole instead of advancing through a queue.

- **Distinct** — Reader activity is selection rather than sequential traversal — the entire set stays legible beneath the thing being examined.
- **Use** — Lets a buyer inspect one real deliverable closely while keeping the breadth of the set in view.
- **Desktop** — The stage takes two-thirds of the section height with a caption naming the decision the artefact was made for; a strip of small plates runs beneath it with the current plate ruled.
- **Motion** — The stage cross-fades on a fixed short duration while the strip scrolls the chosen plate into view.
- **Narrow** — Stage above, shorter strip below, both retained; the caption moves directly under the stage and the strip stays draggable.
- **Risk** — The strip is an overflow region needing an explicit focusable role and accessible name, and the stage change must be announced or keyboard readers get no confirmation that anything happened.
- **Variants** — Plate strip · Numbered strip · Stage with annotation hotspots · Caption rewriting per item
- **Overlap** — G tabs — a tab set is a short labelled list; here the strip is long, image-led and scrollable in its own right.
- **References** — Preline gallery sliders, index-with-persistent-media-frame pattern, design-system preview and source swap
- **Tags** — `js-motion` `user-driven` `contained` `density-medium` `build-medium` `budget-none` `rm-free` `kbd-path`

## I — Stacked, overlapping and sticky cards

### SEC-098 · Deck That Accumulates

`I` · sticky · scroll-driven · difficulty medium · **SELECTED** · wave 1

Each card sticks at the same top offset and the next slides over it with a small offset and a slight scale-down, so a physical stack of five claims is built by the section's end and the count is readable as a stepped edge.

- **Distinct** — Spatial behaviour: the cards are related by accumulating depth and nothing is ever replaced or removed.
- **Use** — Gives an ordered argument — five engagement stages — felt weight without taking the page's scroll away.
- **Desktop** — Full-measure cards at roughly three-quarter viewport height, each carrying a number, a claim line and one artefact, with the stack's stepped edge growing at the top of the viewport.
- **Motion** — Each outgoing card steps down in scale and loses a little contrast as it is covered, so depth reads without shadow theatre.
- **Narrow** — Same behaviour with reduced offsets, falling back to plainly stacked cards wherever a card exceeds the viewport height.
- **Risk** — Cards whose height changes with copy silently break the timing unless each card's scroll allocation derives from its own measured height minus the viewport and is recalculated on resize and font load. The card-exceeds-viewport test must not be made against viewport units on mobile, where the toolbar retracting changes the value mid-scroll and dynamic viewport units are throttled — the threshold must come from measured content height, recalculated on resize and font load.
- **Variants** — Paper cards on navy · Full-bleed image cards · Thin editorial slabs · Visible header stub · Corner-rounding instead of scale-down
- **Overlap** — J pinned decks — a pinned deck holds the page; this one is ordinary sticky and the reader never loses scroll.
- **References** — GSAP forum thread 45008, Codrops sticky stacking cards, Awwwards sticky card collections, daisyUI stack
- **Tags** — `scroll-css` `sticky` `contained` `density-medium` `build-medium` `budget-none` `rm-designed`

### SEC-099 · Fan From A Single Cell

`I` · layered · GSAP-dependent · difficulty medium · **RESERVE**

Cards begin perfectly stacked in one grid cell and separate into an offset fan as the section enters, each card's rotation and offset derived from its index so the arrangement is a rule rather than a set of hand-placed positions.

- **Distinct** — The depth relationship runs the opposite way from a building stack: the section starts closed and opens, once.
- **Use** — Shows in one viewport that a body of work is a set with range, before a word of it is read.
- **Desktop** — A centre-hung pile of six artefact plates opening into a shallow arc across the container width, the top plate staying upright and fully legible throughout.
- **Motion** — Index-derived rotation and offset ease out once on entry and never repeat.
- **Narrow** — The fan reduces to a two-card offset, or resolves straight to a plain stack wherever rotation would push a card off-canvas.
- **Risk** — Rotated cards throw text off the horizontal and overflow at intermediate widths; the resting state must be completely legible with motion disabled, since that is what many readers meet first.
- **Variants** — Shallow arc · Hard diagonal deal · Deal out to a row · Fan on hover instead of entry
- **Overlap** — I-01 — that deck builds as you read; this one opens on arrival and stays open.
- **References** — GSAP moderator same-grid-cell deck recipe, Skiper and Cult card-stack families, daisyUI stack
- **Tags** — `gsap-core` `layered` `contained` `density-low` `build-medium` `budget-none` `rm-designed`

### SEC-100 · Cards That Leave A Line

`I` · sticky · scroll-driven · difficulty high · **SELECTED**

As each card is covered it collapses into a single-line summary that accumulates as a strip at the top of the section, so the reader ends with the last card in full and a legible record of everything already passed.

- **Distinct** — What the departing card becomes: the stack produces a running summary rather than a pile of hidden edges.
- **Use** — Suits engagement phases or stages where the buyer needs to remember what came before in order to judge what is on screen.
- **Desktop** — Full-width cards moving beneath a growing strip of one-line rows, each row carrying a name and one figure and ruled from the row above it.
- **Motion** — The collapsing card's title travels into its summary row instead of fading, so the two are visibly the same item.
- **Narrow** — The strip caps at three rows with the remainder counted, keeping the active card above a readable height.
- **Risk** — The strip consumes viewport height as it grows, and on short viewports the active card is squeezed below readability unless the strip is capped and each card's scroll allocation is derived from its own measured height.
- **Variants** — Name-only summary rows · Summary with figure · Struck-through completed rows · Strip docked at the foot
- **Overlap** — I-01 — same sticky mechanism, different product: a record rather than a pile.
- **References** — Codrops sticky collapsing pricing tiers, GSAP Flip card-stack membership, Awwwards sticky card sections
- **Tags** — `scroll-css` `sticky` `contained` `density-medium` `build-high` `budget-none` `rm-designed`

### SEC-101 · Objection And Answer Pair

`I` · layered · scroll-driven · difficulty low · **RESERVE**

Two overlapping cards — a client objection in the buyer's own words and our answer sitting partly behind it — separate slightly as the section is read and settle apart, so the answer is seen emerging from the question.

- **Distinct** — The overlap carries a semantic relationship between exactly two things rather than sequence across many.
- **Use** — Handles the hardest question a buyer is privately asking without the defensive register of an FAQ row.
- **Desktop** — The objection card upper-left on a quieter surface, the answer card lower-right one elevation step up, overlapping by about a third at rest and less once separated; the pair repeats three times with alternating handedness.
- **Motion** — A separation of a few per cent as each pair crosses the reading band, with no rotation and no scale.
- **Narrow** — The pair stacks with a deliberate slice of overlap retained at the top edge so the relationship between them survives.
- **Risk** — Overlapping cards clip text at intermediate widths; both cards must be fully readable at every width and with motion disabled, since the overlap is the resting composition.
- **Variants** — Objection and answer · Assumption and fact · Quote and artefact · Separate on hover instead of scroll
- **Overlap** — E splits — a split is two regions sharing a frame; here the two cards physically overlap and the overlap is the meaning.
- **References** — Tailwind block libraries offset conversation pair, daisyUI stack offsets, layered card patterns
- **Tags** — `scroll-css` `layered` `contained` `density-low` `build-low` `budget-none` `rm-designed`

### SEC-102 · Sheared Diagonal Plates

`I` · layered · scroll-driven · difficulty medium · **RESERVE**

Four artefact plates overlapping along a diagonal, each carrying a slightly different scroll speed so the diagonal shears as the section passes and straightens again — depth expressed as movement, with no pin and no captured scroll.

- **Distinct** — Motion logic: the depth relation between overlapping cards is carried by differential speed inside normal scroll rather than by stack order.
- **Use** — Gives a portfolio moment physical presence as a breath between two dense reading sections.
- **Desktop** — A diagonal run from lower-left to upper-right across a breakout width with the largest plate at centre, captions parked in the outer margin at fixed positions so they never drift from their subject.
- **Motion** — Per-plate speeds within a few per cent of page speed, tuned so the composition is exactly correct at the section's centre.
- **Narrow** — The diagonal becomes a single column with alternating single-edge bleed and all differential speed removed rather than reduced.
- **Risk** — Offsets large enough to be noticed detach a caption from its plate and add per-frame work on scroll; positional motion must be removed entirely, not merely slowed, under reduced motion.
- **Variants** — Four plates · Two plates and a rule · Static shear with no motion · Captions on plate instead of margin
- **Overlap** — Q motion-led composition — there the motion is the subject; here the overlapping diagonal composition holds perfectly still.
- **References** — GSAP data-speed parallax planes, Codrops elastic column lag, diagonally offset overlapping cards
- **Tags** — `js-motion` `layered` `breakout` `density-low` `build-medium` `budget-none` `rm-designed` `motion-sensitive`

### SEC-103 · Header-Only Stack

`I` · user-driven · CSS-interactive · difficulty medium · **RESERVE**

A pile of cards showing only their headers, so the whole set occupies a short vertical span; activating one expands it and pushes the remainder down rather than covering them, keeping every other header on screen.

- **Distinct** — Layout model and reader activity: expansion pushes instead of overlaying, and the stack is driven by choice rather than scroll position.
- **Use** — Lets a buyer see all nine capabilities at once and open only the one that matches the problem they arrived with.
- **Desktop** — Nine tight rows, each a card edge with a number and a name, overlapping by a few pixels so the set reads as a physical pile; the open card carries a paragraph and one artefact.
- **Motion** — The open card animates to its intrinsic height so the rows beneath settle rather than jump.
- **Narrow** — Identical behaviour with the overlap reduced and the artefact moving beneath the paragraph inside the open card.
- **Risk** — Coordinated exclusivity makes this an accordion, not a plain disclosure — it needs heading-contained buttons, managed open state, aria-expanded, aria-controls and defined keyboard behaviour. The HTML details element is not a safe substitute: its exposed role varies across assistive technology, forcing role=button makes macOS Safari drop the expanded state, removing the default marker degrades state announcement in VoiceOver, JAWS and NVDA, and Chromium auto-opens details on find-in-page. Separately, the headers overlap by a few pixels, so each header's hit area and focus ring must not be clipped by the card stacked above it; and animating to intrinsic height is not Baseline, so the honest fallback is an instant open rather than a JS measuring loop.
- **Variants** — One open at a time · Several open at once · Numbered headers · Hairline pile · Shadowed pile
- **Overlap** — G accordions — an accordion is a list of separated rows; here the rows physically overlap and the pile's compressed height is the composition.
- **References** — UI Layouts stacked accordions, ARIA APG accordion pattern, Adrian Roselli and Scott O'Hara on details/summary, MDN interpolate-size
- **Tags** — `css-motion` `user-driven` `contained` `density-medium` `build-medium` `budget-none` `rm-free` `semantics-fragile`

### SEC-104 · Cluster Resolving To Grid

`I` · scroll-driven · GSAP-enhanced · difficulty high · **RESERVE**

A loose overlapping cluster of artefact cards separates into a legible three-column grid as the section is read and re-overlaps as it leaves, so the section opens and closes on the same gesture.

- **Distinct** — The composition has two states with a return: the reader watches disorder become order rather than watching a one-way reveal.
- **Use** — Argues that a varied body of work is in fact a system, without having to claim it in copy.
- **Desktop** — Seven cards clustered near centre at rest with varied rotation and heavy overlap; at the section's midpoint they occupy an even three-column grid with aligned baselines and full captions.
- **Motion** — One reversible layout transition in which the cards keep their identity as they travel to and from their grid cells.
- **Narrow** — Both states become one column, differing only in overlap, which relaxes to normal spacing rather than reorganising.
- **Risk** — Reversible layout transitions must be recaptured on resize and font load, and both states must be readable, since a reader with reduced motion only ever sees whichever one the section rests in.
- **Variants** — Cluster to three columns · Cluster to two rows · Stay resolved on exit · Offset only, no rotation
- **Overlap** — D bento — a bento is a fixed meaningful irregularity; here the irregularity is a temporary state the section resolves.
- **References** — GSAP Flip scroll-driven layout switch, Codrops scroll-based layout animations, scroll-assembled layout formation
- **Tags** — `gsap-core` `scroll-driven` `contained` `density-medium` `build-high` `budget-none` `rm-designed`

### SEC-105 · Stack Ends As An Index

`I` · sticky · GSAP-enhanced · difficulty high · **SELECTED**

A sticky project stack that, at the end of its range, collapses into a plain numbered index of the same items — the section spends its length on presentation and its final moment on legibility.

- **Distinct** — The end state rather than the mechanism: the pile resolves into a reference list the reader can actually scan and use.
- **Use** — Gives a buyer the impression of a substantial body of work and then the means to compare it item by item.
- **Desktop** — Six full-measure project cards stacking, resolving into a hairline-ruled list of six numbered rows carrying client, sector and one outcome figure — the list being the section's permanent resting state.
- **Motion** — Each card's title travels into its index row so no item loses identity across the collapse.
- **Narrow** — The stack shortens to three cards before the same index appears, and the index is the default composition below the breakpoint.
- **Risk** — If the index only exists once the scroll range completes, readers who skim or reduce motion never receive it; the list must be the base state the stack is built on top of, and each card's allocation must derive from its measured height.
- **Variants** — Index with figures · Index with thumbnails · Collapse on exit · Collapse on completion · Twelve-item version
- **Overlap** — I-01 — that deck stays a deck; here the deck is a preamble to a list, and the list is the deliverable.
- **References** — Agency-site overlapping stack collapsing to a numbered index, Obys numbered work index, GSAP Flip card stack
- **Tags** — `gsap-core` `sticky` `contained` `density-medium` `build-high` `budget-none` `rm-designed`

### SEC-106 · Shortlist Tray Stack

`I` · user-driven · GSAP-enhanced · difficulty high · **SELECTED**

Choosing capabilities adds them to a small physical pile in a tray and removing one makes the remainder settle into new positions, so set membership is shown as a stack that grows and shrinks under the reader's hand.

- **Distinct** — Reader activity: the stack is a consequence of decisions rather than of scroll position, and items join and leave rather than only accumulate.
- **Use** — Lets a buyer assemble the shape of an engagement and watch what they have chosen add up.
- **Desktop** — Left two-thirds is a plain ruled list of capability rows each with an add control; the right third is a sticky tray holding chosen cards as an offset pile with a running count and a total duration line beneath.
- **Motion** — An added card lands into the pile and the existing cards shift by one step; removal runs the same move in reverse.
- **Narrow** — The tray becomes a docked summary bar at the foot of the section showing the count and total, expandable to the full pile.
- **Risk** — Every membership change needs a live-region announcement, and the chosen set must be readable as text — a pile alone tells a screen-reader user nothing about what they have selected.
- **Variants** — Capabilities tray · Sector tray · Count-only tray · Tray totalling weeks
- **Overlap** — F comparison — a comparator ranks a fixed set of options; here the reader composes a set of their own.
- **References** — GSAP Flip card stack onEnter and onLeave, Cult UI sortable list, scope-toggle deliverable sections
- **Tags** — `gsap-core` `user-driven` `contained` `density-medium` `build-high` `budget-none` `rm-designed` `kbd-path`

## J — Pinned, horizontal and multi-part scroll

### SEC-107 · Held Interface, Moving Argument

`J` · pinned · GSAP-dependent · difficulty high · **SELECTED** · wave 1

One real deliverable surface — a reporting view, a booking screen, a schedule — is pinned at large scale while the copy column scrolls past it, and each copy block changes something inside that same surface: a panel cross-fades, a row lights, a sidebar swaps. Three states of one interface, never three different screenshots.

- **Distinct** — The held object is constant and only its interior changes; the concept's reason for existing is continuity of a single artefact under scroll-driven state swaps.
- **Use** — Makes an intangible service output feel like a real thing the buyer will receive, by showing it answering three of their questions in turn.
- **Desktop** — Roughly 40/60: a narrow copy measure left, the pinned surface right at a size that reads as an actual screen. The reader meets the surface first, then reads down past it.
- **Motion** — Nothing moves position — the frame is still and only its contents cross-fade, with one hairline highlight travelling between rows.
- **Narrow** — Below the split breakpoint the pin is dropped entirely and the surface state relevant to each copy block renders inline above it, same DOM order, no sticky frame.
- **Risk** — The pin-spacer alters document flow and any ancestor transform or will-change silently breaks the fixed position; on mobile the held full-height frame visibly resizes as the toolbar retracts because dynamic viewport units are throttled.
- **Variants** — Paper frame, hairline chrome · Navy inset stage · Document instead of UI · Four states with step counter
- **Overlap** — E-family split with sticky media — there the media persists unchanged as framing; here its internal state is the content.
- **References** — Vercel product tour write-up, GSAP ScrollTrigger pin + scrub, Scrollama sticky graphic, NN/g scrolljacking study
- **Tags** — `gsap-core` `pinned` `contained` `density-medium` `build-high` `budget-captures-scroll` `rm-designed` `kbd-path` `motion-sensitive`

### SEC-108 · Content-Weighted Case Track

`J` · horizontal · GSAP-dependent · difficulty high · **RESERVE**

A pinned horizontal run of case panels where the travel distance is measured from the track's real scroll width rather than a panel count, so a long case takes physically longer to traverse than a short one. A segmented progress rule beneath, one segment per panel at its true proportional width, tells the reader how much is left and how heavy each panel is.

- **Distinct** — Panel widths are content-derived and the progress track is proportional, so duration encodes substance — different from an equal-panel reel where every case reads as the same size.
- **Use** — Lets three to five engagements be compared side by side as peers while making the flagship one visibly larger without a badge.
- **Desktop** — Full-bleed pinned stage; panels of unequal width pass right to left, each with its own measure, artefact and outcome line. Progress rule and a live 03/07 counter sit at the foot.
- **Motion** — Each panel's interior reveal is bound to its horizontal position rather than page scroll, so captions land as the panel arrives, not before.
- **Narrow** — Below the reflow threshold the track unspools into a plain vertical stack of the same panels in the same DOM order — no sideways movement at any narrow width.
- **Risk** — WCAG 1.4.10 forbids two-dimensional scrolling for non-excepted prose at 320px, and inner triggers bound to the container tween cannot pin or snap and break outright if the driving tween carries any easing.
- **Variants** — Equal panels, no weighting · Type-slab panels, no imagery · Timeline spine doubling as progress · Dark stage, paper panels
- **Overlap** — K process rails — a process on a pinned horizontal track lives here because the axis change is the concept, not the ordering.
- **References** — GSAP containerAnimation docs and horizontal-run demos, Awwwards Horizontal Scrolling collection, NN/g horizontal scrolling guidance
- **Tags** — `gsap-core` `horizontal` `full-bleed` `density-medium` `build-high` `budget-captures-scroll` `rm-designed` `kbd-path` `motion-sensitive`

### SEC-109 · Formation Lock

`J` · pinned · GSAP-dependent · difficulty high · **RESERVE**

Capability cards arrive from scattered off-canvas origins while the section is pinned, converge and lock into a strict 3x3, and the section then unpins with that grid left behind as an ordinary readable composition. The layout assembling itself is the payload; the resting state is a normal grid.

- **Distinct** — The pin exists only to buy the assembly, and it ends on a static, fully readable composition rather than on the effect — a different motion logic from a pin that holds an effect open.
- **Use** — Argues breadth by making nine capabilities visibly come together as one system rather than reading as nine unrelated tiles.
- **Desktop** — Pinned full-height stage with the section heading held at top; cards fly in from four edge groups, settle on the grid lines, and the grid then scrolls away normally with the page.
- **Motion** — Origins are derived from each card's grid index rather than authored per card, so adding a tenth card needs no retiming.
- **Narrow** — Below tablet the assembly is dropped and the same nine cards render as a plain stacked list with a short opacity settle on entry.
- **Risk** — Under reduced motion a reverted scrub leaves an empty stage, so the section needs an authored no-pin composition rather than disabled tweens; a fast scroller can pass through before the formation resolves.
- **Variants** — Radial origins · Single-edge sweep · Type assembles with the cards · 2x4 formation with a held protagonist cell
- **Overlap** — D bento and C grids own the resting composition; this concept exists for the arrival, and the grid it ends on is deliberately ordinary.
- **References** — Codrops scroll-assembled layout formations, Codrops Sticky Grid Scroll, GSAP ScrollTrigger.batch
- **Tags** — `gsap-core` `pinned` `wide` `density-medium` `build-high` `budget-captures-scroll` `rm-designed` `motion-sensitive`

### SEC-110 · Close-Read Artefact

`J` · pinned · GSAP-dependent · difficulty high · **RESERVE**

One genuine deliverable — a proposal page, a schedule, a redacted report — is pinned for the whole section and never replaced. Prose triggers act on it: highlight a span, zoom to a named region, pan across it, scale it back out. The reader builds one mental model of one document instead of five impressions of five images.

- **Distinct** — Re-framing rather than swapping is the mechanism; the artefact's persistence is the concept, so no state cross-fade or replacement ever occurs.
- **Use** — Proves methodology by letting a buyer actually read the work rather than look at a picture of it.
- **Desktop** — The artefact holds three-fifths of the frame at generous scale; a narrow prose rail scrolls beside it, each paragraph naming the region it is about.
- **Motion** — Transform-only zoom and pan with a highlight rule that fades in over the named region — no reflow, no re-rendering of the artefact.
- **Narrow** — The artefact becomes a sticky top band at a fixed proportion with the prose beneath it, and the zoom steps are replaced by pre-cropped stills captioned identically.
- **Risk** — Large scale factors rasterise at natural size and go visibly fuzzy, and the artefact's content must exist as real text or a full written description or the section's entire payload is unavailable non-visually.
- **Variants** — Zoom only, no pan · Leader lines instead of highlights · Two-page spread with page turn · Redacted client document
- **Overlap** — M proof and artefact sections own static deliverable display; this one exists because the artefact is interrogated under a held frame.
- **References** — Closeread highlight/zoom-to/pan-to/scale-by grammar, Scrollama sticky graphic, W3C WAI complex images guidance
- **Tags** — `gsap-core` `pinned` `wide` `density-medium` `build-high` `budget-captures-scroll` `rm-designed` `text-integrity` `motion-sensitive`

### SEC-111 · Statement Snap Deck

`J` · pinned · GSAP-enhanced · difficulty medium · **RESERVE**

Four or five full-height statements that the page snaps to, with directional snapping so a reader moving up settles on the statement above rather than being dragged forward. Each statement runs one short scrubbed move inside its own range and nothing else. Native scroll is still doing the scrolling; the snap only decides where it comes to rest.

- **Distinct** — Scroll is redirected by settling rather than held — the reader is never stopped, only landed, which is a different spatial contract from a pin.
- **Use** — Converts a positioning argument into four discrete, memorable claims a buyer can repeat afterwards.
- **Desktop** — Each panel is one line at display scale hung on a grid column with a small index in the margin; deliberate emptiness around it, no imagery.
- **Motion** — One rule draws under the line as its panel settles, and nothing animates while the reader is between panels.
- **Narrow** — Snapping is switched off below tablet and the statements become a plain sequence of tall type blocks, which is how they read on touch anyway.
- **Risk** — Forcing a stop at every panel removes flexible scrolling for keyboard-only, motor-impaired and touch users; snap combined with a long statement that exceeds the viewport strands content that can never be reached.
- **Variants** — Three statements only · Alternating navy/paper fields · Statement plus a single figure · Counted 01–05 index rail
- **Overlap** — A editorial statement plates are static; this concept exists because the page settles, which is a scroll behaviour rather than a typographic one.
- **References** — GSAP directional snapping and snap-with-labels, MDN scroll-snap-stop guidance, NN/g scrolljacking study
- **Tags** — `gsap-core` `pinned` `full-bleed` `density-low` `build-medium` `budget-captures-scroll` `rm-designed` `kbd-path` `surface-critical`

### SEC-112 · Wheel-Claiming Panel Deck

`J` · swap-in-place · GSAP-dependent · difficulty high · **RESERVE**

A pinned wrapper takes the wheel and swaps full-screen panels in place, then hands scroll back the moment the last panel is reached. Prev/next controls and a panel index are permanently visible rather than hover-revealed, so the deck has a real non-gesture route through it and never depends on a gesture nobody discovers.

- **Distinct** — Panels swap in place with no page movement at all, driven by input capture rather than scroll position — a different implementation model and a different reader activity from a snapped or scrubbed sequence.
- **Use** — Gives a short set of engagement models an application-like chapter inside a scrolling page without spending five screens of page height.
- **Desktop** — Full-viewport panels, each one claim plus one artefact; the index and the prev/next pair sit fixed at the lower edge with the current panel numbered.
- **Motion** — Panels cut in with a directional clip rather than sliding, so no large surface travels across the viewport.
- **Narrow** — Below tablet the deck does not claim input at all; the panels become an ordinary vertical sequence and the prev/next controls disappear.
- **Risk** — Trackpad momentum fires several advances from one gesture, panels taller than the viewport become unreachable, and focus can land inside an off-stage panel — a case GSAP's own forum treats as out of scope.
- **Variants** — Two-panel comparison deck · Colour-field panels · Deck with a persistent side index · Panel background swaps per stage
- **Overlap** — H sliders are reader-driven laterally without capturing scroll; this deck captures the wheel while pinned, which is why it sits here.
- **References** — GSAP Observer fullscreen section deck, GSAP forum thread 43193, W3C carousel practice
- **Tags** — `gsap-core` `swap-in-place` `full-bleed` `density-low` `build-high` `budget-captures-scroll` `rm-designed` `kbd-path` `semantics-fragile`

### SEC-113 · Continuous Ground, Three Stages

`J` · pinned · GSAP-dependent · difficulty experimental · **RESERVE**

Three consecutive pinned stages that share one background element transforming continuously across all three — a plane that shifts hue, scale and crop from the first stage to the last. Authored as one timeline with three named labels rather than three independent triggers, so the ground never resets between stages and the trio reads as one movement.

- **Distinct** — The unit of authorship is one continuous timeline spanning three pins; the shared transforming ground is the concept, not any individual stage.
- **Use** — Carries a three-part argument — problem, method, outcome — as one thought rather than three sections a reader can lose the thread between.
- **Desktop** — Each stage holds one short claim and one artefact over the shared ground; stage boundaries are invisible because only the copy changes, not the field.
- **Motion** — The ground's transform is one uninterrupted curve; stage copy fades within labelled segments of it.
- **Narrow** — Below tablet all three pins are dropped and the stages become three normally-scrolling bands, with the ground rendered as three static states rather than one transform.
- **Risk** — Three consecutive pins is exactly where readers lose their sense of page length, and every later trigger on the page must compensate for the added distance through creation order or refresh priority.
- **Variants** — Colour-field ground · Single artefact that rotates through · Ground as the site's layout grid made visible · Two stages instead of three
- **Overlap** — P layered and full-bleed sections use depth as composition; here the ground exists to bind three pins into one, which is a scroll-structure decision.
- **References** — GSAP labelled-timeline pinning, NN/g pinned-section balance guidance, Codrops layered zoom scroll
- **Tags** — `gsap-core` `pinned` `full-bleed` `density-low` `experimental` `budget-captures-scroll` `rm-designed` `motion-sensitive` `surface-critical`

### SEC-114 · Grid Zoom-Through

`J` · pinned · GSAP-dependent · difficulty high · **SELECTED**

A multi-column wall of client artefacts scales past the reader while the outer columns translate outward and the centre column parts vertically, opening a hole through which one positioning line and one link resolve. The section ends on the sentence, not on the effect.

- **Distinct** — A single large scale change that the reader passes through rather than past, resolving on a message — one memorable move instead of many small reveals.
- **Use** — Converts a wall of work into a single conviction statement without spending a separate section on either.
- **Desktop** — Pinned full-bleed stage holding twelve artefact tiles in three columns; the parting opens at centre and the statement lands in the gap at display scale.
- **Motion** — Scale is eased so it reads perceptually linear rather than accelerating into the reader's face.
- **Narrow** — No zoom below tablet: the twelve tiles render as a plain two-column wall with the statement set beneath it, which is the honest small-screen form of the same content.
- **Risk** — Drastic scale on large elements rasterises at natural size and stretches the bitmap, producing visible fuzz; multi-plane movement of this magnitude is a documented vestibular trigger and needs a genuinely still alternative.
- **Variants** — Nine tiles, tighter rhythm · Monochrome tiles, colour statement · Type wall instead of images · Exit through a single tile
- **Overlap** — Q motion-led composition holds motion inside normal scroll; this holds the page still to spend the whole move, so it pins.
- **References** — Codrops Grid Zoom-Through and Layered Zoom Scroll, GSAP ExpoScaleEase, WCAG 2.3.3
- **Tags** — `gsap-core` `pinned` `full-bleed` `density-medium` `build-high` `budget-captures-scroll` `rm-designed` `motion-sensitive`

### SEC-115 · Bounded Hold

`J` · pinned · GSAP-enhanced · difficulty medium · **SELECTED** · wave 1

A pin with a deliberately short, declared range — roughly one viewport of extra distance — that resolves exactly one thing and then releases. One figure establishing itself, one diagram completing, one sentence finishing. Skimming is never punished because there is almost nothing to skim past.

- **Distinct** — The scroll budget is the design decision: a short bounded hold with an immediate release is a different motion contract from an open-ended pinned stage, even when the visual content is similar.
- **Use** — Gives one high-value claim a moment of undivided attention on a page that cannot afford a long pinned corridor.
- **Desktop** — A contained stage, not full-bleed, holding one large figure or diagram centred with its source line beneath; the surrounding page is visible above and below throughout.
- **Motion** — One property resolving across the range — a number establishing digit by digit, or a rule filling — and nothing else.
- **Narrow** — Below tablet the hold is removed and the same resolve runs on entry as an ordinary in-view animation, which needs no extra scroll distance at all.
- **Risk** — Hard-coded pixel end values desynchronise from content at other widths and after font load, so the range must be function-based and recomputed on refresh.
- **Variants** — Figure resolve · Diagram completion · One-sentence finish · Chart drawing to its final state
- **Overlap** — Q motion-led sections do this without any pin; this concept exists specifically to define a minimal, released pin as a library-wide budget discipline.
- **References** — GSAP ScrollTrigger tips and mistakes (function-based values), NN/g 'keep it brief' pin guidance, Codrops short scrub sequences
- **Tags** — `gsap-core` `pinned` `contained` `density-low` `build-medium` `budget-captures-scroll` `rm-designed`

### SEC-116 · Brand-Geometry Mask Reveal

`J` · pinned · GSAP-dependent · difficulty medium · **RESERVE**

The section pins and an SVG mask opens to reveal one full-bleed artefact beneath. The mask is not a generic wipe — it is drawn from the brand's own geometry, a counter from the logotype or the layout grid's module, so the transition carries identity rather than just timing.

- **Distinct** — The mask shape is the design decision and it is what makes the section this section; the same pin with a rectangular wipe would be a different, weaker concept.
- **Use** — Marks a genuine chapter break on a long page and lets one piece of work arrive as an event rather than as another image.
- **Desktop** — Pinned full-bleed field in a flat brand colour; the aperture opens from centre in the brand shape and the artefact behind it is revealed at full width, with one caption line entering last.
- **Motion** — Only the mask geometry animates — the artefact behind it never moves or scales, so nothing is recomposited unnecessarily.
- **Narrow** — Below tablet the mask opens on entry as a short unscrubbed reveal with no pin, and under reduced motion the artefact is simply present with the shape used as a static frame.
- **Risk** — Reverting the scrub under reduced motion leaves a covered artefact, so the no-motion path must render the image fully uncovered by default rather than depending on the animation.
- **Variants** — Logotype counter aperture · Grid-module blinds · Single diagonal slice · Mask holds as a permanent frame
- **Overlap** — L state change owns before/after wipes between two states; here one thing is uncovered, and the shape rather than the comparison is the point.
- **References** — Codrops Pinned Image Mask Reveal and SVG Mask Transitions, GSAP Image Mask On Scroll, clip-path wipe demos
- **Tags** — `gsap-core` `pinned` `full-bleed` `density-low` `build-medium` `budget-captures-scroll` `rm-designed` `surface-critical`

### SEC-117 · Collapse-to-Chip Stage

`J` · sticky · GSAP-dependent · difficulty high · **RESERVE**

A sticky stage presents one thing at full height — a scope model, a commitment, a guarantee — and on exit collapses in one continuous move into a compact one-line summary chip that stays docked for the rest of the page.

- **Distinct** — The exit is the concept: the section does not end, it becomes something smaller that survives, which is a spatial behaviour no other pinned pattern has.
- **Use** — Keeps a number or a commitment the buyer needs while reading everything after it, without repeating the section.
- **Desktop** — Full-height stage with the figure at display scale; as the stage leaves, its heading, figure and one qualifier shrink into a single ruled line docked at the top edge.
- **Motion** — One continuous shrink-and-travel from stage to chip rather than a fade-out followed by a fade-in.
- **Narrow** — Below tablet the collapse is dropped: the stage scrolls away normally and the summary line is simply repeated as a small ruled band later in the page.
- **Risk** — A persistent docked chip over moving content is the wrong place for a blurred surface — recompositing it every frame produces documented stutter on Android and Firefox; keep it solid. A persistent docked chip must not obscure content reached by anchor jumps or by keyboard focus, and must carry a dismissal control since it survives beyond the section that produced it. It is also the wrong place for a blurred surface — recompositing every frame produces documented stutter on Android and Firefox, so keep it solid.
- **Variants** — Accumulating strip of several chips · Chip docks bottom-right · Chip carries a jump-back control · Figure only, no label
- **Overlap** — I stacked and sticky card sequences accumulate cards; this accumulates one summary out of a full stage and keeps it beyond the section.
- **References** — Codrops cover-card to sticky label, Bramus CSS cover-card morph, Codrops sticky pricing collapse strip
- **Tags** — `gsap-core` `sticky` `wide` `density-low` `build-high` `budget-adds-scroll` `rm-designed` `kbd-path` `motion-sensitive`

### SEC-118 · Overscroll Panel Slide

`J` · layered · GSAP-dependent · difficulty high · **SELECTED**

Three or four full-bleed statement panels pin in place without adding any page height, so each new panel slides up over the last and the stack builds within a scroll budget no longer than a normal section. Layer, not distance, carries the sequence.

- **Distinct** — The defining property is that the pins consume no extra page height at all — the sequence costs the reader nothing in scroll length, which inverts the usual pinned-section trade.
- **Use** — Delivers three or four strong claims in the space of one section on a page that already carries several tall sections.
- **Desktop** — Each panel is full-bleed with one line and one small artefact, on alternating surface steps so the overlap edge is visible as the next panel arrives.
- **Motion** — Panels translate up over one another with a shadow at the leading edge; the outgoing panel stays put rather than moving away.
- **Narrow** — Below tablet the overlay is removed and the panels become four ordinary stacked bands in the same order — the same content, no layering.
- **Risk** — Because the pins add no spacing, ordering and refresh priority become load-bearing for every trigger after them, and any ancestor transform breaks the fixed positioning of all four panels at once.
- **Variants** — Two panels only · Full-bleed imagery instead of type · Visible header stub of each covered panel · Navy to paper progression
- **Overlap** — I stacked cards build a visible deck inside normal flow; this overlays full-bleed panels via pinning, so the behaviour rather than the card relationship is the concept.
- **References** — GSAP 'Pinned panels with overscroll' demo, Awwwards sticky overlap collections, GSAP pinSpacing caveats
- **Tags** — `gsap-core` `layered` `full-bleed` `density-low` `build-high` `budget-captures-scroll` `rm-designed` `motion-sensitive` `surface-critical`

### SEC-216 · True-Duration Track

`J` · horizontal · GSAP-dependent · difficulty high · **SELECTED**

A horizontally traversed engagement track whose panel widths are the real elapsed durations, so scrolling a nine-month phase genuinely takes longer than scrolling a two-week one. The axis is measured time.

- **Distinct** — The horizontal axis carries meaning rather than merely holding panels — traversal distance equals duration, which is a content relationship no other entry expresses.
- **Use** — Shows the true shape of a programme to a buyer planning around it, where evenly-spaced milestones would flatten a nine-month commitment into the same width as a fortnight.
- **Desktop** — A pinned run translating sideways, panels sized from real week counts rather than evenly, with a persistent scale rule reading in months and a progress marker that is also the position indicator. Short phases pass quickly by design.
- **Motion** — The track is driven by vertical scroll with panel entrances bound to horizontal position rather than page position, so a caption lands when its phase arrives, not when the page has moved a fixed distance.
- **Narrow** — Below the tablet width the run becomes a vertical rail whose row heights carry the same durations — the meaning survives because the measured axis simply rotates.
- **Risk** — A horizontal track needs a focusable, named region with keyboard traversal — Safari gives no native keyboard access to scroll containers and Chrome only gained it in 132. Panel content must fit 320 CSS pixels or the section fails WCAG 1.4.10 Reflow, and the scroll capture must be dropped entirely below the tablet width.
- **Variants** — Scale rule in months versus in weeks · Phases coloured by workstream · Deliverable markers pinned to real dates · Two stacked tracks — our work above, client change below
- **Overlap** — SEC-108 derives panel width from content length; here width is calendar time, which is a different claim about what the distance means.
- **References** — Gap identified by the ambition critique — only two horizontal entries across the whole list and neither made the axis mean anything; the duration-bar idea resolved statically elsewhere
- **Tags** — `gsap-core` `horizontal` `full-bleed` `density-medium` `build-high` `budget-captures-scroll` `rm-designed` `kbd-path`

## K — Process, sequence and timeline

### SEC-119 · Deterministic Engagement Stepper

`K` · user-driven · React-interactive · difficulty low · **SELECTED** · wave 1

One step panel at a time inside a locked frame, advanced by real prev/next buttons and arrow keys, with a large tabular "03 / 05" beside a segmented rule. Nothing in the section responds to scroll, so it behaves identically on a trackpad, a phone and a keyboard.

- **Distinct** — Reader activity: the reader authors the pace with a control rather than with scroll position, so the section has no scroll budget and no pin arithmetic at all.
- **Use** — Walks a buyer through the engagement one stage at a time without costing the page a pinned corridor.
- **Desktop** — Left third carries the counter, the step title and the two controls; the right two-thirds carries the panel — one outcome sentence, a short deliverable list and one artefact plate. Panel height is locked to the tallest step so the page never jumps.
- **Motion** — Incoming panel content shifts a few pixels in the direction of travel over a short duration; the counter digit swaps with no animation.
- **Narrow** — Same frame at full width, counter and controls above the panel, with swipe added alongside the buttons rather than replacing them.
- **Risk** — The panel needs to be a labelled live region with focus retained on the pressed control, or screen-reader users get no notification that the step changed.
- **Variants** — Oversized numeral counter chrome · Segmented progress bar · Filmstrip thumbnail step rail · Full-bleed panel per step · Plain text-link step index
- **Overlap** — Resembles a tab set (G), but the steps are ordered and traversed in sequence by the controls, which tabs never are.
- **References** — The Pudding stepper guidance, Jim Vallandingham scrollytelling alternatives, Tailwind Plus stepped stats
- **Tags** — `css-motion` `user-driven` `contained` `density-medium` `build-low` `budget-none` `rm-free` `kbd-path`

### SEC-120 · Drawn Method Spine

`K` · scroll-driven · GSAP-enhanced · difficulty medium · **SELECTED**

A hairline SVG spine runs the inner gutter and draws itself as the section passes at ordinary reading speed; at each node a step opens with one outcome line and one real deliverable thumbnail. The drawing supplies progression without consuming a pixel of extra scroll.

- **Distinct** — Motion logic: progress is a drawn line tied to normal page scroll, and each node's payload is an artefact rather than a description of activity.
- **Use** — Shows a buyer what physically arrives at the end of each stage of the work.
- **Desktop** — Spine at the left inner margin with small numeraled nodes; each node carries a one-line outcome at display scale and a deliverable thumbnail set to its right at roughly half the measure.
- **Motion** — Stroke length scrubs with section progress and each node's dot fills as the drawn tip reaches it.
- **Narrow** — Spine moves to a tight left gutter; thumbnails take the full measure beneath their outcome line.
- **Risk** — Under reduced motion the resting state must be the fully drawn spine with every node visible, not an empty rail waiting for a scrub that never runs.
- **Variants** — Hairline rule spine · Dotted pipe spine · Meandering path with a travelling marker · Nodes as numerals vs as thumbnails · Spine in the margin vs down the centre
- **Overlap** — Would be J if it pinned; here scroll is never captured and the section adds no height.
- **References** — GSAP DrawSVG + MotionPath forum threads, Codrops scroll-driven demos, drawn method line seed
- **Tags** — `gsap-core` `scroll-driven` `contained` `density-medium` `build-medium` `budget-none` `rm-designed`

### SEC-121 · Hand-off Chain

`K` · static · static · difficulty low · **SELECTED**

Each step shows two artefacts — the one it received and the one it produces — and the produced artefact reappears as the next step's input. The repetition is the argument: the order cannot be shuffled without the pictures stopping matching.

- **Distinct** — The relationship between the content: ordering is enforced by shared artefacts rather than asserted by numerals on cards.
- **Use** — Answers the "three cards with digits on them" objection by proving each stage genuinely depends on the one before it.
- **Desktop** — A vertical run of wide rows, each read as In / Work / Out. The Out plate of one row and the In plate of the next are drawn at identical size on the same vertical axis, so the eye tracks the hand-off straight down the column.
- **Narrow** — Rows stack; the repeated plate sits at the foot of one row and the head of the next so the pairing stays adjacent across the fold.
- **Risk** — The repeated artefact exists twice in source, so one instance must be marked decorative or every deliverable is announced twice.
- **Variants** — In / Work / Out three-column rows · Shared plate straddling the row seam · Alignment only, no arrows · Document thumbnails as the chain · Ledger form with format and owner columns
- **Overlap** — The artefacts are evidence (M), but the section exists to establish order, not to argue quality.
- **References** — Developers Digest numbered-step critique, dependency-chain process seed, Locomotive fixed block vocabulary
- **Tags** — `no-motion` `static` `contained` `density-medium` `build-low` `budget-none` `rm-free`

### SEC-122 · Branch and Road Not Taken

`K` · user-driven · React-interactive · difficulty medium · **RESERVE**

A process rail that splits once at a genuine decision point — fixed scope against discovery-first — with both branches drawn and the untaken one kept fully legible in a quieter register rather than hidden. The reader watches the choice being made instead of being told the outcome.

- **Distinct** — Composition: two parallel futures are on screen simultaneously, which a linear rail cannot express.
- **Use** — Answers "but what if my situation is the other one" inside the same section rather than in a follow-up conversation.
- **Desktop** — Steps one and two run centred; the rail forks into two columns of unequal width, the recommended branch at full weight and the alternative de-emphasised but readable, and the two rejoin at a shared closing step.
- **Motion** — Choosing a branch swaps which side carries emphasis by contrast alone; no element changes position.
- **Narrow** — The fork becomes two labelled sub-lists beneath the decision step, both fully readable, rejoining at the shared final step.
- **Risk** — The de-emphasised branch still carries body copy, so its contrast has to clear the normal text threshold — greyed cannot mean unreadable.
- **Variants** — Fork with rejoin · Fork with two distinct endings · Recommended branch one surface step darker · Toggle swaps which branch is emphasised · Fork drawn as a splitting spine
- **Overlap** — Not F: the branches are stages of one engagement, not competing things to buy.
- **References** — USWDS lifecycle gates, NN/g comparison guidance, branching process seed
- **Tags** — `css-motion` `user-driven` `contained` `density-medium` `build-medium` `budget-none` `rm-free` `text-integrity`

### SEC-123 · Process as Schedule

`K` · static · static · difficulty low · **SELECTED**

Every step carries its typical duration in the same position, and the section foot totals them into one honest range with a caveat line. The process stops being a diagram and becomes something a buyer can put in a calendar.

- **Distinct** — Content relationship: each step is quantified in time and the quantities sum, so the section makes a commitment rather than a description.
- **Use** — Answers "how long will this take" before it is asked, in the same section that describes the work.
- **Desktop** — Left column of step names at reading scale, right-aligned duration column in tabular numerals, hairline rule under each row, and a heavier foot row carrying the total plus one sentence naming what changes it.
- **Narrow** — Same two columns held; the duration hangs right of the step name on the same line rather than dropping beneath it.
- **Variants** — Weeks-only ledger · Range per step ("2–3 weeks") · Cumulative column beside per-step · Scope toggle retiming every row · Small duration bar hung beside each numeral
- **Overlap** — K-09 draws duration to scale on a real axis; this is a ledger of figures with no spatial encoding.
- **References** — Preline timelines under Data Display, specification-sheet editorial pattern, elapsed-time process seed
- **Tags** — `no-motion` `static` `contained` `density-high` `build-low` `budget-none` `rm-free`

### SEC-124 · Margin Numeral Rail

`K` · sticky · scroll-driven · difficulty medium · **RESERVE**

The step numeral sits in the outer margin at display scale, parked sticky, and swaps as each step's copy passes it. The reader always knows which step they are in without any fixed navigation, and the numeral is the section's only ornament.

- **Distinct** — Hierarchy and spatial behaviour: one persistent marginal element carries the whole sequence while the content itself scrolls plainly.
- **Use** — Gives a long, prose-heavy explanation of how the work runs a spine a skimmer can use.
- **Desktop** — A wide left margin holds a Fraunces numeral at the largest display step, parked at a fixed height; the measure runs to its right at reading width, with full-bleed media permitted to break between steps.
- **Motion** — The outgoing numeral clips upward as the incoming one clips in behind it — one short move per step boundary and nothing else.
- **Narrow** — The numeral drops to a small kicker above each step heading and stops being sticky entirely.
- **Risk** — A sticky element beside a long measure holds a composited surface for the section's full height, so it must stay text-only with no blur and no shadow.
- **Variants** — Outline numeral · Filled plate numeral · Numeral plus step name · Numeral with one hairline tick per step · Parked at top vs at centre height
- **Overlap** — Editorially adjacent to A, but the marginal numeral exists to sequence and the sequence is the subject.
- **References** — Aceternity Timeline sticky header, Codrops sticky heading rails, numbered process rail seed
- **Tags** — `js-motion` `sticky` `contained` `density-medium` `build-medium` `budget-none` `rm-designed`

### SEC-125 · Sticky Year Gutter

`K` · sticky · GSAP-enhanced · difficulty medium · **SELECTED**

A continuous spine runs the section's height while the year label sticks in the gutter beside it, morphing digit by digit as the next year's blocks pass. Entries carry unequal media weight so the years never read as twenty identical dated cards.

- **Distinct** — A persistent, changing temporal marker combined with significance-weighted entries — the frame stays while the detail moves.
- **Use** — Turns longevity into a readable trajectory for a buyer assessing whether the firm will still be there next year.
- **Desktop** — Left gutter carries the sticky year at display scale; a hairline spine separates it from the content column; entries hang right, with two or three per year carrying media and the rest text-only.
- **Motion** — Only digits that actually change roll — 2019 to 2020 moves three, 2020 to 2021 moves one.
- **Narrow** — The year becomes a sticky single-line band under the section heading; the spine narrows to a left rule.
- **Risk** — Rolling digits must not be split per character for assistive technology — the whole year has to remain one exposed string.
- **Variants** — Numeric year marker · Named era label · Rolling digits vs hard swap · Spine as drawn path vs plain rule · Entries alternating sides vs single margin
- **Overlap** — K-06 also parks a numeral, but that one counts steps in a process; this one marks time across a history.
- **References** — Aceternity Timeline, sticky era marker timeline seed, editorial timeline with sticky era marker
- **Tags** — `js-motion` `sticky` `contained` `density-medium` `build-medium` `budget-none` `rm-designed` `text-integrity`

### SEC-126 · Trajectory Plot

`K` · static · CSS-interactive · difficulty medium · **RESERVE**

Time runs along the horizontal axis and engagement magnitude up the vertical, so the shape of the practice is legible before a single label is read. It is a chart honest enough to be a section rather than a rail with decoration.

- **Distinct** — The cross axis carries data. No other timeline here encodes magnitude, and it changes the section's claim from "time passed" to "direction".
- **Use** — Proves deepening client relationships or growth to a buyer who is really assessing risk.
- **Desktop** — A wide plotted line across the container over a light baseline, year ticks beneath, a handful of labelled points, and the three largest engagements annotated with a client-free descriptor and a figure.
- **Motion** — The line draws once on entry over a short duration and never animates again.
- **Narrow** — The plot rotates: time descends and magnitude reads as bar length from a left baseline — the same data, honestly read.
- **Risk** — A plotted line is a complex image; it needs a short identifier plus a visible written summary naming the trend and its two extremes.
- **Variants** — Line plot · Stepped plot · Dot plot on a connecting hairline · Filled area beneath the line · Peaks annotated only
- **Overlap** — N owns tables and indexes; here the passage of time is the section's actual subject.
- **References** — W3C WAI complex images guidance, trajectory timeline seed, Preline data-display timelines
- **Tags** — `css-motion` `static` `contained` `density-medium` `build-medium` `budget-none` `rm-designed` `semantics-fragile`

### SEC-127 · True-Length Duration Bars

`K` · static · CSS-interactive · difficulty medium · **RESERVE**

Each engagement is a bar whose length is its real elapsed weeks on a shared scale, so a nine-month programme physically occupies nine months of the rail and a two-week sprint looks like two weeks. The comparison happens in the layout before a word is read.

- **Distinct** — The axis is measured rather than decorative — spacing itself carries data, which evenly-spaced nodes cannot do.
- **Use** — Shows the real shape of the firm's commitments instead of a flattering, uniform list of milestones.
- **Desktop** — A shared week ruler across the top; bars stack downward, left-aligned to their start date and labelled with engagement type and duration. Overlapping bars are allowed and read as genuine concurrency.
- **Motion** — Bars grow from their start edge once on entry, staggered by start date.
- **Narrow** — Proportions are preserved against a narrower ruler; very short bars take a minimum length with the true figure printed beside them so nothing overstates.
- **Risk** — Bars scaled below a legible minimum become unreadable and, if the label lives inside them, unlabelled — the figure must be able to sit outside the bar.
- **Variants** — Single-lane sequence · Multi-lane concurrency register · Bars with milestone ticks · Bars grouped by service line · Ruler in weeks vs months
- **Overlap** — K-05 states duration as figures in a ledger; here duration is the geometry itself.
- **References** — Duration timeline seed, shadcnblocks timeline-block critique, evenly-spaced-dots failure note
- **Tags** — `css-motion` `static` `wide` `density-high` `build-medium` `budget-none` `rm-designed`

### SEC-128 · Cause and Effect Tracks

`K` · static · CSS-interactive · difficulty medium · **SELECTED**

Two tracks share one date axis — what we did above the line, what changed for the client below — so causation reads as vertical alignment rather than as a claim in a sentence.

- **Distinct** — Composition: two parallel sequences locked to a single axis, where the meaning lives in the alignment between them rather than in either track alone.
- **Use** — Connects the firm's activity to the buyer's outcomes without asserting attribution in prose.
- **Desktop** — A central dated axis with activity markers hung above and outcome markers below; where a pair aligns, a hairline drops between them, and unpaired markers are left honestly unconnected.
- **Motion** — Hovering or focusing either marker of a pair raises both and thickens the connector between them.
- **Narrow** — The axis rotates vertical, activity to its left and outcome to its right, keeping each pair on one line.
- **Risk** — Hover-only pairing is invisible on touch, so every connector must already be drawn faintly in the default state.
- **Variants** — Above/below a horizontal axis · Left/right on a vertical axis · Connector as hairline vs shaded band · Outcome track carrying figures only · Unpaired markers deliberately greyed
- **Overlap** — R highlights relationships too, but this section's spine is chronology and the pairs are dated, not selected.
- **References** — Two-track timeline seed, W3C complex-image guidance, coupling-section pattern
- **Tags** — `css-motion` `static` `wide` `density-medium` `build-medium` `budget-none` `rm-free` `semantics-fragile`

### SEC-129 · Axis-Switching Milestone Rail

`K` · static · scroll-driven · difficulty medium · **SELECTED**

One list of milestones, one DOM order and one progress marker, rendered as a horizontal rail where the container is wide enough and a vertical spine where it is not. The composition genuinely changes while the semantics do not.

- **Distinct** — Responsive transformation is the concept, and the switch is driven by the container the rail sits in rather than by the viewport.
- **Use** — Lets a milestone sequence sit anywhere on a page — full width, inside a split, in a narrow column — without being rebuilt for each context.
- **Desktop** — Wide containers get a horizontal rule with evenly weighted nodes, dates above and labels below, and a filled progress segment; narrow containers get the same nodes hung on a left spine.
- **Motion** — The progress segment fills in proportion to how much of the rail has been read, in whichever axis is currently active.
- **Narrow** — That is the vertical form: nodes on a left spine, dates hung outside, labels in the measure, same order and same progress logic.
- **Risk** — Adding a container type to the wrapper establishes a containment context that commonly breaks absolutely-positioned overlays already inside the section.
- **Variants** — Nodes as dots · Nodes as dates · Progress fill vs static rule · Labels alternating above and below · Rail nested inside a split column
- **Overlap** — K-09 also runs horizontally, but that rail is scaled to real elapsed time while this one is evenly spaced by design.
- **References** — MDN container queries, axis-switching milestone rail seed, Ahmad Shadeed too-early breakpoint
- **Tags** — `scroll-css` `static` `contained` `density-medium` `build-medium` `budget-none` `rm-free`

### SEC-130 · Shipping Log

`K` · user-driven · React-interactive · difficulty medium · **RESERVE**

A reverse-chronological log of dated one-line entries, each with a category tag, filterable in place with a live count in the heading. It is offered as proof of continuous work rather than as a highlight reel.

- **Distinct** — Reader activity: a chronology the reader interrogates by tag, so density and recency are both inspectable rather than curated down to three.
- **Use** — Proves the firm is genuinely busy and consistently shipping, which a case-study trio cannot.
- **Desktop** — Hanging dates in a narrow left column, a tag chip and a single-line entry across the measure, thirty or more rows on hairline rules, with the chip row above dimming non-matches in place and no reflow.
- **Motion** — Non-matching rows drop to a dimmed register and collapse while survivors hold position; the heading count updates.
- **Narrow** — The date moves to a small line above each entry; chips become a horizontally scrolled row with a visible scrollbar and a focusable container.
- **Risk** — The filtered result count must be announced and the list must remain a real list, or a screen-reader user cannot tell the content changed.
- **Variants** — Dim in place vs remove and reflow · Year group headings · Monospace date column · Count in the heading vs beside the chips · Chips vs a single select
- **Overlap** — N owns dense indexes; this one is ordered by date and the chronology is the proof being offered.
- **References** — Dated activity log seed, USWDS live result count, Linear and Attio changelog discipline
- **Tags** — `js-motion` `user-driven` `contained` `density-high` `build-medium` `budget-none` `rm-free` `kbd-path`

### SEC-131 · Weighted Release Rail

`K` · static · static · difficulty low · **SELECTED**

Dated entries on a hairline spine where only the two most significant carry media and every other entry is text alone. The inequality is the design: hierarchy appears inside a repetitive structure without any entry being decorated for its own sake.

- **Distinct** — Hierarchy: significance rather than position or recency decides which entries get visual weight.
- **Use** — Signals momentum on a service page with no artwork budget and no manufactured variety.
- **Desktop** — A single left spine with date markers and entries at full measure; the two weighted entries break to a wider column carrying one artefact plate each, so the eye lands on them first on any pass down the rail.
- **Narrow** — Weighted entries keep their media at full width; the spine narrows and dates sit inline with the entry title.
- **Variants** — Two weighted entries per section · One weighted entry per year · Artefact plate vs clip poster · Spine as rule vs date column alone · Category tag leading each title
- **Overlap** — K-12 is dense and filterable; this rail is curated and unfiltered, and unequal weight is its whole point.
- **References** — Linear and Attio changelogs, changelog rail seed, Preline timelines
- **Tags** — `no-motion` `static` `contained` `density-medium` `build-low` `budget-none` `rm-free`

### SEC-132 · Lifecycle With Retirements

`K` · static · CSS-interactive · difficulty low · **RESERVE**

Named phases each expand to their real sub-states, including retired ones kept on the page and struck through rather than deleted. The honesty of the struck line is what makes the rest read as governance instead of marketing.

- **Distinct** — Content relationship: the sequence carries its own dead ends, so the section documents a working system rather than describing an ideal path.
- **Use** — Shows a buyer that the firm runs a real process with gates, and is candid about what it has stopped offering.
- **Desktop** — Four phase headings across the container, each with sub-states listed beneath in a small documentation register; retired sub-states struck through with a short replacement note beside them and gate conditions set in the margin.
- **Motion** — Expanding a phase reveals its sub-states in place with a short height transition and no movement anywhere else.
- **Narrow** — Phases stack as a vertical ledger with sub-states indented one step; each struck line keeps its replacement note directly beneath it.
- **Risk** — Strikethrough is not conveyed by most screen readers, so a retired sub-state also needs a text label saying so.
- **Variants** — Four-phase horizontal spread · Vertical ledger · Retired items shown vs collapsed behind a count · Gate conditions set in the margin · Live alternative sitting beside each struck line
- **Overlap** — Phases expand like G disclosure, but the section exists to state an ordered lifecycle, not to hide content behind clicks.
- **References** — USWDS component lifecycle states, Atlassian deprecated category, deprecation strip seed
- **Tags** — `css-motion` `static` `contained` `density-high` `build-low` `budget-none` `rm-free` `text-integrity`

## L — State change and before/after

### SEC-133 · Single-Control Delta Slider

`L` · user-driven · React-interactive · difficulty medium · **SELECTED** · wave 1

One artefact frame holding both states, the boundary between them driven by a single visible native range control sitting under the frame rather than a hidden drag handle. The readout names the measured delta at the handle's position, so the interaction produces evidence instead of a party trick.

- **Distinct** — Control model and reader activity: one native control serves pointer, keyboard and assistive technology, and the handle's position emits a number rather than only a boundary.
- **Use** — Proves a specific change on a real client artefact and lets the buyer decide how much of it to look at.
- **Desktop** — A wide frame with both states stacked in one cell, the after state clipped against the before. Before and After labels sit permanently in opposite top corners. The track runs the full frame width beneath, with the delta figure set at display scale to its left.
- **Motion** — Nothing moves on its own; the seam and the readout follow the input value, with a short ease on keyboard steps so an arrow press reads as a deliberate move.
- **Narrow** — Frame goes full width and the track sits beneath it as a large touch target, with the delta readout moved above the frame so a finger never covers it.
- **Risk** — A div handle with a pointermove listener has no keyboard path, no announced value, and on touch the drag competes with page scroll — the native input is load-bearing, and its focus ring must hold 3:1.
- **Variants** — Vertical wipe axis · Hairline seam, no handle plate · Oversized delta numeral · Notched track with named stops · Redacted document pair
- **Overlap** — L-02 uses the same clipped pair, but there the seam is scroll progress and the reader has no agency at all.
- **References** — NN/g comparison-table guidance, Adrian Roselli keyboard-only scrolling areas, One Page Love Before After category, absence of any maintained family in Tailwind Plus, Preline and shadcnblocks
- **Tags** — `js-motion` `user-driven` `contained` `density-low` `build-medium` `budget-none` `rm-free` `kbd-path`

### SEC-134 · Wipe Counter Band

`L` · scroll-driven · GSAP-enhanced · difficulty medium · **RESERVE**

A full-bleed section holding two complete states of one composition where the boundary between them is scroll progress itself. A small fixed label counts nought to a hundred per cent at the seam, so the reader can read how far through the change they are.

- **Distinct** — There is no control: scroll position is the only input, and the per-cent label makes the section's own progress legible rather than merely felt.
- **Use** — Turns a claimed transformation into something the buyer watches happen at their own scrolling pace, with no instruction needed.
- **Desktop** — Two full-bleed plates occupy the same cell; the upper one is clipped by a travelling edge. A hairline label in the lower gutter carries the per-cent figure in tabular numerals plus one short line naming exactly what is changing.
- **Motion** — Seam position and counter are both driven by the section's own entry range, and the composition rests fully on the after state well before the section leaves.
- **Narrow** — The wipe axis rotates so the seam crosses the short dimension top to bottom, and the counter moves inline directly beneath the plate.
- **Risk** — Scrubbing anything beyond clip and transform forces layout every frame; and a fast skim must never leave the section stranded half-wiped, so the resolved state has to be the resting state.
- **Variants** — Straight vertical seam · Diagonal seam · Brand-shaped aperture mask · Blind-slat wipe · Paper-to-navy palette pair
- **Overlap** — L-01 shares the clipped pair; the difference is reader agency versus scroll position as the driver.
- **References** — Codrops SVG mask transitions on scroll, GSAP ScrollTrigger scrub docs, Josh Comeau scroll-driven animations
- **Tags** — `gsap-core` `scroll-driven` `full-bleed` `density-low` `build-medium` `budget-adds-scroll` `rm-designed` `motion-sensitive` `surface-critical`

### SEC-135 · Cost-Of-Inaction Peel

`L` · layered · GSAP-enhanced · difficulty medium · **RESERVE**

Two panels with identical composition — same headings, same rule positions, same layout — stacked in one grid cell and differing only in their figures. Scroll lifts the top one away; because nothing else moves, the reader's eye lands precisely on the digits that changed.

- **Distinct** — Both states share one composition, so the change is isolated to content: nothing travels, nothing cross-fades, nothing reflows.
- **Use** — Carries a do-nothing-versus-engage argument without asking a buyer to hold two different layouts in working memory.
- **Desktop** — One full-bleed panel fills the section, a seam shadow at one corner signalling the layer beneath. The lift runs from that corner so the lower panel is exposed progressively. Both panels carry their label in the same corner slot.
- **Motion** — The top panel translates and rotates a few degrees from one corner across a short scroll range while the shadow beneath it deepens.
- **Narrow** — The peel becomes a straight upward slide; where the panel exceeds the viewport, the two states become two stacked panels sharing one rule and one label slot.
- **Risk** — Stacked copies pin the section height to the taller state, so the panels must be structurally identical or the layout jumps; the reduced-motion path must show both panels stacked rather than an empty stage. A full-bleed panel translating and rotating across the viewport is large-surface positional motion named by WCAG 2.3.3, so the offset must be removed entirely under reduced motion rather than shortened, and both panels must be legible stacked with no motion at all.
- **Variants** — Corner peel · Straight edge lift · Torn seam · Three-panel escalation by year · Navy beneath paper
- **Overlap** — Category I stacks a sequence of different cards; here two layers are one thing in two states.
- **References** — Codrops cost-of-inaction peel demos, GSAP same-grid-cell stacking recipe, One Page Love Transformation sections
- **Tags** — `gsap-core` `layered` `full-bleed` `density-medium` `build-medium` `budget-adds-scroll` `rm-designed` `surface-critical` `motion-sensitive`

### SEC-136 · Rolling Figures Diff

`L` · swap-in-place · React-interactive · difficulty medium · **SELECTED**

One layout, two datasets, one control. Nothing wipes and nothing moves: digits roll to their new values and labels swap on the same baseline, so the grid never has to settle because it never changed.

- **Distinct** — The transformation is entirely content-level and typographic — position, size and structure are constant across both states.
- **Use** — Shows the delta between two scenarios — current versus retained, self-managed versus supported — as something measurable rather than asserted.
- **Desktop** — A four- or six-cell figure grid on hairline rules, each cell holding a display-scale numeral, its unit and its caveat line. A two-option control sits at the section head; changing it rolls every numeral at once and swaps the caveat lines beneath.
- **Motion** — Digits roll place by place over a short duration and nothing else on screen animates at all.
- **Narrow** — The grid steps to two columns then one, and the control becomes a full-width segmented pair held directly above the figures.
- **Risk** — Rolling digits must not be announced character by character — each numeral needs a stable accessible value and the change should be announced once in a live region rather than per digit.
- **Variants** — Two-state toggle · Three-scenario segmented control · Signed delta chip beside each figure · Hard step instead of roll under reduced motion · Ledger rules instead of cells
- **Overlap** — L-07 also retimes figures, but it additionally relabels a list and changes a step count, so structure changes there and not here.
- **References** — NumberFlow, Chrome same-document view transitions, Tailwind Plus stats variants
- **Tags** — `js-motion` `swap-in-place` `contained` `density-medium` `build-medium` `budget-none` `rm-designed` `text-integrity`

### SEC-137 · Tracked-Change Redline

`L` · swap-in-place · React-interactive · difficulty medium · **SELECTED**

One piece of real client copy shown before and after with tracked-change styling — struck deletions, underlined insertions, marginal change marks — swapped from a single control so the surrounding layout never has to settle.

- **Distinct** — The artefact is text itself, and the comparison lives inside the typography rather than between two panels or across a seam.
- **Use** — Evidences editorial judgement on the buyer's own material, which is otherwise close to impossible to prove.
- **Desktop** — A measured column of the copy at reading size, held at the height of the longer state so nothing reflows. A hairline margin rail carries change marks and a count. The control above the column offers three states: original, redline, clean.
- **Motion** — Strike rules draw across deletions and insertions fade up over a beat when redline is selected; the clean state simply appears.
- **Narrow** — The margin rail collapses to a single change-count line above the paragraph and the three-state control becomes a full-width segmented row.
- **Risk** — Deletions carried only by colour and a line rule are not announced — real deletion and insertion semantics are required, and the container must be held at the taller state so the page never jumps between states.
- **Variants** — Three-state original/redline/clean · Margin marks versus inline only · Subject-line pair at display scale · Proposal paragraph at reading size · Mono original against display rewrite
- **Overlap** — Category A owns type as the whole composition; here type is the carrier of a two-state comparison.
- **References** — Editorial redline conventions, MDN interpolate-size limits, Chrome same-document view transitions
- **Tags** — `css-motion` `swap-in-place` `contained` `density-medium` `build-medium` `budget-none` `rm-free` `semantics-fragile`

### SEC-138 · Four-Region Flip Plate

`L` · swap-in-place · React-interactive · difficulty medium · **RESERVE**

One artefact divided into four regions that flip between before and after independently. The reader assembles the comparison at their own pace and can hold a mixed state that a single divider cannot express.

- **Distinct** — The comparison is decomposed: the reader drives four independent state changes rather than one boundary, and partial states are legitimate.
- **Use** — Lets a buyer see exactly which parts of a deliverable changed, which reads as more honest than an all-or-nothing reveal.
- **Desktop** — A large plate split two by two on hairline seams. Each quadrant carries a small corner control and a one-word label naming what it shows, with a quiet counter reading how many are showing the after state. States persist as the reader moves on.
- **Motion** — Each quadrant swaps with a short single-axis flip so the seams stay fixed and neighbouring regions never move.
- **Narrow** — Below the tablet width the plate cannot be divided and still read, so the section becomes four independently switchable bands with the shared-artefact framing stated in the heading and the after-state counter retained — the mixed-state reading of one plate is a wide-width form.
- **Risk** — Per-region controls must be real buttons with a pressed state and a text label rather than click handlers on image divs, and a show-all control is needed so the comparison never requires four separate actions.
- **Variants** — Two-by-two plate · Three-by-two six-region · Hover preview with click to lock · Show-all master control · Dark plate with paper seams
- **Overlap** — L-01 proves the same evidence, but a divider forces one boundary while this permits mixed states.
- **References** — Design-system nine-state grid patterns, W3C WAI complex-image alternatives, One Page Love Before After
- **Tags** — `css-motion` `swap-in-place` `contained` `density-medium` `build-medium` `budget-none` `rm-designed` `kbd-path`

### SEC-139 · Scope Retiming Toggle

`L` · swap-in-place · React-interactive · difficulty high · **SELECTED**

One segmented control changes the engagement scope and everything on screen answers at once: every figure retimes, the deliverable list relabels, and the process gains or loses a step — all in place, so the reader sees the shape of the trade-off rather than three separate offer blocks.

- **Distinct** — The state change spans three different content structures at once and includes a structural change — the step count — not only values.
- **Use** — Answers what an engagement would involve and how long it would take at the buyer's own size, in place, rather than as three separate offer blocks.
- **Desktop** — The control sits at the section head. Beneath it, a three-part row: a duration figure, a deliverables list, and a numbered step strip. Switching scope rolls the figures, travels the list rows to their new positions, and re-divides the strip rather than redrawing it.
- **Motion** — Figures roll, list rows travel to their new slots, and the step strip's divisions slide to their new positions.
- **Narrow** — The control becomes a full-width scrollable segmented rail and the three parts stack in the same order, the step strip becoming a vertical numbered list.
- **Risk** — Rapid toggling is the failure case: only one same-document view transition runs at a time and starting a second skips the first to completion, so the control must stay coherent under fast repeated presses.
- **Variants** — Two-scope toggle · Three-scope segmented control · Scope crossed with sector · Step strip as numerals versus rule divisions · Deliverables as ledger rows versus chips
- **Overlap** — Category F shows options side by side; this shows one option at a time and makes the reader do the switching.
- **References** — Tailwind Plus pricing and scope patterns, GSAP Flip layout transitions, Chrome same-document view transitions
- **Tags** — `gsap-core` `swap-in-place` `contained` `density-high` `build-high` `budget-none` `rm-designed` `kbd-path`

### SEC-140 · Comfortable-To-Compact Switch — MERGE → SEC-043

> **Merged into SEC-043.** Same density switch; two high-cost slots on one mechanism. Its distinguishing material now lives in SEC-043's variants. The permanent id is retained so numbering never shifts.

`L` · swap-in-place · GSAP-dependent · difficulty high

The same content rendered two ways — a comfortable editorial stack with generous leading, and a compact table with tabular numerals — from one control, with rows travelling to their new positions rather than being re-rendered.

- **Distinct** — The reader chooses presentation density, and items keep their identity across the change so the reader can see where each one went.
- **Use** — Serves the skimmer and the line-by-line comparer from one section instead of shipping two.
- **Desktop** — The comfortable state is a stack of ruled entries carrying a title, a sentence and a right-aligned figure. The compact state is the same entries as a four-column table with a header row. The control sits at the section head with the item count beside it.
- **Motion** — Rows are measured before and after and animate the difference, so each entry visibly travels into its new column position.
- **Narrow** — The compact state becomes a contained, named, focusable horizontally-scrolling table; the comfortable state stays the default below the breakpoint.
- **Risk** — A table converted to cards via display properties can lose its semantics outright and strand screen-reader users — both states must be real renderings from one source, never a display swap on one table.
- **Variants** — Two-step comfortable/compact · Three-step density ladder · Choice persisted across the page · Cross-fade instead of travel under reduced motion · Hairline rules versus zebra rows
- **Overlap** — Category N owns density as the statement; here the switch between densities is the concept.
- **References** — GSAP Flip grid/list toggle, Awwwards layout-switch collection, Adrian Roselli under-engineered responsive tables
- **Tags** — `gsap-core` `swap-in-place` `wide` `density-high` `build-high` `budget-none` `rm-designed` `semantics-fragile`

### SEC-141 · One Element Resolving

`L` · scroll-driven · scroll-driven · difficulty medium · **SELECTED**

The whole motion budget goes to a single object — a form filling in, a chart resolving from scatter to trend, a card being routed through a queue — which passes from its empty state to its finished state as the section crosses the viewport. Everything around it stays still.

- **Distinct** — One element, two end states, and the entire composition exists only to frame that single change.
- **Use** — Shows a working outcome rather than describing it, which reads as engineered rather than animated.
- **Desktop** — A generous, mostly empty field with the object placed off-centre at roughly half the section width, a short standfirst above it and one caption beneath naming the end state. Nothing else competes for attention.
- **Motion** — The object's progress is tied to the section's own view progress, so scrolling back reverses it and it rests resolved once the section is fully in view.
- **Narrow** — The object goes full width with the standfirst above; where it cannot stay legible at 320px the section ships its resolved end state only, with no motion — that is the honest answer, not a failure.
- **Risk** — Content that only exists once a timeline has run is invisible to crawlers, reader modes and reduced-motion readers, so the resolved state must be the default rendering with motion layered over it.
- **Variants** — Form filling · Chart resolving · Card routing through a queue · Document assembling · Static resolved plate under reduced motion
- **Overlap** — Category Q owns motion as composition; here the motion is one object's change of state and the section is otherwise entirely still.
- **References** — GSAP view()/scrub state-change demos, MDN scroll-driven animations, Vercel product-tour restraint note
- **Tags** — `scroll-css` `scroll-driven` `contained` `density-low` `build-medium` `budget-none` `rm-designed`

### SEC-142 · Cover Card To Header Bar

`L` · sticky · GSAP-enhanced · difficulty high · **RESERVE**

A full-bleed opening card carrying the section title and one image contracts in a single continuous move into a compact header bar that then stays with the reader. One element, two roles, no swap.

- **Distinct** — The state change is a change of function — the element stops being a cover and becomes persistent furniture — expressed as one continuous transformation rather than a replacement.
- **Use** — Gives a long section a title plate that earns its space and then gets out of the way without disappearing.
- **Desktop** — The section opens on a full-width plate at roughly two-thirds viewport height carrying an oversized title, a kicker and a rule. As the content beneath rises, the plate contracts toward the top edge, the title steps down the scale, and the rule becomes the bar's underline.
- **Motion** — Plate height, type scale and image crop are driven by the section's own entry range and land exactly on the docked bar state.
- **Narrow** — A shorter cover plate and a docked bar carrying only the title and a hairline; where the bar would take more than a tenth of the viewport it does not dock at all.
- **Risk** — Sticky chrome blurred over moving content is a documented frame-rate cost on Android and Firefox, and the docked bar must not steal the top of the viewport from anchor jumps or in-page focus. A scroll-driven type-scale and crop change must resolve to the docked state as the reduced-motion default.
- **Variants** — Title-only bar · Bar carrying a step counter · Image crop collapsing to a colour band · Bar releasing at section end · Paper-to-navy inversion on dock
- **Overlap** — Category I stacks a sequence of cards; here one element transforms into a different kind of object entirely.
- **References** — Codrops cover-card to sticky label, GSAP Flip.fit, container scroll-state(stuck) patterns
- **Tags** — `gsap-core` `sticky` `full-bleed` `density-low` `build-high` `budget-none` `rm-designed` `surface-critical` `motion-sensitive`

### SEC-143 · Screenshot X-Ray Peel

`L` · scroll-driven · GSAP-dependent · difficulty high · **RESERVE**

A finished product screenshot peels back on scroll to reveal the annotated wireframe of the same view registered exactly beneath it, with numbered callouts arriving on the exposed region. The section shows the thinking under the surface rather than two versions of it.

- **Distinct** — The two layers are different representations of one object — surface and reasoning — and the revealed layer carries annotation the top layer does not have.
- **Use** — Evidences that decisions were made deliberately, which is the one thing a buyer cannot verify from a portfolio image.
- **Desktop** — A large chrome-free screenshot plate centred in a wide container. As it lifts from one edge, the wireframe beneath is exposed and two or three numbered callouts draw leader lines to regions of it, each note set small in the margin.
- **Motion** — The top plate lifts along one axis while callout leaders draw in sequence as their region becomes visible.
- **Narrow** — The peel becomes a labelled two-state toggle button, with the callouts published beneath the image as an ordinary numbered list.
- **Risk** — Notes that exist only inside the drawn state are unreadable non-visually — the numbered notes must be real text beneath the artefact with the leader lines treated as decorative.
- **Variants** — Single-edge peel · Split peel from centre · Toggle instead of scroll · Grid overlay instead of wireframe · Three layers: surface, wireframe, grid
- **Overlap** — L-03 peels two identical panels differing only in numbers; here the layers are different representations and the lower one is annotated.
- **References** — Codrops product-screenshot peel demos, W3C WAI complex-images two-part alternative, GSAP DrawSVG
- **Tags** — `gsap-core` `scroll-driven` `wide` `density-medium` `build-high` `budget-adds-scroll` `rm-designed` `motion-sensitive`

## M — Proof, artefact and case study

### SEC-144 · Annotated Deliverable Plate

`M` · user-driven · React-interactive · difficulty medium · **SELECTED** · wave 1

One large, real deliverable held at reading size with small numbered markers placed on it; activating a marker expands its note in place beside the plate. A full written description sits permanently beneath, so the section argues correctly even with the image unseen.

- **Distinct** — Reader activity changes: the reader interrogates one artefact rather than comparing several, and the note text is authored to stand alone, which alters the content model rather than the styling.
- **Use** — Proves the firm produces specific, inspectable work and explains exactly what the buyer would receive.
- **Desktop** — The artefact occupies roughly two thirds of a wide container inside a hairline frame with numbered markers on it; a right-hand column holds the active note, and a permanently visible prose description sits under the plate at measure.
- **Motion** — The active note expands with a short height-and-opacity change while its marker gains weight; nothing else on the plate moves.
- **Narrow** — The plate goes full width, markers become a numbered list beneath the image, and each note opens inline in document order.
- **Risk** — Hotspots are routinely built as divs with click handlers, which strands keyboard and screen-reader users, and W3C WAI requires a real long description for a complex image — the standing prose must actually be that description.
- **Variants** — Photographic document plate · Screen-capture plate · Marker rail set left of the artefact · Notes as numbered footnotes beneath · Navy plate with emerald markers · Note anchored to its marker rather than in a fixed column · Plan page with leader rules · Dark plate with emerald markers
- **Overlap** — B feature explainers — but the subject is one real deliverable used as evidence, not a set of capabilities.
- **References** — W3C WAI complex-images guidance, Magic UI div-onClick accessibility issue, Apple product-page close-read sections
- **Tags** — `css-motion` `user-driven` `contained` `density-medium` `build-medium` `budget-none` `rm-free` `kbd-path` `semantics-fragile`

### SEC-145 · Redacted Document Plate

`M` · static · static · difficulty low · **SELECTED** · wave 1

A genuine client document shown as a plate with identifying fields blocked out in solid bars set on the document's own baselines, so the redaction reads as deliberate typographic composition rather than damage. The caption states what the document was for.

- **Distinct** — The redaction bars are the compositional device — the section's rhythm depends on them, which no other artefact concept uses.
- **Use** — Lets a buyer see the real shape of a deliverable from confidential work, proving discretion and substance at the same time.
- **Desktop** — One or two documents at true page proportion on a wide neutral field, inset from the container edge, redaction bars aligned to the document's grid, with a short caption block at the foot naming the decision the document served.
- **Narrow** — One document per screen at full container width with its caption directly beneath; no scaling below legible body size, and an honest note where the document cannot be read at that width.
- **Risk** — Redacted assets can leak identifying detail at full resolution or through alt text, so the flattened image and its description both need review before the section is published.
- **Variants** — Single hero document · Three-up redacted set · Navy field with paper plates · Redaction bars in emerald · Marginal annotations beside the bars
- **Overlap** — M-03 artefact triptych — that shows three artefact types at true proportion; here redaction itself is the visual argument.
- **References** — darkroom.engineering artefact-led proof, Locomotive deliverable presentation, W3C WAI complex-images guidance
- **Tags** — `no-motion` `static` `contained` `density-low` `build-low` `budget-none` `rm-free` `surface-critical`

### SEC-146 · True-Proportion Artefact Triptych

`M` · static · CSS-interactive · difficulty low · **SELECTED**

Three real deliverables — a deck page, a project schedule, a report cover — shown together at their true page proportions rather than cropped into uniform cards, each captioned with the decision it was made for rather than a design credit.

- **Distinct** — The plates have deliberately unequal aspect ratios and share a baseline instead of a box, so proportion carries meaning that a card grid destroys.
- **Use** — Shows the actual range of what an engagement produces, in formats a business owner already recognises.
- **Desktop** — Three plates on one baseline with unequal widths because their ratios differ; generous gutters; captions hang beneath each from a shared caption line, and the tallest plate sets the band height.
- **Motion** — Hover or focus lifts a plate one elevation step and gives its caption a rule; there is no entry animation.
- **Narrow** — The plates stack full width in decision order with captions beneath, each keeping its own aspect ratio so nothing is letterboxed.
- **Risk** — Unequal plate heights leave a ragged bottom edge, so caption baselines must be locked to a shared line or the row reads as broken rather than composed.
- **Variants** — Tilted plates that straighten on hover · Flat plates with hairline frames · Navy field with paper plates · Four-up with one dominant plate · Captions set in the outer margin
- **Overlap** — C card systems — cells there are uniform; here inequality of ratio is the content.
- **References** — Tailwind Plus artefact gallery blocks, Locomotive deliverable presentation, Bisous artefact-led work pages
- **Tags** — `css-motion` `static` `contained` `density-medium` `build-low` `budget-none` `rm-free`

### SEC-147 · Evidence-Footed Figure Band

`M` · static · GSAP-enhanced · difficulty low · **SELECTED** · wave 1

Four display-scale figures, each standing above a permanently visible foot line giving source, period and denominator. The numerals count once on entry and never animate again.

- **Distinct** — Provenance is structural — the foot line is part of the composition and cannot be omitted — which changes the content contract of a stat band rather than its dressing.
- **Use** — Makes quantified claims survive the first sceptical question a buyer asks.
- **Desktop** — A wide band of four columns divided by hairlines: figure at display scale, unit small beside it, then a two-line foot giving source, period and denominator. No icons anywhere.
- **Motion** — Each figure counts up once as its own column enters and then holds permanently, with no re-trigger on scroll back.
- **Narrow** — Two columns of two, or a single column of four, with the foot line kept at full length rather than truncated — the foot is the point of the section.
- **Risk** — Stat bands with no source, period or denominator are trivially fabricated and buyers discount them; re-triggering the count on every scroll-back also makes the figure read as decoration rather than as an established fact.
- **Variants** — Hairline-divided four-up · One hero figure with three supporting · Ledger rows with right-aligned tabular figures · Navy inverted band · No count-up at all
- **Overlap** — N dense information — this is four figures with provenance, not a table.
- **References** — Tailwind Plus Stats variants, TRIONN quantified proof strip, Developers Digest 'AI Design Slop' stat-banner critique
- **Tags** — `js-motion` `static` `wide` `density-medium` `build-low` `budget-none` `rm-designed`

### SEC-148 · Bound Testimonial

`M` · static · static · difficulty low · **SELECTED**

Every quote is structurally bound to one artefact from the same engagement — the pair shares a frame and the block cannot render one without the other, so praise never appears unaccompanied.

- **Distinct** — The binding is a rendering rule, not a layout preference: the component refuses to display a quote without its evidence, which is a different implementation model from any quote grid.
- **Use** — Defuses the reader's default assumption that testimonials are manufactured.
- **Desktop** — Two or three bound pairs down the section, each a wide row with the artefact plate left at real proportion and the quote right at large body scale, attribution, role and engagement dates set beneath it.
- **Narrow** — Artefact above quote within each pair, so the two never separate across a scroll.
- **Risk** — Over-produced testimonials with studio portraits now read as fabrication, so the bound item must be a genuine deliverable rather than a decorative photograph.
- **Variants** — Alternating artefact-left / artefact-right · Quote overlaid at the plate's foot · Document excerpt as the bound artefact · Navy pair on a paper field
- **Overlap** — M-06 quality-tagged trio — that deliberately shows quotes with no artefact at all.
- **References** — darkroom.engineering quote discipline, Tailwind Plus 'With testimonial' content blocks, 2026 testimonial-design commentary on manufactured proof
- **Tags** — `no-motion` `static` `contained` `density-medium` `build-low` `budget-none` `rm-free`

### SEC-149 · Quality-Tagged Quote Trio

`M` · static · static · difficulty low · **SELECTED**

Three short client statements, each explicitly tagged with the one quality it evidences — seniority, clarity of communication, delivery — and nothing else on screen. No portraits, no logos, no company blurb.

- **Distinct** — Curation becomes visible content: the tag names the claim the quote is being used to prove, turning three quotes into three arguments.
- **Use** — Answers the three questions a buyer actually has, in the client's own words, within one screen.
- **Desktop** — Three columns separated by hairlines; the tag set small above the rule, the quote at large body scale beneath, attribution and role at the foot. Quotes are deliberately short so all three read at a glance.
- **Narrow** — Three stacked blocks with the tag as a running head above each and horizontal rules replacing the vertical hairlines.
- **Risk** — A grid format encourages filling every cell, which dilutes quality — three is the ceiling here and the component should refuse to scale to nine.
- **Variants** — Three columns on hairlines · Stacked ledger with hanging tags · One large quote swapping between three tags · Navy field with paper quotes
- **Overlap** — M-05 bound testimonial — that requires an artefact per quote; this deliberately shows text alone.
- **References** — darkroom.engineering three-quote section, Preline Testimonials / Testimonial Cards split, Tailwind Plus testimonial grid as the counter-example
- **Tags** — `no-motion` `static` `contained` `density-low` `build-low` `budget-none` `rm-free`

### SEC-150 · Outcome-First Case Excerpt

`M` · swap-in-place · React-interactive · difficulty medium · **SELECTED**

The case study leads with its measurable outcome at display scale plus one sentence of context, and reveals the work that produced it only on demand beneath, so the reader chooses whether to descend into method.

- **Distinct** — The reading order inverts — outcome first, method second and disclosed — and the disclosure changes what the reader does, not merely how the block looks.
- **Use** — Lets a skimming buyer take the result in three seconds while a serious one reads the working.
- **Desktop** — A wide block with the outcome figure and sentence occupying the upper two thirds at display scale, then a hairline and a single control; opening it expands a three-column detail of brief, approach and deliverables with one artefact thumbnail.
- **Motion** — The detail panel expands to its intrinsic height on a short easing while the outcome line stays exactly where it was.
- **Narrow** — Identical structure in one column; the detail expands inline beneath the control with no change of mechanism.
- **Risk** — Animating a disclosure to auto height with a JS measuring loop is invalidated by every resize and font load, and the CSS alternative is not Baseline, so both paths have to exist underneath.
- **Variants** — Single excerpt per section · Three independently disclosable excerpts · Outcome as a numeral · Outcome as a sentence · Navy inverted block
- **Overlap** — G disclosure — the disclosure here serves one case study's argument rather than being the section's organising mechanic.
- **References** — shadcnblocks Case Study blocks, MDN interpolate-size, Antinomy outcome-led project pages
- **Tags** — `css-motion` `swap-in-place` `contained` `density-medium` `build-medium` `budget-none` `rm-free` `kbd-path`

### SEC-151 · Four-Block Case Vocabulary

`M` · static · static · difficulty medium · **RESERVE**

Every case excerpt is assembled from exactly four block types — statement, artefact, metric, quote — so each project is authored by recombining a closed vocabulary rather than by designing a new layout. Three projects look related without looking identical.

- **Distinct** — The implementation model is the concept: a small fixed block set with an authored order, which is different from filling a fixed card template.
- **Use** — Lets a buyer compare projects because every project is made of the same four things in a different order.
- **Desktop** — Each project occupies a band on one shared grid; blocks take one of three declared widths — measure, half-bleed, full-bleed — and the sequence differs per project, so rhythm changes while vocabulary does not.
- **Narrow** — All four block types collapse to full container width in their authored order; the difference between projects survives because ordering, not width, carries it.
- **Risk** — Vocabulary sprawl is the documented failure of modular case systems — each new project adding a bespoke block until the set no longer composes — so the block list must be closed and enforced in code.
- **Variants** — Strict four blocks · Five with a process block added · Artefact-led ordering · Quote-led ordering · Navy statement blocks against paper artefacts
- **Overlap** — A editorial — this is a governed evidence block system, not a typographic composition.
- **References** — Locomotive modular case-study system, shadcnblocks Case Study blocks, Josh Comeau full-bleed named-line grid
- **Tags** — `no-motion` `static` `breakout` `density-medium` `build-medium` `budget-none` `rm-free`

### SEC-152 · Outcome-Sentence Work Trio

`M` · static · React-interactive · difficulty medium · **RESERVE**

Three featured engagements where the headline is a full outcome sentence with the client's name set as a link inside it. There are no per-row thumbnails — one shared fixed frame fills with the relevant image only while a row is hovered or focused.

- **Distinct** — The image is subordinate and shared rather than repeated, so the reader reads three claims first and looks second.
- **Use** — Makes featured work scan as results rather than as a logo parade.
- **Desktop** — A left column of three large sentences with 01–03 markers and hairlines between them; a fixed frame on the right, empty and ruled at rest, filling with one image while its row is active.
- **Motion** — The frame cross-fades between images over a short duration while the active sentence gains weight rather than colour.
- **Narrow** — The frame moves inline beneath each sentence and is always populated, since there is no hover state to drive it.
- **Risk** — Hover-only reveals have no touch equivalent and no keyboard path by default, so focus must drive the same swap and the small-screen form must show images unconditionally.
- **Variants** — Frame right · Frame left · Frame as a full-bleed background plate · Empty frame carrying a hairline grid at rest
- **Overlap** — M-12 holding-frame index — that is a long dense index whose frame retains its last state; this is three sentences with an empty resting frame.
- **References** — Antinomy outcome-sentence project headlines, Awwwards project-index hover portfolios, daisyUI Hover Gallery as the counter-example
- **Tags** — `js-motion` `static` `contained` `density-low` `build-medium` `budget-none` `rm-designed` `kbd-path`

### SEC-153 · Recognition Tally Block

`M` · static · static · difficulty low · **RESERVE**

Awards presented as counts rather than badges. Aggregate numerals are the primary typography and the individual award names sit behind them as a low-contrast background register. No logos anywhere.

- **Distinct** — The hierarchy inverts the usual awards strip — names recede to texture, counts carry the section — which is a compositional change, not a restyle.
- **Use** — Compresses years of recognition into one screen without asking a buyer to recognise unfamiliar marks.
- **Desktop** — One dominant total at display scale on the left, a small stack of category counts on the right, and behind both a repeating register of award names at low contrast, aligned to the same grid so it reads as a field rather than a watermark.
- **Narrow** — The total sits above the category counts and the register becomes a single ruled list beneath, because low-contrast type behind numerals is unreadable at that width.
- **Risk** — Setting names as a background register risks failing text contrast, so the register must either meet contrast as real text or be genuinely decorative with the full list present elsewhere in the section.
- **Variants** — One total plus a breakdown · Plain counted table · Navy field with emerald numerals · Register as a vertical column rather than a field
- **Overlap** — M-04 figure band — that carries provenance for business metrics; this aggregates recognition and treats names as texture.
- **References** — Locomotive 'Awards & Recognitions (295)', OFF+BRAND award counts by body, Buzzworthy Awwwards/CSSDA/FWA tallies
- **Tags** — `no-motion` `static` `wide` `density-low` `build-low` `budget-none` `rm-free` `text-integrity` `surface-critical`

### SEC-154 · Cycling Client Field

`M` · static · React-interactive · difficulty medium · **RESERVE**

A client list rendered as type, not marks. At rest one name at a time changes in place on a slow interval; hovering or focusing the field reveals the full set. A logo wall with no marquee and no continuous movement.

- **Distinct** — Motion is a single discrete substitution rather than continuous translation, and the reader's engagement rather than a timer reveals the whole set.
- **Use** — Proves who the firm works with without depending on the buyer recognising logos.
- **Desktop** — A wide field of client names in a strict multi-column grid on hairlines, every name present in the markup, with one cell at a time exchanging its name on a several-second interval so the field has life without sustained movement.
- **Motion** — One cell cross-fades to a different name every few seconds; the interval pauses on hover, on focus and under reduced motion.
- **Narrow** — Two columns with no cycling at all — the full list simply reads as a list, which is the honest small-screen form.
- **Risk** — Marquee alternatives duplicate DOM and get announced twice; here the swapping cell must not move focus or re-announce, so it needs to be inert to assistive technology while the full list stays readable. Content that updates automatically for longer than five seconds needs a persistent, visible pause control — hover and focus pausing do not serve a touch reader. The swapping cell must be inert to assistive technology so it never re-announces or moves focus, with the full list readable as text.
- **Variants** — Names only · Names with sector · Navy field with paper names · Single-cell slow swap · Fully static grid with no cycling
- **Overlap** — H sliders and rails — nothing moves laterally and the reader drives nothing; this is a still field with one substitution.
- **References** — One Page Love Client Name List category, OFF+BRAND client field treatment, Ryan Mulligan marquee accessibility write-up
- **Tags** — `js-motion` `static` `wide` `density-medium` `build-medium` `budget-none` `rm-designed` `motion-sensitive`

### SEC-155 · Holding-Frame Engagement Index

`M` · sticky · React-interactive · difficulty medium · **RESERVE**

A long typographic index of engagements — number, client, sector, year — where hovering or focusing a row swaps one persistent media frame that holds its last state when the pointer leaves. No per-row thumbnails, no reset flicker.

- **Distinct** — The frame's persistence is the idea: the section never returns to an empty state, so the reader's last enquiry stays on screen while they keep scanning.
- **Use** — Lets a buyer read volume and sector coverage while still seeing what the work looks like.
- **Desktop** — The index runs at roughly two thirds width on hairline rows with tabular numerals; a single frame occupies the remaining third, sticky within the section so it stays beside whichever rows are in view.
- **Motion** — The frame cross-fades on row change and simply stops changing when the pointer leaves; the active row gains a rule rather than a colour shift.
- **Narrow** — The frame docks as a fixed-ratio band at the top of the section and rows tapped beneath it update it, with no hover dependency.
- **Risk** — A tall sticky media frame keeps a large composited surface alive for the whole section scroll, and hover-only activation excludes touch, so focus and tap must drive the same swap.
- **Variants** — Frame right · Frame left · Frame as a background plate behind the list · Index with a year gutter · Index grouped by sector
- **Overlap** — N dense indexes — the list is dense, but the section exists for the frame's held state, which is a proof device.
- **References** — Awwwards project-index portfolios, Furrow Studio project menu, CUSP list image-hover effects
- **Tags** — `js-motion` `sticky` `contained` `density-high` `build-medium` `budget-none` `rm-designed` `kbd-path`

### SEC-156 · Case Card In-Place Expansion

`M` · swap-in-place · GSAP-dependent · difficulty high · **RESERVE**

A grid of case cards where activating one expands it in place into a full-width reading panel; the surrounding grid dims and reflows around it, with no modal and no route change.

- **Distinct** — The card becomes the panel rather than a panel appearing over it, so identity is preserved through the transition — a different implementation model from a dialog.
- **Use** — Lets a buyer go one level deeper on the single case relevant to them without leaving the page.
- **Desktop** — A three-column grid of six case cards; on activation the chosen card travels and grows into a full-container detail panel carrying outcome, approach, artefact and quote, while the remaining cards shift down and drop one contrast step.
- **Motion** — A layout transition measures the card's start and end geometry and animates the difference so the card visibly travels; a cross-fade replaces it under reduced motion.
- **Narrow** — Cards are already full width, so activation expands the card downward in place and the panel reads as an inline disclosure.
- **Risk** — Layout transitions called before the framework commits the DOM silently do nothing, and same-document view transitions run one at a time — a second one skips the first to completion — so rapid toggling needs an explicit guard.
- **Variants** — Six-card grid · Four-card grid · Detail opening full-bleed · Detail opening at measure · Navy detail against a paper grid
- **Overlap** — C card grids — the grid is regular, but the concept exists for the expansion, not the grid.
- **References** — GSAP Flip documentation caveats, Chrome for Developers same-document view transitions, Codrops grid-to-detail demos
- **Tags** — `gsap-core` `swap-in-place` `contained` `density-medium` `build-high` `budget-none` `rm-designed` `kbd-path` `semantics-fragile`

### SEC-157 · Coverage Square Grid — MERGE → SEC-171

> **Merged into SEC-171.** Same coverage-square grid; SEC-171 carries the stronger risk and commercial use. Its distinguishing material now lives in SEC-171's variants. The permanent id is retained so numbering never shifts.

`M` · scroll-driven · scroll-driven · difficulty medium

One small square per capability, sector or delivered engagement, filling in as the section is read, with a sticky legend and a running percentage. Breadth is proved by area rather than claimed in a list.

- **Distinct** — Quantity is rendered as a field of marks rather than as text, so the reader perceives scale before reading a single label.
- **Use** — Turns 'we cover a lot of ground' from an assertion into something the buyer can see the size of.
- **Desktop** — A wide grid of several hundred small squares fills most of the section, a legend holds at the grid's top-left while it scrolls, and a running count with percentage sits large at the side.
- **Motion** — Squares fill in batches as the grid crosses the reading band and the count increments to match; the reduced-motion resting state is the completed grid with its final figure.
- **Narrow** — Fewer columns and larger squares, legend above rather than sticky, and the count fixed at its final value rather than animated.
- **Risk** — One trigger per square is exactly the fine-granularity case documented as making Firefox warn about page slowdown, so the fill must be batched or driven from a single timeline.
- **Variants** — Squares by capability · Squares by engagement · Squares by sector with a colour key · Hairline outlines filling solid · Navy grid with emerald fill
- **Overlap** — Q motion-led — the fill happens under normal scroll, but the section exists to quantify coverage, which makes it proof.
- **References** — GSAP ScrollTrigger.batch guidance, GSAP forum '100+ triggers' thread, design-system coverage-map patterns
- **Tags** — `js-motion` `scroll-driven` `wide` `density-high` `build-medium` `budget-none` `rm-designed` `motion-sensitive`

### SEC-158 · Team Census by Function

`M` · static · static · difficulty low · **SELECTED**

The team presented as functional groups with hard counts and, beneath each, every person's role and start year. No photographs at all — the counts and the tenure are the argument.

- **Distinct** — The content model does the work: group counts plus start years read as an operations statement rather than a personality gallery.
- **Use** — Answers 'who will actually do this, and have they been here long enough' before the buyer has to ask it.
- **Desktop** — Three or four function columns, each headed by a name and a count at display scale, then a dense hairline list of role and start year in tabular numerals; column heights differ honestly by team size.
- **Narrow** — Groups stack with the count as a running head and one person per line, role left and year right — the tabular alignment is what has to survive.
- **Risk** — A person list marked up as a row of divs loses list semantics and item enumeration, so the size a sighted reader perceives is not available to a screen-reader user.
- **Variants** — Three functions · Four with operations promoted · Count-led headings · Tenure sorted oldest first · Navy census band
- **Overlap** — N dense information — the list is dense, but the section's job is credibility of the delivery team.
- **References** — Locomotive team census (Design 9 / Development 11 / Operations 10), darkroom.engineering seniority framing, Tailwind Plus Team blocks as the counter-example
- **Tags** — `no-motion` `static` `contained` `density-high` `build-low` `budget-none` `rm-free` `semantics-fragile`

### SEC-159 · Proof Quartet Card Row

`M` · static · CSS-interactive · difficulty low · **RESERVE**

Three case excerpts in a row, each a fixed quartet — one pull-quote, one metric, one real artefact thumbnail and exactly one link. The structure never varies; only the artefact type does.

- **Distinct** — The fixed quartet is a constraint on content rather than layout: no card can be padded out or cut short, so the row stays scannable while every card stays specific.
- **Use** — Gives a buyer three comparable pieces of evidence in one screen, each with a route to more.
- **Desktop** — Three equal cards on one baseline with a locked internal order — artefact thumbnail at the head, metric at display scale, pull-quote at body scale, link at the foot on a hairline. The artefacts are deliberately different in kind: a document, a dashboard, a schedule.
- **Motion** — Hover or focus lifts the card one elevation step and underlines its link; there is no entry animation.
- **Narrow** — Cards stack full width in the same locked order, and the artefact thumbnail keeps its aspect ratio rather than becoming a banner crop.
- **Risk** — A stretched overlay link across the whole card blocks text selection, and wrapping the card in an anchor makes the accessible name the entire card, so the single link must remain a real link at the foot.
- **Variants** — Document / dashboard / schedule artefacts · Metric-led ordering · Quote-led ordering · Navy cards on paper · Hairline cards with no fill
- **Overlap** — C card grids — the row is a regular grid, but the concept is the fixed evidence quartet inside each cell.
- **References** — Tailwind Plus and Preline proof-card families, Developers Digest identical-feature-card critique, Adrian Roselli card-link guidance
- **Tags** — `css-motion` `static` `contained` `density-medium` `build-low` `budget-none` `rm-free` `kbd-path`

### SEC-214 · Client Sentence At Scale

`M` · static · static · difficulty low · **SELECTED**

One client's sentence set at the scale a manifesto would get, with the attribution treated as the proof rather than as a credit line. The loudest thing on the page is someone else's voice.

- **Distinct** — Hierarchy and whose voice carries it both change. Every other proof entry contains the client's words inside a card, a rail or a trio; here the sentence is the section and the studio says nothing.
- **Use** — A buyer discounts the seller's voice and does not discount a peer's — this puts the peer's voice where the seller's usually goes.
- **Desktop** — One sentence at display scale across a wide measure with generous air above and below. Beneath it, small: the person, their role, the organisation, the engagement and a reference to one verifying artefact. No portrait, no quotation marks as ornament, no card.
- **Narrow** — The sentence steps down a size and keeps its air; the attribution block stays complete rather than being trimmed, since the attribution is the proof.
- **Risk** — The sentence must be genuinely attributable and the artefact reference real — over-produced or unverifiable praise now reads as fabrication and damages the thing it exists to build.
- **Variants** — Navy field, inverted type · Attribution ranged left under a hairline · Sentence set in the body cut rather than display · One accent word in a contrasting cut · Paired with a single artefact plate beneath
- **Overlap** — SEC-006 is the studio speaking at this scale; SEC-149 tags three quotes by quality. This is one client sentence given the whole section.
- **References** — Gap identified by the ambition critique — the client's voice was answered only quietly across five entries while the studio's voice had two bold answers; research finding on readers fact-checking named clients
- **Tags** — `no-motion` `static` `wide` `density-low` `build-low` `budget-none` `rm-free`

### SEC-215 · Assigned Team Composition

`M` · static · static · difficulty low · **SELECTED**

Who is actually on the engagement, at what proportion, and who is not — as a composition of named roles with allocations, rather than a wall of portraits. Seniority is shown by where the time goes.

- **Distinct** — Answers the same job as the team census at a different register: this is about a specific engagement's composition and allocation, not the practice's overall headcount.
- **Use** — Answers the buyer's top-three question — who will actually do this work, and how much of them do I get — which a photo grid never answers.
- **Desktop** — Named roles as rows with a proportion bar or figure ranged right, tenure beside the name, and a closing line naming what is explicitly not included. Proportions are real numbers that total to something stated.
- **Narrow** — Rows stack with the proportion moving beneath each name; the not-included line stays as the section's last word.
- **Risk** — Proportion bars need their value as text beside them, not encoded in width alone. Naming real people carries a currency obligation — a stale allocation is worse than none.
- **Variants** — Allocation as a proportion bar · Allocation as a plain figure only · Grouped by phase rather than by person · Including the explicitly-not-included line · Tenure shown as a start year
- **Overlap** — SEC-158 censuses the whole practice by function; this composes one engagement's actual team and is read at a different moment in the decision.
- **References** — Gap identified by the ambition critique — one entry answered 'who does the work' and had no alternative register; the same critique's finding that studio portraits now read as fabrication
- **Tags** — `no-motion` `static` `contained` `density-medium` `build-low` `budget-none` `rm-free`

## N — Dense information and indexes

### SEC-160 · Engagement Specification Sheet

`N` · static · static · difficulty low · **SELECTED**

A two-column definition list on hairline rules — term left, value right, tabular numerals throughout, no cards, no icons, no illustration. Density and rule weight are the entire design, and on a page otherwise made of cards this one block reads as documentation rather than marketing.

- **Distinct** — There is no repeating unit at all: hierarchy is carried by rule weight and column ratio rather than by containers, which is a different compositional model from every card-based dense section.
- **Use** — States exactly what an engagement includes, at what cadence and in what price band, with no persuasive adjective anywhere.
- **Desktop** — Contained width, term column about a quarter, values ranged left against a shared inner edge. Heavier rules open each group, hairlines separate rows, and a small dated caption sits at the foot so the sheet reads as a versioned document.
- **Narrow** — Term sits above its value in one column with the rules retained and group openers kept as heavier bands; identical source order.
- **Risk** — Long value strings can force two-dimensional scrolling at 320 CSS px, which is exactly the WCAG 1.4.10 reflow failure this register cannot afford — values must wrap rather than the sheet scrolling.
- **Variants** — Hairline paper · Navy inverted with emerald rules · Labels hung in the outer margin · Three-column with a unit column · Grouped by phase with heavy openers
- **Overlap** — N-03 deliverables ledger — that is a multi-column record with owner and week number; this is strictly a two-column definition list.
- **References** — darkroom.engineering, GOV.UK Design System index, Tailwind Plus spec blocks, Adrian Roselli Under-Engineered Responsive Tables
- **Tags** — `no-motion` `static` `contained` `density-high` `build-low` `budget-none` `rm-free` `text-integrity`

### SEC-161 · Expandable Engagement Table

`N` · user-driven · React-interactive · difficulty medium · **SELECTED**

A dense sortable table of past engagements whose header row is sticky only within the table's own bounds, and whose rows open in place into a detail panel rather than navigating away. Volume is carried without summarising it away or hiding it behind an accordion stack.

- **Distinct** — The reader reorders and drills without leaving their row; stickiness is scoped to the table rather than the viewport, which is a different spatial contract from a sticky-header page table.
- **Use** — Lets a sceptical buyer sort real past work by the axis they care about — duration, sector, outcome — and open the one that matches them.
- **Desktop** — Six columns across the contained width: engagement, sector, weeks, team shape, outcome figure, year. Sort affordances live in the header cells; an opened row's panel spans the full table width directly beneath it and carries two sentences plus one artefact thumbnail.
- **Motion** — The detail panel opens from zero to its intrinsic height while the row caret rotates; nothing else on the page moves.
- **Narrow** — The real table is kept intact inside a named, focusable, horizontally scrolling region, with the sticky first column retained — never reshaped into stacked records by overriding display properties.
- **Risk** — Reshaping a table into stacked records by overriding display properties removes table semantics in most screen readers, so the narrow form must either keep the real table inside a named focusable scroll region or be a second genuine rendering from one data source. The row control must be a real button inside a cell carrying aria-expanded, with the detail rendered as a companion row spanning the table — a details element cannot be placed in table row structure, and a caret with a click handler exposes no state.
- **Variants** — Sort by duration, sector or outcome · Expand-all control · Zebra rows versus hairline only · Navy header band · Artefact thumbnail inside the panel
- **Overlap** — F comparison sections — this compares nothing between options, it exhaustively lists one history.
- **References** — Tailwind Plus responsive feature comparison, MDN interpolate-size, Adrian Roselli Under-Engineered Responsive Tables, USWDS component status table
- **Tags** — `js-motion` `user-driven` `contained` `density-high` `build-medium` `budget-none` `rm-designed` `kbd-path` `semantics-fragile`

### SEC-162 · Deliverables Ledger

`N` · static · static · difficulty low · **SELECTED** · wave 1

Every deliverable in an engagement listed with format, owner, review cycle and week number, deliberately unsummarised. The refusal to condense is the argument: this is what you actually receive, in the order you receive it.

- **Distinct** — Content model rather than mechanism — a multi-field record per row with a real week number, which no definition list or feature grid can express.
- **Use** — Answers the buyer's real question — what lands on my desk, when, and who is accountable — before they have to ask it.
- **Desktop** — One wide title column and four narrow ones; week numbers ranged right in tabular numerals; a heavier rule every fourth row marks the sprint boundary, and the heading carries the raw count, e.g. forty-one deliverables across twelve weeks.
- **Narrow** — The week number becomes a leading hairline label above each record and the remaining fields stack as label-and-value pairs in source order.
- **Risk** — Long owner or format strings break the narrow columns and push the ledger into horizontal overflow; the fields must be authored to a character budget.
- **Variants** — Grouped by phase · Grouped by owner · Navy inverted · With a totals foot row · Formats written as words rather than glyphs
- **Overlap** — K process and timeline sections — a ledger is documentation with no sequence claim; a process asserts that step two depends on step one.
- **References** — Locomotive block vocabulary, Linear and Attio changelogs, USWDS component status table
- **Tags** — `no-motion` `static` `contained` `density-high` `build-low` `budget-none` `rm-free` `text-integrity`

### SEC-163 · Alphabetical Capability Index

`N` · user-driven · React-interactive · difficulty medium · **SELECTED** · wave 1

Every capability in one ungrouped alphabetical list with an instant keyword filter that dims non-matches in place with zero reflow, and a live result count written into the heading. Nothing moves; contrast alone does the filtering.

- **Distinct** — The zero-reflow rule is the concept — the reader keeps the whole surface area in view while narrowing it, which is a fundamentally different reading activity from a grid that re-lays.
- **Use** — Proves breadth at a glance and still lets a buyer confirm in two seconds that their specific need is named.
- **Desktop** — Four columns of hairline-small names filling the contained width, a single rule-underlined filter field above, and a heading that reads as a live sentence: sixty-eight capabilities, nine matching your term.
- **Motion** — Non-matching entries drop to a dim tint over about 150ms while matches hold full contrast; no item changes position.
- **Narrow** — Two columns, with the filter field pinned only to the top of the section rather than the viewport.
- **Risk** — The dimming has no non-visual equivalent, so the result count must live in a polite live region and dimmed entries must either keep contrast or be honestly removed from the accessibility tree.
- **Variants** — Dim in place · Remove and reflow with a layout transition · With an A–Z jump rail · Grouped under letter headings · Navy inverted · Grid of cards rather than a name list · Highlight the matched substring
- **Overlap** — N-09 search-first grid — there the input is the section's largest element and the heading rewrites into a sentence about the query; here nothing moves and nothing is restated.
- **References** — USWDS component index with live count, GOV.UK components index, The Component Gallery
- **Tags** — `css-motion` `user-driven` `contained` `density-high` `build-medium` `budget-none` `rm-free` `kbd-path`

### SEC-164 · Numbered Work Index

`N` · static · CSS-interactive · difficulty low · **SELECTED**

Every engagement as a numbered row carrying an outcome sentence and two metadata lines — sectors and disciplines — with no featured item and no hero treatment. Completeness is the argument and the metadata columns act as an implicit filter before any filter exists.

- **Distinct** — Deliberately refuses hierarchy: the absence of a featured row is the compositional decision, which separates it from every proof or case-study selection.
- **Use** — Answers how much work has been done and in what sectors, in one scroll, without asking the reader to trust a curated three.
- **Desktop** — Ordinals ranged left in mono, the outcome sentence as the row title at body-large, sector and discipline tags in hairline caps beneath, rows separated by hairlines with generous height so the density stays readable.
- **Motion** — Rows raise a single elevation step on hover or focus and the ordinal gains weight — a state change, not an entrance.
- **Narrow** — The ordinal moves inline before the title and the two metadata lines wrap; row height compresses but nothing is dropped.
- **Risk** — Built as a row of divs it loses list semantics and item enumeration entirely, so a screen-reader user cannot tell how many engagements exist — it must be a real ordered list.
- **Variants** — With a hover-swapped persistent media frame · With a year column · With an outcome figure ranged right · Navy inverted · Count stated in the heading
- **Overlap** — M proof and case-study sections — this indexes volume; those present evidence for one engagement.
- **References** — Obys numbered project index, Antinomy, Instrument, Adrian Roselli on card grids as lists
- **Tags** — `css-motion` `static` `contained` `density-high` `build-low` `budget-none` `rm-free` `semantics-fragile`

### SEC-165 · Delivery Status Matrix

`N` · sticky · CSS-interactive · difficulty medium · **SELECTED**

Engagement types as rows against delivery stages as columns, cells carrying short state words rather than glyphs, with a sticky first column and a legend held at the section head. The matrix answers a question no card grid can: what is included, where, right now.

- **Distinct** — Two intersecting axes inside one contained, named scroll region — the section's meaning lives in the crossing of row and column rather than in any single cell.
- **Use** — Shows a buyer exactly which stages of delivery each engagement model actually covers, and which it does not.
- **Desktop** — Seven rows by six columns at contained width, first column sticky within the region only, cells carrying two-word states, legend and footnotes reflowing outside the matrix so only the matrix itself ever scrolls.
- **Narrow** — The matrix keeps both axes inside its own focusable region while heading, legend and footnotes reflow around it — never converted to cards, which strands table semantics.
- **Risk** — A sticky header row plus a sticky first column is the most compositing-expensive dense form and is historically fragile in iOS Safari; without tabindex, a role and an accessible name on the region, later columns are unreachable by keyboard and switch users.
- **Variants** — State words · Hairline glyphs with a written legend · Zebra bands versus hairline only · Navy header band · Legend at the foot rather than the head
- **Overlap** — F decision-support matrices — this reports coverage as fact; a comparison matrix argues for a choice.
- **References** — USWDS component status table, Fluent 2 per-platform availability, Adrian Roselli Keyboard-Only Scrolling Areas, WCAG 1.4.10 Reflow
- **Tags** — `no-motion` `sticky` `contained` `density-high` `build-medium` `budget-none` `rm-free` `kbd-path` `semantics-fragile`

### SEC-166 · Federated Proof Wall

`N` · user-driven · GSAP-enhanced · difficulty medium · **RESERVE**

One dense wall aggregating evidence from several origins — client launches, open-source releases, internal tooling, published writing — each tile carrying a small source mark, filterable by source with the count updating in the heading. Provenance is what makes the density credible.

- **Distinct** — The unit is a source-marked record rather than a designed card, and the section's subject is the aggregate across origins, not any single item.
- **Use** — Shows a buyer that output is continuous and comes from more than client work, without flattening where each piece came from.
- **Desktop** — A tight six-column grid of small uniform tiles at wide width, each with a hairline caps source label in its corner and a one-line descriptor; a row of source names with their counts sits above as the filter.
- **Motion** — Filtered-out tiles fade out of flow while survivors travel to their new cells, so the reader sees where everything went rather than a re-render.
- **Narrow** — Three columns with the source row becoming a horizontal chip rail with visible partial overflow and real keyboard access.
- **Risk** — A Flip re-flow must preserve scroll position and announce the new count, or the reader is silently relocated; without absolute-on-leave handling the removed tiles cause a visible reflow jump.
- **Variants** — Source mark as word · Source mark as monogram · Source encoded in rule colour and label · Static unfiltered wall · Navy inverted
- **Overlap** — C filterable card grids — there the card's own content is the point; here the source provenance and the aggregate count are the subject.
- **References** — Storybook Composition refs with per-source titles, darkroom.engineering running log, Instrument and Unseen chip-filtered grids, GSAP Flip
- **Tags** — `gsap-core` `user-driven` `wide` `density-high` `build-medium` `budget-none` `rm-designed` `kbd-path`

### SEC-167 · Version Ledger With Sparklines

`N` · user-driven · React-interactive · difficulty medium · **RESERVE**

A dense reverse-chronological table of shipped periods where one narrow column carries a sparkline drawn at x-height, and rows expand in place to list what actually changed. The chart lives inside the row rather than beside the table.

- **Distinct** — Word-scale graphics inside a table row: the evidence and its shape occupy the same line, which is a different information model from a table plus a separate chart.
- **Use** — Proves continuous delivery with tempo visible, rather than presenting a curated highlight reel of three launches.
- **Desktop** — Date, label and a one-line summary across the contained width, with a short sparkline column ranged right; activating a row opens a compact changed-list beneath it in the same register.
- **Motion** — Each sparkline draws once as its row enters, then holds permanently; expansion animates height only.
- **Narrow** — The sparkline relocates beneath its summary line at full row width so it stays legible rather than shrinking to noise.
- **Risk** — The row control must be a real button inside a cell carrying aria-expanded, with the detail rendered as a companion row spanning the table — a details element cannot be placed in table row structure, and a caret with a click handler exposes no state. The sparkline must not be the row's only carrier of the change data. Animating to intrinsic height is not Baseline, so a measured path has to exist underneath.
- **Variants** — Tag-filterable dated log · No sparkline, pure ledger · Delta figure column instead of a spark · Grouped by quarter · Navy inverted
- **Overlap** — K timeline sections — a timeline argues about trajectory; this argues about cadence and stays a table.
- **References** — Linear and Attio changelogs, darkroom.engineering running log, W3C WAI complex images tutorial, GSAP DrawSVG
- **Tags** — `gsap-core` `user-driven` `contained` `density-high` `build-medium` `budget-none` `rm-designed` `semantics-fragile`

### SEC-168 · Search-First Result Grid

`N` · user-driven · React-interactive · difficulty medium · **RESERVE**

A large empty input set at display scale above an already-populated result grid; typing narrows the results live while the section heading rewrites itself to state the query. The input is the section's dominant typographic element, not a utility bar.

- **Distinct** — Inverts the usual filter relationship — the search field is the composition and the results exist before any input, so the reader's first act is to type rather than to scan.
- **Use** — Lets a buyer interrogate the whole body of work in their own words and immediately see the section describe their query back to them.
- **Desktop** — The input occupies roughly a third of the section height on a single hairline baseline; a dense text-forward result grid runs beneath it, and the heading becomes a sentence naming the count and the query.
- **Motion** — The heading swaps whole words rather than characters as the query changes, so the sentence rewrites without ever fragmenting.
- **Narrow** — Input full width at a reduced display size with results in one column; the rewritten heading sits directly above the results.
- **Risk** — A live-rewriting heading must go through a polite live region, and the rewrite must never split words into letters — Roselli's testing found most screen-reader and browser combinations fail on per-letter fragments.
- **Variants** — Prefilled query chips · Named empty state suggesting the nearest match · Heading rewrite disabled · Results as rows rather than tiles · Navy inverted
- **Overlap** — N-04 alphabetical index — that dims in place with no reflow and no restatement; here the result set and the heading both change.
- **References** — USWDS filtered index with live count, The Pudding editorial tab filters, Adrian Roselli on splitting words into letters, Typewolf browse-by axes
- **Tags** — `js-motion` `user-driven` `contained` `density-medium` `build-medium` `budget-none` `rm-free` `kbd-path` `text-integrity`

### SEC-169 · Badge-Annotated Capability List

`N` · static · static · difficulty low · **SELECTED**

A grouped text list where each item carries an inline lifecycle badge — active, by referral only, waitlist, retired — with retired items struck through and left in place rather than deleted. Honesty about what is not on offer is the section's credibility device.

- **Distinct** — The badge carries a judgement the reader would otherwise have to ask for, and keeping retired items visible is a content decision no ordinary capability list makes.
- **Use** — Prevents a buyer from enquiring about something that is closed, and signals a practice with a point of view about what it has stopped doing.
- **Desktop** — Two columns of grouped items at contained width; the badge sits trailing in the gutter as hairline caps inside a tinted rule, retired lines struck through with the live alternative named beside them.
- **Narrow** — The badge moves beneath its item as a hairline label so the item name never truncates to make room for it.
- **Risk** — Badge meaning carried by colour alone fails for colour-blind readers, and a strikethrough is purely visual — both need a written state word in the same line.
- **Variants** — Leading badge · Trailing badge in the gutter · State encoded in rule colour plus word · Retired items split into their own band · Counts per state in the heading
- **Overlap** — L before-and-after — the struck line here is a permanent published state, not a transition the reader watches.
- **References** — Atlassian deprecated category, USWDS deprecated and retired states, storybook-addon-tag-badges, Primer status page
- **Tags** — `no-motion` `static` `contained` `density-medium` `build-low` `budget-none` `rm-free` `text-integrity`

### SEC-170 · Task-Stem Grouped Index — MERGE → SEC-013

> **Merged into SEC-013.** Same task-stem index; the claimed distinction is one the reader cannot perform. Its distinguishing material now lives in SEC-013's variants. The permanent id is retained so numbering never shifts.

`N` · static · static · difficulty low

Capabilities grouped under sentence fragments — help you to, ask us about, we no longer — with the stem set enormous and the items hairline-small beneath, so the list reads as prose completing itself rather than as a taxonomy.

- **Distinct** — The organising grammar is the composition: grouping by what the reader is trying to do, at a scale contrast of roughly six to one, changes both what the section says and how it is read.
- **Use** — Organises services by the buyer's intent rather than by internal discipline names they have no reason to know.
- **Desktop** — Three stems stacked down the section, each occupying two display lines on the left, with its items set tiny in two tight columns to the right so each group reads as one completed sentence with a footnote.
- **Motion** — Items batch-reveal per stem group as each group enters, once, with the stems already present.
- **Narrow** — The stem drops to two lines above its items and the items run in a single column, keeping the grammatical completion intact.
- **Risk** — The scale contrast is the design, so the small items must still meet minimum body size at 200% zoom rather than being sized relative to the stem.
- **Variants** — Three stems · Five stems · Stems written as questions · Stems in the display serif, items in mono · Items carrying a metric each
- **Overlap** — A editorial typography — there the type is the subject; here the grammar of the index is, and the type serves it.
- **References** — GOV.UK patterns grouped under three task stems, Klim specimen scale contrast, Obys
- **Tags** — `scroll-css` `static` `contained` `density-medium` `build-low` `budget-none` `rm-free` `text-integrity`

### SEC-171 · Coverage Census Grid

`N` · scroll-driven · scroll-driven · difficulty medium · **SELECTED**

One small square per capability filling in as the section is read, with a sticky legend and a running count — breadth proved by area rather than claimed by a list. The reader sees the shape of what is covered before reading a single label.

- **Distinct** — Encodes quantity as filled area on a fixed field, which is a different information model from any list, table or index of the same facts.
- **Use** — Answers whether a practice can actually cover a whole programme in-house, and states plainly where it partners instead.
- **Desktop** — A ten-column field of small squares fills the left two-thirds; the legend and the running figure sit in a sticky right column stating in-house against partnered counts, each square labelled on hover or focus.
- **Motion** — Squares fill in reading order as the section crosses the viewport, once, then hold permanently.
- **Narrow** — The field becomes six wider squares per row with the legend above it, and the running figure counts once rather than tracking scroll.
- **Risk** — The grid is a complex image whose meaning is carried entirely by fill state — the same counts must be present as text, or the section says nothing under reduced motion or to a screen reader. Making several hundred squares individually focusable creates a tab sequence a keyboard reader cannot escape, and hover labelling has no touch equivalent — the squares must be one decorative field with the labels published as a written list beside it. The grid is a complex image whose meaning is carried entirely by fill state, so the same counts must be present as text.
- **Variants** — Fills on entry · Fully filled static · Squares carrying capability initials · In-house and partnered split by tint and pattern · Navy inverted · Squares by sector with a colour key · Squares by engagement
- **Overlap** — Q motion-led composition — the fill here reports data as it is read, rather than motion being the section's subject.
- **References** — USWDS status matrix, W3C WAI complex images tutorial, GSAP ScrollTrigger.batch, Locomotive team census counts
- **Tags** — `scroll-css` `scroll-driven` `contained` `density-medium` `build-medium` `budget-none` `rm-designed` `motion-sensitive` `semantics-fragile`

## O — Media, image and video

### SEC-172 · Poster-First Proof Reel

`O` · static · React-interactive · difficulty medium · **SELECTED**

A video band whose resting state is a real deliverable still — a schedule page, a workshop board — set at full plate size and captioned with what it was for. Nothing loads until the reader engages, so the section costs a poster and reads as evidence rather than as a brand film.

- **Distinct** — Reader activity: the section is a still artefact until an explicit control is pressed, so playback is opt-in rather than ambient.
- **Use** — Shows a buyer real work in motion without asking them to sit through anything they did not choose.
- **Desktop** — One wide plate carrying the poster, a hairline control row beneath it holding play, pause, duration and a caption; the heading sits above at the measure so the plate is the largest thing in view.
- **Motion** — Nothing plays until the reader presses the control; the plate is a still artefact until then, and pressing again returns it to the poster.
- **Narrow** — Same plate at full width with the control row stacked beneath, and the poster alone where the connection is metered.
- **Risk** — Playback is opt-in, so nothing may start on scroll. Default preload is metadata, so bytes are spent before anyone engages — preload must be none, and the poster needs high fetch priority if it is the LCP candidate. If an auto-start variant is ever built it must be muted, must stop under reduced motion and Save-Data, and anything running beyond five seconds needs a persistent pause control under WCAG 2.2.2.
- **Variants** — Deliverable-still poster · Navy plate with emerald control rule · Chaptered control row · Captions on by default
- **Overlap** — M proof and case study — there a clip is one exhibit among several; here the clip is the whole section.
- **References** — web.dev 'Lazy-loading video', Magic UI Hero Video Dialog (a11y issue), Tailwind Plus media sections
- **Tags** — `js-motion` `static` `wide` `density-low` `build-medium` `budget-none` `rm-designed` `kbd-path` `motion-sensitive`

### SEC-173 · Transcript-Led Clip

`O` · static · React-interactive · difficulty medium · **SELECTED**

The clip sits on one side and a timestamped transcript on the other, set as readable editorial type rather than a caption dump. The transcript is the section's actual content: skimmable, quotable and indexable whether or not anyone presses play.

- **Distinct** — The relationship between the content inverts — text is primary and the video illustrates it, rather than the transcript being an accessibility afterthought.
- **Use** — Lets a buyer extract the substance of a client conversation in twenty seconds instead of watching six minutes.
- **Desktop** — Video plate on the left at roughly two fifths; a transcript column on the right scrolling inside its own bounded, named region, timestamps hanging in the gutter and the active line marked by a rule. Activating a timestamp seeks the clip.
- **Motion** — The active transcript line takes a hairline marker and is scrolled into view; nothing else moves.
- **Narrow** — Plate on top at full width, transcript beneath in normal page flow with its own scroll region removed so it reads as ordinary prose.
- **Risk** — A bounded scrolling transcript is unreachable by keyboard and switch users unless it is focusable, named and given a region role — Safari has no native keyboard access to scroll areas at all.
- **Variants** — Two-column client interview · Transcript-first with small thumbnail · Highlighted pull-quote lines · Chapter-grouped transcript
- **Overlap** — N dense information — a transcript is dense text, but this concept exists to bind that text to a timeline.
- **References** — Adrian Roselli 'Keyboard-Only Scrolling Areas', web.dev 'Lazy-loading video', W3C WAI complex images guidance
- **Tags** — `js-motion` `static` `contained` `density-high` `build-medium` `budget-none` `rm-free` `kbd-path`

### SEC-174 · Un-Cropping Clip

`O` · scroll-driven · GSAP-enhanced · difficulty medium · **RESERVE**

A muted clip begins as a narrow letterbox slot inside the measure and opens outward to full width across its entry range; only once it has finished opening does it start playing. The opening is the section's punctuation.

- **Distinct** — Motion logic: the frame's geometry changes while the media inside stays still, and playback is gated on the geometry finishing rather than on visibility.
- **Use** — Gives one piece of footage a genuine arrival without pinning or capturing scroll.
- **Desktop** — A thin slot sitting between two measured paragraphs; as the section enters, the slot grows in height and width to full-bleed while the caption stays inside the measure beneath it.
- **Motion** — Frame geometry scrubs open across the entry range, then playback begins and the scrub is finished with.
- **Narrow** — Opens in height only, from a thin band to a standard plate, never exceeding the viewport width.
- **Risk** — Scrubbing width and height forces layout on every tick — the open must be authored on transform or clip geometry, and reduced motion should render the clip already open showing the poster.
- **Variants** — Letterbox to full-bleed · Slot to contained plate · Clip-path aperture open · Poster-only opening, no video
- **Overlap** — P-08 interrupting bleed band — there the width is fixed by the composition; here the width change is the event.
- **References** — GSAP 'Image Mask On Scroll', Codrops clip-path reveal demos, web.dev 'Lazy-loading video'
- **Tags** — `gsap-core` `scroll-driven` `full-bleed` `density-low` `build-medium` `budget-none` `rm-designed` `motion-sensitive`

### SEC-175 · Sticky-Caption Figure

`O` · sticky · scroll-driven · difficulty medium · **SELECTED**

A tall photograph or long document scan travels inside a held frame as the section is read, while the caption stays anchored at the frame's foot and rewrites itself as different regions of the image pass.

- **Distinct** — Spatial behaviour: the media moves relative to a fixed frame and the caption becomes a running commentary rather than a single label.
- **Use** — Lets one long artefact — a full schedule, a whole report page — be shown at readable scale and explained region by region.
- **Desktop** — A frame occupying about two thirds of the viewport height, centred in the measure; the image travels upward inside it, with a hairline caption bar fixed at its base carrying one sentence at a time.
- **Motion** — Image offset tracks section progress while the caption line swaps at declared thresholds rather than cross-fading continuously.
- **Narrow** — A shorter frame with the image stepping through three named regions instead of travelling continuously, caption still fixed at the foot.
- **Risk** — Sizing the frame in viewport units makes it resize mid-scroll on mobile as the toolbar retracts, since dynamic viewport units are throttled — height must come from content.
- **Variants** — Document scan with region captions · Tall photograph, single caption · Two frames side by side · Ruled caption bar on navy
- **Overlap** — J pinned and multi-part scroll — this holds nothing of the page; only the media moves inside a normal-flow frame.
- **References** — Gwern sidenote survey, Storybench NYT scrollytelling interview, web.dev 'The large, small, and dynamic viewport units'
- **Tags** — `scroll-css` `sticky` `contained` `density-medium` `build-medium` `budget-none` `rm-designed`

### SEC-176 · Re-Cropping Argument

`O` · swap-in-place · GSAP-enhanced · difficulty medium · **RESERVE**

One photograph is re-framed four times — the room, then a pair of hands, then the document on the table, then a single line on it — with a numbered rail naming what each crop is evidence of. The image never changes; only the argument about it does.

- **Distinct** — Hierarchy and reader activity: a single asset carries four claims through framing, so the section has one image and four points rather than four images.
- **Use** — Proves several things from one honest photograph, which is the situation most service businesses are actually in.
- **Desktop** — A large plate on the left at roughly two thirds; a numbered rail of four short claims on the right with the active one ruled. Selecting a claim travels the crop.
- **Motion** — The crop travels and scales between framings so the reader sees the move rather than a cut.
- **Narrow** — Plate on top, claims as a snapped numbered strip beneath, crop still travelling on selection.
- **Risk** — A crop change is invisible non-visually, so the rail must be real buttons and each claim must state its own evidence in text rather than relying on the image.
- **Variants** — Four-crop close read · Two-crop framing comparison · Auto-advance at scroll thresholds · Split plate showing two crops at once
- **Overlap** — L before and after — nothing about the artefact changes here, only the framing.
- **References** — GSAP Flip documentation, Tailwind-library re-crop pattern (Flip on object-position), W3C WAI complex images
- **Tags** — `gsap-core` `swap-in-place` `contained` `density-low` `build-medium` `budget-none` `rm-designed` `kbd-path`

### SEC-177 · Brand-Geometry Mask Reveal

`O` · scroll-driven · GSAP-enhanced · difficulty high · **SELECTED**

A full-bleed still is uncovered through a mask built from the studio's own geometry — the counter of a letterform, one module of the layout grid — rather than a generic wipe. The shape is the brand's, so the reveal cannot be borrowed.

- **Distinct** — The mask geometry is authored content rather than a transition preset, which makes the section a signature moment used once per page.
- **Use** — Gives one flagship piece of work a moment of ceremony without a pin or a page transition.
- **Desktop** — The image is present but occluded, visible only through a small brand-shaped aperture centred in the band; the aperture grows across the entry range until the image is fully exposed, with one caption line beneath at the measure.
- **Motion** — The mask geometry scales open once on entry and never replays.
- **Narrow** — The same shape opens from a smaller start, or the image renders fully exposed where motion is reduced.
- **Risk** — An occluded resting state means the image is invisible before the animation runs — the exposed state must be the default and the mask applied only where support and motion preference allow.
- **Variants** — Logotype counter aperture · Grid-module blind mask · Single-slat editorial wipe · Two-shape sequential open
- **Overlap** — L state change — there two states are compared; here one image simply arrives.
- **References** — Codrops 'SVG Mask Transitions on Scroll', Codrops 'Pinned Image Mask Reveal', GSAP 'Image Mask On Scroll'
- **Tags** — `gsap-core` `scroll-driven` `full-bleed` `density-low` `build-high` `budget-none` `rm-designed` `motion-sensitive`

### SEC-178 · Ordered Plate Gallery

`O` · static · static · difficulty low · **RESERVE**

A gallery with a declared reading order: plates are numbered in the margin, sized by significance, and each carries one sentence saying what to notice. The order is stated rather than implied by position, so the set argues instead of decorating.

- **Distinct** — Hierarchy — a reading order and a per-plate instruction are authored into the gallery, turning a wall of images into a sequence.
- **Use** — Walks a buyer through a body of work in the order that makes the case rather than leaving them to guess.
- **Desktop** — Six plates on a shared baseline alternating between one measure-width plate and a pair of half-width plates; ordinals hang in the outer margin and captions sit small beneath each plate.
- **Narrow** — One plate per row in the same source order, the ordinal moving inline above each caption.
- **Risk** — Six plates at mixed portrait and landscape proportions each need a declared intrinsic size or the composition shifts as images decode, and the authored ordinal must be real text since the reading order is the concept.
- **Variants** — Numbered margin ordinals · Ruled caption ledger · Navy plate field · Mixed portrait and landscape rhythm · Six-plate and three-plate lengths
- **Overlap** — D asymmetric grids — there cell size encodes importance across mixed content; here every cell is media and the ordinal, not the size, carries the sequence.
- **References** — Tailwind Plus gallery grids, Preline Gallery Grids, Bisous four-column editorial grid
- **Tags** — `no-motion` `static` `contained` `density-medium` `build-low` `budget-none` `rm-free`

### SEC-179 · Annotated Artefact Plate — MERGE → SEC-144

> **Merged into SEC-144.** Same annotated plate; differs only in where the open note sits. Its distinguishing material now lives in SEC-144's variants. The permanent id is retained so numbering never shifts.

`O` · user-driven · React-interactive · difficulty medium

One large real deliverable — a plan page, a dashboard export — carrying numbered hotspots. Activating a hotspot opens its note beside the mark with a leader rule, and the same notes are written out beneath so the section reads correctly with the image ignored.

- **Distinct** — Reader activity: the reader interrogates a single artefact at their own pace instead of being walked through it.
- **Use** — Turns 'we do thorough work' into something a buyer can actually inspect.
- **Desktop** — The plate occupies most of the width with generous margin; small numbered markers sit on it and one open note at a time appears anchored to its marker, the plate itself never moving.
- **Motion** — The note opens with a short height and opacity change and nothing else in the section responds.
- **Narrow** — Markers stay on the plate but activating one scrolls the matching numbered note in the list beneath into view instead of overlaying the image.
- **Risk** — Complex-image guidance requires a short identifier plus a genuine long description — the written note list is that description and must never be collapsed behind the hotspots. Hotspot markers on a plate at phone width fall below minimum target size and cannot be reliably separated by touch, so the markers move off the plate into a numbered list beneath it at narrow width.
- **Variants** — Redacted client document · Dashboard export with five notes · Plan page with leader rules · Dark plate with emerald markers
- **Overlap** — R interactive relationship — hotspots relate notes to one image, not things to each other.
- **References** — W3C WAI Images Tutorial (Complex Images), Magic UI a11y issue on div click handlers, Preline Case Studies
- **Tags** — `js-motion` `user-driven` `contained` `density-medium` `build-medium` `budget-none` `rm-free` `kbd-path` `semantics-fragile`

### SEC-180 · Column-Lag Gallery — MERGE → SEC-049

> **Merged into SEC-049.** Identical column-indexed lag mechanism, differing only in host content. Its distinguishing material now lives in SEC-049's variants. The permanent id is retained so numbering never shifts.

`O` · scroll-driven · GSAP-dependent · difficulty medium

A three or four column field of work images where adjacent columns travel at slightly different rates as the section passes and settle with a soft overshoot when scrolling stops. The lag reads as material behaviour rather than as an effect.

- **Distinct** — Motion logic: offset is indexed by column rather than applied per item, so the field behaves as one surface however many images it holds.
- **Use** — Shows breadth of delivered work in a single view without asking anyone to click.
- **Desktop** — Columns of unequal-height plates fill the page edge to edge, the outer columns trailing the centre by a few percent of the section's travel; no captions, no chrome, just the field.
- **Motion** — Column offsets follow scroll with a short easing tail so the field settles rather than stopping dead.
- **Narrow** — Below the tablet width the lag is removed entirely and the field becomes a plain stacked gallery — narrow scrolling is faster per pixel, so a reduced offset reads as instability rather than as material behaviour.
- **Risk** — Several planes moving at different rates is exactly what WCAG 2.3.3 names, with documented nausea — the offset must be removed entirely under reduced motion, not slowed.
- **Variants** — Three-column outward lag · Centre-leading four columns · Velocity-scaled overshoot · Composed static grid as the reduced-motion form
- **Overlap** — Q motion-led composition — the motion here is a modifier on a media field whose subject is the work itself.
- **References** — Codrops 'Elastic Grid Scroll', Codrops 'Infinite Parallax Grid', Aceternity Parallax Grid Scroll
- **Tags** — `gsap-core` `scroll-driven` `full-bleed` `density-high` `build-medium` `budget-none` `rm-designed` `motion-sensitive`

### SEC-181 · Tilted Artefact Plates

`O` · layered · CSS-interactive · difficulty low · **RESERVE**

Real deliverables — a deck page, a schedule, a report cover, a device mock — shown as physical plates lying at slight angles on a shared field. Hovering or focusing one straightens it and lifts it clear of the others. Stillness is the resting state.

- **Distinct** — Interaction: the plates' resting geometry is deliberately off-true and the reader's attention is what corrects it, so nothing moves unbidden.
- **Use** — Makes deliverables look like objects a buyer would receive rather than screenshots of a website.
- **Desktop** — Four to six plates at true document proportions overlapping slightly across the full width, each captioned with the decision it was made for; the raised plate gains one elevation step and its caption gains weight.
- **Motion** — A short rotate-to-true and lift on hover or focus, well under a quarter second, with no idle animation anywhere.
- **Narrow** — Plates stack vertically at their angle with no overlap; tapping straightens and raises one, tapping again releases it.
- **Risk** — Hover-only affordances have no touch equivalent and no keyboard path — the straighten must bind to focus and the plates must be real focusable elements, not divs with handlers. Rotated plates overflow horizontally at narrow and intermediate widths and throw captions off the horizontal, so the angle must reduce to zero below the tablet width or the plates must be clipped at the section. Hover-only affordances have no touch equivalent — the straighten must bind to focus and the plates must be real focusable elements.
- **Variants** — Overlapping paper plates · Device mock trio · Torn-edge scan treatment · Navy field with paper plates · Single hero plate with two behind
- **Overlap** — I stacked and overlapping cards — those are related by sequence or depth; these are separate objects that merely share a field.
- **References** — Rauno Freiberg's Web Interface Guidelines (hover gating), Aceternity Macbook Scroll and Container Scroll, Locomotive device-mockup block vocabulary
- **Tags** — `css-motion` `layered` `wide` `density-medium` `build-low` `budget-none` `rm-designed` `kbd-path`

## P — Breakout, full-bleed and layered

### SEC-182 · Three-Position Breakout Ladder

`P` · static · static · difficulty low · **SELECTED** · wave 1

A measured column sits inside a wide named-line grid with exactly three declared escape positions — margin, half-bleed, full-bleed. Every figure lands on one of the three, so breakouts read as a system rather than as a run of one-off widths.

- **Distinct** — Implementation model and hierarchy: width becomes a small closed vocabulary, and emphasis is expressed by which step a figure takes.
- **Use** — Lets a long service explanation carry figures of very different importance without the page losing its measure.
- **Desktop** — A roughly 65-character prose column down the middle of a wide grid; a margin-width diagram, then a half-bleed artefact plate, then one full-bleed image, with every caption returning inside the measure.
- **Narrow** — The three positions collapse to two — measure and full-bleed — with the margin figure becoming an inline aside at full measure.
- **Risk** — Negative margins inside a padded wrapper do not compose, because each breakout has to know its ancestor's padding; the escape positions must be real grid lines.
- **Variants** — Symmetric margin ladder · Right-margin-only ladder · Rule-marked escape positions · Navy full-bleed step
- **Overlap** — A editorial and typography-led — there the type is the composition; here the width system is.
- **References** — Josh W. Comeau 'Full-Bleed Layout Using CSS Grid', Gwern margin figures, Tufte-CSS
- **Tags** — `no-motion` `static` `breakout` `density-medium` `build-low` `budget-none` `rm-free`

### SEC-183 · Single-Edge Bleed Rhythm

`P` · static · static · difficulty low · **SELECTED**

Artefacts run off one page edge only and alternate sides down the section, so the page edge itself becomes the rhythm. Each bleeding plate is paired with a short caption stack set hard against the opposite margin.

- **Distinct** — Composition: the bleed is asymmetric and repeated, making cropping a structural device rather than a one-off emphasis.
- **Use** — Gives a long run of work or capability rows momentum without turning each row into an identical card.
- **Desktop** — Three or four rows; in each, a plate begins inside the grid and runs past one viewport edge while its caption sits in the opposite margin. The alternation is strict, never decorative.
- **Narrow** — The bleed keeps to a single side throughout — alternating a small bleed at phone width reads as a mistake — with captions beneath each plate.
- **Risk** — One-sided overflow is the classic cause of horizontal document scroll; the bleed has to be clipped at the section rather than left to the page.
- **Variants** — Left-right alternating plates · Right-only bleed run · Bleeding plate with margin ordinals · Display type bleeding instead of image
- **Overlap** — E split and side-by-side — there two regions relate inside the grid; here the relationship is to the page edge.
- **References** — Obys dense/calm editorial alternation, Bisous four-column editorial grid, Preline Service Listing Section
- **Tags** — `no-motion` `static` `breakout` `density-medium` `build-low` `budget-none` `rm-free`

### SEC-184 · Single Statement Band

`P` · static · static · difficulty low · **RESERVE**

One sentence at display scale on a full-bleed colour field, balance-wrapped, with a single accent word in a contrasting cut and nothing else in the band — no eyebrow, no button, no image. Used exactly once on a page.

- **Distinct** — Width and surface are the entire composition, and its value depends on scarcity, which makes it a page-level device rather than a repeatable block.
- **Use** — Delivers the one thing the business most wants remembered, at the point in the page where the reader has earned it.
- **Desktop** — The band fills the viewport width and about half its height; the sentence hangs on two or three grid columns rather than centring, with deliberate emptiness above and below.
- **Narrow** — The same band with type dropping to the top of the fluid display scale and the sentence re-wrapping to four or five lines, accent word intact.
- **Risk** — Repeated full-bleed display statements exhaust the device — by the third the reader stops reading them, so the entry must carry a once-per-page rule.
- **Variants** — Emerald field with paper type · Paper field with navy type · Hairline-ruled band · Sentence hung right
- **Overlap** — P-08 — that band interrupts and returns to a measure; this one is a standalone act with no host column.
- **References** — Locomotive positioning statement, Awwwards Typography Honors entries, Codrops chapter plates
- **Tags** — `no-motion` `static` `full-bleed` `density-low` `build-low` `budget-none` `rm-free` `surface-critical`

### SEC-185 · Sentence Cut By The Fold

`P` · static · static · difficulty medium · **SELECTED**

Two stacked full-bleed bands share one continuous background, and a single headline is split across the seam — the first half at the foot of the upper band, the completion at the head of the lower. The reader has to scroll to finish the sentence.

- **Distinct** — Spatial behaviour: the fold is used as punctuation, so the composition is authored against the viewport rather than against the container.
- **Use** — Makes one claim land as a turn rather than a statement, which suits any argument whose pay-off is a reframing.
- **Desktop** — The upper band ends on an incomplete clause with substantial space beneath it; the lower band opens with the completion, the shared field or photograph running unbroken across the join.
- **Narrow** — The split moves to a clause break that fits a phone viewport, with both halves keeping the shared background so the continuity survives.
- **Risk** — The complete sentence must exist as one element in source order, or assistive technology and reader modes receive two unrelated fragments.
- **Variants** — Continuous photograph across the seam · Flat colour field · Rule crossing the seam · Three-band version with two cuts
- **Overlap** — A editorial and typography-led — the device here is the viewport boundary, not the type system.
- **References** — Awwwards full-bleed typographic entries, Obys editorial rhythm, Codrops chapter plate demos
- **Tags** — `no-motion` `static` `full-bleed` `density-low` `build-medium` `budget-none` `rm-free` `text-integrity` `surface-critical`

### SEC-186 · Widening Stair

`P` · static · static · difficulty low · **RESERVE**

A stepped sequence in which each step sits in a wider container than the last — measure, contained, wide, then full-bleed — so the reader physically feels the argument opening out. Width carries the ordering.

- **Distinct** — Width is used as sequence rather than as emphasis; each step only means anything relative to the one before it.
- **Use** — Suits an argument that moves from a narrow specific to a broad consequence — one project, one practice, one market.
- **Desktop** — Four blocks stacked down the page, each left-aligned on the same start line so the growth is visible on the right edge alone, finishing on a full-bleed plate or statement.
- **Narrow** — The stair collapses to two widths and the ordering is carried instead by an ordinal in each block's head.
- **Risk** — Below the tablet width every step is effectively full width, so the concept's only signal disappears unless the ordinal fallback is authored rather than added later.
- **Variants** — Left-anchored stair · Centred symmetric stair · Narrowing stair (inverted) · Rule marking each step edge
- **Overlap** — P-01 breakout ladder — the ladder is a vocabulary used in any order; the stair is monotonic and its order is the point.
- **References** — Josh W. Comeau full-bleed grid, Obys dense/calm alternation, Ahmad Shadeed 'The Too Early Breakpoint'
- **Tags** — `no-motion` `static` `breakout` `density-medium` `build-low` `budget-none` `rm-free`

### SEC-187 · Bounded Depth Frame

`P` · layered · scroll-driven · difficulty medium · **RESERVE**

Three planes — ground, subject and caption — move at slightly different rates as the section passes, with offsets deliberately small enough that no caption ever separates from the thing it names. Depth without drift.

- **Distinct** — The constraint is the concept: plane offsets are bounded by the caption's relationship to its subject rather than chosen for effect.
- **Use** — Gives an artefact-led section physical presence on a page that is otherwise flat, without spending a pin.
- **Desktop** — A full-bleed ground plate, a single artefact plate over it at about two thirds width, and a caption block overlapping the artefact's lower corner; each moves a few percent relative to the others across the section's pass.
- **Motion** — Small vertical offsets tied to section progress, with the caption plane moving least so it stays legible against its subject.
- **Narrow** — All three planes collapse to a single static composition below the tablet width — the offsets have no room to read there.
- **Risk** — WCAG 2.3.3 names parallax explicitly with documented nausea and migraine; under reduced motion the offsets must be removed entirely, not slowed.
- **Variants** — Ground, subject, caption · Type foreground over artefact · Grid-rule ground plane · Two-plane restrained version
- **Overlap** — P-10 — that builds depth from colour and blur with nothing moving; this one moves and therefore carries the vestibular cost.
- **References** — GSAP data-speed parallax planes, Codrops 'Layered Zoom Scroll', W3C Understanding 2.3.3
- **Tags** — `scroll-css` `layered` `full-bleed` `density-low` `build-medium` `budget-none` `rm-designed` `motion-sensitive`

### SEC-188 · Converging Planes

`P` · scroll-driven · GSAP-enhanced · difficulty medium · **RESERVE**

Caption, subject and ground begin visibly separated in depth and resolve into a single flat plane by the section's end, so the depth has a destination instead of drifting ambiently for as long as the section is on screen.

- **Distinct** — Motion logic: the depth is a finite gesture with a resting state, so the reader takes arrival from it rather than atmosphere.
- **Use** — Ends a proof or capability section on a composed still image the reader can sit with.
- **Desktop** — The three planes enter offset and rotated a degree or two apart across a full-bleed field; by the time the section's foot reaches the viewport they are aligned into one artefact with its caption locked beneath it.
- **Motion** — Offsets and the small rotations resolve to zero across the section's own range and then hold.
- **Narrow** — Below the tablet width the concept is not present — the section renders as the converged composition with a short opacity settle, which is an ordinary entry animation rather than this concept.
- **Risk** — Multi-plane movement is a vestibular trigger; the reduced-motion path must be the converged end state from first paint, not a shortened version of the move.
- **Variants** — Three-plane convergence · Rotation-only resolve · Convergence onto a device plate · Convergence into a full-bleed statement
- **Overlap** — P-06 — bounded depth never resolves and is ambient by design; this one has an end state.
- **References** — Codrops 'Layered Zoom Scroll', Uncommon Studio camera-move transitions, W3C Understanding 2.3.3
- **Tags** — `gsap-core` `scroll-driven` `full-bleed` `density-low` `build-medium` `budget-none` `rm-designed` `motion-sensitive`

### SEC-189 · Interrupting Bleed Band

`P` · static · static · difficulty low · **RESERVE**

A measured editorial column is interrupted by a band running the full viewport width that carries one thing — a single image or a single display-scale line — before the column resumes at exactly the same measure.

- **Distinct** — The concept is the interruption and the return: it only exists relative to a maintained measure, which makes it host-dependent rather than a standalone band.
- **Use** — Places a piece of proof at the precise sentence in an argument where it is needed, at a scale the argument itself cannot reach.
- **Desktop** — Prose at the measure, then the band breaking out edge to edge with no caption and no chrome inside it, then the prose continuing. The band's height comes from its content, never from the viewport.
- **Narrow** — At phone width the width difference is too small to register as an interruption, so the band is marked by a surface change and rules at its edges rather than by width alone.
- **Risk** — Used more than once or twice on a page the interruption stops registering, because breakout only means anything against a maintained measure.
- **Variants** — Single image band · Single display line band · Colour-field band with no content · Band with caption set back in the measure
- **Overlap** — P-03 statement band — that is a standalone act; this is punctuation inside a column that continues.
- **References** — Josh W. Comeau full-bleed grid, Obys editorial rhythm block, Preline content showcases
- **Tags** — `no-motion` `static` `full-bleed` `density-low` `build-low` `budget-none` `rm-free`

### SEC-190 · Chrome-Less Artefact Window

`P` · swap-in-place · React-interactive · difficulty high · **SELECTED**

A calm grid of artefact plates where activating one hands it the entire window — no header, no surrounding page, nothing but the artefact, one close control and a caption — and closing returns the reader to their exact scroll position and the plate they came from.

- **Distinct** — Spatial contract and implementation model: the section briefly becomes the whole viewport, which is different from an in-place expansion or a modal card.
- **Use** — Lets a buyer actually read a deliverable at full size without navigating away from the argument that framed it.
- **Desktop** — Four to six plates on a plain field, each with a small open-full affordance; the open state shows the artefact at native proportions with a single close control and one caption line at the foot.
- **Motion** — The plate travels and scales from its grid cell into the full window and back into the same cell on close.
- **Narrow** — The same full-window state entered from a single-column list, with close returning to the originating row.
- **Risk** — A chrome-less overlay must trap and restore focus, close on Escape and restore scroll exactly, or the reader is dumped at the top of the page with no orientation. Because the overlay occupies the whole window it is a modal dialog and must be built as one — dialog semantics, an accessible name, the background rendered inert, focus trapped and restored to the originating plate, Escape closing, and scroll position restored exactly.
- **Variants** — Full-window document viewer · Image with caption rail · Zoomable plan view · Dark-field viewer
- **Overlap** — C and D grid-to-detail expansion — those expand within the section; this replaces the window and must restore position.
- **References** — shadcn full-page block previews, Storybook Issue #5598 (scroll position on switch), GSAP Flip documentation
- **Tags** — `js-motion` `swap-in-place` `full-bleed` `density-medium` `build-high` `budget-none` `rm-designed` `kbd-path`

### SEC-191 · Depth Without Movement

`P` · layered · static · difficulty low · **SELECTED**

A layered composition whose depth comes entirely from colour, opacity and blur — a receded ground tint, a mid plane at reduced contrast, a foreground at full strength — with nothing positioned differently as the page scrolls.

- **Distinct** — Mechanism: depth is built from optical properties rather than relative motion, which removes the vestibular cost and makes the section identical under reduced motion.
- **Use** — Gives a heavy proof or statement section real depth on a page that has already spent its motion budget elsewhere.
- **Desktop** — A full-bleed field carrying three overlapping planes — a soft blurred ground, an artefact plate behind at slightly reduced contrast, and the sharp foreground plate with its caption — all sharing one baseline grid.
- **Narrow** — The same three optical layers with reduced overlap so the sharp plane never sits over text.
- **Risk** — A large blurred surface is cheap only while it is still — this composition must not be combined with sticky or scroll-linked layers, where the blur is recomposited every frame.
- **Variants** — Blurred ground plate · Tonal-step depth with no blur · Emerald wash mid plane · Two-plane restrained version
- **Overlap** — P-06 bounded depth frame — same three-plane vocabulary, but nothing here moves, so the reduced-motion story and the risk profile are entirely different.
- **References** — W3C Understanding 2.3.3 (colour, opacity and blur excluded), Studio Meyer glassmorphism FPS findings, Obys layered editorial compositions
- **Tags** — `no-motion` `layered` `full-bleed` `density-low` `build-low` `budget-none` `rm-free` `surface-critical`

## Q — Motion-led composition

### SEC-192 · Centre-Out Grid Arrival

`Q` · static · GSAP-enhanced · difficulty medium · **RESERVE**

A regular capability grid arrives as one composed event: a single grid-aware stagger radiating outward from the centre cell in rings, so the reader sees a shape being placed rather than nine unrelated animations firing as they cross a line.

- **Distinct** — The motion logic is the concept — one batched trigger with a spatial stagger origin encoding the grid's geometry, not a per-item reveal repeated nine times.
- **Use** — Makes a breadth-of-capability grid feel deliberate and finished rather than a list that keeps loading in.
- **Desktop** — A 3x3 of hairline-ruled tiles at container width; the centre cell carries the summarising claim and lands first, the eight surrounding cells follow in one outward ring.
- **Motion** — One batched entry — short rise and opacity only, ring-ordered from centre, played once and never replayed on scroll-back.
- **Narrow** — Two columns; the stagger origin becomes the first cell so ring order collapses honestly into reading order.
- **Risk** — One trigger per tile is the trap — roughly 125 per-element triggers was enough for Firefox to warn the page was slowing, so this must be a single batched trigger, and the pre-reveal state must never be the crawler's or no-JS state.
- **Variants** — Ring order from centre cell · Edge-in from both flanks · Importance-ordered, protagonist first · Opacity-only, no travel
- **Overlap** — C owns the grid as a card system; here the arrival choreography is the reason the section exists.
- **References** — ScrollTrigger.batch grid-aware stagger, GSAP 'ScrollTrigger tips & mistakes' (one tween for all items), Rauno Freiberg Web Interface Guidelines
- **Tags** — `gsap-core` `static` `contained` `density-medium` `build-medium` `budget-none` `rm-designed`

### SEC-193 · Line-Masked Statement

`Q` · static · GSAP-dependent · difficulty medium · **SELECTED** · wave 1

One display-scale sentence set alone on the field, revealed line by line out of overflow-clipped masks as the section enters. The movement follows the reading direction, so it reads as craft rather than decoration.

- **Distinct** — The unit of motion is the whole line, and the re-split contract on font load and container change is part of the concept — not a generic fade applied to a heading.
- **Use** — Gives a positioning claim the weight of a whole section without spending any scroll distance on it.
- **Desktop** — Three or four lines at the top of the display scale, ranged left on a wide measure, a hairline rule and a small attribution or qualifier settling last beneath them.
- **Motion** — Each line clips upward into place on a short stagger, once, with the qualifier arriving after the last line.
- **Narrow** — The same masking on a narrower measure; because lines are re-derived from the rendered width, no line count is hard-coded.
- **Risk** — Per-character splitting is announced letter-by-letter by JAWS/Chrome, Narrator/Edge, VoiceOver/macOS and TalkBack/Firefox, so this must mask whole lines with the intact sentence exposed to assistive technology, and must not flash unsplit before script runs.
- **Variants** — Lines rise from below · Lines wipe from the ranged edge · Word-unit masking for a short claim · Rule draws before the first line
- **Overlap** — A owns typographic statements composed as stillness; this one exists because of the reveal.
- **References** — GSAP SplitText masking + autoSplit/onSplit, Adrian Roselli 'Just Don't Split Words into Letters' (Feb 2026), GSAP forum 'FOUC happening on SplitText'
- **Tags** — `gsap-core` `static` `contained` `density-low` `build-medium` `budget-none` `rm-designed` `text-integrity`

### SEC-194 · Reader-Steered Marquee Band

`Q` · scroll-driven · GSAP-dependent · difficulty medium · **RESERVE**

A seamless band of client names or capability words loops at a slow base speed, but flips direction with the reader's scroll direction and gains speed with their velocity — so the band is legibly a response to the reader rather than ambient wallpaper.

- **Distinct** — The loop is coupled to scroll direction and velocity; it is a continuously running band that the reader steers, not a fixed-speed ticker.
- **Use** — Presents an unbounded set — clients, sectors, materials — as an ambient fact rather than a list that claims to be complete.
- **Desktop** — One full-bleed band between two contained sections, set in mid-scale type with a hairline above and below, items separated by a single glyph, edges softly cut by the section bounds.
- **Motion** — Base loop eases faster and reverses as scroll direction changes, then settles back to base speed when the reader stops.
- **Narrow** — Same band, slower base speed and larger type so fewer items are legible at once; still one band, never stacked rows.
- **Risk** — Duplicated track must be aria-hidden or it is announced twice, it must contain no focusable children, there must be only one auto-scrolling region on the page, and under reduced motion it must be fully disabled and rendered as a static row — not merely slowed.
- **Variants** — Names only, hairline mono · Display-scale single sentence · Clipped inside a letterform · Decelerates to a stop on a key word
- **Overlap** — Q-10 also responds to velocity, but that band is motionless at rest; this one always runs and needs a pause affordance.
- **References** — GSAP seamlessLoop helper, Ryan Mulligan marquee implementation write-up, Preline pause-on-hover + reduced-motion rules, WCAG 2.2.2
- **Tags** — `gsap-core` `scroll-driven` `full-bleed` `density-low` `build-medium` `budget-none` `rm-designed` `motion-sensitive`

### SEC-195 · Velocity Skew Rail

`Q` · scroll-driven · GSAP-dependent · difficulty medium · **RESERVE**

A rail of real artefact stills stays exactly where the layout puts it, but skews slightly off-axis and loses saturation in proportion to how fast the reader is moving, settling true and full-colour the moment they stop.

- **Distinct** — Nothing translates and no layout changes — the motion is a distortion of a still composition tied to reader speed, which is a different mechanism from any band that travels.
- **Use** — Gives an evidence gallery a physical, material quality that rewards slowing down, without costing a pixel of scroll distance.
- **Desktop** — Four to six stills in a single wide row at true proportions with short captions beneath; the row is stationary in the flow and only its rendering responds.
- **Motion** — Skew and desaturation are eased toward a value derived from scroll velocity and returned to rest on stop.
- **Narrow** — Two-up or single-column stills with the same velocity response at a reduced maximum, since narrow scrolling is faster per pixel.
- **Risk** — Under reduced motion the skew must be removed entirely rather than reduced, and desaturation must never be the state in which caption or overlaid text has to meet contrast.
- **Variants** — Skew only, colour untouched · Desaturate only, no skew · Per-column lag added to the row · Blur substituted for skew (safer under motion sensitivity)
- **Overlap** — D and O own the gallery composition; here the velocity response is the section's identity.
- **References** — GSAP 'Velocity Skew' demo, ScrollTrigger.getVelocity + quickTo, Codrops column-lag elastic grid
- **Tags** — `gsap-core` `scroll-driven` `wide` `density-medium` `build-medium` `budget-none` `rm-designed` `motion-sensitive`

### SEC-196 · Blind-Mask Reveal

`Q` · scroll-driven · GSAP-enhanced · difficulty medium · **SELECTED**

A full-bleed proof image is uncovered through an SVG blind mask whose slat count, angle and direction come from the site's own grid and letterform geometry, so the reveal is branded rather than a generic wipe.

- **Distinct** — The mask shape is the design decision — slat rhythm derived from the layout grid — and it resolves during ordinary scroll rather than being scrubbed inside a pinned hold.
- **Use** — Lets one genuinely good artefact arrive as an event, giving a page a single memorable moment without a scroll-capturing set piece.
- **Desktop** — One artefact at full-bleed with a small captioned block set back inside the measure beneath it; the blinds open in one direction across the image on entry.
- **Motion** — Slats open in sequence across the plate on a short entry timeline, once, ending fully open.
- **Narrow** — Fewer, wider slats and a shorter open so the effect stays legible at small size; the image is fully visible if the mask never runs.
- **Risk** — The resting state must be the fully revealed image so the section is never blank under reduced motion, no-JS or a failed timeline; large scale changes on a full-bleed plate rasterise fuzzily and should be avoided here.
- **Variants** — Vertical slats from one edge · Diagonal slats on the grid angle · Slats derived from a logotype counter · Single inset wipe, no slats
- **Overlap** — P owns full-bleed as a compositional device; L owns two-state comparison. Here one state is uncovered by a shaped mask.
- **References** — Codrops SVG blind-mask and clip-path wipe tutorials, GSAP 'Image Mask On Scroll' demo
- **Tags** — `gsap-core` `scroll-driven` `full-bleed` `density-low` `build-medium` `budget-none` `rm-designed` `surface-critical`

### SEC-197 · Drawn Connective Rule

`Q` · scroll-driven · GSAP-dependent · difficulty medium · **RESERVE**

A set of labelled claims sits across the section and a single hairline SVG rule draws between them in the order they enter the viewport, so the connection between separate statements is made visible as a line rather than asserted in copy.

- **Distinct** — The drawing is the section's argument about relatedness — the nodes are a set, not an ordered process, and the rule advances by entry order rather than a fixed sequence.
- **Use** — Shows a buyer that separate capabilities are one connected practice rather than a menu of unrelated services.
- **Desktop** — Four to six short labelled statements placed asymmetrically down a wide field; the rule threads between them, each label gaining weight as the drawn tip reaches it.
- **Motion** — The path draws as each node enters, so a reader who skims sees the line complete rather than stall.
- **Narrow** — The rule becomes a single left-gutter vertical thread with labels ranged beside it, drawn top to bottom.
- **Risk** — The relationship must be written out as readable text as well as drawn geometry — a drawn-only connective is unavailable to anyone not seeing it, per the complex-image guidance.
- **Variants** — Hairline rule · Dotted survey line · Rule doubling as the layout grid made visible · Marker riding the drawn tip
- **Overlap** — K owns drawn spines carrying an ordered process; this is an unordered relationship, and R owns the interactive version where the reader selects nodes.
- **References** — GSAP DrawSVG, MotionPath tangent markers, W3C WAI complex-images guidance
- **Tags** — `gsap-core` `scroll-driven` `wide` `density-medium` `build-medium` `budget-none` `rm-designed` `semantics-fragile`

### SEC-198 · CSS Reveal Ladder

`Q` · scroll-driven · CSS-interactive · difficulty low · **SELECTED** · wave 1

A long argument in which paragraphs, hairline rules and figures each resolve at their own point in the section's entry — pure CSS view timelines, no JavaScript, no library lifecycle, and a fully resolved resting state where unsupported.

- **Distinct** — The implementation model is the concept: zero-JS, off-main-thread sequencing that establishes a reading rhythm down a whole section rather than animating one element.
- **Use** — Gives a substantial explanatory section pace and structure without adding weight to a page that is already carrying heavier sections.
- **Desktop** — A measured text column with figures escaping to margin width at two declared positions; each block settles as it crosses the reading band, the section heading already at rest.
- **Motion** — Each element resolves opacity and a short rise across its own entry range, with nothing withheld once past the band.
- **Narrow** — Identical behaviour at a narrower measure; figures inline rather than marginal, same ladder, same source order.
- **Risk** — An entry range without a backwards fill paints the element unstyled on first paint, and view timelines are unsupported in Firefox — so the visible resting state must be the CSS default and the animation feature-detected on top of it.
- **Variants** — Rise and settle · Rule draws before its paragraph · Figures resolve, text static · Reading-band highlight instead of entry reveal
- **Overlap** — Q-09 also uses a view timeline but resolves one dense object as a single focus pull; this one is a sequence across many element types.
- **References** — Josh Comeau 'Scroll-Driven Animations', MDN @supports feature detection for scroll-driven animation, Bramus scroll-driven demos
- **Tags** — `scroll-css` `scroll-driven` `contained` `density-medium` `build-low` `budget-none` `rm-free`

### SEC-199 · Scrubbed Counter Band

`Q` · scroll-driven · GSAP-dependent · difficulty medium · **RESERVE**

Four figures scrub with scroll position rather than counting on entry, snapping to whole units as they go, above a thin rule that fills across the band as the section is read — so the number is watched being established.

- **Distinct** — Scroll progress drives the value itself, which is the one case where scrubbing carries information rather than decorating; a count-on-entry band is a different, simpler concept.
- **Use** — Makes quantified proof feel measured rather than asserted, with the source, period and denominator permanently legible beneath each figure.
- **Desktop** — Four display-scale tabular figures across the container, each with unit, source and caveat set small beneath; one hairline rule under the whole band fills left to right with reading progress.
- **Motion** — Values scrub to their final figure across the section's own entry range and snap to whole units, never rerunning.
- **Narrow** — Two-by-two, the fill rule running under each pair; figures settle at final value early so a fast scroll never leaves a wrong number on screen.
- **Risk** — A scrubbed number can be read mid-value as a false figure, so the final value must be the resting and reduced-motion state and the text must be announced once, not on every tick.
- **Variants** — Four-up with fill rule · One hero figure, three supporting · Digit-wise roll rather than scrub · Fill rule replaced by a filled square coverage strip
- **Overlap** — M owns evidence-led proof composition; the scrub-as-information is why this sits in Q.
- **References** — GSAP progress-driven counter forum threads (formatting and snapping), Tailwind Plus Stats variants (provenance in the description forms), NN/g on unsourced figures
- **Tags** — `gsap-core` `scroll-driven` `contained` `density-medium` `build-medium` `budget-none` `rm-designed` `text-integrity`

### SEC-200 · Focus-Pull Specification

`Q` · scroll-driven · CSS-interactive · difficulty low · **RESERVE**

A dense specification table arrives soft and unfocused, reading first as the texture of a real document, then resolves to full sharpness as the section enters — the legibility change is itself the argument that this is documentation, not marketing.

- **Distinct** — One dense object resolves as a whole with no stagger and no travel; the hierarchy claim is texture-then-data, which no sequenced reveal ladder produces.
- **Use** — Lets a buyer register the depth of a deliverable specification before reading a word of it.
- **Desktop** — A full two-column definition list or spec table on hairline rules with tabular numerals filling the container; a single short caption above naming what the document is.
- **Motion** — A short blur-to-sharp with a small opacity change across the entry range, resolving completely before the table reaches the reading band.
- **Narrow** — The same table with inline row labels from one markup, resolving identically; no second small-screen DOM.
- **Risk** — Without a backwards fill the block paints unstyled on first paint, and a blurred table must never be the state in which any text is expected to be readable — the resolved state has to be the CSS default with the effect layered on.
- **Variants** — Blur to sharp · Letter-spacing settling to true · Rule weight resolving from hairline · Tinted plate clearing to paper
- **Overlap** — N owns the dense table as a composition; here the focus pull is the reason the section exists. Q-07 sequences many elements; this resolves one.
- **References** — Codrops blur-to-sharp view()-timeline reveal for spec tables, Josh Comeau on animation-range and backwards fill, Adrian Roselli 'Under-Engineered Responsive Tables'
- **Tags** — `scroll-css` `scroll-driven` `contained` `density-high` `build-low` `budget-none` `rm-free` `text-integrity`

### SEC-201 · Scroll-Velocity Type Band

`Q` · scroll-driven · GSAP-dependent · difficulty medium · **SELECTED**

A wide band of display type that is completely motionless at rest and translates only in proportion to the reader's scroll velocity, reversing with their direction — motion that exists purely as feedback and stops dead the instant they do.

- **Distinct** — There is no base loop: at rest the band is a still typographic composition, so it carries none of a marquee's perpetual-motion obligations and reads as physics rather than as a ticker.
- **Use** — Marks a page transition between two arguments with a band that acknowledges the reader without claiming their attention.
- **Desktop** — One full-bleed line of display type, well over viewport width, cut by the band's own edges so the reader always sees it mid-phrase; a small ranged caption fixed beneath it.
- **Motion** — Horizontal offset is driven by eased scroll velocity and returns to zero on stop; direction follows the reader.
- **Narrow** — Reduced maximum travel and a shorter phrase so the whole line can still be assembled by scrolling once through the band.
- **Risk** — Horizontal movement of decorative content under vertical scroll is named directly by WCAG 2.3.3, so the travel must be removed entirely under reduced motion, leaving a still, complete, legible line. The phrase is never fully visible, so it must exist as one intact string in source order and must read correctly to assistive technology, reader modes and crawlers without any travel having occurred.
- **Variants** — Display type · Thin caption rule of client names · Image strip instead of type · Two bands travelling in opposition
- **Overlap** — Q-03 always runs and must be pausable; this is still at rest. H owns lateral movement the reader drags.
- **References** — Magic UI scroll-based-velocity (text and image demos), ScrollTrigger.getVelocity + quickTo, W3C Understanding 2.3.3
- **Tags** — `gsap-core` `scroll-driven` `full-bleed` `density-low` `build-medium` `budget-none` `rm-designed` `motion-sensitive` `text-integrity`

### SEC-202 · Resolving Logo Wall

`Q` · scroll-driven · GSAP-enhanced · difficulty medium · **SELECTED**

Client marks enter scattered and faint, settle into a strict monochrome grid as the section comes into view, and then stay permanently still — motion with a destination, in a family that is normally either dead or endlessly scrolling.

- **Distinct** — The motion terminates. The section's end state is a plain aligned grid, which is the opposite contract from a marquee and different from a wall that never moves at all.
- **Use** — Proves the roster is real and finite, with the alignment itself doing the arguing about seriousness.
- **Desktop** — Five columns by four rows of marks at one optical weight on a single surface, generous even gutters, one small line above stating the count.
- **Motion** — Marks travel a short distance from scattered offsets into their grid cells on one batched settle, then never animate again.
- **Narrow** — Three columns, the same settle at a smaller travel distance, marks kept at equal optical weight rather than equal box width.
- **Risk** — The scattered low-opacity start must never be the resting or reduced-motion state — the aligned grid is the default and the scatter is applied on top; marks need real names in text, not image-only tiles.
- **Variants** — Scatter to grid · Blur mass resolving to aligned marks · Rotation settling to true · Names-only wall, no marks
- **Overlap** — M owns proof walls as static composition and Q-03 owns the moving band; this one moves once and then commits to stillness.
- **References** — Resolving logo wall as shipped in Tailwind block libraries, ScrollTrigger.batch settle, Preline logo-strip reduced-motion guidance
- **Tags** — `gsap-core` `scroll-driven` `contained` `density-medium` `build-medium` `budget-none` `rm-designed`

## R — Interactive relationship

### SEC-203 · Node Map With Live Caption

`R` · user-driven · GSAP-enhanced · difficulty medium · **SELECTED**

A small relationship diagram where hovering or focusing a node highlights its edges and swaps one caption line in a live region, with the complete set of relationships also written out as an ordinary list beneath the diagram. The diagram is interactive; the list is the section's actual content.

- **Distinct** — The subject is the connection between capabilities rather than the capabilities themselves, and the written equivalent is designed as visible content rather than hidden alternative text.
- **Use** — Shows a buyer that the disciplines on offer are one connected practice rather than a menu of unrelated line items.
- **Desktop** — The diagram occupies the upper two-thirds, centred, with about eight labelled nodes; a single caption line sits on a hairline directly beneath it, and the full relationship list runs as a two-column definition list below, always visible.
- **Motion** — Edges brighten and draw outward from the focused node over roughly 200ms; nothing reflows and the caption text is replaced rather than animated.
- **Narrow** — Below about 480px the geometry stops being legible, so the diagram becomes a static labelled image and the written list becomes the section — a genuine change of form, not a shrink.
- **Risk** — W3C requires a short identifier plus a real long description for complex images, and the highlight has no non-visual equivalent unless the caption updates in a live region; hover has no touch equivalent, so focus must be the primary path.
- **Variants** — Hub and spoke · Mesh · Two-tier hierarchy · Hairline edges versus drawn beams · Navy inverted
- **Overlap** — R-03 coupling map — that is two ordered columns joined across a gutter; this is a free node field with no reading order.
- **References** — Magic UI animated-beam, W3C WAI complex images tutorial, GSAP DrawSVG, darkroom.engineering
- **Tags** — `gsap-core` `user-driven` `contained` `density-medium` `build-medium` `budget-none` `rm-designed` `kbd-path` `semantics-fragile`

### SEC-204 · Cross-Column Reference Matrix

`R` · user-driven · CSS-interactive · difficulty medium · **SELECTED**

Three parallel dense lists — services, sectors, outcomes — where focusing or hovering any single entry dims everything unconnected in the other two columns. The resting state shows every connection, so nothing is hidden behind interaction.

- **Distinct** — Expresses a three-way relationship using only type and contrast: no SVG, no canvas, no drawn connectors, and the keyboard path is identical to the pointer path rather than an added equivalent.
- **Use** — Answers what we do, who for, and to what end in one screen, and lets a buyer trace their own sector to the outcomes it actually produced.
- **Desktop** — Three equal columns of plain names on a shared hairline baseline grid with no cards and no icons; a caption line beneath the columns names the current relation in words as focus moves.
- **Motion** — Contrast only — unconnected entries drop to a dim tint and the caption line swaps; no element moves.
- **Narrow** — Columns stack and the dimming is abandoned, because dimming across stacked columns is unreadable; each entry instead expands to list its own connections inline.
- **Risk** — The dimming is visual-only, so the caption must update in a live region and the connections must remain readable in the resting state — an interaction-gated relationship is an unpublished one.
- **Variants** — Hover and focus · Focus only · Dim unconnected · Rule-connect matched entries · Two-column version
- **Overlap** — N-04 capability index — that filters one list by typed text; this expresses membership across three lists with no input at all.
- **References** — darkroom.engineering Services/Clients/Technologies, W3C WAI complex images tutorial, NN/g comparison table guidance
- **Tags** — `css-motion` `user-driven` `contained` `density-high` `build-medium` `budget-none` `rm-free` `kbd-path` `semantics-fragile`

### SEC-205 · Coupling Map

`R` · user-driven · GSAP-dependent · difficulty high · **RESERVE**

Two facing columns — what we do on the left, what changes for you on the right — joined by connectors drawn in the gutter. Every connector is present faintly by default; selecting a row on either side thickens its path and highlights its counterpart.

- **Distinct** — The gutter between the columns is the content: the section exists to show which activity produces which outcome, which no split or two-column layout asserts.
- **Use** — Stops a capability list reading as a menu by binding every activity to the specific change it produces for the business.
- **Desktop** — Eight capability rows left and eight outcome rows right at unequal heights across the contained width, connectors drawn as hairlines through the gutter; one-to-many fans stay legible because unselected paths never gain weight.
- **Motion** — The selected path redraws from source to target in one short move while the others merely dim; on the curved variant the connector follows a motion path.
- **Narrow** — Connectors are dropped entirely and each left row carries its outcomes inline beneath it, from the same source order — the relationship is stated rather than drawn.
- **Risk** — Connector geometry is computed from measured row positions, so any late font load or resize detaches the paths from their rows unless recomputed; a hover-only SVG ships no keyboard path at all.
- **Variants** — Straight hairline connectors · Curved motion-path connectors that draw on select · Strict one-to-one ledger · One-to-many fan · Navy inverted
- **Overlap** — E split sections — a split places two regions in relation; here the drawn correspondence between individual rows is the subject.
- **References** — Magic UI animated-beam, GSAP MotionPath and DrawSVG, GSAP Flip.fit waypoints, darkroom.engineering
- **Tags** — `gsap-core` `user-driven` `contained` `density-medium` `build-high` `budget-none` `rm-designed` `kbd-path` `semantics-fragile`

### SEC-206 · Annotated Artefact With Note Rail

`R` · user-driven · GSAP-enhanced · difficulty medium · **RESERVE**

One large real deliverable carrying numbered hotspots beside a scrolling note rail; activating a number moves the rail to the matching note and draws a connector between the two. A full written description sits beneath and reads correctly with no image at all.

- **Distinct** — The concept is the link between mark and note — the artefact never moves and the rail never leaves — which differs from any annotated image whose callouts simply expand in place.
- **Use** — Explains a real deliverable in the buyer's terms, so a document they have never seen becomes legible as something they would want.
- **Desktop** — Artefact at roughly two-thirds width on the left, note rail on the right; the connector is a hairline elbow drawn across the gutter, and the written description runs full width beneath the pair.
- **Motion** — The rail scrolls to the matching note and the elbow draws in a single short movement, then holds until another number is activated.
- **Narrow** — Hotspots become numbered chips beneath the artefact and the note opens in place under its chip; no connector is drawn, because there is no gutter to draw it in.
- **Risk** — A complex image needs both a short identifier and a real visible long description; a programmatic scroll of the rail must also move focus, or keyboard users activate a number and nothing happens for them.
- **Variants** — Notes in the margin · Notes in a scrolling rail · Numbered versus lettered marks · Redacted client artefact · Two artefacts sharing one rail
- **Overlap** — M proof and artefact sections — those present the deliverable; this concept is the connection between a point on it and its explanation.
- **References** — W3C WAI complex images tutorial, GSAP DrawSVG sequenced callouts, Closeread highlight and zoom vocabulary, The Pudding
- **Tags** — `gsap-core` `user-driven` `wide` `density-medium` `build-medium` `budget-none` `rm-designed` `kbd-path` `semantics-fragile`

### SEC-207 · Drag-To-Explore Artefact Field

`R` · user-driven · GSAP-dependent · difficulty high · **RESERVE**

A field of real artefacts the reader pushes around with momentum rather than scrolls, with an explicit index-view control presenting the same items in the same DOM order as a plain ordered list. The escape hatch is designed into the composition, not bolted underneath it.

- **Distinct** — The reader sets the pace and the route entirely; position on the plane, not sequence, encodes relationship between the pieces.
- **Use** — Turns browsing past work into an activity, rewarding a curious buyer while never trapping one who just wants the list.
- **Desktop** — A bounded plane larger than the viewport with artefacts placed at irregular but deliberate positions; a hairline mini-map, a recentre control and the index-view toggle sit together in one corner as a visible control cluster.
- **Motion** — Weighted drag with inertia; releasing near an item eases it into a reading position while the rest of the field recedes in contrast.
- **Narrow** — Index view is the default below the tablet breakpoint and drag becomes an explicit opt-in, since a drag plane competes directly with page scroll on touch.
- **Risk** — A drag surface has no keyboard or screen-reader path whatsoever, so the index view is an equal route rather than a fallback; measuring every item per frame is read-write layout thrashing beyond roughly a dozen items.
- **Variants** — Tidy grid field · Scattered collage · Single infinite row · With mini-map and recentre · Index-view first
- **Overlap** — H reader-driven rails — a rail moves on one axis inside a track; this is a two-axis plane with no track and no order.
- **References** — Locomotive Play grid with ThrowProps, Unseen drag-to-explore, Codrops Draggable Product Grid, Made With GSAP catalogue
- **Tags** — `gsap-core` `user-driven` `full-bleed` `density-medium` `build-high` `budget-none` `rm-designed` `kbd-path` `motion-sensitive`

### SEC-208 · Magnetic Decision Grid

`R` · user-driven · GSAP-enhanced · difficulty medium · **REJECT**

Option tiles lean a bounded few pixels toward the pointer while it is inside a radius, and their neighbours ease away. The grid acknowledges the reader before they commit, and is complete and fully usable with the effect entirely absent.

- **Distinct** — The relationship modelled is between the reader's pointer and the set of options, which is a different subject from any relationship between the content items themselves.
- **Use** — Gives a set of engagement options a sense of responsiveness at the moment a buyer is weighing them, without adding a word of copy.
- **Desktop** — Four to six wide option tiles, each carrying a name, a one-line definition and a price band; movement is translation only, within a few pixels, never scale and never rotation.
- **Motion** — A bounded translate toward the pointer using a quick-set tween, easing back to true on leave.
- **Narrow** — No motion at all — the grid alone is the section, which is the honest small-screen form rather than a substitute effect.
- **Risk** — Pointer-only with no touch or keyboard equivalent, so it must be gated behind a hover-capable media query and removed under reduced motion; it must never be the only signal that a tile is selectable.
- **Variants** — Tiles attract toward the pointer · Neighbours repel · Label leans, tile stays still · Contextual cursor label instead of movement
- **Overlap** — Q motion-led composition — there motion is the composition; here the still state is complete and the motion is only a response.
- **References** — Codrops magnetic and proximity elements, Rauno Freiberg's Web Interface Guidelines on gating hover, GSAP quickTo
- **Tags** — `gsap-core` `user-driven` `contained` `density-low` `build-medium` `budget-none` `rm-designed` `motion-sensitive`

### SEC-209 · Alias Reveal

`R` · user-driven · CSS-interactive · difficulty low · **SELECTED**

A terminology section where each canonical term expands to show the three other names clients use for the same thing, plus one sentence saying what it actually means here. The equivalence between vocabularies is the subject; the disclosure is only its mechanism.

- **Distinct** — The content model is a synonym set rather than a question and answer, so what the reader gains is their own words mapped onto ours, not a hidden explanation revealed.
- **Use** — Lets a buyer who calls it something else recognise that they are in the right place, and reads as expertise rather than as keyword padding.
- **Desktop** — Two columns of canonical terms at body-large on hairline rules with a chevron marker; expanding a term pushes the column down to reveal its aliases in hairline caps and one clarifying line, never overlaying.
- **Motion** — Height opens to the content's own intrinsic size and the marker rotates; nothing else on the page shifts.
- **Narrow** — Single column with identical behaviour and identical markup — this composition genuinely does not need a different small-screen form.
- **Risk** — Each term is an independent disclosure, not a coordinated accordion, so a summary-and-details pair or a button carrying aria-expanded both suffice. Exclusivity must not be reintroduced through the details name attribute — a coordinated group needs heading-contained buttons, managed state, aria-expanded and aria-controls, and the exposed role of summary varies across assistive technology. Animating to intrinsic height depends on non-Baseline calc-size, so a measured path has to exist underneath, and in the two-column layout the expanded panel must occupy a full grid row rather than push one column down past terms the reader is scanning.
- **Variants** — All open by default · Aliases always visible as a hairline subscript · Alias-first with the canonical term small · Expand-all control · Navy inverted
- **Overlap** — G disclosure sections — those exist so the reader can choose depth; this exists to publish an equivalence, and would still work fully expanded.
- **References** — The Component Gallery disclosure aliases, ARIA APG disclosure pattern, Adrian Roselli and Scott O'Hara on details/summary
- **Tags** — `css-motion` `user-driven` `contained` `density-medium` `build-low` `budget-none` `rm-free` `kbd-path`

### SEC-210 · Overlap Field

`R` · user-driven · CSS-interactive · difficulty medium · **RESERVE**

Three overlapping tinted fields — strategy, design, delivery — where focusing a field or one of its intersections names in words what lives there. The complete set of regions is also written out beneath, so the geometry is an entry point rather than the only record.

- **Distinct** — Relationship expressed as shared area rather than as lines between discrete items, so the intersections themselves are addressable content with their own names.
- **Use** — Shows a buyer that the valuable work happens where disciplines meet, and names the engagements that live in each overlap.
- **Desktop** — Three large soft fields overlapping at contained width in the section's centre with their labels set inside; a caption line beneath states the focused region and lists the named engagements belonging to it.
- **Motion** — Tint weight and label contrast change on focus; the geometry itself never moves or resizes.
- **Narrow** — The geometry drops to three stacked labelled bands with each intersection written as its own row — the overlap is stated in words rather than drawn.
- **Risk** — Overlapping tints stack to unpredictable contrast, so each region must be distinguishable by its label rather than by colour, and the whole field needs the written equivalent to carry any meaning non-visually.
- **Variants** — Circles · Soft rectangles · Two-field version · Only the intersections labelled · Navy inverted
- **Overlap** — R-02 reference matrix — that is three ordered lists with membership shown by dimming; this is one continuous field where the shared area is itself the named content.
- **References** — W3C WAI complex images tutorial, darkroom.engineering three-column surface listing, Locomotive three-part practice argument
- **Tags** — `css-motion` `user-driven` `contained` `density-low` `build-medium` `budget-none` `rm-free` `kbd-path` `semantics-fragile` `surface-critical`
