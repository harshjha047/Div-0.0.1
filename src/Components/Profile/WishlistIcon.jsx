import React from "react";
import { GoHeartFill } from "react-icons/go";
import { useProfile } from "../../Contexts/ProfileContext";

function WishlistIcon({wish}) {
    const{removeWishlistData}=useProfile()
    console.log(wish);
    

  return (
    <button onClick={()=>{removeWishlistData(wish)}}
      class="absolute top-3 right-3 bg-white text-red-500 p-3 rounded-full shadow-lg 
                  opacity-0 -translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 
                  transition-all duration-300 hover:text-red-300"
    >
      <GoHeartFill />
    </button>
  );
}

export default WishlistIcon;
