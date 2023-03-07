import React from "react";
import { updateRoomUser } from "../../api/backend/account";

// Implementer la verification si user connecte sinon refuser la validation

const ThirdStep = (routeSelected) => {
  const submitRouteSelected = async(route) => {
    updateRoomUser(route)
  }
  return (
    <div>
      <div className="max-w-2xl rounded-xl px-4 shadow-lg lg:px-8 bg-cover bg-center bg-white bg-opacity-30 shadow-gray-900/80">
        <h6 className="text-center m-1 font-semibold">Vous avez selectionné :</h6>
        
        <button onClick={() => submitRouteSelected(routeSelected.routeSelected)}>
          routeSelected : {routeSelected.routeSelected.starting_location} / {routeSelected.routeSelected.arrival_location}
        </button>

      </div>
    </div>
  );
};

export default ThirdStep;
