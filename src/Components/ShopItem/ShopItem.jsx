import styles from "./ShopItem.module.css";
import AddCart from "../AddCart/AddCart";

export default function ShopItem({
  id,
  name,
  description,
  price,
  imageUrl,
  inStock,
  variants,
  addToCart,
}) {
  return (
    <div className={styles.itemDisplay}>
      <img src={imageUrl} alt={name} />
      <p>{name}</p>
      <p>{formatPrice(price)}</p>
      <p>{description}</p>
      <AddCart item={id} addToCart={addToCart}></AddCart>
    </div>
  );
}

function formatPrice(price) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}
