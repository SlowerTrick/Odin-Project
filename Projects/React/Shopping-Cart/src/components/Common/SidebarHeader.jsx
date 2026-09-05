import SidebarButton from "./SidebarButtom.jsx";
import styles from "../../styles/Sidebar.module.css";
import open from "../../assets/open-sidebar.svg";
import close from "../../assets/close-sidebar.svg";

export default function SidebarHeader({ isCollapsed, onToggle }) {
    return (
        <div className={styles.title}>
            <h1 className={styles.shopTitle}>Shop</h1>

            <SidebarButton 
                src={isCollapsed ? open : close}
                alt={isCollapsed ? "Open Sidebar" : "Close Sidebar"}
                onClick={onToggle}
            />
        </div>
    );
}
