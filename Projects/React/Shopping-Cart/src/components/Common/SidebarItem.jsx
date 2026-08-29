import styles from '../../styles/Sidebar.module.css';
import { NavLink } from 'react-router-dom';

export default function SidebarItem({ icon, text, to, isCollapsed }) {
    return (
        <NavLink 
            className={({ isActive }) => 
                isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
            }
            to={to}
        >
            <img src={icon} alt={`Ícone de ${text}`} /> 
            {!isCollapsed && <span>{text}</span>}
        </NavLink>
    );
}
