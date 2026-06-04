import { useState } from "react";
import hero from "@/assets/hero.jpg";
import portrait from "@/assets/portrait.jpg";
import asaanka from "@/assets/asaanka.jpg";
import kairos from "@/assets/kairos.jpg";
import nineja from "@/assets/9ja.jpg";
import kivahan from "@/assets/kivahan.jpg";
import beyro from "@/assets/beyro.jpg";
import fouta from "@/assets/fouta.jpg";

type Project = {
  name: string;
  role: string;
  year: string;
  url: string;
  img: string;
  tag: string;
};

const projects: Project[] = [
  { name: "Asaanka Berlin", role: "Sri Lankan café — brand site & menu storytelling", year: "2025", url: "https://asanka-berlin.lovable.app", img: asaanka, tag: "Café" },
  { name: "Café Beyro", role: "Café, bar & kitchen in Kreuzberg — mobile-first launch site", year: "2025", url: "https://beyro-berlin-vibe.lovable.app", img: beyro, tag: "Café · Bar" },
  { name: "Kairos Café", role: "Specialty coffee — editorial one-pager", year: "2025", url: "https://kairoscafe-de.lovable.app", img: kairos, tag: "Café" },
  { name: "Kiva Han Brunch", role: "Turkish brunch destination — high-converting site", year: "2025", url: "https://kiva-han-vibes.lovable.app", img: kivahan, tag: "Brunch" },
  { name: "9JA Flavor Fusion", role: "Nigerian kitchen — brand & ordering site", year: "2025", url: "https://ja-flavour-web.lovable.app", img: nineja, tag: "Restaurant" },
  { name: "Fouta", role: "West African–inspired hospitality brand", year: "2025", url: "https://guinean-mosaic-forge.lovable.app", img: fouta, tag: "Hospitality" },
];

const Nav = () => (
  <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
    <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
      <a href="#top" className="font-serif text-xl tracking-tight">Meji Yinka</a>
      <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
        <li><a href="#work" className="hover:text-foreground transition-colors">Work</a></li>
        <li><a href="#about" className="hover:text-foreground transition-colors">About</a></li>
        <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
      </ul>
      <a href="#contact" className="text-sm border border-foreground/80 px-4 py-2 rounded-full hover:bg-foreground hover:text-background transition-colors">Start a project</a>
    </nav>
  </header>
);

const Hero = () => (
  <section id="top" className="relative pt-28 md:pt-36 pb-20 md:pb-28">
    <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10 items-end">
      <div className="md:col-span-7 fade-up">
        <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6">Berlin · Est. 2023</p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95]">
          Websites that make<br />
          <em className="text-accent">food & drink</em> brands<br />
          impossible to walk past.
        </h1>
        <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
          I'm Meji — Berlin's go-to designer for cafés, restaurants and bars.
          I build sites that get found, look great, and turn first-time visitors into regulars.
        </p>
        <div className="mt-10 flex items-center gap-6">
          <a href="#contact" className="bg-foreground text-background px-6 py-3 rounded-full text-sm hover:bg-accent transition-colors">Start a project →</a>
          <a href="#work" className="text-sm underline underline-offset-4 hover:text-accent">See selected work</a>
        </div>
      </div>
      <div className="md:col-span-5 fade-up">
        <div className="aspect-[4/5] overflow-hidden rounded-sm">
          <img src={hero} alt="Editorial café interior" width={1280} height={1600} className="w-full h-full object-cover" />
        </div>
        <p className="mt-3 text-xs text-muted-foreground italic">Inside a recent project — warm, considered, on-brand.</p>
      </div>
    </div>
  </section>
);

const Marquee = () => (
  <div className="border-y border-border py-5 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-wrap gap-x-10 gap-y-2 text-sm text-muted-foreground">
      <span>Brand websites</span><span>·</span>
      <span>Menus & storytelling</span><span>·</span>
      <span>Local SEO</span><span>·</span>
      <span>Mobile-first design</span><span>·</span>
      <span>Reservations & ordering</span><span>·</span>
      <span>Launch in 1–2 weeks</span>
    </div>
  </div>
);

const About = () => (
  <section id="about" className="py-24 md:py-36">
    <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12">
      <div className="md:col-span-5">
        <div className="aspect-[4/5] overflow-hidden rounded-sm">
          <img src={portrait} alt="Portrait of Meji Yinka" loading="lazy" width={1024} height={1280} className="w-full h-full object-cover grayscale" />
        </div>
      </div>
      <div className="md:col-span-7 md:pt-8">
        <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6">About</p>
        <h2 className="font-serif text-4xl md:text-5xl leading-tight">
          A designer who actually <em className="text-accent">eats out</em>.
        </h2>
        <div className="mt-8 space-y-5 text-lg text-muted-foreground leading-relaxed max-w-2xl">
          <p>
            I grew up around hospitality and now I design for it. From third-wave coffee bars
            to neighbourhood kitchens, my job is to turn a great room — with great food and
            great people — into a digital front door that does the place justice.
          </p>
          <p>
            Every site I ship is editorial in feel, fast on a phone, and built to convert:
            menus that read like magazines, photography that makes people hungry, and copy
            that sounds like the people behind the bar.
          </p>
        </div>
        <dl className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-8 max-w-xl">
          {[
            ["12+", "Hospitality sites shipped"],
            ["Berlin", "Based & embedded"],
            ["1–2 wks", "Typical turnaround"],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="font-serif text-3xl md:text-4xl">{k}</dt>
              <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </section>
);

const Work = () => (
  <section id="work" className="py-24 md:py-32 border-t border-border">
    <div className="max-w-7xl mx-auto px-6 md:px-10">
      <div className="flex items-end justify-between mb-16">
        <div>
          <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4">Selected work</p>
          <h2 className="font-serif text-4xl md:text-6xl">Recent projects</h2>
        </div>
        <p className="hidden md:block text-sm text-muted-foreground">{projects.length} of many</p>
      </div>

      <div className="grid md:grid-cols-12 gap-10 md:gap-12">
        {projects.map((p, i) => {
          const isFeature = i === 0;
          const colSpan = isFeature ? "md:col-span-12" : i % 3 === 1 ? "md:col-span-7" : "md:col-span-5";
          return (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className={`group ${colSpan} block`}
            >
              <div className={`overflow-hidden rounded-sm bg-muted ${isFeature ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                <img
                  src={p.img}
                  alt={`${p.name} — ${p.role}`}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-5 flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl">
                    {p.name}
                    <span className="text-accent"> ↗</span>
                  </h3>
                  <p className="mt-1 text-muted-foreground">{p.role}</p>
                </div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground text-right shrink-0 pt-2">
                  <div>{p.tag}</div>
                  <div className="mt-1">{p.year}</div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New project enquiry from ${form.name || "your site"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
    window.location.href = `mailto:mejiyinka@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 md:py-36 border-t border-border bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-6">
          <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6">Contact</p>
          <h2 className="font-serif text-5xl md:text-7xl leading-[1] max-w-xl">
            Let's make your place <em className="text-accent">the</em> place.
          </h2>
          <p className="mt-8 text-muted-foreground max-w-md leading-relaxed">
            Tell me a little about your venue and what you need. I usually reply within a day.
          </p>
          <ul className="mt-10 space-y-3 text-base">
            <li>
              <a href="mailto:mejiyinka@gmail.com" className="hover:text-accent">mejiyinka@gmail.com</a>
            </li>
            <li>
              <a href="tel:+4915560605741" className="hover:text-accent">+49 1556 0605741</a>
            </li>
            <li className="text-muted-foreground">Berlin, Germany</li>
          </ul>
        </div>

        <form onSubmit={onSubmit} className="md:col-span-6 space-y-6 md:pt-10">
          <div>
            <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Name</label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-transparent border-b border-foreground/30 py-3 focus:outline-none focus:border-accent transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Email</label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-transparent border-b border-foreground/30 py-3 focus:outline-none focus:border-accent transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">About your project</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-transparent border-b border-foreground/30 py-3 focus:outline-none focus:border-accent transition-colors resize-none"
            />
          </div>
          <button type="submit" className="bg-foreground text-background px-8 py-3 rounded-full text-sm hover:bg-accent transition-colors">
            Send enquiry →
          </button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
      <p>© {new Date().getFullYear()} Meji Yinka. Designed & built in Berlin.</p>
      <p className="font-serif italic text-sm">Brewed strong. Shipped warm.</p>
    </div>
  </footer>
);

const Index = () => (
  <main>
    <Nav />
    <Hero />
    <Marquee />
    <About />
    <Work />
    <Contact />
    <Footer />
  </main>
);

export default Index;
