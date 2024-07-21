import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchLoggedInUserDetails,
  fetchLoggedInUserOrder,
  signOut,
  updateUser,
} from "./userAPI";
const initialState = {
  userOrders: [],
  userDetails: {},
  status: "idle",
};
export const fetchLoggedInUserOrderAsync = createAsyncThunk(
  "user/fetchLoggedInUserOrder",
  async () => {
    const response = await fetchLoggedInUserOrder();
    return response;
  }
);
export const fetchLoggedInUserDetailsAsync = createAsyncThunk(
  "user/fetchLoggedInUserDetails",
  async () => {
    const response = await fetchLoggedInUserDetails();
    console.log("response fetch loggedin async", response);
    return response;
  }
);

export const updateUserAsync = createAsyncThunk(
  "auth/updateUser",
  async (update) => {
    const response = await updateUser(update);
    return response;
  }
);
export const signOutAsync = createAsyncThunk("auth/signOut", async () => {
  const response = await signOut();
  return response;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoggedInUserOrderAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLoggedInUserOrderAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.userOrders = action.payload;
      })
      .addCase(fetchLoggedInUserDetailsAsync.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchLoggedInUserDetailsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.userDetails = action.payload;
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.userDetails = action.payload;
      })
      .addCase(signOutAsync.fulfilled, (state, action) => {
        state.status = "idle";
        if (action.payload.status === "ok") {
          state.userDetails = null;
        }
      });
  },
});

export const {} = userSlice.actions;
export const LoggedInUserOrders = (state) => state.userReducer.userOrders;
export const LoggedInUserDetails = (state) => state.userReducer.userDetails;
export default userSlice.reducer;
