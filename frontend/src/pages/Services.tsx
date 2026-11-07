import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Target,
  Palette,
  TrendingUp,
  Code2,
  Search,
  FileText,
  Clapperboard,
  Users,
  Zap,
  Layers3,
} from "lucide-react";

import { Link } from "react-router-dom";

import Socialmm from "../icons/socialmed.png";
import Creativeds from "../icons/creative.png";
import Perm from "../icons/perform.png";
import Webdev from "../icons/webdev.png";
import Seo from "../icons/Seoopti.png";
import Content from "../icons/Content.png";
import Theater from "../icons/theater.png";
import influencer from "../icons/influencer.png";

const services = [
  {
    title: "Social Media Marketing",
    desc: "Build an engaging social presence with strategic content, community management, and campaigns designed around your audience.",
    image: Socialmm,
    link: "/service/social-media-marketing",
    icon: TrendingUp,
    number: "01",
  },
  {
    title: "Creative Design Services",
    desc: "Create a consistent brand identity with thoughtful graphics, marketing creatives, and compelling visual storytelling.",
    image: Creativeds,
    link: "/service/creative-design",
    icon: Palette,
    number: "02",
  },
  {
    title: "Performance Marketing",
    desc: "Reach relevant audiences through data-informed advertising campaigns focused on leads, sales, and measurable outcomes.",
    image: Perm,
    link: "/service/meta-and-google-ads",
    icon: Target,
    number: "03",
  },
  {
    title: "Web Development",
    desc: "Build responsive, user-friendly websites that showcase your business and support your digital goals.",
    image: Webdev,
    link: "/service/website-development",
    icon: Code2,
    number: "04",
  },
  {
    title: "SEO Optimization",
    desc: "Improve your website's search visibility through technical improvements, relevant content, and ongoing optimization.",
    image: Seo,
    link: "/service/seo-optimization",
    icon: Search,
    number: "05",
  },
  {
    title: "Content Marketing",
    desc: "Share useful stories, ideas, and information that help your audience understand your brand and services.",
    image: Content,
    link: "/service/content-marketing",
    icon: FileText,
    number: "06",
  },
  {
    title: "Theater Ads",
    desc: "Promote your brand on cinema screens and connect with local audiences through high-attention advertising.",
    image: Theater,
    link: "/service/theater-ads",
    icon: Clapperboard,
    number: "07",
  },
  {
    title: "Influencer Marketing",
    desc: "Collaborate with relevant creators to introduce your brand to new audiences through authentic content.",
    image: influencer,
    link: "/service/influencer-marketing",
    icon: Users,
    number: "08",
  },
];

const approach = [
  {
    icon: Target,
    title: "Strategy First",
    desc: "Start with your business objectives and audience.",
    number: "01",
  },
  {
    icon: Palette,
    title: "Creative Execution",
    desc: "Build a consistent and recognizable brand experience.",
    number: "02",
  },
  {
    icon: TrendingUp,
    title: "Marketing Focus",
    desc: "Connect the right message with the right audience.",
    number: "03",
  },
  {
    icon: Code2,
    title: "Digital Foundations",
    desc: "Support your growth with useful digital experiences.",
    number: "04",
  },
];

const Services = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#fffdf8] text-slate-950">

      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(#000 1.5px, transparent 1.5px)",
            backgroundSize: "18px 18px",
          }}
        />

        <div className="absolute -right-40 -top-32 h-112.5 w-112.5 rounded-full bg-red-200/50 blur-[100px]" />

        <div className="absolute -bottom-20 -left-40 h-96 w-96 rounded-full bg-orange-100/70 blur-[100px]" />

        <div className="absolute right-10 top-[600px] hidden h-20 w-20 rotate-12 border-4 border-black/10 lg:block" />

        <div className="absolute bottom-[900px] left-8 hidden h-16 w-16 rounded-full border-10 border-[#fe0100]/10 lg:block" />
      </div>

      <div className="relative z-10">

        {/* HERO SECTION */}
        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">

          <div className="mx-auto max-w-4xl text-center">

            <div className="inline-flex -rotate-2 items-center gap-2 rounded-xl border-2 border-black bg-[#fe0100] px-5 py-2.5 text-xs font-black uppercase tracking-[0.18em] text-white shadow-[5px_5px_0_#000] sm:px-6 sm:text-sm">
              <Sparkles size={17} />
              Our Services
            </div>

            <h1 className="mt-8 text-4xl font-black leading-[1.05] tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
              Digital solutions for
              <span className="mt-2 block -rotate-1 text-[#fe0100]">
                ambitious brands.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl rounded-2xl border-2 border-black bg-[#ffea00] p-5 text-sm font-bold leading-7 text-black shadow-[6px_6px_0_#000] sm:p-6 sm:text-lg">
              From social media and creative design to performance marketing,
              SEO, and web development, we bring strategy, creativity, and
              technology together to help your business move forward.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-xl border-2 border-black bg-[#fe0100] px-7 py-4 text-sm font-black uppercase text-white shadow-[0_7px_0_#000] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_0_#000] active:translate-y-1 active:shadow-none"
              >
                Discuss Your Project
                <ArrowRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <a
                href="#our-services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-black bg-white px-7 py-4 text-sm font-black uppercase text-black shadow-[0_7px_0_#000] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ffea00] hover:shadow-[0_10px_0_#000]"
              >
                Explore Our Services
              </a>

            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-4">

              {[
                "Strategy-led execution",
                "Creative thinking",
                "Business-focused solutions",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-slate-700 sm:text-sm"
                >
                  <CheckCircle2
                    size={17}
                    className="shrink-0 text-[#fe0100]"
                  />
                  {item}
                </div>
              ))}

            </div>
          </div>

          {/* HERO FEATURE CARDS */}
          <div className="relative mx-auto mt-16 grid max-w-5xl gap-5 sm:mt-20 sm:grid-cols-3">

            <div className="relative rounded-2xl border-2 border-black bg-[#ffea00] p-5 shadow-[6px_6px_0_#000] transition hover:-translate-y-2 hover:shadow-[9px_9px_0_#fe0100]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-black bg-white shadow-[3px_3px_0_#000]">
                <Target size={23} />
              </div>

              <h3 className="mt-5 text-lg font-black uppercase">
                Strategy
              </h3>

              <p className="mt-2 text-sm font-semibold leading-6 text-slate-800">
                Clear direction for your digital growth.
              </p>
            </div>

            <div className="relative rounded-2xl border-2 border-black bg-[#fe0100] p-5 text-white shadow-[6px_6px_0_#000] transition hover:-translate-y-2 hover:shadow-[9px_9px_0_#000]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-black bg-white text-black shadow-[3px_3px_0_#000]">
                <Palette size={23} />
              </div>

              <h3 className="mt-5 text-lg font-black uppercase">
                Creativity
              </h3>

              <p className="mt-2 text-sm font-semibold leading-6 text-white/90">
                Distinctive ideas that make your brand stand out.
              </p>
            </div>

            <div className="relative rounded-2xl border-2 border-black bg-white p-5 shadow-[6px_6px_0_#000] transition hover:-translate-y-2 hover:shadow-[9px_9px_0_#fe0100]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-black bg-[#ffea00] shadow-[3px_3px_0_#000]">
                <TrendingUp size={23} />
              </div>

              <h3 className="mt-5 text-lg font-black uppercase">
                Growth
              </h3>

              <p className="mt-2 text-sm font-semibold leading-6 text-slate-800">
                Practical solutions built around your goals.
              </p>
            </div>

          </div>
        </div>

        {/* SERVICES GRID */}
        <div
          id="our-services"
          className="scroll-mt-20 border-y-2 border-black bg-[#f3f4f6]"
        >
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">

            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

              <div className="max-w-2xl">

                <span className="inline-flex items-center gap-2 rounded-lg border-2 border-black bg-[#ffea00] px-4 py-2 text-xs font-black uppercase tracking-widest shadow-[3px_3px_0_#000]">
                  <Layers3 size={15} />
                  What We Do
                </span>

                <h2 className="mt-6 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                  The right expertise for your next step.
                </h2>

              </div>

              <p className="max-w-md text-sm font-semibold leading-7 text-slate-600 sm:text-base">
                Explore our services and find the right combination of
                creative, marketing, and technical support for your business.
              </p>

            </div>

            {/* SERVICE CARDS */}
            <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

              {services.map((service) => (
                <Link
                  key={service.title}
                  to={service.link}
                  className="group flex h-full flex-col rounded-2xl border-2 border-black bg-white p-2 shadow-[7px_7px_0_#000] transition-all duration-300 hover:-translate-y-2 hover:shadow-[11px_11px_0_#fe0100]"

                >
                  {/* IMAGE */}
                  <div className="relative h-52 overflow-hidden rounded-xl border-2 border-black bg-slate-100 sm:h-56">

                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                    <span className="absolute left-4 top-4 rounded-lg border-2 border-black bg-[#ffea00] px-3 py-1.5 text-[10px] font-black uppercase text-black shadow-[3px_3px_0_#000]">
                      Service {service.number}
                    </span>

                    <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl border-2 border-black bg-white text-[#fe0100] shadow-[4px_4px_0_#000] transition-all duration-300 group-hover:-rotate-6 group-hover:bg-[#fe0100] group-hover:text-white">
                      <service.icon size={23} />
                    </div>

                    <div className="absolute bottom-4 right-4 rounded-lg border-2 border-black bg-[#ffea00] px-3 py-1 text-xs font-black text-black shadow-[3px_3px_0_#000]">
                      EXPLORE
                    </div>

                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-1 flex-col p-4 sm:p-5">

                    <h3 className="text-lg font-black leading-snug text-slate-950 transition group-hover:text-[#fe0100] sm:text-xl">
                      {service.title}
                    </h3>

                    <p className="mt-3 flex-1 text-sm font-medium leading-6 text-slate-600">
                      {service.desc}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t-2 border-dashed border-slate-200 pt-4">

                      <span className="text-xs font-black uppercase tracking-wide text-slate-700 transition group-hover:text-[#fe0100]">
                        Explore Service
                      </span>

                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-black bg-[#ffea00] text-black shadow-[3px_3px_0_#000] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#fe0100] group-hover:text-white">
                        <ArrowRight size={18} />
                      </span>

                    </div>

                  </div>
                </Link>
              ))}

            </div>
          </div>
        </div>

        {/* CONNECTED APPROACH */}
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10">

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

            {/* LEFT CONTENT */}
            <div>

              <span className="inline-flex items-center gap-2 rounded-lg border-2 border-black bg-[#fe0100] px-4 py-2 text-xs font-black uppercase tracking-widest text-white shadow-[4px_4px_0_#000]">
                <Zap size={15} />
                One Connected Approach
              </span>

              <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                More than individual services.
                <span className="mt-2 block text-[#fe0100]">
                  A connected digital strategy.
                </span>
              </h2>

              <p className="mt-6 text-base font-medium leading-8 text-slate-600">
                Your brand's website, content, advertising, and social
                presence all contribute to how customers discover and
                experience your business. We help bring these elements
                together around your objectives.
              </p>

              <Link
                to="/contact"
                className="group mt-8 inline-flex items-center gap-3 rounded-xl border-2 border-black bg-[#ffea00] px-6 py-3.5 text-sm font-black uppercase text-black shadow-[5px_5px_0_#000] transition-all duration-300 hover:-translate-y-1 hover:bg-[#fe0100] hover:text-white hover:shadow-[7px_7px_0_#000]"
              >
                Let's Plan Your Strategy
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

            </div>

            {/* APPROACH CARDS */}
            <div className="grid gap-5 sm:grid-cols-2">

              {approach.map((item, index) => (
                <div
                  key={item.title}
                  className={`group rounded-2xl border-2 border-black p-6 shadow-[6px_6px_0_#000] transition-all duration-300 hover:-translate-y-2 hover:shadow-[9px_9px_0_#fe0100] ${
                    index === 0
                      ? "bg-[#ffea00]"
                      : index === 2
                        ? "bg-[#fe0100] text-white"
                        : "bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-black bg-white text-[#fe0100] shadow-[3px_3px_0_#000] transition group-hover:-rotate-6">
                      <item.icon size={23} />
                    </div>

                    <span className="text-3xl font-black opacity-20">
                      {item.number}
                    </span>

                  </div>

                  <h3 className="mt-6 text-lg font-black uppercase">
                    {item.title}
                  </h3>

                  <p
                    className={`mt-3 text-sm font-semibold leading-6 ${
                      index === 2 ? "text-white/90" : "text-slate-700"
                    }`}
                  >
                    {item.desc}
                  </p>

                  <div className="mt-5 h-1.5 w-10 rounded-full bg-black transition-all duration-300 group-hover:w-20" />

                </div>
              ))}

            </div>
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="px-5 pb-16 sm:px-8 sm:pb-24 lg:px-10">

          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-4xl border-2 border-black bg-slate-950 px-6 py-12 shadow-[9px_9px_0_#fe0100] sm:px-10 sm:py-16 lg:px-16 lg:shadow-[14px_14px_0_#fe0100]">

            {/* DECORATION */}
            <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-[#fe0100]/25 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-red-600/10 blur-3xl" />

            <div className="pointer-events-none absolute right-10 top-10 hidden h-16 w-16 rotate-12 border-4 border-white/10 lg:block" />

            <div className="relative flex flex-col items-start justify-between gap-9 lg:flex-row lg:items-center">

              <div className="max-w-2xl">

                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-widest text-red-300">
                  <span className="h-2 w-2 rounded-full bg-[#fe0100]" />
                  Let's Work Together
                </span>

                <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Have a project in mind?
                  <span className="mt-2 block text-[#ffea00]">
                    Let's make it happen.
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-sm font-medium leading-7 text-slate-300 sm:text-base">
                  Tell us about your business, your goals, and what you'd
                  like to achieve. Let's explore the right digital solution
                  for you.
                </p>

              </div>

              <Link
                to="/contact"
                className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-xl border-2 border-black bg-[#fe0100] px-7 py-4 text-sm font-black uppercase text-white shadow-[0_7px_0_#ffea00] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ffea00] hover:text-black hover:shadow-[0_10px_0_#ffea00] active:translate-y-1 active:shadow-none sm:px-9 sm:py-5"
              >
                Start a Project
                <ArrowRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
