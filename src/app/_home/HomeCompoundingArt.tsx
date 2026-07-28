/**
 * The website that keeps gaining — left-hand artwork for Compounding.
 *
 * SVG because it is genuinely graphical: fixed geometry, scales cleanly, and
 * the scenes are cheap to drive from one CSS timeline. The card copy beside it
 * is real HTML, because text in SVG cannot wrap, ignores the visitor's font
 * size and fights every copy change.
 *
 * Drawn as a site somebody actually wrote: real navigation, a real headline, a
 * real action, real service labels. Over one loop it visibly gains a review, a
 * local listing, a refinement and its channels — each arriving in turn and
 * staying until the loop restarts. Decorative throughout; the cards next to it
 * carry the meaning as text.
 *
 * Two things stay deliberately abstract, because drawing them would be an
 * invention rather than an illustration: the logo mark and the address bar.
 *
 * Each gain is described by what happened, never by a fabricated result: the
 * review chip says a review arrived and went on the page, not what anybody
 * wrote or what the rating became. There is no reviewer, no quote, no count and
 * no measured outcome anywhere in this artwork.
 */

const NAV = [
  { label: "Services", x: 186 },
  { label: "About", x: 240 },
  { label: "Contact", x: 282 },
] as const;

const CARDS = [
  { x: 34, title: "Consultations", note: "Book or rebook" },
  { x: 162, title: "Ongoing care", note: "After a first visit" },
  { x: 290, title: "Fees", note: "What it costs" },
] as const;

const BODY = [
  "Everything a first visit involves, in plain language,",
  "with the next step in the same place.",
] as const;

export function HomeCompoundingArt() {
  return (
    <div className="cpa" aria-hidden="true">
      <svg className="cpa__svg" viewBox="0 0 440 540" fill="none" focusable="false">
        <defs>
          <linearGradient id="cpaPhoto" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#20415e" />
            <stop offset="55%" stopColor="#2f6d70" />
            <stop offset="100%" stopColor="#2fb98c" />
          </linearGradient>
          <linearGradient id="cpaSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <clipPath id="cpaPhotoClip">
            <rect x="34" y="150" width="372" height="132" rx="10" />
          </clipPath>
        </defs>

        {/* ── the browser ── */}
        <rect x="14" y="14" width="412" height="466" rx="16" className="cpa__window" />
        <path d="M14 62 H426" className="cpa__hair" />
        <circle cx="38" cy="38" r="4.5" className="cpa__dot" />
        <circle cx="54" cy="38" r="4.5" className="cpa__dot" />
        <circle cx="70" cy="38" r="4.5" className="cpa__dot" />
        <rect x="92" y="28" width="248" height="20" rx="10" className="cpa__urlbar" />
        <circle cx="106" cy="38" r="3.2" className="cpa__lock" />
        <rect x="116" y="34" width="86" height="7" rx="3.5" className="cpa__url" />

        {/* ── the site's own header ── */}
        <g className="cpa__siteheader">
          <circle cx="46" cy="90" r="9" className="cpa__logo" />
          <rect x="60" y="86" width="46" height="8" rx="4" className="cpa__ink" />
          {NAV.map(({ label, x }) => (
            <text key={label} x={x} y="94" className="cpa__nav-label">
              {label}
            </text>
          ))}
          <rect x="330" y="80" width="76" height="21" rx="10.5" className="cpa__navcta" />
          <text x="368" y="94" textAnchor="middle" className="cpa__navcta-label">
            Get in touch
          </text>
          <path d="M14 116 H426" className="cpa__hair" />
        </g>

        {/* ── hero ── */}
        <text x="34" y="140" className="cpa__display">
          Care you can plan around.
        </text>

        {/* an image slot, deliberately abstract — a drawn photograph would be a
            claim about a place and the people in it */}
        <g clipPath="url(#cpaPhotoClip)">
          <rect x="34" y="150" width="372" height="132" fill="url(#cpaPhoto)" />
          <rect x="34" y="150" width="372" height="132" fill="url(#cpaSky)" />
          <circle cx="342" cy="186" r="20" className="cpa__sun" />
          <path d="M34 258 q56 -34 108 -8 t104 -14 q60 -18 160 12 v34 H34 Z" className="cpa__hill" />
          <path d="M34 274 q70 -20 132 2 t118 -6 q58 -10 122 10 v22 H34 Z" className="cpa__hill2" />
        </g>

        {BODY.map((line, i) => (
          <text key={line} x="34" y={302 + i * 18} className="cpa__body">
            {line}
          </text>
        ))}

        <rect x="34" y="342" width="140" height="34" rx="8" className="cpa__cta" />
        <text x="104" y="364" className="cpa__cta-label" textAnchor="middle">
          Book a consultation
        </text>

        {/* three services */}
        <g className="cpa__cards">
          {CARDS.map(({ x }) => (
            <rect key={x} x={x} y="396" width="116" height="60" rx="9" />
          ))}
        </g>
        {CARDS.map(({ x, title, note }) => (
          <g key={title}>
            <text x={x + 14} y="420" className="cpa__card-title">
              {title}
            </text>
            <text x={x + 14} y="436" className="cpa__card-note">
              {note}
            </text>
          </g>
        ))}

        {/* ══ what it gains, arriving one at a time and staying ══ */}

        {/* 1 · a review arrives and goes on the page — what happened, not what it said */}
        <g className="cpa__gain" style={{ "--s": 0 } as React.CSSProperties}>
          <rect x="238" y="176" width="180" height="56" rx="10" className="cpa__pop" />
          {[0, 1, 2, 3, 4].map((i) => (
            <path
              key={i}
              d="M0 -4.6 L1.4 -1.4 L4.8 -1.1 L2.2 1.2 L3 4.6 L0 2.8 L-3 4.6 L-2.2 1.2 L-4.8 -1.1 L-1.4 -1.4 Z"
              transform={`translate(${256 + i * 13} 197)`}
              className="cpa__star"
            />
          ))}
          <text x="330" y="201" className="cpa__pop-label">
            New review
          </text>
          <text x="256" y="219" className="cpa__pop-note">
            Added to your page
          </text>
        </g>

        {/* 2 · the local listing */}
        <g className="cpa__gain" style={{ "--s": 1 } as React.CSSProperties}>
          <rect x="18" y="196" width="150" height="52" rx="10" className="cpa__pop" />
          <circle cx="44" cy="222" r="13" className="cpa__pin-halo" />
          <path
            d="M44 215 c4 0 6.6 2.9 6.6 6.5 0 4.5 -4.7 8.3 -5.9 9.1 a1 1 0 0 1 -1.1 0 c-1.2 -0.8 -5.9 -4.6 -5.9 -9.1 0 -3.6 2.6 -6.5 6.3 -6.5 z"
            className="cpa__pin"
          />
          <circle cx="44" cy="221.5" r="2" className="cpa__pin-dot" />
          <text x="64" y="219" className="cpa__pop-label">
            Found nearby
          </text>
          <text x="64" y="234" className="cpa__pop-note">
            Matches the site
          </text>
        </g>

        {/* 3 · a refinement kept */}
        <g className="cpa__gain" style={{ "--s": 2 } as React.CSSProperties}>
          <rect x="252" y="330" width="166" height="46" rx="10" className="cpa__pop" />
          <circle cx="276" cy="353" r="11" className="cpa__tick-halo" />
          <path d="M271 353 l3.4 3.4 L282 349" className="cpa__tick" />
          <text x="294" y="350" className="cpa__pop-label">
            Improved
          </text>
          <text x="294" y="364" className="cpa__pop-note">
            One more fix, kept
          </text>
        </g>

        {/* 4 · every channel arriving at a stronger destination */}
        <g className="cpa__gain" style={{ "--s": 3 } as React.CSSProperties}>
          <rect x="16" y="498" width="408" height="34" rx="10" className="cpa__rail" />
          <circle cx="44" cy="515" r="4" className="cpa__rail-dot" />
          <text x="58" y="519" className="cpa__rail-label">
            Search
          </text>
          <circle cx="152" cy="515" r="4" className="cpa__rail-dot" />
          <text x="166" y="519" className="cpa__rail-label">
            Referrals
          </text>
          <circle cx="272" cy="515" r="4" className="cpa__rail-dot" />
          <text x="286" y="519" className="cpa__rail-label">
            Advertising
          </text>
          <path d="M370 515 h34" className="cpa__rail-arrow" />
          <path d="M398 510 l6 5 l-6 5" className="cpa__rail-arrow" />
        </g>
      </svg>
    </div>
  );
}
