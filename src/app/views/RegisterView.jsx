import React, { useEffect, useState } from "react";
import { register } from "../api/backend/account";
import REGEX from "../constants/regex";
import FirstForm from "../components/stepsRegister/FirstForm";
import SecondForm from "../components/stepsRegister/SecondForm";
import ThirdForm from "../components/stepsRegister/ThirdForm";
import { useNavigate } from "react-router-dom";

const RegisterView = () => {
  const navigate = useNavigate();
  const formList = ["FirstForm", "SecondForm", "ThirdForm"];

  const formLength = formList.length;

  const [page, setPage] = useState(0);

  const handlePrev = () => {
    setPage(page === 0 ? formLength - 1 : page - 1);
  };
  const handleNext = () => {
    setPage(page === formLength - 1 ? 0 : page + 1);
  };

  const [error, setError] = useState(
    "hidden bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
  );

  const showMessageError = (boolean) => {
    setError(
      boolean === false
        ? "hidden bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        : "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
    );
  };

  const initialValues = {
    name: "",
    lastname: "",
    birthday: "",
    email: "",
    password: "",
    confirmPassword: "",
    pathType: "",
    additionalAddress: "",
    streetName: "",
    streetNumber: "",
    city: "",
    zip: "",
    phone: "",
    sex: "",
    terms: "",
  };

  const initialValidationValues = {
    name: false,
    lastname: false,
    birthday: false,
    email: false,
    password: false,
    confirmPassword: false,
    phone: false,
    terms: false,
  };

  const [values, setValues] = useState(initialValues);
  const [validateValues, setValidateValues] = useState(initialValidationValues);
  const [checkingFocus, setCheckingFocus] = useState(initialValidationValues);

  useEffect(() => {
    if (values.password === values.confirmPassword) {
      setValidateValues({ ...validateValues, confirmPassword: true });
    } else {
      setValidateValues({ ...validateValues, confirmPassword: false });
    }
  }, [values.confirmPassword, values.password]);

  useEffect(() => {
    if (values.terms === true) {
      setValidateValues({ ...validateValues, terms: true });
    } else {
      setValidateValues({ ...validateValues, terms: false });
    }
  }, [values.terms]);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues({ ...values, [name]: type === "checkbox" ? checked : value });

    const inputRegexName = Object.keys(REGEX).find(
      (regexName) => regexName === name
    );

    if (inputRegexName) {
      setValidateValues({
        ...validateValues,
        [name]: REGEX[name].test(value),
      });
    }
  };

  const onFocus = (e) => {
    const { name, value, type, checked } = e.target;
    setCheckingFocus({ ...checkingFocus, [name]: true });
  };

  const onBlur = (e) => {
    const { name, value, type, checked } = e.target;
    setCheckingFocus({ ...checkingFocus, [name]: false });
  };

  const handleForms = () => {
    switch (page) {
      case 0: {
        return (
          <div>
            <FirstForm
              formValues={values}
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              formValidation={validateValues}
              checkingFocus={checkingFocus}
            ></FirstForm>
          </div>
        );
      }
      case 1: {
        return (
          <SecondForm
            formValues={values}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            formValidation={validateValues}
            checkingFocus={checkingFocus}
          ></SecondForm>
        );
      }
      case 2: {
        return (
          <ThirdForm
            formValues={values}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            formValidation={validateValues}
            checkingFocus={checkingFocus}
          ></ThirdForm>
        );
      }
      default:
        return null;
    }
  };

  const setForm = (e) => {
    const name = e.target.innerText;
    switch (name) {
      case "Étape 1/3": {
        return setPage(0);
      }
      case "Étape 2/3": {
        return setPage(1);
      }
      case "Étape 3/3": {
        return setPage(2);
      }
      default:
        setPage(0);
    }
  };
  const checkingInvalidInputs = () => {
    const isInputNotValid = Object.entries(validateValues).some(
      ([key, value]) => value === false
    );

    return isInputNotValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

		if (checkingInvalidInputs()) {
			showMessageError(true);
		} else {
			showMessageError(false);
			delete values.terms;
			delete values.confirmPassword;
			const response = await register(values);

			if(response.status == 200)
			{
				window.location.href=("/register-submitted");
			}
		}
  };

  return (
    <div className="accueil bg-cover bg-[url('./imgs/Gradient.png')] w-full h-full">
      <div className=" pt-8 mb-12 grid gap-4 place-content-center  ">
        <div className={error} id="messageError">
          <strong className="font-bold">
            Un problème a été détecté, veuillez vérifier vos saisies.
          </strong>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
        </div>

        <ul className="flex justify-between w-full">
          <li
            onClick={setForm}
            className={
              page === 0 ? "bg-cyan-700 w-2/6 rounded-lg  " : "bg: transparent"
            }
          >
            <div className="flex items-center ">
              <span className="stepper-head-icon ml-12">
                <svg
                  className="h-8 w-8 text-cyan-500"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <circle cx="12" cy="7" r="4" />{" "}
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg>
              </span>
              <span
                className={
                  page === 0
                    ? "ml-5 text-white font-medium"
                    : "ml-2 text-gray-500 cursor-pointer"
                }
              >
                Étape 1/3
              </span>
            </div>
          </li>
          <li
            onClick={setForm}
            className={
              page === 1 ? "bg-cyan-700  w-2/6 rounded-lg" : "bg: transparent "
            }
          >
            <div className="flex items-center">
              <span className="stepper-head-icon ml-10">
                <svg
                  className="h-8 w-8 text-cyan-500"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <circle cx="12" cy="7" r="4" />{" "}
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg>
              </span>
              <span
                className={
                  page === 1
                    ? "ml-5 text-white font-medium"
                    : "ml-2 text-gray-500 cursor-pointer"
                }
              >
                Étape 2/3
              </span>
            </div>
          </li>
          <li
            onClick={setForm}
            className={
              page === 2 ? "bg-cyan-700 w-2/6 rounded-lg" : "bg: transparent"
            }
          >
            <div className="flex items-center">
              <span className="stepper-head-icon ml-10">
                <svg
                  className="h-8 w-8 text-cyan-500"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <circle cx="12" cy="7" r="4" />{" "}
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg>
              </span>
              <span
                className={
                  page === 2
                    ? "ml-5 text-white font-medium"
                    : "ml-2 text-gray-500 cursor-pointer"
                }
              >
                Étape 3/3
              </span>
            </div>
          </li>
        </ul>
        <div className="flex-1">{handleForms()}</div>
        <div className="grid grid-cols-2 gap-4 place-content-center items-center">
          <button
            onClick={handlePrev}
            className="bg-cyan-700  hover:bg-cyan-800 rounded-md text-gray-400 font-bold py-2 px-4 disabled:bg-gray-400 disabled:bg-opacity-25 disabled:text-opacity-25 "
            disabled={page === 0}
          >
            Prev
          </button>
          {page === 2 ? (
            <button
              onClick={handleSubmit}
              className="bg-cyan-700 hover:bg-cyan-800 rounded-md text-white font-bold py-2 px-4 disabled:bg-opacity-25 disabled:text-opacity-25"
              //permet de désactiver/griser le bouttons submits si les saisies ne sont pas bonnes :
              // disabled={checkingInvalidInputs()}
            >
              Submit
            </button>
          ) : (
            <button
              onClick={handleNext}
              className=" bg-cyan-700 hover:bg-cyan-800 rounded-md text-white font-bold py-2 px-4 disabled:bg-gray-400"
            >
              Next
            </button>
          )}
          {/* <button onClick={test}>envoie</button> */}
        </div>
      </div>
    </div>
  );
};

export default RegisterView;