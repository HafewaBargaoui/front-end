import React, { useState, useEffect, useRef, useCallback } from "react";
import { useFormik } from "formik";
import { useDropzone } from "react-dropzone";
import {
  getCarBrand,
  updateVehicule
} from "../../api/backend/account";

const EditVehiculeModal = ({
  seteditModale,
  user,
  vehicule,
  pref,
  users,
  count,
  setCount,
  photos,
}) => {
  function MyDropzone() {
    const [files, setFiles] = useState([]);
    const onDrop = useCallback(
      (acceptedFiles) => {
        setFiles([...files, ...acceptedFiles]);
        formik.setFieldValue("files", [...files, ...acceptedFiles]);
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

  const formik = useFormik({
    initialValues: {
      brand: "",
      model: "",
      seats: 0,
      large_luggage: "",
      fuel_type: "",
      files: null,
    },
    onSubmit: async (values) => {
      setCount(count + 1);
      const formDataUserVehicule = new FormData();
      formDataUserVehicule.append("brand", values.brand);
      formDataUserVehicule.append("seats", values.seats);
      formDataUserVehicule.append("model", values.model);
      formDataUserVehicule.append("fuel_type", values.fuel_type);
      formDataUserVehicule.append("idVehicule", users.id_vehicule[0]._id);
      formDataUserVehicule.append("idPref", users.id_driver_preference[0]._id);
      formDataUserVehicule.append("large_luggage", values.large_luggage);

    

        for (var i = 0; i < values.files.length; i++) {
          let file = values.files[i];
          formDataUserVehicule.append("files", file);
   
      }

      await updateVehicule(formDataUserVehicule);
      for (const value of formDataUserVehicule.values()) {
      }
      seteditModale(false);
    },
  });

  const [carOpt, setcarOpt] = useState([]);
  const [model, setmodel] = useState([]);
  const [fuelOption, setfuelOption] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState({});

  const carOptions = async () => {
    const response = await getCarBrand();
    setcarOpt(response.data);
    setfuelOption(response.data);
  };

  const getModele = async (e) => {
    const selectedBrandName = e.target.value;
    let marque = carOpt.find((brand) => brand.name === selectedBrandName);
    setSelectedBrand(marque);
    setmodel(marque.modele);
    formik.handleChange(e);
  };

  useEffect(() => {
    carOptions();
  }, []);

  const seatsOptions = [
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

  const large_luggageOptions = [
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

  const modalRef = useRef();

  const closeClick = () => {
    seteditModale(false);
  };

  const clickOut = (e) => {
    if (modalRef.current.contains(e.target)) {
    } else {
      seteditModale(false);
    }
  };

  return (
    <form method="post" onSubmit={formik.handleSubmit} itemRef="form">
      <div
        className="h-screen w-screen absolute top-0 left-0 flex justify-center items-center bg-black bg-opacity-75 backdrop-blur-sm x"
        onClick={clickOut}
      >
        <div ref={modalRef}>
          <div className=" w-96 max-w-md">
            <div className="relative grid place-items-center bg-black bg-opacity-30 shadow rounded-lg">
              <>
                <div className="fixed flex justify-center items-center">
                  <div className="w-full mt-24 max-w-lg lg:px-8 bg-black bg-opacity-30 rounded-lg shadow-lg shadow-gray-900/80">
                    <div className="grid grid-cols-3 gap-4 pt-4 place-items-center ">
                      <div className="h-20 w-36  grid grid-flow-row place-items-center ">
                        <p className="text-xs text-white  uppercase font-semibold">
                          marque
                        </p>
                        <select
                          value={formik.values.brand}
                          onChange={getModele}
                          name="brand"
                          className="inputInscription"
                        >
                          <option value=""> {vehicule.brand} </option>
                          {carOpt.map((option, i) => (
                            <option
                              className="bg-black border border-roseh rounded-lg text-white font-light"
                              key={option._id}
                              value={option.name}
                            >
                              {option.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="h-20 w-36   grid grid-flow-row place-items-center ">
                        <p className="text-xs text-white uppercase font-semibold">
                          modele
                        </p>
                        <select
                          value={formik.values.model}
                          onChange={formik.handleChange}
                          name="model"
                          className="inputInscription"
                        >
                          <option value=""> {vehicule.model} </option>
                          {model.map((option, i) => (
                            <option
                              className="bg-black border border-roseh rounded-lg text-white font-light"
                              key={i}
                              value={option}
                            >
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="h-20 w-36   grid grid-flow-row place-items-center ">
                        <p className="text-xs text-white  uppercase font-semibold">
                          carburant
                        </p>
                        <select
                          value={formik.values.fuel_type}
                          onChange={formik.handleChange}
                          name="fuel_type"
                          className="inputInscription"
                        >
                          <option value=""> {vehicule.fuel_type} </option>
                          {fuelOption.map((option, i) => (
                            <option
                              className="bg-black border border-roseh rounded-lg text-white font-light"
                              key={option._id}
                              value={option.fuelType[i]}
                            >
                              {option.fuelType[i]}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 p-4 place-items-center ">
                      <div className="h-20 w-48  grid grid-flow-row place-items-center ">
                        <p className="text-xs text-white  uppercase font-semibold">
                          nombre de place
                        </p>
                        <select
                          value={formik.values.seats}
                          onChange={formik.handleChange}
                          name="seats"
                          className="inputInscription"
                        >
                          <option value=""> {vehicule.seats} </option>
                          {seatsOptions.map((option) => (
                            <option
                              className="bg-black border border-roseh rounded-lg text-white font-light"
                              key={option.id}
                              value={option.value}
                            >
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="h-20 w-48  grid grid-flow-row place-items-center ">
                        <p className="text-xs text-white  uppercase font-semibold">
                          espace
                        </p>
                        <select
                          value={formik.values.large_luggage}
                          onChange={formik.handleChange}
                          name="large_luggage"
                          className="inputInscription"
                        >
                          <option value=""> {pref.large_luggage} </option>
                          {large_luggageOptions.map((option) => (
                            <option
                              className="bg-black border border-roseh rounded-lg text-white font-light"
                              key={option.id}
                              value={option.value}
                            >
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-flow-col">
                      <div className="grid grid-flow-col">
                        <div className="grid grid-cols-2 gap-4 mt-4 ml-4">
                          {photos.map((photo, i) => (
                            <img
                              key={i}
                              className="w-12 rounded-md"
                              src={photo.filename}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="grid justify-center w-full pb-4">
                        <div className="h-24 w-full grid grid-flow-row place-items-center ">
                          <p className="text-center text-white  uppercase font-semibold text-xs">
                            photo du vehicule
                          </p>
                          <div className="">
                            <MyDropzone
                              onDrop={(acceptedFiles) =>
                                formik.setFieldValue("file", acceptedfiless[0])
                              }
                            />
                          </div>
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
              </>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditVehiculeModal;
