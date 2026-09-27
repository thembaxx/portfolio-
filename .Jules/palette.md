## 2026-09-21 - Toggle Buttons ARIA State Clarity
**Learning:** Toggle/tab buttons for interactive galleries require explicit `aria-pressed` or `aria-selected` attributes and explicit context-rich `aria-label`s so screen reader users know which view is selected and what action activating the toggle performs.
**Action:** When creating image or viewport switcher components, always include `aria-pressed` and a descriptive `aria-label` referencing the item being toggled.

## 2026-09-22 - Clipboard Copy Live Feedback
**Learning:** Copy-to-clipboard interactions on contact actions require an `aria-live="polite"` region to inform screen reader users when text is copied, alongside visual confirmation icons and state labels for sighted users.
**Action:** When implementing clipboard copy buttons, pair stateful visual feedback (`Check` icon and "Copied!") with an `aria-live="polite"` status element announcing the copy outcome.
