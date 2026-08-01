import "./local-css-proof.css";

/**
 * System check B — Tailwind and library-local CSS in the same section.
 *
 * Tailwind carries the structure: the container, the responsive two-column
 * split, spacing, borders and ordinary states. One art-directed object is left
 * to a local stylesheet, where clip-path, a masked gradient texture, a layered
 * offset glow and counter-driven marginalia are legible instead of being
 * smuggled through arbitrary-value utilities.
 *
 * Technical verification only. Not a section, and not a first component.
 */

const STAGES = [
  {
    title: "Structure is Tailwind's job",
    body: "Grid, gap, padding, radius, edges and hover states compose faster as utilities, and stay readable in the markup.",
  },
  {
    title: "Geometry is CSS's job",
    body: "The notched corner is a clip-path, so no border can follow it. The edge that replaces it is drawn by a pseudo-element.",
  },
  {
    title: "Both, without apology",
    body: "The two coexist in one section. Neither is a fallback for the other, and the split is decided per element.",
  },
] as const;

export function LocalCssProof() {
  return (
    <section className="on-mist bg-mist py-step-9">
      <div className="mx-auto w-full max-w-content px-page-margin">
        <p className="eyebrow">System check B</p>
        <h2>
          Utilities for structure, <em>CSS for the difficult object.</em>
        </h2>
        <p className="text-lead measure-intro mt-step-4">
          A utility API is excellent at layout and poor at geometry. The library uses each where it
          is clearer, in the same file, without treating local CSS as a failure.
        </p>

        <div className="mt-step-8 grid items-start gap-step-8 lg:grid-cols-[1.05fr_1fr]">
          <div className="plate-stack">
            <article className="plate p-step-7">
              <p className="eyebrow">Art-directed</p>
              <h3 className="mt-step-3">A plate with a cut corner</h3>
              <p className="measure-copy--narrow mt-step-4">
                Clipped geometry, a masked rule texture and a glow that sits behind and off-centre.
                Four separate layers, one readable rule set.
              </p>
              <ol className="plate-index mt-step-5">
                <li>
                  <strong className="text-ink">clip-path</strong> removes the corner
                </li>
                <li>
                  <strong className="text-ink">mask-image</strong> fades the texture out
                </li>
                <li>
                  <strong className="text-ink">::before / ::after</strong> draw what markup should
                  not
                </li>
              </ol>
            </article>
          </div>

          <ul className="grid list-none gap-step-4 p-0">
            {STAGES.map((stage) => (
              <li
                key={stage.title}
                className="group rounded-lg border border-mist-hairline bg-card p-step-6 transition-shadow duration-base ease-out hover:shadow-raised"
              >
                <h4 className="transition-colors duration-fast ease-out group-hover:text-emerald-deep">
                  {stage.title}
                </h4>
                <p className="mt-step-3">{stage.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
