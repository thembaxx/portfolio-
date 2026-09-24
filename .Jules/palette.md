## 2026-09-21 - Toggle Buttons ARIA State Clarity
**Learning:** Toggle/tab buttons for interactive galleries require explicit `aria-pressed` or `aria-selected` attributes and explicit context-rich `aria-label`s so screen reader users know which view is selected and what action activating the toggle performs.
**Action:** When creating image or viewport switcher components, always include `aria-pressed` and a descriptive `aria-label` referencing the item being toggled.

## 2026-09-22 - Clipboard Copy Micro-Interaction Accessibility
**Learning:** Adding a copy-to-clipboard button beside contact email/text links provides immediate user delight, but requires dynamic `aria-label` updates alongside an `aria-live="polite"` status region so screen reader users receive feedback without focus disruption.
**Action:** Pair clipboard copy buttons with a temporary checkmark icon, dynamic `aria-label` ("Copy email address..." -> "Email address copied..."), and a screen-reader `role="status"` live region.
