const name = /[a - zA - Z]/;
const lastname = /[a - zA - Z]/;
const password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const pathtype = /[a - zA - Z]/;
const streetName = /\d{1,5}\s\w.\s(\b\w*\b\s){1,2}\w*\./;
const city = /[a - zA - Z]/;
const additionnalAddress = /\d{1,5}\s\w.\s(\b\w*\b\s){1,2}\w*\./;
const streetNumber = /^[0-9]*$/;
const birthday =
	/(((0[1-9]|[12][0-9]|3[01])([/])(0[13578]|10|12)([/])(\d{4}))|(([0][1-9]|[12][0-9]|30)([/])(0[469]|11)([/])(\d{4}))|((0[1-9]|1[0-9]|2[0-8])([/])(02)([/])(\d{4}))|((29)(\/)(02)([/])([02468][048]00))|((29)([/])(02)([/])([13579][26]00))|((29)([/])(02)([/])([0-9][0-9][0][48]))|((29)([/])(02)([/])([0-9][0-9][2468][048]))|((29)([/])(02)([/])([0-9][0-9][13579][26])))/;
const phone = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/;
const username = /^[A-z][A-z0-9-_]{3,23}$/;
const zip = /^[0-9]*$/;

const REGEX = {
	name,
	lastname,
	password,
	email,
	pathtype,
	streetName,
	city,
	additionnalAddress,
	streetNumber,
	birthday,
	phone,
	username,
	zip,
};

export default REGEX;
