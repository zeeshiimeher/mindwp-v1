/**
 * One small drawn artefact per arrival moment.
 *
 * Six generic icons would make six interchangeable cards — the exact failure
 * DESIGN.md names. Each of these instead draws the surface the visitor actually
 * arrived from, so the tiles carry their own specificity before a word is read.
 * All are decorative: the card's heading and copy say the same thing.
 */

const BOX = "0 0 96 60";

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg className="att__art" viewBox={BOX} fill="none" aria-hidden="true" focusable="false">
      {children}
    </svg>
  );
}

/** A search field with the query already typed. */
export function ArtExactSearch() {
  return (
    <Frame>
      <rect x="4" y="14" width="88" height="20" rx="10" className="att__art-field" />
      <circle cx="18" cy="24" r="4.5" className="att__art-stroke" />
      <path d="M21.4 27.4 L25 31" className="att__art-stroke" />
      <rect x="31" y="21" width="34" height="5" rx="2.5" className="att__art-ink" />
      <rect x="68" y="19" width="1.5" height="10" className="att__art-caret" />
      <rect x="4" y="42" width="52" height="4" rx="2" className="att__art-dim" />
      <rect x="4" y="51" width="38" height="4" rx="2" className="att__art-dim" />
    </Frame>
  );
}

/** A pin standing on a map grid. */
export function ArtLocalSearch() {
  return (
    <Frame>
      <rect x="4" y="6" width="88" height="48" rx="6" className="att__art-panel" />
      <path d="M4 22 H92 M4 38 H92 M28 6 V54 M56 6 V54 M78 6 V54" className="att__art-grid" />
      <circle cx="48" cy="28" r="12" className="att__art-halo" />
      <path
        d="M48 21 c4.2 0 7 3 7 6.8 0 4.7 -5 8.7 -6.2 9.6 a1 1 0 0 1 -1.1 0 c-1.2 -0.9 -6.2 -4.9 -6.2 -9.6 0 -3.8 2.8 -6.8 6.5 -6.8 z"
        className="att__art-stroke"
      />
      <circle cx="48" cy="28" r="2.2" className="att__art-fill" />
    </Frame>
  );
}

/** A message passed from one person to another. */
export function ArtReferral() {
  return (
    <Frame>
      <path
        d="M8 10 h54 a6 6 0 0 1 6 6 v18 a6 6 0 0 1 -6 6 h-38 l-10 9 v-9 a6 6 0 0 1 -6 -6 v-18 a6 6 0 0 1 6 -6 z"
        className="att__art-panel"
      />
      <rect x="18" y="20" width="34" height="4" rx="2" className="att__art-ink" />
      <rect x="18" y="29" width="24" height="4" rx="2" className="att__art-dim" />
      <circle cx="80" cy="40" r="9" className="att__art-halo" />
      <circle cx="80" cy="37" r="3" className="att__art-stroke" />
      <path d="M74.5 46 c1.2 -3.4 9.8 -3.4 11 0" className="att__art-stroke" />
    </Frame>
  );
}

/** A paid placement, and the cursor that acted on it. */
export function ArtPaidClick() {
  return (
    <Frame>
      <rect x="4" y="6" width="88" height="34" rx="5" className="att__art-panel" />
      <rect x="12" y="13" width="16" height="7" rx="3.5" className="att__art-tag" />
      <rect x="12" y="26" width="46" height="4" rx="2" className="att__art-ink" />
      <rect x="66" y="13" width="18" height="17" rx="3" className="att__art-block" />
      <path d="M56 36 L56 51 L60 47.4 L63 53 L66 51.6 L63 46 L68 45.6 Z" className="att__art-cursor" />
    </Frame>
  );
}

/** Proof, checked quietly before contact. */
export function ArtSecondLook() {
  return (
    <Frame>
      <rect x="4" y="8" width="88" height="44" rx="5" className="att__art-panel" />
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          d="M0 -5.4 L1.6 -1.7 L5.6 -1.3 L2.6 1.4 L3.5 5.4 L0 3.3 L-3.5 5.4 L-2.6 1.4 L-5.6 -1.3 L-1.6 -1.7 Z"
          transform={`translate(${17 + i * 13} 22)`}
          className={i < 4 ? "att__art-fill" : "att__art-dim"}
        />
      ))}
      <rect x="14" y="34" width="52" height="4" rx="2" className="att__art-ink" />
      <rect x="14" y="42" width="36" height="4" rx="2" className="att__art-dim" />
    </Frame>
  );
}

/** The name typed straight into the address bar. */
export function ArtRemembered() {
  return (
    <Frame>
      <rect x="4" y="6" width="88" height="48" rx="5" className="att__art-panel" />
      <path d="M4 22 H92" className="att__art-grid" />
      <circle cx="12" cy="14" r="2" className="att__art-dim-fill" />
      <circle cx="19" cy="14" r="2" className="att__art-dim-fill" />
      <circle cx="26" cy="14" r="2" className="att__art-dim-fill" />
      <rect x="34" y="10" width="52" height="9" rx="4.5" className="att__art-field" />
      <rect x="39" y="13" width="26" height="3.5" rx="1.75" className="att__art-ink" />
      <rect x="67" y="12" width="1.4" height="5.5" className="att__art-caret" />
      <rect x="14" y="32" width="42" height="4" rx="2" className="att__art-dim" />
      <rect x="14" y="41" width="60" height="4" rx="2" className="att__art-dim" />
    </Frame>
  );
}
