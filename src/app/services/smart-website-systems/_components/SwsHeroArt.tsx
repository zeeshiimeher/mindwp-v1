/**
 * Smart Website Systems — hero artwork.
 *
 * One drawn system, built in five scenes on a single shared timeline:
 *
 *   1. THE WEBSITE      a premium page composes itself, part by part, ending
 *                       at the one thing it exists to make easy — the enquiry.
 *   2. THE ENQUIRY      the field is used, the send fires, and a route leaves
 *                       the page instead of stopping at it.
 *   3. ONE SYSTEM       a call and a message arrive from elsewhere and join
 *                       that same route at a single junction.
 *   4. THE RECORD       the enquiry becomes a visible record with a named
 *                       owner, a status and its context kept with it.
 *   5. WHAT FOLLOWS     two thin dashed branches — follow-up and proof —
 *                       extend from the record and terminate in nothing.
 *
 * The website is deliberately the largest object on the stage: this page sells
 * the website first and the connection second, and the composition has to say
 * that before a word is read. The connected half is smaller but materially
 * different — a solid card, a closed ring, a person — so it answers the second
 * half of the headline without claiming equal area.
 *
 * Scenes are cumulative, not swapped. The authored values are the settled
 * frame — page complete, route drawn, record owned, branches extended — so a
 * still capture, a script-free render and reduced motion all land on the frame
 * that carries the whole argument. The loop only ever removes and rebuilds
 * something already true.
 *
 * Nothing here is automatic: the last two branches are thinner, dashed and
 * unterminated, and there is no return arc closing the diagram into a cycle.
 *
 * No text. The headline beside it is this artwork's caption.
 */

const ART_LABEL =
  "A premium business website composing itself and ending in an enquiry field, the sent enquiry leaving the page along a route that a call and a message also join, arriving as a visible record with a named owner, a status and its context kept together, with follow-up and proof drawn as conditional branches rather than automatic ones";

interface Rect {
  x: number;
  y: number;
  w: number;
  h: number;
  r: number;
}

interface PlateGeometry {
  plate: Rect;
  brand: Rect;
  nav: { x: number[]; y: number; w: number; h: number };
  dividerY: number;
  headline: Rect[];
  lede: Rect[];
  proof: { cx: number[]; cy: number; r: number; bar: Rect };
  cells: Rect[];
  cellDot: { dx: number; dy: number; r: number };
  cellBar: { dx: number; dy: number; w: number; h: number };
  field: Rect;
  caret: { x: number; y1: number; y2: number };
  send: Rect;
  sendArrow: string;
}

const WIDE_PLATE: PlateGeometry = {
  plate: { x: 14, y: 20, w: 356, h: 344, r: 16 },
  brand: { x: 40, y: 48, w: 30, h: 10, r: 5 },
  nav: { x: [272, 298, 324], y: 49, w: 20, h: 6 },
  dividerY: 74,
  headline: [
    { x: 40, y: 96, w: 240, h: 16, r: 8 },
    { x: 40, y: 122, w: 170, h: 16, r: 8 },
  ],
  lede: [
    { x: 40, y: 156, w: 260, h: 6, r: 3 },
    { x: 40, y: 170, w: 196, h: 6, r: 3 },
  ],
  proof: { cx: [49, 71, 93], cy: 200, r: 9, bar: { x: 112, y: 195, w: 82, h: 10, r: 5 } },
  cells: [
    { x: 40, y: 228, w: 96, h: 58, r: 10 },
    { x: 144, y: 228, w: 96, h: 58, r: 10 },
    { x: 248, y: 228, w: 96, h: 58, r: 10 },
  ],
  cellDot: { dx: 16, dy: 22, r: 6 },
  cellBar: { dx: 14, dy: 38, w: 56, h: 6 },
  field: { x: 40, y: 306, w: 210, h: 34, r: 10 },
  caret: { x: 58, y1: 316, y2: 330 },
  send: { x: 258, y: 306, w: 86, h: 34, r: 10 },
  sendArrow: "M288 323 H312 M304 315 L312 323 L304 331",
};

const NARROW_PLATE: PlateGeometry = {
  plate: { x: 6, y: 6, w: 328, h: 280, r: 14 },
  brand: { x: 28, y: 30, w: 26, h: 9, r: 4 },
  nav: { x: [249, 271, 293], y: 31, w: 17, h: 5 },
  dividerY: 52,
  headline: [
    { x: 28, y: 70, w: 210, h: 14, r: 7 },
    { x: 28, y: 92, w: 150, h: 14, r: 7 },
  ],
  lede: [
    { x: 28, y: 120, w: 226, h: 6, r: 3 },
    { x: 28, y: 133, w: 170, h: 6, r: 3 },
  ],
  proof: { cx: [36, 56, 76], cy: 158, r: 8, bar: { x: 94, y: 153, w: 72, h: 9, r: 4 } },
  cells: [
    { x: 28, y: 182, w: 89, h: 48, r: 9 },
    { x: 125, y: 182, w: 89, h: 48, r: 9 },
    { x: 222, y: 182, w: 89, h: 48, r: 9 },
  ],
  cellDot: { dx: 15, dy: 16, r: 5 },
  cellBar: { dx: 8, dy: 30, w: 52, h: 5 },
  field: { x: 28, y: 244, w: 196, h: 30, r: 9 },
  caret: { x: 44, y1: 253, y2: 265 },
  send: { x: 232, y: 244, w: 79, h: 30, r: 9 },
  sendArrow: "M258 259 H278 M271 252 L279 259 L271 266",
};

function box(rect: Rect, className: string, index?: number) {
  return (
    <rect
      key={`${className}-${rect.x}-${rect.y}`}
      className={className}
      x={rect.x}
      y={rect.y}
      width={rect.w}
      height={rect.h}
      rx={rect.r}
      style={index === undefined ? undefined : ({ "--i": index } as React.CSSProperties)}
    />
  );
}

/**
 * The website itself. Structurally identical at both widths — it is the same
 * argument — so the geometry is data and the marks are authored once.
 */
function Plate({ g }: { g: PlateGeometry }) {
  const plateRight = g.plate.x + g.plate.w;

  return (
    <>
      {box(g.plate, "sw__plate")}

      <g className="sw__chrome">
        {box(g.brand, "sw__brand")}
        {g.nav.x.map((x) => (
          <rect
            key={x}
            className="sw__nav"
            x={x}
            y={g.nav.y}
            width={g.nav.w}
            height={g.nav.h}
            rx={g.nav.h / 2}
          />
        ))}
        <path
          className="sw__divider"
          d={`M${g.plate.x} ${g.dividerY} H${plateRight}`}
          vectorEffect="non-scaling-stroke"
        />
      </g>

      {g.headline.map((bar, i) => box(bar, "sw__bar", i))}
      {g.lede.map((line, i) => box(line, "sw__line", i))}

      <g className="sw__proof-group">
        {g.proof.cx.map((cx, i) => (
          <circle
            key={cx}
            className="sw__proof"
            cx={cx}
            cy={g.proof.cy}
            r={g.proof.r}
            style={{ "--i": i } as React.CSSProperties}
          />
        ))}
        {box(g.proof.bar, "sw__proof-bar", g.proof.cx.length)}
      </g>

      {g.cells.map((cell, i) => (
        <g key={cell.x} className="sw__cell" style={{ "--i": i } as React.CSSProperties}>
          <rect x={cell.x} y={cell.y} width={cell.w} height={cell.h} rx={cell.r} />
          <circle
            className="sw__cell-dot"
            cx={cell.x + g.cellDot.dx}
            cy={cell.y + g.cellDot.dy}
            r={g.cellDot.r}
          />
          <rect
            className="sw__cell-bar"
            x={cell.x + g.cellBar.dx}
            y={cell.y + g.cellBar.dy}
            width={g.cellBar.w}
            height={g.cellBar.h}
            rx={g.cellBar.h / 2}
          />
        </g>
      ))}

      {/* Where the page stops being a brochure. */}
      <g className="sw__enquiry">
        {box(g.field, "sw__field")}
        <path className="sw__caret" d={`M${g.caret.x} ${g.caret.y1} V${g.caret.y2}`} />
        {box(g.send, "sw__send")}
        <path className="sw__send-arrow" d={g.sendArrow} />
      </g>
    </>
  );
}

/* The other two agreed sources. Drawn as the objects an owner recognises — a
   message and a call — rather than abstract marks, because "one system" only
   means something if you can see what is joining it. Authored on a 24-unit
   grid and placed by transform, so both compositions use one definition. */
const MESSAGE_ICON = "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z";
const CALL_ICON =
  "M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z";

function sourceIcon(d: string, cx: number, cy: number, size: number) {
  const scale = size / 24;
  return (
    <g transform={`translate(${cx - size / 2} ${cy - size / 2}) scale(${scale.toFixed(3)})`}>
      <path className="sw__source-mark" d={d} />
    </g>
  );
}

/** A five-pointed mark: genuine public proof, not a rating claim. */
function star(cx: number, cy: number) {
  const outer = 10;
  const inner = 4.6;
  const points: string[] = [];
  for (let i = 0; i < 10; i += 1) {
    const radius = i % 2 === 0 ? outer : inner;
    const angle = (-90 + i * 36) * (Math.PI / 180);
    points.push(
      `${(cx + radius * Math.cos(angle)).toFixed(2)} ${(cy + radius * Math.sin(angle)).toFixed(2)}`,
    );
  }
  return `M${points.join(" L")} Z`;
}

export function SwsHeroArt() {
  return (
    <div className="sws-art" role="img" aria-label={ART_LABEL} data-sws-hero-artifact>
      <span className="sws-art__glow" aria-hidden="true" />

      {/* ---------- Wide ---------- */}
      <svg
        className="sws-art__svg sws-art__svg--wide"
        viewBox="0 0 620 610"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <radialGradient id="swBloomWide" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--color-emerald)" stopOpacity="0.16" />
            <stop offset="60%" stopColor="var(--color-emerald)" stopOpacity="0.05" />
            <stop offset="100%" stopColor="var(--color-emerald)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* the connected half warms as it assembles — light, not a container */}
        <ellipse
          className="sw__bloom"
          cx="380"
          cy="470"
          rx="250"
          ry="170"
          fill="url(#swBloomWide)"
        />

        <Plate g={WIDE_PLATE} />

        {/* the enquiry leaves the page */}
        <path
          className="sw__route"
          d="M301 364 C 301 402 274 428 236 444 C 224 449 212 452 202 454"
          pathLength="1"
        />

        {/* other agreed sources joining the same route */}
        <g className="sw__source" style={{ "--i": 0 } as React.CSSProperties}>
          <circle cx="52" cy="428" r="22" />
          {sourceIcon(MESSAGE_ICON, 52, 428, 21)}
        </g>
        <g className="sw__source" style={{ "--i": 1 } as React.CSSProperties}>
          <circle cx="52" cy="514" r="22" />
          {sourceIcon(CALL_ICON, 52, 514, 21)}
        </g>

        <path
          className="sw__feed"
          d="M74 430 C 118 434 158 442 186 450"
          pathLength="1"
          style={{ "--i": 0 } as React.CSSProperties}
        />
        <path
          className="sw__feed"
          d="M74 510 C 118 502 158 476 186 460"
          pathLength="1"
          style={{ "--i": 1 } as React.CSSProperties}
        />

        <circle className="sw__junction" cx="202" cy="454" r="7" />
        <path className="sw__spine" d="M202 454 H254" pathLength="1" />

        {/* the record: one visible place the enquiry now lives */}
        <g className="sw__card">
          <rect x="254" y="396" width="352" height="132" rx="16" />
        </g>

        <g className="sw__owner">
          <circle className="sw__owner-head" cx="300" cy="431" r="6" />
          <path className="sw__owner-body" d="M289 449 a 11 11 0 0 1 22 0" />
        </g>

        {/* the ring is the gesture: it closes around the record and holds it */}
        <path className="sw__ring sw__ring--a" d="M280 436 A 20 20 0 0 1 320 436" />
        <path className="sw__ring sw__ring--b" d="M320 436 A 20 20 0 0 1 280 436" />

        <rect
          className="sw__detail"
          x="334"
          y="424"
          width="110"
          height="11"
          rx="5"
          style={{ "--i": 0 } as React.CSSProperties}
        />
        <g className="sw__status" style={{ "--i": 1 } as React.CSSProperties}>
          <rect x="334" y="445" width="84" height="18" rx="9" />
          <circle className="sw__status-dot" cx="345" cy="454" r="3.5" />
        </g>

        <path className="sw__card-divider" d="M276 482 H584" />

        <rect
          className="sw__detail"
          x="276"
          y="494"
          width="200"
          height="7"
          rx="3.5"
          style={{ "--i": 2 } as React.CSSProperties}
        />
        <rect
          className="sw__detail"
          x="276"
          y="508"
          width="148"
          height="7"
          rx="3.5"
          style={{ "--i": 3 } as React.CSSProperties}
        />
        <g className="sw__next" style={{ "--i": 4 } as React.CSSProperties}>
          <rect x="494" y="492" width="90" height="24" rx="12" />
          <rect className="sw__next-bar" x="508" y="501" width="48" height="6" rx="3" />
        </g>

        {/* agreed, never automatic */}
        <path
          className="sw__branch"
          d="M330 528 V560"
          style={{ "--i": 0 } as React.CSSProperties}
        />
        <path
          className="sw__branch"
          d="M490 528 V560"
          style={{ "--i": 1 } as React.CSSProperties}
        />

        <g className="sw__glyph" style={{ "--i": 0 } as React.CSSProperties}>
          <circle cx="330" cy="581" r="21" />
          <path className="sw__glyph-mark" d="M330 570 V581 L338 586" />
        </g>
        <g className="sw__glyph" style={{ "--i": 1 } as React.CSSProperties}>
          <circle cx="490" cy="581" r="21" />
          <path className="sw__glyph-mark sw__glyph-mark--fill" d={star(490, 581)} />
        </g>
      </svg>

      {/* ---------- Narrow ---------- */}
      <svg
        className="sws-art__svg sws-art__svg--narrow"
        viewBox="0 0 340 620"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <radialGradient id="swBloomNarrow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--color-emerald)" stopOpacity="0.16" />
            <stop offset="60%" stopColor="var(--color-emerald)" stopOpacity="0.05" />
            <stop offset="100%" stopColor="var(--color-emerald)" stopOpacity="0" />
          </radialGradient>
        </defs>

        <ellipse
          className="sw__bloom"
          cx="170"
          cy="430"
          rx="185"
          ry="150"
          fill="url(#swBloomNarrow)"
        />

        <Plate g={NARROW_PLATE} />

        <path className="sw__route" d="M170 286 V340" pathLength="1" />

        <g className="sw__source" style={{ "--i": 0 } as React.CSSProperties}>
          <circle cx="38" cy="314" r="18" />
          {sourceIcon(MESSAGE_ICON, 38, 314, 18)}
        </g>
        <g className="sw__source" style={{ "--i": 1 } as React.CSSProperties}>
          <circle cx="302" cy="314" r="18" />
          {sourceIcon(CALL_ICON, 302, 314, 18)}
        </g>

        <path
          className="sw__feed"
          d="M56 322 C 92 334 130 340 158 344"
          pathLength="1"
          style={{ "--i": 0 } as React.CSSProperties}
        />
        <path
          className="sw__feed"
          d="M284 322 C 248 334 210 340 182 344"
          pathLength="1"
          style={{ "--i": 1 } as React.CSSProperties}
        />

        <circle className="sw__junction" cx="170" cy="344" r="5" />
        <path className="sw__spine" d="M170 344 V372" pathLength="1" />

        <g className="sw__card">
          <rect x="6" y="380" width="328" height="140" rx="14" />
        </g>

        <g className="sw__owner">
          <circle className="sw__owner-head" cx="52" cy="413" r="6" />
          <path className="sw__owner-body" d="M41 431 a 11 11 0 0 1 22 0" />
        </g>

        <path className="sw__ring sw__ring--a" d="M32 418 A 20 20 0 0 1 72 418" />
        <path className="sw__ring sw__ring--b" d="M72 418 A 20 20 0 0 1 32 418" />

        <rect
          className="sw__detail"
          x="86"
          y="406"
          width="120"
          height="11"
          rx="5"
          style={{ "--i": 0 } as React.CSSProperties}
        />
        <g className="sw__status" style={{ "--i": 1 } as React.CSSProperties}>
          <rect x="86" y="427" width="84" height="18" rx="9" />
          <circle className="sw__status-dot" cx="97" cy="436" r="3.5" />
        </g>

        <path className="sw__card-divider" d="M28 460 H312" />

        <rect
          className="sw__detail"
          x="28"
          y="472"
          width="180"
          height="7"
          rx="3.5"
          style={{ "--i": 2 } as React.CSSProperties}
        />
        <rect
          className="sw__detail"
          x="28"
          y="486"
          width="130"
          height="7"
          rx="3.5"
          style={{ "--i": 3 } as React.CSSProperties}
        />
        <g className="sw__next" style={{ "--i": 4 } as React.CSSProperties}>
          <rect x="216" y="468" width="96" height="24" rx="12" />
          <rect className="sw__next-bar" x="230" y="477" width="52" height="6" rx="3" />
        </g>

        <path
          className="sw__branch"
          d="M110 520 V566"
          style={{ "--i": 0 } as React.CSSProperties}
        />
        <path
          className="sw__branch"
          d="M230 520 V566"
          style={{ "--i": 1 } as React.CSSProperties}
        />

        <g className="sw__glyph" style={{ "--i": 0 } as React.CSSProperties}>
          <circle cx="110" cy="586" r="21" />
          <path className="sw__glyph-mark" d="M110 575 V586 L118 591" />
        </g>
        <g className="sw__glyph" style={{ "--i": 1 } as React.CSSProperties}>
          <circle cx="230" cy="586" r="21" />
          <path className="sw__glyph-mark sw__glyph-mark--fill" d={star(230, 586)} />
        </g>
      </svg>
    </div>
  );
}
