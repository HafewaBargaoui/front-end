import React, { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import Footer from "../components/layouts/Footer";
import Presentation from "../components/homePage/Presentation";
import About from "../components/homePage/About";
import Ecology from "../components/homePage/Ecology";
import Coins from "../components/homePage/Coins";
import GoSearch from "../components/homePage/GoSearch";

import { useDispatch } from "react-redux";
import { signInGoogle, selectIsLogged} from "../redux-store/authenticationSlice";
import { useSelector } from "react-redux";

export default function HomePageView() {
  
  const isAuthenticated = useSelector(selectIsLogged);
  const dispatch = useDispatch();

  console.log(isAuthenticated);

  
  useEffect(async () => {
  if(!isAuthenticated)
  {
    const queryParameters = new URLSearchParams(window.location.search)
    const token = queryParameters.get("token");
    dispatch(signInGoogle(token));
  }  
}, [])

  return (
    <div className='accueil overflow-hidden bg-cover bg-[url("/src/app/assets/images/GradientAccueilCarbuddy.png")]'>
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
