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
import VehiculeModal from "../modals/VehiculeModal";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";

const ProfilVehicule = () => {
  const [users, setusers] = useState([]);
  const [vehicule, setvehicule] = useState([]);
  const [pref, setpref] = useState([]);
  const [count, setCount] = useState(1);
  const isAuthenticated = useSelector(selectIsLogged);
  const user = useSelector(selectUser);
  const [photos, setphotos] = useState([]);
  const [nbVehicules, setnbVehicules] = useState([]);
  const [vehiculeModal, setVehiculeModal] = useState(false);
  const [photosVehicule, setphotosVehicule] = useState([]);
  const [VehiculeSelect, setVehiculeSelect] = useState([]);

  const userProfile = async () => {
    const response = await getProfile(user.id);
    setusers(response.data.user);
    setvehicule(response.data.vehicule);
    setnbVehicules(response.data.user.id_vehicule);
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
  const vehiculeclickModal = () => {
    setVehiculeModal(true);
  };

  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="flex grow w-screen justify-center md:max-w-xl rounded-lg pb-8 shadow  bg-cover bg-slate-500 bg-opacity-50"
    >
      {nbVehicules.length == 0 && (
        <>
          <div className="grid grid-flow-row  md:grid-flow-col gap-10">
            <div className="grid place-content-center ml-10">
              <div className="flex flex-col text-black">
                <p className="text-center font-bold text-xl">
                  Vous n'avez pas encore ajouter de véhicule
                </p>

                <div className="grid grid-flow-row">
                  <button
                    className="mt-2 bg-vert hover:bg-verth rounded-md text-black font-normal shadow-md py-1 px-4"
                    onClick={modal}
                  >
                    Ajouter un véhicule
                  </button>
                </div>
              </div>
            </div>

            {photos && (
              <div className="grid grid-flow-col">
                <div
                  onClick={photoModale}
                  className="grid grid-cols-2 gap-4 mt-4 ml-4"
                >
                  {photos.map((photo, i) => (
                    <img
                      key={i}
                      onClick={(e) => setphotoSrc(photo.filename)}
                      className="w-24 rounded-md"
                      src={photo.filename}
                    />
                  ))}
                </div>
              </div>
            )}
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
        </>
      )}
      {nbVehicules.length == 1 && (
        <>
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
                    {vehicule ? vehicule.large_luggage : "coffre"}
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

            {photos && (
              <div className="grid grid-flow-col">
                <div
                  onClick={photoModale}
                  className="grid grid-cols-2 gap-4 mt-4 ml-4"
                >
                  {photos.map((photo, i) => (
                    <img
                      key={i}
                      onClick={(e) => setphotoSrc(photo.filename)}
                      className="w-24 rounded-md"
                      src={photo.filename}
                    />
                  ))}
                </div>
              </div>
            )}
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
        </>
      )}

      {nbVehicules.length > 1 && (
        <>
          <div className="grid grid-flow-row gap-10">
            <p className="grid text-center font-bold text-xl">Vos véhicule</p>
            <div className="grid grid-flow-col gap-4 place-items-center">
              {nbVehicules.map((vehicule, i) => (
                <motion.div
                  key={i}
                  onClick={() => setVehiculeSelect(vehicule)}
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                >
                  <div
                    className={`grid h-24 w-20 bg-jauneh hover:scale-105 rounded-md shadow-md `}
                    onClick={vehiculeclickModal}
                  >
                    <p className="font-semibold text-center p-2 text-black">
                      {vehicule.brand}
                    </p>
                    <p className="font-semibold text-center p-2 text-black">
                      {vehicule.model}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="grid grid-flow-col">
              <button
                className="mt-2 bg-vert hover:bg-verth rounded-md text-black font-normal shadow-md py-1 px-4"
                onClick={modal}
              >
                Ajouter un véhicule
              </button>
            </div>
          </div>
          {vehiculeModal && (
            <VehiculeModal
              setVehiculeModal={setVehiculeModal}
              vehiculeModal={vehiculeModal}
              nbVehicules={nbVehicules}
              VehiculeSelect={VehiculeSelect}
              count={count}
              setCount={setCount}
              user={user}
              users={users}
              pref={pref}
            />
          )}
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
        </>
      )}
    </motion.div>
  );
};

export default ProfilVehicule;
