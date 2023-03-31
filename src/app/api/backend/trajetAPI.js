import {
	URL_BACK_CREATE_ROUTE,
	URL_BACK_GET_DRIVER_ROUTE,
	URL_BACK_USER_JOURNEY,
	URL_BACK_USER_SUBMITTEDJOURNEY,
	URL_BACK_UPDATE_ROUTE,
	URL_BACK_GET_DRIVER_REVIEW,
	URL_BACK_DRIVER_NOTE,
} from "../../constants/urls/urlBackEnd";
import apiBackEnd from "./api.Backend";


export function createRoute(values) {
	return apiBackEnd.post(URL_BACK_CREATE_ROUTE, values);
}

export function getDriverRoute(values) {
	return apiBackEnd.post(URL_BACK_GET_DRIVER_ROUTE, values);
}

export function userJourney() {
	return apiBackEnd.get(URL_BACK_USER_JOURNEY);
  }

  export function userSubmittedJourney() {
	return apiBackEnd.get(URL_BACK_USER_SUBMITTEDJOURNEY);
  }

export function updateRoute(values) {
	return apiBackEnd.put(URL_BACK_UPDATE_ROUTE, values);
}

export function getDriverReview(values) {
	return apiBackEnd.put(URL_BACK_GET_DRIVER_REVIEW, values);
}

export function driverNote(values) {
	return apiBackEnd.put(URL_BACK_DRIVER_NOTE, values);
}