import {
	URL_BACK_USER_PREFERENCE,
	URL_BACK_DRIVERPREF,
	URL_BACK_USER_PROFILE,
	URL_BACK_GET_DRIVER_ROUTE,
	URL_BACK_GOOGLE_ROUTE
} from "../../constants/urls/urlBackEnd";
import apiBackEnd from "./api.Backend";

export function registerGoogle() {
	return apiBackEnd.get(URL_BACK_GOOGLE_ROUTE);
  }

export function getProfile() {
	return apiBackEnd.get(URL_BACK_USER_PROFILE);
  }

export function editProfile(values) {
	return apiBackEnd.put(URL_BACK_USER_PROFILE, values);
}

export function postDriverPrefs(values) {
	return apiBackEnd.post(URL_BACK_DRIVERPREF, values);
}

export function userPreference(values) {
	return apiBackEnd.post(URL_BACK_USER_PREFERENCE, values);
}

export function getDriverRoute(values) {
	return apiBackEnd.post(URL_BACK_GET_DRIVER_ROUTE, values);
}
