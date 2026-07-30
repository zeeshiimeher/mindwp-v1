/**
 * Reputation and reviews — plan section 8.
 *
 * Deliberately the calmest thing on the page. It sits between a dense flow
 * diagram and the engagement track, and a page that never lets up stops being
 * read — so this one is mostly air: a centred statement, one oversized mark,
 * three short columns and nothing else.
 *
 * No card, no panel, no invented testimonial. A fabricated review quote here
 * would be exactly the thing the section says MindWP does not do.
 */

const STAGES = [
  {
    label: "The ask",
    body: "A review request at a sensible moment, in your voice, to people who actually had the experience — not a blast to a list.",
  },
  {
    label: "The route",
    body: "Somewhere private feedback can go, so a problem reaches you before it reaches a public page and while it can still be put right.",
  },
  {
    label: "The reply",
    body: "Replies handled responsibly, including the ones that are not glowing. How you answer criticism is read as closely as the review itself.",
  },
];

export function SwsReputation() {
  return (
    <section id="reputation" className="sws-reputation section on-mist">
      <div className="container section-intro section-intro--centered" data-sws-sequence>
        <p className="eyebrow eyebrow--centered" data-sws-sequence-item>
          Reputation and reviews
        </p>
        <h2 data-sws-sequence-item>
          Your best proof <em>is other people.</em>
        </h2>
        <p data-sws-sequence-item>
          Most businesses earn far more goodwill than they ever collect. The gap is rarely the
          service — it is that nobody asked, at the moment it would have been easy to say yes.
        </p>
      </div>

      <div className="container sws-reputation__mark" data-sws-fade>
        <span className="sws-reputation__stars" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
          <i />
        </span>
        <p className="sws-reputation__line">
          Proof is not something you write about yourself. It is something other people say, in
          public, where the next person deciding can find it.
        </p>
      </div>

      <div className="container sws-reputation__stages" data-sws-stagger>
        {STAGES.map((stage) => (
          <article key={stage.label} data-sws-stagger-item>
            <p className="sws-artifact-label">{stage.label}</p>
            <p>{stage.body}</p>
          </article>
        ))}
      </div>

      <div className="container" data-sws-fade>
        <p className="sws-reputation__nonclaim">
          No bought reviews, no filtered feedback, and no promise about ratings. What we build is
          the habit of asking well and handling the answers properly — genuine proof, or none.
        </p>
      </div>
    </section>
  );
}
