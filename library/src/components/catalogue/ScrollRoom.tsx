/**
 * Deliberate empty scroll distance.
 *
 * Pinned, scrubbed and sticky sections cannot be judged with nothing above or
 * below them — the entry and exit are half the behaviour. This gives them real
 * room and labels itself so the blank space reads as intent, not as a gap.
 */
export function ScrollRoom({ label, height = "80svh" }: { label: string; height?: string }) {
  return (
    <div
      className="flex items-center justify-center border-y border-hairline bg-page"
      style={{ minHeight: height }}
      aria-hidden="true"
    >
      <small className="text-muted">{label}</small>
    </div>
  );
}
