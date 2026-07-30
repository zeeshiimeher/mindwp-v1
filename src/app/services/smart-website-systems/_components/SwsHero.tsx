import { Button } from "@/components/ui/Button";
import { CONTACT_PATH } from "@/config/routes";
import { PRIMARY_CTA_LABEL, SECONDARY_CTA_LABEL } from "@/lib/cta/labels";

import { SwsHeroArt } from "./SwsHeroArt";

export function SwsHero() {
  return (
    <section id="hero" className="sws-hero section on-dark">
      <div className="container container--split sws-hero__top">
        <div className="sws-hero__intro container--flow" data-sws-hero-sequence>
          <div className="section-title-group">
            <p className="eyebrow" data-sws-hero-item>
              Smart Website Systems
            </p>
            <h1 data-sws-hero-item>
              <span className="sws-hero__headline-line">A better website.</span>
              <em>Connected to what happens next.</em>
            </h1>
          </div>
          <p className="sws-hero__lede text-lead" data-sws-hero-item>
            MindWP's principal engagement: a premium website that makes your business easy to judge,
            find and contact — built together with the way enquiries are received, answered, owned
            and followed up. One accountable piece of work, not a site and a list of loose ends.
          </p>
          <div className="sws-hero__actions" data-sws-hero-item>
            <Button href={CONTACT_PATH} variant="on-dark" className="btn-lg">
              {PRIMARY_CTA_LABEL}
            </Button>
            <Button href="/#work" variant="ghost-dark" className="btn-lg">
              {SECONDARY_CTA_LABEL}
            </Button>
          </div>
        </div>

        <div className="sws-hero__art-column" data-sws-hero-artifacts>
          <SwsHeroArt />
        </div>
      </div>
    </section>
  );
}
