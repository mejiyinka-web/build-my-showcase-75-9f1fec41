## Plan

1. **Restore preview stability**
   - Replace the custom static dev server with the normal Lovable/Vite dev setup so the preview reconnects properly.
   - Add the minimum required project files/scripts if missing so Lovable can run the app reliably.

2. **Fix the publish output**
   - Keep `netlify.toml` pointed at `dist`, but make the build produce a clean, current `dist` folder every time.
   - Ensure `dist/index.html` references the latest bundle and not the older stale bundle.

3. **Fix the portrait source permanently**
   - Make `/portrait.jpg` part of the published output.
   - Update every active reference to the About portrait so the live build uses `/portrait.jpg`, not the old hashed image or old CDN path.

4. **Add cache protection**
   - Add cache-busting to the active script/CSS references if needed.
   - Keep headers that force HTML/assets to revalidate so Netlify and browsers stop showing the stale version.

5. **Verify before handoff**
   - Check the preview starts again.
   - Check the built `dist` folder contains `portrait.jpg` and the current JS bundle references `/portrait.jpg`.
   - Then you can click **Update** in Publish again.