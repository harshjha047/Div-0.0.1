// src/services/authService.js
import api, { setAccessToken, clearAccessToken } from "./api";

const authService = {
  register: async (payload) => {
    // payload: { name, email, password }
    const { data } = await api.post("/users/register", payload,{withCredentials: true});
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

  getWishlist: async () => {
    // Fetch user's wishlist
    const { data } = await api.get("/users/wishlist");
    return data;
  },

  addToWishlist: async (productId) => {
    // Add a product to wishlist
    const { data } = await api.post(`/users/wishlist/${ productId }`);
    return data;
  },

  removeFromWishlist: async (productId) => {
    // Remove product from wishlist
    const { data } = await api.delete(`/users/wishlist/${productId}`);
    return data;
  },

};

export default authService;
