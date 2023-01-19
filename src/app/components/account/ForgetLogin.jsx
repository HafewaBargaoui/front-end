import {Field, Form, Formik} from "formik";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import {URL_LOGIN} from "../../constants/urls/urlFrontEnd";

const ForgetLogin = () => {
	const [errorLog, setErrorLog] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = () => {
		//Send requet to back 
		navigate(URL_LOGIN);
	};

	return (
		<div className="w-full max-w-md space-y-3 rounded-lg  mt-8 pb-8  px-4 shadow sm:px-6 lg:px-8  bg-cover bg-[url('/src/app/assets/images/GradientLogin.png')]">
			<div className="flex justify-center pb-16">
				<h1 className="mt-6 text-center text-3xl font-semibold text-black">
				Saisissez votre adresse e-mail. 
				Nous vous enverrons un lien pour réinitialiser votre mot de passe.
				</h1>

				<hr />
			</div>

			<Formik
				initialValues={{
					email: ""
				}}
				onSubmit={handleSubmit}>

				<Form className="mt-8 space-y-6">
					<div className="flex flex-col space-y-6">
						<label
							className="pl-1 font-semibold"
							htmlFor="email"	>
							Email:{" "}
						</label>
						<Field
							type="text"
							name="email"
							placeholder="email"
							autoComplete="email"
							className="inputInscription"
						/>
					</div>
			

					<div className="text-center">		
						<div className="flex justify-between pt-8">
							<button className="btn bg-rose hover:bg-roseh  ">
								Envoyer
							</button>
						</div>
					</div>
				</Form>
			</Formik>
		</div>
	);
};

export default ForgetLogin;
