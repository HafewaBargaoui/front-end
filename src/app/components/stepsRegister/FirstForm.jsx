import React from "react";

const FirstForm = ({formValues, onChange}) => {
	return (
		<div className="w-full max-w-md space-y-8 rounded-xl p-4 py-12 px-4 shadow-lg sm:px-6 lg:px-8 bg-cover bg-center bg-[url('../../assets/images/GradientInscr.png')]">
			<div className="grid gap-4 place-content-center items-center">
				<h1 className="mt-2 text-center text-3xl font-semibold text-black">
					INSCRIPTION
				</h1>
			</div>
			<hr />

			<form className="mt-8 space-y-6">
				<div className="grid grid-cols-2 gap-3 rounded-md shadow-sm">
					<div className="grid grid-row space-y-3">
						<div className="mb-4">
							<label
								className="block text-gray-700 text-sm font-semibold mb-2"
								htmlFor="name"
							>
								Nom
							</label>

							<input
								className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 "
								id="name"
								name="name"
								type="text"
								placeholder="Nom"
								onChange={onChange}
								value={formValues.name}
							></input>
						</div>

						<div className="mb-6">
							<label
								className="block text-gray-700 text-sm font-semibold mb-2"
								htmlFor="lastname"
							>
								Prénom
							</label>

							<input
								className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="lastname"
								name="lastname"
								onChange={onChange}
								value={formValues.lastname}
								type="text"
								placeholder="Prénom"
							></input>
						</div>

						<div className="mb-6">
							<label
								className=" block text-gray-700 text-sm font-semibold mb-2"
								htmlFor="birthday"
							>
								Date de naissance
							</label>

							<input
								className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="birthday"
								name="birthday"
								onChange={onChange}
								value={formValues.birthday}
								type="date"
								placeholder="Date de naissance"
							></input>
						</div>
					</div>

					<div className="grid grid-row space-y-3">
						<div className="mb-6">
							<label
								className="block text-gray-700 text-sm font-semibold mb-2"
								htmlFor="email"
							>
								Adresse mail
							</label>

							<input
								className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="email"
								name="email"
								onChange={onChange}
								value={formValues.email}
								type="mail"
								placeholder="Adresse mail"
							></input>
						</div>

						<div className="mb-6">
							<label
								className="block text-gray-700 text-sm font-semibold mb-2"
								htmlFor="password"
							>
								Mot de passe
							</label>
							<input
								className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="password"
								name="password"
								value={formValues.password}
								onChange={onChange}
								type="password"
								placeholder="******************"
							></input>
						</div>

						<div className="mb-6">
							<label
								className="block text-gray-700 text-sm font-semibold mb-2"
								htmlFor="confirmPassword"
							>
								Confirmation mot de passe
							</label>
							<input
								className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="confirmPassword"
								name="confirmPassword"
								type="password"
								value={formValues.confirmPassword}
								onChange={onChange}
								placeholder="******************"
							></input>
						</div>
					</div>
				</div>

				<div
					data-role="main"
					className="ui-content"
				>
					<div className="grid grid-cols-2 place-items-center gap-3 text-black font-bold">
						<div>
							<label htmlFor="male">Homme </label>
							<input
								type="radio"
								name="sex"
								id="sexe"
								value="homme"
								onChange={onChange}
							/>
						</div>

						<div>
							<label htmlFor="female">Femme </label>
							<input
								type="radio"
								name="sex"
								id="sexe"
								value="femme"
								onChange={onChange}
							/>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default FirstForm;
