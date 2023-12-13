import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/products">
        <button>Products</button>
      </Link>
      <Link to="/cart">
        <button>Cart</button>
      </Link>
    </div>
  );
};
