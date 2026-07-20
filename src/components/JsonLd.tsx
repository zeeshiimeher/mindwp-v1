/** Renders one or more JSON-LD blocks. Server component — safe to inline. */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  const blocks = Array.isArray(data) ? data : [data];
  return (
    <>
      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          // JSON.stringify output is safe; no user input is interpolated raw.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}
