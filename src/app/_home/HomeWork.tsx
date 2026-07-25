import Image from "next/image";
import type { ReactNode } from "react";

import { WORK_FEATURE, WORK_ITEMS } from "@/content/work";
import { cn } from "@/lib/utils";

/**
 * Proof status is carried per item, not by one global sentence, so a mixed
 * catalogue can hold different evidence types without forcing every tile into
 * the same claim.
 *
 * The catalogue, the assets and the status labels live in @/content/work and are
 * shared with the Smart Website Systems Built Work section. The provenance rules
 * — not anonymised, no MindWP metric claims, labels never weakened — are
 * documented there. Do not reintroduce a local copy of this data.
 */

interface HomeWorkProps {
  className?: string;
  description?: string;
  eyebrow?: string;
  heading?: ReactNode;
  id?: string;
  provenance?: string;
}

export function HomeWork({
  className,
  description = "Look at the work the way your own customers would look at yours: what each page answers, how it's organised, and the next step it leads to — not a gallery of pretty screens.",
  eyebrow = "Selected work",
  heading = (
    <>
      Website work <em>you can inspect.</em>
    </>
  ),
  id = "work",
  provenance = "Published client websites, shown as they appear online. Each item is labelled with its status.",
}: HomeWorkProps = {}) {
  return (
    <section id={id} className={cn("home-work section section--focal on-mist", className)}>
      <div className="container section-intro section-intro--split" data-home-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-home-sequence-item>
            {eyebrow}
          </p>
          <h2 data-home-sequence-item>{heading}</h2>
        </div>
        <div className="section-copy-group">
          <p data-home-sequence-item>{description}</p>
          <p className="home-work__provenance" data-home-sequence-item>
            {provenance}
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
            <span>{WORK_FEATURE.title}</span>
          </div>
          <div className="home-work__hero-preview">
            <Image
              src={`/work/${WORK_FEATURE.file}`}
              alt={`${WORK_FEATURE.title}, homepage screenshot`}
              fill
              priority
              sizes="(min-width: 64rem) 68rem, 100vw"
              className="home-work__hero-image"
            />
          </div>
        </div>
        <div className="home-work__caption">
          <div>
            <small>{WORK_FEATURE.category}</small>
            <strong>{WORK_FEATURE.title}</strong>
            <p className="home-work__status">{WORK_FEATURE.status}</p>
          </div>
          <p>{WORK_FEATURE.note}</p>
        </div>
      </div>

      <div className="container home-work__grid" data-home-stagger>
        {WORK_ITEMS.map((item) => (
          <article className="home-work__card" key={item.title} data-home-stagger-item>
            <div className={`home-work__preview home-work__preview--${item.tone}`}>
              <Image
                src={`/work/${item.file}`}
                alt={`${item.title}, screenshot`}
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
              <small>{item.category}</small>
              <strong>{item.title}</strong>
              <p className="home-work__status">{item.status}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
