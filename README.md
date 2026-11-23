# Portfolio

Personal site for Matthew Loyed. Vanilla JS, Vite, Tailwind CSS. Deployed on Vercel.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/
```

## Structure

- `index.html` – single-page site (intro, work, experience, contact)
- `project.html` – detail page, rendered from `?id=<project id>`
- `src/data/projects.json` – all project content; edit this to add or change a project
- `src/js/` – `main.js` (home page), `project.js` (detail page)
- `src/styles/main.css` – Tailwind plus a few component classes
- `public/assets/` – images, stored as WebP

## Adding a project

1. Add a WebP screenshot under `public/assets/projects/<id>/`.
2. Add an entry to `src/data/projects.json`. Set `"featured": true` for the large cards at the top. Use `null` for `liveUrl` or `githubUrl` when there is none (for example a private repo).

The contact form posts to Web3Forms using the public access key in `index.html`.
