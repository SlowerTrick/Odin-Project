import styles from "../../styles/Shop.module.css";

export default function NoResults({ searchQuery, onClearSearch }) {
    return (
        <div className={styles.noResultsBox}>
            <p>No products found matching "{searchQuery}".</p>
            <button
                type="button"
                onClick={onClearSearch}
                className="btn btnPrimary"
                style={{ marginTop: "var(--size-3)" }}
            >
                View all products
            </button>
        </div>
    );
}
