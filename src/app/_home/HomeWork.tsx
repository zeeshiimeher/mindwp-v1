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
    <section id="work" className="home-work section on-mist">
      <div className="container section-intro section-intro--split" data-home-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-home-sequence-item>
            The work, applied
          </p>
          <h2 data-home-sequence-item>
            See how strategy, structure and execution <em>come together.</em>
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
            <Image
              src="/work/work-home-services-site.png"
              alt="Home services lead-generation website homepage"
              fill
              sizes="(min-width: 64rem) 68rem, 100vw"
              className="home-work__hero-image"
            />
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
        {WORK_ITEMS.map(([category, title, tone, file]) => (
          <article className="home-work__card" key={title} data-home-stagger-item>
            <div className={`home-work__preview home-work__preview--${tone}`}>
              <Image
                src={`/work/${file}`}
                alt={`${title} homepage`}
                fill
                sizes="(min-width: 64rem) 22rem, (min-width: 40rem) 45vw, 90vw"
                className="home-work__card-image"
              />
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
