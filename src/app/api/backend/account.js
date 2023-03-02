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
	URL_BACK_DELETE_ACCOUNT,
	URL_BACK_USER_PROFILE,
	URL_BACK_CREATE_ROUTE,
	URL_BACK_ENDPOINT_SOCKET,
} from "../../constants/urls/urlBackEnd";
import apiBackEnd from "./api.Backend";

export function getMessageSocket(values) {
	return apiBackEnd.get(URL_BACK_ENDPOINT_SOCKET, values);
}

export function getCarBrand(values) {
	return apiBackEnd.get(URL_BACK_CARBRANDS, values);
}


export function updateVehicule(values) {
	return apiBackEnd.put(`/updateVehicule`, values);
  }
  


export function getProfile() {
	return apiBackEnd.get(`/userProfile`);
  }

export function editProfile(values) {
	return apiBackEnd.put(`/userProfile`, values);
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

export function emit() {
    return apiBackEnd.post(URL_BACK_ENDPOINT_SOCKET);
}

export function createRoute(values) {
	return apiBackEnd.post(URL_BACK_CREATE_ROUTE, values);
}

export function deleteAccount() {
	return apiBackEnd.put(`/deleteAccount`);
}