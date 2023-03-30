import { editProfile } from "../../../api/backend/profileAPI";
import React, { useRef } from "react";
import { useFormik } from "formik";
import { URL_DELETE_ACCOUNT } from "../../../constants/urls/urlFrontEnd";

const ProfilInfoModal = ({
  setmodalOn,
  users,
  adresse,
  setCount,
  count,
}) => {
  console.log(users.id_address._id);

  const formik = useFormik({
    initialValues: {
      name: users.name,
      lastname: users.lastname,
      email: users.email,
      sex: users.sex,
      phone: users.phone,
      pathType: adresse.pathType,
      additionalAddress: adresse.additionalAddress,
      streetName: adresse.streetName,
      streetNumber: adresse.streetNumber,
      city: adresse.city,
      zip: adresse.zip,
      idAdresse: users.id_address._id,
    },

    onSubmit: async (values) => {
      setCount(count + 1);
      console.log(values);
      await editProfile(values);
      window.location.reload();
      setmodalOn(false);
    },
  });

  const clickCount = () => {
    console.log(count);
  };

  const modalRef = useRef();

  const closeClick = () => {
    console.log("clic X");
    setmodalOn(false);
  };

  const clickOut = (e) => {
    if (modalRef.current.contains(e.target)) {
    } else {
      setmodalOn(false);
    }
  };

  return (
    <form method="post" onSubmit={formik.handleSubmit} itemRef="form">
      <div
        className="h-full w-full z-50 absolute top-5 left-0 flex justify-center items-center bg-black bg-opacity-75 backdrop-blur-sm x"
        onClick={clickOut}
      >
        <div ref={modalRef}>
          <div className="w-96 max-w-lg">
            <div className="relative grid place-items-center bg-black bg-opacity-30 shadow rounded-lg">
              <button
                type="button"
                onClick={closeClick}
                className="absolute top-3 right-2.5 text-bleu bg-transparent hover:text-bleuh rounded-lg text-sm p-1.5 ml-auto inline-flex items-center pb-2 "
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="grid grid-flow-row gap-4 mx-16 p-4 text-center">
                <div className="grid grid-flow-col gap-8">
                  <p className="text-white">Nom :</p>
                  <input
                    type="text"
                    id="name"
                    className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight"
                    placeholder={users.name}
                    value={formik.values.name}
                    onChange={formik.handleChange}
                  />
                </div>

                <div className="grid grid-flow-col gap-8">
                  <p className="text-white">Prénom :</p>
                  <input
                    type="text"
                    id="lastname"
                    className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight"
                    placeholder={users.lastname}
                    value={formik.values.lastname}
                    onChange={formik.handleChange}
                  />
                </div>

                <div className="grid grid-flow-col gap-8">
                  <p className="text-white">Sexe :</p>
                  <input
                    type="text"
                    id="sexe"
                    className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight"
                    placeholder={users.sex}
                    value={formik.values.sex}
                    onChange={formik.handleChange}
                  />
                </div>

                <div className="grid grid-flow-col gap-8">
                  <p className="text-white">Mail :</p>
                  <input
                    type="text"
                    id="email"
                    className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight"
                    placeholder={users.email}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                </div>

                <div className="grid grid-flow-col gap-8">
                  <p className="text-white">Téléphone :</p>
                  <input
                    type="text"
                    id="phone"
                    className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight"
                    placeholder={users.phone}
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                  />
                </div>

                <div className="grid grid-flow-col gap-8">
                  <p className="text-white">N° de rue :</p>
                  <input
                    type="text"
                    id="streetNumber"
                    className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight"
                    placeholder={adresse.streetNumber}
                    value={formik.values.streetNumber}
                    onChange={formik.handleChange}
                  />
                </div>

                <div className="grid grid-flow-col gap-8">
                  <p className="text-white">Voie :</p>
                  <input
                    type="text"
                    id="pathType"
                    className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight"
                    placeholder={adresse.pathType}
                    value={formik.values.pathType}
                    onChange={formik.handleChange}
                  />
                </div>

                <div className="grid grid-flow-col gap-8">
                  <p className="text-white">Nom de la rue :</p>
                  <input
                    type="text"
                    id="streetName"
                    className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight"
                    placeholder={adresse.streetName}
                    value={formik.values.streetName}
                    onChange={formik.handleChange}
                  />
                </div>

                <div className="grid grid-flow-col gap-8">
                  <p className="text-white">Code Postal :</p>
                  <input
                    type="text"
                    id="zip"
                    className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight"
                    placeholder={adresse.zip}
                    value={formik.values.zip}
                    onChange={formik.handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 bg-vert hover:bg-verth rounded-md text-black  font-normal shadow-md  py-2 px-4"
                  onClick={clickCount}
                >
                  Modifier Profil
                </button>

                <a
                  href={URL_DELETE_ACCOUNT}
                  className="mt-2 bg-jauneh hover:bg-jaune rounded-md text-black  font-normal shadow-md  py-2 px-4"
                >
                  Supprimer mon compte
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProfilInfoModal;
