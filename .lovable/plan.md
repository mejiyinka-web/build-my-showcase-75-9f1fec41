## Problem

The preview is blank because `index.html` references assets under `/build-my-showcase-75-9f1fec41/assets/...` (a publish-time base path), but the dev server serves the project from `/`. The browser requests `/build-my-showcase-75-9f1fec41/assets/index-BGPipb0-.js`, gets a 404, and nothing renders.

The actual built assets exist at `/assets/` in the project root (confirmed: `index-BGPipb0-.js`, `index-61LGtfGP.css`, all images).

## Fix

Update `index.html` to reference the assets at their real location:

- `/build-my-showcase-75-9f1fec41/favicon.ico` → `/favicon.ico`
- `/build-my-showcase-75-9f1fec41/assets/index-BGPipb0-.js` → `/assets/index-BGPipb0-.js`
- `/build-my-showcase-75-9f1fec41/assets/index-61LGtfGP.css` → `/assets/index-61LGtfGP.css`

Also check `404.html` for the same prefix and fix if present.

That's the entire change — no source rebuild needed since this project ships the prebuilt `assets/` directory.
