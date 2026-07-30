/**
 * "Connected where useful" — the real shape of the relationship.
 *
 * The engagement is the largest object and everything is oriented around it, so
 * the picture cannot be read as five peers or as the services feeding a
 * passive site. The centre is named — Smart Website Systems is the principal
 * engagement, and leaving it as a generic "your website" while naming all four
 * surrounding services inverted the offer hierarchy in the one drawing that
 * shows the whole model. Each connection follows what the service actually does:
 *
 *   Local SEO Authority   helps suitable people reach and evaluate it  → in
 *   Lead Response         begins once contact exists                   → out
 *   Follow-Up & CRM       supports the open decision after that        → out
 *   Reputation & Review   returns genuine proof to later evaluation    → back
 *
 * Wide and narrow are separate compositions. The narrow one keeps the same
 * before / website / after / returns reading rather than becoming four cards.
 */

const LABEL =
  "Smart Website Systems at the centre. Local SEO Authority brings suitable people to it; Lead Response & Handling and Follow-Up & CRM continue after contact; Reputation & Review returns proof to the website for the next person deciding. Each surrounding responsibility is scoped separately rather than included.";

function Card({
  x,
  y,
  w = 250,
  h = 68,
  title,
  note,
}: {
  x: number;
  y: number;
  w?: number;
  h?: number;
  title: string;
  note: string;
}) {
  return (
    <g className="cx-card">
      <rect x={x} y={y} width={w} height={h} rx="12" />
      <text x={x + 20} y={y + 29} className="cx-card__title">
        {title}
      </text>
      <text x={x + 20} y={y + 50} className="cx-card__note">
        {note}
      </text>
    </g>
  );
}

export function HomeConnectedArt() {
  return (
    <div className="cx" role="img" aria-label={LABEL}>
      {/* ---------- Wide ---------- */}
      <svg
        className="cx__svg cx__svg--wide"
        viewBox="0 0 980 470"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <marker
            id="cxArrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M0 1 L9 5 L0 9 z" className="cx__arrowhead" />
          </marker>
        </defs>

        {/* stage labels */}
        <text x="20" y="34" className="cx__stage">
          Before
        </text>
        <text x="390" y="34" className="cx__stage cx__stage--lead">
          The public centre
        </text>
        <text x="730" y="34" className="cx__stage">
          After contact
        </text>

        {/* ---- the website: the largest object on the canvas ---- */}
        <g className="cx__site">
          <rect x="360" y="56" width="260" height="212" rx="18" />
          <path d="M360 100 H620" className="cx__site-line" />
          <circle cx="382" cy="78" r="3.6" />
          <circle cx="396" cy="78" r="3.6" />
          <circle cx="410" cy="78" r="3.6" />
          <text x="490" y="152" className="cx__site-title" textAnchor="middle">
            Smart Website Systems
          </text>
          <text x="490" y="182" className="cx__site-note" textAnchor="middle">
            Understand · Trust · Act
          </text>
          <rect x="416" y="206" width="148" height="34" rx="8" className="cx__site-cta" />
        </g>

        {/* ---- before ---- */}
        <Card x={20} y={128} title="Local SEO Authority" note="Suitable people reach it" />
        <path d="M276 162 H 352" className="cx__link" markerEnd="url(#cxArrow)" />

        {/* ---- after ---- */}
        <Card
          x={710}
          y={86}
          title="Lead Response &amp; Handling"
          note="Contact is answered and owned"
        />
        <Card x={710} y={182} title="Follow-Up &amp; CRM" note="The open decision keeps moving" />
        <path d="M628 120 H 702" className="cx__link" markerEnd="url(#cxArrow)" />
        <path
          d="M628 200 H 664 Q 684 200 684 214 V 216 H 702"
          className="cx__link"
          markerEnd="url(#cxArrow)"
        />

        {/* ---- and back ---- */}
        <Card x={365} y={378} title="Reputation &amp; Review" note="Proof returns to the page" />
        <path
          d="M835 254 V 340 Q 835 366 806 366 H 640"
          className="cx__link cx__link--return"
          markerEnd="url(#cxArrow)"
        />
        <path
          d="M360 412 H 300 Q 272 412 272 386 V 300 Q 272 276 300 276 H 420"
          className="cx__link cx__link--return"
          markerEnd="url(#cxArrow)"
        />
        <text x="252" y="342" className="cx__return-label" textAnchor="end">
          proof returns
        </text>
      </svg>

      {/* ---------- Narrow ---------- */}
      <svg
        className="cx__svg cx__svg--narrow"
        viewBox="0 0 340 620"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <marker
            id="cxArrowN"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M0 1 L9 5 L0 9 z" className="cx__arrowhead" />
          </marker>
        </defs>

        <g className="cx-card cx-card--n">
          <rect x="58" y="16" width="248" height="60" rx="12" />
          <text x="76" y="42" className="cx-card__title">
            Local SEO Authority
          </text>
          <text x="76" y="62" className="cx-card__note">
            Suitable people reach it
          </text>
        </g>
        <path d="M182 80 V 110" className="cx__link" markerEnd="url(#cxArrowN)" />

        <g className="cx__site">
          <rect x="58" y="116" width="248" height="132" rx="16" />
          <path d="M58 148 H306" className="cx__site-line" />
          <circle cx="76" cy="132" r="3" />
          <circle cx="88" cy="132" r="3" />
          <circle cx="100" cy="132" r="3" />
          <text x="182" y="188" className="cx__site-title" textAnchor="middle">
            Smart Website Systems
          </text>
          <text x="182" y="212" className="cx__site-note" textAnchor="middle">
            Understand · Trust · Act
          </text>
          <rect x="128" y="224" width="108" height="12" rx="6" className="cx__site-cta" />
        </g>
        <path d="M182 252 V 282" className="cx__link" markerEnd="url(#cxArrowN)" />

        <g className="cx-card cx-card--n">
          <rect x="58" y="288" width="248" height="60" rx="12" />
          <text x="76" y="314" className="cx-card__title">
            Lead Response &amp; Handling
          </text>
          <text x="76" y="334" className="cx-card__note">
            Contact is answered and owned
          </text>
        </g>
        <path d="M182 352 V 382" className="cx__link" markerEnd="url(#cxArrowN)" />

        <g className="cx-card cx-card--n">
          <rect x="58" y="388" width="248" height="60" rx="12" />
          <text x="76" y="414" className="cx-card__title">
            Follow-Up &amp; CRM
          </text>
          <text x="76" y="434" className="cx-card__note">
            The open decision keeps moving
          </text>
        </g>
        <path d="M182 452 V 482" className="cx__link" markerEnd="url(#cxArrowN)" />

        <g className="cx-card cx-card--n">
          <rect x="58" y="488" width="248" height="60" rx="12" />
          <text x="76" y="514" className="cx-card__title">
            Reputation &amp; Review
          </text>
          <text x="76" y="534" className="cx-card__note">
            Proof returns to the page
          </text>
        </g>

        {/* proof returns to the website, not to the next service in a queue */}
        <path
          d="M54 518 H 30 Q 14 518 14 498 V 202 Q 14 182 30 182 H 50"
          className="cx__link cx__link--return"
          markerEnd="url(#cxArrowN)"
        />
        {/* Set along the return channel rather than across it. Centred at x=24
            the label ran off the left of the viewBox and sat on its own
            connector; rotated, it occupies the gutter between the path (x=14)
            and the cards (x=58). */}
        <text
          x="36"
          y="350"
          className="cx__return-label"
          textAnchor="middle"
          transform="rotate(-90 36 350)"
        >
          proof returns
        </text>
      </svg>
    </div>
  );
}
