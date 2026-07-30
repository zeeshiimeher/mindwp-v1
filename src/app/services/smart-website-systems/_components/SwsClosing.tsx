import { Button } from "@/components/ui/Button";
import { CONTACT_PATH } from "@/config/routes";
import { PRIMARY_CTA_LABEL } from "@/lib/cta/labels";

/**
 * Visibility & Enquiry Review — plan section 14.
 *
 * Left-aligned rather than centred, so the last display line lands at the same
 * scale and axis as the first one and the page closes where it opened.
 *
 * Beneath it, the spine runs the full width unbroken. Section 2 shows that line
 * stopping; this is the same line resolved, and it is the one repetition on the
 * page that is meant to be recognised — it confirms the decision rather than
 * restating the argument.
 */
const STATIONS = 5;

export function SwsClosing() {
  return (
    <section id="closing" className="sws-closing section on-dark">
      <div className="container sws-closing__inner" data-sws-sequence>
        <p className="eyebrow" data-sws-sequence-item>
          Visibility &amp; Enquiry Review
        </p>
        <h2 className="display-feature" data-sws-sequence-item>
          Start with the website and enquiry system <em>your business actually needs.</em>
        </h2>
        <p data-sws-sequence-item>
          Tell us how people find you today and what happens after they make contact. The review
          comes back with what is worth building first — and the scope and cost follow from that,
          never before it.
        </p>
        <div className="sws-closing__actions" data-sws-sequence-item>
          <Button href={CONTACT_PATH} variant="on-dark" className="btn-lg">
            {PRIMARY_CTA_LABEL}
          </Button>
          <small>Scope and cost are agreed after the review, never before it.</small>
        </div>
      </div>

      <div className="sws-closing__spine" aria-hidden="true" data-sws-rules>
        <span className="sws-closing__rule" data-sws-rule />
        <span className="sws-closing__nodes">
          {Array.from({ length: STATIONS }, (_, index) => (
            <i key={index} />
          ))}
        </span>
      </div>
    </section>
  );
}
