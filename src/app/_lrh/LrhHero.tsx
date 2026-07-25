import { LrhHeroArt } from "@/app/_lrh/LrhHeroArt";
import { Button } from "@/components/ui/Button";
import { CONTACT_PATH } from "@/config/routes";
import { PRIMARY_CTA_LABEL } from "@/lib/cta/labels";

export function LrhHero() {
  return (
    <section id="hero" className="lrh-hero section on-dark">
      <div className="container container--split lrh-hero__top">
        <div className="lrh-hero__intro container--flow" data-lrh-hero-sequence>
          <div className="section-title-group">
            <p className="eyebrow" data-lrh-hero-item>
              Lead response
            </p>
            <h1 data-lrh-hero-item>
              <span className="lrh-hero__headline-line">Make sure calls, forms and messages</span>
              <em>receive a prompt response — and reach the right person.</em>
            </h1>
          </div>
          <p className="lrh-hero__lede text-lead" data-lrh-hero-item>
            MindWP connects the enquiries you already receive — calls, forms, messages and
            consultation requests — to an agreed first response, useful context and a named person
            who can act on it. Booking, pricing and professional decisions stay with your team.
          </p>
          <Button href={CONTACT_PATH} variant="on-dark" className="btn-lg" data-lrh-hero-item>
            {PRIMARY_CTA_LABEL}
          </Button>
        </div>

        <div className="lrh-hero__art-column" data-lrh-hero-artifacts>
          <LrhHeroArt />
        </div>
      </div>
    </section>
  );
}
