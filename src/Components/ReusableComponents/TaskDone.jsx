import React from "react";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

function TaskDone() {
  return (
    <div className="fixed bottom-8 left-8 z-50 w-[20%] h-[12vh] bg-green-600 border-green-500 border rounded-xl flex items-center ">
      <div className=" flex-1  flex justify-center text-[3rem] text-green-200">
        <IoCheckmarkCircleSharp />
      </div>
      <div className="flex-[2] font-semibold flex  text-green-200 text-[1.5rem]">
        Success
      </div>
      
    </div>
  );
}

export default TaskDone;
