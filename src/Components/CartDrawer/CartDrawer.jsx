import styles from "./CartDrawer.module.css";

export default function CartDrawer({ closeDrawer }) {
  return (
    <div className={styles.drawer}>
      <h1>In Your Cart</h1>
      <button className={styles.closeBttn} onClick={() => closeDrawer(false)}>
        X
      </button>
      <div className={styles.cartItems}></div>
    </div>
  );
}
