import { Icon } from "@/components/ui/Icon";

export function HomeAuthority() {
  return (
    <section id="local-authority" className="home-authority section">
      <div className="container container--split home-authority__layout">
        <div className="home-authority__copy container--flow" data-home-sequence>
          <div className="section-title-group">
            <p className="eyebrow" data-home-sequence-item>
              Local visibility
            </p>
            <h2 data-home-sequence-item>Found nearby — trusted before they call.</h2>
          </div>
          <p data-home-sequence-item>
            Before anyone calls, they check quietly: does the service or treatment page match what
            they searched for, does the listing agree with the website, do the reviews feel real?
            Local visibility holds when the website, the local listing and the reputation all tell
            the same story.
          </p>
          <dl className="home-authority__points" data-home-stagger>
            <div data-home-stagger-item>
              <dt>Found</dt>
              <dd>
                You appear when someone nearby searches for the treatment or service you actually
                offer.
              </dd>
            </div>
            <div data-home-stagger-item>
              <dt>Verified</dt>
              <dd>The listing, the reviews and the pages behind them agree with each other.</dd>
            </div>
          </dl>
        </div>

        <div
          className="home-authority__search"
          data-home-fade
          aria-label="Illustrative local search result"
        >
          <div className="home-authority__search-bar">
            <Icon name="search" size={18} />
            <span>dental implants near me</span>
          </div>
          <div className="home-authority__map" aria-hidden="true">
            <span>
              <Icon name="map-pin" size={19} />
            </span>
            <small>Your local area</small>
          </div>
          <div className="home-authority__listing is-selected">
            <div>
              <strong>Your local clinic</strong>
              <small>Details aligned with the website</small>
            </div>
            <span>Your listing</span>
          </div>
          <div className="home-authority__listing">
            <span>Nearby clinic</span>
          </div>
          <div className="home-authority__listing">
            <span>Another provider</span>
          </div>
          <div className="home-authority__checks">
            <span>◉ Details match the site</span>
            <span>◉ Treatments listed</span>
            <span>○ Recent reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
