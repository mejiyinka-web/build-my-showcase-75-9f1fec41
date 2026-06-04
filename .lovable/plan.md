## Add per-page SEO + OG images to case studies, integrate Instagram

### 1. Per-route head with react-helmet-async
- Install `react-helmet-async`.
- Wrap app in `<HelmetProvider>` in `src/main.tsx`.
- Remove static `<link rel="canonical">` from `index.html` (it would conflict with per-route canonicals). Keep sitewide title/description/og as fallback for non-JS social crawlers.

### 2. Case study SEO (`src/pages/CaseStudy.tsx`)
Replace the current `document.title` effect with `<Helmet>` containing:
- `<title>` — `"{project.name} — {project.tag} case study · Meji Yinka"`
- `<meta name="description">` — `project.summary` (trimmed to ~155 chars)
- `<link rel="canonical" href="/work/{slug}">`
- Open Graph: `og:title`, `og:description`, `og:type=article`, `og:url=/work/{slug}`, `og:image={project.cover}` (absolute-ish path), `og:image:width/height`
- Twitter: `twitter:card=summary_large_image`, matching title/desc/image
- JSON-LD `CreativeWork` with name, description, image, author (Meji Yinka), url

### 3. Home page SEO (`src/pages/Index.tsx`)
Add `<Helmet>` with refined title/description and `og:image` set to `hero.jpg`, plus `Person` JSON-LD for Meji (name, jobTitle, location Berlin, sameAs Instagram URL, email, telephone).

### 4. OG image strategy
Reuse each project's existing editorial cover (`project.cover`) as the OG image — they're already 16:9-ish, high quality, and on-brand. No new image generation needed. Imports resolve to hashed `/assets/*.jpg` URLs at build time, which work as og:image values.

### 5. Instagram integration (@meji.olayinka)
- Add `instagram: "https://instagram.com/meji.olayinka"` to a small `src/data/social.ts` (or inline constant) for reuse.
- **Nav** (`Index.tsx`): keep current links, no change.
- **Contact section**: add Instagram alongside email + phone — "Instagram — @meji.olayinka" linking to the profile (new tab, `rel="noopener"`).
- **Footer**: add Instagram icon/text link.
- **Case study footer CTA section**: add the same Instagram link beside "Start a project".
- **Person JSON-LD** (home): include the Instagram URL in `sameAs`.

### Files touched
- new: `src/data/social.ts` (optional, single source of truth)
- edited: `package.json` (add `react-helmet-async`), `src/main.tsx` (HelmetProvider), `index.html` (drop canonical), `src/pages/Index.tsx` (Helmet + Instagram links + Person JSON-LD), `src/pages/CaseStudy.tsx` (Helmet + JSON-LD, remove old title effect)

### Notes
- No project domain set yet → canonical/og:url stay relative per Lovable SEO guidance.
- og:image uses imported asset URLs; LinkedIn/Slack crawlers will fetch them from the published origin once deployed.
