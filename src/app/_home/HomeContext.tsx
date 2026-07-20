const CLINIC_QUESTIONS = [
  "Is this treatment right for my case?",
  "Who would actually be treating me?",
  "What happens at the first consultation?",
];

const CLINIC_LEADS = [
  "Treatment pages that answer a specific concern",
  "The practitioner — named and visible up front",
  "A private, unhurried consultation path",
];

const HOME_QUESTIONS = [
  "Have they done work like mine?",
  "Do they actually cover my area?",
  "What happens at the survey?",
];

const HOME_LEADS = [
  ["Proof", "Finished projects, shown by service"],
  ["Coverage", "A service area that is specific, not implied"],
  ["Next step", "A survey or estimate you can actually book"],
] as const;

export function HomeContext() {
  return (
    <section id="context" className="home-context section on-dark">
      <div
        className="container container--content section-intro section-intro--centered"
        data-home-sequence
      >
        <p className="eyebrow eyebrow--centered" data-home-sequence-item>
          Built with context
        </p>
        <h2 data-home-sequence-item>
          The website should <span className="home-heading-muted">understand the work.</span>
        </h2>
        <p data-home-sequence-item>
          A patient considering treatment and a homeowner planning a major project are both looking
          for confidence — just not in the same evidence, the same language, or the same next step.
          So the structure, the proof and the ask are drawn from the work itself.
        </p>
      </div>

      <div className="container home-context__comparison" data-home-stagger>
        <article data-home-stagger-item>
          <div className="home-context__heading">
            <small>01</small>
            <h3>Specialist clinics</h3>
          </div>
          <p className="home-editorial-note">
            The patient moves carefully. Credibility is weighed before contact, and the first step
            has to feel private.
          </p>
          <p className="home-artifact-label">What a patient is really asking</p>
          <ol className="home-context__questions">
            {CLINIC_QUESTIONS.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ol>
          <p className="home-artifact-label">So the website leads with</p>
          <ul className="home-context__leads">
            {CLINIC_LEADS.map((lead) => (
              <li key={lead}>{lead}</li>
            ))}
          </ul>
        </article>

        <article data-home-stagger-item>
          <div className="home-context__heading">
            <small>02</small>
            <h3>Home services</h3>
          </div>
          <p className="home-editorial-note">
            The homeowner is deciding who to let into the house. Finished work nearby does most of
            the convincing.
          </p>
          <p className="home-artifact-label">What a homeowner is really asking</p>
          <ol className="home-context__questions home-context__questions--numbered">
            {HOME_QUESTIONS.map((question, index) => (
              <li key={question}>
                <small>0{index + 1}</small>
                {question}
              </li>
            ))}
          </ol>
          <p className="home-artifact-label">So the website leads with</p>
          <dl className="home-context__tiles">
            {HOME_LEADS.map(([term, description]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>{description}</dd>
              </div>
            ))}
          </dl>
        </article>
      </div>

      <p className="container container--content home-context__closing" data-home-fade>
        Different work, different evidence, different first step — which is why every build starts
        by understanding yours.
      </p>
    </section>
  );
}
