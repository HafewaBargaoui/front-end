import React from "react";
import { useState } from "react";
import paul from "../../assets/images/profil/fakeUser3.png";
import buddycoin from "../../assets/images/profil/buddycoin.png";

const Trajets = () => {
  const [fav, setFav] = useState(false);
  const [histo, setHisto] = useState(false);
  const [recurent, setRecurent] = useState(false);
  const [propose, setPropose] = useState(false);

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
    },
    {
      id: 4,
      date: "27/12/2022",
      heure: "14h15",
      depart: "lille",
      arrive: "roubaix",
      conducteur: "paul",
      modele: "tesla modele 3",
      photo: paul,
      coin: buddycoin,
      tarif: "155",
    },
    {
      id: 5,
      date: "27/12/2022",
      heure: "14h15",
      depart: "lille",
      arrive: "roubaix",
      conducteur: "paul",
      modele: "tesla modele 3",
      photo: paul,
      coin: buddycoin,
      tarif: "155",
    },
    {
      id: 6,
      date: "27/12/2022",
      heure: "14h15",
      depart: "lille",
      arrive: "roubaix",
      conducteur: "paul",
      modele: "tesla modele 3",
      photo: paul,
      coin: buddycoin,
      tarif: "155",
    },
  ];

  console.log(histo);
  console.log(trajets.map((trajet) => trajet));

  return (
    <div className="m-36 w-full">
      <div className="m-2">
        <div
          className={`grid grid-flow-row bg-white w-full rounded-lg p-2 drop-shadow-lg ${
            histo && "scale-105"
          } hover:scale-105 hover:transition duration-700 ease-in-out`}
          onClick={() => setHisto(!histo)}
        >
          <p className="uppercase font-semibold m-2">
            trajet / <span className="font-light">historique</span>
          </p>
        </div>

        <div
          className={`${
            !histo && "hidden"
          }  h-56 overflow-scroll bg-opacity-10 mt-0 bg-slate-300`}
        >
          <div className="mt-10">
            {trajets.map((trajet) => (
              <div
                className={`grid grid-flow-col bg-slate-100 bg-opacity-90 w-full rounded-lg m-auto mt-4 drop-shadow-lg `}
                key={trajet.id}
              >
                <p className="uppercase font-semibold m-2">{trajet.date}</p>
                <p className="uppercase font-semibold m-2">{trajet.heure}</p>
                <p className="uppercase font-semibold m-2">
                  {trajet.depart} /{" "}
                  <span className="font-light">{trajet.arrive}</span>
                </p>

                <img src={paul} alt="photo conducteur" className="w-10 h-10" />
                <p className="uppercase font-semibold m-2">
                  {trajet.conducteur} /{" "}
                  <span className="font-light">{trajet.modele}</span>
                </p>
                <div className="grid grid-flow-col place-content-center">
                  <img src={trajet.coin} alt="buddycoin" className="w-6 h-6" />
                  <span className="font-light">{trajet.tarif}</span>
                </div>
              </div>
            ))}
          </div>
        </div>


        <div
          className={`grid grid-flow-row bg-white w-full rounded-lg mt-2 p-2 drop-shadow-lg ${
            fav && "scale-105"
          } hover:scale-105 hover:transition duration-700 ease-in-out`}
          onClick={() => setFav(!fav)}
        >
          <p className="uppercase font-semibold m-2">
            trajet / <span className="font-light">favoris</span>
          </p>
        </div>

        <div
          className={`${
            !fav && "hidden"
          }  h-56 overflow-scroll bg-opacity-10 mt-0 bg-slate-300`}
        >
          <div className="mt-10">
            {trajets.map((trajet) => (
              <div
                className={`grid grid-flow-col bg-slate-100 bg-opacity-90 w-full rounded-lg m-auto mt-4 drop-shadow-lg `}
                key={trajet.id}
              >
                <p className="uppercase font-semibold m-2">{trajet.date}</p>
                <p className="uppercase font-semibold m-2">{trajet.heure}</p>
                <p className="uppercase font-semibold m-2">
                  {trajet.depart} /{" "}
                  <span className="font-light">{trajet.arrive}</span>
                </p>

                <img src={paul} alt="photo conducteur" className="w-10 h-10" />
                <p className="uppercase font-semibold m-2">
                  {trajet.conducteur} /{" "}
                  <span className="font-light">{trajet.modele}</span>
                </p>
                <div className="grid grid-flow-col place-content-center">
                  <img src={trajet.coin} alt="buddycoin" className="w-6 h-6" />
                  <span className="font-light">{trajet.tarif}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`grid grid-flow-row bg-white w-full rounded-lg mt-2 p-2 drop-shadow-lg ${
            recurent && "scale-105"
          } hover:scale-105 hover:transition duration-700 ease-in-out`}
          onClick={() => setRecurent(!recurent)}
        >
          <p className="uppercase font-semibold m-2">
            trajet / <span className="font-light">historique</span>
          </p>
        </div>

        <div
          className={`${
            !recurent && "hidden"
          }  h-56 overflow-scroll bg-opacity-10 mt-0 bg-slate-300`}
        >
          <div className="mt-10">
            {trajets.map((trajet) => (
              <div
                className={`grid grid-flow-col bg-slate-100 bg-opacity-90 w-full rounded-lg m-auto mt-4 drop-shadow-lg `}
                key={trajet.id}
              >
                <p className="uppercase font-semibold m-2">{trajet.date}</p>
                <p className="uppercase font-semibold m-2">{trajet.heure}</p>
                <p className="uppercase font-semibold m-2">
                  {trajet.depart} /{" "}
                  <span className="font-light">{trajet.arrive}</span>
                </p>

                <img src={paul} alt="photo conducteur" className="w-10 h-10" />
                <p className="uppercase font-semibold m-2">
                  {trajet.conducteur} /{" "}
                  <span className="font-light">{trajet.modele}</span>
                </p>
                <div className="grid grid-flow-col place-content-center">
                  <img src={trajet.coin} alt="buddycoin" className="w-6 h-6" />
                  <span className="font-light">{trajet.tarif}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`grid grid-flow-row bg-white w-full rounded-lg mt-2 p-2 drop-shadow-lg ${
            propose && "scale-105"
          } hover:scale-105 hover:transition duration-700 ease-in-out`}
          onClick={() => setPropose(!propose)}
        >
          <p className="uppercase font-semibold m-2">
            trajet / <span className="font-light">historique</span>
          </p>
        </div>

        <div
          className={`${
            !propose && "hidden"
          }  h-56 overflow-scroll bg-opacity-10 mt-0 bg-slate-300`}
        >
          <div className="mt-10">
            {trajets.map((trajet) => (
              <div
                className={`grid grid-flow-col bg-slate-100 bg-opacity-90 w-full rounded-lg m-auto mt-4 drop-shadow-lg `}
                key={trajet.id}
              >
                <p className="uppercase font-semibold m-2">{trajet.date}</p>
                <p className="uppercase font-semibold m-2">{trajet.heure}</p>
                <p className="uppercase font-semibold m-2">
                  {trajet.depart} /{" "}
                  <span className="font-light">{trajet.arrive}</span>
                </p>

                <img src={paul} alt="photo conducteur" className="w-10 h-10" />
                <p className="uppercase font-semibold m-2">
                  {trajet.conducteur} /{" "}
                  <span className="font-light">{trajet.modele}</span>
                </p>
                <div className="grid grid-flow-col place-content-center">
                  <img src={trajet.coin} alt="buddycoin" className="w-6 h-6" />
                  <span className="font-light">{trajet.tarif}</span>
                </div>
              </div>
            ))}
          </div>
        </div>



      </div>
    </div>
  );
};

export default Trajets;
