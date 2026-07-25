/**
 * Visible ownership — the page's centre, moved to light ground.
 *
 * Centred rather than split, and dominated by one sentence at hero scale. The
 * three things that travel with the enquiry run beneath it as a single compact
 * hairline strip, so this reads as one large statement with a footnote rather
 * than a two-column band — which is what it was becoming next to Necessary
 * Context.
 *
 * Automation follows on navy. It is the capability section, not a caution:
 * six verbs the system performs, then the point at which it stops. The
 * boundary lands harder at the end of a list of things it genuinely does.
 */

const CARRIED: readonly (readonly [string, string])[] = [
  ["What arrived", "In the sender's own words, on the channel it came in on."],
  ["What was already said", "The exact acknowledgement that went back."],
  ["Why it needs them", "What kind of request it is, and what it is waiting on."],
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
          Not a queue. Not a shared inbox everyone assumes someone else is watching. One named
          person, who can see the whole enquiry before they reply and owns the next human action
          after handoff.
        </p>
      </div>

      <dl className="container lrh-handoff__carried" data-lrh-stagger>
        {CARRIED.map(([label, body]) => (
          <div key={label} data-lrh-stagger-item>
            <dt>{label}</dt>
            <dd>{body}</dd>
          </div>
        ))}
      </dl>
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
