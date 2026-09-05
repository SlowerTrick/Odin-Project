import styles from "../../styles/Cart.module.css";

export default function OrderSummary({ totalItemsCount, cartTotalPrice, onCheckout }) {
    return (
        <div className={styles.summaryColumn}>
            <div className={styles.summaryCard}>
                <h2 className={styles.summaryTitle}>Order Summary</h2>

                <div className={styles.breakdownList}>
                    <div className={styles.breakdownRow}>
                        <span>Total Items</span>
                        <span>{totalItemsCount}</span>
                    </div>
                    <div className={styles.breakdownRow}>
                        <span>Subtotal</span>
                        <span>${cartTotalPrice.toFixed(2)}</span>
                    </div>

                    <div className={styles.divider}></div>

                    <div className={styles.totalRow}>
                        <span>Total</span>
                        <span className={styles.finalPrice}>
                            ${cartTotalPrice.toFixed(2)}
                        </span>
                    </div>
                </div>

                <button
                    type="button"
                    onClick={onCheckout}
                    className={`btn btnPrimary ${styles.checkoutBtn}`}
                >
                    Checkout
                </button>
            </div>
        </div>
    );
}
