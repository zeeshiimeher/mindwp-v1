/**
 * How it actually goes — plan section 2.
 *
 * The move is recognition, and nothing else. No mechanism, no diagram, no
 * preview of the offer: the reader should finish this section having recognised
 * their own week, not having learned how anything works.
 *
 * The composition is the argument. Every other section on this page is built on
 * a spine, a thread or a rail — something that connects. This one deliberately
 * has none. Six incidents sit on the page unaligned, at slightly different
 * angles and depths, connected to nothing, because that is exactly the state
 * being described. The only aligned element in the whole section is the verdict
 * underneath them.
 *
 * These are recognisable situations, not evidence. They are illustrative by
 * construction — no client, no measurement and no outcome is being claimed —
 * and labelling something this obviously explanatory as a demonstration would
 * be the defensive kind of hedging Writing warns against.
 */

interface Incident {
  when: string;
  what: string;
  outcome: string;
  /** Grid placement and tilt. Irregular on purpose — see the note above. */
  column: string;
  offset: string;
  tilt: string;
}

const INCIDENTS: Incident[] = [
  {
    when: "18:42, Tuesday",
    what: "An enquiry comes through the website.",
    outcome: "Someone will see it in the morning.",
    column: "1 / span 5",
    offset: "0rem",
    tilt: "-1.4deg",
  },
  {
    when: "11:15, Wednesday",
    what: "The phone rings while you are with someone.",
    outcome: "It rings out. Nobody knows it happened.",
    column: "7 / span 5",
    offset: "3rem",
    tilt: "1.1deg",
  },
  {
    when: "Thursday",
    what: "A message lands in an account one person checks.",
    outcome: "They are on leave until the following week.",
    column: "2 / span 5",
    offset: "1.25rem",
    tilt: "1.7deg",
  },
  {
    when: "The same week",
    what: "Two people each think the other one replied.",
    outcome: "Neither of them did.",
    column: "8 / span 5",
    offset: "4.25rem",
    tilt: "-0.9deg",
  },
  {
    when: "A fortnight on",
    what: "Somebody remembers to follow it up.",
    outcome: "The name is gone, and so is what they asked for.",
    column: "1 / span 5",
    offset: "2rem",
    tilt: "-1.8deg",
  },
  {
    when: "Eventually",
    what: "They go elsewhere, or they go nowhere at all.",
    outcome: "Either way, you never hear about it.",
    column: "7 / span 6",
    offset: "0.5rem",
    tilt: "1.3deg",
  },
];

export function SwsIncidents() {
  return (
    <section id="how-it-goes" className="sws-incidents section">
      <div className="container section-intro--split sws-incidents__head" data-sws-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-sws-sequence-item>
            How it actually goes
          </p>
          <h2 data-sws-sequence-item>
            Nothing dramatic goes wrong. <em>It just quietly doesn&rsquo;t happen.</em>
          </h2>
        </div>
        <p className="sws-incidents__lede" data-sws-sequence-item>
          There is rarely a moment you could point at. No system fell over and nobody made a mistake
          worth mentioning. It is a normal week, and by the end of it a handful of people who were
          interested have simply gone quiet.
        </p>
      </div>

      <ol className="container sws-incidents__field" data-sws-stagger>
        {INCIDENTS.map((incident) => (
          <li
            key={incident.what}
            data-sws-stagger-item
            style={
              {
                "--column": incident.column,
                "--offset": incident.offset,
                "--tilt": incident.tilt,
              } as React.CSSProperties
            }
          >
            <small>{incident.when}</small>
            <p>{incident.what}</p>
            <p className="sws-incidents__outcome">{incident.outcome}</p>
          </li>
        ))}
      </ol>

      <div className="container sws-incidents__verdict" data-sws-sequence>
        <p className="editorial-note" data-sws-sequence-item>
          None of that is a disaster. That is precisely why it keeps happening.
        </p>
        <p data-sws-sequence-item>
          A busy week does not announce what it dropped. The cost is invisible by design, and it is
          paid in the enquiries you already earned rather than the ones you never had.
        </p>
      </div>
    </section>
  );
}
