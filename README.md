# katkeilty.com

A personal portfolio site built on the [GitProfile](https://github.com/arifszn/gitprofile) template by Arif Szn, customized to showcase my work at the intersection of **business process strategy, digital transformation, and data-driven decision-making**.

**Live:** [katkeilty.com](https://katkeilty.com)

---

## About

I'm a strategic business process leader with a decade of experience bridging operations and technology. This portfolio highlights my work across enterprise implementations, quality management systems, business intelligence, and organizational change — with a growing focus on IT roles in process strategy, business analysis, and digital transformation.

My background spans ISO 9001/14001 compliance, ERP and CRM rollouts, Power BI reporting, and Agile/Waterfall project facilitation. I'm currently completing a BSc in Computer and Information Systems at Athabasca University, and hold certifications in Lean Six Sigma (Black Belt), Business Intelligence & Data Analysis, and Quality Process Analysis.

If you're looking for someone who can translate complex technical requirements into business outcomes — and bring people along through the change — I'd love to collaborate: [kat.keilty@outlook.com](mailto:kat.keilty@outlook.com) | [LinkedIn](https://linkedin.com/in/katkeilty)

---

## Built With

This site is a static Vite app published to GitHub Pages, forked from the GitProfile template. Customizations were developed with assistance from Claude.ai (Anthropic) and GitHub Copilot. Project card icons sourced from [SVG Repo](https://www.svgrepo.com/collection/corporate-pale-color-vectors/).

---

## Keeping Up With Upstream

This repo is a fork of [arifszn/gitprofile](https://github.com/arifszn/gitprofile). To pull in updates from the original template while preserving your customizations:

**1. Make sure upstream is set**

```bash
git remote add upstream https://github.com/arifszn/gitprofile.git
# skip if already added — verify with: git remote -v
```

**2. Fetch upstream changes**

```bash
git fetch upstream
```

**3. Merge into your working branch**

```bash
git checkout update
git merge upstream/main
```

**4. Resolve any conflicts**

Git will flag conflicted files. Open them and look for markers like:

```
<<<<<<< HEAD
your version
=======
upstream version
>>>>>>> upstream/main
```

Edit to keep what you want, delete the markers, then:

```bash
git add <filename>
git commit
```

> **Tip:** Your personal config (`gitprofile.config.ts`) is the file you'll edit most — conflicts there are usually straightforward. For core source files, prefer upstream's version unless you've intentionally customized them.

---

## Local Development

**Install dependencies**

```bash
npm install
```

**Run dev server**

```bash
npm run dev
```

Open [http://localhost:5173/gitprofile/](http://localhost:5173/gitprofile/) in your browser.

**Build for production**

```bash
npm run build
```

**Preview the production build**

```bash
npm run preview
# or serve the dist folder directly:
npx serve dist
```

---

## Troubleshooting

### Browser Tab Shows "Portfolio of Ariful Alam" Instead of Your Title

**Issue:** On first load or in mobile previews, the browser tab and meta tags show the upstream template's default title instead of your custom SEO title.

**Cause:** The built HTML file (`dist/index.html`) needs to be regenerated to inject your configuration.

**Fix:** Rebuild the production bundle:

```bash
npm run build
```

Then hard refresh your browser to clear the cache:
- **Chrome/Edge/Firefox:** `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- **Safari:** `Cmd+Option+E` to empty cache, then `Cmd+R`

The title is configured in your SEO settings:

```typescript
// gitprofile.config.ts or gitprofile.config.en.ts
seo: {
  title: 'Your Custom Title Here',
  description: 'Your description',
  imageURL: '/your-image.svg',
}
```

---

## Code Quality

```bash
npm run lint        # check for lint issues
npm run lint:fix    # auto-fix formatting
npm run prettier # run the "prettier" package script
npm run prettier:fix # run the "prettier:fix" package script

npx tsc --noEmit    # type check
npx prettier --write "./**/*.{js,jsx,ts,tsx,css,md,json}"

```

---

## Attribution & License

Template by [Arif Szn](https://github.com/arifszn/gitprofile) — MIT License. See `LICENSE` for details.
