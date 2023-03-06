import React, { useState, useEffect } from "react";
import "../../../../node_modules/leaflet/dist/leaflet.css";
import "../../app.scss";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.js";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import { useLocation } from "react-router-dom";
import { createRoute } from "../../api/backend/account";

const CarteCreate = ({ trajetDepart, trajetArrive, heureDepart, dateDepart, selectedvehicule }) => {
  const location = useLocation();
  const selectedDepart = location.state?.selectedDepart;
  const selectedArrive = location.state?.selectedArrive;
  const position = [50.64055652613224, 3.0438356144452072];
  const position1 = [50.54055552613224, 3.14377356144452072];
  const [routingControl, setRoutingControl] = useState(null);
  const [tempsTrajet, settempsTrajet] = useState();
  const [distanceTrajet, setdistanceTrajet] = useState();
  const [coinCost, setcoinCost] = useState();
  const [DepartLatLng, setDepartLatLng] = useState();
  const [ArriveLatLng, setArriveLatLng] = useState();
  const [voiture, setvoiture] = useState({
    brand: selectedvehicule.brand,
    model: selectedvehicule.model,
    fuel_type: selectedvehicule.fuel_type,
  })

  const submitTrajet = async () => {
    const datas = {
      starting_location: trajetDepart.name  ,
      arrival_location: trajetArrive.name ,
      distance: distanceTrajet,
      departure_time:  heureDepart,
      duration:  tempsTrajet,
      departure_date:  dateDepart,
      point_cost:  coinCost,
      starting_latlng: DepartLatLng, 
      arrival_latlng:  ArriveLatLng,
      vehicule: voiture,
    }
    console.log(datas);
    await createRoute(datas);
  }



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

    console.log(routingControl);
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
      setDepartLatLng(routes[0].waypoints[0].latLng);
      setArriveLatLng(routes[0].waypoints[1].latLng)
    });
  }, []);
  
  return (
    <div className="w-full h-full grid grid-flow-col">
      <div id="map" className="rounded-lg z-10 h-96 w-96"></div>
      <div className="">
        <p className="text-3xl text-white font-semibold">
          depart : {trajetDepart.name}{" "}
        </p>
        <p className="text-3xl text-white font-semibold">
          arrivée : {trajetArrive.name}{" "}
        </p>

        <p className="text-3xl text-white font-semibold">
          Distance : {distanceTrajet} km
        </p>
        <p className="text-3xl text-white font-semibold">
          temps : {tempsTrajet}{" "}
        </p>
        <p className="text-3xl text-white font-semibold">
          Prix : {coinCost} BuddyCoins{" "}
        </p>
        <p className="text-3xl text-white font-semibold">
          date : {dateDepart} 
        </p>
        <p className="text-3xl text-white font-semibold">
          heure départ : {heureDepart} 
        </p>
        <p className="text-3xl text-white font-semibold">
          véhicule : {selectedvehicule.brand + selectedvehicule.model}  
        </p>
        <button onClick={submitTrajet}>envoyer</button>
      </div>
    </div>
  );
};

export default CarteCreate;
