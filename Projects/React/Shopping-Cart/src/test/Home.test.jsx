import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { CartProvider } from "../context/CartContext";
import Home from "../components/Home/Home";

describe("Home Component", () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <CartProvider>
                    <Home />
                </CartProvider>
            </MemoryRouter>
        );
    });

    it("renders the hero title and subtitle in English", () => {
        expect(
            screen.getByRole("heading", { name: /welcome to our online store/i })
        ).toBeInTheDocument();
        expect(
            screen.getByText(/discover our curated collection of premium products/i)
        ).toBeInTheDocument();
    });

    it("renders navigation call-to-actions pointing to shop and cart", () => {
        const shopLink = screen.getByRole("link", { name: /shop now/i });
        const cartLink = screen.getByRole("link", { name: /view cart/i });

        expect(shopLink).toHaveAttribute("href", "/shop");
        expect(cartLink).toHaveAttribute("href", "/cart");
    });

    it("renders key benefits pillars", () => {
        expect(screen.getByText(/fast delivery/i)).toBeInTheDocument();
        expect(screen.getByText(/quality guaranteed/i)).toBeInTheDocument();
        expect(screen.getByText(/dedicated support/i)).toBeInTheDocument();
    });

    it("renders the 4 category cards", () => {
        expect(screen.getByText("Electronics")).toBeInTheDocument();
        expect(screen.getByText("Jewelry")).toBeInTheDocument();
        expect(screen.getByText("Men's Clothing")).toBeInTheDocument();
        expect(screen.getByText("Women's Clothing")).toBeInTheDocument();
    });
});
