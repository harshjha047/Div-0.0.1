import React from "react";
import { useProfile } from "../../Contexts/ProfileContext";

function TitleBar() {
  const {getProfileData}=useProfile()
  return (
    <div className="w-full flex justify-between items-center bg-[#F8F7F1] px-3 py-2 rounded-lg ">
      <div className="">
        <h1 className="text-2xl font-semibold">Powered by: {"<Div/>"}</h1>
        <p className="text-sm text-zinc-500">Complete system is developed by Team Div </p>
      </div>
      <div className="flex items-center px-1">
        <img src="https://www.shutterstock.com/image-vector/default-avatar-profile-icon-transparent-600nw-2534623311.jpg" className="h-[7vh] rounded-full mx-1 border" alt="" />
        <div className=" h-full flex flex-col justify-center">
            <h1 className="text-xl leading-none">{getProfileData?.name}</h1>
        <p className="text-sm text-zinc-500">{getProfileData?.role}</p>
        </div>
        
      </div>
    </div>
  );
}

export default TitleBar;
