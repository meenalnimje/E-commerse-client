// The files which are not components(eg:-axiosClient) will not take direct dispatch call so we have to import the store in it

import {
  KEY_ACCESS_TOKEN,
  getItem,
  removeItem,
  setItem,
} from "../utiles/localStorageManager";

import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (request) => {
    const accessToken = getItem(KEY_ACCESS_TOKEN);
    console.log("accesToken while axios request", accessToken);
    if (accessToken) {
      request.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  async (response) => {
    const data = response.data;
    if (data.status === "ok") {
      return data;
    }
    const originalRequest = response.config;
    const statusCode = data.statusCode;
    const error = data.message;
    if (statusCode === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const response = await axios
        .create({ withCredentials: true })
        .get("http://localhost:8080/auth/refresh");
      if (response.status === "ok") {
        setItem(KEY_ACCESS_TOKEN, response.result.accessToken);
        originalRequest.headers[
          "Authorization"
        ] = `Bearer ${response.result.accessToken}`;
        return axios(originalRequest);
      } else {
        removeItem(KEY_ACCESS_TOKEN);
        window.location.replace("/login", "_self");
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  },
  async (error) => {
    console.log("error", error);
    return Promise.reject(error);
  }
);
