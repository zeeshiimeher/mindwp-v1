import { Button } from "@/components/ui/Button";
import type { IconName } from "@/components/ui/Icon";
import { Icon } from "@/components/ui/Icon";
import { buildContactHref } from "@/lib/contact/contactHref";
import { PRIMARY_CTA_LABEL, SECONDARY_CTA_LABEL } from "@/lib/cta/labels";

/**
 * Band 11 — Visibility & Enquiry Review (navy, id="review"). The offer, no form:
 * three lenses + a findings-first CTA, beside a "review sheet" artifact that
 * shows the review's structure (never fabricated findings). Every "Request a
 * Website Review" anchor on the page scrolls here.
 */
const LENSES: { icon: IconName; title: string; note: string }[] = [
  {
    icon: "circle-check",
    title: "What’s helping",
    note: "The parts of your site and enquiry path already doing real work.",
  },
  {
    icon: "search",
    title: "What’s getting in the way",
    note: "Where understanding, trust or the route to contact quietly breaks down.",
  },
  {
    icon: "arrow-right",
    title: "What matters next",
    note: "A short, honest order of priorities — not a pitch.",
  },
];

export function ReviewOfferB() {
  return (
    <section id="review" className="section hb-review hb-navy-field on-dark">
      <div className="container hb-review__grid">
        <div className="hb-review__offer" data-anim="rise">
          <div className="section-intro">
            <p className="eyebrow">Visibility &amp; Enquiry Review</p>
            <h2>
              First we review what’s helping, what’s in the way <em>and what matters next.</em>
            </h2>
            <p className="text-lead">
              Useful with or without an existing website. You get findings first — no obligation,
              no pressure to build.
            </p>
          </div>

          <ul className="hb-review__lenses" data-anim="stagger">
            {LENSES.map((l) => (
              <li className="hb-review__lens" key={l.title}>
                <span className="hb-review__lens-icon" aria-hidden="true">
                  <Icon name={l.icon} size={18} />
                </span>
                <div>
                  <p className="hb-review__lens-title">{l.title}</p>
                  <p className="hb-review__lens-note">{l.note}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="hb-review__actions">
            <Button href={buildContactHref({ source: "home" })} variant="on-dark">
              {PRIMARY_CTA_LABEL}
            </Button>
            <Button href="#work" variant="link" className="btn-on-dark">
              {SECONDARY_CTA_LABEL}
            </Button>
          </div>
        </div>

        <div className="hb-review__sheet" data-anim="rise" aria-hidden="true">
          <div className="hb-review__sheet-head">
            <span className="hb-review__sheet-title">Website Review</span>
            <span className="hb-review__sheet-tag">findings</span>
          </div>
          <div className="hb-review__sheet-body">
            {LENSES.map((l) => (
              <div className="hb-review__sheet-block" key={l.title}>
                <p className="hb-review__sheet-label">{l.title}</p>
                <span className="hb-review__sheet-line" />
                <span className="hb-review__sheet-line hb-review__sheet-line--short" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
