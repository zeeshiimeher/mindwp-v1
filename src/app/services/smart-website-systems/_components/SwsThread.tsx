/**
 * One accountable engagement — plan section 9.
 *
 * The move is accountability and only accountability. Every `accountability`
 * line below is a statement of what we are answerable for; the moment one
 * describes what the website does it has stolen section 3, what a connected
 * responsibility does steals 4–8, what finished work looks like steals 10, and
 * what happens later steals 11. That rule is why this section does not read
 * like the rest of the page repeated.
 *
 * One continuous thread, six unequal strata, and the seams drawn as owned. On
 * a normal project every supplier owns a box and nobody owns the lines between
 * them, so the joins are where this kind of work fails — which is why the
 * joins, not the stages, are what this composition emphasises.
 *
 * The boundary rail runs the full height rather than appearing as a footnote:
 * what belongs to the client belongs to them for the whole engagement, not as
 * a concession at the end.
 *
 * Strata are deliberately unequal in height, indent and density so they can
 * never resolve into a row of peers. Test carries the most weight because it is
 * where the whole agreed path is answered for at once.
 */

interface Stratum {
  stage: string;
  carried: string;
  accountability: string;
  /** Relative weight — drives indent and vertical room. Never uniform. */
  weight: 1 | 2 | 3;
}

const STRATA: Stratum[] = [
  {
    stage: "Decision",
    carried: "Where the thread starts",
    accountability:
      "We agree what your customers are actually deciding before anything is drawn, and that decision is the thing every later stage answers to.",
    weight: 2,
  },
  {
    stage: "Direction",
    carried: "The decision",
    accountability:
      "Structure and words are set against that decision rather than against a page count, so nothing downstream has to guess what the site is for.",
    weight: 1,
  },
  {
    stage: "Build",
    carried: "The agreed direction",
    accountability:
      "The people who set the direction are the people answerable for whether the built site still holds it.",
    weight: 1,
  },
  {
    stage: "Connection",
    carried: "A working site, and the scope we agreed",
    accountability:
      "Agreed connected responsibilities are configured against the site itself — not proposed in a document and left for somebody else to wire up.",
    weight: 2,
  },
  {
    stage: "Test",
    carried: "Everything above it",
    accountability:
      "The complete agreed path is walked twice: once as one of your customers, once as your team. The joins are checked hardest, because the joins are where work like this actually fails.",
    weight: 3,
  },
  {
    stage: "Handover or management",
    carried: "A tested, working path",
    accountability:
      "Your team is shown what they will use before anything changes hands, and whether we stay involved afterwards is agreed separately rather than assumed.",
    weight: 2,
  },
];

export function SwsThread() {
  return (
    <section id="engagement" className="sws-thread section on-dark">
      <div className="container section-intro--split sws-thread__head" data-sws-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-sws-sequence-item>
            One accountable engagement
          </p>
          <h2 data-sws-sequence-item>
            The work stays accountable <em>from first decision to final test.</em>
          </h2>
        </div>
        <p className="sws-thread__lede" data-sws-sequence-item>
          Split this across a designer, a developer and whoever set up the tools, and every one of
          them owns their own box. Nobody owns the lines between the boxes — which is exactly where
          this kind of work comes apart.
        </p>
      </div>

      <div className="container sws-thread__body" data-sws-thread>
        <ol className="sws-thread__strata" data-sws-stagger>
          <span className="sws-thread__spine" aria-hidden="true">
            <i data-sws-thread-stroke />
          </span>

          {STRATA.map((stratum) => (
            <li
              key={stratum.stage}
              data-sws-stagger-item
              data-weight={stratum.weight}
            >
              <span className="sws-thread__seam" aria-hidden="true" data-sws-thread-seam />
              <div className="sws-thread__stratum">
                <p className="sws-thread__stage">{stratum.stage}</p>
                <p className="sws-thread__carried">
                  <span className="sws-artifact-label">Carried in</span>
                  {stratum.carried}
                </p>
                <p className="sws-thread__accountability">{stratum.accountability}</p>
              </div>
            </li>
          ))}
        </ol>

        <aside className="sws-thread__boundary">
          <span className="sws-thread__boundary-rule" aria-hidden="true" />
          <div>
            <p className="sws-artifact-label sws-artifact-label--muted">Yours throughout</p>
            <p>
              Professional and clinical judgement. Commercial and pricing decisions. Anything outside
              the scope we agreed.
            </p>
            <p>
              We are accountable for what we build, connect and test — never for the decisions that
              belong to your business.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
