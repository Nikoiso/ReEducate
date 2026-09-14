import { useState } from "react";
import Cart from "../Cart/Cart";
import styles from "./Header.module.css";

interface HeaderProps {
  cart: any[];
  onRemove: (id: string) => void;
}

export default function Header({ cart, onRemove }: HeaderProps) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className={styles.header}>
      <div className={styles.navLeft}>
        <span className={styles.logoText}>sneakers</span>
        <nav className={styles.navLinks}>
          <a href="#">Collections</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </div>

      <div className={styles.navRight}>
        <button className={styles.cartBtn} onClick={() => setIsCartOpen(!isCartOpen)}>
          <img src="/Photos/Shape.png" alt="Cart" />
          {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
        </button>
        <img src="/Photos/Oval.png" className={styles.avatar} alt="Avatar" />
      </div>

      {isCartOpen && <Cart cart={cart} onRemove={onRemove} />}
    </header>
  );
}