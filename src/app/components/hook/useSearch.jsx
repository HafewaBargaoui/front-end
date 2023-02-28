import { useState, useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.js";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";

export const useSearch = () => {

  const [depart, setDepart] = useState("");
  const [arrive, setArrive] = useState("");
  const [resultsDepart, setresultsDepart] = useState([]);
  const [resultsArrive, setresultsArrive] = useState([]);


  useEffect(() => {
    L.Control.Geocoder.nominatim().geocode(depart, function (results) {
      setresultsDepart(results);
      L.Control.Geocoder.nominatim().geocode(arrive, function (results) {
        setresultsArrive(results);
      });
    });
  }, [depart, arrive]);

  return {
    depart,
    setDepart,
    arrive,
    setArrive,
    resultsDepart,
    setresultsDepart,
    resultsArrive,
    setresultsArrive
  };
};
