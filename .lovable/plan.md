## Portfolio plan — Meji Yinka

A single-page, editorial/elegant portfolio that positions you as **Berlin's go-to web designer for food & drink brands**, with your real Lovable projects as case studies.

### Sections

1. **Hero**
   - Name: Meji Yinka
   - Tagline: "Berlin's go-to designer for food & drink brands"
   - Subline: "Websites for cafés, restaurants and bars that get found, look great, and turn visitors into regulars."
   - CTA: "Start a project" → scrolls to contact

2. **About**
   - Short editorial paragraph based on your intro
   - Berlin-based · Hospitality-focused · Conversion-driven
   - Small list of what you do (Brand websites · Menus & storytelling · Local SEO · Mobile-first design)

3. **Selected work** (project grid, editorial layout — large featured + smaller below)
   Pulled from your Lovable builds, each as a card linking to the live site:
   - **Asaanka Berlin** — https://asanka-berlin.lovable.app
   - **Kairos Café** — https://kairoscafe-de.lovable.app
   - **Kiva Han Brunch** — https://kiva-han-vibes.lovable.app
   - **Café Beyro** — https://beyro-berlin-vibe.lovable.app
   - **9JA Flavor Fusion** — https://ja-flavour-web.lovable.app
   - **Fouta** — https://guinean-mosaic-forge.lovable.app
   - (optional add-ons: NoLe Café, Chroma Coffee, Schroeder, Vickis — say the word and I'll include them)
   Each card: project name, one-line role/description, live link.

4. **Contact**
   - Email: mejiyinka@gmail.com
   - Phone: +49 1556 0605741
   - Location: Berlin, Germany
   - Simple contact form (name, email, message) — opens mail draft on submit (no backend)

### Design direction (editorial / elegant)

- Warm off-white background, deep ink black text, single muted accent (terracotta or olive)
- Serif display font (Instrument Serif or Cormorant) for headlines, clean sans (Inter / Work Sans) for body
- Generous whitespace, asymmetric grid, large type, restrained motion (subtle fade/slide on scroll)
- Mobile-first, responsive

### Technical

- Single page at `/` (`src/pages/Index.tsx`) with section components: `Hero`, `About`, `Work`, `Contact`, plus a thin top nav and footer
- Tokens defined in `src/index.css` + `tailwind.config.ts` (HSL semantic tokens, fonts loaded in `index.html`)
- Contact form uses a `mailto:` submit — no Cloud/backend needed
- Project thumbnails: generated editorial-style placeholder images per project (we can swap to real screenshots later)
- SEO: title, meta description, OG tags, single H1, semantic HTML

### Open questions (optional — I can also just proceed)

- Include all 6 projects above, or trim/add any?
- Accent color preference: terracotta, olive, or burgundy?
- Add a small "Services & pricing" blurb, or keep it pure portfolio?
