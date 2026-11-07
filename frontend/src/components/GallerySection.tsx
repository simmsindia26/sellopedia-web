import { useEffect, useRef } from "react";
import Flickity from "flickity";
import { ArrowUpRight, Sparkles } from "lucide-react";

import "flickity/css/flickity.css";

const galleryItems = [
  {
    title: "Work Space,\nMind Space:\nAlways Bright",
    image:
      "https://socialpanga.com/wp-content/uploads/2021/04/socialpanga-about-gallery1.jpg",
    size: "large",
  },
  {
    title: "Dedicated\nNom Nom Station",
    image:
      "https://socialpanga.com/wp-content/uploads/2021/04/socialpanga-about-gallery4.jpg",
    size: "small",
  },
  {
    title: "Housing Mafias\nof Creativity",
    image:
      "https://socialpanga.com/wp-content/uploads/2021/04/socialpanga-about-gallery2.jpg",
    size: "large",
  },
  {
    title: "Peddling Quality\nContent Only",
    image:
      "https://socialpanga.com/wp-content/uploads/2021/04/socialpanga-about-gallery5.jpg",
    size: "small",
  },
  {
    title: "Panga Around\nEvery Corner",
    image:
      "https://socialpanga.com/wp-content/uploads/2021/04/socialpanga-about-gallery3.jpg",
    size: "large",
  },
  {
    title: "Uno Rules Us,\nWe Don't Uno Rules",
    image:
      "https://socialpanga.com/wp-content/uploads/2021/04/socialpanga-about-gallery6.jpg",
    size: "small",
  },
];

const GallerySection = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = carouselRef.current;
    if (!element) return;

    const flickity = new Flickity(element, {
      cellAlign: "left",
      contain: false,
      wrapAround: true,
      pageDots: false,
      prevNextButtons: false,
      autoPlay: 2800,
      pauseAutoPlayOnHover: true,
      selectedAttraction: 0.015,
      friction: 0.25,
      draggable: true,
      accessibility: true,
      imagesLoaded: true,
    });

    return () => {
      flickity.destroy();
    };
  }, []);

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      {/* Subtle background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-red-50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-slate-100 blur-3xl"
      />

      {/* Heading */}
      <div className="relative z-10 mx-auto mb-10 max-w-7xl px-5 text-center sm:mb-14 sm:px-6 lg:mb-16 lg:px-8">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-sm font-semibold text-[#fe0100]">
          <Sparkles className="h-4 w-4" />
          <span>Inside Sellopedia</span>
        </div>

        <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
          Creativity happens{" "}
          <span className="text-[#fe0100]">here.</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
          A glimpse into the spaces, people, and everyday moments that inspire
          fresh thinking, collaboration, and better digital experiences.
        </p>
      </div>

      {/* Carousel */}
      <div
        ref={carouselRef}
        className="gallery-carousel relative z-10"
        aria-label="Sellopedia gallery"
      >
        {galleryItems.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className={`gallery-cell mr-4 w-[82%] sm:mr-5 sm:w-[48%] lg:mr-6 ${
              item.size === "large"
                ? "xl:w-[34%]"
                : "xl:w-[27%]"
            }`}
          >
            <article className="group relative h-[360px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:h-[430px] lg:h-[480px]">
              {/* Image */}
              <img
                src={item.image}
                alt={item.title.replace(/\n/g, " ")}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/5 transition-opacity duration-300 group-hover:from-black/90" />

              {/* Top label */}
              <div className="absolute left-4 right-4 top-4 flex items-center justify-between sm:left-5 sm:right-5 sm:top-5">
                <span className="rounded-full border border-white/25 bg-black/25 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                  Sellopedia
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:border-[#fe0100] group-hover:bg-[#fe0100]">
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                </span>
              </div>

              {/* Card content */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-8">
                <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.18em] text-red-300">
                  {String(index + 1).padStart(2, "0")} / Gallery
                </span>

                <h3 className="whitespace-pre-line text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                  {item.title}
                </h3>

                <div className="mt-4 h-1 w-10 rounded-full bg-[#fe0100] transition-all duration-300 group-hover:w-16" />
              </div>
            </article>
          </div>
        ))}
      </div>

      {/* Flickity styling */}
      <style>{`
        .gallery-carousel .flickity-viewport {
          overflow: visible;
        }

        .gallery-carousel .flickity-slider {
          display: flex;
          align-items: stretch;
        }

        .gallery-carousel .gallery-cell {
          height: auto;
        }

        @media (prefers-reduced-motion: reduce) {
          .gallery-carousel img,
          .gallery-carousel article,
          .gallery-carousel article * {
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default GallerySection;
