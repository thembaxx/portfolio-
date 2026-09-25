## 2026-09-21 - Toggle Buttons ARIA State Clarity
**Learning:** Toggle/tab buttons for interactive galleries require explicit `aria-pressed` or `aria-selected` attributes and explicit context-rich `aria-label`s so screen reader users know which view is selected and what action activating the toggle performs.
**Action:** When creating image or viewport switcher components, always include `aria-pressed` and a descriptive `aria-label` referencing the item being toggled.

## 2026-09-25 - Copy-to-Clipboard Accessible Feedback
**Learning:** Copy buttons beside email/link CTAs need both visual state transitions (e.g. checkmark icon and updated aria-label) and an explicit `aria-live="polite"` container so screen reader users receive immediate audio confirmation when content is successfully copied.
**Action:** Always couple clipboard buttons with an `aria-live="polite"` element and an updated `aria-label` on success.
