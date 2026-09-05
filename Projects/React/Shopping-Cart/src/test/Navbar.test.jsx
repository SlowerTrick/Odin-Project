import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from "react-router-dom";
import Sidebar from '../components/Common/Sidebar.jsx';
import { CartProvider } from '../context/CartContext.jsx';

describe('Sidebar Navigation and Search', () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <CartProvider>
                    <Sidebar />
                </CartProvider>
            </MemoryRouter>
        );
    });

    it('Has at least 3 links', () => {
        const links = screen.getAllByRole('link');
        expect(links.length).toBeGreaterThanOrEqual(3);
    });

    it('Home link points to "/"', () => {
        const homeLink = screen.getByRole('link', { name: /home/i });
        expect(homeLink).toHaveAttribute('href', '/');
    });

    it('Shop link points to "/shop"', () => {
        const shopLink = screen.getByRole('link', { name: /shop/i });
        expect(shopLink).toHaveAttribute('href', '/shop');
    });

    it('Cart link points to "/cart"', () => {
        const cartLink = screen.getByRole('link', { name: /cart/i });
        expect(cartLink).toHaveAttribute('href', '/cart');
    });

    it('renders global product search bar input', () => {
        const searchInput = screen.getByPlaceholderText(/search products\.\.\./i);
        expect(searchInput).toBeInTheDocument();
    });

    it('allows user to type into search bar', async () => {
        const user = userEvent.setup();
        const searchInput = screen.getByPlaceholderText(/search products\.\.\./i);

        await user.type(searchInput, 'jacket');
        expect(searchInput).toHaveValue('jacket');

        const clearBtn = screen.getByRole('button', { name: /clear search/i });
        expect(clearBtn).toBeInTheDocument();

        await user.click(clearBtn);
        expect(searchInput).toHaveValue('');
    });
});
