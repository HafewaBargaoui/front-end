import axios from "axios";

/**
 * Instance axios to the BACKEND
 *
 * @author Peter Mollet
 */

const apiBackEnd = axios.create({
	// baseURL: "http://localhost:8080/",
	baseURL: "http://localhost:8080/",
	withCredentials : true
});



export default apiBackEnd;
