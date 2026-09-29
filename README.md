# Devansh — Portfolio Website

A static, dependency-light portfolio site (Animator / Motion Designer).
Plain HTML/CSS/JS — no build step, no framework, ready to deploy as-is.

## Files
- `index.html` — page structure
- `style.css` — all styling, layout and animation
- `script.js` — project data, case-study modal, scroll reveal
- `assets/favicon.svg` — site favicon

## Adding your VELOCE live demo link
Open `script.js` and find this line near the top:

```js
var VELOCE_LIVE_URL = "PASTE-YOUR-VELOCE-LIVE-URL-HERE";
```

Replace the placeholder text with your deployed VELOCE URL, e.g.:

```js
var VELOCE_LIVE_URL = "https://your-veloce-site.com";
```

Once set, opening the "VELOCE — Automotive Concept Site" case study
on the portfolio will show a **VIEW LIVE DEMO** button that links to it.
Until you set a real URL, that button stays hidden automatically.

## Editing project content
All project entries (title, tags, role, tools, client, case-study text,
thumbnail color class) live in the `PROJECTS` array at the top of
`script.js`. Edit or add entries there — the grid and modal render
from that array automatically.

## Deploying
This is a fully static site — any static host works. A few options:

**Netlify / Vercel (drag & drop)**
1. Go to Netlify or Vercel, choose "deploy manually" / "drag and drop".
2. Drag this whole folder in. Done — you'll get a live URL immediately.

**GitHub Pages**
1. Push this folder's contents to a GitHub repo.
2. Repo Settings → Pages → set source to the `main` branch, root folder.
3. Your site will be live at `https://<username>.github.io/<repo>/`.

**Any other static host**
Upload `index.html`, `style.css`, `script.js` and the `assets/` folder,
keeping the same relative paths and folder structure.

No environment variables, no server, no build command needed.
