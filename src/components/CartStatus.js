import React from "react";

export const CartStatus = ({ cart, setCart, cartItems }) => {
  function removeFromCart(id) {
    setCart(cart.filter((itemLeft) => itemLeft.id != id));
  }

  return (
    <div>
      <h3 style={{ color: "blue" }}>{cartItems.title}</h3>
      <p>{cartItems.description}</p>
      <h4>{cartItems.price}</h4>
      <button onClick={() => removeFromCart(cartItems.id)}>
        <h5 style={{ color: "red", cursor: "pointer" }}>REMOVE ITEM</h5>
      </button>
    </div>
  );
};
