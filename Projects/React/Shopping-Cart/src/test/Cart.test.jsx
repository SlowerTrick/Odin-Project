import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { CartProvider, useCart } from "../context/CartContext";
import Cart from "../components/Cart/Cart";
import { useEffect } from "react";

// Helper component that pre-populates cart with test items
function CartWithItems({ items }) {
    const { addToCart } = useCart();

    useEffect(() => {
        items.forEach((item) => {
            addToCart(item, item.quantity || 1);
        });
    }, []);

    return <Cart />;
}

describe("Cart Component", () => {
    it("renders empty cart state when no items exist", () => {
        render(
            <MemoryRouter>
                <CartProvider>
                    <Cart />
                </CartProvider>
            </MemoryRouter>
        );

        expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
        expect(
            screen.getByRole("link", { name: /explore products/i })
        ).toHaveAttribute("href", "/shop");
    });

    it("renders cart items and order summary correctly", () => {
        const testItems = [
            {
                id: 1,
                title: "Leather Jacket",
                price: 50.0,
                image: "jacket.jpg",
                category: "men's clothing",
                quantity: 2,
            },
        ];

        render(
            <MemoryRouter>
                <CartProvider>
                    <CartWithItems items={testItems} />
                </CartProvider>
            </MemoryRouter>
        );

        expect(screen.getByText("Leather Jacket")).toBeInTheDocument();
        expect(screen.getByText(/order summary/i)).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /checkout/i })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /clear cart/i })).toBeInTheDocument();
    });

    it("clears cart when 'Clear Cart' button is clicked", async () => {
        const user = userEvent.setup();
        const testItems = [
            {
                id: 1,
                title: "Wireless Headphones",
                price: 80.0,
                image: "headphones.jpg",
                category: "electronics",
                quantity: 1,
            },
        ];

        render(
            <MemoryRouter>
                <CartProvider>
                    <CartWithItems items={testItems} />
                </CartProvider>
            </MemoryRouter>
        );

        expect(screen.getByText("Wireless Headphones")).toBeInTheDocument();

        const clearBtn = screen.getByRole("button", { name: /clear cart/i });
        await user.click(clearBtn);

        expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
    });

    it("completes checkout when 'Checkout' button is clicked", async () => {
        const user = userEvent.setup();
        const testItems = [
            {
                id: 1,
                title: "Silver Ring",
                price: 30.0,
                image: "ring.jpg",
                category: "jewelery",
                quantity: 1,
            },
        ];

        render(
            <MemoryRouter>
                <CartProvider>
                    <CartWithItems items={testItems} />
                </CartProvider>
            </MemoryRouter>
        );

        const checkoutBtn = screen.getByRole("button", { name: /checkout/i });
        await user.click(checkoutBtn);

        expect(screen.getByText(/order placed successfully!/i)).toBeInTheDocument();
        expect(
            screen.getByRole("link", { name: /continue shopping/i })
        ).toHaveAttribute("href", "/shop");
    });
});
