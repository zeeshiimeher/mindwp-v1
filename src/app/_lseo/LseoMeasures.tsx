import { Icon } from "@/components/ui/Icon";

/**
 * 10 · Meaningful measures.
 *
 * Four cards, each closed by a tinted strip carrying its own limit. The
 * repeated card-then-strip rhythm is the argument of the section: every measure
 * arrives with the thing it cannot tell you, four times over, before the
 * closing statement generalises it. Nothing here claims attribution, a
 * position, or credit for an enquiry.
 */
const MEASURES = [
  {
    number: "01",
    title: "Discovery",
    job: "Whether the right nearby searches surface the business at all.",
    watched: [
      "Which services and areas the business appears for",
      "Whether newly added services start appearing",
      "Direction of travel across a period, not a single check",
    ],
    limit: "Not the exact position every person sees.",
  },
  {
    number: "02",
    title: "Profile actions",
    job: "What people do once the profile has answered them.",
    watched: [
      "Calls started from the profile",
      "Direction and route requests",
      "Taps through to the website",
      "Which photos and questions hold attention",
    ],
    limit: "Not who those people were, or what they decided next.",
  },
  {
    number: "03",
    title: "Website behaviour",
    job: "Whether the page carries the decision forward.",
    watched: [
      "Which service and location pages get read",
      "How far down the page people actually get",
      "Where they leave, and what they left before seeing",
    ],
    limit: "Not why an individual visitor changed their mind.",
  },
  {
    number: "04",
    title: "Enquiry signals",
    job: "Whether the enquiries arriving are the right kind.",
    watched: [
      "Which service or treatment the enquiry names",
      "Whether it sits in an area you genuinely serve",
      "Whether it matches the work you want more of",
    ],
    limit: "Not a complete count — calls and referrals rarely announce their source.",
  },
] as const;

export function LseoMeasures() {
  return (
    <section id="meaningful-measures" className="lsa-measures lsa-section section">
      <div className="container lsa-measures__inner">
        <div className="lsa-centered-intro" data-lsa-sequence>
          <p className="eyebrow eyebrow--centered" data-lsa-sequence-item>
            Meaningful measures
          </p>
          <h2 data-lsa-sequence-item>
            Measure discovery, profile actions, website behaviour and useful enquiry signals—
            <em>not rankings alone.</em>
          </h2>
          <p data-lsa-sequence-item>
            A ranking screenshot describes one moment, on one device, for one person. Progress reads
            better across four connected views — and it reads properly only when they are taken
            together, over time, rather than one number at a time.
          </p>
        </div>

        <ol className="lsa-measures__grid" data-lsa-stagger>
          {MEASURES.map((measure) => (
            <li key={measure.number} data-lsa-stagger-item>
              <article>
                <header>
                  <span aria-hidden="true">{measure.number}</span>
                  <div>
                    <h3>{measure.title}</h3>
                    <p>{measure.job}</p>
                  </div>
                </header>
                <ul>
                  {measure.watched.map((item) => (
                    <li key={item}>
                      <Icon name="check" size={13} />
                      {item}
                    </li>
                  ))}
                </ul>
                <footer>
                  <small>Cannot tell you</small>
                  <p>{measure.limit}</p>
                </footer>
              </article>
            </li>
          ))}
        </ol>

        <div className="lsa-measures__honesty" data-lsa-fade>
          <h3>What measurement never claims</h3>
          <p>
            Perfect attribution, a guaranteed position, or credit for every enquiry. Some decisions
            happen entirely off-screen — a call from a saved number, a recommendation over coffee, a
            second visit three days later. The measures exist to decide what to improve next, not to
            take the credit.
          </p>
        </div>
      </div>
    </section>
  );
}
