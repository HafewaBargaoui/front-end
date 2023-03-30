import React, { useState} from "react";
import { Fade } from "react-awesome-reveal";
import Footer from "../components/layouts/Footer";
import Presentation from "../components/homePage/Presentation";
import About from "../components/homePage/About";
import Ecology from "../components/homePage/Ecology";
import Coins from "../components/homePage/Coins";
import GoSearch from "../components/homePage/GoSearch";
export default function HomePageView() {
  return (
    <div className="accueil overflow-hidden bg-cover bg-[url('./imgs/gradientAccueilCarbuddy.png')]">
      <GoSearch/>
      <Presentation />
      <About />
      <Fade duration="5000" triggerOnce="true">
        <div className="">
          <div className="flex flex-col mt-36">
            <Ecology />
            <Coins />
          </div>
        </div>
      </Fade>
      <Footer />
    </div>
  );
}
