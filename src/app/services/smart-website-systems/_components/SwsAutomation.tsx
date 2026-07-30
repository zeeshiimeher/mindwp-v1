/**
 * Follow-up and automation — plan section 7.
 *
 * Two lanes either side of one spine, because the boundary between what runs
 * itself and what a person decides is the whole point of the section. A flow
 * that put both kinds of step in the same column would be arguing the opposite
 * of the headline.
 *
 * The alternation is content, not decoration: every automated step is followed
 * by the human decision it stops at. Nothing crosses the spine without a person
 * on the other side of it.
 */

interface Step {
  side: "auto" | "human";
  title: string;
  body: string;
}

const STEPS: Step[] = [
  {
    side: "auto",
    title: "Appointment communication",
    body: "Confirmations, reminders and changes go out on the schedule you agree, in wording you have approved.",
  },
  {
    side: "human",
    title: "Whether to follow up again",
    body: "Timing, tone and how much persistence is appropriate are judgement calls about your own customers. They stay with your team.",
  },
  {
    side: "auto",
    title: "Tasks and reminders",
    body: "Follow-up tasks sit against the record and nudge whoever owns them, instead of living in one person's memory.",
  },
  {
    side: "human",
    title: "The handover",
    body: "When something needs a person, it goes to a person — carrying everything it arrived with, so nobody restarts the conversation.",
  },
  {
    side: "auto",
    title: "Records that stay current",
    body: "Stage, source and last contact update as things actually happen, without anyone retyping what the system already knows.",
  },
  {
    side: "human",
    title: "Anything clinical, commercial or contractual",
    body: "Never automated, and never implied to be. Advice, pricing and professional decisions belong to the people qualified to make them.",
  },
];

export function SwsAutomation() {
  return (
    <section id="automation" className="sws-auto section">
      <div className="container section-intro--split sws-auto__head" data-sws-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-sws-sequence-item>
            Follow-up and automation
          </p>
          <h2 data-sws-sequence-item>
            Automate the repeatable work. <em>Keep important decisions human.</em>
          </h2>
        </div>
        <p className="sws-auto__lede" data-sws-sequence-item>
          Automation earns its place on the work that is genuinely repeatable. Everything that needs
          judgement stops at a person — by design, not by accident.
        </p>
      </div>

      <div className="container sws-auto__flow" data-sws-stagger>
        <div className="sws-auto__lanes" aria-hidden="true">
          <span className="sws-auto__lane sws-auto__lane--auto">Runs on its own</span>
          <span className="sws-auto__lane sws-auto__lane--human">Stops at a person</span>
        </div>

        <span className="sws-auto__spine" aria-hidden="true" />

        <ol>
          {STEPS.map((step) => (
            <li key={step.title} className={`sws-auto__row--${step.side}`} data-sws-stagger-item>
              <span className="sws-auto__node" aria-hidden="true" />
              <article className="sws-auto__card">
                <p className="sws-auto__kind">
                  {step.side === "auto" ? "Automated" : "Your team decides"}
                </p>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            </li>
          ))}
        </ol>
      </div>

      <div className="container" data-sws-fade>
        <p className="sws-auto__note">
          If someone asks to stop hearing from you, the sequence stops. Permission and stopping
          rules are part of how this gets built, not something added afterwards.
        </p>
      </div>
    </section>
  );
}
