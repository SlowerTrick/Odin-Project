import { Link } from "react-router-dom";
import styles from "../../styles/Cart.module.css";

export default function EmptyCart() {
    return (
        <div className={styles.emptyCartContainer}>
            <div className={styles.emptyIconCircle}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    height="52"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="8" cy="21" r="1"></circle>
                    <circle cx="19" cy="21" r="1"></circle>
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                </svg>
            </div>
            <h2 className={styles.emptyTitle}>Your cart is empty</h2>
            <p className={styles.emptySubtitle}>
                Looks like you haven't added any products to your cart yet.
            </p>
            <div className={styles.emptyActions}>
                <Link to="/shop" className="btn btnPrimary">
                    Explore Products
                </Link>
            </div>
        </div>
    );
}
