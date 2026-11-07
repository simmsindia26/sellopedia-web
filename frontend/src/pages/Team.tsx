import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

/* IMAGES */
import founderImg from "../icons/deb1.png";
import coFounderImg from "../icons/rajat1.png";

const teamMembers = [
  {
    name: "Rajat Satapathy",
    role: "Co-Founder",
    image: coFounderImg,
    bio: "Leading strategy, operations, and creative execution for modern brands and high-converting digital experiences.",
    linkedin: "",
    instagram: "",
    email: "",
  },
  {
    name: "Debsarthi Ashe",
    role: "Co-Founder",
    image: founderImg,
    bio: "Visionary behind Sellopedia, focused on digital growth, branding, and performance-driven creative systems.",
    linkedin: "",
    instagram: "",
    email: "",
  },
];

const focusAreas = [
  "Brand Strategy",
  "Creative Execution",
  "Performance Marketing",
  "Digital Growth",
];

const Team = () => {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* HERO */}
      <section className="px-5 pb-14 pt-20 sm:px-8 sm:pb-20 sm:pt-28 lg:px-12 lg:pt-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-sm font-semibold text-[#fe0100]">
                <Sparkles size={16} />
                Meet the Team
              </div>

              <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                The people behind
                <span className="block text-[#fe0100]">Sellopedia.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Meet the leadership building thoughtful brands, effective
                campaigns, and digital experiences that help businesses grow.
              </p>
            </div>

            <div className="border-l-2 border-[#fe0100] py-1 pl-5 lg:mb-2">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                Our approach
              </p>
              <p className="mt-3 text-lg font-medium leading-7 text-slate-800 sm:text-xl">
                A shared vision, practical thinking, and creative work focused
                on real business goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MOVING FOCUS STRIP */}
      <section
        aria-label="Our areas of focus"
        className="overflow-hidden border-y border-slate-200 bg-slate-50 py-4"
      >
        <div className="flex w-max animate-team-marquee">
          {[...focusAreas, ...focusAreas].map((area, index) => (
            <div
              key={`${area}-${index}`}
              className="flex items-center gap-7 px-5 sm:gap-10 sm:px-8"
            >
              <span className="whitespace-nowrap text-sm font-semibold text-slate-700 sm:text-base">
                {area}
              </span>
              <span className="h-2 w-2 rounded-full bg-[#fe0100]" />
            </div>
          ))}
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-3 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#fe0100]">
                Meet our leadership
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Built on a shared vision.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-500 sm:text-base">
              Different perspectives, one direction: creating meaningful
              digital experiences for ambitious businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {teamMembers.map((member, index) => (
              <article
                key={member.name}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/60"
              >
                {/* FOUNDER IMAGE */}
                <div className="relative flex h-[330px] items-end justify-center overflow-hidden bg-slate-50 sm:h-[400px] lg:h-[440px]">
                  <div
                    aria-hidden="true"
                    className="absolute left-1/2 top-10 h-52 w-52 -translate-x-1/2 rounded-full bg-red-100/70 blur-3xl transition duration-500 group-hover:bg-red-200/70 sm:h-64 sm:w-64"
                  />

                  <span className="absolute left-5 top-5 z-10 rounded-full border border-slate-200 bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-600 backdrop-blur">
                    {member.role}
                  </span>

                  <span className="absolute right-5 top-5 text-sm font-medium tabular-nums text-slate-400">
                    0{index + 1}
                  </span>

                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="relative z-[1] h-full w-full object-contain object-bottom transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                {/* FOUNDER DETAILS */}
                <div className="p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#fe0100]">
                    {member.role}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                    {member.name}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                    {member.bio}
                  </p>

                  {/* SOCIAL LINKS */}
                  <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on LinkedIn`}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-[#fe0100] hover:bg-red-50 hover:text-[#fe0100]"
                      >
                        <FaLinkedinIn size={16} />
                      </a>
                    )}

                    {member.instagram && (
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on Instagram`}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-[#fe0100] hover:bg-red-50 hover:text-[#fe0100]"
                      >
                        <FaInstagram size={16} />
                      </a>
                    )}

                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        aria-label={`Email ${member.name}`}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-[#fe0100] hover:bg-red-50 hover:text-[#fe0100]"
                      >
                        <Mail size={16} />
                      </a>
                    )}

                    <span className="ml-auto text-xs text-slate-400">
                      Sellopedia Leadership
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-[#fe0100]/20 blur-3xl sm:h-96 sm:w-96"
          />

          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-red-400">
                Let’s work together
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Have an idea?
                <span className="block text-red-400">
                  Let’s bring it to life.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
                Tell us about your business and goals. Let’s find the right way
                to build your next digital experience.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-[#fe0100] px-6 py-4 text-sm font-semibold text-white transition hover:bg-red-700 sm:text-base"
            >
              Talk to Our Team
              <ArrowRight size={19} />
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes team-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .animate-team-marquee {
          animation: team-marquee 30s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-team-marquee {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
};

export default Team;
