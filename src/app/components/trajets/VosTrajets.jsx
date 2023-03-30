import React, { useEffect } from "react";
import { useState } from "react";
import buddycoin from "../../assets/images/profil/buddycoin.png";
import { userJourney, updateRoute } from "../../api/backend/trajetAPI";
import { useSelector } from "react-redux";
import {selectIsLogged} from "../../redux-store/authenticationSlice";
import { Fade } from "react-awesome-reveal";


const VosTrajets = () => {
  const isAuthenticated = useSelector(selectIsLogged);
  const [infos, setinfos] = useState([])
  const [route, setroute] = useState([])

  const journey = async () => {
    const response = await userJourney();
    setinfos([response.data])
    setroute(response.data.route)
  };
  console.log(route);

  useEffect(() => {
    if (isAuthenticated) {
      journey();
    }
  }, [isAuthenticated])


  const [ClickedDone, setClickedDone] = useState()
  const [select, setselect] = useState()
  const updateDriverRoute = async () => {
    console.log(ClickedDone);
    await updateRoute(ClickedDone);
  }


  
  return (
    <div className="m-36 w-full">
      <div className="m-2 ">
        <div
          className='grid grid-flow-col justify-between place-items-center bg-white w-full rounded-lg p-2 drop-shadow-lg'
        >
          <p className="uppercase font-semibold m-2">
            Vos Trajets / <span className="font-light">en cours</span>
          </p>
        </div>

        <div
          className='h-64 overflow-y-scroll bg-opacity-10 mt-0 bg-slate-300 rounded-b-xl scrollbar'
        >
          <div className="mt-6 mx-10">
            {route.map((route, i) => (
              <Fade key={i} cascade>

              <div
                className={`grid grid-flow-col place-items-center ${route.done == true && "opacity-30" } bg-slate-100 bg-opacity-90 w-full rounded-lg m-auto mt-4 drop-shadow-lg `}
                key={i}
              >
                <p className="uppercase font-semibold m-2">{route.departure_date}</p>
                <p className="uppercase font-semibold m-2">{route.departure_time}</p>
                <p className="uppercase font-semibold m-2">
                  {route.starting_location.split(",", [1])} /{" "}
                  <span className="font-light">{route.arrival_location.split(",", [1])}</span>
                </p>

                <img src={infos[0].profilePrefs.file[0].filename} alt="photo conducteur" className="w-8 h-8" />
                <p className="uppercase font-semibold m-2">
                  {infos[0].user.name} /{" "}
                  <span className="font-light">{route.vehicule.brand}</span>
                </p>
                <div className="grid grid-flow-col place-items-center">
                  <img src={buddycoin} alt="buddycoin" className="w-4 h-4" />
                  <span className="font-light">{route.point_cost}</span>
                </div>
              <div>
              {route.done == true ? 
              <div className="bg-jauneh p-1 rounded-md uppercase">VALIDÉ</div>
              :
                <button 
                  className={`${select === i ? "bg-jaune hover:bg-jauneh" : "bg-vert hover:bg-verth"} p-1 rounded-md shadow-md uppercase`}
                  onClick={()=>{updateDriverRoute() , setClickedDone(route), setselect(i)}}
                  >
                  terminé
                </button>
              } 
              </div>
              </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>   
    </div>
  );
};

export default VosTrajets;
