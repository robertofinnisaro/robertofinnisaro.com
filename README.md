# The Maker's Archive

A complete Astro starter for a Markdown-driven projects, 3D-printing, research and tutorial portfolio.

## Start locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Important customisation

1. Change `site` in `astro.config.mjs`.
2. Replace the sample content in `src/content/`.
3. Edit the identity, navigation and footer.
4. Replace the Google Fonts import with self-hosted fonts if preferred.
5. Add real images under `public/images/` or import optimised images from `src/assets/`.

## Cloudflare Pages

- Build command: `npm run build`
- Output directory: `dist`
- Production branch: `main`

The site is static and does not require the Cloudflare Astro adapter.
