# Teisha McRae — Portfolio

Personal portfolio site, built with React, [Vite](https://vitejs.dev/), and [styled-components](https://styled-components.com/).

## Development

```
npm install
npm run dev       # start the local dev server
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run deploy    # build and publish to GitHub Pages
```

## Structure

- `src/components/sections/` — each section of the single-page scroll layout (Hero, Philosophy, Journey, Work, Horizon, Connect), composed in order by `PortfolioContainer.jsx`.
- `src/components/ui/` — shared layout primitives (`Container`, `Section`, `Button`).
- `src/components/GlobalStyle.js` — design tokens (color, type, spacing) and base element styles.
- `src/images/`, `src/assets/` — photos, screenshots, and the downloadable résumé.

## Deployment

Deploys to GitHub Pages via `gh-pages`, publishing `dist/` to the `master` branch. `public/CNAME` points the custom domain (`mcraeteisha.com`) at the published site.
