import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    function addToCart(product, quantity) {
        if (!quantity || quantity < 1) return;

        setCartItems((prevItems) => {
            const existingIndex = prevItems.findIndex((item) => item.id === product.id);

            if (existingIndex > -1) {
                const updated = [...prevItems];
                updated[existingIndex] = {
                    ...updated[existingIndex],
                    quantity: updated[existingIndex].quantity + Number(quantity),
                };
                return updated;
            }

            return [...prevItems, { ...product, quantity: Number(quantity) }];
        });
    }

    function removeFromCart(productId) {
        setCartItems((prev) => prev.filter((item) => item.id !== productId));
    }

    function updateQuantity(productId, newQuantity) {
        if (newQuantity <= 0) {
            removeFromCart(productId);
            return;
        }
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === productId ? { ...item, quantity: newQuantity } : item
            )
        );
    }

    function clearCart() {
        setCartItems([]);
    }

    const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    const cartTotalPrice = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                totalItemsCount,
                cartTotalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart needs to be inside of CartProvider");
    }
    return context;
}
