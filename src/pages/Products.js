import React from "react";
import { ProductCard } from "../components/ProductCard";

export const Products = ({ cart, setCart }) => {
  const monitor = {
    id: 1,
    title: "monitor",
    description: "full hd monitor",
    price: 2140,
    cartCount: 0,
  };
  const mouse = {
    id: 2,
    title: "mouse",
    description: "gaming mouse",
    price: 270,
    cartCount: 0,
  };
  const keyboard = {
    id: 3,
    title: "keyboard",
    description: "mechanical keyboard",
    price: 1610,
    cartCount: 0,
  };
  const items = [monitor, mouse, keyboard];

  return (
    <div style={{ marginTop: "80px" }}>
      {items.map((item) => {
        return <ProductCard item={item} cart={cart} setCart={setCart} />;
      })}
    </div>
  );
};
