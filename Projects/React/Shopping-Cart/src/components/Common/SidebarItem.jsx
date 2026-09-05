import styles from '../../styles/Sidebar.module.css';
import { NavLink } from 'react-router-dom';

export default function SidebarItem({ icon, text, to, isCollapsed, badge }) {
    return (
        <NavLink 
            className={({ isActive }) =>
                isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
            }
            to={to}
        >
            <div className={styles.iconContainer}>
                <img src={icon} alt={`${text} icon`} />
                {isCollapsed && badge && (
                    <span className={styles.badgeCollapsed}>{badge}</span>
                )}
            </div>

            <span className={styles.navText}>{text}</span>

            {!isCollapsed && badge && (
                <span className={styles.badgeExpanded}>{badge}</span>
            )}
        </NavLink>
    );
}
