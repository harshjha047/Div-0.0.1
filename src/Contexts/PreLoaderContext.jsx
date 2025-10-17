import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import orderService from "../services/orderService";

const CheckoutContext = createContext();

export const CheckoutProvider = ({ children }) => {
  const createCheckoutSession = async (info) => {
    try {
      const data = await orderService.createCheckoutSession(info);
      await LoadProfileData();
    } catch (err) {
      console.log( err);
    }
  };
  return (
    <CheckoutContext.Provider value={{createCheckoutSession}}>{children}</CheckoutContext.Provider>
  );
};

export const useCheckout = () => useContext(CheckoutContext);
