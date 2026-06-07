import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import ProductsList from "./components/ProductsList";
import { useCart } from "./context/CartContext";
import Cart from "./pages/Cart";

const App = () => {
  const { cart } = useCart();
  console.log(cart);

  return (
    <div>
      <h1>Products Cart</h1>
      <nav>
        <Link to={"/products"}>Products | {""}</Link>
        <Link to={"/cart"}>Cart Page</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
