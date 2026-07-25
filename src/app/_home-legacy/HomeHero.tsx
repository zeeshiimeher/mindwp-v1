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
    <section id="hero" className="hl-hero section on-dark">
      <div className="container container--split hl-hero__top">
        <div className="hl-hero__intro container--flow" data-hl-hero-sequence>
          <div className="section-title-group">
            <p className="eyebrow" data-hl-hero-item>
              Smart websites
            </p>
            <h1 data-hl-hero-item>
              <span className="hl-hero__headline-line">A smarter website</span>
              <em>for being found, understood and chosen.</em>
            </h1>
          </div>
          <p className="hl-hero__lede text-lead" data-hl-hero-item>
            MindWP designs smarter websites for independent clinics and specialist service
            businesses — helping the right customers find you, understand the work, and choose
            you with confidence.
          </p>
          <Button href="#review" variant="on-dark" data-hl-hero-item>
            {PRIMARY_CTA_LABEL}
          </Button>
        </div>

        <div
          className="hl-hero__art"
          data-hl-hero-artifacts
          aria-label="A connected enquiry journey"
        >
          <div className="hl-hero__glow" aria-hidden="true" />
          <div className="hl-hero__offer" data-hl-hero-artifact>
            <span className="hl-hero__offer-line hl-hero__offer-line--dark" />
            <span className="hl-hero__offer-line" />
            <span className="hl-hero__offer-line hl-hero__offer-line--short" />
            <span className="hl-hero__offer-button">Book a consultation</span>
            <span className="hl-hero__offer-tags">
              Offer&nbsp;&nbsp;&nbsp; Trust&nbsp;&nbsp;&nbsp; Proof
            </span>
          </div>

          <div className="hl-hero__form hl-artifact-card" data-hl-hero-artifact>
            <span className="hl-artifact-handle" aria-hidden="true" />
            <p className="hl-artifact-label">Enquiry form</p>
            <span className="hl-hero__field" aria-hidden="true" />
            <span className="hl-hero__field hl-hero__field--short" aria-hidden="true" />
            <span className="hl-hero__field" aria-hidden="true" />
            <span className="hl-hero__send">Send enquiry</span>
            <span className="hl-hero__sent">✓ Sent — routed</span>
          </div>

          <div className="hl-hero__route" aria-hidden="true">
            <span />
            <span />
          </div>

          <div className="hl-hero__status hl-artifact-card" data-hl-hero-artifact>
            <p className="hl-artifact-label">New enquiry</p>
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
        className="container container--flow hl-hero__journey"
        data-hl-journey
        data-hl-hero-journey
      >
        <p className="eyebrow" data-hl-hero-item>
          How a typical enquiry plays out
        </p>
        <ol>
          {JOURNEY.map(([number, title], index) => (
            <li key={number} data-hl-hero-item>
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
