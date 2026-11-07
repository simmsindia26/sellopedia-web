import {
  ArrowRight,
  Users,
  Star,
  TrendingUp,
  CheckCircle,
  Sparkles,
  Target,
  Megaphone,
} from "lucide-react";

import { FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const services = [
  "Instagram Influencer Campaigns",
  "YouTube Collaborations",
  "Micro Influencer Marketing",
  "Celebrity Endorsements",
  "UGC Content Creation",
  "Brand Ambassador Programs",
];

const creators = [
  "Fashion Creators",
  "Lifestyle Influencers",
  "Food Bloggers",
  "Travel Creators",
  "Fitness Coaches",
  "Tech Reviewers",
  "Education Creators",
  "Regional Influencers",
];

const stats = [
  { value: "500+", label: "Influencers" },
  { value: "10M+", label: "Audience Reach" },
  { value: "200+", label: "Campaigns" },
  { value: "95%", label: "Client Satisfaction" },
];

const campaignSteps = [
  "Discovery",
  "Influencer Selection",
  "Campaign Planning",
  "Execution & Reporting",
];

const InfluencerMarketing = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#fffdf8] text-slate-950">
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "radial-gradient(#000 1.5px, transparent 1.5px)",
            backgroundSize: "18px 18px",
          }}
        />

        <div className="absolute -left-40 top-32 h-96 w-96 rounded-full bg-red-200/50 blur-[100px]" />
        <div className="absolute -right-40 top-175 h-112.5 w-112.5 rounded-full bg-yellow-200/50 blur-[110px]" />
        <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-orange-100/60 blur-[100px]" />

        <div className="absolute right-8 top-48 hidden h-20 w-20 rotate-12 border-4 border-black/10 lg:block" />
        <div className="absolute bottom-212.5 left-8 hidden h-16 w-16 rounded-full border-10 border-[#fe0100]/10 lg:block" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
        {/* HERO */}
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="inline-flex -rotate-2 items-center gap-2 rounded-xl border-2 border-black bg-[#fe0100] px-4 py-2.5 text-xs font-black uppercase tracking-[0.16em] text-white shadow-[5px_5px_0_#000] sm:px-6 sm:text-sm">
              <Sparkles size={16} />
              BIN • Brand Influencer Network
            </div>

            <h1 className="mt-8 text-4xl font-black uppercase leading-[1.02] tracking-tight text-black sm:text-5xl md:text-6xl lg:text-[4.5rem]">
              Connect Brands
              <span className="mt-2 block -rotate-1 text-[#fe0100]">
                With Creators.
              </span>
            </h1>

            <p className="mt-7 max-w-xl rounded-2xl border-2 border-black bg-[#ffea00] p-5 text-sm font-bold leading-7 text-black shadow-[6px_6px_0_#000] sm:p-6 sm:text-base">
              Scale your brand through authentic influencer partnerships,
              creator-led campaigns, and powerful social proof that drives
              awareness, engagement, and conversions.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-xl border-2 border-black bg-[#fe0100] px-7 py-4 text-sm font-black uppercase text-white shadow-[0_7px_0_#000] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_0_#000] active:translate-y-1 active:shadow-none"
              >
                Launch Your Campaign
                <ArrowRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <a
                href="#campaign-process"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-black bg-white px-7 py-4 text-sm font-black uppercase text-black shadow-[0_7px_0_#000] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ffea00] hover:shadow-[0_10px_0_#000]"
              >
                Explore Our Process
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              {[
                "Authentic Partnerships",
                "Creator Network",
                "Campaign Strategy",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-slate-700"
                >
                  <CheckCircle size={15} className="text-[#fe0100]" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative mx-auto w-full max-w-xl pb-8 lg:max-w-none lg:pb-0">
            <div className="absolute -right-3 -top-4 h-28 w-28 rotate-12 rounded-2xl border-2 border-black bg-[#ffea00] shadow-[7px_7px_0_#000] sm:-right-5 sm:-top-5 sm:h-36 sm:w-36" />

            <div className="absolute -bottom-3 -left-3 h-28 w-28 -rotate-12 rounded-full border-4 border-black bg-[#fe0100] shadow-[6px_6px_0_#000] sm:-left-5 sm:h-36 sm:w-36" />

            <div className="relative rounded-[1.8rem] border-[3px] border-black bg-white p-2.5 shadow-[12px_12px_0_#fe0100] sm:p-3 sm:shadow-[18px_18px_0_#fe0100]">
              <div className="relative overflow-hidden rounded-[1.2rem]">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1800&auto=format&fit=crop"
                  alt="Influencer marketing and creator collaboration"
                  className="h-85 w-full object-cover sm:h-110 lg:h-125"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-xl border-2 border-black bg-[#ffea00] px-3 py-2 text-[10px] font-black uppercase text-black shadow-[3px_3px_0_#000] sm:left-5 sm:top-5 sm:px-4 sm:text-xs">
                  <span className="h-2 w-2 rounded-full bg-[#fe0100]" />
                  Creator Network
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#ffea00]">
                    <Sparkles size={15} />
                    Influence. Engage. Grow.
                  </div>

                  <h2 className="mt-3 max-w-md text-2xl font-black uppercase leading-tight text-white sm:text-4xl">
                    Your Brand.
                    <span className="block text-[#ffea00]">
                      Their Influence.
                    </span>
                  </h2>
                </div>
              </div>
            </div>

            {/* FLOATING SOCIAL CARD */}
            <div className="absolute -bottom-5 right-1 flex items-center gap-3 rounded-2xl border-2 border-black bg-white p-3 shadow-[5px_5px_0_#000] sm:-right-5 sm:p-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-black bg-[#ffea00] text-black">
                <Users size={23} />
              </div>

              <div>
                <p className="text-sm font-black uppercase text-black">
                  Creator Community
                </p>
                <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  Built around your brand
                </p>
              </div>
            </div>

            {/* FLOATING ICON */}
            <div className="absolute -left-2 top-20 flex h-14 w-14 -rotate-12 items-center justify-center rounded-2xl border-2 border-black bg-[#fe0100] text-white shadow-[5px_5px_0_#000] sm:-left-6 sm:h-16 sm:w-16">
              <Megaphone size={28} />
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="mt-20 grid grid-cols-2 gap-4 sm:mt-28 sm:gap-6 md:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={item.label}
              className={`group relative rounded-2xl border-2 border-black p-5 text-center shadow-[5px_5px_0_#000] transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0_#fe0100] sm:p-8 sm:shadow-[7px_7px_0_#000] ${
                index % 2 === 0 ? "bg-[#ffea00]" : "bg-white"
              }`}
            >
              <span className="absolute right-3 top-3 text-xs font-black text-black/30">
                0{index + 1}
              </span>

              <h2 className="text-3xl font-black tracking-tight text-black sm:text-5xl">
                {item.value}
              </h2>

              <p className="mt-2 text-[10px] font-black uppercase tracking-wider text-black sm:mt-3 sm:text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* ABOUT */}
        <div className="mt-24 grid items-center gap-10 lg:mt-32 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-lg border-2 border-black bg-[#ffea00] px-4 py-2 text-xs font-black uppercase tracking-widest shadow-[3px_3px_0_#000]">
              <Target size={15} />
              The Power of Influence
            </span>

            <h2 className="mt-6 text-3xl font-black uppercase leading-tight text-black sm:text-5xl">
              Why Influencer
              <span className="block text-[#fe0100]">
                Marketing?
              </span>
            </h2>

            <p className="mt-6 text-base font-semibold leading-8 text-slate-800 sm:text-lg">
              Today's consumers trust creators more than traditional
              advertising. Through BIN, we connect brands with carefully
              selected influencers who align with your audience, industry,
              and business goals.
            </p>

            <p className="mt-4 text-base font-semibold leading-8 text-slate-800 sm:text-lg">
              Whether you're launching a product, building awareness,
              generating leads, or driving sales, our influencer campaigns
              are designed to deliver measurable results.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {[
                "Brand Awareness",
                "Audience Engagement",
                "Conversions",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-lg border-2 border-black bg-white px-3 py-2 text-xs font-black uppercase shadow-[3px_3px_0_#000]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rotate-3 rounded-4xl border-2 border-black bg-[#ffea00] shadow-[7px_7px_0_#000]" />

            <div className="relative -rotate-1 rounded-[1.7rem] border-[3px] border-black bg-[#fe0100] p-7 shadow-[10px_10px_0_#000] sm:p-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-black bg-[#ffea00] text-black shadow-[5px_5px_0_#000]">
                <TrendingUp size={32} strokeWidth={3} />
              </div>

              <h3 className="mt-7 text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
                Real Influence.
                <span className="mt-1 block text-[#ffea00]">
                  Real Results.
                </span>
              </h3>

              <p className="mt-5 text-base font-bold leading-8 text-white sm:text-lg">
                Reach targeted audiences through trusted voices that inspire
                action and build brand credibility.
              </p>

              <div className="mt-8 flex items-center gap-3 border-t-2 border-white/30 pt-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-black bg-[#ffea00] text-black"
                    >
                      <Users size={16} />
                    </div>
                  ))}
                </div>

                <span className="text-xs font-black uppercase tracking-wide text-white">
                  Brands Meet Creators
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* SERVICES */}
        <div className="mt-24 sm:mt-32">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-lg border-2 border-black bg-[#fe0100] px-4 py-2 text-xs font-black uppercase tracking-widest text-white shadow-[4px_4px_0_#000]">
              <Megaphone size={15} />
              Our Expertise
            </span>

            <h2 className="mt-6 text-3xl font-black uppercase text-black sm:text-5xl">
              What We Offer
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm font-semibold leading-7 text-slate-600 sm:text-base">
              Complete influencer marketing solutions to help brands connect
              with the right creators and audiences.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 sm:gap-7 md:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service}
                className="group relative rounded-2xl border-2 border-black bg-white p-6 shadow-[6px_6px_0_#000] transition-all duration-300 hover:-translate-y-2 hover:shadow-[10px_10px_0_#fe0100] sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-black bg-[#ffea00] text-black shadow-[4px_4px_0_#000] transition-all duration-300 group-hover:-rotate-6 group-hover:bg-[#fe0100] group-hover:text-white">
                    <CheckCircle size={27} strokeWidth={2.5} />
                  </div>

                  <span className="text-3xl font-black text-slate-100">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-7 text-lg font-black uppercase leading-snug text-black sm:text-xl">
                  {service}
                </h3>

                <div className="mt-5 h-1.5 w-10 rounded-full bg-[#fe0100] transition-all duration-300 group-hover:w-20" />
              </div>
            ))}
          </div>
        </div>

        {/* PLATFORMS */}
        <div className="mt-24 grid gap-7 sm:mt-32 md:grid-cols-2">
          {/* INSTAGRAM */}
          <div className="group relative rounded-4xl border-[3px] border-black bg-white p-7 shadow-[8px_8px_0_#000] transition-all duration-300 hover:-translate-y-2 hover:shadow-[12px_12px_0_#fe0100] sm:p-10">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-black bg-[#ffea00] text-black shadow-[4px_4px_0_#000] transition group-hover:-rotate-6">
              <FaInstagram size={32} />
            </div>

            <div className="mt-7 flex items-center justify-between gap-3">
              <h3 className="text-2xl font-black uppercase text-black sm:text-3xl">
                Instagram Campaigns
              </h3>

              <FaInstagram
                className="hidden shrink-0 text-[#fe0100] sm:block"
                size={25}
              />
            </div>

            <p className="mt-4 text-sm font-semibold leading-7 text-slate-700 sm:text-base">
              Reels, Stories, Posts, Collaborations, Product Reviews,
              and Influencer Takeovers.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {["Reels", "Stories", "Posts", "Collaborations"].map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-black/20 bg-red-50 px-3 py-2 text-xs font-black uppercase text-black"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* YOUTUBE */}
          <div className="group relative rounded-4xl border-[3px] border-black bg-white p-7 shadow-[8px_8px_0_#000] transition-all duration-300 hover:-translate-y-2 hover:shadow-[12px_12px_0_#fe0100] sm:p-10">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-black bg-[#ffea00] text-black shadow-[4px_4px_0_#000] transition group-hover:-rotate-6">
              <FaYoutube size={32} />
            </div>

            <div className="mt-7 flex items-center justify-between gap-3">
              <h3 className="text-2xl font-black uppercase text-black sm:text-3xl">
                YouTube Collaborations
              </h3>

              <FaYoutube
                className="hidden shrink-0 text-[#fe0100] sm:block"
                size={25}
              />
            </div>

            <p className="mt-4 text-sm font-semibold leading-7 text-slate-700 sm:text-base">
              Sponsored Videos, Product Integrations, Reviews, Tutorials,
              and Long-form Brand Stories.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "Sponsored Videos",
                "Reviews",
                "Tutorials",
                "Brand Stories",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-black/20 bg-red-50 px-3 py-2 text-xs font-black uppercase text-black"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CREATOR CATEGORIES */}
        <div className="mt-24 sm:mt-32">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-lg border-2 border-black bg-[#ffea00] px-4 py-2 text-xs font-black uppercase tracking-widest shadow-[4px_4px_0_#000]">
              <Users size={15} />
              Our Network
            </span>

            <h2 className="mt-6 text-3xl font-black uppercase text-black sm:text-5xl">
              Creator Categories
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm font-semibold leading-7 text-slate-600 sm:text-base">
              Find the right voices for your brand across diverse content
              categories and communities.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-14 sm:gap-6 md:grid-cols-4">
            {creators.map((creator, index) => (
              <div
                key={creator}
                className={`group rounded-2xl border-2 border-black p-5 text-center shadow-[5px_5px_0_#000] transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0_#fe0100] sm:p-7 ${
                  index % 3 === 0 ? "bg-[#ffea00]" : "bg-white"
                }`}
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border-2 border-black bg-white text-black shadow-[3px_3px_0_#000] transition group-hover:-rotate-6 group-hover:bg-[#fe0100] group-hover:text-white">
                  <Users size={23} strokeWidth={2.5} />
                </div>

                <h3 className="mt-4 text-xs font-black uppercase leading-snug text-black sm:text-sm">
                  {creator}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* CAMPAIGN PROCESS */}
        <div id="campaign-process" className="mt-24 scroll-mt-24 sm:mt-32">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-lg border-2 border-black bg-[#fe0100] px-4 py-2 text-xs font-black uppercase tracking-widest text-white shadow-[4px_4px_0_#000]">
              <TrendingUp size={15} />
              How We Work
            </span>

            <h2 className="mt-6 text-3xl font-black uppercase text-black sm:text-5xl">
              Campaign Process
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm font-semibold leading-7 text-slate-600 sm:text-base">
              From understanding your brand to executing campaigns, we follow
              a structured process to bring your influencer strategy to life.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
            {campaignSteps.map((step, index) => (
              <div
                key={step}
                className={`group rounded-2xl border-2 border-black bg-white p-7 text-center shadow-[6px_6px_0_#000] transition-all duration-300 hover:-translate-y-2 hover:shadow-[10px_10px_0_#fe0100] sm:p-8 ${
                  index % 2 === 0 ? "lg:-rotate-1" : "lg:rotate-1"
                }`}
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-black bg-[#ffea00] text-3xl font-black text-[#fe0100] shadow-[4px_4px_0_#000] transition group-hover:-rotate-6 group-hover:bg-[#fe0100] group-hover:text-white">
                  0{index + 1}
                </div>

                <h3 className="mt-6 text-lg font-black uppercase leading-snug text-black">
                  {step}
                </h3>

                <div className="mx-auto mt-5 h-1.5 w-10 rounded-full bg-[#fe0100] transition-all group-hover:w-20" />
              </div>
            ))}
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="relative mt-24 rounded-4xl border-[3px] border-black bg-black px-6 py-12 text-center shadow-[9px_9px_0_#fe0100] sm:mt-32 sm:px-10 sm:py-16 sm:shadow-[14px_14px_0_#fe0100]">
          <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#fe0100]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-[#ffea00]/20 blur-3xl" />

          <div className="relative">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-black bg-[#ffea00] text-black shadow-[5px_5px_0_#fe0100]">
              <Star size={30} fill="currentColor" />
            </div>

            <span className="mt-7 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#ffea00]">
              Let's Create Something Big
            </span>

            <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-black uppercase leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Ready To Launch
              <span className="mt-2 block text-[#ffea00]">
                Your Influencer Campaign?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm font-bold leading-7 text-white/80 sm:text-lg">
              Connect with trusted creators, build authentic brand awareness,
              and drive measurable growth through BIN.
            </p>

            <Link
              to="/contact"
              className="group mt-9 inline-flex items-center justify-center gap-3 rounded-xl border-2 border-black bg-[#fe0100] px-7 py-4 text-sm font-black uppercase text-white shadow-[0_7px_0_#ffea00] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ffea00] hover:text-black hover:shadow-[0_10px_0_#ffea00] active:translate-y-1 active:shadow-none sm:px-9 sm:py-5 sm:text-base"
            >
              Request Campaign
              <ArrowRight
                size={21}
                strokeWidth={3}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfluencerMarketing;
