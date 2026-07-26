/**
 * Different requests — the switchboard.
 *
 * Payload: node model.
 *
 * Four things arrive at the top, all four pass through one horizontal bar, and
 * four different owners come out of the bottom. The bar is the object: it is
 * where the decision lives, and every rule written on it is an agreed rule the
 * business set once — a form field, the channel, a keyword, a match against an
 * existing record.
 *
 * Making the bar the hero rather than the crossing lines is the point. The
 * argument is not "these paths cross"; it is "there is one place the routing
 * decision is made, and you can read what it says".
 *
 * Nothing here implies the system understands an enquiry. Each rule names the
 * mechanical thing that sent it. No classification, no interpretation.
 */

const LANES: readonly {
  arrives: string;
  rule: string;
  owner: string;
  firstMove: string;
}[] = [
  {
    arrives: "A treatment or service question",
    rule: "The service picked on the form",
    owner: "Whoever can answer it",
    firstMove: "Confirm the question landed, and point to where it is answered.",
  },
  {
    arrives: "A booking request",
    rule: "The booking form it arrived on",
    owner: "Whoever holds the diary",
    firstMove: "Confirm it is received, and say what happens before it is confirmed.",
  },
  {
    arrives: "A quote or new project",
    rule: "The quote form, or a keyword you set",
    owner: "Whoever prices the work",
    firstMove: "Confirm it is received, and say when a price follows.",
  },
  {
    arrives: "Someone already under way",
    rule: "A match against an existing record",
    owner: "Whoever they already deal with",
    firstMove: "Reply on the same thread, not as a new enquiry.",
  },
];

export function RequestsSwitchboard() {
  return (
    <section id="requests-switchboard" className="lrh-switch section section--focal on-mist">
      <div className="container section-intro section-intro--centered" data-lrh-sequence>
        <p className="eyebrow eyebrow--centered" data-lrh-sequence-item>
          Different requests
        </p>
        <h2 data-lrh-sequence-item>
          A treatment question, a booking and a new project{" "}
          <em>should not take the same path.</em>
        </h2>
        <p data-lrh-sequence-item>
          Every route below is a rule you agree once. Nothing is interpreted, and nothing is guessed
          — the routing decision is a thing you can read.
        </p>
      </div>

      <div className="container lrh-switch__board">
        <ol className="lrh-switch__lanes" data-lrh-stagger>
          {LANES.map((lane) => (
            <li key={lane.arrives} className="lrh-switch__lane" data-lrh-stagger-item>
              <p className="lrh-switch__arrives">{lane.arrives}</p>
              <span className="lrh-switch__drop" aria-hidden="true" />
              <p className="lrh-switch__rule">
                <span className="lrh-switch__rule-label">Routed by</span>
                {lane.rule}
              </p>
              <span className="lrh-switch__drop lrh-switch__drop--out" aria-hidden="true" />
              <p className="lrh-switch__owner">{lane.owner}</p>
              <p className="lrh-switch__first">{lane.firstMove}</p>
            </li>
          ))}
        </ol>
      </div>

      <p className="container lrh-switch__close" data-lrh-fade>
        Routing decides who sees it first. It does not decide the answer.
      </p>
    </section>
  );
}
