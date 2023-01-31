import React from "react";
import { useState, useEffect, useCallback } from "react";
import PrefLastScreen from "./PrefLastScreen";
import { useFormik } from "formik";
import { useDropzone } from "react-dropzone";
import { getCarBrand } from "../../api/backend/account";

const PrefConducteur = () => {
  function MyDropzone() {
    const [files, setFiles] = useState([]);
    const onDrop = useCallback(
      (acceptedFiles) => {
        setFiles([...files, ...acceptedFiles]);
        formik.setFieldValue("file", [...files, ...acceptedFiles]);
      },
      [files]
    );
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      multiple: true,
    });

    return (
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <div className="grid place-items-center hover:shadow-lg cursor-pointer bg-gray-100 bg-opacity-30 orunded-md p-1 hover:scale-105 border h-24 border-jauneh border-dashed">
            <p className="text-center">ou cliquez pour la selectionner</p>
          </div>
        ) : (
          <div className="grid place-items-center hover:shadow-lg cursor-pointer bg-gray-100 bg-opacity-30 rounded-md p-1 hover:scale-105 border h-24 border-jauneh border-dashed">
            <p className="text-center">GLISSEZ VOTRE IMAGE ICI</p>
          </div>
        )}
        <div>
          {files &&
            files.map((file) => (
              <img
                key={file.path}
                src={URL.createObjectURL(file)}
                alt="preview"
                onLoad={() => URL.revokeObjectURL(file)}
                className="h-8 w-8"
              />
            ))}
        </div>
      </div>
    );
  }

  const [prefConducteur, setprefConducteur] = useState([]);
  const [nextClicked, setnextClicked] = useState(false);
  const formik = useFormik({
    initialValues: {
      carOption: "",
      modeleOption: "",
      place: "",
      coffre: "",
      carburantOption: "",
      accept: "",
      file: null,
    },
    onSubmit: (values) => {
      setprefConducteur((prevState) => [
        {
          marque: values.carOption,
          place: values.place,
          coffre: values.coffre,
          modele: values.modeleOption,
          carburant: values.carburantOption,
          accept: values.accept,
          file: values.file,
        },
      ]);
      setnextClicked(true)
    },
  });

  useEffect(() => {
    console.log(prefConducteur);
  }, [prefConducteur]);

  const [carOpt, setcarOpt] = useState([]);
  const [modeleOption, setmodeleOption] = useState([])
  const [fuelOption, setfuelOption] = useState([])
  const carOptions = async () => {
    const response = await getCarBrand();
    setcarOpt(response.data);
    setmodeleOption(response.data)
    setfuelOption(response.data)
  };
  useEffect(() => {
    carOptions();
  }, []);


  const placeOptions = [
    {
      id: "1",
      label: "1",
      value: "1",
    },
    {
      id: "2",
      label: "2",
      value: "2",
    },
    {
      id: "3",
      label: "3",
      value: "3",
    },
    {
      id: "4",
      label: "4",
      value: "4",
    },
  ];

  const coffreOptions = [
    {
      id: "1",
      label: "pas de coffre",
      value: "pas de coffre",
    },
    {
      id: "2",
      label: "petit coffre",
      value: "petit coffre",
    },
    {
      id: "3",
      label: "grand coffre",
      value: "grand coffre",
    },
  ];


  const acceptOption = [
    { id: 1, title: "animaux"},
    { id: 2, title: "fumeurs"},
  ];

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className='h-screen w-full fixed top-0 left-0 flex justify-center items-center bg-cover bg-[url("/src/app/assets/images/darkgradient.png")]'>
          <div className="w-full mt-24 max-w-lg lg:px-8 bg-white bg-opacity-30 rounded-lg shadow-lg shadow-gray-900/80">
            <p className="text-center m-1 font-semibold drop-shadow-sm uppercase">
              préférences conducteur
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4 place-items-center ">
              <div className="h-20 w-36  grid grid-flow-row place-items-center ">
                <p className="text-xs uppercase font-semibold">marque</p>
                <select
                  value={formik.values.carOption}
                  onChange={formik.handleChange}
                  name="carOption"
                  className="inputInscription"
                >
                  <option value=""></option>
                  {carOpt.map((option) => (
                    <option className="bg-black border border-roseh rounded-lg text-white font-light" key={option._id} value={option.name}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="h-20 w-36   grid grid-flow-row place-items-center ">
                <p className="text-xs uppercase font-semibold">modele</p>
                <select
                  value={formik.values.modeleOption}
                  onChange={formik.handleChange}
                  name="modeleOption"
                  className="inputInscription"
                >
                    {modeleOption.map((option, i) => (
                    <option className="bg-black border border-roseh rounded-lg text-white font-light" key={option._id} value={option.modele[i]}>
                      {option.modele[i]}
                    </option>
                  ))}
                </select>
              </div>

              <div className="h-20 w-36   grid grid-flow-row place-items-center ">
                <p className="text-xs uppercase font-semibold">carburant</p>
                <select
                  value={formik.values.carburantOption}
                  onChange={formik.handleChange}
                  name="carburantOption"
                  className="inputInscription"
                >
                  {fuelOption.map((option, i) => (
                    <option className="bg-black border border-roseh rounded-lg text-white font-light" key={option._id} value={option.fuelType[i]}>
                      {option.fuelType[i]}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 p-4 place-items-center ">
              <div className="h-20 w-48  grid grid-flow-row place-items-center ">
                <p className="text-xs uppercase font-semibold">nombre de place</p>
                <select
                  value={formik.values.place}
                  onChange={formik.handleChange}
                  name="place"
                  className="inputInscription"
                >
                  {placeOptions.map((option) => (
                    <option className="bg-black border border-roseh rounded-lg text-white font-light" key={option.id} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="h-20 w-48  grid grid-flow-row place-items-center ">
                <p className="text-xs uppercase font-semibold">espace</p>
                <select
                  value={formik.values.coffre}
                  onChange={formik.handleChange}
                  name="coffre"
                  className="inputInscription"
                >
                  {coffreOptions.map((option) => (
                    <option className="bg-black border border-roseh rounded-lg text-white font-light" key={option.id} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

    
            <div className="grid grid-cols-2 gap-4 justify-items-center place-content-center">
                {acceptOption.map((option) => {
                  const checked = formik.values.accept.includes(option.title);
                  return (
                    <div
                      className={`grid grid-row-2 place-items-center rounded-md h-20 w-20 ${
                        checked
                          ? "bg-vert bg-opacity-70"
                          : "bg-bleu bg-opacity-30"
                      } p-1 hover:scale-105 hover:shadow-lg ${
                        checked
                          ? "hover:bg-verth hover:bg-opacity-70"
                          : "hover:bg-bleuh hover:bg-opacity-30"
                      } shadow-sm cursor-pointer`}
                      key={option.id}
                    >
                    <div className="grid place-items-center justify-items-center text-center">
                      <label htmlFor={option.id}>{option.title}</label>
                      <input
                        type="checkbox"
                        className=" fixed opacity-0 h-20 w-20"
                        id={option.id}
                        name="accept"
                        value={option.title}
                        onChange={formik.handleChange}
                      />
                    </div>
                  </div>
                )})}
              </div>
    

            <div className="grid justify-center w-full pb-4">
              <div className="h-24 w-full grid grid-flow-row place-items-center ">
                <p className="text-center uppercase font-semibold text-xs">
                  photo du vehicule
                </p>
                <div className="">
                  <MyDropzone
                    onDrop={(acceptedFiles) =>
                      formik.setFieldValue("file", acceptedFiles[0])
                    }
                  />
                </div>
              </div>
            </div>

            <div className="grid justify-center">
              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="bg-jaunebtn rounded-md hover:bg-jauneh drop-shadow-md px-4 py-2 m-4"
              >
                VALIDER
              </button>
            </div>
          </div>
        </div>
      </form>

      {nextClicked && <PrefLastScreen />}
    </>
  );
};

export default PrefConducteur;
