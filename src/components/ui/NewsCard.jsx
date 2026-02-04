
import React from 'react';
import { Calendar, ArrowRight, ImageOff } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NewsCard = ({ noticia }) => {
    // 1. Resolve attributes (Strapi v4 vs v5 vs Flat object)
    const attributes = noticia?.attributes || noticia;
    if (!attributes) return null;

    // 2. Normalize properties
    // Strapi: titulo, categoria, fecha, contenido, foto_backup_url
    // MockData: title, category, date, summary, image_url
    const title = attributes.titulo || attributes.title;
    const category = attributes.categoria || attributes.category;
    const date = attributes.fecha || attributes.date;
    const summary = attributes.contenido || attributes.summary;
    const imageSrc = attributes.foto_backup_url || attributes.image_url;
    const isExternal = attributes.isExternal;

    // 3. Helpers
    const formatDate = (dateString) => {
        if (!dateString) return null;
        return new Date(dateString).toLocaleDateString('es-ES', {
            day: '2-digit', month: '2-digit', year: 'numeric'
        });
    };

    const stripHtml = (html) => {
        if (!html) return "";
        const tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        const text = tmp.textContent || tmp.innerText || "";
        return text.length > 100 ? text.substring(0, 100) + "..." : text;
    };

    // 4. Link & Wrapper Logic
    const linkProps = isExternal
        ? { href: attributes.link, target: "_blank", rel: "noopener noreferrer" }
        : { to: `/noticias/${attributes.slug || '#'}` };

    // We use a simple div as wrapper for the card structure, 
    // and handle the link via the "Read More" button or wrapping the whole card if preferred.
    // The previous design wrapped the whole card. Let's stick to that.
    const Wrapper = isExternal ? 'a' : Link;

    return (
        <Wrapper
            {...linkProps}
            className="group block h-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col border border-[#004080]"
        >
            {/* Image Section */}
            <div className="h-48 overflow-hidden relative bg-gray-100 flex-shrink-0">
                {imageSrc ? (
                    <img
                        src={imageSrc}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop";
                        }}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <ImageOff className="w-12 h-12" />
                    </div>
                )}

                {category && (
                    <div className="absolute top-4 left-4 bg-[#023e73] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md z-10">
                        {category}
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow">
                {date && (
                    <div className="flex items-center text-gray-500 text-xs font-medium mb-3">
                        <Calendar className="w-4 h-4 mr-2 text-[#39c3ef]" />
                        {formatDate(date)}
                    </div>
                )}

                <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2 group-hover:text-[#39c3ef] transition-colors">
                    {title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                    {stripHtml(summary)}
                </p>

                <div className="mt-auto flex items-center text-[#39c3ef] font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    {isExternal ? 'Ir al sitio' : 'Leer más'} <ArrowRight className="w-4 h-4 ml-1" />
                </div>
            </div>
        </Wrapper>
    );
};

export default NewsCard;
