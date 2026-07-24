import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { PRIMARY_CTA_LABEL, PRIMARY_CTA_LABEL_SHORT } from "@/lib/cta/labels";

const GOOD_FIT = [
  "An independent clinic or specialist service business where customers compare carefully before choosing.",
  "Each enquiry represents a real decision — a patient, a project, a client — worth getting right.",
  "Trust and evidence matter to your buyers at least as much as price.",
  "You want a website you can maintain and adapt yourself, not one locked behind an agency.",
  "Established or newer — as long as getting the website and its handling right from the start matters to you.",
];

const NOT_FIT = [
  "Chasing the cheapest website available",
  "Looking for a brochure nobody has to act on",
  "Expecting a website alone to create demand",
  "Expecting guaranteed rankings or instant enquiries",
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
    body: "The website, where visibility already comes from, and what happens after someone makes contact. That sets the starting point.",
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
    body: "A clear view of what is worth fixing first. Recommendations follow what the review finds — scope and cost are agreed before anything begins.",
    tag: "You decide",
    icon: "circle-check",
  },
];

const CLOSING_ICONS: readonly IconName[] = ["globe", "map-pin", "phone", "folder", "star"];

export function HomeFit() {
  return (
    <section id="fit" className="home-fit section">
      <div className="container section-intro" data-home-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-home-sequence-item>
            Right fit
          </p>
          <h2 data-home-sequence-item>
            For independent clinics and specialist service businesses{" "}
            <em>where customers choose carefully.</em>
          </h2>
        </div>
        <div className="section-copy-group">
          <p data-home-sequence-item>
            We would rather say this plainly than let a website assume it. MindWP works best for
            businesses whose customers already compare carefully before they choose, and where each
            enquiry has real value.
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
            answers what they need, and what happens once they make contact. What comes back is a
            clear starting point, not a generic package.
          </p>
          <Button href="#closing" variant="on-dark" data-home-sequence-item>
            {PRIMARY_CTA_LABEL_SHORT}
          </Button>
          <small data-home-sequence-item>
            No obligation to continue. No pitch hidden in the findings.
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

export function HomeClosing() {
  return (
    <section id="closing" className="home-closing section on-dark">
      <div
        className="container section-intro section-intro--centered"
        data-home-sequence
      >
        <p className="eyebrow eyebrow--centered" data-home-sequence-item>
          Visibility &amp; enquiry review
        </p>
        <h2 className="display-feature" data-home-sequence-item>
          See what should become easier <em>across your visibility, website and enquiry path.</em>
        </h2>
        <p data-home-sequence-item>
          One private conversation. MindWP reviews your visibility, your website and the path every
          enquiry takes, then shows you what&apos;s worth fixing first — useful whether or not you
          build together afterwards.
        </p>
        <div
          className="home-closing__icons"
          role="img"
          aria-label="The website and its optional supporting systems"
          data-home-stagger
        >
          {CLOSING_ICONS.map((icon) => (
            <span key={icon} data-home-stagger-item>
              <Icon name={icon} size={18} />
            </span>
          ))}
        </div>
        <Button href="#review" variant="on-dark" data-home-sequence-item>
          {PRIMARY_CTA_LABEL}
        </Button>
      </div>
    </section>
  );
}
