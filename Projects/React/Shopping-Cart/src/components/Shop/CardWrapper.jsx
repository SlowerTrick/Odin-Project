import styles from "../../styles/Shop.module.css";
import Card from "./Card.jsx";

export default function CardWrapper({ products = [] }) {
    return (
        <div className={styles.cardWrapper}>
            {products.map((product) => (
                <Card
                    key={product.id}
                    name={product.title}
                    price={product.price}
                    image={product.image}
                />
            ))}
        </div>
    );
}
