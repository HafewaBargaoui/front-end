import React, { useState, useEffect } from "react";
import "../../../../node_modules/leaflet/dist/leaflet.css";
import "../../app.scss";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.js";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import { useLocation } from "react-router-dom";

const Carte = ({ trajetDepart, trajetArrive }) => {
  const location = useLocation();
  const selectedDepart = location.state?.selectedDepart;
  const selectedArrive = location.state?.selectedArrive;
  const position = [50.64055652613224, 3.0438356144452072];
  const position1 = [50.54055552613224, 3.14377356144452072];
  const [routingControl, setRoutingControl] = useState(null);
  const [tempsTrajet, settempsTrajet] = useState();
  const [distanceTrajet, setdistanceTrajet] = useState();
  const [coinCost, setcoinCost] = useState()

  useEffect(() => {
    const map = L.map("map");
    L.tileLayer(
      "https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}@2x.jpg?key=KqtlJiAPF3SvpfVBeuZ4"
    ).addTo(map);

    const waypoints = [L.latLng(0, 0), L.latLng(0, 0)];

    {
      selectedDepart
        ? (waypoints[0] = L.latLng(
            selectedDepart.center.lat,
            selectedDepart.center.lng
          ))
        : (waypoints[0] = L.latLng(
            trajetDepart.center.lat,
            trajetDepart.center.lng
          ));
    }

    {
      selectedArrive
        ? (waypoints[1] = L.latLng(
            selectedArrive.center.lat,
            selectedArrive.center.lng
          ))
        : (waypoints[1] = L.latLng(
            trajetArrive.center.lat,
            trajetArrive.center.lng
          ));
    }

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

    routingControl.on("routesfound", function (e) {
      const routes = e.routes;
      const summary = routes[0].summary;
      const distance = summary.totalDistance / 1000;
      const time = Math.round(summary.totalTime);
      

      const date = new Date(null);
      date.setSeconds(time);
      const hhmmssFormat = date.toISOString().substr(11, 8);
      settempsTrajet(hhmmssFormat);
      setdistanceTrajet(Math.round(distance));
      setcoinCost(Math.round(distance / 2));
    });
  }, []);

  return (
    <>
      <div id="map" className="rounded-lg z-10 h-5/6 w-4/6"></div>
    </>
  );
};

export default Carte;
