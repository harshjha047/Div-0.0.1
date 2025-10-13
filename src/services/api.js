// src/services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",
  headers: { "Content-Type": "application/json" },
  withCredentials: true, // include cookies for refresh tokens if backend supports
});

// Token handling helpers
export const getAccessToken = () => localStorage.getItem("accessToken");
export const setAccessToken = (token) => localStorage.setItem("accessToken", token);
export const clearAccessToken = () => localStorage.removeItem("accessToken");

// Attach Authorization header
api.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Refresh token handler
let isRefreshing = false;
let subscribers = [];

const onRefreshed = (token) => {
  subscribers.forEach((cb) => cb(token));
  subscribers = [];
};

const subscribeTokenRefresh = (cb) => {
  subscribers.push(cb);
};

// Handle 401 → try refresh
// api.interceptors.response.use(
//   (res) => res,
//   async (err) => {
//     const originalRequest = err.config;
//     if (err.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       if (isRefreshing) {
//         return new Promise((resolve) => {
//           subscribeTokenRefresh((token) => {
//             originalRequest.headers.Authorization = `Bearer ${token}`;
//             resolve(api(originalRequest));
//           });
//         });
//       }

//       isRefreshing = true;
//       try {
//         const { data } = await axios.post(
//           `${import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api"}/auth/refresh`,
//           {},
//           { withCredentials: true }
//         );
//         const newToken = data.accessToken;
//         setAccessToken(newToken);
//         api.defaults.headers.common.Authorization = `Bearer ${newToken}`;
//         onRefreshed(newToken);
//         return api(originalRequest);
//       } catch (e) {
//         clearAccessToken();
//         window.location.href = "/auth";
//         return Promise.reject(e);
//       } finally {
//         isRefreshing = false;
//       }
//     }
//     return Promise.reject(err);
//   }
// );

export default api;
