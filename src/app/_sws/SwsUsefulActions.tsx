/**
 * Section 10. The action ladder, and what happens to what it collects.
 *
 * Three next steps drawn as real interface at true scale and ordered by
 * commitment, each paired with the decision it fits — then a thin strip showing
 * the enquiry leaving with its context and a truthful confirmation returning.
 */

interface Step {
  n: string;
  action: string;
  fits: string;
  body: string;
  ui: "call" | "question" | "review";
}

const STEPS: readonly Step[] = [
  {
    n: "01",
    action: "Call now",
    fits: "Already decided",
    body: "Somebody who has finished deciding and wants to book. Anything between them and a phone number is friction, so the number is a link, it is visible without scrolling, and the opening hours sit beside it.",
    ui: "call",
  },
  {
    n: "02",
    action: "Ask one question",
    fits: "One thing in the way",
    body: "Somebody who is close, but needs a single point clarified before they commit. Three fields. No project brief, no budget dropdown, nothing that turns a quick question into an application.",
    ui: "question",
  },
  {
    n: "03",
    action: "Request a review",
    fits: "Weighing a substantial decision",
    body: "Somebody at the start of something significant, who needs a conversation before a quote. A longer form is appropriate here — the extra fields are what make the first conversation useful rather than exploratory.",
    ui: "review",
  },
];

const DELIVERY = [
  {
    title: "The context goes with it",
    body: "Which page they were on, what they asked, and how they arrived. Without that, the person replying starts by asking questions the website already knew the answers to.",
  },
  {
    title: "A truthful confirmation comes back",
    body: "What was received, and when a reply should realistically be expected. A confirmation that promises a two-hour response had better be connected to somebody who can make one.",
  },
  {
    title: "It reaches a named person",
    body: "Not a shared inbox nobody owns. The enquiry arrives somewhere with a person attached to it, and the record shows who that is.",
  },
];

function ActionUi({ kind }: { kind: Step["ui"] }) {
  return (
    <svg className="lad__ui" viewBox="0 0 240 128" fill="none" aria-hidden="true" focusable="false">
      {kind === "call" ? (
        <>
          <rect x="12" y="34" width="156" height="40" rx="20" className="lad__btn" />
          <circle cx="42" cy="54" r="8" className="lad__btn-mark" />
          <rect x="60" y="50" width="86" height="8" rx="4" className="lad__btn-ink" />
          <rect x="12" y="88" width="110" height="5" rx="2.5" className="lad__dim" />
          <rect x="12" y="99" width="78" height="5" rx="2.5" className="lad__dim" />
        </>
      ) : null}

      {kind === "question" ? (
        <>
          <rect x="12" y="10" width="216" height="26" rx="5" className="lad__field" />
          <rect x="12" y="42" width="216" height="26" rx="5" className="lad__field" />
          <rect x="12" y="74" width="216" height="26" rx="5" className="lad__field" />
          <rect x="12" y="106" width="86" height="18" rx="5" className="lad__submit" />
        </>
      ) : null}

      {kind === "review" ? (
        <>
          <rect x="12" y="6" width="104" height="22" rx="5" className="lad__field" />
          <rect x="124" y="6" width="104" height="22" rx="5" className="lad__field" />
          <rect x="12" y="34" width="216" height="22" rx="5" className="lad__field" />
          <rect x="12" y="62" width="216" height="22" rx="5" className="lad__field" />
          <rect x="12" y="90" width="216" height="14" rx="5" className="lad__field" />
          <rect x="12" y="110" width="112" height="16" rx="5" className="lad__submit" />
        </>
      ) : null}
    </svg>
  );
}

export function SwsUsefulActions() {
  return (
    <section id="useful-actions" className="sws-actions section on-mist">
      <div className="container section-intro section-intro--split" data-sws-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-sws-item>
            Useful actions
          </p>
          <h2 data-sws-item>
            Match the next step to the decision—<em>and carry the enquiry where it needs to go.</em>
          </h2>
        </div>
        <div className="section-copy-group">
          <p data-sws-item>
            One call to action repeated on every page assumes every visitor is equally ready. They
            are not. The right next step depends entirely on how far through the decision somebody
            already is — and offering only the largest one loses everybody who is not there yet.
          </p>
        </div>
      </div>

      <ol className="container lad" data-sws-stagger>
        {STEPS.map((step) => (
          <li key={step.n} data-sws-stagger-item>
            <div className="lad__head">
              <span className="lad__n">{step.n}</span>
              <div>
                <h3>{step.action}</h3>
                <p className="lad__fits">{step.fits}</p>
              </div>
            </div>
            <ActionUi kind={step.ui} />
            <p className="lad__body">{step.body}</p>
            <span className="lad__weight" aria-hidden="true" data-weight={step.n} />
          </li>
        ))}
      </ol>

      <div className="container lad__delivery" data-sws-fade>
        <p className="sws-label">Once it is sent</p>
        <ol>
          {DELIVERY.map((item) => (
            <li key={item.title}>
              <strong>{item.title}</strong>
              <p>{item.body}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="container">
        <p className="lad__close editorial-note" data-sws-fade>
          A form is a promise about what happens next. It should only make one the business can
          keep.
        </p>
      </div>
    </section>
  );
}
