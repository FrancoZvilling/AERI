import { useState, useEffect } from 'react';

export const useNoticias = (limit = 0, category = null) => {
    const [noticias, setNoticias] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNoticias = async () => {
            try {
                const baseUrl = `${import.meta.env.VITE_API_URL}/api/noticias`;
                const params = new URLSearchParams();

                params.append('sort', 'createdAt:desc');
                params.append('populate', '*');

                if (limit > 0) {
                    params.append('pagination[limit]', limit);
                }

                if (category) {
                    params.append('filters[categoria][nombre][$eq]', category);
                }

                const response = await fetch(`${baseUrl}?${params.toString()}`);

                if (!response.ok) {
                    throw new Error('Error al conectar con el servidor de noticias');
                }

                const json = await response.json();

                // Fallback slice in case the API limit param was ignored by an older Strapi setup
                const data = json.data ? (limit > 0 ? json.data.slice(0, limit) : json.data) : [];

                setNoticias(data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching news:", err);
                setError(err);
                setLoading(false);
            }
        };

        fetchNoticias();
    }, [limit, category]);

    return { noticias, loading, error };
};
