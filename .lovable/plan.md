I found the publish failure is because the project root currently has no `package.json`, `netlify.toml`, or server/build scripts, so the publisher has no build command to run.

Plan:

1. Add a minimal `package.json`
   - Define `build`, `dev`, and `start` scripts.
   - Make `build` generate the publishable `dist/` folder.
   - Make `dev` run the preview server on port `8080`.

2. Add a static build script
   - Create `scripts/build-static.mjs`.
   - Copy the static site files into `dist/`: `index.html`, `404.html`, `favicon.ico`, `placeholder.svg`, `portrait.jpg`, `robots.txt`, `sitemap.xml`, and `assets/`.
   - This keeps the updated image and SEO files included in the published site.

3. Add a stable preview server
   - Create `scripts/serve-static.mjs` to serve files from the project on `0.0.0.0:8080`.
   - Add safe fallback behavior for `/`, missing files, and common static assets.
   - Add no-cache headers so image updates show immediately.

4. Add an auto-restart supervisor
   - Create `scripts/dev.mjs`.
   - It starts the static server on port `8080` and restarts it if it crashes.

5. Add `netlify.toml`
   - Set the publish command to the new build script.
   - Set `dist` as the publish directory.
   - Add cache-control rules for `portrait.jpg`, `index.html`, `robots.txt`, and `sitemap.xml` so updates are not stuck behind cache.

6. Verify
   - Run the build command locally.
   - Confirm `dist/` contains the SEO files and the current portrait image.
   - Restart the preview server so the editor reconnects.