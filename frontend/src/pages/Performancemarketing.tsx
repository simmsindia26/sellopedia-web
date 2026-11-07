import {
  ArrowRight,
  TrendingUp,
  Target,
  BarChart3,
  CheckCircle2,
  DollarSign,
  MousePointerClick,
  Megaphone,
  ChartNoAxesCombined,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Meta Ads",
    desc: "Facebook and Instagram campaigns for leads, sales, traffic, and retargeting.",
    icon: Target,
    tag: "Social Advertising",
  },
  {
    title: "Google Ads",
    desc: "Search, Display, YouTube, and Performance Max campaigns built to capture demand.",
    icon: TrendingUp,
    tag: "Search Advertising",
  },
  {
    title: "Tracking & Analytics",
    desc: "Pixel, Conversion API, GA4, GTM, and dashboard setup for clearer reporting.",
    icon: BarChart3,
    tag: "Data & Insights",
  },
];

const results = [
  { value: "8.4x", label: "Average ROAS" },
  { value: "₹12Cr+", label: "Ad Spend Managed" },
  { value: "350K+", label: "Leads Generated" },
  { value: "150+", label: "Brands Scaled" },
];

const campaignTypes = [
  {
    title: "Lead Generation",
    description:
      "Reach relevant audiences and encourage qualified enquiries.",
    icon: Target,
  },
  {
    title: "E-commerce Sales",
    description:
      "Promote products and optimize campaigns for purchases.",
    icon: DollarSign,
  },
  {
    title: "Retargeting Ads",
    description:
      "Reconnect with visitors and audiences who have shown interest.",
    icon: MousePointerClick,
  },
  {
    title: "Brand Awareness",
    description:
      "Introduce your brand to new audiences and build recognition.",
    icon: Megaphone,
  },
];

const processSteps = [
  {
    no: "01",
    title: "Research",
    description:
      "Understand your audience, competitors, objectives, and budget.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    no: "02",
    title: "Launch",
    description:
      "Build campaigns, define targeting, and configure conversion tracking.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    no: "03",
    title: "Optimize",
    description:
      "Review campaign data and refine creatives, audiences, and bidding.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop",
  },
  {
    no: "04",
    title: "Scale",
    description:
      "Build on successful campaigns while monitoring costs and conversions.",
    image:
      "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?q=80&w=1200&auto=format&fit=crop",
  },
];

const platforms = [
  "Google Ads",
  "Meta Ads",
  "YouTube Ads",
  "Display Ads",
];

const MetaGoogleAds = () => {
  return (
    <main className="overflow-hidden bg-white text-slate-900">

      {/* HERO */}
      <section className="relative px-5 pb-20 pt-20 sm:px-8 sm:pb-24 sm:pt-28 lg:px-12 lg:pb-32 lg:pt-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-red-100/70 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-slate-100 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-16">

          <div className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-bold text-[#fe0100] shadow-[3px_3px_0px_#fecaca]">
              <Target size={16} />
              Meta & Google Ads
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Advertising that
              <span className="mt-2 block text-[#fe0100]">
                works toward growth.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              We plan and manage Meta Ads and Google Ads campaigns to help
              businesses reach relevant audiences, generate enquiries, drive
              sales, and make informed marketing decisions.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-xl border-2 border-[#fe0100] bg-[#fe0100] px-7 py-4 text-sm font-bold text-white shadow-[5px_5px_0px_#991b1b] transition duration-300 hover:-translate-y-1 hover:shadow-[7px_8px_0px_#991b1b] active:translate-y-0 active:shadow-none sm:text-base"
              >
                Start an Ads Campaign
                <ArrowRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-3 rounded-xl border-2 border-slate-900 bg-white px-7 py-4 text-sm font-bold text-slate-900 shadow-[5px_5px_0px_#0f172a] transition duration-300 hover:-translate-y-1 hover:shadow-[7px_8px_0px_#0f172a] active:translate-y-0 active:shadow-none sm:text-base"
              >
                Explore Our Work
                <ArrowRight size={19} />
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-600">
              {[
                "Campaign strategy",
                "Conversion tracking",
                "Performance reporting",
              ].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-[#fe0100]" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* 3D HERO VISUAL */}
          <div className="relative mx-auto w-full max-w-xl [perspective:1200px]">

            <div className="absolute -inset-4 translate-x-2 translate-y-3 rounded-[2rem] bg-red-100 sm:-inset-6" />

            <div className="relative rotate-[-2deg] rounded-[1.7rem] border-2 border-slate-900 bg-white p-3 shadow-[10px_10px_0px_#0f172a] transition duration-500 hover:rotate-0 hover:shadow-[15px_15px_0px_#0f172a] sm:p-4">

              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop"
                  alt="Digital advertising analytics dashboard"
                  className="aspect-[4/3] w-full object-cover sm:aspect-[5/4]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 text-white sm:bottom-6 sm:left-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-300">
                    Performance Marketing
                  </p>
                  <h2 className="mt-2 text-xl font-black sm:text-3xl">
                    Data-driven growth.
                  </h2>
                  <p className="mt-1 text-sm text-white/80">
                    Strategy. Campaigns. Results.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 p-2 pt-4 sm:gap-4 sm:p-3">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 sm:p-4">
                  <div className="flex items-center gap-2 text-[#fe0100]">
                    <ChartNoAxesCombined size={18} />
                    <span className="text-xs font-bold uppercase tracking-wide">
                      Analytics
                    </span>
                  </div>
                  <p className="mt-2 text-lg font-black sm:text-2xl">
                    Insights
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Track campaign performance
                  </p>
                </div>

                <div className="rounded-xl border border-red-100 bg-red-50 p-3 sm:p-4">
                  <div className="flex items-center gap-2 text-[#fe0100]">
                    <TrendingUp size={18} />
                    <span className="text-xs font-bold uppercase tracking-wide">
                      Growth
                    </span>
                  </div>
                  <p className="mt-2 text-lg font-black sm:text-2xl">
                    Optimize
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Improve campaign results
                  </p>
                </div>
              </div>
            </div>

            {/* FLOATING BADGE */}
            <div className="absolute -right-2 -top-7 z-20 flex rotate-6 items-center gap-3 rounded-xl border-2 border-slate-900 bg-white p-3 shadow-[5px_5px_0px_#0f172a] sm:-right-8 sm:top-5 sm:p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#fe0100] text-white">
                <Megaphone size={21} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400">
                  CAMPAIGN MODE
                </p>
                <p className="text-sm font-black text-slate-900">
                  Growth Focus
                </p>
              </div>
            </div>

            <div className="absolute -bottom-7 -left-2 z-20 flex -rotate-3 items-center gap-2 rounded-xl border-2 border-slate-900 bg-[#fe0100] px-4 py-3 text-white shadow-[5px_5px_0px_#0f172a] sm:-left-8">
              <Sparkles size={19} />
              <span className="text-sm font-black">
                Smarter Advertising
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="border-y-2 border-slate-900 bg-slate-50 px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {results.map((item, index) => (
            <div
              key={item.label}
              className="group rounded-2xl border-2 border-slate-900 bg-white p-5 shadow-[5px_5px_0px_#0f172a] transition duration-300 hover:-translate-y-2 hover:shadow-[8px_10px_0px_#fe0100] sm:p-6"
            >
              <span className="text-xs font-black tracking-widest text-[#fe0100]">
                0{index + 1}
              </span>
              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                {item.value}
              </h2>
              <p className="mt-2 text-xs font-semibold text-slate-500 sm:text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#fe0100]">
              What we manage
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Your campaigns,
              <span className="text-[#fe0100]"> managed with purpose.</span>
            </h2>
            <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
              Campaign planning and measurement work together to help you
              understand what is performing and where to improve.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group relative rounded-2xl border-2 border-slate-900 bg-white p-7 shadow-[7px_7px_0px_#0f172a] transition duration-300 hover:-translate-y-2 hover:shadow-[11px_12px_0px_#fe0100] sm:p-8"
                >
                  <div className="absolute right-6 top-6 text-5xl font-black text-slate-100 transition group-hover:text-red-100">
                    0{index + 1}
                  </div>

                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-slate-900 bg-red-50 text-[#fe0100] shadow-[4px_4px_0px_#0f172a] transition duration-300 group-hover:-translate-y-1 group-hover:bg-[#fe0100] group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <p className="mt-8 text-xs font-black uppercase tracking-widest text-[#fe0100]">
                    {service.tag}
                  </p>

                  <h3 className="mt-3 text-xl font-black sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                    {service.desc}
                  </p>

                  <div className="mt-7 flex items-center gap-2 text-sm font-bold text-slate-900">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#fe0100]" />
                    Strategic campaign management
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CAMPAIGN TYPES */}
      <section className="border-y-2 border-slate-900 bg-slate-50 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#fe0100]">
              Campaign objectives
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Campaigns built around your goals.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {campaignTypes.map((campaign, index) => {
              const Icon = campaign.icon;

              return (
                <article
                  key={campaign.title}
                  className="group rounded-2xl border-2 border-slate-900 bg-white p-6 shadow-[6px_6px_0px_#0f172a] transition duration-300 hover:-translate-y-2 hover:shadow-[9px_10px_0px_#fe0100] sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-slate-900 bg-red-50 text-[#fe0100] shadow-[3px_3px_0px_#0f172a] transition group-hover:bg-[#fe0100] group-hover:text-white">
                      <Icon size={22} />
                    </div>

                    <span className="text-2xl font-black text-slate-200 transition group-hover:text-red-200">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-7 text-lg font-black">
                    {campaign.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {campaign.description}
                  </p>

                  <div className="mt-6 h-1 w-10 rounded-full bg-[#fe0100] transition-all duration-300 group-hover:w-full" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#fe0100]">
              How we work
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              From planning to performance.
            </h2>
            <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
              A structured process keeps campaigns focused, measurable, and
              responsive to the data.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <article
                key={step.no}
                className="group overflow-hidden rounded-2xl border-2 border-slate-900 bg-white shadow-[6px_6px_0px_#0f172a] transition duration-300 hover:-translate-y-2 hover:shadow-[10px_11px_0px_#fe0100]"
              >
                <div className="relative overflow-hidden border-b-2 border-slate-900 bg-slate-100">
                  <img
                    src={step.image}
                    alt={step.title}
                    loading="lazy"
                    className="aspect-[5/3] w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent" />

                  <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl border-2 border-slate-900 bg-white text-sm font-black text-[#fe0100] shadow-[3px_3px_0px_#0f172a]">
                    {step.no}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-black">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="border-y-2 border-slate-900 bg-slate-50 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#fe0100]">
              Advertising channels
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Reach customers where they are.
            </h2>
            <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
              Choose the right mix of advertising channels based on your
              audience, offering, and campaign objectives.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {platforms.map((platform, index) => (
              <article
                key={platform}
                className="group rounded-2xl border-2 border-slate-900 bg-white p-5 text-center shadow-[5px_5px_0px_#0f172a] transition duration-300 hover:-translate-y-2 hover:shadow-[8px_9px_0px_#fe0100] sm:p-8"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-slate-900 bg-red-50 text-[#fe0100] shadow-[3px_3px_0px_#0f172a] transition duration-300 group-hover:rotate-6 group-hover:bg-[#fe0100] group-hover:text-white">
                  <DollarSign size={23} />
                </div>

                <p className="mt-5 text-xs font-black uppercase tracking-widest text-slate-400">
                  Channel 0{index + 1}
                </p>

                <h3 className="mt-2 text-base font-black sm:text-lg">
                  {platform}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 pt-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border-2 border-slate-900 bg-slate-950 px-6 py-14 shadow-[8px_8px_0px_#fe0100] sm:px-10 sm:py-16 lg:px-16 lg:py-20">

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#fe0100]/30 blur-3xl sm:h-96 sm:w-96"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-red-500/10 blur-3xl"
          />

          <div className="relative flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-red-400/40 bg-red-500/10 px-4 py-2 text-sm font-bold text-red-300">
                <Sparkles size={16} />
                Ready to get started?
              </div>

              <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-6xl">
                Let’s make your
                <span className="mt-2 block text-red-400">
                  ad budget work harder.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-8 text-slate-300 sm:text-base">
                Tell us about your business, advertising goals, and budget.
                We’ll help you explore a campaign strategy tailored to your
                needs.
              </p>
            </div>

            <Link
              to="/contact"
              className="group inline-flex shrink-0 items-center gap-3 rounded-xl border-2 border-white bg-[#fe0100] px-6 py-4 text-sm font-black text-white shadow-[5px_5px_0px_#ffffff] transition duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#ffffff] active:translate-y-0 active:shadow-none sm:px-8 sm:text-base"
            >
              Request an Ads Audit
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MetaGoogleAds;
