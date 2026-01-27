import React, { useState, useEffect } from 'react';
import NewsCard from '../components/ui/NewsCard';
import HeroSection from '../components/ui/HeroSection';
import { ImageOff, Loader2, Search, Filter, X } from 'lucide-react';

const NewsPage = () => {
    const [noticias, setNoticias] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    // Filter States
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('');
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');
    const [showFilters, setShowFilters] = useState(false);

    // Dynamic Categories
    const [categories, setCategories] = useState([]);

    const pageSize = 9;

    // 1. Fetch Dynamic Categories
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                // Determine if we need to access attributes or flat data
                const response = await fetch('http://localhost:1337/api/noticias?fields[0]=categoria&pagination[pageSize]=1000');
                if (response.ok) {
                    const json = await response.json();
                    const data = json.data || [];
                    const uniqueCats = [...new Set(data.map(item => {
                        const attrs = item.attributes || item;
                        return attrs?.categoria;
                    }).filter(Boolean))].sort();
                    setCategories(uniqueCats);
                }
            } catch (err) {
                console.error("Error loading categories:", err);
            }
        };
        fetchCategories();
    }, []);

    // 2. Main Fetch Logic (Server-Side)
    const fetchNews = async (pageNum, isAppending = false, currentFilters = {}) => {
        try {
            if (isAppending) setLoadingMore(true);
            else setLoading(true);

            // Construct Strapi Query
            const { search, cat, dFrom, dTo } = currentFilters;
            const baseUrl = `http://localhost:1337/api/noticias`;
            const params = new URLSearchParams();

            // Basics
            params.append('sort', 'fecha:desc');
            params.append('pagination[page]', pageNum);
            params.append('pagination[pageSize]', pageSize);
            params.append('populate', '*'); // CRITICAL: Ensure we get all fields/images

            // Filters
            if (search) params.append('filters[titulo][$containsi]', search);
            if (cat) params.append('filters[categoria][$eq]', cat);
            if (dFrom) params.append('filters[fecha][$gte]', dFrom);
            if (dTo) params.append('filters[fecha][$lte]', dTo);

            const response = await fetch(`${baseUrl}?${params.toString()}`);

            if (!response.ok) {
                throw new Error('Error al conectar con el servidor de noticias');
            }

            const json = await response.json();
            const newData = json.data || [];
            const meta = json.meta || {};

            if (isAppending) {
                setNoticias(prev => [...prev, ...newData]);
            } else {
                setNoticias(newData);
            }

            // Pagination Check
            if (meta.pagination) {
                setHasMore(meta.pagination.page < meta.pagination.pageCount);
            } else {
                setHasMore(newData.length === pageSize);
            }

        } catch (err) {
            console.error("Error fetching news:", err);
            setError(err);
        } finally {
            setLoading(false);
            setLoadingMore(false);
        }
    };

    // 3. Debounce Search Effect
    useEffect(() => {
        setPage(1);
        const timer = setTimeout(() => {
            fetchNews(1, false, { search: searchTerm, cat: category, dFrom: dateFrom, dTo: dateTo });
        }, 500);

        return () => clearTimeout(timer);
    }, [searchTerm, category, dateFrom, dateTo]);


    const handleLoadMore = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        fetchNews(nextPage, true, { search: searchTerm, cat: category, dFrom: dateFrom, dTo: dateTo });
    };

    const clearFilters = () => {
        setSearchTerm('');
        setCategory('');
        setDateFrom('');
        setDateTo('');
    };

    const hasActiveFilters = searchTerm || category || dateFrom || dateTo;

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            <HeroSection
                title="Novedades Gremiales"
                subtitle="Todas las noticias y actualizaciones de AERI en un solo lugar."
                backgroundImage="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2000&auto=format&fit=crop"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20">
                <div className="bg-white rounded-3xl p-8 shadow-xl min-h-[400px]">

                    {/* Search & Filter Bar */}
                    <div className="mb-10 space-y-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            {/* Search Input */}
                            <div className="relative flex-grow">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Search className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-secondary focus:ring-1 focus:ring-secondary sm:text-sm transition-shadow shadow-sm"
                                    placeholder="Buscar noticias..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>

                            {/* Filters Toggle (Mobile) or Category Desktop */}
                            <div className="flex gap-4">
                                <button
                                    onClick={() => setShowFilters(!showFilters)}
                                    className={`md:hidden flex items-center px-4 py-3 border rounded-xl font-medium transition-colors ${showFilters ? 'bg-secondary text-white border-secondary' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}
                                >
                                    <Filter className="w-5 h-5 mr-2" /> Filtros
                                </button>

                                <div className="hidden md:block min-w-[200px]">
                                    <select
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        className="block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm rounded-xl border bg-white shadow-sm"
                                    >
                                        <option value="">Todas las Categorías</option>
                                        {categories.map(c => (
                                            <option key={c} value={c}>{c}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Expanded Filters Area */}
                        {(showFilters || hasActiveFilters) && (
                            <div className={`p-6 bg-gray-50 rounded-2xl border border-gray-100 transition-all ${showFilters ? 'block' : 'hidden md:block'}`}>
                                <div className="flex flex-col md:flex-row gap-6 items-end">

                                    {/* Mobile/Extra Category */}
                                    <div className="w-full md:hidden">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Categoría</label>
                                        <select
                                            value={category}
                                            onChange={(e) => setCategory(e.target.value)}
                                            className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"
                                        >
                                            <option value="">Todas</option>
                                            {categories.map(c => (
                                                <option key={c} value={c}>{c}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Dates */}
                                    <div className="w-full md:w-auto">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Desde</label>
                                        <input
                                            type="date"
                                            value={dateFrom}
                                            onChange={(e) => setDateFrom(e.target.value)}
                                            className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"
                                        />
                                    </div>
                                    <div className="w-full md:w-auto">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Hasta</label>
                                        <input
                                            type="date"
                                            value={dateTo}
                                            onChange={(e) => setDateTo(e.target.value)}
                                            className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"
                                        />
                                    </div>

                                    {/* Clear Button */}
                                    {hasActiveFilters && (
                                        <button
                                            onClick={clearFilters}
                                            className="text-sm text-red-600 hover:text-red-800 font-medium flex items-center mb-2 md:mb-0"
                                        >
                                            <X className="w-4 h-4 mr-1" /> Limpiar filtros
                                        </button>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Results Grid */}
                    {loading && !loadingMore ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="bg-gray-100 rounded-2xl h-96 animate-pulse">
                                    <div className="h-48 bg-gray-200 rounded-t-2xl"></div>
                                    <div className="p-6 space-y-4">
                                        <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                                        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : error ? (
                        <div className="text-center py-20">
                            <h3 className="text-xl text-red-600 font-bold mb-2">Error al cargar noticias</h3>
                            <p className="text-gray-500">{error.message}</p>
                        </div>
                    ) : noticias.length === 0 ? (
                        <div className="text-center py-20 flex flex-col items-center">
                            <Search className="w-16 h-16 text-gray-300 mb-4" />
                            <h3 className="text-xl text-gray-400 font-bold">No se encontraron noticias con estos criterios.</h3>
                        </div>
                    ) : (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {noticias.map((item) => (
                                    <NewsCard key={item.id} noticia={item} />
                                ))}
                            </div>

                            {hasMore && (
                                <div className="mt-12 text-center">
                                    <button
                                        onClick={handleLoadMore}
                                        disabled={loadingMore}
                                        className="inline-flex items-center bg-[#023e73] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-[#002855] hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {loadingMore ? (
                                            <>
                                                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                                Cargando...
                                            </>
                                        ) : (
                                            'Cargar más noticias'
                                        )}
                                    </button>
                                </div>
                            )}
                        </>
                    )}

                </div>
            </div>
        </div>
    );
};

export default NewsPage;
