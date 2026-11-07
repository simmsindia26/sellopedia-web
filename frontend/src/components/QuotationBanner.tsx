import Character from "../icons/gyq.png";

import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Zap,
  MessageCircle,
} from "lucide-react";

import { Link } from "react-router-dom";

const QuotationBanner = () => {
  const features = [
    "Free Project Consultation",
    "Custom Pricing Strategy",
    "Fast Delivery Timeline",
    "Creative Growth Solutions",
  ];

  return (
    <section className="relative isolate overflow-hidden bg-[#f9f6ef] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">

      {/* 3D ANIMATIONS */}
      <style>{`
        @keyframes quote-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(2deg); }
        }

        @keyframes quote-glow {
          0%, 100% { opacity: 0.4; transform: scale(0.95); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }

        .quote-character {
          animation: quote-float 6s ease-in-out infinite;
          transform-style: preserve-3d;
        }

        .quote-float-card {
          animation: quote-float 5s ease-in-out infinite;
        }

        .quote-glow {
          animation: quote-glow 5s ease-in-out infinite;
        }

        .quote-panel {
          transform-style: preserve-3d;
        }

        @media (prefers-reduced-motion: reduce) {
          .quote-character,
          .quote-float-card,
          .quote-glow {
            animation: none !important;
          }
        }
      `}</style>

      {/* BACKGROUND DECORATIONS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-40 top-10 h-[450px] w-[450px] rounded-full bg-red-200/40 blur-[110px]" />
        <div className="absolute -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-orange-100/70 blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(#0f172a 1px, transparent 1px)",
            backgroundSize: "25px 25px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* MAIN 3D CONTAINER */}
        <div className="quote-panel relative overflow-hidden rounded-[28px] border border-white bg-white shadow-[0_25px_80px_rgba(15,23,42,0.12)] lg:rounded-[36px]">

          {/* Top Accent */}
          <div className="absolute inset-x-0 top-0 z-20 h-1.5 bg-gradient-to-r from-red-800 via-[#fe0100] to-orange-400" />

          <div className="grid items-stretch lg:grid-cols-2">

            {/* LEFT: CHARACTER VISUAL */}
            <div className="relative flex min-h-[370px] items-center justify-center overflow-hidden bg-gradient-to-br from-red-50 via-[#fff5f0] to-orange-50 px-5 py-14 sm:min-h-[460px] sm:px-10 lg:min-h-[600px]">

              {/* Large 3D Orb */}
              <div className="quote-glow absolute left-1/2 top-1/2 h-[290px] w-[290px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-200/50 blur-[55px] sm:h-[400px] sm:w-[400px]" />

              {/* Orbital Rings */}
              <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rotate-[-20deg] rounded-[40%] border border-red-300/60 sm:h-[380px] sm:w-[380px]" />

              <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rotate-[25deg] rounded-[35%] border border-orange-300/50 sm:h-[310px] sm:w-[310px]" />

              {/* Decorative 3D Shapes */}
              <div className="quote-float-card absolute left-[10%] top-[14%] z-20 flex h-12 w-12 items-center justify-center rounded-2xl border border-white bg-white text-[#fe0100] shadow-[0_12px_25px_rgba(15,23,42,0.12)] sm:h-14 sm:w-14">
                <Sparkles className="h-6 w-6" />
              </div>

              <div className="absolute right-[12%] top-[19%] h-7 w-7 rotate-45 rounded-lg bg-[#fe0100] shadow-[0_10px_20px_rgba(254,1,0,0.3)] sm:h-9 sm:w-9" />

              <div className="quote-float-card absolute bottom-[23%] right-[9%] z-20 flex h-12 w-12 items-center justify-center rounded-2xl border border-white bg-white text-green-600 shadow-[0_12px_25px_rgba(15,23,42,0.12)] sm:h-14 sm:w-14">
                <ShieldCheck className="h-6 w-6" />
              </div>

              <div className="absolute bottom-[17%] left-[14%] h-5 w-5 rounded-full bg-orange-400 shadow-lg" />

              {/* Character Shadow */}
              <div className="absolute bottom-[13%] left-1/2 h-8 w-52 -translate-x-1/2 rounded-full bg-slate-900/15 blur-xl sm:w-72" />

              {/* Character */}
              <img
                src={Character}
                alt="Get a quotation for your project"
                loading="lazy"
                draggable={false}
                className="quote-character relative z-10 max-h-[300px] w-auto max-w-[90%] object-contain drop-shadow-[0_25px_25px_rgba(15,23,42,0.18)] sm:max-h-[390px] lg:max-h-[460px]"
              />

              {/* Floating Quote Card */}
              <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-[0_12px_35px_rgba(15,23,42,0.13)] backdrop-blur-xl sm:bottom-8 sm:px-5">

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-50 text-[#fe0100]">
                  <MessageCircle className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Let's make it happen
                  </p>
                  <p className="text-xs font-extrabold text-slate-900 sm:text-sm">
                    Your idea starts here.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT: CONTENT */}
            <div className="relative flex flex-col justify-center overflow-hidden px-5 py-12 sm:px-9 sm:py-14 lg:px-12 lg:py-16 xl:px-16">

              {/* Content Background Glow */}
              <div className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-red-50 blur-[80px]" />

              <div className="relative z-10">

                {/* Badge */}
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#fe0100] sm:text-sm">
                  <Sparkles className="h-4 w-4" />
                  Free Consultation
                </div>

                {/* Heading */}
                <h2 className="text-3xl font-extrabold leading-[1.12] tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                  Have a project
                  <br />
                  in mind?
                  <span className="mt-2 block text-[#fe0100]">
                    Let's talk about it.
                  </span>
                </h2>

                <div className="mt-6 h-1.5 w-16 rounded-full bg-[#fe0100]" />

                {/* Description */}
                <p className="mt-6 max-w-xl text-sm leading-8 text-slate-600 sm:text-base">
                  Whether you need branding, a high-performing website,
                  social media marketing, SEO, or performance campaigns,
                  we'll help you find the right solution for your business.
                </p>

                {/* FEATURES */}
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {features.map((item, index) => (
                    <div
                      key={item}
                      className="group flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/80 p-3.5 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:bg-white hover:shadow-lg hover:shadow-red-900/5"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-[#fe0100] shadow-sm transition-colors group-hover:bg-[#fe0100] group-hover:text-white">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>

                      <span className="text-xs font-bold leading-5 text-slate-700 sm:text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-9">
                  <Link
                    to="/contact"
                    className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#fe0100] px-7 py-4 text-sm font-bold text-white shadow-[0_6px_0_#a90000] transition-all duration-300 hover:-translate-y-1 hover:bg-red-600 hover:shadow-[0_9px_0_#a90000] active:translate-y-1 active:shadow-none sm:w-auto sm:px-9"
                  >
                    Request a Quote
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  <div className="mt-5 flex items-center gap-2 text-xs leading-5 text-slate-500">
                    <Zap className="h-4 w-4 shrink-0 text-[#fe0100]" />
                    Tell us what you need. We'll discuss the next steps.
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuotationBanner;
