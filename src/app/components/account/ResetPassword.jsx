import { EyeOffIcon, EyeIcon } from "@heroicons/react/solid";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import {signIn} from "../../redux-store/authenticationSlice";
import {authenticate} from "../../api/backend/account";
import { URL_PASSWORD_MODIFIED } from "../../constants/urls/urlFrontEnd";

import { resetpassword } from "../../api/backend/account";
const initialValues = {
  password: "",
  password_confirm: "",
};

const validationSchema = Yup.object({
  password: Yup.string()
    .required("Votre mot de passe est obligatoire.")
    .min(8, "Votre mot de passe doit comporter 8 caractères minimum.")
    .max(24, "Votre mot de passe doit comporter 24 caractères maximum.")
    .matches(/[A-Z]/, "Votre mot de passe doit comporter 1 majuscule.")
    .matches(/[0-9]/, "Votre mot de passe doit comporter 1 chiffre.")
    .matches(/[^\w]/, "Votre mot de passe doit comporter 1 caractère spécial."),
  password_confirm: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Vos 2 saisies ne sont pas identiques.")
    .required("Veuillez confirmer votre mot de passe"),
});

const ResetPassword = () => {
	const [errorLog, setErrorLog] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();
//navigate("/password-modified");

	const ResetPassword = (values) => {
		authenticate(values)
			.then((res) => {
				if (res.status === 200) {
					dispatch(signIn(res.data));
					navigate(URL_HOME);
				} else {
					console.log(res.message);
				}
			})
			.catch((error) => setErrorLog(error));
	};
  const handleResetLogin = async (values) => {

	const queryParameters = new URLSearchParams(window.location.search)
	const token = queryParameters.get("token");
	console.log(token);
	
	const newPassword = {
		password: values.password,
		password_confirm: values.password_confirm,
	  };
	  	await resetpassword(newPassword, token);
		navigate(URL_PASSWORD_MODIFIED);
	};
  const [visible, setVisible] = useState(false)
    const toggle = () =>{
      setVisible(!visible)
    }
  const [confirmVisible, confirmSetVisible] = useState(false)
  const toggleconfirm = () =>{
    confirmSetVisible(!confirmVisible)
  }

  return (
    <div className="w-full max-w-md space-y-3 rounded-lg mt-8 pb-8 px-4 shadow sm:px-6 lg:px-8 bg-cover bg-slate-500">      
      <div className="flex justify-center pb-16">
        <h1 className="mt-6 text-center text-3xl font-semibold text-black">
          Réinitialisation de votre mot de passe
        </h1>
        <hr />
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleResetLogin}
      >
        <Form className="mt-8 space-y-6">
          <div className="flex flex-col space-y-6 relative ">
            <label className="pl-1 font-semibold" htmlFor="password">
              Saisissez votre nouveau mot de passe{" "}
            </label>
            
            <Field
              type={(visible === false)? 'password' :'text'}
              name="password"
              placeholder="Mot de passe"
              maxLength="24"
              autoComplete="current-password"
              className="inputInscription"
              
            />    
                  <div className="text-2xl absolute top-9 right-3 z-30 w-4 cursor-pointer text-slate-600">
                  {
                    
                      (visible === false)? <EyeOffIcon onMouseDown={toggle} />:
                      <EyeIcon onMouseDown={toggle} />
                  }   
                 
                 </div>    
            <ErrorMessage name="password">
              {(error) => (
                <div className="text-xs pt-2 text-red-600 ">{error}</div>
              )}
            </ErrorMessage>
          </div>
          <div className="flex flex-col space-y-6 relative">
            <label className="pl-1 font-semibold" htmlFor="password">
              Confirmez le nouveau mot de passe
            </label>

            <Field
              type={(confirmVisible === false)? 'password' :'text'}
              name="password_confirm"
              placeholder="Confirmer"
              maxLength="24"
              autoComplete="current-password"
              className="inputInscription"
            />
            <div className="text-2xl absolute top-9 right-3 z-30 w-4 cursor-pointer  text-slate-600">
                  {
                    
                      (confirmVisible === false)? <EyeOffIcon onClick={toggleconfirm} />:
                      <EyeIcon onClick={toggleconfirm} />
                  }   
                  </div>
            <ErrorMessage name="password_confirm">
              {(error) => (
                <div className="text-xs pt-2 text-red-600">{error}</div>
              )}
            </ErrorMessage>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn bg-cyan-700 hover:bg-cyan-800 relative w-full text-white font-bold"
            >
              Valider le nouveau mot de passe
            </button>        
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ResetPassword;
