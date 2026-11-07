import {
  ArrowRight,
  Quote,
  Sparkles,
  Star,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

import Ather from "../icons/ather.png";
import Lions from "../icons/lions.png";
import Apollo from "../icons/apollo.png";
import Honda from "../icons/honda.png";
import EZY from "../icons/ezyloan.png";
import Toyota from "../icons/toyota.png";

const CLIENTS = [
  {
    id: "toyota",
    name: "Nellam Toyota",
    category: "Automobile",
    logo: Toyota,
    feedback:
      "Sellopedia completely transformed our online presence and boosted conversions.",
  },
  {
    id: "ather",
    name: "Ather",
    category: "Automobiles",
    logo: Ather,
    feedback:
      "The creative campaigns and social media growth were incredible.",
  },
  {
    id: "honda",
    name: "Honda Bigwing",
    category: "Automobiles",
    logo: Honda,
    feedback:
      "Our lead generation system scaled faster than we imagined.",
  },
  {
    id: "ezyloan",
    name: "Ezy Loan",
    category: "Loan & Finance",
    logo: EZY,
    feedback:
      "Premium branding and a website experience that feels world-class.",
  },
  {
    id: "apollo",
    name: "Apollo Hospital",
    category: "Hospital",
    logo: Apollo,
    feedback:
      "Professional execution with strong performance marketing strategy.",
  },
  {
    id: "lions",
    name: "Lions Eye Hospital",
    category: "Healthcare & Tech",
    logo: Lions,
    feedback:
      "The UI/UX quality and campaign creativity stood out immediately.",
  },
];

const STATS = [
  { id: "clients", value: "120+", label: "Happy Clients" },
  { id: "spend", value: "$24M+", label: "Ad Spend Managed" },
  { id: "rating", value: "4.9★", label: "Average Rating" },
  { id: "retention", value: "96%", label: "Retention Rate" },
];

const MARQUEE_ITEMS = [
  "Proven Results",
  "Automotive & Finance",
  "Healthcare & Tech",
  "Scalable Growth",
  "High Retention Rate",
];

const Clients = () => {
  return (
    <section
      aria-labelledby="clients-heading"
      className="relative overflow-hidden bg-white px-4 py-16 selection:bg-[#fe0100] selection:text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-red-50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-20 h-72 w-72 rounded-full bg-slate-100 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <header className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-sm font-semibold text-[#fe0100]">
            <Sparkles className="h-4 w-4" />
            Our Clients
          </div>

          <h1
            id="clients-heading"
            className="text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl"
          >
            Brands we work with
            <span className="block text-[#fe0100]">
              and grow together.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            We partner with ambitious brands, startups, and businesses to
            create thoughtful digital experiences and sustainable growth
            strategies.
          </p>
        </header>

        {/* Marquee */}
        <div className="mt-10 overflow-hidden border-y border-slate-200 py-4 sm:mt-14">
          <div className="flex w-max animate-marquee items-center gap-5 whitespace-nowrap sm:gap-8">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="flex items-center gap-5 sm:gap-8"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 sm:text-sm">
                  {item}
                </span>
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-[#fe0100]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-5 lg:grid-cols-4">
          {STATS.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg hover:shadow-slate-200/50 sm:p-7"
            >
              <p className="text-2xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                {item.value}
              </p>
              <p className="mt-2 text-xs font-medium leading-5 text-slate-500 sm:text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Client testimonial cards */}
        <div className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
          {CLIENTS.map((client) => (
            <article
              key={client.id}
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-slate-200/50 sm:p-7"
            >
              {/* Client details */}
              <div className="flex items-center gap-4 border-b border-slate-100 pb-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white p-2 sm:h-16 sm:w-16">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h2 className="text-base font-bold leading-snug text-slate-900 sm:text-lg">
                    {client.name}
                  </h2>
                  <span className="mt-1.5 inline-block rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                    {client.category}
                  </span>
                </div>
              </div>

              {/* Testimonial */}
              <div className="flex-1 py-5">
                <Quote
                  aria-hidden="true"
                  className="h-7 w-7 text-[#fe0100]/70"
                />
                <blockquote className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                  "{client.feedback}"
                </blockquote>
              </div>

              {/* Rating */}
              <div
                className="flex items-center justify-between border-t border-slate-100 pt-4"
                aria-label="5 out of 5 stars"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      aria-hidden="true"
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <span className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                  <ShieldCheck className="h-4 w-4 text-[#fe0100]" />
                  Client feedback
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Client logo strip */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:mt-16 sm:p-8 lg:p-10">
          <div className="mb-6 text-center">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
              Businesses across industries
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              A selection of brands featured in our client portfolio.
            </p>
          </div>

          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
            {CLIENTS.map((client) => (
              <li
                key={client.id}
                className="flex min-h-20 items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-4 text-center transition-all duration-200 hover:border-red-200 hover:shadow-sm"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  loading="lazy"
                  className="max-h-12 max-w-full object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
                />
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="relative mt-12 overflow-hidden rounded-3xl bg-slate-950 px-5 py-10 sm:mt-16 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-red-600/20 blur-3xl"
          />

          <div className="relative z-10 flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-red-300">
                <Sparkles className="h-4 w-4" />
                Let's work together
              </div>

              <h2 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Ready to become our next
                <span className="block text-[#fe0100]">
                  success story?
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                Let's discuss your goals and find the right digital solutions
                to help your business move forward.
              </p>
            </div>

            <Link
              to="/contact"
              className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-xl bg-[#fe0100] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:px-8"
            >
              Work With Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Marquee animation */}
      <style>{`
        @keyframes clientsMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .animate-marquee {
          animation: clientsMarquee 32s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Clients;
