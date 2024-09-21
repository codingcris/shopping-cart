import ShopItem from "../ShopItem/ShopItem";
import style from "./Shop.module.css";
import { useOutletContext } from "react-router-dom";

export default function Shop() {
  let { inventory, cart, setCart } = useOutletContext();

  function addToCart(item, quantity) {
    let currentQuantity = cart[item] || 0;
    setCart({ ...cart, [item]: currentQuantity + quantity });
  }

  return (
    <div className={style.itemGallery}>
      {inventory.map((item) => (
        <ShopItem {...item} key={item.id} addToCart={addToCart} />
      ))}
    </div>
  );
}
