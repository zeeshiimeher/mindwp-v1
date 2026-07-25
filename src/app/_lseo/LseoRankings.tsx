/**
 * 2 · Beyond rankings — position is where the page starts, not where it ends.
 * The sequence escalates in weight toward the decision, because that is the
 * part a ranking screenshot never shows.
 */
export function LseoRankings() {
  return (
    <section id="beyond-rankings" className="lsa-rankings lsa-section section on-mist">
      <div className="container lsa-centered-intro" data-lsa-sequence>
        <p className="eyebrow eyebrow--centered" data-lsa-sequence-item>
          Beyond rankings
        </p>
        <h2 data-lsa-sequence-item>
          Visibility earns the look. <em>What they find next shapes the decision.</em>
        </h2>
        <p data-lsa-sequence-item>
          A high position earns a glance and nothing more. The profile they open, the page they land
          on, the details they cross-check and the proof they read are what turn that glance into a
          considered enquiry — or send it to whoever answered better.
        </p>
        <ol
          className="lsa-rankings__sequence"
          aria-label="How a local decision proceeds"
          data-lsa-stagger
        >
          <li data-lsa-stagger-item>Discovered</li>
          <li data-lsa-stagger-item>Inspected</li>
          <li data-lsa-stagger-item>Verified</li>
          <li data-lsa-stagger-item>Chosen</li>
        </ol>
      </div>
    </section>
  );
}
