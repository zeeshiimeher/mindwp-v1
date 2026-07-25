/**
 * Hero artwork, sws-b — a genuinely different technique from variant A's
 * scene-in-a-frame illustration: several loose threads (the separate pieces
 * a Smart Website System connects — strategy, structure, content, design,
 * enquiry handling) converge and merge into one resolved line. No UI boxes,
 * no browser chrome, no cursor — pure line-art.
 *
 *   Understand   the threads are still loose and separate
 *   Trust        they cross and gather at one point
 *   Act          one solid line continues, ending in a resolved mark
 *
 * The only motion is a small pulse travelling the resolved line on a loop —
 * one authored moment, not a scene swap. Reduced motion keeps the complete
 * static illustration with the pulse simply absent.
 */

const STEPS = ["Understand", "Trust", "Act"] as const;

const THREADS_WIDE = [
  { y: 130, c1y: 150, c2y: 195 },
  { y: 175, c1y: 180, c2y: 198 },
  { y: 220, c1y: 210, c2y: 202 },
  { y: 265, c1y: 240, c2y: 206 },
  { y: 310, c1y: 270, c2y: 210 },
] as const;

const THREADS_NARROW = [
  { y: 88, c1y: 100, c2y: 128 },
  { y: 116, c1y: 118, c2y: 130 },
  { y: 144, c1y: 138, c2y: 132 },
  { y: 172, c1y: 158, c2y: 134 },
  { y: 200, c1y: 178, c2y: 136 },
] as const;

export function SwsHeroArtB() {
  const LABEL =
    "Several separate threads — strategy, structure, content, design, enquiry handling — converging and merging into one resolved line.";

  return (
    <div className="sws-hero-art-b" role="img" aria-label={LABEL} data-sws-hero-artifact>
      <span className="sws-hero-art-b__glow" aria-hidden="true" />

      {/* ---------- Wide ---------- */}
      <svg
        className="sws-hero-art-b__svg sws-hero-art-b__svg--wide"
        viewBox="0 0 620 480"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id="swsHbFrame" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--surface-navy-raised)" />
            <stop offset="100%" stopColor="var(--surface-navy-panel)" />
          </linearGradient>
        </defs>

        <rect
          x="40"
          y="40"
          width="540"
          height="312"
          rx="18"
          fill="url(#swsHbFrame)"
          className="sws-hero-art-b__frame"
        />

        {THREADS_WIDE.map((t, i) => (
          <path
            key={i}
            d={`M 80 ${t.y} C 200 ${t.c1y}, 280 ${t.c2y}, 340 200`}
            className="sws-hero-art-b__thread"
            style={{ "--i": i } as React.CSSProperties}
          />
        ))}

        <path d="M 340 200 H 500" className="sws-hero-art-b__resolved" />
        <circle
          cx="500"
          cy="200"
          r="7"
          className="sws-hero-art-b__resolved-mark"
        />
        <circle cx="500" cy="200" r="14" className="sws-hero-art-b__resolved-halo" />

        <circle r="4" className="sws-hero-art-b__pulse">
          <animateMotion dur="3.6s" repeatCount="indefinite" path="M 340 200 H 500" />
        </circle>

        {/* ---- Step rail ---- */}
        <path d="M64 412 H 556" className="sws-hero-art-b__rail" />
        {STEPS.map((step, i) => {
          const x = 64 + i * 246;
          return (
            <g key={step} className="sws-hero-art-b__step">
              <circle cx={x} cy="412" r="7" className="sws-hero-art-b__step-dot" />
              <text x={x} y="444" className="sws-hero-art-b__step-label" textAnchor="start">
                {step}
              </text>
            </g>
          );
        })}
      </svg>

      {/* ---------- Narrow ---------- */}
      <svg
        className="sws-hero-art-b__svg sws-hero-art-b__svg--narrow"
        viewBox="0 0 360 340"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id="swsHbFrameN" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--surface-navy-raised)" />
            <stop offset="100%" stopColor="var(--surface-navy-panel)" />
          </linearGradient>
        </defs>

        <rect
          x="16"
          y="16"
          width="328"
          height="232"
          rx="14"
          fill="url(#swsHbFrameN)"
          className="sws-hero-art-b__frame"
        />

        {THREADS_NARROW.map((t, i) => (
          <path
            key={i}
            d={`M 44 ${t.y} C 120 ${t.c1y}, 170 ${t.c2y}, 210 138`}
            className="sws-hero-art-b__thread"
            style={{ "--i": i } as React.CSSProperties}
          />
        ))}

        <path d="M 210 138 H 316" className="sws-hero-art-b__resolved" />
        <circle cx="316" cy="138" r="6" className="sws-hero-art-b__resolved-mark" />
        <circle cx="316" cy="138" r="12" className="sws-hero-art-b__resolved-halo" />

        <circle r="3.4" className="sws-hero-art-b__pulse">
          <animateMotion dur="3.6s" repeatCount="indefinite" path="M 210 138 H 316" />
        </circle>

        <path d="M40 292 H264" className="sws-hero-art-b__rail" />
        {STEPS.map((step, i) => {
          const x = 40 + i * 112;
          return (
            <g key={step} className="sws-hero-art-b__step">
              <circle cx={x} cy="292" r="6" className="sws-hero-art-b__step-dot" />
              <text x={x} y="320" className="sws-hero-art-b__step-label" textAnchor="start">
                {step}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
