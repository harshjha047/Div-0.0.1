import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const PreLoaderContext = createContext();

export const PreLoaderProvider = ({ children }) => {
  
  return (
    <PreLoaderContext.Provider value={{}}>
      {children}
    </PreLoaderContext.Provider>
  );
};

export const usePreLoader = () => useContext(PreLoaderContext);
