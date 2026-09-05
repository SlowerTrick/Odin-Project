import { useState } from "react";
import styles from "../../styles/Shop.module.css";
import StarRating from "../Common/StarRating";
import ModalPrice from "./ModalPrice";
import ModalPurchase from "./ModalPurchase";
import { useCart } from "../../context/CartContext";

export default function Modal({ product, maxPurchase, toggleModal }) {
    const [quantity, setQuantity] = useState(1);
    const [isClosing, setIsClosing] = useState(false);
    const { addToCart } = useCart();
    const containerClass = isClosing
        ? `${styles.modalContainer} ${styles.closing}`
        : styles.modalContainer;

    function changeQuantity(val) {
        if (val === "") {
            setQuantity("");
            return;
        }

        const num = Number(val);
        if (isNaN(num)) return;

        if (num > maxPurchase) {
            setQuantity(maxPurchase);
        } else {
            setQuantity(num);
        }
    }

    function handleEmpty() {
        if (quantity === "" || quantity < 1) setQuantity(1);
    }

    function handleClose() {
        setIsClosing(true);
        setTimeout(() => {
            toggleModal();
        }, 200);
    }

    function handleAddToCart() {
        const qty = quantity === "" ? 1 : Number(quantity);
        addToCart(product, qty);
        handleClose();
    }

    return (
        <div className={styles.modalBackground} onClick={handleClose}>
            <div className={containerClass} onClick={(e) => e.stopPropagation()}>
                <img src={product.image} className={styles.modalImage} alt={product.name} />
                <div className={styles.modalInfo}>
                    <p className={styles.modalCategory}>{product.category}</p>
                    <h1 className={styles.modalTitle}>{product.title}</h1>
                    <StarRating totalStars={5} initialRating={product.rate} readOnly={true} />

                    <ModalPrice price={product.price} buyers={product.buyers} />

                    <div className={styles.modalDescription}>
                        <p>{product.description}</p>
                    </div>

                    <ModalPurchase
                        quantity={quantity}
                        maxPurchase={maxPurchase}
                        onChangeQuantity={changeQuantity}
                        onAddToCart={handleAddToCart}
                        onBlur={handleEmpty}
                    />
                </div>
            </div>
        </div>
    );
}
