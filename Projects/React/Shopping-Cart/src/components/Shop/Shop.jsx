import { useEffect, useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import PageWrapper from "../Common/PageWrapper";
import { useProducts } from "../../hooks/useProducts.jsx";
import Status from "../Common/Status";
import ShopHeader from "./ShopHeader";
import NoResults from "./NoResults";
import CardWrapper from "./CardWrapper";
import Pagination from "../Common/Pagination";
import usePaginationManager from "../../hooks/usePageManager";
import Modal from "./Modal.jsx";

export default function Shop() {
    const { products, loading, error, fetchProducts } = useProducts();
    const [searchParams, setSearchParams] = useSearchParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeProduct, setActiveProduct] = useState(null);

    const searchQuery = searchParams.get("search") || "";

    useEffect(() => {
        fetchProducts();
    }, []);

    const filteredProducts = useMemo(() => {
        if (!searchQuery.trim()) return products;
        const query = searchQuery.toLowerCase().trim();
        return products.filter(
            (p) =>
                p.title?.toLowerCase().includes(query) ||
                p.category?.toLowerCase().includes(query) ||
                p.description?.toLowerCase().includes(query)
        );
    }, [products, searchQuery]);

    const {
        visibleProducts,
        currentPage,
        totalPages,
        showNext,
        showPrev,
        setPage,
    } = usePaginationManager({ products: filteredProducts, pageSize: 6 });

    function toggleModal(product) {
        if (isModalOpen) {
            setIsModalOpen(false);
            setActiveProduct(null);
        } else {
            setIsModalOpen(true);
            setActiveProduct(product);
        }
    }

    function handleSearchChange(e) {
        const val = e.target.value;
        if (val.trim()) {
            setSearchParams({ search: val.trim() });
        } else {
            setSearchParams({});
        }
    }

    function clearSearch() {
        setSearchParams({});
    }

    return (
        <PageWrapper>
            <ShopHeader
                searchQuery={searchQuery}
                resultsCount={filteredProducts.length}
                onSearchChange={handleSearchChange}
                onClearSearch={clearSearch}
            />

            <Status loading={loading} error={error} />

            {!loading && !error && filteredProducts.length === 0 && searchQuery && (
                <NoResults searchQuery={searchQuery} onClearSearch={clearSearch} />
            )}

            <CardWrapper products={visibleProducts} onCardClick={toggleModal} />

            {!loading && filteredProducts.length > 0 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    showPrev={showPrev}
                    showNext={showNext}
                    setPage={setPage}
                />
            )}

            {isModalOpen && (
                <Modal product={activeProduct} maxPurchase={10} toggleModal={toggleModal} />
            )}
        </PageWrapper>
    );
}
