import {
  Sparkles,
  Zap,
  Star,
  ShieldCheck,
  Award,
  ArrowUpRight,
} from "lucide-react";

import Brand1 from "../icons/ather.png";
import Brand2 from "../icons/toyota.png";
import Brand3 from "../icons/honda.png";
import Brand4 from "../icons/ezyloan.png";
import Brand5 from "../icons/apollo.png";

const brands = [
  { name: "Ather", logo: Brand1, tag: "EV Mobility" },
  { name: "Toyota", logo: Brand2, tag: "Automotive" },
  { name: "Honda BigWing", logo: Brand3, tag: "Premium Moto" },
  { name: "Ezy Loan", logo: Brand4, tag: "Fintech" },
  { name: "Apollo", logo: Brand5, tag: "Healthcare" },
];

const BrandsCarousel = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#f9f6ef] py-16 sm:py-20 lg:py-24">

      <style>{`
        @keyframes brands-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes brand-float {
          0%, 100% { transform: translateY(0) rotateX(2deg); }
          50% { transform: translateY(-9px) rotateX(0deg); }
        }

        @keyframes brand-orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .brands-marquee-track {
          display: flex;
          width: max-content;
          animation: brands-marquee 35s linear infinite;
          will-change: transform;
        }

        .brands-marquee-track:hover {
          animation-play-state: paused;
        }

        .brand-3d-card {
          transform-style: preserve-3d;
          perspective: 1000px;
          transition: transform 500ms ease, box-shadow 500ms ease;
        }

        .brand-3d-card:hover {
          transform: translateY(-12px) rotateX(4deg) rotateY(-3deg);
          box-shadow: 0 30px 55px rgba(15, 23, 42, 0.14);
        }

        .brand-logo-panel {
          transform: translateZ(22px);
          transition: transform 400ms ease;
        }

        .brand-3d-card:hover .brand-logo-panel {
          transform: translateZ(38px) scale(1.02);
        }

        .brand-float {
          animation: brand-float 6s ease-in-out infinite;
        }

        @media (max-width: 639px) {
          .brands-marquee-track {
            animation-duration: 28s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .brands-marquee-track,
          .brand-float {
            animation: none !important;
          }
        }
      `}</style>

      {/* BACKGROUND DECORATIONS */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-red-200/40 blur-[100px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-orange-100/70 blur-[100px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(#0f172a 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />

        <div className="absolute right-[12%] top-20 h-28 w-28 rounded-full border border-red-300/30" />
        <div className="absolute right-[14%] top-24 h-20 w-20 rounded-full border border-red-300/20" />
      </div>

      {/* SECTION HEADING */}
      <div className="relative mx-auto mb-12 max-w-7xl px-5 sm:px-8 lg:mb-16 lg:px-12">

        <div className="grid gap-8 md:grid-cols-2 md:items-end">

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#fe0100] shadow-sm sm:text-sm">
              <Star size={15} className="fill-[#fe0100]" />
              Trusted by industry leaders
            </div>

            <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Great brands.
              <br />
              <span className="text-[#fe0100]">Stronger connections.</span>
            </h2>

            <div className="mt-5 h-1.5 w-20 rounded-full bg-[#fe0100]" />
          </div>

          <div className="md:justify-self-end md:max-w-md">
            <p className="text-base leading-8 text-slate-600 sm:text-lg">
              Helping businesses build a stronger digital presence through
              creative strategy, engaging content, and thoughtful digital
              experiences.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm">
                <Zap size={15} className="text-[#fe0100]" />
                Creative partnerships
              </span>

              <span className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm">
                <Award size={15} className="text-[#fe0100]" />
                Across industries
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3D MARQUEE */}
      <div className="relative w-full">

        {/* Section Top Line */}
        <div className="mx-auto mb-8 h-px max-w-7xl bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

        {/* Edge Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-12 bg-gradient-to-r from-[#f9f6ef] to-transparent sm:w-24 lg:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-12 bg-gradient-to-l from-[#f9f6ef] to-transparent sm:w-24 lg:w-40" />

        <div className="group overflow-hidden py-8">
          <div className="brands-marquee-track group-hover:[animation-play-state:paused]">

            {[...brands, ...brands].map((brand, index) => (
              <article
                key={`${brand.name}-${index}`}
                className="w-[225px] shrink-0 px-3 sm:w-[275px] sm:px-4 lg:w-[310px]"
              >
                <div className="brand-3d-card brand-float relative rounded-[22px] border border-white bg-white/90 p-3 shadow-[0_15px_35px_rgba(15,23,42,0.09)] backdrop-blur-xl sm:p-4">

                  {/* Decorative Background Glow */}
                  <div className="pointer-events-none absolute -right-4 -top-4 h-28 w-28 rounded-full bg-red-100/70 blur-2xl" />

                  {/* Card Header */}
                  <div className="relative flex items-center justify-between px-2 py-2">
                    <span className="rounded-full border border-red-100 bg-red-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#fe0100] sm:text-xs">
                      {brand.tag}
                    </span>

                    <span className="text-xs font-bold tracking-widest text-slate-300">
                      {String((index % brands.length) + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* 3D Logo Display */}
                  <div className="brand-logo-panel relative mt-3 flex h-32 items-center justify-center overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-br from-white via-slate-50 to-red-50/50 p-5 shadow-inner sm:h-36 lg:h-40">

                    <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-red-100/70" />
                    <div className="absolute -bottom-12 -left-8 h-32 w-32 rounded-full border border-slate-200/70" />

                    <div className="absolute inset-x-6 bottom-3 h-4 rounded-full bg-slate-900/10 blur-md" />

                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      loading="lazy"
                      draggable={false}
                      className="relative z-10 max-h-16 w-auto max-w-[85%] object-contain drop-shadow-[0_8px_8px_rgba(15,23,42,0.12)] transition-transform duration-500 group-hover:scale-105 sm:max-h-20 lg:max-h-24"
                    />

                    <div className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border border-white bg-white/90 text-slate-400 shadow-sm">
                      <ArrowUpRight size={14} />
                    </div>
                  </div>

                  {/* Brand Footer */}
                  <div className="relative mt-4 flex items-center justify-between px-2 pb-2">
                    <div>
                      <h3 className="text-base font-extrabold tracking-tight text-slate-900 sm:text-lg">
                        {brand.name}
                      </h3>
                      <p className="mt-1 text-[11px] font-medium text-slate-500 sm:text-xs">
                        Industry partner
                      </p>
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 text-slate-400 shadow-inner transition-all duration-300 group-hover:text-[#fe0100]">
                      <ShieldCheck size={18} />
                    </div>
                  </div>

                  {/* Bottom Accent */}
                  <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-1/4 rounded-full bg-gradient-to-r from-red-700 to-[#fe0100] transition-all duration-500 group-hover:w-full" />
                  </div>

                  {/* 3D Side Shadow */}
                  <div className="absolute -bottom-1 left-4 right-4 -z-10 h-5 rounded-full bg-slate-900/10 blur-lg" />
                </div>
              </article>
            ))}

          </div>
        </div>

        {/* Bottom Line */}
        <div className="mx-auto mt-5 h-px max-w-7xl bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      </div>

      {/* BOTTOM SUPPORTING CONTENT */}
      <div className="relative mx-auto mt-10 max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-4 rounded-2xl border border-white bg-white/70 p-5 shadow-sm backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:p-6">

          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[#fe0100]">
              <Sparkles size={20} />
            </div>

            <div>
              <p className="text-sm font-extrabold text-slate-900">
                Different industries. Shared ambition.
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Building meaningful digital experiences together.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
            <span className="h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.4)]" />
            Creativity meets technology
          </div>
        </div>
      </div>

    </section>
  );
};

export default BrandsCarousel;
