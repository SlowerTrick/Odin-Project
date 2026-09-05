import { useState } from "react";
import PageWrapper from "../Common/PageWrapper";
import { useCart } from "../../context/CartContext";
import Pagination from "../Common/Pagination";
import ItemWrapper from "./ItemWrapper";
import CartHeader from "./CartHeader";
import OrderSummary from "./OrderSummary";
import EmptyCart from "./EmptyCart";
import OrderSuccess from "./OrderSuccess";
import usePaginationManager from "../../hooks/usePageManager";
import styles from "../../styles/Cart.module.css";

export default function Cart() {
    const {
        cartItems,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItemsCount,
        cartTotalPrice,
    } = useCart();

    const [orderCompleted, setOrderCompleted] = useState(false);

    const {
        visibleProducts,
        currentPage,
        totalPages,
        showNext,
        showPrev,
        setPage,
    } = usePaginationManager({ products: cartItems, pageSize: 4 });

    function handleCheckout() {
        setOrderCompleted(true);
        clearCart();
    }

    if (orderCompleted) {
        return (
            <PageWrapper>
                <OrderSuccess onContinueShopping={() => setOrderCompleted(false)} />
            </PageWrapper>
        );
    }

    if (cartItems.length === 0) {
        return (
            <PageWrapper>
                <EmptyCart />
            </PageWrapper>
        );
    }

    return (
        <PageWrapper>
            <div className={styles.cartPage}>
                <CartHeader
                    totalItemsCount={totalItemsCount}
                    onClearCart={clearCart}
                />

                <div className={styles.cartGrid}>
                    <div className={styles.itemsColumn}>
                        <ItemWrapper
                            products={visibleProducts}
                            onUpdateQuantity={updateQuantity}
                            onRemove={removeFromCart}
                        />

                        {totalPages > 1 && (
                            <div className={styles.paginationArea}>
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    showPrev={showPrev}
                                    showNext={showNext}
                                    setPage={setPage}
                                />
                            </div>
                        )}
                    </div>

                    <OrderSummary
                        totalItemsCount={totalItemsCount}
                        cartTotalPrice={cartTotalPrice}
                        onCheckout={handleCheckout}
                    />
                </div>
            </div>
        </PageWrapper>
    );
}
