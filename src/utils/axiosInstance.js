import axios from "axios";
const axiosInstance = axios.create({
    baseURL: "http://localhost:8000",  // Your API base URL
    timeout:10000,
    headers: {
      "Content-Type": "application/json",
    },  // Include credentials (cookies, authorization headers) with requests
  });

axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("token");
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;