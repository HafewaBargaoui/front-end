import {Field, Form, Formik, ErrorMessage} from "formik";
import * as Yup from 'yup'
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import { forgetpassword } from "../../api/backend/accountAPI";

import { URL_RESET_PASSWORD_MAIL_SENT } from "../../constants/urls/urlFrontEnd";

const initialValues = {
	email: '',
  }
  
  const validationSchema = Yup.object({
	email: Yup.string()
	  .email('Hum, cette adresse e-mail n’a pas l’air valide. Vérifiez si elle contient bien le "@" et le ".".')
	  .required('Votre email est obligatoire.'),
  })

const ForgetLogin = () => {
	const [errorLog, setErrorLog] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = async(values) => {
		const mail = {
			email : values.email
		}
		console.log(mail);
		await forgetpassword(mail)
		navigate(URL_RESET_PASSWORD_MAIL_SENT);
	};

	return (
		<div className="w-full max-w-md space-y-3 rounded-lg  mt-8 pb-8  px-4 shadow sm:px-6 lg:px-8  bg-cover  bg-slate-500">
			<div className="flex justify-center pb-16">
				<h1 className="mt-6 text-center text-3xl font-semibold text-black">
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
							htmlFor="email"	
							>
							Email:
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
							<button 
								type="submit"
								className="btn bg-cyan-700 hover:bg-cyan-800 relative w-1/2 text-white font-bold"
							>
								Envoyer
							</button>
					</div>
				</Form>
			</Formik>
		</div>
	);
};

export default ForgetLogin;
