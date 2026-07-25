import Image from "next/image";

import { WORK_FEATURE, WORK_ITEMS } from "@/content/work";

/**
 * Shares Home's `@/content/work` catalogue — the same truthful, labelled
 * screenshots — but composed differently: one large featured case treated
 * editorially, captioned with the specific job that page does (echoing
 * Deliberate System's "every part has a job" language), then a horizontal
 * filmstrip of the rest rather than Home's symmetric three-column grid.
 */
export function SwsBuiltWork() {
  return (
    <section id="built-work" className="sws-built-work section section--focal">
      <div className="container section-intro section-intro--split" data-sws-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-sws-sequence-item>
            Built work
          </p>
          <h2 data-sws-sequence-item>
            See how the thinking <em>survives into finished websites.</em>
          </h2>
        </div>
        <div className="section-copy-group">
          <p data-sws-sequence-item>
            Not a gallery of pretty screens — published work, shown as it actually appears
            online, with the specific job each page is doing.
          </p>
          <p className="sws-built-work__provenance" data-sws-sequence-item>
            Published client websites. Each item is labelled with its status.
          </p>
        </div>
      </div>

      <div className="container sws-built-work__feature" data-sws-fade>
        <div className="sws-built-work__feature-frame">
          <Image
            src={`/work/${WORK_FEATURE.file}`}
            alt={`${WORK_FEATURE.title}, homepage screenshot`}
            fill
            sizes="(min-width: 64rem) 68rem, 100vw"
            className="sws-built-work__feature-image"
          />
        </div>
        <div className="sws-built-work__feature-caption">
          <div>
            <small>{WORK_FEATURE.category}</small>
            <strong>{WORK_FEATURE.title}</strong>
            <p className="sws-built-work__status">{WORK_FEATURE.status}</p>
          </div>
          <p className="sws-built-work__job">
            <span className="sws-artifact-label">The job this page does</span>
            {WORK_FEATURE.note}
          </p>
        </div>
      </div>

      <div className="container">
        <p className="sws-artifact-label sws-built-work__more-label">More published work</p>
      </div>
      <ul className="container sws-built-work__filmstrip" data-sws-stagger>
        {WORK_ITEMS.map((item) => (
          <li className="sws-built-work__frame" key={item.title} data-sws-stagger-item>
            <div className={`sws-built-work__thumb sws-built-work__thumb--${item.tone}`}>
              <Image
                src={`/work/${item.file}`}
                alt={`${item.title}, screenshot`}
                fill
                sizes="(min-width: 64rem) 20rem, 70vw"
                className="sws-built-work__thumb-image"
              />
            </div>
            <div className="sws-built-work__frame-caption">
              <small>{item.category}</small>
              <strong>{item.title}</strong>
              <p className="sws-built-work__status">{item.status}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
