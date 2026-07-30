/**
 * What they judge you on — plan section 3.
 *
 * The move is the customer's verdict. This section owns the premium public
 * website, but it is written from the outside: what someone notices, and what
 * they silently conclude from it. Nothing is presented as a feature.
 *
 * The type weight is inverted on purpose. What they saw is set small and
 * factual; what they concluded is set large, because the small thing is what
 * happened and the large thing is what it cost. What we build sits quietest of
 * all — the section is not a pitch, it is a diagnosis with a line of answer.
 *
 * The last entry has no conclusion at all. If they never arrived, no verdict is
 * ever formed, and the blank where the other verdicts sit is the point.
 *
 * Owner-facing facts — WordPress, ownership, portability — deliberately sit
 * outside the column in the closing note. A customer never judges you on those,
 * so putting them in the verdict would break the section's own logic.
 *
 * The ribbon is a cropped fragment bleeding off the left edge, never a framed
 * mockup: this is a slice of an experience being read, not a device showcase.
 */

interface Verdict {
  sees: string;
  concludes: string | null;
  built: string;
}

const VERDICTS: Verdict[] = [
  {
    sees: "It looks like the two they opened before yours.",
    concludes: "Probably all much the same.",
    built: "Design shaped around what this business is actually asking someone to decide.",
  },
  {
    sees: "Everything you do is on one long page.",
    concludes: "I am not sure they do my thing.",
    built: "A page per service, answering what it is, who it suits and what happens next.",
  },
  {
    sees: "Nothing to reassure them at the moment they hesitate.",
    concludes: "I will go and check the reviews somewhere else.",
    built: "Proof placed where the doubt is, rather than gathered on a page nobody opens.",
  },
  {
    sees: "One bar of signal, and it is still loading.",
    concludes: "Not worth waiting for.",
    built:
      "Judged on the connection your customers actually have, not the machine it was built on.",
  },
  {
    sees: "They cannot see how to start, one-handed, in poor light.",
    concludes: "I will ring the next one.",
    built:
      "An obvious next step on every page, capture tested end to end, and contrast, keyboard and touch targets treated as part of the build.",
  },
  {
    sees: "They searched, and you were not on the page they looked at.",
    concludes: null,
    built: "Search-ready foundations, so the site can be understood now and improved on later.",
  },
];

/** A cropped slice of a page, drawn in markup. Not a mockup of a whole site. */
function Ribbon() {
  return (
    <div className="sws-verdict__ribbon" aria-hidden="true">
      <span className="sws-verdict__ribbon-glow" />
      <div className="sws-verdict__strip">
        <div className="sws-verdict__band">
          <i className="sws-verdict__mark" />
          <i className="sws-verdict__bar sws-verdict__bar--lead" />
          <i className="sws-verdict__bar sws-verdict__bar--lead sws-verdict__bar--short" />
          <i className="sws-verdict__line" />
          <i className="sws-verdict__line sws-verdict__line--short" />
        </div>

        <div className="sws-verdict__band sws-verdict__band--stack">
          <i className="sws-verdict__block" />
          <i className="sws-verdict__block" />
          <i className="sws-verdict__block" />
        </div>

        <div className="sws-verdict__band">
          <span className="sws-verdict__faces">
            <i />
            <i />
            <i />
          </span>
          <i className="sws-verdict__line" />
          <i className="sws-verdict__line sws-verdict__line--short" />
        </div>

        <div className="sws-verdict__band sws-verdict__band--action">
          <i className="sws-verdict__field" />
          <i className="sws-verdict__send" />
        </div>

        <div className="sws-verdict__band">
          <i className="sws-verdict__line" />
          <i className="sws-verdict__line sws-verdict__line--short" />
          <i className="sws-verdict__line" />
        </div>

        {/* The fragment carries more than its own height and is clipped by it,
            so the page visibly continues past the bottom edge. Spacing the
            bands out to fill instead would read as a stretched skeleton. */}
        <div className="sws-verdict__band sws-verdict__band--stack">
          <i className="sws-verdict__block" />
          <i className="sws-verdict__block" />
        </div>

        <div className="sws-verdict__band">
          <i className="sws-verdict__bar" />
          <i className="sws-verdict__line" />
          <i className="sws-verdict__line sws-verdict__line--short" />
        </div>

        <div className="sws-verdict__band">
          <span className="sws-verdict__faces">
            <i />
            <i />
            <i />
          </span>
          <i className="sws-verdict__line" />
        </div>
      </div>
    </div>
  );
}

export function SwsVerdict() {
  return (
    <section id="verdict" className="sws-verdict section on-dark">
      <div className="container section-intro--split sws-verdict__head" data-sws-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-sws-sequence-item>
            What they judge you on
          </p>
          <h2 data-sws-sequence-item>
            Nobody rings to say <em>your website put them off.</em>
          </h2>
        </div>
        <p className="sws-verdict__lede" data-sws-sequence-item>
          They decide in seconds, they decide quietly, and they never tell you what they decided.
          The only signal you get is an enquiry that does not arrive.
        </p>
      </div>

      <div className="sws-verdict__layout">
        <Ribbon />

        <ol className="sws-verdict__column" data-sws-stagger data-sws-rules>
          {VERDICTS.map((verdict) => (
            <li key={verdict.sees} data-sws-stagger-item>
              <span className="sws-verdict__leader" aria-hidden="true" data-sws-rule />
              <div className="sws-verdict__entry">
                <p className="sws-verdict__sees">
                  <span className="sws-artifact-label">They see</span>
                  {verdict.sees}
                </p>
                {verdict.concludes ? (
                  <p className="sws-verdict__concludes">{verdict.concludes}</p>
                ) : (
                  <p className="sws-verdict__concludes sws-verdict__concludes--absent">
                    No verdict at all. They were never there to form one.
                  </p>
                )}
                <p className="sws-verdict__built">{verdict.built}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="container" data-sws-fade>
        <p className="sws-verdict__note">
          None of that is what you are judged on privately. Built on WordPress, the site stays
          editable by your team, extendable later and portable if you ever want it elsewhere — which
          matters to you rather than to them, and is the reason it sits down here.
        </p>
      </div>
    </section>
  );
}
