import React, { useEffect, useState } from "react";
import { LocationMarkerIcon } from "@heroicons/react/solid";

const FirstStep = ({ setClickNext, clickNext, click }) => {
  return (
    <div className=" rounded-xl px-4 shadow-lg lg:px-8 bg-cover bg-center bg-white bg-opacity-30 shadow-gray-900/80">
      <form>
        <div className="grid grid-cols-2">
          {/*//////////////////////////////////////// départ ///////////////////////////////////////////////////////*/}
          <div className="p-6">
            <label
              className="block text-gray-800 text-md font-semibold mb-2 text-center"
              htmlFor="departure"
            >
              Départ :
            </label>

            <input
              className=" shadow appearance-none border rounded-md w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
              id="departure"
              name="departure"
              type="text"
              placeholder="EX : Lille"
            ></input>
          </div>
          {/*//////////////////////////////////////// Arrivé///////////////////////////////////////////////////////*/}

          <div className="p-6">
            <label
              className="block text-gray-800 text-md font-semibold mb-2 text-center"
              htmlFor="arrival"
            >
              Arrivée :
            </label>
            <input
              className="shadow appearance-none border rounded-md w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="arrival"
              name="arrival"
              type="text"
              placeholder="EX : Paris"
            ></input>
          </div>
          {/*//////////////////////////////////////// Date ///////////////////////////////////////////////////////*/}

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
                  className="ml-2"
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
                    className="ml-2"
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
                <button
                  onClick={click}
                  className="mt-4 py-2 px-4 bg-vert hover:bg-verth rounded-md group shadow-md relative w-full text-white "
                >
                  Etape suivante
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FirstStep;
