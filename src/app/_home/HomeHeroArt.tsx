/**
 * One enquiry, drawn as a single continuous path.
 *
 * The website is not an object on the line — it is the passage where the line
 * widens and orders itself: scattered strands enter at every angle and leave
 * parallel and evenly spaced. Clarity is therefore drawn as a change in the
 * line's own behaviour, which is why this composition needs no frame, panel or
 * browser chrome. The website holds the greatest length and the greatest width
 * of the path; the connected half is thinner but materially different — a solid
 * object, a confirmation, a ring that closes — so it answers the second half of
 * the headline without claiming equal area.
 *
 * The recognisable gesture is the owner ring closing around the enquiry and
 * holding it. If that ever renders as a small circle changing opacity, the
 * artwork has failed and the whole thing is a glowing abstract line.
 *
 * Nothing continues automatically: the step after ownership is dashed, thinner
 * and unterminated. There is deliberately no proof-returns arc — a loop that
 * always closes would imply every engagement contains every service and that
 * reputation always comes back.
 *
 * No text. The 01–05 journey rail beneath the hero is this artwork's caption,
 * and a second miniature page to read is exactly what this replaced.
 *
 * Every animated path carries `pathLength="1"`, so one dash-offset keyframe
 * drives geometry of any length. Authored values are the settled state — path
 * complete, ring closed, enquiry held — so the still frame, a script-free
 * render and reduced motion all land on the frame that carries the argument.
 */

const ART_LABEL =
  "One enquiry travelling from scattered attention, through a website that brings it into order, to a truthful confirmation that it was sent and a named owner who takes responsibility for it, with any later step drawn as conditional rather than automatic";

/** Scattered at the left edge, parallel and evenly spaced by the band's exit. */
const STRANDS_WIDE = [
  "M8 40 C 96 74 168 168 250 190 L390 190",
  "M8 96 C 100 122 172 198 250 214 L390 214",
  "M8 152 C 104 172 176 226 250 238 L390 238",
  "M8 330 C 104 322 176 274 250 262 L390 262",
  "M8 400 C 100 380 172 302 250 286 L390 286",
  "M8 470 C 96 436 168 332 250 310 L390 310",
];

const CONVERGE_WIDE = [
  "M390 190 C 426 196 446 226 470 250",
  "M390 214 C 428 219 450 236 470 250",
  "M390 238 C 430 241 452 247 470 250",
  "M390 262 C 430 259 452 253 470 250",
  "M390 286 C 428 281 450 264 470 250",
  "M390 310 C 426 304 446 274 470 250",
];

const STRANDS_NARROW = [
  "M20 6 C 36 60 84 122 100 150 L100 232",
  "M62 6 C 72 62 112 126 120 150 L120 232",
  "M104 6 C 108 64 134 128 140 150 L140 232",
  "M196 6 C 192 64 166 128 160 150 L160 232",
  "M238 6 C 228 62 188 126 180 150 L180 232",
  "M280 6 C 264 60 216 122 200 150 L200 232",
];

const CONVERGE_NARROW = [
  "M100 232 C 112 250 132 268 150 282",
  "M120 232 C 128 250 140 268 150 282",
  "M140 232 C 144 250 148 268 150 282",
  "M160 232 C 156 250 152 268 150 282",
  "M180 232 C 172 250 160 268 150 282",
  "M200 232 C 188 250 168 268 150 282",
];

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
          <radialGradient id="haBand" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--surface-navy-raised)" stopOpacity="0.95" />
            <stop offset="58%" stopColor="var(--surface-navy-raised)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="var(--surface-navy-raised)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* the website: a widening of the path, not a container around it */}
        <ellipse className="ha__band" cx="268" cy="250" rx="215" ry="145" fill="url(#haBand)" />

        {STRANDS_WIDE.map((d, i) => (
          <path
            key={d}
            className="ha__strand"
            d={d}
            pathLength="1"
            style={{ "--i": i } as React.CSSProperties}
          />
        ))}

        {CONVERGE_WIDE.map((d) => (
          <path key={d} className="ha__converge" d={d} pathLength="1" />
        ))}

        {/* the route the enquiry takes, drawn before it travels */}
        <path
          className="ha__route"
          d="M470 250 C 508 300 528 355 548 420"
          pathLength="1"
        />

        {/* truthful confirmation: it marks that the message was sent, and stays */}
        <path className="ha__tick" d="M509 294 l6 6 L528 284" />

        {/* the owner: two arcs that close around the enquiry and hold it */}
        <path className="ha__ring-arc ha__ring-arc--a" d="M506 420 A 42 42 0 0 1 590 420" />
        <path className="ha__ring-arc ha__ring-arc--b" d="M590 420 A 42 42 0 0 1 506 420" />

        {/* agreed, never automatic: thinner, dashed, and terminating in nothing */}
        <g className="ha__continue-shell">
          <path className="ha__continue" d="M548 462 C 548 492 551 508 557 528" />
        </g>

        {/* the enquiry, with its context attached — the only filled body here */}
        <g className="ha__packet ha__packet--wide">
          <path className="ha__context" d="M512 414 H527" />
          <path className="ha__context" d="M512 426 H527" />
          <rect className="ha__packet-body" x="531" y="408.5" width="34" height="23" rx="4" />
          <path className="ha__packet-rule" d="M538 416 H558" />
          <path className="ha__packet-rule" d="M538 424 H552" />
        </g>
      </svg>

      {/* ---------- Narrow ---------- */}
      <svg
        className="hero-art__svg hero-art__svg--narrow"
        viewBox="0 0 300 470"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <radialGradient id="haBandN" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--surface-navy-raised)" stopOpacity="0.95" />
            <stop offset="58%" stopColor="var(--surface-navy-raised)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="var(--surface-navy-raised)" stopOpacity="0" />
          </radialGradient>
        </defs>

        <ellipse className="ha__band" cx="150" cy="140" rx="155" ry="128" fill="url(#haBandN)" />

        {STRANDS_NARROW.map((d, i) => (
          <path
            key={d}
            className="ha__strand"
            d={d}
            pathLength="1"
            style={{ "--i": i } as React.CSSProperties}
          />
        ))}

        {CONVERGE_NARROW.map((d) => (
          <path key={d} className="ha__converge" d={d} pathLength="1" />
        ))}

        <path className="ha__route" d="M150 282 L150 386" pathLength="1" />

        <path className="ha__tick" d="M178 324 l5 5 L193 316" />

        <path className="ha__ring-arc ha__ring-arc--a" d="M114 386 A 36 36 0 0 1 186 386" />
        <path className="ha__ring-arc ha__ring-arc--b" d="M186 386 A 36 36 0 0 1 114 386" />

        <g className="ha__continue-shell ha__continue-shell--narrow">
          <path className="ha__continue" d="M150 422 L150 460" />
        </g>

        <g className="ha__packet ha__packet--narrow">
          <path className="ha__context" d="M118 380 H131" />
          <path className="ha__context" d="M118 392 H131" />
          <rect className="ha__packet-body" x="133" y="374.5" width="34" height="23" rx="4" />
          <path className="ha__packet-rule" d="M140 382 H160" />
          <path className="ha__packet-rule" d="M140 390 H154" />
        </g>
      </svg>
    </div>
  );
}
