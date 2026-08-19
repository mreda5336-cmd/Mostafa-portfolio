# Mostafa Reda Abdelaziz — Portfolio

A minimal, bilingual (English / Arabic) portfolio site with dark & light mode.
Plain HTML/CSS/JS — no build step, no dependencies to install.

## 📁 What's inside

```
index.html          Home page
about.html           About / education / experience
projects.html         All projects (with filters)
contact.html          Contact page
css/style.css          All styling (design tokens at the top)
js/i18n.js             All English + Arabic text — edit this to change copy
js/projects-data.js     All project cards — edit this to add/remove projects
js/main.js              Theme toggle, language toggle, rendering logic
assets/img/             Put your real screenshots here
```

## 🚀 Host it on GitHub Pages (free)

1. Create a new repository on GitHub, e.g. `mostafa-portfolio`.
2. Upload all the files in this folder to the repo (keep the folder structure).
3. Go to **Settings → Pages** in your repo.
4. Under "Build and deployment", set **Source: Deploy from a branch**,
   branch: `main`, folder: `/ (root)`. Save.
5. GitHub gives you a live URL after a minute or two, usually:
   `https://<your-username>.github.io/mostafa-portfolio/`

That's it — no build tools, no npm install needed.

## ✏️ How to add more projects

Open `js/projects-data.js` and add another project object to the `PROJECTS` array.
Project screenshots belong in `assets/img/`.

The current portfolio includes two dashboard screenshots, a K-Means customer
segmentation project, a Tableau/Excel sales dashboard, and the Carry-On business project.

## 🌍 Editing text / translations

All English and Arabic copy lives in `js/i18n.js`. Find the key (e.g.
`home.heroBio`) under `en: {...}` and `ar: {...}` and edit the string —
it updates on the live site automatically, no HTML editing needed.

## 🔗 Links & profile details

- GitHub: https://github.com/mreda5336-cmd
- Expected graduation: 2027
- Retail experience: AlREDA
- Carry-On Instagram is linked from the Contact page.
- Optional: replace the "MR" circle in `about.html` with a real portrait.

## 🎨 Design notes

- Colors, fonts, spacing are all CSS variables at the top of `css/style.css`
  under `:root` (light) and `[data-theme="dark"]` (dark) — change a hex
  value there and it updates everywhere.
- Section labels are styled like SQL queries (`SELECT * FROM projects;`) as
  a small nod to your SQL skills instead of generic "01 / 02 / 03" numbering.
- Dark/light and EN/AR preferences are remembered per-visitor via
  `localStorage`, so returning visitors keep their settings.


GitHub: https://github.com/mreda5336-cmd
Expected graduation: 2027
