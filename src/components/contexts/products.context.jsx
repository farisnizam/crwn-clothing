import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils.js";

export const ProductsCotext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setCurrentProducts] = useState([]);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
    };

    getCategoriesMap();
  }, []);
  const value = { products, setCurrentProducts };

  return (
    <ProductsCotext.Provider value={value}>{children}</ProductsCotext.Provider>
  );
};
