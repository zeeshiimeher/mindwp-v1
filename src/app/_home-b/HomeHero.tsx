import { Button } from "@/components/ui/Button";
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
    <section id="hero" className="home-b-hero section on-dark">
      <div className="container container--split home-b-hero__top">
        <div className="home-b-hero__intro container--flow" data-home-b-hero-sequence>
          <div className="section-title-group">
            <p className="eyebrow" data-home-b-hero-item>
              Smart websites
            </p>
            <h1 data-home-b-hero-item>
              <span className="home-b-hero__headline-line">A smarter website</span>
              <em>for being found, understood and chosen.</em>
            </h1>
          </div>
          <p className="home-b-hero__lede text-lead" data-home-b-hero-item>
            MindWP designs smarter websites for independent clinics and specialist service
            businesses — helping the right customers find you, understand the work, and choose
            you with confidence.
          </p>
          <Button href="#review" variant="on-dark" data-home-b-hero-item>
            {PRIMARY_CTA_LABEL}
          </Button>
        </div>

        <div
          className="home-b-hero__art"
          data-home-b-hero-artifacts
          aria-label="A connected enquiry journey"
        >
          <div className="home-b-hero__glow" aria-hidden="true" />
          <div className="home-b-hero__offer" data-home-b-hero-artifact>
            <span className="home-b-hero__offer-line home-b-hero__offer-line--dark" />
            <span className="home-b-hero__offer-line" />
            <span className="home-b-hero__offer-line home-b-hero__offer-line--short" />
            <span className="home-b-hero__offer-button">Book a consultation</span>
            <span className="home-b-hero__offer-tags">
              Offer&nbsp;&nbsp;&nbsp; Trust&nbsp;&nbsp;&nbsp; Proof
            </span>
          </div>

          <div className="home-b-hero__form home-b-artifact-card" data-home-b-hero-artifact>
            <span className="home-b-artifact-handle" aria-hidden="true" />
            <p className="home-b-artifact-label">Enquiry form</p>
            <span className="home-b-hero__field" aria-hidden="true" />
            <span className="home-b-hero__field home-b-hero__field--short" aria-hidden="true" />
            <span className="home-b-hero__field" aria-hidden="true" />
            <span className="home-b-hero__send">Send enquiry</span>
            <span className="home-b-hero__sent">✓ Sent — routed</span>
          </div>

          <div className="home-b-hero__route" aria-hidden="true">
            <span />
            <span />
          </div>

          <div className="home-b-hero__status home-b-artifact-card" data-home-b-hero-artifact>
            <p className="home-b-artifact-label">New enquiry</p>
            <dl>
              <div>
                <dt>Routing</dt>
                <dd>Notified</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>Owner assigned</dd>
              </div>
              <div>
                <dt>Next step</dt>
                <dd>Visible</dd>
              </div>
              <div>
                <dt>Follow-up</dt>
                <dd>Scheduled</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div
        className="container container--flow home-b-hero__journey"
        data-home-b-journey
        data-home-b-hero-journey
      >
        <p className="eyebrow" data-home-b-hero-item>
          How a typical enquiry plays out
        </p>
        <ol>
          {JOURNEY.map(([number, title], index) => (
            <li key={number} data-home-b-hero-item>
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
