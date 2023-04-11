import React, { useEffect, useState } from "react";
import { getDriverRoute } from "../../api/backend/trajetAPI";
import buddycoin from "../../assets/images/profil/buddycoin.png";
import { StarIcon } from "@heroicons/react/solid";
import ConducteurModal from "../modals/ConducteurModal";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useNextSearch } from "../../hook/useNextSearch";
import { URL_SEARCH_JOIN } from "../../constants/urls/urlFrontEnd";

const SecondStep = () => {
  const navigate = useNavigate();

  const location = useLocation();
  console.log(location.state);
  const { trajetDepart, trajetArrive } = location.state;

    const {
    setRouteSelected,
    routeSelected
  } = useNextSearch();

  const click2 = (e) => {
    e.preventDefault();
    setRouteSelected(routeSelected);
    console.log(routeSelected);
    navigate(URL_SEARCH_JOIN, { 
      state: 
      {
        routeSelected: routeSelected ,
        trajetDepart: trajetDepart,
        trajetArrive: trajetArrive
        } })
  };

  
 
  const [showMyModal, setshowMyModal] = useState(false);
  const [infoRoute, setInfoRoute] = useState([]);
  const handleOnClose = () => setshowMyModal(false);

  const [driverRouteSelected, setDriverRoute] = useState([]);
  const [routeMatched, setRouteMatched] = useState();

  useEffect(async () => {
    const response = await getDriverRoute({
      trajetD: trajetDepart.name,
      trajetA: trajetArrive.name,
    });
    setDriverRoute(response.data);
    setRouteMatched(response.data.length);
  }, []);

  const [select, setselect] = useState();

  const submitRouteSelected = async (route) => {
    setRouteSelected(route);
    setselect(!select);
  };

  console.log(driverRouteSelected);
  return (
    <div className="bg-cover bg-[url('./imgs/Gradient.png')] w-full h-full  relative  flex flex-col items-center justify-center loginContainer ">
      <div className="rounded-xl p-4 shadow-lg lg:px-8 bg-cover bg-center bg-white bg-opacity-30 shadow-gray-900/80 text-center">
        {console.log(trajetDepart.name.split(",", [1]))}
        {routeMatched == 0 ? (
          <h6> Aucun trajet ne correspond à votre recherche.</h6>
        ) : routeMatched == 1 ? (
          <h6> 1 trajet correspond à votre recherche. </h6>
        ) : (
          <h6 className="text-center m-1 font-semibold">
            {routeMatched} Trajets trouvés pour votre recherche.
          </h6>
        )}

        <div className="mt-6 mx-10">
          {driverRouteSelected.map((route) => (
            <div
              onClick={() => {
                submitRouteSelected(route);
                setselect(route._id);
              }}
              key={route._id}
              ////////////////////////////  Affichage des trajets ////////////////////////////////////////////////////
              className={`${
                select === route._id ? "bg-vert" : "bg-slate-100"
              } bg-opacity-90 w-full rounded-lg m-auto mt-4 drop-shadow-lg  `}
            >
              <div className="grid grid-cols-6 place-items-center p-2 ">
                <div className="">
                  <div
                    className="grid grid-cols-3 place-items-center cursor-pointer "
                    onClick={() => {
                      setshowMyModal(true);
                      setInfoRoute(route);
                    }}
                  >
                    <img
                      src={route.id_user.id_user_preference.file[0].filename}
                      alt="driver"
                      className="w-12 h-12 mr-2 ml-2 "
                    />
                    <div className="font-semibold">{route.id_user.name}</div>
                    <div className="font-light"> {route.vehicule.brand}</div>
                  </div>
                </div>

                <div className="">{route.departure_date}</div>
                <div className="">{route.departure_time}</div>
                <div className="">
                  {route.starting_location.split(",", [1])} /{" "}
                  {route.arrival_location.split(",", [1])}
                </div>

                <div className="">
                  <div className="grid grid-flow-col place-items-center ">
                    <img src={buddycoin} alt="coin" className="w-5 h-5 mr-4" />
                    <span className="font-light">{route.point_cost}</span>
                  </div>
                </div>

                <div className="grid grid-flow-col place-items-center ">
                    <p>{route.id_user.id_driver_preference[0].animal_friendly}</p>
                    <p>{route.id_user.id_driver_preference[0].smoker_friendly}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={click2}
        className="m-4 bg-vert hover:bg-verth rounded-md text-black font-normal shadow-md py-0 px-1"
      >
        Etape suivante
      </button>
      <ConducteurModal
        visible={showMyModal}
        onClose={handleOnClose}
        infoRoute={infoRoute}
      />
    </div>

  );
};

export default SecondStep;
