import React, { useState } from "react";
import SecondStep from "../components/stepsSearchTrajet/SecondStep";
import ThirdStep from "../components/stepsSearchTrajet/ThirdStep";
import PrefsTrajet from "../components/stepsSearchTrajet/PrefsTrajet";
import { useSearch } from "../components/hook/UseSearch";
import Carte from "../components/carte/Carte";
import CreateTrajetFirst from "../components/CreateTrajet/CreateTrajetFirst";
import CreateTrajetSecond from "../components/CreateTrajet/CreateTrajetSecond";
import CarteCreate from "../components/carte/CarteCreate";

const TrajetCreateView = () => {

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
  const [trajetDepart, settrajetDepart] = useState('');
  const [trajetArrive, settrajetArrive] = useState('');
  const [selectedDepart, setselectedDepart] = useState(resultsDepart[0]);
  const [selectedArrive, setselectedArrive] = useState(resultsArrive[0]);
  const [heureDepart, setheureDepart] = useState()
  const [dateDepart, setdateDepart] = useState()



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
  };

  const click = (e) => {
    e.preventDefault();
    setclickNext(!clickNext);
    settrajetDepart(selectedDepart);
    settrajetArrive(selectedArrive);
  };


  return (
    <>
      <div className="bg-cover bg-[url('./imgs/Gradient.png')] w-full h-full  relative  flex flex-col items-center justify-center loginContainer ">

        <div className=" pt-8 mb-12 grid gap-4 place-content-center ">
          {!clickNext && (
            <CreateTrajetFirst
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
              setheureDepart={setheureDepart}
              setdateDepart={setdateDepart}
              
            />
          )}

          {clickNext && !clickSuivant && (
            <div className="h-screen w-screen">
          

              <CarteCreate
                trajetDepart={trajetDepart}
                trajetArrive={trajetArrive}
                dateDepart={dateDepart}
              heureDepart={heureDepart}
              />
            
            </div>
          )}

          {clickSuivant && <ThirdStep />}
        </div>
      </div>
    </>
  );
};
export default TrajetCreateView;
