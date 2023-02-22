import React, { useState, useEffect, Fragment } from "react";
import "../../../../node_modules/leaflet/dist/leaflet.css";
import "../../app.scss";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.js";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpIcon } from "@heroicons/react/solid";

const Carte = () => {
  const position = [50.64055652613224, 3.0438356144452072];
  const position1 = [50.54055552613224, 3.14377356144452072];
  const [routingControl, setRoutingControl] = useState(null);
  const [depart, setDepart] = useState("");
  const [arrive, setArrive] = useState("");
  const [resultsDepart, setresultsDepart] = useState([]);
  const [resultsArrive, setresultsArrive] = useState([]);
  const [selectedDepart, setselectedDepart] = useState(resultsDepart[0]);
  const [selectedArrive, setselectedArrive] = useState(resultsArrive[0]);

  useEffect(() => {
    const map = L.map("map");
    L.tileLayer(
      "https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}@2x.jpg?key=KqtlJiAPF3SvpfVBeuZ4"
    ).addTo(map);

    const routingControl = L.Routing.control({
      waypoints: [L.latLng(position), L.latLng(position1)],
      lineOptions: {
        styles: [
          {
            color: "#F4E04D",
            weight: 3,
            opacity: 0.8,
          },
        ],
      },
    }).addTo(map);
    setRoutingControl(routingControl);
  }, []);

  useEffect(() => {
    L.Control.Geocoder.nominatim().geocode(depart, function (results) {
      setresultsDepart(results);
    L.Control.Geocoder.nominatim().geocode(arrive, function (results) {
      setresultsArrive(results);
    });
  });
  }, [depart, arrive]);

  const filteredDepart =
    depart === ""
      ? resultsDepart
      : resultsDepart.filter((depart) => depart.name);

  const filteredArrive =
    arrive === ""
      ? resultsArrive
      : resultsArrive.filter((arrive) => arrive.name);

  const submit = (e) => {
    e.preventDefault();
    console.log(selectedDepart);
    console.log(selectedArrive);
    const waypoints = [L.latLng(0, 0), L.latLng(0, 0)];

    waypoints[0] = L.latLng(
      selectedDepart.center.lat,
      selectedDepart.center.lng
    );
    waypoints[1] = L.latLng(
      selectedArrive.center.lat,
      selectedArrive.center.lng
    );
    routingControl.setWaypoints(waypoints);
  };

  return (
    <>
      <div id="map" className="rounded-lg z-10 h-5/6 w-4/6"></div>
      <div className="ml-6">
        <form onSubmit={submit} method="post" className="grid grid-flow-row ">
          <div>
            <p className="text-white mb-4">Départ : </p>
            <Combobox value={selectedDepart} onChange={setselectedDepart}>
              <div className="relative mt-1">
                <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                  <Combobox.Input
                    className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                    displayValue={(depart) => depart.name}
                    onChange={(e) => setDepart(e.target.value)}
                    autocomplete="off"
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
                              active
                                ? "bg-jauneh text-black"
                                : "text-gray-900"
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
            
            <p className="text-white mt-4 mb-4">Arrivée : </p>
            <Combobox value={selectedArrive} onChange={setselectedArrive}>
              <div className="relative mt-1">
                <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                  <Combobox.Input
                    className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                    displayValue={(arrive) => arrive.name}
                    onChange={(e) => setArrive(e.target.value)}
                    autocomplete="off"
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
                              active
                                ? "bg-jauneh text-black"
                                : "text-gray-900"
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
          </div>

          <button
            type="submit"
            className="mt-8 bg-vert hover:bg-verth rounded-md text-black  font-normal shadow-md  py-2 px-4"
          >
            Rechercher
          </button>
        </form>
      </div>
    </>
  );
};

export default Carte;
