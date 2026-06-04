## Add case study pages + real portrait

### 1. Replace About portrait
- Upload your attached photo via `lovable-assets` and swap `src/assets/portrait.jpg` for the new asset in `src/pages/Index.tsx` (About section). Remove the `grayscale` class since the photo is already B&W.

### 2. Project data → shared module
- Extract the `projects` array out of `Index.tsx` into `src/data/projects.ts`, keyed by `slug` (e.g. `asaanka-berlin`, `kairos-cafe`, etc.).
- Each project gets extra fields: `slug`, `client`, `location`, `year`, `services[]` (e.g. Brand website, Menu storytelling, Local SEO, Mobile-first), `summary` (1 short paragraph), `challenge`, `approach`, `outcome` (2–3 sentences each), `liveUrl`, `gallery[]` (2–3 images — reuse existing hero image + 1–2 newly generated editorial shots per project).

### 3. Case study route
- Add `/work/:slug` route in `src/App.tsx`.
- New page `src/pages/CaseStudy.tsx`:
  - Sticky back link → `/#work`
  - Hero: client name, tagline/role, meta row (Year · Location · Services)
  - Large cover image
  - Two-column: left = Challenge / Approach / Outcome; right = sticky sidebar with Services list + "Visit live site ↗" button + "Next project →" link
  - Gallery (2–3 images, editorial spacing)
  - Footer CTA: "Start a project" → `/#contact`
- Match existing editorial design tokens (serif headings, terracotta accent, fade-up).

### 4. Home work grid update
- Each card on `Index.tsx` links to `/work/:slug` instead of opening the external Lovable URL. The external "Visit live site" link lives on the case study page.
- Add a small "View case study →" affordance on hover.

### 5. Images
- Generate 1–2 additional editorial detail shots per project (interior/menu/detail mood) and save to `src/assets/<slug>/`. Reuse existing project hero as cover.

### 6. SEO
- Per-case-study `<title>` and meta description set via a small head effect (or react-helmet-style inline update) — e.g. "Kairos Café — Case study · Meji Yinka".

### Files touched
- new: `src/data/projects.ts`, `src/pages/CaseStudy.tsx`, ~6–12 new generated images, new portrait asset
- edited: `src/App.tsx` (route), `src/pages/Index.tsx` (portrait, card links, import from data module)

### Open question
Do you want me to write the **Challenge / Approach / Outcome** copy myself (generic but tailored per cuisine/venue type), or will you supply notes for each project?
