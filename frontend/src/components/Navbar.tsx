import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaArrowRight,
} from "react-icons/fa";

import logo from "../icons/logo.png";

import aboutIcon from "../icons/about.png";
import clientIcon from "../icons/clients.png";
import serviceIcon from "../icons/services.png";
import teamIcon from "../icons/team.png";
import workIcon from "../icons/work.png";
import careerIcon from "../icons/career.png";
import contactIcon from "../icons/contact.png";

interface NavItem {
  name: string;
  path: string;
  icon: string;
  submenu?: {
    name: string;
    path: string;
  }[];
}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    setMobileSubmenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItem[] = [
    {
      name: "About",
      path: "/about",
      icon: aboutIcon,
    },
    {
      name: "Services",
      path: "/services",
      icon: serviceIcon,
      submenu: [
        {
          name: "Social Media Marketing",
          path: "/service/social-media-marketing",
        },
        {
          name: "Creative Design",
          path: "/service/creative-design",
        },
        {
          name: "Performance Marketing",
          path: "/service/performance-marketing",
        },
        {
          name: "Web Development",
          path: "/service/website-development",
        },
        {
          name: "SEO Optimization",
          path: "/service/seo-optimization",
        },
        {
          name: "Content Marketing",
          path: "/service/content-marketing",
        },
      ],
    },
    {
      name: "Work",
      path: "/portfolio",
      icon: workIcon,
    },
    {
      name: "Clients",
      path: "/clients",
      icon: clientIcon,
    },
    {
      name: "Team",
      path: "/team",
      icon: teamIcon,
    },
    {
      name: "Careers",
      path: "/careers",
      icon: careerIcon,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: contactIcon,
    },
  ];

  const isItemActive = (item: NavItem) =>
    location.pathname === item.path ||
    Boolean(item.submenu?.some((sub) => location.pathname === sub.path));

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav
        className={`relative mx-auto max-w-7xl rounded-2xl border bg-white/95 transition-all duration-300 ${
          scrolled
            ? "border-slate-200 shadow-lg shadow-slate-900/[0.06] backdrop-blur-xl"
            : "border-slate-100 shadow-sm"
        }`}
      >
        {/* NAVBAR MAIN CONTENT */}
        <div className="flex min-h-[72px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-7">
          {/* LOGO */}
          <Link
            to="/"
            aria-label="Set Hai Yar home"
            className="flex shrink-0 items-center"
          >
            <img
              src={logo}
              alt="Set Hai Yar"
              className="h-10 w-auto object-contain sm:h-12"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-5 xl:gap-7 lg:flex">
            {navItems.map((item) => {
              const active = isItemActive(item);

              return (
                <div key={item.path} className="group relative">
                  <Link
                    to={item.path}
                    aria-current={
                      location.pathname === item.path ? "page" : undefined
                    }
                    className={`relative flex items-center gap-1.5 py-3 text-[13px] font-medium transition-colors duration-200 xl:text-sm ${
                      active
                        ? "text-[#fe0100]"
                        : "text-slate-700 hover:text-[#fe0100]"
                    }`}
                  >
                    {item.name}

                    {item.submenu && (
                      <FaChevronDown
                        size={10}
                        className="transition-transform duration-200 group-hover:rotate-180"
                      />
                    )}

                    <span
                      className={`absolute inset-x-0 -bottom-px h-0.5 origin-left rounded-full bg-[#fe0100] transition-transform duration-200 ${
                        active
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>

                  {/* DESKTOP SERVICES DROPDOWN */}
                  {item.submenu && (
                    <div className="invisible absolute left-1/2 top-full z-[60] w-72 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-900/10">
                        <div className="px-3 pb-2 pt-2">
                          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                            Our services
                          </p>
                        </div>

                        {item.submenu.map((sub) => {
                          const subActive = location.pathname === sub.path;

                          return (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              className={`flex items-center justify-between gap-3 rounded-lg px-3 py-3 text-sm transition-colors ${
                                subActive
                                  ? "bg-red-50 font-medium text-[#fe0100]"
                                  : "text-slate-700 hover:bg-slate-50 hover:text-[#fe0100]"
                              }`}
                            >
                              <span>{sub.name}</span>
                              <FaArrowRight
                                size={11}
                                className={`shrink-0 transition-transform ${
                                  subActive
                                    ? "text-[#fe0100]"
                                    : "text-slate-300 group-hover:translate-x-0.5"
                                }`}
                              />
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* DESKTOP CTA */}
          <Link
            to="/contact"
            className="hidden shrink-0 items-center gap-2 rounded-lg bg-[#fe0100] px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-red-700 lg:inline-flex"
          >
            Let's Talk
            <FaArrowRight size={12} />
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-800 transition hover:border-red-200 hover:bg-red-50 hover:text-[#fe0100] lg:hidden"
          >
            {menuOpen ? <FaTimes size={19} /> : <FaBars size={19} />}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        <div
          id="mobile-navigation"
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out lg:hidden ${
            menuOpen
              ? "grid-rows-[1fr] opacity-100"
              : "pointer-events-none grid-rows-[0fr] opacity-0"
          }`}
          aria-hidden={!menuOpen}
        >
          <div className="overflow-hidden">
            <div className="border-t border-slate-100 px-4 pb-5 pt-3 sm:px-6">
              <div className="flex flex-col gap-1">
                {navItems.map((item) => {
                  const active = isItemActive(item);

                  return (
                    <div key={item.path}>
                      <div className="flex items-center gap-2">
                        <Link
                          to={item.path}
                          tabIndex={menuOpen ? 0 : -1}
                          className={`flex min-h-11 flex-1 items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                            active
                              ? "bg-red-50 text-[#fe0100]"
                              : "text-slate-700 hover:bg-slate-50 hover:text-[#fe0100]"
                          }`}
                        >
                          <img
                            src={item.icon}
                            alt=""
                            aria-hidden="true"
                            className="h-5 w-5 shrink-0 object-contain"
                          />
                          {item.name}
                        </Link>

                        {item.submenu && (
                          <button
                            type="button"
                            aria-label="Toggle services submenu"
                            aria-expanded={mobileSubmenuOpen}
                            tabIndex={menuOpen ? 0 : -1}
                            onClick={() =>
                              setMobileSubmenuOpen((open) => !open)
                            }
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:bg-red-50 hover:text-[#fe0100]"
                          >
                            <FaChevronDown
                              size={12}
                              className={`transition-transform duration-200 ${
                                mobileSubmenuOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        )}
                      </div>

                      {/* MOBILE SERVICES SUBMENU */}
                      {item.submenu && (
                        <div
                          className={`grid transition-[grid-template-rows,opacity] duration-200 ${
                            mobileSubmenuOpen
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <div className="ml-8 mt-1 space-y-1 border-l-2 border-red-100 py-1 pl-3">
                              {item.submenu.map((sub) => {
                                const subActive =
                                  location.pathname === sub.path;

                                return (
                                  <Link
                                    key={sub.path}
                                    to={sub.path}
                                    tabIndex={
                                      menuOpen && mobileSubmenuOpen ? 0 : -1
                                    }
                                    className={`block rounded-md px-3 py-2.5 text-sm transition-colors ${
                                      subActive
                                        ? "bg-red-50 font-medium text-[#fe0100]"
                                        : "text-slate-600 hover:bg-slate-50 hover:text-[#fe0100]"
                                    }`}
                                  >
                                    {sub.name}
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* MOBILE CTA */}
              <Link
                to="/contact"
                tabIndex={menuOpen ? 0 : -1}
                className="mt-4 flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#fe0100] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700"
              >
                Let's Talk
                <FaArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
