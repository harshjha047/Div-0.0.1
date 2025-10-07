import React from "react";
import CartItrm from "./CartItrm";
import CartSummary from "./CartSummary.jsx";
import { FaChevronLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
 

function Cart() {
  return (
    <div className="w-full">
      <section className="text-center py-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Shopping Cart
        </h2>
        <p className="text-xl text-gray-300">Review your selected items</p>
      </section>

      {/* <!-- Cart Content --> */}
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="lg:flex lg:gap-8">
          {/* <!-- Cart Items --> */}
          <div className="lg:w-2/3">
            {/* <!-- Cart Item --> */}
            <CartItrm/>

            {/* <!-- Continue Shopping --> */}
            <div className="text-center">
              <Link to={"/product"}
                className="inline-flex items-center text-blue-500 hover:text-blue-400"
              >
                <FaChevronLeft />
                Continue Shopping
              </Link>
            </div>
          </div>

          <CartSummary />
        </div>
      </div>
    </div>
  );
}

export default Cart;
