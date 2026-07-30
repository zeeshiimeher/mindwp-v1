import { HomeHeroArt } from "@/app/_home/HomeHeroArt";
import { Button } from "@/components/ui/Button";
import { CONTACT_PATH } from "@/config/routes";
import { PRIMARY_CTA_LABEL, SECONDARY_CTA_LABEL } from "@/lib/cta/labels";

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
            {/* The whole-business claim, deliberately not the Smart Website Systems
                claim: this names the two halves MindWP sells and leaves the
                engagement itself to be named where the architecture is drawn. */}
            <h1 data-home-hero-item>
              <span className="home-hero__headline-line">Websites that earn the enquiry,</span>
              <em>and the system that answers it.</em>
            </h1>
          </div>
          <p className="home-hero__lede text-lead" data-home-hero-item>
            MindWP works with clinics and expert-led businesses — building the website your customers
            judge you on, and connecting the handling behind it. So you are easier to find, enquiries
            are answered consistently, and less depends on someone remembering.
          </p>
          <div className="home-hero__actions" data-home-hero-item>
            <Button href={CONTACT_PATH} variant="on-dark" className="btn-lg">
              {PRIMARY_CTA_LABEL}
            </Button>
            <Button href="#work" variant="ghost-dark" className="btn-lg">
              {SECONDARY_CTA_LABEL}
            </Button>
          </div>
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
