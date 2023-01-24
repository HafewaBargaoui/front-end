import React from "react";

import drag from "../../assets/images/profileprefs/drag.png";

import homme from "../../assets/images/profileprefs/male.png";
import femme from "../../assets/images/profileprefs/female.png";

import parler from "../../assets/images/profileprefs/parler.png";
import fumer from "../../assets/images/profileprefs/smoking.png";
import radio from "../../assets/images/profileprefs/radio.png";
import clim from "../../assets/images/profileprefs/clim.png";

import berline from "../../assets/images/profileprefs/berline.png";
import x4 from "../../assets/images/profileprefs/4x4.png";
import citadine from "../../assets/images/profileprefs/citadine.png";
import electrique from "../../assets/images/profileprefs/electrique.png";

import { useState, useEffect, useCallback } from "react";

import PrefModal from "../../components/modals/PrefModal";
import PrefConducteur from "./PrefConducteur";
import PrefLastScreen from "./PrefLastScreen";
import { useFormik } from "formik";
import { useDropzone } from "react-dropzone";

const PrefPassager = () => {
  function MyDropzone() {
    const onDrop = useCallback((acceptedFiles) => {
      formik.setFieldValue("file", acceptedFiles[0]);
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
    });

    return (
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <div className="grid place-items-center hover:shadow-lg cursor-pointer bg-gray-100 p-1 hover:scale-105 border h-40 border-jauneh border-dashed rounded-sm">
            <p className="text-center">ou cliquez pour la selectionner</p>
          </div>
        ) : (
          <div className="grid place-items-center hover:shadow-lg cursor-pointer bg-gray-100 p-1 hover:scale-105 border h-40 border-jauneh border-dashed rounded-sm">
            <p className="text-center">GLISSEZ VOTRE IMAGE ICI</p>
          </div>
        )}
      </div>
    );
  }
  const [prefPassager, setprefPassager] = useState([]);
  const formik = useFormik({
    initialValues: {
      genre: "",
      prefs: "",
      vehicule: "",
      file: null,
    },
    onSubmit: (values) => {
      setprefPassager((prevState) => [
        {
          sexe: values.genre,
          prefs: values.prefs,
          vehicule: values.vehicule,
          file: values.file,
        },
      ]);
    },
  });

  useEffect(() => {
    console.log(prefPassager);
  }, [prefPassager]);

  const dbGenre = [
    { id: 1, title: "homme", image: homme },
    { id: 2, title: "femme", image: femme },
  ];

  const dbLike = [
    { id: 3, title: "parler", image: parler },
    { id: 4, title: "fumer", image: fumer },
    { id: 5, title: "radio", image: radio },
    { id: 6, title: "clim", image: clim },
  ];

  const dbVehicule = [
    { id: 7, title: "berline", image: berline },
    { id: 8, title: "4x4", image: x4 },
    { id: 9, title: "citadine", image: citadine },
    { id: 10, title: "electrique", image: electrique },
  ];

  const [modalOn, setmodalOn] = useState(false);
  const [choiceOui, setchoiceOui] = useState(false);
  const [choiceNon, setchoiceNon] = useState(false);

  const modal = () => {
    setmodalOn(true);
  };

  return (
    <>
      <form method="post" onSubmit={formik.handleSubmit} itemRef="form">
        <div className="w-full max-w-lg lg:px-8 bg-white shadow-lg shadow-gray-900/80">
          <p className="text-center m-1 font-semibold drop-shadow-sm">
            NOM PRENOM
          </p>
          <div className="grid grid-cols-2 gap-4 p-4 place-items-center">
            <div className="h-48 w-48 bg-white grid grid-flow-row place-items-center ">
              <p className="text-center uppercase font-semibold text-sm">
                photo de profil
              </p>
              <div className="">
                <MyDropzone
                  onDrop={(acceptedFiles) =>
                    formik.setFieldValue("file", acceptedFiles[0])
                  }
                />
              </div>
            </div>

            <div className="h-48 w-48 bg-white grid grid-flow-row place-items-center ">
              <p className="text-center uppercase font-semibold text-sm">
                je suis
              </p>
              <div className="grid grid-cols-2 gap-4 place-content-center">
                {dbGenre.map((card, id) => {
                  const checked = formik.values.genre.includes(card.title);
                  return (
                    <div
                      className={`grid grid-row-2 place-items-center h-40 w-20 ${
                        checked
                          ? "bg-rose bg-opacity-30"
                          : "bg-bleu bg-opacity-30"
                      } p-1 hover:scale-105 hover:shadow-lg ${
                        checked
                          ? "hover:bg-roseh hover:bg-opacity-30"
                          : "hover:bg-bleuh hover:bg-opacity-30"
                      } border border-black cursor-pointer`}
                      key={card.id}
                    >
                    <img
                      src={card.image}
                      alt="drag-and-drop-logo"
                      className="h-16"
                    />
                    <div className="text-center">
                      <label htmlFor={card.id}>{card.title}</label>
                      <input
                        type="checkbox"
                        className="hidden -mt-24 h-40 w-20"
                        id={card.id}
                        name="genre"
                        value={card.title}
                        onChange={formik.handleChange}
                      />
                    </div>
                  </div>
                )})}
              </div>
            </div>

            <div className="h-48 w-48 bg-white ">
              <p className="text-center uppercase font-semibold text-sm">
                j'aime
              </p>
              <div className="grid grid-cols-2 gap-1 p-1 place-items-center">
                {dbLike.map((card, id) => {
                  const checked = formik.values.prefs.includes(card.title);
                  return (
                    <div
                      className={`grid grid-row-2 place-items-center h-18 w-20 ${
                        checked
                          ? "bg-rose bg-opacity-30"
                          : "bg-bleu bg-opacity-30"
                      } p-1 hover:scale-105 hover:shadow-lg ${
                        checked
                          ? "hover:bg-roseh hover:bg-opacity-30"
                          : "hover:bg-bleuh hover:bg-opacity-30"
                      } border border-black cursor-pointer`}
                      key={card.id}
                    >
                    <img
                      src={card.image}
                      alt="drag-and-drop-logo"
                      className="h-10 w-10"
                    />
                    <input
                      type="checkbox"
                      className="hidden h-16 w-20"
                      id={card.id}
                      name="prefs"
                      value={card.title}
                      onChange={formik.handleChange}
                    />
                    <label htmlFor={card.id}>{card.title}</label>
                  </div>
                )})}
              </div>
            </div>

            <div className="h-48 w-48 bg-white ">
              <p className="text-center uppercase font-semibold text-sm">
                préférences véhicules
              </p>

              <div className="grid grid-cols-2 gap-1 p-1 place-items-center">
                {dbVehicule.map((card, id) => {
                  const checked = formik.values.vehicule.includes(card.title);
                  return (
                    <div
                      className={`grid grid-row-2 place-items-center h-18 w-20 ${
                        checked
                          ? "bg-rose bg-opacity-30"
                          : "bg-bleu bg-opacity-30"
                      } p-1 hover:scale-105 hover:shadow-lg ${
                        checked
                          ? "hover:bg-roseh hover:bg-opacity-30"
                          : "hover:bg-bleuh hover:bg-opacity-30"
                      } border border-black cursor-pointer`}
                      key={card.id}
                    >
                      <img
                        src={card.image}
                        alt="drag-and-drop-logo"
                        className="h-10 w-10"
                      />
                      <input
                        type="checkbox"
                        className="hidden h-20 w-20"
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
              className="bg-jaunebtn hover:bg-jauneh drop-shadow-md px-4 py-2 m-4"
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
