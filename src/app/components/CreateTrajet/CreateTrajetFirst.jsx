import React, { Fragment } from "react";
import { Combobox, Transition, Listbox } from "@headlessui/react";
import { CheckIcon, ChevronUpIcon } from "@heroicons/react/solid";

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
    // <div className=" rounded-xl px-4 shadow-lg lg:px-8 bg-cover bg-center bg-white bg-opacity-30 shadow-gray-900/80">
    <div className="rounded-lg px-16 py-12 shadow bg-cover bg-slate-500 bg-opacity-50">

      <form>
        {/* grid grid-row-2 */}
        <div className="flex flex-row">
          <p className="text-xl font-semibold mt-2 mr-4 text-white">Partir de :</p>
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
                    className="h-5 w-5 text-gray-400 "
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
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-jauneh text-black" : "text-gray-900"
                          }`
                        }
                        value={depart}
                      >
                        {({ selectedDepart, active }) => (
                          <>
                            <span
                              className={`block truncate ${selectedDepart ? "font-medium" : "font-normal"
                                }`}
                            >
                              {depart.name}
                            </span>
                            {selectedDepart ? (
                              <span
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-white" : "text-teal-600"
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

          <p className="text-xl font-semibold text-white mt-2 mr-4 ml-24">Arriver à :</p>
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
                <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {filteredArrive.length === 0 && arrive !== "" ? (
                    <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                      Nothing found.
                    </div>
                  ) : (
                    filteredArrive.map((arrive, i) => (
                      <Combobox.Option
                        key={i}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-jauneh text-black" : "text-gray-900"
                          }`
                        }
                        value={arrive}
                      >
                        {({ selectedArrive, active }) => (
                          <>
                            <span
                              className={`block truncate ${selectedArrive ? "font-medium" : "font-normal"
                                }`}
                            >
                              {arrive.name}
                            </span>
                            {selectedArrive ? (
                              <span
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-white" : "text-teal-600"
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

        </div>

        {/* <p className="text-xl font-semibold text-white mt-2 mr-4 ml-24">Arriver à :</p> */}
        {/* <p className="text-xl font-semibold mt-2 mr-4 text-white">Partir de :</p>  */}

        <div className="flex flex-row mt-6">

          <div className="mt-12 ">
            <label
              className=" text-white text-xl mr-4 font-semibold mt-2"
              htmlFor="departure-date"
            >
              Partir le :
            </label>
            <input
              className=" border rounded-lg text-gray-700 mr-28"
              id="departure-date"
              name="departure-date"
              type="date"
              onChange={(e) => setdateDepart(e.target.value)}
            />

            <label
              className=" text-white text-xl font-semibold mb-2 ml-10 mr-4 text-center mt-6 "
              htmlFor="departure-date"
            >
              Heure :
            </label>
            <input
              className="pr-6 rounded-lg "
              id="departure-time"
              name="departure-time"
              type="time"
              onChange={(e) => setheureDepart(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-start mt-16 mb-6">
          <p className="text-xl font-semibold text-white pt-2 mr-4">Véhicules :</p>
          <Listbox value={selectedvehicule} onChange={setselectedvehicule}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white mr-32 py-4 pl-3 pr-12 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate">{vehicule.brand}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {vehicule.map((vehicule, i) => (
                    <Listbox.Option
                      key={i}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                        }`
                      }
                      value={vehicule}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                              }`}
                          >
                            {vehicule.brand}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>


        <div className="p-6 ">
          <div className="flex justify-center">
            <div>
              {/* <input
                  onClick={click}
                  value="Etape suivante"
                  className="mt-4 py-2 px-4 bg-vert hover:bg-verth rounded-md group shadow-md relative w-full text-white "
                /> */}
              <button
                className="mt-8 bg-vert hover:bg-verth rounded-md group shadow-md relative w-full text-white font-medium shadow-md py-4 px-12 uppercase"
                onClick={click}
              >
                Etape suivante
              </button>
            </div>
          </div>
        </div>
        {/* </div> */}
      </form>
    </div>
  );
};

export default CreateTrajetFirst;
