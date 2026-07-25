import { Icon } from "@/components/ui/Icon";

/**
 * 5 · Business profile — recomposed into the navy environment the page already
 * owned, but the four fanned cards are replaced by one large, concrete profile
 * artefact. The point of the section is that this surface answers practical
 * questions before the website is ever opened, so the artefact has to be
 * legible as a profile rather than a diagram of one.
 *
 * Everything shown is composed. No rating, count or client detail appears, and
 * the review row names Reputation & Review as the owner of requests and replies.
 */
const ANSWERS = [
  {
    question: "Is this the right kind of business?",
    detail: "The category, the services listed and the description match the work actually done.",
  },
  {
    question: "Do they cover where I am?",
    detail: "Locations and service areas reflect where the business genuinely works.",
  },
  {
    question: "Can I act on this now?",
    detail: "Hours, contact routes and access details are current and practical.",
  },
  {
    question: "Is there more worth looking at?",
    detail: "A clear route from the profile to the page that answers the question properly.",
  },
] as const;

const SERVICES = [
  "Sports injury",
  "Post-surgery rehab",
  "Back & neck pain",
  "Home visits",
] as const;

const QUESTIONS = [
  {
    question: "Do you treat post-operative knees?",
    answer: "Answered on the profile, and again on the treatment page.",
  },
  {
    question: "Do you visit patients at home?",
    answer: "Answered, with the areas genuinely covered.",
  },
] as const;

export function LseoProfile() {
  return (
    <section id="business-profile" className="lsa-profile lsa-section section on-dark">
      <div className="container lsa-profile__layout">
        <div className="lsa-profile__copy" data-lsa-sequence>
          <p className="eyebrow" data-lsa-sequence-item>
            Business profile
          </p>
          <h2 data-lsa-sequence-item>
            Make the first local impression <em>accurate, useful and worth exploring.</em>
          </h2>
          <p data-lsa-sequence-item>
            For most nearby customers the profile is the first real encounter with the business —
            often before the website is opened at all. It has to settle the practical questions
            quickly, then give a suitable customer a reason to look further.
          </p>

          <dl className="lsa-profile__answers" data-lsa-stagger>
            {ANSWERS.map((item) => (
              <div key={item.question} data-lsa-stagger-item>
                <dt>{item.question}</dt>
                <dd>{item.detail}</dd>
              </div>
            ))}
          </dl>

          <p className="lsa-profile__note" data-lsa-fade>
            Nothing is invented to fill a field. A profile can only carry details the business can
            genuinely stand behind.
          </p>
        </div>

        <div
          className="lsa-profile__artifact"
          aria-label="Illustrative business profile, not a client profile"
        >
          <p className="lsa-artifact-note" data-lsa-fade>
            Illustrative view
          </p>

          <article className="lsa-profile__card" data-lsa-stagger>
            <header data-lsa-stagger-item>
              <div>
                <h3>Your practice</h3>
                <p>Physiotherapy clinic · Kingston upon Thames</p>
              </div>
              <span className="lsa-profile__state">Open · until 6pm</span>
            </header>

            <div className="lsa-profile__scene" data-lsa-stagger-item aria-hidden="true">
              <span className="lsa-profile__pin">
                <Icon name="map-pin" size={16} />
              </span>
              <small>The area actually served</small>
            </div>

            <div className="lsa-profile__actions" data-lsa-stagger-item>
              <span>
                <Icon name="phone" size={13} /> Call
              </span>
              <span>
                <Icon name="map-pin" size={13} /> Directions
              </span>
              <span className="is-primary">
                <Icon name="globe" size={13} /> Website
              </span>
            </div>

            <div className="lsa-profile__block" data-lsa-stagger-item>
              <small>Services listed</small>
              <ul className="lsa-profile__chips">
                {SERVICES.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>

            <div className="lsa-profile__block" data-lsa-stagger-item>
              <small>Questions people actually ask</small>
              <ul className="lsa-profile__qa">
                {QUESTIONS.map((item) => (
                  <li key={item.question}>
                    <strong>{item.question}</strong>
                    <span>{item.answer}</span>
                  </li>
                ))}
              </ul>
            </div>

            <footer data-lsa-stagger-item>
              <span>
                <Icon name="star" size={13} /> Existing reviews, visible where people check
              </span>
              <small>Requests &amp; replies: Reputation &amp; Review</small>
            </footer>
          </article>

          <div className="lsa-profile__annotations" data-lsa-fade>
            <span>
              <Icon name="circle-check" size={13} /> Only details the business can support
            </span>
            <span>
              <Icon name="arrow-right" size={13} /> A route to the page that answers it
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
