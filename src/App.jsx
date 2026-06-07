import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import ProductsList from "./components/ProductsList";
import { useCart } from "./context/CartContext";
import Cart from "./pages/Cart";

const App = () => {
  function Home() {
    return (
      <h2 className="font-bold text-2xl text-center"> This is Home Page</h2>
    );
  }
  const { cart } = useCart();
  console.log(cart);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        E-Commerce Store 🛒
      </h1>

      <nav className="flex justify-center gap-6 mb-6">
        <Link className="text-blue-500 hover:underline" to="/">
          Home
        </Link>

        <Link className="text-blue-500 hover:underline" to="/products">
          Products
        </Link>

        <Link className="text-blue-500 hover:underline" to="/cart">
          Cart 🛒
        </Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
