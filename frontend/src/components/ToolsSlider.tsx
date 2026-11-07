import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

const tools = [
  {
    name: "Adobe",
    image:
      "https://cdn.prod.website-files.com/69a6887f2e147a486fb9ff50/69a6887f2e147a486fba0111_Adobe.svg",
  },
  {
    name: "Shopify",
    image:
      "https://cdn.prod.website-files.com/69a6887f2e147a486fb9ff50/69a6887f2e147a486fba0161_Shopify.svg",
  },
  {
    name: "Blender",
    image:
      "https://cdn.prod.website-files.com/69a6887f2e147a486fb9ff50/69a6887f2e147a486fba010f_Blender.svg",
  },
  {
    name: "Webflow",
    image:
      "https://cdn.prod.website-files.com/69a6887f2e147a486fb9ff50/69a6887f2e147a486fba0160_Webflow.svg",
  },
  {
    name: "WordPress",
    image:
      "https://cdn.prod.website-files.com/69a6887f2e147a486fb9ff50/69a6887f2e147a486fba0163_Wordpress.svg",
  },
  {
    name: "Figma",
    image:
      "https://cdn.prod.website-files.com/69a6887f2e147a486fb9ff50/69a6887f2e147a486fba0110_Figma.svg",
  },
];

const ToolsSlider = () => {
  return (
    <section className="relative overflow-hidden bg-[#f5f1e8] py-28">
      {/* PAPER GRAIN */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6">
        {/* PAPER CARD */}
        <div
          className="
            relative
            mx-auto
            w-full
            max-w-7xl

            bg-[#faf7f2]
            border-[3px] border-black
            shadow-[12px_12px_0px_#000]

            px-6 py-20 md:px-12 lg:px-16
            overflow-hidden
          "
        >
          {/* INNER PAPER TEXTURE */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper.png')]" />

          {/* CONTENT */}
          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* LEFT SLIDER */}
              <div className="relative w-full overflow-hidden">
                <div className="absolute -top-10 -left-10 w-72 h-72 bg-yellow-200 rounded-full blur-3xl opacity-40" />

                <Swiper
                  effect="coverflow"
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView="auto"
                  loop={true}
                  autoplay={{
                    delay: 2200,
                    disableOnInteraction: false,
                  }}
                  coverflowEffect={{
                    rotate: 35,
                    stretch: 0,
                    depth: 180,
                    modifier: 1,
                    slideShadows: false,
                    scale: 0.9,
                  }}
                  modules={[EffectCoverflow, Autoplay]}
                  className="tools-swiper"
                >
                  {tools.map((tool, index) => (
                    <SwiperSlide
                      key={index}
                      className="!w-[240px] md:!w-[300px]"
                    >
                      <div
                        className="
                          group
                          relative
                          overflow-hidden

                          bg-[#fffdf8]
                          border-[3px] border-black

                          p-10
                          shadow-[8px_8px_0px_#000]

                          transition-all duration-300
                          hover:-translate-y-2
                          hover:shadow-[12px_12px_0px_#000]
                        "
                      >
                        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper.png')]" />

                        <div className="relative z-10 flex items-center justify-center h-[220px]">
                          <img
                            src={tool.image}
                            alt={tool.name}
                            className="h-28 w-28 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                          />
                        </div>

                        <div className="relative z-10 text-center">
                          <h3 className="text-2xl font-black text-black uppercase tracking-wide">
                            {tool.name}
                          </h3>

                          <p className="mt-2 text-sm text-slate-600 text-center">
                            Professional workflow integration
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* RIGHT CONTENT */}
              <div className="flex flex-col items-start text-left">
                <p className="font-black uppercase tracking-[0.3em] mb-5 text-black">
                  Tools & Platforms
                </p>

                <h2 className="text-5xl md:text-6xl font-black text-black leading-tight uppercase">
                  Powered by
                  <span className="block">modern creative technology</span>
                </h2>

                <p className="mt-8 max-w-xl text-left text-slate-700 text-lg leading-relaxed">
                  We use industry-leading tools and platforms to craft premium
                  websites, digital experiences, branding systems, and
                  high-performing campaigns for modern businesses.
                </p>

                <div className="mt-10 space-y-5">
                  {[
                    "UI/UX Design & Prototyping",
                    "3D & Motion Graphics",
                    "E-commerce & CMS",
                    "Performance-driven Web Development",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-4 h-4 bg-black rotate-45 shrink-0" />

                      <p className="text-left text-black font-bold uppercase tracking-wide">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <button
                  className="
                    mt-12
                    px-8 py-4

                    bg-black
                    text-white

                    font-black
                    uppercase
                    tracking-wide

                    border-[3px] border-black
                    shadow-[6px_6px_0px_#ffcc00]

                    transition-all duration-300
                    hover:translate-x-[2px]
                    hover:translate-y-[2px]
                    hover:shadow-[3px_3px_0px_#ffcc00]
                  "
                >
                  Explore Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSlider;