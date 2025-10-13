import React from 'react'
import { GoHeartFill } from "react-icons/go";
import { Link } from 'react-router-dom';
import WishlistIcon from './WishlistIcon';
import { useShop } from '../../Contexts/ShopContext';
import { useProfile } from '../../Contexts/ProfileContext';


function WishlistItem({wishId}) {
    const{data}=useShop()
    const [product] = data?.filter((e)=>e?._id===wishId)


    
  return (
    <div class="bg-gray-700 rounded-lg p-4 relative group">
        
              <WishlistIcon wish={wishId}/>
              <img
                src={product?.images[0]?.url}
                alt={product?.images[0]?.alt}
                class="w-full h-32 object-cover rounded-lg mb-3"
              />
              <Link to={`/product/Item/${wishId}`} className='border border-[#00000013] rounded-lg justify-center items-center w-full flex flex-col shadow-lg'>
              <h4 class="text-white font-medium text-sm m-1">
                {product?.name}
              </h4>
              <p class="text-orange-400 font-bold m-1">₹{product?.new_price}</p>
              </Link>
            </div>
  )
}

export default WishlistItem