/**
 * An annotated paragraph, not a typographic contrast or a checklist —
 * genuinely different from variant A, and checked against Right Fit's
 * good/not-fit split (that's two full lists; this is one manuscript with
 * footnotes). Each marked phrase in the paragraph gets a footnote naming the
 * specific question it doesn't actually answer.
 */
const NOTES = [
  {
    mark: "1",
    claim: "a modern layout",
    note: "Modern doesn't mean it answers the visitor's actual question.",
  },
  {
    mark: "2",
    claim: "a refreshed look",
    note: "A better look isn't proof anyone can check.",
  },
  {
    mark: "3",
    claim: "copy that finally sounds considered",
    note: "Sounding considered and being resolved are different tests.",
  },
] as const;

export function SwsBeyondRedesignB() {
  return (
    <section id="beyond-redesign" className="sws-beyond-redesign-b section section--quiet">
      <div className="container section-intro" data-sws-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-sws-sequence-item>
            Beyond redesign
          </p>
          <h2 data-sws-sequence-item>
            A website can look right <em>and still leave the decision unresolved.</em>
          </h2>
        </div>
      </div>

      <div className="container sws-beyond-redesign-b__manuscript" data-sws-fade>
        <p className="sws-beyond-redesign-b__paragraph">
          A typical redesign delivers{" "}
          <span className="sws-beyond-redesign-b__claim">
            a modern layout
            <sup>1</sup>
          </span>
          ,{" "}
          <span className="sws-beyond-redesign-b__claim">
            a refreshed look
            <sup>2</sup>
          </span>
          , and{" "}
          <span className="sws-beyond-redesign-b__claim">
            copy that finally sounds considered
            <sup>3</sup>
          </span>
          .
        </p>

        <ol className="sws-beyond-redesign-b__notes">
          {NOTES.map((entry) => (
            <li key={entry.mark}>
              <span className="sws-beyond-redesign-b__note-mark">{entry.mark}</span>
              <p>{entry.note}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
