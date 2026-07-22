import type { IconName } from "@/components/ui/Icon";
import { Icon } from "@/components/ui/Icon";

/**
 * Band 4 — After enquiry (white). Left intro + a horizontal handoff: an enquiry
 * travels from arrival, to a named owner, to a clear next step. Marks the
 * boundary where the website hands off to Lead Response & Handling.
 */
const STAGES: { icon: IconName; title: string; note: string }[] = [
  {
    icon: "mail",
    title: "An enquiry arrives",
    note: "Captured cleanly, with the context of what they were looking at.",
  },
  {
    icon: "circle-check",
    title: "Answered, and owned",
    note: "Acknowledged truthfully and placed with a person who is responsible for it.",
  },
  {
    icon: "arrow-right",
    title: "A clear next step",
    note: "Everyone — including the enquirer — knows what happens next.",
  },
];

export function AfterEnquiryB() {
  return (
    <section className="section hb-after hb--white">
      <div className="container">
        <div className="section-intro hb-after__intro" data-anim="rise">
          <p className="eyebrow">After enquiry</p>
          <h2>
            A useful enquiry still needs an answer, an owner <em>and a clear next step.</em>
          </h2>
          <p className="text-lead hb-lede">
            The website’s job runs through to a genuinely useful enquiry. What happens in the
            minutes and days after is where trust is kept — or quietly lost.
          </p>
        </div>

        <ol className="hb-after__flow" data-anim="stagger">
          {STAGES.map((s, i) => (
            <li className="hb-after__stage" key={i}>
              <span className="hb-after__stage-icon" aria-hidden="true">
                <Icon name={s.icon} size={22} />
              </span>
              <p className="hb-after__stage-title">{s.title}</p>
              <p className="hb-after__stage-note">{s.note}</p>
              {i < STAGES.length - 1 && (
                <span className="hb-after__connector" aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>

        <p className="hb-after__boundary" data-anim="rise">
          The website owns this path through to the enquiry. What follows is{" "}
          <strong>Lead Response &amp; Handling</strong> — truthful acknowledgement, useful context
          and visible human ownership. No invented speed, no receptionist bot.
        </p>
      </div>
    </section>
  );
}
