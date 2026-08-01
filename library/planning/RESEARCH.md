# Section research

External research conducted for the MindWP section library, August 2026. Findings, sources, and what
follows from them for this library.

Library-local planning, not a website authority. Nothing here overrides
[docs/DESIGN.md](../../docs/DESIGN.md) or [docs/ENGINEERING.md](../../docs/ENGINEERING.md).

## How to read this document

Three registers, kept deliberately separate:

- **Plain text** is a sourced finding. It reports what a named source says or what was directly
  observed on a page that was fetched.
- **Interpretation** is my reading of the evidence, where the conclusion goes beyond what any single
  source states.
- **Recommendation** is what I think this library should do about it. These are proposals, not
  decisions.

Where I am inferring rather than sourcing, it says so.

## Research approach

Twelve parallel source-cluster sweeps plus a completeness-critic pass, each running its own live web
research: 10–15 distinct queries per cluster, then direct fetches of the most promising pages.
Findings were required to come from primary sources — official documentation, official project sites,
original repositories, original studio work, reputable showcases, and direct community discussion.
Generic "best component libraries" listicles were permitted only as a route to primary sources, never
as the basis of a finding.

Every source carries an honest access marker distinguishing pages actually retrieved from pages seen
only as search results. **288 unique URLs, of which 281 were fetched**, across roughly 1,450 tool calls.

Access date for all sources: **2026-08-01**.

Three clusters — catalogue and filtering UX, direct community discussion, and accessibility and
performance criticism — failed twice before completing: first on connection errors, then on a session
limit. They were re-run at high reasoning effort rather than dropped, on instruction. **All three
returned and are folded in below.**

### Source categories covered

React section and open-source component collections · Tailwind component and block libraries · GSAP
official documentation, demos, showcase and community forum · award-winning and curated interactive
showcases · original agency and studio websites · premium SaaS and product marketing sites ·
editorial, typography-led and long-form design · creative-development technique showcases ·
design-system catalogues and component-gallery tooling · catalogue, gallery and filtering interfaces
· direct designer and developer discussion · accessibility, performance and pattern criticism.

## The single most important structural finding

**Existing catalogues are severely lopsided, and they are lopsided away from what a service business
needs.**

Per-family counts, taken directly from the catalogues' own index pages:

| Catalogue     | Saturated families                                          | Thin or absent families                          |
| ------------- | ----------------------------------------------------------- | ------------------------------------------------ |
| shadcnblocks  | Feature 311, Hero 247, Pricing 96, Bento 53                 | Process 4, Case Studies 11, Compare 10           |
| Tailwind Plus | Feature Sections 15, Pricing 12, Hero 12, CTA 11            | Bento Grids 3, Content Sections 7, no compare    |
| One Page Love | Social Proof 718, Lead Capture 513, Testimonials 488        | Comparison Table 17, Before/After 21, Roadmap 13 |
| Magic UI      | 75 registry items, of which fewer than 10 are section-scale | no section families at all                       |

Every open collection surveyed converges on the same seven families — hero, logo cloud, features,
stats, testimonials, pricing, FAQ, CTA. This was verified independently across `tailark/blocks`,
`educlopez/smoothui` and Motion Primitives Pro's sold section list, which are identical taxonomies
arrived at separately.

**Interpretation.** A page assembled from any of these catalogues has the same skeleton as every
competitor's page. The differentiation has to come from families the catalogues do not supply —
comparison, process, proof and artefact, case-study excerpt, state change, dense information, and
editorial composition. Those are precisely the sections where a buyer's real questions get answered.

**Recommendation.** Weight the longlist toward the under-served families and keep the saturated ones
tight. This is not a judgement that feature grids are inferior; it is a judgement about where
building adds something that cannot simply be downloaded. The taxonomy allocation follows this.

## Patterns designers and developers repeatedly value

Recurring across five or more independent clusters, in rough order of how often they appeared:

**Sticky claim column beside a scrolling evidence rail.** A heading and index held on one side while
proof scrolls past on the other, the heading swapping at each rail item. It appeared in every single
cluster. Valued because it keeps a claim and its evidence on screen together, never captures scroll,
and collapses honestly on a phone — the sticky column was only ever a persistence device.

**Sticky and stacking card decks.** Cards that pin and overlay one another with a small offset and
scale-down. Valued for the physicality; the CSS-only form using `position: sticky` needs no
JavaScript at all.

**Pinned horizontal tracks.** Full-height panels driven sideways by vertical scroll. High impact,
high cost, and the family with the most documented failure modes.

**Bento grids with genuine hierarchy.** Widely admired where one protagonist cell earns its size, and
widely criticised where the inequality is decorative.

**Grid-to-detail expansion.** A card that expands in place into a full-width reading panel with no
route change, via a shared-element morph.

**Filterable grids that re-flow rather than re-render.** Cards keeping identity as they travel to new
positions. Reader-driven and informative rather than decorative.

**Batch-revealed grids.** One trigger with a grid-aware stagger, rather than one trigger per element.

**Marquee and ticker bands.** Ubiquitous, cheap, and the pattern most often shipped without its
required accessibility work.

**Before-and-after comparison.** Notable finding: the research could not locate a single maintained
reference implementation in Tailwind Plus, Preline or shadcnblocks. The pattern is shipped constantly
and specified nowhere.

**Annotated artefacts and close-read re-framing.** One artefact held while prose highlights, zooms or
pans regions of it — the reader builds one mental model instead of five.

## Familiar patterns with the strongest styling range

The clearest single proof came from `tailark/blocks`, whose directory structure crosses a **theme
axis** (dusk, mist, veil, quartz) with a **block-family axis**. The same hero family reads as four
different products across four themes.

**Interpretation.** A familiar structure is not the limiting factor on distinctiveness. Range is the
property to select for, and it is the strongest argument for keeping familiar patterns prominent in
this library.

Highest-range structures observed, all conventional:

- **Card grids and three-column systems** — re-dress across surface, density, media presence,
  hairline versus elevation, and item count without changing structure.
- **Splits and diptychs** — ratio, which side leads, whether either side is sticky, and whether the
  divider is visible are all independent axes.
- **Tabs and accordions** — indicator treatment, panel transition, whether a persistent media pane is
  driven, and horizontal versus vertical rail.
- **Editorial openers and pull-quote structures** — almost entirely a typographic decision.
- **Timelines** — spine weight, marker treatment, axis, and whether spacing encodes real duration.
- **Stat and figure bands** — the composition survives complete changes of register.

Lowest-range structures, and therefore the ones to keep few of: WebGL and shader sections, scrubbed
image sequences, cursor-relational effects, and anything where the artwork is the concept.

## Interactions that feel satisfying rather than decorative

Consistent across clusters, the interactions people praise share three properties: **the reader
initiates them**, **they produce information**, and **they have a resting state that is already
correct**.

Praised: drag-to-compare with a live numeric readout; filter chips that re-flow a grid so cards keep
identity; grid-to-detail expansion with no route change; hover or focus on a node dimming everything
unconnected; accordions that swap a persistent media pane; a tab indicator and its panel sharing one
transition so the panel appears to grow out of its tab; a segmented control that retimes every figure
in the section at once.

Criticised as decorative: cursor-following spotlights on every card; travelling gradient borders;
"everything fades and rises 40px on entry"; signalling motion — shimmer, ambient node graphs, busy
loaders — which one Hacker News commenter described as conveying nothing relevant while costing GPU
and battery.

**Interpretation.** The dividing line is not ambition, it is whether the motion answers a question the
reader asked. Rauno Freiberg's Web Interface Guidelines put a usable number on it: interaction
animations should not exceed roughly 200ms, and scale should stay within 0.8–0.96 rather than 0→1.

## GSAP patterns with real reuse potential

GSAP 3.15 is installed with the full plugin set. GSAP's own Demo Hub (launched with 3.14 on
8 December 2025) organises by purpose crossed with plugin, which is a useful signal of what the
maintainers consider repeatable.

**Genuinely repeatable at section scale:** ScrollTrigger `batch()` reveals with grid-aware stagger;
sticky claim column with `onEnter`/`onLeaveBack` heading swaps; same-grid-cell stacking card decks
where cards never leave document flow; Flip layout transitions on user action (filter, density
toggle, grid↔list); Flip-driven grid-to-detail expansion; clip-path and SVG-mask wipes with a
parameterised shape; DrawSVG process spines; horizontal tracks with `containerAnimation`-bound inner
triggers; whole-word or whole-line SplitText masking; Draggable plus Inertia rails with index
snapping; seamless marquees built on the `seamlessLoop` helper.

**One-off experiments rather than components:** WebGL and shader-on-scroll work (every instance is a
new scene build, so only the scroll wiring transfers); Three.js waypoint demos; MorphSVG sequences
between bespoke illustrations; Lottie-scrubbed sections where the imported asset determines
everything; full image sequences. Of the six community demos GSAP chose to represent scroll work on
its own landing page, only two look like reusable section components.

**The tell**, stated most clearly by the agency cluster: **can the artwork be swapped without
re-choreographing?** If not, it is inspiration.

## What works as inspiration rather than as a component

The completeness-critic pass produced the sharpest test, and it is not about ambition:

> Does it render correctly with JavaScript off and `prefers-reduced-motion` set, without a separately
> authored fallback?

Sections that pass are production components. Sections that need a bespoke scroll container, a global
scroller proxy, page-level pin coordination, or a one-off asset pipeline are inspiration.

Codrops frames its own archive as "explorations in code and design" rather than as components, which
is the honest register. Its authors say so directly — one infinite-gallery article states that
keyboard scrolling and reduced-motion handling were intentionally omitted for readability and are
"essential before shipping"; a layout-formations article concedes "forgive the mobile quirks".

**Recommendation.** Build the inspiration-shaped concepts anyway — that is what a laboratory is for —
but tag them honestly so nobody later mistakes one for a production-ready section.

## Section families missing from common libraries

Directly answering the question, and the most actionable finding after the lopsidedness above.

**No catalogue surveyed indexes by spatial or behavioural property.** Every family name in Tailwind
Plus, Preline and shadcnblocks is a content role — Testimonials, Pricing, FAQ, Team, Stats. There is
no index entry for pinned, horizontal, sticky, layered, or responsive-transforming. Tailwind Plus's
sticky content section is filed under "Content Sections", with no behavioural label anywhere.

**Interpretation.** Behaviour is invisible to search in every existing catalogue, which is why
sticky, pinned and scroll-driven sections feel rarer than they are. For a library whose whole subject
is composition and spatial behaviour, that axis is the one that must exist.

Missing or near-absent families, verified by count: comparison and decision support; process and
sequence; timeline as an argument about trajectory rather than an event log; before-and-after and
state change; proof and artefact; case-study excerpt; dense information, specification sheets and
ledgers; editorial long-form, sidenotes, margin columns and breakout ladders; interactive
relationship diagrams; annotated artefacts.

## Catalogue interface findings

The strongest evidence in the whole sweep, because several catalogues have solved this at far larger
scale than 100 items.

**Orthogonal axes beat one taxonomy.** Awwwards separates what a section _is_ (48 element types) from
how it _behaves_ (free-text tags) from how it _looks_ (26 colour swatches) from how it was _built_
(React, Three.js, GSAP…). Unsection crosses 13 section types with 19 style tags — which is the
concept-versus-variant distinction made navigable. GSAP's Demo Hub crosses purpose categories with
plugin capability plus a framework filter.

**Publish the count per family.** Universal across every serious catalogue, and the single cheapest
navigational aid found. It makes skew legible before any click, distinguishes a mature family from a
stub, and turns the index into an honest statement about where effort has gone.

**Name entries so the name predicts the layout.** Tailwind Plus's convention — a composition term
plus a content qualifier ("Offset 2×2 grid", "With sticky product screenshot", "Two tiers with
emphasised right tier") — is the most transferable naming idea found. Osmo's is the equivalent for
motion: effect plus trigger ("Gradient Wave Text on Scroll", "3D Perspective Hover").

**A still frame systematically under-represents the sections that took the most work.** A swap, a
pin, a horizontal run and a responsive transformation all look like one frame. Awwwards and Codrops
both use short looping video thumbnails; the poster must be the resting state, not a mid-animation
frame.

**Full-viewport items need their own route, not an inline frame.** Small components get inline
thumbnails; section- and page-scale items get a dedicated full-window route. shadcn Blocks open as
full pages; Ladle has a full-screen mode.

**Preview-in-composition beats preview-in-isolation.** shadcnblocks ships a Page Builder that
composes sections and previews the whole page before any code is taken. Tailwind Plus keeps Page
Examples as a separate tier. Godly indexes sections _per site_, so you can read a whole ordered
section sequence. This is the only place in any catalogue where page rhythm is visible — and a
section's failure mode is usually its neighbour.

**Record what each item degrades to.** With motion disabled, at 360px, and without JavaScript. A
catalogue of motion-led sections is only usable if the fallback is a listed property rather than
something discovered during a build.

**Task-stem grouping beats noun grouping.** GOV.UK groups patterns under "Ask users for…" and "Help
users to…", organised by reader intent, with the stems completing grammatically into the item names.

**Lifecycle needs to be first-class.** USWDS names four phases and fifteen sub-states, including
"Use with caution", "Deprecated" and "Retired". A catalogue without an explicit retirement path
accumulates dead sections that still read as recommendations, and the failure is silent.

**Do not depend on a hosted platform.** Backlight — a well-covered code-centric design-system
platform — carries a shutdown notice dated 1 June 2025. Histoire remains Vue-3/Svelte-only.

### Preview mechanics — the dedicated sweep

The catalogue cluster inspected how large visual catalogues actually work, and produced the most
directly transferable material in the research.

**The three-tier preview ladder is universal.** Static poster in the grid → live iframe on the item
page → standalone full-bleed route for the real thing. **Grids never carry live iframes.**
shadcnblocks' category pages serve fixed 4:3 screenshots with zero iframes in the DOM; the expensive
preview is deferred to the item page where exactly one specimen exists. shadcn's own block viewer
does the item tier with a resizable panel group, a 100% / 60% / 30% toggle, a hard-refresh key, and
an open-in-new-tab to a standalone route.

**Section thumbnails can be crops of one page screenshot.** Landbook captures a single full-page
image (one observed source was 3456px wide and over 21,000px tall) and serves each section card as a
signed crop of it with a different y-range — six adjacent section cards resolved to the same source
file. **This is the cheapest credible way to run a section catalogue**, and it means section previews
cost one capture per page rather than one per section.

**Scroll behaviour needs a recording, not a still.** Recent (formerly Godly) uses
`<video loop playsinline preload="none" poster="…">` with **no `src` until interaction** — a scripted
scroll-through as a short muted loop. This was the only technique observed that conveys
scroll-dependent behaviour inside a grid cell. Osmo does the same with an explicit three-state lazy
loader attribute rather than trusting the browser.

**Uniform tiles cannot represent sections.** Unsection's thumbnails are a constant 1000px wide but
680, 847, 994 and 1615px tall in the same grid. A section catalogue that forces uniform tiles crops
away the composition, which is the thing being catalogued.

**A one-line structural summary is the strongest low-cost searchability lever found.** shadcnblocks
labels each block in the grid with lines like "Four-tile value proposition bento", "Asymmetric
six-column health tech bento", "Borderless eight-column mosaic with menu UI" — encoding tone, grid
structure and domain in something scannable and searchable.

**Honest metadata beats flattering metadata.** shadcnblocks item pages name the responsive behaviour
("the grid collapses to one column with captions preserved under each visual") _and_ the integration
debt ("two tiles are fully animated components and two rely on cover imagery, so swapping assets is
part of the integration work"). Landbook stamps a verification date — a small, cheap credibility
device.

**Behaviour-first taxonomies exist, just not in component catalogues.** Osmo indexes a motion library
entirely by mechanism — Sections & Layouts, Hover Interactions, Text Animations, Visual Effects,
Sliders & Marquees, Scroll Animations, Page Transitions, Loaders, Cursor Animations — cutting across
page role completely. Refero runs **five orthogonal taxonomies** over one corpus (page types, flows,
UX patterns, UI elements, industry). Both validate indexing by what a section _does_.

**Are.na is the alternative to facets.** Blocks and channels only; a block can belong to unlimited
channels, so it accumulates context rather than being filed once, and channels nest. For a library
where one section legitimately belongs to several mental models, this is a different and arguably
better model than a single primary category.

**NN/g's facet constraints, to design against.** Facets are only justified on large multi-dimensional
sets and explicitly add interaction cost. Label facets concretely — never "Category" or "Item Type" —
and keep internal jargon out. General facets at the top, specialist at the bottom. **Batch-apply**
when users arrive with several criteria; **instant-apply** when they are exploring and results return
under a second. On mobile use an overlay tray with a live result count pinned in a fixed header, not
a separate page. **Infinite scroll only for aimless browsing of homogeneous items** — a Load More
button restores footer access and defeats the illusion of completeness.

**A tension worth naming.** `content-visibility: auto` with `contain-intrinsic-size` is Baseline since
15 September 2025 and is web.dev's recommended answer for long scrolling indexes. But GSAP's own docs
say to avoid `content-visibility` on ScrollTrigger trigger elements because it breaks position
measurement. **So the catalogue index wants exactly the property its scroll-driven sections cannot
tolerate.** The resolution is that the index and the item route are different pages — which the
three-tier ladder already implies.

## Community sentiment, mid-2026

What practitioners actually say, from threads rather than listicles. Read the limitations note before
weighting this — the cluster is roughly 85% Hacker News.

**The entrance reveal is the most-attacked section pattern of 2026.** David Bushell's "Death to Scroll
Fade" (9 January 2026) reached Hacker News on 18 March 2026 with 412 points and 210 comments, running
overwhelmingly against fade-plus-translate on section entry.

The objection is about control of reading order, not taste. One commenter: forcing sequential reading
stops a reader scrolling to the chunk they are trying to find. Another, a self-described fast
scroller: if the text is not there when they arrive, they assume the site is broken and close it —
**that is a bounce, not a complaint**. Motion-sickness reports in the thread were immediate and
concrete, including one ocular migraine; notably, the same reader reported no discomfort on a site
whose fade was faster, so **duration was the variable, not existence**.

Premium sites get no exemption — Anthropic, Apple and Tesla were all named as scroll-fade users. The
uniformity is attributed to tooling: "now that it's a module everyone can do, everyone literally does
it for every module". Applying one reveal uniformly to every section is the specific tell.

**Scrolljacking sentiment hardened rather than softened.** By July 2026: "The moment I see
scroll-jacking on a website, I bounce. I don't even think twice." No recovery of goodwill appears
anywhere in the corpus. The most useful mechanical framing came from the same thread — scrolljacking
is like turning a screwdriver by twisting a bungee cord, because it destroys the proportional
relationship between input and response. **That is a testable criterion for every pinned, horizontal
or stacked-card concept in this library: does one unit of finger movement still produce one
predictable unit of change?**

**Scroll-snap is judged by scope, not by name.** Component-level horizontal snap is welcomed —
"removing the need for weirdo javascript carousels". Full-viewport vertical snap draws the same
hostility as JS scrolljacking.

**For horizontal sections the complaint is always affordance, never the axis.** Repeated reports of
not realising a section scrolled sideways and finding no scrollbar. Visible scrollbar, edge peek or an
explicit drag cue is the whole difference between praised and abandoned.

**Bento reads as pre-dated.** One commenter called bento grids "the 50s Chevy fins of today". No
enthusiastic defence of bento appears anywhere in the fetched corpus — the absence of praise is itself
the finding.

**The AI-slop tell is a specific combination**, not any one element: large gradient display headings,
heavy rounded corners, very airy spacing, bento card arrangements, and "extremely samey" plan cards.
Commenters mostly blame component-library defaults and model training data rather than Tailwind.

**Proof sections are actively fact-checked.** One reader googled the company names in a "real stories
from real businesses" section and found none existed. Another inferred a product was slow because its
testimonial carousel was slow. **A sluggish or unverifiable proof section damages the exact thing it
exists to build.** An animated marquee of unrecognisable logos was described as making a launch feel
like "vaporware-as-a-service".

**Two counter-currents worth holding onto.** First, sameness is not fatal to everyone: "Boring
competence wins hands down. Users and customers are scouting for competence." What is consistently
punished is decoration in place of substance. Second, there is a persistent, unusually strong appetite
for **density** — several commenters argue modern design sacrifices information density to whitespace.
**A dense, well-organised proof or comparison section is a differentiator with this audience, not a
risk.**

**Playful motion is genuinely enjoyed when the motion is the subject rather than the wrapper.** The
same July 2026 thread that condemned a page's scroll-snap called its jelly components "surprisingly
delightful". Delight is welcomed inside a component; hostility appears the moment it takes over
navigation.

**Reduced motion and reader mode are live escape hatches, not hypotheticals.** Reduced-motion is
inspected publicly within hours of any animated launch. Several readers report injecting
`prefers-reduced-motion` globally or stripping animation with content-blocker filters — meaning the
static fallback is what a meaningful slice of the audience actually sees.

**The current quality bar for motion**, from tonsky's "Every Frame Perfect" (June 2026, 869 points):
screenshot any intermediate frame and be able to defend it. Named failures are sub-elements moving at
different rates, transitions implying a state change that is not happening, and motion following no
logical path.

**Interpretation.** This audience skews developer, desktop and skim-first — which is _also_ a fair
description of a business owner scanning a service site for one fact. The overlap is close enough that
I would weight these findings more heavily than their sample would normally justify.

## Conflicts with guidance already issued

Recorded rather than quietly fixed, per the repository rule on reporting drift.

**The `details`/`summary` accordion recommendation is contested by the strongest sources.** The
taxonomy and the longlist briefs both encouraged exclusive accordions built on the browser's native
one-open-at-a-time behaviour. The accessibility cluster returned the opposite: **both Adrian Roselli
and Scott O'Hara reject `details`/`summary` as an accordion or tab substitute.** The exposed role for
`summary` varies across assistive technology; forcing `role="button"` makes macOS Safari drop the
expanded state; removing the default marker degrades state announcement in VoiceOver, JAWS and NVDA
alike; and Chromium auto-opens `details` on find-in-page. Roselli adds that an accordion needs
coordinated panel state via `aria-controls`/`aria-expanded` plus grouping semantics that `details`
cannot provide.

This affects the disclosure concepts in category G. It does not invalidate them — the compositions
stand — but the implementation route named in their briefs is not the safe one, and the shortlist
should price a properly-wired accordion rather than assuming the platform supplies it for free. The
longlist entries were **not** rewritten to hide this.

**NN/g's definition of scrolljacking is broader than I assumed.** It covers variable scroll rate,
scroll gestures producing horizontal movement, scroll-driven animation, **and pinned or sticky
sections**. By that taxonomy a pinned section with a scrubbed animation _is_ scrolljacking, not a
neutral alternative to it. Category J should be read with that in mind: its budget cap is not
conservatism, it is the whole family being one thing.

The narrow pro-scrolljacking case that survives scrutiny comes from NN/g itself, and every clause
matters: it worked when it progressively disclosed relevant information, ran short, needed few
interactions, sat below the fold, was balanced by non-scrolljacked sections, and **contained no text
to read**.

## Repeated failure modes

Patterns that are popular but frequently badly executed, with the evidence.

**Scrolljacking and pinned text.** Nielsen Norman Group's 2023 usability study found the majority of
participants at least mildly disoriented, comprehension damaged when text sits inside the pinned
region, and the problem "exacerbated on mobile". The explicit recommendation is to keep important
content out of scrolljacked sections.

**Three or more pinned sections on one page.** Each pin adds a page-height multiplier, so the
scrollbar stops predicting the page. This is a failure of **accumulation** rather than of any
individual section — several clusters converged on it independently.

**Horizontal scroll with hover-only arrows.** NN/g's eye-tracking work found the arrows missed
entirely. Content placed sideways-only is effectively unpublished.

**Auto-rotating carousels.** Autoplay that starts on load, runs longer than five seconds and sits
alongside other content requires a pause, stop or hide mechanism at Level A (SC 2.2.2). Independently,
a screen-reader user reading slide 1 can request the next element and land inside slide 2 with no
announcement of the context change — which is why the APG requires rotation to stop on hover and on
focus entry and resume only on explicit activation. The widely-repeated engagement figures ("~1%
interact, 89% of those only with slide 1") circulate through secondary sources; **the accessibility
cluster could not reach a primary source stating them, so treat them as unverified.** The
specification argument does not depend on them.

**Bento grids that collapse naively.** The hero cell that was bottom-right on desktop ends up buried
below six supporting cells. The weighting that made the grid meaningful is the content, so the
single-column form is not a degradation — it is a different section.

**The icon-plus-three-column feature grid.** The single most duplicated composition found. Equal
weight forces three unequal claims into one visual rank, so the reader gets no guidance about which
matters.

**Default Tailwind dressing.** `rounded-lg`, `shadow-md`, `text-gray-600` and indigo accents on white
produce sections that are structurally fine and visually indistinguishable from thousands of others.
One repository catalogues 40+ SaaS sites sharing the same dark-canvas-plus-violet-gradient treatment;
a Hacker News commenter attributes the homogeneity structurally to component libraries plus
generation tools shipping identical defaults.

**Stat bands with no provenance.** Large numerals with no source, no period and no denominator. The
composition does all the persuading and the content does none — and it is trivially fabricated, which
is exactly why buyers discount it.

**Over-produced testimonials.** Studio-shot portraits and generic praise now read as fabrication.
Readers have got sharper at spotting manufactured proof.

**Repeating one mechanic down a page.** Accordion, then accordion, then tabs, then accordion reads as
one mechanic four times. Four consecutive centred-eyebrow-plus-three-cards sections make a long page
feel like one section repeated, and the reader stops registering section boundaries. No catalogue has
any notion of adjacency or page rhythm at all.

**Numbered 1-2-3 process rows.** The layout implies a sequence it does not enforce — nothing makes
step 2 depend on step 1, so it degrades into three cards with digits on them.

**Timelines with evenly-spaced dots.** A two-week sprint and a nine-month programme look identical,
so the section proves only that time passed.

### Patterns that tire when repeated

Ranked by how quickly, from the evidence: pinned or scroll-captured sections (two is noticeable,
three is a corridor); sticky card stacks (cheap to build and therefore repeated); full-bleed display
statements (by the third the reader stops reading them); entrance reveals on everything; marquees;
and the centred-heading-plus-three-cards rhythm.

**Interpretation.** Every item on that list is cheap to build. That is not a coincidence — the
patterns that tire are the ones with the lowest cost per instance, so nothing in the build process
pushes back against repetition. A page-rhythm constraint has to come from the catalogue, because it
will not come from the effort.

## Accessibility, performance and maintainability

The most heavily sourced part of the research. These are specific, documented hazards, not general
caution.

### Accessibility

**Split text is announced letter-by-letter.** Adrian Roselli's February 2026 test matrix covered eight
screen-reader and browser pairings; **only three passed** — NVDA/Firefox, Orca/Firefox and
TalkBack/Chrome. JAWS/Chrome, Narrator/Edge, VoiceOver on macOS Safari, TalkBack/Firefox and
VoiceOver on iPadOS Safari all failed. The common GSAP fix of putting `aria-label` on a `div` is
invalid, because a generic role does not permit an author-supplied name. Splitting also breaks
find-in-page, text selection and machine translation. Roselli's recommendation is to find another
method; whole-word or whole-line masking avoids the problem rather than patching it.

**Scroll containers are not focusable by default** in any browser except Firefox. Safari/WebKit
provides no native keyboard access to scrolling areas at all; Chrome reached stable support only in
version 132. Without `tabindex="0"`, a role and an accessible label, everything past the first
visible card is unreachable by keyboard, speech-input and switch users.

**Pinned sections break focus and scroll-into-view.** The browser has no knowledge of GSAP's
transform, so tabbing to an element below the pin does not bring it into view. GSAP staff
acknowledged this in a September 2025 forum thread without offering a fix.

**Comparison tables must not be re-shaped with CSS display properties.** Some browsers drop table
semantics outright, stranding screen-reader users, and ARIA has no equivalent to HTML's `headers`
attribute, so spanning-cell relationships cannot be repaired afterwards. Containment in a named
focusable region is the supported route.

**WCAG 1.4.10 Reflow** forbids two-dimensional scrolling at 320 CSS px for non-excepted content. A
pinned horizontal reel carrying the section's actual prose fails this unless it collapses to a
vertical stack.

**WCAG 2.3.3** names parallax explicitly; documented reactions include nausea, migraine and needing
bed rest. Colour, opacity and blur changes are excluded from the criterion — so **depth built from
those rather than from position is materially safer**.

**Reduced motion must mean less motion, not an empty page.** Reverting a scrub or a pin does not by
itself produce a sensible static composition. Reviewers now explicitly toggle the setting when
judging. Nothing in GSAP supplies the alternative composition; it is a design obligation.

**Marquees** need `aria-hidden` on the duplicated track, no focusable children, one auto-scrolling
region per page, and full disablement — not merely slowing — under reduced motion.

**Cards.** A stretched `::after` link covering the tile masks the card so text cannot be selected;
wrapping the whole card in an anchor produces unusable announcements. Card grids marked up as rows of
divs lose list shortcuts and item enumeration.

**Relationship diagrams** need a short identifier plus a real long description under W3C's
complex-images guidance, and hover has no touch equivalent — the focus path must be primary, not
parallel.

**Sticky overlays hide focused controls.** WCAG failure F110: tabbing puts focus behind a sticky
layer, failing SC 2.4.11 Focus Not Obscured. The usual mitigation — shaving the overlay so a sliver
of the control shows — technically passes while remaining unreadable, and collapses entirely once a
reader applies text-spacing overrides.

**Full-viewport section boundaries manufacture a false ending.** NN/g's "Illusion of Completeness"
found **six of eight** users on one tested page did not realise they could scroll. Full-screen
content, strong full-width rules, large white gaps and horizontal carousels are the named causes;
letting content bleed past the fold is the countermeasure. This is a direct commercial risk on a
service page — the reader never reaches the proof or the pricing.

**`scroll-snap: mandatory` is not free polish.** Roselli documents it fighting readers who resize
text, zoom or apply text-spacing overrides, content taller than the snap area becoming unreachable
between snap points, arrow-key partial scrolling prevented, plus concrete Chrome and Safari bugs. He
implicates SC 1.4.4, 1.4.10 and 1.4.12, and declined to ship it in his own pattern.

**The new CSS carousel primitives are not production-ready.** Sara Soueidan's verdict on
`::scroll-marker`, `::scroll-button` and `scroll-marker-group`: browsers expose scroll markers as
`tab` within a `tablist` regardless of actual behaviour, several examples ship no tabpanel at all,
markers share one accessible name or none, and visually selected tabs are not selected in the
accessibility tree. Her deeper objection generalises well beyond carousels — **interactive semantics
authored in CSS pseudo-elements vanish in Reader Mode or with CSS unavailable.**

**Tabs are a keyboard contract, not a visual style.** The ARIA APG requires roving `tabindex` with
arrow-key navigation, a `tabindex="0"` panel where the panel holds no focusable content, and
**manual** activation unless panels load without noticeable delay.

**Hover-revealed overlays must be dismissible, hoverable and persistent** (SC 1.4.13). Overlay
content that disappears when the pointer moves onto it, cannot be dismissed with Escape, or vanishes
on a timer fails all three limbs — and is invisible to keyboard and touch users entirely if only
`:hover` triggers it.

**Before/after has a settled accessible solution most implementations ignore:** build on a native
range input with a visually hidden label naming what the control does. Mouse, touch, keyboard and
assistive technology then all work with no custom event handling.

**Avoid `aria-roledescription`,** which the APG's own carousel pattern mandates. Screen readers may
announce both the custom description and the native role, and the custom string is not automatically
translated — so a localised page speaks an English word mid-sentence.

**Motion risk is predictable from three properties**, per Val Head: the relative size of the moving
area, direction and speed mismatch with the reader's own scroll, and the perceived distance covered.
Opacity, colour and blur changes are comparatively safe. **This is a usable design rule, not just a
warning** — and it is the same conclusion WCAG 2.3.3 reaches by a different route.

**`prefers-reduced-motion` means reduce, not none.** web.dev recommends authoring animation by
exception inside `(prefers-reduced-motion: no-preference)`, and warns that a blanket
`animation: none` breaks code depending on animation events; ~1ms durations are the safer kill
switch.

### Performance

**Backdrop blur over moving content** is recomposited every frame; measured 15–30% FPS drops on real
devices, with documented stutter and input lag on Android and Firefox. It survives only in small
surfaces.

**WebGL sections.** Stripe's globe write-up is the honest cost model: a hard 60fps target,
antialiasing disabled, geometry cut from 60,000 to ~20,000 elements, animation paused during scroll,
and a static fallback prepared in advance. A single Spline-class piece can ship 800kB–2MB of JS
before first paint.

**Per-element ScrollTriggers.** Around 125 triggers was enough for Firefox to warn that the page was
slowing the browser down. `ScrollTrigger.batch()` exists precisely for this.

**Scrubbed image sequences** must preload every frame or show blanks. GSAP's own forum answer offers
only "scrub a video instead" as a lighter alternative.

**Dynamic viewport units do not update at 60fps** — browsers throttle them by gesture — so a pinned
full-height frame visibly resizes mid-scroll as the mobile toolbar retracts. `svh` is stable but
permanently short; `lvh` permanently overshoots. **There is no unit that gives both stability and
fit.**

**`content-visibility: auto` and ScrollTrigger are mutually exclusive.** The standard long-page
performance optimisation directly breaks pin position calculation; GSAP's docs say to avoid it.

**`text-wrap: pretty`** is documented as having negative performance impact and is unsuitable for
frequently-updated content; `balance` is capped at 6 lines in Chromium and 10 in Firefox, so applying
it to paragraphs silently does nothing.

**Reveal-on-scroll is a Core Web Vitals liability when built on layout properties.** Scrolling is not
treated as recent input, so the 500ms grace period after a discrete interaction does not apply and
**every scroll-triggered shift counts toward CLS** — good is 0.1 or less, poor is above 0.25. A
section can push a page from good to poor purely through decoration. Transform and opacity stay on the
compositor; `top`, `left`, `margin`, `height` and `box-shadow` do not.

**INP bounds how much JavaScript a section can justify.** Good INP is 200ms or less, poor above 500ms,
and any task over 50ms is a long task. Large DOM size and expensive style and layout recalculation are
the named rendering causes — which is exactly what heavy card grids with per-item observers and
per-letter spans produce.

**CSS scroll-driven animations arrive with a performance story and no motion-safety story.** They run
off the main thread, which is a real advantage, but Chrome's own documentation page for them contains
no accessibility or reduced-motion guidance whatsoever.

### Maintainability

**Pinning injects a `.pin-spacer` wrapper** that changes the DOM your CSS targets, interacts badly
with flex and grid parents, carries its own z-index, and must be re-measured on every resize. It is
described as the single largest source of "works in dev, broken at 1440px".

**Sticky stacked cards with content-driven heights** silently drift as copy changes unless each
card's scroll allocation derives from its own measured height minus the viewport.

**Bento cells positioned with hard-coded span utilities** require recomputing neighbours by hand, and
there is no error when they conflict — the grid just reflows wrongly. The layout is effectively
content-locked.

**Comparison matrices duplicated for small screens** mean every cell exists twice and the two copies
drift within one content cycle.

**Mixing GSAP scroll animation with CSS scroll-driven animation** gives two independent notions of
scroll progress, one off the main thread and one not. Synchronisation is not guaranteed. Pick one
model per page.

**GSAP in React 19 / App Router** needs `useGSAP()` or an explicit `gsap.context()` revert, a scope so
selectors do not escape the component, and `contextSafe()` for handlers. StrictMode double-invokes
effects; client navigation does not destroy triggers.

**Interpretation.** Most of these are not per-section problems. Pin lifecycle, refresh-on-load,
matchMedia scoping and reduced-motion branching are the same code every time — which is an argument
for one shared hook rather than thirty independent implementations.

**Not Baseline, so each needs a designed fallback rather than a shim:** CSS masonry
(`display: grid-lanes`), `interpolate-size` / `calc-size()`, `initial-letter`, and Firefox support for
scroll-driven animations.

## Compositions with a believable small-screen direction

Answering the question directly, because it became a hard gate in the shortlist method.

**Translate well:** sticky column plus rail (the sticky column was only a persistence device — it
becomes a sticky header strip or simply stacks); sticky card decks (native `position: sticky`
reflows); tabs (become an accordion with the same labels and DOM order); accordion with a media pane
(the pane relocates inside the open row); comparison matrix (contained horizontal overflow with a
sticky first column, semantics kept); timeline with sticky era marker (one of the few motion patterns
that genuinely improves on a phone); breakout ladders (full-width figures, measure unchanged);
alternating feature rows (alternation stops mattering); clip-path wipes, text highlight, view-timeline
reveals (width-agnostic); native CSS carousels (better on mobile than desktop).

**Translate badly or not at all:** bento where tile-size hierarchy is the meaning; pinned horizontal
tracks (they become a scroll-snap carousel, which is a _different section_); multi-plane layered
depth; counter-scrolling walls (two directions in 375px is illegible); cursor-relational effects
(no hover state to relate to); drag-to-explore fields (touch drag competes with page scroll);
Observer fullscreen decks (panels overflow the viewport); grid zoom-through; scroll-captured
narrative of any kind.

**The most useful warning found**, from Ahmad Shadeed: the failure is usually not 375px. It is the
**700–1100px band**, where an ambitious composition has already snapped to a full-width mobile stack
while substantial whitespace is still available. Split-screen windows, tablets, resized browsers and
link previews all live there.

## What makes two concepts genuinely different

Sources converge with unusual consistency. A genuine concept difference is a change in at least one
of:

- **what is spatially fixed versus what moves** — sticky copy versus sticky media changes where the
  eye rests and what the reader is asked to do;
- **who drives the change** — scroll, reader, or automatic;
- **the relationship the composition asserts** — peers in a grid, steps in a sequence, two states of
  one artefact, a whole and its detail, a comparison;
- **the reader's activity** — read, hover, drag, toggle, filter, open;
- **how content is revealed** — all-visible, progressive, on-demand;
- **the responsive transformation**, where it changes meaning rather than merely reflowing;
- **the implementation model** — a fixed designed layout versus a recombinable block vocabulary; a
  CSS scroll timeline versus a GSAP timeline versus a WebGL renderer, because that determines what
  the section _is_ at 360px with motion off.

Colour, radius, shadow, typeface, imagery, border treatment, easing curve and theme are **variants**.

The catalogues encode this themselves: Unsection separates 13 section types from 19 style tags;
Chromatic formalises theme, viewport and locale as **modes** applied to one item with their own
baselines, not as separate items; Magic UI ships marquee once with four demos and treats them
correctly as variants.

Two worked distinctions worth keeping:

- Swapping a graphic per step versus **re-framing one persistent graphic** are different concepts
  even with identical markup, because the reader builds one mental model instead of five.
- Scroll-driven and button-driven versions of the same steps are different concepts, because reader
  activity and accessibility profile both differ.

**Interpretation.** Tailwind Plus naming its variants by spatial difference — "Offset 2×2 grid" versus
"Centered 2×2 grid" — is the catalogues' own admission that their families are variant sets rather
than concept sets. That is the line this library's taxonomy draws deliberately.

## What follows for the MindWP library

**Populate what the catalogues do not have.** Comparison, process, proof and artefact, case study,
state change, dense information and editorial composition. This is the library's entire reason to
exist as a build rather than a download.

**Index by behaviour, not only by content role.** No existing catalogue does, and it is the axis this
library is actually about. The taxonomy's spatial-behaviour dimension carries this.

**Cap the scroll-capturing family and make its cost visible.** Pinned and horizontal sections fail by
accumulation. A budget tag at concept level is cheaper than discovering it when composing a page.

**Treat reduced motion as a design deliverable with its own cost.** `rm-designed` marks a section
needing a separately composed static state. That is build cost, not a checkbox.

**Prefer patterns whose resting state is already the finished layout.** The strongest single test
found, and it correlates with almost everything else that matters.

**Build depth from colour, opacity and blur before position.** Explicitly outside WCAG 2.3.3's scope,
and it gets most of the effect for none of the vestibular risk.

**Use whole-word or whole-line masking, never per-character.** Five of eight screen-reader and browser
combinations fail on split characters.

**Do not make the entrance reveal a default.** This is the sharpest change the research produced. A
uniform fade-and-rise on every section is the single most-attacked pattern of 2026, it reads as a
page-builder default rather than a decision, it punishes exactly the skimming buyer this site is for,
and built on layout properties it is a measurable CLS liability. Where a reveal is used, keep it fast
— duration was the reported variable in motion-sickness complaints, not existence — and use it on a
minority of sections, chosen deliberately.

**Apply the bungee-cord test to every scroll-driven concept.** Does one unit of finger movement still
produce one predictable unit of change? It is a better filter than any rule about how much motion is
acceptable.

**Let content bleed past the fold on full-viewport sections.** Six of eight users in NN/g's test did
not realise a page continued. On a service site the sections that get orphaned are proof and pricing.

**Lean into density where the material earns it.** The one clear appetite in the community evidence
that runs _against_ prevailing style is for information-dense, well-organised sections. That aligns
with the under-served families this library is being built to populate.

**Keep the catalogue's own index in this repository.** Hosted platforms shut down. The tool is a
replaceable viewer; the metadata is not.

**Build the catalogue as a three-tier ladder** — poster still in the index, live preview on the item
page, standalone full-bleed route for the real thing. It is what every large catalogue converged on
independently, and it resolves the `content-visibility` conflict for free, because the index and the
section never render on the same page.

**Preview scroll-driven sections with a short scripted scroll recording, poster-framed and
`preload="none"`.** A still cannot distinguish a sticky stack from a scroll-assembled grid, and a live
iframe per card is unaffordable. The poster must be the resting state, not a mid-animation frame.

**Give every section a one-line structural summary in the index.** "Asymmetric six-column bento with
one live cell" is searchable and predicts the layout; a name alone does not. This is the cheapest
useful thing the catalogue can do.

**Record what each section degrades to** — with motion disabled, at 360px, and without JavaScript —
as listed metadata rather than something discovered during a build. The `rm-designed`, `kbd-path` and
narrow-width fields in the longlist already carry this.

**Expect the 700–1100px band to be where sections fail**, and design the intermediate state rather
than patching it.

**Interpretation, and the thing I would most want challenged.** The research strongly rewards
restraint — nearly every failure mode is an ambitious pattern executed without its supporting work.
But a library of a hundred correct, quiet sections would fail its purpose, which is partly to attempt
memorable things. The resolution is not to be less ambitious; it is to be ambitious in the families
where ambition is cheap (typography, composition, density, surface, editorial structure) and
deliberate in the families where it is expensive (pin, horizontal, WebGL, per-character motion).

## Research limitations and uncertainty

**Coverage is uneven by design.** Twelve clusters were weighted toward section composition; adjacent
areas — CMS-driven content modelling, internationalisation of dense layouts, print-adjacent editorial
— were not researched at all.

**Popularity signals are indirect.** Star counts are lagging indicators, and several collections were
found stale despite high counts: Animate UI at 4,073 stars last pushed 2025-12-31; the public 21st.dev
repo at 5,368 stars stale since 2025-05-28; `basementstudio/scrollytelling` at 1,615 stars last pushed
2024-02-22. Where recency mattered, it was checked via the GitHub API on 2026-08-01.

**Some sources could not be verified.** Aceternity, Skiper UI and Annnimate publish no open component
repository, so their claims could not be checked against code. Land-book's taxonomy is reported from
search evidence only — the fetch was blocked. `demos.gsap.com` renders listings client-side, so
server-side fetches returned zero results and its taxonomy was read from documentation and
announcement pages instead.

**Rendered evidence was not gathered.** No page was opened in a real browser, no device testing was
done, and no performance measurement was taken. Every performance figure quoted is a source's
measurement, not mine.

**One risk is explicitly inference, not evidence.** A sticky header row combined with a sticky first
column in one table was flagged as the most compositing-expensive form of a dense section. No source
measuring this was found and it was not tested.

**Community sentiment is time-stamped and moves.** Judgements about what is "overused" reflect
mid-2026. Bento grids read as a cliché now and did not two years ago; the same will happen to
something on the admired list above.

**The community cluster is roughly 85% Hacker News, and that is a real skew.** Reddit — the largest
requested surface, covering r/web_design, r/webdev, r/Frontend, r/tailwindcss and r/userexperience —
was **entirely inaccessible**: fetching is domain-blocked for both `www.reddit.com` and
`old.reddit.com` including JSON endpoints, and search returned zero Reddit results across five
differently-phrased queries including explicit `site:` operators. Bluesky's public search API returned
403; Mastodon search requires authentication; Designer News was unreachable; dev.to's search is
JS-rendered. No Reddit source was cited rather than inventing or inferring any.

Hacker News skews developer rather than designer, skews desktop, and skews toward power users who scan
rather than browse. **Treat the anti-motion findings as a reliable floor of risk rather than a
representative population sentiment**, and treat the absence of pro-bento voices as "not defended on
HN" rather than "disliked everywhere".

**Quote fidelity in the community cluster is near-verbatim, not verified.** Hacker News returned HTTP
429 on every direct attempt, so thread contents came through the Algolia API and were partly
summarised by the fetching model. Short quoted phrases came back verbatim-looking and are reproduced
as given, but were not re-verified against the rendered page. **Re-check any quotation before
reproducing it publicly.** Point and comment counts are as reported by Algolia on 2026-08-01.

**One widely-repeated claim is a community belief, not a measured effect.** Bushell's assertion that
scroll-fade "destroys LCP" is repeated throughout the thread, but he concedes he has no data.

**Three catalogue sites resisted inspection.** Mobbin returned 403 to the browser and DNS-blocked
fetching, so its filters and click-through prototype mode are reported second-hand from search
snippets and should be re-verified. SaaS Landing Page returned 403 and was not inspected at all.
Framer's template detail page, Webflow's template index and Figma Community's browse grid did not
hydrate headlessly (Webflow returned a bot check), so route structures are known but the live facet
UI and preview mechanics are not — **which leaves the single most relevant question unanswered: how
Framer and Webflow present a live preview of full-width scroll-dependent work.**

**Keyboard navigation in catalogues is a negative finding, not a verified absence.** No exposed
shortcuts, roving focus or shortcut legend was found on Landbook, Unsection, shadcnblocks, Recent,
Awwwards or Are.na — but absence of evidence in a headless inspection is weaker than a test would be.

**Godly no longer exists under that name** — `godly.website` now 301-redirects to `recent.design`, so
anything recalled about Godly's older interface is stale.

**Several browser-support facts are version-bound and will drift.** Chrome 132 for stable
keyboard-focusable scrolling areas; Safari 26 for scroll-driven animations; Firefox still behind a
flag; the CSS carousel primitives actively changing. Soueidan's specific bugs may be fixed while her
structural objection — semantics authored in CSS — persists.

**The scrolljacking evidence is one-sided by availability, not by selection.** The best candidate for
balanced academic evidence, a peer-reviewed chapter on scrolljacking and universal design, sits behind
a login and could not be fetched. The pro-scrolljacking case here rests on NN/g's own account of when
it tested acceptably, which is the weakest-evidenced part of the whole sweep.

**The failure register is better sourced than the admiration register.** Accessibility and performance
criticism comes with test matrices, WCAG criteria and measured numbers. "Designers value this" is
softer — inferred from repetition across independent clusters rather than from any survey. Treat the
first as evidence and the second as a strong signal.

**No source was taken as instruction.** Everything fetched was treated as data. Where a page argued
for a practice, the argument is reported as that source's position, not adopted as fact.

## Source list

**288 unique URLs, 281 of which were fetched directly.** Access date for all: **2026-08-01**.
Grouped by source type. `[f]` = fetched; `[s]` = seen in search results only.

### Official documentation (54)

- `[f]` [Atlassian Design System — Components](https://atlassian.design/components) — Categorised text list (Forms and inputs, Layout and structure, Overlays and layering, Status indicators, Primitives, Libraries, Tooling, Deprecated) with inline status labels Beta / Caution / Early…
- `[f]` [Chromatic docs — Animations](https://www.chromatic.com/docs/animations) — CSS animations auto-paused at last frame (`pauseAnimationAtEnd`), video/GIF paused at first frame, but JS animation libraries are NOT controlled — must be disabled via `isChromatic()`, delays, or i…
- `[f]` [Chromatic docs — Modes](https://www.chromatic.com/docs/modes) — One story snapshotted across viewport/theme/locale modes defined in `.storybook/modes.ts`; modes stack across project/component/story and multiply snapshot count; independent baselines and approval…
- `[f]` [Chrome for Developers — Carousels with CSS](https://developer.chrome.com/blog/carousels-with-css) — Chrome/Edge 135+, not Firefox or Safari. ::scroll-button(), ::scroll-marker, ::scroll-marker-group and the scroll-marker-group property give real DOM buttons/markers with roles, focusgroup keyboard…
- `[f]` [Chrome for Developers — CSS scroll-state() container queries](https://developer.chrome.com/blog/css-scroll-state-queries) — Chrome 133+. container-type: scroll-state with @container scroll-state(stuck: top — snapped: x — scrollable: bottom). Enables stuck-header styling, dimming unsnapped carousel items, scroll affordan…
- `[f]` [Chrome for Developers — CSS scroll-triggered animations are coming!](https://developer.chrome.com/blog/scroll-triggered-animations) — Dec 12 2025. animation-trigger / timeline-trigger / trigger-scope: time-based animations fired at a scroll offset, replacing IntersectionObserver for entry reveals. Landing in Chrome 145 (2026).
- `[f]` [Chrome for Developers — Same-document view transitions](https://developer.chrome.com/docs/web-platform/view-transitions/same-document) — startViewTransition, view-transition-name shared-element morphs, rendering blocked during the callback, one transition at a time (a new one skips the current to completion), and guidance to give re…
- `[f]` [Chrome for Developers — Scroll-driven animations](https://developer.chrome.com/docs/css-ui/scroll-driven-animations) — Published May 5 2023, since updated. scroll-timeline vs view-timeline, animation-range names (entry, exit, cover, contain, entry-crossing, exit-crossing), off-main-thread execution. Support: Chrome…
- `[f]` [Chrome for Developers — Styling and animating <details>](https://developer.chrome.com/blog/styling-details) — Chrome/Edge 131+, Firefox 143+, Safari 18.4+. display on <details>, ::details-content, exclusive accordion via name attribute, transition-behavior: allow-discrete plus interpolate-size/calc-size() …
- `[f]` [Chrome for Developers — View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions) — Same-document Chrome/Edge 111+, Firefox 144+, Safari 18+; cross-document Chrome/Edge 126+, Safari 18.2+. view-transition-name, ::view-transition-\* pseudos, @view-transition { navigation: auto }. Do…
- `[f]` [Closeread — Components of a Closeread Document](https://closeread.dev/guide/components.html) — Section binding model: .cr-section containers, cr-prefixed sticky elements of any type (image, paragraph, list, code), triggers bound by cross-reference, focus-on to bind several narrative blocks t…
- `[f]` [Closeread — Focus effects reference](https://closeread.dev/guide/focus-effects.html) — The most precise published grammar for re-framing a persistent artefact: scale-by, pan-to, zoom-to, highlight (line ranges, line lists, span IDs), hlz combined, with documented override rules and e…
- `[f]` [Figma Help — Create and use variants](https://help.figma.com/hc/en-us/articles/360056440594-Create-and-use-variants) — Practical variant definition: members of one set share identical property axes and each must be a unique combination of values; explicitly advises against grouping different icons as variants. A cr…
- `[f]` [GOV.UK Design System — Components](https://design-system.service.gov.uk/components) — Plain alphabetical text index, no thumbnails, no status badges; three-tier site split Styles / Components / Patterns. The extreme low-chrome end of catalogue design.
- `[f]` [GOV.UK Design System — Patterns](https://design-system.service.gov.uk/patterns) — Patterns split into task-stem groups: "Ask users for…" (10), "Help users to…" (12), "Pages" (8). Explicit definition that patterns combine components for user-focused tasks and page types.
- `[f]` [GSAP — ScrollTrigger tips & mistakes](https://gsap.com/resources/st-mistakes) — Referenced via search alongside GSAP forum threads on pin refresh/resize caching, refreshPriority ordering and scroll-behavior:smooth conflicts — the maintenance tax of pinned sections.
- `[f]` [GSAP + React resource (useGSAP)](https://gsap.com/resources/React) — useGSAP hook, scope ref, revertOnUpdate, contextSafe, StrictMode double-invoke — the official cleanup contract for React 19 / Next App Router work.
- `[f]` [GSAP Flip plugin documentation](https://gsap.com/docs/v3/Plugins/Flip) — Flip.getState/from, absolute, nested, scale, targets, onEnter/onLeave, Flip.fit — the toolkit for section-level layout transitions (grid density, grid↔list, filter, expand-to-detail).
- `[f]` [GSAP Helper Functions index](https://gsap.com/docs/v3/HelperFunctions) — Officially maintained reusable building blocks: seamlessLoop, imageSequenceScrub, LottieScrollTrigger, getDirectionalSnapFunc, getScrollLookup, callAfterResize, nestedLinesSplit, stopOverscroll.
- `[f]` [GSAP Observer documentation](https://gsap.com/docs/v3/Plugins/Observer) — Unified wheel/touch/pointer sensing with onUp/onDown/onLeft/onRight, tolerance, lockAxis, wheelSpeed — the basis for section decks that advance on gesture without a fake scrollbar.
- `[f]` [GSAP official skills — Performance & React](https://github.com/greensock/gsap-skills/blob/main/skills/gsap-performance/SKILL.md) — Animate transform/opacity only; avoid width/height/top/left/margin/padding; will-change sparingly; read-then-write to avoid layout thrash; pin conservatively because pinning promotes layers; test s…
- `[f]` [GSAP official skills — ScrollTrigger](https://github.com/greensock/gsap-skills/blob/main/skills/gsap-scrolltrigger/SKILL.md) — 12,761 stars, pushed 2026-07-29, MIT. Documents pin, scrub, containerAnimation horizontal, snap, batch, toggleActions. Explicit anti-patterns: ScrollTrigger on child tweens; scrub + toggleActions t…
- `[f]` [GSAP ScrollSmoother documentation](https://gsap.com/docs/v3/Plugins/ScrollSmoother) — wrapper/content structure, effects:true with data-speed / data-speed='auto' / data-lag for parallax sections, smoothTouch default off, and the position:fixed-breaks caveat.
- `[f]` [GSAP ScrollTrigger documentation](https://gsap.com/docs/v3/Plugins/ScrollTrigger) — Authoritative on pin/pinSpacing/scrub/snap/containerAnimation/batch/matchMedia plus explicit caveats: don't animate the pinned element, ancestor transforms and will-change break position:fixed, con…
- `[f]` [GSAP SplitText documentation (3.13 rewrite)](https://gsap.com/docs/v3/Plugins/SplitText) — autoSplit, onSplit-returns-animation pattern, mask (visibility:clip wrapper) for line/word reveals, aria:'auto' adding aria-label to the parent and aria-hidden to fragments, revert() to drop DOM no…
- `[f]` [gsap.matchMedia() documentation](<https://gsap.com/docs/v3/GSAP/gsap.matchMedia()>) — The official responsive + reduced-motion mechanism: conditions object with isDesktop/isMobile/reduceMotion, automatic revert of every animation and ScrollTrigger created inside the handler when a c…
- `[f]` [Ladle docs — Addons](https://ladle.dev/docs/addons) — Width, preview/full-screen mode, dark theme, RTL, axe, source, controls, background, links, MSW. Key architectural claim: Ladle uses no iframes and keeps stories in the main app; addon state persis…
- `[f]` [Magic UI — Bento Grid docs](https://magicui.design/docs/components/bento-grid) — BentoGrid + BentoCard; each card takes icon, name, description, CTA and an arbitrary React `background` node; placement entirely via col-span/row-start utility classes; hover scales/blurs the backg…
- `[f]` [MDN — CSS container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries) — Size, style and scroll-state queries; cqi/cqb units; container-type: inline-size applies layout, style and inline-size containment and creates a formatting context; a container cannot query itself.…
- `[f]` [MDN — CSS masonry layout (display: grid-lanes)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Masonry_layout) — Syntax is now display: grid-lanes / inline-grid-lanes in Grid Level 3. Explicitly 'not Baseline… does not work in some of the most widely-used browsers'; non-supporting browsers fall back to normal…
- `[f]` [MDN — initial-letter](https://developer.mozilla.org/en-US/docs/Web/CSS/initial-letter) — Size and sink syntax for drop, raised and sunken caps. Marked Limited Availability — not Baseline — and still requires -webkit- prefix; only applies to ::first-letter.
- `[f]` [MDN — interpolate-size / calc-size()](https://developer.mozilla.org/en-US/docs/Web/CSS/interpolate-size) — Animating to auto/max-content heights. Inherited property, one end of the interpolation must be a length-percentage, cannot be enabled web-wide by default, and is flagged 'not Baseline'. Governs in…
- `[f]` [MDN — text-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap) — Baseline 2024. balance capped at 6 lines in Chromium and 10 in Firefox so headings only; pretty explicitly flagged as slower and intended for long body copy, unsuitable for frequently-updated or co…
- `[f]` [Primer (GitHub) — Components](https://primer.style/product/components) — Card list with a Figma preview image per component, name, one-to-two-sentence description, "Learn more" link, plus a filter input. Status lives on a separate page (Experimental / Ready / Deprecated).
- `[f]` [ScrollTrigger.batch() documentation](<https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.batch()>) — Batched entrance reveals with interval/batchMax; explicitly excludes animation, scrub, snap, toggleActions and trigger — so batch is a reveal-only tool, never a pin/scrub tool.
- `[f]` [ScrollTrigger.create() config reference](<https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.create()>) — Full config vocabulary including pinType, pinReparent, toggleClass, preventOverlaps, refreshPriority, once, and the object form of snap (snapTo, duration, delay, directional, inertia, ease).
- `[f]` [ScrollTrigger.normalizeScroll() documentation](<https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.normalizeScroll()>) — Why pins visibly jump (browser scrolls on a separate thread), mobile address-bar resize refreshes, iOS Safari misreporting scroll position since 2017, and GSAP's own admission that this is technica…
- `[f]` [shadcn/ui — 2026 changelog](https://ui.shadcn.com/docs/changelog) — July 2026: server-side dynamic registry search, Toast for Base UI, React Aria as first-class base, @shadcn/helpers, shadcn/typeset. Earlier 2026: Base UI default, GitHub Registries (June), registry…
- `[f]` [shadcn/ui — official blocks page](https://ui.shadcn.com/blocks) — Confirms the official block set is app-shell/auth oriented (dashboard, sidebar-03/07, login-03/04, signup) — no marketing sections at all. The whole full-section space is third-party.
- `[f]` [shadcn/ui — registry-item.json schema](https://ui.shadcn.com/docs/registry/registry-item-json) — Formal distinction between `registry:block` ("complex components with multiple files"), `registry:component`, `registry:ui`, `registry:page`, `registry:style`, `registry:theme`, plus `categories` a…
- `[f]` [Storybook docs — Build pages with Storybook](https://storybook.js.org/docs/writing-stories/build-pages-with-storybook) — Official position on page/screen-level stories: keep everything presentational to the screen level, do connected logic in a wrapper outside Storybook, use args composition to assemble screens from …
- `[f]` [Storybook docs — Story doc block API](https://storybook.js.org/docs/api/doc-blocks/doc-block-story) — `inline` (inline vs iframe), `height` (a real height for iframes), `autoplay` defaulting to false because play functions interfere when many stories render on one docs page, and the fact that `inli…
- `[f]` [Storybook docs — Storybook Composition](https://storybook.js.org/docs/sharing/storybook-composition) — `refs` in main config merge remote/local Storybooks into one sidebar; explicit limitation that addons in composed Storybooks do not work normally.
- `[f]` [Storybook docs — Tags](https://storybook.js.org/docs/writing-stories/tags) — Built-in tags (dev, test, autodocs, manifest, play-fn), custom tags, `!` removal syntax, project/meta/story cascade, sidebar include/exclude filter UI, `defaultFilterSelection` in main config. Page…
- `[f]` [Tailwind Plus — Changelog](https://tailwindcss.com/plus/changelog) — Dated evidence of what the market added recently: Bento Grids category (24 Sep 2024), responsive feature-comparison pricing (3 Oct 2024), dark mode across all blocks (11 Aug 2025), Elements vanilla…
- `[f]` [Tailwind Plus — Content Sections](https://tailwindcss.com/plus/ui-blocks/marketing/sections/content-sections) — Source for the only sticky-column marketing section in the library: "With sticky product screenshot", plus "With image titles" and "With testimonial and stats".
- `[f]` [Tailwind Plus — Feature Sections](https://tailwindcss.com/plus/ui-blocks/marketing/sections/feature-sections) — Exact variant naming ("Offset 2x2 grid", "Contained in panel", "With product screenshot on left") — the most reusable naming convention found anywhere in the cluster.
- `[f]` [Tailwind Plus — Marketing UI Blocks](https://tailwindcss.com/plus/ui-blocks/marketing) — The de facto structural census of marketing sections: 16 page-section categories / 143 blocks (Feature Sections 15, Pricing 12, CTA 11, Team 9, Stats 8, Testimonials 8, Bento Grids only 3, Logo Clo…
- `[f]` [Tailwind Plus — Pricing Sections](https://tailwindcss.com/plus/ui-blocks/marketing/sections/pricing) — Full variant naming including "Three tiers with toggle", "With comparison table", "Three tiers with logos and feature comparison" — the cluster's only state-change and comparison sections.
- `[f]` [Tailwind Plus — Stats](https://tailwindcss.com/plus/ui-blocks/marketing/sections/stats-sections) — Shows that timeline and process patterns are not their own category — they exist only as Stats variants named "Timeline" and "Stepped".
- `[f]` [USWDS — Component lifecycle](https://designsystem.digital.gov/components/lifecycle) — Four phases (Proposal, Development, Released, Deprecated) with named sub-states including "Proposal open for comment" (45-day minimum), "Experimental", "Stable", "Use with caution", "Deprecated", "…
- `[f]` [USWDS — Component status](https://designsystem.digital.gov/components/status) — A single Component/Status table exposing the whole catalogue's maturity at a glance, including pre-existence states like "Discussion started" and "Proposal in progress".
- `[f]` [web.dev — Lazy-loading video](https://web.dev/articles/lazy-loading-video) — preload=none as the only reliable way to avoid loading, poster as an LCP candidate worth preloading with fetchpriority=high, autoplay+muted+loop+playsinline as the GIF replacement, IntersectionObse…
- `[f]` [web.dev — The large, small, and dynamic viewport units](https://web.dev/blog/viewport-units) — lvh/svh/dvh. Key line for pinned sections on mobile: dynamic viewport values 'do not update at 60fps' and are throttled or debounced per gesture. svh is stable but always the short measurement.

### Specifications and standards (12)

- `[f]` [MDN — CSS scroll-driven animations](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations) — Reference for scroll()/view() timelines, animation-timeline, view-timeline-inset, animation-range, timeline-scope, and the @supports feature-detection guard MDN recommends for graceful degradation.
- `[f]` [Scott O'Hara — The details and summary elements, again](https://www.scottohara.me/blog/2022/09/12/details-summary.html) — Role mapping for summary varies across AT; forcing role=button loses expanded state in macOS Safari; removing the default marker degrades state announcement in VoiceOver, JAWS and NVDA; Chromium op…
- `[f]` [W3C — Failure F110 (sticky header/footer obscuring focus)](https://www.w3.org/WAI/WCAG22/Techniques/failures/F110.html) — Named failure of 2.4.11 when a sticky header or footer completely hides the focused element while tabbing; the document itself gives no remediation technique.
- `[f]` [W3C — Understanding SC 1.4.13 Content on Hover or Focus](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html) — Level AA. Dismissible, hoverable, persistent — directly binding on hover-revealed card overlays, hover captions in grids and custom tooltips in dense information sections.
- `[f]` [W3C — Understanding SC 2.2.2 Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html) — Level A. Auto-starting movement lasting over five seconds and presented in parallel with other content needs a pause/stop/hide mechanism; auto-advancing presentations and auto-updating content are …
- `[f]` [W3C — Understanding SC 2.3.3 Animation from Interactions (WCAG 2.2)](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html) — Names parallax scrolling and scroll-triggered horizontal movement explicitly; vestibular reactions include nausea, migraine and bed rest. Excludes pure colour/opacity/blur changes. Governs layered/…
- `[f]` [W3C — Understanding WCAG 1.4.10 Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html) — 320 CSS px requirement (1280px at 400% zoom). Two-dimensional scrolling permitted only for the excepted content itself — data tables, maps, diagrams — and each carousel panel must still fit 320px.
- `[f]` [W3C — Understanding WCAG 2.3.3 Animation from Interactions](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html) — AAA criterion targeting parallax and decorative motion triggered by scrolling. Essential scrolling movement is allowed; decorative elements moving horizontally while the page scrolls vertically req…
- `[f]` [W3C ARIA APG — Carousel pattern](https://www.w3.org/WAI/ARIA/apg/patterns/carousel) — aria-roledescription='carousel'/'slide', accessible name, previous/next controls, mandatory stop-rotation button with dynamically updating label, stop on keyboard focus and hover, and the specific …
- `[f]` [W3C WAI — ARIA Authoring Practices Guide: Accordion pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion) — Header button inside a heading with correct aria-level, aria-expanded, aria-controls; aria-disabled on a non-collapsible open header; avoid role=region on panels once six or more can be open at once.
- `[f]` [W3C WAI — ARIA Authoring Practices Guide: Tabs pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs) — Arrow-key navigation with roving tabindex, automatic vs manual activation trade-off, and the rule that a tabpanel with no focusable content needs tabindex=0.
- `[f]` [W3C WAI — Images Tutorial: Complex Images](https://www.w3.org/WAI/tutorials/images/complex) — Two-part alternative required for diagrams, charts and maps: short identifier plus a real long description, delivered by adjacent link, alt-pointer, or figure/figcaption. The contract that interact…

### Original repositories (24)

- `[f]` [Animate UI — repo registry tree](https://github.com/imskyleen/animate-ui) — Retrieved via GitHub REST API tree. 4,073 stars but pushed 2025-12-31 (≈7 months stale), 16 open issues. 73 components + 81 primitives + 260 icons, organised as animate/base/buttons/community/headl…
- `[f]` [awesome-design-md — linear.app DESIGN.md](https://github.com/voltagent/awesome-design-md/blob/main/design-md/linear.app/DESIGN.md) — Reverse-engineered spec of Linear's marketing composition: ~1280px cap, 3→2→1 card collapse, 96px section rhythm, four-step surface ladder instead of shadows, top-edge white hairline on lifted pane…
- `[f]` [awesome-design-md — Raycast DESIGN.md](https://github.com/VoltAgent/awesome-design-md/blob/main/design-md/raycast/DESIGN.md) — Same treatment for Raycast: one continuous dark canvas, 96/64/48px section rhythm, radius clustering 4–16px, hairline #242728 borders, no shadows, and the explicit rule that the hero gradient band …
- `[f]` [basementstudio/scrollytelling](https://github.com/basementstudio/scrollytelling) — Retrieved via GitHub REST API. 1,615 stars but last pushed 2024-02-22 — the declarative React wrapper over GSAP ScrollTrigger was popular then abandoned. Relevant negative signal for over-abstracti…
- `[f]` [codrops/ScrollBasedLayoutAnimations (GitHub)](https://github.com/codrops/ScrollBasedLayoutAnimations) — Original demo repo for scroll-driven layout switching using ScrollTrigger + Flip — the reference implementation for 'same items, different layout at each scroll stage'.
- `[f]` [Cult UI — repo registry listing](https://github.com/nolly-studio/cult-ui) — Retrieved via GitHub REST API. 6,009 stars, pushed 2026-07-22, MIT. ~83 registry files; section-scale ones are feature-carousel, three-d-carousel, logo-carousel, tweet-grid, texture-card, minimal-c…
- `[f]` [Eldora UI — registry.json](https://github.com/karthikmudunuri/eldoraui) — Retrieved via raw.githubusercontent. 1,951 stars, pushed 2026-04-18, MIT. Registry has shrunk to 13 registry:ui items — safari-browser, macbook-pro, iphone-17-pro, ipad, browser, cobe-globe, marque…
- `[f]` [HenrikZabel/linearlike](https://github.com/HenrikZabel/linearlike) — Archived Jan 2025 catalogue of 40+ SaaS sites that adopted the Linear aesthetic (Clerk, Resend, Cursor, Vercel, shadcn/ui, Superhuman…). Direct evidence of homogenisation; the repo itself notes man…
- `[f]` [Kokonut UI — registry.json](https://github.com/kokonut-labs/kokonutui) — Retrieved via raw.githubusercontent. 1,986 stars, pushed 2026-07-27, MIT, 0 open issues. Exactly 40 components; only bento-grid, card-stack, carousel-cards, smooth-tab, shape-hero, scroll-text are …
- `[f]` [Lenis — darkroomengineering/lenis (GitHub)](https://github.com/darkroomengineering/lenis) — 15.2k stars, 640 forks. Wraps native scroll rather than replacing it, so position:sticky, anchors and accessibility survive. Documented limits: no CSS scroll-snap (separate snap plugin), 60fps cap …
- `[f]` [Magic UI — registry.json (source of truth)](https://github.com/magicuidesign/magicui) — Retrieved via raw.githubusercontent. 21,758 stars, pushed 2026-07-31, MIT, 0 open issues. Registry = 75 registry:ui + 133 registry:example. Only ~10 are section-scale (bento-grid, marquee, arc-time…
- `[f]` [masonic — high-performance masonry for React](https://github.com/jaredLunde/masonic) — Red-black interval tree for O(log n + m) visible-cell lookup, overscanBy default 2 viewports, itemHeightEstimate default 300px, ResizeObserver reflowing only affected columns, useInfiniteLoader wit…
- `[f]` [Motion Primitives — repo component listing](https://github.com/ibelick/motion-primitives) — Retrieved via GitHub REST API. 5,778 stars, pushed 2026-03-19, MIT, 34 open issues. 33 core components; section-relevant: carousel, accordion, disclosure, image-comparison, in-view, infinite-slider…
- `[f]` [Origin UI → COSS (Cal.com design system)](https://github.com/origin-space/originui) — Retrieved via GitHub REST API; the repo now redirects to cosscom/coss, 10,366 stars, pushed 2026-07-31, AGPL-3.0, described as the official design system of Cal.com. Origin UI's ecosystem successor…
- `[f]` [Rauno Freiberg — Web Interface Guidelines](https://github.com/raunofreiberg/interfaces) — Widely-cited craft rules from a Vercel staff design engineer: ≤200ms for interaction feedback, scale from 0.8–0.96 not 0→1, pause looping animations offscreen, @media (hover:hover) for hover states…
- `[f]` [React Bits — GitHub repo](https://github.com/DavidHDev/react-bits) — 44,579 stars, pushed 2026-07-31, MIT + Commons Clause, only 7 open issues. 140+ components in Animations / Backgrounds / Components / TextAnimations. Ships 4 code variants per component (JS-CSS, JS…
- `[f]` [Scrollama (russellsamora)](https://github.com/russellsamora/scrollama) — Names the four canonical scrollytelling patterns — basic, sticky graphic side-by-side, sticky graphic overlay, progress — and moved to native position:sticky in v2. v3.2.0 current; mobile example u…
- `[f]` [shadcn-ui/ui — GitHub repo + issue search](https://github.com/shadcn-ui/ui) — Retrieved via GitHub REST API. 120,236 stars, pushed 2026-07-31, MIT, 2,196 open issues. Top-reacted requests: Multi select (#66, 306), Datepicker year select (#546, 260), Timeline (#949, 176), Rad…
- `[f]` [shadcn/ui — block-viewer.tsx source](https://github.com/shadcn-ui/ui/blob/main/apps/v4/components/block-viewer.tsx) — ResizablePanelGroup plus a ToggleGroup of 100%/60%/30%, iframe keyed by an iframeKey counter for hard refresh, recursive file Tree, React context for active file and view mode.
- `[f]` [SmoothUI — repo tree](https://github.com/educlopez/smoothui) — Retrieved via GitHub REST API tree. 870 stars, pushed 2026-07-31, MIT. Ships numbered section blocks each with a colocated .test file: cta-1..3, faq-1..4, features-1..3, footer-1..4, header-1..6, l…
- `[f]` [Storybook GitHub — Issue #5598, iframe scroll not reset between stories](https://github.com/storybookjs/storybook/issues/5598) — Filed 15 Feb 2019, closed in the v5.0.0 milestone. Direct evidence that the preview iframe carries scroll state across story switches — the exact failure mode for tall scroll-driven sections.
- `[f]` [Storybook GitHub — Issue #7724, scrollbars always in the story iframe](https://github.com/storybookjs/storybook/issues/7724) — Opened 8 Aug 2019. Persistent iframe scrollbars change component appearance and produce false-negative visual test images — evidence that the canvas chrome contaminates full-bleed previews.
- `[f]` [Tailark blocks — repo directory structure](https://github.com/tailark/blocks) — Retrieved via GitHub REST API tree. 2,268 stars, pushed 2026-07-29, MIT. Organised as registry/bases/{base,radix}/{dusk,mist,veil,quartz}/blocks/{hero-section, features, content, call-to-action, fa…
- `[f]` [UI Layouts — repo registry tree](https://github.com/ui-layouts/uilayouts) — Retrieved via GitHub REST API tree. 3,542 stars, pushed 2026-07-12. The richest genuinely section-scale open set: scroll-animation (sticky-hero-scroll, framer-horizontal-scroll, repeat-scroll, text…

### Official project sites (46)

- `[f]` [Aceternity UI — Apple Cards Carousel](https://ui.aceternity.com/components/apple-cards-carousel) — Horizontal drag/scroll rail where a card expands into an overlay via layout animation; uses useOutsideClick on mousedown/touchstart. Props: items, initialScroll, layout.
- `[f]` [Aceternity UI — Components](https://ui.aceternity.com/components) — The Tailwind-adjacent motion library that carries the section families the classic block libraries omit: Sticky Scroll Reveal, Parallax Scroll, Hero Parallax, Card Stack, Apple Cards Carousel, Macb…
- `[f]` [Aceternity UI — Scroll & Parallax category](https://ui.aceternity.com/categories/scroll) — Only 5 components in the whole scroll category (Parallax Scroll, Sticky Scroll Reveal, Macbook Scroll, Container Scroll Animation, Hero Parallax) plus a 'Coming Soon' notice — evidence that scroll-…
- `[f]` [Aceternity UI — Sections category & Pro](https://ui.aceternity.com/pro) — Pro inventory: 21+ hero sections, 20+ feature sections, 6+ bento grids, 6+ logo clouds, 11+ background blocks, 3+ shader blocks, plus SaaS/agency/portfolio/studio templates. Lifetime one-time licen…
- `[f]` [Aceternity UI — Timeline component](https://ui.aceternity.com/components/timeline) — Described as a timeline with sticky header and scroll beam follow; data is an array of {title, content: ReactNode}. Concrete reference for the sticky-heading + scroll-linked beam pattern.
- `[f]` [Annnimate (Good Fella studio)](https://annnimate.com) — 70+ GSAP components for React/Vue/HTML across Buttons, UI, Scroll, Sections, Menus, Experimental, Shaders. Subscription €29/mo solo, €99 studio, €179 studio+; 'Landmark' kits €149 one-time. Browsab…
- `[f]` [Awwwards — Developer Award](https://www.awwwards.com/developer-award) — Dev jury criteria emphasis: mobile optimisation, accessibility for visual/hearing impairment, legacy-browser adaptability, 'pushing boundaries without excluding the masses'.
- `[f]` [Awwwards — Evaluation system](https://www.awwwards.com/about-evaluation) — Official weighting: Design 40%, Usability 30%, Creativity 20%, Content 10%; minimum 18 jurors, outlier scores dropped; SOTD winners passed to a developer jury, >7 earns the Developer Award. Useful …
- `[f]` [Backlight (divRIOTS)](https://backlight.dev) — Site carries the notice that Backlight.dev is shutting down 1 June 2025 — direct evidence of churn in commercial design-system tooling.
- `[f]` [Build UI — Recipes](https://buildui.com/recipes) — Sam Selikoff/Ryan Toronto's named interaction recipes; useful as a catalogue model because each entry is one named behaviour, and it shows the split between component-scale (animated tabs, gradient…
- `[f]` [Butterick's Practical Typography — index](https://practicaltypography.com) — Full device vocabulary for long documents: block quotations, bulleted/numbered lists, rules and borders, tables, widow/orphan control, column layouts, first-line indents, small caps, ligatures.
- `[f]` [Butterick's Practical Typography — Summary of key rules](https://practicaltypography.com/summary-of-key-rules.html) — Numeric authority for measure and body text: 45–90 characters per line, 15–25px web point size, 120–145% line spacing, indent OR paragraph space not both, sparing centred text, 5–12% letterspacing …
- `[f]` [Cruip](https://cruip.com) — Sells whole coded templates (Artifact, Relay, Cadence, Flux, Stellar, Open PRO) rather than sections; positions on "motion-driven sections" and dark/refined/premium aesthetics — evidence that motio…
- `[f]` [daisyUI — Components index](https://daisyui.com/components) — Confirms daisyUI is component-level (Actions / Data display / Navigation / Feedback / Data input / Layout / Mockup) with no marketing section catalogue; but it holds rare primitives — Diff, Stack, …
- `[f]` [daisyUI — Diff component](https://daisyui.com/components/diff) — The cluster's only before-and-after comparison primitive: diff / diff-item-1 / diff-item-2 / diff-resizer, with tabindex=0 and role="img" for keyboard and screen-reader handling.
- `[f]` [Demo Hub — Pinned panels with overscroll](https://demos.gsap.com/demo/pinned-panels-with-overscroll) — Official reference implementation of the pin + pinSpacing + scrub overlapping-panel section; each demo page lists plugin, the specific features used, categories and a CodePen embed.
- `[f]` [Flowbite Blocks](https://flowbite.com/blocks) — 459 blocks across 78 categories with counts, split by domain (Marketing UI / Application UI / E-commerce UI / Publisher UI); Hero 18, Feature 10, CTA 10, Content 9, Social Proof 6, FAQ 5, Testimoni…
- `[f]` [GSAP — Scroll (capability showcase)](https://gsap.com/scroll) — Names the small set of reusable scroll devices GSAP itself promotes: pinned sections, scrubbed timelines, data-speed parallax/trailing via ScrollSmoother, scroll-linked animation, Observer event de…
- `[f]` [GSAP — UI (capability showcase)](https://gsap.com/ui) — Names Flip (state-to-state layout transitions, reparenting, grid/flex changes) and Draggable+Inertia as the two structural UI primitives; community demos show Flip cart, radial picker via Observer.
- `[f]` [GSAP 3.13 release blog](https://gsap.com/blog/3-13) — 29 April 2025: entire toolset free including SplitText, MorphSVG, DrawSVG; SplitText rebuilt 50% smaller with 14 new features; CSS variable animation added.
- `[f]` [GSAP 3.14 release blog](https://gsap.com/blog/3-14) — 8 December 2025: MorphSVG smooth/curveMode, and the launch of demos.gsap.com with the first 50 curated demos organised by plugin plus filtering by properties and features.
- `[f]` [GSAP Demo Hub](https://demos.gsap.com) — The catalogue itself: dual taxonomy (Categories × Plugins), framework filter (Webflow/React/Next/Svelte/Vue), ⌘/ search, thumbnail cards with truncated tag lists, favourites, Featured/Latest/All vi…
- `[f]` [Histoire](https://histoire.dev) — Vite-powered story tool for Vue 3 and Svelte only; advertises auto-generated source, dark mode, no-config. Narrower framework reach than Storybook/Ladle.
- `[f]` [HyperUI — Marketing components](https://hyperui.dev/components/marketing) — Free copy-paste library, 21 marketing categories with counts (Footers 24, Blog Cards 13, Announcements 12, Feature Grids 8, Pricing only 2) and per-category "Updated" badges.
- `[f]` [Klim Type Foundry](https://klim.co.nz) — Live composition: family-with-variant hierarchical listings, 2–3 sentence design-argument paragraphs per face, In Use gallery with image counts and the typeface named per project, 'See all fonts →'…
- `[f]` [Made With GSAP](https://madewithgsap.com) — SOTD 30 Jul 2026 + Developer Award; 110 numbered JS/GSAP effects, weekly cadence, drag-to-explore catalogue, explicitly no Canvas/WebGL and 'fully adaptable' to content changes.
- `[f]` [Meraki UI — Components](https://merakiui.com/components) — Marketing set of 13 categories / 165 components; near-identical generic core (Heroes, Features, Pricing, Testimonials, CTA, FAQ, Team, Footers) plus the unusual Portfolio and Email Templates.
- `[f]` [Motion Primitives Pro](https://pro.motion-primitives.com) — $149 perpetual, 50+ components and sections. Sold section families: CTA, FAQ, Feature, Footer, Hero, Testimonials, Team, Logo Cloud, Navigation — i.e. the paid market is the same seven-family taxon…
- `[f]` [Osmo — Resources collection](https://www.osmo.supply/collection) — ~190+ GSAP-based production components. Catalogue is organised by mechanism rather than page role: Scroll Animations, Text Animations, Cursor Animations, Page Transitions, Hover Interactions, Slide…
- `[f]` [Park UI](https://park-ui.com) — Ark UI + Panda CSS, React/Solid/Vue. Demonstrates auth forms, product cards, cart, payment, notification settings, pricing plans — application UI patterns, not full page sections.
- `[f]` [Preline UI — Blocks index](https://preline.co/blocks) — Largest and most finely-grained taxonomy in the cluster; contains the rare categories Timelines, Sticky Layouts, Scroll Navigation, Card Tabs, Marquee, Content Showcases.
- `[f]` [Preline UI — Content Showcases](https://preline.co/blocks/marketing/content-showcases) — One of the very few library treatments of case-study and service-listing sections: Case Studies Grid, Project Showcase Grid, Service Listing Section, Media Card Grid.
- `[f]` [Preline UI — Examples](https://preline.co/examples.html) — 944 blocks across 195+ named families. The most granular public taxonomy found; splits Gallery Grids vs Gallery Sliders, Pricing Cards vs Pricing Tables. Timelines (6) sit under Data Display, not m…
- `[f]` [Preline UI — Marketing blocks](https://preline.co/blocks/marketing) — Groups sections by persuasion purpose (Trust & Social Proof, Content & Editorial, Pricing & Conversion, Website Foundations) rather than by form — a distinctly different catalogue model to Tailwind…
- `[f]` [Preline UI — Marquee](https://preline.co/blocks/marketing/marquee) — Documents Vertical Marquee, 3D Marquee, Finance Ticker, Sliding Client Logos, with hover:[animation-play-state:paused] and a prefers-reduced-motion reduce rule — the clearest motion-accessibility p…
- `[f]` [Rest of World](https://restofworld.org) — Editorial homepage composition: themed series packages with branded headers and a directional 'more' link, category label above headline, standfirst between headline and byline, read-time in muted …
- `[f]` [Scroll-Driven Animations (Bramus, Chrome DevRel)](https://scroll-driven-animations.style) — Named pure-CSS demo set: reading progress indicator, carousel step indicator/markers, reverse-scrolling columns, horizontal scroll section, cover-card→fixed header, image reveals, fly-in/fly-out co…
- `[f]` [shadcnblocks](https://www.shadcnblocks.com/blocks) — 1,816 blocks across ~100 flat categories with counts. Shows the extreme concentration (Feature 311, Hero 247, Pricing 96, Bento 53, Background Pattern 52) and the thin long tail (Process 4, Compare…
- `[f]` [Stripe engineering — To design and develop an interactive globe](https://stripe.com/blog/globe) — Primary account of a bespoke section artefact: three-layer Three.js construction, 60fps hard requirement, antialiasing disabled, dot count cut 60k→20k, animation paused during scroll, static image …
- `[f]` [Tailblocks](https://tailblocks.cc) — Minimal free set whose 15 categories include STEP and GALLERY — two families almost nobody else names as marketing sections.
- `[f]` [Tailwind Plus — UI Blocks](https://tailwindcss.com/plus/ui-blocks) — The dominant section-catalogue schema: Marketing / Application UI / Ecommerce, then Page Sections split into 16 named families with per-family counts (Feature Sections 15, Content Sections 7, Bento…
- `[f]` [The Pudding — index](https://pudding.cool) — Catalogue behaviour of a large editorial archive: numbered issues (#224 Jul 2026 downward), tab filters All / Our Faves / Popular / Updating / Your Input / Video / Audio, thumbnail-first grid with …
- `[f]` [The Pudding — Making Internet Things, part 3: Storytelling](https://pudding.cool/process/how-to-make-dope-shit-part-3) — Practitioner cautions on scrollytelling: fire all step animations at the start of the step because readers scroll fast; browser performance under many transitions; the stacked-chart and stepper alt…
- `[f]` [Tufte CSS](https://edwardtufte.github.io/tufte-css) — Canonical demo of the margin-column article: numbered sidenotes, unnumbered margin notes, margin figures, full-width figures, epigraphs, three-level heading limit, off-white/off-black palette. Docu…
- `[f]` [Vercel — Design Engineering at Vercel](https://vercel.com/blog/design-engineering-at-vercel) — States the working method behind these sections: prototype in code because animation/keyboard/touch are better implemented there; a shared internal component system spans marketing and product surf…
- `[f]` [Vercel — How to build an engaging virtual product tour](https://vercel.com/blog/designing-the-vercel-virtual-product-tour) — Detailed build of a self-paced interactive product section: URL-synced slide index, tooltipContentMap, ResizeObserver-throttled repositioning, carousel-modelled ARIA, and a separate card-based mobi…

### Studio and agency sites (14)

- `[f]` [14islands](https://www.14islands.com) — Primary. Source for the category-tagged work grid (each card = thumbnail + client + industry tag such as Luxury / AI Tech / Gaming) plus a condensed text-only overflow index below it.
- `[f]` [Akaru](https://www.akaru.fr/en) — Primary. Source for expertise presented as five numbered cards (01–05) with bullet sub-capabilities, a project carousel with year + category metadata, and an awards tally block (35 Awwwards, 19 FWA).
- `[f]` [BASIC/DEPT® — Services](https://www.basicagency.com/services) — Primary. Source for the numbered capability section pattern (01/04–04/04) where each capability owns two case-study cards beneath it — linear progressive reveal, explicitly not accordions or tabs.
- `[f]` [Buzzworthy Studio — Studio page](https://buzzworthystudio.com/studio) — Primary. Source for the manifesto-plus-milestone-timeline section (2014→2023 with year markers), a seven-person leadership grid, and a three-platform awards proof block.
- `[f]` [Codrops — Obys: The Small Studio Designing Big Digital Narratives (Mar 2026)](https://tympanus.net/codrops/2026/03/06/obys-the-small-studio-designing-big-digital-narratives) — Studio-stated composition doctrine: 'structure is emotional', break the grid only if you understand it, alternate dense visual sections with calm readable blocks, scroll-controlled PNG sequences.
- `[f]` [darkroom.engineering](https://darkroom.engineering) — Primary studio site. Source for the three-column reference matrix (9 services / 9 clients / 11 technologies), the quality-tagged testimonial trio, the open-source tooling section, and a dated rever…
- `[f]` [Lexington Themes](https://lexingtonthemes.com) — 89 Astro + Tailwind templates organised by business vertical (Agency, Services, SaaS, Portfolio, Photography, Directory…) rather than by section type — a vertical-first, not pattern-first, catalogue.
- `[f]` [Locomotive — Agency page](https://locomotive.ca/en/agency) — Primary studio site. Source for the numbered capability ledger (01 Design / 02 Development / 03 Operations), the two-bucket capability list (Digital vs Branding), the team census split by function …
- `[f]` [Metabole Studio — Scrollytelling: complete guide for premium narrative websites](https://metabole.studio/en/blog/scrollytelling) — Production discipline from a studio: storyboard each scroll 'scene' first; pick the one moment that deserves it; preserve breathing space, exit points and visible CTAs; respect reduced-motion; keep…
- `[f]` [Obys Agency](https://obys.agency) — Typography-led studio. Source for the dense numbered project index (01–19) with dual metadata rows (industry tags + service descriptors) and the 'Vertical, Horizontal, Grid' system statement.
- `[f]` [Obys® Experiment Space — About](https://experiment.obys.agency/about) — SOTD 28 Jul 2026; archive-as-environment model — 32 numbered fragments 2019–2026, moving between 'structured forms and horizontal streams of visual material'; explicitly desktop-first.
- `[f]` [OFF+BRAND studio site](https://www.itsoffbrand.com) — Site of the Year 2025 studio; readable section sequence — typographic hero with progressive percentage indicators, manifesto block, trust field, 11-card work gallery, 9-cell services grid, counted …
- `[f]` [Springload — Klim Type Foundry case study](https://www.springload.co.nz/work/klim) — Named devices: randomised specimen generation from a rule set, per-typeface colour themes, toggleable grid overlay, glyph inspector with OpenType feature toggles plus alignment, column count, line-…
- `[f]` [TRIONN studio site](https://trionn.com) — SOTD 27 Jul 2026; section sequence of hold-to-blast hero, philosophy block, quantified key-facts grid (050+, 90%, 020+), awards field — a business-owner-facing structure under award-grade craft.

### Showcases and catalogues (47)

- `[f]` [21st.dev — registry marketplace](https://21st.dev) — 2,000+ marketing blocks, 2,100+ UI components, 700+ author profiles with per-author counts (Aceternity UI listed at 87 components). Live preview, 'AI-ready prompt' copy alongside shadcn CLI command…
- `[f]` [Are.na — Explore](https://www.are.na/explore) — Minimal chrome: View All/Channels/Blocks and Sort Recently-updated/Random. All facets serialised in the URL, including empty ones: /explore?type=CHANNEL&sort=UPDATED_AT&block_filter=&where=
- `[f]` [Awwwards — 2xA Studio SOTD page](https://www.awwwards.com/sites/2xa-studio) — Rare published sub-scores: SOTD 7.22 (design 7.32 / usability 6.92 / creativity 7.45 / content 7.28), Dev 7.53 with animations 8.20, responsive 7.40, accessibility 6.60.
- `[f]` [Awwwards — Case Study: Immersive Garden's new website](https://www.awwwards.com/case-study-immersive-gardens-new-website.html) — Studio-authored. Source for Roman-numeral wayfinding anchors across sections, GSAP + Lenis + three.js stack, a 'Backstage' behind-the-scenes section, and GPU/memory discipline (KTX compression, cha…
- `[f]` [Awwwards — Collections index](https://www.awwwards.com/awwwards/collections) — 99 curated collections; named ones include Horizontal Scrolling, Layout, Grid Layout, Transitions, Galleries and SlideShows, Hovers/Cursors, UI Animation and Microinteractions, Typography in Web De…
- `[f]` [Awwwards — element: Stacking cards (Faktory)](https://www.awwwards.com/inspiration/stacking-cards-faktory) — Representative single-element record showing how a section pattern is tagged ('scroll effect', 'sticky') and attributed to a live site.
- `[f]` [Awwwards — Elements library](https://www.awwwards.com/elements) — The single most useful catalogue taxonomy found: ~48 element types (Scroll, Transition, Layout, Stats, Team, Gallery, Pricing page, FAQ, CTA, Mouse Interaction, Loading, Modal/Popup…) plus 26 colou…
- `[f]` [Awwwards — Horizontal Layout Websites collection](https://www.awwwards.com/awwwards_collections/collections/horizontal-layout-websites) — 75-item curated collection. The collection's own framing concedes horizontal scrolling is 'a less natural interaction'. Also the clearest example of catalogue mechanics: WEBSITE vs ELEMENT typing, …
- `[f]` [Awwwards — Igloo Inc case study](https://www.awwwards.com/igloo-inc-case-study.html) — Site-of-the-Year build breakdown: three-section landing, per-project procedurally varied ice blocks, particle 'links' section, WebGL UI with SDF text scramble to avoid style recalc.
- `[f]` [Awwwards — Layout collection](https://www.awwwards.com/awwwards/collections/layout) — 168 items; concrete named layout devices — Studio Pic list/grid view, Kin 'Layout Switch', Hennessy horizontal layout, Pasticceria Verona horizontal scroll navigation.
- `[f]` [Awwwards — Locomotive wins Site of the Month (studio case study)](https://www.awwwards.com/locomotive-by-locomotive-wins-site-of-the-month-june-a-case-study.html) — Studio-authored breakdown. Source for the modular case-study block system (text/image/video/parallax/colour/3D/device-mockup blocks composed by designers in CMS), lerp-based motion consistency, dra…
- `[f]` [Awwwards — Sites of the Day](https://www.awwwards.com/websites/sites_of_the_day) — Live SOTD roll for late July 2026 (2xA Studio, CIAO ENERGY, Made With Gsap, Obys Experiment Space, TRIONN, Partizan) plus the site-wide tag/technology/country taxonomy.
- `[f]` [Awwwards — Sites of the Year list](https://www.awwwards.com/websites/sites_of_the_year) — Full SOTY lineage 2017–2025 with studios (Lando Norris/OFF+BRAND and Messenger/abeto 2025; Igloo Inc 2024; Lusion v3, Noomo 2023).
- `[f]` [Awwwards — Typography websites](https://www.awwwards.com/websites/typography) — Filter vocabulary across six independent axes: Tags (typography, scrolling, 3D…), Categories (industry), Technologies (100+), Fonts (Druk, Circular, Calibre…), Colors by hex, Countries, plus award …
- `[f]` [Awwwards — Winning websites index](https://www.awwwards.com/websites) — Inspected live DOM: four facet families (award, industry, element/technique tag, technology) each exposed as its own clean path route /websites/{tag}/; cards carry an embedded JSON payload for the …
- `[f]` [Codrops — Creative Hub / demos catalogue](https://tympanus.net/codrops/demos) — Primary evidence for catalogue organisation: 100+ tags with item counts (WebGL 320, Three.js 263, GSAP 207, scroll 178, hover 144, grid 138, typography 110), plus curated thematic rails (Featured P…
- `[f]` [Codrops — GSAP Highlights demo collection](https://tympanus.net/codrops/hub/gsap-highlights) — 44 named GSAP demos. Used as a census of which scroll/section patterns get built and re-built: sticky grid, pinned mask reveal, grid-to-full-preview, layout transitions with Flip, draggable product…
- `[f]` [Codrops — scroll tag index](https://tympanus.net/codrops/tag/scroll) — Dated index of scroll-section techniques (Jul 2026 back to Oct 2025): Sticky Grid Scroll, Horizontal Parallax Gallery, Infinite GSAP Scroll Gallery with Flip fullscreen transitions, SVG Mask Transi…
- `[f]` [CSS Design Awards — website gallery](https://www.cssdesignawards.com/website-gallery) — Late-July 2026 nominees; entries carry 'UI UX INN' score badges; filters split into Features / Industries / Colors.
- `[f]` [Dribbble — Web Design shots](https://dribbble.com/shots/popular/web-design) — Every shot force-cropped to 4:3 via resize=400x300&vertical=center; figure carries an inline dominant-colour background as placeholder; colour-swatch hex facet; applied-filter count badge with Clear.
- `[f]` [Figma Community — browse](https://www.figma.com/community/browse) — Partial render. Confirmed the browse taxonomy is resource-type-first (UI kits, wireframes, templates, plugins, widgets, whiteboarding, presentations) then use case; cards show author, price and two…
- `[f]` [Framer — Templates marketplace](https://www.framer.com/community/marketplace/templates) — Partial render in headless browser. Confirmed: featured rail plus 'Top Categories' with counts (Business 5.3K, Creative 3.7K, Styles 6.4K, Free 3.2K of 8.6K total) and /categories/{slug}/ routes. T…
- `[f]` [Godly — Sections](https://godly.design/sections) — Sections indexed per-site so a whole site's section sequence is readable (Linear, Visitors, Trust Keith); categories include Bento Grid, Compare, How It Works, Integrations, Metrics, Stats, Resources.
- `[f]` [GSAP Showcase](https://gsap.com/showcase) — Curated real-site showcase (Bombon, Codapress Publishing, Cobloc, Kononenko Architectural Bureau, Noomo Showcase, Square43) plus the GSAP Showreel 2025; single 'All' filter, thumbnail gallery, subm…
- `[f]` [Httpster](https://httpster.net) — 3116 sites; 20 styles × 34 types, with unusual style axes that are section-relevant: Unusual Layout, Unusual Navigation, Scrolling Behaviour, Low carbon, Brutalist, Monotone.
- `[s]` [Land-book](https://land-book.com) — Blocked (HTTP 403) on fetch; search evidence describes 200,000+ categorised sections, saveable boards, filters by colour/typography/style/industry/type/platform, and a separate Motion Gallery.
- `[f]` [Landbook — item page (Lassie)](https://land-book.com/websites/98066-lassie-ai-that-runs-the-doctor-s-office) — Deep link is id+slug. Shows an 800px-wide full-page screenshot, per-section Copy actions at native 3456px width, view/save counts, verification date and a same-type 'More like this' rail.
- `[f]` [Landbook — sections browse mode](https://land-book.com/sections) — Inspected live DOM. Section-level browse mode, six facet groups, batch-apply filter modal, boards, and crop-window section thumbnails derived from one full-page screenshot.
- `[f]` [Minimal Gallery](https://minimal.gallery) — 80+ tags with counts (Portfolio 968, Personal 789, Agency 749) and recency labels; curating since 2013.
- `[s]` [Mobbin — changelog](https://mobbin.com/changelog) — mobbin.com returned 403 to the browser and DNS-blocked WebFetch. Search results indicate Mobbin added Sections filters (Hero, Features, Pricing) and Styles filters (Brutalist, Editorial, Minimal) a…
- `[s]` [Mobbin — filtering & sorting flows collection](https://mobbin.com/explore/mobile/flows/filtering-sorting) — Surfaced in search as evidence that Mobbin models flows (filtering-sorting) as first-class browsable collections distinct from screens; page itself was not retrievable.
- `[f]` [One Page Love — Page Sections library](https://onepagelove.com/sections) — 8518 production sections across 60+ typed categories with counts (Social Proof 718, Testimonials 488, FAQ 335, Timeline 101, Bento Grid 60, Marquee 35, Before After 21, Z-Pattern 20); 'no concepts,…
- `[f]` [Page Flows](https://pageflows.com) — Annotated screen recordings rather than stills; facets across platform, 30+ industries, flow type, colour scheme, screen type and UI element; bookmarks and batch screen download.
- `[f]` [Recent (formerly Godly) — websites gallery](https://recent.design/websites) — godly.website now 301s to recent.design. Website cards are <video loop preload="none" poster=".../recording/poster.jpg"> — a recorded scroll-through with a poster frame. Deep links are /i/{shortid}…
- `[f]` [Refero — design reference library](https://refero.design/search?page_elements[id][]=81&order=trending) — Five orthogonal taxonomies (Page Types, Flows, UX Patterns, UI Elements, Sites). URLs are indexed array facets. Six teaser items then '14,312 more pages hidden'. Uniform 16:9 320x177 thumbs with a …
- `[f]` [shadcnblocks.com — catalogue](https://www.shadcnblocks.com) — 1,816 blocks / 2,093 components / 18 templates / 49 pages / 14 themes across 90+ categories. Per-family counts: Feature 311, Hero 247, Pricing 96, Bento 53, Footer 44, Blog 39, Testimonial 39, CTA …
- `[f]` [shadcnblocks.com — single block page (Bento 4)](https://www.shadcnblocks.com/block/bento4) — Live iframe at /preview/bento4?iframe=true, Mobile/Tablet/Desktop viewport buttons, Preview/Code tabs, theme switcher, copyable CLI command, and prose stating responsive collapse behaviour and inte…
- `[f]` [SiteInspire](https://www.siteinspire.com) — Deliberately tiny controlled vocabulary (Styles / Types / Subjects / Platforms) — the opposite curation philosophy to Awwwards' long tag tail.
- `[s]` [The Component Gallery](https://component.gallery) — Cross-system component reference by Iain Bean (since 2019); catalogues ~60 components across ~95 design systems with ~2,676 examples and, distinctively, alias names per component (Accordion = Colla…
- `[f]` [Typewolf — Site of the Day](https://www.typewolf.com/site-of-the-day) — Typography-first catalogue: every entry credits its typefaces as links (e.g. Daylight — Grenette + Styrene, Dec 14 2025; Elena Scott — Editorial Old + Neue Montreal, Dec 9 2025). Chronological pagi…
- `[f]` [Unsection — Feature Section Design category](https://www.unsection.com/category/feature-section-design) — 4,000+ real sections tagged on orthogonal axes — theme (Light/Dark), layout (Card/Bento/Grid), treatment (Minimal/Large Type/Vector/Image), structure (Visible Border/Flat Color) — with brand attrib…
- `[f]` [Unsection — section detail page](https://unsection.com/section/after-now-careers-hero-design) — Full-resolution image, Style/Type/Industry metadata, last-update date, and a Related rail scoped to the same section type.
- `[f]` [Unsection — website section design library](https://www.unsection.com) — 4,000+ items. The clearest section-level taxonomy found: 13 section types crossed with 19 style tags (Flat Color, Gradient, Minimal, Dark, Light, Large Type, Card, Bento, Image, Vector, Visible Bor…
- `[f]` [Unsection — website section design library](https://unsection.com) — 4,000+ sections. Two orthogonal axes: section type as /category/ routes, visual style as multi-select chips with Reset. Masonry grid preserving each section's true aspect ratio (1000px wide, height…
- `[f]` [Unsplash — topic gallery](https://unsplash.com/t/wallpapers) — sizes attribute declares the exact column arithmetic — (min-width:1359px) 416px, (min-width:992px) calc((100vw - 96px)/3), (min-width:768px) calc((100vw - 72px)/2), 100vw — and initial src is a w=1…
- `[f]` [Vercel — Templates marketplace](https://vercel.com/templates) — Seven checkbox facet families (use case, framework, CSS, database, auth, CMS, experimentation) with per-value counts and Clear; item canonical path bakes the framework facet in as /templates/{frame…
- `[f]` [Webflow — Templates hub](https://webflow.com/templates) — Hub is curated shelves (Popular categories, Featured, New, Free) each with a Browse-all link, plus parallel /templates/category/{slug} and /templates/tag/{slug} route families. /templates/all was b…

### Community discussion (30)

- `[s]` [Ask HN: Good Uses of Scrolljacking? (id 43021954)](https://news.ycombinator.com/item?id=43021954) — 12 Feb 2025, 2 points, 1 comment. Listed only as evidence that the question 'is there ever a good use' gets asked and gets almost no engagement — the community does not generate defences on request.
- `[f]` [Ask HN: Why does every B2B SaaS have to look like Linear/Stripe?](https://news.ycombinator.com/item?id=46179202) — Buyer-side rationale for the sameness (procurement risk, 'looks crisp and professional'), plus the structural cause: shadcn and v0/Lovable/Bolt ship the identical aesthetic by default.
- `[s]` [Don't Fuck With Scroll](https://dontfuckwithscroll.com) — Community-side anti-scrolljacking campaign; the fetch failed with a connection reset, so its contents are not relied on.
- `[f]` [Forum — Animated Sections with GSAP Observer and ScrollTrigger](https://gsap.com/community/forums/topic/43193-animated-sections-with-gsap-observer-and-scrolltrigger) — Mixing normal scroll with an Observer-driven pinned deck: trackpad momentum fires multiple advances, and panels taller than the viewport need bespoke internal-scroll logic that moderators called 'b…
- `[f]` [Forum — ScrollTrigger stacking cards animation logic](https://gsap.com/community/forums/topic/39367-scrolltrigger-stacking-cards-animation-logic-to-create-any-effect-yes-even-yours) — GSAP moderator's canonical stacking-card recipe: put every card in the SAME CSS grid cell (stays in flow), animate .from() a known state, vary by index with gsap.set, add ScrollTrigger LAST.
- `[f]` [Forum — Why display:flex breaks ScrollTrigger pinning](https://gsap.com/community/forums/topic/39261-why-display-flex-breaks-the-scrolltrigger-pinning-and-how-to-avoid) — GreenSock explains ScrollTrigger auto-sets pinSpacing:false inside flex parents because padding behaves differently; fix is pinSpacing:'margin'. Directly relevant to Tailwind flex/grid section shells.
- `[f]` [GSAP forums — Fixing tab navigation for accessibility when pinning a whole page](https://gsap.com/community/forums/topic/45010-how-to-fix-tab-navigation-for-accessibility-when-using-scrolltrigger-to-pin-a-whole-page) — 10 Sept 2025. Confirms an unresolved accessibility tension: when a wrapper is pinned, the browser has no knowledge of GSAP's transform, so focusing elements below the pin does not scroll them into …
- `[f]` [GSAP forums — Scroll Trigger vertical stacked cards, preview at bottom (#45008)](https://gsap.com/community/forums/topic/45008-scroll-trigger-vertical-stacked-cards-preview-at-bottom) — Direct evidence of where the stacked-card pattern breaks in practice: variable card heights taller than the viewport, resize recalculation, debounce complexity. Moderator advice: build the animatio…
- `[f]` [GSAP forums — ScrollTrigger auto play in Storybook with React](https://gsap.com/community/forums/topic/28645-scrolltrigger-auto-play-in-storybook-with-react) — Real report of a scroll section misbehaving specifically in Storybook on remount: `ScrollTrigger.kill()` does not kill the associated timeline, so returning to a story replays from the previous scr…
- `[f]` [GSAP forums — ScrollTrigger in iFrames](https://gsap.com/community/forums/topic/25943-scrolltrigger-in-iframes) — GreenSock staff: iframes are treated by the browser as entirely separate scrolling/window elements; the scrolling element inside an iframe does not fire scroll events. Workaround is `ScrollTrigger.…
- `[f]` [GSAP forums — ScrollTrigger pin not working in iframe](https://gsap.com/community/forums/topic/45330-scrolltrigger-pin-not-working-in-iframe) — Explains pin failure inside builder-style iframe previews (security sandboxing, document rather than html as scroller); recommends scrollerProxy, deferred registration, contentWindow scroll/resize …
- `[f]` [GSAP forums — ScrollTrigger to pin one of two columns and change content](https://gsap.com/community/forums/topic/37152-scrolltrigger-to-pin-one-of-two-columns-and-change-content-as-other-side-scrolls) — Jun 2023 – Dec 2024. Real failure reports for the pinned-column pattern: reverse-direction bugs in Next.js, sections overflowing when active, height mismatch. GSAP staff advise pinning the parent c…
- `[f]` [Hacker News — shadcn/ui defaults to Base UI instead of Radix](https://news.ycombinator.com/item?id=48791328) — Developer opinions: value is code ownership and the ability to update selectively; criticisms are div-heavy markup as a semantic/a11y concern, an upgrade-agent replacing a version bump as maintenan…
- `[f]` [Hacker News — Show HN: Performative-UI, a React component library of design tropes](https://news.ycombinator.com/item?id=48445554) — Practitioner critique of signalling motion: GPU/power spikes, animations that 'convey nothing relevant', plus the awkward finding that clients read the absence of tropes as lack of seriousness.
- `[f]` [Hacker News thread: Death to Scroll Fade](https://news.ycombinator.com/item?id=47426932) — 18 Mar 2026, 412 points, 210 comments. Retrieved via hn.algolia.com/api/v1/items/47426932 because news.ycombinator.com returned HTTP 429. Richest single source in this cluster: fast-scroller frustr…
- `[f]` [Hacker News thread: Every Frame Perfect](https://news.ycombinator.com/item?id=48516251) — 13 Jun 2026, 869 points, 281 comments. Retrieved via Algolia items API. Large anti-animation contingent (latency-first, 'animations paper over bad UI') balanced by defenders of continuity/cross-fad…
- `[f]` [Hacker News thread: Jelly UI — soft-body physics for native HTML form controls](https://news.ycombinator.com/item?id=48981620) — 20 Jul 2026, 661 points, 202 comments. Retrieved via Algolia items API. The cleanest split in the whole cluster: genuine delight at playful component-level motion, immediate hostility to the page's…
- `[f]` [Hacker News thread: Tailwind and slop apps](https://news.ycombinator.com/item?id=48496483) — 11 Jun 2026, 111 points, 83 comments. Retrieved via Algolia items API. Enumerates the visual tells of AI-generated marketing pages and contains the strongest counterargument ('boring competence win…
- `[f]` [HN Algolia comment search: "bento grid"](https://hn.algolia.com/api/v1/search?query=%22bento%20grid%22&tags=comment) — Thin corpus — 5 substantive hits 2024–Jun 2026, notably mrandish 15 Jun 2026 calling bento grids 'the 50s Chevy fins of today'. No enthusiastic defence found on HN. Absence of praise is itself the …
- `[f]` [HN Algolia comment search: "scroll snap"](https://hn.algolia.com/api/v1/search_by_date?query=%22scroll%20snap%22&tags=comment) — Split verdict evidence: chrismorgan and MrZander against full-viewport snap (Jul 2026), munchlax (Aug 2025) 'the scroll snap on that page is awful', LoganDark (2023) on snap-back trapping; versus n…
- `[f]` [HN Algolia comment search: carousel / testimonials](https://hn.algolia.com/api/v1/search_by_date?query=carousel%20testimonials&tags=comment) — Spans 2012–Dec 2025. Includes the 'Should I Use a Carousel?' HN threads (2020, 2022), agency admission that stock-image carousels make small firms look bigger, testimonial fact-checking (BostonFern…
- `[f]` [HN Algolia comment search: horizontal scroll](https://hn.algolia.com/api/v1/search_by_date?query=%22horizontal%20scroll%22&tags=comment) — Nov 2025 – Jul 2026 hits. The complaint is consistently discoverability and missing affordance (andai, redorb, analogears), not the horizontal axis itself.
- `[f]` [HN Algolia comment search: information density / whitespace](https://hn.algolia.com/api/v1/search_by_date?query=%22information%20density%22%20website%20design&tags=comment) — 2023–May 2026. Repeated laments that mobile-first spacing 'lobotomizes information density' on desktop, plus interstice (Aug 2025) defending cards as faster to scan than heavily padded alternatives.
- `[f]` [HN Algolia comment search: marquee logos / parallax / autoplay video](https://hn.algolia.com/api/v1/search_by_date?query=marquee%20logos%20scrolling&tags=comment) — Three related searches run. Key hits: kadomony (Mar 2025) on unrecognisable logo marquees reading as 'vaporware-as-a-service'; antegamisou (Mar 2024) on 2160p background video making sites unbrowsa…
- `[f]` [HN Algolia comment search: prefers-reduced-motion](https://hn.algolia.com/api/v1/search_by_date?query=%22prefers-reduced-motion%22&tags=comment) — ~29 dated hits, dense from Feb–Jul 2026. Shows reduced-motion is now checked publicly and immediately on any animated launch, with vestibular-migraine sufferers, uBlock/global-injection workarounds…
- `[f]` [HN Algolia comment search: SaaS landing page sameness / "looks AI generated"](https://hn.algolia.com/api/v1/search_by_date?query=%22looks%20AI%20generated%22%20website&tags=comment) — 2022 – May 2026. 'Looks AI generated' is now used casually as a credibility slur about a site's frontend, independent of its content. Includes lopkeny12ko's 2023 Slack → Stripe → Linear lineage of …
- `[f]` [HN Algolia comment search: scrolljacking](https://hn.algolia.com/api/v1/search_by_date?query=scrolljacking&tags=comment) — ~496 matching comments across the corpus. Dated hits used here run Jan–Jul 2026 (codegeek, wpm, PUSH_AX, isoprophlex) plus 2025 'no scrolljacking' listed as a low-cognitive-load UX principle. Senti…
- `[f]` [Lobsters search: scroll animation](https://lobste.rs/search?q=scroll+animation&what=stories&order=newest) — 267 results, but almost no design-sentiment discussion — Lobsters skews to systems/language topics. Low yield; included for honesty about coverage attempted.
- `[f]` [Storybook GitHub — Discussion #30091, tags/filter UI/badges](https://github.com/storybookjs/storybook/discussions/30091) — Teams report hundreds of test/internal stories creating noise and breaking search; requests for default tag filters, URL-shareable filtered views, JSDoc metadata. Maintainer @shilman: first version…
- `[f]` [Tell HN: In my entire life, I have never enjoyed a scrolljacking website](https://news.ycombinator.com/item?id=36542038) — 30 Jun 2023. Retrieved via Algolia items API after two 429s on news.ycombinator.com. Baseline for measuring how 2023 sentiment compares with 2026 — it has hardened, not softened.

### Articles and other sources (61)

- `[f]` [Adrian Roselli — 2.4.11: Adversarial Conformance](https://adrianroselli.com/2023/10/2-4-11-adversarial-conformance.html) — Shows sticky/pinned chrome technically passing Focus Not Obscured (Minimum) while leaving one pixel row of a control visible; text-spacing adjustments then break the 'passing' cases.
- `[f]` [Adrian Roselli — Avoid aria-roledescription](http://adrianroselli.com/2020/04/avoid-aria-roledescription.html) — Direct tension with the APG carousel pattern, which mandates aria-roledescription="carousel"/"slide": inconsistent AT support, doubled announcements, and no automatic translation.
- `[f]` [Adrian Roselli — Details / Summary Are Not insert control here](http://adrianroselli.com/2019/04/details-summary-are-not-insert-control-here.html) — Why details/summary must not stand in for accordions, tab sets, menus or modals; notes Chrome auto-expanding details on find-in-page as a behavioural hazard.
- `[f]` [Adrian Roselli — Disclosure Widgets](http://adrianroselli.com/2020/05/disclosure-widgets.html) — Correct disclosure markup (button + aria-expanded), the difference between disclosure, accordion and tabs, and cross-AT inconsistency for native details/summary.
- `[f]` [Adrian Roselli — Horizontal Scrolling Containers Are Not a Content Strategy](http://adrianroselli.com/2025/08/horizontal-scrolling-containers-are-not-a-content-strategy.html) — Names 1.4.10 Reflow and 2.4.11 Focus Not Obscured as live risks; covers scrollbar affordance, shift+wheel, swipe-back conflict, anchor links into containers, RTL logical properties, and users skipp…
- `[f]` [Adrian Roselli — Keyboard-Only Scrolling Areas](https://adrianroselli.com/2022/06/keyboard-only-scrolling-areas.html) — Firefox has made scroll containers tab stops since ~2011; Chrome only stable from 132; WebKit/Safari still has no native support. Fix is tabindex=0 + role=region + aria-label. Directly applies to h…
- `[f]` [Adrian Roselli — Scroll Snap Challenges](https://adrianroselli.com/2021/07/scroll-snap-challenges.html) — Concrete scroll-snap failures under zoom, text resize and text spacing; browser bugs with sticky elements and Safari horizontal snap; implicates SC 1.4.4, 1.4.10, 1.4.12.
- `[f]` [Adrian Roselli — Under-Engineered Responsive Tables](https://adrianroselli.com/2020/11/under-engineered-responsive-tables.html) — Six lines of CSS plus a wrapper with role=region, aria-labelledby and tabindex=0. States that CSS display-property conversions to card layouts break table semantics in some browsers and that ARIA h…
- `[f]` [Adrian Roselli — You Know What? Just Don't Split Words into Letters (Feb 2026)](https://adrianroselli.com/2026/02/you-know-what-just-dont-split-words-into-letters.html) — Screen-reader test matrix against GSAP SplitText and similar: JAWS/Chrome, Narrator/Edge, VoiceOver/macOS and TalkBack/Firefox all fail; only NVDA/Firefox and Orca/Firefox acceptable.
- `[f]` [Ahmad Shadeed — The Too Early Breakpoint](https://ishadeed.com/article/too-early-breakpoint) — Jan 31 2026. Names the failure where a good desktop composition snaps to a mobile stack while whitespace remains; cites Time.com and TechCrunch heroes. Recommends intermediate breakpoints, containe…
- `[f]` [Are.na Help — Channels](https://help.are.na/docs/getting-started/channels) — Private/Closed/Open visibility states, drag-to-reorder from the block's top-left corner, collaborators who can add but not change settings, channels nestable inside channels.
- `[f]` [Brad Frost — Design system components, recipes, and snowflakes](https://bradfrost.com/blog/post/design-system-components-recipes-and-snowflakes) — Three-tier model: content/context-agnostic components, product-specific recipes (compositions), one-off snowflakes. Load-bearing for Q10 — a composition is not automatically a new concept, and prom…
- `[f]` [Cloud Four — Building an accessible image comparison web component](https://cloudfour.com/thinks/building-an-accessible-image-comparison-web-component) — Before/after sliders should be built on a native range input with a visually hidden label ('Select what percentage of the bottom image to show'); the authors found existing implementations keyboard…
- `[f]` [Codrops — Building an Infinite GSAP Scroll Gallery with Parallax and Flip Transitions](https://tympanus.net/codrops/2026/07/30/building-an-infinite-gsap-scroll-gallery-with-parallax-and-flip-transitions) — Jul 30 2026. Seam-safe infinite loop (yPercent, verticalLoop, wrap()), per-slide parallax factor that resolves to zero at the wrap seam, Flip shared data-flip-id thumbnail→fullscreen morph. Author …
- `[f]` [Codrops — Creating a Glowing Text Marquee Animation](https://tympanus.net/codrops/2024/06/26/creating-a-glowing-text-marquee-animation) — Jun 26 2024. CSS-only marquee: duplicated content, translateX 0→-50% infinite, clip-path from an SVG path in objectBoundingBox units, counter-animated glow layer, visually-hidden screen-reader text…
- `[f]` [Codrops — Elastic Grid Scroll](https://tympanus.net/codrops/2025/06/03/elastic-grid-scroll) — Jun 3 2025. Per-column lag via GSAP ScrollSmoother effects:true, lag = baseLag + distance\*lagScale from centre; JS wraps grid children into visual-column containers at runtime.
- `[f]` [Codrops — Exploration of On-Scroll Layout Formations](https://tympanus.net/codrops/2024/09/18/exploration-of-on-scroll-layout-formations) — Sep 18 2024. Pinned 'layout assembly': scattered items converge into a final grid/row formation before unpinning. Author explicitly calls it a proof-of-concept and apologises for mobile quirks — us…
- `[f]` [Codrops — Image Trail Effects](https://tympanus.net/codrops/2019/08/07/image-trail-effects) — Aug 7 2019. Five named variants of the pointer image trail (plain, scale+fade, gravity drop, squeeze, fullscreen lateral-only). Still the reference implementation people copy.
- `[f]` [Codrops — Inside Bisous: Designing an Editorial Experience for Cinematic CGI](https://tympanus.net/codrops/2026/06/29/inside-bisous-designing-an-editorial-experience-for-cinematic-cgi) — June 2026 studio case study. Source for the four-column editorial grid, sans + monospace type pairing (mono as the technical/metadata layer), full-screen infinite project slider, and continuous pro…
- `[f]` [Codrops — On-Scroll Animation Ideas for Sticky Sections](https://tympanus.net/codrops/2024/01/31/on-scroll-animation-ideas-for-sticky-sections) — Jan 31 2024. The canonical reference for sticky-section stacking/collapsing on exit; explicitly built on position:sticky with GSAP driving the animation, author notes CSS scroll-driven animations w…
- `[f]` [Codrops — Sticky Grid Scroll: Building a Scroll-Driven Animated Grid](https://tympanus.net/codrops/2026/03/02/sticky-grid-scroll-building-a-scroll-driven-animated-grid) — March 2026 tutorial. Concrete numbers for the sticky-stage pattern: 425vh block, position:sticky wrapper with overflow:hidden, 3-column grid of 12 square items, three nested scrubbed timelines, sca…
- `[f]` [Codrops — Whooshes, Snaps and Shaders: Adrien Vanderpotte (May 2026)](https://tympanus.net/codrops/2026/05/27/whooshes-snaps-and-shaders-adrien-vanderpotte-and-the-feeling-of-the-interface) — Best available statement on satisfying-vs-decorative motion: sophistication felt through rhythm not visual complexity; 'vocal prototyping'; immersive/linear mode toggles to protect information access.
- `[f]` [Death to Scroll Fade — David Bushell](https://dbushell.com/2026/01/09/death-to-scroll-fade) — 9 Jan 2026. The reference text for 2026 anti-scroll-reveal sentiment. Argues generic 1s opacity + 100px transform reveals only look right at unrealistic scroll speeds; cites vestibular disorders, c…
- `[f]` [Developers Digest — AI Design Slop: 16 patterns](https://www.developersdigest.tech/blog/ai-design-slop-and-how-to-spot-it) — Published 2026-04-22, updated 2026-06-10 (Adrian Krebs). Names the specific section-level tells: centred hero headline, badge above H1, coloured left/top border on cards, identical feature cards wi…
- `[f]` [Every Frame Perfect — Nikita Prokopov (tonsky)](https://tonsky.me/blog/every-frame-perfect) — 13 Jun 2026. Standard proposed: screenshot any mid-animation frame and be able to defend it. Names desynchronised sub-elements, transitions implying a state change that isn't happening, and motion …
- `[f]` [Gwern — Design Of This Website](https://gwern.net/design) — Concrete inventory of long-form devices: drop caps, sidenotes, epigraphs, margin notes, admonitions, link popups with three underline types, collapsible sections, transclusion, backlinks, link bibl…
- `[f]` [Gwern — Sidenotes In Web Design](https://gwern.net/sidenote) — The most thorough taxonomy of sidenote implementations: right/left/bidirectional margins, slide-in panels, five narrow-screen fallbacks, collision behaviour, block-element limits, and named critici…
- `[f]` [Heydon Pickering — Inclusive Components: A Content Slider](https://inclusive-components.design/a-content-slider) — Reframes the carousel as a scroll container the user drives: list semantics, region + aria-label + tabindex=0, overflow-x with optional scroll-snap, IntersectionObserver lazy loading, auto-rotation…
- `[f]` [Heydon Pickering — Inclusive Components: Tabbed Interfaces](https://inclusive-components.design/tabbed-interfaces) — Progressive enhancement from a table of contents of same-page links; role=presentation on list items; down-arrow moves focus into the panel; explicit warning not to use tabs unless suited to the us…
- `[f]` [Hon Tran — 10 Award-Winning Websites of 2026, Judged](https://www.hontran.dev/blog/best-award-winning-websites-2026) — Developer-eye reviews of By-Kin, Iventions, Mat Voyce, Uncommon Studio, Minh Pham; states the failure threshold jurors apply — 3D hero at 18fps on mid-range Android, 9MB/6s paint, and broken prefer…
- `[f]` [Jim Vallandingham — Scroll storytelling examples taxonomy](https://vallandingham.me/scroll_talk/examples) — Five-category taxonomy of scroll-driven story sections: Scrollable Dimension, Scroll as a Trigger, Scroll as Steps, Continuous Scrolling, Scrollytelling — each with named example projects.
- `[f]` [Jim Vallandingham — So You Want to Build A Scroller](https://vallandingham.me/scroller.html) — April 6 2015. Step sizing via margin-bottom, within-step 0.0–1.0 progress metric, warning about inconsistent scroll distances across input devices, and the explicit note that a stepper is sometimes…
- `[f]` [Josh W. Comeau — Full-Bleed Layout Using CSS Grid](https://www.joshwcomeau.com/css/full-bleed) — grid-template-columns: 1fr min(42rem, 100%) 1fr with content in column 2 and .full-bleed spanning 1/-1. Names the padding trade-off (calc() on the measure vs negative margins on bleed children). Th…
- `[f]` [Josh W. Comeau — Scroll-Driven Animations](https://www.joshwcomeau.com/animation/scroll-driven-animations) — Practical patterns plus the gotchas people actually hit: animation-range: contain needs animation-fill-mode: backwards; timeline-scope is required for non-ancestor targeting; ~85% support with Fire…
- `[f]` [Nielsen Norman Group — Accordions on Complex Content](https://www.nngroup.com/articles/accordions-complex-content) — Accordions trade visibility for interaction cost; wrong when the audience needs most of the content; headings must earn the click; poor print behaviour; eyetracking shows users do scroll when conte…
- `[f]` [Nielsen Norman Group — Carousel Usability](https://www.nngroup.com/articles/designing-effective-carousels) — Users scroll past carousels regardless of content quality; the ~3 words per second timing heuristic; controls inside the frame; dots are missed; no auto-rotation on mobile.
- `[f]` [Nielsen Norman Group — Comparison Tables for Products, Services, and Attributes](https://www.nngroup.com/articles/comparison-tables) — Compensatory decision-making; cap at 5 items (3–4 for dynamic); fixed column headers essential; missing or inconsistent attribute data makes the table useless; on small screens more than 2 items at…
- `[f]` [Nielsen Norman Group — Defining Helpful Filter Categories and Values](https://www.nngroup.com/articles/filter-categories-values) — Concrete labelling and ordering rules: no vague 'Category'/'Type' labels, no internal jargon, general facets at top and specialist ones at bottom, value ordering by numeric/alphabetical/priority.
- `[f]` [Nielsen Norman Group — Filters vs. Facets: Definitions](https://www.nngroup.com/articles/filters-vs-facets) — Facets = one filter per content dimension; only worth the metadata and interaction cost on genuinely large, multi-dimensional collections. Explicit warning that faceting adds interaction cost.
- `[f]` [Nielsen Norman Group — Infinite Scrolling: Tips and Alternatives](https://www.nngroup.com/articles/infinite-scrolling-tips) — Infinite scroll fits aimless browsing of homogeneous items; fails for finding, comparing distant items, and footer access. Back-button scroll loss and 'illusion of completeness' named explicitly.
- `[f]` [Nielsen Norman Group — Mobile Faceted Search with a Tray](https://www.nngroup.com/articles/mobile-faceted-search) — Overlay tray beats a separate filter page; keep the result count pinned in a fixed header; keep results semi-visible behind the tray so over-narrowing is felt immediately.
- `[f]` [Nielsen Norman Group — Tabs, Used Right](https://www.nngroup.com/articles/tabs-used-right) — Updated 2 Aug 2024. Authority for the content-parallelism rule (in-page tabs must share one layout and differ only in data), 1–2 word labels, avoiding tab overflow that degrades into a carousel, an…
- `[f]` [Nielsen Norman Group — The Illusion of Completeness](https://www.nngroup.com/articles/illusion-of-completeness) — Six of eight users failed to scroll on a tested page. Full-viewport sections, strong horizontal rules, large white gaps and horizontal carousels all manufacture false endings; bleeding content is t…
- `[f]` [Nielsen Norman Group — User Intent Affects Filter Design (instant vs batch apply)](https://www.nngroup.com/articles/applying-filters) — Batch-apply suits users arriving with several criteria in mind and slow pages; instant-apply suits exploration on sub-1s responses. Suggests a 1–2s inactivity debounce as a middle path.
- `[f]` [NN/g — Beware Horizontal Scrolling and Mimicking Swipe on Desktop](https://www.nngroup.com/articles/horizontal-scrolling) — Apr 2014. Eye-tracking showed users miss horizontal affordances entirely; recommends visible scrollbar/pagination, persistent (non-hover) arrows, keyboard support, partial visibility of the next it…
- `[f]` [NN/g — Scrolljacking 101](https://www.nngroup.com/articles/scrolljacking-101) — Aug 2023 usability study. Majority of participants disoriented; problems worse on mobile and with text-heavy scrolljacks; less harmful when brief, below the fold, low-text, and with recovery naviga…
- `[f]` [Ryan Mulligan — The Infinite Marquee](https://ryanmulligan.dev/blog/css-marquee) — Primary implementation write-up. Source for the duplication technique with gap-aware offset, and the discipline rules: aria-hidden on the duplicate, disable entirely under prefers-reduced-motion, d…
- `[f]` [SaaSFrame — Designing Bento Grids That Actually Work (2026)](https://www.saasframe.io/blog/designing-bento-grids-that-actually-work-a-2026-practical-guide) — Concrete bento rules from 43 implementations: size=hierarchy, 5–10 cells, visual 60–70% of card height, identical gutters throughout, and the key failure — preserving desktop order when collapsing …
- `[f]` [Sara Soueidan — Are 'CSS Carousels' accessible?](https://www.sarasoueidan.com/blog/css-carousels-accessibility) — Detailed teardown of ::scroll-marker / ::scroll-button / scroll-marker-group: forced tab/tablist semantics, missing tabpanels, duplicate or absent accessible names, focus order failures, visual sta…
- `[f]` [Smashing Magazine — A Step-By-Step Guide To Building Accessible Carousels](https://www.smashingmagazine.com/2023/02/guide-building-accessible-carousels) — Sonja Weckenmann, Feb 2023. Concrete ARIA/keyboard/pause requirements, plus the damning engagement figure (~1% interact, 89% of those only with slide one) and the recommendation to prefer scroll-sn…
- `[f]` [Spacing Over Cards — smagin.fyi](https://smagin.fyi/posts/padding-over-cards) — 31 Aug 2025. Gestalt-proximity argument against reflexive card containers; rule offered: internal spacing recursively no larger than external spacing. Names the real hazard — cards conceal weak, re…
- `[s]` [Springer — A Usability and Universal Design Investigation into Scrolljacking for Web Pages](https://link.springer.com/chapter/10.1007/978-3-032-16454-4_6) — Exists and is directly on topic, but the fetch was blocked by a login redirect, so no claim from it is used here. Worth acquiring if primary academic evidence on both sides of scrolljacking is needed.
- `[f]` [Storybench — NYT journalists on scrollytelling](https://www.storybench.org/scrollytelling-innovation-new-york-times-journalists-on-climate-change-visualization-and-intense-teamwork) — November 2022. Zhong and Rojanasakul on pairing specific paragraphs to specific visuals, editing down to three solid points rather than ten fuzzy ones, and the explicit acknowledgement that scrolly…
- `[f]` [Studio Meyer — Web Design Trends 2026: What Actually Held Up After Six Months](https://studiomeyer.io/en/blog/webdesign-trends-2026-reality-check) — Reality check with numbers: kinetic type rarely ships (screen readers + CWV), glassmorphism cost 15–30% FPS on real devices, a single Spline hero loads 800kB–2MB JS, bento went mainstream.
- `[f]` [Val Head — Designing Safer Web Animation For Motion Sensitivity (A List Apart)](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity) — Trigger factors are relative size of movement, mismatched direction/speed (parallax, scrolljacking) and perceived distance covered; ~8 million US adults report chronic balance problems, 2.4 million…
- `[f]` [web.dev — Animations guide (high-performance animation)](https://web.dev/articles/animations-guide) — transform and opacity are compositor-only; animating top/left/width/height/blur forces layout or paint; will-change should be applied narrowly and removed after, and is explicitly not an early opti…
- `[f]` [web.dev — content-visibility](https://web.dev/articles/content-visibility) — Baseline newly available 15 Sept 2025. content-visibility:auto skips style, layout and paint for offscreen subtrees; contain-intrinsic-size:auto 300px remembers last rendered size — explicitly reco…
- `[f]` [web.dev — Interaction to Next Paint (INP)](https://web.dev/articles/inp) — Good 200ms or less, poor above 500ms; three phases (input delay, processing, presentation delay); large DOM size and expensive style/layout work are named rendering causes.
- `[f]` [web.dev — Optimize Cumulative Layout Shift](https://web.dev/articles/optimize-cls) — Good CLS 0.1 or less, poor above 0.25; causes include missing image dimensions, injected content, font swap, and animating layout-inducing properties; only a 500ms window after discrete input is ex…
- `[f]` [web.dev — Optimize long tasks](https://web.dev/articles/optimize-long-tasks) — Any task over 50ms is a long task; yielding via scheduler.yield() is preferred, setTimeout is the fallback, isInputPending is no longer recommended.
- `[f]` [web.dev — prefers-reduced-motion: Sometimes less movement is more](https://web.dev/articles/prefers-reduced-motion) — Advocates 'animate by exception' inside @media (prefers-reduced-motion: no-preference); warns that blanket animation:none breaks code depending on animation events, suggesting ~1ms durations instea…
