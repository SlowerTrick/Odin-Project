import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { CartProvider } from "../context/CartContext";
import Shop from "../components/Shop/Shop";
import * as useProductsModule from "../hooks/useProducts";

describe("Shop Component", () => {
    const mockProducts = [
        {
            id: 1,
            title: "Classic Backpack",
            price: 49.99,
            image: "backpack.jpg",
            category: "men's clothing",
            description: "Durable backpack",
            rate: 4.5,
            buyers: 120,
        },
        {
            id: 2,
            title: "Silver Ring",
            price: 99.0,
            image: "ring.jpg",
            category: "jewelery",
            description: "Elegant silver ring",
            rate: 4.8,
            buyers: 80,
        },
    ];

    it("renders shop header matching the cart title style", () => {
        vi.spyOn(useProductsModule, "useProducts").mockReturnValue({
            products: [],
            loading: false,
            error: null,
            fetchProducts: vi.fn(),
        });

        render(
            <MemoryRouter>
                <CartProvider>
                    <Shop />
                </CartProvider>
            </MemoryRouter>
        );

        expect(screen.getByRole("heading", { name: "Shop" })).toBeInTheDocument();
        expect(
            screen.getByText(/explore our collection of products/i)
        ).toBeInTheDocument();
    });

    it("renders loading status when products are fetching", () => {
        vi.spyOn(useProductsModule, "useProducts").mockReturnValue({
            products: [],
            loading: true,
            error: null,
            fetchProducts: vi.fn(),
        });

        render(
            <MemoryRouter>
                <CartProvider>
                    <Shop />
                </CartProvider>
            </MemoryRouter>
        );

        expect(screen.getByText(/loading\.\.\./i)).toBeInTheDocument();
    });

    it("renders product cards when products are loaded", () => {
        vi.spyOn(useProductsModule, "useProducts").mockReturnValue({
            products: mockProducts,
            loading: false,
            error: null,
            fetchProducts: vi.fn(),
        });

        render(
            <MemoryRouter>
                <CartProvider>
                    <Shop />
                </CartProvider>
            </MemoryRouter>
        );

        expect(screen.getByText("Classic Backpack")).toBeInTheDocument();
        expect(screen.getByText("Silver Ring")).toBeInTheDocument();
    });

    it("filters products based on search query parameter", () => {
        vi.spyOn(useProductsModule, "useProducts").mockReturnValue({
            products: mockProducts,
            loading: false,
            error: null,
            fetchProducts: vi.fn(),
        });

        render(
            <MemoryRouter initialEntries={["/shop?search=backpack"]}>
                <CartProvider>
                    <Shop />
                </CartProvider>
            </MemoryRouter>
        );

        expect(screen.getByText("Classic Backpack")).toBeInTheDocument();
        expect(screen.queryByText("Silver Ring")).not.toBeInTheDocument();
        expect(screen.getByText(/results for/i)).toBeInTheDocument();
    });

    it("displays empty results message when no products match search query", () => {
        vi.spyOn(useProductsModule, "useProducts").mockReturnValue({
            products: mockProducts,
            loading: false,
            error: null,
            fetchProducts: vi.fn(),
        });

        render(
            <MemoryRouter initialEntries={["/shop?search=nonexistentitem"]}>
                <CartProvider>
                    <Shop />
                </CartProvider>
            </MemoryRouter>
        );

        expect(
            screen.getByText(/no products found matching "nonexistentitem"/i)
        ).toBeInTheDocument();
    });

    it("allows user to type into the shop search bar and clear it", async () => {
        const user = userEvent.setup();
        vi.spyOn(useProductsModule, "useProducts").mockReturnValue({
            products: mockProducts,
            loading: false,
            error: null,
            fetchProducts: vi.fn(),
        });

        render(
            <MemoryRouter initialEntries={["/shop"]}>
                <CartProvider>
                    <Shop />
                </CartProvider>
            </MemoryRouter>
        );

        const shopInput = screen.getByPlaceholderText(/search products in shop\.\.\./i);
        expect(shopInput).toBeInTheDocument();

        await user.type(shopInput, "ring");
        expect(shopInput).toHaveValue("ring");

        const clearBtn = screen.getByRole("button", { name: /clear search/i });
        await user.click(clearBtn);
        expect(shopInput).toHaveValue("");
    });
});
