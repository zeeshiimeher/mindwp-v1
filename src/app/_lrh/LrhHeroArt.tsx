/**
 * Hero artwork — one frame, three scenes, on a shared loop.
 *
 * The earlier version drew the whole relay at once, which forced the artwork
 * wide and every element small. Showing one moment at a time buys roughly
 * twice the scale for each, and lets the sequence itself carry the argument:
 *
 *   Arrived       three ways in, one place they land
 *   Acknowledged  a truthful reply goes straight back out
 *   Owned         a named person has it, and the built path stops
 *
 * Deliberately not an interface. No browser frame, no inbox, no message
 * bubble, no fabricated record — the argument is a path and a boundary, so the
 * artwork is a path and a boundary.
 *
 * Authored as SVG on one CSS timeline, so there is no animation dependency and
 * no client boundary. Wide and narrow are separate compositions rather than one
 * reflowed layout.
 *
 * Base (unanimated) values are the finished still: the Owned scene, with every
 * rail step marked. Reduced motion therefore lands on the outcome rather than
 * an empty frame, and every label is real text.
 */

const ART_LABEL =
  "One enquiry's first move, in three stages: a call, form or message arrives and lands in one place; a truthful acknowledgement goes straight back to the sender; the enquiry reaches a named person, and the automated path stops there";

const STEPS = ["Arrived", "Acknowledged", "Owned"] as const;

const CHANNELS = ["Call", "Form", "Message"] as const;

function OwnerGlyph({ cx, cy, scale = 1 }: { cx: number; cy: number; scale?: number }) {
  return (
    <g className="lrh-art__owner-glyph" transform={`translate(${cx} ${cy}) scale(${scale})`}>
      <circle cx="0" cy="-8" r="7.5" />
      <path d="M -14 14 a 14 14 0 0 1 28 0" />
    </g>
  );
}

function ArrowMarker({ id }: { id: string }) {
  return (
    <marker
      id={id}
      viewBox="0 0 10 10"
      refX="8"
      refY="5"
      markerWidth="5.5"
      markerHeight="5.5"
      orient="auto-start-reverse"
    >
      <path d="M 0 5 L 10 1.5 L 10 8.5 z" className="lrh-art__arrowhead" />
    </marker>
  );
}

export function LrhHeroArt() {
  return (
    <div className="lrh-art" role="img" aria-label={ART_LABEL} data-lrh-hero-artifact>
      <span className="lrh-art__glow" aria-hidden="true" />

      {/* ---------- Wide ---------- */}
      <svg
        className="lrh-art__svg lrh-art__svg--wide"
        viewBox="0 0 520 400"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <ArrowMarker id="lrhBack" />
        </defs>

        {/* ---- Scene 1 · Arrived ---- */}
        <g className="lrh-art__scene lrh-art__scene--a">
          {CHANNELS.map((channel, i) => {
            const y = 48 + i * 92;
            return (
              <g key={channel}>
                <rect x="20" y={y} width="150" height="48" rx="24" className="lrh-art__chip" />
                <text x="95" y={y + 30} className="lrh-art__chip-label" textAnchor="middle">
                  {channel}
                </text>
              </g>
            );
          })}

          <g className="lrh-art__converge">
            <path d="M 170 72 C 250 72, 268 164, 344 164" pathLength="1" />
            <path d="M 170 164 L 344 164" pathLength="1" />
            <path d="M 170 256 C 250 256, 268 164, 344 164" pathLength="1" />
          </g>

          <circle cx="390" cy="164" r="64" className="lrh-art__halo" />
          <circle cx="390" cy="164" r="46" className="lrh-art__node" />
          <circle cx="390" cy="164" r="11" className="lrh-art__node-core" />

          <text x="260" y="330" className="lrh-art__caption" textAnchor="middle">
            Three ways in. One place they land.
          </text>
        </g>

        {/* ---- Scene 2 · Acknowledged ----
             The sender stays on stage: an acknowledgement that returns to
             nobody in particular is not the point. */}
        <g className="lrh-art__scene lrh-art__scene--b">
          {CHANNELS.map((channel, i) => {
            const y = 48 + i * 92;
            return (
              <g key={channel} className="lrh-art__chip-group--dim">
                <rect x="20" y={y} width="150" height="48" rx="24" className="lrh-art__chip" />
                <text x="95" y={y + 30} className="lrh-art__chip-label" textAnchor="middle">
                  {channel}
                </text>
              </g>
            );
          })}

          <path
            d="M 344 150 C 300 96, 244 88, 180 140"
            className="lrh-art__ack"
            pathLength="1"
            markerEnd="url(#lrhBack)"
          />

          <rect x="182" y="60" width="164" height="46" rx="12" className="lrh-art__tag" />
          <text x="264" y="88" className="lrh-art__tag-label" textAnchor="middle">
            Acknowledged
          </text>

          <circle cx="390" cy="164" r="46" className="lrh-art__node" />
          <circle cx="390" cy="164" r="11" className="lrh-art__node-core" />

          <text x="260" y="330" className="lrh-art__caption" textAnchor="middle">
            A truthful reply goes straight back to them.
          </text>
        </g>

        {/* ---- Scene 3 · Owned (also the still state) ---- */}
        <g className="lrh-art__scene lrh-art__scene--c">
          <circle cx="34" cy="164" r="7" className="lrh-art__node-core" />
          <path d="M 41 164 H 178" className="lrh-art__onward" pathLength="1" />

          <circle cx="230" cy="164" r="52" className="lrh-art__node lrh-art__node--owner" />
          <OwnerGlyph cx={230} cy={164} />

          <text x="356" y="140" className="lrh-art__boundary-label" textAnchor="middle">
            Handoff
          </text>
          <path d="M 282 164 H 430" className="lrh-art__boundary" pathLength="1" />
          <circle cx="444" cy="164" r="8" className="lrh-art__terminus" />

          <text x="230" y="252" className="lrh-art__label" textAnchor="middle">
            A named person
          </text>
          <text x="260" y="330" className="lrh-art__caption" textAnchor="middle">
            They own what happens next. The system stops.
          </text>
        </g>

        {/* ---- Rail: the scene indicator, and real text at every moment ---- */}
        <path d="M 30 356 H 490" className="lrh-art__rail" />
        {STEPS.map((step, i) => {
          const x = 30 + i * 160;
          return (
            <g key={step} className="lrh-art__step" style={{ "--i": i } as React.CSSProperties}>
              <circle cx={x} cy="356" r="7" className="lrh-art__step-dot" />
              <text x={x} y="386" className="lrh-art__step-label" textAnchor="start">
                {step}
              </text>
            </g>
          );
        })}
      </svg>

      {/* ---------- Narrow ---------- */}
      <svg
        className="lrh-art__svg lrh-art__svg--narrow"
        viewBox="0 0 380 440"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <ArrowMarker id="lrhBackN" />
        </defs>

        <g className="lrh-art__scene lrh-art__scene--a">
          {CHANNELS.map((channel, i) => {
            const y = 40 + i * 80;
            return (
              <g key={channel}>
                <rect x="16" y={y} width="130" height="44" rx="22" className="lrh-art__chip" />
                <text x="81" y={y + 28} className="lrh-art__chip-label" textAnchor="middle">
                  {channel}
                </text>
              </g>
            );
          })}

          <g className="lrh-art__converge">
            <path d="M 146 62 C 200 62, 210 164, 248 164" pathLength="1" />
            <path d="M 146 142 C 200 142, 210 164, 248 164" pathLength="1" />
            <path d="M 146 222 C 200 222, 210 164, 248 164" pathLength="1" />
          </g>

          <circle cx="290" cy="164" r="58" className="lrh-art__halo" />
          <circle cx="290" cy="164" r="42" className="lrh-art__node" />
          <circle cx="290" cy="164" r="10" className="lrh-art__node-core" />

          <text x="190" y="306" className="lrh-art__caption" textAnchor="middle">
            Three ways in. One place they land.
          </text>
        </g>

        <g className="lrh-art__scene lrh-art__scene--b">
          {CHANNELS.map((channel, i) => {
            const y = 40 + i * 80;
            return (
              <g key={channel} className="lrh-art__chip-group--dim">
                <rect x="16" y={y} width="130" height="44" rx="22" className="lrh-art__chip" />
                <text x="81" y={y + 28} className="lrh-art__chip-label" textAnchor="middle">
                  {channel}
                </text>
              </g>
            );
          })}

          <path
            d="M 248 150 C 218 104, 178 96, 152 132"
            className="lrh-art__ack"
            pathLength="1"
            markerEnd="url(#lrhBackN)"
          />

          <rect x="150" y="54" width="140" height="42" rx="11" className="lrh-art__tag" />
          <text x="220" y="80" className="lrh-art__tag-label" textAnchor="middle">
            Acknowledged
          </text>

          <circle cx="290" cy="164" r="42" className="lrh-art__node" />
          <circle cx="290" cy="164" r="10" className="lrh-art__node-core" />

          <text x="190" y="306" className="lrh-art__caption" textAnchor="middle">
            A truthful reply goes back to them.
          </text>
        </g>

        <g className="lrh-art__scene lrh-art__scene--c">
          <circle cx="22" cy="164" r="6" className="lrh-art__node-core" />
          <path d="M 28 164 H 124" className="lrh-art__onward" pathLength="1" />

          <circle cx="170" cy="164" r="46" className="lrh-art__node lrh-art__node--owner" />
          <OwnerGlyph cx={170} cy={164} scale={0.9} />

          <text x="276" y="140" className="lrh-art__boundary-label" textAnchor="middle">
            Handoff
          </text>
          <path d="M 216 164 H 332" className="lrh-art__boundary" pathLength="1" />
          <circle cx="346" cy="164" r="7" className="lrh-art__terminus" />

          <text x="170" y="240" className="lrh-art__label" textAnchor="middle">
            A named person
          </text>
          <text x="190" y="306" className="lrh-art__caption" textAnchor="middle">
            They own what happens next.
          </text>
        </g>

        <path d="M 24 356 H 356" className="lrh-art__rail" />
        {STEPS.map((step, i) => {
          const x = 24 + i * 116;
          return (
            <g key={step} className="lrh-art__step" style={{ "--i": i } as React.CSSProperties}>
              <circle cx={x} cy="356" r="6" className="lrh-art__step-dot" />
              <text x={x} y="386" className="lrh-art__step-label" textAnchor="start">
                {step}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
