import React from "react";
import ProfilInfos from "../components/Profil/ProfilInfos";
import ProfilVehicule from "../components/Profil/ProfilVehicule";
import ProfilBuddycoins from "../components/Profil/ProfilBuddycoins";

export default function Profil() {
  return (
    <div className="bg-cover bg-[url('./imgs/Gradient.png')] w-full h-full grid justify-center items-center">
      <div className="grid grid-rows-1 h-max md:grid-rows-2 grid-flow-row  md:grid-flow-col gap-y-2 md:gap-x-6">
        <div className="row-span-3 ">
          <ProfilInfos />
        </div>
        <div className="col-span-2 ">
          <ProfilVehicule />
        </div>
        <div className="col-span-2 md:max-h-xl ">
          <ProfilBuddycoins />
        </div>
      </div>
    </div>
  );
}
