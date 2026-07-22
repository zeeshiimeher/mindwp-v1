import { Button } from "@/components/ui/Button";
import { PRIMARY_CTA_LABEL, SECONDARY_CTA_LABEL } from "@/lib/cta/labels";

/**
 * Band 13 — Closing CTA (navy). Big two-tone statement over a faint motif that
 * echoes the hero's Find → Understand → Choose path — a quiet bookend.
 */
export function ClosingCtaB() {
  return (
    <section className="section hb-close hb-navy-field on-dark">
      <div className="hb-close__motif" aria-hidden="true">
        <svg viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid meet">
          <path
            className="hb-close__motif-path"
            d="M120 300 C 360 300, 380 120, 600 120 S 840 300, 1080 120"
            fill="none"
          />
          <circle className="hb-close__motif-node" cx="120" cy="300" r="7" />
          <circle className="hb-close__motif-node" cx="600" cy="120" r="7" />
          <circle className="hb-close__motif-node" cx="1080" cy="120" r="7" />
        </svg>
      </div>

      <div className="container hb-close__inner">
        <div className="section-intro section-intro--centered" data-anim="rise">
          <p className="eyebrow eyebrow--centered">Visibility &amp; enquiries</p>
          <h2 className="display-feature hb-close__title">
            See what your website and enquiry path <em>should make easier next.</em>
          </h2>
          <p className="text-lead">
            One clear read on where the decision is being made — and where it quietly stalls.
          </p>
          <div className="hb-close__actions">
            <Button href="#review" variant="on-dark">
              {PRIMARY_CTA_LABEL}
            </Button>
            <Button href="#work" variant="link" className="btn-on-dark">
              {SECONDARY_CTA_LABEL}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
