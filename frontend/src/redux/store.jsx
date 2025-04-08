import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./Slice/auth/LoginSlice";

const store = configureStore({
  reducer: {
    LoginAPI: LoginReducer,
  },
});

export default store;
