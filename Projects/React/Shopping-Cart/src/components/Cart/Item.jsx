import styles from "../../styles/Cart.module.css";
import QuantityControl from "../Common/QuantityControl";

export default function Item({
    id,
    name,
    price,
    image,
    quantity,
    category,
    onUpdateQuantity,
    onRemove,
}) {
    const itemSubtotal = (price * quantity).toFixed(2);

    return (
        <div className={styles.itemContainer}>
            <div className={styles.imageContainer}>
                <img src={image} className={styles.itemImage} alt={name} />
            </div>

            <div className={styles.itemContent}>
                <div className={styles.itemHeader}>
                    <span className={styles.itemCategory}>{category}</span>
                    <h3 className={styles.itemTitle}>{name}</h3>
                </div>

                <div className={styles.pricePerUnit}>
                    <span className={styles.unitLabel}>Price:</span>
                    <span className={styles.unitPrice}>${Number(price).toFixed(2)}</span>
                </div>
            </div>

            <div className={styles.itemActions}>
                <QuantityControl
                    quantity={quantity}
                    ariaLabel={`Quantity for ${name}`}
                    onIncrease={() => onUpdateQuantity(id, quantity + 1)}
                    onDecrease={() => onUpdateQuantity(id, quantity - 1)}
                    onChange={(newQty) => onUpdateQuantity(id, newQty)}
                />

                <div className={styles.subtotalBlock}>
                    <span className={styles.subtotalLabel}>Total:</span>
                    <span className={styles.itemSubtotal}>${itemSubtotal}</span>
                </div>

                <button
                    type="button"
                    aria-label={`Remove ${name} from cart`}
                    className={styles.removeBtn}
                    onClick={() => onRemove(id)}
                    title="Remove item"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
                </button>
            </div>
        </div>
    );
}
