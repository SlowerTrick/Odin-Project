import { Link } from "react-router-dom";
import styles from "../../styles/Cart.module.css";

export default function OrderSuccess({ onContinueShopping }) {
    return (
        <div className={styles.emptyCartContainer}>
            <div className={styles.successIconCircle}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    height="52"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
            </div>
            <h2 className={styles.emptyTitle}>Order Placed Successfully!</h2>
            <p className={styles.emptySubtitle}>
                Thank you for your purchase. Your order has been processed.
            </p>
            <div className={styles.emptyActions}>
                <Link
                    to="/shop"
                    className="btn btnPrimary"
                    onClick={onContinueShopping}
                >
                    Continue Shopping
                </Link>
                <Link
                    to="/"
                    className="btn btnSecondary"
                    onClick={onContinueShopping}
                >
                    Go to Home
                </Link>
            </div>
        </div>
    );
}
