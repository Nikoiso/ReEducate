import { useState } from "react";
import ProductCard from "./Components/ProductCard";
import { products } from "./Products";
import "./App.css";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };
  return (
    <div className="app">
      <h1>Kalata: {cartCount} Nivti</h1>

      <div className="products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
