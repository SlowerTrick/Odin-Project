import styles from "../../styles/Shop.module.css";

export default function CardFooter({ name, price }) {
    return (
        <div className={styles.cardFooter}>
            <p className={styles.title}>{name}</p>
            <span className={styles.price}>${Number(price).toFixed(2)}</span>
        </div>
    );
}
