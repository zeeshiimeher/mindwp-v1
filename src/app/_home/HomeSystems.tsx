import { HomeSystemsSelector } from "@/app/_home/HomeSystemsSelector";

const CERTAINTY_STEPS = [
  ["01", "Understand"],
  ["02", "Trust"],
  ["03", "Ask"],
  ["04", "Be answered"],
] as const;

const CONNECTED_LABELS = ["Local SEO", "Lead Response", "Follow-Up & CRM", "Reputation"];

export function HomeDistance() {
  return (
    <section id="distance" className="home-distance section on-mist">
      <div className="container container--split home-distance__layout">
        <div className="home-distance__copy container--flow" data-home-sequence>
          <div className="section-title-group">
            <p className="eyebrow" data-home-sequence-item>
              Before enquiry
            </p>
            <h2 data-home-sequence-item>
              They do not need more information.{" "}
              <em>They need enough certainty to act.</em>
            </h2>
          </div>
          <p data-home-sequence-item>
            Distance is everything a visitor still has to do before asking: find the page that
            answers their question, see proof they can believe, understand what happens next. A
            smart website closes that space.
          </p>
          <p className="home-editorial-note" data-home-sequence-item>
            Clarity is not more copy. It is less distance between the question and the answer.
          </p>
        </div>

        <div
          className="home-distance__diagram"
          role="img"
          aria-label="Three answers close the distance between arriving curious and being ready to ask"
          data-home-fade
        >
          <span className="home-distance__ring home-distance__ring--outer" />
          <span className="home-distance__ring home-distance__ring--inner" />
          <span className="home-distance__arrive">
            <b>?</b>
            <small>Arrive curious</small>
          </span>
          <span className="home-distance__core">
            <small>Distance closed</small>
            <strong>Ready to ask</strong>
          </span>
          <span className="home-distance__marker home-distance__marker--one">
            <small>01</small>
            <strong>My question, answered</strong>
          </span>
          <span className="home-distance__marker home-distance__marker--two">
            <small>02</small>
            <strong>Proof I can check</strong>
          </span>
          <span className="home-distance__marker home-distance__marker--three">
            <small>03</small>
            <strong>A clear next step</strong>
          </span>
        </div>
      </div>
    </section>
  );
}

export function HomeCertainty() {
  return (
    <section id="certainty" className="home-certainty section on-dark">
      <div
        className="container container--content section-intro section-intro--centered"
        data-home-sequence
      >
        <p className="eyebrow eyebrow--centered" data-home-sequence-item>
          After enquiry
        </p>
        <h2 data-home-sequence-item>
          A useful enquiry still needs{" "}
          <em>an answer, an owner and a clear next step.</em>
        </h2>
      </div>
      <ol className="container home-certainty__steps" data-home-stagger>
        {CERTAINTY_STEPS.map(([number, label]) => (
          <li key={number} data-home-stagger-item>
            <small>{number}</small>
            <strong>{label}</strong>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function HomeOneSystem() {
  return (
    <section id="one-system" className="home-one-system section">
      <div
        className="container container--content section-intro section-intro--centered"
        data-home-sequence
      >
        <p className="eyebrow eyebrow--centered" data-home-sequence-item>
          Connected where useful
        </p>
        <h2 data-home-sequence-item>
          The website leads. <em>Support connects where the journey needs it.</em>
        </h2>
        <p className="home-one-system__crossed" data-home-sequence-item>
          Not <s>an SEO retainer,</s> plus <s>a website agency,</s>
          <br />
          plus <s>a forms tool,</s> plus <s>a half-set-up CRM,</s> plus
          <br />
          <s>a review platform.</s>
        </p>
        <p className="home-one-system__promise" data-home-sequence-item>
          One website where being <u>found</u>, <u>answered</u>, <u>owned</u>,
          <br /> and <u>proven</u> is built in.
        </p>
        <p data-home-sequence-item>
          Five logins, five invoices — and still nobody owns the enquiry. Connected does not mean
          replacing everything at once; it means the thinking joins up in one place, so nothing is
          lost in a hand-off between suppliers.
        </p>
      </div>

      <div className="container home-one-system__fan" aria-hidden="true" data-home-fade>
        <svg viewBox="0 0 620 240" preserveAspectRatio="xMidYMid meet">
          <line x1="310" y1="216" x2="55" y2="42" />
          <line x1="310" y1="216" x2="225" y2="24" />
          <line x1="310" y1="216" x2="395" y2="24" />
          <line x1="310" y1="216" x2="565" y2="42" />
          {[55, 225, 395, 565].map((x, index) => (
            <circle key={x} cx={x} cy={index === 0 || index === 3 ? 42 : 24} r="7" />
          ))}
          <circle cx="310" cy="216" r="13" className="home-one-system__hub-dot" />
        </svg>
        {CONNECTED_LABELS.map((label, index) => (
          <span
            className={`home-one-system__fan-label home-one-system__fan-label--${index + 1}`}
            key={label}
          >
            {label}
          </span>
        ))}
        <strong>Website</strong>
      </div>
    </section>
  );
}

export function HomeFiveSystems() {
  return (
    <section id="five-systems" className="home-systems section on-dark">
      <div
        className="container container--content section-intro section-intro--centered"
        data-home-sequence
      >
        <p className="eyebrow eyebrow--centered" data-home-sequence-item>
          Beyond the website
        </p>
        <h2 data-home-sequence-item>
          Add the support <em>that earns its place.</em>
        </h2>
        <p data-home-sequence-item>
          The website is the foundation. The other four attach where your work actually slips — some
          clients need all five, most start with one or two.
        </p>
      </div>
      <div className="container">
        <HomeSystemsSelector />
      </div>
    </section>
  );
}
