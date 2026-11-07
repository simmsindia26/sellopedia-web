import {
  ArrowRight,
  Briefcase,
  Heart,
  Rocket,
  Coffee,
  Users,
  Sparkles,
  ExternalLink,
} from "lucide-react";

const CAREERS_URL = "https://career.sellopedia.in/";

const benefits = [
  {
    icon: Rocket,
    title: "Growth Opportunities",
    desc: "Keep learning, develop your skills, and take on new challenges.",
  },
  {
    icon: Coffee,
    title: "Flexible Work Culture",
    desc: "Contribute ideas and collaborate in a supportive environment.",
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    desc: "Build meaningful work habits while making room for life beyond work.",
  },
  {
    icon: Users,
    title: "Collaborative Team",
    desc: "Work with creative people who value teamwork and fresh perspectives.",
  },
];

const Careers = () => {
  const openCareers = () => {
    window.location.href = CAREERS_URL;
  };

  return (
    <section className="overflow-hidden bg-white text-slate-900">
      {/* Hero */}
      <div className="relative">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-red-50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-0 h-72 w-72 rounded-full bg-orange-50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 text-center sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-sm font-semibold text-[#fe0100]">
            <Sparkles size={17} />
            Careers at Sellopedia
          </div>

          <h1 className="mx-auto mt-7 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-7xl">
            Build your future with{" "}
            <span className="text-[#fe0100]">Sellopedia.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Join a team of creative thinkers, marketers, designers, developers,
            and strategists working together to help brands grow in the digital
            world.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={openCareers}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#fe0100] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:-translate-y-0.5 hover:bg-red-700"
            >
              Explore Career Opportunities
              <ArrowRight size={18} />
            </button>

            <a
              href={CAREERS_URL}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-4 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              Visit Careers Portal
              <ExternalLink size={17} />
            </a>
          </div>

          <p className="mt-4 text-sm text-slate-500">
            You'll be redirected to our dedicated careers website.
          </p>
        </div>
      </div>

      {/* Why join Sellopedia */}
      <div className="border-y border-slate-100 bg-slate-50/70">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-10">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#fe0100]">
              Why Sellopedia?
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Creativity meets growth.
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              We believe great work happens when talented people are empowered
              to innovate, collaborate, and grow. At Sellopedia, you'll have
              opportunities to contribute to projects, exchange ideas, and
              develop your professional skills.
            </p>

            <button
              type="button"
              onClick={openCareers}
              className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#fe0100] transition hover:gap-3"
            >
              Find your next opportunity
              <ArrowRight size={17} />
            </button>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-8 sm:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#fe0100]/20 blur-3xl" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-red-300">
                <Briefcase size={27} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
                Your next chapter starts here.
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                Explore available positions, review role details, and submit
                your application through our dedicated careers portal.
              </p>

              <a
                href={CAREERS_URL}
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#fe0100] px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Go to Careers Portal
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#fe0100]">
            The Experience
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            A place to learn and contribute
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Discover the values that shape our approach to working together.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-slate-900/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-[#fe0100]">
                <benefit.icon size={24} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                {benefit.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 text-center sm:px-10 sm:py-16">
          <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-[#fe0100]/20 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to join our team?
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-300">
              Visit our careers portal to explore openings and apply for a role
              that matches your interests and skills.
            </p>

            <a
              href={CAREERS_URL}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-[#fe0100] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-red-950/30 transition hover:-translate-y-0.5 hover:bg-red-700"
            >
              View Openings
              <ArrowRight size={18} />
            </a>

            <p className="mt-4 text-xs text-slate-400">
              career.sellopedia.in
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;