/**
 * Section 2. The stopped route.
 *
 * A competent, attractive page — deliberately not a strawman — with a visitor's
 * route arriving at the top and simply ending partway down. The remainder is
 * drawn as a faint, unfollowed continuation, and the questions that caused the
 * stop occupy the empty run the route should have filled.
 *
 * Annotation-led, which is the right register here: the artefact is a page and
 * the meaning is a judgement about it.
 */

const UNRESOLVED = [
  {
    at: "At the services row",
    question: "Which of these is the one for me?",
    note: "Six services listed at equal weight. A visitor with a specific problem has to guess which name covers it, and guessing is where people leave.",
  },
  {
    at: "At the process copy",
    question: "What would this actually involve?",
    note: "The page says the approach is thorough. It does not say what happens, in what order, or what is expected of them — so thorough stays a claim.",
  },
  {
    at: "At the proof block",
    question: "Has this worked for someone like me?",
    note: "Five logos and three unattributed quotes. None of them are attached to a situation a reader could recognise as their own.",
  },
  {
    at: "At the contact form",
    question: "What happens if I send this?",
    note: "A form with no indication of who reads it, when a reply comes, or what the first conversation is for. The safest option is to close the tab.",
  },
];

export function SwsBeyondRedesign() {
  return (
    <section id="beyond-redesign" className="sws-beyond section on-paper">
      <div className="container section-intro section-intro--split" data-sws-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-sws-item>
            Beyond redesign
          </p>
          <h2 data-sws-item>
            A website can look right and <em>still leave the decision unresolved.</em>
          </h2>
        </div>
        <div className="section-copy-group">
          <p data-sws-item>
            The typography is careful. The photography is good. The layout holds together at every
            width. And a visitor who arrived with a decision to make still leaves without one,
            because looking right and answering the question are different jobs.
          </p>
          <p data-sws-item>
            A redesign that changes only the surface moves the same unanswered questions to a nicer
            page.
          </p>
        </div>
      </div>

      <div className="container stop">
        <div className="stop__art" data-sws-scene>
          <svg className="stop__svg" viewBox="0 0 300 560" fill="none" aria-hidden="true" focusable="false">
            <defs>
              <linearGradient id="stop-photo" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#294a63" />
                <stop offset="100%" stopColor="#5fae92" />
              </linearGradient>
            </defs>

            {/* a genuinely competent page */}
            <rect x="40" y="8" width="240" height="544" rx="6" className="stop__page" />
            <circle cx="60" cy="30" r="5" className="stop__logo" />
            <rect x="70" y="27" width="30" height="6" rx="3" className="stop__ink" />
            <rect x="196" y="27" width="20" height="5" rx="2.5" className="stop__dim" />
            <rect x="222" y="27" width="18" height="5" rx="2.5" className="stop__dim" />
            <rect x="246" y="23" width="24" height="13" rx="6.5" className="stop__chip" />
            <path d="M40 48 H280" className="stop__hair" />

            <rect x="56" y="64" width="176" height="11" rx="4" className="stop__ink" />
            <rect x="56" y="82" width="128" height="11" rx="4" className="stop__ink" />
            <rect x="56" y="106" width="208" height="72" rx="4" fill="url(#stop-photo)" />

            {/* services row — six at equal weight */}
            <text x="56" y="204" className="stop__label">
              Our services
            </text>
            {[0, 1, 2].map((col) =>
              [0, 1].map((row) => (
                <g key={`${col}-${row}`}>
                  <rect
                    x={56 + col * 72}
                    y={214 + row * 44}
                    width="64"
                    height="36"
                    rx="3"
                    className="stop__tile"
                  />
                  <rect
                    x={62 + col * 72}
                    y={224 + row * 44}
                    width="40"
                    height="5"
                    rx="2.5"
                    className="stop__dim"
                  />
                  <rect
                    x={62 + col * 72}
                    y={234 + row * 44}
                    width="52"
                    height="4"
                    rx="2"
                    className="stop__dim"
                  />
                </g>
              )),
            )}

            {/* process copy */}
            <rect x="56" y="316" width="164" height="6" rx="3" className="stop__dim" />
            <rect x="56" y="328" width="192" height="6" rx="3" className="stop__dim" />
            <rect x="56" y="340" width="140" height="6" rx="3" className="stop__dim" />

            {/* proof block */}
            <text x="56" y="378" className="stop__label">
              Trusted by
            </text>
            {[0, 1, 2, 3, 4].map((i) => (
              <rect
                key={i}
                x={56 + i * 42}
                y={388}
                width="34"
                height="16"
                rx="3"
                className="stop__tile"
              />
            ))}
            <rect x="56" y="416" width="208" height="5" rx="2.5" className="stop__dim" />
            <rect x="56" y="426" width="176" height="5" rx="2.5" className="stop__dim" />

            {/* the form */}
            <rect x="56" y="456" width="208" height="14" rx="4" className="stop__field" />
            <rect x="56" y="476" width="208" height="14" rx="4" className="stop__field" />
            <rect x="56" y="496" width="80" height="18" rx="4" className="stop__chip" />

            {/* the route: it arrives, it descends, and it stops */}
            <path
              d="M18 20 C18 90 26 140 22 196 C19 236 26 268 22 300"
              className="stop__route"
            />
            <circle cx="18" cy="20" r="4" className="stop__route-start" />
            <path d="M14 302 H30" className="stop__route-stop" />
            <path
              d="M22 320 C18 360 26 396 22 436 C19 472 26 500 22 534"
              className="stop__route-ghost"
            />
            <circle cx="22" cy="534" r="3.5" className="stop__route-ghost-end" />
          </svg>
          <p className="stop__key">
            <span className="stop__key-solid">Followed</span>
            <span className="stop__key-ghost">Never reached</span>
          </p>
        </div>

        <ol className="stop__questions" data-sws-stagger>
          {UNRESOLVED.map((item) => (
            <li key={item.question} data-sws-stagger-item>
              <p className="stop__at">{item.at}</p>
              <strong>{item.question}</strong>
              <p className="stop__note">{item.note}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="container">
        <p className="stop__close editorial-note" data-sws-fade>
          A visitor stops where the answers run out — not where the design does.
        </p>
      </div>
    </section>
  );
}
