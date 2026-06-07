import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import ProductsList from "./components/ProductsList";

const App = () => {
  return (
    <div>
      <h1>Products Cart</h1>

      {/* Routes */}
      <Routes>
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/products" element={<ProductsList />} />
      </Routes>
    </div>
  );
};

export default App;
