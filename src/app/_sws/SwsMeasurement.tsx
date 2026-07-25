/**
 * Section 11. What can honestly be observed, and what cannot.
 *
 * Annotation-led and deliberately quiet. The observable side comes first and
 * carries the weight; the limits follow at equal material weight rather than as
 * a disclaimer, because the honesty is the argument. No figure appears anywhere
 * in this section — invented numbers would contradict the point it makes.
 */

const OBSERVABLE = [
  {
    n: "01",
    title: "Which pages people actually reach",
    body: "Where visitors enter, what they read next, and which pages they leave from. This is the one thing analytics does well, and it is enough to find most structural problems.",
  },
  {
    n: "02",
    title: "Where enquiries begin",
    body: "Which page a submitted enquiry came from, and which action produced it. Not attribution across a whole customer journey — just the page that was on screen when somebody decided to act.",
  },
  {
    n: "03",
    title: "What people searched to get here",
    body: "The queries search engines report as bringing visitors to the site, and which pages they matched. Partial by design on the search engines' side, and treated as partial.",
  },
  {
    n: "04",
    title: "Whether the site is working at all",
    body: "Errors, slow pages, broken links, forms that stopped sending. The least glamorous measurement and the one most likely to be quietly costing something.",
  },
];

const NOT_CLAIMED = [
  {
    title: "Which spend caused which sale",
    body: "Attribution across channels, devices and weeks is not reliably knowable. Any tool that reports it with confidence is modelling, and we will not present a model as a measurement.",
  },
  {
    title: "Why somebody chose you",
    body: "Analytics records what people did, never what they were thinking. The reason lives in the conversation your team has with them, not in a dashboard.",
  },
  {
    title: "What a visitor would have done otherwise",
    body: "There is no version of the same person on the old website to compare against, so no honest before-and-after uplift figure can be produced from a rebuild.",
  },
  {
    title: "Revenue produced by the website",
    body: "The website is one part of how work arrives, alongside reputation, referral, pricing and the people who answer the phone. Isolating its contribution is not something we can truthfully do.",
  },
];

export function SwsMeasurement() {
  return (
    <section id="meaningful-measurement" className="sws-measure section section--quiet on-paper">
      <div className="container section-intro section-intro--split" data-sws-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-sws-item>
            Meaningful measurement
          </p>
          <h2 data-sws-item>
            See where people act, where useful enquiries begin{" "}
            <em>and where the website needs attention.</em>
          </h2>
        </div>
        <div className="section-copy-group">
          <p data-sws-item>
            Measurement should tell you where to look next. Most website reporting instead produces
            a confident number that cannot be acted on and cannot be checked — which is worse than
            no number, because it gets believed.
          </p>
        </div>
      </div>

      <div className="container obs">
        <div className="obs__side obs__side--seen" data-sws-stagger>
          <p className="sws-label" data-sws-stagger-item>
            What can be observed
          </p>
          <ol>
            {OBSERVABLE.map((item) => (
              <li key={item.n} data-sws-stagger-item>
                <span className="obs__marker" aria-hidden="true" />
                <p className="obs__n">{item.n}</p>
                <strong>{item.title}</strong>
                <p>{item.body}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="obs__boundary" aria-hidden="true">
          <span />
          <p>Beyond here, nothing is claimed</p>
          <span />
        </div>

        <div className="obs__side obs__side--unseen" data-sws-stagger>
          <p className="sws-label sws-label--quiet" data-sws-stagger-item>
            What we will not claim to know
          </p>
          <ul>
            {NOT_CLAIMED.map((item) => (
              <li key={item.title} data-sws-stagger-item>
                <strong>{item.title}</strong>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container">
        <p className="obs__close editorial-note" data-sws-fade>
          Measurement you cannot act on is decoration with a chart around it.
        </p>
      </div>
    </section>
  );
}
