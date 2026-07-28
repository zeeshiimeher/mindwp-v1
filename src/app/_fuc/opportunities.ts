/**
 * §3's three open opportunities.
 *
 * Illustrative, not client evidence: no business is named, no outcome is
 * claimed, and owners are roles rather than invented people. The point of the
 * set is that the *same three fields* — owner, status, next action — hold three
 * genuinely different situations, and that the reason attached to the next
 * action is what changes.
 */
export interface Opportunity {
  id: string;
  /** Short descriptor used on the selectable row. */
  summary: string;
  /** Row-level state, so the list reads without opening anything. */
  state: string;
  owner: string;
  status: string;
  nextAction: string;
  nextActionDate: string;
  /** In their words where possible — the justification for the date. */
  reason: string;
  arrived: string;
  answered: string;
  contact: string;
  stopping: string;
}

export const OPPORTUNITIES: readonly Opportunity[] = [
  {
    id: "estimate",
    summary: "Written estimate sent, deciding at the weekend",
    state: "Decision expected",
    owner: "Practice manager",
    status: "Open — decision expected",
    nextAction: "One call, Monday morning",
    nextActionDate: "Mon 3 March",
    reason: "“We'll talk it over at the weekend and let you know Monday.”",
    arrived: "Website enquiry form · Tue 09:14",
    answered: "Answered by the practice manager · Tue 11:40",
    contact: "Email, given on the enquiry form",
    stopping: "One reply. No reason needed.",
  },
  {
    id: "letter",
    summary: "Wants to proceed once the specialist's letter arrives",
    state: "Waiting on a third party",
    owner: "Treatment coordinator",
    status: "Open — waiting on someone else",
    nextAction: "Check the letter has arrived, then call",
    nextActionDate: "Fri 21 March",
    reason: "“The letter was due mid-March — there's no point calling before it lands.”",
    arrived: "Phone, returned the same afternoon · Thu 14:02",
    answered: "Answered by the treatment coordinator · Thu 14:20",
    contact: "Phone, mornings only — at their request",
    stopping: "A word on the call, or a reply to any message.",
  },
  {
    id: "budget",
    summary: "Asked us to come back after the new financial year",
    state: "Paused, by agreement",
    owner: "Practice manager",
    status: "Paused until April",
    nextAction: "One call. Nothing before the date.",
    nextActionDate: "Thu 3 April",
    reason: "“Our budget opens in April. Come back then — not before.”",
    arrived: "Website enquiry form · Mon 16:48",
    answered: "Answered by the practice manager · Tue 08:55",
    contact: "Email only — they asked us not to call",
    stopping: "Already partly used: they set the pause themselves.",
  },
];
