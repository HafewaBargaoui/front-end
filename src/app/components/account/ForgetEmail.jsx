import {Field, Form, Formik, ErrorMessage} from "formik";
import * as Yup from 'yup'
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import { forgetpassword } from "../../api/backend/account";
import {URL_RESET_PASSWORD} from "../../constants/urls/urlFrontEnd";
const phoneRegex = RegExp(
	/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  );
  
const initialValues = {
	phone: '',
  }
  
  const validationSchema = Yup.object({
	phone: Yup.string()
	.min(10, "Veuillez entrer un numéro de téléphone valide")
	.max(10, "Veuillez entrer un numéro de téléphone valide")
	.matches(phoneRegex, 'Veuillez entrer un numéro de téléphone valide')
	.required('Champ obligatoire'),
  })


const ForgetEmail = () => {
	const [errorLog, setErrorLog] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = async(values) => {
		//Send requet to back 
		console.log("test")
		
	};

	return (
		<div className="w-full max-w-md space-y-3 rounded-lg  mt-8 pb-8  px-4 shadow sm:px-6 lg:px-8  bg-cover  bg-slate-500">
			<div className="flex justify-center pb-16">
				<h1 className="mt-6 text-center text-3xl font-semibold text-black">
				Email oublié ?
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
							htmlFor="phone"	
							>
							
							Téléphone:{" "}
						</label>
						<Field
							type="tel"
							name="phone"
							placeholder="Téléphone"
							className="inputInscription"
						/>
						 <ErrorMessage name='phone'>
                {error => <div className='text-xs pt-2 text-red-600'>{error}</div>} 
              </ErrorMessage> 
					</div>
			

					<div className="text-center">		
						{/* <div className="flex justify-between pt-8"> */}
							<button 
								type="submit"
								className="btn bg-cyan-700 hover:bg-cyan-800 relative w-1/2 text-white font-bold"
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

export default ForgetEmail;
