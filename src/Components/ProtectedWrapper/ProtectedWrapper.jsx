import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import  {useProfile}  from "../../Contexts/ProfileContext";

const ProtectedWrapper = () => {
  const { getProfileData ,loading} = useProfile();
  if (loading) {
    return (
   console.log("Loading...")
    );
  }
  if (!getProfileData) {
    return <Navigate to="/auth" replace />;
  }
  return (<>
  <Outlet />
    </>
  );
};

export default ProtectedWrapper;
