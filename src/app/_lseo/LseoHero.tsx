import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PRIMARY_CTA_LABEL } from "@/lib/cta/labels";

/**
 * 1 · Local SEO — the page opens on the two things the service actually joins
 * together: being found nearby, and being worth choosing once found. The
 * artefact is an illustrative search, never a client result.
 */
export function LseoHero() {
  return (
    <section id="hero" className="lsa-hero lsa-section section on-dark">
      <div className="container lsa-hero__layout">
        <div className="lsa-hero__copy" data-lsa-hero-sequence>
          <p className="eyebrow" data-lsa-sequence-item>
            Local SEO
          </p>
          <h1 data-lsa-sequence-item>
            <span>Be found nearby—</span>
            <em>and give customers a reason to choose you.</em>
          </h1>
          <p className="lsa-hero__lede text-lead" data-lsa-sequence-item>
            MindWP aligns the Google Business Profile, the website pages that matter, your business
            information and the reviews you already have — so nearby patients and customers can
            discover you, assess you and decide.
          </p>
          <p className="lsa-hero__audience" data-lsa-sequence-item>
            For clinics and expert-led businesses whose customers compare locally before choosing.
          </p>
          <div className="lsa-hero__action" data-lsa-sequence-item>
            <Button href="#review" variant="on-dark">
              {PRIMARY_CTA_LABEL}
            </Button>
            <small>
              A private review of what nearby customers can currently find — not an automated audit.
            </small>
          </div>
        </div>

        <div
          className="lsa-hero__artifact"
          data-lsa-hero-artifact-sequence
          aria-label="Illustrative local search, not a client result"
        >
          <p className="lsa-artifact-note" data-lsa-hero-artifact-item>
            Illustrative view
          </p>
          <div className="lsa-hero__search" data-lsa-hero-artifact-item>
            <Icon name="search" size={17} />
            <span>physiotherapist near me</span>
          </div>
          <div className="lsa-hero__result" data-lsa-hero-artifact-item>
            <div className="lsa-hero__result-title">
              <span className="lsa-icon-disc">
                <Icon name="map-pin" size={14} />
              </span>
              <strong>Your practice</strong>
            </div>
            <div className="lsa-hero__tags">
              <span>The service they searched</span>
              <span>An area you serve</span>
            </div>
            <ul>
              <li>
                <Icon name="circle-check" size={13} /> Details that agree everywhere
              </li>
              <li>
                <Icon name="circle-check" size={13} /> Genuine reviews in view
              </li>
            </ul>
          </div>
          <div className="lsa-hero__website" data-lsa-hero-artifact-item>
            <span>The page that answers it</span>
            <Icon name="globe" size={16} />
          </div>
        </div>
      </div>
    </section>
  );
}
