import { Icon, type IconName } from "@/components/ui/Icon";

interface ActionMatch {
  state: string;
  action: string;
  icon: IconName;
}

/**
 * Six genuine peers — decision-state matched to its next action, no
 * sequence between them — in a 4-column grid that wraps 4+2. Distinct from
 * Home's Connected diagram: the "carry it onward" idea is one restrained
 * closing line, not a second diagram.
 */
const MATCHES: readonly ActionMatch[] = [
  { state: "Just getting a feel for this", action: "Look at the built work", icon: "globe" },
  { state: "Comparing a few options", action: "Check who this actually fits", icon: "search" },
  {
    state: "Fairly sure, one open question",
    action: "Ask it directly, before enquiring",
    icon: "message-square",
  },
  {
    state: "Wants to see it used elsewhere first",
    action: "See the evidence in context",
    icon: "star",
  },
  {
    state: "Ready to move, carefully",
    action: "Request the Visibility & Enquiry Review",
    icon: "circle-check",
  },
  {
    state: "Has a practical worry — WordPress, ownership, support",
    action: "Read the straight answers",
    icon: "folder",
  },
];

export function SwsUsefulActions() {
  return (
    <section id="useful-actions" className="sws-useful-actions section on-mist">
      <div className="container section-intro" data-sws-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-sws-sequence-item>
            Useful actions
          </p>
          <h2 data-sws-sequence-item>
            Match the next step to the decision{" "}
            <em>— and carry the enquiry where it needs to go.</em>
          </h2>
        </div>
        <p data-sws-sequence-item>
          Not every visitor is at the same point. Each of these is a genuine next step for where
          someone actually is, not one form asking everyone to commit at once.
        </p>
      </div>

      <ul className="container sws-useful-actions__grid" data-sws-stagger>
        {MATCHES.map((match) => (
          <li key={match.state} className="sws-useful-actions__card" data-sws-stagger-item>
            <span className="sws-useful-actions__icon">
              <Icon name={match.icon} size={18} />
            </span>
            <p className="sws-useful-actions__state">{match.state}</p>
            <p className="sws-useful-actions__action">{match.action}</p>
          </li>
        ))}
      </ul>

      <p className="container sws-useful-actions__boundary editorial-note" data-sws-fade>
        Whichever step someone takes, the enquiry reaches a named owner — not a shared inbox.
      </p>
    </section>
  );
}
