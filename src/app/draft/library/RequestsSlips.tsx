/**
 * Different requests — the routing slips.
 *
 * Payload: depth set, document-like.
 *
 * Four dockets, staggered and slightly rotated, each recording one routing
 * decision the way a real slip would: what arrived, the rule that matched,
 * where it was placed, and the first move that went back. Routing stops being a
 * diagram and becomes something you can inspect after the fact.
 *
 * The register is deliberately clerical — a label column, tabular figures, an
 * emerald placement stamp — because the commercial point is that these
 * decisions are recorded, not improvised.
 *
 * The rotation is small and the stagger vertical, so no slip ever crops its
 * neighbour's text. Each slip carries its own ground two steps off the band, so
 * the stack reads as objects rather than as a tinted list.
 */

const SLIPS: readonly {
  arrived: string;
  channel: string;
  rule: string;
  placed: string;
  firstMove: string;
}[] = [
  {
    arrived: "A treatment or service question",
    channel: "Website form",
    rule: "The service picked on the form",
    placed: "Whoever can answer it",
    firstMove: "Confirm the question landed, and point to where it is answered.",
  },
  {
    arrived: "A booking request",
    channel: "Booking form",
    rule: "The form it arrived on",
    placed: "Whoever holds the diary",
    firstMove: "Confirm it is received, and say what happens before it is confirmed.",
  },
  {
    arrived: "A quote or new project",
    channel: "Website form",
    rule: "The quote form, or a keyword you set",
    placed: "Whoever prices the work",
    firstMove: "Confirm it is received, and say when a price follows.",
  },
  {
    arrived: "Someone already under way",
    channel: "Message or email",
    rule: "A match against an existing record",
    placed: "Whoever they already deal with",
    firstMove: "Reply on the same thread, not as a new enquiry.",
  },
];

export function RequestsSlips() {
  return (
    <section id="requests-slips" className="lrh-slips section section--focal on-mist">
      <div className="container section-intro" data-lrh-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-lrh-sequence-item>
            Different requests
          </p>
          <h2 data-lrh-sequence-item>
            A treatment question, a booking and a new project{" "}
            <em>should not take the same path.</em>
          </h2>
        </div>
        <div className="section-copy-group">
          <p data-lrh-sequence-item>
            Nothing is interpreted and nothing is guessed. Each route is a rule you set once, and
            every enquiry that takes it leaves a record of the decision.
          </p>
        </div>
      </div>

      <ol className="container lrh-slips__stack" data-lrh-stagger>
        {SLIPS.map((slip, index) => (
          <li
            key={slip.arrived}
            className="lrh-slips__slip"
            style={{ "--i": index } as React.CSSProperties}
            data-lrh-stagger-item
          >
            <p className="lrh-slips__head">
              <span>Routing slip</span>
              <b aria-hidden="true">{String(index + 1).padStart(2, "0")}</b>
            </p>

            <p className="lrh-slips__arrived">{slip.arrived}</p>

            <dl className="lrh-slips__rows">
              <div>
                <dt>Arrived on</dt>
                <dd>{slip.channel}</dd>
              </div>
              <div>
                <dt>Rule matched</dt>
                <dd>{slip.rule}</dd>
              </div>
              <div className="lrh-slips__placed">
                <dt>Placed with</dt>
                <dd>{slip.placed}</dd>
              </div>
            </dl>

            <p className="lrh-slips__first">
              <span className="lrh-artifact-label">First move</span>
              {slip.firstMove}
            </p>
          </li>
        ))}
      </ol>

      <p className="container lrh-slips__close" data-lrh-fade>
        You agree each first move once. After that it happens the same way every time.
      </p>
    </section>
  );
}
