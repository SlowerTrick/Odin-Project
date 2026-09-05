import styles from "../../styles/Shop.module.css";
import CardFooter from "./CardFooter";

export default function Card({ name, price, image }) {
    return (
        <div className={styles.cardContainer}>
            <img src={image} className={styles.image} alt={name} />
            <CardFooter name={name} price={price} />
        </div>
    );
}
