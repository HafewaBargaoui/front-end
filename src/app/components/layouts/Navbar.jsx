import React from "react";
import {Link} from "react-router-dom";
import logo from "../../assets/images/C_logoWhite.png";
import {
	URL_HOME,
	URL_LOGIN,
	URL_REGISTER,
} from "../../constants/urls/urlFrontEnd";

const Navbar = () => {
	return (
		<nav className="grid bg-black px-2 sm:px-4 py-2.5 fixed h-32 content-center w-full z-20 top-0 left-0">
			<div className="container flex items-center justify-between mx-auto">
				<a
					href="#"
					className="flex items-center"
				>
					<img
						src={logo}
						className="h-6 xl:h-22 xl:ml-16 sm:h-9"
						alt="carbuddy Logo"
					/>
				</a>
				<div className="flex md:order-2">
					<div className="grid md:grid-cols-2 md:gap-2">
						<Link to={URL_REGISTER}>
							<button
								type="button"
								className=" md:text-white md:bg-vert md:hover:bg-verth md:focus:ring-4 md:focus:outline-none  md:font-medium md:rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 "
							>
								S'incrire
							</button>{" "}
						</Link>
						<Link to={URL_LOGIN}>
							<button
								type="button"
								className="md:text-white md:bg-rose md:hover:bg-roseh md:focus:ring-4 md:focus:outline-none  md:font-medium md:rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 "
							>
								Connexion
							</button>
						</Link>
					</div>
					<button
						data-collapse-toggle="navbar-sticky"
						type="button"
						className="inline-flex items-center p-2 text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 "
						aria-controls="navbar-sticky"
						aria-expanded="false"
					>
						<span className="sr-only">Open main menu</span>
						<svg
							className="w-6 h-6"
							aria-hidden="true"
							fill="white"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clipRule="evenodd"
							></path>
						</svg>
					</button>
				</div>
				<div
					className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
					id="navbar-sticky"
				>
					<ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-black md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
						<li>
							<a
								href="#"
								className="lienhover block py-2 pl-3 pr-4 text-white bg-black rounded md:p-0 "
								aria-current="page"
							>
								A Propos
							</a>
						</li>
						<li>
							<a
								href="#"
								className="lienhover block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 "
							>
								Chercher
							</a>
						</li>
						<li>
							<a
								href="#"
								className="lienhover block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0"
							>
								Tarifs
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;