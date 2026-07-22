import type { IconName } from "@/components/ui/Icon";
import { Icon } from "@/components/ui/Icon";

/**
 * Band 5 — Connected, where useful (navy). The hierarchy statement, drawn as a
 * backbone: the website leads; four optional services dock onto the spine where
 * the journey needs them. Previews bands 6–7.
 */
const NODES: { icon: IconName; label: string }[] = [
  { icon: "map-pin", label: "Local Visibility" },
  { icon: "message-square", label: "First Response" },
  { icon: "arrow-right", label: "Purposeful Follow-Up" },
  { icon: "star", label: "Visible Reputation" },
];

export function ConnectedPivotB() {
  return (
    <section className="section hb-pivot hb-navy-field on-dark">
      <div className="container">
        <div className="section-intro section-intro--centered hb-pivot__intro" data-anim="rise">
          <p className="eyebrow eyebrow--centered">Connected where useful</p>
          <h2>
            The website leads. Support connects <em>where the journey needs it.</em>
          </h2>
          <p className="text-lead">
            Discovery, response, follow-up and reputation can all shape the same decision. They
            connect to the website when they help — never as a compulsory bundle.
          </p>
        </div>

        <div className="hb-pivot__chain" data-anim="pop">
          <div className="hb-pivot__hub" data-pop>
            <span className="hb-pivot__hub-icon" aria-hidden="true">
              <Icon name="globe" size={26} />
            </span>
            <span className="hb-pivot__hub-label">Your website</span>
            <span className="hb-pivot__hub-sub">leads the decision</span>
          </div>

          <span className="hb-pivot__trunk" aria-hidden="true" />

          <ul className="hb-pivot__nodes">
            {NODES.map((n, i) => (
              <li className="hb-pivot__node" data-pop key={i}>
                <span className="hb-pivot__node-icon" aria-hidden="true">
                  <Icon name={n.icon} size={18} />
                </span>
                <span className="hb-pivot__node-label">{n.label}</span>
                <span className="hb-pivot__node-tag">optional</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
