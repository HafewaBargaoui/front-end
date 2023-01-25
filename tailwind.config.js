const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Lato", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				primary: {
					light: "#4da6ff",
					DEFAULT: "#0B84FF",
					dark: "#0066cc",
				},
				secondary: {
					light: "#f39e58",
					DEFAULT: "#ed7410",
					dark: "#bf5d0d",
				},
				vert: "#3DB171",
				verth: "#349660",
				rose: "#FFCBC8",
				roseh: "#EFBBB8",
				gris: "#D1D1D1",
				bleu: "#54C6EB",
				bleuh: "#4DAFCF",
				jaune: "#F4E04D", 
				jauneh: "#EDC346",
				jaunebtn: "#F1C644",
			
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
