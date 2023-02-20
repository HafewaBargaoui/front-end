import React, { useState, useEffect } from "react";
import "../../../../node_modules/leaflet/dist/leaflet.css";
import "../../app.scss";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.js";
import "leaflet-control-geocoder/dist/Control.Geocoder.js"
import "leaflet-control-geocoder/dist/Control.Geocoder.css"

const Carte = () => {
  const position = [50.64055652613224, 3.0438356144452072];
  const position1 = [50.54055552613224, 3.14377356144452072];
  const [routingControl, setRoutingControl] = useState(null);
  const [depart, setDepart] = useState("Lille");
  const [arrive, setArrive] = useState("Paris");
  const [results, setresults] = useState([])
  const [err, seterr] = useState(false);
  const [errMsg, seterrMsg] = useState("entrez une destination valide");

  useEffect(() => {
    const map = L.map("map");
    L.tileLayer(
      "https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}@2x.jpg?key=KqtlJiAPF3SvpfVBeuZ4"
    ).addTo(map);

    const routingControl = L.Routing.control({
      waypoints: [L.latLng(position), L.latLng(position1)],
      lineOptions: {
        styles: [{
          color: "#F4E04D",
          weight: 3,
          opacity: 0.8
        }],
      },
    }).addTo(map);
    setRoutingControl(routingControl);
  }, []);

  const submit = (e) => {
    e.preventDefault();
    const waypoints = [
      L.latLng(0, 0),
      L.latLng(0, 0),
    ];

    L.Control.Geocoder.nominatim().geocode(depart, function (results) {
        console.log(results);
        if (results.length > 0 ) {
          waypoints[0] = L.latLng(results[0].center.lat, results[0].center.lng);
          
          L.Control.Geocoder.nominatim().geocode(arrive, function (results) {
            waypoints[1] = L.latLng(results[0].center.lat, results[0].center.lng);
            routingControl.setWaypoints(waypoints);
          });
        } else {
          seterr(true)
        }

    });
  };

  return (
    <>
      <div id="map" className="rounded-lg z-10 h-5/6 w-4/6"></div>
      <div className="ml-6">
        <form onSubmit={submit} method="post" className="grid grid-flow-row ">
          <input type="text" value={depart} onChange={(e) => setDepart(e.target.value)} />
          <input type="text" value={arrive} onChange={(e) => setArrive(e.target.value)} />
          <button type="submit" className="mt-8 bg-vert hover:bg-verth rounded-md text-black  font-normal shadow-md  py-2 px-4">
            Rechercher
          </button>
          {err && <p className="text-red-500">{errMsg}</p>}
        </form>
      </div>
    </>
  );
};


export default Carte;
