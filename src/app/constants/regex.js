const name = /^[A-Za-z\é\è\ê\-]+$/;
const lastname = /^[A-Za-z\é\è\ê\-]+$/;
const password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$&%*+-]).{8,24}$/;

const email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const birthday = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;
const phone = /^(0|\+33)[1-9]([-.]?[0-9]{2}){4}$/;
const username = /^[A-z][A-z0-9-_]{3,23}$/;
// const pathtype = /[a-zA-Z]/;
// const streetName = /\d{1,5}\s\w.\s(\b\w*\b\s){1,2}\w*\./;
// const city = /[a-zA-Z]/;
// const additionnalAddress = /\d{1,5}\s\w.\s(\b\w*\b\s){1,2}\w*\./;
// const streetNumber = /^[0-9]*$/;
// const zip = /^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/;

const REGEX = {
	name,
	lastname,
	password,
	email,
	birthday,
	phone,
	username,
	// streetNumber,
	// additionnalAddress,
	// pathtype,
	// streetName,
	// city,
	// zip,
};

export default REGEX;