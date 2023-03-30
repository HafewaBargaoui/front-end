import {
	URL_BACK_ENDPOINT_SOCKET,
	URL_BACK_PUT_USER_ROOM,
} from "../../constants/urls/urlBackEnd";
import apiBackEnd from "./api.Backend";

export function getMessageSocket(values) {
	return apiBackEnd.get(URL_BACK_ENDPOINT_SOCKET, values);
}

export function emit() {
    return apiBackEnd.post(URL_BACK_ENDPOINT_SOCKET);
}

export function updateRoomUser(values) {
	return apiBackEnd.put(URL_BACK_PUT_USER_ROOM, values);
}
