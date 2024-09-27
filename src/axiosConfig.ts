import request from "axios";

request.defaults.baseURL = "https://www.omdbapi.com";
request.defaults.headers.common["Content-Type"] = "application/json";
request.defaults.headers.common.Accept = "application/json";

// Request interceptor
request.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

// Response interceptor
request.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default request;
