import { HomeHeroArt } from "@/app/_home/HomeHeroArt";
import { Button } from "@/components/ui/Button";
import { CONTACT_PATH } from "@/config/routes";
import { PRIMARY_CTA_LABEL } from "@/lib/cta/labels";

const JOURNEY = [
  ["01", "Found nearby"],
  ["02", "Enquiry sent"],
  ["03", "First response"],
  ["04", "Owner and next step"],
  ["05", "Work completed"],
] as const;

export function HomeHero() {
  return (
    <section id="hero" className="home-hero section on-dark">
      <div className="container container--split home-hero__top">
        <div className="home-hero__intro container--flow" data-home-hero-sequence>
          <div className="section-title-group">
            <p className="eyebrow" data-home-hero-item>
              Website &amp; enquiry systems
            </p>
            <h1 data-home-hero-item>
              <span className="home-hero__headline-line">Smart websites</span>
              <em>and connected enquiry systems.</em>
            </h1>
          </div>
          <p className="home-hero__lede text-lead" data-home-hero-item>
            MindWP builds smart websites and connected enquiry systems for clinics and expert-led
            businesses, designed to support growth through better visibility, better handling and
            greater operational consistency.
          </p>
          <Button
            href={CONTACT_PATH}
            variant="on-dark"
            className="btn-lg"
            data-home-hero-item
          >
            {PRIMARY_CTA_LABEL}
          </Button>
        </div>

        <div className="home-hero__art-column" data-home-hero-artifacts>
          <HomeHeroArt />
        </div>
      </div>

      <div
        className="container container--flow home-hero__journey"
        data-home-journey
        data-home-hero-journey
      >
        <p className="eyebrow" data-home-hero-item>
          How a typical enquiry plays out
        </p>
        <ol>
          {JOURNEY.map(([number, title], index) => (
            <li key={number} data-home-hero-item>
              <span className={index === 0 ? "is-active" : undefined} aria-hidden="true" />
              <small>{number}</small>
              <strong>{title}</strong>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
