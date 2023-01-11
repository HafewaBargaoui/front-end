import React, { useState } from "react";
import { Field, Form, Formik } from "formik";

const SignUp = () => {
  const Etape1 = () => {
    const [errorLog, setErrorLog] = useState(false);
    const nextStep = () => {
      console.log("clic");
      setisClicked(true);
    };
    return (
      <div className="w-full max-w-md space-y-8 rounded-xl p-4 py-12 px-4 shadow-lg sm:px-6 lg:px-8 bg-cover bg-center bg-[url('../../assets/images/GradientInscr.png')]">
        <div>
          <h2 className="mt-2 text-center text-3xl font-semibold text-black">
            INSCRIPTION
          </h2>
        </div>

        <hr />

        <Formik
          initialValues={{
            nom: "",
            prenom: "",
            date: "",
            email: "",
            password: "",
          }}
          onSubmit={nextStep}
        >
          <Form className="mt-8 space-y-6">
            <div className="grid grid-cols-2 gap-3 rounded-md shadow-sm">
              <div className="grid grid-row space-y-3">
                <Field
                  type="text"
                  name="nom"
                  placeholder="nom"
                  autoComplete="nom"
                  className="inputInscription"
                />
                <Field
                  type="text"
                  name="prenom"
                  placeholder="prenom"
                  autoComplete="prenom"
                  className="inputInscription"
                />
                <Field
                  type="date"
                  name="date de naissance"
                  placeholder="date de naissance"
                  autoComplete="date de naissance"
                  className="inputInscription"
                />
              </div>
              <div className="grid grid-row space-y-3">
                <Field
                  type="email"
                  name="email"
                  placeholder="e-mail"
                  autoComplete="email"
                  className="inputInscription"
                />
                <Field
                  type="password"
                  name="password"
                  placeholder="mot de passe"
                  autoComplete="current-password"
                  className="inputInscription"
                />
                <Field
                  type="password"
                  name="password"
                  placeholder="mot de passe"
                  autoComplete="current-password"
                  className="inputInscription"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="btn bg-vert text-white group relative w-full"
              >
                ÉTAPE SUIVANTE
              </button>
            </div>
            {errorLog && (
              <div className="flex justify-center">
                <small className="text-sm italic text-red-600">erreurs !</small>
              </div>
            )}
          </Form>
        </Formik>
      </div>
    );
  };

  const Etape2 = () => {
    const [errorLog, setErrorLog] = useState(false);
    const nextStepTwo = () => {
      console.log("clic");
    };
    return (
      <div className="w-full max-w-md space-y-8 rounded-xl p-4 py-12 px-4 shadow-lg sm:px-6 lg:px-8 bg-cover bg-center bg-[url('../../assets/images/GradientInscr.png')]">
        <Formik
          initialValues={{
            Adresse: "",
            voie: "",
            Ville: "",
            cp: "",
            complément: "",
          }}
          onSubmit={nextStepTwo}
        >
          <Form className="mt-8 space-y-6">
            <div className="grid grid-cols-2 gap-3 rounded-md shadow-sm">
              <div className="grid grid-row space-y-3">
                <Field
                  type="text"
                  name="Adresse"
                  placeholder="Adresse"
                  autoComplete="Adresse"
                  className="inputInscription"
                />
                <Field
                  type="text"
                  name="voie"
                  placeholder="Type de voie"
                  autoComplete="Type de voie"
                  className="inputInscription"
                />
                <Field
                  type="text"
                  name="Ville"
                  placeholder="Ville"
                  autoComplete="Ville"
                  className="inputInscription"
                />
                <Field
                  type="text"
                  name="cp"
                  placeholder="Code postal"
                  autoComplete="Code postal"
                  className="inputInscription"
                />
              </div>
              <div className="grid grid-row space-y-3">
                <Field
                  type="text"
                  name="Complément"
                  placeholder="Complément d'adresse"
                  autoComplete="Complément d'adresse"
                  className="inputInscription"
                />
                <Field
                  type="text"
                  name="Numéro de la rue"
                  placeholder="Numéro de la rue"
                  autoComplete="Numéro de la rue"
                  className="inputInscription"
                />
                <Field
                  type="text"
                  name="Département"
                  placeholder="Département"
                  autoComplete="Département"
                  className="inputInscription"
                />
                <Field
                  type="tel"
                  name="Téléphone"
                  placeholder="Téléphone"
                  autoComplete="Téléphone"
                  className="inputInscription"
                />
              </div>
              <Field
                type="checkbox"
                name="mentions légales"
                value="Accepter les mentions légales"
              />
            </div>

            <div>
              <button
                type="submit"
                className="btn bg-vert text-white group relative w-full"
              >
                ÉTAPE SUIVANTE
              </button>
            </div>
            {errorLog && (
              <div className="flex justify-center">
                <small className="text-sm italic text-red-600">erreurs !</small>
              </div>
            )}
          </Form>
        </Formik>
      </div>
    );
  };

  const Etape3 = () => {
    const [errorLog, setErrorLog] = useState(false);
    const nextStepTree = () => {
      console.log("clic");
    };
    return (
      <div className="w-full max-w-md space-y-8 rounded-xl p-4 py-12 px-4 shadow-lg sm:px-6 lg:px-8 bg-cover bg-center bg-[url('../../assets/images/GradientInscr.png')]">
        <div>
          <h2 className="mt-2 text-center text-3xl font-semibold text-black">
            Inscription terminé, un mail vous a été envoyé, veuillez valider
            votre compte
          </h2>
        </div>
        <div>
          <button
            type="submit"
            className="btn bg-vert text-white group relative w-full"
          >
            ÉTAPE SUIVANTE
          </button>
        </div>
      </div>
    );
  };

  const [isClicked, setisClicked] = useState(false);
  return <>{!isClicked ? <Etape1 /> : <Etape2 />}</>;
};

export default SignUp;
