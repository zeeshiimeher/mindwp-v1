import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { SECONDARY_CTA_LABEL } from "@/lib/cta/labels";

/**
 * Band 8 — Selected work (navy). A featured screenshot plus a gallery of real
 * finished sites. Captions describe the sector only — no client names
 * (permissions pending). The sector spread doubles as proof of range.
 */
const FEATURED = {
  src: "/work/work-tourism-service-site.png",
  sector: "Tourism & experiences",
};

const GRID = [
  { src: "/work/work-healthcare-service-page.png", sector: "Healthcare — service page" },
  { src: "/work/work-home-services-site.png", sector: "Home services" },
  { src: "/work/work-optical-retail-site.png", sector: "Optical retail" },
  { src: "/work/work-property-management-site.png", sector: "Property management" },
  { src: "/work/work-saas-product-site.png", sector: "SaaS product" },
  { src: "/work/work-support-program-site.png", sector: "Support program" },
];

function Shot({
  src,
  sector,
  featured = false,
}: {
  src: string;
  sector: string;
  featured?: boolean;
}) {
  return (
    <figure className={`hb-work__card${featured ? " hb-work__card--featured" : ""}`}>
      <div className="hb-work__frame">
        <span className="hb-work__frame-dot" />
        <span className="hb-work__frame-dot" />
        <span className="hb-work__frame-dot" />
      </div>
      <div className="hb-work__shot">
        <Image
          className="hb-work__img"
          src={src}
          alt={`Finished website — ${sector}`}
          fill
          sizes={featured ? "(max-width: 60rem) 100vw, 1100px" : "(max-width: 60rem) 100vw, 360px"}
        />
      </div>
      <figcaption className="hb-work__cap">
        <span>{sector}</span>
        <span className="hb-work__cap-tag">Finished website</span>
      </figcaption>
    </figure>
  );
}

export function SelectedWorkB() {
  return (
    <section id="work" className="section hb-work hb-navy-field on-dark">
      <div className="container">
        <div className="section-intro section-intro--split hb-work__intro" data-anim="rise">
          <div className="section-title-group">
            <p className="eyebrow">Selected work</p>
            <h2>
              See how the thinking holds together <em>in finished websites.</em>
            </h2>
          </div>
          <div className="hb-work__intro-side">
            <p className="text-lead">
              One considered approach, across very different businesses — clinics, trades, retail,
              property and more.
            </p>
            <Button href="#work" variant="on-dark" className="btn-link">
              {SECONDARY_CTA_LABEL}
            </Button>
          </div>
        </div>

        <div className="hb-work__gallery" data-anim="rise">
          <Shot src={FEATURED.src} sector={FEATURED.sector} featured />
          <div className="hb-work__grid" data-anim="stagger">
            {GRID.map((w) => (
              <Shot key={w.src} src={w.src} sector={w.sector} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
