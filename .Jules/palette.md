## 2026-09-21 - Toggle Buttons ARIA State Clarity
**Learning:** Toggle/tab buttons for interactive galleries require explicit `aria-pressed` or `aria-selected` attributes and explicit context-rich `aria-label`s so screen reader users know which view is selected and what action activating the toggle performs.
**Action:** When creating image or viewport switcher components, always include `aria-pressed` and a descriptive `aria-label` referencing the item being toggled.

## 2026-09-22 - Clipboard Copy Live Feedback
**Learning:** Copy-to-clipboard interactions on contact actions require an `aria-live="polite"` region to inform screen reader users when text is copied, alongside visual confirmation icons and state labels for sighted users.
**Action:** When implementing clipboard copy buttons, pair stateful visual feedback (`Check` icon and "Copied!") with an `aria-live="polite"` status element announcing the copy outcome.

## 2026-10-03 - Dynamic Theme and Mobile Menu Toggle Clarity
**Learning:** Fixed header icon buttons (such as theme switchers and mobile drawer toggles) need dynamic action-oriented `aria-label`s (e.g. "Switch to light theme" or "Close navigation menu") paired with `title` tooltips for hover states and explicit `aria-controls` bindings to communicate state shifts accurately to both sighted and screen reader users.
**Action:** Always provide state-aware `aria-label`s, native `title` attributes, and `aria-controls` IDs on fixed menu and theme toggles in navigation components.

## 2026-10-24 - Project Detail Action Link Accessibility and Focus States
**Learning:** Detail/case study subpages often miss context-rich `aria-label`s and `focus-visible` ring indicators on action links (e.g. Live Demo and GitHub Repository links) compared to index cards. Ensuring explicit `aria-label`s, `focus-visible` rings, and `aria-hidden` attributes on decorative icons provides a seamless and accessible experience for keyboard and screen reader users across all pages.
**Action:** Always mirror interactive action link ARIA attributes and focus styles across both summary cards and dedicated detail pages.
