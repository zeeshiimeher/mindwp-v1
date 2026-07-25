import { Icon, type IconName } from "@/components/ui/Icon";

interface Gain {
  icon: IconName;
  title: string;
  note: string;
}

const COMPOUND_INTRO =
  "Most websites are treated as a launch date — live, then slowly going stale. A smart website is the opposite: what it gains, it keeps.";

/**
 * What a website keeps gaining after go-live. Qualitative throughout — nothing
 * here is a measured, financial or guaranteed return.
 */
const GAINS: readonly Gain[] = [
  {
    icon: "star",
    title: "Proof keeps adding up",
    note: "Every satisfied customer can leave a review, and each one makes the next person's decision easier.",
  },
  {
    icon: "map-pin",
    title: "Local presence strengthens",
    note: "As the site, the listing and the reviews stay aligned, you get easier to find and trust nearby.",
  },
  {
    icon: "circle-check",
    title: "Each improvement stacks",
    note: "The review keeps finding the next worthwhile fix — building on the last, not starting over.",
  },
  {
    icon: "search",
    title: "Every channel works harder",
    note: "Search, referrals and ads all land on a site that answers better than it did last month.",
  },
];

const COMPOUND_CLOSE =
  "A typical site peaks at launch and drifts. This one keeps building — which is exactly why it is worth getting right from the start.";

/**
 * Accumulation, composed rather than operated.
 *
 * There is nothing to click here, deliberately. The page already asks the
 * visitor to choose in two other sections, and a third set of tabs would give
 * genuinely different material the same reading pattern. So this one is a
 * single composition: one website at the centre, and everything it has gained
 * since launch threaded onto it and staying there.
 *
 * The only motion is the page's existing scroll reveal, which lets the gains
 * arrive one after another — the visitor's scroll does the accumulating. Every
 * word is present and legible before any of that runs, so the still state and
 * the reduced-motion state carry the whole argument.
 */
export function HomeCompounding() {
  return (
    <section id="compounding" className="home-compounding section section--focal on-mist">
      <div className="container section-intro section-intro--centered" data-home-sequence>
        <p className="eyebrow eyebrow--centered" data-home-sequence-item>
          Not a launch — an asset
        </p>
        <h2 data-home-sequence-item>
          A smart website doesn&apos;t peak at launch. <em>It compounds.</em>
        </h2>
        <p data-home-sequence-item>{COMPOUND_INTRO}</p>
      </div>

      <div className="container cp">
        <div className="cp__core" data-home-fade>
          <span className="cp__core-frame" aria-hidden="true">
            <span className="cp__core-bar">
              <i />
              <i />
              <i />
            </span>
            <span className="cp__core-body">
              <span className="cp__core-line" />
              <span className="cp__core-line cp__core-line--short" />
              <span className="cp__core-cta" />
            </span>
          </span>
          <p className="cp__core-label">Your website</p>
          <p className="cp__core-note">Launched once. Added to ever since.</p>
        </div>

        <ol className="cp__gains" data-home-stagger>
          {GAINS.map((gain, i) => (
            <li key={gain.title} className="cp__gain" data-home-stagger-item>
              <span className="cp__gain-node" aria-hidden="true">
                <Icon name={gain.icon} size={18} />
              </span>
              <span className="cp__gain-body">
                <span className="cp__gain-index" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <strong>{gain.title}</strong>
                <span className="cp__gain-note">{gain.note}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>

      <p className="container cp__close editorial-note" data-home-fade>
        {COMPOUND_CLOSE}
      </p>
    </section>
  );
}
