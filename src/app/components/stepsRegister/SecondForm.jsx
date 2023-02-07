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
		<div className="max-w-2xl rounded-xl px-4 shadow-lg lg:px-8 bg-cover bg-center bg-slate-500 px-48 pb-8">
			<div className="grid gap-4 place-content-center items-center">
				<h1 className="mt-3 mb-3 text-center text-3xl font-semibold text-black">
					INSCRIPTION
				</h1>
			</div>
			<hr />

			<form className="mt-8 ml-6 space-y-6">
				<div className="grid grid-cols-2 gap-3 rounded-md shadow-sm">
					<div className="grid grid-row space-y-3">
						<div className="mb-4 w-72">
							<label
								className="block text-gray-800 text-md font-semibold mb-2"
								htmlFor="pathType"
							>
								Type de voie :
							</label>
							<input
								className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-64"
								id="address"
								name="pathType"
								type="text"
								placeholder="avenue, hameau, rue..."
								onChange={onChange}
								value={formValues.pathType}
							></input>
						</div>

						<div className="mb-2">
							<label
								className="block text-gray-800 text-md font-semibold mb-2 mt-2"
								htmlFor="additionalAddress"
							>
								Complément d'adresse :
							</label>
							<input
								className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-64"
								id="addressAdd"
								name="additionalAddress"
								type="text"
								placeholder="adresse complémentaire"
								onChange={onChange}
								value={formValues.additionalAddress}
							></input>
						</div>

						<div className="mb-4">
							<label
								className="block text-gray-800 text-md font-semibold mb-2 mt-4"
								htmlFor="streetName"
							>
								Nom de la rue :
							</label>
							<input
								className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-64"
								id="street"
								name="streetName"
								type="text"
								placeholder="Faidherbe"
								onChange={onChange}
								value={formValues.streetName}
							></input>
						</div>
					</div>
					<div className="grid grid-row space-y-3">
						<div className="mb-4">
							<label
								className="block text-gray-800 text-md font-semibold mb-2"
								htmlFor="streetNumber"
							>
								Numéro de la rue :
							</label>
							<input
								className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-64"
								id="street"
								name="streetNumber"
								type="number"
								placeholder="123"
								onChange={onChange}
								value={formValues.streetNumber}
							></input>
						</div>

						<div className="mb-6">
							<label
								className="block text-gray-800 text-md font-semibold mb-2 mt-2"
								htmlFor="City"
							>
								Ville :
							</label>
							<input
								className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-64"
								id="city"
								name="city"
								type="text"
								placeholder="Lille"
								onChange={onChange}
								value={formValues.city}
							></input>
						</div>

						<div className="mb-6">
							<label
								className="block text-gray-800 text-md font-semibold mb-2 mt-4"
								htmlFor="Zip"
							>
								Code postal :
							</label>
							<input
								className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-64"
								id="zip"
								type="text"
								name="zip"
								onChange={onChange}
								value={formValues.zip}
								placeholder="59000"
								onFocus={onFocus}
								onBlur={onBlur}
							></input>
						</div>
					</div>
				</div>

				<div className="mb-6">
					<label
						className="block text-gray-800 text-md font-semibold mb-2"
						htmlFor="Phone"
					>
						Téléphone :
					</label>
					<input
						className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-64"
						id="phone"
						type="tel"
						name="phone"
						onChange={onChange}
						value={formValues.phone}
						onFocus={onFocus}
						onBlur={onBlur}
						placeholder="06.12.34.56.78"
					></input>
					<p
						className={
							formValidation.phone === false && checkingFocus.phone
								? "text-xs pt-2 text-pink-800 font-semibold"
								: " invisible text-xs pt-2 text-pink-800"
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
