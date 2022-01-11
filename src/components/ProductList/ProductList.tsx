import React from "react";
import { IProduct } from "../../types";
import ProductCard from "../ProductCard/ProductCard";
import { StyledProductList } from "./ProductList.styles";

interface IProductList {
  products: IProduct[];
  selectedItems: IProduct[];
  addToComparison: (product: IProduct) => void;
  removeFromComparison: (product: IProduct) => void;
}

const ProductList: React.FC<IProductList> = ({
  products,
  addToComparison,
  removeFromComparison,
  selectedItems,
}) => {
  return (
    <StyledProductList>
      {products.map((product) => {
        return selectedItems.find((item) => item.id === product.id) !==
          undefined ? (
          <ProductCard
            key={product.id}
            product={product}
            added={true}
            addToComparison={() => addToComparison(product)}
            removeFromComparison={() => removeFromComparison(product)}
          />
        ) : (
          <ProductCard
            key={product.id}
            product={product}
            added={false}
            addToComparison={() => addToComparison(product)}
            removeFromComparison={() => removeFromComparison(product)}
          />
        );
      })}
    </StyledProductList>
  );
};

export default ProductList;
