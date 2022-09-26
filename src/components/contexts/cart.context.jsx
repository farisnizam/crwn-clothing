import { createContext, useState } from "react";

export const CartContext = createContext({
  cartStatus: false,
  setCartStatus: () => false,
});

export const CartProvider = ({ children }) => {
  const [cartStatus, setCartStatus] = useState(false);
  const value = { cartStatus, setCartStatus };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
