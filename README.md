# Themba Mndebele — Portfolio

A Next.js portfolio with warm paper tones, Instrument Serif and Geist typography, curated case studies, an automatically synced GitHub project catalog, and a particle sphere that becomes a wave field on scroll.

The newest featured launch is [Mise](https://mise-two-teal.vercel.app), an interactive cooking studio. All 25 active reviewed projects are included in the shared catalog, with Mise first. Its private source is not linked publicly; until a real screenshot is captured, its card uses the existing clearly labeled live-site preview fallback.

## Run locally

```bash
npm ci
npm run dev
```

Open http://localhost:3000. For a production build:

```bash
npm run build
npm run start
```

## Validation

```bash
npm test
npm run lint
npx tsc --noEmit
npm run build
```

## Automatic GitHub projects

[Sync GitHub projects](.github/workflows/sync-github-projects.yml) runs daily at **05:23 UTC**, when its configuration or sync script changes on `main`, and from **Actions → Sync GitHub projects → Run workflow**. It refreshes the catalog, runs tests, lint, TypeScript and a production build, then commits changes to `main` only when the generated data differs. GitHub's built-in `GITHUB_TOKEN` supplies API access and `contents: write`; no personal access token is needed.

The repository currently uses `themba-mndebele-portfolio-13299115673946064689` as its default and Vercel production branch. The workflow also lives on that branch so GitHub runs the schedule, checks out `main` as the source, and fast-forwards the default branch after validation to publish updates through the existing Vercel connection. It never force-pushes. If `main` becomes the default branch later, the extra publishing step is automatically skipped. Keep future development on `main` so the publishing branch can fast-forward.

[github-projects.config.json](github-projects.config.json) selects public repositories owned by `thembaxx`, created on or after **August 18, 2026**. This is a fixed start date: projects remain included as time passes, and future projects are picked up automatically. Forks, the portfolio itself and the GitHub profile repository are excluded. Add repository names to `exclude` to hide other entries. Private repositories are never published.

The sync uses each public repository's default branch, README summary (falling back to its GitHub description), package dependencies, language and homepage. The reviewed `activeRepoNames` allowlist keeps only active, verified live projects. Because most project repositories are private, explicitly reviewed live entries survive public GitHub syncs; private source URLs are not shown publicly. Update the allowlist when a repository is archived, a site is discontinued, or a new public demo is ready. Repositories without documentation, screenshots or a live app still have working project pages and GitHub links. The six curated case studies keep their existing order and copy, but use the same refreshed screenshot manifest as the synced projects; matching GitHub entries are deduplicated. Other projects display live-site image previews or clearly labeled GitHub repository cards, so no listing appears without an image. A browser capture step uses Playwright at 1440 × 900 (desktop), 820 × 1180 (tablet) and 390 × 844 (mobile) to save genuine public website screenshots under `public/projects/`; capture locations and timestamps persist in `src/data/project-screenshots.json` across future GitHub syncs. Captures support `.vercel.app` and `.themba.dev` deployments and automatically expire after seven days; use **Actions → Sync GitHub projects → Run workflow → Refresh screenshots** for an immediate full recapture. Changes to the catalog or capture source on the production branch also trigger a full recapture. Protected or unavailable deployments are not misrepresented as screenshots. The homepage, case-study routes, sitemap, social metadata and LLM documents all use the merged catalog.

To refresh locally, run `npm run projects:sync` (optionally with `GITHUB_TOKEN` or `GH_TOKEN` for a higher API rate limit). Generated data lives in [src/data/github-projects.json](src/data/github-projects.json); edit curated case studies in [src/data/projects.ts](src/data/projects.ts). API failures leave the last successful generated snapshot intact, and validation failures prevent the workflow from committing.

## Structure

- `src/data/projects.ts` combines curated case studies with `src/data/github-projects.json` for listings, project pages and discovery documents.
- `src/app/page.tsx` composes the portfolio sections.
- `src/components/` contains the navigation, hero, projects, toolkit, about, contact, and footer.
- `src/app/globals.css` defines the responsive layout, typography, and light/dark colors.
- `src/components/ParticleBackground.tsx` draws the decorative animation with native Canvas 2D; it respects reduced motion, pauses in hidden tabs, and cleans up its listeners on unmount.
- `src/app/projects/[id]/page.tsx` renders case studies from the same shared catalog as the homepage. The former `/projects/lumni` URL redirects to `/projects/lumnie`.
- `public/projects/` contains genuine browser captures for available projects, plus preserved original featured-project images as fallbacks when capture is unavailable.

The homepage works with server-rendered content. Theme switching follows the system preference and persists a visitor's selection. Email copying provides accessible success and recovery messages. Fonts are served locally through `next/font`; metadata, structured data, sitemap, robots, and Vercel Analytics remain integrated.

## Branding and discovery

The [brand guide](docs/brand.md) documents the TM monogram, wordmark, palette and typography. Regenerate browser icons, SVG marks and the social sharing card with `npm run brand:assets` (Node 24+). Project thumbnails and screenshot frames use consistent squircles, falling back to rounded rectangles in browsers without `corner-shape` support.

The public origin defaults to `https://themba.dev`. Set `SITE_URL` before building if the canonical domain changes; metadata, structured data, sitemap, robots and LLM documents use the same origin. See [.env.example](.env.example). Vercel previews default to noindex with no sitemap entries; `INDEXING_ENABLED=false` supports staging on other hosts.

- `/llms.txt` provides a concise portfolio overview and links to every project.
- `/llm.txt` serves the same document with a canonical link to `/llms.txt`.
- `/llms-full.txt` includes project features, technologies, demos and source links.

These plain-text routes are generated from the shared project catalog at build time. They provide readable context for LLM tools; they do not guarantee inclusion or ranking in AI responses. Root and project metadata include canonical URLs, Open Graph/Twitter images and structured data; browser and home-screen icons use the shared identity.

## Previews

[Desktop](public/portfolio-desktop.png) · [Mobile](public/portfolio-mobile.png)
