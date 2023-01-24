import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import ForgetLogin from "../components/account/ForgetLogin";

import {URL_HOME} from "../constants/urls/urlFrontEnd";
import Login from "./../components/account/Login";
import {selectIsLogged} from "./../redux-store/authenticationSlice";

/**
 * View/Page Login
 *
 * @author Peter Mollet
 */
const ResetPasswordView = () => {
	const navigate = useNavigate();
	const isAuthenticated = useSelector(selectIsLogged);

	useEffect(() => {
		if (isAuthenticated) navigate(URL_HOME);
	}, []);

	return (
		<div className="flex h-full items-center justify-center loginContainer ">
			<ForgetLogin className="" />
		</div>
	);
};

export default ResetPasswordView;
