import { useNavigate } from "react-router-dom";

export const useSignOut = () => {
  const nav = useNavigate();

  const signOut = () => {
    removeTokensAndUserData();
    nav("/");
  };

  return signOut;
};

export const storeTokens = (response) => {
  sessionStorage.setItem("refresh_token", response.refresh);
  sessionStorage.setItem("access_token", response.access);
};

export const removeTokensAndUserData = () => {
  sessionStorage.removeItem("refresh_token");
  sessionStorage.removeItem("access_token");
};
export const getTokens = () => {
  const refreshToken = sessionStorage.getItem("refresh_token");
  const accessToken = sessionStorage.getItem("access_token");

  return { refreshToken, accessToken };
};
