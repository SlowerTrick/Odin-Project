import { useState } from "react";

export default function usePageManager({ products = [], pageSize = 6 }) {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(products.length / pageSize) || 1;
    const start = Math.max((currentPage - 1) * pageSize, 0);
    const end = Math.min(currentPage * pageSize, products.length);

    const visibleProducts = products.slice(start, end);

    const showPrev = currentPage > 1;
    const showNext = currentPage < totalPages;

    function setPage(val) {
        setCurrentPage(val);
    }

    return {
        visibleProducts,
        currentPage,
        totalPages,
        showNext,
        showPrev,
        setPage,
    };
}
