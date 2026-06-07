import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <div className="space-y-2">
      <h2>Cart Page</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border p-4 rounded"
          >
            <h3>{item.title}</h3>
            <p>₹ {item.price}</p>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              onClick={() => {
                removeFromCart(item.id);
              }}
            >
              {" "}
              Remove ❌
            </button>
            <button
              onClick={() => {
                navigate(-1);
              }}
              className=" bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
            >
              {" "}
              Go Back
            </button>{" "}
            <h2 className="text-xl font-bold ">Total: ₹ {total.toFixed(2)}</h2>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
