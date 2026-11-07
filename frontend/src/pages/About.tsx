import {
  ArrowUpRight,
  Target,
  Lightbulb,
  HeartHandshake,
  Code2,
  Megaphone,
  Palette,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

const services = [
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    description:
      "Content planning, creative posts, reels, and campaigns that help your brand connect with the right audience.",
  },
  {
    icon: Code2,
    title: "Website Development",
    description:
      "Fast, responsive, and modern websites designed to showcase your business and convert visitors into customers.",
  },
  {
    icon: Palette,
    title: "Branding & Creative Design",
    description:
      "Distinctive brand identities, advertising creatives, and visual experiences that make your business memorable.",
  },
];

const values = [
  {
    number: "01",
    title: "Strategy First",
    description:
      "We understand your business, audience, and goals before recommending the right digital solutions.",
  },
  {
    number: "02",
    title: "Creative Thinking",
    description:
      "We combine fresh ideas with thoughtful design to help your brand stand out naturally.",
  },
  {
    number: "03",
    title: "Built for Growth",
    description:
      "From your first website to your next campaign, we focus on solutions that grow with your business.",
  },
];

const process = [
  ["01", "Discover", "We learn about your business, audience, and objectives."],
  ["02", "Plan", "We create a clear strategy tailored to your needs."],
  ["03", "Create", "Our team brings the ideas to life through design and development."],
  ["04", "Grow", "We launch, review performance, and improve over time."],
];

const About = () => {
  return (
    <main className="w-full overflow-hidden bg-white text-slate-900">

      {/* HERO */}
      <section className="relative px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">

          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-sm font-semibold text-[#fe0100]">
              <span className="h-2 w-2 rounded-full bg-[#fe0100]" />
              Your creative digital growth partner
            </div>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Good ideas deserve
              <span className="text-[#fe0100]"> great execution.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              At Set Hai Yar, we help businesses build a stronger digital
              presence through thoughtful branding, social media marketing,
              and modern website development.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#fe0100] px-6 py-3.5 font-bold text-white shadow-lg shadow-red-500/20 transition duration-300 hover:-translate-y-1 hover:bg-red-700"
              >
                Let's work together
                <ArrowUpRight size={19} />
              </Link>

              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-800 transition duration-300 hover:-translate-y-1 hover:border-slate-400 hover:bg-slate-50"
              >
                Explore our work
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
              {[
                "Creative solutions",
                "Business-focused approach",
                "Personalised service",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={17} className="shrink-0 text-[#fe0100]" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* VISUAL PANEL */}
          <div className="relative">
            <div className="absolute -right-3 -top-3 h-28 w-28 rounded-3xl bg-red-100 sm:-right-5 sm:-top-5" />

            <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-br from-red-50 to-slate-100 p-5 sm:p-8">
              <div className="rounded-2xl border border-white bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.12)] sm:p-7">

                <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                  <div>
                    <p className="text-sm text-slate-500">
                      The creative studio
                    </p>
                    <h2 className="mt-1 text-xl font-extrabold tracking-tight text-slate-950">
                      Ideas into impact.
                    </h2>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fe0100] text-xl font-extrabold text-white shadow-lg shadow-red-500/20">
                    SH
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-4">
                  <div className="flex min-h-36 flex-col justify-between rounded-xl bg-[#fe0100] p-4 text-white shadow-lg shadow-red-500/20 sm:min-h-44 sm:p-5">
                    <Megaphone size={25} />
                    <div>
                      <p className="text-lg font-bold text-white">
                        Social Media
                      </p>
                      <p className="mt-1 text-sm text-red-100">
                        Content that connects
                      </p>
                    </div>
                  </div>

                  <div className="flex min-h-36 flex-col justify-between rounded-xl bg-slate-900 p-4 text-white shadow-lg sm:min-h-44 sm:p-5">
                    <Code2 size={25} />
                    <div>
                      <p className="text-lg font-bold text-white">
                        Web Design
                      </p>
                      <p className="mt-1 text-sm text-slate-300">
                        Experiences that work
                      </p>
                    </div>
                  </div>

                  <div className="col-span-2 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-bold text-slate-950">
                          Your next big idea
                        </p>
                        <p className="mt-1 text-sm leading-6 text-slate-500">
                          Let's turn your business goals into something real.
                        </p>
                      </div>

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#fe0100] shadow-sm">
                        <ArrowUpRight size={22} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-center text-sm font-medium text-slate-500">
                Strategy. Creativity. Technology.
              </p>
            </div>

            <div className="absolute -bottom-4 -left-3 -z-0 h-16 w-16 rounded-2xl bg-red-100 sm:-bottom-5 sm:-left-5" />
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="border-y border-slate-100 bg-slate-50 px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16">

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#fe0100]">
              Who we are
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl">
              A small idea can build a big brand.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              Set Hai Yar is a creative digital agency helping businesses
              present themselves better, reach more people, and make the most
              of their online presence.
            </p>

            <p>
              We bring social media, website development, branding, and digital
              strategy together under one roof. Whether you're starting
              something new or improving an established business, we focus on
              understanding what you need and building solutions around it.
            </p>

            <p>
              No unnecessary complexity. Just clear communication, considered
              creative work, and technology that serves a purpose.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#fe0100]">
                What we do
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Everything your brand needs to move forward.
              </h2>
            </div>

            <p className="max-w-md leading-7 text-slate-600">
              Creative thinking and practical digital solutions, designed
              around your business.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-2 hover:border-red-200 hover:shadow-xl hover:shadow-slate-900/5 sm:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-[#fe0100] transition duration-300 group-hover:bg-[#fe0100] group-hover:text-white">
                  <Icon size={24} />
                </div>

                <h3 className="mt-6 text-xl font-extrabold text-slate-950">
                  {title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {description}
                </p>

                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition hover:text-[#fe0100]"
                >
                  Discuss your project
                  <ArrowUpRight size={17} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="bg-slate-950 px-5 py-16 text-white sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:gap-16">

          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-red-400">
              <Target size={25} />
            </div>

            <h2 className="mt-6 text-2xl font-extrabold text-white sm:text-3xl">
              Our mission
            </h2>

            <p className="mt-4 max-w-xl leading-8 text-slate-300">
              To make quality digital services accessible to businesses of
              every size, helping them communicate clearly, build trust, and
              create meaningful connections with their customers.
            </p>
          </div>

          <div className="border-t border-white/15 pt-8 md:border-l md:border-t-0 md:pl-12 md:pt-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-red-400">
              <Lightbulb size={25} />
            </div>

            <h2 className="mt-6 text-2xl font-extrabold text-white sm:text-3xl">
              Our vision
            </h2>

            <p className="mt-4 max-w-xl leading-8 text-slate-300">
              To become a trusted creative and technology partner for growing
              businesses, known for thoughtful work, honest collaboration, and
              digital experiences that make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#fe0100]">
              Why Set Hai Yar
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Good work starts with understanding people.
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              We believe the best digital solutions come from listening first,
              collaborating closely, and paying attention to the details.
            </p>
          </div>

          <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
            {values.map((item) => (
              <div
                key={item.number}
                className="grid gap-3 py-7 sm:grid-cols-[80px_1fr_1.3fr] sm:items-center sm:gap-8"
              >
                <span className="text-sm font-bold text-[#fe0100]">
                  {item.number}
                </span>

                <h3 className="text-xl font-extrabold text-slate-950">
                  {item.title}
                </h3>

                <p className="leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-slate-50 px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#fe0100]">
              How we work
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Simple process. Thoughtful execution.
            </h2>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map(([number, title, description]) => (
              <div key={number}>
                <span className="text-sm font-bold text-[#fe0100]">
                  STEP {number}
                </span>

                <h3 className="mt-4 text-xl font-extrabold text-slate-950">
                  {title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 overflow-hidden rounded-3xl bg-[#fe0100] p-7 text-white shadow-[0_20px_50px_rgba(254,1,0,0.16)] sm:p-12 lg:flex-row lg:items-center lg:p-16">

          {/* Background Decoration */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 left-1/3 h-48 w-48 rounded-full bg-black/10 blur-3xl" />

          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-2 text-sm font-semibold text-red-100">
              <HeartHandshake size={19} />
              Let's build something meaningful
            </div>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to take your brand to the next level?
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-red-100">
              Tell us about your business and what you have in mind. Let's
              figure out the right next step together.
            </p>
          </div>

          <Link
            to="/contact"
            className="relative z-10 inline-flex min-h-14 w-full shrink-0 items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 text-sm font-extrabold shadow-[0_6px_0_rgba(120,0,0,0.2)] transition duration-300 hover:-translate-y-1 hover:bg-red-50 hover:shadow-[0_9px_0_rgba(120,0,0,0.2)] active:translate-y-1 active:shadow-none sm:w-auto"
            style={{ color: "#fe0100" }}
          >
            Start a conversation
            <ArrowUpRight size={19} style={{ color: "#fe0100" }} />
          </Link>

        </div>
      </section>

    </main>
  );
};

export default About;
