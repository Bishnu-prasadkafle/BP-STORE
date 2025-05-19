import React from "react";
import { ArrowRight } from "lucide-react";

import OurStory from "../components/About/OurStory";
import CompanyTimeline from "../components/About/CompanyTimeline";
import AboutHero from "../components/About/Hero";
import WhyShopWithUs from "../components/About/WhyShopWithUs";
import MissionVision from "../components/About/MissionVision";

function About() {
  return (
    <div>
      <div>
        <AboutHero />
        <OurStory />
        <MissionVision />
        <CompanyTimeline />
        <WhyShopWithUs />
      </div>
    </div>
  );
}

export default About;
