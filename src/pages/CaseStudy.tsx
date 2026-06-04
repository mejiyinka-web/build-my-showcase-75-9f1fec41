import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { getNextProject, getProject } from "@/data/projects";
import { social } from "@/data/social";
import NotFound from "./NotFound";

const CaseStudy = () => {
  const { slug = "" } = useParams();
  const project = getProject(slug);
  const next = project ? getNextProject(slug) : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) return <NotFound />;

  const url = `/work/${project.slug}`;
  const isUpcoming = project.status === "upcoming";
  const title = `${project.name} — ${project.tag} case study${isUpcoming ? " (launching soon)" : ""} · Meji Yinka`;

  const description = project.summary.length > 160 ? project.summary.slice(0, 157) + "…" : project.summary;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    headline: `${project.name} — ${project.role}`,
    description: project.summary,
    image: project.cover,
    url,
    dateCreated: project.year,
    locationCreated: project.location,
    author: {
      "@type": "Person",
      name: "Meji Yinka",
      url: "/",
      sameAs: [social.instagram],
    },
    keywords: project.services.join(", "),
  };


  return (
    <main className="bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={project.cover} />
        <meta property="og:image:width" content="1600" />
        <meta property="og:image:height" content="900" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={project.cover} />
        <meta name="twitter:creator" content="@meji.olayinka" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Top bar */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
        <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <Link to="/" className="font-serif text-xl tracking-tight">Meji Yinka</Link>
          <Link to="/#work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">← All work</Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6 fade-up">
            {project.tag} · {project.year} · {project.location}{isUpcoming ? " · Launching soon" : ""}
          </p>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-5xl fade-up">
            {project.name}
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed fade-up">
            {project.summary}
          </p>
        </div>
      </section>

      {/* Cover */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="aspect-[16/9] overflow-hidden rounded-sm bg-muted">
            <img
              src={project.cover}
              alt={`${project.name} — cover`}
              width={1600}
              height={900}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7 space-y-12">
            {[
              ["Challenge", project.challenge],
              ["Approach", project.approach],
              ["Outcome", project.outcome],
            ].map(([label, body]) => (
              <div key={label}>
                <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4">{label}</p>
                <p className="font-serif text-2xl md:text-3xl leading-snug text-foreground">{body}</p>
              </div>
            ))}
          </div>

          <aside className="md:col-span-5 md:pl-6">
            <div className="md:sticky md:top-28 border-t border-border pt-8 space-y-8">
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4">Services</p>
                <ul className="space-y-2 text-base">
                  {project.services.map((s) => (
                    <li key={s} className="border-b border-border/60 pb-2">{s}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-foreground text-background px-6 py-3 rounded-full text-sm hover:bg-accent transition-colors"
                >
                  Visit live site ↗
                </a>
                <p className="text-xs text-muted-foreground break-all">{project.url.replace(/^https?:\/\//, "")}</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-24 md:pb-32 border-t border-border pt-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-10 md:space-y-14">
          {project.gallery.map((src, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-sm bg-muted ${i % 2 === 0 ? "aspect-[16/10]" : "md:w-2/3 md:ml-auto aspect-[4/3]"}`}
            >
              <img
                src={src}
                alt={`${project.name} — image ${i + 1}`}
                loading="lazy"
                width={1600}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Next + CTA */}
      <section className="border-t border-border py-20 md:py-28 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-end">
          {next && (
            <Link to={`/work/${next.slug}`} className="group block">
              <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4">Next project</p>
              <h3 className="font-serif text-4xl md:text-5xl group-hover:text-accent transition-colors">
                {next.name} <span className="text-accent">→</span>
              </h3>
              <p className="mt-2 text-muted-foreground">{next.role}</p>
            </Link>
          )}
          <div className="md:text-right">
            <p className="font-serif text-3xl md:text-4xl max-w-md md:ml-auto">
              Have a place you want to fill?
            </p>
            <Link
              to="/#contact"
              className="mt-6 inline-block bg-foreground text-background px-6 py-3 rounded-full text-sm hover:bg-accent transition-colors"
            >
              Start a project →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CaseStudy;
