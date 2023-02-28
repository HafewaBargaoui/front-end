import React, { useState, useEffect, Fragment } from "react";
import "../../../../node_modules/leaflet/dist/leaflet.css";
import "../../app.scss";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.js";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import { useLocation } from "react-router-dom";

const Carte = () => {
  const location = useLocation();
  const selectedDepart = location.state?.selectedDepart;
  const selectedArrive = location.state?.selectedArrive;
  console.log(selectedArrive);
  console.log(selectedDepart);
  const position = [50.64055652613224, 3.0438356144452072];
  const position1 = [50.54055552613224, 3.14377356144452072];
  const [routingControl, setRoutingControl] = useState(null);


  


  useEffect(() => {
    const map = L.map("map");
    L.tileLayer(
      "https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}@2x.jpg?key=KqtlJiAPF3SvpfVBeuZ4"
    ).addTo(map);

    const waypoints = [L.latLng(0, 0), L.latLng(0, 0)];

    waypoints[0] = L.latLng(
      selectedDepart.center.lat,
      selectedDepart.center.lng
    );
    waypoints[1] = L.latLng(
      selectedArrive.center.lat,
      selectedArrive.center.lng
    );

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
    routingControl.setWaypoints(waypoints);
    setRoutingControl(routingControl);
  }, []);



    console.log(selectedDepart);
    console.log(selectedArrive);

    
  

  return (
    <>
      <div id="map" className="rounded-lg z-10 h-5/6 w-4/6"></div>
  
    </>
  );
};

export default Carte;
