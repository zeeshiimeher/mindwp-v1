/**
 * One axis, one threshold.
 *
 * Everything above the line is asked for; everything below it is deliberately
 * refused. A single horizontal rule carries the whole decision, which keeps
 * this from becoming another two-column ledger — it is one list with a limit,
 * not two lists in competition.
 *
 * The quietest section on the page, by design. It sits between two focal
 * moments and should cost almost nothing to read.
 */

const ASKED = [
  "What they are asking about",
  "How to reach them, and when",
  "New, or already under way",
  "Anything they want to add",
] as const;

const REFUSED = [
  "Clinical or case detail",
  "Sensitive personal information",
  "Anything the first response will not use",
] as const;

export function LrhContext() {
  return (
    <section id="necessary-context" className="lrh-context section section--quiet">
      <div className="container lrh-context__inner">
        <div className="lrh-context__head" data-lrh-sequence>
          <p className="eyebrow" data-lrh-sequence-item>
            Necessary context
          </p>
          <h2 data-lrh-sequence-item>
            Ask for what the next person needs. <em>Nothing else.</em>
          </h2>
        </div>

        <div className="lrh-context__threshold">
          <ul className="lrh-context__asked" data-lrh-stagger>
            {ASKED.map((item) => (
              <li key={item} data-lrh-stagger-item>
                {item}
              </li>
            ))}
          </ul>

          <p className="lrh-context__rule" aria-hidden="true" />

          <ul className="lrh-context__refused" data-lrh-stagger>
            {REFUSED.map((item) => (
              <li key={item} data-lrh-stagger-item>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="lrh-context__note" data-lrh-fade>
          Every extra field adds effort, so each one has to save the person replying from having to
          ask. What belongs in a consultation belongs in the consultation.
        </p>
      </div>
    </section>
  );
}
