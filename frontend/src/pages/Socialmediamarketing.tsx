import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Heart,
  Share2,
  Users,
  Target,
  Zap,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const stats = [
  { value: "250+", label: "Brands Managed", icon: Users },
  { value: "12M+", label: "Monthly Reach", icon: TrendingUp },
  { value: "500+", label: "Campaigns", icon: Target },
  { value: "4.9★", label: "Client Rating", icon: Heart },
];

const services = [
  {
    title: "Content Creation",
    description:
      "Create scroll-stopping content that communicates your brand and connects with your audience.",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200&auto=format&fit=crop",
  },
  {
    title: "Influencer Marketing",
    description:
      "Build authentic collaborations that introduce your business to relevant audiences.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&auto=format&fit=crop",
  },
  {
    title: "Community Management",
    description:
      "Keep conversations active, respond thoughtfully, and strengthen relationships with customers.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&fit=crop",
  },
];

const platforms = [
  {
    name: "Instagram",
    description: "Visual storytelling, reels, and community building.",
    icon: FaInstagram,
    color: "from-pink-500 via-red-500 to-orange-400",
    shadow: "shadow-pink-500/20",
  },
  {
    name: "Facebook",
    description: "Audience engagement, campaigns, and business discovery.",
    icon: FaFacebookF,
    color: "from-blue-600 to-blue-400",
    shadow: "shadow-blue-500/20",
  },
  {
    name: "LinkedIn",
    description: "Professional positioning, thought leadership, and B2B growth.",
    icon: FaLinkedinIn,
    color: "from-sky-700 to-sky-400",
    shadow: "shadow-sky-500/20",
  },
];

const process = [
  {
    number: "01",
    title: "Research",
    description:
      "Understand your audience, industry, competitors, and current presence.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Set clear objectives and build a content plan around your business goals.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "Content Creation",
    description:
      "Develop relevant creatives, captions, and campaigns that fit your brand.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop",
  },
  {
    number: "04",
    title: "Growth & Reporting",
    description:
      "Review performance, learn from the data, and refine the next campaign.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },
];

const SocialMediaMarketing = () => {
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
              Social Media Marketing
            </div>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
              Grow your brand
              <span className="mt-2 block text-[#fe0100]">
                beyond the feed.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Build a stronger social presence with engaging content, creative
              campaigns, influencer collaborations, and strategies shaped
              around your business goals.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#fe0100] px-7 py-4 text-sm font-bold text-white shadow-[0_7px_0_#a90000,0_15px_25px_rgba(254,1,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_0_#a90000,0_20px_30px_rgba(254,1,0,0.25)] active:translate-y-1 active:shadow-none sm:text-base"
              >
                Get Started
                <ArrowRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-slate-800 shadow-[0_5px_0_#e2e8f0] transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:text-[#fe0100] hover:shadow-[0_8px_0_#e2e8f0] sm:text-base"
              >
                View Our Work
                <ArrowRight size={19} />
              </Link>

            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-4 text-sm font-medium text-slate-600">
              {[
                "Content planning",
                "Creative campaigns",
                "Performance insights",
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

            {/* Back decorative panel */}
            <div className="absolute -inset-5 rotate-[-5deg] rounded-[2rem] bg-red-100/80 shadow-xl shadow-red-200/30 sm:-inset-7" />

            {/* Main image panel */}
            <div className="group relative z-10 rotate-[1.5deg] overflow-hidden rounded-[1.7rem] border border-white bg-white p-2 shadow-[0_25px_60px_rgba(15,23,42,0.18)] transition-all duration-700 hover:rotate-0 hover:scale-[1.02] sm:p-3">

              <div className="relative overflow-hidden rounded-[1.3rem]">
                <img
                  src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=1200&auto=format&fit=crop"
                  alt="Social media content and marketing"
                  className="aspect-4/3 w-full object-cover transition duration-700 group-hover:scale-110 sm:aspect-5/4"
                />

                <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 text-white sm:bottom-7 sm:left-7">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                    The bigger picture
                  </p>
                  <h3 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                    Content with a purpose.
                  </h3>
                </div>
              </div>
            </div>

            {/* Floating social reaction */}
            <div className="absolute -left-5 top-12 z-20 flex items-center gap-3 rounded-2xl border border-white bg-white p-3 shadow-[0_15px_35px_rgba(15,23,42,0.15)] [transform:translateZ(50px)] transition duration-500 hover:-translate-y-2 sm:-left-12 sm:p-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-[#fe0100]">
                <Heart size={23} fill="currentColor" />
              </div>
              <div>
                <p className="text-sm font-extrabold text-slate-900">12.8K</p>
                <p className="text-xs text-slate-500">Likes</p>
              </div>
            </div>

            {/* Floating growth card */}
            <div className="absolute -right-3 top-1/3 z-20 rounded-2xl border border-white bg-white p-3 shadow-[0_15px_35px_rgba(15,23,42,0.15)] transition duration-500 hover:-translate-y-2 sm:-right-10 sm:p-4">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-50 text-green-600">
                  <TrendingUp size={19} />
                </div>
                <div>
                  <p className="text-sm font-extrabold text-slate-900">
                    +185%
                  </p>
                  <p className="text-[10px] text-slate-500">Engagement</p>
                </div>
              </div>
            </div>

            {/* Floating Instagram card */}
            <div className="absolute -bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap rounded-2xl border border-white bg-white px-4 py-3 shadow-[0_15px_35px_rgba(15,23,42,0.16)] transition duration-500 hover:-translate-y-2 sm:bottom-0 sm:px-5 sm:py-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-purple-600 via-pink-500 to-orange-400 text-white shadow-lg">
                <FaInstagram className="text-xl" />
              </div>
              <div>
                <p className="text-sm font-extrabold text-slate-900">
                  Social Growth
                </p>
                <p className="text-xs text-slate-500">
                  Creativity that connects
                </p>
              </div>
            </div>

            {/* Decorative floating icon */}
            <div className="absolute -right-5 -top-8 z-20 h-16 w-16 rounded-2xl border border-red-100 bg-white shadow-xl shadow-red-100/50 sm:-right-9">
              <div className="flex h-full items-center justify-center text-[#fe0100]">
                <Sparkles size={27} />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================
          STATISTICS
      ===================================== */}

      <section className="relative z-20 px-5 py-12 sm:px-8 sm:py-16 lg:px-12">

        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 md:grid-cols-4">

          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <article
                key={stat.label}
                className="group relative rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_7px_0_#e2e8f0,0_15px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-red-200 hover:shadow-[0_12px_0_#fee2e2,0_25px_35px_rgba(254,1,0,0.09)] sm:p-7"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-[#fe0100] transition duration-300 group-hover:rotate-[-8deg] group-hover:scale-110">
                  <Icon size={21} />
                </div>

                <p className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                  {stat.value}
                </p>

                <p className="mt-2 text-xs font-semibold text-slate-500 sm:text-sm">
                  {stat.label}
                </p>

                <div className="absolute bottom-0 left-5 h-1 w-8 rounded-full bg-[#fe0100] transition-all duration-300 group-hover:w-16 sm:left-7" />
              </article>
            );
          })}

        </div>
      </section>


      {/* =====================================
          SERVICES
      ===================================== */}

      <section className="relative overflow-hidden bg-slate-50 px-5 py-20 sm:px-8 sm:py-24 lg:px-12">

        <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-red-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#fe0100]">
                What we do
              </p>

              <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Make every interaction count.
              </h2>
            </div>

            <p className="max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
              A thoughtful mix of content, creative direction, and audience
              engagement helps your brand stay relevant and consistent.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 perspective-[1000px]">

            {services.map((service, index) => (
              <article
                key={service.title}
                className="group relative rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_8px_0_#e2e8f0,0_20px_30px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-3 hover:border-red-200 hover:shadow-[0_14px_0_#fee2e2,0_30px_40px_rgba(254,1,0,0.12)]"
              >

                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="aspect-5/3 w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 to-transparent opacity-70" />

                  <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/30 bg-white/90 text-sm font-extrabold text-[#fe0100] shadow-lg backdrop-blur">
                    0{index + 1}
                  </span>
                </div>

                <div className="p-5 sm:p-6">

                  <h3 className="text-xl font-extrabold tracking-tight text-slate-950">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Our expertise
                    </span>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-50 text-[#fe0100] transition duration-300 group-hover:-rotate-45 group-hover:bg-[#fe0100] group-hover:text-white">
                      <ArrowRight size={17} />
                    </div>
                  </div>

                </div>
              </article>
            ))}

          </div>
        </div>
      </section>


      {/* =====================================
          PLATFORMS
      ===================================== */}

      <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-14 max-w-2xl text-center">

            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-[#fe0100] shadow-[0_5px_0_#fee2e2]">
              <Share2 size={23} />
            </div>

            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#fe0100]">
              Where your audience is
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Platforms we manage.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              The right content and approach for the platforms that matter to
              your business.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 perspective-distant">

            {platforms.map((platform, index) => {
              const Icon = platform.icon;

              return (
                <article
                  key={platform.name}
                  className="group relative rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_9px_0_#e2e8f0,0_20px_35px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-3 hover:border-red-200 hover:shadow-[0_14px_0_#fee2e2,0_30px_40px_rgba(254,1,0,0.1)] sm:p-9"
                >

                  <div className="absolute right-6 top-6 text-xs font-extrabold text-slate-200">
                    0{index + 1}
                  </div>

                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br ${platform.color} text-white shadow-xl ${platform.shadow} transition duration-500 group-hover:rotate-[-10deg] group-hover:scale-110`}
                  >
                    <Icon className="text-3xl" />
                  </div>

                  <h3 className="mt-7 text-2xl font-extrabold text-slate-950">
                    {platform.name}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {platform.description}
                  </p>

                  <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Platform strategy
                    </span>

                    <ArrowRight
                      size={19}
                      className="text-[#fe0100] transition duration-300 group-hover:translate-x-2"
                    />
                  </div>

                </article>
              );
            })}

          </div>
        </div>
      </section>


      {/* =====================================
          PROCESS
      ===================================== */}

      <section className="relative overflow-hidden bg-slate-50 px-5 py-20 sm:px-8 sm:py-24 lg:px-12">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 max-w-2xl">

            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#fe0100]">
              How we work
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              A clear path to better social.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              From understanding your audience to reviewing results, every
              stage has a clear purpose.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4 perspective-[1000px]">

            {process.map((step) => (
              <article
                key={step.number}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_7px_0_#e2e8f0,0_18px_30px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_0_#fee2e2,0_25px_35px_rgba(254,1,0,0.1)]"
              >

                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={step.image}
                    alt={step.title}
                    loading="lazy"
                    className="aspect-5/3 w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/50 to-transparent" />

                  <span className="absolute left-4 top-4 rounded-xl border border-white/50 bg-white px-4 py-2 text-sm font-extrabold text-[#fe0100] shadow-lg">
                    {step.number}
                  </span>
                </div>

                <div className="p-5 sm:p-6">

                  <h3 className="text-lg font-extrabold text-slate-950">
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
          FINAL CTA
      ===================================== */}

      <section className="px-5 pb-20 pt-20 sm:px-8 sm:pb-24 lg:px-12">

        <div className="relative mx-auto max-w-7xl perspective-distant">

          {/* 3D background layer */}
          <div className="absolute inset-0 translate-x-2 translate-y-3 rounded-4xl bg-red-200" />

          <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-slate-950 px-6 py-14 shadow-[0_20px_50px_rgba(15,23,42,0.2)] transition duration-500 hover:-translate-y-1 sm:px-10 sm:py-16 lg:px-16 lg:py-20">

            {/* Decorative 3D circles */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full border-35 border-[#fe0100]/20"
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
                  <Zap size={16} />
                  Ready to get started?
                </div>

                <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Let’s grow your
                  <span className="block text-red-400">
                    social presence.
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
                  Let’s talk about your audience, your goals, and a social media
                  strategy that makes sense for your business.
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

export default SocialMediaMarketing;
