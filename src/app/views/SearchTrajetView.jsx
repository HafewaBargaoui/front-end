import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FirstStep from "../components/stepsSearchTrajet/FirstStep";
import SecondStep from "../components/stepsSearchTrajet/SecondStep";
import ThirdStep from "../components/stepsSearchTrajet/ThirdStep";
import PrefsTrajet from "../components/stepsSearchTrajet/PrefsTrajet";

const SearchTrajetView = () => {
  return (
    <div className="accueil bg-cover bg-[url('./imgs/Gradient.png')] w-full h-full    flex  items-center justify-center loginContainer ">
      <div className=" pt-8 mb-12 grid gap-4 place-content-center ">
        <FirstStep className="" />

        {/* <div className="">
          <PrefsTrajet />

          <SecondStep />
        </div> */}

        {/* <ThirdStep className="" /> */}
      </div>
    </div>
  );
};
export default SearchTrajetView;
