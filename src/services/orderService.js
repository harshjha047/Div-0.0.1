// src/services/orderService.js
import api from "./api";

const orderService = {
  getUserOrders: async () => {
    const { data } = await api.get("/orders/my");
    return data;
  },

  getOrderById: async (orderId) => {
    const { data } = await api.get(`/orders/${orderId}`);
    return data;
  },

  cancelOrder: async (orderId) => {
    const { data } = await api.put(`/orders/${orderId}/cancel`);
    return data;
  },

  trackOrder: async (trackingId) => {
    const { data } = await api.get(`/orders/track/${trackingId}`);
    return data;
  },

  // Admin routes
  getAllOrders: async () => {
    const { data } = await api.get("/admin/orders");
    return data;
  },

  updateOrderStatus: async (orderId, status) => {
    const { data } = await api.put(`/admin/orders/${orderId}`, { status });
    return data;
  },
};

export default orderService;
