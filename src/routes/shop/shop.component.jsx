import { useContext } from "react";
import { ProductsCotext } from "../../components/contexts/products.context";

const Shop = () => {
  const { products } = useContext(ProductsCotext);
  console.log(products);
  return (
    <div>
      {products.map(({ id, name }) => (
        <div key={id}>
          <h1>{name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Shop;
