import React from "react";
import SelectDepart from "./Select_Trajet/SelectDepart";
import SelectArrive from "./Select_Trajet/SelectArrive";

const FirstStep = ({
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
}) => {
  return (
    <div className=" rounded-xl px-4 shadow-lg lg:px-8 bg-cover bg-center bg-white bg-opacity-30 shadow-gray-900/80">
      <form>
        <div className=" grid grid-cols-1 md:grid-cols-2">
          {/*//////////////////////////////////////// Depart ///////////////////////////////////////////////////////*/}
          <div className="p-6">
            <label
              className="block text-gray-800 text-md font-semibold mb-2 text-center"
              htmlFor="departure"
            >
              Départ :
            </label>

            <SelectDepart
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
            <SelectArrive
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
              Partir le :
            </label>
            <input
              className=" shadow appearance-none border rounded-md w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="departure-date"
              name="departure-date"
              type="date"
            ></input>
          </div>
          {/*//////////////////////////////////////// Nombre de passagers ///////////////////////////////////////////////////////*/}
          <div className="p-6">
            <div className="flex flex-col">
              <div>
                <p className="block text-gray-800 text-md font-semibold mb-2 text-center">
                  Nombre de passagers :
                </p>
              </div>

              <div className=" p-4 bg-white rounded-md">
                <input
                  className="ml-2 cursor-pointer"
                  type="radio"
                  name="nbr-passengers"
                  id="solo"
                  value="seul"
                />
                <label className="p-2" htmlFor="solo">
                  Je voyage seul(e)
                </label>
              </div>
              <div className="mt-4 p-4 bg-white rounded-md">
                <div>
                  <input
                    className="ml-2 cursor-pointer"
                    type="radio"
                    name="nbr-passengers"
                    id="accompanied"
                    value="accompagné"
                  />
                  <label className="p-2" htmlFor="accompanied">
                    Je suis accompagné(e)
                  </label>
                </div>
                <div className="p-4">
                  <label
                    className="font-light text-sm "
                    htmlFor="numberPassengers"
                  >
                    Nombre de passagers :
                  </label>
                  <input
                    className="shadow appearance-none border rounded-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-20 h-7 ml-2"
                    id="numberPassengers"
                    name="numberPassengers"
                    type="number"
                  ></input>
                </div>
              </div>

              <div>
                <input
                  onClick={click}
                  value="Etape suivante"
                  className="mt-4 py-2 px-4 bg-vert hover:bg-verth rounded-md group shadow-md relative w-full text-white text-center cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FirstStep;
