## Plan

1. **Make the preview process resilient**
   - Keep the preview server on port `8080`.
   - Add a small watcher/supervisor dev script that starts `scripts/serve-static.mjs` and automatically restarts it if it exits or crashes.
   - Add basic crash logging so future preview failures are visible in the dev-server logs.

2. **Make the static server safer for Lovable preview**
   - Ensure the server listens on `0.0.0.0:8080` by default.
   - Add error handling for stream/file errors so a bad request cannot crash the whole preview server.
   - Add no-cache headers for HTML and image/script/css responses during preview to reduce stale previews.

3. **Replace the portrait with the uploaded file**
   - Copy the newly attached `portrait.jpg` into the project root so `/portrait.jpg` matches the uploaded image.
   - Keep `/portrait.jpg` included in the publish output.
   - Remove stale fallback image behavior by confirming the active JS bundle points to `/portrait.jpg`.

4. **Force deployment to use the current portrait**
   - Update `netlify.toml` headers so `/portrait.jpg` also revalidates instead of staying cached.
   - Rebuild the static output and confirm `dist/portrait.jpg` has the same hash as the uploaded file.

5. **Verify before handoff**
   - Restart the preview server.
   - Confirm the recent logs show the server running on port `8080`.
   - Confirm the built output contains the new portrait and active bundle reference.