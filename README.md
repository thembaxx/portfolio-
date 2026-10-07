# Themba Mndebele — Portfolio

A Next.js portfolio based on the supplied editorial design: warm paper tones, Instrument Serif and Geist typography, numbered project sections, and a particle sphere that becomes a wave field on scroll.

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

- `src/app/page.tsx` composes the portfolio sections.
- `src/components/` contains the navigation, hero, projects, toolkit, about, contact, and footer.
- `src/app/globals.css` defines the responsive layout, typography, and light/dark colors.
- `src/components/ParticleBackground.tsx` draws the decorative animation with native Canvas 2D; it respects reduced motion, pauses in hidden tabs, and cleans up its listeners on unmount.
- `src/app/projects/[id]/page.tsx` retains the Mileia and Lumni case studies and screenshot galleries.
- `public/projects/` contains the existing project screenshots.

The homepage works with server-rendered content. Theme switching follows the system preference and persists a visitor's selection. Email copying provides accessible success and recovery messages. Fonts are served locally through `next/font`; metadata, structured data, sitemap, robots, and Vercel Analytics remain integrated.

## Previews

[Desktop](public/portfolio-desktop.png) · [Mobile](public/portfolio-mobile.png)
