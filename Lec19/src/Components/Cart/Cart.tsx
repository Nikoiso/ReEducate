import styles from "./Cart.module.css";

interface CartProps {
  cart: any[];
  onRemove: (id: string) => void;
}

export default function Cart({ cart, onRemove }: CartProps) {
  return (
    <div className={styles.cartDropdown}>
      <div className={styles.cartHeader}>
        <h4>Cart</h4>
      </div>
      <div className={styles.cartContent}>
        {cart.length === 0 ? (
          <p className={styles.emptyMessage}>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <img src={item.image} alt={item.name} className={styles.thumb} />
                <div className={styles.itemDetails}>
                  <p className={styles.itemName}>{item.name}</p>
                  <p className={styles.itemPrice}>
                    ${item.price.toFixed(2)} x {item.quantity}{" "}
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </p>
                </div>
                <button className={styles.deleteBtn} onClick={() => onRemove(item.id)}>
                  X
                </button>
              </div>
            ))}
            <button className={styles.checkoutBtn}>Checkout</button>
          </>
        )}
      </div>
    </div>
  );
}