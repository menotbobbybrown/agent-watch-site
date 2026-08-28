# agent-watch-site

Landing page for [agent-watch](https://github.com/menotbobbybrown/agent-watch) — a skill that gives any AI agent the ability to watch videos.

## Structure

```
index.html   — main landing page
style.css    — full design system (Retro-Futuristic / Industrial Cyber-Minimalist)
app.js       — terminal animation, copy buttons, detail mode tabs
DESIGN.md    — design source of truth (typography, color, motion, voice)
```

## Design System

Defined in `DESIGN.md`. Highlights:

- **Aesthetic:** Retro-Futuristic / Industrial Cyber-Minimalist
- **Colors:** Slate noir `#070A0F` bg, viewfinder cyan `#00F0FF` accent, signal emerald `#10B981`, amber `#FFB800`
- **Type:** Syne (display) · Plus Jakarta Sans (body) · JetBrains Mono (code/timestamps)
- **Motion:** Intentional-functional only — terminal typing, frame chip stagger, copy feedback

## Local development

Open `index.html` directly in a browser — no build step, no server required.

## Deploy

Static site. Deploy to GitHub Pages, Vercel, Netlify, or any static host.

GitHub Pages (after pushing to repo):
- Settings → Pages → Source: Deploy from branch `main`, folder `/` (root)

---

Points to: [github.com/menotbobbybrown/agent-watch](https://github.com/menotbobbybrown/agent-watch)
