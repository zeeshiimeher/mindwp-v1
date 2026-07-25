/**
 * A single lens/magnify device, not a stacked layer reveal and not a
 * narrowing sequence (the latter was rejected — too close to Decision
 * Structure's ascending stages). One generic label sits deliberately vague;
 * a lens overlay reveals the specific depth inside it. Content stays
 * entirely abstract — this describes how MindWP sharpens a page, not a
 * simulated patient or client scenario.
 */
export function SwsPurposefulContentB() {
  return (
    <section id="purposeful-content" className="sws-purposeful-content-b section on-mist">
      <div className="container section-intro" data-sws-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-sws-sequence-item>
            Purposeful content
          </p>
          <h2 data-sws-sequence-item>
            Explain specialist work clearly <em>without flattening what makes it valuable.</em>
          </h2>
        </div>
        <p data-sws-sequence-item>
          A generic description is easy to write and easy to skim past. What actually earns
          attention is what a closer look reveals underneath it.
        </p>
      </div>

      <div className="container sws-purposeful-content-b__stage" data-sws-fade>
        <p className="sws-purposeful-content-b__generic">A generic service description</p>

        <div className="sws-purposeful-content-b__lens">
          <p>The specific decision it actually resolves</p>
          <p>The named person who&apos;d handle it</p>
        </div>
      </div>
    </section>
  );
}
