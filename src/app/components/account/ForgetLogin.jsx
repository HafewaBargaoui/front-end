import {Field, Form, Formik, ErrorMessage} from "formik";
import * as Yup from 'yup'
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import {URL_RESET_PASSWORD } from "../../constants/urls/urlFrontEnd";
import { forgetpassword } from "../../api/backend/account";

const initialValues = {
	email: '',
  }
  
  const validationSchema = Yup.object({
	email: Yup.string()
	  .email('Hum, cette adresse e-mail n’a pas l’air valide. Vérifiez si elle contient bien le "@" et le ".".')
	  .required('Required'),
  })

const ForgetLogin = () => {
	const [errorLog, setErrorLog] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	// navigate(URL_RESET_PASSWORD);
	const handleSubmit = async(values) => 
	{
		//Send requet to back 
		const mail = {
			email : values.email
		}
		console.log(mail);
		await forgetpassword(mail)
	};

	return (
		<div className="w-full max-w-md space-y-3 rounded-lg  mt-8 pb-8  px-4 shadow sm:px-6 lg:px-8  bg-cover bg-[url('/src/app/assets/images/GradientLogin.png')]">
			<div className="flex justify-center pb-16">
				<h1 className="mt-6 text-center text-3xl font-semibold text-black">
				{/* Saisissez votre adresse e-mail. 
				Nous vous enverrons un lien pour réinitialiser votre mot de passe. */}
				Mot de passe oublié ?
				</h1>

				<hr />
			</div>

			<Formik
				 initialValues={initialValues}
				 validationSchema={validationSchema}
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
						 <ErrorMessage name='email'>
                {error => <div className='text-xs pt-2 text-red-600'>{error}</div>} 
              </ErrorMessage> 
					</div>
			

					<div className="text-center">		
						{/* <div className="flex justify-between pt-8"> */}
							<button 
								type="submit"
								className="btn bg-vert group hover:bg-verth relative w-1/2 text-white"
							>
								Envoyer
							</button>
						{/* </div> */}
					</div>
				</Form>
			</Formik>
			{/* <p>Retour à la page de connexion</p> */}
		</div>
	);
};

export default ForgetLogin;
