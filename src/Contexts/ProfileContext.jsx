import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [getProfileData, setGetProfileData] = useState();
  const [updateProfileData, setUpdateProfileData] = useState(false);
  const [loading, setLoading] = useState(true);

  const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/api", // your backend URL
    withCredentials: true,
  });

  useEffect(() => {
    const LoadProfileData = async () => {
      try {
        const response = await axiosInstance.get("/users/me", {
          headers: { "Cache-Control": "no-cache" },
        });
        setGetProfileData(response?.data?.user);
      } catch (err) {
        console.log("Profile Error:", err);
      } finally{
        setLoading(false);
      }
    };
    LoadProfileData();
  }, []);

  return (
    <ProfileContext.Provider
      value={{
        getProfileData,
        setGetProfileData,
        axiosInstance,
        updateProfileData,
        setUpdateProfileData,
        loading,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
