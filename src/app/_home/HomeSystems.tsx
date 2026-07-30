import { HomeConnectedArt } from "@/app/_home/HomeConnectedArt";
import { HomeSystemsSelector } from "@/app/_home/HomeSystemsSelector";

const AFTER_ENQUIRY_STEPS = [
  ["01", "Acknowledged"],
  ["02", "Owned"],
  ["03", "Responded"],
  ["04", "Handled consistently"],
] as const;

export function HomeDistance() {
  return (
    <section id="distance" className="home-distance section on-mist">
      <div className="container section-intro--split home-distance__layout">
        <div className="home-distance__copy section-intro" data-home-sequence>
          <div className="section-title-group">
            <p className="eyebrow" data-home-sequence-item>
              Before enquiry
            </p>
            <h2 data-home-sequence-item>
              They do not need more information. <em>They need enough certainty to act.</em>
            </h2>
          </div>
          <p data-home-sequence-item>
            Before anyone gets in touch, they need three things settled: that the page they landed
            on actually answers their situation, that the proof on it can be checked, and that the
            next step is obvious. A website built around that decision closes the distance instead
            of adding to it.
          </p>
          <p className="editorial-note" data-home-sequence-item>
            Clarity is not more copy. It is less distance between the question and the answer.
          </p>
        </div>

        <div
          className="home-distance__diagram"
          role="img"
          aria-label="Three answers close the distance between arriving curious and being ready to ask"
          data-home-orbit
        >
          <span className="home-distance__ring home-distance__ring--outer" data-home-orbit-ring />
          <span className="home-distance__ring home-distance__ring--inner" data-home-orbit-ring />
          <span className="home-distance__arrive" data-home-orbit-item>
            <b>?</b>
            <small>Arrive curious</small>
          </span>
          <span className="home-distance__marker home-distance__marker--one" data-home-orbit-item>
            <small>01</small>
            <strong>Question answered</strong>
          </span>
          <span className="home-distance__marker home-distance__marker--two" data-home-orbit-item>
            <small>02</small>
            <strong>Proof I can check</strong>
          </span>
          <span className="home-distance__marker home-distance__marker--three" data-home-orbit-item>
            <small>03</small>
            <strong>Clear next step</strong>
          </span>
          <span className="home-distance__core" data-home-orbit-item>
            <small>Distance closed</small>
            <strong>Ready to ask</strong>
          </span>
        </div>
      </div>
    </section>
  );
}

export function HomeAfterEnquiry() {
  return (
    <section id="after-enquiry" className="home-after-enquiry section section--quiet on-dark">
      <div className="container section-intro section-intro--centered" data-home-sequence>
        <p className="eyebrow eyebrow--centered" data-home-sequence-item>
          After contact
        </p>
        <h2 data-home-sequence-item>
          A form that submits <em>is not yet an enquiry that has been answered.</em>
        </h2>
        <p data-home-sequence-item>
          Smart Website Systems owns the path as far as a useful enquiry — the person understood the
          offer, gave enough context to be answered, and the request reached the destination you
          agreed, with a truthful confirmation that it was sent. Acknowledgement, useful context,
          routing and a visible owner are separate work, scoped on their own terms.
        </p>
      </div>
      <ol className="container home-after-enquiry__steps" data-home-stagger>
        {AFTER_ENQUIRY_STEPS.map(([number, label]) => (
          <li key={number} data-home-stagger-item>
            <span className="home-after-enquiry__marker" aria-hidden="true" />
            <small>{number}</small>
            <strong>{label}</strong>
          </li>
        ))}
      </ol>
      <p className="container home-after-enquiry__attribution home-artifact-label" data-home-fade>
        Part of Lead Response &amp; Handling
      </p>
    </section>
  );
}

export function HomeOneSystem() {
  return (
    <section id="one-system" className="home-one-system section">
      <div className="container section-intro section-intro--centered" data-home-sequence>
        <p className="eyebrow eyebrow--centered" data-home-sequence-item>
          One partner, separately scoped
        </p>
        <h2 data-home-sequence-item>
          The website is the public centre. <em>It is not the whole of what we can own.</em>
        </h2>
        {/* The promise leads and the negation qualifies it. Stated the other way
            round, the section opened on what MindWP is not — which reads as a
            defence rather than an offer now that the connected services are a
            first-class route. Line breaks are left to `text-wrap: balance`
            rather than hard <br />s, which produced an orphaned "owned," at the
            design width. */}
        <p className="home-one-system__promise" data-home-sequence-item>
          One partner for being <u>found</u>, <u>answered</u>, <u>owned</u> and <u>proven</u> — in
          whatever combination you need.
        </p>
        <p className="home-one-system__crossed" data-home-sequence-item>
          Not <s>a separate SEO retainer,</s> plus <s>a website agency,</s> plus{" "}
          <s>a forms tool,</s> plus <s>a half-set-up CRM,</s> plus <s>a review platform.</s>
        </p>
        <p data-home-sequence-item>
          The website is the public centre and the usual place to start, but it is not a
          precondition. Local SEO Authority supports discovery and evaluation before someone reaches
          the website. Lead Response &amp; Handling, Follow-Up &amp; CRM and Reputation &amp; Review
          begin once someone makes contact. Each is planned and scoped on its own, against a new
          website or one you already have.
        </p>
      </div>

      <div className="container home-one-system__system" data-home-fade>
        <HomeConnectedArt />
      </div>
    </section>
  );
}

export function HomeBeyondWebsite() {
  return (
    <section id="beyond-website" className="home-systems section on-dark">
      <div className="container section-intro section-intro--centered" data-home-sequence>
        <p className="eyebrow eyebrow--centered" data-home-sequence-item>
          Connected services
        </p>
        <h2 data-home-sequence-item>What happens once someone gets in touch.</h2>
        <p data-home-sequence-item>
          Lead Response &amp; Handling, Follow-Up &amp; CRM and Reputation &amp; Review are
          independently scoped responsibilities. MindWP plans how each should work, configures and
          connects it, tests the path and onboards the team. None requires a new website.
        </p>
      </div>
      <div className="container">
        <HomeSystemsSelector />
      </div>
      <p className="container home-systems__boundary" data-home-fade>
        Automation can acknowledge, route, organise and prompt. The decisions that require judgement
        remain with your team.
      </p>
    </section>
  );
}
