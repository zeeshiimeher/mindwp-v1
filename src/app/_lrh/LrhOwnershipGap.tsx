/**
 * The gap between a record and a responsibility.
 *
 * Typographic rather than diagrammatic: the word "Received" is set solid, the
 * word "Handled" is set at the same size in outline only, and the four things
 * that have to happen in between are read down the space between them. The
 * hollow word *is* the gap — nothing else needs to draw it.
 *
 * Nothing depends on the outline rendering: the heading and the paragraph
 * carry the argument, and the four steps are ordinary list text.
 */

const STEPS = [
  "Someone noticed it arrive",
  "The sender knows it landed",
  "Its purpose is clear",
  "One person owns the reply",
] as const;

export function LrhOwnershipGap() {
  return (
    <section id="missed-ownership" className="lrh-gap section">
      <div className="container container--split lrh-gap__layout">
        <div className="lrh-gap__copy section-intro" data-lrh-sequence>
          <div className="section-title-group">
            <p className="eyebrow" data-lrh-sequence-item>
              Missed ownership
            </p>
            <h2 data-lrh-sequence-item>Received is not the same as handled.</h2>
          </div>
          <p data-lrh-sequence-item>
            Most businesses do capture their enquiries. The form saves, the call log records the
            number, the message sits in an inbox several people can open. What is missing is not the
            record — it is the moment someone knows this one needs them, and knows what it needs.
          </p>
          <p className="editorial-note" data-lrh-sequence-item>
            An enquiry nobody has claimed is still an open question — to you, and to the person who
            sent it.
          </p>
        </div>

        <div className="lrh-gap__figure" data-lrh-fade>
          <p className="lrh-gap__word lrh-gap__word--solid">Received</p>
          <ol className="lrh-gap__steps">
            {STEPS.map((step, index) => (
              <li key={step}>
                <small>{String(index + 1).padStart(2, "0")}</small>
                {step}
              </li>
            ))}
          </ol>
          <p className="lrh-gap__word lrh-gap__word--hollow">Handled</p>
        </div>
      </div>
    </section>
  );
}
