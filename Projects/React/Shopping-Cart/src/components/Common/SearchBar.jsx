import styles from "../../styles/Sidebar.module.css";

export default function SearchBar({
    value = "",
    onChange,
    onClear,
    placeholder = "Search products...",
    ariaLabel = "Search products",
    inputRef,
    className = "",
}) {
    return (
        <div className={`${styles.searchContainer} ${className}`}>
            <span className={styles.searchIcon} aria-hidden="true">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </span>
            <input
                ref={inputRef}
                type="text"
                placeholder={placeholder}
                aria-label={ariaLabel}
                value={value}
                onChange={onChange}
                className={styles.searchInput}
            />
            {value && (
                <button
                    type="button"
                    onClick={onClear}
                    className={styles.clearSearchBtn}
                    aria-label="Clear search"
                >
                    ✕
                </button>
            )}
        </div>
    );
}
