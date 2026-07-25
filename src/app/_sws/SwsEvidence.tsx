import Image from "next/image";

import { WORK_FEATURE, WORK_ITEMS } from "@/content/work";

/**
 * Sections 8–9.
 *
 * Section 8 composes the relationship its headline names: each doubt sits
 * directly beside the evidence that answers it, so the layout enacts "beside"
 * rather than describing it.
 *
 * Section 9 reuses the Homepage work composition deliberately — the catalogue,
 * the assets and the per-item status labels are the same proof, and both pages
 * read them from @/content/work so the labels cannot diverge. Here the framing
 * differs: the Homepage says this work exists, this section says the thinking
 * reached it.
 */

const PROOF_PAIRS = [
  {
    doubt: "Will this actually work for a case like mine?",
    evidence:
      "A comparable case shown on the treatment page itself — not collected in a gallery three clicks away, where nobody carrying that specific worry will find it.",
  },
  {
    doubt: "Are these reviews real, or carefully selected?",
    evidence:
      "Reviews drawn from the source people already trust, shown with the ordinary ones left in. Curation is visible, and it costs more trust than it buys.",
  },
  {
    doubt: "Who would actually be treating me?",
    evidence:
      "The named clinician on the page for the thing they do, with registration and scope stated plainly rather than implied by a team photograph.",
  },
  {
    doubt: "Is this practice still active, or is the site abandoned?",
    evidence:
      "Recent, dated material — cases, notes, availability — instead of a copyright year doing the work of a pulse.",
  },
] as const;

export function SwsProofInContext() {
  return (
    <section id="proof-in-context" className="sws-proof section">
      <div className="container section-intro section-intro--split" data-sws-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-sws-item>
            Proof in context
          </p>
          <h2 data-sws-item>
            Put the evidence <em>beside the doubt it helps resolve.</em>
          </h2>
        </div>
        <div className="section-copy-group">
          <p data-sws-item>
            Most sites collect proof in one place and hope. Evidence works when it appears at the
            moment the specific worry does — which means knowing what the worry is first.
          </p>
        </div>
      </div>

      <dl className="container container--content sws-proof__pairs" data-sws-stagger>
        {PROOF_PAIRS.map((pair) => (
          <div key={pair.doubt} data-sws-stagger-item>
            <dt>{pair.doubt}</dt>
            <dd>{pair.evidence}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function SwsBuiltWork() {
  return (
    <section id="built-work" className="sws-work section section--focal">
      <div className="container section-intro section-intro--split" data-sws-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-sws-item>
            Built work
          </p>
          <h2 data-sws-item>
            See how the thinking <em>survives into finished websites.</em>
          </h2>
        </div>
        <div className="section-copy-group">
          <p data-sws-item>
            Look at these the way your own customers would look at yours: what each page answers
            first, how it is ordered, where the proof sits, and what it asks you to do next.
          </p>
          <p className="sws-work__provenance" data-sws-item>
            Published client websites, shown as they appear online. Each item is labelled with its
            status.
          </p>
        </div>
      </div>

      <div className="container sws-work__feature" data-sws-fade>
        <div className="sws-work__browser">
          <div className="sws-work__browser-bar">
            <span className="sws-work__dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span>{WORK_FEATURE.title}</span>
          </div>
          <div className="sws-work__hero-preview">
            <Image
              src={`/work/${WORK_FEATURE.file}`}
              alt={`${WORK_FEATURE.title}, homepage screenshot`}
              fill
              sizes="(min-width: 64rem) 68rem, 100vw"
              className="sws-work__hero-image"
            />
          </div>
        </div>
        <div className="sws-work__caption">
          <div>
            <small>{WORK_FEATURE.category}</small>
            <strong>{WORK_FEATURE.title}</strong>
            <p className="sws-work__status">{WORK_FEATURE.status}</p>
          </div>
          <p>{WORK_FEATURE.note}</p>
        </div>
      </div>

      <div className="container sws-work__grid" data-sws-stagger>
        {WORK_ITEMS.map((item) => (
          <article className="sws-work__card" key={item.title} data-sws-stagger-item>
            <div className={`sws-work__preview sws-work__preview--${item.tone}`}>
              <Image
                src={`/work/${item.file}`}
                alt={`${item.title}, screenshot`}
                fill
                sizes="(min-width: 64rem) 22rem, (min-width: 40rem) 45vw, 90vw"
                className="sws-work__card-image"
              />
              <span className="sws-work__dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
            </div>
            <div className="sws-work__card-body">
              <small>{item.category}</small>
              <strong>{item.title}</strong>
              <p className="sws-work__status">{item.status}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
