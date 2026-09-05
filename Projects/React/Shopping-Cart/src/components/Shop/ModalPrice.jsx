import styles from "../../styles/Shop.module.css";

export default function ModalPrice({ price, buyers }) {
    const discounted = (Math.trunc(price * 1.5)).toFixed(2);

    return (
        <div className={styles.priceContainer}>
            <p className={styles.modalPrice}>${Number(price).toFixed(2)}</p>
            <p className={styles.modalDiscount}>${discounted}</p>
            {buyers !== undefined && (
                <p className={styles.modalBuyers}>{buyers} Sales</p>
            )}
        </div>
    );
}
