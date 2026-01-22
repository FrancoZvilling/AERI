
import React from 'react';
import { Calendar, ArrowRight, ImageOff } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NewsCard = ({ noticia }) => {
    // Strapi response structure handling:
    // v4 default: { id, attributes: { ... } }
    // v5/flattened: { id, titulo, ... }
    const attributes = noticia?.attributes || noticia;

    // Safety check if attributes is still undefined
    if (!attributes) return null;

    const { titulo, fecha, categoria, contenido, foto_backup_url } = attributes;

    // Helper to strip HTML tags and truncate text
    const stripHtml = (html) => {
        if (!html) return "";
        const tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        const text = tmp.textContent || tmp.innerText || "";
        return text.length > 100 ? text.substring(0, 100) + "..." : text;
    };

    // Helper to format date
    const formatDate = (dateString) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };

    // Placeholder image if foto_backup_url is missing
    const imageUrl = foto_backup_url || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop";

    return (
        <motion.article
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col h-full"
        >
            <div className="h-48 overflow-hidden relative bg-gray-100">
                {foto_backup_url ? (
                    <img
                        src={imageUrl}
                        alt={titulo}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop"; }} // Fallback on error
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <ImageOff className="w-12 h-12" />
                    </div>
                )}

                {categoria && (
                    <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                        {categoria}
                    </div>
                )}
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {formatDate(fecha)}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-secondary transition-colors cursor-pointer line-clamp-2">
                    {titulo}
                </h3>

                <p className="text-gray-600 mb-4 flex-grow text-sm leading-relaxed">
                    {stripHtml(contenido)}
                </p>

                <Link to={`/noticias/post/${noticia.id}`} className="text-secondary font-bold hover:text-green-700 transition-colors self-start mt-auto flex items-center">
                    Leer más <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
            </div>
        </motion.article>
    );
};

export default NewsCard;
