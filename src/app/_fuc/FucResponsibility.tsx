/**
 * §10 and §11 are the page's two quiet sections. Neither gets an artefact:
 * §10 is a set of decisions recorded in writing, and §11 is a fit judgement.
 * Both are carried by typeset arrangement and hairline structure on purpose —
 * an object here would be decoration on material that is genuinely plain.
 *
 * Nothing in §10 states a handover or ownership policy, because MindWP has not
 * settled one. What is stated is that each of these is decided and written down
 * per engagement, which is what the section heading actually claims.
 */
const TERMS = [
  {
    term: "Access",
    detail: "Which accounts exist, who holds them, and who can get in without asking us.",
  },
  {
    term: "Responsibility",
    detail:
      "What we run, what your team runs, and who is accountable when something stops working.",
  },
  {
    term: "Support",
    detail: "What ongoing support covers, what it costs, and how you reach us.",
  },
  {
    term: "After setup",
    detail:
      "Whether we keep managing this, hand it over with training, or both — and exactly what a handover includes.",
  },
  {
    term: "Third-party cost",
    detail: "Any subscription or licence the setup depends on, named and agreed before you commit.",
  },
] as const;

export function FucResponsibility() {
  return (
    <section className="fuc-responsibility section section--quiet">
      <div className="container container--content section-intro">
        <div className="section-title-group">
          <p className="eyebrow">Ongoing responsibility</p>
          <h2>
            Make access, responsibility, support and what happens after setup explicit before the
            work begins.
          </h2>
        </div>
        <p className="measure-copy">
          These are better asked at proposal stage than discovered six months in. The answers depend
          on what is actually being connected and who will run it, so we settle them in writing with
          you rather than applying a standard arrangement.
        </p>
      </div>

      <div className="container container--content">
        <dl className="fuc-terms">
          {TERMS.map((item) => (
            <div className="fuc-terms__row" key={item.term}>
              <dt>{item.term}</dt>
              <dd>{item.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

const WORTH = [
  "A single enquiry is worth a real conversation, and losing one matters.",
  "People routinely take weeks to decide — and tell you so.",
  "More than one person handles enquiries, or covers when someone is away.",
  "Your work already produces enquiries the website cannot hold on its own.",
] as const;

const NOT_YET = [
  "Most enquiries are settled the same day, or there is nothing left to decide.",
  "You compete mainly on price or availability.",
  "Nobody has capacity to work a next action once it exists — an unworked record is worse than none.",
] as const;

export function FucFit() {
  return (
    <section className="fuc-fit section section--quiet on-mist">
      <div className="container container--content section-intro">
        <div className="section-title-group">
          <p className="eyebrow">Right fit</p>
          <h2>
            Best where worthwhile decisions take time and open conversations are too valuable to
            leave to memory.
          </h2>
        </div>
      </div>

      <div className="container container--content fuc-fit__columns">
        <div className="fuc-fit__column">
          <p className="fuc-artifact-label fuc-fit__label">Worth building when</p>
          <ul className="fuc-fit__list">
            {WORTH.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>

        <div className="fuc-fit__column fuc-fit__column--not">
          <p className="fuc-artifact-label fuc-fit__label">Probably not yet when</p>
          <ul className="fuc-fit__list">
            {NOT_YET.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
