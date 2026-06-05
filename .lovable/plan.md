## Goal
Fix the "Brand websites · Menus & storytelling · Local SEO · Mobile-first design · Reservations & ordering · Launch in 1–2 weeks" row so it looks intentional on mobile. Desktop layout stays exactly as it is.

## Problem
On mobile the row uses `flex flex-wrap gap-x-10 gap-y-2` with `·` separator spans between items. When items wrap, separator dots end up at the start of lines and "Launch in 1–2 weeks" gets stranded without a leading dot, giving the misaligned, accidental look in the screenshot.

## Fix
In the built bundle `assets/index-BclE8o0y.js`, for that one capability row:

1. Change the container classes from:
   `flex flex-wrap gap-x-10 gap-y-2 text-sm text-muted-foreground`
   to:
   `flex flex-col items-start gap-y-2 sm:flex-row sm:flex-wrap sm:gap-x-10 text-sm text-muted-foreground`

2. Add `hidden sm:inline` to each of the `·` separator `<span>`s in that row so the dots only appear on the desktop inline layout.

Result on mobile: each capability sits on its own line, left-aligned, no orphan dots. Desktop (`sm` and up) renders identically to today.

## Notes
- The project ships only the built `index.html` + `assets/` bundle (no `src/`), so the edit is made directly in `assets/index-BclE8o0y.js`. No other files change.
- No copy changes, no design system changes, no behavior changes.
