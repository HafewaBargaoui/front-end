import jwt_decode from "jwt-decode";
// import Cookies from "js-cookie";

const TOKEN_NAME = "token";

/**
 * To save the JWT token using for the back end requests
 * Save in the local storage
 *
 * @param {string} token: to save
 * @author Peter Mollet
 */
export function setToken(token) {
	localStorage.setItem(TOKEN_NAME, token);
}

/**
 * To get the JWT token back-kend saved in the localstorage
 *
 * @return {string} token
 * @author Peter Mollet
 */
export function getToken() {
	// console.log(localStorage.getItem(TOKEN_NAME));
	// console.log(Cookies.get(TOKEN_NAME));
	console.log(localStorage.getItem(TOKEN_NAME));
	return localStorage.getItem(TOKEN_NAME);
}

/**
 * Delete the token from the localstorage
 *
 * @author Peter Mollet
 */
export function removeToken() {
	localStorage.removeItem(TOKEN_NAME);
}

/**
 * Get the payload of the JWT Token (with experition date, login and roles)
 *
 * @return {object} payload of the token
 * @author Peter Mollet
 */
export function getPayloadToken(token) {
	return jwt_decode(token);
}

/**
 * To check if the current user is authenticated
 * Check the token, and it's validity
 *
 * @return {boolean} true if user is authenticated
 * @author Peter Mollet
 */
export function isTokenValid(token) {
	try {
		const payload = getPayloadToken(token);
		const userRolesStr = payload.userRoles.toString();
		const roles = userRolesStr.split(",");
		const expirationDate = payload.exp;
		const login = payload.sub;
		const dateNow = new Date();
		return (
			token && roles.length > 0 && login && expirationDate < dateNow.getTime()
		);
	} catch {
		return false;
	}
}
