import React, { useState } from "react";

const ConducteurModal = ({ visible, onClose }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  if (!visible) return null;

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="h-screen w-screen absolute top-0 left-0 flex justify-center items-center bg-slate-200 bg-opacity-75 backdrop-blur-sm x z-30"
    >
      <div className=" w-96 max-w-md">
        <div className="relative grid place-items-center bg-black bg-opacity-30 shadow rounded-lg backdrop-blur-sm">
          <p>Informations coducteur</p>
          <ul>
            <li>Radio</li>
            <li>Parler</li>
          </ul>
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
        </div>
      </div>
    </div>
  );
};

export default ConducteurModal;
