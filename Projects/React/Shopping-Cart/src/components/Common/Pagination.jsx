import styles from "../../styles/Shop.module.css";

export default function Pagination({currentPage, totalPages, showPrev, showNext, setPage}) {
    return (
        <div className={styles.paginationWrapper}>
            {showPrev && (
                <button 
                    className="btn btnSecondary" 
                    onClick={() => setPage(currentPage - 1)}
                >
                    Prev
                </button>
            )}

            {[...Array(totalPages)].map((_, i) => {
                const pageNumber = i + 1;
                const isActive = currentPage === pageNumber;
                return (
                    <button 
                        className={`btn ${isActive ? 'btnPrimary' : 'btnSecondary'}`} 
                        key={pageNumber} 
                        onClick={() => setPage(pageNumber)}
                    >
                        {pageNumber}
                    </button>
                );
            })}

            {showNext && (
                <button 
                    className="btn btnSecondary" 
                    onClick={() => setPage(currentPage + 1)}
                >
                    Next
                </button>
            )}
        </div>
    );
}

