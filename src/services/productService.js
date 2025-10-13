// src/services/productService.js
import api from "./api";

const productService = {
  getAllProducts: async () => {
    const { data:res } = await api.get("/products");
    return res;
  },

};

export default productService;
