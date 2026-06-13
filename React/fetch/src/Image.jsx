import { useState, useEffect } from "react";

const useImageURL = () => {
    const [imageURL, setImageURL] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await fetch("https://picsum.photos/v2/list");

                if (!response.ok) {
                    throw new Error("Server error");
                }

                const data = await response.json();

                setImageURL(data[0].download_url);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchImage();
    }, []);

    return { imageURL, error, loading };
};

const Image = () => {
    const { imageURL, error, loading } = useImageURL();

    if (loading) return <p>Loading...</p>;

    if (error) {
        return <p>A network error was encountered: {error}</p>;
    }

    return (
        <>
            <h1>An image</h1>
            <img
                src={imageURL}
                alt="placeholder"
                width="300"
            />
        </>
    );
};

export default Image;
