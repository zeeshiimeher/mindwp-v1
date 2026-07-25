import { SwsHeroArt } from "@/app/_sws/SwsHeroArt";
import { Button } from "@/components/ui/Button";
import { CONTACT_PATH } from "@/config/routes";
import { PRIMARY_CTA_LABEL } from "@/lib/cta/labels";

/**
 * Section 1. Reuses the Homepage hero's structural framework — split intro and
 * artwork above, a labelled rail below — with entirely new SWS artwork and a
 * rail that names what the engagement actually covers rather than how an
 * enquiry plays out.
 */

const COVERS = [
  ["01", "Strategy", "What the site has to resolve"],
  ["02", "Structure", "Which pages exist, and why"],
  ["03", "Content", "The words that do the explaining"],
  ["04", "Design", "Why it looks like this business"],
  ["05", "Build", "Delivered, tested, handed over"],
] as const;

export function SwsHero() {
  return (
    <section id="sws-hero" className="sws-hero section on-navy on-dark">
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
            The website itself is the work: the pages people actually read, the evidence they check
            before deciding, and the next step they take when they are ready. MindWP plans it,
            writes it, designs it and builds it — then makes sure the enquiry it produces reaches a
            person who can answer.
          </p>
          <Button href={CONTACT_PATH} variant="on-dark" className="btn-lg" data-sws-hero-item>
            {PRIMARY_CTA_LABEL}
          </Button>
        </div>

        <div className="sws-hero__art-column" data-sws-hero-art>
          <SwsHeroArt />
        </div>
      </div>

      <div className="container container--flow sws-hero__covers" data-sws-hero-rail>
        <p className="eyebrow" data-sws-hero-item>
          What the engagement covers
        </p>
        <ol>
          {COVERS.map(([number, title, note]) => (
            <li key={number} data-sws-hero-item>
              <small>{number}</small>
              <strong>{title}</strong>
              <span>{note}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
