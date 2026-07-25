/**
 * Sections 10–12.
 *
 * Section 10 is a genuine sequence, so it is composed as one — and it ends on a
 * visible boundary marker, because where this engagement stops is a commitment
 * rather than a caveat.
 *
 * Sections 11 and 12 are deliberately quiet. Measurement is a contrast (what it
 * can and cannot show) and the technical foundation is a specification; neither
 * benefits from spectacle, and giving them focal weight would flatten the three
 * dominant acts around them.
 */

const ENQUIRY_PATH = [
  {
    step: "01",
    title: "An action that matches the decision",
    body: "A consultation request, a callback, a question about suitability — chosen because it fits where the reader actually is, not because every page ends in the same button.",
  },
  {
    step: "02",
    title: "A form that asks only what is needed",
    body: "Enough context for the person answering to be useful, and nothing that exists only to qualify the sender out.",
  },
  {
    step: "03",
    title: "Confirmation that tells the truth",
    body: "What was received, what happens next, and when — stated only at the level actually known, with no invented response time.",
  },
  {
    step: "04",
    title: "Delivery to the agreed destination",
    body: "The enquiry reaches the inbox, address or system agreed before build, and the complete path is tested before handover rather than assumed.",
  },
] as const;

const MEASUREMENT_SHOWS = [
  "Which pages people actually arrive on, and which they leave from.",
  "Where an enquiry begins, and where the form is abandoned.",
  "Which questions get read, and which sections nobody reaches.",
  "Whether a change made the path clearer or quietly worse.",
];

const MEASUREMENT_CANNOT = [
  "Attribute a booking to a single page or visit.",
  "Prove that a website caused a commercial outcome.",
  "Tell you what someone was thinking when they left.",
  "Justify tracking a patient or client would object to.",
];

const FOUNDATION = [
  {
    title: "Speed",
    body: "Images sized and served properly, fonts loaded without a flash, scripts kept off the critical path. Measured on the pages people actually land on, not the homepage alone.",
  },
  {
    title: "Accessibility",
    body: "Real heading order, keyboard-reachable controls, visible focus, sufficient contrast, and alternatives for anything carried by an image. Built in, not audited afterwards.",
  },
  {
    title: "Search readiness",
    body: "Clean URLs, honest titles and descriptions, correct canonical and indexing rules, structured data that describes what is genuinely there. No ranking promised.",
  },
  {
    title: "Maintainability",
    body: "WordPress set up so your team can edit what they should and cannot break what they shouldn't — with the form handling, spam protection and backups configured before launch.",
  },
] as const;

export function SwsUsefulActions() {
  return (
    <section id="useful-actions" className="sws-actions section on-mist">
      <div className="container section-intro section-intro--split" data-sws-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-sws-item>
            Useful actions
          </p>
          <h2 data-sws-item>
            Match the next step to the decision — <em>and carry the enquiry where it needs to go.</em>
          </h2>
        </div>
        <div className="section-copy-group">
          <p data-sws-item>
            An enquiry is not a form submission. It is a path with four places it can quietly fail,
            and this engagement owns all of them.
          </p>
        </div>
      </div>

      <ol className="container container--content sws-actions__path" data-sws-stagger>
        {ENQUIRY_PATH.map((item) => (
          <li key={item.step} data-sws-stagger-item>
            <small>{item.step}</small>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ol>

      <p className="container container--content sws-actions__boundary" data-sws-fade>
        <span aria-hidden="true" className="sws-actions__boundary-mark" />
        Ownership ends here, at a useful enquiry. What happens next — acknowledgement, routing and
        visible human responsibility — belongs to <strong>Lead Response &amp; Handling</strong>, a
        separately scoped service that is recommended only where the diagnosis supports it.
      </p>
    </section>
  );
}

export function SwsMeasurement() {
  return (
    <section id="measurement" className="sws-measure section section--quiet">
      <div className="container section-intro" data-sws-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-sws-item>
            Meaningful measurement
          </p>
          <h2 data-sws-item>
            See where people act, where useful enquiries begin{" "}
            <em>and where the website needs attention.</em>
          </h2>
        </div>
        <div className="section-copy-group">
          <p data-sws-item>
            Measurement earns its place when it changes a decision. Most of what analytics is sold
            for does not, so it is worth being precise about the difference.
          </p>
        </div>
      </div>

      <div className="container container--content sws-measure__split" data-sws-stagger>
        <div data-sws-stagger-item>
          <p className="sws-measure__label">What it can show</p>
          <ul>
            {MEASUREMENT_SHOWS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="sws-measure__limits" data-sws-stagger-item>
          <p className="sws-measure__label">What it cannot</p>
          <ul>
            {MEASUREMENT_CANNOT.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function SwsTechnicalFoundation() {
  return (
    <section id="technical-foundation" className="sws-foundation section section--quiet">
      <div className="container section-intro section-intro--split" data-sws-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-sws-item>
            Technical foundation
          </p>
          <h2 data-sws-item>
            Make speed, accessibility, search readiness and maintainability{" "}
            <em>part of the build.</em>
          </h2>
        </div>
        <div className="section-copy-group">
          <p data-sws-item>
            None of this is a feature to be sold back to you later. It is what the build is, and it
            is easier to do once than to retrofit.
          </p>
        </div>
      </div>

      <dl className="container container--content sws-foundation__spec" data-sws-stagger>
        {FOUNDATION.map((item) => (
          <div key={item.title} data-sws-stagger-item>
            <dt>{item.title}</dt>
            <dd>{item.body}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
