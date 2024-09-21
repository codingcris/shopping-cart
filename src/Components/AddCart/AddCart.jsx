import styles from "./AddCart.module.css";
import { useState } from "react";

export default function AddCart({ item, addToCart }) {
  let [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (event) => {
    const value = event.target.value;
    // Update the quantity state with the new value
    if (!isNaN(value) && Number(value) >= 0) {
      setQuantity(value);
    }
  };

  function decreaseQuantitiy(event) {
    let q = quantity;
    if (quantity > 0) setQuantity(q - 1);
  }

  function increaseQuantity(event) {
    setQuantity(quantity + 1);
  }

  return (
    <div className={styles.widget}>
      <div className={styles.quantity}>
        <button onClick={decreaseQuantitiy}>-</button>
        <input type="text" value={quantity} onChange={handleQuantityChange} />
        <button onClick={increaseQuantity}>+</button>
      </div>
      <button
        className={styles.addCartBttn}
        onClick={() => addToCart(item, quantity)}
      >
        Add Cart
      </button>
    </div>
  );
}
