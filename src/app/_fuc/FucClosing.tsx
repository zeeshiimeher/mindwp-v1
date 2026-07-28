import { Button } from "@/components/ui/Button";
import { buildContactHref } from "@/lib/contact/contactHref";
import { PRIMARY_CTA_LABEL, SECONDARY_CTA_LABEL } from "@/lib/cta/labels";

/**
 * §13. Closure returns to navy and to the page's three fields one last time —
 * the review is described as an examination of exactly what the page has spent
 * twelve sections defining, not as a generic audit.
 */
export function FucClosing() {
  return (
    <section id="review" className="fuc-closing section section--focal on-dark">
      <div className="container container--narrow fuc-closing__inner">
        <p className="eyebrow eyebrow--centered">Visibility &amp; enquiry review</p>
        <h2>See where open opportunities lose ownership, context or a credible next step.</h2>
        <p className="text-lead">
          We go through what actually happens after your first reply: which enquiries are still
          open, who would say they own them, what context survives a handover, and whether anything
          holds a next action with a reason and a date. You get a written view of where
          opportunities are being lost and what it would take to hold them — before any scope or
          cost is quoted.
        </p>

        <div className="fuc-closing__actions">
          <Button
            href={buildContactHref({ system: "follow-up-crm", source: "service" })}
            variant="on-dark"
            className="btn-lg"
          >
            {PRIMARY_CTA_LABEL}
          </Button>
          <Button href="/#work" variant="ghost-dark">
            {SECONDARY_CTA_LABEL}
          </Button>
        </div>
      </div>
    </section>
  );
}
