/**
 * After launch — plan section 11.
 *
 * The move is drift. The website and enquiry path are drawn as concentric
 * rings around one centre; business changes land on the ring they affect and
 * push it off that centre. Nothing breaks and every ring is still there — they
 * simply stop lining up, which is the whole of "keeps working while becoming
 * less useful". A grid of maintenance cards cannot show misalignment, which is
 * why this is not one.
 *
 * The authored rest state is the realigned model with each ring's ghost outline
 * still visible where it had drifted to. A still capture, a script-free render
 * and reduced motion therefore carry cause, consequence and correction at once
 * rather than only one of the three.
 *
 * Drift magnitudes are 15–42 on a 460-unit canvas. They were a third of that
 * and the misalignment simply could not be seen at a glance, which cost the
 * section its entire argument — the rings have to visibly fail to share a
 * centre before anything else here means anything.
 *
 * Changes are numbered in the drawing and numbered again in the reading column,
 * so the mapping between a business change and the ring it displaces is
 * explicit without putting wrapping prose inside an SVG.
 *
 * Section 7 owns how follow-up and automation work; this section may only say
 * that a workflow has stopped matching the current process, never explain the
 * mechanism. Ongoing management is agreed separately and is never assumed.
 */

const CENTRE = 230;

/** Outermost first in the DOM so inner rings paint over the outer ghosts. */
interface Ring {
  name: string;
  holds: string;
  radius: number;
  driftX: number;
  driftY: number;
}

const RINGS: Ring[] = [
  { name: "Connected workflows", holds: "how the work moves", radius: 178, driftX: -27, driftY: -39 },
  { name: "The enquiry path", holds: "forms, context, routes", radius: 136, driftX: 42, driftY: 18 },
  { name: "Pages and proof", holds: "what the site says", radius: 94, driftX: -33, driftY: 24 },
  { name: "The offer", holds: "what you actually do", radius: 52, driftX: 21, driftY: -15 },
];

interface Change {
  label: string;
  /** Index into RINGS — which ring this change displaces. */
  ring: number;
  angle: number;
}

const CHANGES: Change[] = [
  { label: "You add or revise a service", ring: 3, angle: -108 },
  { label: "The same question starts coming up", ring: 2, angle: -40 },
  { label: "New proof becomes available", ring: 2, angle: 18 },
  { label: "An enquiry route changes", ring: 1, angle: 86 },
  { label: "Who handles what changes", ring: 0, angle: 156 },
];

interface Drift {
  slips: string;
  managed: string;
}

const DRIFT: Drift[] = [
  {
    slips: "Pages describe an offer the business has already moved on from.",
    managed: "Content and page updates, made in the structure the site was built with.",
  },
  {
    slips: "Proof supports the work you used to do rather than the work you want now.",
    managed: "Proof re-placed where the current hesitation actually sits.",
  },
  {
    slips: "Forms collect context nobody needs, and miss the context that matters.",
    managed: "Enquiry-path adjustments, retested after the change rather than assumed.",
  },
  {
    slips: "Workflows still assume the process you were running last year.",
    managed: "Workflow changes, technical maintenance, and measurement worth reviewing.",
  },
];

function polar(angle: number, radius: number) {
  const radians = (angle * Math.PI) / 180;
  return {
    x: CENTRE + radius * Math.cos(radians),
    y: CENTRE + radius * Math.sin(radians),
  };
}

function AlignmentModel() {
  return (
    <svg
      className="sws-align__svg"
      viewBox="0 0 460 460"
      role="img"
      aria-label="The website and enquiry path drawn as four concentric rings around one centre, with business changes pushing individual rings off that centre and correction marks bringing them back into line"
    >
      {/* Where each ring had drifted to. Left visible after realignment, so the
          still frame shows what was corrected rather than only the result. */}
      {RINGS.map((ring) => (
        <circle
          key={`ghost-${ring.name}`}
          className="sws-align__ghost"
          cx={CENTRE + ring.driftX}
          cy={CENTRE + ring.driftY}
          r={ring.radius}
        />
      ))}

      {CHANGES.map((change, index) => {
        const outer = polar(change.angle, 216);
        const inner = polar(change.angle, RINGS[change.ring]!.radius + 14);
        const label = polar(change.angle, 232);
        return (
          <g key={change.label} className="sws-align__vector" data-sws-align-vector>
            <line x1={outer.x} y1={outer.y} x2={inner.x} y2={inner.y} />
            <circle cx={inner.x} cy={inner.y} r={3} />
            <text x={label.x} y={label.y} textAnchor="middle" dominantBaseline="middle">
              {String(index + 1).padStart(2, "0")}
            </text>
          </g>
        );
      })}

      {RINGS.map((ring) => (
        <circle
          key={ring.name}
          className="sws-align__ring"
          cx={CENTRE}
          cy={CENTRE}
          r={ring.radius}
          data-sws-align-ring
          data-drift-x={ring.driftX}
          data-drift-y={ring.driftY}
        />
      ))}

      {/* The correction: drawn at the point of widest gap, running from where
          the ring had drifted to back onto the true circle. Without it the
          still frame would show the drift but not what closed it. */}
      {RINGS.map((ring) => {
        const length = Math.hypot(ring.driftX, ring.driftY);
        const ux = ring.driftX / length;
        const uy = ring.driftY / length;
        return (
          <g key={`fix-${ring.name}`} className="sws-align__correction">
            <line
              x1={CENTRE + ring.driftX + ux * ring.radius}
              y1={CENTRE + ring.driftY + uy * ring.radius}
              x2={CENTRE + ux * ring.radius}
              y2={CENTRE + uy * ring.radius}
            />
            <circle cx={CENTRE + ux * ring.radius} cy={CENTRE + uy * ring.radius} r={2.75} />
          </g>
        );
      })}

      <circle className="sws-align__core" cx={CENTRE} cy={CENTRE} r={5} />
    </svg>
  );
}

export function SwsAlignment() {
  return (
    <section id="after-launch" className="sws-align section on-dark">
      <div className="container section-intro--split sws-align__head" data-sws-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-sws-sequence-item>
            After launch
          </p>
          <h2 data-sws-sequence-item>
            A website can keep working <em>while becoming less useful.</em>
          </h2>
        </div>
        <p className="sws-align__lede" data-sws-sequence-item>
          Launch is not the end of change — it is usually the start of it. The business keeps moving,
          the site does not move with it, and nothing about that failure is visible from the outside.
        </p>
      </div>

      <div className="container sws-align__layout" data-sws-align>
        <div className="sws-align__stage" data-sws-fade>
          <AlignmentModel />
          <ul className="sws-align__legend">
            {RINGS.map((ring) => (
              <li key={ring.name}>
                <strong>{ring.name}</strong>
                <small>{ring.holds}</small>
              </li>
            ))}
          </ul>
        </div>

        <div className="sws-align__reading">
          <section className="sws-align__register" data-sws-stagger>
            <h3 className="sws-artifact-label" data-sws-stagger-item>
              What changed
            </h3>
            <ol className="sws-align__changes">
              {CHANGES.map((change, index) => (
                <li key={change.label} data-sws-stagger-item>
                  <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  {change.label}
                </li>
              ))}
            </ol>
          </section>

          <section className="sws-align__register" data-sws-stagger>
            <h3 className="sws-artifact-label sws-artifact-label--muted" data-sws-stagger-item>
              What became misaligned, and what is managed
            </h3>
            <ul className="sws-align__pairs">
              {DRIFT.map((entry) => (
                <li key={entry.slips} data-sws-stagger-item>
                  <p className="sws-align__slips">{entry.slips}</p>
                  <p className="sws-align__managed">{entry.managed}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <div className="container" data-sws-fade>
        <p className="sws-align__note">
          Ongoing management is agreed separately and scoped around the responsibilities we actually
          manage. It is worth having where it keeps creating value, it is never compulsory, it is not
          one subscription package, and it is not a claim about what your business will earn.
        </p>
      </div>
    </section>
  );
}
