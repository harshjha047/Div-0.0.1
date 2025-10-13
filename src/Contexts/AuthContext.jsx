import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import authService from "../services/authService";
import { Children } from "react";

const AuthApi = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  const [genratedOTP, setGeneratedOtp] = useState(0);
  const [userEnteredOtp, setUserEnterOtp] = useState(0);
  const [preRegisterUserData, setPreRegisterUserData] = useState(null);
  const [resetPasswordData, setResetPasswordData] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/api",
    withCredentials: true,
  });
  let genrateOtp = () => {
    return Math.floor(Math.random() * 8999) + 1000;
  };
  useEffect(() => {
    // responceGet();
  }, []);

  const login = async (info) => {
    const data = await authService.login(info);
    setUser(data.user);
  };

  const register = async (info) => {
    const data = await authService.register(info);
    setUser(data.user);
  };

  const logout = async () => {
    await authService.logout();
    setUser(null);
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
        axiosInstance,
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
