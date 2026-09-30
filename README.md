# Clients & Accounts Table — React Demo

**R11971 — Staff UX Designer design exercise.** A Data Grid / Table component
built for a clients-and-accounts view: sortable columns, column pinning,
pagination, density modes, and loading/error/empty states.

This repo is the standalone React demo build. The component source here is
shared with the companion Storybook repo (see Links below) — this build
adds only a presentational demo page (`src/App.tsx`) around the same
`DataGrid` component.

## Links

- Figma: https://www.figma.com/design/SWKjhkZnR6DDFKUdtTOHWf
- Storybook demo (live): https://<github-username>.github.io/clients-accounts-table-storybook/
- Storybook repo: https://github.com/<github-username>/clients-accounts-table-storybook
- React demo (live): https://<github-username>.github.io/clients-accounts-table-react-demo/

## Run locally

```
npm install
npm run dev
```

## Build

```
npm run build
```

Deploys automatically to GitHub Pages via GitHub Actions on push to `master`/`main`.

## What to look at

- `src/components/DataGrid.tsx` — the component itself: sorting, column
  pinning, pagination, density, row states.
- `src/components/Toolbar.tsx`, `HeaderCell.tsx`, `Row.tsx`, `Cell.tsx`,
  `Avatar.tsx`, `StatusBadge.tsx` — supporting pieces.
- `src/App.tsx` — the demo page, with density/loading/error toggles so a
  reviewer can see those states without needing Storybook's Controls panel.
- `ACCESSIBILITY.md` — accessibility notes and decisions for the component.
