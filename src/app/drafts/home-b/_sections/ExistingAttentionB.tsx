/**
 * Band 2 — Existing attention (white). Centred intro + a full-width convergence
 * artifact: search, referrals and advertising flow into one substantial,
 * convincing destination — the website. (Rebuilt for weight and balance.)
 */
const SOURCES = [
  {
    y: 84,
    label: "Search",
    sub: "found actively",
    icon: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="m21 21-4.3-4.3" />
      </>
    ),
  },
  {
    y: 212,
    label: "Referrals",
    sub: "passed on trust",
    icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  },
  {
    y: 340,
    label: "Advertising",
    sub: "brought by spend",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </>
    ),
  },
];

export function ExistingAttentionB() {
  return (
    <section className="section hb-attention hb--white">
      <div className="container">
        <div className="section-intro section-intro--centered hb-attention__intro" data-anim="rise">
          <p className="eyebrow eyebrow--centered">Existing attention</p>
          <h2>
            Search, referrals and advertising still need <em>somewhere convincing to land.</em>
          </h2>
          <p className="text-lead">
            Attention is only the beginning. Wherever it comes from, people arrive with the same
            question — is this the right choice? The website is the destination that has to answer
            it.
          </p>
        </div>

        <div className="hb-attention__art" data-anim="rise" aria-hidden="true">
          <ConvergeArt />
        </div>
      </div>
    </section>
  );
}

function ConvergeArt() {
  return (
    <svg
      className="hb-converge"
      viewBox="0 0 1000 412"
      role="img"
      aria-label="Search, referrals and advertising converge onto one convincing website."
    >
      <defs>
        <linearGradient id="hbStream" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" className="hb-converge__stream-a" />
          <stop offset="100%" className="hb-converge__stream-b" />
        </linearGradient>
        <radialGradient id="hbLandGlow" cx="50%" cy="50%" r="60%">
          <stop offset="0%" className="hb-converge__glow-a" />
          <stop offset="100%" className="hb-converge__glow-b" />
        </radialGradient>
      </defs>

      {/* streams */}
      {SOURCES.map((s, i) => (
        <path
          key={i}
          className="hb-converge__stream"
          data-draw
          fill="none"
          d={`M292 ${s.y} C 440 ${s.y}, 486 212, 596 212`}
        />
      ))}

      {/* source cards */}
      {SOURCES.map((s, i) => (
        <g key={i}>
          <rect className="hb-converge__chip" x="20" y={s.y - 40} width="272" height="80" rx="18" />
          <g className="hb-converge__icn" transform={`translate(46 ${s.y - 12})`}>
            {s.icon}
          </g>
          <text className="hb-converge__chip-t" x="92" y={s.y - 4}>
            {s.label}
          </text>
          <text className="hb-converge__chip-s" x="92" y={s.y + 18}>
            {s.sub}
          </text>
        </g>
      ))}

      {/* convergence node */}
      <circle className="hb-converge__hub-ring" cx="596" cy="212" r="15" />
      <circle className="hb-converge__hub" data-pop cx="596" cy="212" r="8" />

      {/* landing panel — the website */}
      <ellipse className="hb-converge__glow" cx="818" cy="212" rx="210" ry="188" fill="url(#hbLandGlow)" />
      <g data-anim="pop">
        <rect className="hb-converge__panel-shadow" x="662" y="74" width="336" height="292" rx="18" />
        <rect className="hb-converge__panel" data-pop x="652" y="64" width="336" height="292" rx="18" />
        <circle className="hb-converge__panel-dot" cx="682" cy="92" r="4.5" />
        <circle className="hb-converge__panel-dot" cx="698" cy="92" r="4.5" />
        <circle className="hb-converge__panel-dot" cx="714" cy="92" r="4.5" />
        <circle className="hb-converge__panel-live" cx="962" cy="92" r="4.5" />
        <rect className="hb-converge__panel-url" x="740" y="86" width="150" height="13" rx="6.5" />

        <rect className="hb-converge__panel-h" x="684" y="126" width="180" height="20" rx="6" />
        <rect className="hb-converge__panel-line" x="684" y="160" width="270" height="9" rx="4.5" />
        <rect className="hb-converge__panel-line" x="684" y="178" width="220" height="9" rx="4.5" />

        <rect className="hb-converge__panel-card" x="684" y="204" width="272" height="66" rx="12" />
        <circle className="hb-converge__panel-tick-bg" cx="712" cy="237" r="14" />
        <path className="hb-converge__panel-tick" d="M705 237l5 5 9-10" />
        <rect className="hb-converge__panel-cline" x="736" y="226" width="180" height="8" rx="4" />
        <rect className="hb-converge__panel-cline" x="736" y="242" width="130" height="8" rx="4" />

        <rect className="hb-converge__panel-cta" x="684" y="288" width="176" height="44" rx="11" />
        <rect className="hb-converge__panel-cta-t" x="708" y="306" width="104" height="9" rx="4.5" />
      </g>

      <text className="hb-converge__caption" x="820" y="388">
        Your website — where they land
      </text>
    </svg>
  );
}
