import React from "react";
import { useProfile } from "../../Contexts/ProfileContext";

function Address(props) {
  const { getProfileData,axiosInstance } = useProfile();
//   console.log();
  
//   const { label, street, city, state, zip, country, isDefault } = props?.data;
 const deleteAddres=async(id)=>{
    try{
       const {data:res}=await axiosInstance.delete(`/users/addresses/${id}`)
       console.log(res);
       
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className="border border-gray-700 rounded-lg p-4 mb-4">
      <div className="flex justify-between items-start mb-3">
        <div>
          <p className="text-white font-medium">{props?.data?.label||"NA"}</p>
          <span className={`px-2 py-1 ${props?.data?.isDefault?"":'hidden'} bg-green-600 text-white rounded text-xs`}>Default</span>
        </div>
        <div className="flex space-x-2">
          <button onClick={()=>deleteAddres(props?.data?._id)} className="text-red-400 hover:text-red-300 text-sm">
            Delete
          </button>
        </div>
      </div>
      <div className="text-gray-300 text-sm space-y-1">
        <p>{getProfileData?.name ||"NA"}</p>
        <p>{props?.data?.street ||"NA"},{props?.data?.country ||"NA"}</p>
        <p>{props?.data?.city ||"NA"}, {props?.data?.state ||"NA"} {props?.data?.zip ||"NA"}</p>
        <p>Phone: {getProfileData?.phone ||"NA"}</p>
      </div>
    </div>
  );
}

export default Address;
