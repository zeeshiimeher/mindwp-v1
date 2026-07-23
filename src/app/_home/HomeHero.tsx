import { Button } from "@/components/ui/Button";
import { PRIMARY_CTA_LABEL } from "@/lib/cta/labels";

const JOURNEY = [
  ["01", "Found nearby", "Website opened and checked."],
  ["02", "Enquiry sent", "Details land somewhere useful."],
  ["03", "First response", "Right person is notified."],
  ["04", "Owner and next step", "Follow-up stays visible."],
  ["05", "Work completed", "Good work becomes proof."],
] as const;

export function HomeHero() {
  return (
    <section id="hero" className="home-hero section on-dark">
      <div className="container container--split home-hero__top">
        <div className="home-hero__intro container--flow" data-home-hero-sequence>
          <div className="section-title-group">
            <p className="eyebrow" data-home-hero-item>
              Smart websites
            </p>
            <h1 data-home-hero-item>
              <span className="home-hero__headline-line">A smarter website</span>
              <em>for being found, understood and chosen.</em>
            </h1>
          </div>
          <p className="home-hero__lede text-lead" data-home-hero-item>
            MindWP designs smarter websites for independent clinics and specialist service
            businesses — built to help the right customers find you, understand the work, and
            choose you with confidence. Everything else MindWP offers exists to support that one
            job, not replace it.
          </p>
          <Button href="#review" variant="on-dark" data-home-hero-item>
            {PRIMARY_CTA_LABEL}
          </Button>
        </div>

        <div
          className="home-hero__art"
          data-home-hero-artifacts
          aria-label="A connected enquiry journey"
        >
          <div className="home-hero__glow" aria-hidden="true" />
          <div className="home-hero__offer" data-home-hero-artifact>
            <span className="home-hero__offer-line home-hero__offer-line--dark" />
            <span className="home-hero__offer-line" />
            <span className="home-hero__offer-line home-hero__offer-line--short" />
            <span className="home-hero__offer-button">Book a consultation</span>
            <span className="home-hero__offer-tags">
              Offer&nbsp;&nbsp;&nbsp; Trust&nbsp;&nbsp;&nbsp; Proof
            </span>
          </div>

          <div className="home-hero__form home-artifact-card" data-home-hero-artifact>
            <span className="home-artifact-handle" aria-hidden="true" />
            <p className="home-artifact-label">Enquiry form</p>
            <span className="home-hero__field" aria-hidden="true" />
            <span className="home-hero__field home-hero__field--short" aria-hidden="true" />
            <span className="home-hero__field" aria-hidden="true" />
            <span className="home-hero__send">Send enquiry</span>
            <span className="home-hero__sent">✓ Sent — routed</span>
          </div>

          <div className="home-hero__route" aria-hidden="true">
            <span />
            <span />
          </div>

          <div className="home-hero__status home-artifact-card" data-home-hero-artifact>
            <p className="home-artifact-label">New enquiry</p>
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
        className="container container--flow home-hero__journey"
        data-home-journey
        data-home-hero-journey
      >
        <p className="eyebrow" data-home-hero-item>
          How a typical enquiry plays out
        </p>
        <ol>
          {JOURNEY.map(([number, title, description], index) => (
            <li key={number} data-home-hero-item>
              <span className={index === 0 ? "is-active" : undefined} aria-hidden="true" />
              <small>{number}</small>
              <strong>{title}</strong>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
