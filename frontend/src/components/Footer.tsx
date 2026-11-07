import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

import {
  ArrowUpRight,
  ShieldCheck,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    { name: "Social Media Marketing", path: "/service/social-media-marketing" },
    { name: "Creative Design", path: "/service/creative-design" },
    { name: "Performance Marketing", path: "/service/performance-marketing" },
    { name: "Web Development", path: "/service/website-development" },
    { name: "SEO Optimization", path: "/service/seo-optimization" },
  ];

  const socials = [
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://instagram.com",
    },
    {
      name: "Facebook",
      icon: FaFacebookF,
      url: "https://facebook.com",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      url: "https://linkedin.com",
    },
  ];

  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms & Conditions", path: "/terms-and-conditions" },
    { name: "Cookie Policy", path: "/cookie-policy" },
  ];

  return (
    <footer className="relative isolate overflow-hidden border-t border-slate-200 bg-[#f9f6ef]">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-red-100/70 blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-orange-100/60 blur-[100px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(#0f172a 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">

          {/* BRAND SECTION */}
          <div className="sm:col-span-2 lg:col-span-4">

            <Link
              to="/"
              aria-label="Sellopedia home"
              className="group inline-flex items-center"
            >
              <img
                src="/logo.png"
                alt="Sellopedia"
                className="h-12 w-auto max-w-[220px] object-contain transition-transform duration-300 group-hover:scale-105 sm:h-14"
              />
            </Link>

            <div className="mt-6 max-w-sm">
              <p className="text-sm leading-7 text-slate-600 sm:text-base">
                Your digital growth partner for creative strategy, social
                media marketing, high-performing websites, and
                performance-driven campaigns.
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-7 flex items-center gap-3">
              {socials.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit Sellopedia on ${item.name}`}
                    className="group flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:bg-[#fe0100] hover:text-white hover:shadow-lg hover:shadow-red-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fe0100]"
                  >
                    <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                  </a>
                );
              })}
            </div>

            {/* Availability */}
            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2.5 text-xs font-semibold text-green-700 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              Available for new projects
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-extrabold text-slate-950">
              Quick Links
            </h3>

            <div className="mt-3 h-1 w-10 rounded-full bg-[#fe0100]" />

            <ul className="mt-6 space-y-4">
              {quickLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="group inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-[#fe0100]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300 transition-colors group-hover:bg-[#fe0100]" />
                    {item.name}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-extrabold text-slate-950">
              Our Services
            </h3>

            <div className="mt-3 h-1 w-10 rounded-full bg-[#fe0100]" />

            <ul className="mt-6 space-y-4">
              {services.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="group flex items-start gap-2.5 text-sm font-medium leading-5 text-slate-600 transition-colors hover:text-[#fe0100]"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300 transition-all group-hover:scale-125 group-hover:bg-[#fe0100]" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-extrabold text-slate-950">
              Get in Touch
            </h3>

            <div className="mt-3 h-1 w-10 rounded-full bg-[#fe0100]" />

            <p className="mt-6 text-sm leading-7 text-slate-600">
              Have a project in mind? Let's discuss how we can help your
              business grow.
            </p>

            {/* Email Card */}
            <a
              href="mailto:hello@sellopedia.in"
              className="group mt-5 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-red-900/5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[#fe0100] transition-colors group-hover:bg-[#fe0100] group-hover:text-white">
                <Mail className="h-5 w-5" />
              </div>

              <div className="min-w-0">
                <span className="block text-xs font-medium text-slate-500">
                  Email us
                </span>
                <span className="mt-1 block break-all text-sm font-bold text-slate-800">
                  hello@sellopedia.in
                </span>
              </div>

              <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-slate-400 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#fe0100]" />
            </a>

            {/* Location Card */}
            <div className="mt-3 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                <MapPin className="h-5 w-5" />
              </div>

              <div>
                <span className="block text-xs font-medium text-slate-500">
                  Headquarters
                </span>
                <span className="mt-1 block text-sm font-bold text-slate-800">
                  Balasore, Odisha, India
                </span>
              </div>
            </div>

            {/* Trust Message */}
            <div className="mt-5 flex items-start gap-2.5 text-xs leading-5 text-slate-500">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#fe0100]" />
              <span>
                Committed to quality, creativity, and client satisfaction.
              </span>
            </div>
          </div>
        </div>

        {/* CTA STRIP */}
        <div className="relative mt-14 overflow-hidden rounded-2xl bg-slate-950 p-6 shadow-[0_15px_40px_rgba(15,23,42,0.16)] sm:mt-16 sm:p-8">

          <div className="absolute -right-10 -top-20 h-52 w-52 rounded-full bg-red-600/30 blur-3xl" />
          <div className="absolute bottom-0 right-1/3 h-24 w-24 rounded-full bg-red-500/10 blur-2xl" />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-400">
                <Sparkles size={15} />
                Let's create something great
              </div>

              <h3 className="mt-3 text-xl font-extrabold text-white sm:text-2xl">
                Ready to grow your business?
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Let's turn your next big idea into a digital experience.
              </p>
            </div>

            <Link
              to="/contact"
              className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-xl bg-[#fe0100] px-6 py-3 text-sm font-bold text-white shadow-[0_5px_0_#a90000] transition-all duration-300 hover:-translate-y-1 hover:bg-red-600 hover:shadow-[0_7px_0_#a90000]"
            >
              Start a Project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-10 flex flex-col gap-5 border-t border-slate-200 pt-7 sm:mt-12 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-center text-xs leading-5 text-slate-500 sm:text-left">
            © {new Date().getFullYear()} Sellopedia. All rights reserved.
          </p>

          <nav
            aria-label="Legal links"
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:justify-end"
          >
            {legalLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-xs font-medium text-slate-500 transition-colors hover:text-[#fe0100]"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
