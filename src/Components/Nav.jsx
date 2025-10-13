import Logo from "./Logo.jsx";
import Icon from "./Icon.jsx";
import Navigator from "./Navigator.jsx";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { IoIosSearch, IoMdClose } from "react-icons/io";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useShop } from "../Contexts/ShopContext.jsx";
import { useProfile } from "../Contexts/ProfileContext.jsx";
import { CiLogin } from "react-icons/ci";

function Nav() {
  let { cart } = useShop();
  const { getProfileData} = useProfile();

  // console.log(cart);
  
  let [searchBar, setSearchBar] = useState(false);
  return (
    <div className=" fixed shadow-lg bg-[#141D2D] h-[14vh] w-full  top-0 flex justify-center z-50 text-white">
      <div className="w-[90%] hidden justify-between sm:flex lg:flex ">
        <div className=" h-full flex items-center justify-end">
        <NavLink to={"/"}><Logo /></NavLink>
        </div>
        <div className=" h-full flex items-center justify-center text-[#ffffffad]">
          <Navigator />
        </div>
        {searchBar && (
          <div className="text-black h-full flex items-center">
            <input
              list="search"
              name="search"
              id="searchBar"
              className="bg-[#FFF] border-none p-2 rounded-full pl-4 focus:border-none focus:outline-none outline-none"
              placeholder="Search"
            />
            <datalist id="search" placeholder="Search">
              <option value="Chocolate"></option>
              <option value="Coconut"></option>
              <option value="Mint"></option>
              <option value="Strawberry"></option>
              <option value="Vanilla"></option>
            </datalist>
          </div>
        )}
        <div className=" h-full flex items-center gap-3">
          <div
            onClick={() => {
              setSearchBar(!searchBar);
            }}
            className=""
          >
            <Icon>{searchBar ? <IoMdClose /> : <IoIosSearch />}</Icon>
          </div>
        <NavLink to={"/cart"}><Icon>
            <IoCartOutline />
            {cart?.length > 0 && (
              <div className=" absolute h-3 w-3 text-[8px] font-semibold rounded-full top-1 bg-green-600 right-1 flex justify-center items-center ">
                {cart?.length}
              </div>
             )} 
          </Icon></NavLink>  
          <Icon>{getProfileData?<NavLink to={"/profile/info"}> <HiOutlineUserCircle /></NavLink>:<NavLink to={"/auth"}> <CiLogin /></NavLink>}
           
          </Icon>
        </div>
      </div>
    </div>
  );
}

export default Nav;
