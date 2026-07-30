/**
 * Smart Website Systems — page-level data.
 *
 * The FAQ lives here because the route also renders it as FAQPage structured
 * data; keeping one array prevents the visible answers and the schema drifting
 * apart. Everything else stays inside the section that owns it.
 */

export const SWS_FAQS = [
  {
    question: "What is actually included in Smart Website Systems?",
    answer:
      "A premium business website — strategy, structure, copy, design, WordPress development and enquiry capture — plus whichever connected responsibilities we agree around it. The website is always the core. Handling, CRM, automation and reputation work are scoped alongside it only where they are worth doing.",
  },
  {
    question: "Do I have to take the connected side as well?",
    answer:
      "No. The website engagement stands on its own, and each connected responsibility is scoped separately. Nothing is bundled by default and nothing is a precondition for anything else.",
  },
  {
    question: "I already have a website. Can you connect the system to it?",
    answer:
      "Often, yes. Where an existing website already presents the business well and captures enquiries reliably, the connected work can be built against it. A rebuild is never a prerequisite — the review is where that call gets made honestly.",
  },
  {
    question: "Which CRM or tools do you use?",
    answer:
      "We configure the tools the agreed responsibilities need, and we tell you exactly what is being used, what it costs and who holds the account before anything is set up. We do not resell software, and we do not turn a vendor into the reason to buy.",
  },
  {
    question: "Do I own the website and the accounts?",
    answer:
      "Ownership, access and subscription responsibility are agreed in writing before work begins, and they are set out in the proposal rather than assumed. You are never left unable to see, reach or move your own site and data.",
  },
  {
    question: "Why WordPress?",
    answer:
      "Because it keeps the site maintainable, adaptable and portable — you can edit it, extend it and take it elsewhere. It is an implementation decision made for your benefit, not a platform we are attached to.",
  },
  {
    question: "Who manages it after launch?",
    answer:
      "That is your choice. We onboard your team and hand over a documented, working system. Ongoing management of agreed website and enquiry-system responsibilities is available where it keeps creating value, and a one-off engagement is equally legitimate.",
  },
  {
    question: "What does it cost, and how long does it take?",
    answer:
      "Scope and cost are quoted after the Visibility & Enquiry Review, never before it, because both depend on what the review finds. We would rather price the work you actually need than publish a figure that means nothing until we have looked.",
  },
] as const;
