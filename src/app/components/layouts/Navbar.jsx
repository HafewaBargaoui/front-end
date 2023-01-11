import React from "react";
import logo from "../../assets/images/C_logoWhite.png"


const Navbar = () => {
  return (
    <nav className="grid bg-black px-2 sm:px-4 py-2.5 fixed h-32 content-center w-full z-20 top-0 left-0">
      <div className="container flex items-center justify-between mx-auto">
        <a href="#" className="flex items-center">
          <img
            src={logo}
            className="h-6 xl:h-22 xl:ml-16 sm:h-9"
            alt="carbuddy Logo"
          />

        </a>
        <div className="flex md:order-2">
        <div className="grid md:grid-cols-2 md:gap-2">

          <button
            type="button"
            className=" md:text-white md:bg-vert md:hover:bg-verth md:focus:ring-4 md:focus:outline-none  md:font-medium md:rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 "
          >
            S'incrire
          </button>
          <button
            type="button"
            className="md:text-white md:bg-rose md:hover:bg-roseh md:focus:ring-4 md:focus:outline-none  md:font-medium md:rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 "
          >
            Connexion
          </button>
        </div>

        <div className="flex flex-1 items-center justify-end lg:w-0">
          <div className="flex flex-col justify-center space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-4">
            {isLoggued ? (
              <button className="btn btn-red">Sign Out</button>
            ) : (
              <>
                <Link to={URL_LOGIN}>
                  <div className="link">Sign in</div>
                </Link>
                <Link to={URL_REGISTER}>
                  <button className="btn btn-green">Sign up</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;