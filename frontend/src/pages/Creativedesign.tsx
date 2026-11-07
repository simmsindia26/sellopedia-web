import {
  ArrowRight,
  Palette,
  Layers,
  PenTool,
  Sparkles,
  CheckCircle2,
  Brush,
  Shapes,
  Image as ImageIcon,
  WandSparkles,
} from "lucide-react";

import { Link } from "react-router-dom";

interface ServiceItem {
  title: string;
  desc: string;
  icon: typeof Palette;
}

interface PortfolioItem {
  title: string;
  category: string;
  image: string;
}

interface ProcessStep {
  title: string;
  description: string;
  image: string;
}

const services: ServiceItem[] = [
  {
    title: "Brand Identity",
    desc: "Logo design, color systems, typography, and complete brand guidelines.",
    icon: Palette,
  },
  {
    title: "Social Media Creatives",
    desc: "Engaging content for Instagram, Facebook, LinkedIn, and other platforms.",
    icon: Layers,
  },
  {
    title: "Marketing Materials",
    desc: "Brochures, flyers, banners, presentations, and digital advertisements.",
    icon: PenTool,
  },
];

const portfolio: PortfolioItem[] = [
  {
    title: "Luxury Brand Identity",
    category: "Branding",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1200&q=80&auto=format&fit=crop",
  },
  {
    title: "Social Media Campaign",
    category: "Social Media",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop",
  },
  {
    title: "Packaging Design",
    category: "Packaging",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200&q=80&auto=format&fit=crop",
  },
];

const processSteps: ProcessStep[] = [
  {
    title: "Research",
    description:
      "Understand your brand, audience, competitors, and project objectives.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Concept",
    description:
      "Explore creative directions and develop a clear visual concept.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Design",
    description:
      "Turn the selected direction into polished, consistent creative assets.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Delivery",
    description:
      "Prepare and deliver final assets ready for their intended use.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
  },
];

const tools = ["Photoshop", "Illustrator", "Figma", "Canva"];

const CreativeDesign = () => {
  return (
    <main className="w-full overflow-hidden bg-white text-slate-900">

      {/* =====================================
          HERO SECTION
      ===================================== */}

      <section className="relative isolate overflow-hidden bg-[#fffaf9] px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28 lg:px-12 lg:pb-32 lg:pt-32">

        {/* Background decoration */}
        <div className="pointer-events-none absolute -right-40 top-10 -z-10 h-96 w-96 rounded-full bg-red-100/70 blur-3xl" />
        <div className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-80 w-80 rounded-full bg-orange-100/60 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          {/* Hero content */}
          <div className="relative z-10">

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-red-100 bg-white px-4 py-2 text-sm font-bold text-[#fe0100] shadow-[0_5px_15px_rgba(254,1,0,0.08)]">
              <Sparkles size={16} />
              Creative Design Services
            </div>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
              Design that
              <span className="mt-2 block text-[#fe0100]">
                makes an impact.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              From distinctive brand identities to engaging social creatives
              and marketing materials, we create visuals that communicate your
              message and make your brand memorable.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#fe0100] px-7 py-4 text-sm font-bold text-white shadow-[0_7px_0_#a90000,0_15px_25px_rgba(254,1,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_0_#a90000,0_20px_30px_rgba(254,1,0,0.25)] active:translate-y-1 active:shadow-none sm:text-base"
              >
                Start Your Project
                <ArrowRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-slate-800 shadow-[0_5px_0_#e2e8f0] transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:text-[#fe0100] hover:shadow-[0_8px_0_#e2e8f0] sm:text-base"
              >
                Explore Our Work
                <ArrowRight size={19} />
              </Link>

            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-4 text-sm font-medium text-slate-600">
              {[
                "Brand consistency",
                "Purposeful design",
                "Digital-ready assets",
              ].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-[#fe0100]" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* 3D HERO VISUAL */}
          <div className="relative mx-auto w-full max-w-xl perspective-distant">

            {/* Back decorative layer */}
            <div className="absolute -inset-5 rotate-[-6deg] rounded-4xl bg-red-100 shadow-xl shadow-red-200/40 sm:-inset-7" />

            {/* Second layer */}
            <div className="absolute -inset-2 rotate-[3deg] rounded-4xl border border-red-200 bg-white shadow-xl" />

            {/* Main visual */}
            <div className="group relative z-10 rotate-[-1deg] overflow-hidden rounded-4xl border border-white bg-white p-2 shadow-[0_25px_60px_rgba(15,23,42,0.18)] transition-all duration-700 hover:rotate-0 hover:scale-[1.02] sm:p-3">

              <div className="relative overflow-hidden rounded-3xl">

                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80&auto=format&fit=crop"
                  alt="Creative design workspace"
                  className="aspect-4/3 w-full object-cover transition duration-700 group-hover:scale-110 sm:aspect-5/4"
                />

                <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 text-white sm:bottom-7 sm:left-7">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                    Creative direction
                  </p>

                  <h3 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                    Ideas made visual.
                  </h3>

                  <p className="mt-2 text-sm text-white/80">
                    Thoughtful design for brands that want to stand apart.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating palette card */}
            <div className="absolute -left-5 top-12 z-20 flex items-center gap-3 rounded-2xl border border-white bg-white p-3 shadow-[0_15px_35px_rgba(15,23,42,0.15)] transition duration-500 hover:-translate-y-2 sm:-left-12 sm:p-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-[#fe0100]">
                <Palette size={23} />
              </div>

              <div>
                <p className="text-sm font-extrabold text-slate-900">
                  Creative
                </p>
                <p className="text-xs text-slate-500">
                  Brand identity
                </p>
              </div>
            </div>

            {/* Floating design element */}
            <div className="absolute -right-3 top-1/3 z-20 flex h-14 w-14 items-center justify-center rounded-2xl border border-white bg-white text-[#fe0100] shadow-[0_15px_35px_rgba(15,23,42,0.15)] transition duration-500 hover:-translate-y-2 sm:-right-10 sm:h-16 sm:w-16">
              <Brush size={27} />
            </div>

            {/* Floating design badge */}
            <div className="absolute -bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap rounded-2xl border border-white bg-white px-4 py-3 shadow-[0_15px_35px_rgba(15,23,42,0.16)] transition duration-500 hover:-translate-y-2 sm:bottom-0 sm:px-5 sm:py-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fe0100] text-white shadow-lg">
                <Shapes size={22} />
              </div>

              <div>
                <p className="text-sm font-extrabold text-slate-900">
                  Visual storytelling
                </p>
                <p className="text-xs text-slate-500">
                  Creativity with purpose
                </p>
              </div>
            </div>

            {/* Floating sparkles */}
            <div className="absolute -right-5 -top-8 z-20 flex h-16 w-16 items-center justify-center rounded-2xl border border-red-100 bg-white text-[#fe0100] shadow-xl shadow-red-100/50 sm:-right-9">
              <Sparkles size={27} />
            </div>

          </div>
        </div>
      </section>


      {/* =====================================
          SERVICES
      ===================================== */}

      <section className="relative overflow-hidden border-y border-slate-200 bg-slate-50 px-5 py-20 sm:px-8 sm:py-24 lg:px-12">

        <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-red-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#fe0100]">
              What we create
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Design services for every touchpoint.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Keep your brand consistent across digital platforms, campaigns,
              and print materials.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 perspective-[1000px]">

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_0_#e2e8f0,0_20px_30px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-3 hover:border-red-200 hover:shadow-[0_14px_0_#fee2e2,0_30px_40px_rgba(254,1,0,0.12)] sm:p-8"
                >

                  <div className="absolute right-6 top-6 text-xs font-extrabold text-slate-200">
                    0{index + 1}
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-[#fe0100] shadow-[0_5px_0_#fee2e2] transition duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-[#fe0100] group-hover:text-white group-hover:shadow-[0_5px_0_#a90000]">
                    <Icon size={25} />
                  </div>

                  <p className="mt-8 text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                    Creative service
                  </p>

                  <h3 className="mt-2 text-xl font-extrabold tracking-tight text-slate-950 sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                    {service.desc}
                  </p>

                  <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Our expertise
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-[#fe0100] transition duration-300 group-hover:-rotate-45 group-hover:bg-[#fe0100] group-hover:text-white">
                      <ArrowRight size={18} />
                    </div>
                  </div>

                </article>
              );
            })}

          </div>
        </div>
      </section>


      {/* =====================================
          PORTFOLIO
      ===================================== */}

      <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12">

        <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-red-50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#fe0100]">
                Selected projects
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                A glimpse of our creativity.
              </h2>
            </div>

            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-2 text-sm font-bold text-[#fe0100] transition hover:gap-3"
            >
              View All Projects
              <ArrowRight size={18} />
            </Link>

          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 perspective-[1200px]">

            {portfolio.map((item, index) => (
              <article
                key={item.title}
                className="group relative rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_8px_0_#e2e8f0,0_20px_30px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-3 hover:border-red-200 hover:shadow-[0_14px_0_#fee2e2,0_30px_40px_rgba(254,1,0,0.12)]"
              >

                <div className="relative overflow-hidden rounded-xl bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="aspect-4/3 w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/50 via-transparent to-transparent opacity-70 transition group-hover:opacity-100" />

                  <span className="absolute left-4 top-4 rounded-xl border border-white/50 bg-white/95 px-3 py-2 text-xs font-extrabold text-[#fe0100] shadow-lg">
                    0{index + 1}
                  </span>

                  <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#fe0100] shadow-xl transition duration-300 group-hover:-rotate-45">
                    <ArrowRight size={19} />
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#fe0100]">
                    {item.category}
                  </p>

                  <h3 className="mt-2 text-xl font-extrabold tracking-tight text-slate-950">
                    {item.title}
                  </h3>
                </div>

              </article>
            ))}

          </div>
        </div>
      </section>


      {/* =====================================
          PROCESS
      ===================================== */}

      <section className="relative overflow-hidden border-y border-slate-200 bg-slate-50 px-5 py-20 sm:px-8 sm:py-24 lg:px-12">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 max-w-2xl">

            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#fe0100]">
              Our workflow
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              From first idea to final design.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              A collaborative process helps keep each project focused,
              consistent, and ready for its intended audience.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 perspective-[1000px]">

            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_8px_0_#e2e8f0,0_20px_30px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-3 hover:border-red-200 hover:shadow-[0_14px_0_#fee2e2,0_30px_40px_rgba(254,1,0,0.12)]"
              >

                <div className="relative overflow-hidden rounded-xl bg-slate-100">
                  <img
                    src={step.image}
                    alt={step.title}
                    loading="lazy"
                    className="aspect-5/3 w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/50 to-transparent" />

                  <span className="absolute left-4 top-4 rounded-xl border border-white/50 bg-white px-4 py-2 text-sm font-extrabold text-[#fe0100] shadow-lg">
                    0{index + 1}
                  </span>
                </div>

                <div className="p-5 sm:p-6">

                  <h3 className="text-lg font-extrabold text-slate-950 sm:text-xl">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>

                  <div className="mt-5 h-1 w-10 rounded-full bg-[#fe0100] transition-all duration-500 group-hover:w-full" />

                </div>
              </article>
            ))}

          </div>
        </div>
      </section>


      {/* =====================================
          CREATIVE TOOLS
      ===================================== */}

      <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">

            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-[#fe0100] shadow-[0_6px_0_#fee2e2]">
              <WandSparkles size={25} />
            </div>

            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#fe0100]">
              Our creative toolkit
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Tools we work with.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              Industry-standard tools support our design workflow, from
              developing brand assets to preparing digital creatives.
            </p>

          </div>

          <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4 perspective-[1000px]">

            {tools.map((tool, index) => (
              <div
                key={tool}
                className="group relative rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_7px_0_#e2e8f0,0_15px_25px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-3 hover:border-red-200 hover:shadow-[0_12px_0_#fee2e2,0_25px_35px_rgba(254,1,0,0.1)]"
              >

                <div className="flex min-h-28 flex-col items-center justify-center rounded-xl bg-slate-50 p-5 transition-colors duration-300 group-hover:bg-red-50/70 sm:min-h-32">

                  <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#fe0100] shadow-sm transition duration-300 group-hover:rotate-[-10deg] group-hover:scale-110">
                    <ImageIcon size={19} />
                  </span>

                  <span className="text-lg font-extrabold tracking-tight text-slate-800 transition-colors group-hover:text-[#fe0100] sm:text-xl">
                    {tool}
                  </span>

                  <span className="mt-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Creative software
                  </span>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* =====================================
          FINAL CTA
      ===================================== */}

      <section className="px-5 pb-20 pt-10 sm:px-8 sm:pb-24 lg:px-12">

        <div className="relative mx-auto max-w-7xl perspective-distant">

          {/* 3D background layer */}
          <div className="absolute inset-0 translate-x-2 translate-y-3 rounded-4xl bg-red-200" />

          <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-slate-950 px-6 py-14 shadow-[0_20px_50px_rgba(15,23,42,0.2)] transition duration-500 hover:-translate-y-1 sm:px-10 sm:py-16 lg:px-16 lg:py-20">

            {/* Background accents */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full border-[35px] border-[#fe0100]/20"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-16 h-64 w-64 rounded-full bg-[#fe0100]/20 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-red-500/10 blur-3xl"
            />

            <div className="relative flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">

              <div className="max-w-2xl">

                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-red-300 backdrop-blur">
                  <Sparkles size={16} />
                  Have something in mind?
                </div>

                <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Let’s make your
                  <span className="block text-red-400">
                    next idea stand out.
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
                  Share your goals with us, and let’s explore the right creative
                  direction for your business.
                </p>

              </div>

              <Link
                to="/contact"
                className="group inline-flex min-h-14 w-full shrink-0 items-center justify-center gap-3 rounded-xl bg-[#fe0100] px-7 py-4 text-sm font-extrabold text-white shadow-[0_7px_0_#970000,0_15px_30px_rgba(254,1,0,0.25)] transition-all duration-300 hover:-translate-y-2 hover:bg-red-600 hover:shadow-[0_10px_0_#970000,0_22px_35px_rgba(254,1,0,0.3)] active:translate-y-1 active:shadow-none sm:w-auto sm:text-base"
              >
                Get Your Quotation
                <ArrowRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default CreativeDesign;