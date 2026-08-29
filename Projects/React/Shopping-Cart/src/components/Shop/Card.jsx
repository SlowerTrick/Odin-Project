import styles from "../../styles/Shop.module.css";

export default function Card({ name, price, image }) {
    return (
        <div className={styles.cardContainer}>
            <img src={image} className={styles.image} alt={name} />
            <div className={styles.cardFooter}>
                <p className={styles.title}>{name}</p>
                <span className={styles.price}>${price}</span>
            </div>
        </div>
    );
}