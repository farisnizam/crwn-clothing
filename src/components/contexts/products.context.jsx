import { createContext, useState } from "react";
import PRODUCTS from "../../shop-data.json";

export const ProductsCotext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setCurrentProducts] = useState(PRODUCTS);
  const value = { products, setCurrentProducts };

  return (
    <ProductsCotext.Provider value={value}>{children}</ProductsCotext.Provider>
  );
};
