import { LseoIntentTabs } from "./LseoIntentTabs";

/**
 * 3 · Search intent — priority follows real services in real places, so the
 * page can promise relevance rather than coverage.
 */
export function LseoIntent() {
  return (
    <section id="search-intent" className="lsa-intent lsa-section section">
      <div className="container lsa-intent__inner">
        <div className="lsa-centered-intro" data-lsa-sequence>
          <p className="eyebrow eyebrow--centered" data-lsa-sequence-item>
            Search intent
          </p>
          <h2 data-lsa-sequence-item>
            Focus on the services, places and searches <em>your business can genuinely serve.</em>
          </h2>
          <p data-lsa-sequence-item>
            Chasing every keyword produces pages nobody wanted and enquiries nobody can take. The
            work starts from what you actually do, where you actually do it, and the searches a
            suitable customer really types.
          </p>
        </div>
        <LseoIntentTabs />
        <p className="lsa-intent__closing" data-lsa-fade>
          Appearing nearby is not the achievement. Being the right answer to a search you can
          genuinely serve is.
        </p>
      </div>
    </section>
  );
}
