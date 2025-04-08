import api from "./AxiosInstance";

export const postApi = async (endpoint, data = {}) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getApi = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const patchApi = async (endpoint, data = {}) => {
  try {
    const response = await api.patch(endpoint, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const deleteApi = async (endpoint, auth = false) => {
  try {
    await api.delete(endpoint);
  } catch (error) {
    throw error;
  }
};
