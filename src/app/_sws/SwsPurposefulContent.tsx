/**
 * Section 6. The marked-up manuscript.
 *
 * The strongest annotation-led section on the page, and the only one where the
 * specimen is type itself. A short passage of real service copy is set at
 * reading size with four phrases marked; the margin explains what each one is
 * doing and why it survived the edit.
 *
 * The passage is an illustrative example, labelled as one — it is not a client's
 * copy and makes no claim about a real business.
 */

interface Mark {
  n: string;
  label: string;
  body: string;
}

const MARKS: readonly Mark[] = [
  {
    n: "01",
    label: "Names the real distinction",
    body: "Assessing before recommending is a genuine difference in how the work is done, so it goes in the first sentence. Most sites bury the one thing that separates them under a paragraph of welcome.",
  },
  {
    n: "02",
    label: "Attaches a reason to a cost",
    body: "Ninety minutes reads as an imposition until the reason arrives. With the reason attached, the same fact becomes evidence of thoroughness — and the visitor can decide whether they want that.",
  },
  {
    n: "03",
    label: "Says what they leave with",
    body: "A written plan and an agreed cost is concrete and checkable. It replaces the reassurance most pages offer here, which cannot be checked and therefore is not believed.",
  },
  {
    n: "04",
    label: "States the limit",
    body: "Naming what they do not do is the most credible sentence in the passage. Without it, everything above it is a claim; with it, the claims are being made by somebody willing to rule things out.",
  },
];

const REMOVED = [
  "passionate about excellence",
  "state-of-the-art facilities",
  "a truly patient-centred approach",
  "second to none",
];

export function SwsPurposefulContent() {
  return (
    <section id="purposeful-content" className="sws-content section section--quiet on-mist">
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
            Simplifying specialist work usually means deleting the parts that justify the price. The
            job is the opposite: keep every distinction that matters and remove only the language
            that was never carrying anything.
          </p>
        </div>
      </div>

      <div className="container msc">
        <figure className="msc__specimen" data-sws-scene>
          <figcaption className="sws-label">Illustrative passage · service page</figcaption>
          <blockquote className="msc__passage">
            <p>
              <mark className="msc__mark" data-n="01">
                We assess before we recommend.
              </mark>{" "}
              The first appointment runs to ninety minutes,{" "}
              <mark className="msc__mark" data-n="02">
                because a shorter one would not tell us enough to be sure
              </mark>
              . Most people leave it with{" "}
              <mark className="msc__mark" data-n="03">
                a written plan and a fixed cost for the work we have agreed
              </mark>
              . Where something needs a specialist we do not have here,{" "}
              <mark className="msc__mark" data-n="04">
                we say so and refer you on
              </mark>
              .
            </p>
          </blockquote>
          <p className="msc__meta">
            Four sentences. Nothing in it could be said by a competitor without it becoming false.
          </p>
        </figure>

        <ol className="msc__notes" data-sws-stagger>
          {MARKS.map((mark) => (
            <li key={mark.n} data-sws-stagger-item>
              <span className="msc__tick" aria-hidden="true" />
              <p className="msc__n">{mark.n}</p>
              <strong>{mark.label}</strong>
              <p className="msc__body">{mark.body}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="container msc__removed" data-sws-fade>
        <p className="sws-label sws-label--quiet">Removed from the same passage</p>
        <ul>
          {REMOVED.map((phrase) => (
            <li key={phrase}>
              <span aria-hidden="true">×</span>
              {phrase}
            </li>
          ))}
        </ul>
        <p className="msc__removed-note">
          Each one fails the same test: compared with whom? A phrase every competitor could also
          print is not describing you.
        </p>
      </div>
    </section>
  );
}
