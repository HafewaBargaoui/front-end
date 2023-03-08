import {createSlice} from "@reduxjs/toolkit";
import { getProfile } from "../api/backend/account";

const initialState = {
	userData : null,
	data : null
};

export const getUserSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		getUser: async (state) => 
		{
			await getProfile().then((res) =>
			{
				console.log(res);
				state.userData = res;
			});
		 }
	},
});

export const { getUser } = getUserSlice.actions;
export const selectUserdata = (state) => state.user;
export default getUserSlice.reducer;