// import { checkUser, createUser, signOut, updateUser } from "./authAPI";
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   loggedInUserToken: null,
//   status: "idle",
//   error: null,
// };
// export const createUserAsync = createAsyncThunk(
//   "auth/createUser",
//   async (userData) => {
//     const response = await createUser(userData);
//     return response.data;
//   }
// );
// export const updateUserAsync = createAsyncThunk(
//   "auth/updateUser",
//   async (update) => {
//     const response = await updateUser(update);
//     return response.data;
//   }
// );
// export const signOutAsync = createAsyncThunk("auth/signOut", async (userId) => {
//   const response = await signOut(userId);
//   return response.data;
// });

// export const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(createUserAsync.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(createUserAsync.fulfilled, (state, action) => {
//         state.status = "idle";
//         state.loggedInUserToken = action.payload;
//       })
//       .addCase(updateUserAsync.fulfilled, (state, action) => {
//         state.status = "idle";
//         state.loggedInUserToken = action.payload;
//       })
//       .addCase(signOutAsync.fulfilled, (state, action) => {
//         state.status = "idle";
//         state.loggedInUserToken = null;
//       });
//   },
// });

// export const {} = authSlice.actions;
// export const loggedInUserTokenInfo = (state) =>
//   state.authReducer.loggedInUserToken;
// export const loggedInUserError = (state) => state.authReducer.error;
// export default authSlice.reducer;
