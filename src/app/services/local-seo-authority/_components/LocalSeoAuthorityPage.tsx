import type { CSSProperties, ReactNode } from "react";

import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { PRIMARY_CTA_LABEL } from "@/lib/cta/labels";

import { LOCAL_SEO_FAQS } from "../content";
import { LocalSeoIntentTabs } from "./LocalSeoIntentTabs";
import { LocalSeoMotion } from "./LocalSeoMotion";

const PRESENCE_LAYERS = [
  {
    label: "Search result",
    title: "Harbourside Physiotherapy",
    prompt: "Is this relevant and nearby?",
  },
  {
    label: "Relevant page",
    title: "Sports physio · Post-surgery rehab · Home visits",
    prompt: "Is this right for my need?",
  },
  {
    label: "Reviews",
    title: "Recent, specific and answered",
    prompt: "Have people trusted it before?",
  },
  {
    label: "Contact path",
    title: "Website",
    prompt: "What do I do next?",
  },
] as const;

const RESPONSIBILITIES: ReadonlyArray<{
  number: string;
  title: string;
  description: string;
  icon: IconName;
  quiet?: boolean;
}> = [
  {
    number: "01",
    title: "Discovery",
    description: "Appear for the nearby searches that matter, not just any search.",
    icon: "search",
  },
  {
    number: "02",
    title: "Relevance",
    description: "Match the right service or treatment to the right area.",
    icon: "map-pin",
  },
  {
    number: "03",
    title: "Verification",
    description: "Keep the profile, the pages and the proof telling the same story.",
    icon: "circle-check",
    quiet: true,
  },
  {
    number: "04",
    title: "Maintenance",
    description: "Review and adjust the system as the business itself changes.",
    icon: "folder",
    quiet: true,
  },
];

const CONSISTENCY_CHECKS = [
  ["Is this relevant?", "Local result", "Named the way the search was typed."],
  ["Is this business active and nearby?", "Business profile", "Category, area and details agree."],
  ["Have people trusted it before?", "Reviews", "Specific, recent, answered."],
  ["Is this right for my need?", "Service or treatment page", "Speaks to the actual work."],
  ["What do I do next?", "Contact path", "A clear next step, no dead ends."],
] as const;

const FOUNDATION_CARDS: ReadonlyArray<{
  title: string;
  description: string;
  icon: IconName;
}> = [
  {
    title: "Relevance",
    description: "A page that matches the service and the area.",
    icon: "folder",
  },
  {
    title: "Confidence",
    description: "Clear explanation and credible proof.",
    icon: "circle-check",
  },
  {
    title: "Action",
    description: "A direct route to call, enquire or book.",
    icon: "arrow-right",
  },
];

const TENDING_STAGES = [
  ["Set up", "Set up, verified, and connected to the website."],
  ["Service change", "A service added — reflected everywhere it needs to be."],
  ["New proof", "New reviews, folded into the proof that shows."],
  ["Ongoing", "Public information shifts. Review is already underway."],
] as const;

const SCOPE_ITEMS = [
  ["Local discovery foundations", "The base signals nearby search relies on."],
  ["Business-profile alignment", "One accurate profile, matched everywhere."],
  [
    "Services, treatments & service-area relevance",
    "What you actually do, mapped to what people search for.",
  ],
  ["Local page planning", "The pages your presence needs to point to."],
  ["Verification & consistency checks", "Catching drift before it costs you trust."],
  ["Review-presence assessment", "How proof is showing up, and where it is thin."],
  ["Connecting public surfaces to the website", "So every check leads somewhere useful."],
  ["Ongoing prioritisation & maintenance", "Attention on what matters most, month to month."],
] as const;

const REVIEW_STEPS = [
  ["Inspect", "The current local presence and website, as they stand today."],
  ["Identify", "Gaps, conflicts, and what matters most to fix first."],
  ["Determine", "Whether the existing website can support the system."],
  ["Agree", "What should be corrected, built, or connected."],
  ["Establish", "The right ongoing arrangement for keeping it maintained."],
] as const;

const GOOD_FIT = [
  "An established home-service business or specialist clinic with real enquiries to protect",
  "Nearby buyers are not finding or verifying the right service early enough",
  "Each enquiry, case or patient is valuable enough to deserve accurate, maintained visibility",
  "You are willing to improve the website when evidence shows it is holding the system back",
  "You want reviews treated as proof, not chased for their own sake",
] as const;

const NOT_FIT = [
  "Ranking promises",
  "Immediate lead promises",
  "Fabricated or incentivised reviews",
  "Disposable SEO tricks",
  "The cheapest generic package",
] as const;

function Eyebrow({ children, centered = false }: { children: ReactNode; centered?: boolean }) {
  return (
    <p className={`eyebrow${centered ? " eyebrow--centered" : ""}`} data-lseo-sequence-item>
      {children}
    </p>
  );
}

export function LocalSeoAuthorityPage() {
  return (
    <>
      <section id="hero" className="lseo-hero lseo-section section on-dark">
        <div className="container lseo-hero__layout">
          <div className="lseo-hero__copy" data-lseo-hero-sequence>
            <Eyebrow>Local SEO Authority</Eyebrow>
            <h1 data-lseo-sequence-item>
              <span>Your busiest street</span>
              <em>is one you’ve never stood on.</em>
            </h1>
            <p className="lseo-hero__lede text-lead" data-lseo-sequence-item>
              MindWP manages the connected Local SEO system behind how nearby customers find, verify
              and choose a business — from the profile and relevant pages to visible proof, the
              website and ongoing maintenance.
            </p>
            <p className="lseo-hero__audience" data-lseo-sequence-item>
              For established home-service businesses and specialist clinics.
            </p>
            <div className="lseo-hero__action" data-lseo-sequence-item>
              <Button href="#review" variant="on-dark">
                {PRIMARY_CTA_LABEL}
              </Button>
              <small>A private diagnostic conversation — not an automated audit or a trial.</small>
            </div>
          </div>

          <div
            className="lseo-hero__artifact"
            data-lseo-hero-artifact-sequence
            aria-label="Illustrative local search check"
          >
            <p className="lseo-artifact-note" data-lseo-hero-artifact-item>
              Illustrative view
            </p>
            <div className="lseo-hero__search" data-lseo-hero-artifact-item>
              <Icon name="search" size={17} />
              <span>boiler repair near me</span>
            </div>
            <div className="lseo-hero__result" data-lseo-hero-artifact-item>
              <div className="lseo-hero__result-title">
                <span className="lseo-icon-disc">
                  <Icon name="map-pin" size={14} />
                </span>
                <strong>Your business</strong>
              </div>
              <div className="lseo-hero__tags">
                <span>Relevant service</span>
                <span>Service area</span>
              </div>
              <ul>
                <li>
                  <Icon name="circle-check" size={13} /> Verified details
                </li>
                <li>
                  <Icon name="circle-check" size={13} /> Genuine proof visible
                </li>
              </ul>
            </div>
            <div className="lseo-hero__website" data-lseo-hero-artifact-item>
              <span>Website</span>
              <Icon name="globe" size={16} />
            </div>
          </div>
        </div>
      </section>

      <section id="decision" className="lseo-decision lseo-section section">
        <div className="container lseo-centered-intro" data-lseo-sequence>
          <Eyebrow centered>Beyond the ranking</Eyebrow>
          <h2 data-lseo-sequence-item>
            Ranking is the invitation. <em>What happens after is the decision.</em>
          </h2>
          <p data-lseo-sequence-item>
            A result can earn attention. Relevant information, credible proof and a strong
            destination determine whether that attention becomes a call, enquiry or booking.
          </p>
          <ol
            className="lseo-decision__sequence"
            aria-label="The local decision sequence"
            data-lseo-stagger
          >
            <li data-lseo-stagger-item>Find</li>
            <li data-lseo-stagger-item>Compare</li>
            <li data-lseo-stagger-item>Verify</li>
            <li data-lseo-stagger-item>Decide</li>
          </ol>
        </div>
      </section>

      <section id="kept-promises" className="lseo-promises lseo-section section on-dark">
        <div className="container lseo-promises__inner">
          <div className="lseo-promises__copy" data-lseo-sequence>
            <Eyebrow>The kept promises</Eyebrow>
            <h2 data-lseo-sequence-item>
              The place they inspect <em>before they contact you.</em>
            </h2>
            <p data-lseo-sequence-item>
              Before someone contacts you, they inspect a connected local presence: the result they
              found, the profile they open, the page they land on, the reviews they read and the
              route to act.
            </p>
          </div>

          <div className="lseo-promises__fan" data-lseo-stagger aria-label="Four connected layers">
            {PRESENCE_LAYERS.map((layer, index) => (
              <article
                key={layer.label}
                style={{ "--layer": index } as CSSProperties}
                data-lseo-stagger-item
              >
                <small>{layer.label}</small>
                <h3>{layer.title}</h3>
                <p>{layer.prompt}</p>
              </article>
            ))}
          </div>
          <p className="lseo-promises__caption" data-lseo-fade>
            One presence. Each layer answers the next question.
          </p>
        </div>
      </section>

      <section id="operating-model" className="lseo-model lseo-section section on-mist">
        <div className="container container--narrow lseo-model__inner">
          <div className="lseo-section-intro" data-lseo-sequence>
            <Eyebrow>The operating model</Eyebrow>
            <h2 data-lseo-sequence-item>
              Four connected responsibilities. <em>One operating model.</em>
            </h2>
            <p data-lseo-sequence-item>
              Discovery, relevance, verification and maintenance are not separate services stacked
              on top of each other. They are four faces of one system — and the website is what all
              four stand on.
            </p>
          </div>

          <div className="lseo-model__stack">
            <ol data-lseo-stagger>
              {RESPONSIBILITIES.map((item) => (
                <li
                  key={item.number}
                  className={item.quiet ? "is-quiet" : undefined}
                  data-lseo-stagger-item
                >
                  <span className="lseo-model__marker" aria-hidden="true">
                    <Icon name={item.icon} size={15} />
                  </span>
                  <article>
                    <small>{item.number}</small>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                </li>
              ))}
            </ol>
            <div className="lseo-model__foundation" data-lseo-fade>
              <span className="lseo-model__marker" aria-hidden="true">
                <Icon name="globe" size={15} />
              </span>
              <div>
                <h3>Foundation — the website</h3>
                <p>Relevant pages, credible proof and a clear route to contact.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="search-intent" className="lseo-intent lseo-section section">
        <div className="container lseo-intent__inner">
          <div className="lseo-centered-intro" data-lseo-sequence>
            <Eyebrow centered>Search intent</Eyebrow>
            <h2 data-lseo-sequence-item>Found for the work you actually want.</h2>
            <p data-lseo-sequence-item>
              Local visibility becomes useful when the right service or treatment, the right area
              and the right customer intent lead to a page that can answer the need.
            </p>
          </div>
          <LocalSeoIntentTabs />
          <p className="lseo-intent__closing" data-lseo-fade>
            Appearing nearby is not enough on its own — Local SEO Authority is about resolving
            searches like these into a page built to answer them.
          </p>
        </div>
      </section>

      <section id="consistency" className="lseo-consistency lseo-section section on-mist">
        <div className="container lseo-consistency__inner">
          <div className="lseo-centered-intro" data-lseo-sequence>
            <Eyebrow centered>Consistency</Eyebrow>
            <h2 data-lseo-sequence-item>
              The same truth, <em>at the right depth wherever they check.</em>
            </h2>
            <p data-lseo-sequence-item>
              Consistency is not copying the same details onto every surface. Each one should answer
              the next question without contradicting the last.
            </p>
          </div>
          <ol className="lseo-consistency__cards" data-lseo-stagger>
            {CONSISTENCY_CHECKS.map(([question, title, description], index) => (
              <li key={title} style={{ "--step": index } as CSSProperties} data-lseo-stagger-item>
                <p>{question}</p>
                <h3>{title}</h3>
                <span>{description}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="visible-proof" className="lseo-proof lseo-section section">
        <div className="container lseo-proof__layout">
          <div className="lseo-proof__copy" data-lseo-sequence>
            <Eyebrow>Visible proof</Eyebrow>
            <h2 data-lseo-sequence-item>
              Reviews shorten <em>the distance to trust.</em>
            </h2>
            <p data-lseo-sequence-item>
              Reviews can help a business stand out locally, then help the next customer feel safer
              choosing it. The strongest proof is specific to the work, recognisably genuine and met
              with an attentive response.
            </p>
            <p className="lseo-proof__note" data-lseo-sequence-item>
              Local SEO makes that proof visible where people check. Reputation & Review supports
              the request and feedback process behind it.
            </p>
          </div>

          <div
            className="lseo-proof__audit"
            aria-label="Illustrative review-evidence checklist, not client proof"
          >
            <div className="lseo-proof__audit-head" data-lseo-fade>
              <span>Evidence check</span>
              <small>Illustrative framework</small>
            </div>
            <div className="lseo-proof__prompt" data-lseo-fade>
              <p>Does the review name the work and explain the experience?</p>
              <span>Specific detail</span>
            </div>
            <div className="lseo-proof__response" data-lseo-fade>
              <Icon name="message-square" size={15} />
              <span>Business response considered</span>
              <small>Appropriate</small>
            </div>
            <ul data-lseo-stagger>
              <li data-lseo-stagger-item>Is this about the service I need?</li>
              <li data-lseo-stagger-item>Does it sound specific?</li>
              <li data-lseo-stagger-item>Does the business seem active?</li>
              <li data-lseo-stagger-item>Has it replied appropriately?</li>
              <li data-lseo-stagger-item>Does this make contact feel safer?</li>
            </ul>
            <span className="lseo-proof__badge lseo-proof__badge--top" data-lseo-fade>
              <Icon name="map-pin" size={13} /> Profile
            </span>
            <span className="lseo-proof__badge lseo-proof__badge--bottom" data-lseo-fade>
              <Icon name="globe" size={13} /> Website
            </span>
          </div>
        </div>
      </section>

      <section id="foundation" className="lseo-foundation lseo-section section on-mist">
        <div className="container container--narrow lseo-foundation__inner">
          <div className="lseo-centered-intro" data-lseo-sequence>
            <Eyebrow centered>The foundation</Eyebrow>
            <h2 data-lseo-sequence-item>The system needs somewhere strong to land.</h2>
            <p data-lseo-sequence-item>
              A profile may earn the click, but the website has to carry the decision. It should
              confirm relevance, provide credible proof and make the next step easy.
            </p>
          </div>

          <div className="lseo-foundation__diagram">
            <p className="lseo-foundation__source" data-lseo-fade>
              <Icon name="map-pin" size={14} /> The local presence people find
            </p>
            <div className="lseo-foundation__cards" data-lseo-stagger>
              {FOUNDATION_CARDS.map((card) => (
                <article key={card.title} data-lseo-stagger-item>
                  <span className="lseo-icon-disc" aria-hidden="true">
                    <Icon name={card.icon} size={16} />
                  </span>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </article>
              ))}
            </div>
            <div className="lseo-foundation__base" data-lseo-fade>
              <span className="lseo-icon-disc" aria-hidden="true">
                <Icon name="globe" size={16} />
              </span>
              <div>
                <h3>Website — the foundation</h3>
                <p>Relevant pages, credible proof and a clear route to contact.</p>
              </div>
            </div>
            <div className="lseo-foundation__verdicts" data-lseo-stagger>
              <p data-lseo-stagger-item>If it holds up, MindWP builds on it.</p>
              <p data-lseo-stagger-item>
                If it falls short, the review shows what needs strengthening — and whether a smarter
                website is the better foundation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="ongoing" className="lseo-tending lseo-section section">
        <div className="container lseo-tending__inner">
          <div className="lseo-centered-intro" data-lseo-sequence>
            <Eyebrow centered>Ongoing</Eyebrow>
            <h2 data-lseo-sequence-item>
              A local presence needs tending, <em>not a launch date.</em>
            </h2>
            <p data-lseo-sequence-item>
              Services change, competitors move and public information dates. Regular review keeps
              the local presence accurate, relevant and useful.
            </p>
          </div>
          <div className="lseo-tending__timeline-shell">
            <span className="lseo-tending__line-fill" data-lseo-timeline-fill aria-hidden="true" />
            <ol className="lseo-tending__timeline" data-lseo-stagger>
              {TENDING_STAGES.map(([label, description]) => (
                <li key={label} data-lseo-stagger-item>
                  <span className="lseo-tending__marker" aria-hidden="true">
                    <Icon name="folder" size={16} />
                  </span>
                  <small>{label}</small>
                  <p>{description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="scope" className="lseo-scope lseo-section section on-mist">
        <div className="container container--narrow lseo-scope__inner">
          <div className="lseo-section-intro" data-lseo-sequence>
            <Eyebrow>Scope</Eyebrow>
            <h2 data-lseo-sequence-item>What is actually managed.</h2>
            <p data-lseo-sequence-item>
              The exact scope follows what the review finds. Work may include the areas below; it is
              not a fixed package applied to every business.
            </p>
          </div>
          <ol className="lseo-scope__list" data-lseo-stagger>
            {SCOPE_ITEMS.map(([title, description], index) => (
              <li key={title} data-lseo-stagger-item>
                <small>{String(index + 1).padStart(2, "0")}</small>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="review" className="lseo-review lseo-section section on-dark">
        <div className="container container--narrow lseo-review__inner">
          <div className="lseo-section-intro" data-lseo-sequence>
            <Eyebrow>Getting started</Eyebrow>
            <h2 data-lseo-sequence-item>
              The review shows <em>where the work starts.</em>
            </h2>
            <p data-lseo-sequence-item>
              We inspect first, identify the work that matters, then agree what should be corrected,
              built and maintained.
            </p>
          </div>
          <ol className="lseo-review__steps" data-lseo-stagger>
            {REVIEW_STEPS.map(([title, description], index) => (
              <li key={title} data-lseo-stagger-item>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </li>
            ))}
          </ol>
          <Button href="#closing" variant="on-dark" data-lseo-fade>
            {PRIMARY_CTA_LABEL}
          </Button>
        </div>
      </section>

      <section id="fit" className="lseo-fit lseo-section section">
        <div className="container lseo-fit__inner">
          <div className="lseo-section-intro" data-lseo-sequence>
            <Eyebrow>Honest about fit</Eyebrow>
            <h2 data-lseo-sequence-item>This is not for everyone.</h2>
            <p data-lseo-sequence-item>
              We would rather say so up front. Local SEO Authority makes sense when there is real
              local work to protect, and nearby buyers are not finding or verifying it early enough.
            </p>
          </div>
          <div className="lseo-fit__layout">
            <div className="lseo-fit__good">
              <h3 data-lseo-fade>A good fit if</h3>
              <ul data-lseo-stagger>
                {GOOD_FIT.map((item) => (
                  <li key={item} data-lseo-stagger-item>
                    <span aria-hidden="true">
                      <Icon name="check" size={14} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <aside className="lseo-fit__not">
              <h3 data-lseo-fade>Not the right fit if you want</h3>
              <ul data-lseo-stagger>
                {NOT_FIT.map((item) => (
                  <li key={item} data-lseo-stagger-item>
                    <span aria-hidden="true">
                      <Icon name="x" size={12} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section id="faq" className="lseo-faq lseo-section section">
        <div className="container container--narrow lseo-faq__inner">
          <div className="lseo-centered-intro" data-lseo-sequence>
            <Eyebrow centered>Straight answers</Eyebrow>
            <h2 data-lseo-sequence-item>
              Questions, <em>answered plainly.</em>
            </h2>
          </div>
          <div className="lseo-faq__items" data-lseo-stagger>
            {LOCAL_SEO_FAQS.map((item, index) => (
              <details key={item.question} open={index === 0} data-lseo-stagger-item>
                <summary>{item.question}</summary>
                <div>
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="closing" className="lseo-closing lseo-section section on-dark">
        <div className="container container--narrow lseo-closing__inner" data-lseo-sequence>
          <Eyebrow centered>Before the next search</Eyebrow>
          <h2 data-lseo-sequence-item>
            Before the next nearby search, <em>find out</em> what they would see.
          </h2>
          <p data-lseo-sequence-item>
            One private conversation. We review your local presence and the website beneath it, then
            show you what is worth fixing first — useful whether or not we build together.
          </p>
          <div
            className="lseo-closing__icons"
            aria-hidden="true"
            data-lseo-sequence-item
            data-lseo-stagger
          >
            {(["search", "map-pin", "circle-check", "star", "globe"] as IconName[]).map((icon) => (
              <span key={icon} data-lseo-stagger-item>
                <Icon name={icon} size={18} />
              </span>
            ))}
          </div>
          <Button href="#review" variant="on-dark" data-lseo-sequence-item>
            {PRIMARY_CTA_LABEL}
          </Button>
        </div>
      </section>

      <LocalSeoMotion />
    </>
  );
}
