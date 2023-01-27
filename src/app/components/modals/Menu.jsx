import React from "react";
import { useRef } from "react";
import { URL_TRAJETS } from "../../constants/urls/urlFrontEnd";

const Menu = ({ setclicked, clicked }) => {
  const menuRef = useRef();
  const clickOut = (e) => {
      setclicked(false);
  };

  return (
    <div
      className="absolute mr-16 flex justify-center items-center "
      onClick={clickOut}
    >
      <div ref={menuRef}>
        <div className=" ">
          <div
            className={`h-full w-full p-4 grid place-items-center bg-black shadow bg-opacity-50 backdrop-blur-sm  rounded-lg`}
          >
            <a
            onClick={clickOut}
              href={URL_TRAJETS}
              className="block py-2 pl-3 pr-4 text-white text-xs text-center rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 "
            >
              Liste des trajets{" "}
            </a>
            <hr className="m-4 p-x-4" />
            <a
              href="#"
              className="block py-2 pl-3 pr-4 text-white text-xs rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0"
            >
              Conditions d'utilisation
            </a>
            <hr className="m-4 p-x-4" />
            <a
              href="#"
              className="block py-2 pl-3 pr-4 text-white text-xs rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0"
            >
              test1
            </a>
            <hr className="m-4 p-x-4" />
            <a
              href="#"
              className="block py-2 pl-3 pr-4 text-white text-xs rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0"
            >
              test2
            </a>
            <hr className="m-4 p-x-4" />
            <a
              href="#"
              className="block py-2 pl-3 pr-4 text-white text-xs rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0"
            >
              test3
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
