# katkeilty.github.io

A personal portfolio site generated from the GitProfile template and customized for my professional portfolio.

Live: https://katkeilty.com

## About

This repository contains the source and configuration for my personal portfolio site. It is built on the GitProfile template and customized with my projects, experience, and contact links. The site is a static Vite app and is published to GitHub Pages from this repository.

## Attribution

This site was built using the GitProfile template by Arif Szn: https://github.com/arifszn/gitprofile

License: MIT — see the `LICENSE` file in this repository.

Inexperienced in web design, I was happy to discover GitProfile, which I forked to use as a template. With minimal exposure to web design previously, I used both Claude.ai by Anthropic and GitHubs Copilot agent to help me create my customizations. Icons for my Projects cards were found on https://www.svgrepo.com/collection/corporate-pale-color-vectors/

## Quick start (development)

1. Install dependencies

```bash
npm install
```

2. Run dev server

```bash
npm run dev
```

3. Open the site in your browser (default Vite port):

- http://localhost:5173/gitprofile/ (dev)

4. Build for production

```bash
npm run build
```

5. Preview the built site locally

```bash
npm run preview
```

Alternatively you can serve the `dist` folder with a static server such as `serve`:

```bash
npx serve dist
```

## Notes

- Linting: this project uses ESLint + Prettier. Run `npm run lint` and `npm run lint:fix` to keep formatting consistent.
- Type checking: `npx tsc --noEmit` runs a quick type check.
