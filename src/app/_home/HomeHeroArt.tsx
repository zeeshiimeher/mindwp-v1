/**
 * Hero artwork — a looping three-scene sequence inside one website frame.
 *
 * The frame never moves, because the website is the thing that leads. What
 * changes is what is happening inside it, cycling through the three promises
 * in the headline:
 *
 *   Found      a nearby search resolves onto this business
 *   Understood the page answers what the visitor came to settle
 *   Chosen     the visitor acts, and the enquiry lands with an owner
 *
 * Every scene is set in real copy rather than grey placeholder bars. Placeholder
 * bars made the frame a category — "a website" — which proves nothing; the
 * sentences below make it an instance a visitor can read. Wording is kept
 * sector-neutral (`consultation`, `who you'd see`) because the hero is the most
 * shared surface on the site and has to sit as credibly in front of a law
 * boutique as a clinic. Copy is declared once and rendered into both
 * compositions.
 *
 * Two boundaries this artwork must not cross: it states that an enquiry reaches
 * a named owner but never when a reply arrives (no invented speed promise), and
 * it names no person, client or measured result.
 *
 * Authored as SVG and driven by one shared CSS timeline, so there is no
 * animation dependency and no client boundary. Wide and narrow are separate
 * compositions rather than one reflowed layout. The copy is short, fixed-length
 * labelling that never needs to wrap, which is why it can stay in SVG text.
 *
 * Reduced motion resolves to a complete still: the search scene hides and the
 * page, its action and the sent confirmation all remain, with every step in
 * the rail marked. The rail's labels are real text at every moment, so no
 * meaning depends on the loop running.
 */

const ART_LABEL =
  "A website working through one visitor's decision: found in a nearby search, understood on a page that answers what is involved, what it costs and who they would see, then chosen by sending an enquiry that reaches a named owner";

const STEPS = ["Found", "Understood", "Chosen"] as const;

/** Written once, set twice. */
const COPY = {
  query: "consultation near me",
  resultTitle: "Your practice",
  resultMeta: "What's involved, and how to start.",
  resultTag: "YOUR LISTING",
  otherResults: ["Another provider", "A third result"],
  pageHeading: ["What's involved,", "start to finish."],
  pageBody: [
    "The full process, what it costs, and who you would be",
    "working with — set out before anyone gets in touch.",
  ],
  answers: ["What's involved", "What it costs", "Who you'd see"],
  cta: "Request a consultation",
  sentTitle: "Enquiry sent",
  sentMeta: "It has a named owner",
  sentMetaShort: "Named owner",
} as const;

export function HomeHeroArt() {
  return (
    <div className="hero-art" role="img" aria-label={ART_LABEL} data-home-hero-artifact>
      <span className="hero-art__glow" aria-hidden="true" />

      {/* ---------- Wide ---------- */}
      <svg
        className="hero-art__svg hero-art__svg--wide"
        viewBox="0 0 620 560"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id="haFrame" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--surface-navy-raised)" />
            <stop offset="100%" stopColor="var(--surface-navy-panel)" />
          </linearGradient>
          <clipPath id="haClip">
            <rect x="40" y="86" width="540" height="352" />
          </clipPath>
        </defs>

        {/* Frame */}
        <rect
          x="40"
          y="30"
          width="540"
          height="408"
          rx="18"
          fill="url(#haFrame)"
          className="hero-art__frame"
        />
        <path d="M40 86 H580" className="hero-art__hairline" />
        <circle cx="66" cy="58" r="4" className="hero-art__dot" />
        <circle cx="82" cy="58" r="4" className="hero-art__dot" />
        <circle cx="98" cy="58" r="4" className="hero-art__dot" />
        <rect x="122" y="49" width="196" height="18" rx="9" className="hero-art__chrome" />

        <g clipPath="url(#haClip)">
          {/* ---- Scene A · Found ---- */}
          <g className="hero-art__scene hero-art__scene--a">
            <rect x="74" y="112" width="472" height="40" rx="20" className="hero-art__searchbar" />
            <g className="hero-art__searchglyph" transform="translate(102 132)">
              <circle cx="0" cy="0" r="7" />
              <path d="M5.2 5.2 L9.5 9.5" />
            </g>
            <text x="124" y="137" className="hero-art__query">
              {COPY.query}
            </text>

            {/* the result that is this business */}
            <rect x="74" y="172" width="472" height="76" rx="12" className="hero-art__result-live" />
            <circle cx="112" cy="210" r="16" className="hero-art__pin-badge" />
            <path
              d="M112 202 c5 0 8 3.6 8 8 0 5.6 -6 10.4 -7.4 11.5 a1 1 0 0 1 -1.2 0 c-1.4 -1.1 -7.4 -5.9 -7.4 -11.5 0 -4.4 3 -8 8 -8 z"
              className="hero-art__pin"
            />
            <circle cx="112" cy="210" r="2.6" className="hero-art__pin-dot" />
            <text x="142" y="205" className="hero-art__t-title">
              {COPY.resultTitle}
            </text>
            <text x="142" y="228" className="hero-art__t-meta">
              {COPY.resultMeta}
            </text>
            <rect x="428" y="198" width="100" height="24" rx="12" className="hero-art__tag" />
            <text x="478" y="214" textAnchor="middle" className="hero-art__t-tag">
              {COPY.resultTag}
            </text>

            {/* the alternatives, quieter — named, not judged */}
            {COPY.otherResults.map((label, i) => (
              <g key={label}>
                <rect
                  x="74"
                  y={264 + i * 68}
                  width="472"
                  height="56"
                  rx="12"
                  className="hero-art__result"
                />
                <text x="98" y={297 + i * 68} className="hero-art__t-quiet">
                  {label}
                </text>
              </g>
            ))}
          </g>

          {/* ---- Scene B · Understood (also the still state) ---- */}
          <g className="hero-art__scene hero-art__scene--b">
            {COPY.pageHeading.map((line, i) => (
              <text key={line} x="74" y={136 + i * 30} className="hero-art__t-display">
                {line}
              </text>
            ))}
            {COPY.pageBody.map((line, i) => (
              <text key={line} x="74" y={198 + i * 20} className="hero-art__t-body">
                {line}
              </text>
            ))}

            {COPY.answers.map((answer, i) => {
              const x = 74 + i * 158;
              return (
                <g key={answer} className="hero-art__tile" style={{ "--i": i } as React.CSSProperties}>
                  <rect x={x} y="248" width="148" height="76" rx="10" />
                  <circle cx={x + 24} cy="274" r="9" className="hero-art__tile-mark" />
                  <path
                    d={`M${x + 20} 274 l3 3 L${x + 29} 270.4`}
                    className="hero-art__tick"
                  />
                  <text x={x + 16} y="308" className="hero-art__t-tile">
                    {answer}
                  </text>
                </g>
              );
            })}
          </g>

          {/* ---- The action ---- */}
          <rect x="74" y="360" width="204" height="44" rx="10" className="hero-art__cta" />
          <text x="176" y="388" textAnchor="middle" className="hero-art__cta-label">
            {COPY.cta}
          </text>

          {/* ---- Scene C · Chosen ---- */}
          <g className="hero-art__scene hero-art__scene--c">
            <g className="hero-art__cursor">
              <path
                d="M0 0 L0 17 L4.4 13 L7.4 19.6 L10.6 18 L7.6 11.6 L13.4 11.2 Z"
                className="hero-art__cursor-shape"
              />
            </g>
            <g className="hero-art__receipt">
              <rect x="306" y="352" width="240" height="60" rx="10" />
              <circle cx="336" cy="382" r="13" className="hero-art__sent-mark" />
              <path d="M330.6 382 l3.6 3.6 L342 377.6" className="hero-art__tick" />
              <text x="362" y="378" className="hero-art__t-sent">
                {COPY.sentTitle}
              </text>
              <text x="362" y="397" className="hero-art__t-meta">
                {COPY.sentMeta}
              </text>
            </g>
          </g>
        </g>

        {/* ---- Step rail ---- */}
        <path d="M74 490 H 546" className="hero-art__rail" />
        {STEPS.map((step, i) => {
          const x = 74 + i * 236;
          return (
            <g key={step} className="hero-art__step" style={{ "--i": i } as React.CSSProperties}>
              <circle cx={x} cy="490" r="7" className="hero-art__step-dot" />
              <text x={x} y="522" className="hero-art__step-label" textAnchor="start">
                {step}
              </text>
            </g>
          );
        })}
      </svg>

      {/* ---------- Narrow ---------- */}
      <svg
        className="hero-art__svg hero-art__svg--narrow"
        viewBox="0 0 360 380"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id="haFrameN" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--surface-navy-raised)" />
            <stop offset="100%" stopColor="var(--surface-navy-panel)" />
          </linearGradient>
          <clipPath id="haClipN">
            <rect x="16" y="60" width="328" height="236" />
          </clipPath>
        </defs>

        <rect
          x="16"
          y="16"
          width="328"
          height="280"
          rx="14"
          fill="url(#haFrameN)"
          className="hero-art__frame"
        />
        <path d="M16 60 H344" className="hero-art__hairline" />
        <circle cx="36" cy="38" r="3.4" className="hero-art__dot" />
        <circle cx="49" cy="38" r="3.4" className="hero-art__dot" />
        <circle cx="62" cy="38" r="3.4" className="hero-art__dot" />
        <rect x="82" y="30" width="132" height="16" rx="8" className="hero-art__chrome" />

        <g clipPath="url(#haClipN)">
          <g className="hero-art__scene hero-art__scene--a">
            <rect x="40" y="78" width="280" height="32" rx="16" className="hero-art__searchbar" />
            <g className="hero-art__searchglyph" transform="translate(62 94)">
              <circle cx="0" cy="0" r="6" />
              <path d="M4.4 4.4 L8 8" />
            </g>
            <text x="80" y="99" className="hero-art__query">
              {COPY.query}
            </text>

            <rect x="40" y="124" width="280" height="60" rx="10" className="hero-art__result-live" />
            <circle cx="68" cy="154" r="13" className="hero-art__pin-badge" />
            <path
              d="M68 147 c4.4 0 7 3.2 7 7 0 4.9 -5.2 9.1 -6.4 10 a0.9 0.9 0 0 1 -1.1 0 c-1.3 -0.9 -6.5 -5.1 -6.5 -10 0 -3.8 2.6 -7 7 -7 z"
              className="hero-art__pin"
            />
            <circle cx="68" cy="154" r="2.3" className="hero-art__pin-dot" />
            <text x="92" y="150" className="hero-art__t-title">
              {COPY.resultTitle}
            </text>
            <text x="92" y="169" className="hero-art__t-meta">
              {COPY.resultMeta}
            </text>

            <rect x="40" y="198" width="280" height="44" rx="10" className="hero-art__result" />
            <text x="62" y="225" className="hero-art__t-quiet">
              {COPY.otherResults[0]}
            </text>
          </g>

          <g className="hero-art__scene hero-art__scene--b">
            {COPY.pageHeading.map((line, i) => (
              <text key={line} x="40" y={96 + i * 24} className="hero-art__t-display">
                {line}
              </text>
            ))}

            {/* Rows rather than tiles: three boxes across 280 units would set
                every label at a width its own words cannot fit. */}
            {COPY.answers.map((answer, i) => {
              const y = 154 + i * 26;
              return (
                <g key={answer} className="hero-art__tile" style={{ "--i": i } as React.CSSProperties}>
                  <circle cx="50" cy={y - 5} r="8" className="hero-art__tile-mark" />
                  <path d={`M46 ${y - 5} l3 3 L55 ${y - 9.5}`} className="hero-art__tick" />
                  <text x="68" y={y} className="hero-art__t-tile">
                    {answer}
                  </text>
                </g>
              );
            })}
          </g>

          <rect x="40" y="230" width="150" height="34" rx="8" className="hero-art__cta" />
          <text x="115" y="252" textAnchor="middle" className="hero-art__cta-label">
            {COPY.cta}
          </text>

          <g className="hero-art__scene hero-art__scene--c">
            <g className="hero-art__cursor">
              <path
                d="M0 0 L0 15 L3.9 11.5 L6.5 17.3 L9.4 15.9 L6.7 10.2 L11.8 9.9 Z"
                className="hero-art__cursor-shape"
              />
            </g>
            <g className="hero-art__receipt">
              <rect x="200" y="230" width="120" height="34" rx="8" />
              <circle cx="218" cy="247" r="9" className="hero-art__sent-mark" />
              <path d="M214 247 l3 3 L223 243" className="hero-art__tick" />
              <text x="234" y="245" className="hero-art__t-sent">
                {COPY.sentTitle}
              </text>
              <text x="234" y="258" className="hero-art__t-meta">
                {COPY.sentMetaShort}
              </text>
            </g>
          </g>
        </g>

        <path d="M40 330 H264" className="hero-art__rail" />
        {STEPS.map((step, i) => {
          const x = 40 + i * 112;
          return (
            <g key={step} className="hero-art__step" style={{ "--i": i } as React.CSSProperties}>
              <circle cx={x} cy="330" r="6" className="hero-art__step-dot" />
              <text x={x} y="358" className="hero-art__step-label" textAnchor="start">
                {step}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
