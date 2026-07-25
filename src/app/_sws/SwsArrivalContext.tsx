/**
 * Section 5. Three arrivals, three answers.
 *
 * A comparison rather than a selector: the point is that the three are
 * different, which only lands if they are visible together. Each strip runs
 * origin artefact → what the visitor already knows → the page built for it.
 */

interface Arrival {
  id: string;
  channel: string;
  knows: string;
  must: string;
  landing: string;
}

const ARRIVALS: readonly Arrival[] = [
  {
    id: "search",
    channel: "From a search",
    knows: "They typed something specific. The words they used are the most reliable statement of intent you will ever get from them.",
    must: "Confirm that exact service, in that area, above the fold — in the visitor's words, not the internal ones.",
    landing: "Service page",
  },
  {
    id: "referral",
    channel: "From a referral",
    knows: "Somebody they trust has already vouched for you, and told them one particular thing about the work.",
    must: "Confirm what they were told, quickly, and remove the friction from acting on it. This is the warmest attention a business gets.",
    landing: "Page that matches the claim",
  },
  {
    id: "advertising",
    channel: "From advertising",
    knows: "They responded to a specific promise, in specific words, that you wrote and paid to place in front of them.",
    must: "Continue that promise in the same words. A click that lands on a general homepage is paid for twice and converted once.",
    landing: "Page matching the ad",
  },
];

function OriginArt({ id }: { id: string }) {
  return (
    <svg className="arr__origin-svg" viewBox="0 0 200 128" fill="none" aria-hidden="true" focusable="false">
      {id === "search" ? (
        <>
          <rect x="8" y="10" width="184" height="24" rx="12" className="arr__field" />
          <circle cx="26" cy="22" r="5" className="arr__stroke" />
          <path d="M29.8 25.8 L34 30" className="arr__stroke" />
          <rect x="42" y="19" width="94" height="6" rx="3" className="arr__ink" />
          <rect x="142" y="16" width="1.6" height="12" className="arr__caret" />
          <rect x="8" y="48" width="120" height="7" rx="3.5" className="arr__link" />
          <rect x="8" y="61" width="72" height="5" rx="2.5" className="arr__url" />
          <rect x="8" y="74" width="176" height="4.5" rx="2.25" className="arr__dim" />
          <rect x="8" y="84" width="150" height="4.5" rx="2.25" className="arr__dim" />
          <path d="M8 102 H192" className="arr__hair" />
          <rect x="8" y="110" width="96" height="5" rx="2.5" className="arr__dim" />
        </>
      ) : null}

      {id === "referral" ? (
        <>
          <path
            d="M14 14 h132 a8 8 0 0 1 8 8 v46 a8 8 0 0 1 -8 8 h-96 l-18 16 v-16 a8 8 0 0 1 -8 -8 v-46 a8 8 0 0 1 8 -8 z"
            className="arr__bubble"
          />
          <rect x="28" y="30" width="104" height="5" rx="2.5" className="arr__ink" />
          <rect x="28" y="42" width="86" height="5" rx="2.5" className="arr__dim" />
          <rect x="28" y="54" width="62" height="5" rx="2.5" className="arr__dim" />
          <circle cx="170" cy="96" r="13" className="arr__halo" />
          <circle cx="170" cy="91" r="4.6" className="arr__stroke" />
          <path d="M161.5 104 c2 -5.4 15 -5.4 17 0" className="arr__stroke" />
          <rect x="14" y="92" width="76" height="5" rx="2.5" className="arr__dim" />
          <rect x="14" y="104" width="54" height="5" rx="2.5" className="arr__dim" />
        </>
      ) : null}

      {id === "advertising" ? (
        <>
          <rect x="8" y="10" width="184" height="76" rx="5" className="arr__panel" />
          <rect x="18" y="20" width="30" height="11" rx="5.5" className="arr__tag" />
          <text x="24" y="28.5" className="arr__tag-label">
            Ad
          </text>
          <rect x="18" y="40" width="104" height="7" rx="3.5" className="arr__link" />
          <rect x="18" y="54" width="130" height="4.5" rx="2.25" className="arr__dim" />
          <rect x="18" y="64" width="98" height="4.5" rx="2.25" className="arr__dim" />
          <rect x="140" y="40" width="42" height="34" rx="3" className="arr__block" />
          <path d="M96 92 L96 116 L102 110.4 L106 120 L111 118 L107 108.6 L115 108 Z" className="arr__cursor" />
        </>
      ) : null}
    </svg>
  );
}

function LandingArt({ id }: { id: string }) {
  return (
    <svg className="arr__landing-svg" viewBox="0 0 190 128" fill="none" aria-hidden="true" focusable="false">
      <rect x="0.5" y="0.5" width="189" height="127" rx="4" className="arr__page" />
      <path d="M0 20 H190" className="arr__hair" />
      <circle cx="14" cy="10.5" r="3.6" className="arr__mark" />
      <rect x="150" y="7" width="28" height="8" rx="4" className="arr__chip" />

      {id === "search" ? (
        <>
          <rect x="14" y="32" width="118" height="9" rx="4" className="arr__ink" />
          <rect x="14" y="47" width="76" height="6" rx="3" className="arr__accent" />
          <rect x="14" y="62" width="162" height="30" rx="3" className="arr__block" />
          <rect x="14" y="100" width="60" height="14" rx="4" className="arr__mark" />
        </>
      ) : null}

      {id === "referral" ? (
        <>
          <rect x="14" y="32" width="104" height="9" rx="4" className="arr__ink" />
          <rect x="14" y="50" width="162" height="26" rx="3" className="arr__quote" />
          <path d="M24 60 h6 M24 68 h4" className="arr__stroke-thin" />
          <rect x="36" y="58" width="112" height="4.5" rx="2.25" className="arr__dim" />
          <rect x="36" y="67" width="88" height="4.5" rx="2.25" className="arr__dim" />
          <rect x="14" y="86" width="130" height="4.5" rx="2.25" className="arr__dim" />
          <rect x="14" y="100" width="60" height="14" rx="4" className="arr__mark" />
        </>
      ) : null}

      {id === "advertising" ? (
        <>
          <rect x="14" y="32" width="128" height="9" rx="4" className="arr__ink" />
          <rect x="14" y="48" width="94" height="6" rx="3" className="arr__accent" />
          <rect x="14" y="64" width="80" height="26" rx="3" className="arr__block" />
          <rect x="102" y="64" width="74" height="12" rx="3" className="arr__field" />
          <rect x="102" y="80" width="74" height="10" rx="3" className="arr__mark" />
          <rect x="14" y="100" width="120" height="4.5" rx="2.25" className="arr__dim" />
          <rect x="14" y="110" width="90" height="4.5" rx="2.25" className="arr__dim" />
        </>
      ) : null}
    </svg>
  );
}

export function SwsArrivalContext() {
  return (
    <section id="arrival-context" className="sws-arrival section on-paper">
      <div className="container section-intro section-intro--split" data-sws-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-sws-item>
            Arrival context
          </p>
          <h2 data-sws-item>
            Different journeys should land on <em>answers built for why people came.</em>
          </h2>
        </div>
        <div className="section-copy-group">
          <p data-sws-item>
            Every visitor arrives already holding something — a phrase they typed, a sentence
            somebody told them, a promise they clicked. That context is the most useful information
            the site will ever have about them, and sending all three to the same homepage throws it
            away.
          </p>
        </div>
      </div>

      <ol className="container arr" data-sws-stagger>
        {ARRIVALS.map((arrival) => (
          <li key={arrival.id} className="arr__row" data-sws-stagger-item>
            <div className="arr__origin">
              <p className="sws-label">{arrival.channel}</p>
              <OriginArt id={arrival.id} />
            </div>

            <div className="arr__middle">
              <div>
                <p className="sws-label sws-label--quiet">They already know</p>
                <p>{arrival.knows}</p>
              </div>
              <div>
                <p className="sws-label sws-label--quiet">The page has to</p>
                <p>{arrival.must}</p>
              </div>
              <span className="arr__link-line" aria-hidden="true" />
            </div>

            <div className="arr__landing">
              <p className="sws-label">{arrival.landing}</p>
              <LandingArt id={arrival.id} />
            </div>
          </li>
        ))}
      </ol>

      <div className="container">
        <p className="arr__close editorial-note" data-sws-fade>
          A homepage is a poor answer to a specific question.
        </p>
      </div>
    </section>
  );
}
