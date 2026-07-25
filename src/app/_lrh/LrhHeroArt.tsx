/**
 * Hero artwork — the whole service as one relay.
 *
 * Three channels arrive. They converge on a single node: the enquiry. From
 * that node two things leave at once — an arc curving *back* to the sender as
 * the acknowledgement, and a firm line running *onward* to a named owner.
 * Past the owner the line turns dashed and stops at an open terminus, because
 * that is exactly where the service stops: MindWP acknowledges and routes,
 * then a person decides.
 *
 * Deliberately not an interface. There is no browser frame, no inbox, no
 * message bubble and no fabricated record — the argument is a path and a
 * boundary, so the artwork is a path and a boundary.
 *
 * Authored as SVG on one shared CSS timeline, so there is no animation
 * dependency and no client boundary. Wide and narrow are separate
 * compositions — horizontal relay and vertical spine — rather than one
 * reflowed layout.
 *
 * Base (unanimated) values are the finished still: every stroke drawn, both
 * nodes lit, all three rail steps marked. Reduced motion therefore lands on a
 * frame that carries the complete argument, and every label is real text at
 * every moment.
 */

const ART_LABEL =
  "One enquiry's first move: a call, form or message arrives, an acknowledgement goes back to the sender, the enquiry reaches a named owner, and the automated path stops at the handoff";

const STEPS = ["Arrived", "Acknowledged", "Owned"] as const;

const CHANNELS = ["Call", "Form", "Message"] as const;

function OwnerGlyph({ cx, cy, scale = 1 }: { cx: number; cy: number; scale?: number }) {
  return (
    <g className="lrh-art__owner-glyph" transform={`translate(${cx} ${cy}) scale(${scale})`}>
      <circle cx="0" cy="-5.5" r="5" />
      <path d="M -9.5 9.5 a 9.5 9.5 0 0 1 19 0" />
    </g>
  );
}

export function LrhHeroArt() {
  return (
    <div className="lrh-art" role="img" aria-label={ART_LABEL} data-lrh-hero-artifact>
      <span className="lrh-art__glow" aria-hidden="true" />

      {/* ---------- Wide: horizontal relay ---------- */}
      <svg
        className="lrh-art__svg lrh-art__svg--wide"
        viewBox="0 40 620 400"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <marker
            id="lrhArrowBack"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 5 L 10 1.5 L 10 8.5 z" className="lrh-art__arrowhead" />
          </marker>
        </defs>

        {/* ---- Channels ---- */}
        {CHANNELS.map((channel, i) => {
          const y = 154 + i * 74;
          return (
            <g
              key={channel}
              className="lrh-art__channel"
              style={{ "--i": i } as React.CSSProperties}
            >
              <rect x="24" y={y} width="98" height="34" rx="17" className="lrh-art__chip" />
              <text x="73" y={y + 22} className="lrh-art__chip-label" textAnchor="middle">
                {channel}
              </text>
            </g>
          );
        })}

        {/* ---- Convergence ---- */}
        <g className="lrh-art__converge">
          <path d="M 122 171 C 176 171, 186 228, 214 228" pathLength="1" />
          <path d="M 122 245 C 166 245, 178 228, 214 228" pathLength="1" />
          <path d="M 122 319 C 176 319, 186 228, 214 228" pathLength="1" />
        </g>

        {/* ---- Node 1 · the enquiry ---- */}
        <circle cx="242" cy="228" r="40" className="lrh-art__halo" />
        <circle cx="242" cy="228" r="27" className="lrh-art__node" />
        <circle cx="242" cy="228" r="6.5" className="lrh-art__node-core" />
        <text x="242" y="298" className="lrh-art__label" textAnchor="middle">
          Enquiry arrives
        </text>

        {/* ---- The acknowledgement, going back out ---- */}
        <path
          d="M 242 201 C 242 142, 236 116, 176 112"
          className="lrh-art__ack"
          pathLength="1"
          markerEnd="url(#lrhArrowBack)"
        />
        <text x="256" y="94" className="lrh-art__label lrh-art__label--ack" textAnchor="start">
          Acknowledgement sent
        </text>

        {/* ---- Onward, to a person ---- */}
        <path d="M 269 228 H 391" className="lrh-art__onward" pathLength="1" />
        <circle cx="418" cy="228" r="27" className="lrh-art__node lrh-art__node--owner" />
        <OwnerGlyph cx={418} cy={228} />
        <text x="418" y="298" className="lrh-art__label" textAnchor="middle">
          Named owner
        </text>

        {/* ---- Where the built path stops ---- */}
        <text x="516" y="200" className="lrh-art__boundary-label" textAnchor="middle">
          Handoff
        </text>
        <path d="M 445 228 H 570" className="lrh-art__boundary" pathLength="1" />
        <circle cx="582" cy="228" r="6.5" className="lrh-art__terminus" />

        {/* ---- Travelling signal ---- */}
        <circle r="5" className="lrh-art__pulse" />
        <circle r="4.5" className="lrh-art__pulse lrh-art__pulse--ack" />

        {/* ---- Step rail ---- */}
        <path d="M 40 380 H 580" className="lrh-art__rail" />
        {STEPS.map((step, i) => {
          const x = 40 + i * 196;
          return (
            <g key={step} className="lrh-art__step" style={{ "--i": i } as React.CSSProperties}>
              <circle cx={x} cy="380" r="7" className="lrh-art__step-dot" />
              <text x={x} y="412" className="lrh-art__step-label" textAnchor="start">
                {step}
              </text>
            </g>
          );
        })}
      </svg>

      {/* ---------- Narrow: vertical spine ---------- */}
      <svg
        className="lrh-art__svg lrh-art__svg--narrow"
        viewBox="0 0 360 440"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <marker
            id="lrhArrowBackN"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 5 L 10 1.5 L 10 8.5 z" className="lrh-art__arrowhead" />
          </marker>
        </defs>

        {CHANNELS.map((channel, i) => {
          const x = 16 + i * 114;
          return (
            <g
              key={channel}
              className="lrh-art__channel"
              style={{ "--i": i } as React.CSSProperties}
            >
              <rect x={x} y="16" width="100" height="32" rx="16" className="lrh-art__chip" />
              <text x={x + 50} y="37" className="lrh-art__chip-label" textAnchor="middle">
                {channel}
              </text>
            </g>
          );
        })}

        <g className="lrh-art__converge">
          <path d="M 66 48 C 66 92, 70 104, 76 108" pathLength="1" />
          <path d="M 180 48 C 180 92, 118 96, 76 108" pathLength="1" />
          <path d="M 294 48 C 294 96, 128 92, 76 108" pathLength="1" />
        </g>

        <circle cx="76" cy="134" r="37" className="lrh-art__halo" />
        <circle cx="76" cy="134" r="25" className="lrh-art__node" />
        <circle cx="76" cy="134" r="6" className="lrh-art__node-core" />
        <text x="118" y="140" className="lrh-art__label" textAnchor="start">
          Enquiry arrives
        </text>

        <path d="M 76 159 V 250" className="lrh-art__onward" pathLength="1" />

        <path
          d="M 76 196 C 128 196, 150 186, 168 166"
          className="lrh-art__ack"
          pathLength="1"
          markerEnd="url(#lrhArrowBackN)"
        />
        <text x="118" y="218" className="lrh-art__label lrh-art__label--ack" textAnchor="start">
          Acknowledgement sent
        </text>

        <circle cx="76" cy="275" r="25" className="lrh-art__node lrh-art__node--owner" />
        <OwnerGlyph cx={76} cy={275} scale={0.92} />
        <text x="118" y="281" className="lrh-art__label" textAnchor="start">
          Named owner
        </text>

        <path d="M 76 300 V 348" className="lrh-art__boundary" pathLength="1" />
        <circle cx="76" cy="360" r="6" className="lrh-art__terminus" />
        <text x="118" y="332" className="lrh-art__boundary-label" textAnchor="start">
          Handoff
        </text>

        <circle r="4.5" className="lrh-art__pulse" />
        <circle r="4" className="lrh-art__pulse lrh-art__pulse--ack" />

        <path d="M 24 396 H 336" className="lrh-art__rail" />
        {STEPS.map((step, i) => {
          const x = 24 + i * 112;
          return (
            <g key={step} className="lrh-art__step" style={{ "--i": i } as React.CSSProperties}>
              <circle cx={x} cy="396" r="6" className="lrh-art__step-dot" />
              <text x={x} y="424" className="lrh-art__step-label" textAnchor="start">
                {step}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
