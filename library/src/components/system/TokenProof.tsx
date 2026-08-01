/**
 * System check A — Tailwind and the token bridge.
 *
 * Verifies that mapped surfaces and text colours resolve, that the shared
 * typography classes render with the real Fraunces axes, that spacing and radius
 * utilities reach the MindWP variables, that a responsive Tailwind grid behaves,
 * and that the same tokens read correctly on light and dark ground.
 *
 * Technical verification only. Not a section, and not a first component.
 */

const SURFACES = [
  { label: "surface-page", utility: "bg-page" },
  { label: "surface-card", utility: "bg-card" },
  { label: "surface-sunken", utility: "bg-sunken" },
  { label: "surface-mist", utility: "bg-mist" },
] as const;

const EMERALD_LADDER = [
  { label: "tint-weak", utility: "bg-emerald-tint-weak" },
  { label: "tint", utility: "bg-emerald-tint" },
  { label: "tint-strong", utility: "bg-emerald-tint-strong" },
  { label: "line-soft", utility: "bg-emerald-line-soft" },
  { label: "line", utility: "bg-emerald-line" },
  { label: "emerald", utility: "bg-emerald" },
] as const;

const RADII = [
  { label: "radius-sm", utility: "rounded-sm" },
  { label: "radius-md", utility: "rounded-md" },
  { label: "radius-lg", utility: "rounded-lg" },
  { label: "radius-pill", utility: "rounded-pill" },
] as const;

/**
 * The supporting text scale Tailwind is allowed to own. Listed so that each
 * utility is compiled and visibly different — the failure this guards against
 * is a utility that silently produces no rule at all.
 */
const SUPPORTING_TEXT = [
  { utility: "text-xs", size: "0.75rem" },
  { utility: "text-sm", size: "0.875rem" },
  { utility: "text-base", size: "1rem" },
  { utility: "text-lg", size: "1.125rem" },
  { utility: "text-xl", size: "1.25rem" },
] as const;

const STEPS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;
const STEP_WIDTH: Record<(typeof STEPS)[number], string> = {
  1: "w-step-1",
  2: "w-step-2",
  3: "w-step-3",
  4: "w-step-4",
  5: "w-step-5",
  6: "w-step-6",
  7: "w-step-7",
  8: "w-step-8",
  9: "w-step-9",
  10: "w-step-10",
};

export function TokenProof() {
  return (
    <section>
      <div className="bg-page py-step-9">
        <div className="mx-auto w-full max-w-content px-page-margin">
          <p className="eyebrow">System check A</p>
          <h2>
            Tailwind composes, <em>MindWP decides.</em>
          </h2>
          <p className="text-lead measure-intro mt-step-4">
            Every utility below points at a variable that already exists in the website&rsquo;s
            token file. Nothing here restates a colour, a radius or a spacing value.
          </p>

          <div className="mt-step-8 grid gap-step-6 sm:grid-cols-2 lg:grid-cols-4">
            {SURFACES.map((surface) => (
              <figure key={surface.label} className="m-0">
                <div
                  className={`${surface.utility} h-step-9 rounded-md border border-hairline shadow-raised`}
                />
                <figcaption className="mt-step-3">
                  <small className="text-ink">{surface.label}</small>
                  <br />
                  <small>{surface.utility}</small>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-step-9 grid gap-step-7 lg:grid-cols-2">
            <div>
              <h3>Emerald ladder</h3>
              <p className="measure-copy mt-step-3">
                The approved opacity steps, mapped as utilities so no section hand-writes a new
                transparent emerald.
              </p>
              <ul className="mt-step-5 grid list-none grid-cols-2 gap-step-4 p-0 sm:grid-cols-3">
                {EMERALD_LADDER.map((step) => (
                  <li key={step.label}>
                    <div
                      className={`${step.utility} h-step-8 rounded-sm border border-mist-hairline`}
                    />
                    <small className="mt-step-2 block">{step.label}</small>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3>Radius and rhythm</h3>
              <p className="measure-copy mt-step-3">
                Four radii and the ten-step spacing scale, reached through{" "}
                <strong>rounded-*</strong> and <strong>step-*</strong> utilities.
              </p>
              <div className="mt-step-5 flex flex-wrap gap-step-4">
                {RADII.map((radius) => (
                  <div key={radius.label} className="text-center">
                    <div
                      className={`${radius.utility} size-step-9 border border-hairline bg-card`}
                    />
                    <small className="mt-step-2 block">{radius.label}</small>
                  </div>
                ))}
              </div>
              <ul className="mt-step-6 flex list-none flex-col gap-step-2 p-0">
                {STEPS.map((step) => (
                  <li key={step} className="flex items-center gap-step-3">
                    <span className={`${STEP_WIDTH[step]} h-1 rounded-pill bg-emerald-line`} />
                    <small>--space-{step}</small>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-step-9 grid gap-step-7 lg:grid-cols-2">
            <div>
              <h3>Supporting text scale</h3>
              <p className="measure-copy mt-step-3">
                Tailwind owns <strong>text-xs</strong> to <strong>text-xl</strong> for captions,
                chips, meta lines and control labels. Fixed sizes, not fluid — supporting copy
                should hold still while the headline beside it moves.
              </p>
              <ul className="mt-step-5 list-none p-0">
                {SUPPORTING_TEXT.map((step) => (
                  <li
                    key={step.utility}
                    className="flex items-baseline gap-step-4 border-b border-hairline py-step-3"
                  >
                    <code className="text-xs text-ink">{step.utility}</code>
                    <span className="text-xs text-muted">{step.size}</span>
                    <span className={`${step.utility} text-ink`}>Supporting copy</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3>Where the boundary sits</h3>
              <p className="measure-copy mt-step-3">
                Anything that carries meaning stays with the shared typography roles, which keep
                fluid sizing, optical tracking and the Fraunces axes.
              </p>
              <div className="mt-step-5 rounded-lg border border-hairline bg-card p-step-6">
                <h4>A heading is a heading</h4>
                <p className="mt-step-3">
                  This <code className="text-sm">h4</code> is sized by{" "}
                  <code className="text-sm">typography.css</code>, not by a utility. The scale stops
                  at <code className="text-sm">text-xl</code>. Above that is a display decision, and
                  display is not Tailwind&rsquo;s to make here.
                </p>
                <p className="editorial-note mt-step-4">Use a heading when you mean a heading.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="on-dark bg-navy py-step-9">
        <div className="mx-auto w-full max-w-content px-page-margin">
          <p className="eyebrow">Dark treatment</p>
          <h2>
            The same tokens, <em>read on navy.</em>
          </h2>
          <p className="text-lead measure-intro mt-step-4">
            Headings, body copy and the eyebrow all inherit the inverse text tokens from a single
            context class. No section-level colour overrides.
          </p>
          <div className="mt-step-7 grid gap-step-5 md:grid-cols-3">
            {["Panel", "Raised", "Hairline"].map((label, index) => (
              <div
                key={label}
                className={`${
                  index === 1 ? "bg-navy-raised" : "bg-navy-panel"
                } rounded-lg border border-navy-hairline p-step-6 shadow-raised-inverse`}
              >
                <h4>{label}</h4>
                <p className="mt-step-3">
                  Elevation on dark ground uses the inverse shadow pair, because light shadows do
                  not read here.
                </p>
              </div>
            ))}
          </div>
          <p className="editorial-note mt-step-7">
            Light shadows disappear on navy — the inverse pair exists for exactly this.
          </p>
        </div>
      </div>
    </section>
  );
}
