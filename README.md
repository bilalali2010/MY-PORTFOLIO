# Bilal Ali — Portfolio (Consolidated)

This is your full React/Vite portfolio project condensed into **5 plain files** — no build step, no npm install, no framework. Just open `index.html` in a browser or upload it to any static host.

## Files

| File | Purpose |
|---|---|
| `index.html` | Page structure — Hero, Services, Skills & Process, Experience, Contact |
| `styles.css` | All styling — black/crimson theme, fonts, layout, animations |
| `script.js` | All content data (services, skills, work process, etc.) + scroll animations, sticky navbar, and contact form handling |
| `images/hero-portrait.png` | Your hero portrait image |
| `README.md` | This file |

## What changed from the original project

The original was a Vite + React + Tailwind + shadcn/ui project with 90+ files (component library, hooks, config, patches, etc.). All of the actual content and design have been preserved and merged into the 4 core files above:

- Every section (Navbar, Hero, Services, Skills & Process, Experience, Contact) is now plain HTML in `index.html`.
- All Tailwind utility classes were translated into a single `styles.css` with the same colors, fonts (Anton / DM Sans / Dancing Script), spacing, and scroll/hover animations.
- All the data (`services`, `skills`, `workProcess`, `experience`, `strengths`, etc.) now lives in `script.js` and renders into the page on load.
- The scroll-reveal and sticky-navbar behavior from the React hooks (`useInView`, scroll listener) was reimplemented in plain JavaScript using `IntersectionObserver`.
- The contact form now opens the visitor's email client pre-filled with their message (via a `mailto:` link) since there's no backend/server in this version.

## How to use it

1. **Open directly**: double-click `index.html` — it works with no server.
2. **Deploy anywhere**: drag the folder into Vercel, Netlify, GitHub Pages, or any static host.
3. **Edit content**: update the arrays at the top of `script.js` (services, skills, work process, responsibilities, strengths) — no rebuild needed, just refresh the page.
4. **Edit your email**: update the `mailto:bilal@example.com` address in `script.js` and the email shown in `index.html`.

## Notes

- Fonts (Anton, DM Sans, Dancing Script) and icons (Font Awesome) load from CDNs, so an internet connection is needed for those — everything else is fully self-contained.
- If you want the original React project back (with its component structure, shadcn/ui library, and build tooling), keep the original zip — this version is a lightweight, dependency-free alternative for quick deployment or handing off to a client.
