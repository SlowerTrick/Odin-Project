import { Link } from "react-router-dom";
import styles from "../../styles/Home.module.css";

export default function Hero({ totalItemsCount = 0 }) {
    return (
        <section className={styles.heroSection}>
            <h1 className={styles.heroTitle}>
                Welcome to our <span className={styles.heroTitleAccent}>Online Store</span>
            </h1>
            <p className={styles.heroSubtitle}>
                Discover our curated collection of premium products at great prices. Simple,
                fast, and secure shopping for everyday essentials.
            </p>
            <div className={styles.heroActions}>
                <Link to="/shop" className={`btn btnPrimary ${styles.primaryCta}`}>
                    Shop Now
                </Link>
                <Link to="/cart" className={styles.secondaryCta}>
                    View Cart {totalItemsCount > 0 && `(${totalItemsCount})`}
                </Link>
            </div>
        </section>
    );
}
