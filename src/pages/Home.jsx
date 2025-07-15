import React from "react";
import { useNavigate } from "react-router";
import { ArrowRight } from "lucide-react";
import image1 from "../assets/image1.png";
import FeaturedProducts from "../components/ProductFeartures";
import PromoBanner from "../components/Promobanner";
// import Footer from "../components/Footer";
import UpdateProducts from "../components/Updateproducts";
import HeroSection from "../components/Herosection1";

import ShopBanner from "../components/ShopBanner";
import TrustedAffiliations from "../components/TrustedAffilation";
import TopTrekkingDestinations from "../components/TopTrekkiigDestinations";
import TripOfTheSeason from "../components/TripOfTheSeason";
import TestimonialsSection from "../components/TestimonialsSection";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <HeroSection />
      </div>
      <div>
        <TopTrekkingDestinations />
      </div>
      <div>
        <ShopBanner />
      </div>
      <div>
        <TrustedAffiliations />
      </div>
      <div>
        <TripOfTheSeason />
      </div>
      <div>
        <TestimonialsSection />
      </div>

      {/* <div>
        <FeaturedProducts />
      </div>
      <div>
        <PromoBanner />
      </div>
      <div>
        <UpdateProducts />
      </div> */}
    </div>
  );
}

export default Home;
