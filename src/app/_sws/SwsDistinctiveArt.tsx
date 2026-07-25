/**
 * Section 7 artwork — the rank, and the one that left it.
 *
 * A receding rank of category-default websites, drawn from one template so the
 * sameness is literal rather than implied, diminishing and desaturating toward
 * a vanishing point. Then one page turns out of the rank and comes forward at a
 * counter-angle, fully rendered in its own art direction — its own colour, its
 * own typographic voice, its own photography.
 *
 * The rank is deliberately competent. If it read as bad work the argument would
 * be about quality; it is about being indistinguishable.
 */

interface Slot {
  x: number;
  y: number;
  w: number;
  h: number;
}

/** Eight instances of one template. Sameness by construction, not by claim. */
const RANK: readonly Slot[] = [
  { x: -14, y: 34, w: 172, h: 238 },
  { x: 140, y: 52, w: 152, h: 210 },
  { x: 276, y: 68, w: 135, h: 187 },
  { x: 396, y: 81, w: 121, h: 167 },
  { x: 503, y: 92, w: 108, h: 149 },
  { x: 599, y: 102, w: 96, h: 133 },
  { x: 684, y: 110, w: 86, h: 119 },
  { x: 760, y: 118, w: 77, h: 106 },
];

function DefaultPage({ slot, depth }: { slot: Slot; depth: number }) {
  const { x, y, w, h } = slot;
  const u = (value: number) => (value * w) / 200;

  return (
    <g className="rank__page" style={{ "--d": depth } as React.CSSProperties}>
      <rect x={x} y={y} width={w} height={h} rx={u(5)} className="rank__frame" />
      <circle cx={x + u(16)} cy={y + u(15)} r={u(4.6)} className="rank__mark" />
      <rect x={x + u(26)} y={y + u(11.5)} width={u(30)} height={u(6.5)} rx={u(3)} className="rank__ink" />
      <rect x={x + u(126)} y={y + u(12)} width={u(18)} height={u(5)} rx={u(2.5)} className="rank__dim" />
      <rect x={x + u(150)} y={y + u(12)} width={u(15)} height={u(5)} rx={u(2.5)} className="rank__dim" />
      <rect x={x + u(170)} y={y + u(9)} width={u(20)} height={u(11)} rx={u(5.5)} className="rank__chip" />
      <path d={`M${x} ${y + u(30)} H${x + w}`} className="rank__hair" />

      <rect x={x + u(12)} y={y + u(42)} width={u(176)} height={u(62)} rx={u(3)} className="rank__photo" />
      <rect x={x + u(12)} y={y + u(114)} width={u(138)} height={u(7)} rx={u(3.5)} className="rank__ink" />
      <rect x={x + u(12)} y={y + u(127)} width={u(102)} height={u(7)} rx={u(3.5)} className="rank__ink" />

      <rect x={x + u(12)} y={y + u(150)} width={u(52)} height={u(44)} rx={u(3)} className="rank__tile" />
      <rect x={x + u(74)} y={y + u(150)} width={u(52)} height={u(44)} rx={u(3)} className="rank__tile" />
      <rect x={x + u(136)} y={y + u(150)} width={u(52)} height={u(44)} rx={u(3)} className="rank__tile" />

      <rect x={x + u(12)} y={y + u(206)} width={u(62)} height={u(17)} rx={u(4)} className="rank__chip" />
      <path d={`M${x} ${y + u(240)} H${x + w}`} className="rank__hair" />
    </g>
  );
}

export function SwsDistinctiveArt() {
  return (
    <div className="rank" aria-hidden="true">
      <svg className="rank__svg" viewBox="0 0 900 566" fill="none" focusable="false">
        <defs>
          <linearGradient id="rank-generic" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7f8f9c" />
            <stop offset="100%" stopColor="#9fadb6" />
          </linearGradient>
          <linearGradient id="rank-own-photo" x1="0" y1="0" x2="0.6" y2="1">
            <stop offset="0%" stopColor="#3a2418" />
            <stop offset="55%" stopColor="#8d4526" />
            <stop offset="100%" stopColor="#d98b52" />
          </linearGradient>
          <clipPath id="rank-own-clip">
            <rect x="452" y="288" width="248" height="188" rx="4" />
          </clipPath>
        </defs>

        {/* the rank: eight instances of one template */}
        <g className="rank__group">
          {RANK.map((slot, index) => (
            <DefaultPage key={slot.x} slot={slot} depth={index / (RANK.length - 1)} />
          ))}
        </g>
        <path d="M0 286 H900" className="rank__ground" />

        {/* the one that turned out of it */}
        <g className="rank__own" transform="rotate(-2.6 650 380)">
          <rect x="428" y="212" width="444" height="330" rx="7" className="rank__own-frame" />

          {/* its own identity, not the category's */}
          <path d="M456 246 l9 -9 l9 9 l-9 9 z" className="rank__own-glyph" />
          <rect x="482" y="240" width="86" height="9" rx="2" className="rank__own-word" />
          <rect x="742" y="236" width="102" height="24" rx="4" className="rank__own-cta" />
          <text x="793" y="252" className="rank__own-cta-label" textAnchor="middle">
            Enquire
          </text>

          <text x="456" y="292" className="rank__own-display">
            The same three of us,
          </text>
          <text x="456" y="330" className="rank__own-display">
            since 1998.
          </text>

          {/* art-directed photography, not a stock gradient */}
          <g clipPath="url(#rank-own-clip)" transform="translate(0 62)">
            <rect x="452" y="288" width="248" height="188" fill="url(#rank-own-photo)" />
            <rect x="486" y="306" width="72" height="96" rx="2" className="rank__own-window" />
            <path d="M452 424 h248 v52 h-248 z" className="rank__own-bench" />
            <path
              d="M596 424 c0 -26 8 -44 22 -44 s22 18 22 44 z"
              className="rank__own-figure"
            />
            <circle cx="618" cy="368" r="11" className="rank__own-figure" />
          </g>

          <rect x="716" y="356" width="128" height="7" rx="3.5" className="rank__own-ink" />
          <rect x="716" y="372" width="112" height="7" rx="3.5" className="rank__own-ink" />
          <rect x="716" y="396" width="128" height="5" rx="2.5" className="rank__own-dim" />
          <rect x="716" y="408" width="104" height="5" rx="2.5" className="rank__own-dim" />
          <rect x="716" y="420" width="120" height="5" rx="2.5" className="rank__own-dim" />
          <path d="M716 446 H844" className="rank__own-rule" />
          <text x="716" y="470" className="rank__own-note">
            Workshop, Tuesday morning
          </text>

          <rect x="452" y="500" width="150" height="26" rx="4" className="rank__own-cta" />
          <text x="527" y="517" className="rank__own-cta-label" textAnchor="middle">
            Come and see the work
          </text>
        </g>
      </svg>
    </div>
  );
}
