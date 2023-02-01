import React from "react";
import { Link } from "react-router-dom";
import {
	URL_REGISTER,
	URL_FAQ,
	URL_CONTACT,
} from "../constants/urls/urlFrontEnd";

export default function HomePageView() {
	return (
		<div className="accueil bg-cover bg-[url('./imgs/Gradient.png')]">
			<div className="recherche bg-cyan-700 bg-opacity-40 h-24 pt-7 ">
				<div className="flex flex-row items-center justify-around">
					<div className="">
						<input
							className="inputInscription"
							type="text"
							name="departure"
							id="inputDeparture"
							placeholder="Point de départ"
						></input>
					</div>

					<div className="">
						<input
							className="inputInscription"
							type="text"
							name="destination"
							id="inputDestination"
							placeholder="Point d'arrivée"
						></input>
					</div>

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
						to="/goSearch"
						className="btn-white"
					>
						GO !
					</Link>

				</div>
			</div>

			{/* <div className='bg-gradient-to-l from-green-500'>  */}
			<div className="">
				<div className="flex mx-auto w-96 mt-10 mb-10 ">
					<img
						src="imgs/CarbuddyWhitePink.png"
						alt="logo en noir"
					></img>
				</div>

				<div className="flex mx-auto w-1/2 h-auto ">
					<img
						className="rounded-lg drop-shadow-lg"
						src="imgs/route.jpg"
						alt="voiture"
					></img>
				</div>

				<div className="flex mx-auto pb-20 pt-10 text-white leading-8 text-center w-1/3 text-xl tracking-wide drop-shadow-lg ">
					<p>
						Une multitude de trajets est disponible sur notre application. Réservez votre trajet en quelques clics ! Pour que vous puissiez voyager en toute confiance, nous vérifions chaques profils.
					</p>
				</div>
			</div>
			<div className="flex flex-row mt-20">
				<div className="basis-1/2 ml-24 mr-24">
					<h1 className="text-transform: uppercase text-white text-5xl font-semibold mt-28 ml-20">Qui sommes-nous ?</h1>
					<p className="text-white mt-8 leading-8 text-xl"> Nous sommes une société de covoiturage qui privilégie le coopératif et non l'aspect financier. 50 points offerts dès votre inscription ! Pour en profiter dès à présent cliquez sur le bouton ci-dessous. </p>

					<Link to={URL_REGISTER}>
						<button
							type="button"
							className=" md:text-white font-semibold md:bg-cyan-800 md:hover:bg-cyan-700 md:focus:ring-4 md:focus:outline- 
							 none md:font-medium md:rounded-lg text-md px-5 py-2.5 text-center mt-8 ml-72">
							S'inscrire
						</button>{" "}
					</Link>

				</div>
				<div className="basis-1/2 ">
					<img
						className="flex  "
						// className="rounded-sm drop-shadow-lg"
						src="imgs/map.jpg"
						alt="voiture"
					></img>
				</div>
			</div>
			<div className="">
				<div className="flex flex-col mt-36">
					<div className="bg-white bg-opacity-40 p-8 mx-auto mr-72 ml-72 rounded-lg">
						<div className="flex flex-row">
							<div className="w-40">
								<img src="imgs/ecologie.jpg" alt="logo écologie" />
							</div>
							<p className="text-lg text-center ml-12 mt-6">En utilisant notre application de covoiturage, vous contribuez au bien-être de notre planète en réduisant les émissions de carbone.</p>
						</div>
					</div>
					<div className="bg-white bg-opacity-40 p-8 mx-auto mr-72 ml-72 mt-16 rounded-lg">
						<div className="flex flex-row">
							<div className="w-60 ">
								<img src="imgs/tirelire.jpg" alt="logo tirelire" />
							</div>
							<p className="text-lg text-center ml-12 mt-4">L'application vous permet de faire des économies d'argent puisqu'ici il n'est question que de points. Ne partez plus avec les places passagers vides. Faites-en profiter d'autres utilisateurs.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="">
				<div className="flex flex-row bg-black mt-36 px-4 py-12 ">
					<div className="flex w-56 ml-20">
						<img
							src="imgs/CarbuddyWhitepink.png"
							alt="logo en blanc">
						</img>
					</div>
					<div className="flex flex-row text-white mx-auto">
						<div className="mr-40 text-lg"><a href="https://mytek-store.fr/cgv">CGV</a></div>
						<div className="mr-40 text-lg"><a href="https://mytek-store.fr/mentions-legales">CGU</a></div>
						<div className="mr-24 text-lg">
							<Link to={URL_FAQ}>
								FAQ
							</Link>
						</div>
						<div className="ml-20 text-lg">
							<Link to={URL_CONTACT}>
								Nous contacter
							</Link>
						</div>
					</div>
					<div className="flex flex-row w-12 mr-32">
						<img
							src="imgs/C_logoWhitecopie.png"
							alt="logo C en blanc">
						</img>
					</div>
				</div>
				<div className="flex flex-row bg-black px-4 pb-12">
					<div className="flex flex-row mx-auto">
						<div className="w-14 pr-6">
							<a href="https://facebook.com"><img src="imgs/facebook.png"></img></a>
						</div>
						<div className="w-14 pr-6">
							<a href="https://twitter.com"><img src="imgs/twitter.png"></img></a>
						</div>
						<div className="w-14 pr-6">
							<a href="https://youtube.com"><img src="imgs/youtube.png"></img></a>
						</div>
						<div className="w-14 pr-6">
							<a href="https://linkedin.com"><img src="imgs/linkedin.png"></img></a>
						</div>
						<div className="w-14 pr-6">
							<a href="https://instagram.com"><img src="imgs/instagram.png"></img></a>
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