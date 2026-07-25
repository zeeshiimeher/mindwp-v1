import { VariantFrame } from "@/app/_lrh/variants/VariantFrame";

/**
 * Option 1 — the straddle.
 *
 * Data shape: one sentence. No items at all.
 *
 * The band is navy above and paper below, and the line sits exactly on the
 * seam — light ink in its upper half, dark ink in its lower half, changing
 * mid-letterform. The same sentence existing on both sides of the boundary is
 * the handoff; there is nothing else to read.
 *
 * The line is rendered twice and each copy clipped to one side of the seam.
 * Both clips and the background stop are driven by a single `--seam` value, so
 * the type and the colour change can never drift apart. The seam sits slightly
 * below the box centre because the optical centre of a line of Fraunces is not
 * its box centre — it needs to land in the x-height, not the descender.
 *
 * When the line wraps at narrow widths the seam falls between the two lines
 * instead of through them, which reads as deliberate rather than broken.
 */

export function Ownership1Straddle() {
  return (
    <VariantFrame
      tag="1"
      title="The straddle"
      note="One sentence, no items · navy above, paper below · ink changes on the seam"
    >
      <section id="ownership-1-straddle" className="lrhv-straddle section--focal">
        <div className="lrhv-straddle__above">
          <div className="container">
            <p className="eyebrow">Visible ownership</p>
          </div>
        </div>

        <div className="lrhv-straddle__stage">
          <div className="container lrhv-straddle__type">
            <h2 aria-label="Then a person takes it.">
              <span className="lrhv-straddle__ink lrhv-straddle__ink--light" aria-hidden="true">
                Then a person takes it.
              </span>
              <span className="lrhv-straddle__ink lrhv-straddle__ink--dark" aria-hidden="true">
                Then a person takes it.
              </span>
            </h2>
          </div>
        </div>

        <div className="lrhv-straddle__below">
          <div className="container">
            <p>
              Above the line the work is finite and nobody has to think about it. Below it, one
              named person owns the next human action — and everything that follows from it.
            </p>
          </div>
        </div>
      </section>
    </VariantFrame>
  );
}
