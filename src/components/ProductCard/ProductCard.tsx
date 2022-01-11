import React from "react";
import { IProduct } from "../../types";

import { StyledProductCard } from "./ProductCard.styles";

interface IProductCard {
  product: IProduct;
  added: boolean;
  addToComparison: () => void;
  removeFromComparison: () => void;
}

const ProductCard: React.FC<IProductCard> = ({
  product,
  addToComparison,
  removeFromComparison,
  added,
}) => {
  const { name, description, price, currency, profit } = product;

  return (
    <StyledProductCard>
      <div>{name}</div>
      <div>{description}</div>
      <div>{price}</div>
      <div>{currency}</div>
      <div>{profit}</div>
      {added ? (
        <button onClick={removeFromComparison}>Убрать из сравнения</button>
      ) : (
        <button onClick={addToComparison}>Добавить к сравнению</button>
      )}
    </StyledProductCard>
  );
};

export default ProductCard;
