import { useDarkMode } from '../../hooks/useDarkMode.jsx';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import styles from '../../styles/ThemeToggle.module.css';

export default function ThemeToggle({ isCollapsed }) {
    const { theme, toggleTheme } = useDarkMode();

    return (
        <div
            className={`${styles.themeToggleContainer} ${isCollapsed ? styles.collapsed : ''}`}
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title="Toggle color theme"
        >
            <img src={theme === 'light' ? sun : moon} alt="Toggle Theme" />
        </div>
    );
}
