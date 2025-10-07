import React, { createContext, useContext, useState } from "react";
import products from "../media/ProductApi";

const ShopContext = createContext();

export const ShopApi = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [data, setdata] = useState(products.All);

  const addToCart = (e) => {
    console.log(e);

    setCart((Prev) => {
      const exist = Prev.find((i) => i.productId === e.productId);
      if (exist) {
        // product already exists → increase quantity

        return Prev.map((item) =>
          item.productId === e.productId
            ? {
                ...item,
                quantity: item.quantity + 1,
                cost: (item.quantity + 1) * item.productPrice,
              }
            : item
        );
      }

      return [...Prev, { ...e, quantity: 1, cost: e.productPrice }];
    });
  };

 const RemoveFromCart = (product) => {
  setCart((prevCart) => {
    const existing = prevCart.find((item) => item.productId === product.productId);
    if (!existing) return prevCart; // nothing to remove

    if (existing.quantity === 1) {
      return prevCart.filter((item) => item.productId !== product.productId);
    } // if quantity = 1 → remove item entirely
     //
    // otherwise decrease quantity
    return prevCart.map((item) =>
      item.productId === product.productId
        ? {
            ...item,
            quantity: item.quantity - 1,
            cost: (item.quantity - 1) * item.productPrice, // recalc cost
          }
        : item
    );
  });
};

const totalPrice = cart.reduce(
    (acc, item) => acc + item.quantity * item.productPrice,
    0
  );

  console.log(cart);


  return (
    <ShopContext.Provider value={{ data, cart,setCart, addToCart, RemoveFromCart,totalPrice }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => useContext(ShopContext);
