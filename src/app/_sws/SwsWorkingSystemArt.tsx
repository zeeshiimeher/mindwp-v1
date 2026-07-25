/**
 * Section 13 artwork — across the desk.
 *
 * The enquiry leaves a device, crosses a working surface through the states it
 * genuinely passes through, and arrives at a person in a real room. The
 * environment changes on the way: interface at one end, a desk with a lamp, a
 * mug and a window at the other.
 *
 * Held between two failure modes on purpose. The stations are real digital
 * states — a record with its context, an acknowledgement, an assigned owner, a
 * status, a tested path — so it is not an analogue paperwork fantasy. But they
 * are drawn small and restrained as objects on a surface rather than as panels
 * in a product, so it is not a dashboard either.
 *
 * The line stops at the person. Nothing is drawn past them, because nothing
 * past them is automated.
 */

function StationDefs({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={`${id}-room`} x1="0.2" y1="0" x2="0.9" y2="1">
        <stop offset="0%" stopColor="#1b3852" />
        <stop offset="100%" stopColor="#0d2033" />
      </linearGradient>
      <linearGradient id={`${id}-window`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#f2d9a8" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#f2d9a8" stopOpacity="0.18" />
      </linearGradient>
      <radialGradient id={`${id}-lamp`} cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stopColor="#f4dcae" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#f4dcae" stopOpacity="0" />
      </radialGradient>
    </defs>
  );
}

/* ------------------------------------------------------------------ wide */

function WideSystem() {
  return (
    <svg className="wsc__svg wsc__svg--wide" viewBox="0 0 1200 440" fill="none" focusable="false">
      <StationDefs id="wsw" />

      {/* ── the website end ── */}
      <g className="wsc__device">
        <rect x="24" y="88" width="184" height="248" rx="12" className="wsc__tablet" />
        <rect x="34" y="98" width="164" height="228" rx="6" className="wsc__screen" />
      </g>
      <g className="wsc__form">
        <rect x="46" y="110" width="52" height="6" rx="3" className="wsc__ln-dim" />
        <path d="M34 126 H198" className="wsc__hair" />
        <rect x="46" y="140" width="76" height="7" rx="3.5" className="wsc__ink" />
        <rect x="46" y="156" width="140" height="20" rx="4" className="wsc__field" />
        <rect x="50" y="162" width="86" height="8" rx="4" className="wsc__fieldfill" />
        <rect x="46" y="184" width="140" height="20" rx="4" className="wsc__field" />
        <rect x="50" y="190" width="104" height="8" rx="4" className="wsc__fieldfill" />
        <rect x="46" y="212" width="140" height="38" rx="4" className="wsc__field" />
        <rect x="50" y="218" width="122" height="7" rx="3.5" className="wsc__fieldfill" />
        <rect x="50" y="230" width="94" height="7" rx="3.5" className="wsc__fieldfill" />
        <rect x="46" y="262" width="92" height="24" rx="5" className="wsc__submit" />
        <text x="92" y="278" className="wsc__submit-label" textAnchor="middle">
          Send enquiry
        </text>
        <rect x="46" y="300" width="118" height="5" rx="2.5" className="wsc__ln-dim" />
      </g>

      {/* ── the crossing ── */}
      <path
        d="M208 210 H880 C906 210 916 240 922 264 C926 280 930 290 938 294"
        className="wsc__line"
      />

      {/* 1 · the record, with the context that came with it */}
      <g className="wsc__station">
        <rect x="228" y="150" width="122" height="120" rx="6" className="wsc__card" />
        <rect x="240" y="162" width="46" height="5" rx="2.5" className="wsc__tag" />
        <path d="M228 176 H350" className="wsc__card-hair" />
        <rect x="240" y="186" width="30" height="4.5" rx="2.25" className="wsc__ln-dim" />
        <rect x="240" y="196" width="72" height="5" rx="2.5" className="wsc__ln" />
        <rect x="240" y="212" width="30" height="4.5" rx="2.25" className="wsc__ln-dim" />
        <rect x="240" y="222" width="88" height="5" rx="2.5" className="wsc__ln" />
        <rect x="240" y="238" width="30" height="4.5" rx="2.25" className="wsc__ln-dim" />
        <rect x="240" y="248" width="60" height="5" rx="2.5" className="wsc__ln" />
      </g>

      {/* 2 · the acknowledgement going back */}
      <g className="wsc__station">
        <rect x="372" y="142" width="66" height="136" rx="10" className="wsc__phone" />
        <rect x="377" y="152" width="56" height="116" rx="6" className="wsc__phone-screen" />
        <rect x="396" y="157" width="18" height="2.5" rx="1.25" className="wsc__ln-dim" />
        <rect x="383" y="170" width="44" height="40" rx="4" className="wsc__ack" />
        <circle cx="394" cy="182" r="6.5" className="wsc__halo" />
        <path d="M391 182 l2.2 2.2 l4.4 -4.8" className="wsc__tick" />
        <rect x="405" y="180" width="18" height="3.5" rx="1.75" className="wsc__ln" />
        <rect x="388" y="194" width="34" height="3.5" rx="1.75" className="wsc__ln-dim" />
        <rect x="388" y="202" width="24" height="3.5" rx="1.75" className="wsc__ln-dim" />
      </g>

      {/* 3 · a named person becomes responsible */}
      <g className="wsc__station">
        <rect x="460" y="184" width="128" height="52" rx="6" className="wsc__card" />
        <circle cx="484" cy="210" r="13" className="wsc__avatar" />
        <path d="M484 206.5 a4 4 0 1 0 0 -0.1" className="wsc__avatar-head" />
        <path d="M475 220 c2.4 -6 15.6 -6 18 0" className="wsc__avatar-body" />
        <rect x="506" y="198" width="30" height="4.5" rx="2.25" className="wsc__tag" />
        <rect x="506" y="210" width="62" height="6" rx="3" className="wsc__ln" />
        <rect x="506" y="222" width="44" height="4.5" rx="2.25" className="wsc__ln-dim" />
      </g>

      {/* 4 · where it stands, visible to the team */}
      <g className="wsc__station">
        <rect x="612" y="186" width="128" height="48" rx="6" className="wsc__card" />
        <rect x="624" y="200" width="34" height="18" rx="9" className="wsc__pill wsc__pill--on" />
        <rect x="664" y="200" width="30" height="18" rx="9" className="wsc__pill" />
        <rect x="700" y="200" width="28" height="18" rx="9" className="wsc__pill" />
      </g>

      {/* 5 · the whole path walked before handover */}
      <g className="wsc__station">
        <rect x="764" y="156" width="122" height="108" rx="6" className="wsc__card" />
        <rect x="776" y="168" width="52" height="5" rx="2.5" className="wsc__tag" />
        <path d="M764 182 H886" className="wsc__card-hair" />
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <circle cx="784" cy={198 + i * 16} r="5.5" className="wsc__halo" />
            <path
              d={`M781.6 ${198 + i * 16} l1.8 1.8 l3.6 -4`}
              className="wsc__tick"
            />
            <rect
              x="796"
              y={195 + i * 16}
              width={74 - i * 10}
              height="4.5"
              rx="2.25"
              className="wsc__ln-dim"
            />
          </g>
        ))}
      </g>

      {/* ── the workplace ── */}
      <g className="wsc__room">
        <rect x="896" y="36" width="304" height="384" rx="8" fill="url(#wsw-room)" />
        <rect x="1108" y="64" width="72" height="104" rx="3" fill="url(#wsw-window)" />
        <path d="M1144 64 V168 M1108 116 H1180" className="wsc__window-bar" />
        <ellipse cx="1040" cy="250" rx="150" ry="130" fill="url(#wsw-lamp)" />

        {/* the desk */}
        <rect x="908" y="304" width="284" height="11" rx="3" className="wsc__desk" />
        <rect x="924" y="315" width="8" height="92" className="wsc__desk-leg" />
        <rect x="1170" y="315" width="8" height="92" className="wsc__desk-leg" />

        {/* the screen they work from */}
        <rect x="1092" y="196" width="96" height="70" rx="4" className="wsc__monitor" />
        <rect x="1100" y="204" width="52" height="4.5" rx="2.25" className="wsc__ln-dim" />
        <rect x="1100" y="214" width="72" height="4" rx="2" className="wsc__ln-dim" />
        <rect x="1100" y="223" width="60" height="4" rx="2" className="wsc__ln-dim" />
        <rect x="1132" y="266" width="16" height="20" className="wsc__monitor-stand" />
        <rect x="1114" y="286" width="52" height="6" rx="3" className="wsc__monitor-stand" />

        {/* the person accountable for the answer */}
        <path
          d="M1052 304 L1048 246 Q1046 224 1030 219 Q1012 224 1010 246 L1004 304 Z"
          className="wsc__figure"
        />
        <circle cx="1030" cy="196" r="21" className="wsc__figure" />
        <path d="M1013 248 Q993 264 979 294" className="wsc__figure-arm" />

        {/* the record, in front of them */}
        <rect x="938" y="282" width="78" height="22" rx="3" className="wsc__record" />
        <rect x="946" y="288" width="40" height="4" rx="2" className="wsc__ln" />
        <rect x="946" y="296" width="56" height="3.5" rx="1.75" className="wsc__ln-dim" />

        {/* the mug */}
        <rect x="1058" y="286" width="18" height="18" rx="3" className="wsc__mug" />
        <path d="M1076 291 a5 5 0 0 1 0 8" className="wsc__mug-handle" />
      </g>
    </svg>
  );
}

/* ---------------------------------------------------------------- narrow */

function NarrowSystem() {
  return (
    <svg className="wsc__svg wsc__svg--narrow" viewBox="0 0 400 1010" fill="none" focusable="false">
      <StationDefs id="wsn" />

      {/* ── the website end ── */}
      <g className="wsc__device">
        <rect x="96" y="12" width="180" height="196" rx="11" className="wsc__tablet" />
        <rect x="105" y="21" width="162" height="178" rx="5" className="wsc__screen" />
      </g>
      <g className="wsc__form">
        <rect x="116" y="32" width="48" height="5" rx="2.5" className="wsc__ln-dim" />
        <path d="M105 46 H267" className="wsc__hair" />
        <rect x="116" y="58" width="70" height="6" rx="3" className="wsc__ink" />
        <rect x="116" y="72" width="140" height="18" rx="4" className="wsc__field" />
        <rect x="120" y="77" width="84" height="8" rx="4" className="wsc__fieldfill" />
        <rect x="116" y="96" width="140" height="18" rx="4" className="wsc__field" />
        <rect x="120" y="101" width="102" height="8" rx="4" className="wsc__fieldfill" />
        <rect x="116" y="120" width="140" height="34" rx="4" className="wsc__field" />
        <rect x="120" y="126" width="120" height="6" rx="3" className="wsc__fieldfill" />
        <rect x="120" y="136" width="92" height="6" rx="3" className="wsc__fieldfill" />
        <rect x="116" y="162" width="88" height="22" rx="5" className="wsc__submit" />
        <text x="160" y="177" className="wsc__submit-label" textAnchor="middle">
          Send enquiry
        </text>
      </g>

      {/* ── the crossing, rotated to a descent ── */}
      <path
        d="M186 208 C186 226 44 232 44 262 V806 C44 838 62 852 92 858"
        className="wsc__line"
      />

      {/* 1 · the record */}
      <g className="wsc__station">
        <rect x="72" y="240" width="316" height="104" rx="6" className="wsc__card" />
        <rect x="88" y="254" width="52" height="5" rx="2.5" className="wsc__tag" />
        <path d="M72 268 H388" className="wsc__card-hair" />
        <rect x="88" y="280" width="34" height="4.5" rx="2.25" className="wsc__ln-dim" />
        <rect x="136" y="279" width="112" height="5.5" rx="2.75" className="wsc__ln" />
        <rect x="88" y="300" width="34" height="4.5" rx="2.25" className="wsc__ln-dim" />
        <rect x="136" y="299" width="150" height="5.5" rx="2.75" className="wsc__ln" />
        <rect x="88" y="320" width="34" height="4.5" rx="2.25" className="wsc__ln-dim" />
        <rect x="136" y="319" width="92" height="5.5" rx="2.75" className="wsc__ln" />
      </g>

      {/* 2 · the acknowledgement */}
      <g className="wsc__station">
        <rect x="72" y="366" width="72" height="146" rx="10" className="wsc__phone" />
        <rect x="77" y="376" width="62" height="126" rx="6" className="wsc__phone-screen" />
        <rect x="98" y="382" width="20" height="2.5" rx="1.25" className="wsc__ln-dim" />
        <rect x="83" y="396" width="50" height="44" rx="4" className="wsc__ack" />
        <circle cx="95" cy="409" r="7" className="wsc__halo" />
        <path d="M91.8 409 l2.4 2.4 l4.8 -5.2" className="wsc__tick" />
        <rect x="107" y="407" width="20" height="3.5" rx="1.75" className="wsc__ln" />
        <rect x="88" y="422" width="40" height="3.5" rx="1.75" className="wsc__ln-dim" />
        <rect x="88" y="430" width="28" height="3.5" rx="1.75" className="wsc__ln-dim" />
      </g>

      {/* 3 · the owner */}
      <g className="wsc__station">
        <rect x="168" y="392" width="220" height="58" rx="6" className="wsc__card" />
        <circle cx="196" cy="421" r="14" className="wsc__avatar" />
        <path d="M196 417.5 a4.2 4.2 0 1 0 0 -0.1" className="wsc__avatar-head" />
        <path d="M186.5 432 c2.6 -6.4 16.4 -6.4 19 0" className="wsc__avatar-body" />
        <rect x="222" y="408" width="34" height="4.5" rx="2.25" className="wsc__tag" />
        <rect x="222" y="420" width="90" height="6" rx="3" className="wsc__ln" />
        <rect x="222" y="433" width="56" height="4.5" rx="2.25" className="wsc__ln-dim" />
      </g>

      {/* 4 · the status */}
      <g className="wsc__station">
        <rect x="72" y="534" width="316" height="54" rx="6" className="wsc__card" />
        <rect x="88" y="550" width="72" height="22" rx="11" className="wsc__pill wsc__pill--on" />
        <rect x="170" y="550" width="64" height="22" rx="11" className="wsc__pill" />
        <rect x="244" y="550" width="58" height="22" rx="11" className="wsc__pill" />
      </g>

      {/* 5 · the tested path */}
      <g className="wsc__station">
        <rect x="72" y="612" width="316" height="112" rx="6" className="wsc__card" />
        <rect x="88" y="626" width="58" height="5" rx="2.5" className="wsc__tag" />
        <path d="M72 640 H388" className="wsc__card-hair" />
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <circle cx="100" cy={658 + i * 18} r="6.5" className="wsc__halo" />
            <path d={`M97 ${658 + i * 18} l2.2 2.2 l4.4 -4.8`} className="wsc__tick" />
            <rect
              x="116"
              y={655 + i * 18}
              width={196 - i * 22}
              height="5"
              rx="2.5"
              className="wsc__ln-dim"
            />
          </g>
        ))}
      </g>

      {/* ── the workplace ── */}
      <g className="wsc__room">
        <rect x="8" y="758" width="384" height="248" rx="8" fill="url(#wsn-room)" />
        <rect x="300" y="782" width="72" height="92" rx="3" fill="url(#wsn-window)" />
        <path d="M336 782 V874 M300 828 H372" className="wsc__window-bar" />
        <ellipse cx="196" cy="912" rx="170" ry="110" fill="url(#wsn-lamp)" />

        <rect x="24" y="944" width="352" height="11" rx="3" className="wsc__desk" />
        <rect x="44" y="955" width="8" height="51" className="wsc__desk-leg" />
        <rect x="348" y="955" width="8" height="51" className="wsc__desk-leg" />

        <rect x="272" y="850" width="94" height="68" rx="4" className="wsc__monitor" />
        <rect x="280" y="858" width="50" height="4.5" rx="2.25" className="wsc__ln-dim" />
        <rect x="280" y="868" width="70" height="4" rx="2" className="wsc__ln-dim" />
        <rect x="280" y="877" width="58" height="4" rx="2" className="wsc__ln-dim" />
        <rect x="311" y="918" width="16" height="20" className="wsc__monitor-stand" />
        <rect x="293" y="938" width="52" height="6" rx="3" className="wsc__monitor-stand" />

        <path
          d="M218 944 L214 890 Q212 868 196 863 Q178 868 176 890 L170 944 Z"
          className="wsc__figure"
        />
        <circle cx="196" cy="840" r="21" className="wsc__figure" />
        <path d="M179 892 Q159 908 145 934" className="wsc__figure-arm" />

        <rect x="92" y="922" width="80" height="22" rx="3" className="wsc__record" />
        <rect x="100" y="928" width="42" height="4" rx="2" className="wsc__ln" />
        <rect x="100" y="936" width="58" height="3.5" rx="1.75" className="wsc__ln-dim" />

        <rect x="228" y="926" width="18" height="18" rx="3" className="wsc__mug" />
        <path d="M246 931 a5 5 0 0 1 0 8" className="wsc__mug-handle" />
      </g>
    </svg>
  );
}

export function SwsWorkingSystemArt() {
  return (
    <div className="wsc" aria-hidden="true">
      <WideSystem />
      <NarrowSystem />
    </div>
  );
}
