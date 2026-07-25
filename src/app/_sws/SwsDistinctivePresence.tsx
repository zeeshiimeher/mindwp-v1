import { SwsDistinctiveArt } from "@/app/_sws/SwsDistinctiveArt";

/**
 * Section 7. The first major visual pivot, and the page's only scale shock.
 *
 * Five close-set editorial sections precede it; this one opens out on navy so
 * the argument about distinctiveness is made by the composition before it is
 * made in words.
 */

const DECIDES = [
  {
    id: "colour",
    name: "Colour",
    body: "A palette that belongs to this business and is used consistently enough to be recognised without the logo.",
  },
  {
    id: "type",
    name: "Type",
    body: "A typographic voice chosen for what it has to do at display size and at reading size — not for how it looks in a specimen.",
  },
  {
    id: "photography",
    name: "Photography",
    body: "Real rooms, real work, real people wherever they can be shown. Stock photography is the fastest available way to look like everybody else.",
  },
  {
    id: "rhythm",
    name: "Rhythm",
    body: "Spacing, scale and density held steady from page to page, so the site reads as one considered thing rather than a set of templates.",
  },
];

export function SwsDistinctivePresence() {
  return (
    <section id="distinctive-presence" className="sws-presence section section--focal on-navy on-dark">
      <div className="container section-intro section-intro--centered" data-sws-sequence>
        <p className="eyebrow eyebrow--centered" data-sws-item>
          Distinctive presence
        </p>
        <h2 className="display-feature" data-sws-item>
          Look recognisably like this business—
          <em>not another version of its category.</em>
        </h2>
        <p data-sws-item>
          Most sites in a category are assembled from the same few templates, the same stock
          photography and the same three columns of reassurance. They are not bad work. They are
          interchangeable — and somebody comparing three of them remembers none.
        </p>
      </div>

      <div className="container container--wide sws-presence__stage" data-sws-scene>
        <SwsDistinctiveArt />
        <p className="sws-presence__caption">
          <span>Illustrative</span>
          Eight instances of one template, and one page with its own colour, type and photography.
        </p>
      </div>

      <ul className="container sws-presence__decides" data-sws-stagger>
        {DECIDES.map((item) => (
          <li key={item.id} data-sws-stagger-item>
            <span className={`sws-presence__swatch sws-presence__swatch--${item.id}`} aria-hidden="true" />
            <strong>{item.name}</strong>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>

      <p className="container sws-presence__close editorial-note" data-sws-fade>
        Being remembered is not decoration. It is the difference between being compared and being
        chosen.
      </p>
    </section>
  );
}
