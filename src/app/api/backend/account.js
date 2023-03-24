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
	URL_BACK_GET_DRIVER_ROUTE,
	URL_BACK_PUT_USER_ROOM,
	URL_BACK_USER_JOURNEY,
	URL_BACK_USER_SUBMITTEDJOURNEY,
	URL_STRIPE,
	URL_TRADER,
	URL_EMAIL_PAIEMENT,
	URL_BACK_UPDATE_ROUTE,
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
	return apiBackEnd.get(URL_BACK_USER_PROFILE);
  }

export function editProfile(values) {
	return apiBackEnd.put(URL_BACK_USER_PROFILE, values);
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
	return apiBackEnd.put(URL_BACK_DELETE_ACCOUNT);
}

export function getDriverRoute(values) {
	return apiBackEnd.post(URL_BACK_GET_DRIVER_ROUTE, values);
}

export function updateRoomUser(values) {
	return apiBackEnd.put(URL_BACK_PUT_USER_ROOM, values);
}

export function userJourney() {
	return apiBackEnd.get(URL_BACK_USER_JOURNEY);
  }

  export function userSubmittedJourney() {
	return apiBackEnd.get(URL_BACK_USER_SUBMITTEDJOURNEY);
  }

  export function buyBuddyCoins() {
	return apiBackEnd.get();
}

export function sellBuddyCoins() {
	return apiBackEnd.get();
}

export function paiementStripe(values) {
	return apiBackEnd.post(URL_STRIPE, values);
}

export function getTrader(values) {
	return apiBackEnd.get(URL_TRADER, values);
}

export function mailPaiement() {
	return apiBackEnd.get(URL_EMAIL_PAIEMENT);
}

export function updateRoute(values) {
	return apiBackEnd.put(URL_BACK_UPDATE_ROUTE, values);
}