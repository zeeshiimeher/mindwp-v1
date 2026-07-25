/**
 * Hero artwork — a looping three-scene sequence inside one website frame.
 *
 * The frame never moves, because the website is the thing that leads. What
 * changes is what is happening inside it, cycling through the three promises
 * in the headline:
 *
 *   Found      a nearby search resolves onto this business
 *   Understood the page assembles the answer and the proof
 *   Chosen     the visitor acts, and the enquiry lands with an owner
 *
 * Authored as SVG and driven by one shared CSS timeline, so there is no
 * animation dependency and no client boundary. Wide and narrow are separate
 * compositions rather than one reflowed layout.
 *
 * Reduced motion resolves to a complete still: the search scene hides and the
 * page, its action and the sent confirmation all remain, with every step in
 * the rail marked. The rail's labels are real text at every moment, so no
 * meaning depends on the loop running.
 */

const ART_LABEL =
  "A website working through one visitor's decision: found in a nearby search, understood on the page, then chosen by sending an enquiry that reaches a named owner";

const STEPS = ["Found", "Understood", "Chosen"] as const;

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
            <rect x="74" y="118" width="472" height="42" rx="21" className="hero-art__searchbar" />
            <g className="hero-art__searchglyph" transform="translate(104 139)">
              <circle cx="0" cy="0" r="7" />
              <path d="M5.2 5.2 L9.5 9.5" />
            </g>
            <rect x="126" y="133" width="196" height="10" rx="5" className="hero-art__query" />

            {/* the result that is this business */}
            <rect x="74" y="186" width="472" height="76" rx="12" className="hero-art__result-live" />
            <circle cx="112" cy="224" r="16" className="hero-art__pin-badge" />
            <path
              d="M112 216 c5 0 8 3.6 8 8 0 5.6 -6 10.4 -7.4 11.5 a1 1 0 0 1 -1.2 0 c-1.4 -1.1 -7.4 -5.9 -7.4 -11.5 0 -4.4 3 -8 8 -8 z"
              className="hero-art__pin"
            />
            <circle cx="112" cy="224" r="2.6" className="hero-art__pin-dot" />
            <rect x="142" y="208" width="150" height="10" rx="5" className="hero-art__ln-bright" />
            <rect x="142" y="228" width="228" height="8" rx="4" className="hero-art__ln" />
            <rect x="452" y="216" width="70" height="16" rx="8" className="hero-art__tag" />

            {/* other results, quieter */}
            <rect x="74" y="278" width="472" height="60" rx="12" className="hero-art__result" />
            <rect x="98" y="298" width="128" height="8" rx="4" className="hero-art__ln-dim" />
            <rect x="98" y="314" width="196" height="7" rx="3.5" className="hero-art__ln-dim" />
            <rect x="74" y="352" width="472" height="60" rx="12" className="hero-art__result" />
            <rect x="98" y="372" width="112" height="8" rx="4" className="hero-art__ln-dim" />
            <rect x="98" y="388" width="176" height="7" rx="3.5" className="hero-art__ln-dim" />
          </g>

          {/* ---- Scene B · Understood (also the still state) ---- */}
          <g className="hero-art__scene hero-art__scene--b">
            <rect x="74" y="122" width="268" height="16" rx="8" className="hero-art__ln-bright" />
            <rect x="74" y="150" width="196" height="16" rx="8" className="hero-art__ln-bright" />
            <rect x="74" y="190" width="330" height="9" rx="4.5" className="hero-art__ln" />
            <rect x="74" y="208" width="330" height="9" rx="4.5" className="hero-art__ln" />
            <rect x="74" y="226" width="238" height="9" rx="4.5" className="hero-art__ln" />

            {[0, 1, 2].map((i) => (
              <g
                key={i}
                className="hero-art__tile"
                style={{ "--i": i } as React.CSSProperties}
                transform={`translate(${i * 116} 0)`}
              >
                <rect x="74" y="262" width="100" height="72" rx="10" />
                <circle cx="94" cy="284" r="8" className="hero-art__tile-mark" />
                <path d="M90.4 284 l2.6 2.6 L98 281.6" className="hero-art__tick" />
                <rect x="90" y="302" width="52" height="7" rx="3.5" className="hero-art__ln" />
                <rect x="90" y="316" width="68" height="6" rx="3" className="hero-art__ln-dim" />
              </g>
            ))}
          </g>

          {/* ---- The action, always present ---- */}
          <rect x="74" y="360" width="196" height="44" rx="10" className="hero-art__cta" />
          <rect x="98" y="377" width="148" height="10" rx="5" className="hero-art__cta-label" />

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
              <circle cx="336" cy="382" r="12" className="hero-art__sent-mark" />
              <path d="M330.6 382 l3.6 3.6 L342 377.6" className="hero-art__tick" />
              <rect x="360" y="371" width="96" height="8" rx="4" className="hero-art__ln-bright" />
              <rect x="360" y="386" width="150" height="7" rx="3.5" className="hero-art__ln-dim" />
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
        viewBox="0 0 360 340"
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
            <rect x="16" y="60" width="328" height="196" />
          </clipPath>
        </defs>

        <rect
          x="16"
          y="16"
          width="328"
          height="240"
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
            <rect x="40" y="80" width="280" height="34" rx="17" className="hero-art__searchbar" />
            <g className="hero-art__searchglyph" transform="translate(64 97)">
              <circle cx="0" cy="0" r="6" />
              <path d="M4.4 4.4 L8 8" />
            </g>
            <rect x="82" y="92" width="120" height="9" rx="4.5" className="hero-art__query" />

            <rect x="40" y="130" width="280" height="62" rx="10" className="hero-art__result-live" />
            <circle cx="70" cy="161" r="14" className="hero-art__pin-badge" />
            <path
              d="M70 154 c4.4 0 7 3.2 7 7 0 4.9 -5.2 9.1 -6.4 10 a0.9 0.9 0 0 1 -1.1 0 c-1.3 -0.9 -6.5 -5.1 -6.5 -10 0 -3.8 2.6 -7 7 -7 z"
              className="hero-art__pin"
            />
            <circle cx="70" cy="161" r="2.3" className="hero-art__pin-dot" />
            <rect x="96" y="148" width="104" height="9" rx="4.5" className="hero-art__ln-bright" />
            <rect x="96" y="166" width="146" height="7" rx="3.5" className="hero-art__ln" />

            <rect x="40" y="204" width="280" height="46" rx="10" className="hero-art__result" />
            <rect x="62" y="220" width="96" height="7" rx="3.5" className="hero-art__ln-dim" />
            <rect x="62" y="234" width="140" height="6" rx="3" className="hero-art__ln-dim" />
          </g>

          <g className="hero-art__scene hero-art__scene--b">
            <rect x="40" y="84" width="188" height="13" rx="6.5" className="hero-art__ln-bright" />
            <rect x="40" y="106" width="132" height="13" rx="6.5" className="hero-art__ln-bright" />
            <rect x="40" y="136" width="236" height="8" rx="4" className="hero-art__ln" />
            <rect x="40" y="152" width="196" height="8" rx="4" className="hero-art__ln" />

            {[0, 1, 2].map((i) => (
              <g
                key={i}
                className="hero-art__tile"
                style={{ "--i": i } as React.CSSProperties}
                transform={`translate(${i * 96} 0)`}
              >
                <rect x="40" y="176" width="84" height="34" rx="8" />
                <circle cx="58" cy="193" r="7" className="hero-art__tile-mark" />
                <path d="M54.8 193 l2.3 2.3 L61.6 191" className="hero-art__tick" />
                <rect x="74" y="189" width="36" height="6" rx="3" className="hero-art__ln" />
              </g>
            ))}
          </g>

          <rect x="40" y="222" width="148" height="34" rx="8" className="hero-art__cta" />
          <rect x="58" y="235" width="112" height="8" rx="4" className="hero-art__cta-label" />

          <g className="hero-art__scene hero-art__scene--c">
            <g className="hero-art__cursor">
              <path
                d="M0 0 L0 15 L3.9 11.5 L6.5 17.3 L9.4 15.9 L6.7 10.2 L11.8 9.9 Z"
                className="hero-art__cursor-shape"
              />
            </g>
            <g className="hero-art__receipt">
              <rect x="204" y="216" width="128" height="44" rx="9" />
              <circle cx="228" cy="238" r="10" className="hero-art__sent-mark" />
              <path d="M223.6 238 l3 3 L234 234.4" className="hero-art__tick" />
              <rect x="248" y="229" width="60" height="7" rx="3.5" className="hero-art__ln-bright" />
              <rect x="248" y="242" width="74" height="6" rx="3" className="hero-art__ln-dim" />
            </g>
          </g>
        </g>

        <path d="M40 292 H264" className="hero-art__rail" />
        {STEPS.map((step, i) => {
          const x = 40 + i * 112;
          return (
            <g key={step} className="hero-art__step" style={{ "--i": i } as React.CSSProperties}>
              <circle cx={x} cy="292" r="6" className="hero-art__step-dot" />
              <text x={x} y="320" className="hero-art__step-label" textAnchor="start">
                {step}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
