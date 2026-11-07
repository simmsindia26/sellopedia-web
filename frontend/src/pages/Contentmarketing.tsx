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
  MousePointer2,
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
    <section className="overflow-hidden bg-[#fffdfb] text-slate-900">
      {/* HERO */}
      <div className="relative isolate">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-red-100/70 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-20 -left-32 h-96 w-96 rounded-full bg-orange-100/60 blur-[90px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-28">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.15em] text-[#fe0100] shadow-[4px_4px_0px_#fee2e2]">
              <Search size={15} />
              SEO & Organic Growth
              <Sparkles size={14} />
            </div>

            <h1 className="mt-7 text-4xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-[4.3rem]">
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
                className="group inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-[#fe0100] bg-[#fe0100] px-7 py-4 text-sm font-extrabold text-white shadow-[0_7px_0_#a90000] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_0_#a90000] active:translate-y-1 active:shadow-none"
              >
                Request an SEO Audit
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <a
                href="#seo-process"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-slate-200 bg-white px-7 py-4 text-sm font-bold text-slate-800 shadow-[0_5px_0_#dbe1e8] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_8px_0_#dbe1e8]"
              >
                Explore Our Approach
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
              {[
                "Strategy-led SEO",
                "Technical optimization",
                "Measurable progress",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm font-semibold text-slate-600"
                >
                  <CheckCircle2 size={17} className="shrink-0 text-[#fe0100]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* 3D HERO VISUAL */}
          <div className="relative mx-auto w-full max-w-xl pb-8 lg:max-w-none lg:pb-0">
            <div className="absolute -right-3 -top-4 h-28 w-28 rounded-[2rem] bg-[#fe0100]/15 sm:-right-5 sm:-top-5" />
            <div className="absolute -bottom-2 -left-3 h-32 w-32 rounded-full border-[18px] border-orange-100/80" />

            <div className="relative rounded-[2rem] border border-white bg-white p-2 shadow-[0_25px_70px_-20px_rgba(15,23,42,0.28)] sm:p-3">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=1400&auto=format&fit=crop"
                  alt="Website content and digital marketing workspace"
                  className="h-[330px] w-full object-cover sm:h-[430px] lg:h-[490px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-xl border border-white/30 bg-white/90 px-4 py-2 text-xs font-extrabold text-slate-800 shadow-xl backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  Organic Growth Strategy
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                    <Sparkles size={14} />
                    Built for sustainable growth
                  </div>

                  <h2 className="mt-4 max-w-md text-2xl font-black leading-tight text-white sm:text-3xl">
                    Make your online presence easier to discover.
                  </h2>
                </div>
              </div>
            </div>

            {/* Floating SEO card */}
            <div className="absolute -bottom-5 left-2 flex items-center gap-3 rounded-2xl border border-white bg-white p-4 shadow-[0_15px_40px_rgba(15,23,42,0.16)] sm:-left-6 sm:p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-[#fe0100] shadow-[3px_3px_0_#fecaca]">
                <LineChart size={24} />
              </div>
              <div>
                <p className="text-sm font-black text-slate-900">
                  Data-informed decisions
                </p>
                <p className="mt-1 text-xs font-medium text-slate-500">
                  Track, learn, improve
                </p>
              </div>
            </div>

            {/* Floating search icon */}
            <div className="absolute -right-2 top-24 flex h-14 w-14 items-center justify-center rounded-2xl border border-white bg-[#fe0100] text-white shadow-[0_7px_0_#a90000] sm:-right-5 sm:h-16 sm:w-16">
              <Search size={27} />
            </div>
          </div>
        </div>
      </div>

      {/* SEO PROCESS */}
      <div
        id="seo-process"
        className="relative border-y border-slate-200 bg-[#f5f6f8]"
      >
        <div className="pointer-events-none absolute left-0 top-0 h-64 w-64 rounded-full bg-red-100/50 blur-[90px]" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#fe0100] shadow-[3px_3px_0_#fee2e2]">
              <Sparkles size={14} />
              Our Approach
            </span>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              A thoughtful approach to SEO
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              SEO is an ongoing process. We focus on understanding your
              website, improving what matters, and using performance insights
              to guide the next steps.
            </p>
          </div>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {process.map((item, index) => (
              <article
                key={item.number}
                className="group relative rounded-[1.6rem] border border-slate-200 bg-white p-2 shadow-[0_8px_0_#dce1e8] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_14px_0_#fecaca,0_25px_35px_-20px_rgba(15,23,42,0.3)]"
              >
                <div className="relative h-44 overflow-hidden rounded-[1.2rem] bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />

                  <span className="absolute left-4 top-4 rounded-lg border border-white/40 bg-white/95 px-3 py-1.5 text-[10px] font-black tracking-wider text-slate-900 shadow-lg">
                    STEP {item.number}
                  </span>

                  <span className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#fe0100] text-white shadow-[0_4px_0_#a90000]">
                    <item.icon size={20} />
                  </span>
                </div>

                <div className="p-4 pb-5 sm:p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-widest text-[#fe0100]">
                      Phase {index + 1}
                    </span>
                    <span className="text-2xl font-black text-slate-100">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* SEO SERVICES */}
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-24">
            <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-widest text-[#fe0100]">
              <Target size={14} />
              What We Offer
            </span>

            <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              SEO services designed around your business.
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Whether you're serving a local community, selling products
              online, or building a larger digital presence, we can help you
              identify the right areas to improve.
            </p>

            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-3 rounded-xl border-b-2 border-red-200 pb-2 text-sm font-black text-[#fe0100] transition hover:gap-5"
            >
              Discuss your SEO goals
              <ArrowRight size={18} />
            </Link>

            <div className="mt-10 hidden rounded-2xl border border-red-100 bg-red-50 p-5 sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#fe0100] shadow-[3px_3px_0_#fecaca]">
                  <MousePointer2 size={21} />
                </div>
                <div>
                  <p className="text-sm font-black text-slate-900">
                    Search-focused strategy
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Built around your business goals
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {seoServices.map((service, index) => (
              <article
                key={service.title}
                className="group relative rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_6px_0_#e2e8f0] transition-all duration-300 hover:-translate-y-2 hover:border-red-200 hover:shadow-[0_12px_0_#fecaca,0_20px_30px_-20px_rgba(15,23,42,0.25)]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-red-100 bg-red-50 text-[#fe0100] shadow-[3px_3px_0_#fecaca] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#fe0100] group-hover:text-white group-hover:shadow-[4px_4px_0_#a90000]">
                    <service.icon size={25} />
                  </div>

                  <span className="text-3xl font-black text-slate-100 transition group-hover:text-red-100">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-black text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {service.desc}
                </p>

                <div className="mt-5 h-1 w-10 rounded-full bg-[#fe0100] transition-all duration-300 group-hover:w-20" />
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* BENEFITS */}
      <div className="relative overflow-hidden bg-[#f4f5f7]">
        <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-red-100/60 blur-[90px]" />

        <div className="relative mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-12 lg:px-10">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_9px_0_#dce1e8] sm:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-red-100 bg-red-50 text-[#fe0100] shadow-[4px_4px_0_#fecaca]">
              <Target size={27} />
            </div>

            <h2 className="mt-7 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              What you can work towards
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              A stronger search presence starts with a clear plan and
              consistent improvements. The outcomes depend on your website,
              industry, competition, and implementation.
            </p>

            <ul className="mt-8 space-y-5">
              {benefits.map((benefit, index) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-red-50 text-[#fe0100] shadow-[2px_2px_0_#fecaca]">
                    <CheckCircle2 size={16} />
                  </span>
                  <span className="text-sm font-medium leading-6 text-slate-700">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="group relative flex flex-col justify-center overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 p-8 shadow-[0_9px_0_#0f172a] sm:p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#fe0100]/25 blur-[90px]" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-orange-500/10 blur-[80px]" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-red-300 shadow-[4px_4px_0_rgba(255,255,255,0.08)]">
                <TrendingUp size={27} />
              </div>

              <span className="mt-7 inline-block rounded-full border border-red-400/30 bg-red-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-red-300">
                The Sellopedia Approach
              </span>

              <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Why Sellopedia?
              </h2>

              <p className="mt-5 leading-7 text-slate-300">
                We focus on practical, sustainable SEO strategies that
                consider your business objectives, website experience, and
                customer search behaviour.
              </p>

              <p className="mt-4 leading-7 text-slate-300">
                Instead of promising overnight rankings, we emphasize
                understanding your current position, prioritizing improvements,
                and measuring progress over time.
              </p>

              <Link
                to="/contact"
                className="group mt-9 inline-flex items-center gap-3 rounded-xl border-2 border-[#fe0100] bg-[#fe0100] px-6 py-3.5 text-sm font-extrabold text-white shadow-[0_5px_0_#a90000] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_0_#a90000]"
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
      </div>

      {/* FINAL CTA */}
      <div className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 px-6 py-14 shadow-[0_12px_0_#cbd5e1] sm:px-10 sm:py-20 lg:px-16">
          <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full bg-[#fe0100]/25 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-orange-500/10 blur-[90px]" />

          <div className="relative mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-red-300">
              <span className="h-2 w-2 rounded-full bg-[#fe0100]" />
              Start With a Clear Strategy
            </span>

            <h2 className="mt-7 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to improve your search visibility?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-7 text-slate-300">
              Let's discuss your website, understand your SEO priorities, and
              identify opportunities to help your business grow organically.
            </p>

            <Link
              to="/contact"
              className="group mt-9 inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-[#fe0100] bg-[#fe0100] px-7 py-4 text-sm font-extrabold text-white shadow-[0_7px_0_#a90000] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_0_#a90000] active:translate-y-1 active:shadow-none"
            >
              Request Your SEO Audit
              <ArrowRight
                size={19}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoOptimization;
