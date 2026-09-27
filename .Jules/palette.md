## 2026-09-21 - Toggle Buttons ARIA State Clarity
**Learning:** Toggle/tab buttons for interactive galleries require explicit `aria-pressed` or `aria-selected` attributes and explicit context-rich `aria-label`s so screen reader users know which view is selected and what action activating the toggle performs.
**Action:** When creating image or viewport switcher components, always include `aria-pressed` and a descriptive `aria-label` referencing the item being toggled.

## 2026-09-27 - Email Copy Interaction with Screen Reader Confirmation
**Learning:** `mailto:` links often fail or trigger unconfigured mail apps on desktop browsers. Providing a copy-to-clipboard button adjacent to the email link with an `aria-live="polite"` feedback container and state transition ensures both keyboard/mouse users and screen reader users receive clear confirmation of the action.
**Action:** When adding copy buttons next to contact links, always include explicit `aria-label`, an `aria-live="polite"` region, and visual feedback that resets cleanly after 2 seconds.
