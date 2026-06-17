import React, { useState } from 'react'


export default function ProductCard({product, onAddToCart}) {

    const [cartCount, setCartCount] = useState(0)
    
    return (
        <div
        className={`product-card ${
          product.category === "Electronics" ? "electronics" : ""
        }`}
      >
        <h2>{product.title}</h2>
        <p>Fasi: {product.price}</p>
        <p>Kategoria: {product.category}</p>
  
        <button onClick={onAddToCart}>Add to Cart</button>
      </div>
  )
}
