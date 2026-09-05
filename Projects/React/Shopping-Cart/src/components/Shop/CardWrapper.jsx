import styles from "../../styles/Shop.module.css";
import Card from "./Card.jsx";

export default function CardWrapper({ products = [], onCardClick }) {
    return (
        <div className={styles.cardWrapper}>
            {products.map((product) => (
                <div
                    key={product.id}
                    onClick={() => onCardClick(product)}
                    style={{ display: "contents", cursor: "pointer" }}
                >
                    <Card
                        name={product.title}
                        price={product.price}
                        image={product.image}
                    />
                </div>
            ))}
        </div>
    );
}
