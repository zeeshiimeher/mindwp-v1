import { SwsHeroArtB } from "@/app/_sws/SwsHeroArtB";
import { Button } from "@/components/ui/Button";
import { CONTACT_PATH } from "@/config/routes";
import { PRIMARY_CTA_LABEL } from "@/lib/cta/labels";

/**
 * Same shell as the original Hero (copy, grid split, typography) — only the
 * right-hand artifact changes, to a genuinely different illustration
 * technique (see SwsHeroArtB).
 */
export function SwsHeroB() {
  return (
    <section id="sws-hero" className="sws-hero section on-dark">
      <div className="container container--split sws-hero__top">
        <div className="sws-hero__intro container--flow" data-sws-hero-sequence>
          <div className="section-title-group">
            <p className="eyebrow" data-sws-hero-item>
              Smart Website Systems
            </p>
            <h1 data-sws-hero-item>
              <span className="sws-hero__headline-line">Turn specialist work into a website</span>
              <em>people can understand, trust and act on.</em>
            </h1>
          </div>
          <p className="sws-hero__lede text-lead" data-sws-hero-item>
            A Smart Website System connects strategy, structure, content, design and enquiry
            handling around one customer decision — so specialist work reads as clearly as it
            deserves to, and the people who are ready can act with confidence.
          </p>
          <Button href={CONTACT_PATH} variant="on-dark" className="btn-lg" data-sws-hero-item>
            {PRIMARY_CTA_LABEL}
          </Button>
        </div>

        <div className="sws-hero__art-column" data-sws-hero-artifacts>
          <SwsHeroArtB />
        </div>
      </div>
    </section>
  );
}
