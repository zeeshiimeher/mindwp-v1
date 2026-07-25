/**
 * An ascending threshold, not four equal boxes and not a ring diagram —
 * deliberately distinct from Home's related devices (After Enquiry,
 * Distance). Each stage is genuinely heavier than the last, because each one
 * really does carry more weight in the decision, ending at a marked
 * threshold rather than a fourth equal panel.
 */
const STAGES = [
  {
    order: "01",
    weight: "sws-decision-structure__stage--one",
    title: "This is for someone like me",
    body: "The page recognises the visitor's situation before it asks for anything.",
  },
  {
    order: "02",
    weight: "sws-decision-structure__stage--two",
    title: "This is the specific answer",
    body: "Not a general service list — the specific offer that applies to their situation.",
  },
  {
    order: "03",
    weight: "sws-decision-structure__stage--three",
    title: "I can check this is true",
    body: "Evidence they can inspect themselves, placed beside the claim it supports.",
  },
] as const;

export function SwsDecisionStructure() {
  return (
    <section id="decision-structure" className="sws-decision-structure section">
      <div className="container section-intro" data-sws-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-sws-sequence-item>
            Decision structure
          </p>
          <h2 data-sws-sequence-item>
            Build the site around what people need to understand{" "}
            <em>before they choose.</em>
          </h2>
        </div>
        <p data-sws-sequence-item>
          Confidence is not a single fact — it accumulates. Each of these carries more weight
          than the one before it, and only the third genuinely earns a decision.
        </p>
      </div>

      <div className="container sws-decision-structure__ladder" data-sws-stagger>
        {STAGES.map((stage) => (
          <div
            key={stage.order}
            className={`sws-decision-structure__stage ${stage.weight}`}
            data-sws-stagger-item
          >
            <span className="sws-decision-structure__order">{stage.order}</span>
            <h3>{stage.title}</h3>
            <p>{stage.body}</p>
          </div>
        ))}
        <div className="sws-decision-structure__threshold" data-sws-stagger-item>
          <span aria-hidden="true" />
          <strong>Ready to decide</strong>
        </div>
      </div>
    </section>
  );
}
