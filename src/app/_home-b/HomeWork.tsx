import Image from "next/image";

const WORK_ITEMS = [
  ["Healthcare", "Healthcare service page", "blue", "work-healthcare-service-page.png"],
  ["Retail", "Optical retail website", "sage", "work-optical-retail-site.png"],
  ["Property", "Property management website", "steel", "work-property-management-site.png"],
  ["Product", "SaaS product website", "blue", "work-saas-product-site.png"],
  ["Support", "Support program website", "sand", "work-support-program-site.png"],
  ["Tourism", "Tourism service website", "aqua", "work-tourism-service-site.png"],
] as const;

export function HomeWork() {
  return (
    <section id="work" className="home-b-work section on-mist">
      <div className="container section-intro section-intro--split" data-home-b-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-home-b-sequence-item>
            The work, applied
          </p>
          <h2 data-home-b-sequence-item>
            See how strategy, structure and execution <em>come together.</em>
          </h2>
        </div>
        <div className="section-copy-group">
          <p data-home-b-sequence-item>
            Judge it the way a buyer would: the structure behind each page, the design decisions
            that shape it, and the thinking a specific business actually needed — not a gallery of
            pretty screens.
          </p>
        </div>
      </div>

      <div className="container home-b-work__feature" data-home-b-fade>
        <div className="home-b-browser home-b-work__browser">
          <div className="home-b-browser__bar">
            <span className="home-b-browser__dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span>Home services lead-gen site</span>
          </div>
          <div className="home-b-work__hero-preview">
            <Image
              src="/work/work-home-services-site.png"
              alt="Home services lead-generation website homepage"
              fill
              sizes="(min-width: 64rem) 68rem, 100vw"
              className="home-b-work__hero-image"
            />
          </div>
        </div>
        <div className="home-b-work__caption">
          <div>
            <small>Home services</small>
            <strong>Home services lead-gen site</strong>
          </div>
          <p>
            Offer clarity, local proof and a clear action path, built into one working homepage
            rather than described in a proposal.
          </p>
        </div>
      </div>

      <div className="container home-b-work__grid" data-home-b-stagger>
        {WORK_ITEMS.map(([category, title, tone, file]) => (
          <article className="home-b-work__card" key={title} data-home-b-stagger-item>
            <div className={`home-b-work__preview home-b-work__preview--${tone}`}>
              <Image
                src={`/work/${file}`}
                alt={`${title} homepage`}
                fill
                sizes="(min-width: 64rem) 22rem, (min-width: 40rem) 45vw, 90vw"
                className="home-b-work__card-image"
              />
              <span className="home-b-browser__dots" aria-hidden="true">
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
