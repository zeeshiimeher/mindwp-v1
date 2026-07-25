/**
 * Sections 5–6.
 *
 * Section 5 is a genuine three-way comparison — the arrivals differ mainly in
 * how much trust already exists, so the composition makes that difference
 * visible rather than giving each source an identical blurb.
 *
 * Section 6 demonstrates rather than describes: the same clinical point written
 * three ways, with the useful version given dominant weight. The passage is a
 * constructed illustration and is labelled as one — it is not a client's copy
 * and makes no claim about a real practice.
 */

const ARRIVALS = [
  {
    source: "Search",
    trust: 1,
    knows: "A problem and a phrase. No sense of who you are yet.",
    needs:
      "A page that matches the thing they typed, answers it directly, then earns the right to introduce the practice.",
  },
  {
    source: "Referral",
    trust: 3,
    knows: "Your name, and someone else's confidence in it.",
    needs:
      "Fast confirmation that the recommendation was sound — and an obvious route to act while the intent is warm.",
  },
  {
    source: "Advertising",
    trust: 2,
    knows: "A specific promise, made moments ago.",
    needs:
      "The same promise continued, not a generic homepage that makes them start their evaluation again.",
  },
] as const;

const PHRASINGS = [
  {
    verdict: "Too technical to act on",
    tone: "dense",
    copy: "Endosseous fixture placement with delayed loading, subject to CBCT assessment of alveolar bone volume.",
    note: "Accurate, and unreadable to the person deciding.",
  },
  {
    verdict: "Flattened until it says nothing",
    tone: "thin",
    copy: "We offer dental implants. Get in touch to find out more.",
    note: "Readable, and indistinguishable from every competitor.",
  },
  {
    verdict: "Clear, and still specific",
    tone: "right",
    copy: "A titanium post replaces the root of the missing tooth. We take a 3D scan first to check there is enough bone to hold it — and if there isn't, we tell you before you commit, and explain what would need to happen first.",
    note: "The expertise survives. So does the reader.",
  },
] as const;

export function SwsArrivalContext() {
  return (
    <section id="arrival-context" className="sws-arrival section section--quiet">
      <div className="container section-intro" data-sws-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-sws-item>
            Arrival context
          </p>
          <h2 data-sws-item>
            Different journeys should land on answers <em>built for why people came.</em>
          </h2>
        </div>
        <div className="section-copy-group">
          <p data-sws-item>
            Sending every visitor to the same homepage wastes the one thing that differs between
            them: how much they already trust you when they arrive.
          </p>
        </div>
      </div>

      <ul className="container container--content sws-arrival__grid" data-sws-stagger>
        {ARRIVALS.map((arrival) => (
          <li key={arrival.source} data-sws-stagger-item>
            <h3>{arrival.source}</h3>
            <p
              className="sws-arrival__meter"
              role="img"
              aria-label={`Existing trust on arrival: ${arrival.trust} of 3`}
            >
              {[1, 2, 3].map((step) => (
                <span key={step} className={step <= arrival.trust ? "is-filled" : undefined} />
              ))}
              <small>Trust on arrival</small>
            </p>
            <p className="sws-arrival__knows">{arrival.knows}</p>
            <p className="sws-arrival__needs">{arrival.needs}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function SwsPurposefulContent() {
  return (
    <section id="purposeful-content" className="sws-content section on-mist">
      <div className="container section-intro section-intro--split" data-sws-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-sws-item>
            Purposeful content
          </p>
          <h2 data-sws-item>
            Explain specialist work clearly <em>without flattening what makes it valuable.</em>
          </h2>
        </div>
        <div className="section-copy-group">
          <p data-sws-item>
            Simplifying is easy. Simplifying without throwing away the distinction a patient is
            paying for is the actual work. One point, written three ways:
          </p>
        </div>
      </div>

      <div className="container container--content sws-content__ladder" data-sws-stagger>
        {PHRASINGS.map((item) => (
          <article
            key={item.verdict}
            className={`sws-content__take sws-content__take--${item.tone}`}
            data-sws-stagger-item
          >
            <p className="sws-content__verdict">{item.verdict}</p>
            <blockquote>
              <p>{item.copy}</p>
            </blockquote>
            <p className="sws-content__note">{item.note}</p>
          </article>
        ))}
        <p className="sws-content__label">
          A constructed illustration of tone, not a client&apos;s copy. It describes no real practice
          and makes no clinical recommendation.
        </p>
      </div>
    </section>
  );
}
