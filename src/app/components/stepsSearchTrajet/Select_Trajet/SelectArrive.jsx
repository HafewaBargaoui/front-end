import React, { Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/solid";
import { LocationMarkerIcon } from "@heroicons/react/outline";


const SelectArrive = ({  
    filteredArrive,
    setselectedArrive,
    selectedArrive,
    arrive,
    setArrive
}) => {
  return (
    <Combobox value={selectedArrive} onChange={setselectedArrive}>
    <div className="relative mt-1">
      <div className="relative flex items-center text-slate-400 focus-within:text-gray-600  w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
        <LocationMarkerIcon
          className="h-5 w-5 absolute ml-3 pointer-events-none"
          aria-hidden="true"
        />
        <Combobox.Input
          className="w-full border-none py-2 pl-10 pr-3 text-sm leading-5 text-gray-900 focus:ring-0"
          displayValue={(arrive) => arrive.name}
          onChange={(e) => setArrive(e.target.value)}
          autoComplete="off"
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
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
  )
}

export default SelectArrive