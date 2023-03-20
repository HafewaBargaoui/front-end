import React, { useState } from "react";
import { TruckIcon, StarIcon } from "@heroicons/react/solid";
import buddycoin from "../../assets/images/profil/buddycoin.png";
import paul from "../../assets/images/profil/fakeUser3.png";
import parler from "../../assets/images/profileprefs/parler.png";
import fumer from "../../assets/images/profileprefs/smoking.png";
import radio from "../../assets/images/profileprefs/radio.png";
import clim from "../../assets/images/profileprefs/clim.png";
import voiture from "../../assets/images/voiture.png";
import animaux from "../../assets/images/animaux.png";

const ConducteurModal = ({ visible, onClose }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  if (!visible) return null;

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="h-screen w-screen absolute top-0 left-0 flex justify-center items-center bg-slate-200 bg-opacity-75 backdrop-blur-sm x z-10"
    >
      {/* <div className=" w-96 max-w-md"> */}
      <div className=" h-[350px]  bg-black bg-opacity-30 shadow rounded-lg backdrop-blur-sm p-6  w-[450px] relative">
        {/* /////////////////////////////////////////////////////////////// */}
        <div className="flex justify-between items-center">
          <img src={paul} alt="driver" className="w-20 h-20" />

          <div>
            <div className="grid">
              <span className="  w-8 h-8">
                <img src={voiture} alt="coin" />
              </span>
              <span>32</span>
            </div>
          </div>

          <div>
            <div className="grid">
              <span className="text-yellow-500  w-8 h-8">
                <StarIcon />
              </span>
              <span>320</span>
            </div>
          </div>

          <div>
            <div className="grid">
              <span className="  w-8 h-8">
                <img src={buddycoin} alt="coin" />
              </span>
              <span>1020</span>
            </div>
          </div>
        </div>

        <div className="pt-3">
          <div className="grid">
            <span className="font-semibold text-lg"> Paul / 35 ans</span>
            <span className=" font-thin text-lg "> Roule en Tesla Model 3</span>
          </div>
        </div>

        <div className="pt-5  flex justify-between items-center">
          <div>
            <div className="grid">
              <span className="  w-8 h-8">
                <img src={fumer} alt="coin" />
              </span>
              <span>Fumer</span>
            </div>
          </div>

          <div>
            <div className="grid">
              <span className="  w-8 h-8">
                <img src={parler} alt="coin" />
              </span>
              <span>Parler</span>
            </div>
          </div>

          <div>
            <div className="grid">
              <span className="  w-8 h-8">
                <img src={animaux} alt="coin" />
              </span>
              <span>Animaux</span>
            </div>
          </div>

          <div>
            <div className="grid">
              <span className="  w-8 h-8">
                <img src={radio} alt="coin" />
              </span>
              <span>Radio</span>
            </div>
          </div>

          <div>
            <div className="grid">
              <span className="  w-8 h-8  ">
                <img src={clim} alt="coin"  />
              </span>
              <span>Clim</span>
            </div>
          </div>
        </div>
<div className="text-center pt-5">
<button className=" bg-vert hover:bg-verth rounded-md  drop-shadow-md px-4 py-2 m-4"> Discuter </button>
</div>
        {/* ///////////////////////////////////close//////////////////////////// */}
        <button
          type="button"
          onClick={onClose}
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
        {/* /////////////////////////////////////////////////////////////// */}
      </div>

      {/* <div>
        <button className="bg-green-500 text-white rounded-sm ">
          {" "}
          Discuter
        </button>
      </div> */}
    </div>
  );
};

export default ConducteurModal;
