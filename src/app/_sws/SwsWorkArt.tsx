/**
 * Placeholder specimens for Built Work.
 *
 * Standing in for real screenshots because proof status is not confirmed at the
 * scale this section renders at: the available assets were anonymised for the
 * Homepage's smaller feature, and at this size a phone number, a trading name,
 * a town and identifiable faces are all legible again. Rather than block the
 * other fifteen sections, the section ships with drawn geometry that is clearly
 * marked as a placeholder.
 *
 * These are not grey boxes. Each one draws the structural decision its caption
 * describes — offer first, one page per treatment, two audiences separated at
 * the top, photography carrying the persuasion — so the section's composition,
 * rhythm and caption logic can all be judged now, and only the imagery has to
 * be swapped when clearance lands.
 */

export type WorkShape =
  | "offer-first"
  | "per-treatment"
  | "two-audience"
  | "photo-led"
  | "layered"
  | "plain"
  | "retail"
  | "narrow";

function Chrome() {
  return (
    <>
      <rect x="0.5" y="0.5" width="639" height="399" rx="5" className="wka__page" />
      <path d="M0 34 H640" className="wka__hair" />
      <circle cx="26" cy="17" r="5.5" className="wka__mark" />
      <rect x="40" y="13" width="42" height="8" rx="4" className="wka__ink" />
      <rect x="452" y="13" width="30" height="6" rx="3" className="wka__dim" />
      <rect x="492" y="13" width="26" height="6" rx="3" className="wka__dim" />
      <rect x="528" y="13" width="22" height="6" rx="3" className="wka__dim" />
      <rect x="562" y="8" width="56" height="18" rx="9" className="wka__chip" />
    </>
  );
}

export function WorkSpecimen({ shape }: { shape: WorkShape }) {
  return (
    <svg
      className="wka"
      viewBox={shape === "narrow" ? "0 0 300 400" : "0 0 640 400"}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`wka-photo-${shape}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#28455e" />
          <stop offset="100%" stopColor="#63a98d" />
        </linearGradient>
        <pattern id={`wka-hatch-${shape}`} width="8" height="8" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
          <rect width="8" height="8" className="wka__hatch-bg" />
          <path d="M0 0 V8" className="wka__hatch-line" />
        </pattern>
      </defs>

      {shape === "narrow" ? (
        <>
          <rect x="0.5" y="0.5" width="299" height="399" rx="16" className="wka__page" />
          <path d="M0 40 H300" className="wka__hair" />
          <circle cx="24" cy="20" r="5" className="wka__mark" />
          <rect x="36" y="16" width="38" height="7" rx="3.5" className="wka__ink" />
          <rect x="252" y="13" width="26" height="14" rx="4" className="wka__chip" />
          <rect x="20" y="58" width="200" height="13" rx="5" className="wka__ink" />
          <rect x="20" y="78" width="150" height="13" rx="5" className="wka__ink" />
          <rect x="20" y="104" width="260" height="86" rx="4" fill={`url(#wka-photo-${shape})`} />
          <rect x="20" y="204" width="120" height="26" rx="6" className="wka__cta" />
          <rect x="20" y="248" width="180" height="7" rx="3.5" className="wka__dim" />
          <rect x="20" y="262" width="220" height="7" rx="3.5" className="wka__dim" />
          <rect x="20" y="288" width="260" height="44" rx="4" className="wka__tile" />
          <rect x="20" y="342" width="260" height="44" rx="4" className="wka__tile" />
        </>
      ) : null}

      {shape !== "narrow" ? <Chrome /> : null}

      {shape === "offer-first" ? (
        <>
          <rect x="34" y="60" width="330" height="18" rx="7" className="wka__ink" />
          <rect x="34" y="86" width="248" height="18" rx="7" className="wka__ink" />
          <rect x="34" y="118" width="200" height="9" rx="4.5" className="wka__dim" />
          <rect x="34" y="146" width="150" height="34" rx="7" className="wka__cta" />
          <rect x="398" y="56" width="208" height="132" rx="5" fill={`url(#wka-photo-${shape})`} />
          <path d="M34 214 H606" className="wka__hair" />
          <rect x="34" y="234" width="86" height="8" rx="4" className="wka__accent" />
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <rect x={34 + i * 146} y="258" width="128" height="72" rx="5" className="wka__tile" />
              <rect x={48 + i * 146} y="274" width="62" height="7" rx="3.5" className="wka__ink" />
              <rect x={48 + i * 146} y="288" width="88" height="6" rx="3" className="wka__dim" />
              <rect x={48 + i * 146} y="302" width="70" height="6" rx="3" className="wka__dim" />
            </g>
          ))}
          <rect x="34" y="352" width="150" height="30" rx="7" className="wka__cta" />
        </>
      ) : null}

      {shape === "per-treatment" ? (
        <>
          <rect x="34" y="58" width="120" height="8" rx="4" className="wka__accent" />
          <rect x="34" y="78" width="292" height="17" rx="7" className="wka__ink" />
          <rect x="34" y="102" width="206" height="17" rx="7" className="wka__ink" />
          <rect x="368" y="56" width="238" height="140" rx="5" fill={`url(#wka-photo-${shape})`} />
          {["What it involves", "Who it suits", "First appointment"].map((_, i) => (
            <g key={i}>
              <path d={`M34 ${146 + i * 62} H330`} className="wka__hair" />
              <rect x="34" y={158 + i * 62} width="96" height="8" rx="4" className="wka__ink" />
              <rect x="34" y={176 + i * 62} width="270" height="6" rx="3" className="wka__dim" />
              <rect x="34" y={188 + i * 62} width="222" height="6" rx="3" className="wka__dim" />
            </g>
          ))}
          <rect x="368" y="216" width="238" height="106" rx="5" className="wka__tile" />
          <rect x="386" y="234" width="120" height="8" rx="4" className="wka__ink" />
          <rect x="386" y="252" width="200" height="6" rx="3" className="wka__dim" />
          <rect x="386" y="264" width="176" height="6" rx="3" className="wka__dim" />
          <rect x="386" y="286" width="128" height="24" rx="6" className="wka__cta" />
          <rect x="34" y="344" width="572" height="40" rx="5" className="wka__band" />
        </>
      ) : null}

      {shape === "two-audience" ? (
        <>
          <rect x="34" y="58" width="286" height="17" rx="7" className="wka__ink" />
          <rect x="34" y="82" width="196" height="17" rx="7" className="wka__ink" />
          <rect x="34" y="122" width="272" height="188" rx="6" className="wka__split" />
          <rect x="334" y="122" width="272" height="188" rx="6" className="wka__split" />
          <rect x="56" y="146" width="228" height="76" rx="4" fill={`url(#wka-photo-${shape})`} />
          <rect x="356" y="146" width="228" height="76" rx="4" className="wka__tile" />
          <rect x="56" y="238" width="96" height="9" rx="4.5" className="wka__ink" />
          <rect x="356" y="238" width="112" height="9" rx="4.5" className="wka__ink" />
          <rect x="56" y="258" width="200" height="6" rx="3" className="wka__dim" />
          <rect x="356" y="258" width="188" height="6" rx="3" className="wka__dim" />
          <rect x="56" y="278" width="112" height="22" rx="6" className="wka__cta" />
          <rect x="356" y="278" width="112" height="22" rx="6" className="wka__cta-alt" />
          <rect x="34" y="336" width="572" height="48" rx="5" className="wka__band" />
        </>
      ) : null}

      {shape === "photo-led" ? (
        <>
          <rect x="0" y="34" width="640" height="196" fill={`url(#wka-photo-${shape})`} />
          <rect x="34" y="140" width="264" height="18" rx="7" className="wka__on-photo" />
          <rect x="34" y="166" width="176" height="18" rx="7" className="wka__on-photo" />
          <rect x="34" y="256" width="368" height="8" rx="4" className="wka__ink" />
          <rect x="34" y="274" width="322" height="6" rx="3" className="wka__dim" />
          <rect x="34" y="288" width="290" height="6" rx="3" className="wka__dim" />
          <rect x="440" y="248" width="166" height="112" rx="6" className="wka__panel" />
          <rect x="458" y="266" width="86" height="8" rx="4" className="wka__accent" />
          <rect x="458" y="284" width="130" height="16" rx="4" className="wka__field" />
          <rect x="458" y="306" width="130" height="16" rx="4" className="wka__field" />
          <rect x="458" y="330" width="90" height="18" rx="5" className="wka__cta" />
          <rect x="34" y="318" width="120" height="42" rx="5" className="wka__tile" />
          <rect x="166" y="318" width="120" height="42" rx="5" className="wka__tile" />
          <rect x="298" y="318" width="120" height="42" rx="5" className="wka__tile" />
        </>
      ) : null}

      {shape === "layered" ? (
        <>
          <rect x="34" y="60" width="252" height="17" rx="7" className="wka__ink" />
          <rect x="34" y="84" width="182" height="17" rx="7" className="wka__ink" />
          <rect x="34" y="118" width="240" height="6" rx="3" className="wka__dim" />
          <rect x="34" y="130" width="206" height="6" rx="3" className="wka__dim" />
          <rect x="34" y="154" width="126" height="26" rx="6" className="wka__cta" />
          <rect x="176" y="154" width="112" height="26" rx="6" className="wka__ghost" />
          <rect x="330" y="56" width="276" height="168" rx="6" className="wka__panel" />
          <path d="M330 92 H606" className="wka__hair" />
          <rect x="346" y="70" width="52" height="8" rx="4" className="wka__accent" />
          {[0, 1, 2, 3, 4].map((i) => (
            <rect
              key={i}
              x="346"
              y={108 + i * 20}
              width={244 - (i % 3) * 40}
              height="7"
              rx="3.5"
              className="wka__dim"
            />
          ))}
          <path d="M34 214 H286" className="wka__hair" />
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect x="34" y={232 + i * 52} width="14" height="14" rx="4" className="wka__accent" />
              <rect x="60" y={234 + i * 52} width="120" height="7" rx="3.5" className="wka__ink" />
              <rect x="60" y={248 + i * 52} width="200" height="6" rx="3" className="wka__dim" />
            </g>
          ))}
          <rect x="330" y="246" width="276" height="138" rx="6" className="wka__tile" />
        </>
      ) : null}

      {shape === "plain" ? (
        <>
          <rect x="118" y="66" width="404" height="16" rx="7" className="wka__ink" />
          <rect x="178" y="90" width="284" height="16" rx="7" className="wka__ink" />
          <rect x="150" y="126" width="340" height="7" rx="3.5" className="wka__dim" />
          <rect x="176" y="142" width="288" height="7" rx="3.5" className="wka__dim" />
          <rect x="248" y="172" width="144" height="30" rx="7" className="wka__cta" />
          <path d="M118 228 H522" className="wka__hair" />
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect x={118 + i * 140} y="250" width="124" height="96" rx="5" className="wka__tile" />
              <rect x={134 + i * 140} y="268" width="66" height="8" rx="4" className="wka__ink" />
              <rect x={134 + i * 140} y="286" width="92" height="6" rx="3" className="wka__dim" />
              <rect x={134 + i * 140} y="298" width="76" height="6" rx="3" className="wka__dim" />
              <rect x={134 + i * 140} y="318" width="58" height="6" rx="3" className="wka__accent" />
            </g>
          ))}
          <rect x="196" y="366" width="248" height="8" rx="4" className="wka__dim" />
        </>
      ) : null}

      {shape === "retail" ? (
        <>
          <rect x="34" y="58" width="230" height="16" rx="7" className="wka__ink" />
          <rect x="34" y="94" width="360" height="122" rx="5" fill={`url(#wka-photo-${shape})`} />
          <rect x="410" y="94" width="196" height="122" rx="5" className="wka__panel" />
          <rect x="428" y="112" width="96" height="8" rx="4" className="wka__accent" />
          <rect x="428" y="132" width="160" height="16" rx="4" className="wka__field" />
          <rect x="428" y="154" width="160" height="16" rx="4" className="wka__field" />
          <rect x="428" y="180" width="112" height="20" rx="5" className="wka__cta" />
          <path d="M34 240 H606" className="wka__hair" />
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={i}>
              <rect x={34 + i * 118} y="262" width="102" height="76" rx="5" className="wka__tile" />
              <rect x={34 + i * 118} y="348" width="66" height="7" rx="3.5" className="wka__ink" />
              <rect x={34 + i * 118} y="362" width="44" height="6" rx="3" className="wka__accent" />
            </g>
          ))}
        </>
      ) : null}
    </svg>
  );
}
