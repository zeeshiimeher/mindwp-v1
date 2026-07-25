import { LSEO_FAQS } from "./content";

/** 14 · Straight answers — buyer questions only, no client-specific terms. */
export function LseoFaq() {
  return (
    <section id="faq" className="lsa-faq lsa-section section">
      <div className="container container--narrow lsa-faq__inner">
        <div className="lsa-centered-intro" data-lsa-sequence>
          <p className="eyebrow eyebrow--centered" data-lsa-sequence-item>
            Straight answers
          </p>
          <h2 data-lsa-sequence-item>
            Questions about profiles, pages, reviews <em>and ongoing local SEO.</em>
          </h2>
        </div>
        <div className="lsa-faq__items" data-lsa-stagger>
          {LSEO_FAQS.map((item, index) => (
            <details key={item.question} open={index === 0} data-lsa-stagger-item>
              <summary>{item.question}</summary>
              <div>
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
