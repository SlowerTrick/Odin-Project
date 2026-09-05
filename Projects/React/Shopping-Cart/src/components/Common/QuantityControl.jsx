import styles from "../../styles/Cart.module.css";

export default function QuantityControl({
    quantity,
    onIncrease,
    onDecrease,
    onChange,
    min = 1,
    max = 99,
    ariaLabel = "Product quantity",
    disabled = false,
}) {
    function handleInputChange(e) {
        const val = e.target.value;
        if (val === "") return;
        const num = parseInt(val, 10);
        if (!isNaN(num) && num > 0) {
            onChange(Math.min(num, max));
        }
    }

    return (
        <div className={styles.quantityControl}>
            <button
                type="button"
                aria-label="Decrease quantity"
                className={styles.quantityBtn}
                onClick={onDecrease}
                disabled={disabled || quantity <= min}
            >
                -
            </button>
            <input
                type="number"
                min={min}
                max={max}
                aria-label={ariaLabel}
                className={styles.quantityInput}
                value={quantity}
                onChange={handleInputChange}
                disabled={disabled}
            />
            <button
                type="button"
                aria-label="Increase quantity"
                className={styles.quantityBtn}
                onClick={onIncrease}
                disabled={disabled || quantity >= max}
            >
                +
            </button>
        </div>
    );
}
