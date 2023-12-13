import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Cart } from "./pages/Cart";
import { Navbar } from "./components/Navbar";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<Products cart={cart} setCart={setCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
