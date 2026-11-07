
import {
  ArrowRight,
  Sparkles,
  Globe,
  Palette,
  TrendingUp,
  MousePointer2,
  Code2,
  Megaphone,
  Layers3,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative isolate min-h-[720px] overflow-hidden bg-[#f9f6ef] lg:min-h-[780px]">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full bg-red-100/70 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-orange-100/50 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(#111827 1px, transparent 1px)",
            backgroundSize: "25px 25px",
          }}
        />
      </div>

      <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-12 px-5 py-24 sm:px-8 lg:min-h-[780px] lg:grid-cols-2 lg:gap-8 lg:px-12">

        {/* LEFT CONTENT */}
        <div className="relative z-20 mx-auto w-full max-w-2xl text-center lg:mx-0 lg:text-left">

          {/* Badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-red-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-red-600 shadow-sm sm:text-sm">
            <Sparkles className="h-4 w-4" />
            Creative Digital Agency
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:text-[68px]">
            Ideas Into
            <br />
            <span className="relative inline-block text-[#fe0100]">
              Digital
              <span className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-red-200/70" />
            </span>{" "}
            Impact.
            <br />
            <span className="text-slate-800">We Make It Happen.</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg lg:mx-0">
            We create powerful websites, memorable brand identities, and
            performance-driven digital campaigns that turn your business
            vision into real growth.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <Link
              to="/contact"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-[#fe0100] px-8 py-4 text-sm font-bold text-white shadow-[0_8px_0_#a90000] transition-all duration-300 hover:-translate-y-1 hover:bg-red-600 hover:shadow-[0_10px_0_#a90000] active:translate-y-1 active:shadow-none"
            >
              Let's Get Started
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/portfolio"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-8 py-4 text-sm font-bold text-slate-900 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-500 hover:shadow-lg"
            >
              Explore Our Work
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Trust / Service Highlights */}
          <div className="mt-11 flex flex-wrap items-center justify-center gap-x-7 gap-y-4 text-sm font-semibold text-slate-600 lg:justify-start">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#fe0100]" />
              Strategy
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#fe0100]" />
              Creativity
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#fe0100]" />
              Technology
            </span>
          </div>
        </div>

        {/* RIGHT 3D VISUAL */}
        <div className="relative mx-auto flex h-[430px] w-full max-w-[540px] items-center justify-center sm:h-[520px] lg:h-[590px]">

          {/* 3D Ambient Glow */}
          <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-200/50 blur-[80px] sm:h-[420px] sm:w-[420px]" />

          {/* Rotating Orbital Ring */}
          <div className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rotate-[-20deg] rounded-[45%] border border-dashed border-red-300/70 sm:h-[480px] sm:w-[480px]" />

          <div className="absolute left-1/2 top-1/2 h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 rotate-[30deg] rounded-[40%] border border-slate-300/70 sm:h-[380px] sm:w-[380px]" />

          {/* Main 3D Browser Card */}
          <div className="absolute left-1/2 top-1/2 z-10 w-[290px] -translate-x-1/2 -translate-y-1/2 rotate-[-7deg] transition-transform duration-700 hover:rotate-0 sm:w-[370px] lg:w-[390px]">

            <div className="overflow-hidden rounded-2xl border border-white/80 bg-white shadow-[0_35px_80px_rgba(15,23,42,0.22)]">

              {/* Browser Header */}
              <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>
                <div className="rounded-full bg-white px-5 py-1 text-[9px] font-medium text-slate-400 shadow-sm">
                  yourbrand.com
                </div>
                <Globe className="h-3.5 w-3.5 text-slate-400" />
              </div>

              {/* Website Preview */}
              <div className="relative bg-[#111827] p-5 sm:p-7">
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-red-500/20 blur-3xl" />

                <div className="relative flex items-center justify-between">
                  <div className="text-sm font-extrabold tracking-tight text-white">
                    BRAND<span className="text-red-500">.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="h-1.5 w-7 rounded-full bg-white/40" />
                    <span className="h-1.5 w-7 rounded-full bg-white/40" />
                    <span className="h-1.5 w-7 rounded-full bg-white/40" />
                  </div>
                </div>

                <div className="relative mt-9 grid grid-cols-[1.2fr_0.8fr] items-center gap-3">
                  <div>
                    <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-red-400">
                      Think Different
                    </div>
                    <div className="mt-2 text-2xl font-extrabold leading-[1.05] text-white sm:text-3xl">
                      Create.
                      <br />
                      Inspire.
                      <br />
                      <span className="text-red-500">Grow.</span>
                    </div>
                    <div className="mt-4 h-2 w-24 rounded-full bg-white/20" />
                    <div className="mt-2 h-2 w-16 rounded-full bg-white/10" />
                    <div className="mt-5 inline-flex rounded-md bg-red-500 px-3 py-2 text-[9px] font-bold text-white">
                      Discover More
                    </div>
                  </div>

                  {/* Abstract 3D Shape */}
                  <div className="relative flex aspect-square items-center justify-center">
                    <div className="absolute h-32 w-32 rotate-45 rounded-[28px] bg-gradient-to-br from-red-400 via-red-600 to-red-950 shadow-[12px_15px_25px_rgba(0,0,0,0.5)] sm:h-40 sm:w-40" />
                    <div className="absolute h-24 w-24 -translate-x-3 -translate-y-3 rotate-45 rounded-[22px] border border-white/30 bg-white/10 backdrop-blur-sm sm:h-32 sm:w-32" />
                    <div className="relative z-10 text-4xl font-black text-white/90 sm:text-5xl">
                      S.
                    </div>
                    <div className="absolute right-0 top-2 h-7 w-7 rounded-lg border border-white/40 bg-red-400 shadow-lg" />
                    <div className="absolute bottom-3 left-0 h-5 w-5 rounded-full bg-white shadow-lg" />
                  </div>
                </div>

                <div className="relative mt-8 flex gap-2 border-t border-white/10 pt-4">
                  <div className="h-8 flex-1 rounded-md bg-white/10" />
                  <div className="h-8 flex-1 rounded-md bg-white/10" />
                  <div className="h-8 flex-1 rounded-md bg-white/10" />
                </div>
              </div>

              {/* Browser Bottom */}
              <div className="flex items-center justify-between bg-white px-4 py-3">
                <span className="text-[10px] font-bold text-slate-500">
                  DIGITAL EXPERIENCE
                </span>
                <div className="flex items-center gap-1 text-[10px] font-bold text-green-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  LIVE PREVIEW
                </div>
              </div>
            </div>
          </div>

          {/* Floating Creative Card */}
          <div className="absolute left-0 top-[13%] z-20 animate-[float_5s_ease-in-out_infinite] rounded-2xl border border-white/80 bg-white/90 p-3.5 shadow-[0_15px_35px_rgba(15,23,42,0.15)] backdrop-blur-xl sm:left-[-2%] sm:p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600">
                <Palette className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-extrabold text-slate-900">
                  Creative Design
                </p>
                <p className="text-[10px] text-slate-500">
                  Built to stand out
                </p>
              </div>
            </div>
          </div>

          {/* Floating Growth Card */}
          <div className="absolute bottom-[14%] right-0 z-20 animate-[float_6s_ease-in-out_infinite] rounded-2xl border border-white/80 bg-white/95 p-4 shadow-[0_15px_35px_rgba(15,23,42,0.16)] backdrop-blur-xl sm:right-[-2%]">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-extrabold text-slate-900">
                  Business Growth
                </p>
                <p className="text-[10px] text-slate-500">
                  Strategy meets results
                </p>
              </div>
            </div>
          </div>

          {/* Floating Mini Icon Cards */}
          <div className="absolute right-[4%] top-[10%] z-20 flex h-12 w-12 rotate-12 items-center justify-center rounded-xl bg-[#fe0100] text-white shadow-[0_10px_25px_rgba(254,1,0,0.35)] sm:right-[7%] sm:h-14 sm:w-14">
            <Code2 className="h-6 w-6" />
          </div>

          <div className="absolute bottom-[8%] left-[8%] z-20 flex h-12 w-12 -rotate-12 items-center justify-center rounded-xl border border-white bg-white text-red-600 shadow-xl sm:h-14 sm:w-14">
            <Megaphone className="h-6 w-6" />
          </div>

          {/* Small Floating Accent */}
          <div className="absolute left-[20%] top-[5%] h-4 w-4 animate-pulse rounded-full bg-red-500 shadow-[0_0_20px_rgba(254,1,0,0.5)]" />
          <div className="absolute bottom-[6%] right-[23%] h-3 w-3 rounded-full bg-orange-400 shadow-lg" />
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-red-800 via-[#fe0100] to-orange-400" />

      {/* Floating Animation */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-\\[float_5s_ease-in-out_infinite\\],
          .animate-\\[float_6s_ease-in-out_infinite\\] {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
