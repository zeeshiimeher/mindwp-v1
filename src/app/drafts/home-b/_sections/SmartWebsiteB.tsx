import type { IconName } from "@/components/ui/Icon";
import { Icon } from "@/components/ui/Icon";

/**
 * Band 6 — Smart Website, the principal offer (white). The page's dominant
 * composition: an annotated site frame built around three layers — the
 * questions it answers, the evidence it shows, the actions it offers.
 */
const LAYERS: { n: string; icon: IconName; title: string; note: string }[] = [
  {
    n: "01",
    icon: "message-square",
    title: "The questions it answers",
    note: "Structure and copy shaped around what your customer is actually trying to decide.",
  },
  {
    n: "02",
    icon: "circle-check",
    title: "The evidence it shows",
    note: "Real proof placed exactly where each claim is made — nothing invented.",
  },
  {
    n: "03",
    icon: "arrow-right",
    title: "The actions it offers",
    note: "One clear, low-pressure next step that reaches the right person.",
  },
];

export function SmartWebsiteB() {
  return (
    <section className="section hb-smart hb--white">
      <div className="container">
        <div className="section-intro section-intro--split hb-smart__intro" data-anim="rise">
          <div className="section-title-group">
            <p className="eyebrow">Smart Website</p>
            <h2>
              Built around the questions, evidence and actions <em>that matter to the decision.</em>
            </h2>
          </div>
          <p className="text-lead">
            The website is the principal offer — the one that leads. Everything on it earns its
            place by helping the right person understand, trust and act.
          </p>
        </div>

        <div className="hb-smart__stage" data-anim="rise">
          <div className="hb-smart__frame" aria-hidden="true">
            <div className="hb-smart__frame-bar">
              <span className="hb-smart__frame-dot" />
              <span className="hb-smart__frame-dot" />
              <span className="hb-smart__frame-dot" />
              <span className="hb-smart__frame-url" />
            </div>
            <div className="hb-smart__frame-body">
              <div className="hb-smart__z hb-smart__z--1">
                <span className="hb-smart__z-tag">01</span>
                <span className="hb-smart__mock-h" />
                <span className="hb-smart__mock-line" />
                <span className="hb-smart__mock-line hb-smart__mock-line--short" />
              </div>
              <div className="hb-smart__z hb-smart__z--2">
                <span className="hb-smart__z-tag">02</span>
                <div className="hb-smart__mock-proof">
                  <span className="hb-smart__mock-card" />
                  <span className="hb-smart__mock-card" />
                  <span className="hb-smart__mock-card" />
                </div>
              </div>
              <div className="hb-smart__z hb-smart__z--3">
                <span className="hb-smart__z-tag">03</span>
                <span className="hb-smart__mock-cta" />
              </div>
            </div>
          </div>

          <ol className="hb-smart__notes" data-anim="stagger">
            {LAYERS.map((l) => (
              <li className="hb-smart__note" key={l.n}>
                <span className="hb-smart__note-n">{l.n}</span>
                <span className="hb-smart__note-icon" aria-hidden="true">
                  <Icon name={l.icon} size={18} />
                </span>
                <div className="hb-smart__note-body">
                  <p className="hb-smart__note-title">{l.title}</p>
                  <p className="hb-smart__note-text">{l.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
