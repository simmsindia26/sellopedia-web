import {
  Globe,
  MonitorSmartphone,
  ShoppingCart,
  Rocket,
  ArrowRight,
  CheckCircle2,
  Code2,
  Layout,
  Gauge,
  Smartphone,
  Sparkles,
  Layers,
  Laptop,
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Globe,
    title: "Business Websites",
    desc: "Professional websites that build trust, communicate your value, and turn visitors into potential customers.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    number: "01",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Stores",
    desc: "Conversion-focused online stores with intuitive shopping experiences and streamlined checkout journeys.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    number: "02",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive Design",
    desc: "Seamless digital experiences that look polished and work smoothly across mobile, tablet, and desktop.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
    number: "03",
  },
  {
    icon: Rocket,
    title: "Performance & SEO",
    desc: "Fast-loading, search-friendly websites built with usability, accessibility, and performance in mind.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
    number: "04",
  },
];

const projects = [
  {
    icon: Layout,
    title: "Corporate Websites",
    desc: "A professional online presence for your business.",
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    desc: "Focused pages built around your campaign goals.",
  },
  {
    icon: ShoppingCart,
    title: "Shopify Stores",
    desc: "Easy-to-manage storefronts for online selling.",
  },
  {
    icon: Globe,
    title: "Portfolio Websites",
    desc: "Showcase your work, expertise, and achievements.",
  },
  {
    icon: Code2,
    title: "Custom Web Applications",
    desc: "Purpose-built digital tools for your business needs.",
  },
  {
    icon: Gauge,
    title: "Agency Websites",
    desc: "A modern platform to present your services and work.",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    desc: "We understand your business, audience, and project goals.",
  },
  {
    number: "02",
    title: "Design",
    desc: "We create a thoughtful interface around your brand and users.",
  },
  {
    number: "03",
    title: "Develop",
    desc: "We build a responsive website with functionality in mind.",
  },
  {
    number: "04",
    title: "Launch",
    desc: "We prepare your website for launch and help you move forward.",
  },
];

const WebDevelopment = () => {
  return (
    <main className="overflow-hidden bg-white text-slate-900">

      {/* HERO */}
      <section className="relative px-5 pb-24 pt-20 sm:px-8 sm:pb-28 sm:pt-28 lg:px-12 lg:pb-32 lg:pt-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-red-100/70 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 left-0 h-72 w-72 rounded-full bg-orange-50 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-16">

          {/* HERO CONTENT */}
          <div className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border-2 border-red-200 bg-red-50 px-4 py-2 text-sm font-bold text-[#fe0100] shadow-[3px_3px_0px_#fecaca]">
              <span className="h-2 w-2 rounded-full bg-[#fe0100]" />
              Web Development Services
            </div>

            <h1 className="max-w-2xl text-4xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
              Websites built for your
              <span className="mt-2 block text-[#fe0100]">
                next stage of growth.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              We design and develop modern websites that bring your brand to
              life, deliver a better user experience, and help your business
              make a stronger digital impression.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-xl border-2 border-[#fe0100] bg-[#fe0100] px-7 py-4 text-sm font-bold text-white shadow-[5px_5px_0px_#991b1b] transition duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#991b1b] active:translate-y-0 active:shadow-none sm:text-base"
              >
                Start Your Project
                <ArrowRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-3 rounded-xl border-2 border-slate-900 bg-white px-7 py-4 text-sm font-bold text-slate-900 shadow-[5px_5px_0px_#0f172a] transition duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#0f172a] active:translate-y-0 active:shadow-none sm:text-base"
              >
                Explore Our Work
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-600">
              {[
                "Responsive by design",
                "Built around your goals",
                "Performance-conscious",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2
                    size={17}
                    className="shrink-0 text-[#fe0100]"
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3D HERO VISUAL */}
          <div className="relative mx-auto w-full max-w-xl [perspective:1200px]">

            <div className="absolute -inset-4 translate-x-2 translate-y-3 rounded-[2rem] bg-red-100 sm:-inset-6" />

            <div className="relative rotate-[-2deg] rounded-[1.7rem] border-2 border-slate-900 bg-white p-3 shadow-[10px_10px_0px_#0f172a] transition duration-500 hover:rotate-0 hover:shadow-[15px_15px_0px_#0f172a] sm:p-4">

              <div className="relative overflow-hidden rounded-2xl border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop"
                  alt="Developer working on a website"
                  className="aspect-[4/3] w-full object-cover sm:aspect-[5/4]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-2 text-xs font-bold text-white backdrop-blur-md">
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                    Designed around your business
                  </div>

                  <h2 className="mt-4 max-w-md text-2xl font-black leading-tight text-white sm:text-3xl">
                    Your ideas deserve a better digital experience.
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 p-2 pt-4 sm:gap-4 sm:p-3">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 sm:p-4">
                  <div className="flex items-center gap-2 text-[#fe0100]">
                    <Smartphone size={19} />
                    <span className="text-xs font-black uppercase tracking-wide">
                      Responsive
                    </span>
                  </div>
                  <p className="mt-2 text-lg font-black sm:text-xl">
                    Mobile-first
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Across every screen
                  </p>
                </div>

                <div className="rounded-xl border border-red-100 bg-red-50 p-3 sm:p-4">
                  <div className="flex items-center gap-2 text-[#fe0100]">
                    <Rocket size={19} />
                    <span className="text-xs font-black uppercase tracking-wide">
                      Experience
                    </span>
                  </div>
                  <p className="mt-2 text-lg font-black sm:text-xl">
                    Built to perform
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Focused on usability
                  </p>
                </div>
              </div>
            </div>

            {/* FLOATING BADGE */}
            <div className="absolute -right-2 -top-7 z-20 flex rotate-6 items-center gap-3 rounded-xl border-2 border-slate-900 bg-white p-3 shadow-[5px_5px_0px_#0f172a] sm:-right-7 sm:top-5 sm:p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#fe0100] text-white">
                <Laptop size={21} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400">
                  DIGITAL EXPERIENCE
                </p>
                <p className="text-sm font-black text-slate-900">
                  Web Solutions
                </p>
              </div>
            </div>

            <div className="absolute -bottom-7 -left-2 z-20 flex -rotate-3 items-center gap-2 rounded-xl border-2 border-slate-900 bg-[#fe0100] px-4 py-3 text-white shadow-[5px_5px_0px_#0f172a] sm:-left-7">
              <Sparkles size={19} />
              <span className="text-sm font-black">
                Built for your brand
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-y-2 border-slate-900 bg-slate-50 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#fe0100]">
              What We Do
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Everything your website needs to stand out.
            </h2>

            <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
              From your first business website to a complete online store, we
              create digital experiences that balance thoughtful design with
              practical functionality.
            </p>
          </div>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="group overflow-hidden rounded-2xl border-2 border-slate-900 bg-white shadow-[6px_6px_0px_#0f172a] transition duration-300 hover:-translate-y-2 hover:shadow-[10px_11px_0px_#fe0100]"
                >
                  <div className="relative overflow-hidden border-b-2 border-slate-900 bg-slate-100">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      loading="lazy"
                      className="aspect-[5/4] w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />

                    <span className="absolute left-4 top-4 rounded-lg border-2 border-slate-900 bg-white px-3 py-1.5 text-xs font-black text-[#fe0100] shadow-[3px_3px_0px_#0f172a]">
                      {feature.number}
                    </span>

                    <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl border-2 border-slate-900 bg-white text-[#fe0100] shadow-[4px_4px_0px_#0f172a] transition group-hover:-translate-y-1 group-hover:bg-[#fe0100] group-hover:text-white">
                      <Icon size={23} />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-black text-slate-900">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {feature.desc}
                    </p>

                    <div className="mt-5 h-1 w-10 rounded-full bg-[#fe0100] transition-all duration-300 group-hover:w-full" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WEBSITE SOLUTIONS */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

          <div className="lg:sticky lg:top-24">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#fe0100]">
              Our Solutions
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              The right website for the way you work.
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-8 text-slate-600 sm:text-base">
              Every business has different needs. We tailor our web development
              approach to your goals, customers, and the experience you want to
              deliver.
            </p>

            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-3 rounded-xl border-2 border-slate-900 bg-white px-5 py-3 text-sm font-bold text-slate-900 shadow-[4px_4px_0px_#0f172a] transition duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#fe0100]"
            >
              Discuss your requirements
              <ArrowRight
                size={18}
                className="text-[#fe0100] transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {projects.map((project, index) => {
              const Icon = project.icon;

              return (
                <article
                  key={project.title}
                  className="group rounded-2xl border-2 border-slate-900 bg-white p-6 shadow-[5px_5px_0px_#0f172a] transition duration-300 hover:-translate-y-2 hover:shadow-[9px_10px_0px_#fe0100] sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border-2 border-slate-900 bg-red-50 text-[#fe0100] shadow-[3px_3px_0px_#0f172a] transition duration-300 group-hover:rotate-6 group-hover:bg-[#fe0100] group-hover:text-white">
                      <Icon size={24} />
                    </div>

                    <span className="text-3xl font-black text-slate-100 transition group-hover:text-red-100">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-7 text-lg font-black text-slate-900">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {project.desc}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-xs font-bold text-[#fe0100]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#fe0100]" />
                    Customised for your needs
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y-2 border-slate-900 bg-slate-50 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#fe0100]">
              How We Work
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              From the first idea to launch.
            </h2>

            <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
              A clear, collaborative process helps keep your project focused
              from planning through delivery.
            </p>
          </div>

          <div className="relative mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <article
                key={step.number}
                className="group relative rounded-2xl border-2 border-slate-900 bg-white p-6 shadow-[5px_5px_0px_#0f172a] transition duration-300 hover:-translate-y-2 hover:shadow-[9px_10px_0px_#fe0100] sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border-2 border-slate-900 bg-[#fe0100] text-sm font-black text-white shadow-[4px_4px_0px_#0f172a] transition group-hover:rotate-6">
                    {step.number}
                  </div>

                  {index < process.length - 1 && (
                    <ArrowRight
                      size={21}
                      className="hidden text-slate-300 lg:block"
                    />
                  )}
                </div>

                <h3 className="mt-7 text-xl font-black text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.desc}
                </p>

                <div className="mt-6 h-1 w-10 rounded-full bg-[#fe0100] transition-all duration-300 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border-2 border-slate-900 bg-slate-950 px-6 py-14 shadow-[8px_8px_0px_#fe0100] sm:px-10 sm:py-16 lg:px-16 lg:py-20">

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#fe0100]/30 blur-3xl sm:h-96 sm:w-96"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-red-500/10 blur-3xl"
          />

          <div className="relative flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-red-400/40 bg-red-500/10 px-4 py-2 text-sm font-bold text-red-300">
                <Sparkles size={16} />
                Let's Build Something Better
              </div>

              <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-6xl">
                Ready to build a website that works for your business?
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-8 text-slate-300 sm:text-base">
                Tell us what you have in mind. Let's discuss your goals and
                create a website that fits your brand and your customers.
              </p>
            </div>

            <Link
              to="/contact"
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-xl border-2 border-white bg-[#fe0100] px-6 py-4 text-sm font-black text-white shadow-[5px_5px_0px_#ffffff] transition duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#ffffff] active:translate-y-0 active:shadow-none sm:px-8 sm:text-base"
            >
              Get a Free Consultation
              <ArrowRight
                size={19}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WebDevelopment;
