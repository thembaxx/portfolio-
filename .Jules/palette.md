## 2026-09-21 - Toggle Buttons ARIA State Clarity
**Learning:** Toggle/tab buttons for interactive galleries require explicit `aria-pressed` or `aria-selected` attributes and explicit context-rich `aria-label`s so screen reader users know which view is selected and what action activating the toggle performs.
**Action:** When creating image or viewport switcher components, always include `aria-pressed` and a descriptive `aria-label` referencing the item being toggled.

## 2026-09-26 - Skip Link Tokens & Single Root Placement
**Learning:** Skip-to-content links must be rendered strictly once in RootLayout rather than child pages, and must use actual design system color tokens (`var(--accent)`, `var(--bg)`) instead of unmapped Tailwind primary utilities to ensure proper focus visibility and high contrast.
**Action:** When inspecting keyboard accessibility, verify skip links are defined in `layout.tsx` only and styled using theme tokens.
