import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";
import authService from "../services/authService";
import toast from "react-hot-toast";
import productService from "../services/productService";

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [allUsers, setAllUser] = useState();
  const [adminProductlist, setAdminProductList] = useState();
  const [search, setSearch] = useState();

  let GetAllUsers = async () => {
    try {
      let data = await authService.getAllUsers();
      setAllUser(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  let DeleteUser = async (id) => {
    try {
      let { data } = await authService.deleteUser(id);
      toast.success("user deleted Successfully");
      await GetAllUsers();
    } catch (error) {
      toast.error("Server error try again later");
      console.log(error.message);
      
    }
  };

  // products
  const getAllProducts = async () => {
    try {
      const data = await productService.getAllProducts();
      setAdminProductList(data);
    } catch (err) {
      console.log(err);
    }
  };

  let createProduct = async (id) => {
    try {
      let { data } = await authService.createProduct(id);
      toast.success("Product Created Successfully");
      await getAllProducts();
    } catch (error) {
      toast.error("Server error try again later");
      console.log(error.message);
    }
  };
  let updateProduct = async (id) => {
    try {
      let { data } = await authService.updateProduct(id);
      toast.success("Updated Successfully");
      await getAllProducts();
    } catch (error) {
      toast.error("Server error try again later");
      console.log(error.message);
    }
  };
  let deleteProduct = async (id) => {
    try {
      let { data } = await authService.createProduct(id);
      toast.success("Deleted Successfully");
      await getAllProducts();
    } catch (error) {
      toast.error("Server error try again later");
      console.log(error.message);
    }
  };


  useEffect(() => {
    GetAllUsers();
    getAllProducts()
  }, []);

  return (
    <AdminContext.Provider
      value={{
        search,
        allUsers,
        setSearch,
        setAllUser,
        DeleteUser,
        GetAllUsers,
        createProduct,
        updateProduct,
        deleteProduct,
        adminProductlist,
        setAdminProductList,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext);
