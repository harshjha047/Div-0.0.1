import React from "react";
import Menu from "./Menu";
import DataField from "./DataField";
import UserDataField from "./UserDataField";
import TitleBar from "./TitleBar";
import { Navigate, Outlet } from "react-router-dom";
import { useProfile } from "../../Contexts/ProfileContext";

function Dashboard() {
    const { getProfileData ,loading} = useProfile();
  if (loading) {
    return (
   console.log("Loading...")
    );
  }
  if (getProfileData?.role != "admin" ) {
    return <Navigate to="/" replace />;
  }
  return (<>
      <div className="h-screen w-full flex justify-evenly items-center">
      <Menu />
      <div className="h-[98%] w-[79%]  flex flex-col justify-evenly items-center rounded-lg ">
        <TitleBar />
        <Outlet/>
      </div>
    </div>
    </>
  );
}

export default Dashboard;
