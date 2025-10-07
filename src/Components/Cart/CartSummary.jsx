import React, { useState } from 'react'
import { useShop } from '../../Contexts/ShopContext';

function CartSummary() {
      let {cart,totalPrice } = useShop();

  return (<>
         {/* <!-- Order Summary --> */}
      <div className="lg:w-1/3 mt-8 lg:mt-0">
        <div className="bg-gray-800 rounded-lg p-6 sticky top-4">
          <h3 className="text-xl font-bold text-white mb-6">Order Summary</h3>
          
          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-gray-300">
              <span>Subtotal ({cart.length} items)</span>
              <span>₹{totalPrice}</span>
            </div>
            <div className="flex justify-between text-gray-300">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between text-gray-300">
              <span>Tax</span>
              <span>₹{0.05*totalPrice}</span>
            </div>
            <hr className="border-gray-600"/>
            <div className="flex justify-between text-xl font-bold text-white">
              <span>Total</span>
              <span>₹{totalPrice+(0.05*totalPrice)}</span>
            </div>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 mb-4">
            <a href="checkout.html" className="block">Proceed to Checkout</a>
          </button>

          {/* <!-- Payment Methods --> */}
          {/* <div className="text-center text-sm text-gray-400">
            <p className="mb-2">We Accept:</p>
            <div className="flex justify-center space-x-2">
              <div className="bg-gray-700 px-2 py-1 rounded text-xs">VISA</div>
              <div className="bg-gray-700 px-2 py-1 rounded text-xs">MC</div>
              <div className="bg-gray-700 px-2 py-1 rounded text-xs">UPI</div>
            </div>
          </div> */}
        </div>
      </div>
      
      </>
  )
}

export default CartSummary