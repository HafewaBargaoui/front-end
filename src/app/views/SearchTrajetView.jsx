import React, { useEffect, useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import FirstStep from "../components/stepsSearchTrajet/FirstStep";
import SecondStep from "../components/stepsSearchTrajet/SecondStep";
import ThirdStep from "../components/stepsSearchTrajet/ThirdStep";
import PrefsTrajet from "../components/stepsSearchTrajet/PrefsTrajet";

const SearchTrajetView = () => {
  const [clickNext, setclickNext] = useState(false);
  const [clickSuivant, setclickSuivant] = useState(false);
  const click2 = (e) => {
    e.preventDefault();
    setclickSuivant(!clickSuivant);
  };

  const click = (e) => {
    e.preventDefault();
    setclickNext(!clickNext);
  };

  /////////////////////////////////////////////////////////////////////
  const [nextScreeen, setNextScreeen] = useState(false);
  const clickScreen = (e) => {
    e.preventDefault();
    setNextScreeen(!nextScreeen);
  };

  //////////////////////////////////////////////////////////////

  return (
    <>
      <div className="bg-cover bg-[url('./imgs/Gradient.png')] w-full h-full  relative  flex flex-col items-center justify-center loginContainer ">
        <div className="grid grid-flow-col text-center text-sm font-normal mx-4 p-4  ">
          {/* //////////////////////////////////////// Affichage conditionnel ////////////////////////////////////////*/}

          {!clickSuivant ? (
            <div
              className={`rounded-full ${
                !clickNext ? "bg-green-500" : "bg-slate-400 cursor-pointer "
              } w-24 h-24 grid justify-center items-center `}
            >
              <p className="">Informations trajet</p>
            </div>
          ) : (
            <div className="rounded-full bg-slate-400 w-24 h-24 grid justify-center items-center cursor-pointer ">
              <p>Informations trajet</p>
            </div>
          )}
          {!clickSuivant ? (
            <div
              className={`rounded-full ${
                clickNext ? "bg-green-500" : "bg-slate-400 cursor-pointer"
              } w-24 h-24 grid justify-center items-center`}
            >
              <p>Choix du trajet</p>
            </div>
          ) : (
            <div className="rounded-full  bg-slate-400 w-24 h-24 grid justify-center items-center cursor-pointer">
              <p>Choix du trajet</p>
            </div>
          )}

          <div
            className={`rounded-full ${
              clickSuivant ? "bg-green-500" : "bg-slate-400 cursor-pointer"
            } w-24 h-24 grid justify-center items-center`}
          >
            <p>Réservation</p>
          </div>
        </div>

        <div className=" pt-8 mb-12 grid gap-4 place-content-center ">
          {!clickNext && (
            <FirstStep
              setclickNext={setclickNext}
              clickNext={clickNext}
              click={click}
            />
          )}

          {clickNext & !clickSuivant && (
            <div className="">
              <PrefsTrajet />

              <SecondStep
                setclickSuivant={setclickSuivant}
                clickSuivant={clickSuivant}
                click2={click2}
              />
            </div>
          )}

          {clickSuivant && <ThirdStep />}
        </div>
      </div>
    </>
  );
};
export default SearchTrajetView;
