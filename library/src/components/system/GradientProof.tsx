import "./gradient-proof.css";

import type { ReactNode } from "react";

/**
 * System check D — the controlled gradient foundation.
 *
 * Every treatment is shown beside the solid surface it would replace, because a
 * restrained gradient can only be judged against the flat alternative. If a
 * pair looks identical at section scale, the gradient is not earning its place
 * there — which is a useful result, not a failed proof.
 *
 * Technical verification only. Nothing here is a section, and nothing here
 * should be copied into a page as a composition.
 */

type Level = "normal" | "limited" | "rare" | "structural";

const LEVEL_NOTE: Record<Level, string> = {
  normal: "May repeat — stays visually close to a solid surface",
  limited: "Real presence — one per page, deliberately placed",
  rare: "At most once per page, for a genuine focal moment",
  structural: "Mask or texture — solves overflow or banding, not decoration",
};

function Treatment({
  level,
  token,
  title,
  note,
  children,
}: {
  level: Level;
  token: string;
  title: string;
  note: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-step-9">
      <div className="mx-auto w-full max-w-content px-page-margin">
        <span className="grad-status" data-level={level}>
          {level}
        </span>
        <h3 className="mt-step-3">{title}</h3>
        <p className="measure-copy mt-step-3">{note}</p>
        <p className="mt-step-2">
          <code className="text-xs text-muted">{token}</code>{" "}
          <small className="text-muted">· {LEVEL_NOTE[level]}</small>
        </p>
      </div>
      <div className="mt-step-5">{children}</div>
    </section>
  );
}

/** One half of a comparison. `label` names what the eye is looking at. */
function Half({
  label,
  className,
  onDark,
  style,
  children,
}: {
  label: string;
  className?: string;
  onDark?: boolean;
  style?: React.CSSProperties;
  children?: ReactNode;
}) {
  return (
    <div className={className} style={style}>
      {children}
      <p className={`grad-caption ${onDark ? "text-inverse-muted" : "text-muted"}`}>
        <small>{label}</small>
      </p>
    </div>
  );
}

export function GradientProof() {
  return (
    <div className="bg-page pb-step-10">
      <div className="py-step-9">
        <div className="mx-auto w-full max-w-content px-page-margin">
          <p className="eyebrow">System check D</p>
          <h2>
            Gradients, <em>beside the surfaces they replace.</em>
          </h2>
          <p className="text-lead measure-intro mt-step-4">
            Eleven shared treatments, all built from navy and neutral tokens that already exist. No
            emerald, no teal-to-midnight, no mesh. Each one is shown against its solid fallback so
            the question is always whether the gradient is doing a job.
          </p>
          <p className="editorial-note mt-step-6">
            If you cannot name the problem it solves, use the solid colour.
          </p>
        </div>
      </div>

      <Treatment
        level="normal"
        token="--gradient-navy-depth"
        title="Quiet navy depth"
        note="Stops a full-bleed navy section reading as a flat slab. The delta is 5.6 L*, top-lit to match the elevation tokens. This is the treatment most likely to earn its place, and the only navy one that may repeat on a page."
      >
        <div className="grad-compare grad-compare--tall grad-compare--on-dark on-dark">
          <Half label="bg-navy-depth" className="bg-navy-depth" onDark />
          <Half label="Solid --surface-navy" className="bg-navy" onDark />
        </div>
      </Treatment>

      <Treatment
        level="limited"
        token="--gradient-navy-depth-strong"
        title="Raised navy depth"
        note="A 9.3 L* transition for a focal dark section or a contained stage. Enough presence to be noticed, which is why it should not be the default navy. Named depth-strong rather than navy-raised because bg-navy-raised is already the solid surface."
      >
        <div className="grad-compare grad-compare--tall grad-compare--on-dark on-dark">
          <Half label="bg-navy-depth-strong" className="bg-navy-depth-strong" onDark />
          <Half label="Solid --surface-navy-panel" className="bg-navy-panel" onDark />
        </div>
      </Treatment>

      <Treatment
        level="limited"
        token="--gradient-navy-side-light"
        title="Navy side-light"
        note="Directional tonal light from one edge, built only from navy-raised and navy. Variable-only: it needs positioning, and --navy-light-x / --navy-light-y move the source. Not a utility, on purpose."
      >
        <div className="grad-compare grad-compare--on-dark on-dark">
          <Half label="--gradient-navy-side-light" className="grad-navy-side-light" onDark />
          <Half label="Solid --surface-navy" className="bg-navy" onDark />
        </div>
      </Treatment>

      <Treatment
        level="limited"
        token="--gradient-navy-vignette"
        title="Navy vignette"
        note="An overlay rather than a background — transparent through the middle, so it darkens whatever navy surface sits beneath it. No coloured glow anywhere in it. It needs a ground lighter than plain navy to have anything to darken, so it is shown here over navy-raised."
      >
        <div className="grad-compare grad-compare--on-dark on-dark">
          <Half
            label="--gradient-navy-vignette over navy-raised"
            className="grad-navy-vignette"
            onDark
          />
          <Half label="Solid --surface-navy-raised" className="bg-navy-raised" onDark />
        </div>
      </Treatment>

      <Treatment
        level="rare"
        token="--gradient-navy-atmosphere"
        title="Navy atmosphere"
        note="Two offset navy light sources over a depth base. The one expressive treatment in the set, and the one most capable of making MindWP look like everyone else if it is repeated. At most once per page, for a section that is genuinely the focal moment."
      >
        <div className="grad-compare grad-compare--tall grad-compare--on-dark on-dark">
          <Half label="--gradient-navy-atmosphere" className="grad-navy-atmosphere" onDark />
          <Half label="Solid --surface-navy" className="bg-navy" onDark />
        </div>
      </Treatment>

      <Treatment
        level="normal"
        token="--gradient-light-depth"
        title="White-to-paper depth"
        note="The light-side mirror of quiet navy depth, at 3.6 L*. Air rather than colour. Invisible below roughly 200px, which the contained-object row below demonstrates."
      >
        <div className="grad-compare grad-compare--tall">
          <Half label="bg-light-depth" className="bg-light-depth" />
          <Half label="Solid --surface-page" className="bg-page" />
        </div>
      </Treatment>

      <Treatment
        level="normal"
        token="--gradient-neutral-wash"
        title="Paper-to-mist wash"
        note="A settle, not a lift: it hands a light section off into the mist surface below it. Different job from light depth, which lights a section from above."
      >
        <div className="grad-compare grad-compare--tall">
          <Half label="bg-neutral-wash" className="bg-neutral-wash" />
          <Half label="Solid --surface-mist" className="bg-mist" />
        </div>
      </Treatment>

      <Treatment
        level="limited"
        token="--gradient-light-side-wash"
        title="Light side wash"
        note="A corner bloom from white into sunken, for horizontal interest on light ground. Variable-only and positioned by --light-wash-x / --light-wash-y."
      >
        <div className="grad-compare">
          <Half label="--gradient-light-side-wash" className="grad-light-side-wash" />
          <Half label="Solid --surface-sunken" className="bg-sunken" />
        </div>
      </Treatment>

      {/* ---- Contained objects ---- */}
      <section className="mt-step-9">
        <div className="mx-auto w-full max-w-content px-page-margin">
          <span className="grad-status">scale check</span>
          <h3 className="mt-step-3">Where section gradients stop working</h3>
          <p className="measure-copy mt-step-3">
            The same treatments at card scale. The light pair should be effectively invisible here,
            and the navy pair barely present — which is the argument for keeping these at section
            scale and using solid surfaces on objects.
          </p>
          <div className="grad-objects mt-step-6">
            <div className="grad-object bg-light-depth">
              <small className="text-muted">bg-light-depth</small>
            </div>
            <div className="grad-object bg-page">
              <small className="text-muted">Solid page</small>
            </div>
            <div className="grad-object grad-object--navy on-dark bg-navy-depth">
              <small>bg-navy-depth</small>
            </div>
            <div className="grad-object grad-object--navy on-dark bg-navy">
              <small>Solid navy</small>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Edge masks ---- */}
      <section className="mt-step-9">
        <div className="mx-auto w-full max-w-content px-page-margin">
          <span className="grad-status">structural</span>
          <h3 className="mt-step-3">Edge fade masks</h3>
          <p className="measure-copy mt-step-3">
            A mask rather than a background fade, because a background fade must match the surface
            beneath it and would need one variant per surface. The identical declaration is used on
            paper and on navy below. <code className="text-xs">--edge-fade</code> sets the width.
          </p>
          <p className="mt-step-2">
            <code className="text-xs text-muted">--mask-edge-horizontal</code>{" "}
            <small className="text-muted">· {LEVEL_NOTE.structural}</small>
          </p>

          <div className="grad-rail mt-step-6">
            {["One", "Two", "Three", "Four", "Five", "Six"].map((n) => (
              <div key={n}>
                <small className="text-muted">Rail item {n}</small>
              </div>
            ))}
          </div>
        </div>

        <div className="on-dark mt-step-6 bg-navy py-step-7">
          <div className="mx-auto w-full max-w-content px-page-margin">
            <div className="grad-rail grad-rail--on-dark">
              {["One", "Two", "Three", "Four", "Five", "Six"].map((n) => (
                <div key={n}>
                  <small>Same mask, navy ground — item {n}</small>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-step-7 w-full max-w-content px-page-margin">
          <p className="mt-step-2">
            <code className="text-xs text-muted">--mask-edge-vertical</code>{" "}
            <small className="text-muted">· scrollable region rather than a rail</small>
          </p>
          <div className="grad-column measure-copy mt-step-4">
            <p>
              A vertical scroll region fades at both ends so clipped content reads as continuing
              rather than as cut off. It is a separate job from the horizontal rail: that one is
              about a row of objects running past the viewport edge, this one is about a bounded
              block of continuous content.
            </p>
            <p className="mt-step-4">
              Both share the <code className="text-xs">--edge-fade</code> width so a page keeps one
              fade distance rather than several.
            </p>
            <p className="mt-step-4">Scroll this block to see the mask hold at both ends.</p>
          </div>
        </div>
      </section>

      {/* ---- Grain ---- */}
      <section className="mt-step-9">
        <div className="mx-auto w-full max-w-content px-page-margin">
          <span className="grad-status">structural</span>
          <h3 className="mt-step-3">Grain, on and off</h3>
          <p className="measure-copy mt-step-3">
            Both halves carry the same navy depth gradient. The left adds monochrome noise at{" "}
            <code className="text-xs">--texture-grain-opacity</code>. Judge the banding, not the
            texture — if the right half looks clean at this height, the grain is not needed.
          </p>
        </div>
        <div className="grad-compare grad-compare--tall grad-compare--on-dark on-dark mt-step-5">
          <Half label="bg-navy-depth + grain" className="grad-grain bg-navy-depth" onDark />
          <Half label="bg-navy-depth, no grain" className="bg-navy-depth" onDark />
        </div>
        <div className="grad-compare grad-compare--tall mt-step-5">
          <Half label="bg-light-depth + grain" className="grad-grain bg-light-depth" />
          <Half label="bg-light-depth, no grain" className="bg-light-depth" />
        </div>
      </section>

      {/* ---- Contrast ---- */}
      <section className="mt-step-9">
        <div className="mx-auto w-full max-w-content px-page-margin">
          <span className="grad-status">contrast</span>
          <h3 className="mt-step-3">Text on gradient ground</h3>
          <p className="measure-copy mt-step-3">
            Body copy over the top and bottom of each sweep, where the surface differs most.
            Measured on the rendered page: body copy holds 7.6:1 to 8.5:1 across the navy sweep and
            5.8:1 to 6.3:1 across the light one. The gradient moves contrast, but never enough to
            become the reason text is hard to read.
          </p>
        </div>

        <div className="on-dark mt-step-5 bg-navy-depth py-step-9">
          <div className="mx-auto w-full max-w-content px-page-margin">
            <h4>Inverse text at the light end</h4>
            <p className="measure-copy mt-step-3">
              Secondary copy on the navy depth gradient, near the top of the sweep where the surface
              is lightest and contrast is at its worst.
            </p>
            <p className="measure-copy mt-step-9">
              And the same copy near the bottom, on the darkest part of the sweep. Both must remain
              comfortable.
            </p>
          </div>
        </div>

        <div className="bg-light-depth py-step-9">
          <div className="mx-auto w-full max-w-content px-page-margin">
            <h4>Primary and secondary text on light depth</h4>
            <p className="measure-copy mt-step-3">
              Secondary copy at the white end of the light depth gradient, then the same copy where
              it settles into paper.
            </p>
            <p className="measure-copy mt-step-9">
              A gradient that costs measurable contrast is not restrained enough to be shared.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
