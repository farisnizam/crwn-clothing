import { createContext, useState, useEffect } from "react";
import { addCollectionAndDocuments } from "../../utils/firebase/firebase.utils.js";

export const ProductsCotext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setCurrentProducts] = useState([]);
  const value = { products, setCurrentProducts };

  return (
    <ProductsCotext.Provider value={value}>{children}</ProductsCotext.Provider>
  );
};
