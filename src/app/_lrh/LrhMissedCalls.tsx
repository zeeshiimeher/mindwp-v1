/**
 * One event, two outcomes, drawn as two tracks of deliberately unequal length.
 *
 * The unacknowledged track is grey, dashed, and stops a third of the way down
 * at an open terminus. The acknowledged track is emerald, continuous, runs the
 * full height through three stops and closes with a resolved cap. The
 * difference in *length* is the argument — nothing else has to say it.
 *
 * Only the acknowledged track animates, once, on entry: the dead end has
 * nothing to draw. Its rail is a `--lrh-draw`-scaled overlay, so with no JS or
 * under reduced motion the finished track is what renders.
 */

const DEAD_END = [
  "The call rings out.",
  "Nothing goes back.",
  "The call ends there, or the caller may try elsewhere.",
] as const;

const ANSWERED = [
  "The call rings out.",
  "An agreed acknowledgement goes back — who you are, and what to do next.",
  "They can reply, use the route you chose, or wait to be called.",
  "The missed call sits with a named person until it is returned.",
] as const;

export function LrhMissedCalls() {
  return (
    <section id="missed-calls" className="lrh-calls section">
      <div className="container container--split lrh-calls__layout">
        <div className="lrh-calls__copy section-intro" data-lrh-sequence>
          <div className="section-title-group">
            <p className="eyebrow" data-lrh-sequence-item>
              Missed calls
            </p>
            <h2 data-lrh-sequence-item>
              A call missed during busy work or after hours{" "}
              <em>should not become a dead end.</em>
            </h2>
          </div>
          <p data-lrh-sequence-item>
            A call that rings out leaves no message, no name and no reason. Nobody can tell whether
            it was a new enquiry, a supplier, or someone who has already tried once today. The
            caller only knows that nobody answered.
          </p>
          <p className="editorial-note" data-lrh-sequence-item>
            You cannot answer every call. You can make sure no caller is left guessing.
          </p>
        </div>

        <div className="lrh-calls__tracks">
          <div className="lrh-calls__track lrh-calls__track--dead">
            <p className="lrh-artifact-label">Without a first move</p>
            <ol>
              <span className="lrh-calls__rail" aria-hidden="true" />
              {DEAD_END.map((step) => (
                <li key={step}>
                  <span className="lrh-calls__node" aria-hidden="true" />
                  {step}
                </li>
              ))}
            </ol>
            <p className="lrh-calls__terminus">
              <span aria-hidden="true" />
              Nothing continues from here.
            </p>
          </div>

          <div className="lrh-calls__track lrh-calls__track--live" data-lrh-draw>
            <p className="lrh-artifact-label">With an agreed first move</p>
            <ol>
              <span className="lrh-calls__rail" aria-hidden="true" />
              <span className="lrh-calls__rail-draw" aria-hidden="true" />
              {ANSWERED.map((step) => (
                <li key={step}>
                  <span className="lrh-calls__node" aria-hidden="true" />
                  {step}
                </li>
              ))}
            </ol>
            <p className="lrh-calls__terminus lrh-calls__terminus--resolved">
              <span aria-hidden="true" />
              The connection is still open.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
