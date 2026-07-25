import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { CONTACT_PATH } from "@/config/routes";
import { PRIMARY_CTA_LABEL } from "@/lib/cta/labels";

const GOOD_FIT = [
  "Enquiries already arrive by phone, form or message — and some are missed or answered late.",
  "Each enquiry is worth real money or real trust, so losing one is not a rounding error.",
  "Calls come in while your team is with a patient, on a job, or closed.",
  "There is a person, or a rota, who can genuinely own what happens after the first response.",
  "You want the same first move every time, without being handed an empty platform to configure and make sense of yourselves.",
];

const NOT_FIT = [
  "Looking for something to answer enquiries instead of a person",
  "Expecting automation to book, quote or advise",
  "Hoping response handling will create demand that is not there",
  "Unwilling to agree what the first response says",
  "Nobody available to own an enquiry once it is routed",
];

/**
 * The closing resolves into the same three words the hero opened on, so the
 * page closes its own loop rather than repeating the Homepage's summary of the
 * whole business.
 */
const RESOLUTION: readonly { icon: IconName; label: string }[] = [
  { icon: "message-square", label: "Arrived" },
  { icon: "mail", label: "Acknowledged" },
  { icon: "circle-check", label: "Owned" },
];

export function LrhFit() {
  return (
    <section id="fit" className="lrh-fit section">
      <div className="container section-intro" data-lrh-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-lrh-sequence-item>
            Right fit
          </p>
          <h2 data-lrh-sequence-item>
            Best where worthwhile enquiries arrive{" "}
            <em>— and a person is ready to own what follows.</em>
          </h2>
        </div>
        <div className="section-copy-group">
          <p data-lrh-sequence-item>
            Lead Response &amp; Handling protects demand that already exists. It does not create it,
            and it does not replace the person who has to answer. Both need to be true for it to be
            worth doing.
          </p>
        </div>
      </div>

      <div className="container container--split lrh-fit__layout">
        <div className="lrh-fit__good" data-lrh-sequence>
          <p className="lrh-artifact-label" data-lrh-sequence-item>
            A good fit if
          </p>
          <ul data-lrh-stagger>
            {GOOD_FIT.map((item) => (
              <li key={item} data-lrh-stagger-item>
                <span aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <aside className="lrh-fit__not" data-lrh-sequence>
          <p className="lrh-artifact-label" data-lrh-sequence-item>
            Not the right fit if
          </p>
          <ul data-lrh-stagger>
            {NOT_FIT.map((item) => (
              <li key={item} data-lrh-stagger-item>
                <span aria-hidden="true">×</span>
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}

export function LrhClosing() {
  return (
    <section id="closing" className="lrh-closing section on-dark">
      <div className="container section-intro section-intro--centered" data-lrh-sequence>
        <p className="eyebrow eyebrow--centered" data-lrh-sequence-item>
          Visibility &amp; enquiry review
        </p>
        <h2 className="display-feature" data-lrh-sequence-item>
          See whether each enquiry has a clear first move <em>and a visible owner.</em>
        </h2>
        <p data-lrh-sequence-item>
          One private conversation. MindWP looks at how enquiries reach you today, what happens
          after an enquiry arrives, and where clarity, momentum or ownership is being lost — useful
          whether or not we build anything together.
        </p>

        <ol
          className="lrh-closing__resolution"
          aria-label="What a handled enquiry has already been through"
          data-lrh-stagger
        >
          {RESOLUTION.map((step) => (
            <li key={step.label} data-lrh-stagger-item>
              <span aria-hidden="true">
                <Icon name={step.icon} size={18} />
              </span>
              {step.label}
            </li>
          ))}
        </ol>

        <Button href={CONTACT_PATH} variant="on-dark" data-lrh-sequence-item>
          {PRIMARY_CTA_LABEL}
        </Button>
      </div>
    </section>
  );
}
