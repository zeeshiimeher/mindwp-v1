import Image from "next/image";

/**
 * Proof status is carried per item, not by one global sentence, so a mixed
 * catalogue can hold different evidence types without forcing every tile into
 * the same claim. All seven items were verified individually and are live
 * client websites, so they currently share one status; the field stays per item
 * because a demonstration build or design concept must be able to join without
 * rewriting the section's provenance.
 *
 * These assets are NOT anonymised. A blur covers the top-left logo area only;
 * trading names, telephone numbers, email and street addresses, towns and — on
 * the home services and SaaS items — strips of named reviewers all remain
 * legible. The source PNGs are 1440x1728 and are served from /public/work at
 * full resolution however small a tile renders, so display size hides nothing.
 * Never describe these as anonymised, obscured or redacted.
 *
 * Metrics visible inside a client's own screenshot ("$40M+", "40% de
 * performance") are that client's published claim. They are never restated in
 * MindWP copy and never presented as a MindWP measured outcome. Provenance
 * belongs in the visible label beside the work, not in alt text.
 */

const PUBLISHED = "Published client website";

const WORK_ITEMS = [
  {
    category: "Healthcare",
    title: "Clinic treatment page",
    tone: "blue",
    file: "work-healthcare-service-page.png",
    status: PUBLISHED,
  },
  {
    category: "Retail",
    title: "Optical retail website",
    tone: "sage",
    file: "work-optical-retail-site.png",
    status: PUBLISHED,
  },
  {
    category: "Property",
    title: "Property management website",
    tone: "steel",
    file: "work-property-management-site.png",
    status: PUBLISHED,
  },
  {
    category: "Product",
    title: "SaaS product website",
    tone: "blue",
    file: "work-saas-product-site.png",
    status: PUBLISHED,
  },
  {
    category: "Support",
    title: "Support program website",
    tone: "sand",
    file: "work-support-program-site.png",
    status: PUBLISHED,
  },
  {
    category: "Tourism",
    title: "Tourism service website",
    tone: "aqua",
    file: "work-tourism-service-site.png",
    status: PUBLISHED,
  },
] as const;

export function HomeWork() {
  return (
    <section id="work" className="home-work section section--focal on-mist">
      <div className="container section-intro section-intro--split" data-home-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-home-sequence-item>
            Selected work
          </p>
          <h2 data-home-sequence-item>
            Website work <em>you can inspect.</em>
          </h2>
        </div>
        <div className="section-copy-group">
          <p data-home-sequence-item>
            Look at the work the way your own customers would look at yours: what each page
            answers, how it&apos;s organised, and the next step it leads to — not a gallery of
            pretty screens.
          </p>
          <p className="home-work__provenance" data-home-sequence-item>
            Published client websites, shown as they appear online. Each item is labelled with its
            status.
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
              alt="Home services lead-generation website, homepage screenshot"
              fill
              priority
              sizes="(min-width: 64rem) 68rem, 100vw"
              className="home-work__hero-image"
            />
          </div>
        </div>
        <div className="home-work__caption">
          <div>
            <small>Home services</small>
            <strong>Home services lead-gen site</strong>
            <p className="home-work__status">{PUBLISHED}</p>
          </div>
          <p>
            A clear offer, local proof and an obvious next step — built into one working homepage,
            not just described in a proposal.
          </p>
        </div>
      </div>

      <div className="container home-work__grid" data-home-stagger>
        {WORK_ITEMS.map(({ category, title, tone, file, status }) => (
          <article className="home-work__card" key={title} data-home-stagger-item>
            <div className={`home-work__preview home-work__preview--${tone}`}>
              <Image
                src={`/work/${file}`}
                alt={`${title}, screenshot`}
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
            <div className="home-work__card-body">
              <small>{category}</small>
              <strong>{title}</strong>
              <p className="home-work__status">{status}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
