import { createSlice } from "@reduxjs/toolkit";
import { LoginUser } from "../api/auth/login";

const loginSlice = createSlice({
  name: "users/loginUser",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {
    logoutUser(state) {
      state.data = null;
      state.status = "idle";
      state.error = null;
      sessionStorage.removeItem("access_token");
      sessionStorage.removeItem("refresh_token");
      sessionStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log("Login successful Action Payload:", action.payload); // Log the payload
        state.data = action.payload; // Store object directly
        sessionStorage.setItem("access_token", action.payload.accessToken);
        sessionStorage.setItem("refresh_token", action.payload.refreshToken);
        sessionStorage.setItem("user", JSON.stringify(action.payload.user));
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { logoutUser } = loginSlice.actions;
export default loginSlice.reducer;