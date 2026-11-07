import {
  ArrowRight,
  Film,
  Users,
  MapPin,
  Megaphone,
  Star,
  CheckCircle2,
  Target,
  Clapperboard,
  MonitorPlay,
} from "lucide-react";
import { Link } from "react-router-dom";

const advantages = [
  {
    icon: Film,
    title: "Premium Screen Presence",
    desc: "Present your brand on cinema screens in a memorable viewing environment.",
  },
  {
    icon: Users,
    title: "Engaged Audiences",
    desc: "Connect with moviegoers during a shared entertainment experience.",
  },
  {
    icon: Megaphone,
    title: "Brand Awareness",
    desc: "Build familiarity through creative, professionally presented campaigns.",
  },
  {
    icon: MapPin,
    title: "Location-Based Campaigns",
    desc: "Plan campaigns around selected cinemas and relevant local markets.",
  },
];

const services = [
  {
    icon: MonitorPlay,
    title: "Cinema Slide Ads",
    desc: "Display your brand message on cinema screens before the show.",
  },
  {
    icon: Film,
    title: "Video Commercials",
    desc: "Showcase your products and services through engaging video ads.",
  },
  {
    icon: MapPin,
    title: "Regional Campaigns",
    desc: "Focus your advertising on selected cities and local audiences.",
  },
  {
    icon: Clapperboard,
    title: "Cinema Network Campaigns",
    desc: "Explore advertising opportunities across selected cinema locations.",
  },
  {
    icon: Star,
    title: "Movie Promotions",
    desc: "Coordinate promotional campaigns around movie screenings and releases.",
  },
  {
    icon: Target,
    title: "Brand Awareness",
    desc: "Build recognition with creative messaging designed for the big screen.",
  },
];

const benefits = [
  "Large-screen visual impact",
  "An immersive cinema environment",
  "Opportunities for local market targeting",
  "Memorable brand presentation",
  "Video and static creative options",
  "Campaign planning around selected locations",
];

const TheaterAds = () => {
  return (
    <section className="overflow-hidden bg-white text-slate-900">
      {/* Hero */}
      <div className="relative">
        <div className="pointer-events-none absolute -right-32 -top-28 h-96 w-96 rounded-full bg-red-50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-0 h-72 w-72 rounded-full bg-orange-50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-sm font-semibold text-[#fe0100]">
              <Film size={17} />
              Theater Advertising
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-7xl">
              Put your brand
              <span className="block text-[#fe0100]">
                on the big screen.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Take your message beyond the usual advertising channels. Cinema
              advertising gives your brand an opportunity to connect with
              moviegoers through impactful visuals and an immersive viewing
              experience.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#fe0100] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:-translate-y-0.5 hover:bg-red-700"
              >
                Plan Your Campaign
                <ArrowRight size={18} />
              </Link>

              <a
                href="#theater-services"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              >
                Explore Advertising Options
              </a>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative mx-auto mt-12 max-w-6xl sm:mt-16">
            <div className="absolute -right-3 -top-3 h-24 w-24 rounded-3xl bg-red-100 sm:-right-5 sm:-top-5 sm:h-32 sm:w-32" />

            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-2xl shadow-slate-900/10">
              <img
                src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1600&auto=format&fit=crop"
                alt="Cinema auditorium with a large movie screen"
                className="h-[280px] w-full object-cover sm:h-[420px] lg:h-[540px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 lg:p-10">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  Cinema Advertising Solutions
                </span>

                <h2 className="mt-4 max-w-2xl text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                  Give your brand a bigger stage.
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-200 sm:text-base">
                  Creative campaigns designed around your message, audience,
                  and selected cinema locations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why theater advertising */}
      <div className="border-y border-slate-100 bg-slate-50/70">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-10">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#fe0100]">
              Why Cinema Ads?
            </span>

            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
              Make an impression beyond the screen.
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Cinema advertising combines large-format visuals, sound, and a
              shared entertainment setting. It can help businesses introduce
              their brands, communicate offers, and reach audiences in selected
              markets.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              From local businesses to established brands, campaigns can be
              planned around the creative format, cinema location, and
              advertising objectives that suit your needs.
            </p>

            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#fe0100] transition hover:gap-3"
            >
              Discuss your campaign
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {advantages.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg hover:shadow-slate-900/5 sm:p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-[#fe0100]">
                  <item.icon size={23} />
                </div>

                <h3 className="mt-5 font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services */}
      <div
        id="theater-services"
        className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#fe0100]">
            Our Solutions
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Cinema advertising options for your brand
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Choose an advertising format and campaign approach that aligns
            with your marketing objectives and target market.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-slate-900/5 sm:p-7"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-[#fe0100] transition group-hover:bg-[#fe0100] group-hover:text-white">
                  <service.icon size={23} />
                </div>

                <span className="text-sm font-semibold text-slate-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {service.desc}
              </p>

              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#fe0100] transition hover:gap-3"
              >
                Enquire now
                <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-7 sm:p-10">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#fe0100]/20 blur-3xl" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-red-300">
                  <Megaphone size={24} />
                </div>

                <h2 className="mt-6 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Why include cinema advertising in your marketing mix?
                </h2>

                <p className="mt-4 leading-7 text-slate-300">
                  A cinema campaign can complement your digital, outdoor, and
                  local marketing activities with a distinctive advertising
                  format. The best approach depends on your audience, creative,
                  placements, and budget.
                </p>

                <Link
                  to="/contact"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#fe0100] px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
                >
                  Explore Campaign Options
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>

            <div>
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#fe0100]">
                Campaign Advantages
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Designed to make your message stand out.
              </h2>

              <ul className="mt-7 space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-[#fe0100]"
                    />
                    <span className="text-sm leading-6 text-slate-700 sm:text-base">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
          <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-[#fe0100]/20 blur-3xl" />

          <div className="relative mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-red-300">
              <span className="h-1.5 w-1.5 rounded-full bg-[#fe0100]" />
              Let's Plan Your Campaign
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to put your brand on the big screen?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
              Tell us about your business, campaign goals, and preferred
              locations. We'll help you explore suitable cinema advertising
              options.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-[#fe0100] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-red-950/30 transition hover:-translate-y-0.5 hover:bg-red-700"
            >
              Request a Quote
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheaterAds;
