import { useEffect } from "react";
import PageWrapper from "../Common/PageWrapper";
import { useProducts } from "../../hooks/useProducts";
import Status from "../Common/Status";
import Title from "../Common/Title";
import CardWrapper from "./CardWrapper";
import Pagination from "../Common/Pagination";
import usePageManager from "../../hooks/usePageManager";

export default function Shop() {
    const { products, loading, error, fetchProducts } = useProducts();

    useEffect(() => {
        fetchProducts();
    }, []);

    const {
        visibleProducts,
        currentPage,
        totalPages,
        showNext,
        showPrev,
        setPage,
    } = usePageManager({ products, pageSize: 6 });

    return (
        <PageWrapper>
            <Title text="Shop Page" />
            <Status loading={loading} error={error} />

            <CardWrapper products={visibleProducts} />

            {!loading && <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                showPrev={showPrev}
                showNext={showNext}
                setPage={setPage}
            />}
        </PageWrapper>
    );
}
