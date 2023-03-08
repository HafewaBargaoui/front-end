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
		<div className="max-w-2xl rounded-xl px-4 shadow-lg lg:px-8 bg-cover bg-center bg-slate-500 ">
			<div className="grid gap-4 place-content-center items-center">
				<h1 className="mt-3 mb-3 text-center text-3xl font-semibold text-black">
					INSCRIPTION
				</h1>
			</div>
			<hr />


			<form className="mt-8 px-16 space-y-6">
				<div className="mb-4">
					<label
						className="block text-gray-800 text-md font-semibold mb-2"
						htmlFor="username"
					>
						Nom d'utilisateur :
					</label>
					<input
						className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="username"
						name="username"
						onChange={onChange}
						type="text"
						placeholder="michel52"
						onFocus={onFocus}
						onBlur={onBlur}
					></input>
					<p
						className={
							formValidation.username === false && checkingFocus.username
								? "text-xs pt-2 text-pink-800 font-semibold"
								: " invisible text-xs pt-2 text-pink-800"
						}
					>
						Le pseudo doit commencer par une lettre. Chiffres, lettres et
						traits d'unions acceptés.
					</p>
				</div>

				<div className="flex justify-items-center  content-center items-center">
					<label
						className="block text-gray-800 px-2  text-sm font-bold mb-2"
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
						Veuillez accepter nos conditions d'utilisation
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
