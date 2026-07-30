import { Icon } from "@/components/ui/Icon";

export function HomeAuthority() {
  return (
    <section id="local-authority" className="home-authority section">
      <div className="container section-intro--split home-authority__layout">
        <div className="home-authority__copy section-intro" data-home-sequence>
          <div className="section-title-group">
            <p className="eyebrow" data-home-sequence-item>
              Visibility support
            </p>
            <h2 data-home-sequence-item>Found nearby — trusted before they call.</h2>
          </div>
          <p data-home-sequence-item>
            Before anyone calls, they check quietly — does the page match what they searched for,
            does the listing agree with the website, do the reviews look real? Local visibility holds
            when all three tell the same story. It is ongoing work, and it does not depend on us
            having built the website.
          </p>
          {/* Found and Verified describe a state; Maintained is the part that
              is actually bought, so it stays. The method behind it — which
              details drift and how they are kept in agreement — is the Local SEO
              Authority page's to explain, not Home's. Stated as work rather than
              as a promised position: the service guarantees no ranking. */}
          <dl className="home-authority__points" data-home-stagger>
            <div data-home-stagger-item>
              <dt>Found</dt>
              <dd>You appear when someone nearby searches for what you actually offer.</dd>
            </div>
            <div data-home-stagger-item>
              <dt>Verified</dt>
              <dd>The listing, the reviews and the pages behind them agree with each other.</dd>
            </div>
            <div data-home-stagger-item>
              <dt>Maintained</dt>
              <dd>
                Details drift. Keeping the three in agreement is continuing work, not a setup you do
                once.
              </dd>
            </div>
          </dl>

          <p className="home-artifact-label" data-home-sequence-item>
            Part of Local SEO Authority
          </p>
        </div>

        {/* Constructed, not a client result — so it says so visibly, in the same
            register as the per-item status labels in Selected work. The
            aria-label alone left a sighted visitor with no way to tell. */}
        <div className="home-authority__search" data-home-fade>
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
          <p className="home-authority__status">Illustrative demonstration — not a client result</p>
        </div>
      </div>
    </section>
  );
}
