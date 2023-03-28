import React from "react";
import { updateRoomUser } from "../../api/backend/account";
import paul from "../../assets/images/profil/fakeUser3.png";
import { StarIcon } from "@heroicons/react/solid";
import buddycoin from "../../assets/images/profil/buddycoin.png";
import { useNavigate } from "react-router-dom";
import { URL_TRAJET_SEARCH_VALIDE } from "../../constants/urls/urlFrontEnd";

// Implementer la verification si user connecte sinon refuser la validation

const ThirdStep = (routeSelected) => {
  const navigate = useNavigate();
  console.log(routeSelected);

  const submitRouteSelected = async (route) => {
    updateRoomUser(route);
    navigate(URL_TRAJET_SEARCH_VALIDE);
  };
  return (
    <div>
      <div className="max-w-2xl rounded-xl px-4 py-4 shadow-lg lg:px-8 bg-cover bg-center bg-white bg-opacity-30 shadow-gray-900/80">
        <h6 className="text-center m-1 font-semibold">
          Vous avez selectionné :
        </h6>

        <div className="bg-slate-100 bg-opacity-90 w-full rounded-lg m-auto mt-4 drop-shadow-lg p-8 ">
          {/* ////////////////////////////// */}
          <div className="grid grid-cols-2 ">
            <p className="font-semibold">Trajet prévu le : </p>

            <p className="font-thin">
              {routeSelected.routeSelected.departure_date}
            </p>
          </div>

          <div className="grid grid-cols-2">
            <p className="font-semibold"> De : </p>

            <p className="font-thin">
              {routeSelected.routeSelected.starting_location}
            </p>
          </div>

          <div className="grid grid-cols-2">
            <p className="font-semibold uppercase"> à : </p>

            <p className="font-thin">
              {routeSelected.routeSelected.arrival_location}
            </p>
          </div>

          {/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <div>
            <hr className="h-1 my-4 bg-gray-300 border-0 dark:bg-gray-700" />
          </div>

          {/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <div className="grid grid-cols-2">
            <p className="font-semibold uppercase"> Pour : </p>
            <div className="flex flex-row">
              <div>
                <p className="font-thin">
                  {routeSelected.routeSelected.point_cost}
                </p>
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
              <img src={paul} alt="driver" className="w-12 h-12" />

              <div>Paul / {routeSelected.routeSelected.vehicule.brand}</div>
            </div>
          </div>
          <div>
            <hr className="h-1 my-4 bg-gray-300 border-0 dark:bg-gray-700" />
          </div>

          <div className="grid grid-cols-2">
            {/* <div className=" flex flex-row"> */}
            <p className="font-thin ">
              {" "}
              Besoin d'informations complémentaires ?
            </p>

            <button className=" bg-jaunebtn rounded-md hover:bg-jauneh drop-shadow-md py-0 px-4">
              Discuter
            </button>
            {/* </div> */}
          </div>

          {/* /////////////////////////////////////// */}
          <div>
            <hr className="h-1 my-4 bg-gray-300 border-0 dark:bg-gray-700" />
          </div>

          <div className="grid justify-center content-center items-center">
            <button
              onClick={() => submitRouteSelected(routeSelected.routeSelected)}
              className="m-2 bg-vert hover:bg-verth rounded-md text-white font-normal shadow-md py-2 px-4"
            >
              VALIDER ET PAYER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdStep;
// Trajet prévu le : {routeSelected.routeSelected.departure_date}
// Pour :
