import React, { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";

import { LocationMarkerIcon } from "@heroicons/react/solid";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpIcon } from "@heroicons/react/solid";
import { useSearch } from "../hook/UseSearch";

const FirstStep = ({
  setClickNext,
  clickNext,
  click,
  submitSearch,
  setTrajetDepart,
  setTrajetArrive,
}) => {
  const {
    depart,
    setDepart,
    arrive,
    setArrive,
    resultsDepart,
    setresultsDepart,
    resultsArrive,
    setresultsArrive,
  } = useSearch();
  const [selectedDepart, setselectedDepart] = useState(resultsDepart[0]);
  const [selectedArrive, setselectedArrive] = useState(resultsArrive[0]);
  const filteredDepart =
    depart === ""
      ? resultsDepart
      : resultsDepart.filter((depart) => depart.name);

  const filteredArrive =
    arrive === ""
      ? resultsArrive
      : resultsArrive.filter((arrive) => arrive.name);

  const onclickTrajet = (e) => {
    e.preventDefault();
    console.log("test");
    setTrajetDepart(selectedDepart);
    setTrajetArrive(selectedArrive);
  };
  return (
    <div className=" rounded-xl px-4 shadow-lg lg:px-8 bg-cover bg-center bg-white bg-opacity-30 shadow-gray-900/80">
      <form onSubmit={submitSearch}>
        <div className="grid grid-cols-2">
          {/*//////////////////////////////////////// départ ///////////////////////////////////////////////////////*/}

          <Combobox value={selectedDepart} onChange={setselectedDepart}>
            <div className="relative mt-1">
              <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                <Combobox.Input
                  className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                  displayValue={(depart) => depart.name}
                  onChange={(e) => setDepart(e.target.value)}
                  autoComplete="off"
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Combobox.Button>
              </div>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setDepart("")}
              >
                <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {filteredDepart.length === 0 && depart !== "" ? (
                    <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                      Nothing found.
                    </div>
                  ) : (
                    filteredDepart.map((depart, i) => (
                      <Combobox.Option
                        key={i}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active ? "bg-jauneh text-black" : "text-gray-900"
                          }`
                        }
                        value={depart}
                      >
                        {({ selectedDepart, active }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selectedDepart ? "font-medium" : "font-normal"
                              }`}
                            >
                              {depart.name}
                            </span>
                            {selectedDepart ? (
                              <span
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                  active ? "text-white" : "text-teal-600"
                                }`}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Combobox.Option>
                    ))
                  )}
                </Combobox.Options>
              </Transition>
            </div>
          </Combobox>
          {/* <div className="p-6">
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
          </div> */}
          {/*//////////////////////////////////////// Arrivé///////////////////////////////////////////////////////*/}
          <Combobox value={selectedArrive} onChange={setselectedArrive}>
            <div className="relative mt-1">
              <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                <Combobox.Input
                  className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                  displayValue={(arrive) => arrive.name}
                  onChange={(e) => setArrive(e.target.value)}
                  autoComplete="off"
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Combobox.Button>
              </div>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setArrive("")}
              >
                <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {filteredArrive.length === 0 && arrive !== "" ? (
                    <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                      Nothing found.
                    </div>
                  ) : (
                    filteredArrive.map((arrive, i) => (
                      <Combobox.Option
                        key={i}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active ? "bg-jauneh text-black" : "text-gray-900"
                          }`
                        }
                        value={arrive}
                      >
                        {({ selectedArrive, active }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selectedArrive ? "font-medium" : "font-normal"
                              }`}
                            >
                              {arrive.name}
                            </span>
                            {selectedArrive ? (
                              <span
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                  active ? "text-white" : "text-teal-600"
                                }`}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Combobox.Option>
                    ))
                  )}
                </Combobox.Options>
              </Transition>
            </div>
          </Combobox>
          {/* <div className="p-6">
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
          </div> */}
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
              <div onClick={onclickTrajet}>
                <input
                  onClick={click}
                  type="submit"
                  value="Etape suivante"
                  className="mt-4 py-2 px-4 bg-vert hover:bg-verth rounded-md group shadow-md relative w-full text-white "
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
