import { createAsyncThunk } from "@reduxjs/toolkit";
import { postApi } from "../../../common/axios/AxiosClient" // Use your Axios client

export const LoginUser = createAsyncThunk(
  "users/LoginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await postApi("/user/login", userData); 
      return response; 
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);