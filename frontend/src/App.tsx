import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Clients from "./pages/Clients";
import Team from "./pages/Team";
import Careers from "./pages/Career";
import SocialMediaMarketing from "./pages/Socialmediamarketing";
import CreativeDesign from "./pages/Creativedesign";
import SeoOptimization from "./pages/Seooptimization";
import WebDevelopment from "./pages/Webdevelopment";
import ContentMarketing from "./pages/Contentmarketing";
import TheaterAds from "./pages/Theaterads";
import ScrollToTop from "./components/ScrolltoTop";
import InfluencerMarketing from "./pages/InfluencerMarketing";
import MetaGoogleAds from "./pages/Performancemarketing";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <MainLayout>
          <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/team" element={<Team />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/service/social-media-marketing" element={<SocialMediaMarketing />} />
          <Route path="/service/creative-design" element={<CreativeDesign />} />
          <Route path="/service/website-development" element={<WebDevelopment/>} />
          <Route path="/service/performance-marketing" element={<MetaGoogleAds/>} />
          <Route path="/service/seo-optimization" element={<SeoOptimization/>} />
          <Route path="/service/content-marketing" element={<ContentMarketing/>} />
         <Route path="/service/theater-ads" element={<TheaterAds/>} />
          <Route path="/service/influencer-marketing" element={<InfluencerMarketing/>} />





        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default AppRoutes;