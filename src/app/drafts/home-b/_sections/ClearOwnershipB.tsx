import type { IconName } from "@/components/ui/Icon";
import { Icon } from "@/components/ui/Icon";

/**
 * Band 9 — Clear ownership (white). Three concrete cards — what MindWP builds,
 * what the business owns, what happens after launch. The "you own" card is
 * featured. Honours the open Strategy decision: ownership is defined per
 * engagement, no fixed policy asserted. (Redesigned from the track diagram.)
 */
const COLUMNS: {
  phase: string;
  icon: IconName;
  title: string;
  items: string[];
  feature?: boolean;
}[] = [
  {
    phase: "We build",
    icon: "folder",
    title: "Built by MindWP",
    items: [
      "Strategy and page structure",
      "Copy and distinctive design",
      "The WordPress build and setup",
    ],
  },
  {
    phase: "You own",
    icon: "circle-check",
    title: "Owned by your business",
    items: [
      "Your site, content and accounts",
      "Defined for your engagement",
      "Written down before we start",
    ],
    feature: true,
  },
  {
    phase: "After launch",
    icon: "arrow-right",
    title: "What happens next",
    items: ["Handover or ongoing support", "Agreed in the proposal", "Never assumed"],
  },
];

export function ClearOwnershipB() {
  return (
    <section className="section hb-own hb--white">
      <div className="container">
        <div className="section-intro section-intro--centered hb-own__intro" data-anim="rise">
          <p className="eyebrow eyebrow--centered">Clear ownership</p>
          <h2>
            Know what MindWP builds, what your business owns <em>and what happens after launch.</em>
          </h2>
          <p className="text-lead">
            No ambiguity about who holds what. It’s defined for your engagement and written down
            before any work begins.
          </p>
        </div>

        <ol className="hb-own__cards" data-anim="stagger">
          {COLUMNS.map((c) => (
            <li className={`hb-own__card${c.feature ? " hb-own__card--feature" : ""}`} key={c.title}>
              <div className="hb-own__card-head">
                <span className="hb-own__card-icon" aria-hidden="true">
                  <Icon name={c.icon} size={20} />
                </span>
                <span className="hb-own__card-phase">{c.phase}</span>
              </div>
              <h3 className="hb-own__card-title">{c.title}</h3>
              <ul className="hb-own__card-list">
                {c.items.map((it) => (
                  <li key={it}>
                    <Icon name="check" size={15} />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
