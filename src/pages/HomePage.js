import React from "react";
import DesktopNavBar from "../components/DesktopNavBar";
import MobileNavbar from "../components/MobileNavbar";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import WhyUs from "../components/WhyUs";
import ForFreelancers from "../components/ForFreelancers";
import BrowseFreelancers from "../components/BrowseFreelancers";
import Reviews from "../components/Reviews";
import BottomSection from "../components/BottomSection";
import Footer from "../components/Footer";

import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/system";

function HomePage() {
  // check if the screen is mobile or not
  const desktop = useMediaQuery("(min-width:768px)");

  return (
    <div className=''>
      <Box
        className='navbar sticky top-0 z-40'
        sx={{
          backgroundColor: "background.paper",
        }}>
        {desktop ? <DesktopNavBar /> : <MobileNavbar />}
      </Box>
      <div className='body_wrapper   flex flex-col space-y-20 md:space-y-24'>
        <Hero />
        <WhyUs />
        <ForFreelancers />
        <BrowseFreelancers />
        <div>
          <Reviews />
          <BottomSection />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
