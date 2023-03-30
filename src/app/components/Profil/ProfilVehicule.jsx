import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getProfile } from "../../api/backend/profileAPI";
import {selectIsLogged, selectUser} from "../../redux-store/authenticationSlice";
import { motion } from "framer-motion";
import NoVehicule from "./Vehicules_Components/NoVehicule";
import OneVehicule from "./Vehicules_Components/OneVehicule";
import ManyVehicules from "./Vehicules_Components/ManyVehicules";

const ProfilVehicule = () => {
  const user = useSelector(selectUser);
  const isAuthenticated = useSelector(selectIsLogged);
  const [users, setusers] = useState([]);
  const [vehicule, setvehicule] = useState([]);
  const [pref, setpref] = useState([]);
  const [count, setCount] = useState(1);
  const [photos, setphotos] = useState([]);
  const [nbVehicules, setnbVehicules] = useState([]);
  const [vehiculeModal, setVehiculeModal] = useState(false);
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
        <NoVehicule
          seteditModale={seteditModale}
          setCount={setCount}
          count={count}
          user={user}
          users={users}
          vehicule={vehicule}
          pref={pref}
          photos={photos}
          modal={modal}
          photoModale={photoModale}
          photoModal={photoModal}
          editModale={editModale}
          modalOn={modalOn}
          photoSrc={photoSrc}
          setphotoModal={setphotoModal}
          setphotoSrc={setphotoSrc}
          setmodalOn={setmodalOn}
        />
      )}
      {nbVehicules.length == 1 && (
        <OneVehicule
          seteditModale={seteditModale}
          setCount={setCount}
          count={count}
          user={user}
          users={users}
          vehicule={vehicule}
          pref={pref}
          photos={photos}
          modal={modal}
          editModal={editModal}
          photoModale={photoModale}
          photoModal={photoModal}
          editModale={editModale}
          modalOn={modalOn}
          photoSrc={photoSrc}
          setphotoModal={setphotoModal}
          setphotoSrc={setphotoSrc}
          setmodalOn={setmodalOn}
        />
      )}
      {nbVehicules.length > 1 && (
        <ManyVehicules
          seteditModale={seteditModale}
          setCount={setCount}
          count={count}
          user={user}
          users={users}
          vehicule={vehicule}
          pref={pref}
          photos={photos}
          modal={modal}
          editModal={editModal}
          photoModale={photoModale}
          photoModal={photoModal}
          editModale={editModale}
          modalOn={modalOn}
          photoSrc={photoSrc}
          setphotoModal={setphotoModal}
          setphotoSrc={setphotoSrc}
          setmodalOn={setmodalOn}
          nbVehicules={nbVehicules}
          vehiculeModal={vehiculeModal}
          vehiculeclickModal={vehiculeclickModal}
          setVehiculeModal={setVehiculeModal}
          VehiculeSelect={VehiculeSelect}
          setVehiculeSelect={setVehiculeSelect}
          variants={variants}
        />
      )}
    </motion.div>
  );
};

export default ProfilVehicule;
