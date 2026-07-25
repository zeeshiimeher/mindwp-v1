import { Icon } from "@/components/ui/Icon";

export function HomeAuthority() {
  return (
    <section id="local-authority" className="hl-authority section">
      <div className="container section-intro--split hl-authority__layout">
        <div className="hl-authority__copy section-intro" data-hl-sequence>
          <div className="section-title-group">
            <p className="eyebrow" data-hl-sequence-item>
              Local visibility
            </p>
            <h2 data-hl-sequence-item>Found nearby — trusted before they call.</h2>
          </div>
          <p data-hl-sequence-item>
            Before anyone calls, they check quietly: does the service or treatment page match what
            they searched for, does the listing agree with the website, do the reviews feel real?
            Local visibility holds when the website, the local listing and the reputation all tell
            the same story.
          </p>
          <dl className="hl-authority__points" data-hl-stagger>
            <div data-hl-stagger-item>
              <dt>Found</dt>
              <dd>
                You appear when someone nearby searches for the treatment or service you actually
                offer.
              </dd>
            </div>
            <div data-hl-stagger-item>
              <dt>Verified</dt>
              <dd>The listing, the reviews and the pages behind them agree with each other.</dd>
            </div>
          </dl>
        </div>

        <div
          className="hl-authority__search"
          data-hl-fade
          aria-label="Illustrative local search result"
        >
          <div className="hl-authority__search-bar">
            <Icon name="search" size={18} />
            <span>dental implants near me</span>
          </div>
          <div className="hl-authority__map" aria-hidden="true">
            <span>
              <Icon name="map-pin" size={19} />
            </span>
            <small>Your local area</small>
          </div>
          <div className="hl-authority__listing is-selected">
            <div>
              <strong>Your local clinic</strong>
              <small>Details aligned with the website</small>
            </div>
            <span>Your listing</span>
          </div>
          <div className="hl-authority__listing">
            <span>Nearby clinic</span>
          </div>
          <div className="hl-authority__listing">
            <span>Another provider</span>
          </div>
          <div className="hl-authority__checks">
            <span>◉ Details match the site</span>
            <span>◉ Treatments listed</span>
            <span>○ Recent reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
