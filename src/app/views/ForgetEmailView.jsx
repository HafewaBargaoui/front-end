import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {URL_HOME} from "../constants/urls/urlFrontEnd";
import {selectIsLogged} from "../redux-store/authenticationSlice";
import ForgetEmail from "../components/account/ForgetEmail";

/**
 * View/Page Login
 *
 * @author Peter Mollet
 */
const ForgetEmailView = () => {
	const navigate = useNavigate();
	const isAuthenticated = useSelector(selectIsLogged);

	useEffect(() => {
		if (isAuthenticated) navigate(URL_HOME);
	}, []);

	return (
		<div className="accueil bg-cover bg-[url('./imgs/Gradient.png')] w-full h-full">
		<div className="flex h-full items-center justify-center loginContainer ">
			<ForgetEmail className="" />
		</div>
		</div>
	);
};

export default ForgetEmailView;
