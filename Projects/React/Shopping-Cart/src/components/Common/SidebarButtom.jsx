import styles from '../../styles/Sidebar.module.css';

export default function SidebarButton({ src, alt, onClick, className = '' }) {
    return (
        <img 
            src={src} 
            alt={alt} 
            onClick={onClick}
            className={`${styles.collapseBtn} ${className}`} 
        />
    );
}
