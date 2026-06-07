import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <div>
      <h2>Cart Page</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>₹ {item.price}</p>
            <button
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
            >
              {" "}
              Go Back
            </button>{" "}
            <br />
            <h3>Total: ₹ {total.toFixed(2)}</h3>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
