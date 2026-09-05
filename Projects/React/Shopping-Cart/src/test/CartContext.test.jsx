import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { CartProvider, useCart } from "../context/CartContext";

function wrapper({ children }) {
    return <CartProvider>{children}</CartProvider>;
}

describe("CartContext", () => {
    const mockProduct1 = {
        id: 1,
        title: "Test Backpack",
        price: 25.0,
        image: "test1.jpg",
        category: "men's clothing",
    };

    const mockProduct2 = {
        id: 2,
        title: "Test Watch",
        price: 100.0,
        image: "test2.jpg",
        category: "jewelery",
    };

    it("starts with an empty cart and zero totals", () => {
        const { result } = renderHook(() => useCart(), { wrapper });

        expect(result.current.cartItems).toEqual([]);
        expect(result.current.totalItemsCount).toBe(0);
        expect(result.current.cartTotalPrice).toBe(0);
    });

    it("adds a new item to cart", () => {
        const { result } = renderHook(() => useCart(), { wrapper });

        act(() => {
            result.current.addToCart(mockProduct1, 2);
        });

        expect(result.current.cartItems.length).toBe(1);
        expect(result.current.cartItems[0].id).toBe(1);
        expect(result.current.cartItems[0].quantity).toBe(2);
        expect(result.current.totalItemsCount).toBe(2);
        expect(result.current.cartTotalPrice).toBe(50.0);
    });

    it("increments quantity when adding an existing item", () => {
        const { result } = renderHook(() => useCart(), { wrapper });

        act(() => {
            result.current.addToCart(mockProduct1, 1);
        });
        act(() => {
            result.current.addToCart(mockProduct1, 3);
        });

        expect(result.current.cartItems.length).toBe(1);
        expect(result.current.cartItems[0].quantity).toBe(4);
        expect(result.current.totalItemsCount).toBe(4);
        expect(result.current.cartTotalPrice).toBe(100.0);
    });

    it("updates item quantity correctly", () => {
        const { result } = renderHook(() => useCart(), { wrapper });

        act(() => {
            result.current.addToCart(mockProduct1, 2);
        });

        act(() => {
            result.current.updateQuantity(mockProduct1.id, 5);
        });

        expect(result.current.cartItems[0].quantity).toBe(5);
        expect(result.current.totalItemsCount).toBe(5);
        expect(result.current.cartTotalPrice).toBe(125.0);
    });

    it("removes item if quantity is set to 0 or less", () => {
        const { result } = renderHook(() => useCart(), { wrapper });

        act(() => {
            result.current.addToCart(mockProduct1, 2);
        });

        act(() => {
            result.current.updateQuantity(mockProduct1.id, 0);
        });

        expect(result.current.cartItems.length).toBe(0);
        expect(result.current.totalItemsCount).toBe(0);
    });

    it("removes a specific item from cart using removeFromCart", () => {
        const { result } = renderHook(() => useCart(), { wrapper });

        act(() => {
            result.current.addToCart(mockProduct1, 1);
            result.current.addToCart(mockProduct2, 2);
        });

        expect(result.current.cartItems.length).toBe(2);

        act(() => {
            result.current.removeFromCart(mockProduct1.id);
        });

        expect(result.current.cartItems.length).toBe(1);
        expect(result.current.cartItems[0].id).toBe(2);
        expect(result.current.totalItemsCount).toBe(2);
        expect(result.current.cartTotalPrice).toBe(200.0);
    });

    it("clears all items with clearCart", () => {
        const { result } = renderHook(() => useCart(), { wrapper });

        act(() => {
            result.current.addToCart(mockProduct1, 1);
            result.current.addToCart(mockProduct2, 3);
        });

        expect(result.current.cartItems.length).toBe(2);

        act(() => {
            result.current.clearCart();
        });

        expect(result.current.cartItems).toEqual([]);
        expect(result.current.totalItemsCount).toBe(0);
        expect(result.current.cartTotalPrice).toBe(0);
    });
});
