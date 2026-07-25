/**
 * Section 8. Doubt in one margin, the evidence that answers it in the other.
 *
 * Annotation-led, but with a different geometry from Section 2 and Section 6: a
 * page column runs down the centre and the two margins work against each other,
 * with each pair meeting at the height the doubt actually arrives.
 */

interface Pair {
  n: string;
  doubt: string;
  evidence: string;
  note: string;
  artefact: "case" | "credential" | "work" | "review";
}

const PAIRS: readonly Pair[] = [
  {
    n: "01",
    doubt: "Will they understand a case like mine?",
    evidence: "A short case note that keeps the specifics",
    note: "Not a logo. A paragraph describing a situation close enough to theirs that they recognise it — what the problem was, what was done, what it took.",
    artefact: "case",
  },
  {
    n: "02",
    doubt: "Is this person actually qualified for this?",
    evidence: "The named credential, and who issues it",
    note: "Placed beside the claim it supports rather than collected on an about page. A registration number that can be checked is worth more than a wall of badges.",
    artefact: "credential",
  },
  {
    n: "03",
    doubt: "Is the work any good?",
    evidence: "The work itself, photographed properly",
    note: "Shown at a size where it can be inspected, in the condition it was actually delivered in. Photography is part of the proof, not decoration around it.",
    artefact: "work",
  },
  {
    n: "04",
    doubt: "What are people like once it is finished?",
    evidence: "A review that mentions the specific thing",
    note: "A named person describing one concrete detail beats five anonymous lines of praise. Specificity is the only thing that makes a testimonial credible.",
    artefact: "review",
  },
];

function Artefact({ kind }: { kind: Pair["artefact"] }) {
  return (
    <svg className="pic__art" viewBox="0 0 132 84" fill="none" aria-hidden="true" focusable="false">
      <rect x="0.5" y="0.5" width="131" height="83" rx="4" className="pic__art-frame" />

      {kind === "case" ? (
        <>
          <rect x="12" y="14" width="40" height="6" rx="3" className="pic__art-tag" />
          <rect x="12" y="30" width="108" height="5" rx="2.5" className="pic__art-ink" />
          <rect x="12" y="41" width="94" height="4.5" rx="2.25" className="pic__art-dim" />
          <rect x="12" y="51" width="104" height="4.5" rx="2.25" className="pic__art-dim" />
          <rect x="12" y="61" width="72" height="4.5" rx="2.25" className="pic__art-dim" />
        </>
      ) : null}

      {kind === "credential" ? (
        <>
          <circle cx="30" cy="40" r="17" className="pic__art-seal" />
          <path d="M23 40 l5 5 l11 -12" className="pic__art-tick" />
          <rect x="58" y="26" width="60" height="6" rx="3" className="pic__art-ink" />
          <rect x="58" y="40" width="48" height="4.5" rx="2.25" className="pic__art-dim" />
          <rect x="58" y="51" width="40" height="4.5" rx="2.25" className="pic__art-dim" />
        </>
      ) : null}

      {kind === "work" ? (
        <>
          <rect x="10" y="12" width="54" height="46" rx="3" className="pic__art-photo" />
          <rect x="68" y="12" width="54" height="46" rx="3" className="pic__art-photo pic__art-photo--after" />
          <rect x="10" y="66" width="24" height="4.5" rx="2.25" className="pic__art-dim" />
          <rect x="68" y="66" width="24" height="4.5" rx="2.25" className="pic__art-dim" />
        </>
      ) : null}

      {kind === "review" ? (
        <>
          {[0, 1, 2, 3, 4].map((i) => (
            <path
              key={i}
              d="M0 -4.6 L1.4 -1.5 L4.8 -1.1 L2.2 1.2 L3 4.6 L0 2.9 L-3 4.6 L-2.2 1.2 L-4.8 -1.1 L-1.4 -1.5 Z"
              transform={`translate(${18 + i * 13} 22)`}
              className="pic__art-star"
            />
          ))}
          <rect x="12" y="34" width="106" height="4.5" rx="2.25" className="pic__art-dim" />
          <rect x="12" y="44" width="88" height="4.5" rx="2.25" className="pic__art-dim" />
          <circle cx="18" cy="64" r="6" className="pic__art-avatar" />
          <rect x="30" y="61" width="44" height="5" rx="2.5" className="pic__art-ink" />
        </>
      ) : null}
    </svg>
  );
}

export function SwsProofInContext() {
  return (
    <section id="proof-in-context" className="sws-proof section on-paper">
      <div className="container section-intro section-intro--split" data-sws-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-sws-item>
            Proof in context
          </p>
          <h2 data-sws-item>
            Put the evidence <em>beside the doubt it helps resolve.</em>
          </h2>
        </div>
        <div className="section-copy-group">
          <p data-sws-item>
            Proof collected into one block above the footer is proof nobody reads. Doubt arrives at a
            particular moment — while reading a price, a process, a claim about experience — and the
            evidence has to already be there when it does.
          </p>
        </div>
      </div>

      <div className="container pic">
        <div className="pic__spine" aria-hidden="true">
          <span className="pic__spine-label">Reading down one page</span>
        </div>
        <ol className="pic__pairs" data-sws-stagger>
          {PAIRS.map((pair) => (
            <li key={pair.n} data-sws-stagger-item>
              <div className="pic__doubt">
                <p className="sws-label sws-label--quiet">Doubt · {pair.n}</p>
                <p className="pic__doubt-text">{pair.doubt}</p>
              </div>
              <span className="pic__node" aria-hidden="true" />
              <div className="pic__evidence">
                <p className="sws-label">Evidence</p>
                <strong>{pair.evidence}</strong>
                <p className="pic__note">{pair.note}</p>
                <Artefact kind={pair.artefact} />
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="container">
        <p className="pic__close editorial-note" data-sws-fade>
          A testimonials page is a filing cabinet. Proof belongs where the doubt is.
        </p>
      </div>
    </section>
  );
}
