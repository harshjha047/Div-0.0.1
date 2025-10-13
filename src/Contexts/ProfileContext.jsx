import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import authService from "../services/authService";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [getProfileData, setGetProfileData] = useState();
  const [getWishlistData, setGetWishlistData] = useState();
  const [updateProfileData, setUpdateProfileData] = useState(false);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    LoadProfileData();
  }, []);
  const LoadWishlistData = async () => {
    try {
      const data = await authService.getWishlist();
      console.log(data);
      setGetWishlistData(data);
    } catch (err) {
      console.log("Profile Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const LoadProfileData = async () => {
    try {
      const data = await authService.getProfile();
      setGetProfileData(data?.user);
      await LoadWishlistData()
    } catch (err) {
      console.log("Profile Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const addWishlistData = async (info) => {
    try {
      const data = await authService.addToWishlist(info);
      console.log(data);
      setGetWishlistData(data);
      await LoadProfileData()
    } catch (err) {
      console.log("Profile Error:", err);
    } finally {
      setLoading(false);
    }
  };
    const removeWishlistData = async (info) => {
    try {
      const data = await authService.removeFromWishlist(info);
      console.log(data);
      setGetWishlistData(data);
      await LoadProfileData()
    } catch (err) {
      console.log("Profile Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProfileContext.Provider
      value={{
        getProfileData,
        setGetProfileData,
        updateProfileData,
        setUpdateProfileData,
        loading,
        LoadProfileData,
        LoadWishlistData,
        addWishlistData,
        removeWishlistData,
        getWishlistData, 
        setGetWishlistData,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
