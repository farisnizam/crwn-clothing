import { useContext } from "react";
import { Fragment } from "react/cjs/react.production.min";
import CategoryItem from "../../components/category-item/category-item.component";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { CategoriesCotext } from "../../components/contexts/categories.context";
import "./shop.styles.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesCotext);
  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default Shop;
