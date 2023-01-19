import React, {useEffect, useState} from "react";
import {register} from "../api/backend/account";
import REGEX from "../constants/regex";
import FirstForm from "../components/stepsRegister/FirstForm";
import SecondForm from "../components/stepsRegister/SecondForm";
import ThirdForm from "../components/stepsRegister/ThirdForm";

const RegisterView = () => {
	const formList = ["FirstForm", "SecondForm", "ThirdForm"];

	const formLength = formList.length;

	const [page, setPage] = useState(0);

	const handlePrev = () => {
		setPage(page === 0 ? formLength - 1 : page - 1);
	};
	const handleNext = () => {
		setPage(page === formLength - 1 ? 0 : page + 1);
	};

	const [error, setError] = useState(
		"hidden bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
	);

	const showMessageError = (boolean) => {
		setError(
			boolean === false
				? "hidden bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
				: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
		);
	};

	const initialValues = {
		name: "",
		lastname: "",
		birthday: "",
		email: "",
		password: "",
		confirmPassword: "",
		pathType: "",
		additionalAddress: "",
		streetName: "",
		streetNumber: "",
		city: "",
		zip: "",
		phone: "",
		sex: "",
		terms: "",
	};

	const initialValidationValues = {
		name: false,
		lastname: false,
		birthday: false,
		email: false,
		password: false,
		confirmPassword: false,
		// pathType: false,
		// additionalAddress: false,
		// streetName: false,
		// streetNumber: false,
		// city: false,
		// zip: false,
		// phone: false,
		// sex: false,
		// terms: false,
	};

	console.log(REGEX);
	console.log(REGEX.name);

	const [values, setValues] = useState(initialValues);
	const [validateValues, setValidateValues] = useState(initialValidationValues);
	const [checkingFocus, setCheckingFocus] = useState(initialValidationValues);

	useEffect(() => {
		if (values.password === values.confirmPassword) {
			setValidateValues({...validateValues, confirmPassword: true});
		} else {
			setValidateValues({...validateValues, confirmPassword: false});
		}
	}, [values.confirmPassword, values.password]);

	const handleForms = () => {
		switch (page) {
			case 0: {
				return (
					<div>
						<FirstForm
							formValues={values}
							onChange={onChange}
							onFocus={onFocus}
							onBlur={onBlur}
							formValidation={validateValues}
							checkingFocus={checkingFocus}
						></FirstForm>
					</div>
				);
			}
			case 1: {
				return (
					<SecondForm
						formValues={values}
						onChange={onChange}
					></SecondForm>
				);
			}
			case 2: {
				return (
					<ThirdForm
						formValues={values}
						onChange={onChange}
					></ThirdForm>
				);
			}
			default:
				return null;
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (
			values.name == "" ||
			values.lastname == "" ||
			values.birthday == "" ||
			values.email == "" ||
			values.password == "" ||
			values.confirmPassword == "" ||
			values.address == "" ||
			values.additionalAddress == "" ||
			values.streetName == "" ||
			values.streetNumber == "" ||
			values.city == "" ||
			values.zip == ""
		) {
			showMessageError(true);
		} else {
			showMessageError(false);
			delete values.terms;
			delete values.confirmPassword;
			const response = await register(values);
		}
	};

	const setForm = (e) => {
		const name = e.target.innerText;
		switch (name) {
			case "Étape 1/3": {
				return setPage(0);
			}
			case "Étape 2/3": {
				return setPage(1);
			}
			case "Étape 3/3": {
				return setPage(2);
			}
			default:
				setPage(0);
		}
	};

	console.log(REGEX.password);

	const onChange = (e) => {
		const {name, value, type, checked} = e.target;
		setValues({...values, [name]: type === "checkbox" ? checked : value});
		const inputRegexName = Object.keys(REGEX).find(
			(regexName) => regexName === name
		);

		if (inputRegexName) {
			setValidateValues({
				...validateValues,
				[name]:
					// name === "confirmPassword"
					// 	? values.password === values.confirmPassword
					// 		? true
					// 		: false:
					REGEX[name].test(value),
			});
		}
	};

	const onFocus = (e) => {
		const {name, value, type, checked} = e.target;
		setCheckingFocus({...checkingFocus, [name]: true});
	};

	const onBlur = (e) => {
		const {name, value, type, checked} = e.target;
		setCheckingFocus({...checkingFocus, [name]: false});
	};

	console.log(validateValues);

	const test = async () => {
		delete values.terms;
		delete values.confirmPassword;

		console.log(values);
		const response = await register(values);
		console.log(response);
	};

	return (
		<div className=" pt-32 grid gap-8 place-content-center  ">
			<div
				className={error}
				id="messageError"
			>
				<strong className="font-bold">
					Un problème sur le formulaire est détecté
				</strong>
				<span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
			</div>

			<ul className="flex justify-between w-full">
				<li
					onClick={setForm}
					className={
						page === 0 ? "bg-vert w-2/6 rounded-lg  " : "bg: transparent"
					}
				>
					<div className="flex items-center ">
						<span className="stepper-head-icon">
							<svg
								className="h-8 w-8 text-rose"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								strokeWidth="2"
								stroke="currentColor"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								{" "}
								<path
									stroke="none"
									d="M0 0h24v24H0z"
								/>{" "}
								<circle
									cx="12"
									cy="7"
									r="4"
								/>{" "}
								<path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
							</svg>
						</span>
						<span
							className={
								page === 0
									? "ml-2 text-white font-medium"
									: "ml-2 text-gray-500 cursor-pointer"
							}
						>
							Étape 1/3
						</span>
					</div>
				</li>
				<li
					onClick={setForm}
					className={
						page === 1 ? "bg-vert  w-2/6 rounded-lg" : "bg: transparent "
					}
				>
					<div className="flex items-center">
						<span className="stepper-head-icon">
							<svg
								className="h-8 w-8 text-rose"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								strokeWidth="2"
								stroke="currentColor"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								{" "}
								<path
									stroke="none"
									d="M0 0h24v24H0z"
								/>{" "}
								<circle
									cx="12"
									cy="7"
									r="4"
								/>{" "}
								<path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
							</svg>
						</span>
						<span
							className={
								page === 1
									? "ml-2 text-white font-medium"
									: "ml-2 text-gray-500 cursor-pointer"
							}
						>
							Étape 2/3
						</span>
					</div>
				</li>
				<li
					onClick={setForm}
					className={
						page === 2 ? "bg-vert w-2/6 rounded-lg" : "bg: transparent"
					}
				>
					<div className="flex items-center">
						<span className="stepper-head-icon">
							<svg
								className="h-8 w-8 text-rose"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								strokeWidth="2"
								stroke="currentColor"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								{" "}
								<path
									stroke="none"
									d="M0 0h24v24H0z"
								/>{" "}
								<circle
									cx="12"
									cy="7"
									r="4"
								/>{" "}
								<path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
							</svg>
						</span>
						<span
							className={
								page === 2
									? "ml-2 text-white font-medium"
									: "ml-2 text-gray-500 cursor-pointer"
							}
						>
							Étape 3/3
						</span>
					</div>
				</li>
			</ul>
			<div className="flex-1">{handleForms()}</div>
			<div className="grid grid-cols-2 gap-4 place-content-center items-center">
				<button
					onClick={handlePrev}
					className="bg-rose  hover:bg-roseh rounded-md text-gray-600 font-bold py-2 px-4 disabled:bg-gray-400 disabled:bg-opacity-25 disabled:text-opacity-25 "
					disabled={page === 0}
				>
					Prev
				</button>
				{page === 2 ? (
					<button
						onClick={handleSubmit}
						className="bg-vert hover:bg-verth rounded-md text-black font-bold py-2 px-4 "
					>
						Submit
					</button>
				) : (
					<button
						onClick={handleNext}
						className="bg-vert hover:bg-verth rounded-md text-black font-bold py-2 px-4 "
					>
						Next
					</button>
				)}
				{/* <button onClick={test}>envoie</button> */}
			</div>
		</div>
	);
};

export default RegisterView;
