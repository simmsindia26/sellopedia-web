import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Utkal from "../icons/utkaldrive.png";
import Ash from "../icons/ashirbad.png";

const portfolioCategories = [
  {
    category: "Web Development",
    description: "Websites built for performance, usability, and growth.",
    number: "01",
    projects: [
      {
        title: "Utkal Drive Rental Cars",
        image: Utkal,
        type: "Website Development",
      },
      {
        title: "Ashirbad Foundation",
        image: Ash,
        type: "Website Development",
      },
    ],
  },
  {
    category: "Graphic Design",
    description: "Visual identities and creative assets that stand out.",
    number: "02",
    projects: [
      {
        title: "Creative Product Campaign",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
        type: "Creative Design",
      },
      {
        title: "Brand Identity System",
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
        type: "Branding & Design",
      },
    ],
  },
  {
    category: "Meta Ads",
    description: "Campaigns designed to reach the right audience.",
    number: "03",
    projects: [
      {
        title: "E-commerce Meta Campaign",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
        type: "Social Media Advertising",
      },
      {
        title: "Lead Generation Funnel",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
        type: "Lead Generation",
      },
    ],
  },
  {
    category: "Performance Marketing",
    description: "Data-led marketing focused on measurable outcomes.",
    number: "04",
    projects: [
      {
        title: "High ROAS Campaign",
        image:
          "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
        type: "Performance Marketing",
      },
      {
        title: "Growth Marketing Strategy",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
        type: "Growth Strategy",
      },
    ],
  },
];

const showcaseItems = [
  "Web Development",
  "Creative Design",
  "Meta Advertising",
  "Performance Marketing",
  "Digital Growth",
];

const Portfolio = () => {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* Hero */}
      <section className="relative px-5 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-28 lg:px-12 lg:pb-24 lg:pt-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-end gap-10 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-sm font-semibold text-[#fe0100]">
                <Sparkles size={16} />
                Our Portfolio
              </div>

              <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Work that moves
                <span className="mt-1 block text-[#fe0100]">
                  brands forward.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Explore our work across website development, graphic design,
                social media advertising, and performance marketing.
              </p>
            </div>

            <div className="border-l-2 border-[#fe0100] py-1 pl-5 lg:mb-2">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                What we do
              </p>
              <p className="mt-3 text-lg font-medium leading-7 text-slate-800 sm:text-xl">
                Thoughtful design. Reliable technology. Marketing built around
                your goals.
              </p>
              <Link
                to="/contact"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#fe0100] transition hover:gap-3"
              >
                Discuss your project
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling service strip */}
      <section
        aria-label="Our services"
        className="overflow-hidden border-y border-slate-200 bg-slate-50 py-4"
      >
        <div className="flex w-max animate-portfolio-marquee">
          {[...showcaseItems, ...showcaseItems].map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex items-center gap-7 px-5 sm:gap-10 sm:px-8"
            >
              <span className="whitespace-nowrap text-sm font-semibold text-slate-700 sm:text-base">
                {item}
              </span>
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-[#fe0100]"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio categories */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-16 sm:space-y-20 lg:space-y-24">
          {portfolioCategories.map((section) => (
            <section key={section.number}>
              <div className="mb-7 flex flex-col gap-3 sm:mb-9 sm:flex-row sm:items-end sm:justify-between">
                <div className="flex items-start gap-4 sm:gap-5">
                  <span className="pt-1 text-sm font-semibold tabular-nums text-[#fe0100]">
                    {section.number}
                  </span>

                  <div>
                    <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                      {section.category}
                    </h2>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
                      {section.description}
                    </p>
                  </div>
                </div>

                <span className="text-sm text-slate-400">
                  {String(section.projects.length).padStart(2, "0")} projects
                </span>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-7">
                {section.projects.map((project, index) => (
                  <article
                    key={project.title}
                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/60"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className={`h-full w-full object-cover transition duration-700 group-hover:scale-[1.04] ${
                          index === 0 && section.number === "01"
                            ? "object-contain p-8"
                            : ""
                        }`}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent opacity-70 transition group-hover:opacity-40" />

                      <span className="absolute left-4 top-4 rounded-full border border-white/60 bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-800 backdrop-blur-sm">
                        {project.type}
                      </span>

                      <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-900 shadow-sm transition duration-300 group-hover:bg-[#fe0100] group-hover:text-white">
                        <ArrowRight
                          size={19}
                          className="-rotate-45 transition-transform group-hover:rotate-0"
                        />
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-4 p-5 sm:p-6">
                      <div>
                        <h3 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
                          {project.title}
                        </h3>
                        <p className="mt-1 text-sm text-slate-500">
                          {project.type}
                        </p>
                      </div>

                      <span className="text-sm font-medium text-slate-300">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      {/* Project CTA */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#fe0100]/20 blur-3xl sm:h-96 sm:w-96"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 left-1/3 h-56 w-56 rounded-full bg-red-500/10 blur-3xl"
          />

          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-red-400">
                Have a project in mind?
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Let’s create something
                <span className="block text-red-400">worth remembering.</span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
                Tell us what you’re building. We’ll help you explore the right
                digital solutions for your brand.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-[#fe0100] px-6 py-4 text-sm font-semibold text-white transition hover:bg-red-700 sm:text-base"
            >
              Start a Project
              <ArrowRight size={19} />
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes portfolio-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .animate-portfolio-marquee {
          animation: portfolio-marquee 32s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-portfolio-marquee {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
};

export default Portfolio;
