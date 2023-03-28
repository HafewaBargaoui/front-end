import React, { useEffect } from "react";
import { useState } from "react";
import paul from "../../assets/images/profil/fakeUser3.png";
import buddycoin from "../../assets/images/profil/buddycoin.png";
import haut from "../../assets/images/profil/flecheHaut.png";
import bas from "../../assets/images/profil/flecheBas.png";
import { userJourney, userSubmittedJourney } from "../../api/backend/account";
import { useSelector } from "react-redux";
import {selectIsLogged, selectUser} from "../../redux-store/authenticationSlice";
import { Fade } from "react-awesome-reveal";


const Trajets = () => {
  const isAuthenticated = useSelector(selectIsLogged);
  const [fav, setFav] = useState(false);
  const [histo, setHisto] = useState(false);
  const [recurent, setRecurent] = useState(false);
  const [propose, setPropose] = useState(false);

  const [infos, setinfos] = useState([])
  const [route, setroute] = useState([])

  const [driver, setdriver] = useState([])
  const [driverRoutes, setdriverRoutes] = useState([])
  const [driverPic, setdriverPic] = useState([])

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

  const journey = async () => {
    const response = await userJourney();
    setinfos([response.data])
    setroute(response.data.route)
  };


  const submittedJourney = async () => {
    const response = await userSubmittedJourney();
    console.log(response.data)
    setdriver(response.data.driverInfo)
    setdriverRoutes(response.data.driverRoutes)
    setdriverPic(response.data.profilePrefs)
    
  };

  useEffect(() => {
    if (isAuthenticated) {
      journey();
      submittedJourney();
    }
  }, [isAuthenticated])
  


  return (
    <div className="m-36 w-full">
    
      <div className="m-2 ">
        <div
          className={`grid grid-flow-col justify-between place-items-center bg-white w-full rounded-lg p-2 drop-shadow-lg ${
            histo && "scale-105"
          } hover:scale-105 hover:transition duration-700 ease-in-out`}
          onClick={() => setHisto(!histo)}
        >
          <p className="uppercase font-semibold m-2">
            trajet / <span className="font-light">proposés</span>
          </p>
          <img src={!histo ? haut : bas } alt="logo" />
        </div>

        <div
          className={`${
            !histo && "hidden"
          }  h-64 overflow-y-scroll bg-opacity-10 mt-0 bg-slate-300 rounded-b-xl scrollbar`}
        >
          <div className="mt-6 mx-10">
              <Fade cascade>
            {route.map((route, i) => (

              <div
                className={`grid grid-flow-col place-items-center bg-slate-100 bg-opacity-90 w-full rounded-lg m-auto mt-4 drop-shadow-lg `}
                key={i}
              >
                <p className="uppercase font-semibold m-2">{route.departure_date}</p>
                <p className="uppercase font-semibold m-2">{route.departure_time}</p>
                <p className="uppercase font-semibold m-2">
                  {route.starting_location.split(",", [1])} /{" "}
                  <span className="font-light">{route.arrival_location.split(",", [1])}</span>
                </p>

                <img src={infos[0].profilePrefs.file[0].filename} alt="photo conducteur" className="w-8 h-8" />
                <p className="uppercase font-semibold m-2">
                  {infos[0].user.name} /{" "}
                  <span className="font-light">{route.vehicule.brand}</span>
                </p>
                <div className="grid grid-flow-col place-items-center">
                  <img src={buddycoin} alt="buddycoin" className="w-4 h-4" />
                  <span className="font-light">{route.point_cost}</span>
                </div>
              </div>
            ))}
              </Fade>
          </div>
        </div>
      </div>

      <div className="m-2">
        <div
          className={`grid grid-flow-col justify-between place-items-center bg-white w-full rounded-lg p-2 drop-shadow-lg ${
            fav && "scale-105"
          } hover:scale-105 hover:transition duration-700 ease-in-out`}
          onClick={() => setFav(!fav)}
        >
          <p className="uppercase font-semibold m-2">
            trajet / <span className="font-light">rejoints</span>
          </p>
          <img src={!fav ? haut : bas } alt="logo" />
        </div>

        <div
          className={`${
            !fav && "hidden"
          }  h-64 overflow-y-scroll bg-opacity-10 mt-0 bg-slate-300 rounded-b-xl scrollbar`}
        >
          <div className="mt-6 mx-10">
          <Fade>

          {driverRoutes.map((route, i) => (
              <div
                className={`grid grid-flow-col place-items-center bg-slate-100 bg-opacity-90 w-full rounded-lg m-auto mt-4 drop-shadow-lg `}
                key={i}
              >
                <p className="uppercase font-semibold m-2">{route.departure_date}</p>
                <p className="uppercase font-semibold m-2">{route.departure_time}</p>
                <p className="uppercase font-semibold m-2">
                  {route.starting_location.split(",", [1])} /{" "}
                  <span className="font-light">{route.arrival_location.split(",", [1])}</span>
                </p>

                <img src={driverPic[i]} alt="photo conducteur" className="w-8 h-8" />
                <p className="uppercase font-semibold m-2">
                  {driver[i].name} /{" "}
                  <span className="font-light">{route.vehicule.brand}</span>
                </p>
                <div className="grid grid-flow-col place-items-center">
                  <img src={buddycoin} alt="buddycoin" className="w-4 h-4" />
                  <span className="font-light">{route.point_cost}</span>
                </div>
              </div>
            ))}
          </Fade>
          </div>
        </div>
      </div>

      <div className="m-2">
        <div
          className={`grid grid-flow-col justify-between place-items-center bg-white w-full rounded-lg p-2 drop-shadow-lg ${
            recurent && "scale-105"
          } hover:scale-105 hover:transition duration-700 ease-in-out`}
          onClick={() => setRecurent(!recurent)}
        >
          <p className="uppercase font-semibold m-2">
            trajet / <span className="font-light">favoris</span>
          </p>
          <img src={!recurent ? haut : bas } alt="logo" />
        </div>

        <div
          className={`${
            !recurent && "hidden"
          }  h-64 overflow-y-scroll bg-opacity-10 mt-0 bg-slate-300 rounded-b-xl scrollbar`}
        >
          <div className="mt-6 mx-10">
          <Fade>

            {trajets.map((trajet) => (
              <div
                className={`grid grid-flow-col place-items-center bg-slate-100 bg-opacity-90 w-full rounded-lg m-auto mt-4 drop-shadow-lg `}
                key={trajet.id}
              >
                <p className="uppercase font-semibold m-2">{trajet.date}</p>
                <p className="uppercase font-semibold m-2">{trajet.heure}</p>
                <p className="uppercase font-semibold m-2">
                  {trajet.depart} /{" "}
                  <span className="font-light">{trajet.arrive}</span>
                </p>

                <img src={paul} alt="photo conducteur" className="w-8 h-8" />
                <p className="uppercase font-semibold m-2">
                  {trajet.conducteur} /{" "}
                  <span className="font-light">{trajet.modele}</span>
                </p>
                <div className="grid grid-flow-col place-items-center">
                  <img src={trajet.coin} alt="buddycoin" className="w-4 h-4" />
                  <span className="font-light">{trajet.tarif}</span>
                </div>
              </div>
            ))}
          </Fade>
          </div>
        </div>
      </div>

      <div className="m-2">
        <div
          className={`grid grid-flow-col justify-between place-items-center bg-white w-full rounded-lg p-2 drop-shadow-lg ${
            propose && "scale-105"
          } hover:scale-105 hover:transition duration-700 ease-in-out`}
          onClick={() => setPropose(!propose)}
        >
          <p className="uppercase font-semibold m-2">
            trajet / <span className="font-light">historique</span>
          </p>
          <img src={!propose ? haut : bas } alt="logo" />
        </div>

        <div
          className={`${
            !propose && "hidden"
          }  h-64 overflow-y-scroll bg-opacity-10 mt-0 bg-slate-300 rounded-b-xl scrollbar`}
        >
          <div className="mt-6 mx-10">
          <Fade>

          {route.map((route, i) => (
              <div
                className={`grid grid-flow-col place-items-center bg-slate-100 bg-opacity-90 w-full rounded-lg m-auto mt-4 drop-shadow-lg `}
                key={i}
              >
                <p className="uppercase font-semibold m-2">{route.departure_date}</p>
                <p className="uppercase font-semibold m-2">{route.departure_time}</p>
                <p className="uppercase font-semibold m-2">
                  {route.starting_location.split(",", [1])} /{" "}
                  <span className="font-light">{route.arrival_location.split(",", [1])}</span>
                </p>

                <img src={infos[0].profilePrefs.file[0].filename} alt="photo conducteur" className="w-8 h-8" />
                <p className="uppercase font-semibold m-2">
                  {infos[0].user.name} /{" "}
                  <span className="font-light">{route.vehicule.brand}</span>
                </p>
                <div className="grid grid-flow-col place-items-center">
                  <img src={buddycoin} alt="buddycoin" className="w-4 h-4" />
                  <span className="font-light">{route.point_cost}</span>
                </div>
              </div>
            ))}
          </Fade>
          </div>
        </div>
      </div>      
    </div>
  );
};

export default Trajets;
