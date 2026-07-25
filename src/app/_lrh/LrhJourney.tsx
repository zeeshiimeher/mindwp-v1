import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { CONTACT_PATH } from "@/config/routes";
import { PRIMARY_CTA_LABEL } from "@/lib/cta/labels";

/**
 * Right fit opens on the statement alone — no eyebrow above it and no lede
 * beneath — because the qualification is the heading. Each condition then
 * leads with a short bold clause and explains itself in one small line, so the
 * column reads as five decisions rather than five sentences.
 */
const GOOD_FIT: readonly (readonly [string, string])[] = [
  [
    "Enquiries already arrive",
    "By phone, form or message — and some are missed or answered late.",
  ],
  ["Each one is worth something", "Real money or real trust, so losing one is not a rounding error."],
  ["The phone rings while you work", "With a patient, on a job, or after you have closed."],
  ["Someone can own it", "A person, or a rota, who takes responsibility after the first response."],
  [
    "You want it configured, not handed over",
    "A working setup, rather than an empty platform to make sense of yourselves.",
  ],
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
    <section id="fit" className="lrh-fit section on-mist">
      <div className="container container--split lrh-fit__layout">
        <div className="lrh-fit__good" data-lrh-sequence>
          <h2 data-lrh-sequence-item>
            Best where worthwhile enquiries already arrive{" "}
            <em>— and someone is ready to own what follows.</em>
          </h2>
          <ul data-lrh-stagger>
            {GOOD_FIT.map(([lead, note]) => (
              <li key={lead} data-lrh-stagger-item>
                <span aria-hidden="true">✓</span>
                <span>
                  <strong>{lead}</strong>
                  <small>{note}</small>
                </span>
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
          <p className="lrh-fit__note" data-lrh-sequence-item>
            This protects demand that already exists. It does not create it, and it does not replace
            the person who has to answer.
          </p>
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
