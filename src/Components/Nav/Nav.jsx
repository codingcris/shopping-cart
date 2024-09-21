import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
export default function Nav({ cart, setDrawerOpen }) {
  function getQuantity() {
    let quantity = 0;

    for (let item in cart) {
      quantity += cart[item];
    }

    return quantity;
  }

  function openCartDrawer() {
    setDrawerOpen(true);
  }

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to={"/"}>
            <h1>Cris' Picks</h1>
          </Link>
        </li>
        <li>
          <Link to="shop">Shop</Link>
        </li>
        <li className={styles.cart} onClick={openCartDrawer}>
          <span className={styles.materialSymbolsOutlined}>shopping_cart</span>
          <span className={styles.cartCounter}>{getQuantity()}</span>
        </li>
      </ul>
    </nav>
  );
}
