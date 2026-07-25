/**
 * The working surface — Smart Website Systems hero artwork.
 *
 * A lightly realistic scene rather than a cluster of floating interface cards:
 * a laptop showing a believable service-business page, the planning and content
 * material that produced it, printed proof, a phone carrying the
 * acknowledgement, and a hand entering the frame. Every object has an edge, a
 * contact shadow and a stacking order, so the composition reads as things on a
 * surface.
 *
 * One emerald thread runs from the enquiry on screen to the phone — the whole
 * proposition in a single line: the website and what happens next are one thing.
 *
 * Two authored compositions rather than one scaled drawing. The wide scene is
 * landscape; the narrow scene is recomposed portrait so the same beats survive
 * at 400px. Decorative throughout — every word inside the scene is a picture of
 * a word, and the heading, lede and rail beside it carry the real meaning.
 */

function SceneDefs({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={`${id}-photo`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#1d3c58" />
        <stop offset="52%" stopColor="#2d6a70" />
        <stop offset="100%" stopColor="#3fbf94" />
      </linearGradient>
      <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.26" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
      </linearGradient>
      <linearGradient id={`${id}-proof`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#2a4c63" />
        <stop offset="100%" stopColor="#59a88f" />
      </linearGradient>
    </defs>
  );
}

/* ------------------------------------------------------------------ wide */

function WideScene() {
  return (
    <svg className="hsc__svg hsc__svg--wide" viewBox="0 0 660 520" fill="none" focusable="false">
      <SceneDefs id="hw" />
      <clipPath id="hw-photo-clip">
        <rect x="68" y="106" width="308" height="78" rx="5" />
      </clipPath>
      <clipPath id="hw-proof-clip">
        <rect x="360" y="336" width="130" height="40" rx="3" />
      </clipPath>

      {/* ── the laptop ── */}
      <g className="hsc__device">
        <path d="M26 262 H418 L400 284 H44 Z" className="hsc__base" />
        <rect x="196" y="266" width="52" height="7" rx="3.5" className="hsc__trackpad" />
        <rect x="44" y="26" width="356" height="236" rx="9" className="hsc__bezel" />
        <rect x="52" y="34" width="340" height="220" rx="4" className="hsc__screen" />
      </g>

      <g className="hsc__page">
        {/* the site's own header */}
        <circle cx="68" cy="52" r="6.5" className="hsc__logo" />
        <rect x="80" y="48" width="38" height="7" rx="3.5" className="hsc__ink" />
        <rect x="236" y="49" width="26" height="5" rx="2.5" className="hsc__ln-dim" />
        <rect x="272" y="49" width="22" height="5" rx="2.5" className="hsc__ln-dim" />
        <rect x="304" y="49" width="18" height="5" rx="2.5" className="hsc__ln-dim" />
        <rect x="332" y="44" width="48" height="16" rx="8" className="hsc__navcta" />
        <path d="M52 70 H392" className="hsc__hair" />

        {/* what the page actually says */}
        <text x="68" y="96" className="hsc__display">
          Straightforward care, clearly explained.
        </text>

        <g clipPath="url(#hw-photo-clip)">
          <rect x="68" y="106" width="308" height="78" fill="url(#hw-photo)" />
          <rect x="68" y="106" width="308" height="78" fill="url(#hw-sky)" />
          <circle cx="330" cy="128" r="13" className="hsc__sun" />
          <path d="M68 158 q46 -26 92 -8 t88 -12 q52 -14 128 10 v24 H68 Z" className="hsc__hill" />
          <path d="M68 170 q58 -16 110 2 t100 -6 q48 -8 98 8 v10 H68 Z" className="hsc__hill2" />
        </g>

        <rect x="68" y="194" width="156" height="6" rx="3" className="hsc__ln" />
        <rect x="68" y="206" width="124" height="6" rx="3" className="hsc__ln" />
        <rect x="68" y="220" width="104" height="24" rx="5" className="hsc__cta" />
        <text x="120" y="235" className="hsc__cta-label" textAnchor="middle">
          Book a consultation
        </text>

        {/* the enquiry, where the thread begins */}
        <rect x="248" y="184" width="128" height="56" rx="5" className="hsc__enquiry" />
        <rect x="258" y="192" width="42" height="5" rx="2.5" className="hsc__ln-dim" />
        <rect x="258" y="202" width="108" height="12" rx="3" className="hsc__field" />
        <rect x="262" y="206" width="72" height="4" rx="2" className="hsc__fieldfill" />
        <rect x="258" y="220" width="108" height="13" rx="4" className="hsc__submit" />
      </g>

      {/* ── the thread: the website, and what happens next ── */}
      <path
        d="M312 233 C336 248 390 250 424 262 C458 274 486 288 508 306 C516 313 520 320 522 330"
        className="hsc__thread"
      />

      {/* ── the page plan ── */}
      <g className="hsc__paper" transform="rotate(-3.5 113 382)">
        <rect x="30" y="306" width="166" height="152" rx="3" className="hsc__sheet" />
        <rect x="46" y="322" width="134" height="10" rx="2" className="hsc__wire" />
        <rect x="46" y="338" width="134" height="34" rx="2" className="hsc__wire" />
        <rect x="46" y="378" width="41" height="26" rx="2" className="hsc__wire" />
        <rect x="93" y="378" width="41" height="26" rx="2" className="hsc__wire" />
        <rect x="139" y="378" width="41" height="26" rx="2" className="hsc__wire" />
        <rect x="46" y="410" width="134" height="8" rx="2" className="hsc__wire" />
        <ellipse cx="113" cy="355" rx="78" ry="26" className="hsc__pencil-ring" />
        <path d="M46 428 h22 M46 437 h34" className="hsc__pencil" />
        <text x="46" y="450" className="hsc__caption">
          Page plan
        </text>
      </g>

      {/* ── the service copy ── */}
      <g className="hsc__paper" transform="rotate(2 268 406)">
        <rect x="186" y="336" width="164" height="140" rx="3" className="hsc__sheet" />
        <rect x="200" y="354" width="128" height="5" rx="2.5" className="hsc__ln" />
        <rect x="200" y="367" width="116" height="5" rx="2.5" className="hsc__ln" />
        <rect x="198" y="376" width="98" height="13" rx="2" className="hsc__mark" />
        <rect x="200" y="380" width="92" height="5" rx="2.5" className="hsc__ln" />
        <rect x="200" y="393" width="124" height="5" rx="2.5" className="hsc__ln" />
        <rect x="200" y="406" width="108" height="5" rx="2.5" className="hsc__ln" />
        <rect x="200" y="419" width="130" height="5" rx="2.5" className="hsc__ln" />
        <rect x="200" y="432" width="88" height="5" rx="2.5" className="hsc__ln" />
        <text x="200" y="462" className="hsc__caption">
          Service copy
        </text>
      </g>

      {/* ── printed proof ── */}
      <g className="hsc__card" transform="rotate(-2.5 425 378)">
        <rect x="350" y="326" width="150" height="104" rx="4" className="hsc__sheet" />
        <g clipPath="url(#hw-proof-clip)">
          <rect x="360" y="336" width="130" height="40" fill="url(#hw-proof)" />
          <path d="M360 366 q30 -18 58 -4 t44 -8 q18 -6 28 4 v18 H360 Z" className="hsc__hill2" />
        </g>
        {[0, 1, 2, 3, 4].map((i) => (
          <path
            key={i}
            d="M0 -5 L1.5 -1.6 L5.2 -1.2 L2.4 1.3 L3.2 5 L0 3.1 L-3.2 5 L-2.4 1.3 L-5.2 -1.2 L-1.5 -1.6 Z"
            transform={`translate(${370 + i * 14} 392)`}
            className="hsc__star"
          />
        ))}
        <rect x="364" y="404" width="104" height="5" rx="2.5" className="hsc__ln" />
        <rect x="364" y="414" width="76" height="5" rx="2.5" className="hsc__ln-dim" />
      </g>

      {/* ── the phone, where the acknowledgement lands ── */}
      <g className="hsc__device">
        <rect x="520" y="286" width="92" height="180" rx="13" className="hsc__phone" />
        <rect x="527" y="298" width="78" height="156" rx="8" className="hsc__phone-screen" />
      </g>
      <rect x="553" y="304" width="26" height="3" rx="1.5" className="hsc__ln-dim" />
      <rect x="536" y="316" width="20" height="3" rx="1.5" className="hsc__ln-dim" />
      <g className="hsc__ack">
        <rect x="534" y="330" width="64" height="52" rx="5" className="hsc__ack-card" />
        <circle cx="548" cy="344" r="8" className="hsc__ack-halo" />
        <path d="M544.5 344 l2.5 2.5 l5 -5.5" className="hsc__tick" />
        <rect x="562" y="341" width="28" height="4" rx="2" className="hsc__ln" />
        <rect x="542" y="358" width="48" height="4" rx="2" className="hsc__ln-dim" />
        <rect x="542" y="367" width="36" height="4" rx="2" className="hsc__ln-dim" />
      </g>
      <rect x="550" y="446" width="32" height="3" rx="1.5" className="hsc__ln-dim" />

      {/* ── the hand: the enquiry reaches a person ── */}
      <g className="hsc__hand">
        <path d="M534 520 L532 472 Q532 452 552 447 L624 430 Q644 426 650 446 L660 520 Z" />
        <path d="M556 450 L532 396" className="hsc__finger" />
        <path d="M582 443 L566 386" className="hsc__finger" />
        <path d="M607 437 L598 388" className="hsc__finger" />
        <path d="M630 435 L628 398" className="hsc__finger hsc__finger--sm" />
        <path d="M542 472 L502 468" className="hsc__thumb" />
      </g>
    </svg>
  );
}

/* ---------------------------------------------------------------- narrow */

function NarrowScene() {
  return (
    <svg className="hsc__svg hsc__svg--narrow" viewBox="0 0 400 620" fill="none" focusable="false">
      <SceneDefs id="hn" />
      <clipPath id="hn-photo-clip">
        <rect x="36" y="84" width="250" height="60" rx="4" />
      </clipPath>
      <clipPath id="hn-proof-clip">
        <rect x="206" y="258" width="156" height="42" rx="3" />
      </clipPath>

      {/* ── the laptop ── */}
      <g className="hsc__device">
        <path d="M4 208 H318 L304 226 H18 Z" className="hsc__base" />
        <rect x="140" y="211" width="42" height="6" rx="3" className="hsc__trackpad" />
        <rect x="16" y="16" width="290" height="192" rx="8" className="hsc__bezel" />
        <rect x="23" y="23" width="276" height="178" rx="4" className="hsc__screen" />
      </g>

      <g className="hsc__page">
        <circle cx="37" cy="38" r="5.5" className="hsc__logo" />
        <rect x="47" y="34.5" width="32" height="6" rx="3" className="hsc__ink" />
        <rect x="176" y="35" width="22" height="4.5" rx="2.25" className="hsc__ln-dim" />
        <rect x="204" y="35" width="18" height="4.5" rx="2.25" className="hsc__ln-dim" />
        <rect x="228" y="35" width="15" height="4.5" rx="2.25" className="hsc__ln-dim" />
        <rect x="252" y="31" width="40" height="13" rx="6.5" className="hsc__navcta" />
        <path d="M23 54 H299" className="hsc__hair" />

        <text x="36" y="76" className="hsc__display hsc__display--sm">
          Straightforward care, clearly explained.
        </text>

        <g clipPath="url(#hn-photo-clip)">
          <rect x="36" y="84" width="250" height="60" fill="url(#hn-photo)" />
          <rect x="36" y="84" width="250" height="60" fill="url(#hn-sky)" />
          <circle cx="246" cy="102" r="10" className="hsc__sun" />
          <path d="M36 124 q38 -20 74 -6 t72 -10 q42 -12 104 8 v18 H36 Z" className="hsc__hill" />
          <path d="M36 134 q46 -12 88 2 t80 -5 q38 -6 82 6 v7 H36 Z" className="hsc__hill2" />
        </g>

        <rect x="36" y="154" width="124" height="5" rx="2.5" className="hsc__ln" />
        <rect x="36" y="164" width="98" height="5" rx="2.5" className="hsc__ln" />
        <rect x="36" y="176" width="88" height="19" rx="4" className="hsc__cta" />
        <text x="80" y="189" className="hsc__cta-label hsc__cta-label--sm" textAnchor="middle">
          Book a consultation
        </text>

        <rect x="176" y="150" width="112" height="48" rx="4" className="hsc__enquiry" />
        <rect x="184" y="157" width="36" height="4.5" rx="2.25" className="hsc__ln-dim" />
        <rect x="184" y="165" width="96" height="11" rx="3" className="hsc__field" />
        <rect x="187" y="168.5" width="64" height="4" rx="2" className="hsc__fieldfill" />
        <rect x="184" y="180" width="96" height="12" rx="3.5" className="hsc__submit" />
      </g>

      {/* ── the thread ── */}
      <path
        d="M232 192 C226 210 190 214 180 236 C172 256 176 300 180 340 C184 368 220 396 256 416"
        className="hsc__thread"
      />

      {/* ── printed proof ── */}
      <g className="hsc__card" transform="rotate(-2 293 292)">
        <rect x="196" y="238" width="194" height="108" rx="4" className="hsc__sheet" />
        <g clipPath="url(#hn-proof-clip)">
          <rect x="206" y="258" width="156" height="42" fill="url(#hn-proof)" />
          <path d="M206 288 q36 -18 70 -4 t52 -8 q22 -6 34 4 v20 H206 Z" className="hsc__hill2" />
        </g>
        {[0, 1, 2, 3, 4].map((i) => (
          <path
            key={i}
            d="M0 -5 L1.5 -1.6 L5.2 -1.2 L2.4 1.3 L3.2 5 L0 3.1 L-3.2 5 L-2.4 1.3 L-5.2 -1.2 L-1.5 -1.6 Z"
            transform={`translate(${216 + i * 14} 316)`}
            className="hsc__star"
          />
        ))}
        <rect x="210" y="328" width="124" height="5" rx="2.5" className="hsc__ln" />
        <rect x="210" y="338" width="88" height="5" rx="2.5" className="hsc__ln-dim" />
      </g>

      {/* ── the page plan ── */}
      <g className="hsc__paper" transform="rotate(-3 85 320)">
        <rect x="6" y="246" width="158" height="148" rx="3" className="hsc__sheet" />
        <rect x="20" y="262" width="130" height="9" rx="2" className="hsc__wire" />
        <rect x="20" y="277" width="130" height="32" rx="2" className="hsc__wire" />
        <rect x="20" y="315" width="40" height="24" rx="2" className="hsc__wire" />
        <rect x="65" y="315" width="40" height="24" rx="2" className="hsc__wire" />
        <rect x="110" y="315" width="40" height="24" rx="2" className="hsc__wire" />
        <rect x="20" y="345" width="130" height="7" rx="2" className="hsc__wire" />
        <ellipse cx="85" cy="293" rx="74" ry="24" className="hsc__pencil-ring" />
        <path d="M20 362 h20 M20 371 h32" className="hsc__pencil" />
        <text x="20" y="386" className="hsc__caption">
          Page plan
        </text>
      </g>

      {/* ── the service copy ── */}
      <g className="hsc__paper" transform="rotate(2 126 470)">
        <rect x="30" y="402" width="192" height="136" rx="3" className="hsc__sheet" />
        <rect x="44" y="420" width="150" height="5" rx="2.5" className="hsc__ln" />
        <rect x="44" y="433" width="132" height="5" rx="2.5" className="hsc__ln" />
        <rect x="42" y="442" width="112" height="13" rx="2" className="hsc__mark" />
        <rect x="44" y="446" width="106" height="5" rx="2.5" className="hsc__ln" />
        <rect x="44" y="459" width="142" height="5" rx="2.5" className="hsc__ln" />
        <rect x="44" y="472" width="124" height="5" rx="2.5" className="hsc__ln" />
        <rect x="44" y="485" width="150" height="5" rx="2.5" className="hsc__ln" />
        <rect x="44" y="498" width="98" height="5" rx="2.5" className="hsc__ln" />
        <text x="44" y="524" className="hsc__caption">
          Service copy
        </text>
      </g>

      {/* ── the phone ── */}
      <g className="hsc__device">
        <rect x="258" y="368" width="100" height="196" rx="14" className="hsc__phone" />
        <rect x="265" y="381" width="86" height="170" rx="9" className="hsc__phone-screen" />
      </g>
      <rect x="294" y="388" width="28" height="3" rx="1.5" className="hsc__ln-dim" />
      <rect x="274" y="400" width="22" height="3" rx="1.5" className="hsc__ln-dim" />
      <g className="hsc__ack">
        <rect x="272" y="414" width="72" height="56" rx="5" className="hsc__ack-card" />
        <circle cx="288" cy="429" r="8.5" className="hsc__ack-halo" />
        <path d="M284.2 429 l2.7 2.7 l5.4 -5.9" className="hsc__tick" />
        <rect x="303" y="426" width="30" height="4" rx="2" className="hsc__ln" />
        <rect x="281" y="444" width="54" height="4" rx="2" className="hsc__ln-dim" />
        <rect x="281" y="453" width="40" height="4" rx="2" className="hsc__ln-dim" />
      </g>
      <rect x="292" y="542" width="32" height="3" rx="1.5" className="hsc__ln-dim" />

      {/* ── the hand ── */}
      <g className="hsc__hand">
        <path d="M268 620 L266 564 Q266 544 286 538 L360 519 Q382 515 388 536 L398 620 Z" />
        <path d="M290 542 L268 494" className="hsc__finger" />
        <path d="M316 535 L302 484" className="hsc__finger" />
        <path d="M342 528 L332 484" className="hsc__finger" />
        <path d="M366 526 L364 494" className="hsc__finger hsc__finger--sm" />
        <path d="M276 566 L234 562" className="hsc__thumb" />
      </g>
    </svg>
  );
}

export function SwsHeroArt() {
  return (
    <div className="hsc" aria-hidden="true">
      <span className="hsc__pool" />
      <WideScene />
      <NarrowScene />
    </div>
  );
}
