import SidebarItem from './SidebarItem.jsx';
import ThemeToggle from './ThemeToggle.jsx';
import SidebarButton from './SidebarButtom.jsx';
import styles from '../../styles/Sidebar.module.css';

import house from '../../assets/house.svg';
import shoppingCart from '../../assets/shopping-cart.svg';
import store from '../../assets/store.svg';
import open from '../../assets/open-sidebar.svg'
import close from '../../assets/close-sidebar.svg'
import { useState } from 'react';

export default function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false)
 
    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const menuItems = [
        { icon: house, text: 'Home', to: '/' },
        { icon: shoppingCart, text: 'Shop', to: '/shop' },
        { icon: store, text: 'Cart', to: '/cart' },
    ];

    return (
        <div className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ''}`}>
            <div className={styles.title}>
                {!isCollapsed && <h1>Shop</h1>}

                <SidebarButton 
                    src={isCollapsed ? open : close}
                    alt={isCollapsed ? "Open Sidebar" : "Close Sidebar"}
                    onClick={toggleSidebar}
                />
            </div>

            {menuItems.map((item, index) => (
                <SidebarItem
                    key={index}
                    icon={item.icon}
                    text={item.text}
                    to={item.to} 
                    isCollapsed={isCollapsed}
                />
            ))}

            <ThemeToggle isCollapsed={isCollapsed} />
        </div>
    );
}
