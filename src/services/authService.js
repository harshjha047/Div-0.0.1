// src/services/authService.js
import api, { setAccessToken, clearAccessToken } from "./api";

const authService = {
  register: async (payload) => {
    // payload: { name, email, password }
    const { data } = await api.post("/users/register", payload);
    return data;
  },

  login: async (credentials) => {
    // credentials: { email, password }
    const { data } = await api.post("/users/login", credentials);
    if (data.accessToken) setAccessToken(data.accessToken);
    return data;
  },

  logout: async () => {
    try {
      await api.post("/users/logout");
    } finally {
      clearAccessToken();
    }
  },

//   refresh: async () => {
//     const { data } = await api.post("/auth/refresh", {}, { withCredentials: true });
//     if (data.accessToken) setAccessToken(data.accessToken);
//     return data;
//   },

  getProfile: async () => {
    const { data } = await api.get("/users/me");
    return data;
  },
};

export default authService;
