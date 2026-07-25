/**
 * Three peer lenses sharing one connecting baseline — explicitly not a
 * dashboard mockup and with no invented numbers (docs/FOUNDATION.md: never
 * invent metrics). Each lens is a simple qualitative flow motif, not a chart.
 */
const LENSES = [
  {
    label: "Where people act",
    note: "Which pages actually lead to an enquiry, a call or a booking — not just a visit.",
  },
  {
    label: "Where enquiries begin",
    note: "The real starting point of a useful enquiry, so the page that earns it is easy to see.",
  },
  {
    label: "Where the site needs attention",
    note: "The specific point in the path where interest quietly stalls or leaves.",
  },
] as const;

export function SwsMeaningfulMeasurement() {
  return (
    <section id="meaningful-measurement" className="sws-meaningful-measurement section">
      <div className="container section-intro section-intro--centered" data-sws-sequence>
        <p className="eyebrow eyebrow--centered" data-sws-sequence-item>
          Meaningful measurement
        </p>
        <h2 data-sws-sequence-item>
          See where people act, where useful enquiries begin{" "}
          <em>and where the website needs attention.</em>
        </h2>
        <p data-sws-sequence-item>
          Not a dashboard of numbers for their own sake — one continuous view of the same path,
          read from three angles.
        </p>
      </div>

      <div
        className="container sws-meaningful-measurement__triptych"
        role="img"
        aria-label="One continuous path read from three angles: where people act, where enquiries begin, and where the website needs attention."
        data-sws-fade
      >
        <svg
          className="sws-mm__baseline"
          viewBox="0 0 620 4"
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M0 2 H620" className="sws-mm__baseline-path" />
        </svg>

        <ul className="sws-mm__lenses">
          {LENSES.map((lens, i) => (
            <li key={lens.label} className="sws-mm__lens">
              <svg
                className="sws-mm__glyph"
                viewBox="0 0 64 40"
                aria-hidden="true"
                focusable="false"
              >
                {i === 0 && (
                  <>
                    <path d="M6 30 Q24 12 32 20 T58 10" className="sws-mm__glyph-path" />
                    <circle cx="58" cy="10" r="4" className="sws-mm__glyph-node" />
                  </>
                )}
                {i === 1 && (
                  <>
                    <circle cx="12" cy="20" r="3" className="sws-mm__glyph-dim" />
                    <circle cx="26" cy="20" r="3" className="sws-mm__glyph-dim" />
                    <path d="M38 20 H56" className="sws-mm__glyph-path" />
                    <circle cx="58" cy="20" r="4" className="sws-mm__glyph-node" />
                  </>
                )}
                {i === 2 && (
                  <>
                    <path d="M6 14 Q24 8 32 20 T50 30" className="sws-mm__glyph-path" />
                    <circle cx="50" cy="30" r="4" className="sws-mm__glyph-flag" />
                  </>
                )}
              </svg>
              <strong>{lens.label}</strong>
              <p>{lens.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
