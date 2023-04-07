import {configureStore} from "@reduxjs/toolkit";
import authenticationReducer from "./authenticationSlice";
// import {devToolsEnhancer} from "redux-devtools-extension";

export const store = configureStore({
	reducer: {
		auth: authenticationReducer,
	},
	// middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
	// enhancers: [devToolsEnhancer()],
});
