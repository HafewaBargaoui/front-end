import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import facebook from "../assets/images/footer/facebook.png";
import youtube from "../assets/images/footer/youtube.png";
import linkedin from "../assets/images/footer/linkedin.png";
import twitter from "../assets/images/footer/twitter.png";
import instagram from "../assets/images/footer/instagram.png";
export default function Contact() {
  const FooterImg = ({ src, lien, alt, title }) => (
    <div className="w-14 pr-6 ml-4">
      <a href={lien} target="_blank">
        <img src={src} alt={alt} title={title} />
      </a>
    </div>
  );
  const initialValues = {
    name: "",
    lastname: "",
    email: "",
    phone: "",
    message:""
  };
  const phoneRegExp = /^(0|\+33)[1-9]([-.]?[0-9]{2}){4}$/;
  const username = /^[A-z][A-z0-9-_]{3,23}$/;
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Votre prénom obligatoire.")
      .min(3, "Votre prénom doit comporter 3 caractères minimum.")
      .max(30, "Votre prénom doit comporter 30 caractères maximum.")
      .matches(username, 'Prénom invalide.'),
    lastname: Yup.string()
      .required("Votre nom obligatoire.")
      .min(3, "Votre nom doit comporter 3 caractères minimum.")
      .max(30, "Votre nom doit comporter 30 caractères maximum.")
      .matches(username, 'Nom invalide.'),
    email: Yup.string()
      .email('Hum, cette adresse e-mail n’a pas l’air valide. Vérifiez si elle contient bien le "@" et le ".".')
      .required('Votre email est obligatoire.'),
    phone: Yup.string()
      .matches(phoneRegExp, 'Veuillez entrer un numéro de téléphone valide.')
      .required("Votre numéro de téléphone est obligatoire."),
    message: Yup.string()
      .required("Message manquant.")
      .max(500, "Votre message doit comporter 500 caractères maximum."),
  });
  
  return (
    <section className='text-white h-full w-full flex justify-center items-center bg-cover bg-[url("/src/app/assets/images/darkgradient.png")]'>
         <div className="px-4  bg-cover bg-center "> 
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 ">
            Contactez-nous
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Remplissez le formulaire ci-dessous et nous vous répondrons dans les
            plus brefs délais.
          </p>
        </div>
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={null}
      >
        <Form className="lg:w-1/2 md:w-2/3 mx-auto flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label className="leading-7 text-sm" htmlFor="name">Prénom<span className="text-red-500">*</span></label>
                <Field
                  type="text"
                  id="name"
                  maxlength="30"
                  placeholder="Michel"
                  name="name"
                  className="w-full inputInscription shadow appearance-none border rounded py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage name="name">
              {(error) => (
                <div className="text-xs pt-2 text-red-600 ">{error}</div>
              )}
            </ErrorMessage>
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label className="leading-7 text-sm" htmlFor="lastname">Nom<span className="text-red-500">*</span></label>
                <Field
                  type="text"
                  id="lastname"
                  name="lastname"
                  maxlength="30"
                  placeholder="Dupont"
                  className="w-full inputInscription shadow appearance-none border rounded py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                />
                    <ErrorMessage name="lastname">
              {(error) => (
                <div className="text-xs pt-2 text-red-600 ">{error}</div>
              )}
            </ErrorMessage>
              </div>
            </div>

            <div className="p-2 w-1/2">
              <div className="relative">
                <label className="leading-7 text-sm" htmlFor="email">Adresse mail<span className="text-red-500">*</span> </label>
                <Field
                  type="mail"
                  id="email"
                  name="email"
                  placeholder="michel.dupont@gmail.com "
                  className="w-full inputInscription shadow appearance-none border rounded py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                />
                    <ErrorMessage name="email">
              {(error) => (
                <div className="text-xs pt-2 text-red-600 ">{error}</div>
              )}
            </ErrorMessage>
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label className="leading-7 text-sm" htmlFor="phone">Téléphone<span className="text-red-500">*</span></label>
                <Field
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full inputInscription shadow appearance-none border rounded py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage name="phone">
              {(error) => (
                <div className="text-xs pt-2 text-red-600 ">{error}</div>
              )}
            </ErrorMessage>
              </div>
            </div>

            <div className="p-2 w-full">
              <div className="relative">
                <label className="leading-7 text-sm" htmlFor="message">Message<span className="text-red-500">*</span></label>
                <Field
                  as='textarea'
                  id="message"
                  name="message"
                  placeholder="Tapez votre message"
                  className=" inputInscription w-full bg-opacity-40 rounded border border-gray-700 focus:outline-none focus:shadow-outline h-32 text-black outline-none py-1 px-3 resize-none leading-tight "
                />
                  <ErrorMessage name="message">
              {(error) => (
                <div className="text-xs pt-2 text-red-600 ">{error}</div>
              )}
            </ErrorMessage>
              </div>
            </div>
            <div className="p-2 w-full">
              <button
                //onClick={handleSubmit}
                className="flex mx-auto text-white bg-cyan-700 hover:bg-cyan-800 border-0 py-2 px-8 focus:outline-none rounded text-lg"
              >
                Envoyer
              </button>
            </div>
        </Form>
        </Formik>
      </div> 
    </section>
  );
}
