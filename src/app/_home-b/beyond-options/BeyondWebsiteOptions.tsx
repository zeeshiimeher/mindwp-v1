import { BeyondConsole } from "./BeyondConsole";
import { BeyondDossiers } from "./BeyondDossiers";
import { BeyondHybrid } from "./BeyondHybrid";
import { BeyondOrbit } from "./BeyondOrbit";

/**
 * Rebuilt interactive treatments of the "Beyond the website" section.
 * Each keeps the navy surface, shared eyebrow and headline, and the same three
 * support capabilities, while expressing a distinct reading behaviour:
 *   A — Diagnostic console (segmented tabs → wide stage)
 *   B — Orbital system map (hub-and-satellite)
 *   C — Stacked dossiers (in-place progressive disclosure)
 *   D — Hybrid: console on desktop, accordion dossiers on mobile
 */
export function BeyondWebsiteOptions() {
  return (
    <>
      <BeyondConsole />
      <BeyondOrbit />
      <BeyondDossiers />
      <BeyondHybrid />
    </>
  );
}
