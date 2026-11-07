import {
  Search,
  TrendingUp,
  BarChart3,
  Globe,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Settings2,
  ShoppingCart,
  FileSearch,
  Target,
  LineChart,
  Sparkles,
  Gauge,
} from "lucide-react";
import { Link } from "react-router-dom";

const seoServices = [
  {
    icon: MapPin,
    title: "Local SEO",
    desc: "Help nearby customers discover your business in local search results.",
  },
  {
    icon: Settings2,
    title: "Technical SEO",
    desc: "Improve site structure, crawlability, indexing, and technical health.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce SEO",
    desc: "Optimize product pages and category structures for organic discovery.",
  },
  {
    icon: FileSearch,
    title: "Content Optimization",
    desc: "Make your content more relevant, useful, and aligned with search intent.",
  },
  {
    icon: Globe,
    title: "Google Business Profile",
    desc: "Strengthen your local presence with an accurate, optimized business profile.",
  },
  {
    icon: Search,
    title: "SEO Audits",
    desc: "Identify website issues and prioritize opportunities for improvement.",
  },
];

const process = [
  {
    icon: Search,
    number: "01",
    title: "Keyword Research",
    desc: "Identify relevant search terms based on your audience, services, and business goals.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: TrendingUp,
    number: "02",
    title: "On-Page SEO",
    desc: "Improve page titles, metadata, content structure, internal links, and user experience.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: Globe,
    number: "03",
    title: "Technical SEO",
    desc: "Review website performance, indexing, crawlability, and technical issues.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: BarChart3,
    number: "04",
    title: "SEO Analytics",
    desc: "Monitor organic traffic, keyword performance, and meaningful website conversions.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },
];

const benefits = [
  "A clearer SEO strategy aligned with your business goals",
  "Improved website structure and search visibility",
  "More relevant organic traffic opportunities",
  "Better website usability and performance",
  "Performance tracking and SEO reporting",
];

const SeoOptimization = () => {
  return (
    <main className="overflow-hidden bg-white text-slate-900">

      {/* HERO */}
      <section className="relative px-5 pb-24 pt-20 sm:px-8 sm:pb-28 sm:pt-28 lg:px-12 lg:pb-32 lg:pt-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-28 h-96 w-96 rounded-full bg-red-100/70 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 left-0 h-72 w-72 rounded-full bg-orange-50 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-16">

          {/* HERO CONTENT */}
          <div className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border-2 border-red-200 bg-red-50 px-4 py-2 text-sm font-bold text-[#fe0100] shadow-[3px_3px_0px_#fecaca]">
              <Search size={17} />
              SEO & Organic Growth
            </div>

            <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
              Get discovered.
              <span className="mt-2 block text-[#fe0100]">
                Grow organically.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Help the right customers find your business online. We combine
              technical improvements, relevant content, and strategic SEO to
              build a stronger foundation for long-term organic growth.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-xl border-2 border-[#fe0100] bg-[#fe0100] px-7 py-4 text-sm font-bold text-white shadow-[5px_5px_0px_#991b1b] transition duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#991b1b] active:translate-y-0 active:shadow-none sm:text-base"
              >
                Request an SEO Audit
                <ArrowRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <a
                href="#seo-process"
                className="inline-flex items-center justify-center gap-3 rounded-xl border-2 border-slate-900 bg-white px-7 py-4 text-sm font-bold text-slate-900 shadow-[5px_5px_0px_#0f172a] transition duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#0f172a] active:translate-y-0 active:shadow-none sm:text-base"
              >
                Explore Our Approach
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-600">
              {[
                "Strategy-led SEO",
                "Technical optimization",
                "Measurable progress",
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
                  src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=1400&auto=format&fit=crop"
                  alt="Website content and digital marketing workspace"
                  className="aspect-[4/3] w-full object-cover sm:aspect-[5/4]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-2 text-xs font-bold text-white backdrop-blur-md">
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                    Built for sustainable growth
                  </div>

                  <h2 className="mt-4 max-w-md text-2xl font-black leading-tight text-white sm:text-3xl">
                    Make your online presence easier to discover.
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 p-2 pt-4 sm:gap-4 sm:p-3">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 sm:p-4">
                  <div className="flex items-center gap-2 text-[#fe0100]">
                    <LineChart size={19} />
                    <span className="text-xs font-black uppercase tracking-wide">
                      Analytics
                    </span>
                  </div>
                  <p className="mt-2 text-lg font-black sm:text-xl">
                    Insights
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Track and measure progress
                  </p>
                </div>

                <div className="rounded-xl border border-red-100 bg-red-50 p-3 sm:p-4">
                  <div className="flex items-center gap-2 text-[#fe0100]">
                    <TrendingUp size={19} />
                    <span className="text-xs font-black uppercase tracking-wide">
                      Growth
                    </span>
                  </div>
                  <p className="mt-2 text-lg font-black sm:text-xl">
                    Organic SEO
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Build long-term visibility
                  </p>
                </div>
              </div>
            </div>

            {/* FLOATING BADGE */}
            <div className="absolute -right-2 -top-7 z-20 flex rotate-6 items-center gap-3 rounded-xl border-2 border-slate-900 bg-white p-3 shadow-[5px_5px_0px_#0f172a] sm:-right-7 sm:top-5 sm:p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#fe0100] text-white">
                <Search size={21} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400">
                  SEARCH STRATEGY
                </p>
                <p className="text-sm font-black text-slate-900">
                  SEO Focus
                </p>
              </div>
            </div>

            <div className="absolute -bottom-7 -left-2 z-20 flex -rotate-3 items-center gap-2 rounded-xl border-2 border-slate-900 bg-[#fe0100] px-4 py-3 text-white shadow-[5px_5px_0px_#0f172a] sm:-left-7">
              <Sparkles size={19} />
              <span className="text-sm font-black">
                Grow Organically
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SEO PROCESS */}
      <section
        id="seo-process"
        className="border-y-2 border-slate-900 bg-slate-50 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#fe0100]">
              Our Approach
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              A thoughtful approach to SEO.
            </h2>

            <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
              SEO is an ongoing process. We focus on understanding your
              website, improving what matters, and using performance insights
              to guide the next steps.
            </p>
          </div>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {process.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="group overflow-hidden rounded-2xl border-2 border-slate-900 bg-white shadow-[6px_6px_0px_#0f172a] transition duration-300 hover:-translate-y-2 hover:shadow-[10px_11px_0px_#fe0100]"
                >
                  <div className="relative overflow-hidden border-b-2 border-slate-900 bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="aspect-[5/3] w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />

                    <span className="absolute left-4 top-4 rounded-lg border-2 border-slate-900 bg-white px-3 py-1.5 text-xs font-black text-[#fe0100] shadow-[3px_3px_0px_#0f172a]">
                      STEP {item.number}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-slate-900 bg-red-50 text-[#fe0100] shadow-[3px_3px_0px_#0f172a] transition group-hover:bg-[#fe0100] group-hover:text-white">
                      <Icon size={23} />
                    </div>

                    <h3 className="mt-5 text-lg font-black text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.desc}
                    </p>

                    <div className="mt-6 h-1 w-10 rounded-full bg-[#fe0100] transition-all duration-300 group-hover:w-full" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEO SERVICES */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

          <div className="lg:sticky lg:top-24">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#fe0100]">
              What We Offer
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              SEO services designed around your business.
            </h2>

            <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
              Whether you're serving a local community, selling products
              online, or building a larger digital presence, we can help you
              identify the right areas to improve.
            </p>

            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-3 rounded-xl border-2 border-slate-900 bg-white px-5 py-3 text-sm font-bold text-slate-900 shadow-[4px_4px_0px_#0f172a] transition duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#fe0100]"
            >
              Discuss your SEO goals
              <ArrowRight
                size={18}
                className="text-[#fe0100] transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {seoServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
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
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {service.desc}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-xs font-bold text-[#fe0100]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#fe0100]" />
                    Strategic SEO optimization
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="border-y-2 border-slate-900 bg-slate-50 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:gap-10">

          {/* BENEFITS CARD */}
          <div className="rounded-2xl border-2 border-slate-900 bg-white p-7 shadow-[7px_7px_0px_#0f172a] sm:p-9">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl border-2 border-slate-900 bg-red-50 text-[#fe0100] shadow-[3px_3px_0px_#0f172a]">
              <Target size={25} />
            </div>

            <p className="mt-8 text-xs font-black uppercase tracking-[0.2em] text-[#fe0100]">
              Your SEO Goals
            </p>

            <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              What you can work towards.
            </h2>

            <p className="mt-4 text-sm leading-8 text-slate-600">
              A stronger search presence starts with a clear plan and
              consistent improvements. The outcomes depend on your website,
              industry, competition, and implementation.
            </p>

            <ul className="mt-8 space-y-4">
              {benefits.map((benefit, index) => (
                <li key={benefit} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-red-50 text-[#fe0100]">
                    <CheckCircle2 size={17} />
                  </div>

                  <span className="text-sm font-medium leading-7 text-slate-700">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* WHY SELLOPEDIA */}
          <div className="relative flex flex-col justify-center overflow-hidden rounded-2xl border-2 border-slate-900 bg-slate-950 p-7 shadow-[7px_7px_0px_#fe0100] sm:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#fe0100]/25 blur-3xl"
            />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-red-300">
                <TrendingUp size={25} />
              </div>

              <p className="mt-8 text-xs font-black uppercase tracking-[0.2em] text-red-400">
                Our Philosophy
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Why Sellopedia?
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-300 sm:text-base">
                We focus on practical, sustainable SEO strategies that
                consider your business objectives, website experience, and
                customer search behaviour.
              </p>

              <p className="mt-4 text-sm leading-8 text-slate-300 sm:text-base">
                Instead of promising overnight rankings, we emphasize
                understanding your current position, prioritizing improvements,
                and measuring progress over time.
              </p>

              <Link
                to="/contact"
                className="group mt-8 inline-flex items-center gap-3 rounded-xl border-2 border-white bg-[#fe0100] px-6 py-3.5 text-sm font-bold text-white shadow-[4px_4px_0px_#ffffff] transition duration-300 hover:-translate-y-1 hover:shadow-[7px_7px_0px_#ffffff] active:translate-y-0 active:shadow-none"
              >
                Let's Talk SEO
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border-2 border-slate-900 bg-slate-950 px-6 py-14 shadow-[8px_8px_0px_#fe0100] sm:px-10 sm:py-16 lg:px-16 lg:py-20">

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#fe0100]/30 blur-3xl sm:h-96 sm:w-96"
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-400/40 bg-red-500/10 px-4 py-2 text-xs font-bold text-red-300">
              <Sparkles size={15} />
              Start With a Clear Strategy
            </div>

            <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-6xl">
              Ready to improve your
              <span className="mt-2 block text-red-400">
                search visibility?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-slate-300 sm:text-base">
              Let's discuss your website, understand your SEO priorities, and
              identify opportunities to help your business grow organically.
            </p>

            <Link
              to="/contact"
              className="group mt-9 inline-flex items-center justify-center gap-3 rounded-xl border-2 border-white bg-[#fe0100] px-7 py-4 text-sm font-black text-white shadow-[5px_5px_0px_#ffffff] transition duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#ffffff] active:translate-y-0 active:shadow-none sm:text-base"
            >
              Request Your SEO Audit
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

export default SeoOptimization;
