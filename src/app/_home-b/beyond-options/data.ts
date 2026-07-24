import type { IconName } from "@/components/ui/Icon";

export interface BeyondStep {
  icon: IconName;
  label: string;
  note: string;
}

export interface BeyondCapability {
  slug: "lead-response-handling" | "follow-up-crm" | "reputation-review";
  displayName: string;
  tag: string;
  icon: IconName;
  problem: string;
  promise: string;
  earns: string;
  mechanism: readonly [BeyondStep, BeyondStep, BeyondStep];
}

export const BEYOND_CAPABILITIES: readonly BeyondCapability[] = [
  {
    slug: "lead-response-handling",
    displayName: "First Response",
    tag: "Lead Response & Handling",
    icon: "phone",
    problem: "Calls, forms and bookings land, then wait for whoever happens to notice.",
    promise: "Acknowledge the enquiry and place it with someone responsible.",
    earns: "Earns its place when enquiries already arrive faster than they get answered.",
    mechanism: [
      { icon: "message-square", label: "Enquiry arrives", note: "A call, form or booking lands." },
      { icon: "phone", label: "Routed to someone", note: "It reaches a named owner, not a shared inbox." },
      { icon: "circle-check", label: "Acknowledged", note: "The sender knows it was received." },
    ],
  },
  {
    slug: "follow-up-crm",
    displayName: "Purposeful Follow-Up",
    tag: "Follow-Up & CRM",
    icon: "folder",
    problem: "A quote or plan goes out, and the next touch depends on someone remembering to make it.",
    promise: "Keep worthwhile decisions visible without replacing human judgement.",
    earns: "Earns its place when good enquiries stall between the quote and the decision.",
    mechanism: [
      { icon: "folder", label: "Quote sent", note: "The decision is recorded, not lost." },
      { icon: "message-square", label: "Next touch reminder", note: "A prompt surfaces when it is due." },
      { icon: "circle-check", label: "Decision made", note: "The thread closes, one way or another." },
    ],
  },
  {
    slug: "reputation-review",
    displayName: "Visible Reputation",
    tag: "Reputation & Review",
    icon: "star",
    problem: "Good work ends quietly — no review asked, nothing carried back to the website.",
    promise: "Help genuine customer experiences strengthen future customer decisions.",
    earns: "Earns its place when finished work never makes it back onto the page.",
    mechanism: [
      { icon: "circle-check", label: "Job finished", note: "The work is genuinely complete." },
      { icon: "star", label: "Review requested", note: "A real customer is invited to speak." },
      { icon: "globe", label: "Live as proof", note: "Their words return to the site." },
    ],
  },
] as const;
