import React, {useState, useRef } from 'react'
import AddVehiculeModal from "./AddVehiculeModal";
import EditVehiculeModal from "./EditVehiculeModal";
import PhotoVehiculeModal from "./PhotoVehiculeModal";

const VehiculeModal = ({setVehiculeModal, vehiculeModal, nbVehicule, VehiculeSelect, count, setCount, user, users, pref}) => {
    const modalRef = useRef();
    const vehicule = VehiculeSelect;
    console.log(vehicule);
    const photos = vehicule.files

    const clickOut = (e) => {
      if (modalRef.current.contains(e.target)) {
      } else {
        setVehiculeModal(false);
      }
    };
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
    <div
      className="h-full w-full fixed top-0 left-0 flex justify-center items-center bg-black bg-opacity-75 backdrop-blur-sm x"
      onClick={clickOut}
    >
      <div ref={modalRef}>
      <div className="grid grid-flow-row  md:grid-flow-col gap-10">
            <div className="grid place-content-center ml-10">
              <div className="flex flex-col text-white">
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


                <div className="grid grid-flow-row">
                  <button
                    className="mt-4 bg-jauneh hover:bg-jaune rounded-md text-black font-normal shadow-md py-1 px-4"
                    onClick={editModal}
                  >
                    Modifier le véhicule
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
      </div>
    </div>
  )
}

export default VehiculeModal