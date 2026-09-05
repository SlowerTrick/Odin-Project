import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import SidebarItem from './SidebarItem.jsx';
import ThemeToggle from './ThemeToggle.jsx';
import SidebarHeader from './SidebarHeader.jsx';
import SidebarSearch from './SidebarSearch.jsx';
import styles from '../../styles/Sidebar.module.css';

import house from '../../assets/house.svg';
import shoppingCart from '../../assets/shopping-cart.svg';
import store from '../../assets/store.svg';
import { useCart } from '../../context/CartContext.jsx';

export default function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const { totalItemsCount } = useCart();
    const [searchParams] = useSearchParams();
    const location = useLocation();
    const navigate = useNavigate();
    const searchInputRef = useRef(null);

    const initialSearch = location.pathname === "/shop" ? (searchParams.get("search") || "") : "";
    const [searchTerm, setSearchTerm] = useState(initialSearch);

    useEffect(() => {
        if (location.pathname === "/shop") {
            setSearchTerm(searchParams.get("search") || "");
        } else {
            setSearchTerm("");
        }
    }, [location.pathname, searchParams]);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (value.trim()) {
            navigate(`/shop?search=${encodeURIComponent(value.trim())}`);
        } else if (location.pathname === "/shop") {
            navigate("/shop");
        }
    };

    const handleClearSearch = () => {
        setSearchTerm("");
        if (location.pathname === "/shop") {
            navigate("/shop");
        }
    };

    const handleCollapsedSearchClick = () => {
        setIsCollapsed(false);
        setTimeout(() => {
            searchInputRef.current?.focus();
        }, 100);
    };

    const menuItems = [
        { icon: house, text: 'Home', to: '/' },
        { icon: store, text: 'Shop', to: '/shop' },
        {
            icon: shoppingCart,
            text: 'Cart',
            to: '/cart',
            badge: totalItemsCount > 0 ? totalItemsCount : null,
        },
    ];

    return (
        <div className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ''}`}>
            <SidebarHeader isCollapsed={isCollapsed} onToggle={toggleSidebar} />

            <SidebarSearch
                isCollapsed={isCollapsed}
                searchTerm={searchTerm}
                searchInputRef={searchInputRef}
                onSearchChange={handleSearchChange}
                onClearSearch={handleClearSearch}
                onCollapsedClick={handleCollapsedSearchClick}
            />

            {menuItems.map((item, index) => (
                <SidebarItem
                    key={index}
                    icon={item.icon}
                    text={item.text}
                    to={item.to}
                    badge={item.badge}
                    isCollapsed={isCollapsed}
                />
            ))}

            <ThemeToggle isCollapsed={isCollapsed} />
        </div>
    );
}
