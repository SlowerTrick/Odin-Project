import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { MemoryRouter } from "react-router-dom";
import Navbar from '../components/Navbar.jsx'

describe('Navbar', () => {

    beforeEach(() => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );
    });

    it('Has at least 3 links', () => {
        const links = screen.getAllByRole('link');

        expect(links.length).toBeGreaterThanOrEqual(3);
    });

    it('Home link points to "/"', () => {
        const homeLink = screen.getByRole('link', { name: /home/i }); // Regex Expression

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
});
