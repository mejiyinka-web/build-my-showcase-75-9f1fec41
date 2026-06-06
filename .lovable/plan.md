## Plan

1. **Restore Lovable run configuration**
   - Add a root `lovable.toml` with an explicit dev command so the preview daemon always knows how to start the app.
   - Use the existing Vite setup instead of a static file server, since this project now has `src/`, `package.json`, and Vite config.

2. **Add a publish-friendly build config**
   - Add `netlify.toml` with `npm run build` and `dist` so publishing has a stable build/output target.
   - Keep it aligned with the existing `package.json` scripts.

3. **Remove conflicting/dead deployment config if needed**
   - Leave the active `.github/workflows/deploy.yml` alone unless requested.
   - Do not touch app UI or site content.

4. **Validate the fix**
   - Restart the preview server after config changes.
   - Check the dev-server logs/preview health signal to confirm it starts without the “no command found for task dev” interruption.

## Technical details

- `lovable.toml` should point to `npm run dev -- --host 0.0.0.0 --port 8080` or equivalent.
- `netlify.toml` should point publishing to `dist` after `npm run build`.
- No backend, database, or visual changes are required.