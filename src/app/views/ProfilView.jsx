import React from "react";
import ProfilInfos from "../components/Profil/ProfilInfos";
import ProfilVehicule from "../components/Profil/ProfilVehicule";
import ProfilBuddycoins from "../components/Profil/ProfilBuddycoins";

export default function Profil() {
  return (
    <div className="accueil bg-cover bg-[url('./imgs/Gradient.png')] w-full h-full grid justify-center items-center">
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-3 ">
          <ProfilInfos />
        </div>
        <div className="col-span-2 ">
          <ProfilVehicule />
        </div>
        <div className="row-span-2 col-span-2 ">
          <ProfilBuddycoins />
        </div>
      </div>
    </div>
  );
}
