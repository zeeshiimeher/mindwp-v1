/**
 * Section 4. The decision index.
 *
 * Editorial rather than annotated: a ruled index of the questions a visitor
 * works through, each paired with the page that owns the answer. The
 * information genuinely is a mapping, so it is set as one — large questions in
 * the left column, a small true-scale page beside each.
 */

interface Row {
  question: string;
  page: string;
  owns: string;
  /** Which blocks of the small page drawing carry weight for this row. */
  shape: "hero" | "list" | "steps" | "gallery" | "people" | "action";
}

const ROWS: readonly Row[] = [
  {
    question: "Do you handle the thing I actually need?",
    page: "Service page",
    owns: "One page per service, named the way people say it out loud — not the way it appears on an invoice.",
    shape: "hero",
  },
  {
    question: "Is this right for a situation like mine?",
    page: "Who it is for",
    owns: "The cases you take, the cases you refer on, and the ones you decline. Ruling people out is what makes the rest believable.",
    shape: "list",
  },
  {
    question: "What would this involve, and over how long?",
    page: "How it works",
    owns: "The steps in order, what happens at each, and what is needed from them. Vague process copy reads as inexperience.",
    shape: "steps",
  },
  {
    question: "Can I see that it has worked before?",
    page: "Work and evidence",
    owns: "Examples attached to the situation they resolve, so a reader can find one that resembles their own.",
    shape: "gallery",
  },
  {
    question: "Who would I actually be dealing with?",
    page: "About and people",
    owns: "The people who do the work, with the qualifications that matter for this decision and nothing padded around them.",
    shape: "people",
  },
  {
    question: "What does it cost, and what do I do next?",
    page: "Cost and contact",
    owns: "Whatever can honestly be said about cost, and a next step matched to how ready they are to take it.",
    shape: "action",
  },
];

function MiniPage({ shape }: { shape: Row["shape"] }) {
  return (
    <svg className="didx__mini" viewBox="0 0 104 78" fill="none" aria-hidden="true" focusable="false">
      <rect x="0.5" y="0.5" width="103" height="77" rx="3" className="didx__mini-frame" />
      <path d="M0 14 H104" className="didx__mini-hair" />
      <circle cx="10" cy="7.5" r="2.6" className="didx__mini-mark" />
      <rect x="78" y="5.5" width="18" height="5" rx="2.5" className="didx__mini-dim" />

      {shape === "hero" ? (
        <>
          <rect x="10" y="22" width="58" height="7" rx="3" className="didx__mini-ink" />
          <rect x="10" y="34" width="84" height="24" rx="2" className="didx__mini-block" />
          <rect x="10" y="63" width="34" height="8" rx="2.5" className="didx__mini-mark" />
        </>
      ) : null}

      {shape === "list" ? (
        <>
          <rect x="10" y="22" width="44" height="6" rx="3" className="didx__mini-ink" />
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <circle cx="13" cy={38 + i * 10} r="2.4" className="didx__mini-mark" />
              <rect x="20" y={36 + i * 10} width={62 - i * 8} height="4" rx="2" className="didx__mini-dim" />
            </g>
          ))}
        </>
      ) : null}

      {shape === "steps" ? (
        <>
          <path d="M14 26 V70" className="didx__mini-hair" />
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <circle cx="14" cy={30 + i * 12} r="3.2" className="didx__mini-mark" />
              <rect x="24" y={28 + i * 12} width={58 - i * 6} height="4.5" rx="2.25" className="didx__mini-dim" />
            </g>
          ))}
        </>
      ) : null}

      {shape === "gallery" ? (
        <>
          <rect x="10" y="22" width="40" height="28" rx="2" className="didx__mini-block" />
          <rect x="54" y="22" width="40" height="28" rx="2" className="didx__mini-block" />
          <rect x="10" y="56" width="52" height="4.5" rx="2.25" className="didx__mini-dim" />
          <rect x="10" y="65" width="70" height="4.5" rx="2.25" className="didx__mini-dim" />
        </>
      ) : null}

      {shape === "people" ? (
        <>
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <circle cx={20 + i * 30} cy="34" r="9" className="didx__mini-block" />
              <rect x={10 + i * 30} y="49" width="20" height="4" rx="2" className="didx__mini-ink" />
              <rect x={10 + i * 30} y="57" width="16" height="3.5" rx="1.75" className="didx__mini-dim" />
            </g>
          ))}
        </>
      ) : null}

      {shape === "action" ? (
        <>
          <rect x="10" y="22" width="52" height="6" rx="3" className="didx__mini-ink" />
          <rect x="10" y="34" width="84" height="9" rx="2" className="didx__mini-field" />
          <rect x="10" y="47" width="84" height="9" rx="2" className="didx__mini-field" />
          <rect x="10" y="61" width="38" height="10" rx="3" className="didx__mini-mark" />
        </>
      ) : null}
    </svg>
  );
}

export function SwsDecisionStructure() {
  return (
    <section id="decision-structure" className="sws-decision section on-white">
      <div className="container section-intro section-intro--split" data-sws-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-sws-item>
            Decision structure
          </p>
          <h2 data-sws-item>
            Build the site around <em>what people need to understand before they choose.</em>
          </h2>
        </div>
        <div className="section-copy-group">
          <p data-sws-item>
            A visitor considering a substantial decision is not browsing. They are working through a
            short sequence of questions, mostly in the same order, and they stop at the first one the
            site fails to answer.
          </p>
          <p data-sws-item>
            Which makes the sitemap a consequence rather than a starting assumption.
          </p>
        </div>
      </div>

      <ol className="container didx" data-sws-stagger>
        {ROWS.map((row, index) => (
          <li key={row.question} data-sws-stagger-item>
            <span className="didx__num">{String(index + 1).padStart(2, "0")}</span>
            <div className="didx__q">
              <h3>{row.question}</h3>
            </div>
            <div className="didx__a">
              <p className="didx__page">{row.page}</p>
              <p className="didx__owns">{row.owns}</p>
            </div>
            <div className="didx__fig" aria-hidden="true">
              <MiniPage shape={row.shape} />
            </div>
          </li>
        ))}
      </ol>

      <div className="container">
        <p className="didx__close editorial-note" data-sws-fade>
          The sitemap is the answer to this list. It is not the input to it.
        </p>
      </div>
    </section>
  );
}
