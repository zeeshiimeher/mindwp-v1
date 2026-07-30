/**
 * The moment after — plan section 5.
 *
 * One interval, drawn once, in two states. The same span between hitting send
 * and a person picking it up is shown empty and then occupied, so the argument
 * is a comparison inside a single object rather than a list of steps.
 *
 * There is no scale, no axis and no duration anywhere in this section, and that
 * is deliberate rather than cautious: MindWP cannot promise a response time,
 * because the time belongs to the client's team and their day. What can be owned
 * is what occupies the gap, so the composition measures content and never
 * minutes.
 *
 * The empty register is given real area. A thin strip would understate it — the
 * emptiness is the thing being described, so it gets the room to be felt.
 */

interface Segment {
  label: string;
  body: string;
}

const SEGMENTS: Segment[] = [
  {
    label: "Acknowledged",
    body: "A confirmation that the enquiry arrived, worded so it stays true whatever happens next.",
  },
  {
    label: "A missed call gets a route back",
    body: "The call nobody was free to take does not simply end there.",
  },
  {
    label: "Context attached",
    body: "What they asked for and where they came from, travelling with the enquiry.",
  },
  {
    label: "Routed",
    body: "To the person your own rules point at, not whoever happens to look first.",
  },
  {
    label: "Owner named",
    body: "Visible, so it cannot sit between two people who each assumed the other had it.",
  },
];

export function SwsMoment() {
  return (
    <section id="moment" className="sws-moment section on-mist">
      <div className="container section-intro--split sws-moment__head" data-sws-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-sws-sequence-item>
            The moment after
          </p>
          <h2 data-sws-sequence-item>
            What happens between hitting send <em>and hearing back from a person.</em>
          </h2>
        </div>
        <p className="sws-moment__lede" data-sws-sequence-item>
          Every enquiry has this gap in it. Someone has acted, and nobody has answered yet. What
          sits inside it is the difference between a business that feels organised and one that
          feels like a gamble.
        </p>
      </div>

      <div className="container sws-moment__interval">
        <div className="sws-moment__ends" data-sws-fade>
          <span className="sws-moment__end">
            <i aria-hidden="true" />
            They hit send
          </span>
          <span className="sws-moment__span" aria-hidden="true" />
          <span className="sws-moment__end sws-moment__end--last">
            A person picks it up
            <i aria-hidden="true" />
          </span>
        </div>

        <div className="sws-moment__register" data-sws-fade>
          <p className="sws-artifact-label sws-artifact-label--muted">The same gap, unmanaged</p>
          <div className="sws-moment__void">
            <p>Nothing. Only time passing, and someone wondering whether it sent.</p>
          </div>
        </div>

        <div className="sws-moment__register">
          <p className="sws-artifact-label" data-sws-fade>
            The same gap, occupied
          </p>
          <ol className="sws-moment__channel" data-sws-stagger>
            {SEGMENTS.map((segment) => (
              <li key={segment.label} data-sws-stagger-item>
                <strong>{segment.label}</strong>
                <p>{segment.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="container" data-sws-fade>
        <p className="sws-moment__note">
          Nothing here is a promise about how long that gap lasts — that belongs to your team and
          how their day is going. It is about what is inside it, because an empty gap is where
          enquiries are actually lost.
        </p>
      </div>
    </section>
  );
}
