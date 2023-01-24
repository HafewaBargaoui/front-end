import React from 'react'
import { useState, useEffect, useCallback } from 'react';
import PrefLastScreen from './PrefLastScreen';
import { useFormik } from 'formik';
import { useDropzone } from "react-dropzone";

import drag from "../../assets/images/profileprefs/drag.png";

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
          <div className="grid place-items-center hover:shadow-lg cursor-pointer bg-gray-100 p-1 hover:scale-105 border h-24 border-jauneh border-dashed">

          <p className="text-center">ou cliquez pour la selectionner</p>
          </div>
        ) : (
          <div className="grid place-items-center hover:shadow-lg cursor-pointer bg-gray-100 p-1 hover:scale-105 border h-24 border-jauneh border-dashed">

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
  const [nextClicked, setnextClicked] = useState(false)
  const formik = useFormik({
    initialValues: {
      carOption: '',
      modeleOption: '',
      place: '',
      coffre: '',
      file: null,
    },
    onSubmit: (values) => {
      setprefConducteur(prevState => [
        {
          marque : values.carOption,
          place : values.place,
          coffre : values.coffre,
          modele : values.modeleOption,
          file: values.file,
        }
      ]);
      //setnextClicked(true)
    },
  });

    useEffect(() => {
      console.log(prefConducteur);
    }, [prefConducteur]);

    const carOptions = [
      {
        id: "1",
        label: "peugeot",
        value: "peugeot",
      },
      {
        id:"2",
        label: "opel",
        value: "opel",
      }
    ];

    const modeleOptions = [
      {
        id: "1",
        label: "508",
        value: "508",
      },
      {
        id:"2",
        label: "corsa",
        value: "corsa",
      }
    ];

    const placeOptions = [
      {
        id: "1",
        label: "1",
        value: "1",
      },
      {
        id:"2",
        label: "2",
        value: "2",
      },
      {
        id:"3",
        label: "3",
        value: "3",
      },
      {
        id:"4",
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
        id:"2",
        label: "petit coffre",
        value: "petit coffre",
      },
      {
        id:"3",
        label: "grand coffre",
        value: "grand coffre",
      },
    ];

  return (

    <>
    <form  onSubmit={formik.handleSubmit}>

    <div className='h-screen w-screen absolute top-0 left-0 flex justify-center items-center bg-cover bg-[url("/src/app/assets/images/darkgradient.png")]'>
        <div className="w-full max-w-lg lg:px-8 bg-white shadow-lg shadow-gray-900/80">
            <p className="text-center m-1 font-semibold drop-shadow-sm uppercase">
            préférences conducteur
          </p>
  
      <div className="grid grid-cols-2 gap-4 p-4 place-items-center ">
        <div className="h-24 w-48 bg-white grid grid-flow-row place-items-center ">
        <p>marque</p>
        <select value={formik.values.carOption} onChange={formik.handleChange} name="carOption">
            {carOptions.map((option) => (
              <option key={option.id} value={option.value} >{option.label}</option>
            ))}
          </select>
        </div>

        <div className="h-24 w-48 bg-white  grid grid-flow-row place-items-center ">
      
        <p>modele</p>
        <select value={formik.values.modeleOption} onChange={formik.handleChange} name="modeleOption">
            {modeleOptions.map((option) => (
              <option key={option.id} value={option.value} >{option.label}</option>
            ))}
          </select>
        </div>

        <div className="h-24 w-48 bg-white grid grid-flow-row place-items-center ">
      
        <p>nombre de place</p>
        <select value={formik.values.place} onChange={formik.handleChange} name="place">
            {placeOptions.map((option) => (
              <option key={option.id} value={option.value} >{option.label}</option>
            ))}
          </select>
  </div>
     

  <div className="h-24 w-48 bg-white grid grid-flow-row place-items-center ">
      

  <p>espace</p>
        <select value={formik.values.coffre} onChange={formik.handleChange} name="coffre">
            {coffreOptions.map((option) => (
              <option key={option.id} value={option.value} >{option.label}</option>
            ))}
          </select>
  </div>

        </div>

        <div className="grid justify-center w-full pb-4">
               <div className="h-24 w-full bg-white grid grid-flow-row place-items-center ">
            <p className="text-center uppercase font-semibold text-sm">
                photo du vehicule
              </p>
              <div className= "">

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
              type='submit'
              disabled={formik.isSubmitting}
              className="bg-jaunebtn hover:bg-jauneh drop-shadow-md px-4 py-2 m-4">
            VALIDER
          </button>
        </div>
      </div>
    </div>


    </form>
        

    {nextClicked && <PrefLastScreen/> }

    </>
  )
}

export default PrefConducteur