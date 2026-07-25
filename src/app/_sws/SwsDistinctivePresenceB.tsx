/**
 * An asymmetric editorial split — a left-heavy statement breaking past
 * centre, paired with a slim vertical colophon strip — rather than variant
 * A's centred statement over a receding row. The first genuinely
 * off-centre composition on the page. "Practitioner presence" (variant A's
 * wording) is generalised to "Named accountability" here: MindWP serves
 * clinics, law boutiques and other specialist businesses alike, and
 * "practitioner" reads as clinic-only language.
 */
const DIMENSIONS = [
  { term: "Positioning", note: "What you lead with, not a category default." },
  { term: "Voice", note: "How your own people actually explain the work." },
  { term: "Proof style", note: "The evidence your specific buyers check." },
  { term: "Named accountability", note: "Who visibly stands behind it." },
] as const;

export function SwsDistinctivePresenceB() {
  return (
    <section id="distinctive-presence" className="sws-distinctive-presence-b section on-dark">
      <div className="container section-intro section-intro--centered" data-sws-sequence>
        <p className="eyebrow eyebrow--centered" data-sws-sequence-item>
          Distinctive presence
        </p>
        <h2 data-sws-sequence-item>
          Look recognisably like this business — <em>not another version of its category.</em>
        </h2>
      </div>

      <div className="container sws-distinctive-presence-b__break" data-sws-fade>
        <p className="sws-distinctive-presence-b__statement">
          Recognisably yours. <em>Never a template with your logo dropped in.</em>
        </p>

        <ul className="sws-distinctive-presence-b__strip">
          {DIMENSIONS.map((dimension) => (
            <li key={dimension.term}>
              <strong>{dimension.term}</strong>
              <span>{dimension.note}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
