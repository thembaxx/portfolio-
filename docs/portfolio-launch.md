# Portfolio launch verification · 28 October 2026

## Visitor journey

Open the homepage → inspect Nest, Billora or Hydromental → read the audience, work covered, problem, decision and tradeoff → try the documented main journey in the live app or inspect its source. Expand “More projects & experiments” to reach the rest of the catalog. Existing project routes, including the old Lumni redirect, are preserved.

The homepage, structured data and readable discovery documents share the same flagship selection. Curated case-study content remains independent of the generated GitHub catalog, so a daily sync cannot replace it with a README summary.

## Observed checks

Checked against the local production build on 28 October 2026:

- `npm test`: 33 tests passed. The baseline had one stale homepage-order assertion after an earlier Tally addition; the updated test checks the deliberate three-project selection and access to every other project.
- `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm run build`: passed.
- Chromium: homepage and all three flagship case-study routes returned HTTP 200 at 320, 768, 1024 and 1440 pixels, with one H1 per page and no horizontal overflow.
- The wider-project disclosure opens and closes with keyboard Enter. Links to the wider collection remain available inside it.
- Each flagship case study exposes the main journey and tradeoff after a direct visit and reload.
- Light/dark choice persists after reload; the browser run used reduced motion and recorded no page exceptions.
- Real browser captures were inspected at 320 and 1440 pixels. Existing project images retain their original capture provenance; no replacement app screenshots or usage metrics were fabricated.

The browser pass above covers the initial launch presentation in PR #53. The later Phosphor icon migration in PR #54 is preserved. The evidence follow-up changes citations and metadata only; all 33 unit/component tests, lint and type checks passed again on that newer base.

## Evidence boundaries

Local production verification establishes this portfolio’s navigation and rendering, not the availability of an external deployment. Each app records its own workflow checks and limitations. Source links point to public repositories where verified; restricted links in older case studies remain labelled. User adoption, classroom outcomes, billing accuracy across all municipalities and live optional Google consent are not established by this portfolio.

The existing Git integration owns publication after merge. Final hosted-release verification is omitted at the owner's request; merge completion is reported separately from deployment status.
