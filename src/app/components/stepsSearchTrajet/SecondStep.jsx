import React, { useEffect, useState } from "react"
import { getDriverRoute } from "../../api/backend/account";

const SecondStep = ({trajetDepart, trajetArrive, click2, routeSelected, setRouteSelected, }) => {

  const [driverRouteSelected, setDriverRoute] = useState([]);
  const [routeMatched, setRouteMatched] = useState();

  useEffect(async () => {
    const response = await getDriverRoute({ trajetD: trajetDepart.name, trajetA: trajetArrive.name });
    setDriverRoute(response.data);
    setRouteMatched(response.data.length)
  }, []);

  const [select, setselect] = useState(false)

  const submitRouteSelected = async(route) => {
    setRouteSelected(route)
    setselect(!select)
  }

  return (
    <div>
      <div className="rounded-xl px-4 shadow-lg lg:px-8 bg-cover bg-center bg-white bg-opacity-30 shadow-gray-900/80">
        <h6 className="text-center m-1 font-semibold">
          {routeMatched} Trajets trouvés pour votre recherche :
        </h6>

        <div className="mt-6 mx-10">
          {driverRouteSelected.map((route) => (
            <div onClick={() => submitRouteSelected(route)} 
                 key={route._id} 
                 className={`grid grid-flow-col place-items-center ${select ? "bg-vert" : "bg-slate-100"}  bg-opacity-90 w-full rounded-lg m-auto mt-4 drop-shadow-lg `}>
              <label for="scales">Départ : {route.starting_location}, Arrivée : {route.arrival_location}</label>

            </div>
          ))}
        </div>
      </div>
      <button
        onClick={click2}
        className="m-2 bg-vert hover:bg-verth rounded-md text-white font-normal shadow-md py-0 px-1">
        Etape suivante
      </button>
    </div>
  );
};

export default SecondStep;