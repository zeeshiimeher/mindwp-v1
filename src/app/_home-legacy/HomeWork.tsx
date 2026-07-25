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
    <section id="work" className="hl-work section on-mist">
      <div className="container section-intro section-intro--split" data-hl-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-hl-sequence-item>
            Selected work
          </p>
          <h2 data-hl-sequence-item>
            Website work <em>you can inspect.</em>
          </h2>
        </div>
        <div className="section-copy-group">
          <p data-hl-sequence-item>
            Look at the work the way your own customers would look at yours: what each page
            answers, how it&apos;s organised, and the next step it leads to — not a gallery of
            pretty screens.
          </p>
        </div>
      </div>

      <div className="container hl-work__feature" data-hl-fade>
        <div className="hl-browser hl-work__browser">
          <div className="hl-browser__bar">
            <span className="hl-browser__dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span>Home services lead-gen site</span>
          </div>
          <div className="hl-work__hero-preview">
            <Image
              src="/work/work-hl-services-site.png"
              alt="Home services lead-generation website homepage"
              fill
              sizes="(min-width: 64rem) 68rem, 100vw"
              className="hl-work__hero-image"
            />
          </div>
        </div>
        <div className="hl-work__caption">
          <div>
            <small>Home services</small>
            <strong>Home services lead-gen site</strong>
          </div>
          <p>
            A clear offer, local proof and an obvious next step — built into one working homepage,
            not just described in a proposal.
          </p>
        </div>
      </div>

      <div className="container hl-work__grid" data-hl-stagger>
        {WORK_ITEMS.map(([category, title, tone, file]) => (
          <article className="hl-work__card" key={title} data-hl-stagger-item>
            <div className={`hl-work__preview hl-work__preview--${tone}`}>
              <Image
                src={`/work/${file}`}
                alt={`${title} homepage`}
                fill
                sizes="(min-width: 64rem) 22rem, (min-width: 40rem) 45vw, 90vw"
                className="hl-work__card-image"
              />
              <span className="hl-browser__dots" aria-hidden="true">
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
