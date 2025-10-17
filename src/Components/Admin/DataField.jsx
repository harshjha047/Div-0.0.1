import React from "react";
import TitleBar from "./TitleBar";
import UserDataField from "./UserDataField";

function DataField() {
  // px-3 py-2
  return (
    <div className="h-[98%] w-[79%]  flex flex-col justify-evenly items-center rounded-lg ">
      <TitleBar />
      <UserDataField/>
    </div>
  );
}

export default DataField;
