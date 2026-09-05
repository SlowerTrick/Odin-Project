import SearchBar from "./SearchBar.jsx";
import styles from "../../styles/Sidebar.module.css";

export default function SidebarSearch({
    isCollapsed,
    searchTerm,
    searchInputRef,
    onSearchChange,
    onClearSearch,
    onCollapsedClick,
}) {
    return (
        <div className={styles.searchWrapper}>
            {!isCollapsed ? (
                <SearchBar
                    inputRef={searchInputRef}
                    value={searchTerm}
                    onChange={onSearchChange}
                    onClear={onClearSearch}
                    placeholder="Search products..."
                    ariaLabel="Search products"
                />
            ) : (
                <button
                    type="button"
                    onClick={onCollapsedClick}
                    className={styles.collapsedSearchBtn}
                    title="Search products"
                    aria-label="Open search bar"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
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
                </button>
            )}
        </div>
    );
}
