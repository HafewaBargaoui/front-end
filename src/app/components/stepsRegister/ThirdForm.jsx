import React from "react";

const ThirdForm = ({
	onChange,
	formValues,
	formValidation,
	onFocus,
	onBlur,
	checkingFocus,
}) => {
	return (
		<div className="w-full max-w-md space-y-8 rounded-xl p-4 py-12 px-4 shadow-lg sm:px-6 lg:px-8 bg-cover bg-center bg-[url('../../assets/images/GradientInscr.png')]">
			<div className="grid gap-4 place-content-center items-center">
				<h1 className="text-gray-700 pb-8 font-bold text-2xl">Étape 3/3</h1>
			</div>

			<form className="mt-8 space-y-6">
				<div className="mb-4">
					<label
						className="block text-gray-700 text-sm font-semibold mb-2"
						htmlFor="username"
					>
						Username
					</label>
					<input
						className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="username"
						name="username"
						onChange={onChange}
						type="text"
						placeholder="Username"
						onFocus={onFocus}
						onBlur={onBlur}
					></input>
					<p
						className={
							formValidation.username === false && checkingFocus.username
								? "text-xs pt-2 text-red-600"
								: " invisible text-xs pt-2 text-red-600"
						}
					>
						Le pseudo doit commencer par par une lettre. Lettres, chiffres,
						trait d'union accéptés
					</p>
				</div>

				<div className="flex justify-items-center  content-center items-center">
					<label
						className="block text-gray-700 px-2  text-sm font-bold mb-2"
						htmlFor="Terms"
					>
						Terms
					</label>
					<input
						name="terms"
						value={formValues.terms}
						onChange={onChange}
						className="shadow cursor-pointer border rounded mr-2"
						type="checkbox"
						onFocus={onFocus}
						onBlur={onBlur}
					></input>
					<p
						className={
							formValidation.terms === false
								? "text-xs pt-2 "
								: "invisible text-xs pt-2 "
						}
					>
						Veuillez acceptez nos condition d'utilisation
					</p>
				</div>
				<div className="flex items-center justify-between"></div>
			</form>
			<p className="text-center text-gray-500 text-xs">
				&copy;2022 Form Stepper. All rights reserved.
			</p>
		</div>
	);
};

export default ThirdForm;
