import { useState } from "react";
import styles from "./ProductInfo.module.css";

interface ProductInfoProps {
  onAddToCart: (quantity: number) => void;
}

export default function ProductInfo({ onAddToCart }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(0);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <div className={styles.infoContainer}>
      <span className={styles.company}>Sneaker Company</span>
      <h1 className={styles.title}>Fall Limited Edition Sneakers</h1>
      <p className={styles.description}>
        These low-profile sneakers are your perfect casual wear companion. Featuring a
        durable rubber outer sole, they’ll withstand everything the weather can offer.
      </p>

      <div className={styles.priceSection}>
        <div className={styles.currentPriceRow}>
          <span className={styles.price}>$125.00</span>
          <span className={styles.discount}>50%</span>
        </div>
        <span className={styles.oldPrice}>$250.00</span>
      </div>

      <div className={styles.actionsRow}>
        <div className={styles.counter}>
          <button onClick={decrement}>-</button>
          <span>{quantity}</span>
          <button onClick={increment}>+</button>
        </div>

        <button className={styles.addBtn} onClick={() => { onAddToCart(quantity); setQuantity(0); }}>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
}