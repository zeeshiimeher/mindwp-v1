import { Button } from "@/components/ui/Button";
import { CONTACT_PATH } from "@/config/routes";
import { PRIMARY_CTA_LABEL, SECONDARY_CTA_LABEL } from "@/lib/cta/labels";

/**
 * §1. The page's spine starts here: the same record §3 pays off, opened with
 * its important half unfilled. The three empty fields are the loudest thing on
 * the object, which is the headline rendered rather than illustrated.
 */
export function FucHero() {
  return (
    <section id="hero" className="fuc-hero section on-dark">
      <div className="container container--split fuc-hero__top">
        <div className="fuc-hero__intro container--flow">
          <div className="section-title-group">
            <p className="eyebrow">Follow-up systems</p>
            <h1>
              The enquiry was answered. <em>The next step was left to memory.</em>
            </h1>
          </div>

          <p className="fuc-hero__lede text-lead">
            Someone replied the same morning, and the reply was a good one. Then the conversation
            went quiet — not because the answer was wrong, but because nothing held the next move.
            MindWP builds the record that keeps an open opportunity owned, in context and pointed at
            a next action you can justify.
          </p>

          <div className="fuc-hero__actions">
            <Button href={CONTACT_PATH} variant="on-dark" className="btn-lg">
              {PRIMARY_CTA_LABEL}
            </Button>
            <Button href="/#work" variant="ghost-dark">
              {SECONDARY_CTA_LABEL}
            </Button>
          </div>
        </div>

        <div className="fuc-hero__art-column">
          <FucHeroRecord />
        </div>
      </div>
    </section>
  );
}

/**
 * The unfilled record. Everything that happened is set small and quiet; the
 * three fields that decide whether the opportunity is still real are set at
 * scale with nothing after them. The absence is the composition.
 */
function FucHeroRecord() {
  return (
    <figure className="fuc-openrecord">
      <figcaption className="fuc-openrecord__head">
        <span className="fuc-artifact-label">Open enquiry</span>
        <span className="fuc-openrecord__subject">Request for a written estimate</span>
      </figcaption>

      <dl className="fuc-openrecord__known">
        <div>
          <dt>Received</dt>
          <dd>Tue 09:14</dd>
        </div>
        <div>
          <dt>Answered</dt>
          <dd>Tue 11:40</dd>
        </div>
      </dl>

      {/* Leader lines running to nothing. The three fields that decide whether
          this is still an opportunity are the only things set at scale, and
          each one resolves to the same answer. */}
      <dl className="fuc-openrecord__missing">
        {["Owner", "Status", "Next action"].map((field) => (
          <div key={field}>
            <dt>{field}</dt>
            <dd>Not recorded</dd>
          </div>
        ))}
      </dl>
    </figure>
  );
}
