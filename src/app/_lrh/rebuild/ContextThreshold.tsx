/**
 * Necessary context — the threshold.
 *
 * Payload: type as object, over a full-bleed edge.
 *
 * The quiet register, chosen rather than defaulted to. This section sits
 * between two focal moments and should cost almost nothing to read, so it gets
 * no artefact — but the one thing it does have is real. The four things asked
 * are set at display scale, and the limit beneath them is a single emerald rule
 * that runs the full width of the viewport rather than stopping at the
 * container.
 *
 * A hairline inside a container reads as a divider. The same line crossing the
 * whole page reads as an edge, which is what a boundary should look like. That
 * is the entire design, and it is enough.
 */

const ASKED: readonly string[] = [
  "What they are asking about",
  "How to reach them, and when",
  "New, or already under way",
  "Anything they want to add",
];

const REFUSED: readonly string[] = [
  "Clinical or case detail",
  "Sensitive personal information",
  "Anything the first response will not use",
];

export function ContextThreshold() {
  return (
    <section id="context-threshold" className="lrh-thresh section section--quiet">
      <div className="container lrh-thresh__head" data-lrh-sequence>
        <p className="eyebrow" data-lrh-sequence-item>
          Necessary context
        </p>
        <h2 data-lrh-sequence-item>
          Ask for what the next person needs. <em>Nothing else.</em>
        </h2>
      </div>

      <ol className="container lrh-thresh__asked" data-lrh-stagger>
        {ASKED.map((item) => (
          <li key={item} data-lrh-stagger-item>
            {item}
          </li>
        ))}
      </ol>

      <div className="lrh-thresh__edge" data-lrh-scrub>
        <span className="lrh-thresh__rule" aria-hidden="true" />
      </div>

      <div className="container lrh-thresh__below">
        <p className="lrh-artifact-label">Below the line, and staying there</p>
        <ul>
          {REFUSED.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="lrh-thresh__note">
          Every extra field adds effort, so each one has to save the person replying from having to
          ask. What belongs in a consultation belongs in the consultation.
        </p>
      </div>
    </section>
  );
}
