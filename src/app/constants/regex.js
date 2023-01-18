export const NAME_REGEX = /[a - zA - Z]/;
export const PWD_REGEX =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
export const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const PATHTYPE_REGEX = /[a - zA - Z]/;
export const STREETNAME_REGEX = /\d{1,5}\s\w.\s(\b\w*\b\s){1,2}\w*\./;
export const ADDITIONNALADDRESS_REGEX = /\d{1,5}\s\w.\s(\b\w*\b\s){1,2}\w*\./;
export const STREETNUMBER_REGEX = /^[0-9]*$/;
export const BIRTHDAY_REGEX =
	/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
export const PHONENUMBER_REGEX = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/;
export const USERNAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
