import React, { useState } from 'react';
import HeroSection from '../ui/HeroSection';
import { motion } from 'framer-motion';
import { Search, FileText, Download, Filter } from 'lucide-react';

const InstitutionalLayout = ({ title, subtitle, authorities = [], documents = [], backgroundImage }) => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="bg-gray-50 pb-20">
            <HeroSection
                title={title}
                subtitle={subtitle}
                backgroundImage={backgroundImage || "https://placehold.co/1920x600/002855/white?text=Institucional"}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">

                {/* Authorities Grid */}
                {authorities.length > 0 && (
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold text-primary mb-8 text-center">Nuestras Autoridades</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {authorities.map((auth, index) => (
                                <motion.div
                                    key={auth.id}
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

                {/* Document Library (Example) */}
                <section className="bg-white rounded-2xl shadow-lg p-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                        <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                            <FileText className="w-6 h-6" />
                            Biblioteca de Documentos
                        </h2>

                        <div className="relative w-full md:w-96">
                            <input
                                type="text"
                                placeholder="Buscar documentos..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            />
                            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        {/* Mock Header */}
                        <div className="hidden md:grid grid-cols-12 gap-4 px-4 py-2 bg-gray-100 rounded-lg text-sm font-semibold text-gray-600">
                            <div className="col-span-6">Nombre del Documento</div>
                            <div className="col-span-3">Categoría</div>
                            <div className="col-span-2">Fecha</div>
                            <div className="col-span-1 text-center">Acción</div>
                        </div>

                        {/* Document Items Example */}
                        {[1, 2, 3].map((item) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                <div className="col-span-6 font-medium text-gray-800 flex items-center gap-3">
                                    <div className="p-2 bg-red-100 text-red-600 rounded-lg">
                                        <FileText className="w-5 h-5" />
                                    </div>
                                    <span>Estatuto AERI 2024.pdf</span>
                                </div>
                                <div className="col-span-3 text-sm text-gray-500">Legal</div>
                                <div className="col-span-2 text-sm text-gray-500">23/12/2023</div>
                                <div className="col-span-1 text-center">
                                    <button className="text-secondary hover:text-green-700 p-2 rounded-full hover:bg-green-50 transition-colors">
                                        <Download className="w-5 h-5" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default InstitutionalLayout;
