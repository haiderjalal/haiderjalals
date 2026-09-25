// Server Component: no client JS. Hover/focus states are pure CSS.
import Image from "next/image";

const projects = [
  {
    name: "Pak Tribal Furniture",
    slug: "pak-tribal-furniture",
    details:
      "Solid wood furniture brand with collection browsing and an enquiry-led sales flow.",
    tags: ["WEB", "E-COMMERCE", "SEO"],
    url: "https://www.paktribalfurniture.com/",
  },
  {
    name: "YF Dental",
    slug: "yfdental",
    details:
      "Clinic site for two Western Sydney practices, built around free-consult bookings.",
    tags: ["WEB", "BOOKINGS", "SEO"],
    url: "https://yfdental.vercel.app/",
  },
  {
    name: "Bubish",
    slug: "bubish",
    details:
      "Editorial site for a landscape, irrigation and interior studio in Islamabad.",
    tags: ["BRAND", "UI", "MOTION"],
    url: "https://bubish.vercel.app/",
  },
  {
    name: "OptiSource PK",
    slug: "optisourcepk",
    details:
      "B2B wholesale optical supply — catalogue browsing and trade inquiry pipeline.",
    tags: ["B2B", "CATALOGUE", "LEADS"],
    url: "https://www.optisourcepk.com/",
  },
  {
    name: "PeptoLogics",
    slug: "peptologics",
    details:
      "Research peptide catalogue with a manual inquiry pipeline and lot documentation.",
    tags: ["NEXT.JS", "SUPABASE", "LEADS"],
    url: "https://www.peptologics.com/",
  },
  {
    name: "Divers Optics",
    slug: "diversoptics",
    details:
      "Eyewear retail site with curated browsing and WhatsApp-led customer enquiries.",
    tags: ["RETAIL", "UI", "RESPONSIVE"],
    url: "https://www.diversoptics.com/",
  },
];

export default function WebProjects() {
  return (
    <section
      id="web-projects"
      className="relative w-full bg-black px-6 py-24 md:px-12"
    >
      <h2 className="mb-4 text-4xl font-bold text-white md:text-6xl">
        Selected <span className="text-[#C5C505]">Work</span>
      </h2>
      <p className="mb-14 max-w-2xl text-lg text-gray-400">
        Websites and platforms I&apos;ve designed, built, and shipped.
      </p>

      <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => {
          const Card = (
            <>
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
                <Image
                  src={`/projects/${project.slug}.jpg`}
                  alt={`${project.name} website`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  // Only the first row is likely above the fold on desktop.
                  loading={i < 3 ? "eager" : "lazy"}
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#C5C505]">
                  {project.name}
                </h3>
                <p className="mt-2 flex-1 text-sm text-gray-400">
                  {project.details}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-[#C5C505]/10 px-3 py-1 text-xs font-semibold text-[#C5C505]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </>
          );

          const shared =
            "group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 transition-colors duration-300 hover:border-[#C5C505]/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C5C505]";

          return (
            <li key={project.slug}>
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={shared}
                >
                  {Card}
                </a>
              ) : (
                <article className={shared}>{Card}</article>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
