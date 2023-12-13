import React from "react";
import { CartStatus } from "../components/CartStatus";

export const Cart = ({ cart, setCart }) => {
  return (
    <div>
      {cart.length == 0 ? (
        <h1>Your Cart is Empty</h1>
      ) : (
        cart.map((cartItems) => (
          <CartStatus cart={cart} cartItems={cartItems} setCart={setCart} />
        ))
      )}
    </div>
  );
};
