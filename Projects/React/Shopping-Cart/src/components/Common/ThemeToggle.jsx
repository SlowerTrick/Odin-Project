import { useDarkMode } from '../../hooks/useDarkMode.js';
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import styles from '../../styles/ThemeToggle.module.css';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useDarkMode();

    return (
        <div className={styles.themeToggleContainer} onClick={toggleTheme}>
            <img src={ theme === 'light' ? sun : moon} alt="Toggle Theme" />
        </div>
    )
}