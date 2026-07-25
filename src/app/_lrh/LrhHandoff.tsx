/**
 * The page's centre, and the limit that follows it.
 *
 * Visible ownership is composed as an asymmetric threshold: three *small*
 * finished facts on the system's side of an emerald line, and one line at
 * display scale on the person's side. The asymmetry is the argument — the
 * built part is small and finite; the human part is the large one.
 *
 * Human boundary continues the same navy environment rather than opening a
 * second focal band. It keeps its own semantic section and its own eyebrow,
 * but takes quiet padding, a reduced heading scale and a hairline transition,
 * so a necessary caution does not claim the same weight as the positive
 * argument above it.
 */

const CARRIED: readonly { label: string; body: string }[] = [
  {
    label: "What arrived",
    body: "The enquiry in the sender's own words, on the channel it came in on.",
  },
  {
    label: "What was already said",
    body: "The exact acknowledgement that went back, so nobody repeats or contradicts it.",
  },
  {
    label: "Why it needs them",
    body: "What kind of request it is, and what it is waiting on.",
  },
];

const DECISIONS = ["Bookings", "Quotes and prices", "Advice", "Professional judgement"] as const;

export function LrhHandoff() {
  return (
    <section id="visible-ownership" className="lrh-handoff section section--focal on-dark">
      <div className="container section-intro" data-lrh-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-lrh-sequence-item>
            Visible ownership
          </p>
          <h2 className="display-feature" data-lrh-sequence-item>
            The system makes the first move. <em>Your team owns what follows.</em>
          </h2>
        </div>
      </div>

      <div className="container lrh-handoff__threshold">
        <div className="lrh-handoff__carried" data-lrh-stagger>
          <p className="lrh-artifact-label" data-lrh-stagger-item>
            What reaches them
          </p>
          {CARRIED.map((item) => (
            <div key={item.label} data-lrh-stagger-item>
              <strong>{item.label}</strong>
              <p>{item.body}</p>
            </div>
          ))}
        </div>

        <div className="lrh-handoff__person" data-lrh-fade>
          <p className="lrh-handoff__line">Then a person takes it.</p>
          <p>
            Not a queue, and not a shared inbox everyone assumes someone else is watching. One named
            person who can see the whole enquiry before they reply and owns the next human action
            after handoff.
          </p>
        </div>
      </div>
    </section>
  );
}

export function LrhBoundary() {
  return (
    <section id="human-boundary" className="lrh-boundary section section--quiet on-dark">
      <div className="container lrh-boundary__inner" data-lrh-sequence>
        <div className="lrh-boundary__copy">
          <p className="eyebrow" data-lrh-sequence-item>
            Human boundary
          </p>
          <h3 data-lrh-sequence-item>
            Automation can acknowledge and route. The right person still decides.
          </h3>
          <p data-lrh-sequence-item>
            None of these are made by the system MindWP builds. It acknowledges, it routes, and it
            stops. That boundary is not a limitation we are apologising for — it is the reason the
            first response can be trusted.
          </p>
        </div>

        <ul className="lrh-boundary__decisions" data-lrh-sequence-item>
          {DECISIONS.map((decision) => (
            <li key={decision}>{decision}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
