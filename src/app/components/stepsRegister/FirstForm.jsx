import React from "react";

const FirstForm = ({
	formValues,
	onChange,
	formValidation,
	onFocus,
	onBlur,
	checkingFocus,
}) => {
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
								id="lastname"
								name="lastname"
								type="text"
								placeholder="Nom"
								onChange={onChange}
								value={formValues.lastname}
								onFocus={onFocus}
								onBlur={onBlur}
							></input>

							{formValidation.lastname === false && checkingFocus.lastname && (
								<p className="text-xs pt-2">
									3 à 30 lettre. Doit commencer par une majuscule
								</p>
							)}
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
								id="name"
								name="name"
								onChange={onChange}
								value={formValues.name}
								type="text"
								placeholder="Prénom"
								onFocus={onFocus}
								onBlur={onBlur}
							></input>
							{formValidation.name === false && checkingFocus.name && (
								<p className="text-xs pt-2">
									3 à 30 lettre. Doit commencer par une majuscule
								</p>
							)}
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
								onFocus={onFocus}
								onBlur={onBlur}
							></input>
							{formValidation.birthday === false && checkingFocus.birhtday && (
								<p className="text-xs pt-2">
									Veillez entrer une date au format jj/mm/aaaa
								</p>
							)}
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
								onFocus={onFocus}
								onBlur={onBlur}
							></input>
							{formValidation.email === false && checkingFocus.email && (
								<p className="text-xs pt-2">
									Veillez entrer une adresse E-mail Valide
								</p>
							)}
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
								onFocus={onFocus}
								onBlur={onBlur}
							></input>

							{formValidation.password === false && checkingFocus.password && (
								<p className="text-xs pt-2">
									8 à 24 caractère. Doit inclure au moins une lettre majuscule,
									un chiffre et un caractère spécial
								</p>
							)}
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
								onFocus={onFocus}
								onBlur={onBlur}
							></input>
							{formValidation.confirmPassword === false &&
								checkingFocus.confirmPassword && (
									<p className="text-xs pt-2">
										Doit être identique au mot de passe !
									</p>
								)}
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
