import React from "react";
import { IAdditionalFilters, IProduct } from "../../types";
import ProductList from "../ProductList/ProductList";
import Header from "../Header/Header";
import ComparisonTable from "../ComparisonTable/ComparisonTable";
import { Routes, Route, Link, Navigate } from "react-router-dom";

interface IProductComparison {
  filters: string[];
  products: IProduct[];
  addFilters: IAdditionalFilters;
}

const ProductComparison: React.FC<IProductComparison> = (props) => {
  const { addFilters, products, filters } = props;
  const [selectedItems, setSelectedItems] = React.useState(new Set());
  const [selectedFilters, setSelectedFilters] = React.useState(
    new Set(filters)
  );
  const [
    additionalFilters,
    setAdditionalFilters,
  ] = React.useState<IAdditionalFilters>(addFilters);

  const addToComparison = React.useMemo(
    () => (product: IProduct) => {
      console.log("product added", product);
      setSelectedItems((prevState) => {
        return new Set(prevState.add(product));
      });
      console.log(selectedItems);
    },
    [selectedItems]
  );

  const removeFromComparison = React.useMemo(
    () => (product: IProduct) => {
      console.log("product removed", product);
      const selected = selectedItems;
      selected.delete(product);
      setSelectedItems(new Set(selected));
      console.log(selectedItems);
    },
    [selectedItems]
  );

  const saveFilters = React.useMemo(
    () => (filters: string[]) => {
      const selectedFilters = new Set(filters);
      setSelectedFilters(new Set(selectedFilters));
      console.log(selectedFilters);
    },
    [selectedFilters]
  );

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header
                title="Добавьте к сравнению не менее 2-х продуктов"
                filters={filters}
                saveFilters={saveFilters}
              />
              <Link to="/comparison">К таблице сравнения</Link>
              <ProductList
                products={products}
                addToComparison={addToComparison}
                removeFromComparison={removeFromComparison}
                selectedItems={Array.from(selectedItems) as IProduct[]}
              />
            </>
          }
        ></Route>

        {
          <Route
            path="comparison"
            element={
              selectedItems && selectedItems.size >= 2 ? (
                <ComparisonTable
                  removeFromComparison={removeFromComparison}
                  selectedItems={Array.from(selectedItems) as IProduct[]}
                  selectedFilters={Array.from(selectedFilters)}
                />
              ) : (
                <Navigate to="/" />
              )
            }
          ></Route>
        }
      </Routes>
    </div>
  );
};

export default ProductComparison;
