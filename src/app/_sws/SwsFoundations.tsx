/**
 * Sections 2–4. The argument moves from what a redesign leaves unresolved, to
 * the thinking beneath a page, to the structure that thinking produces.
 *
 * Section 3 is the page's thesis and carries the strongest composition of the
 * three: a visible surface with the strata that hold it up. Sections 2 and 4
 * stay typographic on purpose — the material is a contrast and a mapping, and
 * neither needs an artefact to be understood.
 */

const UNRESOLVED = [
  {
    question: "Is this the right treatment for my situation?",
    instead: "The hero photograph was replaced.",
  },
  {
    question: "Can I tell how good they actually are?",
    instead: "The palette was modernised.",
  },
  {
    question: "What happens if I make contact?",
    instead: "A form was added to the footer.",
  },
  {
    question: "Why here rather than the practice three miles away?",
    instead: "The logo was refreshed.",
  },
] as const;

const STRATA = [
  {
    label: "Strategy",
    body: "Which decision this page serves, who is making it, and what they need settled before they act.",
  },
  {
    label: "Structure",
    body: "What comes first, what earns depth, what belongs on a page of its own, and what should not be there at all.",
  },
  {
    label: "Content and design",
    body: "Language that explains specialist work without flattening it, and a presence that looks like this business rather than its category.",
  },
  {
    label: "Technology",
    body: "WordPress chosen and built so the site stays fast, accessible, editable by your team, and maintainable after handover.",
  },
] as const;

const DECISIONS = [
  {
    asked: "What exactly is this, and is it for someone like me?",
    built: "A page per treatment or service — what it involves, who it suits, what it does not suit.",
  },
  {
    asked: "Can I trust the people behind it?",
    built: "Evidence placed beside the claim it supports, rather than collected on a page nobody visits.",
  },
  {
    asked: "What will this cost me, and what changes that?",
    built: "The factors that move scope, stated where the page can be honest about them.",
  },
  {
    asked: "What actually happens if I get in touch?",
    built: "The next step described before the form, so making contact stops being a leap.",
  },
] as const;

export function SwsBeyondRedesign() {
  return (
    <section id="beyond-redesign" className="sws-beyond section">
      <div className="container section-intro section-intro--split" data-sws-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-sws-item>
            Beyond redesign
          </p>
          <h2 data-sws-item>
            A website can look right and <em>still leave the decision unresolved.</em>
          </h2>
        </div>
        <div className="section-copy-group">
          <p data-sws-item>
            Most redesigns change how a site looks. That is worth doing, and it is rarely the reason
            someone hesitates. The questions below are the ones that decide whether a visitor
            becomes an enquiry — and a new coat of paint answers none of them.
          </p>
        </div>
      </div>

      <ul className="container container--content sws-beyond__list" data-sws-stagger>
        {UNRESOLVED.map((item) => (
          <li key={item.question} data-sws-stagger-item>
            <p className="sws-beyond__question">{item.question}</p>
            <p className="sws-beyond__instead">
              <span aria-hidden="true">Instead — </span>
              {item.instead}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function SwsDeliberateSystem() {
  return (
    <section id="deliberate-system" className="sws-system section section--focal on-mist">
      <div className="container section-intro" data-sws-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-sws-item>
            Deliberate system
          </p>
          <h2 data-sws-item>
            The page is the surface. <em>The thinking underneath gives every part a job.</em>
          </h2>
        </div>
        <div className="section-copy-group">
          <p data-sws-item>
            A visitor only ever sees the surface. What makes that surface work is decided before a
            single screen is designed — and it is the part that survives when the site has to change.
          </p>
        </div>
      </div>

      <div className="container container--content sws-system__stack" data-sws-fade>
        <div className="sws-system__surface">
          <span className="sws-system__surface-label">What the visitor sees</span>
          <div className="sws-system__surface-page" aria-hidden="true">
            <span className="sws-system__bar sws-system__bar--head" />
            <span className="sws-system__bar sws-system__bar--sub" />
            <span className="sws-system__bar sws-system__bar--body" />
            <span className="sws-system__bar sws-system__bar--body" />
            <div className="sws-system__surface-proof" />
            <span className="sws-system__bar sws-system__bar--action" />
          </div>
        </div>

        <p className="sws-system__seam">Everything below decides everything above.</p>

        <ol className="sws-system__strata" data-sws-stagger>
          {STRATA.map((stratum, index) => (
            <li key={stratum.label} data-sws-stagger-item>
              <small>{String(index + 1).padStart(2, "0")}</small>
              <h3>{stratum.label}</h3>
              <p>{stratum.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function SwsDecisionStructure() {
  return (
    <section id="decision-structure" className="sws-decision section">
      <div className="container section-intro section-intro--split" data-sws-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-sws-item>
            Decision structure
          </p>
          <h2 data-sws-item>
            Build the site around what people need to understand{" "}
            <em>before they choose.</em>
          </h2>
        </div>
        <div className="section-copy-group">
          <p data-sws-item>
            Site structure is usually inherited from whatever the last site did. It should come from
            the questions people actually arrive with, in the order they need answering.
          </p>
        </div>
      </div>

      <dl className="container container--content sws-decision__map" data-sws-stagger>
        {DECISIONS.map((item) => (
          <div key={item.asked} data-sws-stagger-item>
            <dt>
              <span className="sws-decision__tag">They ask</span>
              {item.asked}
            </dt>
            <dd>
              <span className="sws-decision__tag">So we build</span>
              {item.built}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
