import React from "react";

const ProfilVehicule = () => {
  return (
    <div className="flex grow max-w-xl space-y-3 rounded-lg pb-8 justify-center  shadow  bg-cover bg-slate-500">
      <div className="grid place-content-center">
        <div className="flex flex-col text-black">
          <p className="mt-2 text-center font-bold text-xl">Votre véhicule</p>

          <div className="mt-8 grid grid-cols-2">
            <p className="font-semibold">Marque : </p>
            <p className="font-thin">ford</p>
          </div>
          <div className="grid grid-cols-2">
            <p className="font-semibold">Modèle : </p>
            <p className="font-thin">Escort</p>
          </div>
          <div className="grid grid-cols-2">
            <p className="font-semibold">Carburant : </p>
            <p className="font-thin">Essence</p>
          </div>
          <div className="grid grid-cols-2">
            <p className="font-semibold">Coffre : </p>
            <p className="font-thin">Grand coffre</p>
          </div>
          
          <button className="mt-8 bg-vert hover:bg-verth rounded-md text-black font-normal shadow-md py-2 px-4">
          Ajouter un véhicule
        </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilVehicule;
