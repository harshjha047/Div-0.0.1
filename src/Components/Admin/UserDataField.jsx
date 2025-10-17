import React, { useEffect, useState } from "react";

import UserCardForUserDataField from "./UserCardForUserDataField";
import SearchBar from "./SearchBar";
import { useAdmin } from "../../Contexts/AdminContext";

function UserDataField() {
  const {DeleteUser, GetAllUsers,allUsers,setAllUser,search,setSearch}=useAdmin()
  let [filteredData, setFilteredData] = useState(allUsers);

  useEffect(()=>setFilteredData(allUsers),[allUsers])

   useEffect(()=>{
          setFilteredData(
      allUsers?.filter((user) => {
        return (
          user?.name?.toLowerCase()?.includes(search?.toLowerCase()) ||
          user?.email?.toLowerCase()?.includes(search?.toLowerCase()) ||
          user?.role?.toLowerCase()?.includes(search?.toLowerCase())
        );
      })
    );
  },[search])
  useEffect(()=>setFilteredData(allUsers),[])

  return (
    <>
    <div className="w-full bg-[#F8F7F1] h-[85vh] px-3 py-2 rounded-md ">
      <div className="w-full h-[10vh] flex items-center justify-between"><SearchBar/><div className="text-xl font-semibold h-full flex justify-center items-center px-2">Users ({allUsers?.length})</div></div>
      <div className="w-full  h-[65vh] customScroller flex flex-col gap-2">
        {filteredData?.map((e,i)=>{
          return <UserCardForUserDataField key={i} data={e}/>
        })}
      </div>
      </div>
    </>
  );
}

export default UserDataField;
