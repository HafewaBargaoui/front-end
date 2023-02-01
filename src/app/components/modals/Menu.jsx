import React from "react";
import { useRef } from "react";
import { URL_PROFILEPREFS, URL_TRAJETS, URL_PROFIL, URL_LOGIN } from "../../constants/urls/urlFrontEnd";

const Menu = ({ setclicked, clicked }) => {
  const menuRef = useRef();
  const clickOut = (e) => {
    if (menuRef.current.contains(e.target)) {
      console.log("in");
    } else {
      console.log("out");
      setclicked(false);
    }
  };

  return (
    <div
      className="absolute mr-16 flex justify-center items-center "
      onClick={clickOut}
    >
      <div >
        <div className=" absolute pr-40">
          <div
          ref={menuRef}
            className={`h-full w-full p-4 text-center grid place-items-center bg-black shadow bg-opacity-50 backdrop-blur-sm  rounded-lg`}
          >
            <a
              href={URL_TRAJETS}
              className="block py-2 pl-3 pr-4 text-white text-xs text-center rounded hover:scale-105 md:hover:bg-transparent  md:p-0 "
            >
              Liste des trajets
            </a>
            <hr className="m-4 p-x-4" />
            <a
              href={URL_PROFILEPREFS}
              className="block py-2 pl-3 pr-4 text-white text-xs rounded hover:scale-105 md:hover:bg-transparent  md:p-0"
            >
              preferences
            </a>
            <hr className="m-4 p-x-4" />
            <a
              href={URL_PROFIL}
              className="block py-2 pl-3 pr-4 text-white text-xs rounded  hover:scale-105 md:hover:bg-transparent  md:p-0"
            >
              profil
            </a>
           
            <hr className="m-4 p-x-4 border border-gray-500 w-full" />
            <a
              href={URL_LOGIN}
              className="block py-2 pl-3 pr-4 text-white text-xs rounded font-semibold  hover:scale-105 md:hover:bg-transparent  md:p-0"
            >
              connexion
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
