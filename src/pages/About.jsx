import React from "react";
import { ArrowRight } from "lucide-react";

import OurStory from "../components/About/OurStory";
import CompanyTimeline from "../components/About/CompanyTimeline";
import AboutHero from "../components/About/Hero";
import WhyShopWithUs from "../components/About/WhyShopWithUs";

function About() {
  return (
    <div className=''>
      <div>
        <AboutHero />
        <OurStory />
        <CompanyTimeline />
        <WhyShopWithUs />
      </div>
    </div>
  );
}

export default About;
