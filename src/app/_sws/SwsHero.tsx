import { SwsHeroArt } from "@/app/_sws/SwsHeroArt";
import { Button } from "@/components/ui/Button";
import { CONTACT_PATH } from "@/config/routes";
import { PRIMARY_CTA_LABEL, SECONDARY_CTA_LABEL } from "@/lib/cta/labels";

/**
 * Section 1. Reuses the Homepage hero's structural framework — split intro
 * above, a full-width band beneath — with original artwork and a different
 * lower payload. The Homepage band walks an enquiry's journey; this one states
 * what the engagement owns and where that ownership stops, because scope is the
 * first thing a buyer of the principal offer needs settled.
 */

const SCOPE = [
  ["01", "Strategy", "The decision your customer is actually making."],
  ["02", "Structure", "Pages and hierarchy that follow how people evaluate."],
  ["03", "Content and design", "Specialist work explained, and made recognisably yours."],
  ["04", "Build", "WordPress, built to stay fast, accessible and maintainable."],
  ["05", "Enquiry path", "Capture, truthful confirmation, delivery to the agreed destination."],
] as const;

export function SwsHero() {
  return (
    <section id="hero" className="sws-hero section section--focal on-dark">
      <div className="container container--split sws-hero__top">
        <div className="sws-hero__intro container--flow" data-sws-hero-sequence>
          <div className="section-title-group">
            <p className="eyebrow" data-sws-hero-item>
              Smart Website Systems
            </p>
            <h1 data-sws-hero-item>
              Turn specialist work into a website people can{" "}
              <em>understand, trust and act on.</em>
            </h1>
          </div>
          <p className="sws-hero__lede text-lead" data-sws-hero-item>
            Strategy, structure, content, distinctive design and careful build — for independent
            clinics and specialist service businesses whose work takes explaining before anyone
            chooses.
          </p>
          <div className="sws-hero__actions" data-sws-hero-item>
            <Button href={CONTACT_PATH} variant="on-dark" className="btn-lg">
              {PRIMARY_CTA_LABEL}
            </Button>
            <Button href="#built-work" variant="on-dark" className="btn-ghost-dark btn-lg">
              {SECONDARY_CTA_LABEL}
            </Button>
          </div>
        </div>

        <div className="sws-hero__art-column" data-sws-hero-artifacts>
          <SwsHeroArt />
        </div>
      </div>

      <div className="container sws-hero__scope" data-sws-hero-scope>
        <p className="eyebrow" data-sws-hero-item>
          What the engagement owns
        </p>
        <ol>
          {SCOPE.map(([number, title, body]) => (
            <li key={number} data-sws-hero-item>
              <small>{number}</small>
              <strong>{title}</strong>
              <span>{body}</span>
            </li>
          ))}
        </ol>
        <p className="sws-hero__boundary" data-sws-hero-item>
          Ownership runs to a <strong>useful enquiry</strong> — the point where someone could
          understand the offer and make contact through the intended channel. Not a qualified lead,
          a booking, or a promised outcome.
        </p>
      </div>
    </section>
  );
}
