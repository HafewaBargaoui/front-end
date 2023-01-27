import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/C_logoWhite.png";
import {
  URL_AVATAR,
  URL_HOME,
  URL_LOGIN,
  URL_REGISTER,
  URL_TRAJETS,
} from "../../constants/urls/urlFrontEnd";
import Menu from "../modals/Menu";


const Navbar = () => {
  const [clicked, setclicked] = useState(false)

  const dropdown = () => {
    setclicked(!clicked)
    console.log(clicked)
  }


  return (
    <nav className="grid bg-black px-2 sm:px-4 py-2.5 fixed h-24 content-center w-full z-20 top-0 left-0">
      <div className="container flex items-center justify-between mx-auto ">
        <Link to={URL_HOME}>
          <img
            src={logo}
            className="h-6 xl:h-22 xl:ml-16 sm:h-9"
            alt="carbuddy Logo"
          />
        </Link>
        <div className="flex md:order-2">
          <div className="w-16 mr-16 opacity-100 z-50 " 
                onClick={dropdown}
                >
              <img src="imgs/avatar.png"/>
              {/* <div className={`${clicked ? "opacity-100 transition duration-700 ease-in-out" : "opacity-0 transition duration-700 ease-in-out"} h-full w-full p-4 grid place-items-center bg-black shadow bg-opacity-50 backdrop-blur-sm  rounded-lg`}>

      
<a
        href={URL_TRAJETS}
        className="block py-2 pl-3 pr-4 text-white text-xs text-center rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 "
      >
        Liste des trajets{" "}
      </a>
      <hr className='m-4 p-x-4' />
      <a
        href="#"
        className="block py-2 pl-3 pr-4 text-white text-xs rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0"
      >
        Conditions d'utilisation
      </a>
      <hr className='m-4 p-x-4' />
      <a
        href="#"
        className="block py-2 pl-3 pr-4 text-white text-xs rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0"
      >
        test1
      </a>
      <hr className='m-4 p-x-4' />
      <a
        href="#"
        className="block py-2 pl-3 pr-4 text-white text-xs rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0"
      >
       test2
      </a>
      <hr className='m-4 p-x-4' />
      <a
        href="#"
        className="block py-2 pl-3 pr-4 text-white text-xs rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0"
      >
        test3
      </a>

  
 
  
</div> */}
              {clicked && <Menu setclicked={setclicked} clicked={clicked}/>}
          </div>
  
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-black md:flex-row md:space-x-32 md:mt-0 md:text-sm md:font-medium md:border-0 ml-12">
            <li>
              <a
                href="#"
                className="lienhover block py-2 pl-3 pr-4 text-white bg-black rounded md:p-0 "
                aria-current="page"
              >
                Créer un trajet
              </a>
            </li>
            <li>
              <a
                href={URL_TRAJETS}
                className="lienhover block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 "
              >
                Liste des trajets{" "}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="lienhover block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0"
              >
                Conditions d'utilisation
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
