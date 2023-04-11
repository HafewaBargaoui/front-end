import { EyeOffIcon, EyeIcon } from "@heroicons/react/solid";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import GoogleSVG from "../../assets/svg/GoogleSVG";

import {
  URL_HOME,
  URL_FORGET_LOGIN,
  URL_REGISTER,
} from "../../constants/urls/urlFrontEnd";
import { signIn } from "../../redux-store/authenticationSlice";
import { getProfile, registerGoogle } from "./../../api/backend/profileAPI";
import { authenticate } from "./../../api/backend/accountAPI";

const Login = () => {
  const [errorLog, setErrorLog] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const google = async (req, res) => {
    await registerGoogle().then((data) => {
      window.location.href = data.data;
    });
  };

  const data = async () => {
    const response = await getProfile();
    dispatch(getUser({ type: "user", payload: response.data }));
  };

  const handleLogin = (values) => {
    authenticate(values)
      .then((res) => {
        if (res.status === 200) {
          data();
          dispatch(signIn(res.data));
          navigate(URL_HOME);
        } else {
          dispatch(signIn(res.data));
          navigate(URL_HOME);
        }
      })
      .catch((error) => setErrorLog(error));
  };
  const handleForgetLogin = () => {
    navigate(URL_FORGET_LOGIN);
  };

  const handleRegister = () => {
    navigate(URL_REGISTER);
  };

  // handle toggle password
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className="w-full max-w-xl space-y-3 rounded-lg pb-8 px-4 shadow lg:px-8 bg-cover bg-slate-500">
      <div className="place-content-center">
        <h1 className="mt-3 mb-3 text-center text-3xl font-semibold text-black">
          CONNEXION
        </h1>
      </div>
      <hr />

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleLogin}
      >
        <Form className=" ml-16 mr-16 space-y-6">
          <div className="flex flex-col space-y-3">
            <label
              className="mt-6 text-gray-800 text-md font-semibold"
              htmlFor="email"
            >
              Email :{" "}
            </label>
            <Field
              type="text"
              name="email"
              placeholder="michel.dupont@gmail.com"
              autoComplete="email"
              className="inputInscription"
            />
          </div>
          <div className="flex flex-col space-y-3 relative">
            <label
              className=" text-gray-800 text-md font-semibold"
              htmlFor="password"
            >
              Mot de Passe :
            </label>

            <Field
              type={open === false ? "password" : "text"}
              name="password"
              placeholder="***********"
              autoComplete="current-password"
              className="inputInscription"
            />
            <div className="text-2xl absolute top-9 right-3 z-30 w-4 cursor-pointer text-slate-600">
              {open === false ? (
                <EyeOffIcon onClick={toggle} />
              ) : (
                <EyeIcon onClick={toggle} />
              )}
            </div>
          </div>
          <p
            className=" text-slate-700 underline hover:text-cyan-900 text-xs"
            onClick={handleForgetLogin}
          >
            Mot de passe oublié ?
          </p>

          <button
            type="submit"
            className="btn bg-cyan-700 group hover:scale-105 duration-300 w-full text-white mt-4"
          >
            Connexion
          </button>

          {errorLog && (
            <div className="flex justify-center">
              <small className="text-sm italic text-pink-800 font-semibold">
                Login/Password incorrect(s)
              </small>
            </div>
          )}

          <div className="mt-10 grid grid-cols-3 items-center">
            <hr />
            <p className="text-center text-slate-700"> ou </p>
            <hr />
          </div>

          <button
            onClick={google}
            className="btn bg-white group hover:scale-105 duration-300 text-slate-500 mt-4 w-full"
          >
            <GoogleSVG />
            Continuer avec Google
          </button>
          <div className="text-xs text-center pt-10">
            <p className=" text-slate-700 ">Nouveau du Carbuddy ?</p>

            <p
              className=" underline hover:text-cyan-900 pt-2"
              onClick={handleRegister}
            >
              {" "}
              Inscription
            </p>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
