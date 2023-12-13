import React from "react";

export const ProductCard = ({ item, cart, setCart }) => {
  function addToCart() {
    cart.find((statusCart) => statusCart.id == item.id)
      ? setCart([...cart])
      : setCart([...cart, item]);
  }
  return (
    <div>
      <h3 style={{ color: "blue" }}>{item.title}</h3>
      <p>{item.description}</p>
      <h4>{item.price}</h4>
      <button onClick={() => addToCart(item)}>
        {cart.find((productCart) => productCart.id == item.id) ? (
          <h5 style={{ color: "red", cursor: "pointer" }}>ALREADY ADDED</h5>
        ) : (
          <h5 style={{ cursor: "pointer" }}>ADD TO CART</h5>
        )}
      </button>
    </div>
  );
};
