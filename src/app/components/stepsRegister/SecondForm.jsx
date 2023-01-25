import React from "react";

const SecondForm = ({
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
			<form className="mt-8 space-y-6">
				<div className="grid grid-cols-2 gap-3 rounded-md shadow-sm">
					<div className="grid grid-row space-y-3">
						<div className="mb-4">
							<label
								className="block text-gray-700 text-sm font-semibold mb-2"
								htmlFor="pathType"
							>
								Type de voie
							</label>
							<input
								className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="address"
								name="pathType"
								type="text"
								placeholder="adresse"
								onChange={onChange}
								value={formValues.pathType}
							></input>
						</div>

						<div className="mb-4">
							<label
								className="block text-gray-700 text-sm font-semibold mb-2"
								htmlFor="additionalAddress"
							>
								Complément d'adresse
							</label>
							<input
								className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="addressAdd"
								name="additionalAddress"
								type="text"
								placeholder="Adresse complémentaire"
								onChange={onChange}
								value={formValues.additionalAddress}
							></input>
						</div>

						<div className="mb-4">
							<label
								className="block text-gray-700 text-sm font-semibold mb-2"
								htmlFor="streetName"
							>
								Nom de la rue
							</label>
							<input
								className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="street"
								name="streetName"
								type="text"
								placeholder="Nom de la rue"
								onChange={onChange}
								value={formValues.streetName}
							></input>
						</div>
					</div>
					<div className="grid grid-row space-y-3">
						<div className="mb-4">
							<label
								className="block text-gray-700 text-sm font-semibold mb-2"
								htmlFor="streetNumber"
							>
								Numéro de la rue
							</label>
							<input
								className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="street"
								name="streetNumber"
								type="number"
								placeholder="numéro de la rue"
								onChange={onChange}
								value={formValues.streetNumber}
							></input>
						</div>

						<div className="mb-6">
							<label
								className="block text-gray-700 text-sm font-semibold mb-2"
								htmlFor="City"
							>
								Ville
							</label>
							<input
								className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="city"
								name="city"
								type="text"
								placeholder="Ville"
								onChange={onChange}
								value={formValues.city}
							></input>
						</div>

						<div className="mb-6">
							<label
								className="block text-gray-700 text-sm font-semibold mb-2"
								htmlFor="Zip"
							>
								Code postal
							</label>
							<input
								className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="zip"
								type="text"
								name="zip"
								onChange={onChange}
								value={formValues.zip}
								placeholder="Code postal"
								onFocus={onFocus}
								onBlur={onBlur}
							></input>
						</div>
					</div>
				</div>

				<div className="mb-6">
					<label
						className="block text-gray-700 text-sm font-semibold mb-2"
						htmlFor="Phone"
					>
						Téléphone
					</label>
					<input
						className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="phone"
						type="tel"
						name="phone"
						onChange={onChange}
						value={formValues.phone}
						onFocus={onFocus}
						onBlur={onBlur}
						placeholder="Téléphone"
					></input>
					<p
						className={
							formValidation.phone === false && checkingFocus.phone
								? "text-xs pt-2 text-red-600"
								: " invisible text-xs pt-2 text-red-600"
						}
					>
						Veuillez entrer un numéro de téléphone valide
					</p>
				</div>
			</form>
		</div>
	);
};

export default SecondForm;
