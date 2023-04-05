import React, { useState } from "react"
import FirstStep from "../components/stepsSearchTrajet/FirstStep";
import SecondStep from "../components/stepsSearchTrajet/SecondStep";
import ThirdStep from "../components/stepsSearchTrajet/ThirdStep";
import PrefsTrajet from "../components/stepsSearchTrajet/PrefsTrajet";
import { useSearch } from "../hook/UseSearch";
import Carte from "../components/carte/Carte";

const SearchTrajetView = () => {

  const {
    depart,
    setDepart,
    arrive,
    setArrive,
    resultsDepart,
    resultsArrive,
  } = useSearch();

  const [clickNext, setclickNext] = useState(false);
  const [clickSuivant, setclickSuivant] = useState(false);
  const [trajetDepart, settrajetDepart] = useState([]);
  const [trajetArrive, settrajetArrive] = useState([]);
  const [selectedDepart, setselectedDepart] = useState(resultsDepart[0]);
  const [selectedArrive, setselectedArrive] = useState(resultsArrive[0]);
  const [routeSelected, setRouteSelected] = useState();

  const filteredDepart =
    depart === ""
      ? resultsDepart
      : resultsDepart.filter((depart) => depart.name);

  const filteredArrive =
    arrive === ""
      ? resultsArrive
      : resultsArrive.filter((arrive) => arrive.name);


  const click2 = (e) => {
    e.preventDefault();
    setclickSuivant(!clickSuivant);
    setRouteSelected(routeSelected)
  };

  const click = (e) => {
    e.preventDefault();
    setclickNext(!clickNext);
    settrajetDepart(selectedDepart);
    settrajetArrive(selectedArrive);
  };

  return (
    <>
      <div className="container flex "></div>
      <div className="bg-cover bg-[url('./imgs/Gradient.png')] w-full h-full  relative  flex flex-col items-center justify-center loginContainer ">
        <div className="grid grid-flow-col text-center text-sm font-normal mx-4 p-4  ">
          {/* //////////////////////////////////////// Affichage conditionnel ////////////////////////////////////////*/}

          {!clickSuivant ? (
            <div
              className={`rounded-md ${
                !clickNext ? "bg-green-500" : "bg-slate-400 cursor-pointer "
              } w-24 h-12 mx-2 font-semibold grid justify-center items-center `}
            >
              <p className="">Informations trajet</p>
            </div>
          ) : (
            <div className="rounded-md bg-slate-400 w-24 h-12 mx-2 font-semibold grid justify-center items-center cursor-pointer ">
              <p>Informations trajet</p>
            </div>
          )}
          {!clickSuivant ? (
            <div
              className={`rounded-md ${
                clickNext ? "bg-green-500" : "bg-slate-400 cursor-pointer"
              } w-24 h-12 mx-2 font-semibold grid justify-center items-center`}
            >
              <p>Choix du trajet</p>
            </div>
          ) : (
            <div className="rounded-md  bg-slate-400 w-24 h-12 mx-2 font-semibold grid justify-center items-center cursor-pointer">
              <p>Choix du trajet</p>
            </div>
          )}

          <div
            className={`rounded-md ${
              clickSuivant ? "bg-green-500" : "bg-slate-400 cursor-pointer"
            } w-24 h-12 mx-2 font-semibold grid justify-center items-center`}
          >
            <p>Réservation</p>
          </div>
        </div>

        <div className=" h-full w-full grid gap-4 place-content-center ">
          {!clickNext && (
            <FirstStep
              setclickNext={setclickNext}
              clickNext={clickNext}
              click={click}
              settrajetDepart={settrajetDepart}
              settrajetArrive={settrajetArrive}
              trajetDepart={trajetDepart}
              trajetArrive={trajetArrive}
              filteredDepart={filteredDepart}
              filteredArrive={filteredArrive}
              setselectedDepart={setselectedDepart}
              selectedDepart={selectedDepart}
              setselectedArrive={setselectedArrive}
              selectedArrive={selectedArrive}
              depart={depart}
              arrive={arrive}
              setDepart={setDepart}
              setArrive={setArrive}
            />
          )}
          {clickNext && !clickSuivant && (
            <div className="">
              {/* <PrefsTrajet /> */}

              {/* <Carte 
                trajetDepart={trajetDepart}
                trajetArrive={trajetArrive}
              /> */}
              <SecondStep
                setclickSuivant={setclickSuivant}
                setRouteSelected={setRouteSelected}
                routeSelected={routeSelected}
                trajetDepart={trajetDepart}
                trajetArrive={trajetArrive}
                click2={click2}
              />
            </div>
          )}

          {clickSuivant && (
            <div className="grid grid-cols-2">
              <div><Carte trajetDepart={trajetDepart} trajetArrive={trajetArrive} /></div>
                <div><ThirdStep routeSelected={routeSelected} /></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default SearchTrajetView;
