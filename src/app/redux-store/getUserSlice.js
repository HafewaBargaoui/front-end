import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	userData : {}
};

export const getUserSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		getUser: (state, action) => 
		{
			const data = action.payload;
			state.userData = data;
		}
	},
});

export const { getUser } = getUserSlice.actions
export const selectUserData = (state) => state.user.userData;
export default getUserSlice.reducer;