import { SwsDistinctiveArt } from "@/app/_sws/SwsDistinctiveArt";

/**
 * Section 7. The page's first major visual pivot: navy, full-bleed artwork, and
 * the largest single composition before Built Work.
 *
 * The artwork carries the argument, so the supporting copy names only the
 * materials distinctiveness is actually made of. It deliberately does not
 * restate the headline.
 */

const MATERIALS = [
  {
    title: "Typeface",
    body: "Chosen for how this business sounds — authoritative, warm, precise — not for what the category defaulted to.",
  },
  {
    title: "Colour",
    body: "A palette that still reads as yours when a patient has four tabs open, rather than dissolving into the same clinical blue.",
  },
  {
    title: "Photography",
    body: "Your rooms, your team, your work. Where real images do not exist yet, we say so and design around it rather than buying the same stock consultation.",
  },
  {
    title: "Space and pace",
    body: "Where the page slows down, what it refuses to crowd, and which single thing a section is willing to be about.",
  },
] as const;

export function SwsDistinctivePresence() {
  return (
    <section id="distinctive-presence" className="sws-distinctive section section--focal on-dark">
      <div className="container section-intro section-intro--centered" data-sws-sequence>
        <p className="eyebrow eyebrow--centered" data-sws-item>
          Distinctive presence
        </p>
        <h2 className="display-feature" data-sws-item>
          Look recognisably like this business — <em>not another version of its category.</em>
        </h2>
        <p data-sws-item>
          Buyers compare in tabs. When four practices have bought the same template, the one that
          looks considered is doing work the others are not — before a word has been read.
        </p>
      </div>

      <div className="sws-distinctive__stage" data-sws-fade>
        <SwsDistinctiveArt />
      </div>

      <ul className="container container--content sws-distinctive__materials" data-sws-stagger>
        {MATERIALS.map((material) => (
          <li key={material.title} data-sws-stagger-item>
            <h3>{material.title}</h3>
            <p>{material.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
