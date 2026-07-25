import { SwsWorkingSystemArt } from "@/app/_sws/SwsWorkingSystemArt";

/**
 * Section 13. The page's second navy peak and the only place CRM and automation
 * are given real weight.
 *
 * The boundary is drawn, not just stated: the line stops at the person. Every
 * step below describes something that carries, records or routes — none of them
 * describes something that decides.
 */

const STAGES = [
  {
    n: "01",
    title: "The enquiry is submitted",
    body: "Validated on the server rather than only in the browser, so what arrives is complete and a failed send is never mistaken for a successful one.",
  },
  {
    n: "02",
    title: "A record is created",
    body: "One shared record per enquiry, carrying what they asked, which page they asked it from and how they arrived — in the CRM, shared inbox or destination you already use.",
  },
  {
    n: "03",
    title: "An acknowledgement goes back",
    body: "Only what is actually true: that it arrived, what was received, and when a reply should realistically be expected. Nothing that implies a person has read it yet.",
  },
  {
    n: "04",
    title: "It gets a named owner",
    body: "Responsibility for the answer sits with a person, and the record shows who — so an enquiry cannot quietly belong to everybody and therefore nobody.",
  },
  {
    n: "05",
    title: "The whole path is tested",
    body: "Not just that the form sends. That the record appears with its context, the acknowledgement arrives, the routing lands, and the person who has to reply can actually do so.",
  },
  {
    n: "06",
    title: "A person takes it from there",
    body: "Your team is briefed on the finished system before handover — what it does, where things land, and what to do when something needs to change.",
  },
];

export function SwsWorkingSystem() {
  return (
    <section id="working-system" className="sws-system section section--focal on-navy on-dark">
      <div className="container section-intro section-intro--centered" data-sws-sequence>
        <p className="eyebrow eyebrow--centered" data-sws-item>
          From plan to working system
        </p>
        <h2 className="display-feature" data-sws-item>
          The journey planned on the page{" "}
          <em>should still work after the form is submitted.</em>
        </h2>
        <p data-sws-item>
          A website that produces an enquiry nobody answers has not solved anything — it has moved
          the problem somewhere less visible. So the build does not stop at the submit button. It
          stops when a person with the authority to answer has the enquiry, its context, and a
          reason to trust the thing that delivered it.
        </p>
      </div>

      <div className="container container--wide sws-system__stage" data-sws-scene>
        <SwsWorkingSystemArt />
        <p className="sws-system__caption">
          <span>Submitted</span>
          <span>Recorded</span>
          <span>Acknowledged</span>
          <span>Owned</span>
          <span>Tested</span>
          <span className="is-human">Answered by a person</span>
        </p>
      </div>

      <ol className="container sws-system__stages" data-sws-stagger>
        {STAGES.map((stage) => (
          <li key={stage.n} data-sws-stagger-item>
            <span className="sws-system__n">{stage.n}</span>
            <strong>{stage.title}</strong>
            <p>{stage.body}</p>
          </li>
        ))}
      </ol>

      <div className="container sws-system__boundary" data-sws-fade>
        <p className="sws-label">Where the automation stops</p>
        <p>
          Automation carries the enquiry, keeps the record straight, sends the acknowledgement and
          prompts a follow-up that would otherwise be forgotten. It does not quote, advise, diagnose
          or decide. Every commercial, clinical, legal and professional judgement stays with the
          people accountable for it — which is also why the system is built to get an enquiry in
          front of them quickly, with everything they need to make one.
        </p>
        <p className="sws-system__delivery">
          Built and delivered in WordPress, connected to the CRM, calendar or inbox you already use
          and have agreed to connect. Where a system offers no supported way in, we say so before it
          is scoped.
        </p>
      </div>
    </section>
  );
}
