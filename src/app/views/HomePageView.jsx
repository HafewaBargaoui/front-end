import React, { useState, useEffect, Fragment, useRef } from "react";
import { Link } from "react-router-dom";
import { useSearch } from "../hook/useSearch"
import {
  URL_REGISTER,
  URL_FAQ,
  URL_CONTACT,
} from "../constants/urls/urlFrontEnd";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpIcon } from "@heroicons/react/solid";
import { gsap } from "gsap";
import { AttentionSeeker, Fade } from "react-awesome-reveal";


export default function HomePageView() {
  const { depart, setDepart, arrive, setArrive, resultsDepart, resultsArrive } =
    useSearch();
  const [selectedDepart, setselectedDepart] = useState(resultsDepart[0]);
  const [selectedArrive, setselectedArrive] = useState(resultsArrive[0]);
  const filteredDepart =
    depart === ""
      ? resultsDepart
      : resultsDepart.filter((depart) => depart.name);

  const filteredArrive =
    arrive === ""
      ? resultsArrive
      : resultsArrive.filter((arrive) => arrive.name);

  const imgRef = useRef(null);
  useEffect(() => {
    gsap.from(imgRef.current, {
      duration: 2.5,
      opacity: 0,
      y: 50,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="accueil overflow-hidden bg-cover bg-[url('./imgs/gradientAccueilCarbuddy.png')]">

      <div className="recherche bg-cyan-700 bg-opacity-40 h-24 pt-7 ">
        <div className="flex flex-row items-center justify-around">
          <Combobox value={selectedDepart} onChange={setselectedDepart}>
            <div className="relative mt-1">
              <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                <Combobox.Input
                  className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                  displayValue={(depart) => depart.name}
                  onChange={(e) => setDepart(e.target.value)}
                  autoComplete="off"
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Combobox.Button>
              </div>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setDepart("")}
              >
                <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {filteredDepart.length === 0 && depart !== "" ? (
                    <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                      Nothing found.
                    </div>
                  ) : (
                    filteredDepart.map((depart, i) => (
                      <Combobox.Option
                        key={i}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active ? "bg-jauneh text-black" : "text-gray-900"
                          }`
                        }
                        value={depart}
                      >
                        {({ selectedDepart, active }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selectedDepart ? "font-medium" : "font-normal"
                              }`}
                            >
                              {depart.name}
                            </span>
                            {selectedDepart ? (
                              <span
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                  active ? "text-white" : "text-teal-600"
                                }`}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Combobox.Option>
                    ))
                  )}
                </Combobox.Options>
              </Transition>
            </div>
          </Combobox>

          <Combobox value={selectedArrive} onChange={setselectedArrive}>
            <div className="relative mt-1">
              <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                <Combobox.Input
                  className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                  displayValue={(arrive) => arrive.name}
                  onChange={(e) => setArrive(e.target.value)}
                  autoComplete="off"
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Combobox.Button>
              </div>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setArrive("")}
              >
                <Combobox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {filteredArrive.length === 0 && arrive !== "" ? (
                    <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                      Nothing found.
                    </div>
                  ) : (
                    filteredArrive.map((arrive, i) => (
                      <Combobox.Option
                        key={i}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active ? "bg-jauneh text-black" : "text-gray-900"
                          }`
                        }
                        value={arrive}
                      >
                        {({ selectedArrive, active }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selectedArrive ? "font-medium" : "font-normal"
                              }`}
                            >
                              {arrive.name}
                            </span>
                            {selectedArrive ? (
                              <span
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                  active ? "text-white" : "text-teal-600"
                                }`}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Combobox.Option>
                    ))
                  )}
                </Combobox.Options>
              </Transition>
            </div>
          </Combobox>

          <div className="">
            <input
              className="inputInscription"
              type="date"
              name="date"
              id="inputDate"
            ></input>
          </div>

          <div className="">
            <input
              className="inputInscription"
              type="number"
              min="0"
              name="number"
              id="inputNumber"
              placeholder="Nombre de personnes"
            ></input>
          </div>

          <Link
            to="/Carte"
            state={{
              selectedDepart: selectedDepart,
              selectedArrive: selectedArrive,
            }}
            className="btn-white"
          >
            GO !
          </Link>
        </div>
      </div>
  
      <div className="">
        <Fade duration={2000} triggerOnce="true">
          <div className="flex mx-auto w-96 mt-10 mb-10 ">
            <img src="imgs/CarbuddyWhitePink.png" alt="logo en noir"></img>
          </div>

          <div className="flex mx-auto w-1/2 h-auto ">
            <img
              ref={imgRef}
              className="rounded-lg drop-shadow-lg"
              src="imgs/2hommes.jpeg"
              alt="voiture"
            ></img>
          </div>
        </Fade>

        <div className="mx-auto pb-20 pt-10 text-white leading-8 text-center  text-xl tracking-wide drop-shadow-lg ">
          <Fade duration="2000" triggerOnce="true">
            <Fade cascade damping={0.01} triggerOnce="true">
              Une multitude de trajets est disponible sur notre application.
            </Fade>
            <Fade delay={1000} cascade damping={0.01} triggerOnce="true">
              Réservez votre trajet en quelques clics ! Pour que vous puissiez
            </Fade>
            <Fade delay={2000} cascade damping={0.01} triggerOnce="true">voyager en toute confiance, nous vérifions chaques profils.</Fade>
          </Fade>
        </div>
      </div>

      <div className="flex flex-row mt-20">
        <div className="basis-1/2 ml-24 mr-24">
          <Fade cascade duration="1000" triggerOnce="true">
            <h1 className="text-transform: uppercase text-white text-5xl font-semibold mt-28 mb-8 ml-20">
              Qui sommes-nous ?
            </h1>
            <div className="text-center">
              <Fade  className="text-white leading-8 text-xl" cascade duration="1000" triggerOnce="true">
                <Fade cascade damping={0.01} triggerOnce="true" >
                  Nous sommes une société de covoiturage qui privilégie le
                  coopératif
                </Fade>
                <Fade delay={1000} cascade damping={0.01} triggerOnce="true">
                  et non l'aspect financier. 50 points offerts dès votre
                  inscription !
                </Fade>
                <Fade delay={2000} cascade damping={0.01} triggerOnce="true">
                  Pour en profiter dès à présent cliquez sur le bouton
                  ci-dessous.
                </Fade>
              </Fade>
            </div>
            <AttentionSeeker effect="headShake">
              <Fade delay={2000} duration="2000" triggerOnce="true">
                <Link to={URL_REGISTER}>
                  <button
                    type="button"
                    className=" text-black uppercase font-semibold bg-jauneh hover:bg-jaune hover:scale-110 md:focus:ring-4 md:focus:outline- 
							 none rounded-lg text-md px-5 py-2.5 text-center mt-8 ml-72"
                  >
                    S'inscrire
                  </button>
                </Link>
              </Fade>
            </AttentionSeeker>
          </Fade>
        </div>
        <div className="basis-1/2 ">
          <Fade duration="3000" triggerOnce="true">
            <img
              className="flex rounded-lg  "
              // className="rounded-sm drop-shadow-lg"
              src="imgs/map.jpg"
              alt="voiture"
            ></img>
          </Fade>
        </div>
      </div>

      <Fade duration="5000" triggerOnce="true">
        <div className="">
          <div className="flex flex-col mt-36">
            <Fade direction="left" triggerOnce="true">
              <div className="bg-white bg-opacity-40 p-8 mx-auto mr-52 ml-72 rounded-lg shadow-lg">
                <div className="flex flex-row">
                  <div className="w-40">
                    <img className="rounded-md" src="imgs/ecologie.jpg" alt="logo écologie" />
                  </div>
                  <p className="text-lg text-center mx-24 mt-6">
                    En utilisant notre application de covoiturage, vous
                    contribuez au bien-être de notre planète en réduisant les
                    émissions de carbone.
                  </p>
                </div>
              </div>
            </Fade>

            <Fade direction="right" triggerOnce="true">
              <div className="bg-white bg-opacity-40 p-8 mx-auto mr-72 ml-52 mt-16 rounded-lg shadow-lg">
                <div className="flex flex-row">
              
                  <p className="text-lg text-center mx-24 mt-4">
                    L'application vous permet de faire des économies d'argent
                    puisqu'ici il n'est question que de points. Ne partez plus
                    avec les places passagers vides. Faites-en profiter d'autres
                    utilisateurs.
                  </p>
                  <div className="">
                    <img className="rounded-md" src="imgs/tirelire.jpg" alt="logo tirelire" />
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </Fade>
  
 



      <div className="">
        <div className="flex flex-row bg-black mt-36 px-4 py-12 ">
          <div className="flex w-56 ml-20">
            <img src="imgs/CarbuddyWhitepink.png" alt="logo en blanc"></img>
          </div>
          <div className="flex flex-row text-white mx-auto">
            <div className="mr-40 text-lg">
              <a href="https://mytek-store.fr/cgv">CGV</a>
            </div>
            <div className="mr-40 text-lg">
              <a href="https://mytek-store.fr/mentions-legales">CGU</a>
            </div>
            <div className="mr-24 text-lg">
              <Link to={URL_FAQ}>FAQ</Link>
            </div>
            <div className="ml-20 text-lg">
              <Link to={URL_CONTACT}>Nous contacter</Link>
            </div>
          </div>
          <div className="flex flex-row w-12 mr-32">
            <img src="imgs/C_logoWhitecopie.png" alt="logo C en blanc"></img>
          </div>
        </div>
        <div className="flex flex-row bg-black px-4 pb-12">
          <div className="flex flex-row mx-auto">
            <div className="w-14 pr-6">
              <a href="https://facebook.com">
                <img src="imgs/facebook.png"></img>
              </a>
            </div>
            <div className="w-14 pr-6">
              <a href="https://twitter.com">
                <img src="imgs/twitter.png"></img>
              </a>
            </div>
            <div className="w-14 pr-6">
              <a href="https://youtube.com">
                <img src="imgs/youtube.png"></img>
              </a>
            </div>
            <div className="w-14 pr-6">
              <a href="https://linkedin.com">
                <img src="imgs/linkedin.png"></img>
              </a>
            </div>
            <div className="w-14 pr-6">
              <a href="https://instagram.com">
                <img src="imgs/instagram.png"></img>
              </a>
            </div>
          </div>
          <div className="mx-auto text-white">
            <p>Copyright © 2023.Carbuddy Inc.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
