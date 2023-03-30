import {
	URL_STRIPE,
	URL_TRADER,
	URL_EMAIL_PAIEMENT,
} from "../../constants/urls/urlBackEnd";
import apiBackEnd from "./api.Backend";

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