import React , {useState} from "react";
import { EyeOffIcon, EyeIcon } from "@heroicons/react/solid";
const FirstForm = ({
	formValues,
	onChange,
	formValidation,
	onFocus,
	onBlur,
	checkingFocus,
}) => {
	// handle toggle password
  
	const [visible, setVisible] = useState(false)
	const toggle = () =>{
		setVisible(!visible)
};

	const [confirmVisible, confirmSetVisible] = useState(false)
	const toggleconfirm = () =>{
	confirmSetVisible(!confirmVisible)
};
	return (
		<div className="max-w-2xl rounded-xl px-4 shadow-lg lg:px-8 bg-cover bg-center bg-slate-500">
			<div className="grid gap-4 place-content-center items-center">
				<h1 className="mt-3 mb-3 text-center text-3xl font-semibold text-black">
					INSCRIPTION
				</h1>
			</div>
			<hr />

			<form className="mt-8 ml-6 space-y-6 ">
				<div className="flex justify-around">
					<div>
						<label htmlFor="female">Femme </label>
						<input
							type="radio"
							name="sex"
							id="sexe"
							value="femme"
							className="text-cyan-600"
							onChange={onChange}
						/>
					</div>
					<div>
						<label htmlFor="male">Homme </label>
						<input
							type="radio"
							name="sex"
							id="sexe"
							value="homme"
							className="text-cyan-600"
							onChange={onChange}
						/>
					</div>
				</div>
				<div className="grid grid-cols-2 gap-3 rounded-md shadow-sm">
					<div className="grid grid-row space-y-3 ">
						<div className="h-24">
							<label
								className="block text-gray-800 text-md font-semibold mb-2"
								htmlFor="name"
							>
								Nom :
							</label>

							<input
								className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-64 "
								id="lastname"
								name="lastname"
								type="text"
								placeholder="Dupont"
								onChange={onChange}
								value={formValues.lastname}
								onFocus={onFocus}
								onBlur={onBlur}
							></input>

							{/* {formValidation.lastname === false && checkingFocus.lastname && (
								<p className="text-xs pt-2 text-red-600">
									3 à 30 lettre. Doit commencer par une majuscule
								</p>
							)} */}
							<p
								className={
									formValidation.lastname === false && checkingFocus.lastname
										? "text-xs pt-2 text-pink-800 font-semibold"
										: " invisible text-xs pt-2 text-red-600"
								}
							>
								3 à 30 lettres.
							</p>
						</div>

						<div className="h-24">
							<label
								className="block text-gray-800 text-md font-semibold mb-2"
								htmlFor="lastname"
							>
								Prénom :
							</label>

							<input
								className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-64"
								id="name"
								name="name"
								onChange={onChange}
								value={formValues.name}
								type="text"
								placeholder="Michel"
								onFocus={onFocus}
								onBlur={onBlur}
							></input>
							{/* {formValidation.name === false && checkingFocus.name && (
								<p className="text-xs pt-2 text-red-600">
									3 à 30 lettre. Doit commencer par une majuscule
								</p>
							)} */}
							<p
								className={
									formValidation.name === false && checkingFocus.name
										? "text-xs pt-2 text-pink-800 font-semibold"
										: " invisible text-xs pt-2 text-red-600"
								}
							>
								3 à 30 lettres.
							</p>
						</div>

						<div className="h-24">
							<label
								className=" block text-gray-800 text-md font-semibold mb-2"
								htmlFor="birthday"
							>
								Date de naissance :
							</label>

							<input
								className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-64"
								id="birthday"
								name="birthday"
								onChange={onChange}
								value={formValues.birthday}
								type="date"
								placeholder="Date de naissance"
								onFocus={onFocus}
								onBlur={onBlur}
							></input>
							{/* {formValidation.birthday === false && checkingFocus.birhtday && (
								<p className="text-xs pt-2 text-red-600">
									Veillez entrer une date au format jj/mm/aaaa
								</p>
							)} */}
							<p
								className={
									formValidation.birthday === false && checkingFocus.birthday
										? "text-xs pt-2 text-pink-800 font-semibold"
										: " invisible text-xs pt-2 text-red-600"
								}
							>
								Veuillez entrer une date valide.
							</p>
						</div>
					</div>

					<div className="grid grid-row space-y-3">
						<div className="h-24">
							<label
								className="block text-gray-800 text-md font-semibold mb-2"
								htmlFor="email"
							>
								Adresse mail :
							</label>

							<input
								className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-64"
								id="email"
								name="email"
								onChange={onChange}
								value={formValues.email}
								type="mail"
								placeholder="michel.dupont@gmail.com "
								onFocus={onFocus}
								onBlur={onBlur}
							></input>
							{/* {formValidation.email === false && checkingFocus.email && (
								<p className="text-xs pt-2 text-red-600">
									Veillez entrer une adresse E-mail Valide
								</p>
							)} */}
							<p
								className={
									formValidation.email === false && checkingFocus.email
										? "text-xs pt-2 text-pink-800 font-semibold"
										: " invisible text-xs pt-2 text-red-600"
								}
							>
								Veuillez entrer une adresse e-mail valide.
							</p>
						</div>

						<div className="h-24 relative">
							<label
								className="block text-gray-800 text-md font-semibold mb-2"
								htmlFor="password"
							>
								Mot de passe :
							</label>
							<input
								className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-64"
								id="password"
								name="password"
								value={formValues.password}
								onChange={onChange}
								type={(visible === false)? 'password' :'text'}
								placeholder="******************"
								onFocus={onFocus}
								onBlur={onBlur}
							></input>
							<div className="text-2xl absolute top-10 right-10 z-30 w-4 cursor-pointer text-slate-600">
                  {
                    
                      (visible === false)? <EyeOffIcon onClick={toggle} />:
                      <EyeIcon onClick={toggle} />
                  }   
                  </div>

							{/* {formValidation.password === false && checkingFocus.password && (
								<p className="text-xs pt-2 text-red-600">
									8 à 24 caractère. Doit inclure au moins une lettre majuscule,
									un chiffre et un caractère spécial
								</p>
							)} */}
							<p
								className={
									formValidation.password === false && checkingFocus.password
										? "text-xs pt-2 text-pink-800 font-semibold	"
										: " invisible text-xs pt-2 text-red-600"
								}
							>
								8 à 24 caractères. Doit inclure au moins une lettre majuscule, un
								chiffre et un caractère spécial.
							</p>
							
						</div>

						<div className="h-24 relative">
							<label
								className="block text-gray-800 text-md font-semibold mb-2"
								htmlFor="confirmPassword"
							>
								Confirmation mot de passe :
							</label>
							<input
								className="inputInscription shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-64"
								id="confirmPassword"
								name="confirmPassword"
								type={(confirmVisible === false)? 'password' :'text'}
								value={formValues.confirmPassword}
								onChange={onChange}
								placeholder="******************"
								onFocus={onFocus}
								onBlur={onBlur}
							></input>
							   <div className="text-2xl absolute top-10 right-10 z-30 w-4 cursor-pointer text-slate-600">
                  {
                    
                      (confirmVisible === false)? <EyeOffIcon onClick={toggleconfirm} />:
                      <EyeIcon onClick={toggleconfirm} />
                  }   
                  </div>
							{/* {formValidation.confirmPassword === false &&
								checkingFocus.confirmPassword && (
									<p className="text-xs pt-2 text-red-600">
										Doit être identique au mot de passe !
									</p>
								)} */}
							<p
								className={
									formValidation.confirmPassword === false &&
									checkingFocus.confirmPassword
										? "text-xs pt-2 text-pink-800 font-semibold"
										: " invisible text-xs pt-2 text-red-600"
								}
							>
								Doit être identique au mot de passe.
							</p>
						</div>
					</div>
				</div>

				<div
					data-role="main"
					className="ui-content"
				>
					<div className="grid grid-cols-2 place-items-center gap-3 text-black font-bold">
						<div></div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default FirstForm;
