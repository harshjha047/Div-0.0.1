import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import ProductCardForUserDataField from "./ProductCardForUserDataField";
import { useShop } from "../../Contexts/ShopContext";
import { useAdmin } from "../../Contexts/AdminContext";
import { Link } from "react-router-dom";

function ProductDataField() {
  const { data } = useShop();
  const {search,setSearch}=useAdmin()
  
  let [filteredData, setFilteredData] = useState(data);

  useEffect(()=>setFilteredData(data),[data])
   useEffect(()=>{
          setFilteredData(
      data?.filter((user) => {
        return (
          user?.name?.toLowerCase()?.includes(search?.toLowerCase()) ||
          user?.description?.toLowerCase()?.includes(search?.toLowerCase()) ||
          user?.category?.toLowerCase()?.includes(search?.toLowerCase()) ||
          user?.brand?.toLowerCase()?.includes(search?.toLowerCase())
        );
      })
    );
  },[search])
  useEffect(()=>setFilteredData(data),[])

  return (
    <>
    <div className="w-full bg-[#F8F7F1] h-[85vh] px-3 py-2 rounded-md ">
      <div className="w-full h-[10vh] flex items-center justify-between"><SearchBar/><div className="text-xl font-semibold h-full flex justify-center items-center px-2">Products ({data?.length}) <Link to={`/admin/products/edit`} className="py-1 px-2 border rounded bg-white">Create New</Link></div></div>
      <div className="w-full  h-[65vh] customScroller flex flex-col gap-2">
        {filteredData?.map((e,i)=>{
          return <ProductCardForUserDataField key={i} avshasa={e}/>
        })}
      </div>
      </div>
    </>
  );
}

export default ProductDataField;
