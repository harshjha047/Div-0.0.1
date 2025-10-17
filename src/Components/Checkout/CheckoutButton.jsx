import axios from "axios";
import { useCheckout } from "../../Contexts/PreLoaderContext";
import { useShop } from "../../Contexts/ShopContext";

const CheckoutButton = ({ cartItems }) => {
  const { createCheckoutSession } = useCheckout();
  const { cart } = useShop();
  const handleCheckout = async () => {
    createCheckoutSession(cart);
  };

  return (
    <button
      className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 mb-4"
      onClick={handleCheckout}
    >
      Proceed to Checkout
    </button>
  );
};

export default CheckoutButton;
