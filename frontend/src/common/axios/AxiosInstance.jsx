import axios from "axios";
import { removeTokensAndUserData } from "../session/SessionManagement";
const API_URL = import.meta.env.API_URL;

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = sessionStorage.getItem("refresh_token");
        const response = await axios.post(
          `${API_URL}/user/getAccessToken`,
          { refresh: refreshToken }
        );
        const token = response.data.access;

        sessionStorage.setItem("access_token", token);

        originalRequest.headers.Authorization = `Bearer ${token}`;

        return axios(originalRequest);
      } catch (error) {
        removeTokensAndUserData();
        window.location.href = "/";
      }
    }

    return Promise.reject(error);
  }
);

export default api;
