import styles from "../../styles/Cart.module.css";
import Item from "./Item.jsx";

export default function ItemWrapper({ products = [], onUpdateQuantity, onRemove }) {
    return (
        <div className={styles.itemListContainer}>
            {products.map((product) => (
                <div
                    key={product.id}
                    className={styles.itemWrapper}
                >
                    <Item
                        id={product.id}
                        name={product.title}
                        price={product.price}
                        image={product.image}
                        quantity={product.quantity}
                        category={product.category}
                        onUpdateQuantity={onUpdateQuantity}
                        onRemove={onRemove}
                    />
                </div>
            ))}
        </div>
    );
}

