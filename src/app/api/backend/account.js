import {
	URL_BACK_AUTHENTICATE,
	URL_BACK_REGISTER,
	URL_BACK_CARBRANDS,
	URL_BACK_USER_PREFERENCE,
	URL_BACK_DRIVER,
	URL_BACK_DRIVERPREF,
	URL_BACK_FORGET_PASSWORD,
	URL_BACK_RESET_PASSWORD,

} from "../../constants/urls/urlBackEnd";
import apiBackEnd from "./api.Backend";

export function getCarBrand(values) {
	apiBackEnd.defaults.withCredentials = true;
	return apiBackEnd.get(URL_BACK_CARBRANDS, values);
}

export function postDriverVehicule(values) {
	apiBackEnd.defaults.withCredentials = true;
	return apiBackEnd.post(URL_BACK_DRIVER, values);
}

export function postDriverPrefs(values) {
	apiBackEnd.defaults.withCredentials = true;
	return apiBackEnd.post(URL_BACK_DRIVERPREF, values);
}

export function authenticate(values) {
	apiBackEnd.defaults.withCredentials = true;
	return apiBackEnd.post(URL_BACK_AUTHENTICATE, values);
}



export function register(values) {
	return apiBackEnd.post(URL_BACK_REGISTER, values);
}

export function forgetpassword(values) {
	return apiBackEnd.post(URL_BACK_FORGET_PASSWORD, values);
}

export function resetpassword(values) {
	return apiBackEnd.post(URL_BACK_RESET_PASSWORD, values);
}

export function userPreference(values) {
	return apiBackEnd.post(URL_BACK_USER_PREFERENCE, values);
}