import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { CONTACT_PATH } from "@/config/routes";
import { PRIMARY_CTA_LABEL, PRIMARY_CTA_LABEL_SHORT } from "@/lib/cta/labels";

/* Fit only. The non-claims that used to sit in the second column — no
   guaranteed rankings, a website alone does not create demand — are answered
   once in the FAQ, where an objection is actually being answered. */
const GOOD_FIT = [
  "An independent clinic or expert-led business where customers compare carefully before choosing.",
  "Each enquiry represents a real decision — a patient, a project, a client — worth getting right.",
  "You already have a website that does its job, and what needs fixing is the handling around it.",
  "You want a website you can maintain and adapt yourself, not one locked behind an agency.",
  "Established or newer — as long as getting the website and its handling right from the start matters to you.",
];

const NOT_FIT = [
  "Chasing the cheapest website available",
  "Looking for a brochure nobody has to act on",
  "Wanting another software platform to operate day to day",
];

const REVIEW_STEPS: readonly {
  title: string;
  body: string;
  tag: string;
  icon: IconName;
}[] = [
  {
    title: "How enquiries and customers reach you today.",
    body: "The website, where visibility already comes from, and what happens after contact. That sets the starting point.",
    tag: "You share",
    icon: "message-square",
  },
  {
    title: "The path from search to a made decision.",
    body: "Local presence, the pages people actually land on, the evidence they see, and the route from interest to a useful enquiry.",
    tag: "We examine",
    icon: "search",
  },
  {
    title: "A prioritised starting point, not a pitch.",
    body: "The review sets out what is worth doing first. Scope and cost are agreed before anything begins, and the decision is yours.",
    tag: "You decide",
    icon: "circle-check",
  },
];

export function HomeFit() {
  return (
    <section id="fit" className="home-fit section">
      <div className="container section-intro" data-home-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-home-sequence-item>
            Right fit
          </p>
          <h2 data-home-sequence-item>
            For independent clinics and expert-led businesses{" "}
            <em>whose customers compare carefully before they choose.</em>
          </h2>
        </div>
        <div className="section-copy-group">
          <p data-home-sequence-item>
            We would rather say this plainly than let a website assume it. MindWP works best where
            each enquiry has real value and your customers already compare before they choose.
          </p>
        </div>
      </div>

      <div className="container container--split home-fit__layout">
        <div className="home-fit__good" data-home-sequence>
          <p className="home-artifact-label" data-home-sequence-item>
            A good fit if
          </p>
          <ul data-home-stagger>
            {GOOD_FIT.map((item) => (
              <li key={item} data-home-stagger-item>
                <span aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <aside className="home-fit__not" data-home-sequence>
          <p className="home-artifact-label" data-home-sequence-item>
            Not the right fit if
          </p>
          <ul data-home-stagger>
            {NOT_FIT.map((item) => (
              <li key={item} data-home-stagger-item>
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

export function HomeReview() {
  return (
    <section id="review" className="home-review section on-dark">
      <div className="container section-intro--split home-review__layout">
        <div className="home-review__intro section-intro" data-home-sequence>
          <div className="section-title-group">
            <p className="eyebrow" data-home-sequence-item>
              How we start
            </p>
            <h2 data-home-sequence-item>
              First we review how people find, choose and contact you.{" "}
              <em>Then we show you where to start.</em>
            </h2>
          </div>
          <p data-home-sequence-item>
            The Visibility &amp; Enquiry Review looks at how people find you, whether the website
            answers what they need, and what happens once someone makes contact. It works whether
            you have a website you are happy with, one you know needs replacing, or none yet.
          </p>
          <Button href={CONTACT_PATH} variant="on-dark" data-home-sequence-item>
            {PRIMARY_CTA_LABEL_SHORT}
          </Button>
          <small data-home-sequence-item>
            Any project scope and cost are agreed after the review, never before it.
          </small>
        </div>

        <ol className="home-review__steps" data-home-stagger>
          {REVIEW_STEPS.map((step) => (
            <li key={step.title} data-home-stagger-item>
              <span>
                <Icon name={step.icon} size={18} />
              </span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
              <small>{step.tag}</small>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/**
 * The invitation, not a second explanation of the Review. The section above
 * owns what the Review examines and how the decision is reached; repeating it
 * here made the pair read as one section twice with the FAQ in between.
 *
 * The five-icon row that sat below the copy carried no information — it echoed
 * the service count and nothing else — so it is gone rather than relabelled
 * into a service list this page already has twice.
 */
export function HomeClosing() {
  return (
    <section id="closing" className="home-closing section on-dark">
      <div className="container section-intro section-intro--centered" data-home-sequence>
        <p className="eyebrow eyebrow--centered" data-home-sequence-item>
          Where to start
        </p>
        <h2 className="display-feature" data-home-sequence-item>
          See what should become easier <em>across your visibility, website and enquiry path.</em>
        </h2>
        <p data-home-sequence-item>
          Tell us how people find and contact you today, and the review will show you where to
          start. Scope and cost follow from what it finds.
        </p>
        <Button href={CONTACT_PATH} variant="on-dark" data-home-sequence-item>
          {PRIMARY_CTA_LABEL}
        </Button>
      </div>
    </section>
  );
}
