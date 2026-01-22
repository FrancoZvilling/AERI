import React, { useState, useEffect } from 'react';
import HeroSection from '../ui/HeroSection';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, FileText, Download, Filter, FolderOpen, Loader2, ArrowUp, ArrowDown } from 'lucide-react';

const InstitutionalLayout = ({ title, subtitle, authorities = [], showDocs = false, backgroundImage }) => {
    // UI State
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'desc' }); // Default sort

    // Data State
    const [documents, setDocuments] = useState([]);
    const [categories, setCategories] = useState([]); // Dynamic categories
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch Documents Logic
    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                setLoading(true);
                const response = await fetch('http://localhost:1337/api/documentos?populate=*');
                if (!response.ok) throw new Error('Error al cargar documentos');

                const json = await response.json();
                const fetchedDocs = json.data || [];

                // Process documents to flat structure for easier usage
                const processedDocs = fetchedDocs.map(doc => {
                    // Robust extraction: handle both v4 nested attributes and v5/flattened
                    const attrs = doc.attributes || doc;

                    // Safe access to nested relations
                    const catData = attrs.categoria?.data?.attributes || attrs.categoria;
                    const fileData = attrs.archivo?.data?.attributes || attrs.archivo;

                    return {
                        id: doc.id,
                        title: attrs.titulo || 'Sin título',
                        // Handle date: prefer 'fecha_publicacion' as seen in user data
                        date: attrs.fecha_publicacion || attrs.fecha || attrs.publishedAt || new Date().toISOString(),
                        category: catData?.nombre || 'General',
                        // Prepend URL only if it's a relative path
                        url: fileData?.url ? (fileData.url.startsWith('http') ? fileData.url : `http://localhost:1337${fileData.url}`) : '#'
                    };
                });

                setDocuments(processedDocs);

                // Extract Dynamic Categories
                const uniqueCats = [...new Set(processedDocs.map(d => d.category))].sort();
                setCategories(uniqueCats);

            } catch (err) {
                console.error("Error fetching documents:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchDocuments();
    }, []);

    // Handling Sort
    const requestSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    // Filter AND Sort Logic
    const processedDocuments = documents
        .filter(doc => {
            const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory ? doc.category === selectedCategory : true;
            return matchesSearch && matchesCategory;
        })
        .sort((a, b) => {
            if (sortConfig.key === 'date') {
                // Date sort (always tricky)
                const dateA = new Date(a.date);
                const dateB = new Date(b.date);
                return sortConfig.direction === 'asc' ? dateA - dateB : dateB - dateA;
            } else {
                // String sort (title, category)
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'asc' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'asc' ? 1 : -1;
                }
                return 0;
            }
        });

    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('es-AR', { year: 'numeric', month: '2-digit', day: '2-digit' });
    };

    // Helper for Sort Icon
    const SortIcon = ({ columnKey }) => {
        if (sortConfig.key !== columnKey) return <span className="w-4 h-4 inline-block ml-1 opacity-0 group-hover:opacity-30">↕</span>;
        return sortConfig.direction === 'asc'
            ? <ArrowUp className="w-4 h-4 inline-block ml-1 text-secondary" />
            : <ArrowDown className="w-4 h-4 inline-block ml-1 text-secondary" />;
    };

    return (
        <div className="bg-gray-50 pb-20">
            <HeroSection
                title={title}
                subtitle={subtitle}
                backgroundImage={backgroundImage || "https://placehold.co/1920x600/002855/white?text=Institucional"}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">

                {/* Authorities Grid (Legacy/Optional support) */}
                {authorities && authorities.length > 0 && (
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold text-primary mb-8 text-center">Nuestras Autoridades</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {authorities.map((auth, index) => (
                                <motion.div
                                    key={auth.id || index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow text-center group"
                                >
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={auth.image}
                                            alt={auth.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-1">{auth.name}</h3>
                                        <p className="text-secondary font-medium">{auth.role}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Document Library Section */}
                <section className="bg-white rounded-2xl shadow-lg p-6 md:p-10 border border-gray-100">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-6">
                        <div>
                            <h2 className="text-3xl font-bold text-primary flex items-center gap-3 mb-2">
                                <div className="p-2 bg-blue-50 rounded-lg">
                                    <FolderOpen className="w-8 h-8 text-secondary" />
                                </div>
                                Biblioteca Digital
                            </h2>
                            <p className="text-gray-500">Documentación oficial, convenios y resoluciones disponibles para descarga.</p>
                        </div>

                        <div className="relative w-full lg:w-96">
                            <input
                                type="text"
                                placeholder="Buscar documentos..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 border border-gray-200 bg-gray-50 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all shadow-sm"
                            />
                            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-3.5" />
                        </div>
                    </div>

                    {/* Dynamic Filters */}
                    {categories.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-8">
                            <button
                                onClick={() => setSelectedCategory(null)}
                                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${selectedCategory === null
                                        ? 'bg-secondary text-white shadow-md'
                                        : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                                    }`}
                            >
                                Todos
                            </button>
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${selectedCategory === cat
                                            ? 'bg-secondary text-white shadow-md'
                                            : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Table Header */}
                    <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50/80 rounded-t-xl border-b border-gray-200 text-sm font-bold text-gray-600 uppercase tracking-wider select-none">
                        <div
                            className="col-span-6 cursor-pointer hover:text-secondary group flex items-center"
                            onClick={() => requestSort('title')}
                        >
                            Nombre del Documento <SortIcon columnKey="title" />
                        </div>
                        <div
                            className="col-span-3 cursor-pointer hover:text-secondary group flex items-center"
                            onClick={() => requestSort('category')}
                        >
                            Categoría <SortIcon columnKey="category" />
                        </div>
                        <div
                            className="col-span-2 cursor-pointer hover:text-secondary group flex items-center"
                            onClick={() => requestSort('date')}
                        >
                            Fecha <SortIcon columnKey="date" />
                        </div>
                        <div className="col-span-1 text-center">Acción</div>
                    </div>

                    {/* Document List */}
                    <div className="space-y-2 md:space-y-0 text-left">
                        {loading ? (
                            <div className="p-20 text-center flex flex-col items-center justify-center space-y-4">
                                <Loader2 className="w-10 h-10 text-secondary animate-spin" />
                                <p className="text-gray-500 font-medium">Cargando biblioteca...</p>
                            </div>
                        ) : error ? (
                            <div className="p-10 text-center bg-red-50 rounded-xl text-red-600">
                                <p>No se pudieron cargar los documentos.</p>
                            </div>
                        ) : processedDocuments.length === 0 ? (
                            <div className="p-16 text-center text-gray-400 bg-gray-50 rounded-b-xl border border-dashed border-gray-200">
                                <FileText className="w-12 h-12 mx-auto mb-3 opacity-20" />
                                <p>No se encontraron documentos con esos criterios.</p>
                            </div>
                        ) : (
                            processedDocuments.map((doc, idx) => (
                                <motion.div
                                    key={doc.id}
                                    layout // This props makes reordering animated!
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-4 md:px-6 md:py-5 border-b border-gray-100 last:border-0 hover:bg-blue-50/50 transition-colors group text-left"
                                >
                                    <div className="col-span-6 font-medium text-gray-800 flex items-center gap-4">
                                        <div className="p-2.5 bg-red-50 text-red-500 rounded-lg group-hover:bg-red-100 transition-colors">
                                            <FileText className="w-5 h-5" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-base group-hover:text-primary transition-colors">{doc.title}</span>
                                            {/* Mobile only Meta */}
                                            <div className="md:hidden flex items-center gap-2 mt-1 text-xs text-gray-400">
                                                <span className="bg-gray-100 px-2 py-0.5 rounded">{doc.category}</span>
                                                <span>•</span>
                                                <span>{formatDate(doc.date)}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden md:block col-span-3">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200">
                                            {doc.category}
                                        </span>
                                    </div>
                                    <div className="hidden md:block col-span-2 text-sm text-gray-500 font-medium">
                                        {formatDate(doc.date)}
                                    </div>
                                    <div className="col-span-1 flex justify-center mt-2 md:mt-0">
                                        <a
                                            href={doc.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-secondary transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5 flex items-center justify-center w-10 h-10 border border-gray-200 hover:border-transparent"
                                            title="Descargar PDF"
                                        >
                                            <Download className="w-5 h-5" />
                                        </a>
                                    </div>
                                </motion.div>
                            ))
                        )}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default InstitutionalLayout;
