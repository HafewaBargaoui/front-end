import React, { useState } from "react";
import { updateRoomUser } from "../../api/backend/messagerieAPI";
import buddycoin from "../../assets/images/profil/buddycoin.png";
import { useNavigate, useLocation } from "react-router-dom";
import { URL_TRAJET_SEARCH_VALIDE } from "../../constants/urls/urlFrontEnd";
import GoBuyCoins from "./Search_modal/GoBuyCoins";
import Carte from "../carte/Carte";

// Implementer la verification si user connecte sinon refuser la validation

const ThirdStep = () => {
  const location = useLocation();
  const { routeSelected, trajetDepart, trajetArrive } = location.state;
  const navigate = useNavigate();
  const [modalOn, setmodalOn] = useState(false);

  const submitRouteSelected = async (route) => {
    const response = await updateRoomUser(route);
    console.log(response.data);
    if (response.data.error) {
      setmodalOn(true);
    } else if (response.data.response) {
      navigate(URL_TRAJET_SEARCH_VALIDE);
      console.log("ok");
    }
  };
  return (
    <div className="bg-cover bg-[url('./imgs/Gradient.png')] w-full h-full  relative  flex flex-col items-center justify-center loginContainer">
      <div className="grid grid-cols-2">
        <div className="flex items-center justify-center">
          <Carte trajetDepart={trajetDepart} trajetArrive={trajetArrive} />
        </div>

        <div className="max-w-2xl rounded-xl px-4 py-4 shadow-lg lg:px-8 bg-cover bg-center bg-white bg-opacity-30 shadow-gray-900/80">
          <h6 className="text-center m-1 font-semibold">
            Vous avez selectionné :
          </h6>

          <div className="bg-slate-100 bg-opacity-90 w-full rounded-lg m-auto mt-4 drop-shadow-lg p-8 ">
            <div className="grid grid-cols-2 ">
              <p className="font-semibold">Trajet prévu le : </p>
              <p className="font-thin">{routeSelected.departure_date}</p>
            </div>

            <div className="grid grid-cols-2">
              <p className="font-semibold"> De : </p>

              <p className="font-thin">
                {routeSelected.starting_location.split(",", [1])}
              </p>
            </div>

            <div className="grid grid-cols-2">
              <p className="font-semibold uppercase"> à : </p>

              <p className="font-thin">
                {routeSelected.arrival_location.split(",", [1])}
              </p>
            </div>

            <div>
              <hr className="h-1 my-4 bg-gray-300 border-0 dark:bg-gray-700" />
            </div>

            <div className="grid grid-cols-2">
              <p className="font-semibold uppercase"> Pour : </p>
              <div className="flex flex-row">
                <div>
                  <p className="font-thin">{routeSelected.point_cost}</p>
                </div>
                <div>
                  <img src={buddycoin} alt="coin" className="w-6 h-6 p-1" />
                </div>
              </div>
            </div>
            <div className="hover:bg-cyan-50 cursor-pointer">
              <div>
                <hr className="h-1 my-4 bg-gray-300 border-0 dark:bg-gray-700" />
              </div>

              <div className="grid grid-cols-2   ">
                <img
                  src={
                    routeSelected.id_user.id_user_preference.file[0].filename
                  }
                  alt="driver"
                  className="w-12 h-12"
                />

                <div>
                  {routeSelected.id_user.name} / {routeSelected.vehicule.brand}
                </div>
              </div>
            </div>
            <div>
              <hr className="h-1 my-4 bg-gray-300 border-0 dark:bg-gray-700" />
            </div>

            <div className="grid grid-cols-2">
              <p className="font-thin ">
                {" "}
                Besoin d'informations complémentaires ?
              </p>

              <button className=" bg-jaunebtn rounded-md hover:bg-jauneh drop-shadow-md py-0 px-4">
                Discuter
              </button>
            </div>

            {/* /////////////////////////////////////// */}
            <div>
              <hr className="h-1 my-4 bg-gray-300 border-0 dark:bg-gray-700" />
            </div>

            <div className="grid justify-center content-center items-center">
              <button
                onClick={() => submitRouteSelected(routeSelected)}
                className="m-2 bg-vert hover:bg-verth rounded-md text-white font-normal shadow-md py-2 px-4"
              >
                VALIDER ET PAYER
              </button>
            </div>
          </div>
          {modalOn && <GoBuyCoins setmodalOn={setmodalOn} />}
        </div>
      </div>
    </div>
  );
};

export default ThirdStep;
// Trajet prévu le : {routeSelected.routeSelected.departure_date}
// Pour :
