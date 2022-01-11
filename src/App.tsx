import React from "react";
import "./App.css";
import ProductComparison from "./components/ProdcutComparsion/ProductComparison";
import { BrowserRouter as Router } from "react-router-dom";
import { filters, additionalFilters } from "./types";
import { products } from "./mock";

function App() {
  return (
    <Router>
      <div className="App">
        <ProductComparison
          filters={filters}
          products={products}
          addFilters={additionalFilters}
        />
      </div>
    </Router>
  );
}

export default App;
