import axios from "axios";

/**
 * Instance axios to the BACKEND
 *
 * @author Peter Mollet
 */

const apiBackEnd = axios.create({
	// baseURL: "http://localhost:8080/",
	baseURL: import.meta.env.VITE_API_BACK,
	withCredentials : true
});



export default apiBackEnd;
