/**
 * Section 14. The Homepage Right Fit framework with SWS-specific content.
 *
 * Structure is deliberately inherited rather than reinvented — it is a shared
 * component of the MindWP page system. The one correction carried over: the
 * "not the right fit" panel takes the same material weight as the other, since
 * ruling work out is what makes the rest credible.
 */

const GOOD_FIT = [
  "The work is specialist enough that explaining it properly changes whether people choose you.",
  "A single enquiry is worth enough that clarity, proof and a working handover are commercially material.",
  "People compare two or three options carefully, and read before they contact anyone.",
  "The current site was built to look acceptable rather than to answer anything, and restyling it would not fix that.",
  "You want a site your own team can maintain, on a platform you already own.",
  "Somebody internally can own content decisions and check that what is said about the work is accurate.",
];

const NOT_FIT = [
  "The site only needs to look newer",
  "The decision is made on price alone",
  "A catalogue or storefront is the real requirement",
  "Rankings or enquiry volume are expected as guarantees",
  "Nobody internally can own content decisions",
  "The website is expected to create demand that does not exist yet",
];

export function SwsFit() {
  return (
    <section id="right-fit" className="sws-fit section on-mist">
      <div className="container section-intro" data-sws-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-sws-item>
            Right fit
          </p>
          <h2 data-sws-item>
            Best for substantial offers <em>that a generic website undersells.</em>
          </h2>
        </div>
        <div className="section-copy-group">
          <p data-sws-item>
            A Smart Website System is a substantial engagement, and it is not the right answer for
            every business. It is more useful to say which is which plainly than to let a proposal
            discover it later.
          </p>
        </div>
      </div>

      <div className="container container--split sws-fit__layout">
        <div className="sws-fit__good" data-sws-sequence>
          <p className="sws-label" data-sws-item>
            A good fit if
          </p>
          <ul data-sws-stagger>
            {GOOD_FIT.map((item) => (
              <li key={item} data-sws-stagger-item>
                <span aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <aside className="sws-fit__not" data-sws-sequence>
          <p className="sws-label" data-sws-item>
            Not the right fit if
          </p>
          <ul data-sws-stagger>
            {NOT_FIT.map((item) => (
              <li key={item} data-sws-stagger-item>
                <span aria-hidden="true">×</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="sws-fit__note">
            None of these make a business a bad one to work with. They just mean a Smart Website
            System is the wrong instrument, and we would rather say so at the first conversation
            than discover it at the proposal.
          </p>
        </aside>
      </div>
    </section>
  );
}
