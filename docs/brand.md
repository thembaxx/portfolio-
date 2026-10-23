# Themba Mndebele identity

The identity extends the portfolio's editorial design with a geometric TM monogram, a serif wordmark and an orange signature dot. The message is **Thoughtful interfaces. Built to last.** It reflects the existing focus on accessible React products and dependable engineering.

## Palette and type

| Role             | Light     | Dark      |
| ---------------- | --------- | --------- |
| Paper/background | `#efeae0` | `#0f0e0c` |
| Ink/text         | `#14130f` | `#efeae0` |
| Accent           | `#c93614` | `#ff6a3d` |

Instrument Serif supplies the editorial voice, including italic accents. Geist handles body text and Geist Mono handles labels. Keep orange for emphasis, links and the signature dot.

## Logo assets

- [Light logo](../public/brand/logo.svg) and [dark logo](../public/brand/logo-dark.svg): scalable TM marks with transparent surroundings.
- [Social card](../public/brand/social.png): 1200 × 630 image for the portfolio's sharing metadata.
- PNG marks at 192 and 512 pixels, an Apple home-screen icon, an SVG browser icon and a multi-size favicon are generated from the same vector paths.

Use the light logo on paper/light backgrounds and the reversed dark logo on dark backgrounds. Keep clear space of at least one quarter of the mark's width; avoid stretching or recoloring individual letters. The header includes the full name on larger screens and uses the accessible monogram link on small screens.

The identity and vector paths live in `src/lib/brand.ts`. Run `npm run brand:assets` with Node 24 or later after changing the paths, palette or sharing card layout. The generator uses Next.js ImageResponse and the locally bundled Instrument Serif fonts; their license is in `assets/fonts/OFL.txt`. Commit the generated assets with the source change.

## Screenshot frames

Project previews and case-study screenshots use CSS `corner-shape: squircle` with responsive corner sizes. Browsers without this property retain rounded corners. Frames preserve the supplied images' aspect ratios; full-resolution links still open the original files.
