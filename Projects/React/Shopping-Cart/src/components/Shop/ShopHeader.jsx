import SearchBar from "../Common/SearchBar.jsx";
import styles from "../../styles/Shop.module.css";

export default function ShopHeader({
    searchQuery = "",
    resultsCount = 0,
    onSearchChange,
    onClearSearch,
}) {
    return (
        <div className={styles.headerRow}>
            <div>
                <h1 className={styles.shopHeading}>Shop</h1>
                <p className={styles.shopSubheading}>
                    {searchQuery ? (
                        <>
                            Results for "<strong>{searchQuery}</strong>" (
                            {resultsCount}{" "}
                            {resultsCount === 1 ? "product" : "products"} found)
                            <button
                                type="button"
                                onClick={onClearSearch}
                                className={styles.clearFilterBtn}
                            >
                                Clear filter
                            </button>
                        </>
                    ) : (
                        "Explore our collection of products"
                    )}
                </p>
            </div>

            <div className={styles.shopSearchWrapper}>
                <SearchBar
                    value={searchQuery}
                    onChange={onSearchChange}
                    onClear={onClearSearch}
                    placeholder="Search products in shop..."
                    ariaLabel="Search products in shop"
                />
            </div>
        </div>
    );
}
