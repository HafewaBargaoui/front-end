import {LockClosedIcon} from "@heroicons/react/solid";
import {Field, Form, Formik} from "formik";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";

import {URL_HOME} from "../../constants/urls/urlFrontEnd";
import {signIn} from "../../redux-store/authenticationSlice";
import {authenticate} from "./../../api/backend/account";

/**
 * Component Login
 *
 * @author Peter Mollet
 */
const Login = () => {
	const [errorLog, setErrorLog] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogin = (values) => {
		authenticate(values)
			.then((res) => {
				console.log(res);
				if (res.status === 200) {
					alert("bonjour : " + res.data.name);
					// dispatch(signIn(res.data.id_token));
					// navigate(URL_HOME);
				}
			})
			.catch(() => setErrorLog(true));
	};

	return (
		<div className="w-full max-w-md space-y-3 rounded-lg  mt-8 pb-8  px-4 shadow sm:px-6 lg:px-8  bg-cover bg-[url('/src/app/assets/images/GradientLogin.png')]">
			<div className="flex justify-center pb-16">
				<h1 className="mt-6 text-center text-3xl font-semibold text-black">
					CONNEXION
				</h1>

				<hr />
			</div>

			<Formik
				initialValues={{
					email: "",
					password: "",
				}}
				onSubmit={handleLogin}
			>
				<Form className="mt-8 space-y-6">
					<div className="flex flex-col space-y-6">
						<label
							className="pl-1 font-semibold"
							htmlFor="email"
						>
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
					<div className="flex flex-col space-y-6 ">
						<label
							className="pl-1 font-semibold"
							htmlFor="password"
						>
							Mot de Passe:{" "}
						</label>

						<Field
							type="password"
							name="password"
							placeholder="Password"
							autoComplete="current-password"
							className="inputInscription"
						/>
					</div>

					{/* <div className="mt-3 flex items-center justify-between">
						<div className="text-sm">
							<Link to="/forgot-password">
								<span className="cursor-pointer font-medium text-primary-dark hover:text-primary">
									Forgot your password?
								</span>
							</Link>
						</div>
					</div> */}

					<div className="text-center">
						<button
							type="submit"
							className="btn bg-vert group hover:bg-verth relative w-1/2 text-white"
						>
							{/* <span className="absolute inset-y-0 left-0 flex items-center pl-3">
								<LockClosedIcon
									className="h-5 w-5 text-primary-dark group-hover:text-primary-light"
									aria-hidden="true"
								/>
							</span> */}
							Connexion
						</button>
						<div className="flex justify-between pt-8">
							<button className="btn bg-rose hover:bg-roseh  ">
								Mot de passe oublié
							</button>

							<button className="btn bg-rose hover:bg-roseh">
								Adresse Email oublié
							</button>
						</div>
					</div>
					{errorLog && (
						<div className="flex justify-center">
							<small className="text-sm italic text-red-600">
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
