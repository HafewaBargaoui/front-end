import React from "react";
import { useState, useCallback } from "react";

import PrefModal from "./Preference_modals/PrefModal";
import PrefConducteur from "./PrefConducteur";
import PrefLastScreen from "./PrefLastScreen";
import { useFormik } from "formik";
import { useDropzone } from "react-dropzone";
import { userPreference } from "../../api/backend/account";
import { Datas } from "./Datas/Datas";

const PrefPassager = () => {
  const { dbsexe, dbLike, dbVehicule } = Datas();
  function MyDropzone() {
    const onDrop = useCallback((acceptedFiles) => {
      formik.setFieldValue("file", acceptedFiles[0]);
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
    });
    const dropZoneClass =
      "grid place-items-center hover:shadow-lg cursor-pointer bg-gray-100 bg-opacity-30 p-1 hover:scale-105 border h-40 border-jauneh border-dashed rounded-md drop-shadow-md";

    return (
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div
          className={`${dropZoneClass} ${
            isDragActive ? "border-yellow-500" : null
          }`}
        >
          <p className="text-center">
            {isDragActive
              ? "GLISSEZ VOTRE IMAGE ICI"
              : "ou cliquez pour la selectionner"}
          </p>
        </div>
      </div>
    );
  }

  const formik = useFormik({
    initialValues: {
      sexe: "",
      prefs: "",
      vehicule: "",
    },
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("files", values.file);
      formData.append("sexe", values.sexe);
      formData.append("prefs", values.prefs);
      formData.append("vehicule", values.vehicule);
      userPreference(formData);
    },
  });

  const [modalOn, setmodalOn] = useState(false);
  const [choiceOui, setchoiceOui] = useState(false);
  const [choiceNon, setchoiceNon] = useState(false);

  const modal = () => {
    setmodalOn(true);
  };

  return (
    <>
      <form
        method="post"
        onSubmit={formik.handleSubmit}
        itemRef="form"
        encType="multipart/form-data"
      >
        <div className="w-full max-w-lg lg:px-8 bg-white bg-opacity-30 shadow-lg rounded-lg shadow-gray-900/80">
          <p className="text-center m-1 font-semibold drop-shadow-sm">
            NOM PRENOM
          </p>
          <div className="grid grid-cols-2 gap-4 p-4 place-items-center">
            <div className="h-48 w-48  grid grid-flow-row place-items-center ">
              <p className="text-center uppercase font-semibold text-sm">
                photo de profil
              </p>
              <div className="">
                <MyDropzone
                  type="file"
                  accept="image"
                  onDrop={(acceptedFiles) =>
                    formik.setFieldValue("file", acceptedFiles[0])
                  }
                />
              </div>
            </div>

            <div className="h-48 w-48  grid grid-flow-row place-items-center rounded-md ">
              <p className="text-center uppercase font-semibold text-xs">
                je suis
              </p>
              <div className="grid grid-cols-2 gap-4 place-content-center">
                {dbsexe.map((card, id) => {
                  const checked = formik.values.sexe.includes(card.title);
                  return (
                    <div
                      className={`grid grid-row-2 place-items-center h-40 w-20 rounded-md ${
                        checked
                          ? "bg-rose bg-opacity-70"
                          : "bg-bleu bg-opacity-30"
                      } p-1 hover:scale-105 hover:shadow-lg ${
                        checked
                          ? "hover:bg-roseh hover:bg-opacity-70"
                          : "hover:bg-bleuh hover:bg-opacity-30"
                      } shadow-sm cursor-pointer`}
                      key={card.id}
                    >
                      <img
                        src={card.image}
                        alt="drag-and-drop-logo"
                        className="h-16"
                      />
                      <div className="grid place-items-center fixed justify-items-center text-center">
                        <label
                          htmlFor={card.id}
                          className="text-md uppercase font-bold"
                        >
                          {card.title}
                        </label>
                        <input
                          type="checkbox"
                          className="opacity-0 fixed  h-40 w-20"
                          id={card.id}
                          name="sexe"
                          value={card.title}
                          onChange={formik.handleChange}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="h-48 w-48  ">
              <p className="text-center uppercase font-semibold text-xs">
                j'aime
              </p>
              <div className="grid grid-cols-2 gap-1 p-1 place-items-center">
                {dbLike.map((card, id) => {
                  const checked = formik.values.prefs.includes(card.title);
                  return (
                    <div
                      className={`grid grid-row-2 place-items-center rounded-md h-18 w-20 ${
                        checked
                          ? "bg-rose bg-opacity-70"
                          : "bg-bleu bg-opacity-30"
                      } p-1 hover:scale-105 hover:shadow-lg ${
                        checked
                          ? "hover:bg-roseh hover:bg-opacity-70"
                          : "hover:bg-bleuh hover:bg-opacity-30"
                      } shadow-sm cursor-pointer`}
                      key={card.id}
                    >
                      <img
                        src={card.image}
                        alt="drag-and-drop-logo"
                        className="h-10 w-10"
                      />
                      <input
                        type="checkbox"
                        className="opacity-0 fixed h-16 w-20"
                        id={card.id}
                        name="prefs"
                        value={card.title}
                        onChange={formik.handleChange}
                      />
                      <label htmlFor={card.id}>{card.title}</label>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="h-48 w-48  ">
              <p className="text-center uppercase font-semibold text-xs">
                préférences véhicules
              </p>

              <div className="grid grid-cols-2 gap-1 p-1 place-items-center">
                {dbVehicule.map((card, id) => {
                  const checked = formik.values.vehicule.includes(card.title);
                  return (
                    <div
                      className={`grid grid-row-2 place-items-center rounded-md h-18 w-20 ${
                        checked
                          ? "bg-rose bg-opacity-70"
                          : "bg-bleu bg-opacity-30"
                      } p-1 hover:scale-105 hover:shadow-lg ${
                        checked
                          ? "hover:bg-roseh hover:bg-opacity-70"
                          : "hover:bg-bleuh hover:bg-opacity-30"
                      } shadow-sm cursor-pointer`}
                      key={card.id}
                    >
                      <img
                        src={card.image}
                        alt="drag-and-drop-logo"
                        className="h-10 w-10"
                      />
                      <input
                        type="checkbox"
                        className="opacity-0 fixed h-20 w-20"
                        id={card.id}
                        name="vehicule"
                        value={card.title}
                        onChange={formik.handleChange}
                      />
                      <label htmlFor={card.id}>{card.title}</label>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="grid justify-center">
            <button
              type="submit"
              onClick={modal}
              className="bg-jaunebtn rounded-md hover:bg-jauneh drop-shadow-md px-4 py-2 m-4"
            >
              VALIDER
            </button>
          </div>
        </div>
        {modalOn && (
          <PrefModal
            setmodalOn={setmodalOn}
            setchoiceOui={setchoiceOui}
            setchoiceNon={setchoiceNon}
          />
        )}
      </form>
      {choiceOui && <PrefConducteur />}
      {choiceNon && <PrefLastScreen />}
    </>
  );
};

export default PrefPassager;
