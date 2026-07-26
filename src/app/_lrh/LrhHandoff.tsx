/**
 * Visible ownership — the page's centre, moved to light ground.
 *
 * Centred rather than split, and dominated by one sentence at hero scale.
 * Beneath it, the same routing-slip anatomy used for Different Requests —
 * a label-and-numeral head, a bold record line, a labelled row set with one
 * stamped row, a closing first-move note — carrying the .lrh-slips__* rules
 * from lrh-rebuild.css as-is, so the card is visually identical.
 *
 * The field set is repointed from routing to custody: instead of the rule
 * that placed it, each record shows what already went back and who has it
 * now, because ownership is the argument here, not the routing decision
 * (that is Different Requests' job). The four records are edge cases about
 * continuity — after hours, a duplicate message, a returned call, a referral
 * — rather than the same four request types shown there, so the two sections
 * don't repeat each other's examples.
 *
 * Automation follows on navy. It is the capability section, not a caution:
 * six verbs the system performs, then the point at which it stops. The
 * boundary lands harder at the end of a list of things it genuinely does.
 */

const RECORDS: readonly {
  arrived: string;
  channel: string;
  acknowledged: string;
  owner: string;
  firstMove: string;
}[] = [
  {
    arrived: "A form submitted out of hours.",
    channel: "11:47pm, website form",
    acknowledged: "First thing the next morning, on the same form",
    owner: "Whoever opens that morning",
    firstMove: "Confirm it wasn't missed overnight, then take it from there.",
  },
  {
    arrived: "A second message before the first was answered.",
    channel: "Same thread, 40 minutes later",
    acknowledged: "Logged against the open thread, not as a new enquiry",
    owner: "Whoever already has the first one",
    firstMove: "One reply covers both messages.",
  },
  {
    arrived: "A missed call, returned.",
    channel: "Callback within the hour",
    acknowledged: "Logged as the same enquiry, not a fresh one",
    owner: "Whoever picked up the callback",
    firstMove: "Carry on from where the missed call left off.",
  },
  {
    arrived: "A referral from an existing client.",
    channel: "Form, naming who sent them",
    acknowledged: "The referral noted before anything else",
    owner: "Whoever manages that relationship",
    firstMove: "Thank them for the referral in the first reply.",
  },
];

const PERFORMS: readonly (readonly [string, string])[] = [
  ["Connects", "The phone line, the forms and the message channels you already use."],
  ["Detects", "A missed call, a submitted form, a new message, a consultation request."],
  ["Acknowledges", "Sends the agreed first response, on the channel it arrived on."],
  ["Routes", "Puts it in front of the named person for that kind of request."],
  ["Records", "Logs what arrived and what was said, so nothing is retold from memory."],
  ["Notifies", "Tells that person it is theirs."],
];

const NEVER = ["Bookings", "Quotes and prices", "Advice", "Professional judgement"] as const;

export function LrhHandoff() {
  return (
    <section id="visible-ownership" className="lrh-handoff section section--focal">
      <div className="container lrh-handoff__inner" data-lrh-sequence>
        <p className="eyebrow eyebrow--centered" data-lrh-sequence-item>
          Visible ownership
        </p>
        <h2 className="lrh-handoff__line" data-lrh-sequence-item>
          Then a person takes it.
        </h2>
        <p data-lrh-sequence-item>
          Not a queue. Not a shared inbox everyone assumes someone else is watching. Ownership is a
          record, the same way routing is — what already went back, and who has it now.
        </p>
      </div>

      <ol className="container lrh-slips__stack" data-lrh-stagger>
        {RECORDS.map((record, index) => (
          <li
            key={record.arrived}
            className="lrh-slips__slip"
            style={{ "--i": index } as React.CSSProperties}
            data-lrh-stagger-item
          >
            <p className="lrh-slips__head">
              <span>Handoff record</span>
              <b aria-hidden="true">{String(index + 1).padStart(2, "0")}</b>
            </p>

            <p className="lrh-slips__arrived">{record.arrived}</p>

            <dl className="lrh-slips__rows">
              <div>
                <dt>Arrived on</dt>
                <dd>{record.channel}</dd>
              </div>
              <div>
                <dt>Acknowledged</dt>
                <dd>{record.acknowledged}</dd>
              </div>
              <div className="lrh-slips__placed">
                <dt>Owned by</dt>
                <dd>{record.owner}</dd>
              </div>
            </dl>

            <p className="lrh-slips__first">
              <span className="lrh-artifact-label">First move</span>
              {record.firstMove}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function LrhAutomation() {
  return (
    <section id="automation" className="lrh-automation section section--focal on-dark">
      <div className="container section-intro" data-lrh-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-lrh-sequence-item>
            What the automation does
          </p>
          <h2 data-lrh-sequence-item>
            Six things it performs every time. <em>One thing it never does.</em>
          </h2>
        </div>
        <div className="section-copy-group">
          <p data-lrh-sequence-item>
            Automation earns its place here by removing the parts that depend on somebody
            remembering — not by taking over the parts that need judgement.
          </p>
        </div>
      </div>

      <ol className="container lrh-automation__performs" data-lrh-stagger>
        {PERFORMS.map(([verb, note], index) => (
          <li key={verb} data-lrh-stagger-item>
            <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <strong>{verb}</strong>
            <small>{note}</small>
          </li>
        ))}
      </ol>

      <div className="container lrh-automation__stop" data-lrh-fade>
        <p className="lrh-automation__stop-line">And then it stops.</p>
        <ul>
          {NEVER.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="lrh-automation__stop-note">
          None of these are automated decisions. They stay with the person the enquiry reached.
        </p>
      </div>
    </section>
  );
}
