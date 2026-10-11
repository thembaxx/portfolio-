# Themba Mndebele — Portfolio

A Next.js portfolio based on the supplied editorial design: warm paper tones, Instrument Serif and Geist typography, six numbered project sections, and a particle sphere that becomes a wave field on scroll.

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
npx vitest run
npx tsc --noEmit
```

## Structure

- `src/data/projects.ts` is the shared catalog for listings, case studies, and the sitemap.
- `src/app/page.tsx` composes the portfolio sections.
- `src/components/` contains the navigation, hero, projects, toolkit, about, contact, and footer.
- `src/app/globals.css` defines the responsive layout, typography, and light/dark colors.
- `src/components/ParticleBackground.tsx` draws the decorative animation with native Canvas 2D; it respects reduced motion, pauses in hidden tabs, and cleans up its listeners on unmount.
- `src/app/projects/[id]/page.tsx` renders case studies from the same shared catalog as the homepage. The former `/projects/lumni` URL redirects to `/projects/lumnie`.
- `public/projects/` contains the six supplied screenshots, in LinkedIn Featured order.

The homepage works with server-rendered content. Theme switching follows the system preference and persists a visitor's selection. Email copying provides accessible success and recovery messages. Fonts are served locally through `next/font`; metadata, structured data, sitemap, robots, and Vercel Analytics remain integrated.

## Branding and discovery

The [brand guide](docs/brand.md) documents the TM monogram, wordmark, palette and typography. Regenerate browser icons, SVG marks and the social sharing card with `npm run brand:assets` (Node 24+). Screenshot frames use squircles with rounded corners as a browser fallback.

The public origin defaults to `https://themba.dev`. Set `SITE_URL` before building if the canonical domain changes; metadata, structured data, sitemap, robots and LLM documents use the same origin. See [.env.example](.env.example). Vercel previews default to noindex with no sitemap entries; `INDEXING_ENABLED=false` supports staging on other hosts.

- `/llms.txt` provides a concise portfolio overview and links to all six case studies.
- `/llm.txt` serves the same document with a canonical link to `/llms.txt`.
- `/llms-full.txt` includes project features, technologies, demos and source links.

These plain-text routes are generated from the shared project catalog at build time. They provide readable context for LLM tools; they do not guarantee inclusion or ranking in AI responses. Root and project metadata include canonical URLs, Open Graph/Twitter images and structured data; browser and home-screen icons use the shared identity.

## Previews

[Desktop](public/portfolio-desktop.png) · [Mobile](public/portfolio-mobile.png)
