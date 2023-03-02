import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/C_logoWhite.png";
import avatar from "../../../../public/imgs/avatar.png";
import {
  URL_HOME,
  URL_LOGIN,
  URL_TRAJETS,
  URL_PROFILEPREFS,
  URL_PROFIL,
  URL_CARTE,
  URL_REGISTER,
  URL_DELETE_ACCOUNT,
} from "../../constants/urls/urlFrontEnd";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLogged, selectUser } from "../../redux-store/authenticationSlice";
import { signOut } from "../../redux-store/authenticationSlice";

import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { logout, getProfile } from "../../api/backend/account";



const Navbar = () => {
  const isAuthenticated = useSelector(selectIsLogged);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const [photo, setphoto] = useState([]);

  const profilePic = async () => {
    const response = await getProfile(user.id);
    setphoto(response.data.userPrefs.file[0].filename)
  }
  useEffect(() => {
    if (isAuthenticated) {
      profilePic();
    }
  }, [isAuthenticated])


  const logOut = (values) => {
    logout(values)
      .then((res) => {

        dispatch(signOut(res.data));
        navigate(URL_HOME);
      })

  };


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
        <div className="relative md:order-2 ">
          <Menu as="div" className=" relative w-24 mr-16 opacity-100 z-50 ">
            <Menu.Button className={`inline-flex w-20 justify-center rounded-full bg-black px-4 py-4 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}>
              {isAuthenticated && photo != "" ?
                <img className={`${isAuthenticated && "border-2 border-green-500 rounded-full"}`} src={photo} />
                :
                <img className={`${isAuthenticated && "border-2 border-green-500 rounded-full"}`} src={avatar} />
              }
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-500"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute grid item-center justify-center right-0 mt-2 px-4 w-fit origin-top-right divide-y divide-gray-100 rounded-md bg-black bg-opacity-80 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {isAuthenticated ?
                  <>
                    <div className="px-1 py-1 ">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${active
                                ? "bg-black bg-opacity-95 text-white"
                                : "text-gray-300"
                              } group flex w-full items-center justify-center rounded-md px-2 py-2 text-sm`}
                          >
                            <a
                              href={URL_TRAJETS}
                              className="block py-2 pl-3 pr-4 text-white text-xs text-center rounded hover:scale-105 md:hover:bg-transparent  md:p-0 "
                            >
                              Liste des trajets
                            </a>
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${active
                                ? "bg-black bg-opacity-95 text-white"
                                : "text-gray-300"
                              } group flex w-full items-center justify-center rounded-md px-2 py-2 text-sm`}
                          >
                            <a
                              href={URL_PROFILEPREFS}
                              className="block py-2 pl-3 pr-4 text-white text-xs text-center rounded hover:scale-105 md:hover:bg-transparent  md:p-0"
                            >
                              preferences
                            </a>
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="px-1 py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${active
                                ? "bg-black bg-opacity-95 text-white"
                                : "text-gray-300"
                              } group flex w-full items-center justify-center rounded-md px-2 py-2 text-sm`}
                          >
                            <a
                              href={URL_PROFIL}
                              className="block py-2 pl-3 pr-4 text-white text-center text-xs rounded hover:scale-105 md:hover:bg-transparent  md:p-0"
                            >
                              profil
                            </a>
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${active
                                ? "bg-black bg-opacity-95 text-white"
                                : "text-gray-300"
                              } group flex w-full items-center justify-center rounded-md px-2 py-2 text-sm`}
                          >

                            <a
                              href={URL_DELETE_ACCOUNT}
                              className="block py-2 pl-3 pr-4 text-white text-center text-xs rounded hover:scale-105 md:hover:bg-transparent  md:p-0"
                            >
                              supprimer mon compte
                            </a>
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${active
                                ? "bg-black bg-opacity-95 text-white"
                                : "text-gray-300"
                              } group flex w-full items-center justify-center rounded-md px-2 py-2 text-sm`}
                          >


                            <a
                              href={URL_CARTE}
                              className="block py-2 pl-3 pr-4 text-white text-center text-xs rounded  hover:scale-105 md:hover:bg-transparent  md:p-0"
                            >
                              carte
                            </a>
                          </button>
                        )}
                      </Menu.Item>
                    </div>

                  </>
                  :
                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${active
                              ? "bg-black bg-opacity-95 text-white"
                              : "text-gray-300"
                            } group flex w-full items-center justify-center rounded-md px-2 py-2 text-sm`}
                        >
                          <a
                            href={URL_REGISTER}
                            className="block py-2 pl-3 pr-4 text-white text-center text-xs rounded hover:scale-105 md:hover:bg-transparent  md:p-0"
                          >
                            s'inscrire
                          </a>
                        </button>
                      )}
                    </Menu.Item>
                  </div>

                }
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={isAuthenticated && logOut}
                        className={`${active
                            ? "bg-black bg-opacity-95 text-white"
                            : "text-gray-300"
                          } 
                        group flex w-full items-center justify-center rounded-md px-2 py-2 text-sm`}
                      >
                        {isAuthenticated ?
                          <a
                            onClick={logOut}

                            className="block py-2 pl-3 pr-4 text-white text-xs text-center rounded font-semibold  hover:scale-105 md:hover:bg-transparent  md:p-0"
                          >
                            déconnexion
                          </a>
                          :
                          <a
                            href={URL_LOGIN}
                            className="block py-2 pl-3 pr-4 text-white text-xs text-center rounded font-semibold  hover:scale-105 md:hover:bg-transparent  md:p-0"
                          >
                            connexion
                          </a>


                        }
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-black md:flex-row md:space-x-32 md:mt-0 md:text-sm md:font-medium md:border-0 ml-12">
            <li>
              <a
                href="/createTrajet"
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
                BuddyCoins
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
