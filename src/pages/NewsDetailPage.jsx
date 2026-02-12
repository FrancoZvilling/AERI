import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, ImageOff, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

const NewsDetailPage = () => {
    const { id } = useParams();
    const [noticia, setNoticia] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNoticia = async () => {
            try {
                // Strategy Change: Use 'find' endpoint with filter instead of 'findOne'
                // This avoids potential 404s if 'findOne' permissions aren't set or if ID routing behaves differently.
                // Strapi v4: /api/noticias?filters[id][$eq]=:id
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/noticias?filters[id][$eq]=${id}`);

                if (!response.ok) {
                    throw new Error('No se pudo cargar la noticia');
                }

                const json = await response.json();

                // The 'find' endpoint returns an array in 'data'. We take the first item.
                if (!json.data || json.data.length === 0) {
                    throw new Error('Noticia no encontrada');
                }

                setNoticia(json.data[0]);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching news detail:", err);
                setError(err);
                setLoading(false);
            }
        };

        if (id) {
            fetchNoticia();
        }
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (error || !noticia) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Noticia no encontrada</h2>
                <Link to="/noticias" className="text-primary hover:underline flex items-center">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Volver a Noticias
                </Link>
            </div>
        );
    }

    // Adapt to flat or nested structure
    const attributes = noticia.attributes || noticia;
    const { titulo, fecha, categoria, contenido, foto_backup_url } = attributes;

    const imageUrl = foto_backup_url || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2000&auto=format&fit=crop";

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-gray-50 min-h-screen pb-20 pt-24" // pt-24 to account for fixed navbar
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Breadcrumb / Back */}
                <Link to="/noticias" className="inline-flex items-center text-gray-500 hover:text-primary mb-6 transition-colors font-medium">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Volver a todas las noticias
                </Link>

                <article className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                    {/* Hero Image */}
                    <div className="relative h-64 md:h-96 w-full bg-gray-200">
                        {foto_backup_url ? (
                            <img
                                src={imageUrl}
                                alt={titulo}
                                className="w-full h-full object-cover"
                                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2000&auto=format&fit=crop"; }}
                            />
                        ) : (
                            <div className="flex items-center justify-center h-full">
                                <ImageOff className="w-16 h-16 text-gray-300" />
                            </div>
                        )}

                        {categoria && (
                            <div className="absolute top-6 left-6 bg-primary text-white text-sm font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-lg">
                                {categoria}
                            </div>
                        )}
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-12">
                        <header className="mb-8">
                            <div className="flex items-center justify-between text-gray-500 text-sm mb-4 border-b border-gray-100 pb-4">
                                <div className="flex items-center">
                                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                                    <span className="font-medium">
                                        {new Date(fecha).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
                                    </span>
                                </div>
                                <button className="flex items-center hover:text-primary transition-colors">
                                    <Share2 className="w-4 h-4 mr-1" /> Compartir
                                </button>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                                {titulo}
                            </h1>
                        </header>

                        <div
                            className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed"
                        >
                            {/* 
                                Handle both HTML content and Plain Text with newlines.
                                If the content doesn't look like HTML (no <p>, <br>, <div>, etc), 
                                we treat it as plain text and preserve line breaks.
                            */}
                            {/<[a-z][\s\S]*>/i.test(contenido) ? (
                                <div dangerouslySetInnerHTML={{ __html: contenido }} />
                            ) : (
                                <p style={{ whiteSpace: 'pre-line' }}>{contenido}</p>
                            )}
                        </div>
                    </div>
                </article>
            </div>
        </motion.div>
    );
};

export default NewsDetailPage;
