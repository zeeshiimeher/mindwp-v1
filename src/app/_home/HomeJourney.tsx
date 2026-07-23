import { HomeCompounds } from "@/app/_home/HomeCompounds";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { PRIMARY_CTA_LABEL } from "@/lib/cta/labels";

const GOOD_FIT = [
  "You run an established clinic or service business with real enquiries worth protecting.",
  "Calls, forms, quotes, bookings, or reviews are slipping between handoffs.",
  "Each patient or project is valuable enough to deserve a clear owner and next step.",
  "You value a clear, maintainable website you can actually edit.",
  "Or you are newer — but serious about setting the website and handling up properly from the start.",
];

const NOT_FIT = [
  "Chasing the cheapest website",
  "Looking for a brochure-only redesign",
  "Hoping a website alone will invent demand",
  "Expecting promised rankings or instant results",
  "Want another software platform to operate",
];

const REVIEW_STEPS: readonly {
  title: string;
  body: string;
  tag: string;
  icon: IconName;
}[] = [
  {
    title: "How work arrives today.",
    body: "The website, where enquiries come from, what happens after someone gets in touch — and what already works. That sets the agenda.",
    tag: "You share",
    icon: "message-square",
  },
  {
    title: "The site and the path around it.",
    body: "Pages, proof, local presence, and the route from first contact to next step — read against what your buyers actually need.",
    tag: "We examine",
    icon: "search",
  },
  {
    title: "Findings first, not a pitch.",
    body: "A clear view of what is worth fixing and what can wait. Recommendations follow your situation, not a package — and scope and cost are agreed before any work begins.",
    tag: "You decide",
    icon: "circle-check",
  },
];

const CLOSING_ICONS: readonly IconName[] = ["globe", "map-pin", "phone", "folder", "star"];

export function HomeCompoundingSection() {
  return (
    <section id="compounds" className="home-compounds section">
      <div
        className="container container--content section-intro section-intro--centered"
        data-home-sequence
      >
        <p className="eyebrow eyebrow--centered" data-home-sequence-item>
          Clear ownership
        </p>
        <h2 data-home-sequence-item>
          Know what MindWP builds,{" "}
          <em>what your business owns and what happens after launch.</em>
        </h2>
        <p data-home-sequence-item>
          The starting point differs by business; what compounds does not. Clearer pages, stronger
          proof, more useful reviews, better handling — each improvement stays, and the next one is
          informed by real enquiries rather than guesswork. Hand the site over or keep it managed;
          the layers are yours either way.
        </p>
      </div>
      <div className="container container--content">
        <HomeCompounds />
      </div>
    </section>
  );
}

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
            We would rather say so up front. A smart website system makes sense when there is real
            work to protect, and too much of it is slipping.
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
      <div className="container container--split home-review__layout">
        <div className="home-review__intro container--flow" data-home-sequence>
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
            You share how work arrives today; we examine the website and the path around it. What
            comes back is a read on what is worth fixing first — because every business starts from
            a different place.
          </p>
          <Button href="#closing" variant="on-dark" data-home-sequence-item>
            {PRIMARY_CTA_LABEL}
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
        className="container container--content section-intro section-intro--centered"
        data-home-sequence
      >
        <p className="eyebrow eyebrow--centered" data-home-sequence-item>
          Visibility &amp; enquiry review
        </p>
        <h2 className="display-feature" data-home-sequence-item>
          See what should become easier <em>across your visibility, website and enquiry path.</em>
        </h2>
        <p data-home-sequence-item>
          One private conversation. We review the website and the path around every enquiry, then
          show you which gaps are worth fixing first — useful whether or not we build together.
        </p>
        <div
          className="home-closing__icons"
          role="img"
          aria-label="The five connected systems"
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
