export function focusAndRevealTab(tabs: NodeListOf<HTMLButtonElement>, index: number) {
  const tab = tabs[index];
  if (!tab) return;

  tab.focus();
  tab.scrollIntoView({ block: "nearest", inline: "center" });
}

export function revealTab(tab: HTMLButtonElement) {
  tab.scrollIntoView({ block: "nearest", inline: "center" });
}
