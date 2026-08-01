/**
 * Classification chips.
 *
 * Flat strings on purpose, and it stays that way: what goes in them is now
 * derived from the registry's typed taxonomy fields by `toTags()`, so this
 * component renders one list and owns none of its meaning.
 */
export function TagList({ tags }: { tags: readonly string[] }) {
  if (tags.length === 0) return null;

  return (
    <ul className="flex list-none flex-wrap gap-step-2 p-0">
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-pill border border-emerald-line-soft bg-emerald-tint-weak px-step-3 py-step-1"
        >
          <small className="text-emerald-deep">{tag}</small>
        </li>
      ))}
    </ul>
  );
}
