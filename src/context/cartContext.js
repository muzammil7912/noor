import React from "react";
import { useState } from "react";

export const CartContext = React.createContext();

function CartContextProvider(props) {
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={{ cartValue: [cart, setCart] }}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
