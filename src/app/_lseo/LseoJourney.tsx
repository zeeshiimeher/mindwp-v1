import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { CONTACT_PATH } from "@/config/routes";
import { PRIMARY_CTA_LABEL, PRIMARY_CTA_LABEL_SHORT } from "@/lib/cta/labels";

/**
 * 12 · Where to start, 13 · Right fit and 15 · Visibility & Enquiry Review —
 * the closing arc. Priority is set by the weakest part of the local presence,
 * not by a checklist applied identically to every business.
 */
const START_STEPS = [
  {
    title: "Inspect",
    description: "What nearby customers can currently find across Search, Maps and the website.",
  },
  {
    title: "Compare",
    description:
      "Where the profile, the pages, the details and the proof disagree with each other.",
  },
  {
    title: "Locate the weakest part",
    description: "The one costing the most trust today, rather than the one easiest to fix.",
  },
  {
    title: "Agree the order",
    description: "What is corrected first, what follows, and what can honestly wait.",
  },
  {
    title: "Keep it current",
    description: "What has to stay maintained as the business itself changes.",
  },
] as const;

const GOOD_FIT = [
  "A clinic or expert-led business with real local demand already worth protecting",
  "Nearby customers compare carefully, and each enquiry represents a considered decision",
  "The services and locations you list are ones you genuinely provide and serve",
  "You will improve the website when evidence shows it is holding the local work back",
  "You want existing reviews treated as proof, not chased for their own sake",
] as const;

const NOT_FIT = [
  "Ranking promises",
  "Guaranteed leads or bookings",
  "Fabricated or incentivised reviews",
  "Pages for places you do not serve",
  "The cheapest generic package",
] as const;

const CLOSING_ICONS: readonly IconName[] = ["search", "map-pin", "circle-check", "star", "globe"];

/**
 * The five steps as a queue: the first opened out, the rest waiting beneath at
 * lighter weight. Order is the deliverable here, so the design makes order
 * visible rather than listing five equal items.
 */
export function LseoStart() {
  const [lead, ...queue] = START_STEPS;

  return (
    <section id="where-to-start" className="lsa-start lsa-section section">
      <div className="container container--narrow lsa-start__inner">
        <div className="lsa-section-intro" data-lsa-sequence>
          <p className="eyebrow" data-lsa-sequence-item>
            Where to start
          </p>
          <h2 data-lsa-sequence-item>
            The weakest part of your local presence <em>should set the priority.</em>
          </h2>
          <p data-lsa-sequence-item>
            An identical checklist delivered to every business spends most of its effort on things
            that were already fine. We look first, then start where the loss is.
          </p>
        </div>

        <div className="lsa-start__queue">
          <article className="lsa-start__lead" data-lsa-fade>
            <p className="lsa-start__tag">Step 01 · where it begins</p>
            <h3>{lead.title}</h3>
            <p>{lead.description}</p>
          </article>

          <ol data-lsa-stagger>
            {queue.map((step, index) => (
              <li key={step.title} data-lsa-stagger-item>
                <span>{String(index + 2).padStart(2, "0")}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <p className="lsa-start__note" data-lsa-fade>
          The order is the useful part. Whatever is corrected first should be the thing costing the
          most trust today.
        </p>

        <Button href="#review" data-lsa-fade>
          {PRIMARY_CTA_LABEL_SHORT}
        </Button>
      </div>
    </section>
  );
}

export function LseoFit() {
  return (
    <section id="right-fit" className="lsa-fit lsa-section section">
      <div className="container lsa-fit__inner">
        <div className="lsa-section-intro" data-lsa-sequence>
          <p className="eyebrow" data-lsa-sequence-item>
            Right fit
          </p>
          <h2 data-lsa-sequence-item>
            Best for clinics and expert-led businesses{" "}
            <em>whose customers compare locally before choosing.</em>
          </h2>
          <p data-lsa-sequence-item>
            We would rather say this up front. Local SEO Authority makes sense when there is real
            local work to protect and nearby customers are not finding or verifying it early enough.
            When something else is the bigger problem, we will say that instead.
          </p>
        </div>
        <div className="lsa-fit__layout">
          <div className="lsa-fit__good">
            <h3 data-lsa-fade>A good fit if</h3>
            <ul data-lsa-stagger>
              {GOOD_FIT.map((item) => (
                <li key={item} data-lsa-stagger-item>
                  <span aria-hidden="true">
                    <Icon name="check" size={14} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <aside className="lsa-fit__not">
            <h3 data-lsa-fade>Not the right fit if you want</h3>
            <ul data-lsa-stagger>
              {NOT_FIT.map((item) => (
                <li key={item} data-lsa-stagger-item>
                  <span aria-hidden="true">
                    <Icon name="x" size={12} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

export function LseoClosing() {
  return (
    <section id="review" className="lsa-closing lsa-section section on-dark">
      <div className="container container--narrow lsa-closing__inner" data-lsa-sequence>
        <p className="eyebrow eyebrow--centered" data-lsa-sequence-item>
          Visibility &amp; enquiry review
        </p>
        <h2 data-lsa-sequence-item>
          See what nearby customers can find, understand and act on <em>before they choose.</em>
        </h2>
        <p data-lsa-sequence-item>
          One private conversation. We review how nearby people find you, what they see across
          Search, Maps and the website, what supports trust today, and where improvement should
          begin — useful whether or not we work together afterwards.
        </p>
        <div
          className="lsa-closing__icons"
          aria-hidden="true"
          data-lsa-sequence-item
          data-lsa-stagger
        >
          {CLOSING_ICONS.map((icon) => (
            <span key={icon} data-lsa-stagger-item>
              <Icon name={icon} size={18} />
            </span>
          ))}
        </div>
        <Button href={CONTACT_PATH} variant="on-dark" data-lsa-sequence-item>
          {PRIMARY_CTA_LABEL}
        </Button>
      </div>
    </section>
  );
}
