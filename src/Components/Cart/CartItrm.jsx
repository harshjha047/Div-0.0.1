import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useShop } from "../../Contexts/ShopContext";

function CartItrm() {
  let { cart, setCart, addToCart, RemoveFromCart } =useShop();
  console.log(cart);
  
  return (
    //   {/* <!-- Cart Items --> */}

    <div className="lg:w-full">
      {/* <!-- Cart Item --> */}
      {cart?.map((e,i) => {
        return (
          
            <div key={i} className="bg-gray-800 rounded-lg p-6 mb-6">
              <div className="flex flex-col md:flex-row gap-4">
                <img
                  src={e?.images?.[0]?.url }
                  alt={e?.images?.[0]?.alt || e?.productName}
                  className="w-full md:w-32 h-32 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {e.productName}
                  </h3>
                  <p className="text-gray-400 mb-2">
                    Size: {e.productSize} | Color: {e.productColor}
                  </p>
                  <p className="text-lg font-semibold text-gray-300">₹{e.cost}</p>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <button onClick={()=>setCart(()=>cart.filter((item) => item.productId !== e.productId))} className="text-red-500 hover:text-red-400 mb-4">
                    <AiOutlineDelete />
                  </button>
                  <div className="flex items-center bg-gray-700 rounded-lg">
                    <button onClick={()=>RemoveFromCart(e)} className="px-3 py-1 text-white hover:bg-gray-600 rounded-l-lg">
                      -
                    </button>
                    <span className="px-4 py-1 text-white">{e.quantity}</span>
                    <button onClick={()=>addToCart(e)} className="px-3 py-1 text-white hover:bg-gray-600 rounded-r-lg">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          
        );
      })}


    </div>
  );
}

export default CartItrm;
