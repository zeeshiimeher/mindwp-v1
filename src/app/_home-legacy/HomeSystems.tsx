import { HomeSystemsSelector } from "@/app/_home-legacy/HomeSystemsSelector";

const AFTER_ENQUIRY_STEPS = [
  ["01", "Acknowledged"],
  ["02", "Owned"],
  ["03", "Answered"],
  ["04", "Handled consistently"],
] as const;

const CONNECTED_LABELS = ["Local SEO", "Lead Response", "Follow-Up & CRM", "Reputation"];

export function HomeDistance() {
  return (
    <section id="distance" className="hl-distance section on-mist">
      <div className="container section-intro--split hl-distance__layout">
        <div className="hl-distance__copy section-intro" data-hl-sequence>
          <div className="section-title-group">
            <p className="eyebrow" data-hl-sequence-item>
              Before enquiry
            </p>
            <h2 data-hl-sequence-item>
              They do not need more information.{" "}
              <em>They need enough certainty to act.</em>
            </h2>
          </div>
          <p data-hl-sequence-item>
            Before anyone gets in touch, they need three things settled: that the page they landed
            on actually answers their situation, that the proof on it can be checked, and that the
            next step is obvious. A smart website closes that distance instead of adding to it.
          </p>
          <p className="hl-editorial-note" data-hl-sequence-item>
            Clarity is not more copy. It is less distance between the question and the answer.
          </p>
        </div>

        <div
          className="hl-distance__diagram"
          role="img"
          aria-label="Three answers close the distance between arriving curious and being ready to ask"
          data-hl-fade
        >
          <span className="hl-distance__ring hl-distance__ring--outer" />
          <span className="hl-distance__ring hl-distance__ring--inner" />
          <span className="hl-distance__arrive">
            <b>?</b>
            <small>Arrive curious</small>
          </span>
          <span className="hl-distance__core">
            <small>Distance closed</small>
            <strong>Ready to ask</strong>
          </span>
          <span className="hl-distance__marker hl-distance__marker--one">
            <small>01</small>
            <strong>My question, answered</strong>
          </span>
          <span className="hl-distance__marker hl-distance__marker--two">
            <small>02</small>
            <strong>Proof I can check</strong>
          </span>
          <span className="hl-distance__marker hl-distance__marker--three">
            <small>03</small>
            <strong>A clear next step</strong>
          </span>
        </div>
      </div>
    </section>
  );
}

export function HomeAfterEnquiry() {
  return (
    <section id="after-enquiry" className="hl-after-enquiry section on-dark">
      <div
        className="container section-intro section-intro--centered"
        data-hl-sequence
      >
        <p className="eyebrow eyebrow--centered" data-hl-sequence-item>
          After enquiry
        </p>
        <h2 data-hl-sequence-item>
          A useful enquiry still needs{" "}
          <em>an answer, an owner and a clear next step.</em>
        </h2>
        <p data-hl-sequence-item>
          A slow reply, an unclear owner, or a next step nobody can see all cost the same thing:
          confidence the enquiry was worth sending. None of this needs automation to replace your
          team — it needs the handling to be visible.
        </p>
      </div>
      <ol className="container hl-after-enquiry__steps" data-hl-stagger>
        {AFTER_ENQUIRY_STEPS.map(([number, label]) => (
          <li key={number} data-hl-stagger-item>
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
    <section id="one-system" className="hl-one-system section">
      <div
        className="container section-intro section-intro--centered"
        data-hl-sequence
      >
        <p className="eyebrow eyebrow--centered" data-hl-sequence-item>
          Connected where useful
        </p>
        <h2 data-hl-sequence-item>
          The website leads. <em>Support connects where the journey needs it.</em>
        </h2>
        <p className="hl-one-system__crossed" data-hl-sequence-item>
          Not <s>an SEO retainer,</s> plus <s>a website agency,</s>
          <br />
          plus <s>a forms tool,</s> plus <s>a half-set-up CRM,</s> plus
          <br />
          <s>a review platform.</s>
        </p>
        <p className="hl-one-system__promise" data-hl-sequence-item>
          One website where being <u>found</u>, <u>answered</u>, <u>owned</u>,
          <br /> and <u>proven</u> is built in.
        </p>
        <p data-hl-sequence-item>
          The website is the foundation. Around it, we connect the support your customers&apos;
          journey actually needs — being found nearby, enquiries answered, follow-up kept moving,
          reviews working for you. Each piece is planned and scoped on its own, so you add what
          helps rather than buying a set.
        </p>
      </div>

      <div className="container hl-one-system__fan" aria-hidden="true" data-hl-fade>
        <svg viewBox="0 0 620 240" preserveAspectRatio="xMidYMid meet">
          <line x1="310" y1="216" x2="55" y2="42" />
          <line x1="310" y1="216" x2="225" y2="24" />
          <line x1="310" y1="216" x2="395" y2="24" />
          <line x1="310" y1="216" x2="565" y2="42" />
          {[55, 225, 395, 565].map((x, index) => (
            <circle key={x} cx={x} cy={index === 0 || index === 3 ? 42 : 24} r="7" />
          ))}
          <circle cx="310" cy="216" r="13" className="hl-one-system__hub-dot" />
        </svg>
        {CONNECTED_LABELS.map((label, index) => (
          <span
            className={`hl-one-system__fan-label hl-one-system__fan-label--${index + 1}`}
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

export function HomeBeyondWebsite() {
  return (
    <section id="beyond-website" className="hl-systems section on-dark">
      <div
        className="container section-intro section-intro--centered"
        data-hl-sequence
      >
        <p className="eyebrow eyebrow--centered" data-hl-sequence-item>
          Beyond the website
        </p>
        <h2 data-hl-sequence-item>
          Add the support <em>that earns its place.</em>
        </h2>
        <p data-hl-sequence-item>
          The website gives people a clear place to understand the offer, decide and get in touch.
          These five moments shape what happens around it. MindWP plans them around how your
          business works, connects them to the website and phones, tests the complete path, and
          shows your team how everything works before handover.
        </p>
      </div>
      <div className="container">
        <HomeSystemsSelector />
      </div>
    </section>
  );
}
