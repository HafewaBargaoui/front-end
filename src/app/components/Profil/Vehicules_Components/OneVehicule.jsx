import React from "react";
import AddVehiculeModal from "../Profil_Modals/AddVehiculeModal";
import PhotoVehiculeModal from "../Profil_Modals/PhotoVehiculeModal";
import EditVehiculeModal from "../Profil_Modals/EditVehiculeModal";

const OneVehicule = ({
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
  photoModale,
  photoModal,
  modalOn,
  editModale,
  photoSrc,
  setphotoModal,
  editModal,
  setphotoSrc,
}) => {
  return (
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
  );
};

export default OneVehicule;
