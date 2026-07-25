import { Icon, type IconName } from "@/components/ui/Icon";

/**
 * 4 · Trust is built in layers — the four-connected-responsibilities treatment,
 * carrying the four parts of local trust. The base row is the synthesis rather
 * than a fifth part: each layer has to confirm the last.
 */
const LAYERS: ReadonlyArray<{
  number: string;
  title: string;
  description: string;
  icon: IconName;
}> = [
  {
    number: "01",
    title: "The profile",
    description: "The first local impression — category, services, area and practical detail.",
    icon: "map-pin",
  },
  {
    number: "02",
    title: "The website",
    description: "The page that continues the answer and carries the decision forward.",
    icon: "globe",
  },
  {
    number: "03",
    title: "The proof",
    description: "Genuine customer experience, visible where people go looking for it.",
    icon: "star",
  },
  {
    number: "04",
    title: "The business details",
    description: "Names, contact details, locations and services that agree wherever they appear.",
    icon: "circle-check",
  },
];

export function LseoLayers() {
  return (
    <section id="trust-layers" className="lsa-layers lsa-section section on-mist">
      <div className="container container--narrow lsa-layers__inner">
        <div className="lsa-section-intro" data-lsa-sequence>
          <p className="eyebrow" data-lsa-sequence-item>
            Trust is built in layers
          </p>
          <h2 data-lsa-sequence-item>
            The profile, website, proof and business details{" "}
            <em>need to tell one credible story.</em>
          </h2>
          <p data-lsa-sequence-item>
            Nobody decides from one surface. They move between them, and any contradiction they find
            is the thing they remember. These four are not separate jobs stacked together — they are
            four views of the same business.
          </p>
        </div>

        <div className="lsa-layers__stack">
          <ol data-lsa-stagger>
            {LAYERS.map((item) => (
              <li key={item.number} data-lsa-stagger-item>
                <span className="lsa-layers__marker" aria-hidden="true">
                  <Icon name={item.icon} size={15} />
                </span>
                <article>
                  <small>{item.number}</small>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              </li>
            ))}
          </ol>
          <div className="lsa-layers__foundation" data-lsa-fade>
            <span className="lsa-layers__marker" aria-hidden="true">
              <Icon name="check" size={15} />
            </span>
            <div>
              <h3>Together — one credible story</h3>
              <p>Each layer should confirm the last. Where they disagree, trust leaks.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
