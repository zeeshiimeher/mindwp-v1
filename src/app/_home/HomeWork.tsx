const WORK_ITEMS = [
  ["Healthcare", "Healthcare service page", "blue"],
  ["Retail", "Optical retail website", "sage"],
  ["Property", "Property management website", "steel"],
  ["Product", "SaaS product website", "blue"],
  ["Support", "Support program website", "sand"],
  ["Tourism", "Tourism service website", "aqua"],
] as const;

export function HomeWork() {
  return (
    <section id="work" className="home-work section on-mist">
      <div className="container section-intro section-intro--split" data-home-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-home-sequence-item>
            The work
          </p>
          <h2 data-home-sequence-item>
            Website work <span className="home-heading-muted">you can inspect.</span>
          </h2>
        </div>
        <div className="section-copy-group">
          <p data-home-sequence-item>
            Judge it the way a buyer would: the structure, the responsive decisions, the
            interactions, and the thinking each business needed. The craft should be visible before
            we ever speak.
          </p>
        </div>
      </div>

      <div className="container home-work__feature" data-home-fade>
        <div className="home-browser home-work__browser">
          <div className="home-browser__bar">
            <span className="home-browser__dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span>Home services lead-gen site</span>
          </div>
          <div className="home-work__hero-preview">
            <div>
              <strong>Your local garage door experts.</strong>
              <span>Schedule your repair now</span>
            </div>
          </div>
          <div className="home-work__service-strip">
            <div>
              <strong>Residential</strong>
              <span>Help choosing the right fit for a home.</span>
            </div>
            <div>
              <strong>Commercial</strong>
              <span>Custom doors for specific business needs.</span>
            </div>
            <div>
              <strong>Repair &amp; Service</strong>
              <span>Repair and service for existing doors.</span>
            </div>
          </div>
        </div>
        <div className="home-work__caption">
          <div>
            <small>Home services</small>
            <strong>Home services lead-gen site</strong>
          </div>
          <p>
            Offer clarity, local proof, action paths, and service-area trust visible in one built
            surface.
          </p>
        </div>
      </div>

      <div className="container home-work__grid" data-home-stagger>
        {WORK_ITEMS.map(([category, title, tone]) => (
          <article className="home-work__card" key={title} data-home-stagger-item>
            <div className={`home-work__preview home-work__preview--${tone}`}>
              <span className="home-browser__dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
            </div>
            <div>
              <small>{category}</small>
              <strong>{title}</strong>
              <span aria-hidden="true">→</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
