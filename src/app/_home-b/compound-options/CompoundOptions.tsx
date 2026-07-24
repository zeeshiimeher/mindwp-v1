import { CompoundArc } from "./CompoundArc";
import { CompoundLedger } from "./CompoundLedger";
import { CompoundOrbit } from "./CompoundOrbit";
import { CompoundOrbitDetail } from "./CompoundOrbitDetail";
import { CompoundSnowball } from "./CompoundSnowball";
import { CompoundStack } from "./CompoundStack";

/**
 * Candidate treatments for the reframed slot-10 section — the website as
 * a compounding asset, not a launch. Same eyebrow, headline and content, each a
 * distinct composition:
 *   1 — Compounding stack (value builds upward from a launch base)
 *   2 — Accumulation arc (a qualitative sweep that lights each factor)
 *   3 — The snowball (a core that gathers assets over time)
 *   4 — The compounding ledger (a dragged control the visitor operates,
 *       not a scroll-triggered reveal — capabilities post and stay posted)
 *   5 — Compounding orbit (Beyond's hub-and-satellite reading, rebuilt light
 *       with a fourth satellite; auto-advances once in view, then hands over)
 *   6 — Orbit + detail, stacked (same diagram, bolder and single-column: the
 *       detail reads below the diagram, not beside it, as one focal band)
 */
export function CompoundOptions() {
  return (
    <>
      <CompoundStack />
      <CompoundArc />
      <CompoundSnowball />
      <CompoundLedger />
      <CompoundOrbit />
      <CompoundOrbitDetail />
    </>
  );
}
