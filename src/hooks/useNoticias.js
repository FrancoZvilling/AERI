import { useState, useEffect } from 'react';

export const useNoticias = (limit = 0) => {
    const [noticias, setNoticias] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNoticias = async () => {
            try {
                // Fetch to Strapi Local, sorting by date descending
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/noticias?sort=fecha:desc&populate=*`);

                if (!response.ok) {
                    throw new Error('Error al conectar con el servidor de noticias');
                }

                const json = await response.json();

                // Limit the results manually if limit is provided. 
                // If limit is 0 or null, we return all data.
                const data = json.data ? (limit ? json.data.slice(0, limit) : json.data) : [];

                setNoticias(data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching news:", err);
                setError(err);
                setLoading(false);
            }
        };

        fetchNoticias();
    }, [limit]);

    return { noticias, loading, error };
};
