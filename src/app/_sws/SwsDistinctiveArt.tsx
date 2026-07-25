/**
 * Section 7 artwork — category sameness against one distinct presence.
 *
 * The lattice is a field of identical page glyphs on a strict grid: the visual
 * fact of a category where everyone bought the same template. One composition
 * breaks the grid, carries real hierarchy and holds the only saturated colour
 * on the canvas.
 *
 * The glyphs are abstract by design. Nothing here depicts, parodies or implies
 * a real competitor's website.
 */

const LATTICE_COLUMNS = 6;
const LATTICE_ROWS = 3;
const GLYPH_W = 118;
const GLYPH_H = 132;
const GLYPH_GAP_X = 22;
const GLYPH_GAP_Y = 26;

function latticeCells() {
  const cells: { x: number; y: number; key: string }[] = [];
  for (let row = 0; row < LATTICE_ROWS; row += 1) {
    for (let col = 0; col < LATTICE_COLUMNS; col += 1) {
      cells.push({
        key: `${row}-${col}`,
        x: col * (GLYPH_W + GLYPH_GAP_X),
        y: row * (GLYPH_H + GLYPH_GAP_Y),
      });
    }
  }
  return cells;
}

const CELLS = latticeCells();

export function SwsDistinctiveArt() {
  return (
    <svg
      className="sws-distinctive__art"
      viewBox="0 0 900 520"
      role="img"
      aria-label="A strict grid of identical, faded page layouts with one larger, fully designed page breaking out of the grid in front of them"
    >
      <defs>
        <linearGradient id="sws-distinct-panel" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0%" stopColor="var(--surface-navy-raised)" />
          <stop offset="100%" stopColor="var(--surface-navy-panel)" />
        </linearGradient>
        <linearGradient id="sws-distinct-fade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--color-navy)" stopOpacity="0" />
          <stop offset="72%" stopColor="var(--color-navy)" stopOpacity="0.82" />
          <stop offset="100%" stopColor="var(--color-navy)" stopOpacity="0.96" />
        </linearGradient>
        <clipPath id="sws-distinct-clip">
          <rect x="0" y="0" width="900" height="520" />
        </clipPath>
      </defs>

      <g clipPath="url(#sws-distinct-clip)">
        {/* The category: identical, aligned, interchangeable */}
        <g transform="translate(16 26)" opacity="0.16">
          {CELLS.map((cell) => (
            <g key={cell.key} transform={`translate(${cell.x} ${cell.y})`}>
              <rect
                width={GLYPH_W}
                height={GLYPH_H}
                rx="6"
                fill="none"
                stroke="var(--color-text-inverse)"
                strokeWidth="1"
              />
              <rect x="14" y="16" width="52" height="6" rx="3" fill="var(--color-text-inverse)" />
              <rect
                x="14"
                y="34"
                width={GLYPH_W - 28}
                height="38"
                rx="4"
                fill="var(--color-text-inverse)"
                opacity="0.45"
              />
              <rect x="14" y="84" width={GLYPH_W - 40} height="4" rx="2" fill="var(--color-text-inverse)" />
              <rect x="14" y="94" width={GLYPH_W - 52} height="4" rx="2" fill="var(--color-text-inverse)" />
              <rect x="14" y="108" width="40" height="10" rx="3" fill="var(--color-text-inverse)" />
            </g>
          ))}
        </g>

        {/* Depth wash so the lattice recedes behind the focal composition */}
        <rect x="0" y="0" width="900" height="520" fill="url(#sws-distinct-fade)" />

        {/* The one that is unmistakably a particular business */}
        <g transform="translate(470 42)">
          <rect
            x="6"
            y="10"
            width="330"
            height="440"
            rx="16"
            fill="var(--color-navy)"
            opacity="0.55"
          />
          <rect
            width="330"
            height="440"
            rx="16"
            fill="url(#sws-distinct-panel)"
            stroke="var(--emerald-line-soft)"
          />

          <rect x="34" y="40" width="70" height="7" rx="3.5" fill="var(--color-emerald)" />

          {/* A heading with actual hierarchy */}
          <rect x="34" y="66" width="236" height="15" rx="7.5" fill="var(--color-text-inverse)" />
          <rect
            x="34"
            y="90"
            width="176"
            height="15"
            rx="7.5"
            fill="var(--color-text-inverse)"
            opacity="0.55"
          />

          {/* Considered media, cropped for its content */}
          <rect
            x="34"
            y="130"
            width="262"
            height="132"
            rx="10"
            fill="var(--color-emerald)"
            opacity="0.14"
          />
          <rect
            x="34"
            y="130"
            width="262"
            height="132"
            rx="10"
            fill="none"
            stroke="var(--emerald-line-soft)"
          />
          <circle cx="106" cy="196" r="26" fill="var(--color-emerald)" opacity="0.35" />
          <path
            d="M34 236 C 96 200, 148 244, 206 214 C 246 194, 274 214, 296 206"
            fill="none"
            stroke="var(--color-emerald)"
            strokeOpacity="0.5"
            strokeWidth="1.5"
          />

          <g opacity="0.32">
            <rect x="34" y="286" width="248" height="5" rx="2.5" fill="var(--color-text-inverse)" />
            <rect x="34" y="300" width="222" height="5" rx="2.5" fill="var(--color-text-inverse)" />
            <rect x="34" y="314" width="240" height="5" rx="2.5" fill="var(--color-text-inverse)" />
          </g>

          <rect x="34" y="352" width="122" height="34" rx="8" fill="var(--color-emerald)" />
          <rect
            x="172"
            y="352"
            width="98"
            height="34"
            rx="8"
            fill="none"
            stroke="var(--border-navy-hairline)"
          />
        </g>
      </g>
    </svg>
  );
}
