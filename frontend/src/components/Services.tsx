import { ArrowRight, Sparkles, Layers3 } from "lucide-react";
import { Link } from "react-router-dom";

import Socialmm from "../icons/a1.png";
import Creativeds from "../icons/a2.png";
import Perm from "../icons/a3.png";
import Webdev from "../icons/a4.png";
import Seo from "../icons/a5.png";
import Content from "../icons/contentm.png";

const Services = () => {
  const services = [
    {
      title: "Social Media Marketing",
      icon: Socialmm,
      link: "/service/social-media-marketing",
      badge: "Viral Growth",
      description:
        "Build an engaging social presence with tailored strategies that connect your brand with the right audience.",
    },
    {
      title: "Creative Design Services",
      icon: Creativeds,
      link: "/service/creative-design",
      badge: "High Impact",
      description:
        "Create a consistent, memorable brand identity with thoughtful visuals, graphics, and creative assets.",
    },
    {
      title: "Performance Marketing",
      icon: Perm,
      link: "/service/performance-marketing",
      badge: "Max ROI",
      description:
        "Reach the right customers through data-driven advertising campaigns focused on leads and conversions.",
    },
    {
      title: "Web Design & Development",
      icon: Webdev,
      link: "/service/website-development",
      badge: "Full Stack",
      description:
        "Build fast, responsive websites and custom web applications designed around your business goals.",
    },
    {
      title: "SEO Optimization",
      icon: Seo,
      link: "/service/seo-optimization",
      badge: "Organic Growth",
      description:
        "Improve search visibility with technical SEO, content optimization, and sustainable organic growth strategies.",
    },
    {
      title: "Content Marketing",
      icon: Content,
      link: "/service/content-marketing",
      badge: "Brand Authority",
      description:
        "Share the right message through useful, audience-focused content that builds trust and brand awareness.",
    },
  ];

  return (
    <section
      id="services"
      className="relative isolate overflow-hidden bg-[#f9f6ef] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      {/* 3D ANIMATIONS */}
      <style>{`
        .service-card {
          transform-style: preserve-3d;
          perspective: 1200px;
          transition:
            transform 500ms cubic-bezier(0.2, 0.8, 0.2, 1),
            box-shadow 500ms ease,
            border-color 300ms ease;
        }

        .service-card:hover {
          transform: translateY(-12px) rotateX(3deg) rotateY(-2deg);
          box-shadow: 0 30px 60px rgba(15, 23, 42, 0.13);
        }

        .service-icon {
          transform: translateZ(20px);
          transition: transform 500ms ease;
        }

        .service-card:hover .service-icon {
          transform: translateZ(40px) scale(1.08) rotate(-4deg);
        }

        .service-content {
          transform: translateZ(10px);
        }

        @keyframes service-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }

        .service-decoration {
          animation: service-float 5s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .service-decoration {
            animation: none;
          }

          .service-card,
          .service-icon {
            transition: none;
          }
        }
      `}</style>

      {/* BACKGROUND DECORATIONS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-40 top-0 h-[450px] w-[450px] rounded-full bg-red-200/40 blur-[110px]" />
        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-orange-100/70 blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(#0f172a 1px, transparent 1px)",
            backgroundSize: "25px 25px",
          }}
        />

        <div className="service-decoration absolute right-[8%] top-24 h-20 w-20 rounded-2xl border border-red-200/60 rotate-12" />
        <div className="absolute right-[10%] top-28 h-12 w-12 rounded-xl border border-red-200/40 rotate-45" />
        <div className="service-decoration absolute bottom-20 left-[5%] h-14 w-14 rounded-full border border-orange-200/70" />
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* SECTION HEADING */}
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#fe0100] shadow-sm sm:text-sm">
            <Sparkles className="h-4 w-4" />
            What We Do
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Digital solutions for
            <br />
            <span className="text-[#fe0100]">
              growing businesses.
            </span>
          </h2>

          <div className="mx-auto mt-6 h-1.5 w-20 rounded-full bg-[#fe0100]" />

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base sm:text-lg">
            From building your online presence to turning visitors into
            customers, we bring creative thinking and technology together
            to help your business grow.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">

          {services.map((service, index) => (
            <Link
              key={service.link}
              to={service.link}
              className="group block rounded-[24px] outline-none focus-visible:ring-2 focus-visible:ring-[#fe0100] focus-visible:ring-offset-4"
            >
              <article className="service-card relative flex h-full flex-col overflow-hidden rounded-[24px] border border-white bg-white/90 p-5 shadow-[0_12px_35px_rgba(15,23,42,0.07)] backdrop-blur-xl sm:p-6 lg:p-7">

                {/* Card Background Glow */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-red-100/60 blur-3xl transition-all duration-500 group-hover:bg-red-200/80" />

                {/* Top Row */}
                <div className="relative flex items-start justify-between gap-3">

                  {/* 3D Icon Container */}
                  <div className="service-icon relative flex h-[72px] w-[72px] items-center justify-center rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-red-50 p-4 shadow-[0_8px_18px_rgba(15,23,42,0.09)] sm:h-20 sm:w-20">

                    <div className="absolute inset-x-3 bottom-1 h-2 rounded-full bg-red-200/40 blur-md" />

                    <img
                      src={service.icon}
                      alt=""
                      loading="lazy"
                      draggable={false}
                      className="relative z-10 h-full w-full object-contain drop-shadow-[0_5px_5px_rgba(15,23,42,0.12)]"
                    />
                  </div>

                  {/* Badge */}
                  <span className="rounded-full border border-red-100 bg-red-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#fe0100] sm:text-xs">
                    {service.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="service-content relative mt-7 flex-1">

                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-1 w-6 rounded-full bg-[#fe0100]" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                      SERVICE {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold leading-snug tracking-tight text-slate-950 transition-colors duration-300 group-hover:text-[#fe0100] sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Action */}
                <div className="relative mt-7 flex items-center justify-between border-t border-slate-100 pt-5">

                  <span className="text-sm font-bold text-slate-700 transition-colors group-hover:text-[#fe0100]">
                    Explore service
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-300 group-hover:rotate-[-8deg] group-hover:border-[#fe0100] group-hover:bg-[#fe0100] group-hover:text-white group-hover:shadow-lg group-hover:shadow-red-500/20">
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-700 to-[#fe0100] transition-all duration-500 group-hover:w-full" />

              </article>
            </Link>
          ))}
        </div>

        {/* VIEW ALL SERVICES */}
        <div className="mt-14 flex flex-col items-center text-center sm:mt-16">

          <div className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
            <Layers3 className="h-4 w-4 text-[#fe0100]" />
            More ways to grow your business
          </div>

          <Link
            to="/services"
            className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-[#fe0100] px-8 py-4 text-sm font-bold text-white shadow-[0_6px_0_#a90000] transition-all duration-300 hover:-translate-y-1 hover:bg-red-600 hover:shadow-[0_9px_0_#a90000] active:translate-y-1 active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fe0100] focus-visible:ring-offset-4"
          >
            View All Services
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Services;
