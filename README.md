# Resume

Personal résumé site of **Yura Maksymov**, Full Stack Developer.

**Live:** [mxmv.airlance.org](https://mxmv.airlance.org)

## Features

- Two languages (UA / EN) with an instant switcher; the page title and `lang` attribute follow the selected language
- Dark blue theme with Fraunces (headings) and Manrope (body) from Google Fonts
- "Download PDF" button that uses the browser print dialog, with an A4 print stylesheet
- Fully static: no backend, no router, no runtime data fetching

## Tech stack

- [React](https://react.dev) 19 + TypeScript
- [Vite](https://vite.dev)
- [Tailwind CSS](https://tailwindcss.com) 4
- [Oxlint](https://oxc.rs)

## Getting started

```sh
npm install
npm run dev
```

| Command           | What it does                           |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Start the dev server with HMR          |
| `npm run build`   | Type-check and build to `dist/`        |
| `npm run preview` | Serve the production build locally     |
| `npm run lint`    | Run Oxlint                             |

## Editing the content

All text lives in [`src/data/resume.ts`](src/data/resume.ts), so components rarely need to change:

- `t`: header texts, section titles and the page title for each language
- `jobs`: work experience (role, company, period, duration and bullet points per language)
- `skillGroups`: skills grouped by area
- `EMAIL`: contact address used in the header button and footer

Static metadata (`<title>`, description, Open Graph tags) is in [`index.html`](index.html). It shows the Ukrainian version, since that is what link previews and search engines see.

## Project structure

```
src/
├── App.tsx              # page layout and language state
├── index.css            # Tailwind, theme tokens, print styles
├── components/          # Header, Experience, Skills, Section
└── data/resume.ts       # all résumé content
```

## Deployment

`npm run build` produces a static site in `dist/`, so it can be hosted on any static hosting (Cloudflare Pages, Netlify, GitHub Pages, etc.).

## Contact

[mxmv@airlance.org](mailto:mxmv@airlance.org)
