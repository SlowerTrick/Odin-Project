import styles from "../../styles/Shop.module.css";

export default function ModalPurchase({
    quantity,
    maxPurchase,
    onChangeQuantity,
    onAddToCart,
    onBlur,
}) {
    const subDisabled = quantity <= 1;
    const addDisabled = quantity >= maxPurchase || quantity === "";

    return (
        <div className={styles.modalPurchase}>
            <div className={styles.modalQuantity}>
                <button
                    type="button"
                    className={styles.modalButton}
                    disabled={subDisabled}
                    onClick={() => onChangeQuantity(quantity - 1)}
                >
                    -
                </button>

                <input
                    type="number"
                    max={maxPurchase}
                    min={1}
                    aria-label="Modal quantity"
                    className={styles.modalInput}
                    value={quantity}
                    onChange={(e) => onChangeQuantity(e.target.value)}
                    onBlur={onBlur}
                />

                <button
                    type="button"
                    className={styles.modalButton}
                    disabled={addDisabled}
                    onClick={() => onChangeQuantity(quantity + 1)}
                >
                    +
                </button>
            </div>

            <button
                type="button"
                onClick={onAddToCart}
                className={`btn ${styles.modalAddToCart}`}
            >
                Add to cart
            </button>
        </div>
    );
}
