import React, { useEffect } from "react";
import "../../../../node_modules/leaflet/dist/leaflet.css";
import "../../app.scss";

import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.js";

const Carte = () => {
  const position = [50.64055652613224, 3.0438356144452072];
  const position1 = [50.54055552613224, 3.14377356144452072];

  useEffect(() => {
    const map = L.map("map");
    L.tileLayer(
      "https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}@2x.jpg?key=KqtlJiAPF3SvpfVBeuZ4"
    ).addTo(map);

    L.marker(position).addTo(map).bindPopup("user1 ici !");

    L.marker(position1).addTo(map).bindPopup("user2 ici !");

    L.Routing.control({
      waypoints: [L.latLng(position), L.latLng(position1)],
    }).addTo(map);
  }, [position, position1]);

  return <div id="map" className="rounded-lg z-10 h-5/6 w-5/6"></div>;
};

export default Carte;
