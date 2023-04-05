import { useState } from "react";


export const useNextSearch = () => {


  const [clickSuivant, setclickSuivant] = useState(false);
  const [routeSelected, setRouteSelected] = useState();
  const [trajetDepart, settrajetDepart] = useState([]);
  const [trajetArrive, settrajetArrive] = useState([]);


  return {
    clickSuivant,
    setclickSuivant,
    routeSelected,
    setRouteSelected,
    trajetDepart,
    settrajetDepart,
    trajetArrive,
    settrajetArrive,
  };
};
