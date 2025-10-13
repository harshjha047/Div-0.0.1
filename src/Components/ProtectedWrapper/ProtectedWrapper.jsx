import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import  {useProfile}  from "../../Contexts/ProfileContext";
import { useShop } from "../../Contexts/ShopContext";

const ProtectedWrapper = () => {
  const { getProfileData ,loading} = useProfile();
  const {setCart}=useShop()

  // Wait until user data is fetched
  if (loading) {
    return (
   console.log("Loading...")
    );
  }

  // If no user → redirect to login
  if (!getProfileData) {
    return <Navigate to="/auth" replace />;
  }

  // If logged in → render children routes
  return (<>
  <Outlet />
  {/* {setCart(getProfileData?.cart?.items)} */}
    </>
  );
};

export default ProtectedWrapper;
