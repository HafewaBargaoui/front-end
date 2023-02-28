import React from "react";
import { StarIcon } from "@heroicons/react/solid";

import paul from "../../assets/images/profil/fakeUser3.png";
import buddycoin from "../../assets/images/profil/buddycoin.png";

const trajets = [
  {
    id: 1,
    date: "27/12/2022",
    heure: "14h15",
    depart: "lille",
    arrive: "roubaix",
    conducteur: "paul",
    modele: "tesla modele 3",
    photo: paul,
    coin: buddycoin,
    tarif: "155",
    rate: "3",
  },
  {
    id: 2,
    date: "27/12/2022",
    heure: "14h15",
    depart: "lille",
    arrive: "roubaix",
    conducteur: "paul",
    modele: "tesla modele 3",
    photo: paul,
    coin: buddycoin,
    tarif: "155",
    rate: "4",
  },
  {
    id: 3,
    date: "27/12/2022",
    heure: "14h15",
    depart: "lille",
    arrive: "roubaix",
    conducteur: "paul",
    modele: "tesla modele 3",
    photo: paul,
    coin: buddycoin,
    tarif: "155",
    rate: "3",
  },
  {
    id: 3,
    date: "27/12/2022",
    heure: "14h15",
    depart: "lille",
    arrive: "roubaix",
    conducteur: "paul",
    modele: "tesla modele 3",
    photo: paul,
    coin: buddycoin,
    tarif: "155",
    rate: "3",
  },
];

const SecondStep = ({ setclickSuivant, clickSuivant, click2 }) => {
  return (
    <div>
      <div className="max-w-2xl rounded-xl px-4 shadow-lg lg:px-8 bg-cover bg-center bg-white bg-opacity-30 shadow-gray-900/80">
        <h6 className="text-center m-1 font-semibold">
          4 Trajets trouvés pour votre recherche :
        </h6>
        <p className="text-center m-1 font-light">
          Dont 3 selon vos préférences
        </p>

        {/* <div className="mt-6 mx-10">
          {trajets.map((trajet) => (
            <div
              className={`grid grid-flow-col place-items-center bg-slate-100 bg-opacity-90 w-full rounded-lg m-auto mt-4 drop-shadow-lg `}
              key={trajet.id}
            >
              <img src={paul} alt="photo conducteur" className="w-8 h-8" />
              <p className="uppercase font-semibold m-2">
                {trajet.conducteur} /
                <span className="font-light">{trajet.modele}</span>
              </p>
              <div className="grid grid-flow-col place-items-center">
                <img src={trajet.coin} alt="buddycoin" className="w-4 h-4" />
                <span className="font-light">{trajet.tarif}</span>
              </div>
              <button className="m-2 bg-vert hover:bg-verth rounded-md text-white font-normal shadow-md py-0 px-1">
                Selectionner
              </button>
            </div>
          ))}
        </div> */}
      </div>
      <button
        onClick={click2}
        className="m-2 bg-vert hover:bg-verth rounded-md text-white font-normal shadow-md py-0 px-1
      "
      >
        Etape suivante
      </button>
    </div>
  );
};

export default SecondStep;
