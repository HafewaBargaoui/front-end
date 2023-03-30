import {
	URL_BACK_CARBRANDS,
	URL_BACK_DRIVER,

} from "../../constants/urls/urlBackEnd";
import apiBackEnd from "./api.Backend";


export function getCarBrand(values) {
	return apiBackEnd.get(URL_BACK_CARBRANDS, values);
}

export function updateVehicule(values) {
	return apiBackEnd.put(`/updateVehicule`, values);
}

export function postDriverVehicule(values) {
	return apiBackEnd.post(URL_BACK_DRIVER, values);
}
