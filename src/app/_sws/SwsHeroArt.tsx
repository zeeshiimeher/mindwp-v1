/**
 * Hero artwork — specialist knowledge resolving into an ordered page.
 *
 * Left: dense, uneven marks standing for expertise as it actually arrives —
 * compressed, unordered, and impossible for a visitor to read. Right: the same
 * material given hierarchy, measure, evidence and one action. The emerald
 * threads connect specific parts of the ordered page back to the dense cluster,
 * so the composition reads as translation rather than replacement.
 *
 * Deliberately not a browser frame: this section is about the thinking that
 * precedes a page, not about the web as a medium.
 */

const RAW_MARKS = [
  [0, 118, 0.5],
  [14, 74, 0.28],
  [28, 132, 0.62],
  [42, 56, 0.22],
  [56, 104, 0.44],
  [70, 148, 0.7],
  [84, 62, 0.26],
  [98, 96, 0.4],
  [112, 138, 0.58],
  [126, 48, 0.2],
  [140, 112, 0.46],
  [154, 84, 0.3],
  [168, 126, 0.54],
  [182, 68, 0.24],
  [196, 142, 0.64],
  [210, 92, 0.38],
  [224, 58, 0.22],
  [238, 120, 0.5],
] as const;

const BODY_LINES = [
  [0, 232],
  [17, 246],
  [34, 210],
  [51, 238],
] as const;

export function SwsHeroArt() {
  return (
    <svg
      className="sws-hero__art"
      viewBox="0 0 560 470"
      role="img"
      aria-label="Dense specialist material on the left resolving into an ordered page with a heading, explanation, evidence and one action on the right"
    >
      <defs>
        <linearGradient id="sws-hero-panel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--surface-navy-raised)" />
          <stop offset="100%" stopColor="var(--surface-navy-panel)" />
        </linearGradient>
        <linearGradient id="sws-hero-thread" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--color-emerald)" stopOpacity="0" />
          <stop offset="55%" stopColor="var(--color-emerald)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--color-emerald)" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      {/* Raw specialist material */}
      <g data-sws-hero-artifact>
        <text
          x="0"
          y="12"
          className="sws-hero__art-label"
          fill="var(--text-inverse-muted)"
        >
          THE WORK
        </text>
        {RAW_MARKS.map(([y, width, opacity]) => (
          <rect
            key={y}
            x="0"
            y={34 + y}
            width={width}
            height="5"
            rx="2.5"
            fill="var(--color-text-inverse)"
            opacity={opacity}
          />
        ))}
      </g>

      {/* The structuring line */}
      <g data-sws-hero-artifact>
        <line
          x1="272"
          y1="26"
          x2="272"
          y2="444"
          stroke="var(--color-emerald)"
          strokeOpacity="0.42"
          strokeWidth="1"
        />
        <circle cx="272" cy="196" r="3.5" fill="var(--color-emerald)" />
      </g>

      {/* Threads from expertise into the parts of the page it feeds */}
      <g data-sws-hero-artifact fill="none" stroke="url(#sws-hero-thread)" strokeWidth="1.25">
        <path d="M250 92 C 272 92, 272 132, 316 132" />
        <path d="M250 196 C 272 196, 272 236, 316 236" />
        <path d="M250 300 C 272 300, 272 330, 316 330" />
      </g>

      {/* The ordered page */}
      <g data-sws-hero-artifact>
        <rect
          x="304"
          y="26"
          width="256"
          height="418"
          rx="14"
          fill="url(#sws-hero-panel)"
          stroke="var(--border-navy-hairline)"
        />

        <text
          x="328"
          y="66"
          className="sws-hero__art-label"
          fill="var(--color-emerald)"
        >
          THE PAGE
        </text>

        {/* Heading */}
        <rect x="328" y="88" width="188" height="12" rx="6" fill="var(--color-text-inverse)" />
        <rect
          x="328"
          y="108"
          width="132"
          height="12"
          rx="6"
          fill="var(--color-text-inverse)"
          opacity="0.62"
        />

        {/* Explanation at a readable measure */}
        <g opacity="0.34">
          {BODY_LINES.map(([offset, width]) => (
            <rect
              key={offset}
              x="328"
              y={148 + offset}
              width={width}
              height="5"
              rx="2.5"
              fill="var(--color-text-inverse)"
            />
          ))}
        </g>

        {/* Evidence block — bordered, so it reads as inspectable material */}
        <rect
          x="328"
          y="248"
          width="208"
          height="86"
          rx="8"
          fill="var(--color-navy)"
          fillOpacity="0.55"
          stroke="var(--emerald-line-soft)"
        />
        <rect x="346" y="270" width="76" height="5" rx="2.5" fill="var(--color-emerald)" />
        <g opacity="0.3">
          <rect x="346" y="288" width="164" height="4" rx="2" fill="var(--color-text-inverse)" />
          <rect x="346" y="300" width="138" height="4" rx="2" fill="var(--color-text-inverse)" />
          <rect x="346" y="312" width="152" height="4" rx="2" fill="var(--color-text-inverse)" />
        </g>

        {/* One action */}
        <rect x="328" y="368" width="132" height="34" rx="8" fill="var(--color-emerald)" />
        <rect
          x="348"
          y="383"
          width="92"
          height="5"
          rx="2.5"
          fill="var(--color-navy)"
          opacity="0.72"
        />
      </g>
    </svg>
  );
}
