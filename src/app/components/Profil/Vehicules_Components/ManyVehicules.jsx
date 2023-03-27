import React from "react";
import AddVehiculeModal from "../Profil_Modals/AddVehiculeModal";
import PhotoVehiculeModal from "../Profil_Modals/PhotoVehiculeModal";
import EditVehiculeModal from "../Profil_Modals/EditVehiculeModal";
import VehiculeModal from "../Profil_Modals/VehiculeModal";
import { motion } from "framer-motion";


const ManyVehicules = ({
  seteditModale,
  count,
  setCount,
  user,
  users,
  pref,
  vehicule,
  setmodalOn,
  photos,
  modal,
  photoModal,
  modalOn,
  editModale,
  photoSrc,
  setphotoModal,
  nbVehicules,
  vehiculeModal,
  vehiculeclickModal,
  setVehiculeModal,
  VehiculeSelect,
  setVehiculeSelect,
  variants
}) => {
  return (
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
            transition={{ delay: 0.3 + i * 0.1, duration: 0.3 }}
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
  );
};

export default ManyVehicules;
