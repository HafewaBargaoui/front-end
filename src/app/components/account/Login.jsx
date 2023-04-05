import { EyeOffIcon, EyeIcon } from "@heroicons/react/solid";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { URL_HOME, URL_FORGET_LOGIN } from "../../constants/urls/urlFrontEnd";
import { signIn } from "../../redux-store/authenticationSlice";
import { getUser } from "../../redux-store/getUserSlice";
import { getProfile, registerGoogle } from "./../../api/backend/profileAPI";
import { authenticate } from "./../../api/backend/accountAPI";

/**
 * Component Login
 *
 * @author Peter Mollet
 */
const Login = () => {
	const [errorLog, setErrorLog] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();

    const google = async (req, res) => {
        await registerGoogle().then((data) => {
			window.location.href = data.data;
		});
    };
	
	const data = async() => 
	{
		const response = await getProfile()
		dispatch(getUser({ type: "user", payload: response.data }));
	}

	const handleLogin = (values) => {
		authenticate(values)
			.then((res) => {
				if (res.status === 200) {
					data();
					dispatch(signIn(res.data));
					navigate(URL_HOME);
				} else {
					dispatch(signIn(res.data));
					navigate(URL_HOME);
				}
			})
			.catch((error) => setErrorLog(error));
	};
	const handleForgetLogin = () => {
		navigate(URL_FORGET_LOGIN);
	};

	// handle toggle password
	const [open, setOpen] = useState(false)
	const toggle = () => {
		setOpen(!open)
	};
	return (
		<div className="w-full max-w-xl space-y-3 rounded-lg pb-8 px-4 shadow lg:px-8 bg-cover bg-slate-500">
			<div className="place-content-center">
				<h1 className="mt-3 mb-3 text-center text-3xl font-semibold text-black">
					CONNEXION
				</h1>
			</div>
			<hr />

			<div className="text-center">
						<button
							onClick={google}
							className="btn bg-cyan-700 group hover:bg-cyan-800 relative w-1/2 text-white mt-4"
						>
							{/* <span className="absolute inset-y-0 left-0 flex items-center pl-3">
								<LockClosedIcon
									className="h-5 w-5 text-primary-dark group-hover:text-primary-light"
									aria-hidden="true"
								/>
							</span> */}
							Connexion Google
						</button>
					</div>

			<Formik
				initialValues={{
					email: "",
					password: "",
				}}
				onSubmit={handleLogin}
			>
				<Form className=" ml-16 mr-16 space-y-6">
					<div className="flex flex-col space-y-3">
						<label
							className="mt-6 text-gray-800 text-md font-semibold"
							htmlFor="email"
						>
							Email :{" "}
						</label>
						<Field
							type="text"
							name="email"
							placeholder="michel.dupont@gmail.com"
							autoComplete="email"
							className="inputInscription"
						/>
					</div>
					<div className="flex flex-col space-y-3 relative">
						<label
							className=" text-gray-800 text-md font-semibold"

							htmlFor="password"
						>
							Mot de Passe :{" "}
						</label>

						<Field
							type={(open === false) ? 'password' : 'text'}
							name="password"
							placeholder="***********"
							autoComplete="current-password"
							className="inputInscription"
						/>
						<div className="text-2xl absolute top-9 right-3 z-30 w-4 cursor-pointer text-slate-600">
							{

								(open === false) ? <EyeOffIcon onClick={toggle} /> :
									<EyeIcon onClick={toggle} />
							}
						</div>
					</div>

					<div className="text-center">
						<button
							type="submit"
							className="btn bg-cyan-700 group hover:bg-cyan-800 relative w-1/2 text-white mt-4"
						>
							{/* <span className="absolute inset-y-0 left-0 flex items-center pl-3">
								<LockClosedIcon
									className="h-5 w-5 text-primary-dark group-hover:text-primary-light"
									aria-hidden="true"
								/>
							</span> */}
							Connexion
						</button>
						<div className="flex justify-center  mt-8">
							<button className="btn bg-cyan-600 hover:bg-cyan-500  "
								onClick={handleForgetLogin}                        >
								Mot de passe oublié
							</button>
						</div>
					</div>
					{errorLog && (
						<div className="flex justify-center">
							<small className="text-sm italic text-pink-800 font-semibold">
								Login/Password incorrect(s)
							</small>
						</div>
					)}

					<p>
						{/* vous n'avez pas encore de compte ? <Link to ={}>cliquez ici</Link> */}
					</p>
				</Form>
			</Formik>
		</div>
	);
};

export default Login;
