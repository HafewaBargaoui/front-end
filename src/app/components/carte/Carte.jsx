import React from "react";
//import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";
import "../../../../node_modules/leaflet/dist/leaflet.css";
import "../../app.scss";

const Carte = () => {
  const position = [50.64055652613224, 3.0438356144452072];
  const position1 = [50.54055552613224, 3.14377356144452072];

  return (
    <div className="rounded-lg z-10 h-5/6 w-5/6">
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        <TileLayer url="https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}@2x.jpg?key=KqtlJiAPF3SvpfVBeuZ4" />
        <Marker position={position}>
          <Popup>user1 ici !</Popup>
        </Marker>
        <Marker position={position1}>
          <Popup>user2 ici !</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Carte;
