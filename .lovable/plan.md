## Goal
Make the Netlify production deploy serve the corrected portfolio bundle: the About portrait should load from `/assets/portrait-meji.jpg`, and old years (`2023`, `2024`, `2025`) should no longer appear.

## What I found
- The local project bundle is correct: it uses `/assets/portrait-meji.jpg` and no longer contains `2023`, `2024`, or `2025`.
- Netlify is still serving an older copy of `assets/index-73_WqJBB.js`, which contains the old `__l5e/assets-v1/.../portrait-meji.jpg` path and old year text.
- The local deploy folder (`dist/`) also has the corrected bundle, so this is not a code-generation issue.
- The production `/assets/portrait-meji.jpg` currently returns 404, meaning the latest asset folder has not reached Netlify production.

## Plan
1. Add Netlify-safe deployment configuration so Netlify always builds from the current repo root and publishes `dist`.
2. Keep the existing static build approach: copy `index.html`, `404.html`, `favicon.ico`, `robots.txt`, `placeholder.svg`, and `assets/` into `dist`.
3. Add a small cache-busting update to `index.html` so Netlify cannot keep serving the stale JavaScript URL after the next deploy.
4. Verify locally that the generated `dist` output contains:
   - `/assets/portrait-meji.jpg`
   - no `__l5e` portrait URL
   - no `2023`, `2024`, or `2025`
5. After you publish/sync the changes, re-check `https://mejiyinka.netlify.app/` and the portrait URL to confirm Netlify is serving the new deploy.