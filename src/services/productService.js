// src/services/productService.js
import api from "./api";

const productService = {
  getAllProducts: async () => {
    const { data:res } = await api.get("/products");
    return res;
  },

//   getProductById: async (productId) => {
//     const { data } = await api.get(`/products/${productId}`);
//     return data;
//   },

//   getByCategory: async (category) => {
//     const { data } = await api.get(`/products/category/${category}`);
//     return data;
//   },

//   getFeatured: async () => {
//     const { data } = await api.get("/products/featured");
//     return data;
//   },

//   searchProducts: async (query) => {
//     const { data } = await api.get("/products/search", { params: { q: query } });
//     return data;
//   },
};

export default productService;
