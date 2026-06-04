import asaanka from "@/assets/asaanka.jpg";
import asaankaDetail from "@/assets/case/asaanka-detail.jpg";
import beyro from "@/assets/beyro.jpg";
import beyroDetail from "@/assets/case/beyro-detail.jpg";
import kairos from "@/assets/kairos.jpg";
import kairosDetail from "@/assets/case/kairos-detail.jpg";
import kivahan from "@/assets/kivahan.jpg";
import kivahanDetail from "@/assets/case/kivahan-detail.jpg";
import nineja from "@/assets/9ja.jpg";
import ninejaDetail from "@/assets/case/9ja-detail.jpg";
import fouta from "@/assets/fouta.jpg";
import foutaDetail from "@/assets/case/fouta-detail.jpg";

export type Project = {
  slug: string;
  name: string;
  role: string;
  tag: string;
  year: string;
  location: string;
  url: string;
  cover: string;
  gallery: string[];
  services: string[];
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "asaanka-berlin",
    name: "Asaanka Berlin",
    role: "Sri Lankan café — brand site & menu storytelling",
    tag: "Café",
    year: "2025",
    location: "Berlin, DE",
    url: "https://asanka-berlin.lovable.app",
    cover: asaanka,
    gallery: [asaanka, asaankaDetail],
    services: ["Brand website", "Menu storytelling", "Local SEO", "Mobile-first design"],
    summary:
      "A digital front door for a Sri Lankan café that wanted Berliners to discover the warmth and depth of the cuisine before they ever stepped inside.",
    challenge:
      "Asaanka had a loyal walk-in crowd but was nearly invisible online. The old presence didn't reflect the food, the room, or the people behind it — and it wasn't converting search traffic into seated guests.",
    approach:
      "We led with the food: editorial photography, a menu that reads like a short story, and a calm, off-white palette that lets the spice colours do the talking. Local SEO, opening hours and directions are surfaced above the fold on mobile.",
    outcome:
      "A site that finally matches the room — and turns first-time Google searches into Saturday brunch bookings.",
  },
  {
    slug: "cafe-beyro",
    name: "Café Beyro",
    role: "Café, bar & kitchen in Kreuzberg — mobile-first launch site",
    tag: "Café · Bar",
    year: "2025",
    location: "Kreuzberg, Berlin",
    url: "https://beyro-berlin-vibe.lovable.app",
    cover: beyro,
    gallery: [beyro, beyroDetail],
    services: ["Launch website", "Brand voice", "Photography direction", "Mobile-first design"],
    summary:
      "A launch site for a neighbourhood café-bar that needed to feel like Kreuzberg at golden hour — warm, a little moody, ready for the night crowd.",
    challenge:
      "Beyro was opening with a triple identity — café by day, kitchen by evening, bar at night. The site had to make all three legible without splitting the brand.",
    approach:
      "One scroll, three moods. Warm tungsten photography, generous typography, and a single hero that shifts from morning to evening as you scroll. Reservations and menu live one tap away.",
    outcome:
      "Beyro launched with a packed first weekend and a site that locals actually share.",
  },
  {
    slug: "kairos-cafe",
    name: "Kairos Café",
    role: "Specialty coffee — editorial one-pager",
    tag: "Café",
    year: "2025",
    location: "Berlin, DE",
    url: "https://kairoscafe-de.lovable.app",
    cover: kairos,
    gallery: [kairos, kairosDetail],
    services: ["Editorial one-pager", "Coffee programme storytelling", "Local SEO"],
    summary:
      "A quiet, considered one-pager for a specialty coffee bar that takes its sourcing seriously and wanted the site to feel the same way.",
    challenge:
      "Most specialty coffee sites either look like a tech startup or a Pinterest board. Kairos wanted something closer to a print magazine — fewer words, more intention.",
    approach:
      "Restrained type, lots of whitespace, a single accent colour, and overhead photography of the pour-over ritual. The whole story fits on one slow scroll.",
    outcome:
      "A site regulars now send to friends as the introduction to the café.",
  },
  {
    slug: "kiva-han-brunch",
    name: "Kiva Han Brunch",
    role: "Turkish brunch destination — high-converting site",
    tag: "Brunch",
    year: "2025",
    location: "Berlin, DE",
    url: "https://kiva-han-vibes.lovable.app",
    cover: kivahan,
    gallery: [kivahan, kivahanDetail],
    services: ["Brand website", "Menu & gallery", "Reservations flow", "Local SEO"],
    summary:
      "A weekend-brunch site built to convert: big, hungry photography up top, reservations one tap away, and a menu that reads like a feast.",
    challenge:
      "Kiva Han is busy on weekends but quiet on weekdays. The brief: make weekday brunch feel just as essential as Sunday.",
    approach:
      "Lead with the table — long-format brunch photography, a clear weekday vs. weekend rhythm, and a sticky reservation CTA on mobile.",
    outcome:
      "Weekday covers up, and the site now ranks for 'Turkish brunch Berlin' alongside the established names.",
  },
  {
    slug: "9ja-flavor-fusion",
    name: "9JA Flavor Fusion",
    role: "Nigerian kitchen — brand & ordering site",
    tag: "Restaurant",
    year: "2025",
    location: "Berlin, DE",
    url: "https://ja-flavour-web.lovable.app",
    cover: nineja,
    gallery: [nineja, ninejaDetail],
    services: ["Brand website", "Menu & ordering", "Photography direction", "Local SEO"],
    summary:
      "A dark, dramatic brand site for a Nigerian kitchen that wanted the food — jollof, suya, egusi — to look as bold as it tastes.",
    challenge:
      "The previous site felt apologetic about the cuisine. The new one had to feel proud, loud, and unmistakably Lagos-in-Berlin.",
    approach:
      "Black background, hot spice-red accents, oversized food photography, and copy written in the voice of the kitchen. Ordering is two taps from anywhere on the page.",
    outcome:
      "Online orders up, and the brand finally feels as confident as the kitchen.",
  },
  {
    slug: "fouta",
    name: "Fouta",
    role: "West African–inspired hospitality brand",
    tag: "Hospitality",
    year: "2025",
    location: "Berlin, DE",
    url: "https://guinean-mosaic-forge.lovable.app",
    cover: fouta,
    gallery: [fouta, foutaDetail],
    services: ["Brand website", "Storytelling", "Photography direction", "Mobile-first design"],
    summary:
      "A brand site for a West African–inspired hospitality concept rooted in textiles, ceramics, and the slow rhythm of shared meals.",
    challenge:
      "Fouta is as much about culture as cuisine. The site had to introduce the story without turning into a museum label.",
    approach:
      "Earthy palette, texture-led photography, and short editorial blocks that move between origin, menu, and room. Booking and contact stay quietly accessible throughout.",
    outcome:
      "A digital home that feels like the space itself — warm, textured, and unhurried.",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const getNextProject = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return projects[0];
  return projects[(i + 1) % projects.length];
};
