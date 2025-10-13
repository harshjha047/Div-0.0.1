import React, { createContext, useContext, useEffect, useState } from "react";
// import products from "../media/ProductApi";
import axios from "axios";
import toast from "react-hot-toast";
import { useProfile } from "./ProfileContext";
import cartService from "../services/cartService";
import productService from "../services/productService";

const ShopContext = createContext();

export const ShopApi = ({ children }) => {
  let { getProfileData } = useProfile();
  const [cart, setCart] = useState([]);
  const [data, setdata] = useState();
  const [totalPrice, setTotalPrice] = useState();

  const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/api",
    withCredentials: true,
  });

  const loadCart = async () => {
    try {
      const data = await cartService.getCart();
      setTotalPrice(data?.totalAmount);
      setCart(data.items);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteCart = async (cartItem) => {
    try {
      const { data: res } = await axiosInstance.post("/cart/delete", cartItem);
      loadCart();
      toast.success("deleted Item!");
    } catch (err) {
      console.error("Add to cart error:", err);
      toast.error("Failed to delete item in cart.");
    }
  };

  useEffect(() => {
    fetchAllProducts();
    loadCart();
  }, []);
  const fetchAllProducts = async () => {
    try {
      const data = await productService.getAllProducts();
      setdata(data);
    } catch (err) {
      console.log(err);
    }
  };
  const addToCart = async (cartItem) => {
    try {
      await cartService.addToCart(cartItem);
      toast.success("Item added to cart!");
      await loadCart();
    } catch (err) {
      console.error("Add to cart error:", err);
      toast.error("Failed to add item to cart.");
    }
  };

  const RemoveFromCart = async (cartItem) => {
    try {
      await cartService.removeItem(cartItem);
      await loadCart();
      toast.success("Item removed from cart!");
    } catch (err) {
      console.error("Add to cart error:", err);
      toast.error("Failed to remove item from cart.");
    }
  };

  return (
    <ShopContext.Provider
      value={{
        data,
        cart,
        setCart,
        addToCart,
        RemoveFromCart,
        totalPrice,
        axiosInstance,
        deleteCart,
        loadCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => useContext(ShopContext);
