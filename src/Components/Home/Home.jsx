import styles from "./Home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <p className={styles.heroText}>
          <em>Curated</em> products from yours truly:{" "}
          <strong>Cristian Reyes</strong>.
        </p>
        <p className={styles.heroText}>
          Who am I? Just a <em>web dev</em> with a <em>passion</em> for{" "}
          <em>quality</em>.
        </p>
        <p className={styles.heroText}>
          Find your next <em>purchase</em> among my current favorite products.
        </p>
        <Link to="/shop">
          <button>
            <strong>Explore Products</strong>
          </button>
        </Link>
      </section>
      <section className={styles.collections}>
        <h1>Collections</h1>
        <div className={styles.categoriesContainer}>
          <div className={styles.card}>
            <img
              src="src/assets/images/tshirt.webp"
              alt="Wearables"
              className={styles.cardImage}
            />
            <h3 className={styles.cardTitle}>Wearables</h3>
          </div>
          <div className={styles.card}>
            <img
              src="src/assets/images/personalcare.webp"
              alt="Personal Care"
              className={styles.cardImage}
            />
            <h3 className={styles.cardTitle}>Personal Care</h3>
          </div>
          <div className={styles.card}>
            <img
              src="src/assets/images/electronics.webp"
              alt="Electronics"
              className={styles.cardImage}
            />
            <h3 className={styles.cardTitle}>Electronics</h3>
          </div>
        </div>
      </section>
    </>
  );
}
