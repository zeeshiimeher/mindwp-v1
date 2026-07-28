/**
 * §9. The reprise: §3 showed one record filled in, and this is the same fields
 * as an empty specification, so the platform underneath is visibly the
 * incidental part. No CRM product is named anywhere on this page — naming one
 * would make the software look like the thing being sold.
 */
const FIELDS = [
  { name: "Owner", detail: "A person, not a department." },
  { name: "Status", detail: "What is actually true right now, in your words." },
  { name: "Next action", detail: "What happens next, and on what date." },
  { name: "Reason", detail: "Why that action — in their words where possible." },
  { name: "Permission", detail: "Channel, what was agreed, and how they stop it." },
] as const;

export function FucCrm() {
  return (
    <section className="fuc-crm section">
      <div className="container container--content fuc-crm__split">
        <div className="fuc-crm__argument container--flow">
          <div className="section-title-group">
            <p className="eyebrow">CRM support</p>
            <h2>
              Use an appropriate CRM to preserve the agreed work without turning software into the
              service.
            </h2>
          </div>
          <p>
            We do not resell software or push a platform because we happen to like it. If you
            already run something workable, we set this up inside it. If you do not, we choose one
            against the work we have agreed and configure it: the stages your enquiries genuinely
            pass through, the fields that have to exist, the connection from your website&apos;s
            enquiry form, and a walkthrough for whoever will use it daily.
          </p>
          <p>
            The whole path gets tested before it goes anywhere near a real enquiry — because a
            record that quietly drops half of what arrives is worse than no record at all.
          </p>
          <p className="editorial-note">
            The tool matters far less than what it is made to hold.
          </p>
        </div>

        <div className="fuc-spec">
          <p className="fuc-spec__head">Whichever CRM, the record holds</p>
          <ol className="fuc-spec__list">
            {FIELDS.map((field, index) => (
              <li key={field.name}>
                <span className="fuc-spec__index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="fuc-spec__name">{field.name}</span>
                <span className="fuc-spec__detail">{field.detail}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
