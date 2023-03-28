import React, { useState, useEffect } from "react";
import { useSearch } from "../components/hook/UseSearch";
import CreateTrajetFirst from "../components/CreateTrajet/CreateTrajetFirst";
import CarteCreate from "../components/carte/CarteCreate";
import { useSelector } from "react-redux";
import { getProfile } from "../api/backend/account";
import { selectIsLogged, selectUser } from "../redux-store/authenticationSlice";

const TrajetCreateView = () => {

  const {
    depart,
    setDepart,
    arrive,
    setArrive,
    resultsDepart,
    resultsArrive,
  } = useSearch();

  const isAuthenticated = useSelector(selectIsLogged);
  const user = useSelector(selectUser);
  const [clickNext, setclickNext] = useState(false);
  const [clickSuivant, setclickSuivant] = useState(false);
  const [trajetDepart, settrajetDepart] = useState('');
  const [trajetArrive, settrajetArrive] = useState('');
  const [selectedDepart, setselectedDepart] = useState(resultsDepart[0]);
  const [selectedArrive, setselectedArrive] = useState(resultsArrive[0]);
  const [heureDepart, setheureDepart] = useState()
  const [dateDepart, setdateDepart] = useState()
  const [vehicule, setvehicule] = useState([]);
  const [selectedvehicule, setselectedvehicule] = useState(vehicule[0]);

  const userVehicule = async () => {
    const response = await getProfile(user.id);
    setvehicule(response.data.user.id_vehicule);
  };
  useEffect(() => {
    if (isAuthenticated) {
      userVehicule();
    }
  }, [isAuthenticated]);


  const filteredDepart =
    depart === ""
      ? resultsDepart
      : resultsDepart.filter((depart) => depart.name);

  const filteredArrive =
    arrive === ""
      ? resultsArrive
      : resultsArrive.filter((arrive) => arrive.name);


  const click = (e) => {
    e.preventDefault();
    setclickNext(!clickNext);
    settrajetDepart(selectedDepart);
    settrajetArrive(selectedArrive);
  };


  return (
    <>
      {/* <div className="bg-cover bg-[url('./imgs/Gradient.png')] w-full h-full  relative  flex flex-col items-center justify-center loginContainer "> */}
      <div className='h-full bg-cover bg-[url("/src/app/assets/images/darkgradient.png")]'>


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
              vehicule={vehicule}
              selectedvehicule={selectedvehicule}
              setselectedvehicule={setselectedvehicule}
              dateDepart={dateDepart}
              heureDepart={heureDepart}
              
            />
          )}

          {clickNext && !clickSuivant && (
            <div className="">
          
              <CarteCreate
                trajetDepart={trajetDepart}
                trajetArrive={trajetArrive}
                dateDepart={dateDepart}
              heureDepart={heureDepart}
              selectedvehicule={selectedvehicule}
              />
            
            </div>
          )}

        </div>
      </div>
    </>
  );
};
export default TrajetCreateView;
