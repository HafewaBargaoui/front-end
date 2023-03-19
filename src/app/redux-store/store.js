import {configureStore} from "@reduxjs/toolkit";
import authenticationReducer from "./authenticationSlice";
import getUserReducer from "./getUserSlice";
// import {devToolsEnhancer} from "redux-devtools-extension";

export const store = configureStore({
	reducer: {
		auth: authenticationReducer,
		user: getUserReducer,
	},
	// middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
	// enhancers: [devToolsEnhancer()],
});
