import Services from "../components/Services";
import BrandsCarousel from "../components/BrandsCarousel";
import QuotationBanner from "../components/QuotationBanner";
import AboutSection from "../components/Aboutus";
import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <main className="min-h-screen w-full overflow-x-clip bg-white font-sans text-slate-900 selection:bg-[#fe0100] selection:text-white">

      {/* ================= HERO ================= */}
      <section className="relative w-full">
        <HeroSection />
      </section>

      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="relative w-full scroll-mt-24 bg-white"
      >
        <AboutSection />
      </section>

      {/* ================= BRANDS ================= */}
      <section className="relative w-full overflow-hidden border-y border-slate-100 bg-[#f9f6ef] py-6 sm:py-8">
        <BrandsCarousel />
      </section>

      {/* ================= SERVICES ================= */}
      <section
        id="services"
        className="relative w-full scroll-mt-24 bg-white"
      >
        <Services />
      </section>

      {/* ================= QUOTATION ================= */}
      <section className="relative w-full overflow-hidden bg-[#f9f6ef]">
        <QuotationBanner />
      </section>

    </main>
  );
};

export default Home;
