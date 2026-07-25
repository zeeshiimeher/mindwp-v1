/**
 * A layered cross-section, not an interface: a thin "the page" band resting
 * on a deeper "the thinking" band, with a root connecting each visible
 * element to the specific job it is doing underneath. The connecting roots
 * draw in once via `data-sws-linedraw` (see SwsMotion) — the one place on the
 * page a line becoming visible is itself the point being made.
 */
const JOBS = [
  { x: 96, mark: "headline", lines: ["States the", "offer plainly"] },
  { x: 310, mark: "proof", lines: ["Resolves a", "specific doubt"] },
  { x: 524, mark: "action", lines: ["Matches the", "decision"] },
] as const;

export function SwsDeliberateSystem() {
  return (
    <section id="deliberate-system" className="sws-deliberate-system section on-mist">
      <div className="container section-intro section-intro--centered" data-sws-sequence>
        <p className="eyebrow eyebrow--centered" data-sws-sequence-item>
          Deliberate system
        </p>
        <h2 data-sws-sequence-item>
          The page is the surface. <em>The thinking underneath gives every part a job.</em>
        </h2>
        <p data-sws-sequence-item>
          A headline, a piece of evidence and a call to action can all be present and still not
          be doing anything in particular. Before any of it is written, each part of a Smart
          Website System is assigned a specific job — and has to earn its place by doing it.
        </p>
      </div>

      <div
        className="container sws-deliberate-system__diagram"
        role="img"
        aria-label="The visible page — a headline, a piece of evidence, an action — each rooted to the specific job it does in the thinking underneath: stating the offer, resolving a doubt, matching the decision."
        data-sws-linedraw
      >
        <svg
          className="sws-deliberate-system__svg"
          viewBox="0 0 620 300"
          fill="none"
          aria-hidden="true"
          focusable="false"
        >
          {/* the page — a thin surface band */}
          <rect x="20" y="16" width="580" height="72" rx="12" className="sws-ds__page-band" />
          <text x="44" y="42" className="sws-ds__band-label">
            The page
          </text>

          <rect x="64" y="56" width="120" height="10" rx="5" className="sws-ds__mark-bright" />
          <g transform="translate(278 51)">
            <circle cx="10" cy="10" r="10" className="sws-ds__mark-halo" />
            <path d="M5.5 10 l3 3 L15 7" className="sws-ds__mark-tick" />
            <rect x="26" y="5" width="110" height="10" rx="5" className="sws-ds__mark-dim" />
          </g>
          <rect x="492" y="52" width="88" height="24" rx="8" className="sws-ds__mark-cta" />

          {/* the roots */}
          <path
            d="M96 88 V 150"
            className="sws-ds__root"
            data-sws-linedraw-path
          />
          <path d="M310 88 V 150" className="sws-ds__root sws-ds__root--secondary" />
          <path d="M524 88 V 150" className="sws-ds__root sws-ds__root--secondary" />

          {/* the thinking — a deeper band */}
          <rect x="20" y="150" width="580" height="134" rx="12" className="sws-ds__thinking-band" />
          <text x="44" y="176" className="sws-ds__band-label sws-ds__band-label--dim">
            The thinking
          </text>

          {JOBS.map((job) => (
            <g key={job.mark} transform={`translate(${job.x} 196)`} data-sws-linedraw-node>
              <circle cx="0" cy="0" r="7" className="sws-ds__node" />
              {job.lines.map((line, i) => (
                <text
                  key={line}
                  x="0"
                  y={34 + i * 18}
                  textAnchor="middle"
                  className="sws-ds__node-label"
                >
                  {line}
                </text>
              ))}
            </g>
          ))}
        </svg>
      </div>
    </section>
  );
}
