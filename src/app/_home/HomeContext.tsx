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

const EMPLOYER_QUESTIONS = [
  "Can we qualify for a licence at all?",
  "Who would actually be handling this?",
  "What happens if we are audited?",
];

const ADVISER_LEADS = [
  ["Situation", "Matter pages that name the employer's position, not the statute"],
  ["Accountability", "The adviser who would handle it, named"],
  ["First step", "A confidential conversation, not an open enquiry form"],
] as const;

export function HomeContext() {
  return (
    <section id="context" className="home-context section on-dark">
      <div
        className="container section-intro section-intro--centered"
        data-home-sequence
      >
        <p className="eyebrow eyebrow--centered" data-home-sequence-item>
          Smart website
        </p>
        <h2 data-home-sequence-item>
          The website is built around{" "}
          <em>the questions, evidence and actions people need to decide.</em>
        </h2>
        <p data-home-sequence-item>
          A patient weighing treatment and an employer facing a sponsor-licence decision are both looking
          for confidence — just not from the same questions, the same evidence, or the same next
          step. So each website is shaped around the work itself, not a shared template.
        </p>
      </div>

      <div className="container home-context__comparison" data-home-stagger>
        <article data-home-stagger-item>
          <div className="home-context__heading">
            <small>01</small>
            <h3>Specialist clinics</h3>
          </div>
          <p className="editorial-note">
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
            <h3>Immigration law boutiques</h3>
          </div>
          <p className="editorial-note">
            The employer is exposed. A licence carries duties they will be audited against, so
            credentials get checked long before anyone picks up the phone.
          </p>
          <p className="home-artifact-label">What an employer is really asking</p>
          <ol className="home-context__questions home-context__questions--numbered">
            {EMPLOYER_QUESTIONS.map((question, index) => (
              <li key={question}>
                <small>0{index + 1}</small>
                {question}
              </li>
            ))}
          </ol>
          <p className="home-artifact-label">So the website leads with</p>
          <dl className="home-context__tiles">
            {ADVISER_LEADS.map(([term, description]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>{description}</dd>
              </div>
            ))}
          </dl>
        </article>
      </div>

      <p className="container home-context__closing" data-home-fade>
        Different work, different evidence, different first step — which is why every build starts
        by understanding yours.
      </p>
    </section>
  );
}
