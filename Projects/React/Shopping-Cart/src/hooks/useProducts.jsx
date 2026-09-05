import { useState } from "react"

const URL = 'https://fakestoreapi.com/products'

export function useProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchProducts() {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(URL);
            if(!response.ok) {
                throw new Error(`Error while loading products (status ${response.status})`);
            }
            const rawData = await response.json();

            const parsedProducts = rawData.map((item) => {
                return {
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    image: item.image,
                    category: item.category,
                    description: item.description,
                    rate: item.rating.rate,
                    buyers: item.rating.count
                };
            });
            setProducts(parsedProducts);
        }
        catch(error) {
            setProducts([]);
            setError(error.message || 'Error while loading products');
        }
        finally {
            setLoading(false);
        }
    }

    return { products, loading, error, fetchProducts }
}
