import React, {useState} from "react";
import ValidatedSearch from "./ValidatedSearch"
import { updateRoomUser } from "../../api/backend/account";

// Implementer la verification si user connecte sinon refuser la validation

const ThirdStep = (routeSelected) => {

  const [next, setnext] = useState(false)

  const submitRouteSelected = async(route) => {
    updateRoomUser(route)
    setnext(!next)

  }
  return (
    <div>
      <div className="max-w-2xl rounded-xl px-4 shadow-lg lg:px-8 bg-cover bg-center bg-white bg-opacity-30 shadow-gray-900/80">
        <h6 className="text-center m-1 font-semibold">Vous avez selectionné :</h6>

        <p className="font-bold text-center" > votre trajet</p>
        <p className="font-semibold text-center" > Départ : {routeSelected.routeSelected.starting_location} </p>
        <p className="font-semibold text-center" > Arrivée : {routeSelected.routeSelected.arrival_location}</p>
        

      </div>
      <div className="grid justify-center content-center items-center">

        <button onClick={() => submitRouteSelected(routeSelected.routeSelected)}
                className="m-2 bg-vert hover:bg-verth rounded-md text-white font-normal shadow-md py-0 px-1">
          VALIDER
        </button>
      </div>
      {next && <ValidatedSearch/>}
    </div>
  );
};

export default ThirdStep;
