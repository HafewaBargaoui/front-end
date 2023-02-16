import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from "../../api/backend/account";
import { selectIsLogged, selectUser, selectToken } from "../../redux-store/authenticationSlice";
import AddVehiculeModal from "../modals/AddVehiculeModal";

const ProfilVehicule = () => {
  const [users, setusers] = useState([]);
  const [vehicule, setvehicule] = useState([])
  const [pref, setpref] = useState([])
  const [count, setCount] = useState(1);
  const isAuthenticated = useSelector(selectIsLogged);
  const user = useSelector(selectUser);
  const [photos, setphotos] = useState([]);

  const userProfile = async () => {
    const response = await getProfile(user.id);
    setusers(response.data.user);
    setvehicule(response.data.vehicule)
    setpref(response.data.driverPrefs[0])
    setphotos(response.data.vehicule.files) 
  }  
  useEffect(() => {
    if(isAuthenticated){
      userProfile();
    }
  }, [isAuthenticated, count])
  
  const [modalOn, setmodalOn] = useState(false);
  const [submitModifs, setsubmitModifs] = useState(false)
  
  const modal = () => {
    setmodalOn(true);
    console.log(modalOn);
  };
  
  return (
    <div className="flex grow max-w-xl space-y-3 rounded-lg pb-8   shadow  bg-cover bg-slate-500 bg-opacity-50">
    <div className="grid grid-flow-col gap-10">
      <div className="grid place-content-center ml-10">
        <div className="flex flex-col text-black">
          <p className="mt-2 text-center font-bold text-xl">Votre véhicule</p>

          <div className="mt-8 grid grid-cols-2">
            <p className="font-semibold">Marque : </p>
            <p className="font-thin">{vehicule ? vehicule.brand : "marque"}</p>
          </div>
          <div className="grid grid-cols-2">
            <p className="font-semibold">Modèle : </p>
            <p className="font-thin">{vehicule ? vehicule.model : "modèle"}</p>
          </div>
          <div className="grid grid-cols-2">
            <p className="font-semibold">Carburant : </p>
            <p className="font-thin">{vehicule ? vehicule.fuel_type : "carburant"}</p>
          </div>
          <div className="grid grid-cols-2">
            <p className="font-semibold">Coffre : </p>
            <p className="font-thin">{pref ? pref.large_luggage : "coffre"}</p>
          </div>
          
          <button className="mt-8 bg-vert hover:bg-verth rounded-md text-black font-normal shadow-md py-2 px-4"
                  onClick={modal}
                  >
          Ajouter un véhicule
        </button>
        </div>
      </div>

      <div className="grid grid-flow-col">
      <div className="grid grid-cols-2 gap-4 mt-4 ml-4">

      {photos.map((photo, i)=>(

              <img
                key={i}
                className="w-24 rounded-md"
                src={photo.filename}
              />
      ))
           }
      </div>
      </div>

    </div>
        {modalOn && (
          <AddVehiculeModal
            setmodalOn={setmodalOn}
            setsubmitModifs={setsubmitModifs}
            setCount={setCount}
            count={count}
            user={user}
            users={users}
            vehicule={vehicule}
            pref={pref}
          />
        )}
    </div>
  );
};

export default ProfilVehicule;
