## Mark three projects as "not yet launched"

Asaanka Berlin, Café Beyro, and Kiva Han Brunch aren't live yet — the site currently presents them as shipped work with "Visit live site" CTAs, which misrepresents their status.

### Data model (`src/data/projects.ts`)
- Add an optional field to `Project`:
  - `status?: "live" | "upcoming"` (default treated as `"live"`)
- Set `status: "upcoming"` on:
  - `asaanka-berlin`
  - `cafe-beyro`
  - `kiva-han-brunch`
- Leave `url` in place (preview links) but it will be rendered as a private preview, not a public live site.
- Lightly soften the `outcome` copy on those three so it no longer implies post-launch results (e.g. Beyro's "packed first weekend", Kiva Han's "weekday covers up", Asaanka's "Saturday brunch bookings"). Rewrite each as a pre-launch promise rather than a past result.

### Home page work grid (`src/pages/Index.tsx`)
- On each project card for an `upcoming` project, show a small badge: `Launching soon` (uppercase, tracked, muted/accent token — matches existing tag style).

### Case study page (`src/pages/CaseStudy.tsx`)
- In the hero meta line, append `· Launching soon` when `status === "upcoming"`.
- Replace the "Outcome" block label with `Goal` for upcoming projects (keeps three-block rhythm but honest about tense).
- Replace the sidebar CTA:
  - Live → `Visit live site ↗` (unchanged)
  - Upcoming → `View preview ↗` with a small caption `Private preview — launching soon`
- Update SEO:
  - Title suffix: `… case study · Meji Yinka` → `… (launching soon) · Meji Yinka` for upcoming ones
  - JSON-LD: omit `dateCreated` (or set to year only — keep year) and don't claim shipped outcomes in `description`; use the (softened) summary.

### Out of scope
- No design system changes, no new images, no routing changes.
- Instagram, OG, and Helmet wiring stay as-is.

### Files touched
- `src/data/projects.ts` — add `status`, mark three projects, soften outcomes
- `src/pages/Index.tsx` — `Launching soon` badge on cards
- `src/pages/CaseStudy.tsx` — meta line, Outcome→Goal label, CTA, title swap for upcoming
