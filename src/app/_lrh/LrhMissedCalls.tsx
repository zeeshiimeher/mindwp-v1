/**
 * One fragment, gaining attributes.
 *
 * Two earlier versions failed for opposite reasons: two text timelines asked
 * the visitor to read seven lines to reach the point, and an empty box beside a
 * full one donated a third of the section to a blank rectangle that read as
 * unfinished rather than as a designed absence.
 *
 * This shows one subject changing instead of two subjects competing. A missed
 * call leaves a single stark fragment — an unknown number and a time — and the
 * text-back attaches three things to that same fragment. Same object, before
 * and after.
 *
 * The attachment is scrubbed to the visitor's own scroll rather than played on
 * entry, because accrual is the meaning: the rail grows and each attribute
 * lands as they move down the page. No pinning, so trackpads and touch keep
 * their scroll. `--lrh-scrub` defaults to 1, so without JS or under reduced
 * motion the finished state is what renders.
 */

const ATTACHED = [
  ["Acknowledged", "A message they have already received, on the number they rang."],
  ["Owned", "A named person the call now belongs to."],
  ["Open", "A thread they can reply to instead of calling the next name."],
] as const;

export function LrhMissedCalls() {
  return (
    <section id="missed-calls" className="lrh-calls section section--focal">
      <div className="container lrh-calls__band">
        <div className="lrh-calls__copy" data-lrh-sequence>
          <p className="eyebrow" data-lrh-sequence-item>
            Missed calls
          </p>
          <h2 data-lrh-sequence-item>
            A missed call is the only enquiry <em>that leaves nothing behind.</em>
          </h2>
          <p data-lrh-sequence-item>
            No message, no name, no reason. Nobody can tell whether it was a new enquiry, a
            supplier, or someone who has already tried once today — and the caller only knows that
            nobody answered.
          </p>
          <p className="lrh-calls__feature" data-lrh-sequence-item>
            <span className="lrh-artifact-label">The capability</span>
            <strong>Missed-call text-back.</strong> The call is detected, an agreed message goes out
            on the number they rang, and the missed call is placed with the person who returns
            calls.
          </p>
        </div>

        <div className="lrh-calls__stage" data-lrh-scrub>
          <div className="lrh-calls__fragment">
            <p className="lrh-calls__fragment-label">All a missed call leaves behind</p>
            <p className="lrh-calls__fragment-value">
              <span>Unknown caller</span>
              <b aria-hidden="true">·</b>
              <span>14:32</span>
            </p>
          </div>

          <div className="lrh-calls__attached">
            <span className="lrh-calls__spine" aria-hidden="true" />
            <span className="lrh-calls__spine-grow" aria-hidden="true" />

            <p className="lrh-calls__nothing">Nothing attached.</p>

            <ol>
              {ATTACHED.map(([label, note], index) => (
                <li key={label} style={{ "--i": index } as React.CSSProperties}>
                  <span className="lrh-calls__node" aria-hidden="true" />
                  <strong>{label}</strong>
                  <small>{note}</small>
                </li>
              ))}
            </ol>
          </div>

          <p className="lrh-calls__stage-close">
            The same missed call — now something a person can pick up.
          </p>
        </div>
      </div>
    </section>
  );
}
