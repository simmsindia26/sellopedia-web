import {
  ArrowRight,
  Rocket,
  Target,
  Lightbulb,
  Sparkles,
  Zap,
  Award,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const cards = [
    {
      icon: Rocket,
      title: "Growth Focused",
      desc: "Every campaign is built around business goals, sustainable growth, and meaningful returns.",
      badge: "01 / SCALE",
    },
    {
      icon: Target,
      title: "Results Driven",
      desc: "From lead generation to brand awareness, we focus on outcomes that matter.",
      badge: "02 / CONVERT",
    },
    {
      icon: Lightbulb,
      title: "Creative Strategy",
      desc: "We combine creativity, technology, and marketing to help brands stand out.",
      badge: "03 / INNOVATE",
    },
  ];

  const stats = [
    { number: "250+", label: "Projects Completed" },
    { number: "250+", label: "Happy Clients" },
    { number: "8+", label: "Years Experience" },
    { number: "24/7", label: "Dedicated Support" },
  ];

  const highlights = [
    "High-Performance Marketing",
    "Tailored Web Engineering",
    "Brand Identity & Design",
  ];

  return (
    <section
      className="relative isolate overflow-hidden bg-white px-5 py-16 text-slate-900 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      {/* Subtle background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-16 -z-10 h-80 w-80 rounded-full bg-red-50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 -z-10 h-80 w-80 rounded-full bg-slate-50 blur-3xl"
      />

      <div className="mx-auto w-full max-w-7xl">
        {/* Section heading */}
        <div className="mb-10 flex flex-col gap-4 sm:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-[#fe0100] sm:text-sm">
              <Sparkles size={15} />
              About Sellopedia
            </div>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              We engineer{" "}
              <span className="text-[#fe0100]">digital growth.</span>
            </h2>
          </div>

          <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
            <Zap size={17} className="text-[#fe0100]" />
            Full-Service Digital Agency
          </div>
        </div>

        {/* Main About layout */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          {/* About content */}
          <div className="min-w-0 lg:col-span-7">
            <p className="text-lg font-medium leading-8 text-slate-800 sm:text-xl sm:leading-9">
              Sellopedia is a creative digital agency dedicated to helping
              businesses expand through strategic social media marketing,
              performance marketing, SEO, content strategy, creative design,
              and web development.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Our mission is to help businesses build distinctive brands,
              attract relevant audiences, generate qualified leads, and create
              polished digital platforms that support meaningful conversions.
              We bring creativity, technology, and strategy together to create
              solutions tailored to your business.
            </p>

            {/* Service highlights */}
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-50 text-[#fe0100]">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-sm font-medium text-slate-700 sm:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-9">
              <Link
                to="/about"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#fe0100] px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 sm:px-7"
              >
                Discover More
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* Feature cards */}
          <div className="flex min-w-0 flex-col gap-4 lg:col-span-5">
            {cards.map((card) => {
              const Icon = card.icon;

              return (
                <article
                  key={card.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg hover:shadow-slate-900/[0.04] sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[#fe0100] transition-colors duration-200 group-hover:bg-[#fe0100] group-hover:text-white">
                      <Icon size={24} strokeWidth={1.8} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        {card.badge}
                      </p>

                      <h3 className="mt-1.5 text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
                        {card.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {card.desc}
                      </p>
                    </div>

                    <ArrowRight
                      size={17}
                      className="mt-1 shrink-0 text-slate-300 transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#fe0100]"
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-14 border-t border-slate-200 pt-8 sm:mt-20 sm:pt-10">
          <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Our journey in numbers
            </h3>
            <p className="text-sm text-slate-500">
              Building brands through creativity and technology.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 transition-colors duration-200 hover:border-red-200 hover:bg-red-50/40 sm:p-6 lg:p-7"
              >
                <div className="mb-4 h-1 w-9 rounded-full bg-[#fe0100]" />

                <p className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                  {item.number}
                </p>

                <p className="mt-2 text-xs font-medium leading-5 text-slate-600 sm:text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom callout */}
        <div className="mt-10 flex flex-col gap-5 rounded-2xl bg-slate-950 p-6 text-white sm:p-8 md:flex-row md:items-center md:justify-between lg:mt-14 lg:p-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-sm font-medium text-red-400">
              <Award size={18} />
              Your next chapter starts here
            </div>

            <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
              Let's build something meaningful together.
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
              From a stronger online presence to a more effective digital
              strategy, we're ready to help bring your ideas to life.
            </p>
          </div>

          <Link
            to="/contact"
            className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#fe0100] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700"
          >
            Start a Project
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
