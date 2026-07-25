/**
 * The relay, extended: bookend vignettes either side of the threshold — a
 * small drawn page (the plan) on the left, a small connected people-cluster
 * (the system) on the right — plus a second, faint dashed line that drops
 * off right after the threshold, contrasted against the solid line that
 * continues all the way through. The point being made visible: what the
 * page promises either keeps working, or it quietly doesn't.
 */
const WAYPOINTS = [
  { x: 410, label: "Acknowledged" },
  { x: 478, label: "Owned" },
  { x: 546, label: "Routed" },
] as const;

export function SwsPlanToSystemB() {
  return (
    <section id="plan-to-system" className="sws-plan-to-system-b section on-dark">
      <div className="container section-intro section-intro--centered" data-sws-sequence>
        <p className="eyebrow eyebrow--centered" data-sws-sequence-item>
          From plan to working system
        </p>
        <h2 data-sws-sequence-item>
          The journey planned on the page{" "}
          <em>should still work after the form is submitted.</em>
        </h2>
        <p data-sws-sequence-item>
          A page can promise a clear next step. Whether that promise holds depends on what
          happens the moment someone actually takes it — which is why both are planned together,
          not handed off at the form.
        </p>
      </div>

      <div
        className="container sws-plan-to-system-b__relay"
        role="img"
        aria-label="A small drawn page on the left, planned with a next step. A line crosses the threshold of an enquiry being sent. One solid line continues through acknowledged, owned and routed, into a connected team on the right. A second, fainter line drops off right after the threshold — the risk of a plan that isn't carried through."
        data-sws-linedraw
      >
        <svg
          className="sws-ptsb__svg"
          viewBox="0 0 700 240"
          fill="none"
          aria-hidden="true"
          focusable="false"
        >
          {/* zone labels */}
          <text x="20" y="42" className="sws-ptsb__zone-label">
            Planned on the page
          </text>
          <text x="680" y="42" textAnchor="end" className="sws-ptsb__zone-label sws-ptsb__zone-label--bright">
            Working after submission
          </text>

          {/* left vignette: the page */}
          <g data-sws-linedraw-node>
            <rect x="20" y="60" width="112" height="104" rx="10" className="sws-ptsb__vignette-frame" />
            <circle cx="36" cy="76" r="2.6" className="sws-ptsb__vignette-dot" />
            <circle cx="46" cy="76" r="2.6" className="sws-ptsb__vignette-dot" />
            <circle cx="56" cy="76" r="2.6" className="sws-ptsb__vignette-dot" />
            <rect x="34" y="92" width="84" height="9" rx="4.5" className="sws-ptsb__vignette-ink" />
            <rect x="34" y="108" width="60" height="7" rx="3.5" className="sws-ptsb__vignette-ink-dim" />
            <rect x="34" y="140" width="70" height="16" rx="8" className="sws-ptsb__vignette-cta" />
          </g>

          {/* solid relay line: threshold through to the system */}
          <path
            d="M132 132 H 348 M 352 132 H 580"
            className="sws-ptsb__line"
            data-sws-linedraw-path
          />

          {/* threshold marker */}
          <g data-sws-linedraw-node>
            <line x1="350" y1="106" x2="350" y2="158" className="sws-ptsb__threshold-mark" />
            <text x="350" y="96" textAnchor="middle" className="sws-ptsb__threshold-label">
              Enquiry sent
            </text>
          </g>

          {/* the risk: a fainter line that drops off right after the threshold */}
          <path
            d="M350 132 Q 385 132 400 152 T 430 172"
            className="sws-ptsb__risk-line"
          />
          <circle cx="430" cy="172" r="4" className="sws-ptsb__risk-end" />
          <text x="440" y="176" className="sws-ptsb__risk-label">
            if nothing follows through
          </text>

          {/* waypoints on the solid line */}
          {WAYPOINTS.map((wp) => (
            <g key={wp.label} transform={`translate(${wp.x} 132)`} data-sws-linedraw-node>
              <circle cx="0" cy="0" r="6" className="sws-ptsb__node" />
              <text x="0" y="30" textAnchor="middle" className="sws-ptsb__node-label">
                {wp.label}
              </text>
            </g>
          ))}

          {/* right vignette: the connected system */}
          <g data-sws-linedraw-node>
            <rect x="580" y="60" width="100" height="104" rx="10" className="sws-ptsb__vignette-frame" />
            <path
              d="M613 92 L655 92 M613 92 L634 130 M655 92 L634 130"
              className="sws-ptsb__vignette-link"
            />
            <circle cx="613" cy="92" r="8" className="sws-ptsb__team-node" />
            <circle cx="655" cy="92" r="8" className="sws-ptsb__team-node" />
            <circle cx="634" cy="130" r="9" className="sws-ptsb__team-node sws-ptsb__team-node--active" />
          </g>
        </svg>
      </div>
    </section>
  );
}
