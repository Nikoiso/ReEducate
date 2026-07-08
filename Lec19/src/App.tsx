import { useState } from "react";
import Header from './Components/Header/Header';
import ProductGallery from './Components/Product Gallery/ProductGallery';
import ProductInfo from './Components/Product Info/ProductInfo';

export default function App() {
  const [cart, setCart] = useState<any[]>([]);

  const product = {
    id: "fall-limited-sneakers",
    name: "Fall Limited Edition Sneakers",
    price: 125.00,
    image: "/Photos/Rectangle.png"
  };

  const addToCart = (quantity: number) => {
    if (quantity <= 0) return;
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto", background: "#f9f9f9" }}>
      
      <Header cart={cart} onRemove={removeFromCart} />
      
      <div style={{ display: "flex", gap: "50px", marginTop: "50px" }}>
        <ProductGallery />
        <ProductInfo onAddToCart={addToCart} />
      </div>
    </div>
  );
}