import React from "react";
import CreateDepart from "./Select_CreateTrajet/CreateDepart";
import CreateArrive from "./Select_CreateTrajet/CreateArrive";
import SelectVehicule from "./Select_CreateTrajet/SelectVehicule";

const CreateTrajetFirst = ({
  click,
  filteredDepart,
  filteredArrive,
  setselectedDepart,
  selectedDepart,
  setselectedArrive,
  selectedArrive,
  depart,
  arrive,
  setDepart,
  setArrive,
  setheureDepart,
  setdateDepart,
  vehicule,
  selectedvehicule,
  setselectedvehicule,
}) => {
  return (
    <div className=" rounded-xl px-4 shadow-lg lg:px-8 bg-cover bg-center bg-white bg-opacity-30 shadow-gray-900/80">
      <form>
        <div className="grid grid-cols-2">
          <div className="p-6">
            <label
              className="block text-gray-800 text-md font-semibold mb-2 text-center"
              htmlFor="departure"
            >
              Départ :
            </label>

            <CreateDepart
              filteredDepart={filteredDepart}
              setselectedDepart={setselectedDepart}
              selectedDepart={selectedDepart}
              depart={depart}
              setDepart={setDepart}
            />
          </div>
          <div className="p-6">
            <label
              className="block text-gray-800 text-md font-semibold mb-2 text-center"
              htmlFor="arrival"
            >
              Destination :
            </label>

            <CreateArrive
              filteredArrive={filteredArrive}
              setselectedArrive={setselectedArrive}
              selectedArrive={selectedArrive}
              arrive={arrive}
              setArrive={setArrive}
            />
          </div>
          <div className="p-6">
            <label
              className="block text-gray-800 text-md font-semibold mb-2 text-center"
              htmlFor="departure-date"
            >
              Date de depart :
            </label>
            <input
              className=" shadow appearance-none border rounded-md w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="departure-date"
              name="departure-date"
              type="date"
              onChange={(e) => setdateDepart(e.target.value)}
            />
          </div>
          <div className="p-6">
            <label
              className="block text-gray-800 text-md font-semibold mb-2 text-center"
              htmlFor="departure-time"
            >
              Heure :
            </label>
            <input
              className=" shadow appearance-none border rounded-md w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="departure-time"
              name="departure-time"
              type="time"
              onChange={(e) => setheureDepart(e.target.value)}
            />
          </div>
          <div className="p-6">
            <label
              className="block text-gray-800 text-md font-semibold mb-2 text-center"
              htmlFor="vehicule"
            >
              Véhicule :
            </label>

            <SelectVehicule
              vehicule={vehicule}
              selectedvehicule={selectedvehicule}
              setselectedvehicule={setselectedvehicule}
            />
          </div>

          <div className="p-6">
            <label
              className="block text-gray-800 text-md font-semibold mb-2 text-center"
              htmlFor="nbr-passengers"
            >
              Nombre de passagers :
            </label>
            <input
              className=" shadow appearance-none border rounded-md w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nbr-passengers"
              name="nbr-passengers"
              type="number"
            />
          </div>

          <div className="p-6">
            <input
              onClick={click}
              value="Etape suivante"
              className="mt-4 py-2 px-4 bg-vert hover:bg-verth rounded-md group shadow-md relative w-full text-white text-center "
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTrajetFirst;
