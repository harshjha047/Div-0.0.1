import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import authService from "../services/authService";
import { Children } from "react";
import { useProfile } from "./ProfileContext";
import { useShop } from "./ShopContext";


const AuthApi = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  const [genratedOTP, setGeneratedOtp] = useState(0);
  const [userEnteredOtp, setUserEnterOtp] = useState(0);
  const [preRegisterUserData, setPreRegisterUserData] = useState(null);
  const [resetPasswordData, setResetPasswordData] = useState(null);
  
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const {LoadProfileData,setGetProfileData} = useProfile();
  const {loadCart,setCart}=useShop()
  


  let genrateOtp = () => {
    return Math.floor(Math.random() * 8999) + 1000;
  };
  const login = async (info) => {
    const data = await authService.login(info);
    setUser(data);
    await LoadProfileData()
    await loadCart()
  };

  const register = async (info) => {
    const data = await authService.register(info);
    setUser(data);
    await LoadProfileData()
    await loadCart()
  };

  const logout = async () => {
    await authService.logout();
    setUser(null);

    await LoadProfileData()
    await loadCart()

    setGetProfileData(null)
    setCart([])
  };

  return (
    <AuthApi.Provider
      value={{
        genrateOtp,
        genratedOTP,
        setGeneratedOtp,
        userEnteredOtp,
        setUserEnterOtp,
        preRegisterUserData,
        setPreRegisterUserData,
        userData,
        setUserData,
        resetPasswordData,
        setResetPasswordData,
        user,
        loading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthApi.Provider>
  );
};
export const useAuth = () => useContext(AuthApi);
