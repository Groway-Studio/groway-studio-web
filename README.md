# groway.studio

Single-page website for Groway Studio, an AI agency with engineering and science: we integrate, build custom systems, train models and do applied research. Live at [groway.studio](https://groway.studio/).

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4 (pure v4, no legacy config bridge — design tokens live in `src/index.css`)
- Framer Motion for scroll reveals and layout transitions
- Raw WebGL shaders (no 3D library) for the animated visuals
- i18n ES/EN via a lightweight context (`src/locales/`)

## Structure

```
src/
  components/
    chat/       SiriOrb (WebGL fluid orb, animation states) + ChatWidget (guided lead flow)
    hero/       PointCloudCanvas (noise-displaced point sphere shader)
    layout/     Navigation, Footer, Section primitives, LogoMark
    sections/   Hero, Approach, DepthLevels, Method, Proof, Startups, Contact
    ui/         Reveal (scroll reveal with reduced-motion support)
    visuals/    DotField, KeywordCloud, LevelIcons (dot-matrix SVG icons)
  contexts/     LanguageContext (ES/EN, syncs <html lang>, title and meta)
  lib/          api.ts (contact endpoint layer), scroll, utils
  locales/      es.ts / en.ts / types.ts — all site copy
branding/       source logo assets
public/         CNAME, favicon, og-image, robots.txt, sitemap.xml, logo
```

## Development

```bash
npm install
npm run dev        # local dev server
npm run typecheck  # tsc --noEmit
npm run lint       # eslint (zero-warning policy)
npm run build      # production build to dist/
```

## Configuration

Copy `.env.example` to `.env`:

- `VITE_CONTACT_ENDPOINT` — POST target for chat leads (Formspree, a worker, or a future API). When unset, the chat falls back to opening a pre-filled mailto draft. Set it as an Actions variable for production builds.

## Deploy

Pushes to `main` build and deploy to GitHub Pages via `.github/workflows/deploy.yml`. The custom domain (`public/CNAME`), robots and sitemap ship inside the artifact. DNS is managed in Cloudflare.

## Content notes

- All copy lives in `src/locales/` (ES is the primary language).
- The Proof section metrics are currently mock data, flagged with a warning comment in the locale files. Replace with client-confirmed cases before promoting the site; cards without a real metric should not ship.
- The SiriOrb component exposes `mode` (`passive` | `speaking` | `thinking`) and `level` (0..1) so a future audio backend can drive the orb in real time.
