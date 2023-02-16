import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getProfile } from "../../api/backend/account";
import {
  selectIsLogged,
  selectUser,
} from "../../redux-store/authenticationSlice";
import AddVehiculeModal from "../modals/AddVehiculeModal";
import EditVehiculeModal from "../modals/EditVehiculeModal";
import PhotoVehiculeModal from "../modals/PhotoVehiculeModal";

const ProfilVehicule = () => {
  const [users, setusers] = useState([]);
  const [vehicule, setvehicule] = useState([]);
  const [pref, setpref] = useState([]);
  const [count, setCount] = useState(1);
  const isAuthenticated = useSelector(selectIsLogged);
  const user = useSelector(selectUser);
  const [photos, setphotos] = useState([]);

  const userProfile = async () => {
    const response = await getProfile(user.id);
    setusers(response.data.user);
    setvehicule(response.data.vehicule);
    setpref(response.data.driverPrefs[0]);
    setphotos(response.data.vehicule.files);
  };
  useEffect(() => {
    if (isAuthenticated) {
      userProfile();
    }
  }, [isAuthenticated, count]);

  const [modalOn, setmodalOn] = useState(false);
  const [photoModal, setphotoModal] = useState(false);
  const [editModale, seteditModale] = useState(false);
  const [photoSrc, setphotoSrc] = useState("");


  const modal = () => {
    setmodalOn(true);

  };
  const photoModale = () => {
    setphotoModal(true);
  };
  const editModal = () => {
    seteditModale(true);
  };


  return (
    <div className="flex grow w-screen justify-center md:max-w-xl rounded-lg pb-8 shadow  bg-cover bg-slate-500 bg-opacity-50">
      <div className="grid grid-flow-row  md:grid-flow-col gap-10">
        <div className="grid place-content-center ml-10">
          <div className="flex flex-col text-black">
            <p className="text-center font-bold text-xl">Votre véhicule</p>

            <div className="mt-4 grid grid-cols-2">
              <p className="font-semibold">Marque : </p>
              <p className="font-thin">
                {vehicule ? vehicule.brand : "marque"}
              </p>
            </div>
            <div className="grid grid-cols-2">
              <p className="font-semibold">Modèle : </p>
              <p className="font-thin">
                {vehicule ? vehicule.model : "modèle"}
              </p>
            </div>
            <div className="grid grid-cols-2">
              <p className="font-semibold">Carburant : </p>
              <p className="font-thin">
                {vehicule ? vehicule.fuel_type : "carburant"}
              </p>
            </div>
            <div className="grid grid-cols-2">
              <p className="font-semibold">Coffre : </p>
              <p className="font-thin">
                {pref ? pref.large_luggage : "coffre"}
              </p>
            </div>
            <div className="grid grid-flow-row">

            <button
              className="mt-4 bg-jauneh hover:bg-jaune rounded-md text-black font-normal shadow-md py-1 px-4"
              onClick={editModal}
            >
              Modifier le véhicule
            </button>

            <button
              className="mt-2 bg-vert hover:bg-verth rounded-md text-black font-normal shadow-md py-1 px-4"
              onClick={modal}
            >
              Ajouter un véhicule
            </button>
            </div>
          </div>
        </div>

        <div className="grid grid-flow-col">
          <div onClick={photoModale} className="grid grid-cols-2 gap-4 mt-4 ml-4">
            {photos.map((photo, i) => (
              <img
                key={i}
                onClick={(e)=>setphotoSrc(photo.filename)}
                className="w-24 rounded-md"
                src={photo.filename}
              />
            ))}
          </div>
        </div>
      </div>
      {modalOn && (
        <AddVehiculeModal
          setmodalOn={setmodalOn}
          setCount={setCount}
          count={count}
          user={user}
          users={users}
          vehicule={vehicule}
          pref={pref}
        />
      )}
      {photoModal && (
        <PhotoVehiculeModal
          setphotoModal={setphotoModal}
          photos={photos}
          photoSrc={photoSrc}
        />
      )}
      {editModale && (
        <EditVehiculeModal
          seteditModale={seteditModale}
          setCount={setCount}
          count={count}
          user={user}
          users={users}
          vehicule={vehicule}
          pref={pref}
          photos={photos}
        />
      )}
    </div>
  );
};

export default ProfilVehicule;
