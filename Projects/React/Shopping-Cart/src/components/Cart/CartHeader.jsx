import styles from "../../styles/Cart.module.css";

export default function CartHeader({ totalItemsCount, onClearCart }) {
    return (
        <div className={styles.headerRow}>
            <div>
                <h1 className={styles.cartHeading}>Shopping Cart</h1>
                <p className={styles.cartSubheading}>
                    {totalItemsCount} {totalItemsCount === 1 ? "item" : "items"} in total
                </p>
            </div>

            <button
                type="button"
                onClick={onClearCart}
                className={styles.clearCartBtn}
            >
                Clear Cart
            </button>
        </div>
    );
}
