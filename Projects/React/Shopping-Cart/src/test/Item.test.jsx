import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Item from "../components/Cart/Item";

describe("Cart Item Component", () => {
    const defaultProps = {
        id: 1,
        name: "Casual Cotton T-Shirt",
        price: 20.0,
        image: "https://via.placeholder.com/150",
        quantity: 2,
        category: "men's clothing",
        onUpdateQuantity: vi.fn(),
        onRemove: vi.fn(),
    };

    it("renders item information correctly", () => {
        render(<Item {...defaultProps} />);

        expect(screen.getByText("Casual Cotton T-Shirt")).toBeInTheDocument();
        expect(screen.getByText("men's clothing")).toBeInTheDocument();
        expect(screen.getByText("$20.00")).toBeInTheDocument();
        expect(screen.getByDisplayValue("2")).toBeInTheDocument();
        expect(screen.getByText("$40.00")).toBeInTheDocument();
    });

    it("calls onUpdateQuantity when increment button is clicked", async () => {
        const user = userEvent.setup();
        const onUpdateQuantity = vi.fn();
        render(<Item {...defaultProps} onUpdateQuantity={onUpdateQuantity} />);

        const incBtn = screen.getByRole("button", { name: /increase quantity/i });
        await user.click(incBtn);

        expect(onUpdateQuantity).toHaveBeenCalledWith(1, 3);
    });

    it("calls onUpdateQuantity when decrement button is clicked", async () => {
        const user = userEvent.setup();
        const onUpdateQuantity = vi.fn();
        render(<Item {...defaultProps} quantity={3} onUpdateQuantity={onUpdateQuantity} />);

        const decBtn = screen.getByRole("button", { name: /decrease quantity/i });
        await user.click(decBtn);

        expect(onUpdateQuantity).toHaveBeenCalledWith(1, 2);
    });

    it("disables decrement button when quantity is 1", () => {
        render(<Item {...defaultProps} quantity={1} />);

        const decBtn = screen.getByRole("button", { name: /decrease quantity/i });
        expect(decBtn).toBeDisabled();
    });

    it("calls onRemove when remove button is clicked", async () => {
        const user = userEvent.setup();
        const onRemove = vi.fn();
        render(<Item {...defaultProps} onRemove={onRemove} />);

        const removeBtn = screen.getByRole("button", { name: /remove casual cotton t-shirt/i });
        await user.click(removeBtn);

        expect(onRemove).toHaveBeenCalledWith(1);
    });
});
