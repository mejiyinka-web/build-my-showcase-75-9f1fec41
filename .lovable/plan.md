## SEO Meta Tags & Crawlability Enhancement

### Current State
Your `index.html` already has a solid foundation: title, description, author, Open Graph basics, and Twitter card tags. `robots.txt` allows all major crawlers. However, several key SEO elements are missing that help Google index and social platforms preview your site properly.

### What will be added

1. **index.html enhancements**
   - `<link rel="canonical">` with absolute URL — tells search engines the definitive page URL, preventing duplicate content issues
   - `<meta property="og:image">` referencing your `portrait.jpg` — enables rich social previews on LinkedIn, Facebook, Slack, etc.
   - `<meta property="og:image:alt">` — accessibility & SEO for the preview image
   - JSON-LD structured data (Schema.org `Person` / `ProfessionalService`) — helps Google understand who you are, your location (Berlin), and your role, powering knowledge panels and rich results
   - Update `og:url` from relative `/` to absolute URL

2. **sitemap.xml (new file)**
   - Standard XML sitemap listing your homepage with `lastmod`, `changefreq`, and `priority`
   - Placed at project root so crawlers discover it at the well-known `/sitemap.xml` path

3. **robots.txt update**
   - Add `Sitemap: https://build-my-showcase-75.lovable.app/sitemap.xml` directive so Googlebot, Bingbot, etc. immediately know where to find your sitemap

### Technical Details
- Base URL: `https://build-my-showcase-75.lovable.app`
- OG image: `/portrait.jpg` (already present in both root and `dist/`)
- JSON-LD type: `Person` with `jobTitle`, `areaServed` (Berlin), `worksFor` (self), and social profile links
- All changes are additive — no existing tags will be removed or altered