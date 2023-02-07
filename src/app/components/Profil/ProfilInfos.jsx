import React from "react";

const ProfilInfos = () => {
  return (
    <div className="w-full max-w-xl space-y-3 rounded-lg pb-8  px-4 shadow lg:px-8  bg-cover bg-slate-500">
      <div className="place-content-center">
        <div className="flex flex-col text-white text-lg">
          <p>Nom </p>
          <p>Prenom</p>
          <p>sexe</p>
          <p>âge</p>
          <p>Adresse Mail</p>
          <p>Adresse</p>
          <p>Téléphone</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilInfos;
