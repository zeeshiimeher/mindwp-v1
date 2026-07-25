import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { CONTACT_PATH } from "@/config/routes";
import { PRIMARY_CTA_LABEL } from "@/lib/cta/labels";

const CLOSING_ICONS: readonly IconName[] = ["globe", "search", "message-square", "circle-check", "star"];

/**
 * Reuses Home Closing's exact composition — centered eyebrow, heading, icon
 * row and CTA, all navy — per the user's explicit instruction: no paper
 * band, no merge with Home Review's process content.
 */
export function SwsClosing() {
  return (
    <section id="visibility-enquiry-review" className="sws-closing section on-dark">
      <div className="container section-intro section-intro--centered" data-sws-sequence>
        <p className="eyebrow eyebrow--centered" data-sws-sequence-item>
          Visibility &amp; enquiry review
        </p>
        <h2 className="display-feature" data-sws-sequence-item>
          See what should become easier{" "}
          <em>before deciding what to rebuild.</em>
        </h2>
        <p data-sws-sequence-item>
          One private conversation. MindWP reviews your visibility, your current website and the
          path an enquiry takes, then shows you what&apos;s worth fixing first — useful whether or
          not a rebuild follows.
        </p>
        <div
          className="sws-closing__icons"
          role="img"
          aria-label="Visibility, evaluation, enquiry, decision and proof — the path a Smart Website System is built around"
          data-sws-stagger
        >
          {CLOSING_ICONS.map((icon) => (
            <span key={icon} data-sws-stagger-item>
              <Icon name={icon} size={18} />
            </span>
          ))}
        </div>
        <Button href={CONTACT_PATH} variant="on-dark" data-sws-sequence-item>
          {PRIMARY_CTA_LABEL}
        </Button>
      </div>
    </section>
  );
}
