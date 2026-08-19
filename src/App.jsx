import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/layout/ScrollToTop";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import Brands from "./components/sections/Brands";
import OpeningHours from "./components/sections/OpeningHours";

import Location from "./components/sections/Location";
import Reviews from "./components/sections/Reviews";
import MapsSection from "./components/sections/MapsSection";
import About from "./components/sections/About";

import Legal from "./components/legal/Legal";
import Privacy from "./components/legal/Privacy";
import Terms from "./components/legal/Terms";
import Phones from "./components/sections/Phones";
import RiaTransfer from "./components/sections/RiaTransfer";
import Accessories from "./components/sections/Accessories";

import FaqPage from "./components/faq/FaqPage";
import MobilePlans from "./components/sections/MobilePlans";
import Partners from "./components/sections/Partners";

function Home() {
  return (
    <>
      <Hero />
      <Phones />

      <Reviews />
      <RiaTransfer />
      <MobilePlans />
      <OpeningHours />
      <Brands />
      <Location />
      <MapsSection />
      <Accessories />

      <About />
      <Partners />
    </>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/faq" element={<FaqPage />} />
      </Routes>

      <Footer />
    </>
  );
}
