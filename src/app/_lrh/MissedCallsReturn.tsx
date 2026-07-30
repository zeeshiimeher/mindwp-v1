/**
 * Missed calls — the return path.
 *
 * Payload: spatial sequence.
 *
 * Two tracks of the same call. The first runs left to right and stops dead at a
 * cap — no dot, no destination, nothing after it. The second follows the same
 * line to the same point, then turns back on itself: the agreed message going
 * out on the number they rang, which is the only thing that can travel in that
 * direction. Having returned, the track continues to a named owner.
 *
 * The return is drawn rather than described, because "the reply goes back out
 * on the same number" is a direction, and a direction is the one thing a
 * paragraph cannot show.
 *
 * Geometry is a plain viewBox with uniform scaling, so the curve keeps its
 * shape at every width. Under reduced motion or without JS the tracks render
 * complete.
 */

export function MissedCallsReturn() {
  return (
    <section id="missed-calls-return" className="lrh-return section section--focal">
      <div className="container lrh-return__band">
        <div className="lrh-return__copy" data-lrh-sequence>
          <p className="eyebrow" data-lrh-sequence-item>
            Missed calls
          </p>
          <h2 data-lrh-sequence-item>
            A missed call is the only enquiry <em>that leaves nothing behind.</em>
          </h2>
          <p data-lrh-sequence-item>
            No message, no name, no reason — and the caller only knows that nobody answered. The one
            thing that can still travel back is a message to the number they rang.
          </p>
          <p className="lrh-return__feature" data-lrh-sequence-item>
            <span className="lrh-artifact-label">The capability</span>
            <strong>Missed-call text-back.</strong> The call is detected, an agreed message goes out
            on the number they rang, and the missed call is placed with the person who returns
            calls.
          </p>
        </div>

        <div className="lrh-return__tracks">
          <figure className="lrh-return__track lrh-return__track--dead">
            <figcaption>
              <span className="lrh-artifact-label">Without it</span>
              <strong>The call ends where it stopped.</strong>
            </figcaption>
            <svg viewBox="0 0 640 90" role="img" aria-label="A call arrives and the track stops.">
              <line className="lrh-return__rail" x1="8" y1="45" x2="360" y2="45" />
              <line className="lrh-return__cap" x1="360" y1="24" x2="360" y2="66" />
              <text className="lrh-return__tag" x="8" y="26">
                Call in
              </text>
              <text className="lrh-return__tag lrh-return__tag--muted" x="376" y="50">
                Nothing recorded. Nobody assigned.
              </text>
            </svg>
          </figure>

          <figure className="lrh-return__track lrh-return__track--live">
            <figcaption>
              <span className="lrh-artifact-label">With it</span>
              <strong>The same call turns back, then carries on.</strong>
            </figcaption>
            <svg
              viewBox="0 0 640 140"
              role="img"
              aria-label="A call arrives, a message returns on the same number, and the call continues to a named owner."
            >
              <line
                className="lrh-return__rail lrh-return__rail--live"
                x1="8"
                y1="45"
                x2="360"
                y2="45"
              />
              <path className="lrh-return__loop" d="M360 45 C 408 45 408 105 344 105 L 120 105" />
              <path className="lrh-return__rail lrh-return__rail--live" d="M360 45 L 560 45" />
              <circle className="lrh-return__node" cx="560" cy="45" r="7" />
              <text className="lrh-return__tag" x="8" y="26">
                Call in
              </text>
              <text className="lrh-return__tag lrh-return__tag--emerald" x="120" y="128">
                Agreed message, back on the number they rang
              </text>
              <text className="lrh-return__tag lrh-return__tag--end" x="560" y="26">
                Whoever returns calls
              </text>
            </svg>
          </figure>
        </div>
      </div>
    </section>
  );
}
