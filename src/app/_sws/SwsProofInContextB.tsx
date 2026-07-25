/**
 * A single-column resolved ledger — running doubt-then-evidence entries with
 * a rotated ink-stamp mark — rather than variant A's two-column paired
 * rows. Checked against Right Fit's two parallel lists (good fit / not fit):
 * this is one column of alternating heterogeneous pairs with a stamp
 * treatment, not two homogeneous lists with plain circular badges.
 */
const ENTRIES = [
  {
    doubt: "Is this actually the right specialist for my situation?",
    evidence: "The specific case type stated on the page it's raised, not a general bio.",
  },
  {
    doubt: "Are these reviews real, or just the good ones kept?",
    evidence: "Reviews linked to their original platform, shown alongside the ones that aren't perfect.",
  },
  {
    doubt: "Has this business actually done this kind of work before?",
    evidence: "Finished, inspectable work placed beside the claim it's supporting — not a client-logo wall.",
  },
  {
    doubt: "Will anyone actually be accountable once I get in touch?",
    evidence: "A named owner for the enquiry, stated before the enquiry is ever sent.",
  },
] as const;

export function SwsProofInContextB() {
  return (
    <section id="proof-in-context" className="sws-proof-in-context-b section">
      <div className="container section-intro" data-sws-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-sws-sequence-item>
            Proof in context
          </p>
          <h2 data-sws-sequence-item>
            Put the evidence <em>beside the doubt it helps resolve.</em>
          </h2>
        </div>
        <p data-sws-sequence-item>
          Proof placed on its own page convinces almost nobody. Proof placed next to the specific
          doubt it answers is what actually moves a careful visitor forward.
        </p>
      </div>

      <ol className="container sws-proof-in-context-b__ledger" data-sws-stagger>
        {ENTRIES.map((entry) => (
          <li key={entry.doubt} className="sws-proof-in-context-b__entry" data-sws-stagger-item>
            <p className="sws-proof-in-context-b__doubt">{entry.doubt}</p>
            <div className="sws-proof-in-context-b__evidence-row">
              <span className="sws-proof-in-context-b__stamp" aria-hidden="true">
                Resolved
              </span>
              <p className="sws-proof-in-context-b__evidence">{entry.evidence}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
