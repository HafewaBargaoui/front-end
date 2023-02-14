import {
	URL_BACK_AUTHENTICATE,
	URL_BACK_REGISTER,
	URL_BACK_CARBRANDS,
	URL_BACK_USER_PREFERENCE,
	URL_BACK_DRIVER,
	URL_BACK_DRIVERPREF,
	URL_BACK_FORGET_PASSWORD,
	URL_BACK_RESET_PASSWORD,
	URL_BACK_LOGOUT,
	URL_BACK_USER_PROFILE

} from "../../constants/urls/urlBackEnd";
import apiBackEnd from "./api.Backend";

export function getCarBrand(values) {
	return apiBackEnd.get(URL_BACK_CARBRANDS, values);
}

export function getProfile() {
	return apiBackEnd.get(`/userProfile`);
  }
  

export function postDriverVehicule(values) {
	return apiBackEnd.post(URL_BACK_DRIVER, values);
}

export function postDriverPrefs(values) {
	return apiBackEnd.post(URL_BACK_DRIVERPREF, values);
}

export function authenticate(values) {
	return apiBackEnd.post(URL_BACK_AUTHENTICATE, values);
}

export function logout(values) {
	return apiBackEnd.get(URL_BACK_LOGOUT, values);
}

export function register(values) {
	return apiBackEnd.post(URL_BACK_REGISTER, values);
}

export function userPreference(values) {
	return apiBackEnd.post(URL_BACK_USER_PREFERENCE, values);
}

export function resetpassword(values, token) {
	apiBackEnd.defaults.headers.common['Authorization'] = `Bearer ${token}` 
    return apiBackEnd.post(URL_BACK_RESET_PASSWORD, values, token);
}

export function forgetpassword(values) {
    return apiBackEnd.post(URL_BACK_FORGET_PASSWORD, values);
}