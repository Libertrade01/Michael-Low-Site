# Michael Low — Portfolio

Personal portfolio site built with Astro, Tailwind CSS, and MDX Content Collections.

## Stack

- [Astro 5](https://astro.build)
- Tailwind CSS 4
- MDX for case studies and build log
- Deployed on Vercel

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Build

```bash
npm run build
npm run preview
```

## Content

Add projects in `src/content/projects/` and build log posts in `src/content/build-log/`.

Update current focus in `src/content/now/index.md`.

## Headshot (About page)

1. Use a square or portrait photo (at least 400×400px).
2. Save as `public/images/headshot.png` (or `.jpg` / `.webp`).
3. Refresh `/about` — the placeholder shows until the file exists.

Optional: change the path in `src/config/site.ts` → `site.headshot`.

## Deploy

Push to GitHub and connect to Vercel. Set production domain in `astro.config.mjs` (`site` field).
