# Existing-page content audit

This is content-only evidence for targeted voice, truth or commercial-meaning questions. It is not default visual-draft input and supplies no inner-composition, page-silhouette or layout authority.

## Homepage public-copy audit

I reviewed only the Homepage’s public TSX copy and heading markup. No CSS, renders, screenshots, or visual composition were inspected.

## Exact heading sequence

The section order is defined in `src/app/page.tsx:27–41`.

1. `<h1>` — “Work comes in. Too much slips away.”
   - Eyebrow: “The website and the enquiry, designed together”
   - `src/app/_home/HomeHero.tsx:18–24`

2. `<h2>` — “The work is already there. These are the leaks.”
   - Eyebrow: “Where work slips”
   - `src/app/_home/HomeLeaks.tsx:106–112`

3. `<h2>` — “The shorter the distance, the easier the decision.”
   - Eyebrow: “Before a buyer reaches out”
   - `src/app/_home/HomeSystems.tsx:18–26`

4. `<h2>` — “They do not need more information. They need enough certainty to ask.”
   - Eyebrow: “Before the form”
   - `src/app/_home/HomeSystems.tsx:74–80`

5. `<h2>` — “One system, not five vendors.”
   - Eyebrow: “One responsibility, not five handoffs”
   - `src/app/_home/HomeSystems.tsx:101–106`

6. `<h2>` — “Five systems. One working surface.”
   - Eyebrow: “The connected capabilities”
   - `src/app/_home/HomeSystems.tsx:157–164`

7. `<h2>` — “Found nearby — trusted before they call.”
   - Eyebrow: “Local SEO Authority”
   - `src/app/_home/HomeAuthority.tsx:9–17`

8. `<h2>` — “Website work you can inspect.”
   - Eyebrow: “The work”
   - `src/app/_home/HomeWork.tsx:15–26`

9. `<h2>` — “The website should understand the work.”
   - Eyebrow: “Built with context”
   - `src/app/_home/HomeContext.tsx:32–42`

10. `<h2>` — “It is not a launch. It compounds.”
    - Eyebrow: “What changes over time”
    - `src/app/_home/HomeJourney.tsx:57–67`

11. `<h2>` — “Built by the people who actually build it.”
    - Eyebrow: “Built by builders”
    - `src/app/_home/HomeJourney.tsx:84–96`

12. `<h2>` — “This is not for everyone.”
    - Eyebrow: “Honest about fit”
    - `src/app/_home/HomeJourney.tsx:111–120`

13. `<h2>` — “First we review. Then we decide what matters.”
    - Eyebrow: “How we start”
    - `src/app/_home/HomeJourney.tsx:162–176`

14. `<h2>` — “Questions, answered plainly.”
    - Eyebrow: “Straight answers”
    - `src/app/_home/HomeFaq.tsx:52–60`

15. `<h2>` — “If the website isn’t carrying the work, find out where it stops.”
    - Eyebrow: “Find the stopping point”
    - `src/app/_home/HomeJourney.tsx:206–215`

The initial rendered outline also contains these subordinate `<h3>` headings, in DOM order:

- “They arrive interested and leave undecided.”
- “Smart Website Systems”
- “Specialist clinics”
- “Home services”
- “The front door starts working.”
- “How work arrives today.”
- “The site and the path around it.”
- “Findings first, not a pitch.”
- “What does the Website Review actually involve?”
- “Do I need all five systems?”
- “I already have a website. Do I have to rebuild?”
- “We already spend on ads. How does this help?”
- “Who owns the website?”
- “Do you hand over, or manage it ongoing?”
- “How much does it cost?”

Three interactive `<h3>` positions can change text:

- Leak position: “They arrive interested and leave undecided.” / “The phone rings at the worst moment.” / “The enquiry sits behind the day.” / “The plan goes out and goes quiet.” / “The next step lives in someone’s head.” / “Good work ends without an echo.” (`HomeLeaks.tsx:18–71`)
- System position: “Smart Website Systems” / “Local SEO Authority” / “Lead Response & Handling” / “Follow-Up & CRM” / “Reputation & Review” (`HomeSystemsSelector.tsx:135–145`, labels from `src/content/canonical.ts:11–17`)
- Compounding position: “The front door starts working.” / “Real enquiries sharpen the site.” / “Proof does the persuading.” (`HomeCompounds.tsx:7–80`)

## Eyebrows and functional labels

Beyond the main section eyebrows, the Homepage uses short labels to orient the reader:

- “How a typical enquiry plays out”
- Leak labels: “The first look,” “The missed ring,” “The waiting form,” “The cooling quote,” “The remembered follow-up,” “The unasked review”
- System roles: “The hub,” “Found,” “Answered,” “Owned,” “Proven”
- “How it reaches the website”
- Context labels: “What a patient is really asking,” “What a homeowner is really asking,” “So the website leads with”
- Compounding stages: “Launch week,” “Month six,” “Year two”
- “What the site holds by now”
- Fit labels: “A good fit if,” “Not the right fit if”
- Review step labels: “You share,” “We examine,” “You decide”

They name a stage, responsibility, or decision rather than supplying decorative marketing language.

## CTA wording

The actual Homepage CTA is “Request a Website Review,” rendered three times:

- Hero: `HomeHero.tsx:31–33`
- Review section: `HomeJourney.tsx:172–174`
- Closing: `HomeJourney.tsx:229–231`

“Book a consultation,” “Send enquiry,” and “Schedule your repair now” appear only inside illustrative example content, not as the Homepage’s own CTA.

## Voice, commercial depth, and rhythm

- The voice is plainspoken, diagnostic, and commercially alert. It names operational failure without melodrama: work “slips,” calls arrive at the wrong moment, enquiries wait, quotes cool, and next steps live in memory.
- Headings usually work as compact tension-and-resolution pairs: “Work comes in / Too much slips away,” “not a launch / it compounds,” “one system / not five vendors.”
- Value is expressed through protected existing demand, clearer decisions, useful handling, visible ownership, and accumulating proof—not rankings, conversion guarantees, or generic growth language.
- The copy earns commercial depth by following the whole buyer-and-business chain: discovery → certainty → enquiry → response → ownership → follow-up → proof. It then qualifies fit, explains the review, addresses objections, and repeats the diagnostic CTA.
- The rhythm moves from broad loss, through pre-contact decision friction, into the connected-system thesis; then it supplies capability, work, and audience context before moving to long-term value, builder accountability, qualification, review, objections, and closing action.
- It repeatedly grounds abstractions in clinics and established service businesses, while remaining careful that their buyers need different evidence, language, and next steps.

What is done

Homepage heading hierarchy, labels, CTA wording, voice, commercial depth, narrative rhythm, and semantic boundaries relevant to Lead Response & Handling have been extracted.

# Local SEO Authority public-copy audit

## Local SEO Authority: public-copy findings

Source boundary: [page.tsx](/Users/zeeshansadiq/Projects/mindwp-web/src/app/services/local-seo-authority/page.tsx), [content.ts](/Users/zeeshansadiq/Projects/mindwp-web/src/app/services/local-seo-authority/content.ts), [LocalSeoAuthorityPage.tsx](/Users/zeeshansadiq/Projects/mindwp-web/src/app/services/local-seo-authority/_components/LocalSeoAuthorityPage.tsx), and [LocalSeoIntentTabs.tsx](/Users/zeeshansadiq/Projects/mindwp-web/src/app/services/local-seo-authority/_components/LocalSeoIntentTabs.tsx). No CSS, renders, screenshots, or composition inspected.

### Exact page-level heading sequence

| #   | Eyebrow                | Heading                                                                  |
| --- | ---------------------- | ------------------------------------------------------------------------ |
| 1   | Local SEO Authority    | **H1:** “Your busiest street is one you’ve never stood on.”              |
| 2   | Beyond the ranking     | **H2:** “Ranking is the invitation. What happens after is the decision.” |
| 3   | The kept promises      | **H2:** “The place they inspect before they contact you.”                |
| 4   | The operating model    | **H2:** “Four connected responsibilities. One operating model.”          |
| 5   | Search intent          | **H2:** “Found for the work you actually want.”                          |
| 6   | Consistency            | **H2:** “The same truth, at the right depth wherever they check.”        |
| 7   | Visible proof          | **H2:** “Reviews shorten the distance to trust.”                         |
| 8   | The foundation         | **H2:** “The system needs somewhere strong to land.”                     |
| 9   | Ongoing                | **H2:** “A local presence needs tending, not a launch date.”             |
| 10  | Scope                  | **H2:** “What is actually managed.”                                      |
| 11  | Getting started        | **H2:** “The review shows where the work starts.”                        |
| 12  | Honest about fit       | **H2:** “This is not for everyone.”                                      |
| 13  | Straight answers       | **H2:** “Questions, answered plainly.”                                   |
| 14  | Before the next search | **H2:** “Before the next nearby search, find out what they would see.”   |

Evidence: [LocalSeoAuthorityPage.tsx:155](/Users/zeeshansadiq/Projects/mindwp-web/src/app/services/local-seo-authority/_components/LocalSeoAuthorityPage.tsx:155) through [LocalSeoAuthorityPage.tsx:629](/Users/zeeshansadiq/Projects/mindwp-web/src/app/services/local-seo-authority/_components/LocalSeoAuthorityPage.tsx:629).

### Nested semantic headings and labels

- “The kept promises” H3 sequence: “Harbourside Physiotherapy”; “Sports physio · Post-surgery rehab · Home visits”; “Recent, specific and answered”; “Website.” Their labels are “Search result,” “Relevant page,” “Reviews,” and “Contact path.” The closing line is “One presence. Each layer answers the next question.”
- “The operating model” H3 sequence: “Discovery”; “Relevance”; “Verification”; “Maintenance”; “Foundation — the website.”
- “Search intent” labels: “Home services”; “Specialist clinics”; “The destination page.” Home-services H3s are “Boiler replacement in the service area”; “Proof, in view”; “Clear next step.” Specialist-clinic H3s are “Dental implants in New Malden”; “Proof, in view”; “Clear next step.” The specialist-clinic set appears initially because it is the default selected tab. See [LocalSeoIntentTabs.tsx:8](/Users/zeeshansadiq/Projects/mindwp-web/src/app/services/local-seo-authority/_components/LocalSeoIntentTabs.tsx:8).
- “Consistency” H3 sequence: “Local result”; “Business profile”; “Reviews”; “Service or treatment page”; “Contact path.”
- “Visible proof” supporting labels: “Evidence check”; “Illustrative framework”; “Specific detail”; “Business response considered”; “Appropriate”; “Profile”; “Website.”
- “The foundation” H3 sequence: “Relevance”; “Confidence”; “Action”; “Website — the foundation.” Supporting label: “The local presence people find.”
- “Ongoing” labels: “Set up”; “Service change”; “New proof”; “Ongoing.”
- “Scope” H3 sequence: “Local discovery foundations”; “Business-profile alignment”; “Services, treatments & service-area relevance”; “Local page planning”; “Verification & consistency checks”; “Review-presence assessment”; “Connecting public surfaces to the website”; “Ongoing prioritisation & maintenance.”
- “Getting started” H3 sequence: “Inspect”; “Identify”; “Determine”; “Agree”; “Establish.”
- “Honest about fit” H3s: “A good fit if”; “Not the right fit if you want.”
- FAQ questions use `<summary>`, not heading tags. They cover system inclusion, whether a new site is needed, working with an existing site, reviews, ongoing work, no ranking/lead guarantees, service-area businesses, the Reputation & Review boundary, and the Website Review. Exact copy is in [content.ts:1](/Users/zeeshansadiq/Projects/mindwp-web/src/app/services/local-seo-authority/content.ts:1).

### CTA wording

The sole CTA label is **“Request a Website Review”**, used three times:

- Hero → `#review`, with: “A private diagnostic conversation — not an automated audit or a trial.”
- Review section → `#closing`.
- Closing section → `#review`.

The closing promise is: “One private conversation. We review your local presence and the website beneath it, then show you what is worth fixing first — useful whether or not we build together.”

The label resolves from [labels.ts:6](/Users/zeeshansadiq/Projects/mindwp-web/src/lib/cta/labels.ts:6).

### Voice, commercial depth, and narrative rhythm

- The voice alternates evocative compression with operational plainness. Headlines carry a memorable contrast; supporting copy immediately translates it into service meaning.
- It repeatedly uses decision-oriented questions—“Is this relevant?”, “Have people trusted it before?”, “What do I do next?”—to make an abstract service understandable through the buyer’s checks.
- Commercial depth accumulates in layers: discovery problem → buyer decision → connected system → search/service relevance → consistency/proof → website dependency → maintenance → actual scope → diagnostic entry → qualification → FAQ → CTA.
- The service is explained early, first in the hero and fully by section four. Later sections deepen individual responsibilities rather than withholding the offer.
- “Connected,” “system,” “foundation,” “responsibility,” “maintained,” and “review” are recurring commercial vocabulary.
- Truth boundaries are explicit and commercially confident: no ranking or lead guarantees, no fabricated reviews, no automatic rebuild, and no fixed package. Related-service ownership is also named precisely.
- Audience specificity is direct: “established home-service businesses and specialist clinics,” with concrete examples from both.
- The rhythm moves from intrigue to recognition, then explanation and substantiation, then scope and qualification, ending in a low-pressure diagnostic ask.

### What is done

The current Local SEO Authority public-copy hierarchy, labels, CTA language, voice, narrative rhythm, commercial depth, and semantic boundary have been extracted without inspecting visual composition.
