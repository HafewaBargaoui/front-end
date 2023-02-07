import { LockClosedIcon } from "@heroicons/react/solid";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import {signIn} from "../../redux-store/authenticationSlice";
import {authenticate} from "../../api/backend/account";
import { URL_LOGIN } from "../../constants/urls/urlFrontEnd";

import { resetpassword } from "../../api/backend/account";

/**
 * Component Reset Password
 */

const initialValues = {
  password: "",
  password_confirm: "",
};

const validationSchema = Yup.object({
  password: Yup.string()
    .required("Saisissez votre mot de passe")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .max(24, "Password is too long - should be 24 chars maximum.")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[^\w]/, "Password requires a symbol"),
  password_confirm: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Doit être identque au mot de passe")
    .required("Confirmez votre mot de passe"),
});

const ResetPassword = () => {
	const [errorLog, setErrorLog] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();


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
		navigate(URL_LOGIN);
	};

  return (
    <div className="w-full max-w-md space-y-3 rounded-lg  mt-8 pb-8  px-4 shadow sm:px-6 lg:px-8  bg-cover bg-slate-500">
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
          <div className="flex flex-col space-y-6 ">
            <label className="pl-1 font-semibold" htmlFor="password">
              Saisissez votre nouveau mot de passe{" "}
            </label>

            <Field
              type="password"
              name="password"
              placeholder="Mot de passe"
              autoComplete="current-password"
              className="inputInscription"
            />
            <ErrorMessage name="password">
              {(error) => (
                <div className="text-xs pt-2 text-red-600">{error}</div>
              )}
            </ErrorMessage>
          </div>

          <div className="flex flex-col space-y-6 ">
            <label className="pl-1 font-semibold" htmlFor="password">
              Confirmez le nouveau mot de passe{" "}
            </label>

            <Field
              type="password"
              name="password_confirm"
              placeholder="Confirmer"
              autoComplete="current-password"
              className="inputInscription"
            />
            <ErrorMessage name="password_confirm">
              {(error) => (
                <div className="text-xs pt-2 text-red-600">{error}</div>
              )}
            </ErrorMessage>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="btn bg-cyan-700 hover:bg-cyan-800 relative w-1/2 text-white font-bold"
            >
              Enregistrer
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ResetPassword;
