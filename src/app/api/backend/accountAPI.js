import {
	URL_BACK_AUTHENTICATE,
	URL_BACK_REGISTER,
	URL_BACK_FORGET_PASSWORD,
	URL_BACK_RESET_PASSWORD,
	URL_BACK_LOGOUT,
	URL_BACK_DELETE_ACCOUNT,
} from "../../constants/urls/urlBackEnd";
import apiBackEnd from "./api.Backend";

export function authenticate(values) {
	return apiBackEnd.post(URL_BACK_AUTHENTICATE, values);
}

export function logout(values) {
	return apiBackEnd.get(URL_BACK_LOGOUT, values);
}

export function register(values) {
	return apiBackEnd.post(URL_BACK_REGISTER, values);
}

export function resetpassword(values, token) {
	apiBackEnd.defaults.headers.common['Authorization'] = `Bearer ${token}`
	return apiBackEnd.post(URL_BACK_RESET_PASSWORD, values, token);
}

export function forgetpassword(values) {
    return apiBackEnd.post(URL_BACK_FORGET_PASSWORD, values);
}

export function deleteAccount() {
	return apiBackEnd.put(URL_BACK_DELETE_ACCOUNT);
}